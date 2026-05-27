import { useMemo } from 'react'
import { Trophy, ArrowRight, ClipboardCheck, TrendingUp, History, Calendar, Check, X, ShieldAlert, ChevronLeft } from 'lucide-react'
import useStore from '../store/useStore'
import { EXAM_CONFIG } from '../data/examConfig.js'

function ExamCard({ examType, config, history, onSelect }) {
  const stats = useMemo(() => {
    const attempts = history.filter((e) => e.examType === examType)
    if (attempts.length === 0) return null
    const passed = attempts.filter((e) => e.passed).length
    const rate = Math.round((passed / attempts.length) * 100)
    return {
      attempts: attempts.length,
      passed,
      rate,
      last: attempts[0],
    }
  }, [examType, history])

  const colorClasses = {
    ocean: {
      border: 'hover:border-ocean-500/30',
      iconBg: 'bg-ocean-500/20 text-ocean-400',
      button: 'bg-ocean-500 hover:bg-ocean-600 shadow-ocean-500/10 hover:shadow-ocean-500/20'
    },
    amber: {
      border: 'hover:border-amber-500/30',
      iconBg: 'bg-amber-500/20 text-amber-400',
      button: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/10 hover:shadow-amber-500/20'
    },
    violet: {
      border: 'hover:border-violet-500/30',
      iconBg: 'bg-violet-500/20 text-violet-400',
      button: 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/10 hover:shadow-violet-500/20'
    }
  }[config.color || 'ocean']

  return (
    <div className={`glass-light rounded-2xl p-4 border border-white/5 transition-all duration-300 flex flex-col justify-between card-hover ${colorClasses.border}`}>
      <div>
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold flex-shrink-0 ${colorClasses.iconBg}`}>
            {config.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-white text-xs sm:text-sm leading-tight truncate" title={config.label}>
              {config.label}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-1">
              <span className={`text-[8px] font-extrabold uppercase px-1 py-0.5 rounded leading-none
                ${examType.includes('ergaenzung') ? 'bg-cyan-500/10 text-cyan-400' : 'bg-ocean-500/10 text-ocean-400'}`}>
                {examType.includes('ergaenzung') ? 'Erg.' : 'Voll'}
              </span>
              <span className="text-[9px] text-slate-500 font-medium">
                {config.totalExamQuestions} Fragen · {config.duration} Min.
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[10px] text-slate-400 mt-2.5 leading-normal line-clamp-2 min-h-[30px]" title={config.description}>
          {config.description}
        </p>
      </div>

      {/* Footer Info & Details Button */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between gap-3 flex-shrink-0">
        {stats ? (
          <div className="text-[10px] text-slate-400 space-y-0.5 flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 truncate">Erfolg:</span>
              <span className={`font-bold ml-1 ${stats.rate >= 80 ? 'text-emerald-400' : stats.rate >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                {stats.rate}% ({stats.attempts}x)
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 truncate">Letzter:</span>
              <span className={`font-mono font-bold ml-1 ${stats.last.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stats.last.correctAnswers}/{stats.last.totalQuestions}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-[9px] text-slate-500 flex items-center gap-1 flex-1 py-1.5 truncate">
            <Trophy className="w-3 h-3 text-slate-600 flex-shrink-0" />
            Noch kein Versuch
          </span>
        )}

        <button
          onClick={onSelect}
          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold text-white transition-all duration-200
            flex items-center gap-1 shadow flex-shrink-0 ${colorClasses.button}`}
        >
          Starten
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

export default function ExamCenter() {
  const questions = useStore((s) => s.questions)
  const cardProgress = useStore((s) => s.cardProgress)
  const examHistory = useStore((s) => s.examHistory)
  const prepareExam = useStore((s) => s.prepareExam)
  const setView = useStore((s) => s.setView)

  const fullExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => !key.includes('ergaenzung'))
  }, [])

  const extExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => key.includes('ergaenzung'))
  }, [])

  const stats = useMemo(() => {
    const total = examHistory.length
    const passed = examHistory.filter((e) => e.passed).length
    const failed = total - passed
    const passRate = total > 0 ? Math.round((passed / total) * 100) : 0
    const failRate = total > 0 ? Math.round((failed / total) * 100) : 0
    return { total, passed, failed, passRate, failRate }
  }, [examHistory])

  // Prüfungsbereitschaft: 40% Card Mastery + 60% Exam Score
  const readiness = useMemo(() => {
    const globalStats = useStore.getState().getGlobalStats()
    const masteryPct = globalStats.total > 0 ? (globalStats.masteredCount / globalStats.total) * 100 : 0

    const recentAttempts = examHistory.slice(0, 3)
    let examPct = 0
    if (recentAttempts.length > 0) {
      const totalScore = recentAttempts.reduce((sum, att) => sum + (att.correctAnswers / att.totalQuestions) * 100, 0)
      examPct = totalScore / recentAttempts.length
    } else {
      // Capped progress if no exams simulated yet
      const progressPct = globalStats.total > 0 
        ? ((globalStats.masteredCount + globalStats.learningCount * 0.5) / globalStats.total) * 100 
        : 0
      return Math.min(50, Math.round(progressPct))
    }

    return Math.round(masteryPct * 0.4 + examPct * 0.6)
  }, [examHistory, questions, cardProgress])

  const readinessInfo = useMemo(() => {
    const r = readiness
    if (r < 30) return { label: 'Noch am Anfang ⚓', color: 'text-rose-400', barColor: 'bg-rose-500' }
    if (r < 70) return { label: 'Übung macht den Meister ⛵', color: 'text-amber-400', barColor: 'bg-amber-500' }
    if (r < 85) return { label: 'Gute Chancen! 🌊', color: 'text-ocean-400', barColor: 'bg-ocean-500' }
    return { label: 'Prüfungsreif! 🎉', color: 'text-emerald-400', barColor: 'bg-emerald-500' }
  }, [readiness])

  return (
    <div className="space-y-6">
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
      <div className="animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-lg shadow-ocean-500/20">
            <ClipboardCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Mein Prüfungs-Center</h2>
            <p className="text-slate-400 mt-0.5 text-sm">Simuliere offizielle Prüfungsbögen unter realen Bedingungen mit Zeitlimit</p>
          </div>
        </div>
      </div>

      {/* Stats Widgets Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '50ms' }}>
        {/* Readiness Gauge */}
        <div className="glass-light rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-ocean-400 flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Prüfungsbereitschaft</h3>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className={`text-3xl font-black ${readinessInfo.color}`}>{readiness}%</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/5 ${readinessInfo.color}`}>
                {readinessInfo.label}
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${readinessInfo.barColor} transition-all duration-1000`}
                style={{ width: `${readiness}%` }}
              />
            </div>
          </div>
          <p className="text-[9px] text-slate-500 leading-snug mt-2">
            Card-Mastery (40%) + Notenschnitt der letzten 3 Versuche (60%).
          </p>
        </div>

        {/* Erfolgsbilanz */}
        <div className="glass-light rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Erfolgsbilanz</h3>
            </div>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Simulationen absolviert</span>
                <span className="text-white font-semibold">{stats.total} Versuche</span>
              </div>
              <div className="flex justify-between">
                <span>Bestanden</span>
                <span className="text-emerald-400 font-semibold">{stats.passed} Versuche</span>
              </div>
              <div className="flex justify-between">
                <span>Durchfallquote</span>
                <span className="text-rose-400 font-semibold">{stats.failRate}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prüfungsverlauf (Attempts History) */}
        <div className="glass-light rounded-2xl p-5 flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <History className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Prüfungsverlauf</h3>
            </div>
            {examHistory.length > 0 ? (
              <div className="space-y-2">
                {examHistory.slice(0, 2).map((attempt) => {
                  const cfg = EXAM_CONFIG[attempt.examType] || { icon: '📝', shortLabel: 'Prüfung' }
                  return (
                    <div key={attempt.id} className="flex items-center justify-between text-xs py-0.5 border-b border-white/[0.03] last:border-0">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-xs">{cfg.icon}</span>
                        <span className="text-slate-300 font-medium truncate max-w-[120px]">{cfg.shortLabel}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-mono font-bold text-slate-400">
                          {attempt.correctAnswers}/{attempt.totalQuestions}
                        </span>
                        {attempt.passed ? (
                          <span className="text-emerald-400 font-extrabold">✓</span>
                        ) : (
                          <span className="text-rose-400 font-extrabold">✗</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-2 text-slate-500 space-y-1">
                <ShieldAlert className="w-5 h-5 text-slate-600 mx-auto" />
                <p className="text-[10px]">Noch keine Versuche verzeichnet.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Separator & Exam Sections */}
      <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
        {/* Vollprüfungen */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">Vollprüfungen</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fullExams.map(([key, cfg]) => (
              <ExamCard
                key={key}
                examType={key}
                config={cfg}
                history={examHistory}
                onSelect={() => prepareExam(key)}
              />
            ))}
          </div>
        </div>

        {/* Ergänzungsprüfungen */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">Ergänzungsprüfungen (Basisfragen befreit)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {extExams.map(([key, cfg]) => (
              <ExamCard
                key={key}
                examType={key}
                config={cfg}
                history={examHistory}
                onSelect={() => prepareExam(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
