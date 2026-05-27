import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { allQuestions, getQuestionsForExam } from '../data/index.js'
import { EXAM_TYPES, EXAM_CONFIG, CATEGORIES, CATEGORY_LABELS } from '../data/examConfig.js'
import { prepareQuestions } from '../utils/shuffleOptions.js'

/**
 * SM-2 Spaced Repetition Algorithm (simplified)
 *
 * Each card has: { interval, repetitions, easeFactor, nextReview }
 *
 * On correct:
 *   rep=0 → interval=1d
 *   rep=1 → interval=6d
 *   rep≥2 → interval = prev_interval * ease_factor
 *   ease_factor += 0.1 (max 2.5)
 *
 * On incorrect:
 *   interval=0, repetitions=0, ease_factor -= 0.2 (min 1.3)
 */
function sm2(card, correct) {
  let { interval, repetitions, easeFactor } = card

  if (correct) {
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 6
    } else {
      interval = Math.round(interval * easeFactor)
    }
    repetitions += 1
    easeFactor = Math.min(2.5, easeFactor + 0.1)
  } else {
    interval = 0
    repetitions = 0
    easeFactor = Math.max(1.3, easeFactor - 0.2)
  }

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000

  return { interval, repetitions, easeFactor, nextReview }
}

const initialCardProgress = () => ({
  interval: 0,
  repetitions: 0,
  easeFactor: 2.5,
  nextReview: 0,
  totalAttempts: 0,
  correctAttempts: 0,
})

function getTopicsForExamHelper(examType) {
  const pool = getQuestionsForExam(examType)
  const topics = new Set()
  pool.forEach((q) => {
    if (q.category && q.topic) {
      topics.add(`${q.category}:${q.topic}`)
    }
  })
  return Array.from(topics)
}

