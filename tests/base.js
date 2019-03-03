const IOHandler = require('../helpers/IOHandler/base');
const RulesManager = require('../helpers/rules/base');

module.exports = {
    runApp: function (type, source, ruleSet, callback) {
        try {
            var request = (new IOHandler()).getRequest(type, source);

            RulesManager.setRules(ruleSet, request, function (err, handledRequest) {
                if (err) {
                    return callback(err);
                }

                callback(null, handledRequest.getHandledObj());
            });
        } catch (handlederr) {
            callback(handlederr);
        }
    }
};
