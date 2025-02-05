import { items } from "./arrays.js";
function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    for(let i=0;i<elements.length;i++){
        if(cb(elements[i])){
            return elements[i];
        }
    }
    return undefined;
  }
  function callback(element){
    return element%2===0;
  }
  console.log((find(items,callback)));