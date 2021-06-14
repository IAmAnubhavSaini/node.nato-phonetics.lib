# node.nato-phonetics.lib

Library for nato phonetics alphabet

- [NPM](https://www.npmjs.com/package/node.nato-phonetics.lib)
- [GitHub](https://github.com/IAmAnubhavSaini/node.nato-phonetics.lib)
- [Wiki](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet)

## Installation

`npm i node.nato-phonetis.lib`

TypeScript

## Usage

```typescript

// import {char2word, word2words } from "./index"; // locally
import {char2word, word2words } from "node.nato-phonetics.lib";

console.log(char2word('a')) // 'alpha'
console.log(word2words('bbc')) // ['bravo', 'bravo', 'charlie']

```

JavaScript

```javascript

// const {char2word, word2words} = require('./src/index');
const {char2word, word2words} = require('node.nato-phonetis.lib');

///... rest is same

```

## License

MIT

- &copy; Anubhav
