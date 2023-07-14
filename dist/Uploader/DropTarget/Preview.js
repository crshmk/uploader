'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var useDragDrop = require('../useDragDrop.js');
var ramjam = require('ramjam');
var index = require('./crop/index.js');
var index$1 = require('./resize/index.js');

var Preview = function Preview() {
  var ref = React.useRef(null);
  var _useDragDrop = useDragDrop.default(),
    file = _useDragDrop.file,
    onLoad = _useDragDrop.onLoad;
  React.useEffect(function () {
    if (ramjam.isAbsent(file)) return;
    index(ref, file).then(index$1(file.size, onLoad));
  }, [file]);
  return ramjam.isAbsent(file) ? null : /*#__PURE__*/React__default.createElement("img", {
    ref: ref
  });
};

module.exports = Preview;
