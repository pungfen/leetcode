/**
 *
 * @param n 节点的数目
 * @param edges
 * @param queries
 *
 * @see https://leetcode.cn/problems/count-pairs-of-nodes/description/
 */

const isSample = (target: number[], nums: number[]) => {
  return target.join('/') === nums.join('/') || target.reverse().join('/') === nums.join('/') || target.join('/') === nums.reverse().join('/')
}

const recount = (edges: number[][], nums: number[]) => {
  return edges.reduce((count, es) => (count += isSample(es, nums) ? 1 : 0), 0)
}

function countPairs(n: number, edges: number[][], queries: number[]): number[] {
  const nem = new Map<number, number>()

  let nn = n

  while (nn) {
    nem.set(
      nn,
      edges.reduce((count, es) => (count += es.includes(nn) ? 1 : 0), 0)
    )
    --nn
  }

  const nqm = new Map<[number, number], number>()
  for (let i = 1; i < n; i++) {
    for (let j = n; j > i; j--) {
      nqm.set([i, j], nem.get(i)! + nem.get(j)! - recount(edges, [i, j]))
    }
  }

  const answer = (i: number) => [...nqm.values()].filter((n) => n > i).length

  return queries.map(answer)
}

const res = countPairs(
  4,
  [
    [1, 2],
    [2, 4],
    [1, 3],
    [2, 3],
    [2, 1]
  ],
  [2, 3]
)

res
