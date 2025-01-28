//Asked in Amazon
var a = 10;
x();
y();
// z();

function x() {
  var a = 20;
  console.log(this.a);
}
function y() {
  console.log(this.a);
}
const z = () => {
  var a = 20;
  console.log(this.a);
};

x();
y();
z();


console.log("--------------------")(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1;
    var y = 2;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
})();


console.log("2");
setTimeout(() => {
  console.log("5");
}, 5);
console.log("10");
setTimeout(() => {
  console.log("3");
}, 0);
console.log("1");


async function syncData() {
  console.log("async syncData");
  return new Promise((resolve) => {
    if (resolve) {
      console.log("resolved");
    }
  });
}

(function () {
  console.log("1");
  syncData(); // No `await` here, so this won't pause execution
  console.log("2");
})();

console.log("-------------------------")

console.log("1: Before async/await");

(async () => {
  console.log("2: Inside async function, before await");
  const result = await new Promise((resolve) => {
    console.log("3: Inside promise executor");
    setTimeout(() => {
      console.log("4: Inside setTimeout");
      resolve("5: Promise resolved");
    }, 1000);
  });
  console.log("6: After await", result);
})();

console.log("7: After async function");

new Promise((resolve) => {
  console.log("8: Inside new Promise executor");
  resolve("9: Promise resolved");
}).then((message) => {
  console.log("10: Inside .then", message);
});

console.log("11: End of script");

// 1: Before async/await 2: Inside async function, before await 3: Inside promise executor 7: After async function 8: Inside new Promise executor 11: End of script 10: Inside .then 9: Promise resolved 4: Inside setTimeout 6: After await 5: Promise resolved

