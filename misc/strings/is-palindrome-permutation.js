// Validates whether or not an input string is a permutation of a palindrome

// O(n) time | O(1) space
const isPalindromePermutation1 = str => {
  let singles = 0
  const alphabet = {}
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      alphabet[str[i]] = alphabet[str[i]] ? ++alphabet[str[i]] : 1
    }
    alphabet[str[i]] % 2 ? singles++ : singles--
  }
  return singles < 2
}

console.log(isPalindromePermutation1("dad")) // true
console.log(isPalindromePermutation1("taat coc")) // true
console.log(isPalindromePermutation1("ufghoweisfjheribg")) // false

// Using bit vectors --- same big O, just micro-optimizing for space

const isPalindromePermutation2 = str => {
  bitVector = createBitVector(str)
  return bitVector === 0 || checkExactlyOneBitSet(bitVector)
}

const createBitVector = str => {
  let bitVector = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      const char = str.charCodeAt(i)
      bitVector = toggle(bitVector, char)
    }
  }
  return bitVector
}

const toggle = (bitVector, index) => {
  if (index < 0) return bitVector
  let mask = 1 << index                           // mask of bit

  if ((bitVector & mask) === 0) bitVector |= mask // set bit --- `bitVector & mask` checks to see if the mask bit on bitVector is 1
  else bitVector &= ~mask // clear bit --- if the mask bit was one, it is switched off by finding the 2's compliment (~) and using &

  return bitVector
}

// if only one bit is flipped in bitVector (e.g. 01000), if you subtract 1 (00111) and preform an & on that and the original
// (01000 & 00111), they should cancel out to equal 0, but if there was more than one bit flipped, the & would not produce 0.
const checkExactlyOneBitSet = bitVector => (bitVector & (bitVector - 1)) === 0

console.log(isPalindromePermutation2("dad"))
