import { arrayOfObjects } from "../persons.js";

export function individualHobbies(data){
    const firstHobby=[];
    for(let i=0;i<data.length;i++){
        firstHobby.push(data[i].hobbies[0]);
    }
    return firstHobby;
}

console.log(individualHobbies(arrayOfObjects));