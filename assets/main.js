!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INDEX_MODES=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),i=n(3);t.default=r.default,t.INDEX_MODES=i.INDEX_MODES},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(n(7));t.default=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.indexMode,o=n.tokenizePattern,s=n.caseSensitive;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexDocument=function(e,n){return t._search.indexDocument(e,n),t},this.search=function(e){return t._search.search(e)},this.terminate=function(){t._search.terminate()},"undefined"!=typeof window&&window.Worker?this._search=new i.default({indexMode:a,tokenizePattern:o,caseSensitive:s}):this._search=new r.SearchUtility({indexMode:a,tokenizePattern:o,caseSensitive:s})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SearchUtility=t.INDEX_MODES=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4)),i=n(5);t.default=r.default,t.INDEX_MODES=i.INDEX_MODES,t.SearchUtility=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=function(e){return e&&e.__esModule?e:{default:e}}(n(6));var o=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.indexMode,o=void 0===r?i.INDEX_MODES.ALL_SUBSTRINGS:r,s=n.tokenizePattern,u=void 0===s?/\s+/:s,c=n.caseSensitive,d=void 0!==c&&c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexDocument=function(e,n){return t._uids[e]=!0,t._tokenize(t._sanitize(n)).forEach(function(n){t._expandToken(n).forEach(function(n){t._searchIndex.indexDocument(n,e)})}),t},this.search=function(e){if(e){var n=t._tokenize(t._sanitize(e));return t._searchIndex.search(n)}return Object.keys(t._uids)},this.terminate=function(){},this._indexMode=o,this._tokenizePattern=u,this._caseSensitive=d,this._searchIndex=new a.default,this._uids={}}return r(e,[{key:"getIndexMode",value:function(){return this._indexMode}},{key:"getTokenizePattern",value:function(){return this._tokenizePattern}},{key:"getCaseSensitive",value:function(){return this._caseSensitive}},{key:"setIndexMode",value:function(e){if(Object.keys(this._uids).length>0)throw Error("indexMode cannot be changed once documents have been indexed");this._indexMode=e}},{key:"setTokenizePattern",value:function(e){this._tokenizePattern=e}},{key:"setCaseSensitive",value:function(e){this._caseSensitive=e}},{key:"_expandToken",value:function(e){switch(this._indexMode){case i.INDEX_MODES.EXACT_WORDS:return[e];case i.INDEX_MODES.PREFIXES:return this._expandPrefixTokens(e);case i.INDEX_MODES.ALL_SUBSTRINGS:default:return this._expandAllSubstringTokens(e)}}},{key:"_expandAllSubstringTokens",value:function(e){var t=[];try{for(var n=0,r=e.length;n<r;++n)for(var i="",a=n;a<r;++a)i+=e.charAt(a),t.push(i)}catch(t){console.error('Unable to parse token "'+e+'" '+t)}return t}},{key:"_expandPrefixTokens",value:function(e){var t=[];try{for(var n=0,r=e.length;n<r;++n)t.push(e.substr(0,n+1))}catch(t){console.error('Unable to parse token "'+e+'" '+t)}return t}},{key:"_sanitize",value:function(e){return this._caseSensitive?e.trim():e.trim().toLocaleLowerCase()}},{key:"_tokenize",value:function(e){return e.split(this._tokenizePattern).filter(function(e){return e})}}]),e}();t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INDEX_MODES={ALL_SUBSTRINGS:"ALL_SUBSTRINGS",EXACT_WORDS:"EXACT_WORDS",PREFIXES:"PREFIXES"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tokenToUidMap={}}return n(e,[{key:"indexDocument",value:function(e,t){this.tokenToUidMap[e]||(this.tokenToUidMap[e]={}),this.tokenToUidMap[e][t]=t}},{key:"search",value:function(e){var t=this,n={},r=!1;e.forEach(function(e){var i=t.tokenToUidMap[e]||{};if(r)for(var a in n)i[a]||delete n[a];else for(var o in r=!0,i)n[o]=i[o]});var i=[];for(var a in n)i.push(n[a]);return i}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(8));t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(n(9));var a=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r.indexMode,o=r.tokenizePattern,s=r.caseSensitive,u=r.WorkerClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexDocument=function(e,n){return t._worker.postMessage({method:"indexDocument",text:n,uid:e}),t},this.search=function(e){return new Promise(function(n,r){var a=i.default.v4(),o={callbackId:a,complete:!1,error:null,reject:r,resolve:n,results:null};t._worker.postMessage({method:"search",query:e,callbackId:a}),t._callbackQueue.push(o),t._callbackIdMap[a]=o})},this.terminate=function(){t._worker.terminate()},u||(u=n(11)),this._callbackQueue=[],this._callbackIdMap={},this._worker=new u,this._worker.onerror=function(e){if(e.data){var n=e.data,r=n.callbackId,i=n.error;t._updateQueue({callbackId:r,error:i})}else console.error(e)},this._worker.onmessage=function(e){var n=e.data,r=n.callbackId,i=n.results;t._updateQueue({callbackId:r,results:i})},a&&this._worker.postMessage({method:"setIndexMode",indexMode:a}),o&&this._worker.postMessage({method:"setTokenizePattern",tokenizePattern:o}),s&&this._worker.postMessage({method:"setCaseSensitive",caseSensitive:s})}return r(e,[{key:"_updateQueue",value:function(e){var t=e.callbackId,n=e.error,r=e.results,i=this._callbackIdMap[t];for(i.complete=!0,i.error=n,i.results=r;this._callbackQueue.length;){var a=this._callbackQueue[0];if(!a.complete)break;this._callbackQueue.shift(),delete this._callbackIdMap[a.callbackId],a.error?a.reject(a.error):a.resolve(a.results)}}}]),e}();t.default=a},function(e,t,n){for(var r=n(10),i=[],a={},o=0;o<256;o++)i[o]=(o+256).toString(16).substr(1),a[i[o]]=o;function s(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var u=r(),c=[1|u[0],u[1],u[2],u[3],u[4],u[5]],d=16383&(u[6]<<8|u[7]),l=0,f=0;function h(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[i+o]=a[o];return t||s(a)}var p=h;p.v1=function(e,t,n){var r=t&&n||0,i=t||[],a=void 0!==(e=e||{}).clockseq?e.clockseq:d,o=void 0!==e.msecs?e.msecs:(new Date).getTime(),u=void 0!==e.nsecs?e.nsecs:f+1,h=o-l+(u-f)/1e4;if(h<0&&void 0===e.clockseq&&(a=a+1&16383),(h<0||o>l)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=o,f=u,d=a;var p=(1e4*(268435455&(o+=122192928e5))+u)%4294967296;i[r++]=p>>>24&255,i[r++]=p>>>16&255,i[r++]=p>>>8&255,i[r++]=255&p;var _=o/4294967296*1e4&268435455;i[r++]=_>>>8&255,i[r++]=255&_,i[r++]=_>>>24&15|16,i[r++]=_>>>16&255,i[r++]=a>>>8|128,i[r++]=255&a;for(var v=e.node||c,k=0;k<6;k++)i[r+k]=v[k];return t||s(i)},p.v4=h,p.parse=function(e,t,n){var r=t&&n||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){i<16&&(t[r+i++]=a[e])});i<16;)t[r+i++]=0;return t},p.unparse=s,e.exports=p},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var i=new Uint8Array(16);n=function(){return r.getRandomValues(i),i}}if(!n){var a=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=n}).call(t,function(){return this}())},function(e,t,n){e.exports=function(){return n(12)('/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\texports: {},\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = "";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\t\n\tvar _util = __webpack_require__(1);\n\t\n\t/**\n\t * Search entry point to web worker.\n\t * Builds search index and performs searches on separate thread from the ui.\n\t */\n\t\n\tvar searchUtility = new _util.SearchUtility();\n\t\n\tself.addEventListener("message", function (event) {\n\t  var data = event.data;\n\t  var method = data.method;\n\t\n\t\n\t  switch (method) {\n\t    case "indexDocument":\n\t      var uid = data.uid,\n\t          text = data.text;\n\t\n\t\n\t      searchUtility.indexDocument(uid, text);\n\t      break;\n\t    case "search":\n\t      var callbackId = data.callbackId,\n\t          query = data.query;\n\t\n\t\n\t      var results = searchUtility.search(query);\n\t\n\t      self.postMessage({ callbackId: callbackId, results: results });\n\t      break;\n\t    case "setIndexMode":\n\t      var indexMode = data.indexMode;\n\t\n\t\n\t      searchUtility.setIndexMode(indexMode);\n\t      break;\n\t    case "setTokenizePattern":\n\t      var tokenizePattern = data.tokenizePattern;\n\t\n\t\n\t      searchUtility.setTokenizePattern(tokenizePattern);\n\t      break;\n\t    case "setCaseSensitive":\n\t      var caseSensitive = data.caseSensitive;\n\t\n\t\n\t      searchUtility.setCaseSensitive(caseSensitive);\n\t      break;\n\t  }\n\t}, false);\n\n/***/ },\n/* 1 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\t\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\texports.SearchUtility = exports.INDEX_MODES = undefined;\n\t\n\tvar _SearchUtility = __webpack_require__(2);\n\t\n\tvar _SearchUtility2 = _interopRequireDefault(_SearchUtility);\n\t\n\tvar _constants = __webpack_require__(3);\n\t\n\tfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\t\n\texports.default = _SearchUtility2.default;\n\texports.INDEX_MODES = _constants.INDEX_MODES;\n\texports.SearchUtility = _SearchUtility2.default;\n\n/***/ },\n/* 2 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\t\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\t\n\tvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\t\n\tvar _constants = __webpack_require__(3);\n\t\n\tvar _SearchIndex = __webpack_require__(4);\n\t\n\tvar _SearchIndex2 = _interopRequireDefault(_SearchIndex);\n\t\n\tfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\t\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\t\n\t/**\n\t * Synchronous client-side full-text search utility.\n\t * Forked from JS search (github.com/bvaughn/js-search).\n\t */\n\tvar SearchUtility = function () {\n\t\n\t  /**\n\t   * Constructor.\n\t   *\n\t   * @param indexMode See #setIndexMode\n\t   * @param tokenizePattern See #setTokenizePattern\n\t   * @param caseSensitive See #setCaseSensitive\n\t   */\n\t  function SearchUtility() {\n\t    var _this = this;\n\t\n\t    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t        _ref$indexMode = _ref.indexMode,\n\t        indexMode = _ref$indexMode === undefined ? _constants.INDEX_MODES.ALL_SUBSTRINGS : _ref$indexMode,\n\t        _ref$tokenizePattern = _ref.tokenizePattern,\n\t        tokenizePattern = _ref$tokenizePattern === undefined ? /\\s+/ : _ref$tokenizePattern,\n\t        _ref$caseSensitive = _ref.caseSensitive,\n\t        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive;\n\t\n\t    _classCallCheck(this, SearchUtility);\n\t\n\t    this.indexDocument = function (uid, text) {\n\t      _this._uids[uid] = true;\n\t\n\t      var fieldTokens = _this._tokenize(_this._sanitize(text));\n\t\n\t      fieldTokens.forEach(function (fieldToken) {\n\t        var expandedTokens = _this._expandToken(fieldToken);\n\t\n\t        expandedTokens.forEach(function (expandedToken) {\n\t          _this._searchIndex.indexDocument(expandedToken, uid);\n\t        });\n\t      });\n\t\n\t      return _this;\n\t    };\n\t\n\t    this.search = function (query) {\n\t      if (!query) {\n\t        return Object.keys(_this._uids);\n\t      } else {\n\t        var tokens = _this._tokenize(_this._sanitize(query));\n\t\n\t        return _this._searchIndex.search(tokens);\n\t      }\n\t    };\n\t\n\t    this.terminate = function () {};\n\t\n\t    this._indexMode = indexMode;\n\t    this._tokenizePattern = tokenizePattern;\n\t    this._caseSensitive = caseSensitive;\n\t\n\t    this._searchIndex = new _SearchIndex2.default();\n\t    this._uids = {};\n\t  }\n\t\n\t  /**\n\t   * Returns a constant representing the current index mode.\n\t   */\n\t\n\t\n\t  _createClass(SearchUtility, [{\n\t    key: "getIndexMode",\n\t    value: function getIndexMode() {\n\t      return this._indexMode;\n\t    }\n\t\n\t    /**\n\t     * Returns a constant representing the current tokenize pattern.\n\t     */\n\t\n\t  }, {\n\t    key: "getTokenizePattern",\n\t    value: function getTokenizePattern() {\n\t      return this._tokenizePattern;\n\t    }\n\t\n\t    /**\n\t     * Returns a constant representing the current case-sensitive bit.\n\t     */\n\t\n\t  }, {\n\t    key: "getCaseSensitive",\n\t    value: function getCaseSensitive() {\n\t      return this._caseSensitive;\n\t    }\n\t\n\t    /**\n\t     * Adds or updates a uid in the search index and associates it with the specified text.\n\t     * Note that at this time uids can only be added or updated in the index, not removed.\n\t     *\n\t     * @param uid Uniquely identifies a searchable object\n\t     * @param text Text to associate with uid\n\t     */\n\t\n\t\n\t    /**\n\t     * Searches the current index for the specified query text.\n\t     * Only uids matching all of the words within the text will be accepted.\n\t     * If an empty query string is provided all indexed uids will be returned.\n\t     *\n\t     * Document searches are case-insensitive (e.g. "search" will match "Search").\n\t     * Document searches use substring matching (e.g. "na" and "me" will both match "name").\n\t     *\n\t     * @param query Searchable query text\n\t     * @return Array of uids\n\t     */\n\t\n\t  }, {\n\t    key: "setIndexMode",\n\t\n\t\n\t    /**\n\t     * Sets a new index mode.\n\t     * See util/constants/INDEX_MODES\n\t     */\n\t    value: function setIndexMode(indexMode) {\n\t      if (Object.keys(this._uids).length > 0) {\n\t        throw Error("indexMode cannot be changed once documents have been indexed");\n\t      }\n\t\n\t      this._indexMode = indexMode;\n\t    }\n\t\n\t    /**\n\t     * Sets a new tokenize pattern (regular expression)\n\t     */\n\t\n\t  }, {\n\t    key: "setTokenizePattern",\n\t    value: function setTokenizePattern(pattern) {\n\t      this._tokenizePattern = pattern;\n\t    }\n\t\n\t    /**\n\t     * Sets a new case-sensitive bit\n\t     */\n\t\n\t  }, {\n\t    key: "setCaseSensitive",\n\t    value: function setCaseSensitive(caseSensitive) {\n\t      this._caseSensitive = caseSensitive;\n\t    }\n\t\n\t    /**\n\t     *  Added to make class adhere to interface. Add cleanup code as needed.\n\t     */\n\t\n\t  }, {\n\t    key: "_expandToken",\n\t\n\t\n\t    /**\n\t     * Index strategy based on \'all-substrings-index-strategy.ts\' in github.com/bvaughn/js-search/\n\t     *\n\t     * @private\n\t     */\n\t    value: function _expandToken(token) {\n\t      switch (this._indexMode) {\n\t        case _constants.INDEX_MODES.EXACT_WORDS:\n\t          return [token];\n\t        case _constants.INDEX_MODES.PREFIXES:\n\t          return this._expandPrefixTokens(token);\n\t        case _constants.INDEX_MODES.ALL_SUBSTRINGS:\n\t        default:\n\t          return this._expandAllSubstringTokens(token);\n\t      }\n\t    }\n\t  }, {\n\t    key: "_expandAllSubstringTokens",\n\t    value: function _expandAllSubstringTokens(token) {\n\t      var expandedTokens = [];\n\t\n\t      // String.prototype.charAt() may return surrogate halves instead of whole characters.\n\t      // When this happens in the context of a web-worker it can cause Chrome to crash.\n\t      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.\n\t      // Resources:\n\t      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt\n\t      // https://mathiasbynens.be/notes/javascript-unicode\n\t      try {\n\t        for (var i = 0, length = token.length; i < length; ++i) {\n\t          var substring = "";\n\t\n\t          for (var j = i; j < length; ++j) {\n\t            substring += token.charAt(j);\n\t            expandedTokens.push(substring);\n\t          }\n\t        }\n\t      } catch (error) {\n\t        console.error("Unable to parse token \\"" + token + "\\" " + error);\n\t      }\n\t\n\t      return expandedTokens;\n\t    }\n\t  }, {\n\t    key: "_expandPrefixTokens",\n\t    value: function _expandPrefixTokens(token) {\n\t      var expandedTokens = [];\n\t\n\t      // String.prototype.charAt() may return surrogate halves instead of whole characters.\n\t      // When this happens in the context of a web-worker it can cause Chrome to crash.\n\t      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.\n\t      // Resources:\n\t      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt\n\t      // https://mathiasbynens.be/notes/javascript-unicode\n\t      try {\n\t        for (var i = 0, length = token.length; i < length; ++i) {\n\t          expandedTokens.push(token.substr(0, i + 1));\n\t        }\n\t      } catch (error) {\n\t        console.error("Unable to parse token \\"" + token + "\\" " + error);\n\t      }\n\t\n\t      return expandedTokens;\n\t    }\n\t\n\t    /**\n\t     * @private\n\t     */\n\t\n\t  }, {\n\t    key: "_sanitize",\n\t    value: function _sanitize(string) {\n\t      return this._caseSensitive ? string.trim() : string.trim().toLocaleLowerCase();\n\t    }\n\t\n\t    /**\n\t     * @private\n\t     */\n\t\n\t  }, {\n\t    key: "_tokenize",\n\t    value: function _tokenize(text) {\n\t      return text.split(this._tokenizePattern).filter(function (text) {\n\t        return text;\n\t      }); // Remove empty tokens\n\t    }\n\t  }]);\n\t\n\t  return SearchUtility;\n\t}();\n\t\n\texports.default = SearchUtility;\n\n/***/ },\n/* 3 */\n/***/ function(module, exports) {\n\n\t"use strict";\n\t\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\tvar INDEX_MODES = exports.INDEX_MODES = {\n\t  // Indexes for all substring searches (e.g. the term "cat" is indexed as "c", "ca", "cat", "a", "at", and "t").\n\t  // Based on \'all-substrings-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/all-substrings-index-strategy.ts\n\t  ALL_SUBSTRINGS: "ALL_SUBSTRINGS",\n\t\n\t  // Indexes for exact word matches only.\n\t  // Based on \'exact-word-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/exact-word-index-strategy.ts\n\t  EXACT_WORDS: "EXACT_WORDS",\n\t\n\t  // Indexes for prefix searches (e.g. the term "cat" is indexed as "c", "ca", and "cat" allowing prefix search lookups).\n\t  // Based on \'prefix-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/prefix-index-strategy.ts\n\t  PREFIXES: "PREFIXES"\n\t};\n\n/***/ },\n/* 4 */\n/***/ function(module, exports) {\n\n\t"use strict";\n\t\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\t\n\tvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\t\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\t\n\t/**\n\t * Maps search tokens to uids using a trie structure.\n\t */\n\tvar SearchIndex = function () {\n\t  function SearchIndex() {\n\t    _classCallCheck(this, SearchIndex);\n\t\n\t    this.tokenToUidMap = {};\n\t  }\n\t\n\t  /**\n\t   * Maps the specified token to a uid.\n\t   *\n\t   * @param token Searchable token (e.g. "road")\n\t   * @param uid Identifies a document within the searchable corpus\n\t   */\n\t\n\t\n\t  _createClass(SearchIndex, [{\n\t    key: "indexDocument",\n\t    value: function indexDocument(token, uid) {\n\t      if (!this.tokenToUidMap[token]) {\n\t        this.tokenToUidMap[token] = {};\n\t      }\n\t\n\t      this.tokenToUidMap[token][uid] = uid;\n\t    }\n\t\n\t    /**\n\t     * Finds uids that have been mapped to the set of tokens specified.\n\t     * Only uids that have been mapped to all tokens will be returned.\n\t     *\n\t     * @param tokens Array of searchable tokens (e.g. ["long", "road"])\n\t     * @return Array of uids that have been associated with the set of search tokens\n\t     */\n\t\n\t  }, {\n\t    key: "search",\n\t    value: function search(tokens) {\n\t      var _this = this;\n\t\n\t      var uidMap = {};\n\t      var initialized = false;\n\t\n\t      tokens.forEach(function (token) {\n\t        var currentUidMap = _this.tokenToUidMap[token] || {};\n\t\n\t        if (!initialized) {\n\t          initialized = true;\n\t\n\t          for (var _uid in currentUidMap) {\n\t            uidMap[_uid] = currentUidMap[_uid];\n\t          }\n\t        } else {\n\t          for (var _uid2 in uidMap) {\n\t            if (!currentUidMap[_uid2]) {\n\t              delete uidMap[_uid2];\n\t            }\n\t          }\n\t        }\n\t      });\n\t\n\t      var uids = [];\n\t      for (var _uid3 in uidMap) {\n\t        uids.push(uidMap[_uid3]);\n\t      }\n\t\n\t      return uids;\n\t    }\n\t  }]);\n\t\n\t  return SearchIndex;\n\t}();\n\t\n\texports.default = SearchIndex;\n\n/***/ }\n/******/ ]);\n//# sourceMappingURL=2ef0afcacb6f46b34be5.worker.js.map',n.p+"2ef0afcacb6f46b34be5.worker.js")}},function(e,t){var n=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var r;try{(r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),r=r.getBlob()}catch(t){r=new Blob([e])}return new Worker(n.createObjectURL(r))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}}])},function(e,t,n){"use strict";n.r(t);var r=n(0);const i=new(n.n(r).a),a={};function o(e){i.search(e).then(t=>{$("#searchResultsList").empty(),e?t.length?(t.forEach(e=>$("#searchResultsList").append(`\n        <a href="${e}" class="list-group-item list-group-item-action">${a[e]}</a>\n      `)),$("#searchResults").collapse("show")):$("#searchResultsList").append('\n        <li class="list-group-item list-group-item-light">Nothing found</li>\n      '):$("#searchResults").collapse("hide")})}!function(){const e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&function(e){e.forEach(e=>{const t=e.categories.map(e=>`cat:${e}`);i.indexDocument(e.url,t+e.content),a[e.url]=e.title})}(JSON.parse(this.responseText))},e.open("GET","/assets/content.json",!0),e.send()}(),document.querySelector("#search").addEventListener("input",function(){o(document.querySelector("#search").value)});const s=document.querySelector("#postCategories");s&&s.addEventListener("click",function(e){o(`cat:${e.target.innerText}`),window.scroll({behavior:"smooth",left:0,top:0})})}]);