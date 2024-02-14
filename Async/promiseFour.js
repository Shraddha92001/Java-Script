// promise FOur

const promiseFour = new Promise (function(reject, resolve){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"shree",passwoed:"1253", email:"shree@gmail.com"})
        }
        else{
            reject('ERRPR: something Went wrong')
        }
    },1000)
})
promiseFour.then((user1) =>{
    console.log(user1);
    return user.username
 })
 .then((username) => {
    console.log(username);
 })
 .catch(function(error){
    console.log(error);
 })
 .finally(function(){
    console.log("Promise is either resolved and rejected");
 })