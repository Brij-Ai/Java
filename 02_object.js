// second part of obejct lecture
//  singhlton object 
const tinderUser = {}
tinderUser.name = "hello"
tinderUser.loction= "blp"
console.log(tinderUser)

// here is object of object 

const requlerUser = {
    email:'hello@gmail.com',
    fullName:{
        firstName:"helloBro",
        lastName:'bro'
    }
}
// accessing object values
console.log(requlerUser.fullName.lastName)

// combine object 

const obj = {1:'a',2:'b'}
const obj1 = {3:'c',4:'4'}
const trget = {...obj,...obj1}
console.log(trget)

console.log(Object.keys(tinderUser)) // it store key value in array
console.log(Object.values(tinderUser)) // volues
console.log(Object.entries(tinderUser)) ///