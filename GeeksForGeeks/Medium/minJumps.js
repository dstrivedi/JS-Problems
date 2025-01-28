const minJumps = (arr) => {
  if (arr.length <= 1) return 0; // No jump needed if there's only one element
  if (arr[0] === 0) return -1; // Can't move anywhere if the first element is 0
//   let jump = 0;
//   let countJump = 0;
//   let index = 0;
//   while (index < arr.length - 1) {
//     jump = arr[index];
//     index += jump;
//       countJump += 1;
//       if (index >= arr.length - 1) break;
//     console.log(jump, index, arr[index]);
//   }
    //   return countJump;
    let maxReach = 0;
    let jumps = 0;
    let currentEnd = 0;
    for (let i = 0; i < arr.length; i++) {
        maxReach = Math.max(maxReach, i + arr[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = maxReach;
        }
        if (currentEnd >= arr.length - 1) {
            break;
        }
    }
    return currentEnd >= arr.length - 1 ? jumps : -1;
}

console.log(minJumps([2,3,1,1,4]));
// console.log(minJumps([1, 4, 3, 2, 6, 7]));
// console.log(minJumps([0, 10, 20]));