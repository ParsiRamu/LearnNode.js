
const fs = require("fs")



setImmediate(()=>{console.log("Set Immediate")})
setTimeout(()=>{console.log("Timer Expired"),0})

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Data: CB")
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"))
    console.log("nextTick")
})
console.log("Last Line OF The Code")