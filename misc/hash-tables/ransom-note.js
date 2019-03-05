/*
 * Given a magazine, check to see if the given ransom note is possible using only whole
 * words, no substrings. The words are case sensitive, and each word cannot be used
 * more than once. Log "Yes" if possible, log "No" if not.
 */

// Time: O(n + m)
// Space: O(m)
// where n is the length of the input note and m is the length of the input magazine
const checkMagazine = (magazine, note) => {
  const cache = buildCache(magazine);
  for (let i = 0; i < note.length; i++) {
    if (cache[note[i]]) cache[note[i]]--;
    else return console.log("No");
  }
  console.log("Yes");
};

const buildCache = words => {
  const cache = {};
  words.forEach(word => {
    if (typeof cache[word] === "undefined") cache[word] = 1;
    else cache[word]++;
  });
  return cache;
};

const magazine = ["give", "me", "one", "grand", "today", "night"];
const note = ["give", "one", "grand", "today"];

console.log(checkMagazine(magazine, note)); // "Yes"
