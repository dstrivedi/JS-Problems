/**
 *Given an array of jobs where every job has a deadline and associated profit if the job is finished before the deadline. It is also given that every job takes a single unit of time, so the minimum possible deadline for any job is 1. Maximize the total profit if only one job can be scheduled at a time.
 */

let jobSequencing = (arr) => {
  arr.sort((a, b) => b[2] - a[2]);
  //   console.log(arr);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > max) {
      max = arr[i][1];
    }
  }
  //   console.log(max);
  let result = [];
  let cnt = 0;
  let profit = 0;
  for (let i = 0; i < max; i++) {
    result[i] = -1;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i][1]);
    for (let j = max; j >= 0; j--) {
      if (result[j] == -1) {
        result[j] = i;
        // console.log(result);
        cnt += 1;
        profit += arr[i][2];
        break;
      }
    }
  }
  let ans = [];
  ans[0] = cnt;
  ans[1] = profit;
  return ans;
};

console.log(
  jobSequencing([
    ["a", 2, 100], // Job Array
    ["b", 1, 19],
    ["c", 2, 27],
    ["d", 1, 25],
    ["e", 3, 15],
  ])
);

console.log(
  jobSequencing([
    [1, 2, 100],
    [2, 1, 19],
    [3, 2, 27],
    [4, 1, 25],
    [5, 1, 15],
  ])
);

console.log(
  jobSequencing([
    [1, 4, 20],
    [2, 1, 10],
    [3, 2, 40],
    [4, 2, 30],
  ])
);
