// setTimeout(code)
// setTimeout(code, delay)

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)


// sayHello function which are display the greeting

function sayHello(){
    console.log("hello brothers");
}
function who(){
    console.log('Two times');
    
}
setInterval(who,2000) // its behave like iteration
// clearInterval(who())
setTimeout(sayHello,1000)
setTimeout(sayHello,2000)

setTimeout(()=>{
    console.log("Called");
},'1000')

clearInterval(who,3000)

// defoult parameter function

setTimeout((name)=>{
    console.log(name);
},1000)