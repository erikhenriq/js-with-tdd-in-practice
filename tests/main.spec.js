import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main';

describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
        expect(sum).to.be.a.instanceOf(Function);
    });

    it('should exist the method `sub`', () => {
        expect(sub).to.be.a.instanceOf(Function);
    });

    it('should exist the method `mult`', () => {
        expect(mult).to.be.a.instanceOf(Function);
    });

    it('should exist the method `div`', () => {
        expect(div).to.be.a.instanceOf(Function);
    });
});

describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
        expect(sum(2, 2)).to.be.equal(4);
    })
});

describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
        expect(sub(6, 2)).to.be.equal(4);
    })

    it('should return -4 when `sub(6,10)`', () => {
        expect(sub(6, 10)).to.be.equal(-4);
    })
});

describe('Mult', () => {
    it('should return 4 when `mult(2,2)`', () => {
        expect(mult(2, 2)).to.be.equal(4);
    })
});


describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
        expect(div(4, 2)).to.be.equal(2);
    })

    it('should return `not possible divide by 0` when `div(4,2)`', () => {
        expect(div(4, 0)).to.be.equal('not possible divide by 0');
    })
});



/* describe('Main', () => {
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

 */