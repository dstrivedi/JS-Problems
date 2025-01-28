function findChildObject(arr, key, value) {
    for (let obj of arr) {
        if (typeof obj === "object") {
            if (obj[key] === value) {
              return obj
            } else {
            //   console.log("object values:",Object.values(obj))
              let found = findChildObject(Object.values(obj), key, value);
              if (found) return found;
          }
        }
    }
}

console.log(
  findChildObject([
    { id: 1, children: [{ id: 2 }, { id: 3, children: [{ id: 4 }] }] },
    { id: 5 },
  ], "id", 4)
);