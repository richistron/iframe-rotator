!function t(i,n,e){function r(s,u){if(!n[s]){if(!i[s]){var h="function"==typeof require&&require;if(!u&&h)return h(s,!0);if(o)return o(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[s]={exports:{}};i[s][0].call(f.exports,function(t){var n=i[s][1][t];return r(n?n:t)},f,f.exports,t,i,n,e)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<e.length;s++)r(e[s]);return r}({1:[function(t,i,n){"use strict";function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,n,e){return n&&t(i.prototype,n),e&&t(i,e),i}}(),o=function(){function t(i,n){e(this,t),this.position=0,this.$el=$(i),this.urls=n.urls,this.delay=1e3*n.delay,this.width=n.width,this.height=n.height,this.showUrl()}return r(t,[{key:"showUrl",value:function(){this.$el.html('\n      <iframe src="'+this.urls[this.position]+'"\n        style="border: 0;\n        width: '+this.width+";\n        height: "+this.height+';">\n      </iframe>\n    '),this.next()}},{key:"next",value:function(){var t=this;this.getPosition(),setTimeout(function(){t.showUrl()},this.delay)}},{key:"getPosition",value:function(){this.position>=this.urls.length-1?this.position=0:this.position++}}]),t}();window.UrlLoader=o},{}]},{},[1]);