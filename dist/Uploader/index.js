'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var disableDragDrop = require('../disableDragDrop.js');
var useDragDrop = require('./useDragDrop.js');
var index = require('./DropTarget/index.js');
var index$1 = require('./UploadInstructions/index.js');

var Uploader = function Uploader(_ref) {
  var currentUrl = _ref.currentUrl,
    onLoad = _ref.onLoad;
  React.useEffect(function () {
    disableDragDrop.disableDragDrop();
    return disableDragDrop.enableDragDrop;
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "uploader"
  }, /*#__PURE__*/React__default.createElement(useDragDrop.DragDropProvider, {
    onLoad: onLoad,
    currentUrl: currentUrl
  }, /*#__PURE__*/React__default.createElement(index, null), /*#__PURE__*/React__default.createElement(index$1, null)));
};

module.exports = Uploader;
