const d2 = new Date();
const date = new Date("October 13, 2014 11:13:00");
const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d2);
console.log(d1);
console.log(date);
// console.log(date.now());


const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d);

//*********************************************Date  METHODS***********************************************
const birthday = new Date('August 19, 1975 23:15:30');

// getDay()
const date1 = birthday.getDay();
console.log(date1);

//getDate()
const date2 = birthday.getDate();
console.log(date2);

//getFullYear()
const date3 = birthday.getFullYear();
console.log(date3);

//getHours()
const date4 = birthday.getHours();
console.log(date4);

//geyYear()
const date5 = birthday.getYear();
console.log(date5);
//date.now