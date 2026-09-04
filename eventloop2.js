
const fs = require("fs")
const a = 100

setImmediate(()=>{console.log("Set immediate")})

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Data : CB")
})

setTimeout(()=>{
    console.log("Timer Expired")
},0)

process.nextTick(()=>{
    console.log("process.nextTick()")
})

function PrintA(){
    console.log("a = ",a)
}

PrintA()
console.log("This was the Last Line of the File")