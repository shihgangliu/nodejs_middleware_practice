const Interface = require('./interface');

module.exports = {
    setDataObj: function (filename, dataObj, callback) {
        Interface.write(filename, JSON.stringify(dataObj), function (err) {
            if (err) {
                return callback(err);
            }

            callback(null);
        });
    }
};
