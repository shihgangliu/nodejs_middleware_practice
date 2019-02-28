const fs = require('fs');

module.exports = {
    write: function (filename, data, callback) {
        fs.writeFile(filename, data, function (err) {
            if (err) {
                return callback(err);
            }

            callback(null, data);
        });
    }
};
