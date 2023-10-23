const sink = (h: number[], i: number) => {
  const n = h.length

  while (2 * i + 1 < n) {
    let j = 2 * i + 1
    if (j + 1 < n && h[j + 1] > h[j]) {
      j++
    }

    if (h[j] <= h[i]) {
      break
    }

    ;[h[i], h[j]] = [h[j], h[i]]

    i = j
  }
}

const heapify = (h: number[]) => {
  for (let i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
    sink(h, i)
  }
}

/**
 *
 * @param nums
 * @param k
 *
 * @see https://leetcode.cn/problems/maximal-score-after-applying-k-operations
 */
export function maxKelements(nums: number[], k: number): number {
  heapify(nums)
  let score = 0
  while (k--) {
    score += nums[0]
    nums[0] = Math.floor((nums[0] + 2) / 3)
    sink(nums, 0)
  }

  return score
}

let res = maxKelements([1, 10, 3, 3, 3], 5)

res
