let s = require(`./input`);

// 2*l*w + 2*w*h + 2*h*l
// length l, width w, and height h

// plus the area of the smallest side
// 2x3x4 requires 2*6 + 2*12 + 2*8 = 52

// 2*(2*3) + 2*(3*4) + 2*(4*2)
// 2*6 + 2*12 + 2*8

// part1

function wrap(s) {
    s = s.split('\n').map(e => e.split('x')
        .map(e => ~~e)
        .sort( (a, b) => a > b) );
    s.forEach( (e, i, self) => {
      let [l, w, h] = e;
      self[i] = 2*(l*w) + 2*(w*h) + 2*(h*l) + l*w;
    });
    s = s.reduce( (p,c) => p += c);
    console.log(s);
}

// wrap(s);

// part2

function wrap(s) {
    s = s.split('\n').map(e => e.split('x')
        .map(e => ~~e)
        .sort( (a, b) => a > b) );
    s.forEach( (e, i, self) => {
      let [l, w, h] = e;
      self[i] = l*w*h + 2*(l+w);
    });
    s = s.reduce( (p,c) => p += c);
    console.log(s);
}

wrap(s);

// A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
// A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.