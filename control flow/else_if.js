// eg.. else IF
const balance = 1000

if (balance < 500) {
    console.log("less then 500");
} else if (balance < 750) {
    console.log("less then 750");
} else if (balance < 950) {
    console.log("less then 950");
} else {
    console.log("less then 120000");
}

//
const loggedin = true
const debitcard = true
const loggedin_google = true
const loggedin_email = true

if (loggedin && debitcard) {
    console.log(" allow to log in ");
}
if (loggedin_email && loggedin_google) {
    console.log(" allow to log in ");
}