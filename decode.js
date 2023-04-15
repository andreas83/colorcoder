//Description: This file is used to decode the image and get the data encoded in the image
//@todo find a way to locate the data on a larger image and calculate the number of rows and columns dynamically


const file="screenshot/final.png"

const sharp = require('sharp');
const hexToRgb = require('./lib/hexToRgb');
var colorMatrix = require("cli-color/lib/xterm-colors");

const tileSizeH = 5;
const tileSizeW = 5;


//get the image size
sharp(file).metadata().then(function(metadata) {
    console.log(metadata.width, metadata.height);
    //get the number of rows and columns
    var columns = metadata.width / tileSizeW;
    var rows = metadata.height / tileSizeH;
   
    //get the number of tiles
    var tiles = columns * rows;
    

    var top = 0;
    var left = 0;
    var output = [];
   
    for (let index = 0; index < tiles; index++) {
        sharp(file).extract({ left: left, top: top, width: tileSizeW, height: tileSizeH }).png().toBuffer().then(function(data){
            //get the dominant color of the tile
            sharp(data).stats().then(function(stats){
                 
                 const { r, g, b } = stats.dominant;
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
                 output[index]=closestColors[0].index;
            }).then
            (function(){
                console.log(output);
                const decodedString = output.toString().split(",").map((x) => String.fromCharCode(x)).join("");
                console.log(decodedString);
            });
        });

       
            
        left = left + tileSizeW;
        if(left >= metadata.width){
            left = 0;
            top = top + tileSizeH;
        }
  
    }
});

