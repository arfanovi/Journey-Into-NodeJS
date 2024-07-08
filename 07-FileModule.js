
// a file write 
// a file read 

const fs = require('fs');


const testObj = {
    name: 'AH Ovi',
    email: 'ovi@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'BD'
    }
}

const data = JSON.stringify(testObj);
fs.writeFile('./test.json', data, (err) =>{

    if(err) {
        console.log(err)
    } else {
        console.log('File write successful')
    }
})





// console.log(data)