const expect = require('chai').expect;
const File = require('../index');

let file = new File();

describe('Can read file', () => {
    it('Can read file', (done) => {
        file.readFile('orange.md', (upcased) => {
            if (upcased === "OH, HAI.") {
                done();
            } else {
                done(new Error('nope'));
            }
        })
    })
})

describe('Can lookup URL', () => {
    it('Can lookup URL', (done) => {
        file.dnsLookup('www.google.com', (ip) => {
            if (ip === "74.125.21.103") {
                done();
            } else {
                done(new Error('nope'));
            }
        })
    })
    it('Cannot lookup nonexistent URL', (done) => {
        file.dnsLookup('aflsjf.com', (err) => {
             if (err.message === "getaddrinfo ENOTFOUND aflsjf.com") {
                done();
            } else {
                done(new Error('nope'));
            }
        })
    })
})

describe('Read/write file', () => {
    it('Can read a file and write to another file', (done) => {
        file.readWrite('orange.md', 'pineapple.md', (saved) => {
            if (saved === "Wrote to file pineapple.md") {
                done();
            } else {
                done(new Error('nope'));
            }
        })
    })
})