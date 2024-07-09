const http = require('http');
const URL = require('url');

const server = http.createServer(function (req, res) {

    let myUrl = "https://www.rokomari.com/book/author/5280/jakir-talukdar";

    let myUrlObj = URL.parse(myUrl, true);

    let myHostname = myUrlObj.host;
    let myPathname = myUrlObj.pathname;
    let mySearchName = myUrlObj.search;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<p>Hostname: ${myHostname}</p>`);
    res.write(`<p>Pathname: ${myPathname}</p>`);
    res.write(`<p>Search: ${mySearchName}</p>`);
    res.end();
});

server.listen(5040, () => {
    console.log("Server is running on port 5040");
});
