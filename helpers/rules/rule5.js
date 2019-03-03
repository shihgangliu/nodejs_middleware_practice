module.exports = {
    handle: function (handledObj, callback) {
        var url = handledObj.getUrl();
        var method = handledObj.getMethod();

        if ('POST' == method || 'PUT' == method) {
            handledObj.setUrl(url.replace(/(\?.+)/, ''));
        }

        callback(null, handledObj);
    }
};
