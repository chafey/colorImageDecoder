/*! colorImageDecoder - v0.1.0 - 2014-04-18 | (c) 2014 Chris Hafey | https://github.com/chafey/colorImageDecoder*/
var colorImageDecoder = (function (colorImageDecoder) {

    "use strict";

    if(colorImageDecoder === undefined) {
        colorImageDecoder = {};
    }

    function decodeRGB(rgbBuffer, rgbaBuffer) {
        if(rgbBuffer === undefined) {
            throw "decodeRGB: rgbBuffer must not be undefined";
        }
        if(rgbBuffer.length % 3 !== 0) {
            throw "decodeRGB: rgbBuffer length must be divisble by 3";
        }

        var numPixels = rgbBuffer.length / 3;
        var rgbIndex = 0;
        var rgbaIndex = 0;
        for(var i= 0; i < numPixels; i++) {
            rgbaBuffer[rgbaIndex++] = rgbBuffer[rgbIndex++]; // red
            rgbaBuffer[rgbaIndex++] = rgbBuffer[rgbIndex++]; // green
            rgbaBuffer[rgbaIndex++] = rgbBuffer[rgbIndex++]; // blue
            rgbaBuffer[rgbaIndex++] = 255; //alpha
        }

    }

    // module exports
    colorImageDecoder.decodeRGB = decodeRGB;

    return colorImageDecoder;
}(colorImageDecoder));
/**
 */
var colorImageDecoder = (function (colorImageDecoder) {

    "use strict";

    if(colorImageDecoder === undefined) {
        colorImageDecoder = {};
    }

    function decodeYBRFull(ybrBuffer, rgbaBuffer) {
        if(ybrBuffer === undefined) {
            throw "decodeRGB: ybrBuffer must not be undefined";
        }
        if(ybrBuffer.length % 3 !== 0) {
            throw "decodeRGB: ybrBuffer length must be divisble by 3";
        }

        var numPixels = ybrBuffer.length / 3;
        var ybrIndex = 0;
        var rgbaIndex = 0;
        for(var i= 0; i < numPixels; i++) {
            var y = ybrBuffer[ybrIndex++];
            var cb = ybrBuffer[ybrIndex++];
            var cr = ybrBuffer[ybrIndex++];
            rgbaBuffer[rgbaIndex++] = y + 1.40200 * cr;// red
            rgbaBuffer[rgbaIndex++] = y - 0.34414 * cb - 0.71414 * cr; // green
            rgbaBuffer[rgbaIndex++] = y + 1.77200 * cb; // blue
            rgbaBuffer[rgbaIndex++] = 255; //alpha
        }

    }

    // module exports
    colorImageDecoder.decodeYBRFull = decodeYBRFull;

    return colorImageDecoder;
}(colorImageDecoder));