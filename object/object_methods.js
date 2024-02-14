const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName()); //<= fullname is methodo


  //upparcase and lowercase
  let meg = "hellooo  shreee"
  let x = meg.toUpperCase();
  let y = meg.toLowerCase();
  console.log(x);
  console.log(y);