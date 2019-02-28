const fs = require('fs');

module.exports = {
    read: function (filename, callback) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                return callback(err);
            }

            callback(null, data);
        });
    }
};
