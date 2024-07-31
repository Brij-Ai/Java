class user {
    constructor(Name, password){
        this.Name = Name
        this.password = password
    }
    get password(){
        return `Your Pass: ${this._password}Abcsn`
    }
    set password(value){
        this._password = value
    }
}
// getter and setter
const abc = new user("Machine","MAchine")
console.log(abc.password);

// behind the scene
function User(email, password){
    this.email =email,
    this.password = password
    Object.defineProperty(this, "email",{
        set email(value){
            this._email = value
        },
        get email(){
            return `Email : ${this._email.toUpperCase()}`
        }
    })
}


const vbs = new User("Hello@gmail.com","pass")
console.log(vbs.email);