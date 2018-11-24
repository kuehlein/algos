// print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals

// O(n) time | O(1) space
const plusMinus = arr => {
  const denominator = arr.length
  const ratios = [0, 0, 0]
  arr.forEach(num => {
      if (num > 0) ratios[0]++      // positive
      else if (num < 0) ratios[1]++ // negative
      else ratios[2]++              // 0
  })
  ratios.forEach(num => console.log((num / denominator).toPrecision(6)))
}

const array = [-4, 3, -9, 0, 4, 1]

plusMinus(array)

// OUTPUT:
// 0.500000
// 0.333333
// 0.166667
