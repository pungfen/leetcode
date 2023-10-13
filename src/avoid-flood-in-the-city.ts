/**
 *
 * @param rains
 * @returns
 *
 * @see https://leetcode.cn/problems/avoid-flood-in-the-city
 */

const filterMapByValue = <K, V>(map: Map<K, V>) => {
  const result = new Map<K, V>()
  for (const [key, value] of map) {
    if (value) result.set(key, value)
  }
  return result
}

export function avoidFlood(rains: number[]): number[] {
  // const rm = new Map<number, boolean>()

  // let over = false
  // let res: number[] = []
  // let index = 0

  // while (!over && index < rains.length) {
  //   const rain = rains[index++]
  //   if (rm.has(rain)) {
  //     if (rm.get(rain)) {
  //       res = []
  //       over = true
  //     } else {
  //       res.push(-1)
  //       rm.set(rain, true)
  //     }
  //   } else {
  //     if (!rain) {
  //       const ms = rains.slice(index)
  //       const ns = [...filterMapByValue(rm).keys()]
  //       const n = ms.find((m) => ns.includes(m)) ?? ns[0]
  //       if (n) rm.set(n, false)
  //       res.push(n || 1)
  //     } else {
  //       rm.set(rain, true)
  //       res.push(-1)
  //     }
  //   }
  // }

  // wrong
  const lm = new Map<number, number[]>()

  for (const [index, lake] of rains.entries()) {
    if (lake) {
      const exist = lm.get(lake)
      if (exist) exist.push(index)
      else lm.set(lake, [index])
    }
  }

  let i = 0
  let res: number[] = []

  const filled = new Set<number>()
  const toBeDrained: number[] = []
  while (i < rains.length) {
    const lake = rains[i++]
    if (!lake) {
      const n = toBeDrained.shift()
      if (n) filled.delete(n)
      res.push(n || 1)
    } else {
      if (filled.has(lake)) {
        res = []
        i = rains.length
      } else {
        lm.set(lake, lm.get(lake)!.slice(1))
        if (lm.get(lake)!.length) toBeDrained.unshift(lake)
        filled.add(lake)
        res.push(-1)
      }
    }
  }

  return res
}

let res = avoidFlood([
  0, 72328, 0, 0, 94598, 54189, 39171, 53361, 0, 0, 0, 72742, 0, 98613, 16696, 0, 32756, 23537, 0, 94598, 0, 0, 0, 11594, 27703, 0, 0, 0, 20081, 0,
  24645, 0, 0, 0, 0, 0, 0, 0, 2711, 98613, 0, 0, 0, 0, 0, 91987, 0, 0, 0, 22762, 23537, 0, 0, 0, 0, 54189, 0, 0, 87770, 0, 0, 0, 0, 27703, 0, 0, 0, 0,
  20081, 16696, 0, 0, 0, 0, 0, 0, 0, 35903, 0, 72742, 0, 0, 0, 35903, 0, 0, 91987, 76728, 0, 0, 0, 0, 2711, 0, 0, 11594, 0, 0, 22762, 24645, 0, 0, 0,
  0, 0, 53361, 0, 87770, 0, 0, 39171, 0, 24577, 0, 0, 0, 24577, 0, 0, 72328, 0, 0, 32756, 0, 0, 76728
])

res
