const findFrequency = (arr,n,find) => {
    let cnt = 0;
    for(var i = 0; i < n; i++) {
        if(arr[i] === find) {
            cnt += 1
        }
    }
    return cnt;
}

console.log(findFrequency([1, 1, 1, 1, 1],5,1))
console.log(findFrequency([1,2,3,4,3,3], 6,3))