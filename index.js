'use strict';

const Args = require('minimist')(process.argv.slice(2));

const JsonIn = require('./libs/input_modules/json');
const JsonOut = require('./libs/output_modules/json');
const MiddlewareManager = require('./middlewares/interface');

if (Args.h || Args.help) {
    process.stdout.write("Usage: node index.js --src PATH --dest PATH --rules rule1,rule2,...");
    process.exitCode = 0;
}

var srcPath, desPath, ruleSet;

srcPath = Args.src;
desPath = Args.dest;
ruleSet = Args.rules.split(',');

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
