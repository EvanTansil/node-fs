const fs= require ("fs" )
const http= require ("http")
http.createServer(function(req, res){
const {url,method}= req
if(url =="/"&&method=="GET"){
    const readStream= fs.createReadStream("./index.html")
    readStream.pipe(res)

}
else if(url=="/pokemon"&&method=="GET"){
    const readStream=fs.createReadStream("./pokemon.json")
    readStream.pipe(res)
}
else{
    
    const readStream=fs.createReadStream("./not-found.html")
readStream.pipe(res)

}
} )

.listen(3001,()=>{
    console.log("It's on and popping")
})