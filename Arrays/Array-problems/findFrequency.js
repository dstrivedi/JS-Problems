// const findFrequency = (arr,n,find) => {
//     let cnt = 0;
//     for(var i = 0; i < n; i++) {
//         if(arr[i] === find) {
//             cnt += 1
//         }
//     }
//     return cnt;
// }

// console.log(findFrequency([1, 1, 1, 1, 1],5,1))
// console.log(findFrequency([1,2,3,4,3,3], 6,3))

const mostFrequent = (input) => {
    var obj = {};
    var max = 0;
    var mfItem;
    for (let i = 0; i < input.length; i++) {
        let cnt = 0
        if (!obj.hasOwnProperty(input[i])) {
            for (let j = i; j < input.length; j++) {
           
                if (input[i] == input[j]) {
                    cnt += 1
                }
            }
            obj[input[i]] = cnt
            if(cnt > max) {
                mfItem = input[i]
                max = cnt
            }
        }
    }
    return mfItem+ " " +max + " times"
}

console.log(mostFrequent(['a', 'b', 1, 'a', 'a', 2, 1]))
