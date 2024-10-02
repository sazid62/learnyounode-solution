const fs = require('fs');
const fileContent = fs.readFileSync(process.argv[2]);
const str = fileContent.toString();
 
const lines = str.split('\n');
 
console.log(lines.length - 1);