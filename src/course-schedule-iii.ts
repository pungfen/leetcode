/**
 *
 * @param courses
 *
 * @see https://leetcode.cn/problems/course-schedule-iii
 */
function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1])

  let count = 0
  let queue: number[] = []
  let len = courses.length

  for (let i = 0; i < len; i++) {
    let di = courses[i][0],
      ti = courses[i][1]

    if (di + count <= ti) {
      count += di
      queue.push(di)
      queue.sort((a, b) => a - b)
      continue
    }

    if (di < queue[queue.length - 1]) {
      count -= queue.pop()!
      count += di
      queue.push(di)
      queue.sort((a, b) => a - b)
    }
  }

  return queue.length
}

let res = scheduleCourse([
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200]
])

res
