import { useEffect, useState } from 'react'
import useStore from './store/useStore'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import LearnMode from './components/LearnMode'
import ExamMode from './components/ExamMode'
import ExamResult from './components/ExamResult'
import ExamCenter from './components/ExamCenter'

import { Menu, Anchor, Heart, X } from 'lucide-react'

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

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
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  useEffect(() => {
    initProgress()
  }, [initProgress])

  return (
    <div className="bg-animated min-h-screen">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-surface-card/60 backdrop-blur-md border-b border-white/5 sticky top-0 z-30">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Anchor className="w-4 h-4 text-ocean-400" />
          <span className="text-sm font-bold text-white tracking-tight">SBF Lernen</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsSupportOpen(!isSupportOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
          >
            <Heart className="w-5 h-5" />
          </button>
          {isSupportOpen && (
            <div className="absolute right-0 top-11 w-72 glass p-4 rounded-xl shadow-2xl border border-white/10 z-50 text-left animate-card-enter">
              <button
                onClick={(e) => { e.stopPropagation(); setIsSupportOpen(false); }}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 p-0.5 rounded cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-slate-300 leading-relaxed pr-4">
                <strong className="text-white text-xs block mb-2.5">Ahoi Matrose! ⛵</strong>
                Es freut mich, dass du diese App nutzt. Falls du mich unterstützen willst, kannst du das gerne über meinen GitHub Support Link tun.
                <br />
                <br />
                Vielen Dank & viel Erfolg!
              </p>
              <a
                href="https://github.com/sponsors/k-hesselmann"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg font-bold text-[11px] text-white
                  bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500
                  transition-all duration-200 shadow-sm shadow-ocean-500/20 hover:scale-[1.01] cursor-pointer"
              >
                <Heart className="w-3 h-3" />
                Github support link
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Heart Support Button */}
      <div className="hidden md:block fixed top-6 right-8 z-40">
        <button
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className="flex items-center justify-center text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
          title="Unterstützung"
        >
          <Heart className="w-5 h-5" />
        </button>
        {isSupportOpen && (
          <div className="absolute right-0 top-8 w-80 glass p-4 rounded-xl shadow-2xl border border-white/10 mt-2 z-50 text-left animate-card-enter">
            <button
              onClick={(e) => { e.stopPropagation(); setIsSupportOpen(false); }}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-slate-300 leading-relaxed pr-4">
              <strong className="text-white text-xs block mb-2.5">Ahoi Matrose! ⛵</strong>
              Es freut mich, dass du diese App zur Lernvorbereitung nutzt. Falls du mich unterstützen willst, kannst du das gerne über meinen GitHub Support Link tun.
              <br />
              <br />
              Vielen Dank & viel Erfolg bei den Prüfungen!
            </p>
            <a
              href="https://github.com/sponsors/k-hesselmann"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg font-bold text-[11px] text-white
                bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500
                transition-all duration-200 shadow-sm shadow-ocean-500/20 hover:scale-[1.01] cursor-pointer"
            >
              <Heart className="w-3 h-3" />
              Github support link
            </a>
          </div>
        )}
      </div>

      <Sidebar />
      <main className={`transition-all duration-300 ease-in-out p-4 md:p-8 relative z-10 min-h-[calc(100vh-53px)] md:min-h-screen ${collapsed ? 'md:ml-[72px] ml-0' : 'md:ml-[250px] ml-0'}`}>
        <ViewRouter />
      </main>
    </div>
  )
}
