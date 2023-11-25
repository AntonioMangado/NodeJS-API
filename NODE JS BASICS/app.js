const readline = require("readline");
const fs = require("fs")
const http = require("http")


// LECTURE 4
// // Create the interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Create your input
// rl.question("Please enter your name: ", (name) => {
//     console.log("Your name is " + name);
//     // This makes sure that the instance is closed
//     rl.close();
// })

// // Create a listener for an event that receives a cb
// rl.on("close", () => {
//     console.log("Interface closed");
//     process.exit(0);
// })


// LECTURE 5 - FS

// Example of callback hell - avoid by using async await
// fs.readFile("./Files/start.txt", "utf-8", (err, data) => {
//     console.log(data);
//     fs.readFile(`./Files/${data}.txt`, "utf-8", (err2, data2) => {
//         console.log(data2);
//         fs.readFile(`./Files/append.txt`, "utf-8", (err3, data3) => {
//             console.log(data3);
//             fs.writeFile(`./Files/output.txt`, `${data2}\n\n${data3}\n\nDate created: ${new Date()}`, () => {
//                 console.log("Data written successfully");
//             })
//         })
//     })
// });

// console.log("Reading file...");

// let content = `Data read from input.txt: ${textRead} \nDate created ${new Date()}`
// fs.writeFileSync("./Files/output.txt", content)

// LECTURE 6 - Creating a server
const server = http.createServer((req, res) => {
    res.end("Hello world!")
    console.log("A new request received")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server has started!")
})