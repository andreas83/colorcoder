
# colorcoder


This is a fun side project that encodes and decodes strings into a color matrix. 
The idea behind this project is to take a string of text and convert it into a grid of colored squares. 
The resulting image can be used as a way to share information in a visually interesting and engaging way.

# How it Works
The encoder works by first converting the input string into an array of ASCII codes using TextEncoder. 
Then, the resulting array is split into chunks of a fixed size determined by rows.

Each chunk of ASCII codes is then used to create a row of squares in the resulting image. 
Each square is created using the hexToRgb function to convert an ASCII code into an RGB color code. The hexToRgb function takes a color code from the colorMatrix array, which contains 256 colors in hex format.

The size of each square is determined by tileSizeH and tileSizeW, and the number of squares in each row is determined by rows. These variables can be changed to modify the appearance of the resulting image.

Finally, the rows of squares are composited together using the sharp library, and the resulting image is saved to disk as a PNG file.







# How to Use

To encode a text into a image simply give encode.js two parameters (filename and string)
The resulting image will look like this:

![data matrix](https://raw.githubusercontent.com/andreas83/colorcoder/main/screenshot/final.png)


```
node encode.js test.png "This is just a test" // encodes a string into an image 
node decode.js test.png // decodes the image back to text

```


# Demo

[Online Demo https://codejungle.org/ ](https://codejungle.org/)
Web version is only for encoding, for decoding please use cli


# Deprecated 
this cli version is not available anymore

![a demo of a text encooded into a color matrix](https://github.com/andreas83/colorcoder/raw/main/screenshot/example.png)


# Future Improvements

Some potential improvements to this project could include:

* color correction of several different input devices (i.e. webcams, errors or fragments due compression)
* Locating the datamatrix on a bigger picture 
* Developing a web-based interface to make the encoding and decoding process more accessible to non-technical users.



# Conclusion
The Color Matrix Encoder/Decoder is a fun and unique way to encode and share information. Whether you're looking to share a secret message with friends or just want to experiment with a new form of data visualization, this project is a great starting point.
