const inp = require(`./input`)

// part1

function day6(s) {
    let field = new Set(),
        dir;
    s.split('\n').forEach(e => {
        if (/on/g.test(e)) dir = 'on';
        else if (/off/g.test(e)) dir = 'off';
        else if (/toggle/g.test(e)) dir = 'toggle';
        let [xMin, yMin, xMax, yMax] = e.match(/\d{1,}/g);
        for (var x = ~~xMin; x <= ~~xMax; x++) {
            for (let y = ~~yMin; y <= ~~yMax; y++) {
                if (dir === 'on') field.add(`${x},${y}`);
                else if (dir === 'off') field.delete(`${x},${y}`);
                else if (dir === 'toggle') field.has(`${x},${y}`) ? field.delete(`${x},${y}`) : field.add(`${x},${y}`);
            }
        }
    })
    console.log(field.size)
}

// day6(inp);

// 377891 GOOD

// part2
//
// The phrase turn on actually means that you should increase the brightness of those lights by 1.
//
// The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.
//
// The phrase toggle actually means that you should increase the brightness of those lights by 2.
//
// What is the total brightness of all lights combined after following Santa's instructions?
//
// For example:
//
// turn on 0,0 through 0,0 would increase the total brightness by 1.
// toggle 0,0 through 999,999 would increase the total brightness by 2000000.

function day6p2(s) {
    let field = {},
        dir;
    s.split('\n').forEach(e => {
        if (/on/g.test(e)) dir = 'on';
        else if (/off/g.test(e)) dir = 'off';
        else if (/toggle/g.test(e)) dir = 'toggle';
        let [xMin, yMin, xMax, yMax] = e.match(/\d{1,}/g);
        for (var x = ~~xMin; x <= ~~xMax; x++) {
            for (let y = ~~yMin; y <= ~~yMax; y++) {
                if (dir === 'on') field.hasOwnProperty(`${x},${y}`) ? field[`${x},${y}`] += 1 : field[`${x},${y}`] = 1;
                else if (dir === 'off') field.hasOwnProperty(`${x},${y}`) && field[`${x},${y}`] > 0 ? field[`${x},${y}`] -= 1 : field[`${x},${y}`] = 0;
                else if (dir === 'toggle') field.hasOwnProperty(`${x},${y}`) ? field[`${x},${y}`] += 2 : field[`${x},${y}`] = 2;
            }
        }
    })
    let count = 0;
    for (var key in field) {
      count += field[key];
    }
    console.log(count)
}

day6p2(inp);