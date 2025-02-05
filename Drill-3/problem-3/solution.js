import { inventory } from "../cars.js";

export function sort_cars(data){
    const car_models=[];
    for(let i=0;i<Object.keys(data).length;i++){
        car_models.push(data[i].car_model.toLowerCase());
    }
    car_models.sort();
    return car_models;
}
console.log(sort_cars(inventory));