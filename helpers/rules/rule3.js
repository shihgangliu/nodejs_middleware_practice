module.exports = {
    handle: function (handledObj, callback) {
        if ('GET' == handledObj.getMethod()) {
            var sbreferer;

            if (!(sbreferer = handledObj.getHeader('Referer'))) {
                return callback(new Error('Oh, there is no referer in headers.'));
            }

            if (sbreferer.indexOf('www.example.com') < 0) {
                return callback(new Error('Oh, the header referer is invalid.'));
            }
        }

        callback(null, handledObj);
    }
};
