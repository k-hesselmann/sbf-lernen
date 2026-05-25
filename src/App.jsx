import { useEffect } from 'react'
import useStore from './store/useStore'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import LearnMode from './components/LearnMode'
import ExamMode from './components/ExamMode'
import ExamResult from './components/ExamResult'
import ExamCenter from './components/ExamCenter'

import { Menu, Anchor } from 'lucide-react'

function ViewRouter() {
  const currentView = useStore((s) => s.currentView)

  switch (currentView) {
    case 'dashboard':
      return <Dashboard />
    case 'learn':
      return <LearnMode />
    case 'exam':
      return <ExamMode />
    case 'examResult':
      return <ExamResult />
    case 'exams':
      return <ExamCenter />
    default:
      return <Dashboard />
  }
}

export default function App() {
  const initProgress = useStore((s) => s.initProgress)
  const collapsed = useStore((s) => s.sidebarCollapsed)
  const setMobileSidebarOpen = useStore((s) => s.setMobileSidebarOpen)

  useEffect(() => {
    initProgress()
  }, [initProgress])

  return (
    <div className="bg-animated min-h-screen">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-surface-card/60 backdrop-blur-md border-b border-white/5 sticky top-0 z-30">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Anchor className="w-4 h-4 text-ocean-400" />
          <span className="text-sm font-bold text-white tracking-tight">SBF Lernen</span>
        </div>
        <div className="w-9 h-9" /> {/* Spacer */}
      </header>

      <Sidebar />
      <main className={`transition-all duration-300 ease-in-out p-4 md:p-8 relative z-10 min-h-[calc(100vh-53px)] md:min-h-screen ${collapsed ? 'md:ml-[72px] ml-0' : 'md:ml-[250px] ml-0'}`}>
        <ViewRouter />
      </main>
    </div>
  )
}
