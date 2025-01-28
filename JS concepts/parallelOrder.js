const parallelWithOrder = async (tasks) => {
  // Implement the function
  const promise = tasks.map((task) => task());
  return Promise.all(promise);
};

// Example
const task = (i) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Task ${i}`), Math.random() * 1000)
  );

const tasks = [() => task(1), () => task(2), () => task(3)];
parallelWithOrder(tasks).then(console.log); // Output: ["Task 1", "Task 2", "Task 3"]
