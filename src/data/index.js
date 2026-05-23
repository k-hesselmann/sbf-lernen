/**
 * Central question index — combines all question banks
 *
 * Target: 72 Basis + 213 See + 15 Navigation + 181 Binnen + 47 Segel = 528 total
 */
import { basisQuestions } from './questions_basis.js'
import { seeQuestions1 } from './questions_see_1.js'
import { seeQuestions2 } from './questions_see_2.js'
import { binnenQuestions1 } from './questions_binnen_1.js'
import { binnenQuestions2 } from './questions_binnen_2.js'
import { segelQuestions } from './questions_segel.js'
import { navigationQuestions } from './questions_navigation.js'
import { CATEGORIES, getCategoriesForExam } from './examConfig.js'

export const allQuestions = [
  ...basisQuestions,
  ...seeQuestions1,
  ...seeQuestions2,
  ...binnenQuestions1,
  ...binnenQuestions2,
  ...segelQuestions,
  ...navigationQuestions,
]

/**
 * Filter questions for a specific exam type
 */
export function getQuestionsForExam(examType) {
  const cats = getCategoriesForExam(examType)
  return allQuestions.filter((q) => cats.includes(q.category))
}

/**
 * Filter questions by category
 */
export function getQuestionsByCategory(category) {
  return allQuestions.filter((q) => q.category === category)
}

/**
 * Get question counts per category
 */
export function getQuestionCounts() {
  const counts = {}
  for (const cat of Object.values(CATEGORIES)) {
    counts[cat] = allQuestions.filter((q) => q.category === cat).length
  }
  counts.total = allQuestions.length
  return counts
}
