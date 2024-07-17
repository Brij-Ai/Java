// scope level in function of function 
function one (){
    const userName = "Delll Riyo"
    function two (){
        const website = "google"
        console.info(userName)
        //console.info(userName) becouse it gives it is out scope 
    }
    // console.info(website) same is gives error this is out of scope
    two()
}

   one()
// console.info(userName)  this is gives error out of scope 

if(true){
    let userName = "riyo"
    if(userName === "riyo"){
        let website = "youtube"
        console.info(userName)
    }
}

//--------------------------------intersting-----------------------------

addOne(3) /// runs succesfull
function addOne(value){
    return (value + 5)
}

addTwo(3) /// error
const addTwo = function(value){
    return ( value + 2) 
}