// time: O(n)
// space: O(n)
// where n is the length of the input string
const balancedBrackets = string => {
  const stack = [];
  const pairs = bracketCombos;
  for (let i = 0; i < string.length; i++) {
    if (!stack.length) stack.push(string[i]);
    else {
      pairs[string[i]] === stack[stack.length - 1]
        ? stack.pop()
        : stack.push(string[i]);
    }
  }
  return !stack.length;
};

const bracketCombos = {
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{"
};

console.log(balancedBrackets("()({[]}){}")); // true
