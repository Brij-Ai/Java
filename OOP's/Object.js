const newHero = ["Hulk", "Spider Man"]

console.log(newHero);

// prototype gave accese to new , this
// prototype do not stop while met null value

// Array ------> object -----> null
// string ------> object -----> null
/// Everything is Object 


function Mutliply(num){
    return num * 5
}

Mutliply.power = 2

console.log(Mutliply(5));
console.log(Mutliply.power);
console.log(Mutliply.prototype);

function createUser (userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score : ${this.score}`);
}

const hello = new createUser("hello", 23)
const newUser = new createUser("NewBro", 433)
// console.log(hello.score);

hello.printMe()
hello.increment()
console.log(createUser)