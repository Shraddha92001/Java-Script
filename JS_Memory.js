//type fo memory
// stack (primitive) , 
let myname = "shreee"

let myname1 = myname
myname1 = "shraddha singh"

console.log(myname);
console.log(myname1);

// heap(non-primitive)

let user1 = {
    email: "shraddha@gmail.com",
    name: "shraddha "
}
let user2 = user1
user2.email = "shreeoutlook.com"
console.log(user2);
console.log(user1);