/**
 * * ---------------------------------------------------------------------------
 * * --------------- * *BEST TIME TO BUY AND SELL STOCK II* * ------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Say you have an array for which the ith element is the price of a given stock
 * on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions
 * as you like (i.e., buy one and sell one share of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time (i.e., you
 * must sell the stock before you buy again).
 */

// time: O(n)
// space: O(1)
// where n is the length of the input array

/**
 * Iterate through the input array `prices` comparing each element against the
 * previous element. If the current element is greater than the previous, add the
 * difference to a total `profit`, and return `profit`.
 *
 * @param {number[]} prices - prices of a stock over a course of several days
 * @return {number}
 */
const maxProfit = prices => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};

// Example:

// input
const arr = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(arr)); // 7

// Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
