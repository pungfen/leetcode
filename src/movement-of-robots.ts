/**
 *
 * @param nums
 * @param s
 * @param d
 *
 * @see https://leetcode.cn/problems/movement-of-robots
 */

export function sumDistance(nums: number[], s: string, d: number): number {
  const MOD = 1000000007

  const move: Record<string, number> = {
    L: -1,
    R: 1
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] += move[s[i]] * d
  }

  nums.sort((a, b) => a - b)

  let res = 0

  for (let i = 1; i < nums.length; i++) {
    res += ((((nums[i] - nums[i - 1]) * i) % MOD) * (nums.length - i)) % MOD
    res % MOD
  }

  return res
}

let res = sumDistance([1, 0], 'RL', 2)

res
