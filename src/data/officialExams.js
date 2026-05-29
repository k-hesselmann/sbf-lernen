import { EXAM_CONFIG, CATEGORIES, EXAM_TYPES } from './examConfig.js'
import { OFFICIAL_SEE_SHEETS } from './officialExamsData.js'

/**
 * Creates a seeded pseudo-random number generator.
 * Uses a basic hash function to convert the seed string into an initial integer,
 * followed by a Linear Congruential Generator (LCG) to generate numbers.
 */
function createSeededRandom(seedString) {
  let h = 0
  for (let i = 0; i < seedString.length; i++) {
    h = Math.imul(31, h) + seedString.charCodeAt(i) | 0
  }
  let s = h
  return function () {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

/**
 * Returns the exact, deterministic list of questions for a specific official exam sheet.
 * SBF See sheets will use the exact crawled question mappings from the official exam catalogue.
 * All other license sheets are deterministically selected using a seed unique to the bogen,
 * ensuring the sheet remains static and reproducible.
 */
export function getOfficialBogenQuestions(examType, bogenNumber, allQuestions) {
  const config = EXAM_CONFIG[examType]
  if (!config) return []

  // Check if we are running SBF See (Voll- or Ergänzungsprüfung)
  const isSee = examType === EXAM_TYPES.SEE_MOTOR || examType === EXAM_TYPES.SEE_MOTOR_ERGAENZUNG

  if (isSee && OFFICIAL_SEE_SHEETS[bogenNumber]) {
    const sheetIds = OFFICIAL_SEE_SHEETS[bogenNumber]
    
    // Map of questions by ID for fast lookup
    const qMap = new Map(allQuestions.map(q => [q.id, q]))
    
    // Filter questions based on exam type (Ergänzungsprüfung doesn't have Basisfragen)
    let selectedIds = sheetIds
    if (examType === EXAM_TYPES.SEE_MOTOR_ERGAENZUNG) {
      selectedIds = sheetIds.filter(id => !id.startsWith('B-'))
    }

    const selectedQuestions = selectedIds.map(id => qMap.get(id)).filter(Boolean)

    // Load navigation task questions matching the bogen number
    const taskPrefix = `N-${bogenNumber.toString().padStart(2, '0')}-`
    const navQuestions = allQuestions.filter((q) => q.id.startsWith(taskPrefix))
    
    // Sort navigation questions sequentially (1 to 9)
    navQuestions.sort((a, b) => {
      const numA = parseInt(a.id.split('-')[2], 10)
      const numB = parseInt(b.id.split('-')[2], 10)
      return numA - numB
    })

    return [...selectedQuestions, ...navQuestions]
  }

  // Fallback: Seeded deterministic generator for Binnen, Binnen-Segel, etc.
  let selectedQuestions = []
  let navQuestions = []

  for (const section of config.sections) {
    if (section.category === CATEGORIES.NAVIGATION_SEE) {
      // Find the specific navigation task questions matching the bogen number
      const taskPrefix = `N-${bogenNumber.toString().padStart(2, '0')}-`
      const taskQuestions = allQuestions.filter((q) => q.id.startsWith(taskPrefix))
      
      // Sort them sequentially by subquestion number (e.g. 1 to 9)
      taskQuestions.sort((a, b) => {
        const numA = parseInt(a.id.split('-')[2], 10)
        const numB = parseInt(b.id.split('-')[2], 10)
        return numA - numB
      })
      
      navQuestions = taskQuestions
    } else {
      // Filter questions of this category
      const pool = allQuestions.filter((q) => q.category === section.category)
      
      // Sort first by ID to guarantee a stable starting order across all runs
      pool.sort((a, b) => a.id.localeCompare(b.id))

      // Initialize seeded random generator unique to the exam type, bogen, and category
      const seedStr = `${examType}-${section.category}-bogen-${bogenNumber}`
      const rand = createSeededRandom(seedStr)

      // Seeded Knuth shuffle
      const shuffled = [...pool]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }

      // Slice the official count required for the exam
      const selected = shuffled.slice(0, Math.min(section.examCount, shuffled.length))

      // Sort selected questions by ID for a stable, clean presentation order
      selected.sort((a, b) => a.id.localeCompare(b.id))
      
      selectedQuestions.push(...selected)
    }
  }

  // Combine multiple-choice questions first, and place navigation tasks at the end
  return [...selectedQuestions, ...navQuestions]
}
