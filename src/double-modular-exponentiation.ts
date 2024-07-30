function myPow(x: number, n: number, mod: number) {
  let ans = 1
  while (n) {
    if (n % 2) {
      ans = (ans * x) % mod
    }
    x *= x % mod
    n = Math.floor(n / 2)
  }

  return ans
}

/**
 *
 * @param variables
 * @param target
 *
 * @see https://leetcode.cn/problems/double-modular-exponentiation/
 */
export function getGoodIndices(variables: number[][], target: number): number[] {
  return variables.reduce<number[]>((result, [a, b, c, m], index) => {
    if (myPow(myPow(a, b, 10), c, m) === target) {
      result.push(index)
    }
    return result
  }, [])
}

console.log(getGoodIndices([[31, 12, 21, 24]], 1))
