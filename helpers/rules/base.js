module.exports = {
    setRules: function (rules, dataObj, callback) {
        var hasError = false;

        if (!Array.isArray(rules)) {
            return callback(new Error('Oh, rules parameter must be array!'));
        }

        rules.forEach(function (item, index, array) {
            var Rule = require("./" + item);

            Rule.handle(dataObj, function (err, handledDataObj) {
                if (err) {
                    hasError = true;
                    return callback(err);
                }

                dataObj = handledDataObj;
            });
        });

        if (!hasError) {
            callback(null, dataObj);
        }
    }
};
