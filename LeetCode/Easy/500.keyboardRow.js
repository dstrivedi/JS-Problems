/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let firstRow = /^[qwertyuiop]+$/i;
  let secondRow = /^[asdfghjkl]+$/i;
  let thirdRow = /^[zxcvbnm]+$/i;
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(firstRow)) {
      result.push(words[i]);
    } else if (words[i].match(secondRow)) {
      result.push(words[i]);
    } else if (words[i].match(thirdRow)) {
      result.push(words[i]);
    }
  }
  return result;
};
