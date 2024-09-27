/**
 *
 * @param cards
 * @param cnt
 * @see https://leetcode.cn/problems/uOAnQW/
 *
 * 如果 s 是偶数，这是我们能得到的最大得分，直接返回 s
 * 如果 s 是奇数，那么可以：
 *  从前 cnt 个数中去掉一个最小的奇数，从后 n−cnt 个数中加进来一个最大的偶数，这样得分就变成偶数了
 *  从前 cnt 个数中去掉一个最小的偶数，从后 n−cnt 个数中加进来一个最大的奇数，这样得分就变成偶数了
 *  两种情况取最大值
 */
function maxmiumScore(cards: number[], cnt: number): number {
  cards.sort((a, b) => b - a)
  let scores = cards.slice(0, cnt)
  let others = cards.slice(cnt)

  let score = scores.reduce((r, n) => (r += n), 0)

  const replaceNumberByIndex = (arr: number[], index: number, number: number): number[] => {
    let _arr = [...arr]
    _arr[index] = number
    return _arr
  }

  if (score % 2 !== 0 && others.length) {
    let odd = others.find((it) => it % 2 !== 0) ?? 0
    let even = others.find((it) => it % 2 === 0) ?? 0

    let scores_r = scores.reverse()

    let min_odd_index = scores_r.findIndex((it) => it % 2 !== 0)
    let min_even_index = scores_r.findIndex((it) => it % 2 === 0)

    score = Math.max(
      ~min_odd_index ? replaceNumberByIndex(scores, min_odd_index, even).reduce((r, n) => (r += n), 0) : 0,
      ~min_even_index ? replaceNumberByIndex(scores, min_even_index, odd).reduce((r, n) => (r += n), 0) : 0
    )
  }
  return score % 2 === 0 ? score : 0
}

// console.log(maxmiumScore([1, 2, 8, 9], 3))
// console.log(maxmiumScore([3, 3, 1], 1))
// console.log(maxmiumScore([9, 5, 9, 1, 6, 10, 3, 4, 5, 1], 2))
console.log(maxmiumScore([1, 3, 4, 5], 4))
