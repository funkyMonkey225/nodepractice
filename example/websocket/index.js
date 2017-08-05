const ws = require('ws');
const server = new ws.Server({ port: 8080 });

server.on('connection', (socket) => {
    socket.on('message', (msg) => {
        server.clients.forEach( (client) => {
            client.send('Hey everyone! They just said: ' + msg);
        });
    });
});