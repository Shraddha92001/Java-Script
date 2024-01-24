//using Object in Function
function customer(...num1) { //... is rest and spread  ---- put all element in array
    return num1
}
console.log(customer(2))
console.log(customer(2, 500, 6, 200, 400)) //access multiple all the value we use spread


const user = {
    username: "shree",
    price: 1999
}

function handle_objct(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handle_objct(user)