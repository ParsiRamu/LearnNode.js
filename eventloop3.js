
const fs = require("fs")

setImmediate(()=>{console.log("Set Immediate")})
setTimeout(()=>{console.log("Timer Expired")})

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{console.log("2nd Timer"),0})
    process.nextTick(()=>{console.log("2nd next tick")})
    setImmediate(()=>{console.log("2nd set Immediate")})
    console.log("Filr Reading: CB")
})
process.nextTick(()=>{console.log("next Tick")})
console.log("Last Line Of The Code")
