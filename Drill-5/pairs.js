import {testObject} from "./objects.js"

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    const result=[];
    for(let i in obj){
        result.push([i,obj[i]]);
    }
    return result;
  }
  console.log(pairs(testObject));