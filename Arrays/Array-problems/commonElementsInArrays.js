/*
Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?
*/

function commonElements(arr1, arr2, arr3, n1, n2,n3){
    //code here
    let com = [];
    let set2 = new Set(arr2);
    let set3 = new Set(arr3);
    for(let i = 0 ; i < n1 ; i++) {
        if(set2.has(arr1[i]) && set3.has(arr1[i])) {
            if(!com.includes(arr1[i])) com.push(arr1[i])
        }
    }
    return com.length > 0 ? com : [-1]
}

const common = (arr1, arr2, arr3, n1, n2, n3) => {
    let common_eles = arr1.filter((ele) => arr2.includes(ele) && arr3.includes(ele));
    return common_eles.length > 0 ? Array.from(new Set(common_eles)) : [-1];
}

const common_with_loop = (arr1, arr2, arr3, n1, n2, n3) => {
    var i, j, k = 0;
    let common_eles = [];
    // Traverse all arrays
    while (i < n1 && j < n2 && k < n3) {
        // If the current element is equal in all three arrays
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            commonElements.push(arr1[i]);
            i++;
            j++;
            k++;
        }
        // If arr1[i] is smaller, move the pointer in arr1
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        // If arr2[j] is smaller, move the pointer in arr2
        else if (arr2[j] < arr3[k]) {
            j++;
        }
        // If arr3[k] is smaller, move the pointer in arr3
        else {
            k++;
        }
    }
    return common_eles.length > 0 ? common_eles : [-1];
}

console.log(common([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120], 6, 5, 8))
console.log(common_with_loop([3,3,3],[3,3,3],[3,3,3],3,3,3))