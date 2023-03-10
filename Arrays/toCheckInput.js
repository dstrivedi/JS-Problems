const is_array = (input) => {
  if (input instanceof Array) {
    return true
  }
  return false
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));