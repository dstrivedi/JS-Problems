/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let columnName = [];

    while(columnNumber > 0) {
        //find remainder first
        let rem = columnNumber % 26;

        //if rem is 0, push Z to columnName and calculate columnNumber 
        if(rem === 0) {
            columnName.push("Z");
            columnNumber = Math.floor(columnNumber / 26) - 1;
            // console.log(columnNumber)
        }
        //if rem is non-zero, then push  
        else {
            //console.log(String.fromCharCode((rem - 1) + "A".charCodeAt())) //return char using fromCharCodeAt() and index using charCodeAt()
            columnName.push(String.fromCharCode((rem - 1) + "A".charCodeAt()));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return columnName.reverse().join("");
};

console.log(convertToTitle(26))
console.log(convertToTitle(51))
console.log(convertToTitle(52))
console.log(convertToTitle(80))
console.log(convertToTitle(676))