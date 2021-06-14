"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word2words = exports.char2word = exports.natoPhoneticsAlphabet = void 0;
var natoPhoneticsAlphabet = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "a": "alfa",
    "b": "bravo",
    "c": "charlie",
    "d": "delta",
    "e": "echo",
    "f": "foxtrot",
    "g": "golf",
    "h": "hotel",
    "i": "india",
    "j": "juliett",
    "k": "kilo",
    "l": "lima",
    "m": "mike",
    "n": "november",
    "o": "oscar",
    "p": "papa",
    "q": "quebec",
    "r": "romeo",
    "s": "sierra",
    "t": "tango",
    "u": "uniform",
    "v": "victor",
    "w": "whisky",
    "x": "xray",
    "y": "yankee",
    "z": "zulu"
};
exports.natoPhoneticsAlphabet = natoPhoneticsAlphabet;
function char2word(char) {
    var ch = char.toString().toLowerCase();
    return natoPhoneticsAlphabet[ch] || '❌ not found';
}
exports.char2word = char2word;
function word2words(word) {
    return word.split('').map(char2word);
}
exports.word2words = word2words;
//# sourceMappingURL=index.js.map