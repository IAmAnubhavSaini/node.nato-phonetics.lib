const {char2word, word2words} = require("../src/index");

describe("index", () => {
    describe("char2word", () => {
        it("returns correct values for known keys", () => {
            const expected = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "alfa", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliett", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whisky", "xray", "yankee", "zulu"];
            const input = "0123456789abcdefghijklmnopqrstuvwxyz";
            const actual = input.split("").map(char2word);
            expect(actual).toEqual(expected);
        });
        it("returns the characters as it is for unknown keys", () => {
            const expected = ["@", "!"];
            const input = "@!";
            const actual = input.split("").map(char2word);
            expect(actual).toEqual(expected);
        });
    });
    describe("word2words", () => {
        it("returns correct values for known keys", () => {
            const expected = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "alfa", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliett", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whisky", "xray", "yankee", "zulu"];
            const input = "0123456789abcdefghijklmnopqrstuvwxyz";
            const actual = word2words(input);
            expect(actual).toEqual(expected);
        });
        it("returns the characters as it is for unknown keys", () => {
            const expected = ["@", "!"];
            const input = "@!";
            const actual = word2words(input);
            expect(actual).toEqual(expected);
        });
    });
});
