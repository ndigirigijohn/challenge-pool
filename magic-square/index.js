'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
function generateMagicSquares(magicSquare1){
    const magicSquares = [];
    magicSquares.push(magicSquare1);

    // we need to rotate it 3 times to get all rotations
    for(let i = 0; i < 3; i++){
        var rotation = magicSquares[i].map((val, index) => magicSquares[i].map(row => row[index]).reverse());
        // console.log(rotation)
        magicSquares.push(rotation);
    }

    // and then flip each one
    for(let i = 0; i < 4; i++){
        var flipped = magicSquares[i].map((_, colIndex) => magicSquares[i].map(row => row[colIndex]));
        magicSquares.push(flipped);
    }
    
    return magicSquares;
}

function formingMagicSquare(s) {
    
    console.log("Magic squares", generateMagicSquares(s))
    //There are finite number of magic squares, so we can just hardcode them
    const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });
    console.log("Min", min)

    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}

formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);


