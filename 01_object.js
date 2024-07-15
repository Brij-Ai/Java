// today learn will be about Object

// singleton 

// object literals
// based on key value pair

const mySym = Symbol('key1') //symbol declartion
const JsUser = {
    name:"brij",
    age:18,
    [mySym]:"mykEy01",
    loction:"up",
    email:"brijk@gmail.com",
    lastLogIndays:['monday','sunday'],
    "full name":'brij kumar'
}

// access of value of boject

console.log(JsUser.email)
// or both are seme gives result
console.log(JsUser["email"])
// accessing Symbol VAriable
console.log(JsUser[mySym]) /// intersting this

JsUser.email = "chatgpt@gmail.com"

console.log("after changes: ",JsUser.email)

// creating a function of abject
    JsUser.greatin = function(){
        console.log(`welcome !,${this["full name"]}`)
    }
console.log(JsUser.greatin())


// freezing object changes
Object.freeze(JsUser)
