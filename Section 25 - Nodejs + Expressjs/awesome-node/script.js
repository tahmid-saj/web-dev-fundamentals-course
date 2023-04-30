const fs = require("fs");

fs.readFile("./awesome-node/hello.txt", (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log("Async", data.toString("utf8"));
});

const file = fs.readFileSync('./awesome-node/hello.txt');
console.log("Sync", file.toString('utf8'));

// Append
// fs.appendFile('./awesome-node/hello.txt', 'this is cool', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// Write
fs.writeFile('./awesome-node/bye.txt', 'sad to see you go', (err) => {
    if (err) {
        console.log(err);
    }
});

// Delete
fs.unlink('./awesome-node/bye.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
});