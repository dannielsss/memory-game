// With matrix?
const matrixTable = [
  [1, 2, 4],
  [2, 3, 3],
  [4, 1, 5],
  [5, 6, 6],
];

// Without matrix?
const arrayTable = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// Generate a random positions in the list
const generateRandomArrayTable = () => {
  for (let i = 0; i < arrayTable.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayTable[i], arrayTable[j]] = [arrayTable[j], arrayTable[i]];
  }
  return arrayTable;
};

console.log(generateRandomArrayTable());
