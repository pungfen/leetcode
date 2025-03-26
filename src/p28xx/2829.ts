function minimumSum(n: number, k: number): number {
  const firstPart = Math.min(n, k / 2)
  let result = ((1 + firstPart) * firstPart) / 2
  const remainingPart = n - firstPart
  if (remainingPart > 0) {
    result += ((k * 2 + remainingPart - 1) * remainingPart) / 2
  }
  return result
}

console.log(minimumSum(5, 4))
