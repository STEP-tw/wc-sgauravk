const assert = require('assert');
const { wordCount } = require('../src/lib.js');

describe('wordCount', function(){
  let file = 'abc.js';
  let fileContent = 'only\ngreat\nminds\ncan\nafford\na\nsimple\nstyle'
  it('should return the lineCount, wordCount and bytesCounts when no option is given' ,function(){
    let expectedOutput = '      7     8    42 abc.js';
    assert.deepEqual(wordCount(fileContent, file, []),expectedOutput);
  });

  it('should return the line when args contains -l', function(){
    let expectedOutput = '      7 abc.js';
    assert.deepEqual(wordCount(fileContent, file, ['-l']), expectedOutput);
  });

  it('should return the words count when args contain -w', function(){
    let expectedOutput = '      8 abc.js';
    assert.deepEqual(wordCount(fileContent, file, ['-w']), expectedOutput);
  });

  it('should reurn the bytes count when args contain -c', function(){
    let expectedOutput = '      42 abc.js';
    assert.deepEqual(wordCount(fileContent, file, ['-c']), expectedOutput);
  });

  it('should return the lineCount, wordCount and bytesCounts when -wlc is given ', function(){
    let expectedOutput = '      7     8    42 abc.js';
    assert.deepEqual(wordCount(fileContent, file, ['-wlc']), expectedOutput);
  });
});