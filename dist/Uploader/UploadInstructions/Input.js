"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),useDragDrop=require("../useDragDrop.js"),ramjam=require("ramjam"),Input=function(){var t=useDragDrop.default().setFile;return React__default.createElement("label",null,"select file",React__default.createElement("input",{type:"file",onChange:function(e){e=e.target.files;ramjam.isAbsent(e)||t(e[0])}}))};module.exports=Input;