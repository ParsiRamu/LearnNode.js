const crypto = require("crypto");

console.log("Hello world!");//SYNC

var a = 1078698;
var b = 20986;


crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha256", );
  console.log("First Key is Generated: ",);//SYNC and blocks the thread....because it was the strict synchronous operation.

setTimeout(() => {
  console.log("This Will Called After 3 Seconds");
}, 3000);

crypto.pbkdf2("password","salt",50000000,50,"sha256",(err,key)=>{
 console.log("Second Key is Generated: ",key);///Async
});

function Multiplyfn(x, y) {//sync
  const result = a * b;
  return result;
}

var c = Multiplyfn(a, b);//sync
console.log("Multiplication result is: ", c);