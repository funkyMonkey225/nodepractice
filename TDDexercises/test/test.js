const expect = require('chai').expect;
const File = require('../index');

let file = new File();

describe('Can read file', () => {
    describe('Can read file', () => {
        it('Can read file', (done) => {
            file.readFile('orange.md', (val) => {
                if (val === "OH, HAI.") {
                    done();
                } else {
                    done(new Error('nope'));
                }
            })
        })
    })
})