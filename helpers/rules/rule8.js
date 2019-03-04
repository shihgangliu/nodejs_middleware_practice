const Config = require('config');

module.exports = {
    handle: function (handledObj, callback) {
        if ('DELETE' == handledObj.getMethod()) {
            var sbAgent;
            var allowAgent = Config.get('X-SHOPBACK-AGENT.allow');

            if (!(sbAgent = handledObj.getHeader('X-SHOPBACK-AGENT'))) {
                throw new Error('X-SHOPBACK-AGENT doesn\'t exist!');
            }

            if ('' == allowAgent || ('*' != allowAgent && allowAgent.indexOf(sbAgent) < 0)) {
                throw new Error('This agent should be reject!');
            }
        }

        callback(null, handledObj);
    }
};
