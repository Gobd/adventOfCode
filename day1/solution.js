let s = require(`./input`);

// part 1

function fl(s) {
    let total = s.split('').reduce((p, c) => {
        return p += c === '(' ? 1 : -1;
    }, 0)
    console.log(total);
}

// fl(s);

// part 2

function fl(s) {
    let basement;
    let total = s.split('').reduce((p, c, i) => {
        if (!basement && p === -1) basement = i;
        return p += c === '(' ? 1 : -1;
    }, 0)
    console.log(basement);
}

fl(s);