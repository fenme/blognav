import fs from 'fs'

interface Directory {
  name: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
}

function getDirectories(path: string): Directory[] {
  const directories: Directory[] = [];

  fs.readdirSync(path).forEach((file) => {
    const currentPath = `${path}/${file}`;
    const stat = fs.statSync(currentPath);

    if (stat.isDirectory()) {
      directories.push({
        name: file,
        path: currentPath,
        createdAt: stat.birthtime,
        updatedAt: stat.mtime,
      });
      directories.push(...getDirectories(currentPath));
    }
  });

  return directories;
}

const directories = getDirectories('sites');

console.log(`888888${directories}`);

