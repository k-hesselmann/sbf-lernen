import { useState, useMemo, useCallback, useEffect } from 'react'
import { Check, X, ArrowRight, RotateCcw, Sparkles, Layers, AlertCircle, Filter, ChevronLeft, SlidersHorizontal, Compass, GraduationCap } from 'lucide-react'
import useStore from '../store/useStore'
import { CATEGORY_LABELS, CATEGORY_COLORS, getCategoriesForExam, EXAM_CONFIG, TOPIC_LABELS } from '../data/examConfig.js'
import { getQuestionsForExam } from '../data/index.js'
import { prepareQuestion } from '../utils/shuffleOptions.js'

export default function LearnMode() {
  const answerCard = useStore((s) => s.answerCard)
  const selectedExamType = useStore((s) => s.selectedExamType)
  const learningCategory = useStore((s) => s.learningCategory)
  const setLearningCategory = useStore((s) => s.setLearningCategory)
  const learningTopic = useStore((s) => s.learningTopic)
  const setLearningTopic = useStore((s) => s.setLearningTopic)
  const learningMode = useStore((s) => s.learningMode)
  const setLearningMode = useStore((s) => s.setLearningMode)
  const cardProgress = useStore((s) => s.cardProgress)
  const setView = useStore((s) => s.setView)

  const [isSessionActive, setIsSessionActive] = useState(false)
  const [sessionCards, setSessionCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 })
  const [answersHistory, setAnswersHistory] = useState({})

  // Local state for study options & autoplay timer
  const [shuffleSession, setShuffleSession] = useState(false)
  const [autoplayActive, setAutoplayActive] = useState(true)
  const [autoplayPaused, setAutoplayPaused] = useState(false)
  const [autoplayProgress, setAutoplayProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState('next')
  const [autoplaySuspended, setAutoplaySuspended] = useState(false)

  const config = useMemo(() => EXAM_CONFIG[selectedExamType], [selectedExamType])
  const availableCategories = useMemo(() => getCategoriesForExam(selectedExamType), [selectedExamType])

  // Get active topics for the selected license & category filter
  const availableTopics = useMemo(() => {
    return useStore.getState().getTopicsForCategory(selectedExamType, learningCategory)
  }, [selectedExamType, learningCategory])

  // Reset session state when license type changes
  useEffect(() => {
    setIsSessionActive(false)
  }, [selectedExamType])

  // Dynamic question count for topic filter
  const getTopicQuestionCount = useCallback((topic) => {
    let pool = getQuestionsForExam(selectedExamType)
    if (learningCategory !== 'all') {
      pool = pool.filter((q) => q.category === learningCategory)
    }
    if (topic !== 'all') {
      pool = pool.filter((q) => q.topic === topic)
    }
    return pool.length
  }, [selectedExamType, learningCategory])

  // Dynamic question counts per study mode
  const getModeCount = useCallback((mode) => {
    const { cardProgress } = useStore.getState()
    let pool = getQuestionsForExam(selectedExamType)
    if (learningCategory !== 'all') {
      pool = pool.filter((q) => q.category === learningCategory)
    }
    if (learningTopic !== 'all') {
      pool = pool.filter((q) => q.topic === learningTopic)
    }
    const now = Date.now()

    if (mode === 'due') {
      return pool.filter((q) => {
        const p = cardProgress[q.id]
        return !p || p.repetitions === 0 || p.nextReview <= now
      }).length
    } else if (mode === 'new') {
      return pool.filter((q) => {
        const p = cardProgress[q.id]
        return !p || p.repetitions === 0
      }).length
    } else if (mode === 'difficult') {
      return pool.filter((q) => {
        const p = cardProgress[q.id]
        return p && p.totalAttempts > 0 && (p.correctAttempts / p.totalAttempts) < 0.7
      }).length
    } else {
      return pool.length
    }
  }, [selectedExamType, learningCategory, learningTopic, cardProgress])

  // Launch a new session with current config
  const handleStartSession = useCallback(() => {
    const cards = useStore.getState().getStudyCards()
    let prepared = cards.map(c => prepareQuestion(c))
    if (shuffleSession) {
      prepared = [...prepared].sort(() => Math.random() - 0.5)
    }
    setSessionCards(prepared)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setSessionStats({ correct: 0, incorrect: 0 })
    setAnswersHistory({})
    setAutoplaySuspended(false)
    setIsTransitioning(false)
    setTransitionDirection('next')
    setIsSessionActive(true)
  }, [shuffleSession])

  const currentCard = sessionCards[currentIndex]

  const handleAnswer = useCallback((answerIndex) => {
    if (showResult || !currentCard) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    setAutoplayPaused(false) // Reset pause state when answering

    setAnswersHistory((prev) => ({
      ...prev,
      [currentCard.id]: answerIndex
    }))

    const correct = answerIndex === currentCard.correctIndex
    answerCard(currentCard.id, correct)

    setSessionStats((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1),
    }))
  }, [showResult, currentCard, answerCard])

  const executeNext = useCallback(() => {
    const nextIndex = currentIndex + 1
    setCurrentIndex(nextIndex)
    const nextCard = sessionCards[nextIndex]
    if (nextCard && answersHistory[nextCard.id] !== undefined) {
      setSelectedAnswer(answersHistory[nextCard.id])
      setShowResult(true)
    } else {
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }, [currentIndex, sessionCards, answersHistory])

  const executePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setAutoplaySuspended(true)
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      const prevCard = sessionCards[prevIndex]
      if (prevCard) {
        setSelectedAnswer(answersHistory[prevCard.id] ?? null)
        setShowResult(answersHistory[prevCard.id] !== undefined)
      }
    }
  }, [currentIndex, sessionCards, answersHistory])

  const executeSkip = useCallback(() => {
    executeNext()
  }, [executeNext])

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTransitionDirection('next')
    setTimeout(() => {
      executeNext()
      setIsTransitioning(false)
    }, 200)
  }, [isTransitioning, executeNext])

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTransitionDirection('prev')
    setTimeout(() => {
      executePrevious()
      setIsTransitioning(false)
    }, 200)
  }, [isTransitioning, executePrevious])

  const handleSkip = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTransitionDirection('next')
    setTimeout(() => {
      executeSkip()
      setIsTransitioning(false)
    }, 200)
  }, [isTransitioning, executeSkip])

  const handleRestart = useCallback(() => {
    const cards = useStore.getState().getStudyCards()
    let prepared = cards.map(c => prepareQuestion(c))
    if (shuffleSession) {
      prepared = [...prepared].sort(() => Math.random() - 0.5)
    }
    setSessionCards(prepared)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setSessionStats({ correct: 0, incorrect: 0 })
    setAnswersHistory({})
    setAutoplaySuspended(false)
    setIsTransitioning(false)
    setTransitionDirection('next')
    setIsSessionActive(true)
  }, [shuffleSession])

  // Reset autoplay progress when card changes
  useEffect(() => {
    setAutoplayProgress(0)
    setAutoplayPaused(false) // Reset pause state to prevent stuck hover states
  }, [currentIndex])

  // Reset autoplay suspension state when landing on an unanswered card (displaying "Überspringen")
  useEffect(() => {
    if (currentCard && answersHistory[currentCard.id] === undefined) {
      setAutoplaySuspended(false)
    }
  }, [currentIndex, currentCard, answersHistory])

  // Autoplay countdown timer
  useEffect(() => {
    if (!showResult || !autoplayActive || autoplaySuspended || autoplayPaused) return

    const intervalTime = 30
    const totalTime = 3000
    const step = (intervalTime / totalTime) * 100

    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          handleNext()
          return 100
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [showResult, autoplayActive, autoplaySuspended, autoplayPaused, handleNext])

  // ────────────────────────────────────────────────────────────────────────
  // UI Rendering
  // ────────────────────────────────────────────────────────────────────────

  // 1. Session settings screen
  if (!isSessionActive) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
        {/* Back Button */}
        <div>
          <button
            onClick={() => setView('dashboard')}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors text-xs font-semibold cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Zurück zum Lern-Cockpit
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-lg shadow-ocean-500/20 flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Lernen: {config.label}</h2>
              <p className="text-slate-400 mt-0.5 text-sm">Konfiguriere deine Lernsession und lerne mit System</p>
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="glass-light rounded-2xl p-6 space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {/* Category Tabs */}
          <div>
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5 block">Kategorie</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLearningCategory('all')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all
                  ${learningCategory === 'all' ? 'bg-ocean-500/20 text-ocean-300 border border-ocean-500/30' : 'text-slate-400 hover:bg-white/5 border border-transparent'}`}
              >
                <Filter className="w-3.5 h-3.5" /> Alle
              </button>
              {availableCategories.map((cat) => {
                const colors = CATEGORY_COLORS[cat] || {}
                return (
                  <button
                    key={cat}
                    onClick={() => setLearningCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all
                      ${learningCategory === cat ? `${colors.bg} ${colors.text} border ${colors.border}` : 'text-slate-400 hover:bg-white/5 border border-transparent'}`}
                  >
                    {CATEGORY_LABELS[cat]}
                  </button>
                )
              })}
            </div>
          </div>

          {learningCategory === 'navigation_see' && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                Kartenarbeit & Navigationsbesteck benötigt
              </div>
              <p className="leading-relaxed text-slate-300">
                Die Navigationsaufgaben entsprechen den 15 offiziellen Prüfungsaufgaben. Da Messungen und Zeichnungen direkt auf dem Bildschirm ungenau und unskaliert sind, wird dringend empfohlen, die Aufgaben auf der gedruckten **Übungskarte D49** mit einem **Zirkel** und **Kursdreiecken** zu bearbeiten. Du kannst die offiziellen Seekarten-Ausschnitte (PDF) direkt hier öffnen.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/Seekarte_D49_Aufgaben_SBF_SEE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold underline flex items-center gap-1 text-[11px]"
                >
                  📂 Seekarten-Ausschnitte D49 (PDF)
                </a>
              </div>
            </div>
          )}

          {/* Topics Dropdown */}
          <div>
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2 block">Themenbereich (Subkategorie)</label>
            <select
              value={learningTopic}
              onChange={(e) => setLearningTopic(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200
                focus:outline-none focus:border-ocean-500/50 transition-colors cursor-pointer"
            >
              <option value="all">Alle Themen ({getTopicQuestionCount('all')} Fragen)</option>
              {availableTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {TOPIC_LABELS[topic] || topic.replace(/_/g, ' ')} ({getTopicQuestionCount(topic)} Fragen)
                </option>
              ))}
            </select>
          </div>

          {/* Study Mode Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-bold block">Lern-Modus</label>
              <div className="flex items-center gap-2.5">
                {/* Shuffle Option */}
                <button
                  onClick={() => setShuffleSession(!shuffleSession)}
                  className={`text-xs transition-all duration-200 cursor-pointer select-none
                    ${shuffleSession ? 'text-white font-semibold' : 'text-slate-500 hover:text-slate-300 font-medium'}`}
                >
                  Shuffle
                </button>
                
                <span className="text-slate-700 text-xs select-none">|</span>

                {/* Autoplay Option */}
                <button
                  onClick={() => setAutoplayActive(!autoplayActive)}
                  className={`text-xs transition-all duration-200 cursor-pointer select-none
                    ${autoplayActive ? 'text-white font-semibold' : 'text-slate-500 hover:text-slate-300 font-medium'}`}
                >
                  Autoplay
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: 'due',
                  label: 'Spaced Repetition',
                  desc: 'Wiederhole nur fällige und neue Fragen nach Zeitplan.',
                  icon: '📅',
                  count: getModeCount('due'),
                  activeClass: 'border-ocean-500/40 bg-ocean-500/10 text-ocean-300'
                },
                {
                  id: 'all',
                  label: 'Vollständiges Lernen',
                  desc: 'Lerne alle Fragen des gewählten Filters der Reihe nach.',
                  icon: '📖',
                  count: getModeCount('all'),
                  activeClass: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300'
                },
                {
                  id: 'new',
                  label: 'Nur neue Fragen',
                  desc: 'Lerne gezielt Fragen, die du noch nie beantwortet hast.',
                  icon: '🆕',
                  count: getModeCount('new'),
                  activeClass: 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                },
                {
                  id: 'difficult',
                  label: 'Schwierige Fragen',
                  desc: 'Fehlerschwerpunkte gezielt trainieren (Erfolgsquote < 70%).',
                  icon: '❌',
                  count: getModeCount('difficult'),
                  activeClass: 'border-rose-500/40 bg-rose-500/10 text-rose-300'
                }
              ].map((m) => {
                const isActive = learningMode === m.id
                return (
                  <button
                    key={m.id}
                    onClick={() => setLearningMode(m.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 card-hover flex items-start gap-3.5
                      ${isActive ? m.activeClass + ' shadow-lg border-opacity-100' : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/10'}`}
                  >
                    <span className="text-2xl mt-0.5">{m.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs sm:text-sm text-white">{m.label}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/10 text-white' : 'bg-slate-950 text-slate-400'}`}>
                          {m.count}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Start Session Button */}
          <div className="pt-2">
            <button
              onClick={handleStartSession}
              disabled={getModeCount(learningMode) === 0}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white
                bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500
                transition-all duration-200 shadow-lg shadow-ocean-500/20 disabled:opacity-50 disabled:cursor-not-allowed
                disabled:from-slate-800 disabled:to-slate-800 disabled:shadow-none"
            >
              Session starten ({getModeCount(learningMode)} Fragen)
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 2. Session Complete Screen
  if (sessionCards.length === 0 || currentIndex >= sessionCards.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in-up">
        <div className="glass-light rounded-3xl p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Session abgeschlossen!
          </h2>
          <p className="text-slate-400 mb-6">
            Du hast {sessionStats.correct + sessionStats.incorrect} Fragen in dieser Session beantwortet.
          </p>

          {sessionStats.correct + sessionStats.incorrect > 0 && (
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">{sessionStats.correct}</p>
                <p className="text-xs text-slate-400 mt-1">Richtig</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-rose-400">{sessionStats.incorrect}</p>
                <p className="text-xs text-slate-400 mt-1">Falsch</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRestart}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ocean-500 hover:bg-ocean-600
                text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-ocean-500/20"
            >
              <RotateCcw className="w-4 h-4" />
              Nochmal üben (gleiche Filter)
            </button>
            <button
              onClick={() => setIsSessionActive(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10
                text-slate-300 font-semibold text-sm transition-all duration-200 border border-white/5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Einstellungen anpassen
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 3. Question Card Review Flow
  const getStatus = (qId) => {
    const p = cardProgress[qId]
    if (!p || p.repetitions === 0) return 'new'
    if (p.interval >= 6) return 'mastered'
    return 'learning'
  }

  const status = getStatus(currentCard.id)
  const navTaskIdMatch = currentCard?.id?.match(/^N-(\d+)-\d+$/)
  const navTaskPage = navTaskIdMatch ? parseInt(navTaskIdMatch[1], 10) : 1
  const statusConfig = {
    new: { label: 'Neu', color: 'bg-ocean-500/20 text-ocean-400', icon: Layers },
    learning: { label: 'Lernen', color: 'bg-amber-500/20 text-amber-400', icon: RotateCcw },
    mastered: { label: 'Gemeistert', color: 'bg-emerald-500/20 text-emerald-400', icon: Check },
  }[status]

  const catColors = CATEGORY_COLORS[currentCard.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Active Session Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <button
          onClick={() => setIsSessionActive(false)}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm font-semibold"
        >
          <ChevronLeft className="w-4 h-4" />
          Session beenden
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">{currentIndex + 1} / {sessionCards.length}</span>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${statusConfig.color}`}>
            <statusConfig.icon className="w-3 h-3" />
            {statusConfig.label}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div
          className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div 
        className={`glass-light rounded-2xl p-8 ${
          isTransitioning
            ? (transitionDirection === 'next' ? 'animate-card-leave-left' : 'animate-card-leave-right')
            : (transitionDirection === 'next' ? 'animate-card-enter-right' : 'animate-card-enter-left')
        }`}
        key={currentCard.id}
      >
        <div className="flex items-start gap-3 mb-2 flex-wrap">
          <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-lg flex-shrink-0">
            {currentCard.id}
          </span>
          <span className={`text-xs px-2 py-1 rounded-lg ${catColors.bg} ${catColors.text}`}>
            {CATEGORY_LABELS[currentCard.category] || currentCard.category}
          </span>
          {currentCard.topic && (
            <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-lg">
              {TOPIC_LABELS[currentCard.topic] || currentCard.topic.replace(/_/g, ' ')}
            </span>
          )}
        </div>

        {currentCard.taskDesc && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-emerald-400 flex items-center justify-between gap-1.5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {currentCard.taskTitle} (Ausgangslage)
              </div>
              <a
                href={`/Seekarte_D49_Aufgaben_SBF_SEE.pdf#page=${navTaskPage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1"
              >
                Seekarte D49 öffnen
              </a>
            </div>
            <p className="leading-relaxed font-normal text-slate-300">{currentCard.taskDesc}</p>
          </div>
        )}

        <h3 className="text-lg font-semibold text-white mt-4 leading-relaxed">{currentCard.question}</h3>

        {currentCard.image && (
          <div className="mt-4 flex justify-center">
            <img src={currentCard.image} alt="Frage Bild" className="max-h-48 rounded-lg border border-white/10" />
          </div>
        )}

        {/* Options */}
        <div className="mt-6 space-y-3">
          {currentCard.options.map((option, idx) => {
            let btnClass = 'option-btn'
            if (showResult) {
              if (idx === currentCard.correctIndex) btnClass += ' correct'
              else if (idx === selectedAnswer && idx !== currentCard.correctIndex) btnClass += ' incorrect'
            } else if (idx === selectedAnswer) {
              btnClass += ' selected'
            }

            return (
              <button
                key={idx}
                id={`option-${idx}`}
                onClick={() => handleAnswer(idx)}
                disabled={showResult || isTransitioning}
                className={`w-full text-left px-5 py-4 rounded-xl border border-white/8
                  text-sm font-semibold flex items-start gap-3 ${btnClass}`}
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-xs font-bold text-slate-400 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{option}</span>
                {showResult && idx === currentCard.correctIndex && (
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                )}
                {showResult && idx === selectedAnswer && idx !== currentCard.correctIndex && (
                  <X className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation & Stats Bar */}
      <div className="flex items-center justify-between gap-4 mt-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
        {/* Left: Vorherige Frage Button */}
        <div className="w-36 flex justify-start">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center gap-1.5 px-3 h-[36px] rounded-xl text-xs font-semibold
                text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-white/5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Vorherige Frage
            </button>
          )}
        </div>

        {/* Center: Session Stats */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">{sessionStats.correct} richtig</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="text-slate-400">{sessionStats.incorrect} falsch</span>
          </div>
        </div>

        {/* Right: Überspringen or Nächste Frage Button */}
        <div className="w-36 flex justify-end items-center">
          {showResult ? (
            (autoplayActive && !autoplaySuspended) ? (
              <div
                onMouseEnter={() => setAutoplayPaused(true)}
                onMouseLeave={() => setAutoplayPaused(false)}
                className="flex items-center"
              >
                {autoplayPaused ? (
                  <div className="w-[130px] h-[36px] rounded-xl overflow-hidden border border-ocean-500/30 flex bg-ocean-500/10 animate-fade-in">
                    {/* Cancel Autoplay (X) */}
                    <button
                      onClick={() => {
                        setAutoplayActive(false)
                        setAutoplayPaused(false)
                      }}
                      className="w-1/2 h-full flex items-center justify-center text-rose-400 hover:bg-rose-500/15 border-0 border-r border-ocean-500/30 transition-colors cursor-pointer"
                      title="Auto-Play anhalten"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {/* Go Immediately (Check) */}
                    <button
                      onClick={handleNext}
                      className="w-1/2 h-full flex items-center justify-center text-emerald-400 hover:bg-emerald-500/15 border-0 transition-colors cursor-pointer"
                      title="Sofort weiter"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    id="btn-next-card"
                    onClick={handleNext}
                    className="relative overflow-hidden inline-flex items-center justify-center w-[130px] h-[36px] rounded-xl text-xs font-semibold
                      text-ocean-300 hover:text-ocean-200 bg-ocean-500/10 hover:bg-ocean-500/20 border border-ocean-500/30 transition-all cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      Nächste ({Math.max(1, Math.ceil((3000 * (1 - autoplayProgress / 100)) / 1000))}s)
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    {/* Progress Bar Overlay */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-ocean-500/60 transition-all duration-100 ease-linear"
                      style={{ width: `${autoplayProgress}%` }}
                    />
                  </button>
                )}
              </div>
            ) : (
              <button
                id="btn-next-card"
                onClick={handleNext}
                className="inline-flex items-center justify-center w-[130px] h-[36px] rounded-xl text-xs font-semibold
                  text-ocean-400 hover:text-ocean-300 hover:bg-ocean-500/10 border border-ocean-500/30 transition-all cursor-pointer animate-fade-in"
              >
                Nächste Frage
                <ArrowRight className="w-4 h-4" />
              </button>
            )
          ) : (
            <button
              onClick={handleSkip}
              className="inline-flex items-center justify-center w-[130px] h-[36px] rounded-xl text-xs font-semibold
                text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-white/5 transition-all cursor-pointer"
            >
              Überspringen
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
