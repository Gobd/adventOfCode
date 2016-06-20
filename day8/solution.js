const fs = require('fs');

// part1

fs.readFile('./input.js', 'utf-8', (err, data) => {
    let result = data.split('\n').reduce((p, line) => {
        return p + (line.length - eval(line).length) // jshint ignore:line
    }, 0);
    console.log(result);
});

// part2

fs.readFile('./input.js', 'utf-8', (err, data) => {
    let result = data.split('\n').reduce((p, line) => {
        return p + JSON.stringify(line).length - line.length;
    }, 0);
    console.log(result);
});