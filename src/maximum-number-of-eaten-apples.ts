export const eatenApples = (apples: number[], days: number[]) => {
  let count = 0
  let day = 0

  while (++day) {
    const arr = apples.slice(0, day)
    // console.log(`第${day}天可吃的苹果有:`, arr)
    let i = arr.findIndex((it, ai) => it > 0 && ai + days[ai] + 1 > day)
    if (i > -1) {
      console.log(`0:第${day}天可以吃的苹果有`, arr, `应该吃第${i + 1}天长出来的`)
      apples[i]--
      count++
    } else if (apples[day] > 0) {
      console.log(`1:第${day}天可以吃的苹果有`, arr, `应该吃第${day}天长出来的`)
      apples[day - 1]--
      count++
    }

    if (day > 10) {
      break
    }
  }

  return count
}

console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]))
// console.log(eatenApples([3, 0, 0, 0, 0, 2], [3, 0, 0, 0, 0, 2]))
// console.log(eatenApples([2, 1, 10], [2, 10, 1]))
