'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');

var DragDropContext = /*#__PURE__*/React.createContext();
var useDragDrop = function useDragDrop() {
  return React.useContext(DragDropContext);
};
var noop = function noop() {};
var DragDropProvider = function DragDropProvider(props) {
  var _useState = React.useState({}),
    _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
    file = _useState2[0],
    _setFile = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _rollupPluginBabelHelpers.slicedToArray(_useState3, 2),
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

exports.DragDropProvider = DragDropProvider;
exports.default = useDragDrop;
