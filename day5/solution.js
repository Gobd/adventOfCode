const inp = require(`./input`);

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

// part1

function reg(s) {
    let good = s.split(`\n`).filter( e => {
        let bad = /ab|cd|pq|xy/g.test(e);
        let vowels = e.match(/[aeiou]/g) ? e.match(/[aeiou]/g).length : 0;
        let repeat = /(.)\1{1}/g.test(e);
        return !bad && vowels >= 3 && repeat;
    }).length;
    console.log(good);
}

// reg(inp);

// part2

// It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
// It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

function reg2(s) {
    let good = s.split(`\n`).filter( e => {
        let pair = /(..)(?:.*)\1/g.test(e);
        let repeat = /(.)(?:.)\1/g.test(e);
        return pair && repeat;
    }).length;
    console.log(good);
}

reg2(inp);