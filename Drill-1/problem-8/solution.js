import { arrayOfObjects } from "../persons.js";

export function cityCountry(data){
    const cityAndCountry=[];
    for(let i=0;i<data.length;i++){
        cityAndCountry.push(data[i].city,data[i].country)
    }

    return cityAndCountry;
}

console.log(cityCountry(arrayOfObjects));