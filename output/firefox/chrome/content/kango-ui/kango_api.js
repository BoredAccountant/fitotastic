﻿(function(h){h.KangoAPI={_readyListeners:[],_readyFired:!1,createKangoProxy:function(a){var f=a.oop.createProxy(a),b=[];f.addMessageListener=function(c,d){if("opera"==a.browser.getName())var e=d,d=function(){var a;a:{try{a=""==document.location.href;break a}catch(c){}a=!0}a?g():e()};return this.baseObject.addMessageListener(c,d)?(b.push({name:c,listener:d}),!0):!1};f.removeMessageListener=function(a,d){if(this.baseObject.removeMessageListener(a,d))for(var e=0;e<b.length;e++)if(b[e].name==a&&b[e].listener==
d)return b.splice(e,1),!0;return!1};var g=function(){for(var c=0;c<b.length;c++)a.removeMessageListener(b[c].name,b[c].listener);b=[]};"undefined"!=typeof window.addEventListener?window.addEventListener("unload",function(){g()},!1):window.attachEvent("onunload",function(){g()});return f},onReady:function(a){this._readyFired?a():this._readyListeners.push(a)},closeWindow:function(){},fireReady:function(){for(var a=0;a<this._readyListeners.length;a++)this._readyListeners[a]();this._readyFired=!0}}})(window);


// Merged from /Users/Aaron/bin/kango/src/js/firefox/kango-ui/kango_api.part.js

window.addEventListener("DOMContentLoaded",function(){window.kango=KangoAPI.createKangoProxy(window.kango);KangoAPI.closeWindow=function(){kango.ui.browserButton.closePopup()};KangoAPI.fireReady()},!1);
