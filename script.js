const bingoBox = document.querySelector(`.bingo-box`);
console.log(bingoBox);
const toDisplayCells = function () {
  for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let newBingoBox = document.createElement(`div`);
    newBingoBox.innerHTML = cellNumber;
    newBingoBox.classList.add(`cell`);
    // newBingoBox.id = bingoBox;
    bingoBox.appendChild(newBingoBox);
  }
};
toDisplayCells();
const highl
