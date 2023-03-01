/*
    Input: array[]= {5, 10, 20, 15}
    Output: 20
    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

    Input: array[] = {10, 20, 15, 2, 23, 90, 67}
    Output: 20 or 90
    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.
*/

const Peak = (input,n) => {
    let new_arr = []

    if(n === 1) return input[0]
    if(input[0] >= input[1]) return input[0]
    if(input[n-1] >= input[n-2]) return input[n-1]

    input.map((ele, i) => {
        if(input[i+1] > ele && input[i+1] > input[i+2]) {
            new_arr.push(input[i+1]);
        }
    })

    /*alternate - check for every other element
        for (var i = 1; i < n - 1; i++) 
        {
        // check if the neighbors are smaller
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) 
                new_arr.push(arr[i]);
        }
    */
    return new_arr;
}

console.log(Peak([5, 10, 20, 15],4))
console.log(Peak([10, 20, 15, 2, 23, 90, 67],7))
console.log(Peak([1, 3, 20, 4, 1, 0],6))
console.log(Peak([13],1))
console.log(Peak([12,2],2))

// Time complexity: O(n), One traversal is needed so the time complexity is O(n)
