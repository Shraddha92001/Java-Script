//2 way to Declaration of object 1.constructor and 2.literals

//declaration of symbol
const mysym = Symbol("key1")

// object literals
const jsuser = {
        name: "shree",
        age: 22,
        [mysym]: "value of kay1",
        email: "shree@gmail.com",
        isloggedIn: true, //boolean
        lastLogin: ["monday", "sunday"] //array

    } //object declaration

console.log(jsuser); // access object
console.log([mysym]); // access the symbol by using []
console.log(jsuser[mysym]); // access the symbol values by using []

console.log(jsuser.name) // access value

//changing the value of object
jsuser.email = "shree1234@gmail.com"
Object.freeze(jsuser) // adding value by using freez
console.log(jsuser);


// adding greetings
jsuser.greeting = function() {
    console.log("hello JS user");
}

console.log(jsuser.greeting());