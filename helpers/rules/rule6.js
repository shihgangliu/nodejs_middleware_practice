module.exports = {
    handle: function (handledObj, callback) {
        var method = handledObj.getMethod();

        if ('POST' == method || 'PUT' == method) {
            if (!handledObj.getHeader('X-SHOPBACK-AGENT')) {
                throw new Error('X-SHOPBACK-AGENT doesn\'t exist!');
            }
        }

        callback(null, handledObj);
    }
};
