console.log("js is connected");
let gameProgress = [];

function getWinner() {

    if (gameProgress[0] !== undefined
        && gameProgress[0] === gameProgress[1]
        && gameProgress[0] === gameProgress[2]) {
        return gameProgress[0];
    }
    if (gameProgress[3] !== undefined
        && gameProgress[3] === gameProgress[4]
        && gameProgress[3] === gameProgress[5]) {
        return gameProgress[3];
    }
    if (gameProgress[6] !== undefined
        && gameProgress[6] === gameProgress[7]
        && gameProgress[6] === gameProgress[8]) {
        return gameProgress[6];
    }
    if (gameProgress[0] !== undefined
        && gameProgress[0] === gameProgress[3]
        && gameProgress[0] === gameProgress[6]) {
        return gameProgress[0];
    }
    if (gameProgress[1] !== undefined
        && gameProgress[1] === gameProgress[4]
        && gameProgress[1] === gameProgress[7]) {
        return gameProgress[1];
    }
    if (gameProgress[2] !== undefined
        && gameProgress[2] === gameProgress[5]
        && gameProgress[2] === gameProgress[8]) {
        return gameProgress[2];
    }   
    if (gameProgress[0] !== undefined
        && gameProgress[0] === gameProgress[4]
        && gameProgress[0] === gameProgress[8]) {
        return gameProgress[0];
    } 
    if (gameProgress[2] !== undefined
        && gameProgress[2] === gameProgress[4]
        && gameProgress[2] === gameProgress[6]) {
              return gameProgress[2];
    } 
    return;
}

function reset () {
    for (var i = 0; i < 9; i++) {
        let box = document.getElementById(id);
        box.innerText = '';
    }
    gameProgress = [];
}


function isCatsGame() {
    let catsGame = true;
    console.log("game: ", gameProgress);
    for (let i = 0; i < 9; i++) {
        if (gameProgress[i] === undefined) {
            catsGame = false;
        }
    }
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
        reset();
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


}



