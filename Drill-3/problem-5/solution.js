import { inventory } from "../cars.js";

export function cars_before_2000(data){
    let count=0;
    const cars=[];
    for(let i=0;i<Object.keys(data).length;i++){
        if(data[i].car_year<2000){
            count++;
            cars.push(data[i].car_make);
        }
    }
    return [count,cars];
}
console.log(cars_before_2000(inventory));