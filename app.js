
// const {CalculateSum,x} = require("./Sum.js")
// const {CalculateMultiply} = require("./Multiply.js")
const {CalculateMultiply,CalculateSum} = require("./Calculate")
const dataa = require("./data.json")
const utils = require("node:util")

let name = "namaste Node"
let r = 3
let s= 5


CalculateSum(r,s)
CalculateMultiply(r,s)

console.log(globalThis===global)
console.log(dataa)
