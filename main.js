import {
    generateStartMatrix,
    makeMove,
    isEndGame
} from "./index.js";

var gameMatrix;
var currentTurn;

document.addEventListener("DOMContentLoaded", main);
function main() {
    const startGameDom = document.getElementById('startGame');


    startGameDom.addEventListener("click", startGame);

}

function startGame() {
    const gameDom = document.getElementById('game');
    currentTurn = Math.round(Math.random());
    gameMatrix = generateStartMatrix();
    fillDom(gameDom, gameMatrix);
    game(gameDom, gameMatrix);
}

function game(gameDom, gameMatrix) {
    [...gameDom.children].forEach((row, i) => {
        [...row.children].forEach((col, j) => {
            col.addEventListener('click', () => {
                let gameResult = isEndGame(gameMatrix);
                if(gameResult != -2)
                    return;
                console.log(i, j, currentTurn);
                gameMatrix = makeMove(gameMatrix, i, j, currentTurn);
                fillDom(gameDom, gameMatrix);
                gameResult = isEndGame(gameMatrix);
                switch(gameResult) {
                    case 1:
                        alert("Выиграли крестики!");
                        break;
                    case 0:
                        alert("Выиграли нолики!");
                        break;
                    case -1:
                        alert("Ничья!");
                        break;
                    case -2:
                        currentTurn = 1 - currentTurn;
                        break;
                }
            });
        });
    });
}

function fillDom(dom, matrix) {
    [...dom.children].forEach((row, i) => {
        [...row.children].forEach((col, j) => {
            if(matrix[i][j] == 1) {
                col.innerText = "X";
            }
            else if(matrix[i][j] == 0) {
                col.innerText = "O";
            }
            else if(matrix[i][j] == null) {
                col.innerText = "";
            }
        });
    });
}