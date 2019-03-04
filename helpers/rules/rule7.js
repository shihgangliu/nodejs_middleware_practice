module.exports = {
    handle: function (handledObj, callback) {
        var method = handledObj.getMethod();
        var contentType;

        if ('POST' == method || 'PUT' == method) {
            if (!(contentType = handledObj.getHeader('Content-Type'))) {
                throw new Error('Content-Type doesn\'t exist!');
            }

            if ('application/json' !== contentType) {
                throw new Error('Content-Type is invalid!');
            }
        }

        callback(null, handledObj);
    }
};
