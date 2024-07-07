


const path = require('path')

const myCurrentPath = __filename;

// console.log(path);



// ********************************
// identify path or my file name
// console.log(path.basename(myCurrentPath));



// **********************************
// Any file provide Extention like img.png, script.js any other
//   Now extract file 
    console.log(path.extname(myCurrentPath))
    // output = .js 




// **********************
let pathObj = {
    dir: 'user/local',
    name: 'testFile',
    ext: '.js'
}
console.log(path.format(pathObj));





// another absolute path ********************************
console.log(path.isAbsolute(myCurrentPath));
// output = true 

// Relation Path 
console.log(path.isAbsolute('./Math'));
// output  = false 


// Reason ... Platform Wise Define 
// in path.join then without platform
console.log(path.join('user','local','testFile' ,'.js'));



console.log(path.resolve(__dirname, 'scripts','test.js'));


// Parse a path return object
console.log(path.parse(myCurrentPath));
/*
output = 
{
    root: 'F:\\',
    dir: 'F:\\MERN\\Journey Into NodeJS',
    base: '05-NodePathModule.js',
    ext: '.js',
    name: '05-NodePathModule'
  }

  */