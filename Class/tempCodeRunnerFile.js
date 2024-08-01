class user {
    constructor(Name, password){
        this.Name = Name
        this.password = password
    }
    get password(){
        return `${this._password}Abcsn`
    }
    set password(value){
        this._password = value
    }
}

const abc = new user("Machine","MAchine")
console.log(abc.password);