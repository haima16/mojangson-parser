!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mojangson=t():e.mojangson=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(2)),o=r(n(3)),i=r(n(4)),f=r(n(5));t.default=function(e){return e.startsWith("[")&&e.endsWith("]")?o.default(e):e.startsWith("{")&&e.endsWith("}")?i.default(e):e.startsWith("'")&&e.endsWith("'")?f.default(e):u.default(e)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(0));t.default=u.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e[e.length-1];return'"'==e[0]&&'"'==t?e.substring(1,e.length-1):e}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(0));t.default=function(e){for(var t=[],n="start",r=0,o="",i=!1,f=0;f<e.length;f++){var l=e[f];if('"'===l&&(i=!i),!i){if(" "===l)continue;"{"===l||"["===l?r++:"}"!==l&&"]"!==l||r--}if("start"!==n){if("element"===n){if((","===l||"]"===l)&&r<=1&&!i){if(0===o.length&&t.length)continue;var s=u.default(o);t.push(s),o="";continue}o+=l}}else{if("["!==l)throw new Error(f+", "+l);n="element"}}return t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(0));t.default=function(e){for(var t={},n="start",r="",o="",i=0,f=!1,l=!1,s=0;s<e.length;s++){var a=e[s];if('"'!==a||l||(f=!f),"'"!==a||f||(l=!l),!f||!l){if(" "===a)continue;"{"===a||"["===a?i++:"}"!==a&&"]"!==a||i--}if("start"!==n)if("key"!==n){if("value"===n){if((","===a||"}"===a)&&i<=1){if(!f&&!l){n="key",i&&"}"===a&&(o+=a),t[r]=u.default(o),r="",o="";continue}if(f)throw new Error("'"+o+"' missing quote before '"+a+"'");if(l)throw new Error("'"+o+"' missing single quote before '"+a+"'")}o+=a}}else{if(":"===a&&i<=1){if(r){n="value";continue}throw new Error("whitespace can not be key")}if(","===a)continue;r+=a}else{if("{"!==a)throw new Error("'"+e+"' missing '{'");n="key"}}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.substring(1,e.length-1)}}]).default}));