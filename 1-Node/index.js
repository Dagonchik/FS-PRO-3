const test = require('./module.js');

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200);

    const fs = require('fs');
    if(request.url === '/home') {
        console.log('Welcome!!!');
        response.end('Welcome!!!');
    }

    fs.readFile('data.txt', 'utf-8', (err, data) => {
        response.end(data);
        console.log(data);
    })
})

server.listen('3000');
