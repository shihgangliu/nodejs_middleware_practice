const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule1', function () {
    it('Test wrong type', function () {
        Base.runApp(
            'xml',
            './testss/request_data/without_headers.xml',
            ['rule1'],
            function (err, dataObj) {
                Assert.equal(
                    "This type is invalid!",
                    err.message
                );
            }
        );
    })

    it('Test wrong file', function () {
        Base.runApp(
            'json',
            './testss/request_data/without_headers.json',
            ['rule1'],
            function (err, dataObj) {
                Assert.equal(
                    "This file path is incorrect!",
                    err.message
                );
            }
        );
    })

    it('Test rules must be array', function () {
        Base.runApp(
            'json',
            './tests/request_data/without_headers.json',
            'rule1',
            function (err, dataObj) {
                Assert.equal('Oh, rules parameter must be array!', err.message);
            }
        );
    })

    it('Test normal replace in rule1', function () {
        Base.runApp(
            'json',
            './tests/request_data/without_headers.json',
            ['rule1'],
            function (err, dataObj) {
                Assert.equal('http://www.shopback.com/shopback/static/assets?q=1', dataObj.url);
            }
        );
    })
});
