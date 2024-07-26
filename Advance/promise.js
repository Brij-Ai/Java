const promiseNo01 = new Promise((resolve , reject)=>{
    // Do an async task
    // DB calls , 
    setTimeout(function(){
        console.log("Task is completed")
        resolve()
    },10000)
})

promiseNo01.then(()=>{
    console.log('promise consumed');
})

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('Async Task 2');
        resolve()
    })
},1000).then(()=>{
    console.log("Async 2 resolved");
})

const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({User:"hello",UserGmail:'hello123@gmail.com'})
    },2000)

})
promiseTwo.then((user)=>{
    console.log(user);
})

const promisethree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve ({userName:"hitesh", userPassword:"123"})
        } else{
            reject('ERROR:something Wrong')
        }
    }, 2000);

})

promisethree.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName) =>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is resolve");
})


