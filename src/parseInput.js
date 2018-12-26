const parseInput = function(userArgs) {
  let filesList = userArgs.filter(x => !x.includes('-'));
  return filesList;
};

module.exports = { parseInput };