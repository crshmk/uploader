'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var useDragDrop = require('../useDragDrop.js');
var ramjam = require('ramjam');

var Input = function Input() {
  var _useDragDrop = useDragDrop.default(),
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

module.exports = Input;
