const http = require('http');

const urls = process.argv.slice(2);
let results = [];
let count = 0;

urls.forEach((url, index) => {
    http.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            results[index] = data;
            count++;

            if (count === urls.length) {
                results.forEach(result => console.log(result));
            }
        });
    }).on('error', (err) => {
        console.error(`Error fetching ${url}: ${err.message}`);
    });
});