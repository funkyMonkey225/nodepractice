const fs = require('fs');
const readline = require('readline');
const lookup = require('lookup-multicast-dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Converts content of a file to all caps, prints to console
// rl.question('What is the filename? ', (filename) => {
//     rl.close();   // closes interface
//     fs.readFile(filename, (err, buffer) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         let content = buffer.toString();
//         let upcased = content.toUpperCase();
//         console.log(upcased);
//     });
// });

// Looks up and prints out IP address for domain name
// rl.question('URL: ', (domain) => {
//     rl.close();   // closes interface
//     lookup(domain, (err, ip) => {
//         if (err) {
//             console.log(err.message);
//             console.log("Site not found.")
//             return;
//         }
//         console.log("IP Address: " + ip);
//     });
// });

// Read and write: reads content of input file, converts text to all caps, writes contents to output file
rl.question('Input file: ', (input) => {
    rl.question('Output file: ', (output) => {
        rl.close();   // closes interface
        fs.readFile(input, (err, buffer) => {
            if (err) {
                console.log(err.message);
                return;
            }
            var content = buffer.toString();
            var upcased = content.toUpperCase();
            fs.writeFile(output, upcased, (err) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log("Wrote to file " + output);
            });
        });
    });
});
