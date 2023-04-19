const decodeImage = require('./lib/decode.js');
const fs = require('fs');


//check if file exists
if (process.argv.length < 3) {
    console.log("Please provide a file name");
    return;
}
if(!fs.existsSync(process.argv[2])){
    console.log("File does not exist");
    return;
}
const filename=process.argv[2];

decodeImage(filename, 15, 15).then(function (result) {
    console.log(result);
});
