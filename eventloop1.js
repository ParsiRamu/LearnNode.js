
const fs = require("fs")
const a  = 100

setImmediate(()=>{console.log("Set Immediate")})

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Data:CB");
});


setTimeout(()=>{
    console.log("Time Expired")
},0)


function printy(){
    console.log("a is : ",a)

}
printy()
console.log("Last Line Of The Code")