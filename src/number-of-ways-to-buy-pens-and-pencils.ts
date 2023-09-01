/**
 *
 * @param total
 * @param cost1
 * @param cost2
 *
 * @see https://leetcode.cn/problems/number-of-ways-to-buy-pens-and-pencils/
 */

function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
  let count = 0
  if (total < cost1 && total < cost2) return 1
  if (cost1 < cost2) return waysToBuyPensPencils(total, cost2, cost1)

  const n = Math.floor(total / cost1)
  for (let i = 0; i <= n; i++) {
    let m = total - cost1 * i
    count += !m || m < cost2 ? 1 : Math.floor(m / cost2) + 1
  }

  return count
}

let res = waysToBuyPensPencils(37, 6, 6)

res
