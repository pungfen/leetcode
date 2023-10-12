/**
 *
 * @param nums
 * @see https://leetcode.cn/problems/find-the-array-concatenation-value
 */
export function findTheArrayConcVal(nums: number[]): number {
  let value = 0

  while (nums.length) {
    const first = nums.shift() ?? 0
    const last = nums.pop() ?? 0

    value += first && last ? Number(`${first}${last}`) : first && !last ? Number(`${first}`) : 0
  }

  return value
}

let res = findTheArrayConcVal([5, 14, 13, 8, 12])

res
