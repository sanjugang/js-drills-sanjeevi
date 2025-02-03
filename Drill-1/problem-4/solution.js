import { arrayOfObjects } from "../persons.js";

export function nameCity(data,index){
    const person=data[index];
    return{
        name:person.name,
        city:person.city
    }
}

console.log(nameCity(arrayOfObjects,3));