//Description: This file is used to decode the image and get the data encoded in the image
//@todo find a way to locate the data on a larger image and calculate the number of rows and columns dynamically


// const file = "test.png"
// const tileSizeH = 10;
// const tileSizeW = 10;

// decodeImage(file, tileSizeW, tileSizeH).then(function (result) {
//     console.log(result);
// });

function decodeImage(file, tileSizeW, tileSizeH) {

    const sharp = require('sharp');
    const hexToRgb = require('./hexToRgb');
    const colorMatrix = require("./colorCodes");




    //get the image size
    var res = sharp(file).metadata().then(function (metadata) {
        //get the number of rows and columns
        var columns = metadata.width / tileSizeW;
        var rows = metadata.height / tileSizeH;

        //get the number of tiles
        var tiles = columns * rows;


        var top = 0;
        var left = 0;
        var output = [];
        var promises = [];
        for (let index = 0; index < tiles; index++) {
            promises.push(sharp(file).extract({ left: left, top: top, width: tileSizeW, height: tileSizeH }).png().toBuffer().then(function (data) {
                //get the dominant color of the tile
                return sharp(data).stats().then(function (stats) {

                    const { r, g, b } = stats.dominant;

                    //ignore the blank tiles
                    if (r == 8 && g == 8 && b == 8) {
                        return output.toString().split(",").map((x) => String.fromCharCode(x)).join("");
                    }

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
                    output[index] = closestColors[0].index;

                    var decodedString = output.toString().split(",").map((x) => String.fromCharCode(x)).join("");
                    return decodedString;
                });
            }));



            left = left + tileSizeW;
            if (left >= metadata.width) {
                left = 0;
                top = top + tileSizeH;
            }

        }
        return Promise.all(promises).then(function (values) {

            return (values[values.length - 1]);
        });

    }



    );
    return res.then(function (result) {
        return result;
    });
}
module.exports = decodeImage;