const splitByLines = content => content.split("\n").length - 1;

const splitByWords = content => content.split(/ |\n/).filter(x => x).length;

const splitByBytes = content => content.split("").length;

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

module.exports = {splitByLines, splitByWords, splitByBytes, getTotal, joinWithTab};