'use strict';

var index = require('./createCanvas/index.js');

/**
  * - draw a loaded image onto an unmounted canvas to crop it 
  * - create a dataUrl from the canvas 
  * - use a ref to set the preview img element's src attribute
  * - hand the dataUrl and a Blob to on onLoad callback passed into the api 
  *
  * @param {React ref} ref 
  * @param {File} file
  *
  * @return void
**/
function crop(ref, file) {
  return new Promise(function (resize) {
    var loadedImage = new Image();
    loadedImage.onload = function () {
      var canvas = index(loadedImage);
      var dataUrl = canvas.toDataURL('image/jpeg');
      ref.current.src = dataUrl;
      resize(canvas);
    };
    var url = URL.createObjectURL(file);
    loadedImage.src = url;
    return url;
  });
}

module.exports = crop;
