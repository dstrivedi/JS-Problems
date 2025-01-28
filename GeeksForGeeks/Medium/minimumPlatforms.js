function findPlatform(arr, dep) {
    let platform = 1;
    let result = 1;
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    let i = 1;
    let j = 0;
    while (i < n && j < n) {
        if (arr[i] >= dep[j]) {
            platform++;
            i++;
        } else if (arr[i] < dep[j]) {
            platform--;
            j++;
        }
        result = Math.max(result, platform);
    }
    return result;
}

// Function to find the minimum number of platforms required
function findPlatform(arr, dep, n) {
    // plat_needed indicates number of platforms needed at a time
    let plat_needed = 1;
    let result = 1;

    // Run a nested loop to find the overlap
    for (let i = 0; i < n; i++) {
        // Initially one platform is needed
        plat_needed = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                // Increment plat_needed when there is an overlap
                if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
                    plat_needed++;
                }
            }
        }

        // Update the result
        result = Math.max(plat_needed, result);
    }

    return result;
}

var arr = [900, 940, 950, 1100, 1500, 1800];
var dep = [910, 1200, 1120, 1130, 1900, 2000];
console.log(findPlatform(arr, dep));

var arr1 = [900, 1235, 1100];
var dep1 = [1000, 1240, 1200];
console.log(findPlatform(arr1, dep1));

var arr2 = [1000, 935, 1100];
var dep2 = [1200, 1240, 1130];
console.log(findPlatform(arr2, dep2)); 