/**
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
**/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let res = [],
    current_line = [],
    length = 0,
    i = 0;

  while (i < words.length) {
    // cond when currrent_line has no space and is complete
    if (length + current_line.length + words[i].length > maxWidth) {
      // remaining space
      let space = maxWidth - length;

      // divide space between words
      let divide_space = Math.floor(
        space / Math.max(1, current_line.length - 1)
      );

      // remainder when the remaining space is odd number and have to add extra space for the first word
      let remainder = space % Math.max(1, current_line.length - 1);

      // adding space in the currrent line
      for (let j = 0; j < Math.max(1, current_line.length - 1); j++) {
        current_line[j] += " ".repeat(divide_space);
        console.log("after space ", current_line);
        if (remainder) {
          current_line[j] += " ";
          remainder -= 1;
        }
      }

      // adding current_line in the res
      res.push(current_line.join(""));

      // reset value for the current_line and length
      current_line = [];
      length = 0;
    }

    // adding words[i] in the current_line
    current_line.push(words[i]);

    // counting length of the words[i]
    length += words[i].length;

    // counter for the words
    i += 1;
  }

  // adding last_line as it will be left justified and leave trailing space
  let last_line = current_line.join(" ");
  let trailing_space = maxWidth - last_line.length;
  res.push((last_line += " ".repeat(trailing_space)));
  return res;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);

// console.log(
//   fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
// );

// console.log(
//   fullJustify(
//     [
//       "Science",
//       "is",
//       "what",
//       "we",
//       "understand",
//       "well",
//       "enough",
//       "to",
//       "explain",
//       "to",
//       "a",
//       "computer.",
//       "Art",
//       "is",
//       "everything",
//       "else",
//       "we",
//       "do",
//     ],

//     20
//   )
// );
