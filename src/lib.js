const splitByLines = content => content.split('\n').length - 1;

const splitByWords = content => content.split(/ |\n/).filter(x=>x).length;

const splitByBytes = content => content.split('').length;

const spaceGenerator = count => new Array(count).fill(' ').join('');

const getOptions = function(args){
  let result = [];
  let defaultCases = ['-lcw','-lwc','-clw','-cwl','-wlc','-wcl',''];
  if (args.includes('-l')) result.push(splitByLines);
  if (args.includes('-w')) result.push(splitByWords);
  if (args.includes('-c')) result.push(splitByBytes);
  if (defaultCases.includes(args.join())) 
    result = [splitByLines, splitByWords, splitByBytes];
  return result;
};

const wordCount = function(content, fileName, input){
  const sapcesNeeded = [6,5,4];
  let options = getOptions(input);
  let output = '';
  for (let count=0; count<options.length; count++){
    output += spaceGenerator(sapcesNeeded[count]);
    output += options[count](content);
  }
  output += ' ' + fileName;
  return output;
};

module.exports = { wordCount };