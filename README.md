# initialify [![Build Status](https://travis-ci.org/damianpolak/initialify.svg?branch=master)](https://travis-ci.org/damianpolak/initialify)

> Makes initials from words in string. Useable for name initials or short company names.

## Install

```
$ npm install initialify
```

## Usage

```js
const initialify = require('initialify');

initialify('John Doe');
// returns 'JD'
initialify('John Doe', true);
// returns 'J.D.'
initialify('This is example string');
// returns 'TIES'
initialify('This is example string', true);
// returns 'T.I.E.S.'
initialify('Healthy lifestyle institute ');
// returns 'HLI'
initialify('Healthy lifestyle institute ', true);
// returns 'H.L.I.'
```

## License

MIT © Damian Polak
