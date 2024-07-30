/**
 *
 * @param x
 * @param n
 *
 * @see https://leetcode.cn/problems/powx-n/
 *
 * 如果n < 0,x的n次方等于 1/x 的-n次方。
 * 如果n是偶数：x的n次方等于 x * x 乘以 n/2 次方
 * 如果n是奇数：x的n次方等于x乘以x的n-1次方
 * 如果n=0，直接返回1
 */
export function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  if (n % 2) return x * myPow(x, n - 1)
  return myPow(x * x, n / 2)
}

console.log(myPow(2, 3))
