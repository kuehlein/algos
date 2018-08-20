/*
 * Given two input strings, check to see if there is a common substring between the two.
 * The substring can be as short as a single letter. Return "YES" if so, otherwise "NO".
 */

// Time: O(n + m)
// Space: O(min(n, m))
// where n is the length of the first input string and m is the length of the second input string
const twoStrings = (s1, s2) => {
  let larger;
  let smaller;
  if (s1.length > s2.length) {
    larger = s1;
    smaller = s2;
  } else {
    larger = s2;
    smaller = s1;
  }
  const cache = buildCache(smaller);
  for (let i = 0; i < larger.length; i++) {
    if (cache[larger[i]]) return "YES";
  }
  return "NO";
};

const buildCache = smaller => {
  const cache = {};
  let unique = 0;
  for (let i = 0; i < smaller.length; i++) {
    if (unique === 26) break;
    if (!cache[smaller[i]]) {
      cache[smaller[i]] = true;
      unique++;
    }
  }
  return cache;
};

const str1 = "ayyooo";
const str2 = "yo";

console.log(twoStrings(str1, str2)); // "YES"
