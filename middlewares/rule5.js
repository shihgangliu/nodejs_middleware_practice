module.exports = {
    handle: function (dataObj, callback) {
        if ('POST' == dataObj.method || 'PUT' == dataObj.method) {
            dataObj.url = dataObj.url.replace(/(\?.+)/, '');
        }

        callback(null, dataObj);
    }
};
