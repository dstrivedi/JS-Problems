var RandomizedSet = function () {
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.values.includes(val)) {
    return false; //element already exists
  }

  this.values.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.values.includes(val)) {
    return false; //Element not found
  }
  this.values = this.values.filter((vals) => vals != val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * this.values.length);
  return this.values[random];
};

// Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();
console.log(obj);
var param_1 = obj.insert(1);
obj.insert(2);
obj.insert(3);
console.log(param_1);
console.log("After Insert :", obj);
var param_2 = obj.remove(2);
console.log(param_2);
console.log("after remove: ", obj);
var param_3 = obj.getRandom();
console.log(param_3);
