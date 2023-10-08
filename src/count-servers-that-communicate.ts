/**
 *
 * @param grid
 *
 * @see https://leetcode.cn/problems/count-servers-that-communicate/description/
 */

type Flag = 0 | 1

export function countServers(grid: Flag[][]): number {
  const computers: Array<[number, number]> = []
  const cm: Array<number> = []
  const cn: Array<number> = []

  for (const [gi, g] of grid.entries()) {
    for (const [ii, i] of g.entries()) {
      if (i === 1) {
        computers.push([gi, ii])
        cm[gi] = 1 + (cm[gi] ?? 0)
        cn[ii] = 1 + (cn[ii] ?? 0)
      }
    }
  }

  return computers.reduce<number>((count, c) => (count += cm[c[0]] >= 2 || cn[c[1]] >= 2 ? 1 : 0), 0)
}

let res = countServers([
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
])

res
