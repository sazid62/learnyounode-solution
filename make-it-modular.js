const fs = require('fs');
const path = require('path');

function filterFiles(dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        }

        const filteredFiles = files.filter(function (file) {
            return path.extname(file) === '.' + ext;
        });

        callback(null, filteredFiles);
    });
}

module.exports = filterFiles;