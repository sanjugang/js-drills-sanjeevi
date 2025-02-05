import { inventory } from "../cars.js";

export function bmw_audi(data){
    const cars=[];
    for(let i=0;i<Object.keys(data).length;i++){
        if(data[i].car_make==="Audi" || data[i].car_make==="BMW"){
            cars.push(data[i]);
        }
    }
    return JSON.stringify(cars,null,2);
}
console.log(bmw_audi(inventory));