// truthy and falsy value

const userEmail = "userEmail@gmail.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have user email");
}

// falsy value:-> false , -0, 0, bigint 0n, null, undefined, NaN, ""

//truthy values:-> "0", 'false', " ", [], {}, function()

// checking emothy Array is or not
const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empthy");
}

// checking empthy Object

const empthyObj = {}
if(Object.keys(empthyObj).length === 0){
    console.log("emthy Object");
}

// nullish coslescing opertor (??) : null undefined
let val;
val = 6 ?? 19

val = null ?? 10
console.log(val);

// condition ? true : false