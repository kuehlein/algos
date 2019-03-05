// Is str1 a permutation of str2

// O(n) time | O(1) space
const isPerm = (str1, str2) => {
  if (str1.length !== str2.length) return false
  let total = 0
  for (let i = str1.length - 1; i >= 0; i--) {
    total ^= str1.charCodeAt(i)
    total ^= str2.charCodeAt(i)
  }
  return !total
}

console.log(isPerm("abc", "bca")) // true
console.log(isPerm("hello world", "jk lol")) // false
console.log(isPerm("hello world", "helloworld ")) // false
console.log(isPerm("aaa", "bbb")) // false
console.log(isPerm("yrtweq", "qwerty")) // true
