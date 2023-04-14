
# colorcoder


colorcoder is a experimental endcoder / decoder

![data matrix](https://raw.githubusercontent.com/andreas83/colorcoder/main/screenshot/final.png)


```
node encode.js // encodes a string into a color data matrix (cli - mainly for debugging)
node encode2Image.js //encodes a string into a color data matrix (screenshot/final.png)
node decode.js // proof of concept for decoding data pixel
```

demo:

![a demo of a text encooded into a color matrix](https://github.com/andreas83/colorcoder/raw/main/screenshot/example.png)


biggest challenges for decoding are color correction of several different input devices (i.e. webcams, errors or fragments due compression)
