const assert = require('assert');
const { wordCount } = require('../src/lib.js');

describe('wordCount', function(){
  let file = 'abc.js';
  let fileContent = 'only\ngreat\nminds\ncan\nafford\na\nsimple\nstyle'
  it('should return the lineCount, wordCount and bytesCounts of the given file' ,function(){
    let expectedOutput = '      7     8    42 abc.js';
    assert.deepEqual(wordCount(fileContent, file),expectedOutput);
  });
});