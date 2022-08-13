const emp1 = {}
emp1.firstName = "Micheal"
emp1.lastName = "Scott"
emp1.gender = "M"
emp1.designation = "Regional Manager"

//in case we need to create multiple employee instances the above process would be tiresome
//we could use contructor functions to create our object
function createEmployee(firstName,lastName,gender,designation) {

    this.firstName = firstName
    this.lastName =lastName
    this.gender =gender
    this.designation = designation
    //our constuctor function returns this object
}

const emp2 =  new createEmployee( "Jim", "Too", "M", "Assinstant Regional Manager" )

console.log( emp1 )
console.log( emp2 )

