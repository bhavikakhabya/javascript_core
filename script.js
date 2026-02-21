let divs = document.querySelectorAll('.parent-div div')
let turn = 0
let player1moves = []
let player2moves = []
let gameOver = false

let winningmoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function checkWinner() {

    for (let pattern of winningmoves) {

        let p1win = pattern.every(num => player1moves.includes(num))
        let p2win = pattern.every(num => player2moves.includes(num))

        if (p1win) {
            alert("Player 1 Wins 🎉")
            gameOver = true
            return
        }

        if (p2win) {
            alert("Player 2 Wins 🎉")
            gameOver = true
            return
        }
    }
}

divs.forEach((d) => {
    d.addEventListener('click', () => {

        if (gameOver) return

        if (d.innerText !== '') return

        let index = [...divs].indexOf(d) + 1

        if (turn == 0) {
            d.innerText = 'X'
            player1moves.push(index)
            turn = 1
        } else {
            d.innerText = 'O'
            player2moves.push(index)
            turn = 0
        }

        checkWinner()
    })
})

function resetGame() {
    divs.forEach(d => d.innerText = '')
    player1moves = []
    player2moves = []
    turn = 0
    gameOver = false
}