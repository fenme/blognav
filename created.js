const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

const filePath = path.join(process.cwd(), '/fanma/2023/50.md');
const file = fs.readFileSync(filePath, 'utf8');
const matter = grayMatter(file);

const fileStat = fs.statSync(filePath);
const mtime = fileStat.mtime.toISOString();
const createTime = fileStat.birthtime.toISOString();
// const createTime = new Date().toISOString();
const adjustedCreateTime = new Date(Date.parse(createTime) + 8 * 60 * 60 * 1000).toISOString();
const adjustedMtime = new Date(Date.parse(mtime) + 8 * 60 * 60 * 1000).toISOString();
matter.data.date = adjustedCreateTime;
matter.data.modified = adjustedMtime;

const newFile = grayMatter.stringify(matter);

fs.writeFileSync(filePath, newFile, 'utf8');

console.log('创建时间已添加到元信息中');