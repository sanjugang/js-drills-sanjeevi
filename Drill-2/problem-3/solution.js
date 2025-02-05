import { users } from "../users.js";

export function userDegree(data){
    const userMaster=[];
    for(let i in data){
        if(data[i].qualification=== "Masters"){
            userMaster.push(i);
        }
    }
    return userMaster;
}

console.log(userDegree(users));