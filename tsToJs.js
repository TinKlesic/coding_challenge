const fs = require('fs');
const glob = require('glob');
const sylvanas = require('sylvanas');

const files = glob.sync('**/*.@(ts|tsx)', {cwd: './src'});
const fileList = sylvanas(files, {cwd: './src'});

fileList.forEach(({data, sourceFilePath, targetFilePath}) => {
  fs.rename(sourceFilePath, targetFilePath, (err) => {
    if (err) {
      console.log('ERROR: rename', err);
    }
    console.log('Move file from', sourceFilePath, 'to', targetFilePath);

    fs.writeFile(targetFilePath, data, 'utf8', (err) => {
      if (err) {
        console.log('ERROR: exchange content', err);
      }
      console.log('Exchange file content for', targetFilePath);
    });
  });
});
