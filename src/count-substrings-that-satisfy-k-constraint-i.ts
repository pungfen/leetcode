/**
 *
 * @param s
 * @param k
 *
 * @see https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/
 */
function countKConstraintSubstrings(s: string, k: number): any {
  let result = 0

  let i = 0
  while (i < s.length) {
    let counts = [0, 0]
    let j = i
    while (j < s.length) {
      if (s[j] === '0' || s[j] === '1') {
        counts[s[j] === '0' ? 0 : 1]++
      }
      if (Math.min(...counts) > k) {
        break
      }
      result++
      j++
    }
    i++
  }

  return result
}

console.log(countKConstraintSubstrings('10101', 1))
