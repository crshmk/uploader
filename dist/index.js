'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ramjam = require('ramjam');

//  Disable default browser functionality that displays a file in a new tab on drop
var events = ['dragend', 'dragexit', 'dragleave', 'dragover', 'drop'];
var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};
var disableEvent = function disableEvent(event) {
  return window.addEventListener(event, preventDefault);
};
var enableEvent = function enableEvent(event) {
  return window.removeEventListener(event, preventDefault);
};
var disableDragDrop = function disableDragDrop() {
  return events.forEach(disableEvent);
};
var enableDragDrop = function enableDragDrop() {
  return events.forEach(enableEvent);
};

var DropIcon = function DropIcon() {
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "63.0273",
    height: "62.7881"
  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("rect", {
    height: "62.7881",
    opacity: "0",
    width: "63.0273",
    x: "0",
    y: "0"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M59.0283 4.10156C55.542 0.615234 50.6201 0.0683594 44.7754 0.0683594L18.1494 0.0683594C12.4072 0.0683594 7.48535 0.615234 3.99902 4.10156C0.512695 7.58789 0 12.4756 0 18.1836L0 44.5703C0 50.415 0.512695 55.2686 3.99902 58.7549C7.48535 62.2412 12.4072 62.7881 18.2178 62.7881L44.7754 62.7881C50.6201 62.7881 55.542 62.2412 59.0283 58.7549C62.5146 55.2686 63.0273 50.415 63.0273 44.5703L63.0273 18.2861C63.0273 12.4414 62.5146 7.55371 59.0283 4.10156ZM57.5244 17.3291L57.5244 45.4932C57.5244 49.0479 57.0801 52.6709 54.9951 54.7559C52.9443 56.8066 49.2529 57.2852 45.7324 57.2852L17.2949 57.2852C13.7744 57.2852 10.083 56.8066 7.99805 54.7559C5.94727 52.6709 5.50293 49.0479 5.50293 45.4932L5.50293 17.4316C5.50293 13.8428 5.94727 10.1514 7.99805 8.10059C10.083 6.01562 13.8086 5.57129 17.3975 5.57129L45.7324 5.57129C49.2529 5.57129 52.9443 6.0498 54.9951 8.10059C57.0801 10.1855 57.5244 13.8086 57.5244 17.3291ZM31.5479 13.9795C30.0781 13.9795 29.0186 15.0391 29.0186 16.543L29.0186 33.6328L29.2578 40.8447L25.8398 36.7432L21.7725 32.6416C21.3281 32.1631 20.7129 31.8896 19.9609 31.8896C18.5596 31.8896 17.5 32.9492 17.5 34.3506C17.5 35.0684 17.7051 35.6836 18.1836 36.1279L29.5996 47.4756C30.2832 48.1592 30.8301 48.4668 31.5479 48.4668C32.334 48.4668 32.915 48.125 33.5645 47.4756L44.9805 36.1279C45.4248 35.6836 45.6641 35.0684 45.6641 34.3506C45.6641 32.9492 44.5703 31.8896 43.1689 31.8896C42.417 31.8896 41.8018 32.1289 41.3574 32.6416L37.3242 36.7432L33.8721 40.8789L34.1113 33.6328L34.1113 16.543C34.1113 15.0391 33.0518 13.9795 31.5479 13.9795Z",
    fill: "#121212",
    fillOpacity: "0.85"
  })));
};

var DropInstructions = function DropInstructions() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "drop-instructions"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(DropIcon, null)), /*#__PURE__*/React__default.createElement("p", null, "Drop file"));
};

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DragDropContext = /*#__PURE__*/React.createContext();
var useDragDrop = function useDragDrop() {
  return React.useContext(DragDropContext);
};
var noop = function noop() {};
var DragDropProvider = function DragDropProvider(props) {
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    _setFile = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDragging = _useState4[0],
    setIsDragging = _useState4[1];
  var onDragEnter = function onDragEnter() {
    return setIsDragging(true);
  };
  var onDragLeave = function onDragLeave() {
    return setIsDragging(false);
  };
  var setFile = function setFile(file) {
    _setFile(file);
    setIsDragging(false);
  };
  var onLoad = props.onLoad || noop;
  var ctx = {
    currentUrl: props.currentUrl,
    file: file,
    isDragging: isDragging,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onLoad: onLoad,
    setFile: setFile
  };
  return /*#__PURE__*/React__default.createElement(DragDropContext.Provider, {
    value: ctx
  }, props.children);
};

