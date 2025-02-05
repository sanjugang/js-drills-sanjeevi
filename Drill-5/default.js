import {testObject} from "./objects.js"

function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    if (defaultProps.hasOwnProperty(key)) {
        if (obj[key] === undefined) {
          obj[key] = defaultProps[key]; 
        }
      }
  
    return obj; 
  }