document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let state = new Array(9).fill(null);
    let currentPlayer = "X";

    const status = document.getElementById("status");

    const originalStatus = status.textContent;
    let gameOver = false;

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkWinner() {
        for (const [a, b, c] of winningCombos) {
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    squares.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            if (gameOver || state[index] !== null) {
                return;
            }

            state[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            const winner = checkWinner();
            if (winner) {
                status.textContent = "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    const newGameBtn = document.querySelector(".btn");

    newGameBtn.addEventListener("click", function () {
        state = new Array(9).fill(null);
        currentPlayer = "X";
        gameOver = false;

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = originalStatus;
        status.classList.remove("you-won");
    });
});