const useStore = create(
  persist(
    (set, get) => ({
      // ─── Questions (loaded from embedded data) ───
      questions: allQuestions,
      questionsLoaded: true,

      // ─── Card Progress ───
      cardProgress: {},

      // ─── Navigation ───
      currentView: 'dashboard',

      // ─── Exam Type Selection ───
      selectedExamType: EXAM_TYPES.SEE_MOTOR,

      // ─── Selected Topics for learning ───
      selectedTopics: getTopicsForExamHelper(EXAM_TYPES.SEE_MOTOR),
      learningMode: 'due',

      // ─── Exam State ───
      examState: null,

      // ─── Exam History ───
      examHistory: [],

      // ─── Sidebar State ───
      sidebarCollapsed: false,
      mobileSidebarOpen: false,

      // ─── Actions ───
      setView: (view) => set({ currentView: view }),
      setSelectedExamType: (type) => {
        const topics = getTopicsForExamHelper(type)
        set({
          selectedExamType: type,
          selectedTopics: topics,
          learningMode: 'due'
        })
      },
      setSelectedTopics: (topics) => set({ selectedTopics: topics }),
      initializeTopics: () => {
        const { selectedExamType, selectedTopics } = get()
        const allTopics = getTopicsForExamHelper(selectedExamType)
        const isValid = selectedTopics && selectedTopics.length > 0 && selectedTopics.every(t => allTopics.includes(t))
        if (!isValid) {
          set({ selectedTopics: allTopics })
        }
      },
      setLearningMode: (mode) => set({ learningMode: mode }),
      prepareExam: (type) => set({ selectedExamType: type, examState: null, currentView: 'exam' }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),

      initProgress: () => {
        const progress = { ...get().cardProgress }
        let changed = false
        allQuestions.forEach((q) => {
          if (!progress[q.id]) {
            progress[q.id] = initialCardProgress()
            changed = true
          }
        })
        if (changed) set({ cardProgress: progress })
      },

      // ─── Learning Actions ───
      answerCard: (questionId, correct) => {
        const progress = { ...get().cardProgress }
        const card = progress[questionId] || initialCardProgress()
        const updated = sm2(card, correct)
        progress[questionId] = {
          ...updated,
          totalAttempts: (card.totalAttempts || 0) + 1,
          correctAttempts: (card.correctAttempts || 0) + (correct ? 1 : 0),
        }
        set({ cardProgress: progress })
      },

      /**
       * Get due cards filtered by selected exam type and topics
       */
      getDueCards: () => {
        const { cardProgress, selectedExamType, selectedTopics } = get()
        const examQuestions = getQuestionsForExam(selectedExamType)
        const topics = selectedTopics || []
        const filtered = examQuestions.filter((q) => topics.includes(`${q.category}:${q.topic}`))
        const now = Date.now()
        return filtered.filter((q) => {
          const p = cardProgress[q.id]
          if (!p) return true
          return p.nextReview <= now
        })
      },

      /**
       * Query cards dynamically for a study session based on topics and mode
       */
      getStudyCards: () => {
        const { cardProgress, selectedExamType, selectedTopics, learningMode } = get()
        let pool = getQuestionsForExam(selectedExamType)
        const topics = selectedTopics || []
        pool = pool.filter((q) => topics.includes(`${q.category}:${q.topic}`))

        const now = Date.now()

        switch (learningMode) {
          case 'due':
            return pool.filter((q) => {
              const p = cardProgress[q.id]
              if (!p || p.repetitions === 0) return true
              return p.nextReview <= now
            })
          case 'new':
            return pool.filter((q) => {
              const p = cardProgress[q.id]
              return !p || p.repetitions === 0
            })
          case 'difficult':
            return pool.filter((q) => {
              const p = cardProgress[q.id]
              if (!p || p.totalAttempts === 0) return false
              return (p.correctAttempts / p.totalAttempts) < 0.7
            })
          case 'all':
          default:
            return pool
        }
      },

      /**
       * Get all unique topic strings active in the current category/exam
       */
      getTopicsForCategory: (examType, category) => {
        let pool = getQuestionsForExam(examType)
        if (category !== 'all') {
          pool = pool.filter((q) => q.category === category)
        }
        const topics = new Set()
        pool.forEach((q) => {
          if (q.topic) topics.add(q.topic)
        })
        return Array.from(topics)
      },

      getCardStatus: (questionId) => {
        const p = get().cardProgress[questionId]
        if (!p || p.repetitions === 0) return 'new'
        if (p.interval >= 6) return 'mastered'
        return 'learning'
      },

      getStats: () => {
        const { cardProgress, selectedExamType } = get()
        const examQuestions = getQuestionsForExam(selectedExamType)
        let newCount = 0, learningCount = 0, masteredCount = 0
        examQuestions.forEach((q) => {
          const p = cardProgress[q.id]
          if (!p || p.repetitions === 0) newCount++
          else if (p.interval >= 6) masteredCount++
          else learningCount++
        })
        return { newCount, learningCount, masteredCount, total: examQuestions.length }
      },

      getGlobalStats: () => {
        const { cardProgress, questions } = get()
        let newCount = 0, learningCount = 0, masteredCount = 0
        questions.forEach((q) => {
          const p = cardProgress[q.id]
          if (!p || p.repetitions === 0) newCount++
          else if (p.interval >= 6) masteredCount++
          else learningCount++
        })
        return { newCount, learningCount, masteredCount, total: questions.length }
      },

      /**
       * Get stats broken down by category for the selected exam type
       */
      getCategoryStats: () => {
        const { cardProgress, selectedExamType } = get()
        const examQuestions = getQuestionsForExam(selectedExamType)
        const catStats = {}
        examQuestions.forEach((q) => {
          if (!catStats[q.category]) {
            catStats[q.category] = { total: 0, new: 0, learning: 0, mastered: 0 }
          }
          catStats[q.category].total++
          const p = cardProgress[q.id]
          if (!p || p.repetitions === 0) catStats[q.category].new++
          else if (p.interval >= 6) catStats[q.category].mastered++
          else catStats[q.category].learning++
        })
        return catStats
      },

      getGlobalCategoryStats: () => {
        const { cardProgress, questions } = get()
        const catStats = {}
        questions.forEach((q) => {
          if (!catStats[q.category]) {
            catStats[q.category] = { total: 0, new: 0, learning: 0, mastered: 0 }
          }
          catStats[q.category].total++
          const p = cardProgress[q.id]
          if (!p || p.repetitions === 0) catStats[q.category].new++
          else if (p.interval >= 6) catStats[q.category].mastered++
          else catStats[q.category].learning++
        })
        return catStats
      },

      // ─── Exam Actions ───
      startExam: () => {
        const { selectedExamType } = get()
        const config = EXAM_CONFIG[selectedExamType]
        const examQuestions = getQuestionsForExam(selectedExamType)
        const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

        let selectedQuestions = []
        let navQuestions = []

        // Select questions per section according to official distribution
        for (const section of config.sections) {
          const pool = examQuestions.filter((q) => q.category === section.category)
          if (section.category === CATEGORIES.NAVIGATION_SEE) {
            // Select exactly 1 random Navigation Task (out of 15) and get its 9 sequential questions in order
            const taskNum = Math.floor(Math.random() * 15) + 1
            const taskPrefix = `N-${taskNum.toString().padStart(2, '0')}-`
            const taskQuestions = pool.filter((q) => q.id.startsWith(taskPrefix))
            
            // Ensure they are ordered 1 to 9 based on their ID
            taskQuestions.sort((a, b) => {
              const numA = parseInt(a.id.split('-')[2], 10)
              const numB = parseInt(b.id.split('-')[2], 10)
              return numA - numB
            })
            navQuestions = taskQuestions
          } else {
            const selected = shuffle(pool).slice(0, Math.min(section.examCount, pool.length))
            selectedQuestions.push(...selected)
          }
        }

        // Shuffle non-navigation questions
        selectedQuestions = shuffle(selectedQuestions)

        // Append the sequential navigation questions at the end of the exam
        selectedQuestions.push(...navQuestions)

        // Build sections info for result evaluation
        const sectionInfo = config.sections.map((s) => ({
          category: s.category,
          label: CATEGORY_LABELS[s.category],
          examCount: s.examCount,
          passMin: s.passMin,
        }))

        // Shuffle answer options so students can't memorize position
        const preparedQuestions = prepareQuestions(selectedQuestions)

        set({
          examState: {
            examType: selectedExamType,
            questions: preparedQuestions,
            answers: {},
            startTime: Date.now(),
            duration: config.duration * 60 * 1000,
            submitted: false,
            sectionInfo,
          },
          currentView: 'exam',
        })
      },

      setExamAnswer: (questionId, answerIndex) => {
        const exam = get().examState
        if (!exam || exam.submitted) return
        set({
          examState: {
            ...exam,
            answers: { ...exam.answers, [questionId]: answerIndex },
          },
        })
      },

      submitExam: () => {
        const exam = get().examState
        if (!exam) return
        const config = EXAM_CONFIG[exam.examType]

        // Evaluate per section
        const sectionResults = exam.sectionInfo.map((section) => {
          const sectionQuestions = exam.questions.filter((q) => q.category === section.category)
          let correct = 0
          sectionQuestions.forEach((q) => {
            if (exam.answers[q.id] === q.correctIndex) correct++
          })
          return {
            ...section,
            correct,
            total: sectionQuestions.length,
            passed: correct >= section.passMin,
          }
        })

        const totalCorrect = sectionResults.reduce((sum, s) => sum + s.correct, 0)
        const totalQuestions = exam.questions.length
        const allSectionsPassed = sectionResults.every((s) => s.passed)

        const result = {
          id: Date.now(),
          date: new Date().toISOString(),
          examType: exam.examType,
          examLabel: config.label,
          totalQuestions,
          correctAnswers: totalCorrect,
          passed: allSectionsPassed,
          sectionResults,
          questions: exam.questions.map((q) => ({
            id: q.id,
            question: q.question,
            category: q.category,
            selectedAnswer: exam.answers[q.id] ?? null,
            correctIndex: q.correctIndex,
            isCorrect: exam.answers[q.id] === q.correctIndex,
            image: q.image,
            explanation: q.solutionExplanation || null,
          })),
        }

        set({
          examState: { ...exam, submitted: true },
          examHistory: [result, ...get().examHistory],
          currentView: 'examResult',
        })
      },

      resetProgress: () => {
        set({ cardProgress: {}, examHistory: [] })
      },
    }),
    {
      name: 'sbf-lernen-store',
      version: 2,
      partialize: (state) => ({
        cardProgress: state.cardProgress,
        examHistory: state.examHistory,
        selectedExamType: state.selectedExamType,
        selectedTopics: state.selectedTopics,
      }),
    }
  )
)

export default useStore
