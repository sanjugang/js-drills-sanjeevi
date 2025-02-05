import {testObject} from "./objects.js"

function keys(obj){
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
    let all_keys=[];
    for(let i in obj){
        all_keys.push(i);
    }
    return all_keys;
}
console.log(keys(testObject));