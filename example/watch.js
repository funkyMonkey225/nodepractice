const fs = require('fs');

// function yelp(what) {
//     return 'hey that ' + what;
// }

// const yelp = (what) => {
//     return 'hey that ' + what;
// }

// fs.watch('README.md', function(event) {
fs.watch('README.md', (event) => {
    console.log('COOOOOOOL');
});

const readline = require('readline');  // allows us to read lines of input and write lines of output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

rl.question ('filename: ' function(filename) {  //prompts user
    rl.close();     //close off user interface
})