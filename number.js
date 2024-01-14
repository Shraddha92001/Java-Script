// type of numberintegers,floating ,doubles

const myint = 5
const myfloat = 6022.11


console.log(myint);


const balance = new Number(10000)
console.log(balance);
console.log(balance.toString().length); // find the leanth of string
console.log(balance.toFixed(2)); // priority after decimal ---returns a string, with the number written with a specified number of decimals:

const newNumber = 1000.22
console.log(newNumber);
console.log(newNumber.toPrecision(6));


//toExponential() Method   ----toExponential() Method
let x = 9.656;

console.log(x.toExponential(2));
x.toExponential(4);
x.toExponential(6);
console.log(x);



const number = 10200.1
console.log(Number.isInteger()); // Returns true if the argument is an integer