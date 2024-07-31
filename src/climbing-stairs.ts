/**
 *
 * @param n
 *
 * @see https://leetcode.cn/problems/climbing-stairs
 */
function climbStairs(n: number): number {
  const dp: number[] = []
  dp[1] = 1
  dp[2] = 2
  let i = 3
  while (i++ <= n) {
    dp[i - 1] = dp[i - 2] + dp[i - 3]
  }
  return dp[n]
}

console.log(climbStairs(44))
