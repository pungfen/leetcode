/**
 * @description 汉明距离
 *
 * @param x number
 * @param y number
 * @returns number
 *
 * @example
 *
 * 1 的二进制是 0 0 0 1
 * 4 的二进制是 0 1 0 0
 *
 * 有两个不同的位数 结果为 2
 *
 * @see https://leetcode.cn/problems/hamming-distance/
 */

function hammingDistance(x: number, y: number): number {
  const x1 = x.toString(2)
  const y1 = y.toString(2)

  const length = Math.max(x1.length, y1.length)

  const arrx = x1.padStart(length, '0').split('')
  const arry = y1.padStart(length, '0').split('')

  return arrx.reduce<number>((count, s, i) => (count += arry[i] === s ? 0 : 1), 0)
}

hammingDistance(1, 4)
