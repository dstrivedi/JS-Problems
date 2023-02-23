const palindrome = (num) => {
    //without using array
    let digit , result = 0, original = num;
    while(num > 0) {
        digit = num % 10; //123/10 -> 12.3 -> 3
        result = (result * 10) + digit; // 123 -> 1230 + 4-> 1234
        num  = num/10|0 //remove right most digit -> 123 -> 12.3 -> 12
    }
    return result === original ? true : false;

    //using array 
    // return num === parseInt(num.toString().split('').reverse().join('')) ? true : false;
}

console.log(palindrome(123))
console.log(palindrome(1661));
console.log(palindrome(234));