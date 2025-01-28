// calculator.add(3).multiply(4).subtract(5).getValue()
class Calculator {
  // write code here
  constructor(number) {
    this.number = number;
  }
  add(num) {
    this.number = this.number + num;
    return this;
  }
  multiply(num) {
    this.number *= num;
    return this;
  }
  subtract(num) {
    this.number -= num;
    return this;
  }
  getValue() {
    return this.number;
  }
}
const calculator = new Calculator(2);
console.log(calculator.getValue());
console.log(calculator.add(3).multiply(4).subtract(5).getValue()); //15
