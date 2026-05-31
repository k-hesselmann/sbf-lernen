import { useMemo, useState } from 'react'
import { ArrowRight, ClipboardCheck, TrendingUp, History, ShieldAlert, Info, X } from 'lucide-react'
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
      border: 'hover:border-ocean-500/20',
      iconBg: 'bg-ocean-500/10 text-ocean-400',
      button: 'bg-ocean-500 hover:bg-ocean-600 shadow-ocean-500/10 hover:shadow-ocean-500/20'
    },
    amber: {
      border: 'hover:border-amber-500/20',
      iconBg: 'bg-amber-500/10 text-amber-400',
      button: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/10 hover:shadow-amber-500/20'
    },
    violet: {
      border: 'hover:border-violet-500/20',
      iconBg: 'bg-violet-500/10 text-violet-400',
      button: 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/10 hover:shadow-violet-500/20'
    }
  }[config.color || 'ocean']

  return (
    <div className={`p-4 rounded-2xl bg-slate-950/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 card-hover hover:scale-[1.005] ${colorClasses.border}`}>
      {/* Left side: Icon, title, description */}
      <div className="flex items-start gap-3.5 min-w-0 flex-1">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0 mt-0.5 ${colorClasses.iconBg}`}>
          {config.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2.5">
            <h4 className="font-bold text-white text-xs sm:text-sm leading-snug" title={config.label}>
              {config.label}
            </h4>
            <span className="text-[10px] text-slate-500 font-medium">
              {config.totalExamQuestions} Fragen · {config.duration} Min.
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed" title={config.description}>
            {config.description}
          </p>
        </div>
      </div>

      {/* Right side: Stats & Start Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
        {/* Stats Section */}
        <div className="flex flex-col gap-1 min-w-[155px] text-[10px] text-slate-400 px-3 py-1.5 sm:py-0 border-t border-b sm:border-none border-white/5 justify-center text-left sm:ml-auto">
          {stats ? (
            <>
              <div className="flex justify-between sm:justify-start gap-1.5">
                <span className="text-slate-500">Bestehensquote:</span>
                <span className={`font-bold ${stats.rate >= 80 ? 'text-emerald-400' : stats.rate >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {stats.rate}% <span className="text-[8px] text-slate-500 font-normal">({stats.attempts}x)</span>
                </span>
              </div>
              <div className="flex justify-between sm:justify-start gap-1.5">
                <span className="text-slate-500">Letzter Versuch:</span>
                <span className={`font-mono font-bold ${stats.last.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stats.last.correctAnswers}/{stats.last.totalQuestions}
                </span>
              </div>
            </>
          ) : (
            <span className="text-[10px] text-slate-600 flex items-center justify-between sm:justify-start gap-1.5 py-1">
              Noch kein Versuch
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={onSelect}
          className={`py-1.5 px-3.5 rounded-lg text-[11px] font-bold text-white transition-all duration-200
            flex items-center justify-center gap-1.5 shadow-md cursor-pointer hover:scale-[1.01] ${colorClasses.button}`}
        >
          Prüfung starten
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

export default function ExamCenter() {
  const selectedExamType = useStore((s) => s.selectedExamType)
  const getExamTypeStats = useStore((s) => s.getExamTypeStats)
  const examHistory = useStore((s) => s.examHistory)
  const prepareExam = useStore((s) => s.prepareExam)
  const viewExamResult = useStore((s) => s.viewExamResult)

  const [focalExamType, setFocalExamType] = useState(selectedExamType || 'see_motor')
  const [showReadinessInfo, setShowReadinessInfo] = useState(false)

  const fullExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => !key.includes('ergaenzung'))
  }, [])

  const extExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => key.includes('ergaenzung'))
  }, [])

  const focalStats = useMemo(() => {
    return getExamTypeStats(focalExamType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focalExamType, getExamTypeStats, examHistory])

  // Option A readiness calculation for focalExamType
  const readiness = useMemo(() => {
    const { cardStats, attempts } = focalStats
    
    const leitnerPct = cardStats.total > 0
      ? ((cardStats.masteredCount + cardStats.learningCount * 0.5) / cardStats.total) * 100
      : 0

    const recentAttempts = attempts.slice(0, 3)
    if (recentAttempts.length === 0) {
      return Math.min(50, Math.round(leitnerPct))
    }

    const totalScore = recentAttempts.reduce((sum, att) => sum + (att.correctAnswers / att.totalQuestions) * 100, 0)
    const examPct = totalScore / recentAttempts.length
    return Math.round(leitnerPct * 0.3 + examPct * 0.7)
  }, [focalStats])

  const readinessInfo = useMemo(() => {
    const r = readiness
    if (r < 30) return { label: 'Noch am Anfang ⚓', color: 'text-rose-400', barColor: 'bg-rose-500' }
    if (r < 70) return { label: 'Übung macht Meister ⛵', color: 'text-amber-400', barColor: 'bg-amber-500' }
    if (r < 85) return { label: 'Gute Chancen! 🌊', color: 'text-ocean-400', barColor: 'bg-ocean-500' }
    return { label: 'Prüfungsreif! 🎉', color: 'text-emerald-400', barColor: 'bg-emerald-500' }
  }, [readiness])

  const circleStats = useMemo(() => {
    const strokeWidth = 8
    const size = 130
    const center = size / 2
    const radius = center - strokeWidth
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (readiness / 100) * circumference
    const gradientId =
      readiness < 30 ? 'roseGrad' :
      readiness < 70 ? 'amberGrad' :
      readiness < 85 ? 'oceanGrad' : 'emeraldGrad'
    return { size, center, radius, strokeWidth, circumference, strokeDashoffset, gradientId }
  }, [readiness])

  const examOptions = useMemo(() => {
    return Object.entries(EXAM_CONFIG).map(([key, config]) => ({
      value: key,
      label: config.shortLabel,
      icon: config.icon
    }))
  }, [])

  return (
    <div className="space-y-6">


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

      {/* Grid layout: 4cols stats on left, 8cols exams on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Combined Gauge, Success Stats, and Attempts History */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Combined Lernstand & Erfolgsbilanz */}
          <div className="glass-light rounded-3xl p-6 border border-white/5 space-y-5 animate-fade-in relative z-20" style={{ animationDelay: '50ms' }}>
            {/* Main Card Header */}
            <div className="flex items-center gap-2 pb-3 border-b border-white/5 text-slate-400">
              <TrendingUp className="w-4 h-4 text-ocean-400 flex-shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider">Prüfungsbereitschaft</h3>
            </div>

            {/* Dropdown Selector directly under card header with study mode styles */}
            <select
              value={focalExamType}
              onChange={(e) => setFocalExamType(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-200 focus:outline-none cursor-pointer transition-colors"
            >
              {examOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-200 font-semibold text-xs">
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>

            {/* Prüfungsbereitschaft (Radial Progress Circle) */}
            <div className="flex flex-col items-center gap-4 py-2">
              <div className="relative flex items-center justify-center" style={{ width: circleStats.size, height: circleStats.size }}>
                <svg
                  width={circleStats.size}
                  height={circleStats.size}
                  viewBox={`0 0 ${circleStats.size} ${circleStats.size}`}
                  className="transform -rotate-90"
                >
                  <defs>
                    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1b5ff5" />
                      <stop offset="100%" stopColor="#59a4ff" />
                    </linearGradient>
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  
                  {/* Outer track line */}
                  <circle
                    cx={circleStats.center}
                    cy={circleStats.center}
                    r={circleStats.radius}
                    className="stroke-white/5"
                    strokeWidth={circleStats.strokeWidth}
                    fill="transparent"
                  />
                  
                  {/* Progress line */}
                  <circle
                    cx={circleStats.center}
                    cy={circleStats.center}
                    r={circleStats.radius}
                    stroke={`url(#${circleStats.gradientId})`}
                    strokeWidth={circleStats.strokeWidth}
                    strokeDasharray={circleStats.circumference}
                    strokeDashoffset={circleStats.strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* Percentage text inside circle */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className={`text-2xl font-black tracking-tight count-animate ${readinessInfo.color}`}>
                    {readiness}%
                  </span>
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                    Bereitschaft
                  </span>
                </div>
              </div>

              {/* Status & Info below circle */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className={`${readinessInfo.color} font-extrabold text-[12px]`}>
                  {readinessInfo.label}
                </span>
                <div className="relative">
                  <button
                    onClick={() => setShowReadinessInfo(!showReadinessInfo)}
                    className={`text-slate-500 hover:text-slate-300 transition-colors p-0.5 rounded cursor-pointer ${showReadinessInfo ? 'text-ocean-400' : ''}`}
                    title="Berechnung anzeigen"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* Absolute Popup Overlay */}
                  {showReadinessInfo && (
                    <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-0 top-7 w-72 bg-slate-900 border border-white/10 z-50 text-left animate-card-enter space-y-2 p-4 rounded-xl shadow-2xl text-[10px] text-slate-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); setShowReadinessInfo(false); }}
                        className="absolute top-2.5 right-2.5 text-slate-500 hover:text-slate-300 p-0.5 rounded cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <p className="font-bold text-white text-xs flex items-center gap-1 border-b border-white/5 pb-1.5 pr-4">
                        <Info className="w-3.5 h-3.5 text-ocean-400" />
                        Berechnungs-Details
                      </p>
                      <p>• <strong>30% Card-Fortschritt:</strong> Basiert auf gelernten (50%) und gemeisterten (100%) Leitner-Karten für diesen Fokus.</p>
                      <p>• <strong>70% Notenschnitt:</strong> Durchschnittliche Erfolgsquote der letzten 3 Versuche.</p>
                      <p className="text-[9px] text-slate-500 border-t border-white/5 pt-1.5 mt-1">
                        ⚠️ Ohne mindestens eine absolvierte Prüfungssimulation ist der Wert auf maximal <strong>50%</strong> gedeckelt.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Erfolgsbilanz Stats directly below progress bar section with border-t */}
            <div className="pt-3.5 border-t border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Simulationen</span>
                <span className="text-white font-semibold">{focalStats.historyStats.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Bestanden</span>
                <span className="text-emerald-400 font-semibold">{focalStats.historyStats.passed}</span>
              </div>
              <div className="flex justify-between">
                <span>Durchfallquote</span>
                <span className="text-rose-400 font-semibold">{focalStats.historyStats.failRate}%</span>
              </div>
            </div>

          </div>

          {/* Prüfungsverlauf (Attempts History) Card */}
          <div className="glass-light rounded-3xl p-6 border border-white/5 space-y-4 animate-fade-in relative z-10" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Prüfungsverlauf</h3>
              </div>
              {examHistory.length > 0 && (
                <span className="text-[9px] text-slate-500 font-bold uppercase">{examHistory.length} gesamt</span>
              )}
            </div>
            {examHistory.length > 0 ? (
              <div className="space-y-1.5 max-h-[210px] overflow-y-auto pr-1 custom-scrollbar">
                {examHistory.map((attempt) => {
                  const cfg = EXAM_CONFIG[attempt.examType] || { icon: '📝', shortLabel: 'Prüfung' }
                  return (
                    <button
                      key={attempt.id}
                      onClick={() => viewExamResult(attempt.id)}
                      className="w-full flex items-center justify-between text-xs py-2 px-2.5 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/5 text-left transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm">{cfg.icon}</span>
                        <div className="min-w-0">
                          <p className="text-slate-300 font-bold truncate text-[11px]" title={cfg.shortLabel}>{cfg.shortLabel}</p>
                          <p className="text-[9px] text-slate-500 font-medium">
                            {new Date(attempt.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-mono font-bold text-slate-400">
                          {attempt.correctAnswers}/{attempt.totalQuestions}
                        </span>
                        {attempt.passed ? (
                          <span className="text-emerald-400 font-extrabold text-xs bg-emerald-500/10 px-1.5 py-0.5 rounded">✓</span>
                        ) : (
                          <span className="text-rose-400 font-extrabold text-xs bg-rose-500/10 px-1.5 py-0.5 rounded">✗</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 space-y-2">
                <ShieldAlert className="w-6 h-6 text-slate-600 mx-auto" />
                <p className="text-xs">Noch keine Versuche verzeichnet.</p>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: List of Mock Exams (Two Big Boxes stacked vertically) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Box 1: Vollprüfungen */}
          <div className="glass-light rounded-3xl p-5 border border-white/5 space-y-4 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="pb-2.5 border-b border-white/5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">Vollprüfungen</h3>
              <p className="text-[10px] text-slate-500 mt-0.5">Offizielle Prüfungsbögen inkl. aller Fragen</p>
            </div>
            <div className="space-y-3">
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

          {/* Box 2: Ergänzungsprüfungen */}
          <div className="glass-light rounded-3xl p-5 border border-white/5 space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="pb-2.5 border-b border-white/5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">Ergänzungsprüfungen</h3>
              <p className="text-[10px] text-slate-500 mt-0.5">Fragebögen befreit von Basisfragen</p>
            </div>
            <div className="space-y-3">
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
    </div>
  )
}
