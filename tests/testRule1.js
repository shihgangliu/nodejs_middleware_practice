const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule1', function () {
    it('Test wrong file', function () {
        Base.runApp('./testss/request_data/rule1.json', ['rule1'], function (err, dataObj) {
            Assert.equal(
                "ENOENT: no such file or directory, open './testss/request_data/rule1.json'",
                err.message
            );
        });
    })

    it('Test rules must be array', function () {
        Base.runApp('./tests/request_data/rule1.json', 'rule1', function (err, dataObj) {
            Assert.equal('Oh, rules parameter must be array!', err.message);
        });
    })

    it('Test normal replace in rule1', function () {
        Base.runApp('./tests/request_data/rule1.json', ['rule1'], function (err, dataObj) {
            Assert.equal('http://www.shopback.com/shopback/static/assets?q=1', dataObj.url);
        });
    })
});
