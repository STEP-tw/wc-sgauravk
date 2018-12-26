const assert = require('assert');
const { parseInput } = require('../src/parseInput.js');

describe('parseInput', function(){
  it('should return the files name that will filtered from userArgs' ,function(){
    let userArgs = ['-l','abc'];
    assert.deepEqual(parseInput(userArgs),['abc'])
  });
});