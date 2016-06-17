let s = require(`./input`);

// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

function deliver(s) {
    let locs = new Set(),
        xCoord = 0,
        yCoord = 0;
        locs.add('x0y0');
    s.split('').forEach( (e, i) => {
        if (e === '<') xCoord -= 1;
        if (e === '>') xCoord += 1;
        if (e === '^') yCoord += 1;
        if (e === 'v') yCoord -= 1;
        locs.add(`x${xCoord}y${yCoord}`);
    });
    console.log(locs.size);
}

deliver(s);

// part 2

function deliver2(s) {
    let locs = new Set(),
        xCoord = 0,
        yCoord = 0,
        xCoord2 = 0,
        yCoord2 = 0;
        locs.add('x0y0');
    s.split('').forEach( (e, i) => {
      if (i % 2 === 0) {
        if (e === '<') xCoord -= 1;
        if (e === '>') xCoord += 1;
        if (e === '^') yCoord += 1;
        if (e === 'v') yCoord -= 1;
        locs.add(`x${xCoord}y${yCoord}`);
      } else {
        if (e === '<') xCoord2 -= 1;
        if (e === '>') xCoord2 += 1;
        if (e === '^') yCoord2 += 1;
        if (e === 'v') yCoord2 -= 1;
        locs.add(`x${xCoord2}y${yCoord2}`);
      }
    });
    console.log(locs.size);
}

deliver2(s);