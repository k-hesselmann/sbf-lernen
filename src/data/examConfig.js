/**
 * Official SBF Exam Configuration
 * Based on amtlicher Fragenkatalog (ELWIS, Stand 01.08.2023)
 *
 * Three exam types:
 *   1. SBF See (Motor)          – 30 MC + 1 Navigation task
 *   2. SBF Binnen (Motor)       – 30 MC
 *   3. SBF Binnen (Segel+Motor) – 37 MC
 */

// ─── Question Categories ───
export const CATEGORIES = {
  BASIS: 'basis',
  SEE_SPEZIFISCH: 'see_spezifisch',
  BINNEN_SPEZIFISCH: 'binnen_spezifisch',
  SEGEL_SPEZIFISCH: 'segel_spezifisch',
  NAVIGATION_SEE: 'navigation_see',
}

export const CATEGORY_LABELS = {
  [CATEGORIES.BASIS]: 'Basisfragen',
  [CATEGORIES.SEE_SPEZIFISCH]: 'Spez. Fragen See',
  [CATEGORIES.BINNEN_SPEZIFISCH]: 'Spez. Fragen Binnen',
  [CATEGORIES.SEGEL_SPEZIFISCH]: 'Spez. Fragen Segeln',
  [CATEGORIES.NAVIGATION_SEE]: 'Navigation (See)',
}

export const CATEGORY_COLORS = {
  [CATEGORIES.BASIS]: { bg: 'bg-ocean-500/20', text: 'text-ocean-400', border: 'border-ocean-500/30' },
  [CATEGORIES.SEE_SPEZIFISCH]: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  [CATEGORIES.BINNEN_SPEZIFISCH]: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  [CATEGORIES.SEGEL_SPEZIFISCH]: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
  [CATEGORIES.NAVIGATION_SEE]: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
}

// ─── Topic Subcategories ───
export const TOPICS = {
  // Basisfragen topics
  RECHTLICHE_VORSCHRIFTEN: 'rechtliche_vorschriften',
  SICHERHEIT: 'sicherheit',
  UMWELTSCHUTZ: 'umweltschutz',
  ALLGEMEINE_FAHRZEUGFUEHRUNG: 'allgemeine_fahrzeugfuehrung',

  // See-specific topics
  KVR: 'kvr',
  SEESCHSTRSO: 'seeschstrso',
  SEEMANNSCHAFT: 'seemannschaft',
  SCHIFFFAHRTSZEICHEN: 'schifffahrtszeichen',
  LICHTER_SICHTZEICHEN: 'lichter_sichtzeichen',
  SCHALLSIGNALE: 'schallsignale',
  AUSWEICHREGELN: 'ausweichregeln',
  WETTERKUNDE: 'wetterkunde',
  VERKEHRSTRENNUNGSGEBIETE: 'verkehrstrennungsgebiete',
  FAHRWASSER: 'fahrwasser',

  // Binnen-specific topics
  BINNENSCHIFFFAHRTSRECHT: 'binnenschifffahrtsrecht',
  BINNENSCHIFFFAHRTSZEICHEN: 'binnenschifffahrtszeichen',
  FAHRZEUGFUEHRUNG_BINNEN: 'fahrzeugfuehrung_binnen',
  SCHLEUSEN: 'schleusen',

  // Segel-specific topics
  SEGELTECHNIK: 'segeltechnik',
  SEGELTHEORIE: 'segeltheorie',

  // Navigation topics
  NAVIGATION: 'navigation',
}

export const TOPIC_LABELS = {
  [TOPICS.RECHTLICHE_VORSCHRIFTEN]: 'Rechtliche Vorschriften',
  [TOPICS.SICHERHEIT]: 'Sicherheit & Rettungsmittel',
  [TOPICS.UMWELTSCHUTZ]: 'Umweltschutz',
  [TOPICS.ALLGEMEINE_FAHRZEUGFUEHRUNG]: 'Allgemeine Fahrzeugführung',
  [TOPICS.KVR]: 'KVR (Kollisionsverhütungsregeln)',
  [TOPICS.SEESCHSTRSO]: 'SeeSchStrO',
  [TOPICS.SEEMANNSCHAFT]: 'Seemannschaft',
  [TOPICS.SCHIFFFAHRTSZEICHEN]: 'Schifffahrtszeichen',
  [TOPICS.LICHTER_SICHTZEICHEN]: 'Lichter & Sichtzeichen',
  [TOPICS.SCHALLSIGNALE]: 'Schallsignale',
  [TOPICS.AUSWEICHREGELN]: 'Ausweichregeln',
  [TOPICS.WETTERKUNDE]: 'Wetterkunde',
  [TOPICS.VERKEHRSTRENNUNGSGEBIETE]: 'Verkehrstrennungsgebiete',
  [TOPICS.FAHRWASSER]: 'Fahrwasser',
  [TOPICS.BINNENSCHIFFFAHRTSRECHT]: 'Binnenschifffahrtsrecht',
  [TOPICS.BINNENSCHIFFFAHRTSZEICHEN]: 'Binnenschifffahrtszeichen',
  [TOPICS.FAHRZEUGFUEHRUNG_BINNEN]: 'Fahrzeugführung Binnen',
  [TOPICS.SCHLEUSEN]: 'Schleusen',
  [TOPICS.SEGELTECHNIK]: 'Segeltechnik',
  [TOPICS.SEGELTHEORIE]: 'Segeltheorie',
  [TOPICS.NAVIGATION]: 'Navigation',
}

