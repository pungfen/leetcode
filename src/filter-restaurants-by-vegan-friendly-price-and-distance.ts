/**
 *
 * @param restaurants
 * @param veganFriendly
 * @param maxPrice
 * @param maxDistance
 *
 * @see https://leetcode.cn/problems/filter-restaurants-by-vegan-friendly-price-and-distance
 */

export function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
  return (veganFriendly ? restaurants.filter((r) => r[2] === veganFriendly) : restaurants)
    .filter((r) => r[3] <= maxPrice && r[4] <= maxDistance)
    .sort((a, b) => (b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]))
    .map((r) => r[0])
}

let res = filterRestaurants(
  [
    [1, 4, 1, 40, 10],
    [2, 8, 0, 50, 5],
    [3, 8, 1, 30, 4],
    [4, 10, 0, 10, 3],
    [5, 1, 1, 15, 1]
  ],
  0,
  50,
  10
)

res

const arr = [1, 2, 3, 4]
const stopValue = 2

const result = arr.reduceRight((accumulator, currentValue) => {
  if (currentValue === stopValue) {
    return accumulator
  }
  return accumulator + currentValue
}, 0)

console.log(result)
