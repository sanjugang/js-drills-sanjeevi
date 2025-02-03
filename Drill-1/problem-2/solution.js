import { arrayOfObjects } from "../persons.js";
export function getHobbies(data,targetAge){
    const hobbies=[];
    for(let i=0;i<data.length;i++){
        if(data[i].age===targetAge){
            hobbies.push([data[i].hobbies]);
        }
    }
    return hobbies;
}

console.log(getHobbies(arrayOfObjects,30));