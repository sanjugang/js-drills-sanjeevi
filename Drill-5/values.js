import {testObject} from "./objects.js"

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    let result=[];
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            if(typeof obj[i]!='function'){
                result.push(obj[i]);
            }
        }
    }
    return result;
  }
console.log(values(testObject));