function JsonHandler() {
    this.jsonObj;
}

JsonHandler.prototype.decode = function decode(data) {
    try {
        this.jsonObj = JSON.parse(data);
    } catch (err) {
        throw err;
    }

    return this;
};

JsonHandler.prototype.encode = function encode(dataObj) {
    return JSON.stringify(dataObj);
};

JsonHandler.prototype.getHandledObj = function getHandledObj() {
    return this.jsonObj;
}

JsonHandler.prototype.getUrl = function getUrl() {
    try {
        return this.jsonObj.url;
    } catch (err) {
        throw new Error('Get failed!');
    }
};

JsonHandler.prototype.getMethod = function getMethod() {
    try {
        return this.jsonObj.method;
    } catch (err) {
        throw new Error('Get failed!');
    }
};

JsonHandler.prototype.getHeaders = function getHeaders() {
    try {
        return this.jsonObj.headers;
    } catch (err) {
        throw new Error('Get failed!');
    }
};

JsonHandler.prototype.getHeader = function getHeader(name) {
    try {
        return this.jsonObj.headers[name];
    } catch (err) {
        throw new Error('Get failed!');
    }
};

JsonHandler.prototype.setUrl = function setUrl(url) {
    this.jsonObj.url = url;
};

JsonHandler.prototype.setMethod = function setUrl(method) {
    this.jsonObj.method = method;
};

JsonHandler.prototype.setHeaders = function setUrl(headers) {
    this.jsonObj.headers = headers;
};

JsonHandler.prototype.setHeader = function setHeader(name, value) {
    this.jsonObj.headers[name] = value;
};

module.exports = JsonHandler;