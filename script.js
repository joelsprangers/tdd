const addOne = (numbers) => {
  const newArray = [];

  numbers.forEach((number) => {
    newArray.push(number + 1);
  });
  return newArray;
};

const getWordLengths = function (someWords) {
  const wordLength = [];
  someWords.forEach((word) => {
    wordLength.push(word.length);
  });
  return wordLength;
};

const findNeedle = (words) => {
  let needleAtPlace = undefined;
  words.forEach((word) => {
    if (word === "needle") {
      needleAtPlace = words.indexOf(word);
    }
  });
  return needleAtPlace;
};

//hier functies als object toevoegen
module.exports = { addOne, getWordLengths, findNeedle };
