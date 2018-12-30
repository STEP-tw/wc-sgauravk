const parseInput = function(userArgs) {
  let filesList = userArgs.filter(x => !x.startsWith('-'));
  return filesList;
};

module.exports = { parseInput };
