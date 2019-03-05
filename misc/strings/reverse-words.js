// time: O(n)
// space: O(1)
// where n is the length of the input array
function reverseWords(arr) {
  mirrorString(arr, 0, arr.length - 1);

  let wordStart = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      if (wordStart !== null) {
        mirrorString(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i === arr.length - 1) {
      if (wordStart !== null) mirrorString(arr, wordStart, i);
    } else {
      if (wordStart === null) wordStart = i;
    }
  }
  return arr;
}

function mirrorString(arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

const arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  " ",
  "m",
  "a",
  "k",
  "e",
  "s",
  " ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e"
];

reverseWords(arr);
// ["p","r","a","c","t","i","c","e"," ","m","a","k","e","s"," ","p","e","r","f","e","c","t"]
