// this and arrow function practice in this file
// THIS -- current context referr
const User = {
    username: "berlin",
    price:999,
    welcome: function(){
        console.log(`${this.username} , welcome to website`)
        console.info(this)
    }
}

// User.welcome()

// User.username = "professor"
// User.welcome()

console.log(this) // return empty object

// function coffie(){
//     let userName = "hello"
//     console.info(this.userName) // return undefined 
// }
// coffie()


//  Arrow function

const coffie = () =>{
    console.log("hello")
    console.info(this)
}
// coffie()

// const addTwo = (num1 , num2) => (num1 + num2) /// implicite 
const addTwo = (num1 , num2) => ({name:"hello"})