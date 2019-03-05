// time: O(n)
// space: O(1)
const lengthOfLastWord = s => {
  const strs = s.trim().split(" ");
  return strs[strs.length - 1].length;
};

console.log(lengthOfLastWord("Hello World ")); // 5
