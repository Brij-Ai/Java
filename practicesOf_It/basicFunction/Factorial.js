/// claculating the factorial of number


const factorial = function(val){
    let fact = 1
    for(let i = 1; i <= val ; i++){
        fact *= i 
    }
    return `Factorial : ${fact}`
}

console.log(factorial(8));

// by recursive function

const NewFact = (num) =>{
    if(num === 1) {
        return 1
    }else{
        return num * NewFact(num - 1)
    }
}
console.log(NewFact(8));

// using ternary operator 

function fact(num){
    return num <= 1? 1 : num* fact(num-1)
}
console.log(fact(8));