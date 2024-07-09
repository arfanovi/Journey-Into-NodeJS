
/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url === "/") {
        // Async read
        fs.readFile('Home.html', function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('<h1>File Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(1000, () => {
    console.log('Server is running on port 1000');
});


*/





// Sync 

let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url = "/"){
        let myData = fs.readFileSync('Home.html');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(myData)
    }

})

server2.listen(2000);
console.log('Server is running ')