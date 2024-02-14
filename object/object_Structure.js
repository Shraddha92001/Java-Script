// de-structuring in object

const course = {
    name: "JS",
    price: "5000",
    instructor: "***shreee***"
}

const { instructor: inst } = course // way is de-structuring 
//console.log(instructor);
console.log(inst);