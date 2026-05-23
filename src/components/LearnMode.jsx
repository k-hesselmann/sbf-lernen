import { useState, useMemo, useCallback, useEffect } from 'react'
import { Check, X, ArrowRight, RotateCcw, Sparkles, Layers, AlertCircle, Filter } from 'lucide-react'
import useStore from '../store/useStore'
import { CATEGORY_LABELS, CATEGORY_COLORS, getCategoriesForExam, EXAM_CONFIG } from '../data/examConfig.js'
import { prepareQuestion } from '../utils/shuffleOptions.js'

export default function LearnMode() {
  const answerCard = useStore((s) => s.answerCard)
  const selectedExamType = useStore((s) => s.selectedExamType)
  const learningCategory = useStore((s) => s.learningCategory)
  const setLearningCategory = useStore((s) => s.setLearningCategory)
  const cardProgress = useStore((s) => s.cardProgress)
  const [sessionCards, setSessionCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 })

  const config = useMemo(() => EXAM_CONFIG[selectedExamType], [selectedExamType])
  const availableCategories = useMemo(() => getCategoriesForExam(selectedExamType), [selectedExamType])

  // Get due cards based on current progress & filters
  const dueCards = useMemo(() => {
    return useStore.getState().getDueCards()
  }, [cardProgress, selectedExamType, learningCategory])

  // Stabilize session cards: load them only when exam type or category changes
  useEffect(() => {
    const cards = useStore.getState().getDueCards()
    setSessionCards(cards)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }, [selectedExamType, learningCategory])

  const rawCard = sessionCards[currentIndex]

  // Shuffle options once per card (memoized by card id)
  const currentCard = useMemo(() => {
    if (!rawCard) return null
    return prepareQuestion(rawCard)
  }, [rawCard?.id])

  const handleAnswer = useCallback((answerIndex) => {
    if (showResult || !currentCard) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    const correct = answerIndex === currentCard.correctIndex
    answerCard(currentCard.id, correct)

    setSessionStats((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1),
    }))
  }, [showResult, currentCard, answerCard])

  const handleNext = useCallback(() => {
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const handleRestart = useCallback(() => {
    const cards = useStore.getState().getDueCards()
    setSessionCards(cards)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setSessionStats({ correct: 0, incorrect: 0 })
  }, [])

  // Session Complete
  if (sessionCards.length === 0 || currentIndex >= sessionCards.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in-up">
        <div className="glass-light rounded-3xl p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {dueCards.length === 0 ? 'Alles erledigt!' : 'Session abgeschlossen!'}
          </h2>
          <p className="text-slate-400 mb-6">
            {dueCards.length === 0
              ? 'Keine Fragen sind gerade fällig. Komm später zurück!'
              : `Du hast ${sessionStats.correct + sessionStats.incorrect} Fragen beantwortet.`}
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

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ocean-500 hover:bg-ocean-600
              text-white font-medium transition-all duration-200 shadow-lg shadow-ocean-500/20"
          >
            <RotateCcw className="w-4 h-4" />
            Nochmal üben
          </button>
        </div>
      </div>
    )
  }

  const getStatus = (qId) => {
    const p = cardProgress[qId]
    if (!p || p.repetitions === 0) return 'new'
    if (p.interval >= 6) return 'mastered'
    return 'learning'
  }

  const status = getStatus(currentCard.id)
  const statusConfig = {
    new: { label: 'Neu', color: 'bg-ocean-500/20 text-ocean-400', icon: Layers },
    learning: { label: 'Lernen', color: 'bg-amber-500/20 text-amber-400', icon: RotateCcw },
    mastered: { label: 'Gemeistert', color: 'bg-emerald-500/20 text-emerald-400', icon: Check },
  }[status]

  const catColors = CATEGORY_COLORS[currentCard.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold text-white">Lernen: {config.label}</h2>
          <p className="text-slate-400 mt-1">Spaced Repetition – lerne effizient</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">{currentIndex + 1} / {sessionCards.length}</span>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig.color}`}>
            <statusConfig.icon className="w-3 h-3" />
            {statusConfig.label}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
        <button
          onClick={() => { setLearningCategory('all'); setCurrentIndex(0); setSelectedAnswer(null); setShowResult(false) }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
            ${learningCategory === 'all' ? 'bg-ocean-500/20 text-ocean-300 border border-ocean-500/30' : 'text-slate-400 hover:bg-white/5 border border-transparent'}`}
        >
          <Filter className="w-3 h-3" /> Alle
        </button>
        {availableCategories.map((cat) => {
          const colors = CATEGORY_COLORS[cat] || {}
          return (
            <button
              key={cat}
              onClick={() => { setLearningCategory(cat); setCurrentIndex(0); setSelectedAnswer(null); setShowResult(false) }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                ${learningCategory === cat ? `${colors.bg} ${colors.text} border ${colors.border}` : 'text-slate-400 hover:bg-white/5 border border-transparent'}`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          )
        })}
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div
          className="h-full bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="glass-light rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }} key={currentCard.id}>
        <div className="flex items-start gap-3 mb-2 flex-wrap">
          <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-lg flex-shrink-0">
            {currentCard.id}
          </span>
          <span className={`text-xs px-2 py-1 rounded-lg ${catColors.bg} ${catColors.text}`}>
            {CATEGORY_LABELS[currentCard.category] || currentCard.category}
          </span>
          {currentCard.topic && (
            <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-lg">
              {currentCard.topic.replace(/_/g, ' ')}
            </span>
          )}
        </div>
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
                disabled={showResult}
                className={`w-full text-left px-5 py-4 rounded-xl border border-white/8
                  text-sm font-medium flex items-start gap-3 ${btnClass}`}
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

        {/* Feedback & Next */}
        {showResult && (
          <div className="mt-6 flex items-center justify-between animate-fade-in-up">
            <div className="flex items-center gap-2">
              {selectedAnswer === currentCard.correctIndex ? (
                <>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-emerald-400">Richtig!</span>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-sm font-medium text-rose-400">Leider falsch</span>
                </>
              )}
            </div>
            <button
              id="btn-next-card"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ocean-500 hover:bg-ocean-600
                text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-ocean-500/20"
            >
              Weiter
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Session Stats Bar */}
      <div className="flex items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-400">{sessionStats.correct} richtig</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="text-slate-400">{sessionStats.incorrect} falsch</span>
        </div>
      </div>
    </div>
  )
}
