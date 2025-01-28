/**
 * Shortest Word Distance
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
 */

function shortestWordDistance(arr, word1, word2) {
    let word1_idx = -1;
    let word2_idx = -1;
    let minDistance = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word1) {
            word1_idx = i
        } else if (arr[i] === word2) {
            word2_idx = i
        }
        // console.log(minDistance)
        if (word1_idx !== -1 && word2_idx !== -1) {
          minDistance = Math.min(minDistance, Math.abs(word2_idx - word1_idx));
        }
    }
    return minDistance;
}

console.log(
    shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")
);

console.log(
  shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"makes","coding")
);

console.log(shortestWordDistance(["abc", "def", "ghi", "abc"], "abc", "ghi"));
console.log(shortestWordDistance(["abc", "def", "ghi", "abc"], "abc", "def"));
console.log(shortestWordDistance(["hello", "geek", "gfg", "coding", "geek"], "coding", "hello"));
console.log(
  shortestWordDistance(
    ["hello", "geek", "gfg", "coding", "geek"],
    "geek",
    "coding"
  )
);