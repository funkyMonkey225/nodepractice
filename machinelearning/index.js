const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR;  //Simple Linear Regression
const readline = require('readline');

const csvFilePath = 'advertising.csv'; // Data
let csvData = [], // parsed Data
    X = [], // Input
    y = []; // Output

let regressionModel;

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData(); // To get data points from JSON Objects
        performRegression();
    })

function dressData() {
    csvData.forEach((row) => {
        X.push(f(row.Radio));
        y.push(f(row.Sales));
    })
}

function f(s) {
    return parseFloat(s);
}

function performRegression() {
    regressionModel = new SLR(X, y); // Train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function predictOutput() {
    rl.question("Enter input X for prediction (Press CTRL+C to exit): ", (answer) => {
        console.log('At X = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}');
        predictOutput();
    });
}