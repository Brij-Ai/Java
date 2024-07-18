// this give in browser window object

//1 ->Globol Excution context (this )

// 2-> functin Excution context
// 3 ->eval Excution context

// js code runs in Two phase
//1 -> memory creation Phase
// 2-> Excution phase

let a = 10
let b = 20

function addNum(val , value){
    let total = val + value
    return total
}
let res01 = addNum(a,b)
let res012 = addNum(9,6)
console.info(res01,res012)