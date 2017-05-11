# create-test-files

Creates a directory of files with different timestamps for testing purposes. This
is done synchronously since you need the files created before you can test on them.
Returns an array of the files created.


## Install

```
npm install --save create-test-files
```

## Usage

```
const createTestFiles = require('create-test-files');

const listOfCreatedFiles = createTestFiles('/path/to/directory');
```


## License

MIT


