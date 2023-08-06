function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};



greet.call(obj); // cats typically sleep between 12 and 16 hours
greet.call({animal: "dogs",sleepDuration: "10 to 14 hours"})