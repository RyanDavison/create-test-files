const createFiles = require('../index.js');
const chai = require('chai');
const expect = chai.expect;

const filePath = './test/tree';
const config = {
    "path": filePath,
    "nested": false,
    "subdirCount": 2,
    "subdirName": "mydir",
    "fileCount": 3,
    "return": true
}

describe('createsFiles', function() {
    it(`should return an array if config.return is true`, function(){
        config.return = true;
        expect(createFiles(config)).to.be.an('array');
    });

    it(`should return undefined if config.return is false`, function(){
        //Give the previous test a moment to finish creating files
        setTimeout(function(){
            config.return = false;
            expect(createFiles(config)).to.be.a('undefined');
        }, 200)

    });
});
