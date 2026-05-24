import { BookOpen, Brain, Trophy, Target, TrendingUp, Clock, BarChart3, Zap, Compass, ChevronDown, ChevronRight } from 'lucide-react'
import useStore from '../store/useStore'
import { useMemo, useState } from 'react'
import { CATEGORY_LABELS, CATEGORY_COLORS, OFFICIAL_POOL_SIZES, CATEGORIES, TOPIC_LABELS } from '../data/examConfig.js'

function StatCard({ icon: Icon, label, value, color, delay }) {
  return (
    <div
      className="glass-light rounded-2xl p-5 card-hover animate-fade-in"
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

export default function Dashboard() {
  const questions = useStore((s) => s.questions)
  const cardProgress = useStore((s) => s.cardProgress)
  const setView = useStore((s) => s.setView)

  const [expandedCats, setExpandedCats] = useState({})

  const toggleCategory = (cat) => {
    setExpandedCats((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  // Global stats across all questions in the database
  const stats = useMemo(() => useStore.getState().getGlobalStats(), [questions, cardProgress])

  // Category and Topic stats computed in a single pass
  const categoryTopicStats = useMemo(() => {
    const data = {}
    questions.forEach((q) => {
      const cat = q.category
      const topic = q.topic || 'other'
      const p = cardProgress[q.id]

      if (!data[cat]) {
        data[cat] = {
          total: 0, new: 0, learning: 0, mastered: 0,
          topics: {}
        }
      }

      if (!data[cat].topics[topic]) {
        data[cat].topics[topic] = { total: 0, new: 0, learning: 0, mastered: 0 }
      }

      data[cat].total++
      data[cat].topics[topic].total++

      if (!p || p.repetitions === 0) {
        data[cat].new++
        data[cat].topics[topic].new++
      } else if (p.interval >= 6) {
        data[cat].mastered++
        data[cat].topics[topic].mastered++
      } else {
        data[cat].learning++
        data[cat].topics[topic].learning++
      }
    })
    return data
  }, [questions, cardProgress])

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
      <div className="animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-lg shadow-ocean-500/20">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Mein Lern-Cockpit</h2>
            <p className="text-slate-400 mt-0.5 text-sm">Übersicht über deinen Lernfortschritt, deine Kategorien und anstehende Wiederholungen</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
        <StatCard icon={BookOpen} label="Neue Fragen" value={stats.newCount} color="bg-ocean-500/20 text-ocean-400" delay={0} />
        <StatCard icon={Brain} label="Im Lernen" value={stats.learningCount} color="bg-amber-500/20 text-amber-400" delay={100} />
        <StatCard icon={Trophy} label="Gemeistert" value={stats.masteredCount} color="bg-emerald-500/20 text-emerald-400" delay={200} />
        <StatCard icon={Target} label="Fällig heute" value={dueCount} color="bg-violet-500/20 text-violet-400" delay={300} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
        {/* Categories (Left Column, 2/3 width) */}
        <div className="lg:col-span-2 glass-light rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-ocean-400" />
            <h3 className="text-base font-bold text-white">Kategorien & Themenbereiche</h3>
          </div>

          <div className="space-y-4">
            {orderedCategories.map((cat) => {
              const catData = categoryTopicStats[cat] || { total: 0, new: 0, learning: 0, mastered: 0, topics: {} }
              const colors = CATEGORY_COLORS[cat] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }
              const pct = catData.total > 0 ? Math.round(((catData.learning + catData.mastered) / catData.total) * 100) : 0
              const officialSize = OFFICIAL_POOL_SIZES[cat] || catData.total
              const isExpanded = !!expandedCats[cat]

              return (
                <div
                  key={cat}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
                >
                  {/* Category Header */}
                  <div
                    onClick={() => toggleCategory(cat)}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
                      )}
                      <span className="text-sm font-bold text-white truncate group-hover:text-ocean-300 transition-colors">
                        {CATEGORY_LABELS[cat] || cat}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs font-semibold ${colors.text}`}>
                        {catData.total}/{officialSize} Fragen
                      </span>
                      <span className="text-xs font-bold text-slate-300 bg-white/5 px-2 py-0.5 rounded-md">
                        {pct}%
                      </span>
                    </div>
                  </div>

                  {/* Category Progress Bar */}
                  <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bg.replace('/20', '')} progress-shine relative transition-all duration-1000`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  {/* Category mini status */}
                  <div className="flex gap-4 mt-2 text-[10px] text-slate-500">
                    <span>{catData.mastered} gemeistert</span>
                    <span>{catData.learning} lernen</span>
                    <span>{catData.new} neu</span>
                  </div>

                  {/* Expandable Topic Subcategories */}
                  {isExpanded && Object.keys(catData.topics).length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/5 space-y-3.5 pl-4">
                      {Object.entries(catData.topics).map(([topicKey, topData]) => {
                        const topPct = topData.total > 0 ? Math.round(((topData.learning + topData.mastered) / topData.total) * 100) : 0
                        return (
                          <div key={topicKey} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-300 font-medium truncate max-w-[70%] text-xs">
                                {TOPIC_LABELS[topicKey] || topicKey}
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium">
                                {topData.learning + topData.mastered} von {topData.total} ({topPct}%)
                              </span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${colors.bg.replace('/20', '')} transition-all duration-1000`}
                                style={{ width: `${topPct}%` }}
                              />
                            </div>
                            <div className="flex gap-3 text-[9px] text-slate-500">
                              <span>{topData.mastered} gemeistert</span>
                              <span>{topData.learning} im SR-Pool</span>
                              <span>{topData.new} unberührt</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Action & Stats (Right Column, 1/3 width) */}
        <div className="space-y-6">
          {/* Gesamtfortschritt (Progress Ring) */}
          <div className="glass-light rounded-2xl p-6 flex flex-col items-center justify-center">
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

            {/* Accuracy */}
            <div className="w-full mt-5 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" /> Trefferquote
                </span>
                <span className="text-sm font-bold text-white">{accuracyPercent}%</span>
              </div>
            </div>
          </div>

          {/* Quick Start Card */}
          <button
            id="btn-quick-learn"
            onClick={() => setView('learn')}
            className="w-full glass-light rounded-2xl p-5 card-hover text-left group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center
              shadow-lg shadow-ocean-500/20 group-hover:shadow-ocean-500/30 transition-all flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white group-hover:text-ocean-300 transition-colors">Lernsession starten</p>
              <p className="text-xs text-slate-400 mt-0.5">{dueCount} fällige Fragen warten</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
