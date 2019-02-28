const Interface = require('./interface');

module.exports = {
    getDataObj: function (filename, callback) {
        Interface.read(filename, function (readErr, data) {
            if (readErr) {
                return callback(readErr);
            }

            try {
                callback(null, JSON.parse(data));
            } catch (parseErr) {
                callback(parseErr);
            }
        });
    }
};
