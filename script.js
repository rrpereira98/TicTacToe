const boardSpaces = document.querySelectorAll(".board-space")

const GameBoard = (() => {
    const gameBoard = [
        "x", "x", "x", 
        "o", "o", "x", 
        "o", "o", "x"
    ]

    return {gameBoard}
})()

const Player = () => {

}

const displayController = (() => {
    const updateDisplay = (boardSpaces, gameBoard) => {
        for (let i = 0; i < boardSpaces.length; i++) {
            boardSpaces[i].textContent = gameBoard[i]
        }
    }

    return {updateDisplay}
})()

displayController.updateDisplay(boardSpaces, GameBoard.gameBoard)

