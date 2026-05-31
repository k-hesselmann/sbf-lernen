import { useState, useMemo, useCallback } from 'react'
import { Check, ChevronLeft, ChevronDown, ChevronRight, Pin, BookOpen, Search, Filter, Layers, RotateCcw, Compass, HelpCircle } from 'lucide-react'
import useStore from '../store/useStore'
import { CATEGORY_LABELS, CATEGORY_COLORS, TOPIC_LABELS, CATEGORIES } from '../data/examConfig.js'

export default function QuestionDatabase() {
  const setView = useStore((s) => s.setView)
  const questions = useStore((s) => s.questions)
  const cardProgress = useStore((s) => s.cardProgress)
  const pinnedQuestions = useStore((s) => s.pinnedQuestions)
  const togglePinQuestion = useStore((s) => s.togglePinQuestion)

  // Local UI States
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [expandedQuestions, setExpandedQuestions] = useState({})
  const [displayLimit, setDisplayLimit] = useState(30)

  // Get status helper
  const getStatus = useCallback((qId) => {
    const p = cardProgress[qId]
    if (!p || p.repetitions === 0) return 'new'
    if (p.interval >= 6) return 'mastered'
    return 'learning'
  }, [cardProgress])

  // Extract all categories and topics from all questions dynamically
  const categoriesAndTopics = useMemo(() => {
    const mapping = {}
    questions.forEach((q) => {
      const cat = q.category
      const topic = q.topic || 'other'
      if (!mapping[cat]) {
        mapping[cat] = new Set()
      }
      mapping[cat].add(topic)
    })

    const catsOrder = [
      CATEGORIES.BASIS,
      CATEGORIES.SEE_SPEZIFISCH,
      CATEGORIES.BINNEN_SPEZIFISCH,
      CATEGORIES.SEGEL_SPEZIFISCH,
      CATEGORIES.NAVIGATION_SEE
    ]

    return catsOrder.map((cat) => ({
      category: cat,
      label: CATEGORY_LABELS[cat] || cat,
      topics: Array.from(mapping[cat] || []).map((topic) => ({
        id: `${cat}:${topic}`,
        label: TOPIC_LABELS[topic] || topic.replace(/_/g, ' '),
      }))
    }))
  }, [questions])

  // Generate list of all topic IDs for default selection
  const allTopicIds = useMemo(() => {
    return categoriesAndTopics.flatMap((c) => c.topics.map((t) => t.id))
  }, [categoriesAndTopics])

  // Selected topics state (by default everything selected)
  const [selectedTopics, setSelectedTopics] = useState(allTopicIds)

  // Topics checklist helper functions
  const handleToggleTopic = useCallback((topicId) => {
    setSelectedTopics((prev) => {
      const next = prev.includes(topicId)
        ? prev.filter((t) => t !== topicId)
        : [...prev, topicId]
      setDisplayLimit(30) // reset pagination
      return next
    })
  }, [])

  const handleToggleCategory = useCallback((catGroup) => {
    const topicIds = catGroup.topics.map((t) => t.id)
    setSelectedTopics((prev) => {
      const selectedCount = topicIds.filter((t) => prev.includes(t)).length
      let next
      if (selectedCount > 0) {
        next = prev.filter((t) => !topicIds.includes(t))
      } else {
        next = [...prev, ...topicIds]
      }
      setDisplayLimit(30) // reset pagination
      return next
    })
  }, [])

  const handleSelectAll = useCallback(() => {
    setSelectedTopics(allTopicIds)
    setDisplayLimit(30)
  }, [allTopicIds])

  const handleClearSelection = useCallback(() => {
    setSelectedTopics([])
    setDisplayLimit(30)
  }, [])

  // Topic Question Counts dynamically across all questions
  const topicQuestionCounts = useMemo(() => {
    const counts = {}
    questions.forEach((q) => {
      if (q.category && q.topic) {
        const key = `${q.category}:${q.topic}`
        counts[key] = (counts[key] || 0) + 1
      }
    })
    return counts
  }, [questions])

  const selectionSummary = useMemo(() => {
    const totalTopicsCount = allTopicIds.length
    const selectedCount = selectedTopics.length

    let totalQuestions = 0
    selectedTopics.forEach((t) => {
      totalQuestions += (topicQuestionCounts[t] || 0)
    })

    if (selectedCount === totalTopicsCount) {
      return `Alle Themen (${totalQuestions} Fragen)`
    }
    if (selectedCount === 0) {
      return `Keine Themen (0 Fragen)`
    }
    return `${selectedCount} von ${totalTopicsCount} Themen (${totalQuestions} Fragen)`
  }, [allTopicIds, selectedTopics, topicQuestionCounts])

  // Filter questions based on all active criteria
  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return questions.filter((q) => {
      // 1. Search Query
      if (query) {
        const matchesId = q.id.toLowerCase().includes(query)
        const matchesQuestion = q.question.toLowerCase().includes(query)
        const matchesOptions = q.options && q.options.some((o) => o.toLowerCase().includes(query))
        if (!matchesId && !matchesQuestion && !matchesOptions) return false
      }

      // 2. Category & Topic Checkbox Selection
      const key = `${q.category}:${q.topic}`
      if (!selectedTopics.includes(key)) return false

      // 3. Status Filter
      const status = getStatus(q.id)
      const isPinned = pinnedQuestions.includes(q.id)

      if (statusFilter === 'new' && status !== 'new') return false
      if (statusFilter === 'learning' && status !== 'learning') return false
      if (statusFilter === 'mastered' && status !== 'mastered') return false
      if (statusFilter === 'pinned' && !isPinned) return false

      return true
    })
  }, [questions, searchQuery, selectedTopics, statusFilter, getStatus, pinnedQuestions])

  // Expand / Collapse Toggles
  const toggleQuestionExpand = (questionId) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  const handleExpandAll = () => {
    const updated = {}
    filteredQuestions.slice(0, displayLimit).forEach((q) => {
      updated[q.id] = true
    })
    setExpandedQuestions(updated)
  }

  const handleCollapseAll = () => {
    setExpandedQuestions({})
  }

  const handleLoadMore = () => {
    setDisplayLimit((prev) => prev + 30)
  }

  // Count total stats by status in current filtered set (for badges)
  const statusCounts = useMemo(() => {
    const counts = { new: 0, learning: 0, mastered: 0, pinned: 0 }
    // Loop through ALL questions to get correct badge numbers
    questions.forEach((q) => {
      const status = getStatus(q.id)
      counts[status]++
      if (pinnedQuestions.includes(q.id)) counts.pinned++
    })
    return counts
  }, [questions, getStatus, pinnedQuestions])

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Fragenkatalog</h2>
            <p className="text-slate-400 mt-0.5 text-sm">
              Durchsuche und filtere die gesamte Datenbank mit allen {questions.length} SBF-Prüfungsfragen
            </p>
          </div>
        </div>
      </div>

      {/* Filters Card */}
      <div className="glass-light rounded-2xl p-5 space-y-4 animate-fade-in z-30 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Text Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setDisplayLimit(30); }}
              placeholder="Frage suchen... (z. B. B-001, Wind, Lichter)"
              className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>

          {/* Categories / Topics Dropdown Selector */}
          <div className="md:col-span-6 relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200
                focus:outline-none focus:border-violet-500/50 transition-colors cursor-pointer flex justify-between items-center"
            >
              <span className="truncate flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-violet-400" />
                {selectionSummary}
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute left-0 right-0 mt-2 z-50 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-2xl max-h-96 overflow-y-auto space-y-4 animate-fade-in custom-scrollbar">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5 text-xs">
                    <span className="text-slate-400 font-bold uppercase tracking-wider">Themenauswahl</span>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleSelectAll}
                        className="text-violet-400 hover:text-violet-300 font-bold transition-colors cursor-pointer"
                      >
                        Alle auswählen
                      </button>
                      <span className="text-slate-700">|</span>
                      <button
                        type="button"
                        onClick={handleClearSelection}
                        className="text-rose-400 hover:text-rose-300 font-bold transition-colors cursor-pointer"
                      >
                        Aufheben
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {categoriesAndTopics.map((catGroup) => {
                      const catId = catGroup.category
                      const catLabel = catGroup.label
                      const topics = catGroup.topics

                      const selectedCount = topics.filter((t) => selectedTopics.includes(t.id)).length
                      const isAllSelected = selectedCount === topics.length
                      const isSomeSelected = selectedCount > 0 && selectedCount < topics.length

                      const selectedQuestions = topics.reduce((sum, t) => {
                        return sum + (selectedTopics.includes(t.id) ? (topicQuestionCounts[t.id] || 0) : 0)
                      }, 0)
                      
                      const totalQuestions = topics.reduce((sum, t) => {
                        return sum + (topicQuestionCounts[t.id] || 0)
                      }, 0)

                      return (
                        <div key={catId} className="space-y-2">
                          <label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer select-none transition-colors">
                            <input
                              type="checkbox"
                              checked={isAllSelected}
                              ref={(el) => {
                                if (el) el.indeterminate = isSomeSelected
                              }}
                              onChange={() => handleToggleCategory(catGroup)}
                              className="w-4 h-4 rounded border-white/10 bg-slate-950 text-violet-500 focus:ring-violet-500/20 focus:ring-offset-0 transition-all cursor-pointer"
                            />
                            <span className="text-xs uppercase tracking-wider text-slate-300 font-bold flex-1">
                              {catLabel}
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold bg-white/5 px-2 py-0.5 rounded-full">
                              {selectedQuestions}/{totalQuestions}
                            </span>
                          </label>

                          <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {topics.map((topic) => {
                              const isSelected = selectedTopics.includes(topic.id)
                              const count = topicQuestionCounts[topic.id] || 0

                              return (
                                <label
                                  key={topic.id}
                                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer select-none transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => handleToggleTopic(topic.id)}
                                    className="w-4 h-4 rounded border-white/10 bg-slate-950 text-violet-500 focus:ring-violet-500/20 focus:ring-offset-0 transition-all cursor-pointer"
                                  />
                                  <span className="text-xs font-semibold text-slate-400 flex-1 truncate">
                                    {topic.label}
                                  </span>
                                  <span className="text-[10px] text-slate-600 font-medium">
                                    ({count})
                                  </span>
                                </label>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Status Filters Bar & Expand Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/5">
          {/* Status Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle', count: questions.length },
              { id: 'new', label: 'Neu', count: statusCounts.new, color: 'text-ocean-400' },
              { id: 'learning', label: 'Lernen', count: statusCounts.learning, color: 'text-amber-400' },
              { id: 'mastered', label: 'Gemeistert', count: statusCounts.mastered, color: 'text-emerald-400' },
              { id: 'pinned', label: 'Gemerkt', count: statusCounts.pinned, color: 'text-violet-400' },
            ].map((st) => {
              const isActive = statusFilter === st.id
              return (
                <button
                  key={st.id}
                  onClick={() => { setStatusFilter(st.id); setDisplayLimit(30); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5
                    ${isActive
                      ? 'bg-violet-500 text-white shadow-md shadow-violet-500/10'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'}`}
                >
                  <span className={isActive ? 'text-white' : st.color}>{st.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-950/60'}`}>
                    {st.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Expand/Collapse All */}
          {filteredQuestions.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <button
                onClick={handleExpandAll}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Alle ausklappen
              </button>
              <span>·</span>
              <button
                onClick={handleCollapseAll}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Alle einklappen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Questions Listing */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          <>
            <div className="text-xs text-slate-500 px-1 font-semibold">
              Zeige {Math.min(displayLimit, filteredQuestions.length)} von {filteredQuestions.length} Fragen
            </div>

            <div className="space-y-3">
              {filteredQuestions.slice(0, displayLimit).map((q) => {
                const catColors = CATEGORY_COLORS[q.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }
                const isExpanded = !!expandedQuestions[q.id]
                const isPinned = pinnedQuestions.includes(q.id)
                const status = getStatus(q.id)

                // Render left border and badges according to SM-2 learning state
                const statusConfig = {
                  new: { label: 'Neu', border: 'border-l-slate-600', badge: 'bg-slate-500/10 text-slate-400', icon: Layers },
                  learning: { label: 'Lernen', border: 'border-l-amber-500', badge: 'bg-amber-500/15 text-amber-400', icon: RotateCcw },
                  mastered: { label: 'Gemeistert', border: 'border-l-emerald-500', badge: 'bg-emerald-500/15 text-emerald-400', icon: Check },
                }[status]

                const navTaskIdMatch = q.id.match(/^N-(\d+)-\d+$/)
                const navTaskPage = navTaskIdMatch ? parseInt(navTaskIdMatch[1], 10) : 1

                return (
                  <div
                    key={q.id}
                    onClick={() => toggleQuestionExpand(q.id)}
                    className={`glass-light rounded-xl p-4 border-l-[3px] transition-all duration-200 select-none cursor-pointer hover:bg-white/[0.02] card-hover
                      ${statusConfig.border}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Left side expand chevron indicator */}
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 bg-white/5 text-slate-500">
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Header metadata row */}
                        <div className="flex items-center gap-2 flex-wrap mb-2 border-b border-white/5 pb-2">
                          <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                            {q.id}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${catColors.bg} ${catColors.text} font-semibold`}>
                            {CATEGORY_LABELS[q.category] || q.category}
                          </span>
                          {q.topic && (
                            <span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                              {TOPIC_LABELS[q.topic] || q.topic.replace(/_/g, ' ')}
                            </span>
                          )}
                          
                          {/* Learning Status Badge */}
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 ${statusConfig.badge}`}>
                            <statusConfig.icon className="w-2.5 h-2.5" />
                            {statusConfig.label}
                          </span>
                        </div>

                        <p className="text-sm font-semibold text-white leading-relaxed">{q.question}</p>
                        
                        {q.image && (
                          <div className="mt-2.5 flex justify-start">
                            <img src={q.image} alt="Frage Bild" className="max-h-32 rounded border border-white/10" />
                          </div>
                        )}

                        {q.taskDesc && isExpanded && (
                          <div className="mt-3 p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
                            <div className="font-bold text-emerald-400 flex items-center justify-between gap-1">
                              <span className="flex items-center gap-1">
                                <Compass className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                {q.taskTitle} (Ausgangslage)
                              </span>
                              <a
                                href={`/Seekarte_D49_Aufgaben_SBF_SEE.pdf#page=${navTaskPage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-emerald-400 hover:text-emerald-300 underline font-semibold"
                              >
                                Seekarte D49 öffnen
                              </a>
                            </div>
                            <p className="leading-relaxed font-normal text-slate-300">{q.taskDesc}</p>
                          </div>
                        )}

                        {/* Options rendered directly. Option A is always correct (index 0). No reshuffling. */}
                        {isExpanded && q.options && q.options.length > 0 && (
                          <div className="mt-4 space-y-2.5 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            {q.options.map((option, optIdx) => {
                              const isCorrectOpt = optIdx === 0
                              
                              let optStyle = "bg-white/5 border-white/5 text-slate-300"
                              let icon = null

                              if (isCorrectOpt) {
                                optStyle = "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold"
                                icon = <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              }

                              return (
                                <div
                                  key={optIdx}
                                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs leading-relaxed ${optStyle}`}
                                >
                                  <span className={`font-bold flex-shrink-0 ${isCorrectOpt ? 'text-emerald-400' : 'text-slate-500'}`}>
                                    {String.fromCharCode(65 + optIdx)}:
                                  </span>
                                  <span className="flex-1">{option}</span>
                                  {icon}
                                </div>
                              )
                            })}

                            {q.solutionExplanation && (
                              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-xs text-slate-400 mt-2 leading-relaxed">
                                <span className="font-semibold text-emerald-400/90 block mb-1">Erklärung / Lösungsweg:</span>
                                {q.solutionExplanation}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Right Pin Bookmark button */}
                      <div className="flex flex-col items-end justify-between self-stretch flex-shrink-0 gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            togglePinQuestion(q.id)
                          }}
                          className="transition-all duration-200 cursor-pointer flex-shrink-0 hover:scale-110 p-1"
                          title={isPinned ? 'Karte entpinnen' : 'Karte merken'}
                        >
                          <Pin
                            className={`w-4 h-4 transition-all duration-200 rotate-45
                              ${isPinned
                                ? 'text-white fill-white'
                                : 'text-slate-500 hover:text-slate-300'}`}
                          />
                        </button>
                        <span className="text-[10px] text-slate-500 font-medium hover:text-slate-300 hidden sm:inline">
                          {isExpanded ? 'Details verbergen' : 'Details einblenden'}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Load More Pagination Trigger */}
            {displayLimit < filteredQuestions.length && (
              <div className="pt-2 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-200 cursor-pointer"
                >
                  Mehr Fragen laden ({filteredQuestions.length - displayLimit} verbleibend)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="glass-light rounded-xl p-12 text-center text-slate-500 space-y-2.5">
            <HelpCircle className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm font-semibold">Keine passenden Fragen gefunden.</p>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Passe deine Filterkriterien oder den Suchbegriff an, um andere Fragen anzuzeigen.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
