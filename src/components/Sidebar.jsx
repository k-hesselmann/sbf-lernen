import { LayoutDashboard, GraduationCap, ClipboardCheck, Anchor, Ship, ChevronLeft, ChevronRight } from 'lucide-react'
import useStore from '../store/useStore'
import { useState } from 'react'
import { EXAM_TYPES, EXAM_CONFIG } from '../data/examConfig.js'

export default function Sidebar() {
  const { currentView, setView, selectedExamType, setSelectedExamType } = useStore()
  const [collapsed, setCollapsed] = useState(false)
  const [learnExpanded, setLearnExpanded] = useState(true)
  const [examsExpanded, setExamsExpanded] = useState(true)

  const handleLearnSelect = (type) => {
    setSelectedExamType(type)
    setView('learn')
  }

  const handleExamSelect = (type) => {
    useStore.getState().prepareExam(type)
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-[250px]'}
        glass flex flex-col`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5 flex-shrink-0">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-ocean-500/20">
          <Anchor className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden animate-fade-in-up">
            <h1 className="text-base font-bold text-white tracking-tight">SBF Lernen</h1>
            <p className="text-[11px] text-slate-400 font-medium">Sportbootführerschein</p>
          </div>
        )}
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4 custom-scrollbar">
        {/* Lern-Cockpit Button */}
        <div>
          <button
            onClick={() => setView('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-200 group relative text-left
              ${currentView === 'dashboard'
                ? 'bg-ocean-500/15 text-ocean-300 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
          >
            {currentView === 'dashboard' && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-ocean-400 rounded-r-full" />
            )}
            <LayoutDashboard className={`w-[18px] h-[18px] flex-shrink-0 transition-colors
              ${currentView === 'dashboard' ? 'text-ocean-400' : 'text-slate-500 group-hover:text-slate-300'}`}
            />
            {!collapsed && <span>Lern-Cockpit</span>}
          </button>
        </div>

        {/* Prüfungs-Center Button */}
        <div>
          <button
            onClick={() => setView('exams')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-200 group relative text-left
              ${currentView === 'exams' || currentView === 'exam' || currentView === 'examResult'
                ? 'bg-ocean-500/15 text-ocean-300 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
          >
            {(currentView === 'exams' || currentView === 'exam' || currentView === 'examResult') && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-ocean-400 rounded-r-full" />
            )}
            <ClipboardCheck className={`w-[18px] h-[18px] flex-shrink-0 transition-colors
              ${currentView === 'exams' || currentView === 'exam' || currentView === 'examResult' ? 'text-ocean-400' : 'text-slate-500 group-hover:text-slate-300'}`}
            />
            {!collapsed && <span>Prüfungs-Center</span>}
          </button>
        </div>

        {/* Lernen Collapsible Section */}
        <div className="space-y-1">
          {/* Header */}
          <button
            onClick={() => {
              if (collapsed) {
                setCollapsed(false)
                setLearnExpanded(true)
              } else {
                setLearnExpanded(!learnExpanded)
              }
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium
              text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-[18px] h-[18px] text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
              {!collapsed && <span>Lernen</span>}
            </div>
            {!collapsed && (
              <ChevronRight className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${learnExpanded ? 'rotate-90' : ''}`} />
            )}
          </button>

          {/* Sub-menu items */}
          {!collapsed && learnExpanded && (
            <div className="pl-4 pr-1 py-1 space-y-1 border-l border-white/5 ml-5 animate-fade-in-up">
              {Object.entries(EXAM_CONFIG)
                .filter(([key]) => !key.includes('ergaenzung'))
                .map(([key, config]) => {
                  const isActive = currentView === 'learn' && selectedExamType === key
                  return (
                    <button
                      key={key}
                      onClick={() => handleLearnSelect(key)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left relative
                        ${isActive
                          ? 'text-ocean-300 bg-ocean-500/10'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-ocean-400 rounded-r-full" />
                      )}
                      <span>{config.icon}</span>
                      <span className="truncate">{config.shortLabel}</span>
                    </button>
                  )
                })}
            </div>
          )}
        </div>

        {/* Prüfungen Collapsible Section */}
        <div className="space-y-1">
          {/* Header */}
          <button
            onClick={() => {
              if (collapsed) {
                setCollapsed(false)
                setExamsExpanded(true)
              } else {
                setExamsExpanded(!examsExpanded)
              }
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium
              text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-[18px] h-[18px] text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
              {!collapsed && <span>Prüfungen</span>}
            </div>
            {!collapsed && (
              <ChevronRight className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${examsExpanded ? 'rotate-90' : ''}`} />
            )}
          </button>

          {/* Sub-menu items */}
          {!collapsed && examsExpanded && (
            <div className="pl-4 pr-1 py-1 space-y-3 border-l border-white/5 ml-5 animate-fade-in-up">
              {/* Vollprüfungen Subgroup */}
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1.5 px-2">Vollprüfungen</p>
                <div className="space-y-1">
                  {Object.entries(EXAM_CONFIG)
                    .filter(([key]) => !key.includes('ergaenzung'))
                    .map(([key, config]) => {
                      const isActive = (currentView === 'exam' || currentView === 'examResult') && selectedExamType === key
                      return (
                        <button
                          key={key}
                          onClick={() => handleExamSelect(key)}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-left relative
                            ${isActive
                              ? 'text-ocean-300 bg-ocean-500/10'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                        >
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-ocean-400 rounded-r-full" />
                          )}
                          <span className="text-xs">{config.icon}</span>
                          <span className="truncate">{config.shortLabel}</span>
                        </button>
                      )
                    })}
                </div>
              </div>

              {/* Ergänzungsprüfungen Subgroup */}
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1.5 px-2">Ergänzungsprüfungen</p>
                <div className="space-y-1">
                  {Object.entries(EXAM_CONFIG)
                    .filter(([key]) => key.includes('ergaenzung'))
                    .map(([key, config]) => {
                      const isActive = (currentView === 'exam' || currentView === 'examResult') && selectedExamType === key
                      return (
                        <button
                          key={key}
                          onClick={() => handleExamSelect(key)}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 text-left relative
                            ${isActive
                              ? 'text-ocean-300 bg-ocean-500/10'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                        >
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-ocean-400 rounded-r-full" />
                          )}
                          <span className="text-xs">{config.icon}</span>
                          <span className="truncate text-ellipsis overflow-hidden">{config.shortLabel}</span>
                        </button>
                      )
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Decorative Ship */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-white/5 flex-shrink-0">
          <div className="flex items-center gap-2 text-slate-500">
            <Ship className="w-4 h-4" />
            <span className="text-xs">Mast- und Schotbruch!</span>
          </div>
        </div>
      )}

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-surface-card border border-white/10
          flex items-center justify-center text-slate-400 hover:text-white hover:border-ocean-500/30
          transition-all duration-200 shadow-lg z-50"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  )
}
