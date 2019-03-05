/*
 * Given two input strings, calculate the number of deletions you would need to make
 * to be left with two strings that have the same lengths and characters.
 * Both strings can be deleted from.
 */

// Time: O(nm)
// Space: O(1)
// where n and m are the lengths of the input strings
const makeAnagram = (str1, str2) => {
  let str2Arr = str2.split("");
  const count = str1.length + str2.length;
  let pair = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1[i] === str2Arr[j]) {
        swapAndDelete(str2Arr, j);
        pair += 2;
        break;
      }
    }
  }
  return count - pair;
};

const swapAndDelete = (arr, j) => {
  const temp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[j];
  arr[j] = temp;
  arr.pop();
};

const str1 = "fcrxzwscanmligyxyvym";
const str2 = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";

console.log(makeAnagram(str1, str2)); // 30
