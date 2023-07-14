'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.disableDragDrop = disableDragDrop;
exports.enableDragDrop = enableDragDrop;
