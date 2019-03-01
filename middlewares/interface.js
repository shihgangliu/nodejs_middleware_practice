module.exports = {
    setRules: function (rules, dataObj, callback) {
        if (!Array.isArray(rules)) {
            return callback(new Error('Oh, rules parameter must be array!'));
        }

        rules.forEach(function (item, index, array) {
            var Rule = require("./" + item);

            Rule.handle(dataObj, function (err, handledDataObj) {
                dataObj = handledDataObj;
            });
        });

        callback(null, dataObj);
    }
};
