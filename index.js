'use strict';

const Args = require('minimist')(process.argv.slice(2));

const IOHandler = require('./helpers/IOHandler/base');
const RulesManager = require('./helpers/rules/base');

if (Args.h || Args.help) {
    process.stdout.write("Usage: node index.js --src PATH --dest PATH --rules rule1,rule2,...");
    process.exitCode = 0;
}

try {
    var request = (new IOHandler()).getRequest(Args.type, Args.source);

    RulesManager.setRules(Args.rules.split(','), request, function (err, handledRequest) {
        if (err) {
            process.stderr.write(err.message);
            process.exitCode = 1;
        }

        (new IOHandler()).setResponse(Args.type, Args.destination, handledRequest.getHandledObj());
    });
} catch (err) {
    process.stderr.write(err);
    process.exitCode = 1;
}
