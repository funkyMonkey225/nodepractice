const fs = require('fs');
const readline = require('readline');
const lookup = require('lookup-multicast-dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Converts content of a file to all caps, prints to console
class File {
    constructor(){

    }
    readFile(filename, callback) {
        fs.readFile(filename, (err, buffer) => {
            if (err) {
                console.log(err.message);
                return;
            }
            let content = buffer.toString();
            let upcased = content.toUpperCase();
            callback(upcased);
        });
    }
    dnsLookup(domain, callback) {
        lookup(domain, (err, ip) => {
            if (err) {
                throw new Error('Could not locate URL');
            }
            console.log(ip);
            callback(ip);
        });
    }
    readWrite(input, output, callback) {
        fs.readFile(input, (err, buffer) => {
            if (err) {
                throw new Error('Could not read file');
            }
            var content = buffer.toString();
            var upcased = content.toUpperCase();
            fs.writeFile(output, upcased, (err) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                var saved = "Wrote to file " + output;
                callback(saved);
            });
        });
    }
}



module.exports = File;

// Looks up and prints out IP address for domain name
// const lookup = require('lookup-multicast-dns');
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

// Read and write: reads content of input file, converts text to all caps, writes contents to output file (will create file if it doesn't already exist)
// rl.question('Input file: ', (input) => {
//     rl.question('Output file: ', (output) => {
//         rl.close();   // closes interface
//         fs.readFile(input, (err, buffer) => {
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             var content = buffer.toString();
//             var upcased = content.toUpperCase();
//             fs.writeFile(output, upcased, (err) => {
//                 if (err) {
//                     console.log(err.message);
//                     return;
//                 }
//                 console.log("Wrote to file " + output);
//             });
//         });
//     });
// });


// Saves HTML source code from web page to file
// const request = require('request');

// rl.question('URL: ', (URL) => {
//     rl.close();
//     request(URL, (err, response, body) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//     let rl2 = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     rl2.question('Save to file: ', (filename) => {
//         rl2.close();   // closes interface
//             fs.writeFile(filename, body, (err) => {
//                 if (err) {
//                     console.log(err.message);
//                     return;
//                 }
//                 console.log("Saved to file " + filename);
//             });
//         });
//     });
// });


// Saves HTML source code from web page to file using request-promises
// const rp = require('request-promise');

// rl.question('URL: ', (URL) => {
//     rl.close();
//     rp(URL)
//     .then((htmlString) => {
//         let rl2 = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//         rl2.question('Save to file: ', (filename) => {
//             rl2.close();   // closes interface
//             fs.writeFile(filename, htmlString, (err) => {
//                 if (err) {
//                     console.log(err.message);
//                     return;
//                 }
//                 console.log("Saved to file " + filename);
//             });
//         });
//     })
//     .catch((err) => {
//         if (err) {
//             console.log(err.message);
//             return err;
//         }
//     })
// });

// Download JavaScript logo using request module and resize with gm module
// const request = require('request');
// const gm = require('gm');

// var options = {
//     url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
//     encoding: null
// };
// request(options, function(err, response, imageData) {
//     if (err) {
//         console.log(err.message);
//         return err;
//     }

// gm(imageData)
//     .resize(240, 240)
//     .write('JS2.png', function(err) {
//         if(err) {
//             console.log(err.message);
//         }
//         if(!err) {
//             console.log('done');
//         }
//     });
// });





// Download JavaScript logo using request-promise module and resize with gm module
// const rp = require('request-promise');
// const gm = require('gm');

// var options = {
//   url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
//   encoding: null
// };
// rp(options) 
//     .then((imageData) => {
//         gm(imageData)
//             .resize(240, 240)
//             .write('JS3.png', function(err) {
//                 if(err) {
//                     console.log(err.message);
//                 }
//                 if(!err) {
//                     console.log('done');
//                 }
//             });
//     })
//     .catch((err) => {
//         if (err) {
//             console.log(err.message);
//             return err;
//         }
//     });