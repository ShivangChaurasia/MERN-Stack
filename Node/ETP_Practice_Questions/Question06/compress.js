const fs = require('fs')
const zlib = require('zlib')

const cominput = fs.createReadStream("exm.txt");
const comoutput = fs.createWriteStream("exm.gz");

cominput.pipe(zlib.createGzip()).pipe(comoutput);
console.log("File Compressed Sucessfully")