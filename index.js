export function generateStartMatrix() {
    return [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}
/**
 * 
 * @param {array} matrix - матрица, в которой выполняется ход
 * @param {int} row - строка, в которой выполняется ход
 * @param {int} col - столбец, в котором выполняется ход
 * @param {int} value - 0 или 1, где 1 - крестик, 0 - нолик
 * @returns {array}
 */
export function makeMove(matrix, row, col, value) {
    let tempMatrix = JSON.parse(JSON.stringify(matrix));
    if(tempMatrix[row][col] === null)
        tempMatrix[row][col] = value;
    return tempMatrix;
}

/**
 * 
 * @param {array} matrix 
 * @returns {int}:
 *  0 - выиграл нолик, 
 *  1 - выиграл крестик, 
 * -1 - ничья, 
 * -2 - игра продолжается
 */
export function isEndGame(matrix) {
    let result = 0;
    // TODO
    return  result;
}