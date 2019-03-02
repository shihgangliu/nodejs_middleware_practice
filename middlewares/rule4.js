module.exports = {
    handle: function (dataObj, callback) {
        if ('GET' == dataObj.method && dataObj.url.indexOf('/shopback/api/') > -1) {
            if ('undefined' == typeof dataObj.headers) {
                dataObj.headers = { From: "hello@shopback.com" };
            } else {
                dataObj.headers.From = "hello@shopback.com";
            }
        }

        callback(null, dataObj);
    }
};
