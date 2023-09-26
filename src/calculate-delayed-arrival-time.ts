/**
 *
 * @param arrivalTime
 * @param delayedTime
 *
 * @see https://leetcode.cn/problems/calculate-delayed-arrival-time
 */
function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  const time = arrivalTime + delayedTime
  return time === 24 ? 0 : time > 24 ? 37 % 24 : time
}
