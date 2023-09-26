/**
 *
 * @param ranks
 * @param cars
 *
 * @see https://leetcode.cn/problems/minimum-time-to-repair-cars
 */

function repairCars(ranks: number[], cars: number): number {
  let l = 1
  let r = ranks[0] * cars * cars

  const check = (m: number) => {
    let count = 0
    for (const r of ranks) {
      count += Math.floor(Math.sqrt(m / r))
    }

    return count >= cars
  }

  while (l < r) {
    const m = Math.floor((l + r) / 2)
    if (check(m)) r = m
    else l = m + 1
  }

  return l
}

let res = repairCars([4, 2, 3, 1], 10)

res
