// syntax of function
// arrow function

// let hey = ()=>{
//     console.log(`Hey ! Brother`);
// }
// hey()

let name = "Deadpool"

// const sayingHello = function(){
//     console.log(`Hello ${name}`);
// }
sayingHello()
function sayingHello(){
    console.log(`Hello ${name}`);
    return name
}
// const len = sayingHello()
// console.log(len.toUpperCase())

// const newObj = function(){
//     let name = "Wolve"
//     const toUPP = function say(){
//         return name.toLocaleUpperCase()
//     }
// }

// console.log(newObj().toUPP)// gives error

/// ============= Destructing the function

function printPerson({Name , lName}){
    console.log(`${name} ${lName}`);
}

const person = {Name:"Alice" , lName:"Pearson"}
console.log(person);


//////////////////////////////

const OTP = function(){
    const ranOTP = parseInt(Math.abs(Math.random() *10000)) 
    return ranOTP
}
console.log(OTP())
