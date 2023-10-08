/**
 * @see https://leetcode.cn/problems/stock-price-fluctuation
 */
export class StockPrice {
  constructor() {}

  stock = new Map<number, number>()

  cur = 0
  max = 0
  min = 0

  update(timestamp: number, price: number): void {
    this.stock.set(timestamp, price)

    this.cur = Math.max(this.cur, timestamp)
    this.max =
      timestamp === this.max
        ? price > this.maximum()
          ? this.max
          : this.getMaxTimestamp()
        : price > this.maximum()
        ? timestamp
        : this.max || timestamp

    this.min =
      timestamp === this.min
        ? price < this.minimum()
          ? this.min
          : this.getMinTimestamp()
        : price < this.minimum()
        ? timestamp
        : this.min || timestamp
  }

  getMaxTimestamp() {
    let timestamp = 0
    let mp = -Infinity
    for (const [t, p] of this.stock.entries()) {
      if (p > mp) {
        timestamp = t
        mp = p
      }
    }

    return timestamp
  }

  getMinTimestamp() {
    let timestamp = 0
    let mp = Infinity
    for (const [t, p] of this.stock.entries()) {
      if (p < mp) {
        timestamp = t
        mp = p
      }
    }

    return timestamp
  }

  current(): number {
    return this.stock.get(this.cur) ?? 0
  }

  maximum(): number {
    return this.stock.get(this.max) ?? 0
  }

  minimum(): number {
    return this.stock.get(this.min) ?? 0
  }
}

const operations: Array<keyof StockPrice> = ['update', 'update', 'current', 'maximum', 'update', 'maximum', 'update', 'minimum']
const data = [[1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
const ans = [null, null, null, 5, 10, null, 5, null, 2]

let obj = new StockPrice()

let res: number[] = []

for (const [index, op] of operations.entries()) {
  switch (op) {
    case 'update':
      obj.update(data[index][0], data[index][1])
      break
    case 'current':
      res.push(obj.current())
      break
    case 'maximum':
      res.push(obj.maximum())
      break
    case 'minimum':
      res.push(obj.minimum())
      break
  }
}

console.log(res)
console.log(ans.filter(Boolean))
