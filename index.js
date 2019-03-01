const JsonIn = require('./libs/input_modules/json');
const JsonOut = require('./libs/output_modules/json');
const MiddlewareManager = require('./middlewares/interface');

const srcPath = './data/request/request.json';
const desPath = './data/response/response.json';
const ruleSet = ['rule1', 'rule2'];

JsonIn.getDataObj(srcPath, function (readErr, dataObj) {
    if (readErr) {
        process.stderr.write(readErr.message);
        process.exitCode = 1;
    }

    MiddlewareManager.setRules(ruleSet, dataObj, function (rulesErr, handledDataObj) {
        if (rulesErr) {
            process.stderr.write(rulesErr.message);
            process.exitCode = 1;
        }

        JsonOut.setDataObj(desPath, handledDataObj, function (writeErr) {
            if (writeErr) {
                process.stderr.write(writeErr.message);
                process.exitCode = 1;
            }
        });
    });
});
