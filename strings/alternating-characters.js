/*
 * Given an input string composed of only "A" and "B", return the number of deletions
 * necessary to make the characters alternating.
 */

// Time: O(n)
// Space: O(1)
// where n is the length of the input string
const alternatingCharacters = s => {
  let deletions = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) deletions++;
  }
  return deletions;
};

console.log(alternatingCharacters("ABABBAABA")); // 2
