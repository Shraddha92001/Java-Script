//promise five

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",passwoed:"1253"})
        }
        else{
            reject('ERROR: something Went wrong')
        }
        
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()