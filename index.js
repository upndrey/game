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
    if(
        matrix[0].every(elem => elem == 1) ||
        matrix[1].every(elem => elem == 1) ||
        matrix[2].every(elem => elem == 1) ||
        matrix[0][0] == 1 &&
        matrix[1][0] == 1 &&
        matrix[2][0] == 1 ||
        matrix[0][1] == 1 &&
        matrix[1][1] == 1 &&
        matrix[2][1] == 1 ||
        matrix[0][2] == 1 &&
        matrix[1][2] == 1 &&
        matrix[2][2] == 1 ||
        matrix[0][0] == 1 &&
        matrix[1][1] == 1 &&
        matrix[2][2] == 1 ||
        matrix[0][2] == 1 &&
        matrix[1][1] == 1 &&
        matrix[2][0] == 1
    )
        result = 1;
    else if(
        matrix[0].every(elem => elem == 0) ||
        matrix[1].every(elem => elem == 0) ||
        matrix[2].every(elem => elem == 0) ||
        matrix[0][0] == 0 &&
        matrix[1][0] == 0 &&
        matrix[2][0] == 0 ||
        matrix[0][1] == 0 &&
        matrix[1][1] == 0 &&
        matrix[2][1] == 0 ||
        matrix[0][2] == 0 &&
        matrix[1][2] == 0 &&
        matrix[2][2] == 0 ||
        matrix[0][0] == 0 &&
        matrix[1][1] == 0 &&
        matrix[2][2] == 0 ||
        matrix[0][2] == 0 &&
        matrix[1][1] == 0 &&
        matrix[2][0] == 0
    )
        result = 0;
    else if(
        matrix[0].every(elem => elem != null) &&
        matrix[1].every(elem => elem != null) &&
        matrix[2].every(elem => elem != null)
    )
        result = -1;
    else
        result = -2;
    return  result;
}