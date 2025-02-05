import { items } from "./arrays.js";
function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
    let result=[];
    for (let i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i])) {
          result.push(...flatten(elements[i]));
        } else {
          result.push(elements[i]);
        }
      }
    
      return result;
}

let items1=([1, [2], [3, [[4]]]]);
console.log(flatten(items1));