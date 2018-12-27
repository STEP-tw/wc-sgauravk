const assert = require('assert');
const { wordCount } = require('../src/lib.js');


const readFileSync = function(file){
  let files = { "abc.js" : 'only\ngreat\nminds\ncan\nafford\na\nsimple\nstyle'};
  return files[file]
};

const existsSync = function(file){
  return ['sampleFile.js', 'abc.js'].includes(file);
};
const fs = { readFileSync, existsSync };

describe('WORD COUNT : for single file', function(){
  it('should return the lineCount, wordCount and bytesCounts when no option is given' ,function(){
    let expectedOutput = ['7\t8\t42\tabc.js'];
    assert.deepEqual(wordCount(['abc.js'],[],fs),expectedOutput);
  });

  it('should return the line when args contains -l', function(){
    let expectedOutput = ['7\tabc.js'];
    assert.deepEqual(wordCount(['abc.js'],['-l'],fs), expectedOutput);
  });

  it('should return the words count when args contain -w', function(){
    let expectedOutput = ['8\tabc.js'];
    assert.deepEqual(wordCount(['abc.js'],['-w'],fs), expectedOutput);
  });

  it('should reurn the bytes count when args contain -c', function(){
    let expectedOutput = ['42\tabc.js'];
    assert.deepEqual(wordCount(['abc.js'],['-c'],fs), expectedOutput);
  });

  it('should return the lineCount, wordCount and bytesCounts when -wlc is given ', function(){
    let expectedOutput = ['7\t8\t42\tabc.js'];
    assert.deepEqual(wordCount(['abc.js'],['-wlc'],fs), expectedOutput);
  });
});

describe('WORD COUNT : for multipleFile file', function(){
  it('should return the lineCount, wordCount and bytesCounts when no option is given' ,function(){
    let expectedOutput = ['7\t8\t42\tabc.js'];
    expectedOutput.push('7\t8\t42\tabc.js');
    expectedOutput.push('14\t16\t84\ttotal')
    assert.deepEqual(wordCount(['abc.js','abc.js'],[],fs),expectedOutput);
  });

  it('should return the line when args contains -l', function(){
    let expectedOutput = ['7\tabc.js'];
    expectedOutput.push('7\tabc.js');
    expectedOutput.push('14\ttotal');
    assert.deepEqual(wordCount(['abc.js','abc.js'],['-l'],fs), expectedOutput);
  });

  it('should return the words count when args contain -w', function(){
    let expectedOutput = ['8\tabc.js'];
    expectedOutput.push('8\tabc.js');
    expectedOutput.push('16\ttotal');
    assert.deepEqual(wordCount(['abc.js','abc.js'],['-w'],fs), expectedOutput);
  });

  it('should reurn the bytes count when args contain -c', function(){
    let expectedOutput = ['42\tabc.js'];
    expectedOutput.push('42\tabc.js');
    expectedOutput.push('84\ttotal');
    assert.deepEqual(wordCount(['abc.js','abc.js'],['-c'],fs), expectedOutput);
  });

  it('should return the lineCount, wordCount and bytesCounts when -wlc is given ', function(){
    let expectedOutput = ['7\t8\t42\tabc.js'];
    expectedOutput.push('7\t8\t42\tabc.js');
    expectedOutput.push('14\t16\t84\ttotal');
    assert.deepEqual(wordCount(['abc.js','abc.js'],['-wlc'],fs), expectedOutput);
  });
});