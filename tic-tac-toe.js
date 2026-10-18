document.addEventListener("DOMContentLoaded", function (){
    const squares = document.querySelectorAll('.square');

    let state = new Array(9).fill(null);
    let currentPlayer = "X";

    squares.forEach(function(square, index){
        square.classList.add("square");
        square.addEventListener("click", function(){
            state[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        })
    })
})