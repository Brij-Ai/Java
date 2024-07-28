const user = {
    userName: "OLX",
    loginCount: 9,
    signed: true,
    getUserDetail: function(){
       // console.log("got User Detail")
    //    console.log(`UserName : ${this.userName}`);
    console.log(this);
    }
}

// console.log(user.getUserDetail())

function User(userName,loginCount,isLogedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLogedIn = isLogedIn
    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this
}

const UserOne = new User("hanah",12,false)
console.log(UserOne)

console.log(UserOne.constructor);