 //Function to find the leaders in the array.
const leaders = (arr, n) => {
    // code here
    var store=arr[arr.length-1];
    var final_array=[store];
    
    for(var i= arr.length-1; i>=0; i--){
    
        if(arr[i]>store){
            store=arr[i];
            final_array.push(arr[i])        
        }
    }
    return final_array.reverse()
}

console.log(leaders([16,17,4,3,5,2],6))
console.log(leaders([1,2,3,4,0],5))
console.log(leaders([31,40,93,40,98],5))

const second_method = (arr, n) => {
    // code here
    let final_array=[]
    let max
    for(let i= 0; i < n; i++) {
        max = arr[i]
        for(let j = i; j < n; j++) {
            if(max< arr[j]) {
                break;
            }
            if(j==n-1) final_array.push(max)
        }
    }
    return final_array
}

console.log(second_method([16,17,4,3,5,2],6))
console.log(second_method([1,2,3,4,0],5))
console.log(second_method([31,40,93,40,98],5))