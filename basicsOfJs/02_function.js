// second lect of function by hitesh sir
// ... rest operator or spread operator
function claculateCartPrice( ...num1){
    return num1  
}
console.log(claculateCartPrice(20,23,23,1,316,34,9)) // we can pass multiple argument using rest (...) operator

const User = {
    name:"brij",
    price: 199
}

function handleObj(anyobject){
    console.log(`UserName is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObj(User)

// or by direct object pass in argument 
handleObj({
    name:"rio",
    price:299
})
// passing array in handleObj 
console.info("hello") // same as work console.log and it shortcut is cin

function returnSecondValue(getArray){
    console.log(getArray[2])
}
returnSecondValue([9,6,55,34,3])

