import {arrayOfObjects} from "../persons.js"
export function student(data,city){
    const students=[];
    for(let i=0;i<data.length;i++){
        if(data[i].isStudent && data[i].country==="Australia"){
            students.push(data[i].name);
        }
    }
    return students;
}
console.log(student(arrayOfObjects,"Australia"));