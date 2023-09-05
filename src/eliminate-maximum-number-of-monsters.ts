/**
 *
 * @param dist
 * @param speed
 *
 * @see https://leetcode.cn/problems/eliminate-maximum-number-of-monsters/
 */

function eliminateMaximum(dist: number[], speed: number[]): number {
  const time = dist.length

  const times = dist.map((d, i) => Math.ceil(d / speed[i]))

  times.sort((a, b) => a - b)

  const n = times.find((t, i) => t <= i)

  return n || dist.length
}

let res = eliminateMaximum([1, 1, 2, 4], [1, 1, 1, 1])

res
