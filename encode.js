const encodeImage = require('./lib/encode.js');
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

if (process.argv.length < 4) {
    console.log("Please provide a text to encode");
    return;
}


const filename=process.argv[2];
const text=process.argv[3];

encodeImage(text, 11, 15, 15, filename).then(function (result) {
    console.log(result);
});
