

// Using Core Module or HTTP module 


const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hello Server");
});

server.listen(5050, () => {
    console.log('Server is listening on port 5050');
});
