/**
 * 
 * @param {Array} familyTree 
 * @returns {Array}
 * @description {
    Problem Statement

    Given a family tree represented as a nested array of objects, 
    write a function flattenChildrenWithDescendantCount that:

    Flattens the family tree into a single array of objects.
    Calculates the descendant count for each family member.
    Input Format

    familyTree: An array of objects representing the family tree, where each object has the following properties:

    name: A string representing the family member's name.
    children: An optional array of objects representing the family member's children.

    Output Format
    An array of objects with the following properties:
    name: A string representing the family member's name.
    descendantCount: A number representing the number of descendants for the family member.

    Sample Input 
    ```[
    { 
    name: 'John', 
        children: [ 
        { name: 'Jane', 
        children: [
            { name: 'Emily' }
        ]}, 
        ], 
    },
    ]```

    Sample Output 

    ```
    [
    { name: 'Emily', descendantCount: 0 }, 
    { name: 'Jane', descendantCount: 1 }, 
    { name: 'John', descendantCount: 2 }
    ]
    ```} 
 * @returns 
 */

function flattenChildrenWithDescendantCount(familyTree) {
  if (familyTree.length === 0) {
      return [];
  }
  let result = [];
  let count = 0;
  
  function flatten(tree) {
    count = 0;
    if (tree.children && tree.children.length > 0) {
      tree.children.forEach(child => {
        count += 1 + flatten(child)
      });
    }
    result.push({ name: tree.name, descendantCount: count });
    return count;
  }
  
  for (let i = 0; i < familyTree.length; i++) {
    flatten(familyTree[i])
  }
  return result
}


console.log(
  flattenChildrenWithDescendantCount([
    { name: "John", children: [{ name: "Jane" }, { name: "Bob" }] },
    { name: "Alice", children: [{ name: "Charlie" }] },
  ])
);

console.log(flattenChildrenWithDescendantCount([{ name: "John" }]));

console.log(
  flattenChildrenWithDescendantCount([
    { name: "John", children: [{ name: "Jane" }] },
  ])
);