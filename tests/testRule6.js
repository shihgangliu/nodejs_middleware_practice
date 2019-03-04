const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule6', function () {
    it('Test X-SHOPBACK-AGENT doesn\'t exist', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule5.json',
            ['rule6'],
            function (err, dataObj) {
                Assert.equal('X-SHOPBACK-AGENT doesn\'t exist!', err.message);
            }
        );
    })

    it('Test X-SHOPBACK-AGENT header exist', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule6.json',
            ['rule6'],
            function (err, dataObj) {
                Assert.equal('anything', dataObj.headers['X-SHOPBACK-AGENT']);
            }
        );
    })
});
