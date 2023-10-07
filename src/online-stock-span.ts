/**
 * @see https://leetcode.cn/problems/online-stock-span
 */

export class StockSpanner {
  constructor() {}

  prices: number[] = []

  next(price: number): number {
    this.prices.push(price)

    let i = this.prices.length,
      n = 0

    while (i && this.prices[--i] <= price) {
      n++
    }

    return n
  }
}

let obj = new StockSpanner()

let res: number[] = []

res.push(obj.next(100))
res.push(obj.next(80))
res.push(obj.next(60))
res.push(obj.next(70))
res.push(obj.next(60))
res.push(obj.next(70))
res.push(obj.next(80))

console.log(res)
