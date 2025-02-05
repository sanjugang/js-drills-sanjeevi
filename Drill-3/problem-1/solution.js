import { inventory } from "../cars.js";

export function car_33(data){
    let car="";
    for(let i in inventory){
        if(data[i].id===33){
            car=`Car 33 is a ${data[i].car_year} ${data[i].car_make} ${data[i].car_model}`;
        }
    }
    return car;
}
console.log(car_33(inventory));