const JsonIn = require('./input_models/json');
const JsonOut = require('./output_models/json');

const request = './data/request/test.json';
const response = './data/response/test.json';

JsonIn.getDataObj(request, function (err, dataObj) {
    if (err) {
        process.stderr.write(err.message);
        process.exitCode = 1;
    }

    JsonOut.setDataObj(response, dataObj, function (err) {
        if (err) {
            process.stderr.write(err.message);
            process.exitCode = 1;
        }
    });
});
