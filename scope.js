//scope is {} .... when {} come with function and if else it called scope


// let a = 10
// const b = 20
// var c = 30

//global scope
let a = 3000
console.log("global scope is", a);

//local scope
if (true) { //<----- block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner scope", a);
}
//console.log(a);
//console.log(b);
// console.log(c);