module.exports = {
    handle: function (dataObj, callback) {
        var sbcookie;

        if ('GET' == dataObj.method && dataObj.url.indexOf('/shopback/me') > -1) {
            try {
                sbcookie = dataObj.headers.Cookie;
            } catch (err) {
                return callback(new Error('Oh, no cookie exists.'));
            }

            this.parseCookies(sbcookie, function (err) {
                return callback(err);
            });
        }

        callback(null, dataObj);
    },

    parseCookies: function (cookieObj, callback) {
        var cookies = {};

        cookieObj.split(',').forEach(function (cookiePair) {
            if (2 != cookiePair.split('=').length) {
                return callback(new Error('Oh, there are problems in cookie.'));
            }
        });
    }
};
