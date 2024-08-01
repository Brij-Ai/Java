let myName = "Jio      "
// console.log(myName.trueLength());


///////////////////////////

let myHeros = ['Thor',"Hulk"]
let heroPower = {
    Thor: "hummar",
    Hulk : "Angry"
}

let anotherUser = "Money      "
String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUser.trueLength()
myName.trueLength()