const mynum = [1, 2, 3, 4, 5, 6, 7, 8]

let num = mynum.map((nm) => nm + 10)
console.log(num);
let num1 = mynum.map((nm) => nm + -2)
console.log(num1);


//chaining in map

const newnum = mynum
    .map((nm) => nm + 10)
    .map((nm) => nm - 41)

console.log(newnum);