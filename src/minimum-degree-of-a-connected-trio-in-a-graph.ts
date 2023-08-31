/**
 *
 * @param n
 * @param edges
 *
 * @see https://leetcode.cn/problems/minimum-degree-of-a-connected-trio-in-a-graph/
 *
 */

// there has some problems

function minTrioDegree(n: number, edges: number[][]): number {
  const m = new Map<number, number[]>()
  const mg = new Map<number[], number>()

  for (let i = 1; i <= n; i++) {
    for (const [x, y] of edges) {
      if (x === i || y === i) {
        m.set(i, [...(m.get(i) ?? []), x === i ? y : x])
      }
    }
  }

  for (const k of m.keys()) {
    const values = m.get(k)!
    if (values.length >= 2) {
      for (const v of values) {
        const _values = m.get(v)!
        const _n = values.find((item) => _values.includes(item))
        if (_n) {
          const pp = [k, v, _n].sort((a, b) => a - b)
          const ks = [...mg.keys()].map(([p1, p2, p3]) => `${p1}-${p2}-${p3}`)
          if (!ks.includes(`${pp[0]}-${pp[1]}-${pp[2]}`)) {
            mg.set(pp, m.get(pp[0])!.length + m.get(pp[1])!.length + m.get(pp[2])!.length - 6)
          }
        }
      }
    }
  }

  return mg.size ? Math.min(...mg.values()) : -1
}

let res = minTrioDegree(10, [
  [3, 4],
  [3, 10],
  [5, 7],
  [9, 5],
  [8, 3],
  [5, 10],
  [9, 8],
  [10, 9],
  [1, 6],
  [1, 3],
  [6, 2],
  [6, 8],
  [4, 8],
  [3, 6],
  [8, 2],
  [9, 1],
  [9, 4],
  [7, 3],
  [7, 6],
  [3, 2],
  [3, 5],
  [5, 2],
  [4, 10],
  [9, 3],
  [5, 8],
  [8, 7],
  [9, 6],
  [10, 1],
  [10, 7],
  [1, 4],
  [2, 9],
  [1, 7]
])

res
