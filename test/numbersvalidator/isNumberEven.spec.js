const NumbersValidator = require('../../app/number_validator');
const { expect } = require('chai');
const { beforeEach, describe, it, afterEach } = require('mocha');
describe("isNumberEven", () => {
    let numbersValidator;
    beforeEach(() => {
        numbersValidator = new NumbersValidator();
    });

    afterEach(() => {
        numbersValidator = null;
    });

    it("should return true if the number is even", () => {
        const result = numbersValidator.isNumberEven(2);
        expect(result).to.be.true;
    });
    it("should return false if the number is odd", () => {
        const result = numbersValidator.isNumberEven(3);
        expect(result).to.be.false;
    });
});