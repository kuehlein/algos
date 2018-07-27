// time: O(n)
// space:O(1)
const getNthFib = n => {
  const lastTwo = [0, 1]
  let count = 3

  while (count <= n) {
    const next = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = next
    count++
  }

  return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(getNthFib(17)) // 987
