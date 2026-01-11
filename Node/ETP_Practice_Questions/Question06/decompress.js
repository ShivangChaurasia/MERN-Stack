const fs = require('fs')
const zlib = require('zlib')

const deinput = fs.createReadStream("exm.gz");
const deoutput = fs.createWriteStream("exm_de.txt");

deinput.pipe(zlib.createGunzip()).pipe(deoutput);
console.log("File Decompressed Sucessfully")