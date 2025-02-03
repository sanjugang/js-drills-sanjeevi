import { arrayOfObjects } from "../persons.js";  

export function nameAndEmails(data, targetAge) {
    const namesEmails = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age === targetAge) {
            namesEmails.push(data[i].name,data[i].email);
        }
    }
    return namesEmails;
}

console.log(nameAndEmails(arrayOfObjects, 25));  
