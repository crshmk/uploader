'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var DropIcon = require('./DropIcon.js');

var DropInstructions = function DropInstructions() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "drop-instructions"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(DropIcon, null)), /*#__PURE__*/React__default.createElement("p", null, "Drop file"));
};

module.exports = DropInstructions;
