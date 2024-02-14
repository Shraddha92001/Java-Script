
// promise three

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "shree" , email:"shreee@gmail.com"})
    },2000)
})

promisethree.then(function(user){
    console.log(user);
})
