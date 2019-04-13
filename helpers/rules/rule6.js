module.exports = {
    handle: function (handledObj, callback) {
        var method = handledObj.getMethod();

        if ('POST' == method || 'PUT' == method) {
            if (!handledObj.getHeader('X-AGENT')) {
                throw new Error('X-AGENT doesn\'t exist!');
            }
        }

        callback(null, handledObj);
    }
};
