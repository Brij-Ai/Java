class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        return `${this.userName}`
    }
    static creatId(){
        return `123`
    }
}

const shivansh = new User("shivansh")
console.log(shivansh.logMe())

// not accesiable static marked
// console.log(shivansh.creatId()) 