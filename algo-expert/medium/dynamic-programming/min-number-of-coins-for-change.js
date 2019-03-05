// time: O(nd)
// space: O(n)
// where n is the target amount and d is the number of coin denominations
function minNumberOfCoinsForChange(n, denoms) {
  const numCoins = new Array(n + 1).fill(Infinity);
  numCoins[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < numCoins.length; amount++) {
      if (denom <= amount) {
        numCoins[amount] = Math.min(
          numCoins[amount],
          numCoins[amount - denom] + 1
        );
      }
    }
  }
  return numCoins[n] !== Infinity ? numCoins[n] : -1;
}

console.log(minNumberOfCoinsForChange(9, [3, 4, 5])); // 2
