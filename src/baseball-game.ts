/**
 *
 * @param operations
 *
 * @see https://leetcode.cn/problems/baseball-game/
 */
export function calPoints(operations: string[]): number {
  const quene = <number[]>[]
  return operations.reduce((score, operation) => {
    if (operation === '+') {
      quene.push(quene[quene.length - 1] + quene[quene.length - 2])
      score += quene[quene.length - 1]
    } else if (operation === 'D') {
      quene.push(quene[quene.length - 1] * 2)
      score += quene[quene.length - 1]
    } else if (operation === 'C') {
      score -= quene.pop() ?? 0
    } else {
      quene.push(parseInt(operation))
      score += quene[quene.length - 1]
    }
    return score
  }, 0)
}

let res = calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])

console.log(res)
