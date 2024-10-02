const http = require('http');

function httpCollect() {
    const url = process.argv[2];
    if (!url) {
        console.error('Please provide a URL as the first command-line argument.');
        process.exit(1);
    }

    http.get(url, (response) => {
        let data = '';

        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            console.log(data.length);
            console.log(data);
        });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

httpCollect();