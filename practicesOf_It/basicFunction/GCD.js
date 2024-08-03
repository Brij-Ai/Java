function gcd (a , b){
    while( b != 0){
        [a , b] = [b , b % a]
    }
    return a
}
console.log(gcd(49,4));


const GCD = (a, b)=>{
    if( b === 0){
        return a
    }
    else{
        return GCD(b , b % a)
    }
}

console.log(GCD(65, 12));