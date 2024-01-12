// type of datatype is primitive and non-primitive

//primitive 
// 7 type == string, null , number, symbol, undefined , boolean , bigint

const score = 100
const scorevalue = 100.11
const isLogIn = false
const OutSidetemp = null

let useName;

const id = Symbol('1252')
const otherID = Symbol('1252')
console.log(id === otherID);

const BigInt = 145698712354545
console.log(typeof BigInt);


//non - primitive :: (reference type)
// 3 type == array, object,  function

//Array
const cars = ["BMW", "audi", "maruti"]
console.log(cars);

//object
let myOB = {
    name: "shreee",
    age: 22,
}

//function
const myfunction = function() {
    console.log("hello shree");
}
console.log(typeof myfunction);