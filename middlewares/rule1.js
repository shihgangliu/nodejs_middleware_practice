module.exports = {
    handle: function (dataObj, callback) {
        if ('GET' == dataObj.method) {
            dataObj.url = dataObj.url.replace('/shopback/resource', '/shopback/static/assets');
        }

        callback(null, dataObj);
    }
};
