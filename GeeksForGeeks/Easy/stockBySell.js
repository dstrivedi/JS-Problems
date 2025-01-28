function profit(stock) {
    let maxProfit = 0;
    for(let i = 0; i < stock.length; i++) {
        for (let j = i + 1; j < stock.length; j++) {
            let profit = stock[j] - stock[i];
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}

console.log(profit([7, 10, 1, 3, 6, 9, 2]));
console.log(profit([7, 6, 4, 3, 1]));
console.log(profit([1, 3, 6, 9, 11]));