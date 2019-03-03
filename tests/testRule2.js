const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule2', function () {
    it('Test request without header cookie', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule2_without_cookie.json',
            ['rule2'],
            function (err, dataObj) {
                Assert.equal('Oh, no cookie exists.', err.message);
            }
        );
    })

    it('Test request with invalid header cookie', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule2_with_invalid_cookie.json',
            ['rule2'],
            function (err, dataObj) {
                Assert.equal('Oh, there are problems in cookie.', err.message);
            }
        );
    })

    it('Test request with header cookie', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule2_with_cookie.json',
            ['rule2'],
            function (err, dataObj) {
                Assert.equal('http://www.shopback.com/shopback/me', dataObj.url);
            }
        );
    })
});
