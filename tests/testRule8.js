const Assert = require('chai').assert;

const Base = require('./base');

describe('Test rule8', function () {
    it('Test disallow agent', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule8_with_disallow_agent.json',
            ['rule8'],
            function (err, dataObj) {
                Assert.equal('This agent should be reject!', err.message);
            }
        );
    })

    it('Test allow agent', function () {
        Base.runApp(
            'json',
            './tests/request_data/rule8_with_allow_agent.json',
            ['rule8'],
            function (err, dataObj) {
                Assert.equal('AGENT_1', dataObj.headers['X-SHOPBACK-AGENT']);
            }
        );
    })
});
