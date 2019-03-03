const fs = require('fs');

function Base() {
}

Base.prototype.getRequest = function getRequest(type, source) {
    switch (type){
        case 'json':
            return getRequestFromJsonFile(source);
        default:
            throw new Error('This type is invalid!');
    }
};

Base.prototype.setResponse = function setResponse(type, destination, dataObj) {
    switch (type){
        case 'json':
            return setResponseToJsonFile(destination, dataObj);
        default:
            throw new Error('This type is invalid!');
    }
}

function getRequestFromJsonFile(file) {
    if (!fs.existsSync(file)) {
        throw new Error('This file path is incorrect!');
    }

    var data = fs.readFileSync(file);
    var JsonHandler = require('./json');

    try {
        return (new JsonHandler()).decode(data);
    } catch (err) {
        throw err;
    }
}

function setResponseToJsonFile(file, dataObj) {
    var JsonHandler = require('./json');

    fs.writeFile(file, (new JsonHandler()).encode(dataObj), function (err) {
        if (err) {
            throw err;
        }
    });
}

module.exports = Base;
