const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule7', function () {
    it('Test Content-Type doesn\'t exist', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule6.json',
            ['rule7'],
            function (err, dataObj) {
                Assert.equal('Content-Type doesn\'t exist!', err.message);
            }
        );
    })

    it('Test Content-Type is invalid', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule7_with_invalid_content_type.json',
            ['rule7'],
            function (err, dataObj) {
                Assert.equal('Content-Type is invalid!', err.message);
            }
        );
    })

    it('Test Content-Type is valid', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule7_with_valid_content_type.json',
            ['rule7'],
            function (err, dataObj) {
                Assert.equal('application/json', dataObj.headers['Content-Type']);
            }
        );
    })
});
