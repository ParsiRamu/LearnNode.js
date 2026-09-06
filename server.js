
const http = require("http")

const server = http.createServer((req,res)=>{

        if (req.url==="/getData"){
               return  res.end("It was the Data Page")

        }
        res.end("Hello Worldd!")
})

server.listen(7000)


///NEED TO PLAACE "RETURN"
// return res.end("Secret")
//        ↓
// response closed
//        ↓
// return
//        ↓
// 🛑 function stops
        //          HTTP Request
        //               │
        //               ▼
        //        ┌─────────────┐
        //        │   req.url   │
        //        └──────┬──────┘
        //               │
        //       Is it /getSecretData?
        //          /          \
        //        YES           NO
        //         │             │
        //         ▼             ▼
        //   return res.end   res.end
        //   ("No Secret")    ("Helloworld!")

// res.end() closes the response.
// return stops your JavaScript function.

// They are two different things.