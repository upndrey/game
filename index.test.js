import {
    generateStartMatrix,
    makeMove
} from "./index.js";
import { assert, expect, should } from 'chai';


describe("generateStartMatrix", function() {
    let matrix = generateStartMatrix();
    it("создает массив, в которой будут храниться данные игры", function() {
        expect(matrix).to.be.an('array');
    });

    it("размерностью 3х3", function() {
        expect(matrix).to.have.lengthOf(3);
        expect(matrix[0]).to.have.lengthOf(3);
        expect(matrix[1]).to.have.lengthOf(3);
        expect(matrix[2]).to.have.lengthOf(3);
    });

    it("заполненной null", function() {
        expect(matrix[0].every(elem => elem === null)).to.be.true;
        expect(matrix[1].every(elem => elem === null)).to.be.true;
        expect(matrix[2].every(elem => elem === null)).to.be.true;
    });
});

describe("makeMove", function() {
    let matrix = generateStartMatrix();
    let resultMatrix;;
    let expectMatrix;
    it("выполняет ход в заданную ячейку", function() {
        resultMatrix = makeMove(matrix, 0, 0, 1);
        expectMatrix = [
            [1, null, null],
            [null, null, null],
            [null, null, null]
        ]
        expect(resultMatrix).to.deep.eql(expectMatrix);

        resultMatrix = makeMove(matrix, 1, 1, 0);
        expectMatrix = [
            [null, null, null],
            [null, 0, null],
            [null, null, null]
        ]
        expect(resultMatrix).to.deep.eql(expectMatrix);
    });
    
    it("ход может быть выполнен только в пустую ячейку", function() {
        resultMatrix = makeMove(matrix, 0, 0, 1);
        resultMatrix = makeMove(resultMatrix, 0, 0, 0);
        expectMatrix = [
            [1, null, null],
            [null, null, null],
            [null, null, null]
        ]
        expect(resultMatrix).to.deep.eql(expectMatrix);
    });
});
