const Json = require('../libs/input_modules/json');
const MiddlewareManager = require('../middlewares/interface');

module.exports = {
    runApp: function (filepath, ruleSet, callback) {
        Json.getDataObj(filepath, function (readErr, dataObj) {
            if (readErr) {
                return callback(readErr);
            }

            MiddlewareManager.setRules(ruleSet, dataObj, function (rulesErr, handledDataObj) {
                if (rulesErr) {
                    return callback(rulesErr);
                }

                callback(null, handledDataObj);
            });
        });
    }
};
