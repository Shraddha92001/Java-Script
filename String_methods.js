const myname = " shraddha singh"

// access the length of string
console.log(myname.length);
// findng upparcase nad lower case
console.log(myname.toLocaleLowerCase());
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());

//finding the index number
console.log(myname.indexOf('d'));
console.log(myname.charAt(5));

//finding the substring
const newstring = myname.substring(0, 5)
console.log(newstring);

//trim 
const newstring1 = "      hello im shree"
console.log(newstring1);
console.log(newstring1.trim());

//using UEL
const url = "https://github.com/Shraddha92001"

console.log(url.includes('github'));
console.log(url.includes('shree'));

//small method
console.log(newstring1.small());