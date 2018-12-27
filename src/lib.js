const {splitByLines, splitByWords, splitByBytes,
  getTotal, joinWithTab} = require('./util.js');

const getOptions = function(args) {
  let result = [];
  let input = args.join() || '-lwc';
  if (input.includes("l")) result.push(splitByLines);
  if (input.includes("w")) result.push(splitByWords);
  if (input.includes("c")) result.push(splitByBytes);
  return result;
};

const mapper = function(input, fs, file) {
  const { readFileSync } = fs;
  let content = readFileSync(file, "utf8");
  let options = getOptions(input);
  let result = options.map(x => x(content));
  result.push(file);
  return result;
};

const getCountArray = function(filesList, userArgs, fs) {
  let getFileCounts = mapper.bind(null, userArgs, fs);
  return filesList.map(getFileCounts);
};

const wordCount = function(filesList, userArgs, fs) {
  let output = getCountArray(filesList, userArgs, fs);
  let finalOutput = output.map(joinWithTab);
  if (filesList.length > 1) {
    let total = output.reduce(getTotal);
    finalOutput.push(joinWithTab(total));
  }
  return finalOutput;
};

module.exports = { wordCount };