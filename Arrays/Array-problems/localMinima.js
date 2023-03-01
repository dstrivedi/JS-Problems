/*
    Input: arr[] = {9, 6, 3, 14, 5, 7, 4};
    Output: Index of local minima is 2
    The output prints index of 3 because it is 
    smaller than both of its neighbors. 
    Note that indexes of elements 5 and 4 are 
    also valid outputs.

    Input: arr[] = {23, 8, 15, 2, 3};
    Output: Index of local minima is 1

    Input: arr[] = {1, 2, 3};
    Output: Index of local minima is 0

    Input: arr[] = {3, 2, 1};
    Output: Index of local minima is 2
*/

const localMinima = (input,n) => {
    let new_arr = [];
    
    //check for first and last element
    if(n == 1) return input[0]
    if(input[0] <= input[1]) return input[0]

    input.map((ele,i) => {
        if(input[i+1] < ele && input[i+1] < input[i+2]) 
            new_arr.push(input[i+1]);
    });
    
    if(input[n-1] <= input[n-2]) new_arr.push(input[n-1])

    return new_arr;
}

console.log(localMinima([4, 3, 1, 14, 16, 40],6))
console.log(localMinima([23, 8, 15, 2, 3],5))
console.log(localMinima([9, 6, 3, 14, 5, 7, 4],7))
console.log(localMinima([1, 2, 3],3))
console.log(localMinima([3, 2, 1],3))