// ─── Exam Types ───
export const EXAM_TYPES = {
  SEE_MOTOR: 'see_motor',
  BINNEN_MOTOR: 'binnen_motor',
  BINNEN_SEGEL: 'binnen_segel',
  SEE_MOTOR_ERGAENZUNG: 'see_motor_ergaenzung',
  BINNEN_MOTOR_ERGAENZUNG: 'binnen_motor_ergaenzung',
  BINNEN_SEGEL_ERGAENZUNG: 'binnen_segel_ergaenzung',
}

export const EXAM_CONFIG = {
  [EXAM_TYPES.SEE_MOTOR]: {
    label: 'SBF See (Motor)',
    shortLabel: 'SBF See (Motor)',
    icon: '⚓',
    description: 'Seeschifffahrtsstraßen – Antriebsmaschine (Vollprüfung)',
    sections: [
      { category: CATEGORIES.BASIS, poolSize: 72, examCount: 7, passMin: 5 },
      { category: CATEGORIES.SEE_SPEZIFISCH, poolSize: 213, examCount: 23, passMin: 18 },
      { category: CATEGORIES.NAVIGATION_SEE, poolSize: 15, examCount: 9, passMin: 7 },
    ],
    navigation: null,
    duration: 60, // minutes
    totalExamQuestions: 39,
    color: 'ocean',
  },
  [EXAM_TYPES.BINNEN_MOTOR]: {
    label: 'SBF Binnen (Motor)',
    shortLabel: 'SBF Binnen (Motor)',
    icon: '🚤',
    description: 'Binnenschifffahrtsstraßen – Antriebsmaschine (Vollprüfung)',
    sections: [
      { category: CATEGORIES.BASIS, poolSize: 72, examCount: 7, passMin: 5 },
      { category: CATEGORIES.BINNEN_SPEZIFISCH, poolSize: 181, examCount: 23, passMin: 18 },
    ],
    navigation: null,
    duration: 45,
    totalExamQuestions: 30,
    color: 'amber',
  },
  [EXAM_TYPES.BINNEN_SEGEL]: {
    label: 'SBF Binnen (Segel + Motor)',
    shortLabel: 'SBF Binnen (Segel + Motor)',
    icon: '⛵',
    description: 'Binnenschifffahrtsstraßen – Segel & Motor (Vollprüfung)',
    sections: [
      { category: CATEGORIES.BASIS, poolSize: 72, examCount: 7, passMin: 5 },
      { category: CATEGORIES.BINNEN_SPEZIFISCH, poolSize: 181, examCount: 23, passMin: 18 },
      { category: CATEGORIES.SEGEL_SPEZIFISCH, poolSize: 47, examCount: 7, passMin: 5 },
    ],
    navigation: null,
    duration: 60,
    totalExamQuestions: 37,
    color: 'violet',
  },
  [EXAM_TYPES.SEE_MOTOR_ERGAENZUNG]: {
    label: 'SBF See (Motor) – Ergänzungsprüfung',
    shortLabel: 'SBF See (Motor) [Erg.]',
    icon: '⚓',
    description: 'Für Inhaber SBF Binnen (ohne Basisfragen)',
    sections: [
      { category: CATEGORIES.SEE_SPEZIFISCH, poolSize: 213, examCount: 23, passMin: 18 },
      { category: CATEGORIES.NAVIGATION_SEE, poolSize: 15, examCount: 9, passMin: 7 },
    ],
    navigation: null,
    duration: 50,
    totalExamQuestions: 32,
    color: 'ocean',
  },
  [EXAM_TYPES.BINNEN_MOTOR_ERGAENZUNG]: {
    label: 'SBF Binnen (Motor) – Ergänzungsprüfung',
    shortLabel: 'SBF Binnen (Motor) [Erg.]',
    icon: '🚤',
    description: 'Für Inhaber SBF See (ohne Basisfragen)',
    sections: [
      { category: CATEGORIES.BINNEN_SPEZIFISCH, poolSize: 181, examCount: 23, passMin: 18 },
    ],
    navigation: null,
    duration: 30,
    totalExamQuestions: 23,
    color: 'amber',
  },
  [EXAM_TYPES.BINNEN_SEGEL_ERGAENZUNG]: {
    label: 'SBF Binnen (Segel + Motor) – Ergänzungsprüfung',
    shortLabel: 'SBF Binnen (Segel+Mot) [Erg.]',
    icon: '⛵',
    description: 'Für Inhaber SBF See (ohne Basisfragen)',
    sections: [
      { category: CATEGORIES.BINNEN_SPEZIFISCH, poolSize: 181, examCount: 23, passMin: 18 },
      { category: CATEGORIES.SEGEL_SPEZIFISCH, poolSize: 47, examCount: 7, passMin: 5 },
    ],
    navigation: null,
    duration: 45,
    totalExamQuestions: 30,
    color: 'violet',
  },
}

/**
 * Returns the categories that belong to a specific exam type.
 */
export function getCategoriesForExam(examType) {
  const config = EXAM_CONFIG[examType]
  if (!config) return []
  const cats = config.sections.map((s) => s.category)
  if (config.navigation) cats.push(CATEGORIES.NAVIGATION_SEE)
  return cats
}

/**
 * Returns official pool sizes per category.
 */
export const OFFICIAL_POOL_SIZES = {
  [CATEGORIES.BASIS]: 72,
  [CATEGORIES.SEE_SPEZIFISCH]: 213,
  [CATEGORIES.BINNEN_SPEZIFISCH]: 181,
  [CATEGORIES.SEGEL_SPEZIFISCH]: 47,
  [CATEGORIES.NAVIGATION_SEE]: 15,  // 15 tasks × 9 subtasks = 135 individual questions
}
