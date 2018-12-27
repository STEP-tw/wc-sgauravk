const splitByLines = content => content.split('\n').length - 1;

const splitByWords = content => content.split(/ |\n/).filter(x=>x).length;

const splitByBytes = content => content.split('').length;

const spaceGenerator = count => new Array(count).fill(' ').join('');

const getOptions = function(args){
  let result = [];
  let input = args.join();
  let defaultCases = ['-lcw','-lwc','-clw','-cwl','-wlc','-wcl',''];
  if (input.includes('l')) result.push(splitByLines);
  if (input.includes('w')) result.push(splitByWords);
  if (input.includes('c')) result.push(splitByBytes);
  if (defaultCases.includes(input))
    result = [splitByLines, splitByWords, splitByBytes];
  return result;
};

const mapper = function(file, input, fs){
  const { readFileSync, existsSync } = fs;
  let content = readFileSync(file, 'utf8');
  let options = getOptions(input);
  let result = options.map(x=>x(content));
  result.push(file);
  return result;
};

const getCountArray = function(filesList, userArgs, fs){
  let output = [];
  for(let count=0; count<filesList.length; count++){
    output.push(mapper(filesList[count], userArgs, fs));
  }
  return output;
};

const getTotal = function(output){
  if(output.length < 2) return;
  let total = [];
  for(let count=0; count<output.length; count++){
    for(let index=0; index<output[count].length-1; index++){
      total[index] = (total[index] || 0) + output[count][index];
    }
  }
  total.push('total');
  return total
};

const joinArray = function(array){
  let result = '';
  let gapsList = [6,5,4,1];
  gapsList.splice(0,gapsList.length - array.length);
  for(let count=0; count<array.length; count++){
    result += spaceGenerator(gapsList[count]);
    result += array[count];
  }
  return result;
}

const wordCount = function(filesList, userArgs, fs){
  let output = getCountArray(filesList, userArgs, fs);
  let finalOutput = output.map(joinArray);
  if(getTotal(output)){
    total = joinArray(getTotal(output));
    finalOutput.push(total);
  }
  return finalOutput;
};

module.exports = { wordCount };