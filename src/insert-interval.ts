/**
 *
 * @param intervals
 * @param newInterval
 *
 * @see  https://leetcode.cn/problems/insert-interval/
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval)

  intervals.sort((a, b) => a[0] - b[0])

  const merged: number[][] = []

  for (const interval of intervals) {
    if (!merged.length || merged.slice(-1)[0][1] < interval[0]) {
      merged.push(interval)
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
    }
  }

  return merged
}

let res = insert(
  [
    [1, 3],
    [6, 9]
  ],
  [2, 5]
)

res
