const fs = require('fs');

 
const filePath = process.argv[2];
 
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
 
        console.error('Error reading file:', err);
        process.exit(1);
    }

 
    const newlineCount = data.split('\n').length - 1;
 
    console.log(newlineCount);
});