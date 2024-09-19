const maxOnes = ( a,n) => {
    // code here
    let max_diff = 0;
    let ori_one_count = 0;
    for(let i =0 ; i < n ; i++) {
        if(a[i] == 1) {
            ori_one_count +=1
        }
        // console.log(a,ori_one_count)
        let count1 = 0;
        let count0 = 0;
        for(let j = i; j < n ; j++) {
            (a[j] == 0) ? count0++ : count1++;
            max_diff = Math.max(max_diff,count0-count1)
            // console.log(max_diff, count0, count1)
        }
    }
    return ori_one_count+max_diff
}

const max1s = (a,n) => {
    return a.filter(a => {
        
    })
}

console.log(maxOnes([1,0,0,1,0],5))
console.log(maxOnes([1, 0, 0, 1, 0, 0, 1],7))