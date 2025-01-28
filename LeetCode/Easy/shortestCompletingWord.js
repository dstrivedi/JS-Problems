const shortestCompletingWord = (licensePlate, words) => {
    let regex = /[a-zA-Z]/gi;
    let matchCase = licensePlate.toLowerCase().match(regex);
    // console.log(matchCase)
    let result= []

    let liceneMap = {};
    matchCase.forEach(char => {
        liceneMap[char] = (liceneMap[char] || 0) + 1;
    });

    for (let i = 0; i < words.length; i++) {
        let wordMap = {};
        for (let char of words[i]) {
            wordMap[char] = (wordMap[char] || 0) + 1
        }
        for (let char in liceneMap) {
            if (!wordMap[char] || wordMap[char] < liceneMap[char]) {
                result.push(words[i])
            }
        }
    }
    return result
}

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);