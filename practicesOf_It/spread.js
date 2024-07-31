let Marvel = ["deadPool","Punisher","No way home","IronMan","WinterSolder"]

let Dc = ["Flash","AquaMan","SuperMan","WonderWommen"]

// Spread the array

const MarvelXDc = [...Dc, ...Marvel]
console.log(MarvelXDc);

for(let Heros of MarvelXDc){
    console.log(Heros.toUpperCase());
}

const all = MarvelXDc.map((it) => it.toLocaleUpperCase()) // its own array then apply on direct on array
console.log(`Heros: ${all}`); // defferent
console.log(all); // defferent 
