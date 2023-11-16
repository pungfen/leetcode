/**
 *
 * @param nums
 * @param threshold
 *
 * @see https://leetcode.cn/problems/longest-even-odd-subarray-with-threshold
 */

export function longestAlternatingSubarray(nums: number[], threshold: number): number {
  const n = nums.length

  let res = 0
  let i = 0

  while (i < n) {
    if (nums[i] > threshold || nums[i] % 2 !== 0) {
      i++
      continue
    }

    let start = i
    i++

    while (i < n && nums[i] <= threshold && nums[i] % 2 !== nums[i - 1] % 2) {
      i++
    }

    res = Math.max(res, i - start)
  }

  return res
}

let res = longestAlternatingSubarray([2, 3, 4, 5], 1)

res
