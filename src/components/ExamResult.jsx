import { Check, X, Trophy, AlertCircle, RotateCcw, Home, BarChart3 } from 'lucide-react'
import useStore from '../store/useStore'
import { CATEGORY_LABELS, CATEGORY_COLORS, EXAM_CONFIG } from '../data/examConfig.js'

export default function ExamResult() {
  const { examHistory, setView, startExam } = useStore()
  const result = examHistory[0]

  if (!result) return null

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100)
  const config = EXAM_CONFIG[result.examType]

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Result Header */}
      <div className="glass-light rounded-3xl p-8 text-center animate-fade-in">
        <div className={`w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center
          shadow-xl ${result.passed
            ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-emerald-500/20'
            : 'bg-gradient-to-br from-rose-400 to-rose-600 shadow-rose-500/20'}`}>
          {result.passed ? (
            <Trophy className="w-12 h-12 text-white" />
          ) : (
            <AlertCircle className="w-12 h-12 text-white" />
          )}
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">
          {result.passed ? 'Bestanden! 🎉' : 'Nicht bestanden'}
        </h2>
        <p className="text-slate-400 mb-2">
          {config?.label || 'Prüfung'}
        </p>
        <p className="text-slate-400 mb-6 text-sm">
          {result.passed
            ? 'Herzlichen Glückwunsch! Du hast die Prüfung bestanden.'
            : 'Leider hat es diesmal nicht gereicht. Übe weiter!'}
        </p>

        {/* Score */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <div className="text-center">
            <p className={`text-5xl font-bold count-animate ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
              {result.correctAnswers}
            </p>
            <p className="text-xs text-slate-400 mt-1">Richtig</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-5xl font-bold text-slate-500 count-animate">{result.totalQuestions - result.correctAnswers}</p>
            <p className="text-xs text-slate-400 mt-1">Falsch</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-5xl font-bold text-white count-animate">{percentage}%</p>
            <p className="text-xs text-slate-400 mt-1">Quote</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto">
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full progress-shine relative transition-all duration-1000
                ${result.passed ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-rose-400 to-rose-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section Results */}
      {result.sectionResults && result.sectionResults.length > 0 && (
        <div className="glass-light rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-ocean-400" />
            Ergebnis nach Kategorien
          </h3>
          <div className="space-y-3">
            {result.sectionResults.map((section, idx) => {
              const colors = CATEGORY_COLORS[section.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }
              const pct = section.total > 0 ? Math.round((section.correct / section.total) * 100) : 0
              return (
                <div key={idx} className={`p-3 rounded-xl border ${section.passed ? 'border-emerald-500/20' : 'border-rose-500/20'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-medium ${colors.text}`}>
                      {CATEGORY_LABELS[section.category] || section.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{section.correct}/{section.total}</span>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full
                        ${section.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                        {section.passed ? '✓ Bestanden' : '✗ Nicht bestanden'}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000
                        ${section.passed ? 'bg-emerald-400' : 'bg-rose-400'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Bestehensgrenze: {section.passMin} von {section.examCount}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
        <button
          onClick={() => setView('exams')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
            text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          <Home className="w-4 h-4" />
          Zurück zur Übersicht
        </button>
        <button
          onClick={() => setView('learn')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
            text-ocean-300 bg-ocean-500/20 hover:bg-ocean-500/30 transition-all duration-200"
        >
          <BarChart3 className="w-4 h-4" />
          Weiter lernen
        </button>
        <button
          onClick={startExam}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
            bg-ocean-500 text-white hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-500/20"
        >
          <RotateCcw className="w-4 h-4" />
          Neue Prüfung
        </button>
      </div>

      {/* Question Review */}
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-ocean-400" />
          Fragenübersicht
        </h3>
        <div className="space-y-3">
          {result.questions.map((q, idx) => {
            const catColors = CATEGORY_COLORS[q.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }
            return (
              <div
                key={q.id}
                className={`glass-light rounded-xl p-4 border-l-[3px] transition-all duration-200
                  ${q.isCorrect ? 'border-l-emerald-400' : 'border-l-rose-400'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5
                    ${q.isCorrect ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
                    {q.isCorrect ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <X className="w-4 h-4 text-rose-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${catColors.bg} ${catColors.text}`}>
                        {CATEGORY_LABELS[q.category] || q.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-white leading-relaxed">{q.question}</p>
                    {q.image && (
                      <div className="mt-2 flex justify-start">
                        <img src={q.image} alt="Frage Bild" className="max-h-32 rounded border border-white/10" />
                      </div>
                    )}
                    {!q.isCorrect && (
                      <p className="text-xs text-slate-400 mt-2">
                        Deine Antwort: <span className="text-rose-400">{q.selectedAnswer !== null ? String.fromCharCode(65 + q.selectedAnswer) : '—'}</span>
                        {' · '}
                        Richtig: <span className="text-emerald-400">{String.fromCharCode(65 + q.correctIndex)}</span>
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-500 flex-shrink-0">{idx + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
