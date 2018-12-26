const fs = require('fs');
const { wordCount } = require('./src/lib.js');
const { parseInput } = require('./src/parseInput.js');

const main = function(){
  let userArgs = process.argv.slice(2)
  let filesList = parseInput(userArgs);
  userArgs.splice(userArgs.length - filesList.length);
  let content = fs.readFileSync(filesList[0], 'utf8');
  console.log(wordCount(content, filesList[0]));
}

main();