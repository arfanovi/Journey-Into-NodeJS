

const fs = require('fs');

fs.readFile('./test.json', (err, data) => {
    if(err){
       return console.log(err)
    }

    // console.log(data)

    // convert json file 
    let objData = JSON.parse(data);
    console.log(objData)
})