/**
 *
 * @param nums1
 * @param nums2
 * @returns
 *
 * @see https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays
 */
function minNumber(nums1: number[], nums2: number[]): number {
  const ms = nums1.reduce<number[]>((nums, num) => (nums2.includes(num) ? nums.concat([num]) : nums), [])
  const m1 = Math.min(...nums1)
  const m2 = Math.min(...nums2)

  return ms.length ? Math.min(...ms) : Math.min(m1, m2) * 10 + Math.max(m1, m2)
}

let res = minNumber([7, 5, 6], [1, 4])

res
