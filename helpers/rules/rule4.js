module.exports = {
    handle: function (handledObj, callback) {
        if (
            'GET' == handledObj.getMethod() &&
            handledObj.getUrl().indexOf('/api/') > -1
        ) {
            sbfrom = handledObj.setHeader('From', "hello@.com");
        }

        callback(null, handledObj);
    }
};
