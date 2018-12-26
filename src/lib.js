const splitByLines = content => content.split('\n').length - 1;

const splitByWords = content => content.split(/ |\n/).filter(x=>x).length;

const splitByBytes = content => content.split('').length;

const spaceGenerator = count => new Array(count).fill(' ').join('');

const wordCount = function(content, fileName){
  let result = '';
  result += spaceGenerator(6);
  result += splitByLines(content);
  result += spaceGenerator(5)
  result += splitByWords(content);
  result += spaceGenerator(4);
  result += splitByBytes(content);
  result += ' ' + fileName;
  return result;
};

module.exports = { wordCount };