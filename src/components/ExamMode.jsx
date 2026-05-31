import { useState, useEffect, useCallback, useRef } from 'react'
import { Clock, AlertTriangle, ChevronLeft, ChevronRight, Send, Flag, Compass } from 'lucide-react'
import useStore from '../store/useStore'
import { CATEGORY_LABELS, CATEGORY_COLORS, EXAM_CONFIG } from '../data/examConfig.js'

function formatTime(ms) {
  if (ms <= 0) return '00:00'
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function ExamMode() {
  const examState = useStore((s) => s.examState)
  const selectedExamType = useStore((s) => s.selectedExamType)
  const setExamAnswer = useStore((s) => s.setExamAnswer)
  const submitExam = useStore((s) => s.submitExam)
  const startExam = useStore((s) => s.startExam)
  const setView = useStore((s) => s.setView)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showOfficialBogenSelector, setShowOfficialBogenSelector] = useState(false)
  const intervalRef = useRef(null)

  // Timer
  useEffect(() => {
    if (!examState || examState.submitted) return

    const tick = () => {
      const remaining = examState.startTime + examState.duration - Date.now()
      setTimeLeft(Math.max(0, remaining))
      if (remaining <= 0) {
        submitExam()
      }
    }

    tick()
    intervalRef.current = setInterval(tick, 1000)
    return () => clearInterval(intervalRef.current)
  }, [examState, submitExam])

  const handleSubmit = useCallback(() => {
    clearInterval(intervalRef.current)
    submitExam()
  }, [submitExam])

  // If exam hasn't started yet, show the Exam Start/Outline screen
  if (!examState) {
    const config = EXAM_CONFIG[selectedExamType]
    if (!config) return null

    return (
      <div key={selectedExamType} className="space-y-6 max-w-3xl mx-auto animate-fade-in">
        {/* Back Button */}
        <div>
          <button
            onClick={() => setView('exams')}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors text-xs font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center text-xl shadow-lg shadow-ocean-500/20 flex-shrink-0">
              {config.icon}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{config.label}</h2>
              <p className="text-slate-400 mt-0.5 text-xs sm:text-sm">{config.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-light text-slate-400 font-mono text-sm font-semibold flex-shrink-0">
            <Clock className="w-4 h-4 text-slate-500" />
            {config.duration} Min. Limit
          </div>
        </div>

        {/* Outline Card */}
        <div className="glass-light rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="text-lg sm:text-xl font-bold text-white block">{config.totalExamQuestions}</span>
              <span className="text-[10px] text-slate-500 font-medium">Fragen</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="text-lg sm:text-xl font-bold text-white block">{config.duration} Min.</span>
              <span className="text-[10px] text-slate-500 font-medium">Zeitlimit</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="text-lg sm:text-xl font-bold text-emerald-400 block">
                {config.sections.reduce((sum, s) => sum + s.passMin, 0)} / {config.totalExamQuestions}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold">Bestehensgrenze</span>
            </div>
          </div>

          {/* Rules Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Prüfungsregeln & Hinweise</h3>
            <ul className="text-[11px] sm:text-xs text-slate-300 space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                <span><strong>Der Timer läuft rückwärts:</strong> Sobald du startest, läuft die Uhr. Bei Ablauf wird die Prüfung sofort eingereicht.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                <span><strong>Keine Hilfsmittel:</strong> Löse alle Fragen ohne Notizen, offene Tabs oder fremde Hilfe.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                <span><strong>Freie Navigation:</strong> Du kannst jederzeit frei zwischen den Fragen hin- und herspringen.</span>
              </li>
              {config.sections.some(s => s.category === 'navigation_see') && (
                <li className="flex flex-col gap-1.5 text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                    <span><strong>Navigationsaufgabe:</strong> Dieser Test enthält eine Navigationskarten-Aufgabe. Nimm dir ausreichend Zeit dafür, da hier min. 7 von 9 Punkten erreicht werden müssen!</span>
                  </div>
                  <div className="ml-4 mt-1 p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-xs text-slate-300 space-y-2">
                    <p className="font-semibold text-emerald-400">💡 Anleitung zur Kartenarbeit:</p>
                    <p>
                      Die Navigationsaufgaben entsprechen den 15 offiziellen Prüfungsaufgaben.
                      In der <strong>echten Prüfung</strong> sind diese Fragen jedoch <strong>keine</strong> Multiple-Choice-Fragen,
                      sondern Freitextaufgaben, bei denen du deine ermittelten Werte eintragen musst.
                      In dieser App behalten wir das Multiple-Choice-Format für die automatische Auswertung bei. Wir empfehlen dir aber,
                      die Aufgaben zuerst handschriftlich zu lösen.
                    </p>
                    <p>
                      Da Messungen und Zeichnungen direkt auf dem Bildschirm ungenau und unskaliert sind, wird dringend empfohlen,
                      die Aufgaben auf der gedruckten <strong>Übungskarte D49</strong> mit einem <strong>Zirkel</strong> und <strong>Kursdreiecken</strong> zu bearbeiten.
                    </p>
                    <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5 space-y-1.5 text-[11px] mt-2">
                      <div className="font-semibold text-amber-400">⚓ Wichtig: Seekarten-PDF für die Navigation</div>
                      <p className="text-slate-300 leading-relaxed font-normal">
                        Aufgrund von Urheberrechtsbestimmungen ist das offizielle D49-Kartenaufgaben-PDF nicht im Code-Repository enthalten.
                      </p>
                      <div className="space-y-1 text-slate-400 font-normal">
                        <p>1. Besorge dir das offizielle PDF der D49-Kartenaufgaben: <strong>Seekarte_D49_Aufgaben_SBF_SEE.pdf</strong>.</p>
                        <p>2. Lege die Datei in das Projektverzeichnis unter: <strong>public/Seekarte_D49_Aufgaben_SBF_SEE.pdf</strong>.</p>
                        <p>3. Drucke das PDF in Originalgröße auf <strong>DIN A3-Papier (100% Skalierung)</strong> aus.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2 pt-1 border-t border-white/5">
                      <a
                        href="/Seekarte_D49_Aufgaben_SBF_SEE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-bold underline flex items-center gap-1 text-[11px]"
                      >
                        📂 Seekarten-Ausschnitte D49 (PDF) öffnen
                      </a>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>

          {/* Passing Boundaries Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Mindestanforderungen je Sektion</h3>
            <div className="border border-white/5 rounded-xl overflow-hidden text-xs">
              <div className="bg-white/5 px-4 py-2 font-bold text-slate-300 grid grid-cols-[1.5fr_1fr_1.2fr] border-b border-white/5">
                <span>Bereich</span>
                <span className="text-center">Prüfungsfragen</span>
                <span className="text-right">Bestehensgrenze</span>
              </div>
              <div className="divide-y divide-white/5">
                {config.sections.map((s, idx) => (
                  <div key={idx} className="px-4 py-2.5 grid grid-cols-[1.5fr_1fr_1.2fr] text-slate-400">
                    <span className="font-semibold text-slate-300">{CATEGORY_LABELS[s.category]}</span>
                    <span className="text-center">{s.examCount} Fragen</span>
                    <span className="text-right text-emerald-400 font-semibold">min. {s.passMin} richtig</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Start Trigger */}
          {!showOfficialBogenSelector ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => startExam()}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white
                  bg-gradient-to-r ${config.color === 'amber' ? 'from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/20' : config.color === 'violet' ? 'from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 shadow-violet-500/20' : 'from-ocean-500 to-ocean-600 hover:from-ocean-400 hover:to-ocean-500 shadow-ocean-500/20'}
                  transition-all duration-200 shadow-lg cursor-pointer`}
              >
                Zufällige Simulation starten
              </button>
              <button
                onClick={() => setShowOfficialBogenSelector(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-slate-300
                  bg-white/5 hover:bg-white/10 border border-white/10
                  transition-all duration-200 cursor-pointer"
              >
                Amtliche Bögen 1-15
              </button>
            </div>
          ) : (
            <div className="space-y-4 p-5 rounded-2xl bg-white/5 border border-white/5 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Amtlichen Prüfungsbogen wählen (1–15)</span>
                <button
                  onClick={() => setShowOfficialBogenSelector(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                  Abbrechen
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => startExam(num)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer
                      bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5
                      hover:scale-102 active:scale-98`}
                  >
                    Bogen {num}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // If exam has been submitted or closed, go back
  if (examState.submitted) {
    return null
  }

  const { questions, answers } = examState
  const config = EXAM_CONFIG[examState.examType]

  // Guard: stale exam state from old store format
  if (!config || !questions || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="glass-light rounded-2xl p-8 text-center max-w-sm">
          <p className="text-white font-medium mb-4">Prüfungsdaten veraltet.</p>
          <button
            onClick={() => setView('exams')}
            className="px-5 py-2.5 rounded-xl bg-ocean-500 text-white text-sm font-medium hover:bg-ocean-600 transition-all"
          >
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    )
  }

  const question = questions[currentIndex]
  const navTaskIdMatch = question?.id?.match(/^N-(\d+)-\d+$/)
  const navTaskPage = navTaskIdMatch ? parseInt(navTaskIdMatch[1], 10) : 1

  const answeredCount = Object.keys(answers).length
  const timeWarning = timeLeft < 5 * 60 * 1000
  const timeCritical = timeLeft < 60 * 1000
  const catColors = CATEGORY_COLORS[question.category] || { bg: 'bg-slate-500/20', text: 'text-slate-400' }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center text-xl shadow-lg shadow-ocean-500/20 flex-shrink-0">
            {config.icon}
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Prüfungssimulation</h2>
            <p className="text-slate-400 mt-0.5 text-xs sm:text-sm">
              {config.label} · {examState.officialBogenNumber !== null ? `Amtlicher Bogen ${examState.officialBogenNumber}` : 'Zufällige Simulation'} · {questions.length} Fragen
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-bold flex-shrink-0
          ${timeCritical ? 'bg-rose-500/20 text-rose-400 animate-pulse' :
            timeWarning ? 'bg-amber-500/20 text-amber-400' :
            'glass-light text-white'}`}>
          <Clock className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Navigator Dots */}
      <div className="glass-light rounded-2xl p-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-wrap gap-2 justify-center">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200
                ${idx === currentIndex
                  ? 'bg-ocean-500 text-white shadow-lg shadow-ocean-500/30 scale-110'
                  : answers[q.id] !== undefined
                    ? 'bg-ocean-500/20 text-ocean-300'
                    : 'bg-white/5 text-slate-500 hover:bg-white/10'
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-light rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '200ms' }} key={question.id}>
        <div className="flex items-start gap-3 mb-2 flex-wrap">
          <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-lg">
            Frage {currentIndex + 1} von {questions.length}
          </span>
          <span className={`text-xs px-2 py-1 rounded-lg ${catColors.bg} ${catColors.text}`}>
            {CATEGORY_LABELS[question.category] || question.category}
          </span>
        </div>

        {question.taskDesc && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-emerald-400 flex items-center justify-between gap-1.5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {question.taskTitle} (Ausgangslage)
              </div>
              <a
                href={`/Seekarte_D49_Aufgaben_SBF_SEE.pdf#page=${navTaskPage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1"
              >
                Seekarte D49 öffnen
              </a>
            </div>
            <p className="leading-relaxed font-normal text-slate-300">{question.taskDesc}</p>
          </div>
        )}

        <h3 className="text-lg font-semibold text-white mt-4 leading-relaxed">{question.question}</h3>

        {question.image && (
          <div className="mt-4 flex justify-center">
            <img src={question.image} alt="Frage Bild" className="max-h-48 rounded-lg border border-white/10" />
          </div>
        )}

        {/* Options */}
        <div className="mt-6 space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = answers[question.id] === idx
            return (
              <button
                key={idx}
                onClick={() => setExamAnswer(question.id, idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium
                  flex items-start gap-3 transition-all duration-200
                  ${isSelected
                    ? 'bg-ocean-500/15 border-ocean-500/50 text-ocean-200'
                    : 'border-white/8 text-slate-300 hover:bg-white/5 hover:border-white/15'
                  }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5
                  ${isSelected ? 'bg-ocean-500 text-white' : 'bg-white/5 text-slate-400'}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '300ms' }}>
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
            text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-30 transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">{answeredCount}/{questions.length} beantwortet</span>
          
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ocean-500/20 text-ocean-300
                text-sm font-medium hover:bg-ocean-500/30 transition-all duration-200"
            >
              Weiter
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ocean-500 text-white
                text-sm font-medium hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-500/20"
            >
              <Send className="w-4 h-4" />
              Abgeben
            </button>
          )}
        </div>
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass rounded-2xl p-8 max-w-sm w-full mx-4 animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
              <Flag className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white text-center mb-2">Prüfung abgeben?</h3>
            <p className="text-sm text-slate-400 text-center mb-1">
              Du hast {answeredCount} von {questions.length} Fragen beantwortet.
            </p>
            {answeredCount < questions.length && (
              <p className="text-xs text-amber-400 text-center flex items-center justify-center gap-1 mb-4">
                <AlertTriangle className="w-3 h-3" />
                {questions.length - answeredCount} Fragen sind unbeantwortet!
              </p>
            )}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400
                  hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-200"
              >
                Zurück
              </button>
              <button
                id="btn-confirm-submit"
                onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-ocean-500
                  text-white hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-500/20"
              >
                Abgeben
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
