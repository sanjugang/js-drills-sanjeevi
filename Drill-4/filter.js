import { items } from "./arrays.js";

function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    const result=[];
    for(let i=0;i<elements.length;i++){
        result.push(cb(elements[i],i));
    }
    return result;
  
}
function callback(element){
    if(element%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(filter(items,callback));