const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeBinToMorse(str) {
    switch (str) {
        case '10': return '.';
        case '11': return '-';
        default: return '';
    }
}

function decode(expr) {
    console.log()
    const space = '**********';
    let symbols = [];
    let strings = expr.padEnd(Math.ceil(expr.length / 10) * 10, '00').split(space);
    console.log(strings)
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        symbols.push({
            bit: [], 
            morse: [], 
            char: ''
        });

        for (let j = 0; j < strings[i].length / 10; j++) {
            symbols[i].bit[j] = strings[i].substr(j*10, 10);
            symbols[i].morse[j] = '';
        
            for (z = 0; z < symbols[i].bit[j].length/2; z++) {
                symbols[i].morse[j] += decodeBinToMorse(symbols[i].bit[j].substr(z*2, 2)); 
            }
            
            symbols[i].char += MORSE_TABLE[symbols[i].morse[j]];
        }
        result += symbols[i].char + ' ';
    }
    return result.trim();
}

module.exports = {
    decode
}