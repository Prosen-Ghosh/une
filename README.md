# une

JavaScript Package for checking is variable empty,undefined or null

![npm](https://img.shields.io/npm/v/une.svg) ![license](https://img.shields.io/npm/l/une.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/une.svg)  


![travis-status](https://img.shields.io/travis/Prosen-Ghosh/une.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/une.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/une.svg)

## Features


## Install

`npm install --save une`


## Usage

```js
const une = require('une.js');

une();
//=> true

une(null);
//=> true

une(undefined);
//=> true

une([]);
//=> true

une([1]);
//=> false

une({});
//=> true

une({a:1});
//=> false

une('');
//=> true

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
