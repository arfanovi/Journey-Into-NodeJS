// console.log(module)


module.exports.add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;


module.exports.test = (a, b) => add(a. b) / sub(a, b);
// module.exports = test; 


/* or //another system or shorthand 
module.exports = {
    test,
    add
}
*/
// or // another system or shorthand 
// module.exports.test = test;
// module.exports.add = add;


// another system or shorthand 
exports.mul = (a, b) => a * b;



console.log(module);


/*
NOTE: 
The reason for this module concept is to create a module to make data visible to another module or to make the module visible.
*/


