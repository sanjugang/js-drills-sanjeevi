// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

import { inventory } from "../cars.js";

export function car_years(data){
    const years=[];
    for(let i=0;i<Object.keys(data).length;i++){
        years.push(data[i].car_year);
    }
    return years;
}
console.log(car_years(inventory));