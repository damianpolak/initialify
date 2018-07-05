/*
 * initialify
 * https://github.com/damianpolak/initialify
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = initialify = (str, dot) => {
  'use strict';

  if(str === undefined ||
     str === null ||
     str === '' ||
     typeof(str) !== 'string') {
       throw new TypeError('Expected correct string value');
  }

  let e = str.split(' ');
  let r = '';

  for(let i = 0; i <= e.length - 1; i++) {
    if(e[i][0] !== undefined)
      if(dot === true) {

        r += e[i][0] + '.';
      } else {
        r += e[i][0];
      }
  }
  return r.toUpperCase();
};
