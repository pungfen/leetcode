/**
 *
 * @param points
 * @param w
 * @returns
 *
 * @see https://leetcode.cn/problems/minimum-rectangles-to-cover-points
 */
function minRectanglesToCoverPoints(points: number[][], w: number): number {
  points.sort(([x1], [x2]) => x1 - x2)
  let [res, x1] = [0, -1]
  for (const [x] of points) {
    if (x > x1) {
      ++res
      x1 = x + w
    }
  }
  return res
}

console.log(
  minRectanglesToCoverPoints(
    [
      [2, 1],
      [1, 0],
      [1, 4],
      [1, 8],
      [3, 5],
      [4, 6]
    ],
    1
  )
)
