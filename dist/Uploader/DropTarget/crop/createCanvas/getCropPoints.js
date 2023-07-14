'use strict';

/**
  * get the x and y coords on the loaded image to be drawn at 0, 0 on the canvas
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  * 
  * @param {Object} dimensions { croppedHeight, croppedWidth, loadedHeight, loadedWidth }
  *
  * @return {Object} {cropX: Number, cropY: Number}
**/
var getCropPoints = function getCropPoints(dimensions) {
  var croppedHeight = dimensions.croppedHeight,
    croppedWidth = dimensions.croppedWidth,
    loadedHeight = dimensions.loadedHeight,
    loadedWidth = dimensions.loadedWidth;
  var cropX = (croppedWidth - loadedWidth) * 0.5;
  var cropY = (croppedHeight - loadedHeight) * 0.5;
  return {
    cropX: cropX,
    cropY: cropY
  };
};

module.exports = getCropPoints;
