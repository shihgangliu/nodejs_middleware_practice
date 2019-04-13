const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule3', function () {
    it('Test request without header referer', function () {
        Base.runApp(
            'json',
            './tests/request_data/without_headers.json',
            ['rule3'],
            function (err, dataObj) {
                Assert.equal('Oh, there is no referer in headers.', err.message);
            }
        );
    })

    it('Test request with invalid header referer', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule3_with_invalid_referer.json',
            ['rule3'],
            function (err, dataObj) {
                Assert.equal('Oh, the header referer is invalid.', err.message);
            }
        );
    })

    it('Test request with valid header referer', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule3_with_valid_referer.json',
            ['rule3'],
            function (err, dataObj) {
                Assert.equal('http://www.example.com/me', dataObj.url);
            }
        );
    })
});
