const boardSpaces = document.querySelectorAll(".board-space")

const game = (() => {
    let turn = 1
    let players = []

    const gameBoard = [
        " ", " ", " ", 
        " ", " ", " ", 
        " ", " ", " "
    ]

    const endTurn = () => {
        if(turn === 1) {
            turn = 2
            console.log(turn)
        }
        else if(turn === 2) {
            turn = 1
            console.log(turn)
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
            endTurn()
        }
    }

    return {gameBoard, addMarker}
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
        let boardSpace = parseInt(e.target.id)
        game.addMarker(boardSpace)
        displayController.updateDisplay(boardSpaces, game.gameBoard)
    }

    return {updateDisplay, updateMarkers}
})()




boardSpaces.forEach(element => {
    element.addEventListener("click", displayController.updateMarkers)
});