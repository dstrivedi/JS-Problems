// /^[o\<]+[\*]*[o\>]+$/;

 /**
 * Write a function that returns the length of the longest "worm" found in a given string.
 *
 * Definition of a "worm":
 *  - A worm is a specific sequence of uninterrupted characters that can face either to the right or to the left.
 *
 * Worm facing left:
 *  - Starts with an 'o' (its head)
 *  - Followed by 0 or more '*' characters (its body)
 *  - Ends with a '>' (its tail)
 *  e.g. "o**>" (length 4).
 * 
 * Worm facing right:
 *  - Starts with a '<' (its tail).
 *  - Followed by 0 or more '*' characters (its body).
 *  - Ends with an 'o' (its head).
 *  e.g. "<o" (length 2).
 *
 * @param {string} str - The input string to search for worms.
 * @returns {number} - The length of the longest worm, or 0 if no worms exist.
 *
 * @example
 * longestWorm("<o");          // Output: 2
 * longestWorm("<****o");      // Output: 6
 * longestWorm("o**>");        // Output: 4
 * longestWorm("o**<**>");     // Output: 0
 * longestWorm("random<*o*>"); // Output: 3
 */

function longestWorm(str) {
  // Write code here
    let regex = /[o\<]+[\*]*[o\>]+/g;
    return str.match(regex)[0].length
//   let wormArrs = str.match(regex);
//   if(str.match(regex)) return str.length;
    //   return 0;
    
    // let leftRegex = /o\**>/g;
    // let rightRegex = /<\**o/g;

    // let leftWorms = str.match(leftRegex) || [];
    // let rightWorms = str.match(rightRegex) || [];

    // const leftWormLength = leftWorms.map((worm) => worm.length);
    // const rightWormLength = rightWorms.map((worm) => worm.length);

    // const maxLeftWormLength = leftWormLength.length > 0 ? Math.max(...leftWormLength) : 0;
    // const maxRightLength =
    //   rightWormLength.length > 0 ? Math.max(...rightWormLength) : 0;

    // return Math.max(maxLeftWormLength, maxRightLength)
}

console.log(longestWorm('<o'))
console.log(longestWorm("<****o**************>"))
console.log(longestWorm("o**>"))
console.log(longestWorm("o**<**>"))
console.log(longestWorm("random<*o*>"))
console.log(longestWorm("<*o*>"))