var Overlay = function Overlay() {
  var _useDragDrop = useDragDrop(),
    onDragEnter = _useDragDrop.onDragEnter,
    onDragLeave = _useDragDrop.onDragLeave,
    setFile = _useDragDrop.setFile;
  var onDrop = function onDrop(e) {
    var files = e.dataTransfer.files;
    if (ramjam.isAbsent(files)) return;
    setFile(files[0]);
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "overlay",
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDragOver: function onDragOver() {},
    onDrop: onDrop
  });
};

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
      var canvas = createCanvas(loadedImage);
      var dataUrl = canvas.toDataURL('image/jpeg');
      ref.current.src = dataUrl;
      resize(canvas);
    };
    var url = URL.createObjectURL(file);
    loadedImage.src = url;
    return url;
  });
}

/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 *
 * not published on npm
 */
function Hermite_class() {
  var cores;
  var workers_archive = [];
  var workerBlobURL;

  /**
   * contructor
   */
  this.init = function () {
    cores = navigator.hardwareConcurrency || 4;
  }();

  /**
   * Returns CPU cores count
   * 
   * @returns {int}
   */
  this.getCores = function () {
    return cores;
  };

  /**
   * Hermite resize. Detect cpu count and use best option for user.
   * 
   * @param {HtmlElement} canvas
   * @param {int} width
   * @param {int} height
   * @param {boolean} resize_canvas if true, canvas will be resized. Optional.
   * @param {boolean} on_finish finish handler. Optional.
   */
  this.resample_auto = function (canvas, width, height, resize_canvas, on_finish) {
    var cores = this.getCores();
    if (!!window.Worker && cores > 1) {
      //workers supported and we have at least 2 cpu cores - using multithreading
      this.resample(canvas, width, height, resize_canvas, on_finish);
    } else {
      //1 cpu version
      this.resample_single(canvas, width, height, true);
      if (on_finish != undefined) {
        on_finish();
      }
    }
  };

  /**
   * Hermite resize. Resize actual image.
   * 
   * @param {string} image_id
   * @param {int} width
   * @param {int} height optional.
   * @param {int} percentages optional.
   * @param {string} multi_core optional.
   */
  this.resize_image = function (image_id, width, height, percentages, multi_core) {
    var img = document.getElementById(image_id);

    //create temp canvas
    var temp_canvas = document.createElement("canvas");
    temp_canvas.width = img.width;
    temp_canvas.height = img.height;
    var temp_ctx = temp_canvas.getContext("2d");

    //draw image
    temp_ctx.drawImage(img, 0, 0);

    //prepare size
    if (width == undefined && height == undefined && percentages != undefined) {
      width = img.width / 100 * percentages;
      height = img.height / 100 * percentages;
    }
    if (height == undefined) {
      var ratio = img.width / width;
      height = img.height / ratio;
    }
    width = Math.round(width);
    height = Math.round(height);
    var on_finish = function on_finish() {
      var dataURL = temp_canvas.toDataURL();
      img.width = width;
      img.height = height;
      img.src = dataURL;
      dataURL = null;
      temp_canvas = null;
    };

    //resize
    if (multi_core == undefined || multi_core == true) {
      this.resample(temp_canvas, width, height, true, on_finish);
    } else {
      this.resample_single(temp_canvas, width, height, true);
      on_finish();
    }
  };

  /**
   * Hermite resize, multicore version - fast image resize/resample using Hermite filter.
   * 
   * @param {HtmlElement} canvas
   * @param {int} width
   * @param {int} height
   * @param {boolean} resize_canvas if true, canvas will be resized. Optional.
   * @param {boolean} on_finish finish handler. Optional.
   */
  this.resample = function (canvas, width, height, resize_canvas, on_finish) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    var ratio_h = height_source / height;

    //stop old workers
    if (workers_archive.length > 0) {
      for (var c = 0; c < cores; c++) {
        if (workers_archive[c] != undefined) {
          workers_archive[c].terminate();
          delete workers_archive[c];
        }
      }
    }
    workers_archive = new Array(cores);
    var ctx = canvas.getContext("2d");

    //prepare source and target data for workers
    var data_part = [];
    var block_height = Math.ceil(height_source / cores / 2) * 2;
    var end_y = -1;
    for (var c = 0; c < cores; c++) {
      //source
      var offset_y = end_y + 1;
      if (offset_y >= height_source) {
        //size too small, nothing left for this core
        continue;
      }
      end_y = offset_y + block_height - 1;
      end_y = Math.min(end_y, height_source - 1);
      var current_block_height = block_height;
      current_block_height = Math.min(block_height, height_source - offset_y);

      //console.log('source split: ', '#'+c, offset_y, end_y, 'height: '+current_block_height);

      data_part[c] = {};
      data_part[c].source = ctx.getImageData(0, offset_y, width_source, block_height);
      data_part[c].target = true;
      data_part[c].start_y = Math.ceil(offset_y / ratio_h);
      data_part[c].height = current_block_height;
    }

    //clear and resize canvas
    if (resize_canvas === true) {
      canvas.width = width;
      canvas.height = height;
    } else {
      ctx.clearRect(0, 0, width_source, height_source);
    }

    //start
    var workers_in_use = 0;
    for (var c = 0; c < cores; c++) {
      if (data_part[c] == undefined) {
        //no job for this worker
        continue;
      }
      workers_in_use++;
      var my_worker = new Worker(workerBlobURL);
      workers_archive[c] = my_worker;
      my_worker.onmessage = function (event) {
        workers_in_use--;
        var core = event.data.core;
        workers_archive[core].terminate();
        delete workers_archive[core];

        //draw
        var height_part = Math.ceil(data_part[core].height / ratio_h);
        data_part[core].target = ctx.createImageData(width, height_part);
        data_part[core].target.data.set(event.data.target);
        ctx.putImageData(data_part[core].target, 0, data_part[core].start_y);
        if (workers_in_use <= 0) {
          //finish
          if (on_finish != undefined) {
            on_finish();
          }
        }
      };
      var objData = {
        width_source: width_source,
        height_source: data_part[c].height,
        width: width,
        height: Math.ceil(data_part[c].height / ratio_h),
        core: c,
        source: data_part[c].source.data.buffer
      };
      my_worker.postMessage(objData, [objData.source]);
    }
  };

  // Build a worker from an anonymous function body - purpose is to avoid separate file
  workerBlobURL = window.URL.createObjectURL(new Blob(['(', function () {
    //begin worker
    onmessage = function onmessage(event) {
      var core = event.data.core;
      var width_source = event.data.width_source;
      var height_source = event.data.height_source;
      var width = event.data.width;
      var height = event.data.height;
      var ratio_w = width_source / width;
      var ratio_h = height_source / height;
      var ratio_w_half = Math.ceil(ratio_w / 2);
      var ratio_h_half = Math.ceil(ratio_h / 2);
      var source = new Uint8ClampedArray(event.data.source);
      var target_size = width * height * 4;
      var target_memory = new ArrayBuffer(target_size);
      var target = new Uint8ClampedArray(target_memory, 0, target_size);
      //calculate
      for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
          var x2 = (i + j * width) * 4;
          var weight = 0;
          var weights = 0;
          var weights_alpha = 0;
          var gx_r = 0;
          var gx_g = 0;
          var gx_b = 0;
          var gx_a = 0;
          var center_y = j * ratio_h;
          var xx_start = Math.floor(i * ratio_w);
          var xx_stop = Math.ceil((i + 1) * ratio_w);
          var yy_start = Math.floor(j * ratio_h);
          var yy_stop = Math.ceil((j + 1) * ratio_h);
          xx_stop = Math.min(xx_stop, width_source);
          yy_stop = Math.min(yy_stop, height_source);
          for (var yy = yy_start; yy < yy_stop; yy++) {
            var dy = Math.abs(center_y - yy) / ratio_h_half;
            var center_x = i * ratio_w;
            var w0 = dy * dy; //pre-calc part of w
            for (var xx = xx_start; xx < xx_stop; xx++) {
              var dx = Math.abs(center_x - xx) / ratio_w_half;
              var w = Math.sqrt(w0 + dx * dx);
              if (w >= 1) {
                //pixel too far
                continue;
              }
              //hermite filter
              weight = 2 * w * w * w - 3 * w * w + 1;
              //calc source pixel location
              var pos_x = 4 * (xx + yy * width_source);
              //alpha
              gx_a += weight * source[pos_x + 3];
              weights_alpha += weight;
              //colors
              if (source[pos_x + 3] < 255) weight = weight * source[pos_x + 3] / 250;
              gx_r += weight * source[pos_x];
              gx_g += weight * source[pos_x + 1];
              gx_b += weight * source[pos_x + 2];
              weights += weight;
            }
          }
          target[x2] = gx_r / weights;
          target[x2 + 1] = gx_g / weights;
          target[x2 + 2] = gx_b / weights;
          target[x2 + 3] = gx_a / weights_alpha;
        }
      }

      //return
      var objData = {
        core: core,
        target: target
      };
      postMessage(objData, [target.buffer]);
    };
    //end worker
  }.toString(), ')()'], {
    type: 'application/javascript'
  }));

  /**
   * Hermite resize - fast image resize/resample using Hermite filter. 1 cpu version!
   * 
   * @param {HtmlElement} canvas
   * @param {int} width
   * @param {int} height
   * @param {boolean} resize_canvas if true, canvas will be resized. Optional.
   */
  this.resample_single = function (canvas, width, height, resize_canvas) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);
    var ctx = canvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;
    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        var x2 = (i + j * width) * 4;
        var weight = 0;
        var weights = 0;
        var weights_alpha = 0;
        var gx_r = 0;
        var gx_g = 0;
        var gx_b = 0;
        var gx_a = 0;
        var center_y = j * ratio_h;
        var xx_start = Math.floor(i * ratio_w);
        var xx_stop = Math.ceil((i + 1) * ratio_w);
        var yy_start = Math.floor(j * ratio_h);
        var yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (var yy = yy_start; yy < yy_stop; yy++) {
          var dy = Math.abs(center_y - yy) / ratio_h_half;
          var center_x = i * ratio_w;
          var w0 = dy * dy; //pre-calc part of w
          for (var xx = xx_start; xx < xx_stop; xx++) {
            var dx = Math.abs(center_x - xx) / ratio_w_half;
            var w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            var pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    //clear and resize canvas
    if (resize_canvas === true) {
      canvas.width = width;
      canvas.height = height;
    } else {
      ctx.clearRect(0, 0, width_source, height_source);
    }

    //draw
    ctx.putImageData(img2, 0, 0);
  };
}

