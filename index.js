const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Converts content of a file to all caps, prints to console
rl.question('What is the filename? ', (filename) => {
    rl.close();   // closes interface
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    });
});

