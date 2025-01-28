const chainPromises = async(numbers, processNumber) => {
    // Implement the function
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        try {
            const response = await processNumber(numbers[i]);
            result.push(response);

        } catch (error) {
            console.error(`Error processing number ${numbers[i]}:`, error);
        }
    }
    return result;
};

// Example
const processNumber = (num) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(num * 2), Math.random() * 1000)
  );

chainPromises([1, 2, 3, 4], processNumber).then(console.log);
// Output: [2, 4, 6, 8]
