const sort012 = (arr,n) => {
    // return arr.sort()
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;

    for(let i = 0 ; i < n; i++) {
        switch(arr[i]){
            case 0:
                cnt0++;
                break;
            case 1:
                cnt1++;
                break;
            case 2:
                cnt2++;
                break;
            }
    }
    let i = 0;
    while(cnt0 > 0) {
        arr[i++] = 0;
        cnt0--; 
    }
    while(cnt1 > 0) {
        arr[i++] = 1;
        cnt1--; 
    }
    while(cnt2 > 0) {
        arr[i++] = 2;
        cnt2--; 
    }
    return arr
}

console.log(sort012([0,2,1,2,0],5))
console.log(sort012([0,1,0],3))