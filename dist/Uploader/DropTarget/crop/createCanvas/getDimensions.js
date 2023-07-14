'use strict';

/**
  * get height and width of the uploaded and cropped images, respectively
  *
  * @param {HTMLImageElement} loadedImage
  *
  * @return (Object} { croppedHeight, croppedWidth, loadedHeight, loadedWidth }
  * 
  * dimension ideas from https://pqina.nl/blog/cropping-images-to-an-aspect-ratio-with-javascript/#cropping-the-image-to-a-square-aspect-ratio
 **/

// square
var croppedAspectRatio = 1;
var getLoadedDimensions = function getLoadedDimensions(loadedImage) {
  var loadedWidth = loadedImage.naturalWidth;
  var loadedHeight = loadedImage.naturalHeight;
  return {
    loadedHeight: loadedHeight,
    loadedWidth: loadedWidth
  };
};
var getDimensions = function getDimensions(loadedImage) {
  var _getLoadedDimensions = getLoadedDimensions(loadedImage),
    loadedHeight = _getLoadedDimensions.loadedHeight,
    loadedWidth = _getLoadedDimensions.loadedWidth;
  var croppedWidth = loadedWidth;
  var croppedHeight = loadedHeight;
  var loadedAspectRatio = loadedWidth / loadedHeight;
  if (loadedAspectRatio > croppedAspectRatio) {
    croppedWidth = loadedHeight * croppedAspectRatio;
  } else if (loadedAspectRatio < croppedAspectRatio) {
    croppedHeight = loadedWidth / croppedAspectRatio;
  }
  return {
    croppedHeight: croppedHeight,
    croppedWidth: croppedWidth,
    loadedHeight: loadedHeight,
    loadedWidth: loadedWidth
  };
};

module.exports = getDimensions;
