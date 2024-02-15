function setUserName( username){
    this.username = username
    console.log("Called");
}

function cretaeuser (username , email, password){
    setUserName(username)

    this.email=email
    this.password= password
}


const code = new cretaeuser ("code","code@gmail.com")

console.log(code);