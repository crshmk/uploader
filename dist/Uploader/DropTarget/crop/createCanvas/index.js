'use strict';

var getCropPoints = require('./getCropPoints.js');
var getDimensions = require('./getDimensions.js');

/**
  * use an unmounted canvas to crop the image 
  * find the x,y points on the loaded image to use as the top left corner of the crop 
  * draw the image from that point at 0,0 on the canvas
  * 
  * @param {HTMLImageElement} loadedImage
  *
  * @return {HTMLCanvasElement}
**/
var createCanvas = function createCanvas(loadedImage) {
  var dimensions = getDimensions(loadedImage);
  var canvas = document.createElement('canvas');
  canvas.width = dimensions.croppedWidth;
  canvas.height = dimensions.croppedHeight;
  var _getCropPoints = getCropPoints(dimensions),
    cropX = _getCropPoints.cropX,
    cropY = _getCropPoints.cropY;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(loadedImage, cropX, cropY);
  return canvas;
};

module.exports = createCanvas;
