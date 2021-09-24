import fs from "fs"
fs.readFile("./server.js",(err,data)=>{
if(err){
    console.log(err)
}
console.log(data.toString())
} )

fs.readfile("./helloworld.txt", function(err, data){
  if(err){
      console.log(err)
  }  
console.log (data.toString())
})
