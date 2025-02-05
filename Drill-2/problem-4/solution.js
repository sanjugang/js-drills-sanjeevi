import { users } from "../users.js";

export function groupByLanguage(users){
    const groupedByLanguage = {};
    const languages = ["Python", "Golang", "JavaScript"];
    for (let i = 0; i < languages.length; i++) {
        groupedByLanguage[languages[i]] = [];
    }
    for (let i in users) {
        let user = users[i];
        for (let j = 0; j < languages.length; j++) {
            if (user.desgination.toLowerCase().includes(languages[j].toLowerCase())) {
                groupedByLanguage[languages[j]].push(i);
            }
        }
    }
    return groupedByLanguage;
}
console.log(groupByLanguage(users));