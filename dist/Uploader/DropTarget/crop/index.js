"use strict";var index=require("./createCanvas/index.js");function crop(a,r){return new Promise(function(n){var t=new Image,e=(t.onload=function(){var e=index(t),r=e.toDataURL("image/jpeg");a.current.src=r,n(e)},URL.createObjectURL(r));return t.src=e})}module.exports=crop;
