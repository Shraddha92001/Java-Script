// function is a package of code
//eg..
//function syntex
function myname() {
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("e");
}
myname() // calling function ---- return value 
console.log(myname); // return name of function


//addition  using function

//way 1
function addition(num1, num2) { //<----parameters 
    console.log(num1 + num2);
}
addition(2, 3); //<---- arguments 

//way 2
function addition2(num1, num2) { //<----parameters 
    let result = num1 + num2
    return result
}

const result = addition2(10, 20)
console.log("result is ", result);

//way 3
function addition3(num1, num2) { //<----parameters 
    return num1 + num2
}
console.log(addition3(200 + 300));

const result1 = addition3(100, 20)
console.log("result1 is ", result1);