import { arrayOfObjects } from "../persons.js"; 

export function getEmails(data) {
    const emails = [];
    for (let i = 0; i < data.length; i++) {
        emails.push(data[i].email);  
    }
    return emails;
}
console.log(getEmails(arrayOfObjects));