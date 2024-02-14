// creating promise 
// promise one
const promiseOne = new Promise(function(resolve , reject){
    // do an async task
    // DB calls, network called 
    setTimeout(function(){
        console.log("async task is compelete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed ');
})
