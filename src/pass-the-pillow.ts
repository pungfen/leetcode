/**
 *
 * @param n
 * @param time
 *
 * @see https://leetcode.cn/problems/pass-the-pillow
 */
export function passThePillow(n: number, time: number): number {
  return Math.floor(time / (n - 1)) % 2 ? n - (time % (n - 1)) : (time % (n - 1)) + 1
}

let res = passThePillow(8, 9)

res
