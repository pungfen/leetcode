function fib(n: number): number {
  const d = [0, 1]

  while (d.length <= n) {
    d[d.length] = d[d.length - 1] + d[d.length - 2]
  }

  return d[n]
}

console.log(fib(4))
