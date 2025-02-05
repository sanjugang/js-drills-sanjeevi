import { users } from "../users.js";

export function userGames(data) {
    let result = [];
    let game = "Video Games";

    for (let userKey in data) {
        let user = data[userKey];
        if (user.interests && user.interests.some(interests=> interests.includes(game)))  {       
              result.push(userKey); 
        }
    }

    return result;
}

console.log(userGames(users));
