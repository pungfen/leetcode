/**
 *
 * @param n
 *
 * @see https://leetcode.cn/problems/n-th-tribonacci-numbe
 */
function tribonacci(n: number): number {
  const t = [0, 1, 1]
  while (t.length <= n) {
    t[t.length] = t[t.length - 1] + t[t.length - 2] + t[t.length - 3]
  }
  return t[n]
}

console.log(tribonacci(25))
