const fetch= require ("isomorphic-fetch")
const fs= require("fs")

fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
.then(function(res){
return res.json()
})
.then(function(data){
    let writeStream= fs.createWriteStream("pokemon.json")
writeStream.write(JSON.stringify(data.pokemon))
} ) 
.catch((err)=>{
    console.log(err)
})