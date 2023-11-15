/**
 *
 * @param nums
 * @param k
 *
 * @see https://leetcode.cn/problems/maximum-sum-with-exactly-k-elements
 */
export function maximizeSum(nums: number[], k: number): number {
  let m: number = Math.max(...nums)

  let s = m
  while (--k) {
    s += m + k
  }

  return s
}

let res = maximizeSum([1, 2, 3, 4, 5], 3)

res
