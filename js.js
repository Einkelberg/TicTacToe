const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

const cells = document.querySelectorAll('td');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(e) {
  const cell = e.target;
  const index = parseInt(cell.getAttribute('id').slice(-1));

  if (board[index] !== '') return;

  board[index] = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  cell.textContent = currentPlayer;


  if (checkWin()) {
    setTimeout(function () {
      alert(`${currentPlayer} Wins`);
    }, 300);
    setTimeout(function () {
      resetBoard();
    }, 500);
    return;
  }

  if (board.every(cell => cell !== '')) {
    alert('Draw');
    resetBoard();
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}

function checkWin() {
  return (
    (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
    (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
    (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
    (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
    (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
    (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
    (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
    (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)
  );
}

function resetBoard() {
  board.fill('');
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.textContent = '';
  });
  currentPlayer = 'X';
}
