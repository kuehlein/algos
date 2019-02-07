/**
 * Given an array of strings, group anagrams together.
 */

// time: O(n * m) - where n is the length of the array and m is the longest word
// space: O(n)    - where n is the length of the array

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const groups = []
  const cache = buildCacheOfCodes(strs)

  for (const group in cache) {
    if (cache.hasOwnProperty(group)) groups.push(cache[group])
  }
  return groups
}

const buildCacheOfCodes = strs => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const cache = {}

  for (let i = strs.length - 1; i >= 0; i--) {
    let code = 1
    for (let j = strs[i].length - 1; j >= 0; j--) {
      code *= primes[strs[i].charCodeAt(j) - 97]
    }
    if (cache[code]) cache[code].push(strs[i])
    else cache[code] = [strs[i]]
  }
  return cache
}

const words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const words2 = ["ill", "hip"]; // each has same char code total
const words3 = ["ray","cod","abe","ned","arc","jar","owl","pop","paw","sky","yup","fed","jul","woo","ado","why","ben","mys","den","dem","fat","you","eon","sui","oct","asp","ago","lea","sow","hus","fee","yup","eve","red","flo","ids","tic","pup","hag","ito","zoo"];

console.log(groupAnagrams(words1)); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams(words2)); // [["ill"], ["def"]]
console.log(groupAnagrams(words3));
// [["hag"],["pup"],["ids"],["ito"],["flo"],["red"],["hus"],["sow"],["asp"],["oct"],["sui"],["fee"],["eon"],["tic"],["sky"],["ago"],["paw"],["jul"],["pop"],["jar"],["den","ned"],["owl"],["eve"],["mys"],["abe"],["zoo"],["ado"],["ray"],["cod"],["lea"],["arc"],["dem"],["fat"],["yup","yup"],["woo"],["fed"],["why"],["ben"],["you"]]
