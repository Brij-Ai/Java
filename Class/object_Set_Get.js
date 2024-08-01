const User = {
    _email: "ji@gmail.com",
    _password: "jsdhjd",

    set email(value){
        this._email = value
    },
    get email(){
        return this._email.toUpperCase()
    }
}

const cat = Object.create(User)
console.log(cat.email);