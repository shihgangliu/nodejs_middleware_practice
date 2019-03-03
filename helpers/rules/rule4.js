module.exports = {
    handle: function (handledObj, callback) {
        if (
            'GET' == handledObj.getMethod() &&
            handledObj.getUrl().indexOf('/shopback/api/') > -1
        ) {
            sbfrom = handledObj.setHeader('From', "hello@shopback.com");
        }

        callback(null, handledObj);
    }
};
