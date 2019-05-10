const expect = require('chai').expect;
const calc = require('../src/main.js');

describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
        expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
        expect(calc.sum).to.be.a.instanceOf(Function);
    });

    it('should exist the method `sub`', () => {
        expect(calc.sub).to.be.a.instanceOf(Function);
    });

    it('should exist the method `mult`', () => {
        expect(calc.mult).to.be.a.instanceOf(Function);
    });

    it('should exist the method `div`', () => {
        expect(calc.div).to.be.a.instanceOf(Function);
    });
});

describe('Main', () => {
    let arr;

    beforeEach(() => {
        arr = [1, 2, 3];
    });

    it('should have a size of 4 when oush another value to the array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should remove the value 3 when use pop in the array', () => {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should return true when pop 3 from the array', () => {
        expect(arr.pop() === 3).to.be.true;
    })

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();
        expect(arr).to.has.lengthOf(2);
    });
});
