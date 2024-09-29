/**
 *
 * @param tickets
 * @param k
 * @see https://leetcode.cn/problems/time-needed-to-buy-tickets/
 */
export function timeRequiredToBuy(tickets: number[], k: number): number {
  let index = 0
  let result = 0
  while (true) {
    if (tickets[index] > 0) {
      result++
      tickets[index]--
    }

    if (index == k && tickets[index] == 0) {
      return result
    }

    // index = (index + 1) % tickets.length
    // ⬇
    if (++index == tickets.length) {
      index = 0
    }

    console.log(index)
  }
}

console.log(timeRequiredToBuy([2, 3, 2], 2))
// console.log(timeRequiredToBuy([5, 1, 1, 1], 0))
