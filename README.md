
# colorcoder


colorcoder is a experimental endcoder / decoder

![data matrix](https://raw.githubusercontent.com/andreas83/colorcoder/main/screenshot/final.png)


```
node encode.js // encodes a string into an image - color data matrix (screenshot/final.png)
node decode.js // decodes the color matrix back to a string
node encode-cli.js //mainly for debuging
```

demo:

![a demo of a text encooded into a color matrix](https://github.com/andreas83/colorcoder/raw/main/screenshot/example.png)


biggest challenge

* color correction of several different input devices (i.e. webcams, errors or fragments due compression)
* locating the datamatrix in a bigger picture 
