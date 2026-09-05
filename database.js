
require("dotenv").config();
const { MongoClient } = require("mongodb");

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update, Delete
const url = process.env.MONGODB_URL;

const client = new MongoClient(url);
const dbName = "NodePro";


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);      
  const collection = db.collection("User"); 

  // the following code examples can be pasted here...
  const data = {
    firstName: "Khabir",
    LastName: "kumar",
    City: "sanik",
    Address: "MKU",
  };

//   const result = await collection.insertOne(data)
//   console.log("Inserted Data",result)
//   const getData = await collection.findOne({
//     firstName:"Khabir"
//   });
//   console.log("Inserted Data", getData);
// const deletecont = await collection.deleteOne({
//     firstName:"Raaju"
// })
const datha = {firstName:"Raaju",
    LastName:"Makheer",
    age:"sixteen",
    phone:"45678905332"
}
// const replaceonedoc = await collection.replaceOne({firstName:"Khabir"},datha)
// console.log("replaced sucessfully")
// const Updatedata = await collection.updateOne({firstName:"Khabir"},{$set:{City:"Mangelia"}})
const getAllData = await collection.find({}).toArray();
console.log("All Data IS", getAllData)

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());




  ///ATLAS-COMPASS-NODE-CONNECTION_GUIDE
//   Let's connect Compass to your FREE Atlas cluster
// Step 1 — Open MongoDB Atlas

// You already have:

// Cluster0
//    ↓
// FREE M0

// On the Atlas Project Overview screen, click:

// Connect

// under Cluster0.

// Step 2 — Choose Compass

// You'll get a screen with options similar to:

// Connect to Cluster0

//     Shell
//     Drivers
//     Compass        ← 👈 Choose this

// Click Compass.

// Step 3 — Copy the connection string

// Atlas will show something similar to:

// mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/

// There will usually be a Copy button.

// Copy that connection string.

// ⚠️ Don't share the complete connection string publicly if it contains your password.

// Step 4 — Open MongoDB Compass

// You already confirmed that Compass is installed. ✅

// Open:

// MongoDB Compass

// You'll see something like:

// New Connection

// URI
// ┌──────────────────────────────────────────────┐
// │ mongodb+srv://...                            │
// └──────────────────────────────────────────────┘

//              [ Connect ]

// Paste the Atlas connection string there.

// Step 5 — Enter your database user password

// Your Atlas database user is not necessarily your MongoDB Atlas login password.

// For example:

// Atlas Account
//      │
//      ├── Email/password
//      │
//      └── Database User
//            │
//            ├── Username
//            └── Database password

// The Compass connection string needs the database user's credentials.

// Step 6 — Connect 🎉

// Click:

// Connect

// If everything is configured correctly, Compass will show something like:

// My Queries

// Databases
// │
// ├── admin
// ├── local
// └── your_database
// 🧠 Your complete setup

// Eventually, your development setup will look like:

//                     ☁️ MongoDB Atlas
//                          │
//                     FREE M0 Cluster
//                          │
//               ┌──────────┴──────────┐
//               │                     │
//               ▼                     ▼
//        MongoDB Compass          Node.js App
//           💻                       💻
//        View/Edit data          CRUD operations

// Compass is mainly your visual tool for viewing and managing the database.

// Node.js is what your application uses to communicate with MongoDB.
