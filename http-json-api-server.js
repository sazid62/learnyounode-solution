const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const iso = parsedUrl.searchParams.get('iso');

    if (parsedUrl.pathname === '/api/parsetime' && iso) {
        const date = new Date(iso);
        if (isNaN(date.getTime())) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid Date' }));
            return;
        }
        const jsonResponse = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonResponse));
    } else if (parsedUrl.pathname === '/api/unixtime' && iso) {
        const date = new Date(iso);
        if (isNaN(date.getTime())) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid Date' }));
            return;
        }
        const jsonResponse = {
            unixtime: date.getTime()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonResponse));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const port = process.argv[2];
server.listen(port);