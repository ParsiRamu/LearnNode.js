const fs = require("fs");

console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer");

  process.nextTick(() => {
    console.log("3. Next Tick inside Timer");
  });

  Promise.resolve().then(() => {
    console.log("4. Promise inside Timer");
  });
}, 0);

setImmediate(() => {
  console.log("5. Immediate");

  process.nextTick(() => {
    console.log("6. Next Tick inside Immediate");
  });
});

Promise.resolve().then(() => {
  console.log("7. Promise");

  process.nextTick(() => {
    console.log("8. Next Tick inside Promise");
  });
});

process.nextTick(() => {
  console.log("9. Next Tick");

  Promise.resolve().then(() => {
    console.log("10. Promise inside Next Tick");
  });
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("11. File Read Callback");

  setTimeout(() => {
    console.log("12. Timer inside File Read");
  }, 0);

  setImmediate(() => {
    console.log("13. Immediate inside File Read");
  });

  process.nextTick(() => {
    console.log("14. Next Tick inside File Read");
  });

  Promise.resolve().then(() => {
    console.log("15. Promise inside File Read");
  });
});

console.log("16. End");