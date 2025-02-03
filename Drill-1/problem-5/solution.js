import { arrayOfObjects } from "../persons.js";

export function ages(data){
    const individualAges=[];
    for(let i=0;i<data.length;i++){
        individualAges.push(data[i].age);
    }
    return individualAges;
}

console.log(ages(arrayOfObjects));