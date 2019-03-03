const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule4', function () {
    it('Test rule4 headers From', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule4.json',
            ['rule4'],
            function (err, dataObj) {
                Assert.equal('hello@shopback.com', dataObj.headers.From);
            }
        );
    })
});
