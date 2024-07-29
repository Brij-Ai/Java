// class

class User {
    constructor(userName){
        this . userName = userName
    }

    logMe(){
        console.log(`USERNAME: ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password = password
    }
}

const T2OLX = new Teacher("Profesor","pro123@gmail.com","pro")
console.log(T2OLX);
T2OLX.logMe()