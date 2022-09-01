// vitoria tipo wasted no gta 

const turnDisplay = document.querySelector(".turn-display")
const boardSpaces = document.querySelectorAll(".board-space")

const game = (() => {
    let gameOver = false
    let turn = 1
    let players = []
    let winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const gameBoard = [
        " ", " ", " ", 
        " ", " ", " ", 
        " ", " ", " "
    ]

    const endGame = () => {
        game.gameOver = true
    }

    const checkWinningCondition = () => {
        winningCondition.forEach(element => {
            if(gameBoard[element[0]] === "x" && gameBoard[element[1]] === "x" && gameBoard[element[2]] === "x") {
                turnDisplay.textContent = "Player X won!"
                turnDisplay.classList.add("win")
                endGame()
            }
            else if(gameBoard[element[0]] === "o" && gameBoard[element[1]] === "o" && gameBoard[element[2]] === "o") {
                turnDisplay.textContent = "Player O won!"
                turnDisplay.classList.add("win")
                endGame()
            }
        });
        
        if(gameBoard.includes(" ")) {
            console.log("not empty")
        }
        else {
            turnDisplay.textContent = "It's a draw"
            turnDisplay.classList.add("draw")
        }
    }

    const endTurn = () => {
        if(turn === 1 && gameOver !== true) {
            turn = 2
            turnDisplay.textContent = "Player O turn"
            
            checkWinningCondition()
        }
        else if(turn === 2 && gameOver !== true) {
            turn = 1
            turnDisplay.textContent = "Player X turn"

            checkWinningCondition()
        }
    }

    const addMarker = (index) => {
        let marker = ""
        if(turn === 1)
            marker = "x"
        else
            marker = "o"

        if(gameBoard[index] === " ") {
            gameBoard[index] = marker
            //checkWinningCondition()
            endTurn()
        }
    }


    return {gameOver, gameBoard, addMarker}
})()

const Player = (name, marker) => {
    let playerName = name
    let playerMarker = marker
    let score = 0
    let addPoint = () => score += 1

    return {playerName, playerMarker, score}
}

const displayController = (() => {
    const updateDisplay = (boardSpaces, gameBoard) => {
        for (let i = 0; i < boardSpaces.length; i++) {
            boardSpaces[i].textContent = gameBoard[i]
        }
    }

    const updateMarkers = (e) => {
        if(!game.gameOver) {
            let boardSpace = parseInt(e.target.id)
            game.addMarker(boardSpace)
            displayController.updateDisplay(boardSpaces, game.gameBoard)
        }
    }

    return {updateDisplay, updateMarkers}
})()




boardSpaces.forEach(element => {
    element.addEventListener("click", displayController.updateMarkers)
});