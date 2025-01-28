/**
 * How would you implement a function to execute an array of asynchronous tasks
sequentially, collecting both resolved values and errors?
 */

const createAsyncTask = () => {
  const randomVal = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomVal > 5) {
        resolve(randomVal);
      } else {
        reject(randomVal);
      }
    }, randomVal * 100);
  });
};
const tasks = [
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
];
const taskRunnerIterative = async(tasks, cb) => {
    //write code here
    const result = [];
    const error = [];
    for (let task of tasks) {
        try {
            const response = await task();
            result.push(response);
        } catch (e) {
            error.push(e)
        }
    }
    cb(result, error);
};
const taskRunnerRecursion = (tasks, cb) => {
    //write code here
    const result = [];
    const error = [];

    const helper = (ptr = 0) => {
        if (ptr === tasks.length) {
            cb(result, error);
            return;
        } 
        tasks[ptr]().then((num) => {
            result.push(num);
        }).catch((num) => {
            error.push(num);
        }).finally(() => {
            helper(++ptr);
        })
    }
    helper();
};
taskRunnerIterative(tasks, (result, err) => console.log(result, err));
taskRunnerRecursion(tasks, (result, err) => console.log(result, err));