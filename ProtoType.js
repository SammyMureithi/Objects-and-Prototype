//Prototype are here to help us enable us add ne methods and properties to our constructor objects
//lets have our constuctor function first
function Person( first, last, age, eyecolor ) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.ayeColor=eyecolor
}

const myFather = new Person( "John", "Doe", 59, "brown" )

console.log( myFather.age )
//we could also have another instance of our class
const myMother = Person( "Mary", "Doe", 53, "Blue" )

/**
 * Let's take a case that we needed to add a new property to our constructor function 
 * we need to add a nationality property to our constructor function
 * Well have to employ the idea of object constuctor to our object to add the property
 */
Person.prototype.nationality = "Kenyan"
//let's try accessing our nationality property from myFather 
console.log( myFather.nationality )
//The nationality property is now in our Person Constructor

/**
 * What about if we needed to add a method  to our constructor function
 * We would still bring in the idea of our constructor function
 */
Person.prototype.fullName = function () {
    return this.firstName+ " "+ this.lastName
}

//lets try checking our Person constructor function
console.log(myFather.fullName())