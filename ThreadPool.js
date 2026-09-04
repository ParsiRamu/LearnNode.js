

const fs = require("fs")
const crypto = require("crypto")


process.env.UV_THREADPOOL_SIZE = 1;

// LIBUV assigned thread Pools to the module functions......if there are more number of the functions....function waits until the one of the thread 
//pool becomes empty
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1 - cryptoPBKDF2 done")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2 done");
});