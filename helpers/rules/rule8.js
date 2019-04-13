const Config = require('config');

module.exports = {
    handle: function (handledObj, callback) {
        if ('DELETE' == handledObj.getMethod()) {
            var sbAgent;
            var allowAgent = Config.get('X-AGENT.allow');

            if (!(sbAgent = handledObj.getHeader('X-AGENT'))) {
                throw new Error('X-AGENT doesn\'t exist!');
            }

            if ('' == allowAgent || ('*' != allowAgent && allowAgent.indexOf(sbAgent) < 0)) {
                throw new Error('This agent should be reject!');
            }
        }

        callback(null, handledObj);
    }
};
