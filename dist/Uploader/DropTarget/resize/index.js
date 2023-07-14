'use strict';

var Hermite = require('./Hermite.js');

var hermite = new Hermite();
var maxSize = 500;
var getMaxSize = function getMaxSize(fileSize) {
  return Math.min(fileSize, maxSize);
};
var resize = function resize(size, onLoad) {
  return function (canvas) {
    var heightWidth = getMaxSize(size);
    hermite.resample(canvas, heightWidth, heightWidth, true, function () {
      var dataUrl = canvas.toDataURL('image/jpeg');
      canvas.toBlob(function (blob) {
        onLoad({
          blob: blob,
          dataUrl: dataUrl
        });
      }, 'jpeg');
    });
  };
};

module.exports = resize;
