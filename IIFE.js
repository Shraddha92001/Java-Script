//Immediately Invoked Function Expressions IIFE
//javaScript function that runs as soon as it is defined.
(function DB() {
    console.log(`DB CONNECTED`);
})();


((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('shree')