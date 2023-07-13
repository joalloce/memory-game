export const initialCardsState = (n) => {
  let array = create2Arrays(n);
  shuffleArray(array);
  return mapToState(array);
};

export const getNumberBasedOnDifficulty = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return 5;
    case "Default":
      return 6;
    case "Normal":
      return 7;
    case "Hard":
      return 8;
    default:
      return -1;
  }
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mapToState = (array) => {
  return array.map((e) => {
    return {
      id: e,
      isFlipped: false,
    };
  });
};

const create2Arrays = (n) => [...Array(n).keys(), ...Array(n).keys()];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
