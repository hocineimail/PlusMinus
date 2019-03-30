'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let Negative = 0;
    let Positive = 0;
    let Egal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            Negative = Negative + 1 
        } else if (arr[i] < 0 ) {
            Positive = Positive + 1;
        } else {
            Egal = Egal + 1 
        }
    }
    if (Negative != 0) {
        Negative = Negative / arr.length
    }
    if (Positive != 0) {
        Positive = Positive / arr.length
    }
    if (Egal != 0) {
        Egal = Egal / arr.length
    }
    var Result = Negative.toFixed(arr.length) + " " + Positive.toFixed(arr.length) + " " + Egal.toFixed(arr.length);
    Result = Result.split(' ')
    return Result[0] + "\n" + Result[1] + "\n" + Result[2]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

   
    ws.write(plusMinus(arr));

    ws.end();
}
