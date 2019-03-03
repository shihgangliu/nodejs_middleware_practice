module.exports = {
    handle: function (handledObj, callback) {
        if ('GET' == handledObj.getMethod()) {
            var sbreferer;

            try {
                sbreferer = handledObj.getHeader('Referer');
            } catch (err) {
                return callback(new Error('Oh, there is no referer in headers.'));
            }

            if (sbreferer.indexOf('www.shopback.com') < 0) {
                return callback(new Error('Oh, the header referer is invalid.'));
            }
        }

        callback(null, handledObj);
    }
};
