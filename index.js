!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";function r(e,t){if(!e)return[];var n=[];for(var r in e)"function"==typeof t?t(r)&&n.push(r):n.push(r);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.keysOf=r,t.selectObject=function e(t,n){if(!t)return t;if("function"==typeof n){var o=r(t,n);return e(t,o)}return Array.isArray(n)&&n.length?n.reduce(function(e,n){return n in t&&(e[n]=t[n]),e},{}):t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.Base=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(3)),r(n(6)),r(n(9))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.app=r.app;var o=n(5);t.IApp=o.IApp},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.app=function(e){var t=new e,n=r.selectObject(t,function(e){return"constructor"!==e});App(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.IApp=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);t.component=r.component,t.method=r.method,t.ccomponent=r.ccomponent,t.observer=r.observer;var o=n(8);t.BaseComponent=o.BaseComponent},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(e){return function(t){return function(n){var o=new n,u=e?e(o):o,c=o.methods||{},i=r.selectObject(u,function(e){return"constructor"!==e&&!(e in c)});Object.assign(i,t),Component(i)}}}t.method=function(e,t,n){e.methods=e.methods||{},e.methods[t]=n.value},t.observer=function(e){return function(t,n,r){t.observers=t.observers||{},t.observers[e]=r.value}},t.ccomponent=o,t.component=function(e){return o()(e)}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t}(n(1).Base);t.BaseComponent=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.page=r.page,t.cpage=r.cpage;var o=n(11);t.BasePage=o.BasePage},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(e){return function(t){var n=new t,o="function"==typeof e?e(n):n,u=r.selectObject(o,function(e){return"constructor"!==e});Page(u)}}t.cpage=o,t.page=function(e){return o()(e)}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t}(n(1).Base);t.BasePage=u}]));
//# sourceMappingURL=index.js.map