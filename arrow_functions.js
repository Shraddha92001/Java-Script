function one() {
    let username = "shree"
    console.log(this.username);
}
one()

// arrow function
// () => {}
const two = () => { // <=========arraow function
    let username = "shree"
    console.log(this);
}
two()


const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 4));