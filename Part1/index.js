console.log("js is connected");
let gameProgress = [];

function getWinner() {
    
}


function isCatsGame() {
    let catsGame = true;
    gameProgress.forEach(e => {
        if (e === undefined) {
            catsGame = false;
        }
    });
    return catsGame;
}

function play(id) {
    let playerSpan = document.getElementById("player");
    let currentPlayer = playerSpan.innerText;
    let boxClicked = document.getElementById(id);
    boxClicked.innerText = currentPlayer;
    gameProgress[id] = currentPlayer;

    let winner = getWinner()
    if (winner) {
        alert(`${winner} wins!`)
        return;
    }

    if (isCatsGame()) {
        alert("Cat's game!")
        return;
    }

    if (currentPlayer === "X") {
        playerSpan.innerText = "O";
    } else {
        playerSpan.innerText = "X";
    }
    console.log(gameProgress);
}

