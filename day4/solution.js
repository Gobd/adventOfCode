const crypto = require('crypto');
const input = `yzbqklnj`;

// part1

function day5(s) {
    let i = 0;
    let md5 = crypto.createHash(`md5`).update(`${input}${i}`).digest(`hex`);
    while (md5.substring(0, 5) !== `00000`) {
        i++;
        md5 = crypto.createHash(`md5`).update(`${input}${i}`).digest(`hex`);
    }
    console.log(i);
}
// 282749

// day5();

// part2

function day5p2(s) {
    let i = 0;
    let md5 = crypto.createHash(`md5`).update(`${input}${i}`).digest(`hex`);
    while (md5.substring(0, 6) !== `000000`) {
        i++;
        md5 = crypto.createHash(`md5`).update(`${input}${i}`).digest(`hex`);
    }
    console.log(i);
}
// 9962624

day5p2()