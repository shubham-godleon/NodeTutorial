//GLOBALS IN NODE - NO WINDOW!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed
//setInterval and setTimeout

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(require);
console.log(process);
setInterval(() => {
    console.log('Hello World');
}, 1000);