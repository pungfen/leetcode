/**
 *
 * @param num
 *
 * @see https://leetcode.cn/problems/split-with-minimum-sum
 */
export function splitNum(num: number): number {
  const nums: number[] = []

  while (num) {
    const n = num % 10
    num -= n
    num /= 10

    if (n) nums.push(n)
  }

  nums.sort((a, b) => a - b)

  let { sum } = nums.reduce(
    (obj, n, i) => {
      obj.a = i % 2 ? obj.a * 10 + n : obj.a
      obj.b = i % 2 ? obj.b : obj.b * 10 + n
      if (i === nums.length - 1) obj.sum = obj.a + obj.b
      return obj
    },
    { a: 0, b: 0, sum: 0 }
  )

  return sum
}

let res = splitNum(540)

res
