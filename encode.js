// Description: Encode a string to a matrix of colors and save the result as an image

const input = "This string will be encoded to a matrix of colors and then decoded back to the original string.";
const dstFile = "screenshot/final.png";


//dimension of the pixel inside the matrix (also need to be changed in decode.js)
const tileSizeH = 5;
const tileSizeW = 5;
const rows = 15;


const hexToRgb = require('./lib/hexToRgb');
const colorMatrix = require("cli-color/lib/xterm-colors");
const sharp = require('sharp');
const encode = new TextEncoder().encode(input);

//split the array into chunks (see rows)
const chunks = encode.reduce((acc, cur, i) => {
    if (i % rows == 0) acc.push([]); 
    acc[acc.length - 1].push(cur); 
    return acc;
}, []);

//create the empty image
const image = sharp({
    create: {
        width: tileSizeW * rows,
        height: chunks.length * tileSizeH,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
}).png();

var top = 0;
var left = 0;

const composite = [];
chunks.forEach(element => {

    element.forEach((e, i) => {
        console.log(hexToRgb(colorMatrix[e]), left, top)

        composite.push(
            {
                input: { create: { width: tileSizeW, height: tileSizeH, channels: 4, background: hexToRgb(colorMatrix[e]) } },
                left: left,
                top: top
            }
        );
        left = left + tileSizeW;
    });

    top = top + tileSizeH;
    left = 0;

});


image.composite(composite);

image.toFile(dstFile).then((info) => {
    console.log(info)
});