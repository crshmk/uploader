'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var useDragDrop = require('../useDragDrop.js');
var ramjam = require('ramjam');

var Overlay = function Overlay() {
  var _useDragDrop = useDragDrop.default(),
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

module.exports = Overlay;
