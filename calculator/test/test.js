const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do arithmetic', () => {
    describe('Can add numbers', () => {
        it('Can add two positive integers', () => {
            expect(calc.add(1,1)).to.equal(2);
        })
    })
})




// describe('Taking a first stab at TDD', () => {
//     it('testing', () => {
//         expect(1).to.equal(1);
//     })
// })