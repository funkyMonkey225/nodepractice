const ws = require('ws');
let server

function init(callback) {
    server = new ws.Server({ port: 8080 });

    server.on('connection', (socket) => {
        if (callback) {
            callback(socket);
        }
    })
}

function broadcast (message) {
    server.clients.forEach( (client) => {
        client.send(message);
    });
};

module.exports = {
    broadcast: broadcast,
    init: init
};