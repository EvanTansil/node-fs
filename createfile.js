import  fs from "fs"
fs.writeFile("./server.js","import http from \"http\"", (err)=>{
    if(err){
        console.log(err)
    return
    }
console.log("successfully created file")
} )

fs.writeFile("./HelloWorld.txt","import fs from \"fs\"", (err)=>{
    if(err){
        console.log(err)
    return
    }
console.log("successfully created file")
} )