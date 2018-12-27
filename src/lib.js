const splitByLines = content => content.split("\n").length - 1;

const splitByWords = content => content.split(/ |\n/).filter(x => x).length;

const splitByBytes = content => content.split("").length;

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

const getTotal = function(list1, list2) {
  let total = [];
  for (let index = 0; index < list1.length - 1; index++) {
    total[index] = list1[index] + list2[index];
  }
  total.push("total");
  return total;
};

const joinWithTab = function(array) {
  return array.join("\t");
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