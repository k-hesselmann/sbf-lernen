import { useEffect } from 'react'
import useStore from './store/useStore'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import LearnMode from './components/LearnMode'
import ExamMode from './components/ExamMode'
import ExamResult from './components/ExamResult'
import ExamCenter from './components/ExamCenter'

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

  useEffect(() => {
    initProgress()
  }, [initProgress])

  return (
    <div className="bg-animated min-h-screen">
      <Sidebar />
      <main className="ml-[240px] p-8 relative z-10 min-h-screen">
        <ViewRouter />
      </main>
    </div>
  )
}
