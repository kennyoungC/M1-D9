const bingoBox = document.querySelector(`.bingo-box`);
console.log(bingoBox);
const toDisplayCells = function () {
  for (cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let newBingoBox = document.createComment(`div`);
    newBingoBox.innerHTML = cellNumber;
    newBingoBox.id = bingoBox;
    bingoBox.appendChild(newBingoBox);
  }
};
console.log(toDisplayCells());
