import { inventory } from "../cars.js";

export function last_car(data){
    let result=""
    const car=Object.keys(data).length;
    for(let i=0;i<car;i++){
        if(i===car-1){
            result=`Last car is a  ${data[i].car_make} ${data[i].car_model}`;
        }
    }
    return result;
}
console.log(last_car(inventory));