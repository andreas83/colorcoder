
# colorcoder


colorcoder is a experimental endcoder / decoder

![data matrix](https://raw.githubusercontent.com/andreas83/colorcoder/main/screenshot/final.png)


```
node encode.js test.png "This is just a test" // encodes a string into an image 
node decode.js test.png // decodes the image back to text

```

demo:

![a demo of a text encooded into a color matrix](https://github.com/andreas83/colorcoder/raw/main/screenshot/example.png)


biggest challenge

* color correction of several different input devices (i.e. webcams, errors or fragments due compression)
* locating the datamatrix in a bigger picture 
