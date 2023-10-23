/**
 *
 * @param details
 * @see https://leetcode.cn/problems/number-of-senior-citizens
 */
export function countSeniors(details: string[]): number {
  return details.reduce((nums, detail) => (nums += Number(detail.slice(11, 13)) > 60 ? 1 : 0), 0)
}