var hermite = new Hermite_class();
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

var Preview = function Preview() {
  var ref = React.useRef(null);
  var _useDragDrop = useDragDrop(),
    currentUrl = _useDragDrop.currentUrl,
    file = _useDragDrop.file,
    onLoad = _useDragDrop.onLoad;
  React.useEffect(function () {
    if (ramjam.isAbsent(file)) return;
    crop(ref, file).then(resize(file.size, onLoad));
  }, [file]);
  return ramjam.allAbsent([currentUrl, file]) ? null : /*#__PURE__*/React__default.createElement("img", {
    ref: ref,
    src: currentUrl
  });
};

var useDropTargetClassName = function useDropTargetClassName() {
  var _useDragDrop = useDragDrop(),
    file = _useDragDrop.file,
    isDragging = _useDragDrop.isDragging;
  return ['drop-target', isDragging ? 'is-dragging' : '', ramjam.isPresent(file) ? 'has-file' : ''].filter(ramjam.isPresent).join(' ');
};
var DropTarget = function DropTarget() {
  var dropTargetClass = useDropTargetClassName();
  return /*#__PURE__*/React__default.createElement("div", {
    className: dropTargetClass
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bg"
  }, /*#__PURE__*/React__default.createElement(Preview, null), /*#__PURE__*/React__default.createElement(DropInstructions, null)), /*#__PURE__*/React__default.createElement(Overlay, null));
};

