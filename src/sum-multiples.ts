/**
 *
 * @param n
 *
 * @see https://leetcode.cn/problems/sum-multiples
 */
export function sumOfMultiples(n: number): number {
  return Array.from({ length: n })
    .map((_, i) => ++i)
    .reduce((sum, val) => (sum += val % 3 === 0 || val % 5 === 0 || val % 7 === 0 ? val : 0), 0)
}

let res = sumOfMultiples(7)

res
