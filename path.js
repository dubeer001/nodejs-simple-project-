const path = require('node:path')
function simple(){
const a = path.basename('C:\\temp\\myfile.html');
console.log(a);
const b = path.dirname('C:\\temp\\myfile.html');
console.log(b);
const c = console.log(process.env.PATH);
console.log(c);
const d = path.extname('index.html')
console.log(d)
const e = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  });
  console.log(e);
}
module.exports= simple;