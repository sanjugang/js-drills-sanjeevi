import { users } from "../users.js";

export function userCity(data){
    const userGermany=[];
    for(let i in users){
        if(data[i].nationality=="Germany"){
            userGermany.push(i);
        }
    }
    return userGermany;
}

console.log(userCity(users));