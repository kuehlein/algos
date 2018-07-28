// time: O(n)
// space: O(n)
const caesarCipherEncryptor = (string, key) => {
  const newKey = key % 26
  let newString = ""

  for (let i = 0; i < string.length; i++) {
    newString += getChar(string, i, newKey)
  }

  return newString
}

const getChar = (string, i, key) => {
  const asciiCode = string.charCodeAt(i) + key
  const newChar = asciiCode > 122 ? asciiCode - 26 : asciiCode

  return String.fromCharCode(newChar)
}

console.log(caesarCipherEncryptor("xyz", 3)) // "abc"
