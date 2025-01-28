function spiralTraverse(arr) {
    let ans = [];
    let n = arr.length; //no of rows
    let m = arr[0].length; //no of cols
    let top = 0, left = 0, bottom = n - 1, right = m - 1;

    while (top <= bottom && left <= right) {
        // from moving left to right
        for (let i = left; i <= right; i++) {
            ans.push(arr[top][i]);
        }
        top++;

        //from moving top to bottom
        for (let i = top; i <= bottom; i++) {
            ans.push(arr[i][right]);
        }
        right--;

        // from moving right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(arr[bottom][i])
            }
            bottom--;
        }
        
        // from moving bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(arr[i][left]);
            }
            left++;
        }
    }
    return ans;
}

console.log(spiralTraverse([[1,2,3]]))
console.log(spiralTraverse([[1,2],[3,4]]))
console.log(spiralTraverse([[1,2,3],[4,5,6],[7,8,9]]))
console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
// console.log(
//   spiralTraverse([
//     [32, 44, 27, 23],
//     [54, 28, 50, 62],
//   ])
// );
console.log(
  spiralTraverse([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ])
);