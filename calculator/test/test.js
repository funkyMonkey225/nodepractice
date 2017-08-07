const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do arithmetic', () => {
    describe('Can add numbers', () => {
        it('Can add two positive integers', () => {
            expect(calc.add(1,1)).to.equal(2);
        })
        it('Can add to zero', () => {
            expect(calc.add(1,0)).to.equal(1);
        })
        it('Cannot add a number and a function', () => {
            expect(calc.add(1, ()=> {})).to.equal('1()=> {}');
        })
    })
    describe('Can subtract numbers', () => {
        it('Can subtract two positive integers', () => {
            expect(calc.subtract(2,1)).to.equal(1);
        })
        it('Can subtract two negative integers', () => {
            expect(calc.subtract(-2, -1)).to.equal(-1);
        })
        it('Cannot subtract two arrays', () => {
            expect(calc.subtract([], [])).to.equal(0);
        })
    })
    describe('Can multiply numbers', () => {
        it('Can multiply two positive integers', () => {
            expect(calc.multiply(2,2)).to.equal(4);
        })
        it('Can multiply two negative integers', () => {
            expect(calc.multiply(-2, -5)).to.equal(10);
        })
        it('Cannot multiply two functions', () => {
            expect(calc.multiply(()=> {}, ()=> {})).to.be.NaN;
        })
    })
    describe('Can divide numbers', () => {
        it('Can divide two positive integers', () => {
            expect(calc.divide(2,1)).to.equal(2);
        })
        it('Can divide two negative integers', () => {
            expect(calc.divide(-2, -1)).to.equal(2);
        })
        it('Cannot divide by 0', () => {
            expect(calc.divide(2, 0)).to.equal(Infinity);
        })
    })
    describe('Can add numbers asynchronously', () => {
        it('Can add two integers asynchronously', (done) => {
            calc.addAsync(3, 2, (val) => {
                if (val === 5) {
                    done();
                } else {
                    done(new Error('nope'));
                }
            })
        })
    })
})




// describe('Taking a first stab at TDD', () => {
//     it('testing', () => {
//         expect(1).to.equal(1);
//     })
// })