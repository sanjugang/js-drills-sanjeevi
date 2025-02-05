import { items } from "./arrays.js";
function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
    let double_values=[];
    for(let i=0;i<elements.length;i++){
      double_values.push(cb(elements[i],i));
    }
    return double_values;
  }
  function callback(element,index){
   return element=element*2;
  }
  console.log(map(items,callback));