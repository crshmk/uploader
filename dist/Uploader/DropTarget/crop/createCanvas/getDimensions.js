"use strict";var croppedAspectRatio=1,getLoadedDimensions=function(e){var t=e.naturalWidth;return{loadedHeight:e.naturalHeight,loadedWidth:t}},getDimensions=function(e){var e=getLoadedDimensions(e),t=e.loadedHeight,e=e.loadedWidth,d=e,o=t,i=e/t;return croppedAspectRatio<i?d=t*croppedAspectRatio:i<croppedAspectRatio&&(o=e/croppedAspectRatio),{croppedHeight:o,croppedWidth:d,loadedHeight:t,loadedWidth:e}};module.exports=getDimensions;
