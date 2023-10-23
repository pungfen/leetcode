/**
 *
 * @param length
 * @param width
 * @param height
 * @param mass
 *
 * @see https://leetcode.cn/problems/categorize-box-according-to-criteria
 */
function categorizeBox(length: number, width: number, height: number, mass: number): string {
  const maxd = Math.max(length, width, height)
  const vol = length * width * height
  const isBulky = maxd >= 10000 || vol >= 10 ** 9
  const isHeavy = mass >= 100

  if (isBulky && isHeavy) {
    return 'Both'
  } else if (isBulky) {
    return 'Bulky'
  } else if (isHeavy) {
    return 'Heavy'
  } else {
    return 'Neither'
  }
}
