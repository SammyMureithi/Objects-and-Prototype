const person = {
    fullName: function () {
       return  this.firstName+ " "+this.lastName
    }
}

const person1 = {
    firstName: "Sammy",
    lastName: "Mureithi"
    
}
//lets call fullName method of person using person1

console.log( person.fullName.call( person1 ) )

//we can also use call method with arguments
const persona = {
    fullName: function ( city, country ) {
        return this.firstName+ " "+ this.lastName +" lives in "+ city+", "+country 
    }
}
const person2 = {
    firstName: "Samuel",
    lastName: "Kamau"
}
console.log(persona.fullName.call(person2,"Nairobi","Kenya"))