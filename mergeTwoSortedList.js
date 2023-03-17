const merge = (list1, list2) => {
    let merged = list1
    list2.map((ele) => merged.push(ele))
    for(let i = 0 ; i < merged.length ; i++) {
        for(j = i+1 ; j < merged.length ; j++) {
            if(merged[i] > merged[j]) {
                let temp = merged[i]
                merged[i] = merged[j]
                merged[j] = temp
            } 
        }
    }
    return merged
}

console.log(merge([1,2,4],[1,3,4]))
console.log(merge([],[]))
console.log(merge([],[0]))