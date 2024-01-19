const marvel = ['"thor', "ironman", "spiderman"]
const dc = ["suparman", "flash", "batman "]

//push
marvel.push(dc)
console.log(marvel);


//concat
marvel.concat(dc)
console.log(marvel);


//best way to marge
const all_heros = [...marvel, ...dc]
console.log(all_heros);


//other example

const another_array = [2, 5, 6, 3, [4, 25, 3, 4], 5, 6, [7, 8, 9, 9, 6, 5, 5, 4, 44, 4, [4, 56, 8, 9, 6, [4, 45, 8, 9, 6, 1]]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("shree")); // array or not
console.log(Array.from("shree")); // covert all the value in the array
console.log(Array.from({ name: "shree" })); //interesting because it confused that which value have to convert into array it can be key, or values and if its getting confused it return emptyarray