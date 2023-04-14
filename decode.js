// Description: Decode a image to get the color index
// @todo split the image into 4x4 matrix and then decode each pixel to get the color index and then decode the color index to get the encoded string


const sharp = require('sharp');
var colorMatrix = require("cli-color/lib/xterm-colors");
const hexToRgb = require('./lib/hexToRgb');

  

async function findIndexByImage(image) {
    const { dominant } = await sharp(image).stats();
    const { r, g, b } = dominant;
    
    var colorVector = [];
    colorMatrix.forEach((element, index) => {
        var rgb = hexToRgb(element);
        colorVector.
        push({
            index: index,
            hex: element,
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            distance: Math.sqrt(Math.pow(rgb.r - r, 2) + Math.pow(rgb.g - g, 2) + Math.pow(rgb.b - b, 2))
        });
        
    });
    
    colorVector.sort((a, b) => (a.distance > b.distance) ? 1 : -1);

    var closestColors = colorVector.slice(0, 1);
    console.log(closestColors);
    return closestColors[0].index;
}

findIndexByImage("screenshot/2.png");
