/**
 *
 * @description 最小操作次数使数组元素相等 II
 *
 * @param nums
 *
 * @see https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/
 */

function minMoves2(nums: number[]): number {
  return nums.sort((a, b) => a - b).reduce((count, cur) => (count += Math.abs(cur - nums[Math.floor(nums.length / 2)])), 0)
}

minMoves2([1, 3, 2])
