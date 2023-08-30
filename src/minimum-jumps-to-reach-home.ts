/**
 *
 * @param forbidden
 * @param a
 * @param b
 * @param x
 *
 * @see https://leetcode.cn/problems/minimum-jumps-to-reach-home/
 */

function minimumJumps(forbidden: number[], a: number, b: number, x: number): number {
  const maxPosition = Math.max(x, Math.max(...forbidden)) + a + b
  const visited = new Set<number>()
  const queue: [number, number, boolean][] = [[0, 0, false]]

  for (const f of forbidden) visited.add(f)

  while (queue.length > 0) {
    const [position, jumps, isBackward] = queue.shift()!

    if (position === x) return jumps

    const forwardPosition = position + a
    if (!visited.has(forwardPosition) && forwardPosition <= maxPosition) {
      visited.add(forwardPosition)
      queue.push([forwardPosition, jumps + 1, false])
    }

    if (!isBackward) {
      const backwardPosition = position - b
      if (backwardPosition >= 0 && !visited.has(backwardPosition)) {
        queue.push([backwardPosition, jumps + 1, true])
      }
    }
  }

  return -1
}

let res = minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11)

res
