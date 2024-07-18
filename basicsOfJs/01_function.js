// introduction of function 
// day 01 with function by hitesh sir
console.log("hello function")


// declartion of function
function sayName(){
    console.log('brij')
}
// calling function
sayName()// every thing running good

function addTwoNumber(Num01, Num02){
    console.log(Num01 + Num02)
}

const result = addTwoNumber(6,"a") // here 6 and a is argument

console.log(result) // here return undefined 


// new function code
function subTwoNum(num1, num2){
    return num1 - num2
}


let res = subTwoNum(6,7)
console.log(res) // here return a number

function userLogin(userName){
    return `${userName} just login`
}

console.log(userLogin("brij"))
console.log(userLogin()) // undefined result
