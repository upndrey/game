import {
    generateStartMatrix
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

