/**
 * Shuffles answer options for a question and returns the shuffled options
 * plus a mapping from shuffled index to original index.
 *
 * Since the ELWIS catalog always has answer "a" (index 0) as correct,
 * we shuffle to prevent students from memorizing positions.
 *
 * @param {string[]} options - Original options array
 * @param {number} correctIndex - Index of the correct answer in original array
 * @returns {{ shuffledOptions: string[], shuffledCorrectIndex: number, indexMap: number[] }}
 */
export function shuffleOptions(options, correctIndex) {
  const indices = options.map((_, i) => i)

  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }

  const shuffledOptions = indices.map((i) => options[i])
  const shuffledCorrectIndex = indices.indexOf(correctIndex)

  return { shuffledOptions, shuffledCorrectIndex, indexMap: indices }
}

/**
 * Prepare a question with shuffled answers for display.
 * Returns a new question object with shuffled options and updated correctIndex.
 */
export function prepareQuestion(question) {
  const { shuffledOptions, shuffledCorrectIndex } = shuffleOptions(
    question.options,
    question.correctIndex
  )
  return {
    ...question,
    options: shuffledOptions,
    correctIndex: shuffledCorrectIndex,
    _originalCorrectIndex: question.correctIndex,
  }
}

/**
 * Prepare an array of questions with shuffled answers.
 */
export function prepareQuestions(questions) {
  return questions.map(prepareQuestion)
}