var Input = function Input() {
  var _useDragDrop = useDragDrop(),
    setFile = _useDragDrop.setFile;
  var onChange = function onChange(e) {
    var files = e.target.files;
    if (ramjam.isAbsent(files)) return;
    setFile(files[0]);
  };
  return /*#__PURE__*/React__default.createElement("label", null, "select file", /*#__PURE__*/React__default.createElement("input", {
    type: "file",
    onChange: onChange
  }));
};

var Instructions = function Instructions() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "instructions"
  }, /*#__PURE__*/React__default.createElement("p", null, "Drag and drop or ", /*#__PURE__*/React__default.createElement(Input, null)));
};

var Uploader = function Uploader(_ref) {
  var currentUrl = _ref.currentUrl,
    onLoad = _ref.onLoad;
  React.useEffect(function () {
    disableDragDrop();
    return enableDragDrop;
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "uploader"
  }, /*#__PURE__*/React__default.createElement(DragDropProvider, {
    onLoad: onLoad,
    currentUrl: currentUrl
  }, /*#__PURE__*/React__default.createElement(DropTarget, null), /*#__PURE__*/React__default.createElement(Instructions, null)));
};

//export { disableDragDrop, enableDragDrop } from './disableDragDrop.js'
require('./index.css');

module.exports = Uploader;
