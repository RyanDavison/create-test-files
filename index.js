const fs = require('fs-extra');
const path = require('path');
const createFiles = require('backstamped-files');
const buildTree = require('add-subdirs');

module.exports = (config) => {
    let fileList = [];
    fs.emptyDirSync(config.path);
    if(config.nested) {
        buildTree(config.path, config.subdirCount, config.subdirName)
        .forEach(dir => {
            fileList.push.apply(fileList,
                createFiles(path.join(config.path, path.basename(dir)), config.fileCount))
        });
    }
    fileList.push.apply(fileList, createFiles(config.path, config.fileCount));
    if(config.return) return fileList;
}
