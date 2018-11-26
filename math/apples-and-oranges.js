// https://www.hackerrank.com/challenges/apple-and-orange/problem

// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where `s` is the start point, and `t` is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point `a`, and the orange tree is at point `b`.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of `d` means the fruit fell `d` units to the tree's left, and a positive value of `d` means it falls `d` units to the tree's right.
// Given the value of `d` for `m` apples and `n` oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?
/*
        ()         /\         ()
       ( )        /  \        ( )
      (   )      /    \      (   )
        |        |    |        |
        |   🍎   |    |        |
        a--->d   s    t        b
*/

// O(n + m) time | O(1) space
// where n and m are the lengths of both input arrays
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  landingSpots(a, apples)
  landingSpots(b, oranges)

  console.log(findOverlap(s, t, apples))
  console.log(findOverlap(s, t, oranges))
}

const landingSpots = (tree, fruits) => {
  for (let i = fruits.length - 1; i >= 0; i--) {
    fruits[i] = tree + fruits[i]
  }
}

const findOverlap = (s, t, coords) => {
  let total = 0
  for (let i = coords.length - 1; i >= 0; i--) {
    if (coords[i] >= s && coords[i] <= t) total++
  }
  return total
}
