/**
 * @param {string[]} board
 * @return {boolean}
 */

var validTicTacToe = function(board) {
    var xCount = 0;
    var oCount = 0;

    // if(board[0] === "O") return false

    const isWinner = (board, c) => {
        for(let i = 0 ; i < board.length; i++) {
            if(board[i][0] == c && board[i][1] == c && board[i][2] == c) {
                return true;
            }
        }
        for(let j = 0 ; j < 3; j++) {
            if(board[0][j] == c && board[1][j] == c && board[2][j] == c) {
                return true;
            }
        }
        if((board[0][0] == c && board[1][1] == c && board[2][2] == c) || (board[0][2] == c && board[1][1] == c && board[2][0] == c)) {
            return true
        }
        return false;
    }

    // console.log(board[0].slice(0,1))

    for(const row of board) {
        for(const cell of row) {
            if(cell === "X") {
                xCount++;
            } else if(cell === "O") {
                oCount++;
            }
        }
    }

    console.log(xCount,oCount)
    if(xCount === oCount || xCount === oCount+1) {
        if(isWinner(board,'O') && isWinner(board,'X')) return false;

        if(isWinner(board, 'X') && xCount !== oCount + 1) return false;

        if(isWinner(board, 'O') && xCount !== oCount) return false;

        return true
    }

    return false
};

console.log(validTicTacToe(["O  ","   ","   "]))
console.log(validTicTacToe(["XOX"," X ","   "]))
console.log(validTicTacToe(["XOX","O O","XOX"]))
console.log(validTicTacToe(["XXX","   ","OOO"]))
console.log(validTicTacToe(["XO ","XO ","XO "]))
console.log(validTicTacToe(["XXX","XOO","OO "]))
console.log(validTicTacToe(["O  ","O X","  X"]))