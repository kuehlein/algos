/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = equation => {
  const tokens = tokenize(equation)       // time: O(n)    | space: O(n)
  const right = reduceEquation(tokens[0])  // time: O(1/2n) | space: O(1)
  const left = reduceEquation(tokens[1]) // time: O(1/2n) | space: O(1)

  console.log(left, right)

  return compareEquations(left, right)    // time: O(1)    | space: O(1)
};

const tokenize = equation => {
  const tokenizedEquation = [[], []]
  let side = 0

  for (let i = equation.length - 1; i >= 0; i--) {
    // [token: number | number[], numOfLoops: number]
    const tokenAndLoops = findToken(equation, i)

    if (tokenAndLoops[0] === "=") side++
    else tokenizedEquation[side].push(tokenAndLoops[0])

    i -= tokenAndLoops[1]
  }
  return tokenizedEquation
}

const findToken = (equation, i) => {
  let isXAtI = equation[i] === "x"
  let token = isXAtI ? 1 : equation[i]
  if (token === "=") return ["=", 0]
  let factor = isXAtI ? 1 : 10

  for (let j = i - 1; j >= 0; j--) {
    if (equation[j] === "=") return [isX(+token, isXAtI), 1]
    if (equation[j] === "-") return [isX(token * -1, isXAtI), i - j]
    if (equation[j] === "+") return [isX(+token, isXAtI), i - j]
    if (!Number.isNaN(+equation[j])) {
      token *= equation[j] * factor
      factor *= 10
    } else {
      return [isX(+token, isXAtI), i - j]
    }
  }
  // if we are here, i === 0 || x has a factor ?
  return isXAtI ? [[1], 1] : [+token, 0] // here???
}

const isX = (val, bool) => bool ? [val] : val

const reduceEquation = tokens => {
  const phrase = []

  const reducedNum = tokens.length ? tokens.reduce((total, token) => {
    if (typeof token === "number") return total + token
    else phrase.push(token[0])
    return total + 0
  }, 0) : 0

  const reducedX = phrase.length ? phrase.reduce((total, x) => {
    return total + x
  }, 0) : 0

  return [reducedX, reducedNum]
}

const compareEquations = (left, right) => {
  const num = right.pop() - left.pop()
  const x = left.pop() - right.pop()

  return isValid(num, x)         // time: O(1) | space: O(1)
}

const isValid = (num, x) => {
  let buildX
  if (x) {
    buildX = x === 1 ? "x" : `${x}x`
  } else {
    buildX = 0
  }

  if (num === 0 && x === 0) return "Infinite Solutions"
  if (x === 0) return "No Solutions"

  return `${buildX}=${num}`
}

// "x=x" === "Infinite Solutions"
// "2x=x" === "x=0"

// console.log(solveEquation("x+5-3+x=6+x-2")) // "x=2"
// console.log(solveEquation("x=x")) // "Infinite solutions"
console.log(solveEquation("2x=x")) // "x=0"


// Based on rules of linear equations, if a != 0, there exists a unique solution. If a = 0, then there are infinite solutions if b = 0 also. If b != 0, then there are no solutions.

