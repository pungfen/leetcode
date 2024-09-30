function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const maxConsecutive = (str: string) => {
    let res = 0

    let left = 0
    let right = 0

    let changed = 0
    while (right < answerKey.length) {
      if (answerKey[right] != str && changed == k) {
        if (answerKey[left] != str) {
          changed--
        }
        left++
      } else {
        res = Math.max(res, right - left + 1)
        if (answerKey[right] != str) {
          changed++
        }
        right++
      }
    }
    return res
  }

  return Math.max(maxConsecutive('T'), maxConsecutive('F'))
}

console.log(maxConsecutiveAnswers('TTFF', 2))
// console.log(maxConsecutiveAnswers('TTFF', 1))
// console.log(maxConsecutiveAnswers('TTFTTFTT', 1))
