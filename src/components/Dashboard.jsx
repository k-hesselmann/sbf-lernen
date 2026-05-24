import { BookOpen, Brain, Trophy, Target, TrendingUp, Clock, BarChart3, Zap, Compass, ArrowRight, ClipboardCheck } from 'lucide-react'
import useStore from '../store/useStore'
import { useMemo, useState } from 'react'
import { EXAM_CONFIG, CATEGORY_LABELS, CATEGORY_COLORS, OFFICIAL_POOL_SIZES, CATEGORIES, EXAM_TYPES } from '../data/examConfig.js'

function StatCard({ icon: Icon, label, value, color, delay }) {
  return (
    <div
      className="glass-light rounded-2xl p-5 card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-2xl font-bold text-white count-animate">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  )
}

function ProgressRing({ percentage, size = 120, strokeWidth = 8, color = '#3380ff' }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">{percentage}%</span>
        <span className="text-xs text-slate-400">Fortschritt</span>
      </div>
    </div>
  )
}

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
    <div className={`glass-light rounded-2xl p-5 border border-white/5 transition-all duration-300 flex flex-col justify-between card-hover ${colorClasses.border}`}>
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold ${colorClasses.iconBg}`}>
              {config.icon}
            </div>
            <div>
              <h3 className="font-bold text-white text-xs sm:text-sm leading-snug">{config.label}</h3>
              <p className="text-[9px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                {examType.includes('ergaenzung') ? 'Ergänzungsprüfung' : 'Vollprüfung'}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[11px] text-slate-400 leading-relaxed mb-4 min-h-[32px]">{config.description}</p>

        {/* Outline Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 p-2 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 text-slate-400">
            <Target className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <div className="text-[10px] sm:text-xs">
              <p className="font-semibold text-white">{config.totalExamQuestions}</p>
              <p className="text-[8px] text-slate-500 font-medium">Fragen</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <div className="text-[10px] sm:text-xs">
              <p className="font-semibold text-white">{config.duration} Min.</p>
              <p className="text-[8px] text-slate-500 font-medium">Zeitlimit</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-4 pt-3 border-t border-white/5">
          {stats ? (
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Bestehensquote:</span>
                <span className={`font-bold ${stats.rate >= 80 ? 'text-emerald-400' : stats.rate >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {stats.rate}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Versuche:</span>
                <span className="text-white font-semibold">{stats.attempts} ({stats.passed} bestanden)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Letzter Score:</span>
                <span className={`font-mono font-bold ${stats.last.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stats.last.correctAnswers}/{stats.last.totalQuestions}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 py-0.5 text-slate-500 text-[11px] font-medium">
              <Trophy className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              <span>Noch kein Versuch absolviert</span>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onSelect}
        className={`w-full py-2 rounded-xl text-[11px] font-bold text-white transition-all duration-200
          flex items-center justify-center gap-1.5 shadow-lg ${colorClasses.button}`}
      >
        Prüfungsdetails
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  )
}

export default function Dashboard() {
  const questions = useStore((s) => s.questions)
  const cardProgress = useStore((s) => s.cardProgress)
  const examHistory = useStore((s) => s.examHistory)
  const selectedExamType = useStore((s) => s.selectedExamType)
  const setView = useStore((s) => s.setView)
  const prepareExam = useStore((s) => s.prepareExam)

  const activeTab = useStore((s) => s.dashboardTab)
  const setActiveTab = useStore((s) => s.setDashboardTab)

  const fullExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => !key.includes('ergaenzung'))
  }, [])

  const extExams = useMemo(() => {
    return Object.entries(EXAM_CONFIG).filter(([key]) => key.includes('ergaenzung'))
  }, [])

  const config = EXAM_CONFIG[selectedExamType]

  // Global statistics across all questions in the database
  const stats = useMemo(() => useStore.getState().getGlobalStats(), [questions, cardProgress])
  const categoryStats = useMemo(() => useStore.getState().getGlobalCategoryStats(), [questions, cardProgress])

  // Global due count
  const dueCount = useMemo(() => {
    const now = Date.now()
    return questions.filter((q) => {
      const p = cardProgress[q.id]
      if (!p) return true
      return p.nextReview <= now
    }).length
  }, [questions, cardProgress])

  const progressPercent = useMemo(() => {
    if (stats.total === 0) return 0
    // Progress measures started learning (learning + mastered) for immediate dashboard response
    return Math.round(((stats.learningCount + stats.masteredCount) / stats.total) * 100)
  }, [stats])

  const accuracyPercent = useMemo(() => {
    let total = 0, correct = 0
    Object.values(cardProgress).forEach((p) => {
      total += p.totalAttempts || 0
      correct += p.correctAttempts || 0
    })
    if (total === 0) return 0
    return Math.round((correct / total) * 100)
  }, [cardProgress])

  // Get the single latest exam taken
  const lastExam = useMemo(() => examHistory[0], [examHistory])

  const orderedCategories = [
    CATEGORIES.BASIS,
    CATEGORIES.SEE_SPEZIFISCH,
    CATEGORIES.BINNEN_SPEZIFISCH,
    CATEGORIES.SEGEL_SPEZIFISCH,
    CATEGORIES.NAVIGATION_SEE
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in-up flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-lg shadow-ocean-500/20">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Mein Kontrollzentrum</h2>
            <p className="text-slate-400 mt-0.5 text-sm">Gesamtfortschritt über alle Lizenzen und Prüfungsfragen (SBF See & Binnen)</p>
          </div>
        </div>

        {/* Tabs Switcher */}
        <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/5 w-full sm:w-auto max-w-sm sm:max-w-none flex-shrink-0">
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5
              ${activeTab === 'progress'
                ? 'bg-ocean-500 text-white shadow-lg shadow-ocean-500/10'
                : 'text-slate-400 hover:text-slate-200'}`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Lern-Cockpit
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5
              ${activeTab === 'exams'
                ? 'bg-ocean-500 text-white shadow-lg shadow-ocean-500/10'
                : 'text-slate-400 hover:text-slate-200'}`}
          >
            <ClipboardCheck className="w-3.5 h-3.5" />
            Prüfungs-Center
          </button>
        </div>
      </div>

      {activeTab === 'progress' ? (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            <StatCard icon={BookOpen} label="Neue Fragen" value={stats.newCount} color="bg-ocean-500/20 text-ocean-400" delay={0} />
            <StatCard icon={Brain} label="Im Lernen" value={stats.learningCount} color="bg-amber-500/20 text-amber-400" delay={100} />
            <StatCard icon={Trophy} label="Gemeistert" value={stats.masteredCount} color="bg-emerald-500/20 text-emerald-400" delay={200} />
            <StatCard icon={Target} label="Fällig heute" value={dueCount} color="bg-violet-500/20 text-violet-400" delay={300} />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Progress Ring */}
            <div className="glass-light rounded-2xl p-6 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <ProgressRing percentage={progressPercent} />
              <div className="mt-4 text-center space-y-1">
                <p className="text-sm font-semibold text-white">Gesamtfortschritt</p>
                <p className="text-xs text-slate-300">
                  {stats.learningCount + stats.masteredCount} von {stats.total} Fragen begonnen
                </p>
                <p className="text-[10px] text-slate-500">
                  Davon {stats.masteredCount} vollständig gemeistert
                </p>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="glass-light rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="w-5 h-5 text-ocean-400" />
                <h3 className="text-sm font-semibold text-white">Kategorien</h3>
              </div>

              <div className="space-y-3">
                {orderedCategories.map((cat) => {
                  const st = categoryStats[cat] || { total: 0, new: 0, learning: 0, mastered: 0 }
                  const colors = CATEGORY_COLORS[cat] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }
                  const pct = st.total > 0 ? Math.round(((st.learning + st.mastered) / st.total) * 100) : 0
                  const officialSize = OFFICIAL_POOL_SIZES[cat] || st.total
                  return (
                    <div key={cat}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-slate-300 truncate">
                          {CATEGORY_LABELS[cat] || cat}
                        </span>
                        <span className={`text-xs font-semibold ${colors.text}`}>
                          {st.total}/{officialSize}
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${colors.bg.replace('/20', '')} progress-shine relative transition-all duration-1000`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[10px] text-slate-500">{st.mastered} gemeistert</span>
                        <span className="text-[10px] text-slate-500">{st.learning} lernen</span>
                        <span className="text-[10px] text-slate-500">{st.new} neu</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Accuracy */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Trefferquote
                  </span>
                  <span className="text-sm font-bold text-white">{accuracyPercent}%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Last Exam */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              {/* Quick Start */}
              <button
                id="btn-quick-learn"
                onClick={() => setView('learn')}
                className="w-full glass-light rounded-2xl p-5 card-hover text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center
                    shadow-lg shadow-ocean-500/20 group-hover:shadow-ocean-500/30 transition-shadow">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Lernsession starten</p>
                    <p className="text-xs text-slate-400 mt-0.5">{dueCount} Fragen warten auf dich</p>
                  </div>
                </div>
              </button>

              {/* Exam Info */}
              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-4 h-4 text-ocean-400" />
                  <h3 className="text-sm font-semibold text-white">Prüfungsformat: {config.label}</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  {config.sections.map((s, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{CATEGORY_LABELS[s.category]}</span>
                      <span className="text-slate-300 font-medium">{s.examCount} Fragen (min. {s.passMin})</span>
                    </div>
                  ))}
                  {config.navigation && (
                    <div className="flex justify-between text-emerald-400/80">
                      <span>Navigation</span>
                      <span className="font-medium">{config.navigation.subtasks} Aufgaben (min. {config.navigation.passMin})</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/5 flex justify-between text-slate-300 font-medium">
                    <span>Gesamt</span>
                    <span>{config.totalExamQuestions} Fragen · {config.duration} Min.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {/* Exams Grid */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vollprüfungen subgroup */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-semibold">Vollprüfungen</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Ergänzungsprüfungen subgroup */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-semibold">Ergänzungsprüfungen (Basisfragen befreit)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Sidebar statistics info */}
          <div className="space-y-6">
            {/* Last Exam */}
            <div className="glass-light rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-slate-400" />
                <h3 className="text-sm font-semibold text-white">Letzter Versuch</h3>
              </div>
              {lastExam ? (
                <div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-slate-400">{lastExam.examLabel}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${lastExam.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {lastExam.correctAnswers}/{lastExam.totalQuestions}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full
                      ${lastExam.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                      {lastExam.passed ? 'Bestanden' : 'Nicht bestanden'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {new Date(lastExam.date).toLocaleDateString('de-DE', {
                      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">Noch keine Prüfung absolviert.</p>
              )}
            </div>

            {/* General success card */}
            <div className="glass-light rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">Deine Erfolgsbilanz</h3>
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Prüfungen absolviert</span>
                  <span className="text-white font-semibold">{examHistory.length} Versuche</span>
                </div>
                <div className="flex justify-between">
                  <span>Bestanden</span>
                  <span className="text-emerald-400 font-semibold">
                    {examHistory.filter((e) => e.passed).length} Versuche
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Durchfallquote</span>
                  <span className="text-rose-400 font-semibold">
                    {examHistory.length > 0
                      ? Math.round((examHistory.filter((e) => !e.passed).length / examHistory.length) * 100)
                      : 0}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
