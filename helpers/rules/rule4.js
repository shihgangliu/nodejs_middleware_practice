module.exports = {
    handle: function (handledObj, callback) {
        if (
            'GET' == handledObj.getMethod() &&
            handledObj.getUrl().indexOf('/api/') > -1
        ) {
            handledObj.setHeader('From', "hello@example.com");
        }

        callback(null, handledObj);
    }
};
