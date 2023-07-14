'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./DropInstructions/index.js');
var useDragDrop = require('../useDragDrop.js');
var ramjam = require('ramjam');
var Overlay = require('./Overlay.js');
var Preview = require('./Preview.js');

var useDropTargetClassName = function useDropTargetClassName() {
  var _useDragDrop = useDragDrop.default(),
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
  }, /*#__PURE__*/React__default.createElement(Preview, null), /*#__PURE__*/React__default.createElement(index, null)), /*#__PURE__*/React__default.createElement(Overlay, null));
};

module.exports = DropTarget;
