/**
 * Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
Example 3:

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
 */

const findRestaurant = (list1, list2) => {
    let minIndexSum = Infinity;
    let list = list1.length > list2.length ? list2 : list1;
    let common = [];
    for (let i = 0; i < list.length; i++) {
        if (list1.includes(list[i]) && list2.includes(list[i])) {
            if (minIndexSum > list1.indexOf(list[i]) + list2.indexOf(list[i])) {
                minIndexSum = list1.indexOf(list[i]) + list2.indexOf(list[i]);
            } 
        }
    }
    for (let i = 0; i < list.length; i++) {
        if ((list1.includes(list[i]) && list2.includes(list[i]) && minIndexSum === list1.indexOf(list[i]) + list2.indexOf(list[i]))) {
            common.push(list[i]);
            
        }
    }
    return common;
}

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))