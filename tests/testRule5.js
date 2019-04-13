const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule5', function () {
    it('Test rule5 remove query string', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule5.json',
            ['rule5'],
            function (err, dataObj) {
                Assert.equal('http://www.example.com/search', dataObj.url);
            }
        );
    })
});
