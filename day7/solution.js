const inp = require(`./input.js`);

function makeInstr(str) {
    return str.split(`\n`).map(e => {
        let wire = e.split(` `).reverse()[0],
            first,
            second,
            operator;
        if (e.split(` -> `)[0].split(` `).length === 1) {
            operator = 'STRAIGHT';
            first = e.split(` -> `)[0].split(` `)[0];
            first = /[0-9]/.test(first) ? ~~first : first;
            second = null;
        } else if (e.split(` -> `)[0].split(` `).length === 2) {
            operator = 'NOT';
            first = e.split(` -> `)[0].split(` `)[1];
            first = /[0-9]/.test(first) ? ~~first : first;

            second = null;
        } else if (e.split(` -> `)[0].split(` `).length === 3) {
            operator = e.split(` -> `)[0].split(` `)[1];
            first = e.split(` -> `)[0].split(` `)[0];
            second = e.split(` -> `)[0].split(` `)[2];
            first = /[0-9]/.test(first) ? ~~first : first;
            second = /[0-9]/.test(second) ? ~~second : second;
        }
        return {
            first,
            operator,
            second,
            wire
        };
    });
}

function emulate(str) {
    let instr = makeInstr(str),
        obj = {};
    while (instr.length) {
        for (let i = instr.length - 1; i >= 0; i--) {
            let {
                first,
                operator,
                second,
                wire
            } = instr[i];
            if (operator === 'STRAIGHT') {
                if (/[0-9]/.test(first)) {
                    obj[wire] = first;
                    instr.splice(i, 1);
                } else if (obj.hasOwnProperty(first)) {
                    obj[wire] = obj[first];
                    instr.splice(i, 1);
                }
            } else if (operator === 'NOT' && obj.hasOwnProperty(first)) {
                obj[wire] = obj[first] ^ 65535;
                instr.splice(i, 1);
            } else if (operator === 'RSHIFT' && obj.hasOwnProperty(first)) {
                obj[wire] = obj[first] >> second;
                instr.splice(i, 1);
            } else if (operator === 'LSHIFT' && obj.hasOwnProperty(first)) {
                obj[wire] = obj[first] << second;
                instr.splice(i, 1);
            } else if (operator === 'AND' && first && second) {
                if (/[0-9]/.test(first) && obj.hasOwnProperty(second)) {
                    obj[wire] = first & obj[second];
                    instr.splice(i, 1);
                } else if (obj.hasOwnProperty(first) && obj.hasOwnProperty(second)) {
                    obj[wire] = obj[first] & obj[second];
                    instr.splice(i, 1);
                }
            } else if (operator === 'OR' && obj.hasOwnProperty(first) && obj.hasOwnProperty(second)) {
                obj[wire] = obj[first] | obj[second];
                instr.splice(i, 1);
            }
        }
    }
    console.log(obj);
}

emulate(inp);