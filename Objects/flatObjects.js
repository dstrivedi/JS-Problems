function flatObject(obj, prefix = "") {
    let result = {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === "object" && obj[key] !== null) {
                // recurssively flatten nested object
                Object.assign(result, flatObject(obj[key], newKey))
            } else {
                result[newKey] = obj[key]
            }
        }
    }

    return result
}

console.log(
  flatObject({
    a: "jack",
    b: {
      c: "sparrow",
      d: {
        e: "hahaha",
      },
    },
  })
);

console.log(flatObject({
    name: 'John',
    address: {
        city: 'New York',
        zip: {
            code: '10001',
            area: 'Manhattan'
        }
    },
    contact: {
        email: 'john@example.com',
        phone: '123-456-7890'
    }
}))