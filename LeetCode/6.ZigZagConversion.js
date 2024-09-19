const ZigZagConversion = (str,n) => {
    if(str.length === 1 || str.length < n || n === 1) {
        return str
    }

    let currentRow = 0;
    let reverse = false;
    let rows =[];
    let result = "";

    for(let i = 0 ; i < n ; i++) {
        rows[i] = [];
    }

    /**
     * Inside the for loop, we'll want to push this letter (s[i]) to the row based on currentRow. currentRow will get bigger if we're going down, and get smaller if we're reversing directions--so we should have a conditional statement here. If reverse is true, then currentRow should get smaller; otherwise, currentRow should get bigger.

    Thinking about the example from earlier, reverse started out as false, so the currentRow count continued to get bigger. Once we got to the bottom row, reverse was set equal to true, at which point currentRow count continued to get smaller.
    */

    for (let i = 0; i < str.length; i++) {
        rows[currentRow].push(str[i]);
        if (reverse === false) {
            currentRow++;
        } else {
            currentRow--;
        }
    
        if (currentRow === n - 1 || currentRow === 0) {
            reverse = !reverse;
        }
    }

    rows.forEach((row) => result += row.join(""))
    return rows
}

console.log(ZigZagConversion("PAYPALISHIRING",3))
console.log(ZigZagConversion("PAYPALISHIRING",4))
console.log(ZigZagConversion("AB",1))
