// object in object by using singleton = constructor
const regularname = {
    email: "shre@gmail.com",
    fullname: {
        userFullName: {
            firstname: "shreee",
            lastName: "singh"
        }
    }
}

console.log(regularname.fullname.userFullName.lastName); // access the value