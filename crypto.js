
const crypto = require("crypto")
//              SHA-256 machine
//                   🔐
//                    ↓
//         ┌─────────────────────┐
// Hello → │       SHA-256       │ → hash
//         └─────────────────────┘


const hash = crypto.createHash("sha256").update("Raamu").digest("hex")
//sha256 - Secure Hash Algorithm 256 bits
// .digest()
//      ↓
// Buffer (raw bytes)

// .digest("hex")
//      ↓
// Hexadecimal string
console.log(hash)