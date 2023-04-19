const encodeImage = require('../lib/encode.js');
const decodeImage = require('../lib/decode.js');
const { assert } = require('chai');

describe('encoding simple text', function () {
    it('encodeImage text "test"', function (done) {
        encodeImage("test", 10, 10, 10, 'test.png');
        done();
    })
})

describe('decoding simple text', function () {
    it('encode and decode text "test" ', function () {

        return encodeImage("test", 10, 10, 10, 'test.png').then(function () {
            decodeImage('test.png', 10, 10).then(function (result) {
                assert.equal(result, "test");
            });
        });
        

    })

    it('encode and decode text "test" ', function () {
        const text="Das ist ein Test";

        return encodeImage(text, 10, 10, 10, 'test.png').then(function () {
            decodeImage('test.png', 10, 10).then(function (result) {
                assert.equal(result, text+"xasfddddd");
            });
        });
        

    })
})

