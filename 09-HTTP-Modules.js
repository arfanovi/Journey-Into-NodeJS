


// Node JS HTTP Modules 
// Web Application crete a need server 

// Create NodeJS server with Node 

const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('<h1>Hello Node JS . You are Beauty </h1>')
    
})
 


server.listen(4141, () =>{
    console.log('Server is Running on PORT 4141')
})