/// ES6
class user{
    constructor(userName, email,password){
        this.userName = userName
        this.email = email
        this.password = password
    }
    encrpyptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const newUser = new user("Deadpool","Deadpool@gmail.com","12")
console.log(newUser.changeUserName());

// behind the scene
// behave the same as the class 
// above and lower code both are same  

function User(userName,email,password){
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const NewUser = new User("Spidy","SpiderWorld@gmail.com","password12")

console.log(NewUser.encryptPassword());