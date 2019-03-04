module.exports = {
    setRules: function (rules, dataObj, callback) {
        var hasError = false;
        var urlObj = dataObj.getUrlObj();

        if ('www.shopback.com' != urlObj.hostname) {
            return callback(new Error('This library only allow shopback host!'));
        }

        if (!Array.isArray(rules)) {
            return callback(new Error('Oh, rules parameter must be array!'));
        }

        rules.forEach(function (item) {
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
            dataObj.setHeader('X-SHOPBACK-TIMESTAMP', Math.floor(Date.now() / 1000));
            callback(null, dataObj);
        }
    }
};
