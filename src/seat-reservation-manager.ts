import { MinPriorityQueue } from '@datastructures-js/priority-queue'

class SeatManager {
  #seat: MinPriorityQueue<number>

  constructor(n: number) {
    this.#seat = new MinPriorityQueue()

    let index = 0
    while (index++ < n) {
      this.#seat.enqueue(index)
    }
  }

  reserve(): number {
    return this.#seat.dequeue()
  }

  unreserve(seatNumber: number): void {
    this.#seat.enqueue(seatNumber)
  }
}

const obj = new SeatManager(5)
console.log(obj.reserve())
console.log(obj.reserve())
console.log(obj.unreserve(2))
console.log(obj.reserve())
console.log(obj.reserve())
console.log(obj.reserve())
console.log(obj.reserve())
console.log(obj.unreserve(5))
