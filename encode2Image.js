// Description: Encode a string to a matrix of colors and save the result as an image

const input = "This string will be encoded to a matrix of colors and then decoded back to the original string.";
const encode = new TextEncoder().encode(input);

var tileSize = 10;
var rows = 15;


const hexToRgb = require('./lib/hexToRgb');
const colorMatrix = require("cli-color/lib/xterm-colors");
const sharp = require('sharp');


const encode3 = encode.reduce((acc, cur, i) => {
    if (i % rows == 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
}, []);





 const image=sharp({
    create: {
        width: tileSize * rows,
        height: encode3.length*tileSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
}).png();

var top = 0;
var left = 0;

const composite = [];
encode3.forEach(element => {

    element.forEach((e, i) => {
        console.log(hexToRgb(colorMatrix[e]), left, top)

        composite.push(
            {
                input: { create: { width: tileSize, height: tileSize, channels: 4, background: hexToRgb(colorMatrix[e]) } },
                left: left,
                top: top,
                
              
            }
        );

        
        left = left + tileSize;
       
    });

    top = top + tileSize;
    left = 0;

});


image.composite(composite);

image.toFile(`screenshot/final.png`).then((info) => {
    console.log(info)
    });