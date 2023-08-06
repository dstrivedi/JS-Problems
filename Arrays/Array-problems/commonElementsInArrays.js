/*
Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?
*/

function commonElements(arr1, arr2, arr3, n1, n2,n3){
    //code here
    let com = []
    for(let i = 0 ; i < n1 ; i++) {
        if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
            if(!com.includes(arr1[i])) com.push(arr1[i])
        }
    }
    return com.length > 0 ? com : [-1]
}

const common = (arr1, arr2, arr3, n1, n2, n3) => {
    return arr1.filter((ele) => arr2.includes(ele) && arr3.includes(ele)).length > 0 ? Array.from(new Set(arr1.filter((ele,) => arr2.includes(ele) && arr3.includes(ele)))) : [-1]
    
}

const common_with_loop = (arr1, arr2, arr3, n1, n2, n3) => {
    var i , j ,k = 0;
    while(i < n1 && j < n2 && k < n3) {
        if(arr1[i] == arr2[j] && arr2[2] == arr3[3]) {
            return 
        }
    }
}

console.log(common([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120], 6, 5, 8))
console.log(common_with_loop([3,3,3],[3,3,3],[3,3,3],3,3,3))