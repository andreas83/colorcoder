var clc = require("cli-color");


const input="This string will be encoded to a matrix of colors and then decoded back to the original string.";

console.log(input);
process.stdout.write(clc.move.down(2));
process.stdout.write(clc.move.lineBegin);

const encode=new TextEncoder().encode(input);

const encode3 = encode.reduce((acc, cur, i) => {
    if (i % 12 == 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
}, []);

encode3.forEach(element => {

    element.forEach((e,i)=>{
        var msg=clc.xterm(e).bgXterm(0);
        element[i]=msg("████");
    });
    
    process.stdout.write(
    clc.columns([
      element
      
    ])
  );
  
});
process.stdout.write(clc.move.down(2));

process.stdout.write(encode.toString());

//decode
const decodedString = encode.toString().split(",").map((x) => String.fromCharCode(x)).join("");
process.stdout.write(clc.move.down(2));
process.stdout.write(clc.move.lineBegin);

process.stdout.write(decodedString.toString());
process.stdout.write(clc.move.down(2));
process.stdout.write(clc.move.lineBegin);
