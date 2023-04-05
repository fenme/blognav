const fs = require('fs');
const path = require('path');

function renameFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) throw err;
        if (stat.isDirectory()) {
          renameFiles(filePath);
        } else if (file.endsWith('.json')) {
          const newFilePath = path.join(dir, file.replace('.json', '.md'));
          fs.rename(filePath, newFilePath, (err) => {
            if (err) throw err;
            console.log(`${filePath} renamed to ${newFilePath}`);
          });
        }
      });
    });
  });
}

renameFiles('sites');
