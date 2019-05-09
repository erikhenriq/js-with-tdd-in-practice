/* import { expect  } from 'chai'; */

describe('Main', () => {
    let arr;
    /*     describe('Method A', () => {
            context('Case 1', () => {
                it('should happen something from Case 1', () => {
    
                    throw new Error('Just some error')
                });
            });
    
            context('Case 2', () => {
                it('should happen something from Case 2', () => {
                    throw new Error('Just some other error')
                });
    
                it('should happen other something from Case 2', () => {
    
                });
            })
        });
    
        describe('Method B', () => {
    
        }); */


    before(() => {
        console.log('before')
    });

    after(() => {
        console.log('after')
    });

    beforeEach(() => {
        console.log('beforeEach')
        arr = [1, 2, 3];
    });

    afterEach(() => {
        console.log('afterEach')
    });

    it('should have a size of 4 when oush another value to the array', () => {
        arr.push(4);

        console.log(arr.length);
    });

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();

        console.log(arr.length);
    });

    it('should remove the value 3 when use pop in the array', () => {

        console.log(arr.pop() === 3);
    });
});
