for(let i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
        console.log('Good');
    },3000)
    console.log(`this ${i}`)
}