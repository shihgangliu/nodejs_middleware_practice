var fs = require('fs');

fs.readFile('input_datas/test1.json', function (readErr, data) {
    if (readErr) {
        process.stderr.write(readErr.message);
        process.exitCode = 1;
    }

    try {
        var dataObj = JSON.parse(data);
    } catch (parseErr) {
        process.stderr.write(parseErr.message);
        process.exitCode = 1;
    }

    fs.writeFile('output_datas/test1.json', JSON.stringify(dataObj), function (writeErr) {
        if (writeErr) {
            process.stderr.write(writeErr.message);
            process.exitCode = 1;
        }

        process.exitCode = 0;
    });
});
