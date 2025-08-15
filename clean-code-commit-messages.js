const fs = require('fs');
const path = require('path');

const commitMsgFilePath = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFilePath, 'utf8');

const messagePattern = /^(feat|fix|docs|style|refactor|perf|test|chore)\(.+\): .+/;

if (!messagePattern.test(commitMsg)) {
    console.error('Error: Commit message is improperly formatted.');
    console.error('Please use a format like: type(scope): Subject');
    process.exit(1);
}

console.log('Commit message is valid. Proceeding with the commit...');
