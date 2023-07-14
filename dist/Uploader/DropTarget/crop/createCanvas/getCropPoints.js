"use strict";var getCropPoints=function(o){var t=o.croppedHeight,e=o.croppedWidth,r=o.loadedHeight;return{cropX:.5*(e-o.loadedWidth),cropY:.5*(t-r)}};module.exports=getCropPoints;
