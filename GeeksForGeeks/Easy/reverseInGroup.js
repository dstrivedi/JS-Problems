function reverseInGroup(arr, k) {
    let n = arr.length;

    if (k > n) {
        arr.reverse(); // Reverse the entire array if k > n
        console.log(arr.join(" "))
        return;
    }

     for (let i = 0; i < n; i += k) {
       let left = i;
         let right = Math.min(i + k - 1, n - 1);
         console.log(i + k - 1, n - 1)

       while (left < right) {
         [arr[left], arr[right]] = [arr[right], arr[left]];
         left++;
         right--;
       }
    }
    console.log(arr.join(" "))
}

reverseInGroup([1, 2, 6, 3, 4, 5], 4)
reverseInGroup([5, 6, 8, 9], 5)
reverseInGroup([35, 56, 48, 21, 87], 77)