const retryTask = async(task, retries) => {
    // Implement the function
    let lastError;
    for (let i = 0; i < retries; i++) {
        try {
            return await task();
        } catch (err) {
            lastError = err; // Store the error
            console.log(`Attempt ${i + 1} failed: ${err}`);
        }
    }
      // If all retries fail, throw the last error
  throw new Error(`All ${retries} attempts failed: ${lastError}`);
};

// Example
const task = () =>
  new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.7) resolve("Success");
    else reject("Failure");
  });

retryTask(task, 3).then(console.log).catch(console.error);
// Output: "Success" (after retries) or "Failure" (if all retries fail)
