export function takeCharacters(s: string, k: number): number {
  let cnt = [0, 0, 0]

  let i = s.length
  while (i--) {
    cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  if (cnt.some((n) => n < k)) {
    return -1
  }

  const n = s.length
  let left = -1
  let right = n - 1
  let result = n - right

  while (left++ < n) {
    let index = s.charCodeAt(left) - 'a'.charCodeAt(0)
    cnt[index]++
    while (right < n && cnt[s.charCodeAt(right) - 'a'.charCodeAt(0)] > k) {
      cnt[index]--
      right++
    }
    result = Math.min(result, left + 1 + n - right)
  }

  return result
}

const res = takeCharacters('aabaaaacaabc', 2)

console.log(res)
