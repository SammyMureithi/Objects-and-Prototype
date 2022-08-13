//let's create our object
const myObject = {
    city: "Madrid",
    greet() {
        return `Greetings from ${this.city}`
    }
}

//we could access the object methods
console.log( myObject.greet() )
//our object has many properties
console.log(myObject.toString())