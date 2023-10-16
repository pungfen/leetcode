/**
 *
 * @param nums
 *
 * @see https://leetcode.cn/problems/single-number-ii
 */
export function singleNumber(nums: number[]): number {
  let res = 0

  for (const n of nums) {
    if (nums.filter((i) => i === n).length === 1) {
      res = n
    }
  }

  return res
}

let res = singleNumber([1, 2, 1, 3, 2, 5])

res
