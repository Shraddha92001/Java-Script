// merge two objects
const obj1 = { 1: "a", 2: "shree" }
const obj2 = { 3: "b", 4: "Singh" }
const obj3 = Object.assign(obj1, obj2) //less user

const obj4 = {...obj1, ...obj2 } // spread object mostly use
console.log(obj4);