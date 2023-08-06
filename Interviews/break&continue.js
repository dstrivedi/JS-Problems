let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    text += "Number: " + i + "\n";
}
console.log("-------break---------")
console.log(text)

let text1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    text1 += "Number: " + i + "\n";
}
console.log("------------continue-----------")
console.log(text1)