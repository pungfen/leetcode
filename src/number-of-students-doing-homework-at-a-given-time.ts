/**
 *
 * @param startTime
 * @param endTime
 * @param queryTime
 */
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  let result = 0
  let index = 0
  while (index < startTime.length) {
    if (startTime[index] <= queryTime && endTime[index] >= queryTime) {
      result++
    }
    index++
  }
  return result
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4))
console.log(busyStudent([4], [4], 4))
console.log(busyStudent([4], [4], 5))
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7))
console.log(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5))
