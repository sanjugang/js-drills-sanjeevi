import {testObject} from "./objects.js"

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    const result={};
    for(let key in obj){
        const value=obj[key];
        if(!result[value]){
            result[value]=key;
        }
    }
    return result;
  }
  console.log(invert(testObject));