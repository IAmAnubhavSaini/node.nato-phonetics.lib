export type StringDictionaryType = { [key: string]: string }

const natoPhoneticsAlphabet: StringDictionaryType = {
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

function char2word(char: string | number): string {
    const ch = char.toString().toLowerCase();
    return natoPhoneticsAlphabet[ch] || ch;
}

function word2words(word: string): string[] {
    return word.split('').map(char2word);
}

export {
    natoPhoneticsAlphabet,
    char2word,
    word2words
};
