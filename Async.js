
const fs = require("fs")
const https = require("https")


console.log("Hello World!")

var a = 1078698;
var b = 20986;


// const data1 = fs.readFileSync("./file.txt","utf8")
// console.log("Sync File Data :", data1);

// console.log("This will be Print After the read file Complete")

https.get("https://6a6d9c4beb8865c4bf490e60.mockapi.io/restaur/reastarants",(res)=>{

    console.log("Fetched Data Sucessfully")

    // let data = "";---get the actual response data code...

    //     res.on("data", (chunk) => {
    //         data += chunk;
    //     });

    //     res.on("end", () => {

    //         console.log("Raw API Data:", data);

    //         const restaurants = JSON.parse(data);

    //         console.log(
    //             "Fetched Data Successfully:",
    //             restaurants
    //         );
    //     })

 });

setTimeout(() => {
    console.log("setTimeout called after 5 seconds")
    
}, 5000);


fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File Data : ", data)
})


function Multiplyfn(x, y) {
  const result = a * b;
  return result;
}

var c = Multiplyfn(a, b);
console.log("Multiplication result is: ", c);