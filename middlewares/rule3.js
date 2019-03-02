module.exports = {
    handle: function (dataObj, callback) {
        if ('GET' == dataObj.method) {
            var sbreferer;

            try {
                sbreferer = dataObj.headers.Referer;
            } catch (err) {
                return callback(new Error('Oh, there is no referer in headers.'));
            }

            if (sbreferer.indexOf('www.shopback.com') < 0) {
                return callback(new Error('Oh, the header referer is invalid.'));
            }
        }
    }
};
