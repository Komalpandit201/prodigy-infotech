const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => cell.addEventListener("click", cellClicked));

function cellClicked() {
    const index = this.getAttribute("data-index");

    if (board[index] !== "" || !running) return;

    board[index] = currentPlayer;
    this.innerText = currentPlayer;

    checkWinner();
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer} Turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const [a,b,c] = winConditions[i];

        if (board[a] === "" || board[b] === "" || board[c] === "") continue;

        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.innerText = `Player ${currentPlayer} Wins!`;
        running = false;
    }
    else if (!board.includes("")) {
        statusText.innerText = "Draw!";
        running = false;
    }
    else {
        changePlayer();
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = true;
    statusText.innerText = "Player X Turn";

    cells.forEach(cell => cell.innerText = "");
}
