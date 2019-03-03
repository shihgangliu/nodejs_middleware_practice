module.exports = {
    handle: function (handledObj, callback) {
        if ('GET' == handledObj.getMethod()) {
            var url = handledObj.getUrl();
            handledObj.setUrl(url.replace('/shopback/resource', '/shopback/static/assets'));
        }

        callback(null, handledObj);
    }
};
