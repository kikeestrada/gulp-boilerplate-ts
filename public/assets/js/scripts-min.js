!function(){return function e(r,t,n){function o(s,c){if(!t[s]){if(!r[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=t[s]={exports:{}};r[s][0].call(f.exports,function(e){return o(r[s][1][e]||e)},f,f.exports,e,r,t,n)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}}()({1:[function(e,r,t){"use strict";(0,e("./modules/swDetecter").swDetecter)(),document.body.classList.contains("home")||document.body.classList.contains("page2")||document.body.classList.contains("page3")},{"./modules/swDetecter":2}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.swDetecter=function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(e){return console.log("Registro de SW exitoso",e)}).catch(function(e){return console.warn("Error al tratar de registrar el sw",e)})}},{}]},{},[1]);
//# sourceMappingURL=scripts-min.js.map
