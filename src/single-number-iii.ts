/**
 *
 * @param nums
 *
 * @see https://leetcode.cn/problems/single-number-iii
 */
export function singleNumber(nums: number[]): number[] {
  const res: number[] = []

  for (const n of nums) {
    if (res.includes(n)) {
      const nsl = nums.filter((item) => item === n).length
      if (nsl > 1) res.splice(res.indexOf(n), 1)
    } else {
      res.push(n)
    }
  }

  return res
}

let res = singleNumber([1, 2, 1, 3, 2, 5])

res
