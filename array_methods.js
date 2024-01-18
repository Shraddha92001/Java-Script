//methoda of array
const Myarray = [4, 25, 6, 3, 5, 8, 4, 5]

Myarray.push(4)
Myarray.push(17)
Myarray.pop()

Myarray.unshift(100) // add value to the front of the array

Myarray.shift() //Removes the first element from an array and returns it.
console.log(Myarray);

console.log(Myarray.indexOf(25)); // return the index of value
console.log(Myarray.includes(999)); //array includes a certain element or not
//join two arrays
const newarr = Myarray.join()
console.log(typeof Myarray);
console.log(typeof newarr);