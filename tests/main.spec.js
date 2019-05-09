/* import { expect  } from 'chai'; */

describe('Main', () => {
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
    });

    afterEach(() => {
        console.log('afterEach')
    });

    it('Test 1', () => {
        console.log('Test 1')
    });

    it('Test 2', () => {
        console.log('Test 2')
    });
});
