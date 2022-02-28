const bingoBox = document.querySelector(`.bingo-box`);
const toDisplayCells = function () {
  for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let newBingoBox = document.createElement(`div`);
    newBingoBox.innerHTML = cellNumber;
    newBingoBox.classList.add(`cell`);
    newBingoBox.id = `cell${cellNumber}`;
    bingoBox.appendChild(newBingoBox);
  }
  return bingoBox;
};

toDisplayCells();

const toBeHighlighted = function () {
  let random = Math.trunc(Math.random() * 76 + 1);
  let cell = document.querySelector(`#cell${random}`);
  cell.classList.add(`highlighed-cell`);
  const randomText = document.querySelector(`.randomText`);
  randomText.textContent = `Random Number: ${random}`;
};
