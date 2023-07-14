'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Input = require('./Input.js');

var Instructions = function Instructions() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "instructions"
  }, /*#__PURE__*/React__default.createElement("p", null, "Drag and drop or ", /*#__PURE__*/React__default.createElement(Input, null)));
};

module.exports = Instructions;
