
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
/*
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

*/




// Async Write 
/*
let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url == "/"){


        fs.writeFile('demo.txt', 'Hello World', function (err) {

            if(err) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File write Fail');
                res.end();

            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File is Success");
                res.end()
            }
            
        });


        // let myData = fs.readFileSync('Home.html');
        // res.writeHead(200, {'Content-Type':'text/html'});
        // res.write(myData)
    }

})

server2.listen(2000);
console.log('Server is running ')


*/








// Sync Write 

let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url == "/"){


       let err=  fs.writeFileSync('demoSync.txt', 'Hello World Sync', function (err) {

            if(err) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File write Fail');
                res.end();

            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File is Success");
                res.end()
            }
            
        });


        // let myData = fs.readFileSync('Home.html');
        // res.writeHead(200, {'Content-Type':'text/html'});
        // res.write(myData)
    }

})

server2.listen(2000);
console.log('Server is running ')







// Rename 
/*
let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url == "/"){


        fs.rename('demo.txt', 'demoNew.txt', function (err) {

            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename Fail');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename Success');
                res.end();
            }

        })
    }

})

server2.listen(2000);
console.log('Server is running ');

*/






// File Rename Sync 


/*
let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if(req.url=="/"){
        
      let err =   fs.renameSync('demoNew.txt', 'demoNewSync.txt')

        if(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("File Rename fail")
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('File Rename Success sync');
            res.end();
        }
    }
})



server.listen(3000);
console.log('Server Rename Running ')

*/





// Delete File Async 


/*
let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url == "/"){

        fs.unlink('deleteA.txt', function(err) {
            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Delete Fail');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Delete Success');
                res.end();
            }

        })
    }
})

server2.listen(4000);
console.log('Server is running ');


*/


// Sync Delete file 

// Delete File Sync 
/*
let fs = require('fs');
let http = require('http');

let server2 = http.createServer(function (req, res) {
    if(req.url == "/"){

       let err =  fs.unlinkSync('sync-delete-file.txt')
            if(err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Delete Fail');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Delete Success');
                res.end();
            }
    }
})

server2.listen(4000);
console.log('Server is running ');


*/




// exist file sync 


// Sync FIle Exist 



let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if(req.url=="/"){

      let result =   fs.existsSync("demo.txt");

      if(result) {
        res.end('True')
      } else {
        res.end('False')
      }


    }
})


server.listen(5000);
console.log('exist server Running')