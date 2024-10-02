 

const net = require('net');

const port = process.argv[2];  

const server = net.createServer((socket) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}\n`;
    
    socket.end(formattedDate); 
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});