(self["webpackChunkapp2"] = self["webpackChunkapp2"] || []).push([[651],{

/***/ 8225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ bootstrap; },
  "mount": function() { return /* binding */ mount; }
});

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(2747);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(1250);
;// CONCATENATED MODULE: ./src/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var src = ({});
;// CONCATENATED MODULE: ./src/logo.svg
var _g;

var _excluded = (/* unused pure expression or super */ null && (["title", "titleId"]));

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 841.9 595.3",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React.createElement("g", {
    fill: "#61DAFB"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 420.9,
    cy: 296.5,
    r: 45.7
  }), /*#__PURE__*/React.createElement("path", {
    d: "M520.5 78.1z"
  }))));
}

var ForwardRef = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(SvgLogo)));
/* harmony default export */ var logo = (__webpack_require__.p + "static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg");

;// CONCATENATED MODULE: ./src/App.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var App = ({});
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 286 modules
var table = __webpack_require__(9139);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(6072);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 7 modules
var message = __webpack_require__(5669);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(5303);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 21 modules
var modal = __webpack_require__(478);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var es_tag = __webpack_require__(7528);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=5.2.0 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(5399);
// EXTERNAL MODULE: ./src/player.js
var player = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(7762);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ../micromodule/packages/core/lib/index.esm.js












var copyProperty = function copyProperty(to, from, property, ignoreNonConfigurable) {
  // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
  // `Function#prototype` is non-writable and non-configurable so can never be modified.
  if (property === 'length' || property === 'prototype') {
    return;
  } // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.


  if (property === 'arguments' || property === 'caller') {
    return;
  }

  var toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  var fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }

  Object.defineProperty(to, property, fromDescriptor);
}; // `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed


var canCopyProperty = function canCopyProperty(toDescriptor, fromDescriptor) {
  return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};

var changePrototype = function changePrototype(to, from) {
  var fromPrototype = Object.getPrototypeOf(from);

  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }

  Object.setPrototypeOf(to, fromPrototype);
};

var wrappedToString = function wrappedToString(withName, fromBody) {
  return "/* Wrapped ".concat(withName, "*/\n").concat(fromBody);
};

var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name'); // We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.

var changeToString = function changeToString(to, from, name) {
  var withName = name === '' ? '' : "with ".concat(name.trim(), "() ");
  var newToString = wrappedToString.bind(null, withName, from.toString()); // Ensure `to.toString.toString` is non-enumerable and has the same `same`

  Object.defineProperty(newToString, 'name', toStringName);
  Object.defineProperty(to, 'toString', (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, toStringDescriptor), {}, {
    value: newToString
  }));
};

function mimicFunction(to, from) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$ignoreNonConfigu = _ref.ignoreNonConfigurable,
      ignoreNonConfigurable = _ref$ignoreNonConfigu === void 0 ? false : _ref$ignoreNonConfigu;

  var name = to.name;

  var _iterator = (0,createForOfIteratorHelper/* default */.Z)(Reflect.ownKeys(from)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;
      copyProperty(to, from, property, ignoreNonConfigurable);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}

var cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import {setTimeout as delay} from 'node:timer/promises';
import pMemoize from 'p-memoize';
import got from 'got';

const memoizedGot = pMemoize(got);

await memoizedGot('https://sindresorhus.com');

// This call is cached
await memoizedGot('https://sindresorhus.com');

await delay(2000);

// This call is not cached as the cache has expired
await memoizedGot('https://sindresorhus.com');
```
*/

function pMemoize(fn) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$cacheKey = _ref2.cacheKey,
      cacheKey = _ref2$cacheKey === void 0 ? function (_ref3) {
    var _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 1),
        firstArgument = _ref4[0];

    return firstArgument;
  } : _ref2$cacheKey,
      _ref2$cache = _ref2.cache,
      cache = _ref2$cache === void 0 ? new Map() : _ref2$cache;

  // Promise objects can't be serialized so we keep track of them internally and only provide their resolved values to `cache`
  // `Promise<AsyncReturnType<FunctionToMemoize>>` is used instead of `ReturnType<FunctionToMemoize>` because promise properties are not kept
  var promiseCache = new Map();

  var memoized = function memoized() {
    var _this = this;

    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var key = cacheKey(arguments_);

    if (promiseCache.has(key)) {
      return promiseCache.get(key);
    }

    var promise = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
      var _promise, result;

      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.t0 = cache;

              if (!_context.t0) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return cache.has(key);

            case 5:
              _context.t0 = _context.sent;

            case 6:
              if (!_context.t0) {
                _context.next = 10;
                break;
              }

              _context.next = 9;
              return cache.get(key);

            case 9:
              return _context.abrupt("return", _context.sent);

            case 10:
              _promise = fn.apply(_this, arguments_);
              _context.next = 13;
              return _promise;

            case 13:
              result = _context.sent;
              _context.prev = 14;
              return _context.abrupt("return", result);

            case 16:
              _context.prev = 16;

              if (!cache) {
                _context.next = 20;
                break;
              }

              _context.next = 20;
              return cache.set(key, result);

            case 20:
              return _context.finish(16);

            case 21:
              _context.prev = 21;
              promiseCache.delete(key);
              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 21, 24], [14,, 16, 21]]);
    }))();

    promiseCache.set(key, promise);
    return promise;
  };

  mimicFunction(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}

function deferredPromise() {
  var rel, rej;
  var promise = new Promise(function (resolve, reject) {
    rel = resolve;
    rej = reject;
  });
  promise.resolve = rel;
  promise.reject = rej;
  return promise;
}

var rawWindow = window.__isZMF__ ? window.rawWindow : window;
var rawDoc = rawWindow.document;
var rawAppendChild = Node.prototype.appendChild;
var rawInsertBefore = Node.prototype.insertBefore;
rawDoc.createElement;

var emptyFn = function emptyFn() {};

var isString = function isString(p) {
  return Object.prototype.toString.call(p) === '[object String]';
};

var defer = Promise.resolve().then.bind(Promise.resolve());

var fetch = function () {
  var cache = {};
  return function fetchSource(url) {
    if (cache[url]) return Promise.resolve(cache[url]);
    return rawWindow.fetch(url, {
      mode: 'cors'
    }).then( /*#__PURE__*/function () {
      var _ref6 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(r) {
        var code;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return r.text();

              case 2:
                code = _context2.sent;
                return _context2.abrupt("return", cache[url] = {
                  code: code,
                  loaded: false
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
}();

var isAvailableUrl = function isAvailableUrl(url) {
  var showMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  try {
    new URL(url);
    return true;
  } catch (e) {
    if (showMsg) {
      log.error(e);
    }

    return false;
  }
};

var bindLexicalScope = function bindLexicalScope(code, proxyWindow, proxyDocument) {
  return new Function('window', 'document', "\n       ".concat(code, ";\n    ").trim())(proxyWindow, proxyDocument);
};

var pFetchSource = pMemoize(fetch);

var loadScript = function loadScript(url) {
  var defer = deferredPromise();
  var doc = rawWindow.document,
      scriptDomInstance;
  var scripts = rawWindow.document.getElementsByTagName('script'); // cache

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src === url) {
      scriptDomInstance = scripts[i];
      defer.resolve();
      break;
    }
  }

  if (!scriptDomInstance) {
    scriptDomInstance = doc.createElement('script');
    scriptDomInstance.src = url;

    scriptDomInstance.onload = function onload() {
      defer.resolve();
    };

    scriptDomInstance.onerror = function onError(e) {
      defer.reject(e);
    };

    doc.head.appendChild(scriptDomInstance);
  }

  return defer;
};

var pLoadScript = pMemoize(loadScript);

var pathJoin = function pathJoin(basePath, joinPath) {
  // 是带域名的绝对路径
  if (isAvailableUrl(joinPath, false)) {
    return joinPath;
  }

  var urlInfo = new URL(basePath); // https://a.com + /a/b.xxx

  if (/^\//.test(joinPath)) {
    return urlInfo.origin + joinPath;
  } // https://a.com/a/b/c.xxx + ./m/y.ttt


  if (/^.\//.test(joinPath)) {
    var paths = urlInfo.pathname.split('/');
    paths.pop();
    return urlInfo.origin + paths.join('/') + joinPath;
  } // https://a.com/a/b/c.xxx + ../../m/y.ttt


  if (/^(\.\.\/)/.test(joinPath)) {
    var parentLevelLength = (joinPath.match(/\.\.\//g) || []).length;

    var _paths = urlInfo.pathname.split('/');

    _paths.pop();

    var targetPath = joinPath.replace(/\.\.\//g, '');
    return urlInfo.origin + _paths.slice(0, _paths.length - parentLevelLength).join('/') + '/' + targetPath;
  }

  return joinPath;
};

var log = {
  info: function info(msg) {
    console.info("INFO: ".concat(msg));
  },
  warn: function warn(msg) {
    console.warn("WARN: ".concat(msg));
  },
  error: function error(msg) {
    console.error("ERROR: ".concat(msg));
  }
}; // http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

function parse(css, options) {
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   */

  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf('\n');
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string
   */


  Position.prototype.content = css;
  /**
   * Error `msg`.
   */

  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Parse stylesheet.
   */


  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }
  /**
   * Opening brace.
   */


  function open() {
    return match(/^{\s*/);
  }
  /**
   * Closing brace.
   */


  function close() {
    return match(/^}/);
  }
  /**
   * Parse ruleset.
   */


  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);

    while (css.length && css.charAt(0) != '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }

    return rules;
  }
  /**
   * Match `re` and return captures.
   */


  function match(re) {
    var m = re.exec(css);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(/^\s*/);
  }
  /**
   * Parse comments;
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   */


  function comment() {
    var pos = position();
    if ('/' != css.charAt(0) || '*' != css.charAt(1)) return;
    var i = 2;

    while ("" != css.charAt(i) && ('*' != css.charAt(i) || '/' != css.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if ("" === css.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }
  /**
   * Parse selector.
   */


  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) return;
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */

    var s = trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, "\u200C");
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      // add by yangtao
      // 把 html 换成 zmf-app
      // 吧 body 换成 zmf-app-body
      var patchedSelector = s;

      if (options.selectorsMap[s]) {
        patchedSelector = options.selectorsMap[patchedSelector];
      }

      return patchedSelector.replace(/\u200C/g, ',');
    }); // add by yangtao
    // .xxx .yyy => zmf-app[xxx=yy] .xxx .yyy

    if (options.scopeSelectorPrefix) {
      // :root => zmf-app[data-cid=xxx]
      s[0] = s[0] === ':root' ? options.scopeSelectorPrefix : options.scopeSelectorPrefix + ' ' + s[0];
    }

    return s;
  }
  /**
   * Parse declaration.
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return;
    prop = trim(prop[0]); // :

    if (!match(/^:\s*/)) return error("property missing ':'"); // val

    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    }); // ;

    match(/^[;\s]*/); // add by yangtao
    // 补全 css url 路径

    if (/url\(/.test(ret.value) && options.baseUrl) {
      // path 路径里不带, 空格, 单双引号
      ret.value = ret.value.replace(/url\(['"]*([^,\s'"]+)['"]*\)/gm, function (match, group) {
        return "url('".concat(pathJoin(options.baseUrl, group), "')");
      });
    }

    return ret;
  }
  /**
   * Parse declarations.
   */


  function declarations() {
    var decls = [];
    if (!open()) return error("missing '{'");
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    if (!close()) return error("missing '}'");
    return decls;
  }
  /**
   * Parse keyframe.
   */


  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) return;
    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }
  /**
   * Parse keyframes.
   */


  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) return;
    var vendor = m[1]; // identifier

    var m = match(/^([-\w]+)\s*/);
    if (!m) return error("@keyframes missing name");
    var name = m[1];
    if (!open()) return error("@keyframes missing '{'");
    var frame;
    var frames = comments();

    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) return error("@keyframes missing '}'");
    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }
  /**
   * Parse supports.
   */


  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);
    if (!m) return;
    var supports = trim(m[1]);
    if (!open()) return error("@supports missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@supports missing '}'");
    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }
  /**
   * Parse host.
   */


  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);
    if (!m) return;
    if (!open()) return error("@host missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@host missing '}'");
    return pos({
      type: 'host',
      rules: style
    });
  }
  /**
   * Parse media.
   */


  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);
    if (!m) return;
    var media = trim(m[1]);
    if (!open()) return error("@media missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@media missing '}'");
    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }
  /**
   * Parse custom-media.
   */


  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return;
    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }
  /**
   * Parse paged media.
   */


  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) return;
    var sel = selector() || [];
    if (!open()) return error("@page missing '{'");
    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@page missing '}'");
    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }
  /**
   * Parse document.
   */


  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;
    var vendor = trim(m[1]);
    var doc = trim(m[2]);
    if (!open()) return error("@document missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@document missing '}'");
    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }
  /**
   * Parse font-face.
   */


  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) return;
    if (!open()) return error("@font-face missing '{'");
    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@font-face missing '}'");
    return pos({
      type: 'font-face',
      declarations: decls
    });
  }
  /**
   * Parse import
   */


  var atimport = _compileAtrule('import');
  /**
   * Parse charset
   */


  var atcharset = _compileAtrule('charset');
  /**
   * Parse namespace
   */


  var atnamespace = _compileAtrule('namespace');
  /**
   * Parse non-block at-rules
   */


  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);
      if (!m) return;
      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  /**
   * Parse at rule.
   */


  function atrule() {
    if (css[0] != '@') return;
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }
  /**
   * Parse rule.
   */


  function rule() {
    var pos = position();
    var sel = selector();
    if (!sel) return error('selector missing');
    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
}
/**
 * Trim `str`.
 */


function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
/**
 * Adds non-enumerable parent node reference to each node.
 */


function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var k in obj) {
    var value = obj[k];

    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}
/**
 * Initialize a compiler.
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */


function Compiler$2(opts) {
  this.options = opts || {};
}
/**
 * Emit `str`
 */


Compiler$2.prototype.emit = function (str) {
  return str;
};
/**
 * Visit `node`.
 */


Compiler$2.prototype.visit = function (node) {
  return this[node.type](node);
};
/**
 * Map visit over array of `nodes`, optionally using a `delim`
 */


Compiler$2.prototype.mapVisit = function (nodes, delim) {
  var buf = '';
  delim = delim || '';

  for (var i = 0, length = nodes.length; i < length; i++) {
    buf += this.visit(nodes[i]);
    if (delim && i < length - 1) buf += this.emit(delim);
  }

  return buf;
};

function inherits$1(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
/**
 * Initialize a new `Compiler`.
 */


function Compiler$1(options) {
  Compiler$2.call(this, options);
}
/**
 * Inherit from `Base.prototype`.
 */


inherits$1(Compiler$1, Compiler$2);
/**
 * Compile `node`.
 */

Compiler$1.prototype.compile = function (node) {
  return node.stylesheet.rules.map(this.visit, this).join('');
};
/**
 * Visit comment node.
 */


Compiler$1.prototype.comment = function (node) {
  return this.emit('', node.position);
};
/**
 * Visit import node.
 */


Compiler$1.prototype.import = function (node) {
  return this.emit('@import ' + node.import + ';', node.position);
};
/**
 * Visit media node.
 */


Compiler$1.prototype.media = function (node) {
  return this.emit('@media ' + node.media, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit document node.
 */


Compiler$1.prototype.document = function (node) {
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;
  return this.emit(doc, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit charset node.
 */


Compiler$1.prototype.charset = function (node) {
  return this.emit('@charset ' + node.charset + ';', node.position);
};
/**
 * Visit namespace node.
 */


Compiler$1.prototype.namespace = function (node) {
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};
/**
 * Visit supports node.
 */


Compiler$1.prototype.supports = function (node) {
  return this.emit('@supports ' + node.supports, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit keyframes node.
 */


Compiler$1.prototype.keyframes = function (node) {
  return this.emit('@' + (node.vendor || '') + 'keyframes ' + node.name, node.position) + this.emit('{') + this.mapVisit(node.keyframes) + this.emit('}');
};
/**
 * Visit keyframe node.
 */


Compiler$1.prototype.keyframe = function (node) {
  var decls = node.declarations;
  return this.emit(node.values.join(','), node.position) + this.emit('{') + this.mapVisit(decls) + this.emit('}');
};
/**
 * Visit page node.
 */


Compiler$1.prototype.page = function (node) {
  var sel = node.selectors.length ? node.selectors.join(', ') : '';
  return this.emit('@page ' + sel, node.position) + this.emit('{') + this.mapVisit(node.declarations) + this.emit('}');
};
/**
 * Visit font-face node.
 */


Compiler$1.prototype['font-face'] = function (node) {
  return this.emit('@font-face', node.position) + this.emit('{') + this.mapVisit(node.declarations) + this.emit('}');
};
/**
 * Visit host node.
 */


Compiler$1.prototype.host = function (node) {
  return this.emit('@host', node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit custom-media node.
 */


Compiler$1.prototype['custom-media'] = function (node) {
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};
/**
 * Visit rule node.
 */


Compiler$1.prototype.rule = function (node) {
  var decls = node.declarations;
  if (!decls.length) return '';
  return this.emit(node.selectors.join(','), node.position) + this.emit('{') + this.mapVisit(decls) + this.emit('}');
};
/**
 * Visit declaration node.
 */


Compiler$1.prototype.declaration = function (node) {
  return this.emit(node.property + ':' + node.value, node.position) + this.emit(';');
}; // var inherits = require('inherits');


function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
/**
 * Initialize a new `Compiler`.
 */


function Compiler(options) {
  options = options || {};
  Compiler$2.call(this, options);
  this.indentation = options.indent;
}
/**
 * Inherit from `Base.prototype`.
 */


inherits(Compiler, Compiler$2);
/**
 * Compile `node`.
 */

Compiler.prototype.compile = function (node) {
  return this.stylesheet(node);
};
/**
 * Visit stylesheet node.
 */


Compiler.prototype.stylesheet = function (node) {
  return this.mapVisit(node.stylesheet.rules, '\n\n');
};
/**
 * Visit comment node.
 */


Compiler.prototype.comment = function (node) {
  return this.emit(this.indent() + '/*' + node.comment + '*/', node.position);
};
/**
 * Visit import node.
 */


Compiler.prototype.import = function (node) {
  return this.emit('@import ' + node.import + ';', node.position);
};
/**
 * Visit media node.
 */


Compiler.prototype.media = function (node) {
  return this.emit('@media ' + node.media, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit document node.
 */


Compiler.prototype.document = function (node) {
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;
  return this.emit(doc, node.position) + this.emit(' ' + ' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit charset node.
 */


Compiler.prototype.charset = function (node) {
  return this.emit('@charset ' + node.charset + ';', node.position);
};
/**
 * Visit namespace node.
 */


Compiler.prototype.namespace = function (node) {
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};
/**
 * Visit supports node.
 */


Compiler.prototype.supports = function (node) {
  return this.emit('@supports ' + node.supports, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit keyframes node.
 */


Compiler.prototype.keyframes = function (node) {
  return this.emit('@' + (node.vendor || '') + 'keyframes ' + node.name, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.keyframes, '\n') + this.emit(this.indent(-1) + '}');
};
/**
 * Visit keyframe node.
 */


Compiler.prototype.keyframe = function (node) {
  var decls = node.declarations;
  return this.emit(this.indent()) + this.emit(node.values.join(', '), node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(decls, '\n') + this.emit(this.indent(-1) + '\n' + this.indent() + '}\n');
};
/**
 * Visit page node.
 */


Compiler.prototype.page = function (node) {
  var sel = node.selectors.length ? node.selectors.join(', ') + ' ' : '';
  return this.emit('@page ' + sel, node.position) + this.emit('{\n') + this.emit(this.indent(1)) + this.mapVisit(node.declarations, '\n') + this.emit(this.indent(-1)) + this.emit('\n}');
};
/**
 * Visit font-face node.
 */


Compiler.prototype['font-face'] = function (node) {
  return this.emit('@font-face ', node.position) + this.emit('{\n') + this.emit(this.indent(1)) + this.mapVisit(node.declarations, '\n') + this.emit(this.indent(-1)) + this.emit('\n}');
};
/**
 * Visit host node.
 */


Compiler.prototype.host = function (node) {
  return this.emit('@host', node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit custom-media node.
 */


Compiler.prototype['custom-media'] = function (node) {
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};
/**
 * Visit rule node.
 */


Compiler.prototype.rule = function (node) {
  var indent = this.indent();
  var decls = node.declarations;
  if (!decls.length) return '';
  return this.emit(node.selectors.map(function (s) {
    return indent + s;
  }).join(',\n'), node.position) + this.emit(' {\n') + this.emit(this.indent(1)) + this.mapVisit(decls, '\n') + this.emit(this.indent(-1)) + this.emit('\n' + this.indent() + '}');
};
/**
 * Visit declaration node.
 */


Compiler.prototype.declaration = function (node) {
  return this.emit(this.indent()) + this.emit(node.property + ': ' + node.value, node.position) + this.emit(';');
};
/**
 * Increase, decrease or return current indentation.
 */


Compiler.prototype.indent = function (level) {
  this.level = this.level || 1;

  if (null != level) {
    this.level += level;
    return '';
  }

  return Array(this.level).join(this.indentation || '  ');
};
/**
 * Stringfy the given AST `node`.
 *
 * Options:
 *
 *  - `compress` space-optimized output
 *  - `sourcemap` return an object with `.code` and `.map`
 *
 * @param {Object} node
 * @param {Object} [options]
 * @return {String}
 * @api public
 */


function stringify(node, options) {
  options = options || {};
  var compiler = options.compress ? new Compiler$1(options) : new Compiler(options); // source maps
  // if (options.sourcemap) {
  //   var sourcemaps = require('./source-map-support');
  //   sourcemaps(compiler);
  //   var code = compiler.compile(node);
  //   compiler.applySourceMaps();
  //   var map = options.sourcemap === 'generator'
  //     ? compiler.map
  //     : compiler.map.toJSON();
  //   return { code: code, map: map };
  // }

  var code = compiler.compile(node);
  return code;
}

var css = {
  parse: parse,
  stringify: stringify
};
var appsMap = rawWindow.__ZMF_APPS__ || (rawWindow.__ZMF_APPS__ = new Map());

var setApp = function setApp(id, instance) {
  if (appsMap.has(id)) {
    log.error("App ".concat(id, " \u5DF2\u5B58\u5728, \u91CD\u590D\u5B9E\u4F8B\u5316\u5931\u8D25."));
    return false;
  }

  appsMap.set(id, instance);
  return true;
};

var getApp = function getApp(id) {
  return appsMap.get(id);
};

var getApps = function getApps() {
  return Array.from(appsMap.values());
};

var removeApp = function removeApp(id) {
  return appsMap.delete(id);
};

var currentRuningApp = '';

function setCurrentRuningApp(appId) {
  if (currentRuningApp === appId) return;
  currentRuningApp = appId;
  defer(function () {
    currentRuningApp = '';
  });
}

function getCurrentRuningApp() {
  return currentRuningApp;
}

function getModuleFactorys(containerId) {
  return rawWindow["__ZMF_".concat(containerId.toUpperCase(), "_WEBPACK_MODULES__")];
}

function getRemoteAppOriginWebpackRequire(containerId) {
  return rawWindow["__ZMF_".concat(containerId.toUpperCase(), "_WEBPACK_REQUIRE__")];
}

var federationModuleRequire = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function federationModuleRequire(options) {
    _classCallCheck(this, federationModuleRequire);

    this.cache = {};
    this.options = options;
    this.moduleFactorys = getModuleFactorys(this.options.containerId);
    this.bindedThisRequire = this.copyOriginRequireMethods(getRemoteAppOriginWebpackRequire(this.options.containerId));
  }

  _createClass(federationModuleRequire, [{
    key: "copyOriginRequireMethods",
    value: function copyOriginRequireMethods(webpackRequire) {
      // 传入 module factory 里执行防止 this 丢失
      var newRequire = this.require.bind(this);

      Object.keys(webpackRequire).forEach(function (key) {
        return newRequire[key] = webpackRequire[key];
      });
      newRequire.__containerId__ = this.options.containerId;
      return newRequire;
    }
  }, {
    key: "require",
    value: function require(mid) {
      // 模块 id 生产模式下可能是数字，要转成字符串，才能去 consumesIds 里查找
      var moduleId = typeof mid === 'number' ? '' + mid : mid;
      var remoteAppOriginWebpackRequire = getRemoteAppOriginWebpackRequire(this.options.containerId); //  "webpack/sharing/consume/default/xx/xx?4a07"

      if (remoteAppOriginWebpackRequire.f.consumes.consumesIds.includes(moduleId)) {
        return remoteAppOriginWebpackRequire(moduleId);
      }

      var cachedModule = this.cache[moduleId];
      var _this$options = this.options,
          proxyWindow = _this$options.proxyWindow,
          proxyDocument = _this$options.proxyDocument;
      var moduleFactorys = this.moduleFactorys;

      if (cachedModule !== undefined) {
        if (cachedModule.error !== undefined) throw cachedModule.error;
        return cachedModule.exports;
      }

      var webpackModule = this.cache[moduleId] = {
        id: moduleId,
        loaded: false,
        exports: {}
      };

      try {
        var factory = bindLexicalScope("return  ".concat(moduleFactorys[moduleId].toString()), proxyWindow, proxyDocument);
        var execOptions = {
          id: moduleId,
          module: webpackModule,
          factory: factory,
          // 传入 module factory 里执行下一个 require 防止 this 丢失
          require: this.bindedThisRequire
        }; // 这里做个兼容， 生产环境是没有 HRM 代码的

        (this.bindedThisRequire.i || []).forEach(function (handler) {
          return handler(execOptions);
        });
        execOptions.factory.call(webpackModule.exports, webpackModule, webpackModule.exports, execOptions.require);
      } catch (e) {
        webpackModule.error = e;
        throw e;
      }

      webpackModule.loaded = true;
      return webpackModule.exports;
    }
  }]);

  return federationModuleRequire;
}()));

function getZmfConfig() {
  return rawWindow.__ZMF__ || {};
}

function getEntry(containerName) {
  return "".concat(getZmfConfig()[containerName], "/").concat(containerName, ".remoteEntry.js");
}

function getModuleFactoryId(fn) {
  var str = fn.toString() // (/*! ./x/y.js */ "./x/y.js") => ("./x/y.js")
  .replace(/\s*\/\*.+?\*\/\s*/, ''); // () => ((__webpack_require__("./src/bootstrap.js")))
  // function(){return n(1794)}

  var ret = /['"](.+)['"]/.exec(str) || /\((\d+)\)/.exec(str);

  if (!ret) {
    throw "function `".concat(str, "` can not match module factory id.");
  }

  return ret[1];
}

var domAppendOrInsertHanders = {
  '[object HTMLStyleElement]': function objectHTMLStyleElement(dom, containerId) {
    if (dom.textContent) {
      parseInlineStyle(dom.textContent, containerId).then(function (code) {
        dom.textContent = code;
      });
    }
  },
  '[object HTMLLinkElement]': function objectHTMLLinkElement(dom, containerId) {
    var href = dom.href;
    var inlineStyleEl = rawDoc.createElement('style');
    var ctx = this;
    inlineStyleEl.dataset.f = dom.href;

    inlineStyleEl.onload = dom.onload || function onload() {};

    inlineStyleEl.onerror = dom.onerror || function onerror() {};

    parseLinkStyle(href, containerId).then(function (scopedCSSCode) {
      var textNode = document.createTextNode(scopedCSSCode);
      textNode.__scoped__ = true;
      inlineStyleEl.appendChild(textNode);
    });
    return {
      resolvedCtx: ctx,
      resolvedDom: inlineStyleEl
    };
  },
  '[object HTMLScriptElement]': function objectHTMLScriptElement(dom, currentRuningAppId) {
    var _this2 = this;

    if (!isAvailableUrl(dom.src)) {
      return false;
    } else {
      var onload = (dom.onload || function onload() {}).bind(this);

      var onerror = (dom.onerror || function onerror() {}).bind(this);

      pFetchSource(dom.src).then(function (ret) {
        if (ret.loaded) return;
        var currentRuningApp = getApp(currentRuningAppId);
        bindLexicalScope(ret.code, currentRuningApp.proxyWindow, currentRuningApp.proxyWindow.proxyDoc);
        onload();

        _this2.appendChild(rawDoc.createComment(" replace ".concat(dom.src, " by micro-module-federation ")));

        ret.loaded = true;
      }).catch(function (e) {
        onerror(e);
      });
      return true;
    }
  }
};

function getContainerIdFromAppid(id) {
  // xx_containerId/moduleName;
  return id.split('_').pop().split('/')[0];
}

function parseLinkStyle(url, scopeAttr) {
  return pFetchSource(url).then(function (ret) {
    if (ret.loaded) return;
    var scopedStyle = parseStyle(ret.code, scopeAttr, url);
    ret.load = true;
    return scopedStyle;
  });
}

function parseInlineStyle(code, scopeAttr, baseUrl) {
  return Promise.resolve(parseStyle(code, scopeAttr, baseUrl));
}

function parseStyle(code, scopeAttr, baseUrl) {
  var cssAst = css.parse(code, {
    baseUrl: baseUrl,
    scopeSelectorPrefix: "zmf-app[data-cid=".concat(scopeAttr, "]"),
    selectorsMap: {
      html: 'zmf-app',
      body: 'zmf-app-body'
    }
  });
  return css.stringify(cssAst);
}

var patchFns = {
  appendChild: function appendChild(dom) {
    var domType = Object.prototype.toString.call(dom);
    var currentRuningAppId = getCurrentRuningApp();
    var containerId = getContainerIdFromAppid(currentRuningAppId);
    var ctx = this;
    var replacementDom = dom; // 外链样式

    if (containerId && replacementDom instanceof HTMLLinkElement && replacementDom.href) {
      var _domAppendOrInsertHan = domAppendOrInsertHanders[domType].bind(this)(replacementDom, containerId),
          resolvedDom = _domAppendOrInsertHan.resolvedDom,
          resolvedCtx = _domAppendOrInsertHan.resolvedCtx;

      return rawAppendChild.call(resolvedCtx, resolvedDom);
    } else if (containerId && replacementDom instanceof HTMLStyleElement && replacementDom.textNode) {
      // 内联样式只是转换 textContent 就行
      domAppendOrInsertHanders[domType].bind(this)(replacementDom, containerId);
    } else if (containerId && replacementDom.nodeName === '#text' && ctx.nodeName.toLowerCase() === 'style' && !replacementDom.__scoped__) {
      domAppendOrInsertHanders['[object HTMLStyleElement]'].bind(this)(replacementDom, containerId);
    } // 当执行真正的 factory 时候的 dom 操作.


    if (currentRuningAppId && // INIT 初始化下载 thunk 阶段的不用绑定 win, doc
    !/INIT:/.test(currentRuningAppId) && domAppendOrInsertHanders[domType] && domAppendOrInsertHanders[domType].bind(this)(dom, currentRuningAppId)) {
      return;
    }

    return rawAppendChild.call(ctx, replacementDom);
  },
  insertBefore: function insertBefore(dom, referenceNode) {
    var domType = Object.prototype.toString.call(dom);
    var currentRuningAppId = getCurrentRuningApp();
    var containerId = getContainerIdFromAppid(currentRuningAppId);
    var ctx = this; // 外链样式

    if (containerId && dom instanceof HTMLLinkElement && dom.href) {
      var _domAppendOrInsertHan2 = domAppendOrInsertHanders[domType].bind(this)(dom, containerId),
          resolvedDom = _domAppendOrInsertHan2.resolvedDom,
          resolvedCtx = _domAppendOrInsertHan2.resolvedCtx;

      return rawInsertBefore.call(resolvedCtx, resolvedDom, referenceNode);
    } else if (containerId && dom instanceof HTMLStyleElement) {
      domAppendOrInsertHanders[domType].bind(this)(dom, containerId);
    } else if (containerId && dom.nodeName === '#text' && ctx.nodeName.toLowerCase() === 'style' && !dom.__scoped__) {
      domAppendOrInsertHanders['[object HTMLStyleElement]'].bind(this)(dom, containerId);
    }

    if (currentRuningAppId && // INIT 初始化下载 thunk 阶段的不用绑定 win, doc
    !/INIT:/.test(currentRuningAppId) && domAppendOrInsertHanders[domType] && domAppendOrInsertHanders[domType].bind(this)(dom, currentRuningAppId)) {
      return;
    }

    return rawInsertBefore.call(ctx, dom, referenceNode);
  }
};

function patchDomAppendOrInsert() {
  if (Node.prototype.appendChild === patchFns.appendChild) return;
  Object.assign(Node.prototype, patchFns);
}

function freePatchDomAppendOrInsert() {
  Node.prototype.appendChild = rawAppendChild;
  Node.prototype.insertBefore = rawInsertBefore;
}

function loadFederationModule(_x2, _x3, _x4) {
  return _loadFederationModule.apply(this, arguments);
}

function _loadFederationModule() {
  _loadFederationModule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(container, moduleName, appid) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __webpack_require__.I('default');

          case 2:
            _context4.next = 4;
            return rawWindow[container].init(__webpack_require__.S.default);

          case 4:
            setCurrentRuningApp("INIT:".concat(appid));
            return _context4.abrupt("return", rawWindow[container].get("./".concat(moduleName)));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadFederationModule.apply(this, arguments);
}

var nodeNameMap = {
  head: 'zmf-app-head',
  body: 'zmf-app-body'
};
var documentOperateRedirect = {
  head: function head() {
    return this.querySelector('zmf-app-head');
  },
  body: function body() {
    return this.querySelector('zmf-app-body');
  },
  images: function images() {
    // HTMLCollection
    return this.getElementsByTagName('img');
  },
  addEventListener: function addEventListener() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.addEventListener.apply(this, args);
  },
  removeEventListener: function removeEventListener() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.removeEventListener.apply(this, args);
  },
  querySelector: function querySelector(selector) {
    var lowerCaseSelector = selector.toLowerCase();
    return this.querySelector(nodeNameMap[lowerCaseSelector] ? nodeNameMap[lowerCaseSelector] : selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    var lowerCaseSelector = selector.toLowerCase();
    return this.querySelectorAll(nodeNameMap[lowerCaseSelector] ? nodeNameMap[lowerCaseSelector] : selector);
  },
  // Element.prototype 下没有 getElementById
  getElementById: function getElementById(id) {
    return this.querySelector("#".concat(id));
  },
  getElementsByClassName: function getElementsByClassName(cls) {
    return this.getElementsByClassName(cls);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return this.getElementsByTagName(tagName);
  },
  getElementsByTagNameNS: function getElementsByTagNameNS() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.getElementsByTagNameNS.apply(this, args);
  },
  getAnimations: function getAnimations() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return this.getAnimations.apply(this, args);
  }
};
var proxyWindows = {}; // 同一个 host 下的不用 module 共享一个 proxyWindow

function createProxyWindow(containerId, moduleId, appName) {
  if (proxyWindows[containerId]) return proxyWindows[containerId];
  var fakeWindow = {
    rawWindow: rawWindow,
    document: rawDoc,
    __isZMF__: true,
    __MICRO_MODULE_ID__: moduleId,
    __APP_NAME__: appName
  };
  var proxyWindow = new Proxy(fakeWindow, {
    get: function get(target, prop) {
      var value = target[prop] || rawWindow[prop];

      if (typeof value === 'function') {
        return value.bind(rawWindow);
      }

      return value;
    },
    set: function set(obj, prop, value) {
      obj[prop] = value;
      return true;
    }
  });
  return proxyWindows[containerId] = proxyWindow;
}

var index_esm_App = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function App(options) {
    _classCallCheck(this, App);

    this.options = options;
    this.appName = options.name;
    this.appId = this.options.id;
    this.module = this.options.module;
    this.containerId = this.options.module.split('/')[0];
    this.remoteEntry = '';
    this.proxyWindow = createProxyWindow(this.containerId, this.appId, this.appName); // this.proxyWindow.microApp = new EventCenterForApp(this.appName);

    this.remoteModuleExports = null;
    this.deferredPromise = deferredPromise();
    this.init();
  }

  _createClass(App, [{
    key: "createProxyDoc",
    value: function createProxyDoc() {
      var shadowRoot = this.shadow.shadowRoot;
      var appId = this.appId;
      return new Proxy(rawDoc, {
        get: function get(target, prop) {
          setCurrentRuningApp(appId);

          if (documentOperateRedirect[prop]) {
            // e.g. document.querySelector, addEventListener
            if (typeof target[prop] === 'function') {
              return documentOperateRedirect[prop].bind(shadowRoot);
            } else {
              // e.g. document.head
              return documentOperateRedirect[prop].call(shadowRoot);
            }
          }

          if (typeof target[prop] === 'function') {
            return target[prop].bind(rawDoc);
          }

          return target[prop];
        },
        set: function set(target, prop, value) {
          // e.g. dom.onclick = function() {}
          if (/^(on)/.test(prop)) {
            shadowRoot[prop] = value;
          } else {
            target[prop] = value;
          }

          return true;
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      setApp(this.appId, this);
      this.resolveShadow();
      this.executeRemoteEntry();
    }
  }, {
    key: "resolveShadow",
    value: function resolveShadow() {
      var shadow = this.options.shadow;
      var shadowRoot = shadow;
      var containerId = this.options.module.split('/')[0];
      shadow.dataset.id = this.options.id;
      shadow.dataset.f = getZmfConfig()[containerId];
      shadow.dataset.cid = containerId;
      this.shadow = {
        shadow: shadow,
        shadowRoot: shadowRoot,
        shadowHead: shadowRoot.querySelector('zmf-app-head'),
        shadowBody: shadowRoot.querySelector('zmf-app-body')
      };
    }
  }, {
    key: "executeRemoteEntry",
    value: function () {
      var _executeRemoteEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var module, _module$split, _module$split2, containerId, moduleName, factory, moduleId, requireInstance;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                module = this.options.module;
                _module$split = module.split('/'), _module$split2 = _slicedToArray(_module$split, 2), containerId = _module$split2[0], moduleName = _module$split2[1];
                this.remoteEntry = getEntry(containerId);
                _context3.next = 5;
                return pLoadScript(this.remoteEntry);

              case 5:
                patchDomAppendOrInsert();
                _context3.next = 8;
                return loadFederationModule(containerId, moduleName, this.appId);

              case 8:
                factory = _context3.sent;
                moduleId = getModuleFactoryId(factory);
                this.proxyWindow.proxyDoc = this.createProxyDoc(this.appId);
                requireInstance = new federationModuleRequire({
                  containerId: containerId,
                  proxyWindow: this.proxyWindow,
                  proxyDocument: this.proxyWindow.proxyDoc
                });
                this.remoteModuleExports = requireInstance.require(moduleId);
                this.deferredPromise.resolve(this);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function executeRemoteEntry() {
        return _executeRemoteEntry.apply(this, arguments);
      }

      return executeRemoteEntry;
    }()
  }, {
    key: "start",
    value: function start() {
      return this.deferredPromise;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      removeApp(this.appId);

      if (!getApps().length) {
        freePatchDomAppendOrInsert();
      }
    }
  }]);

  return App;
}()));

var globalLifeCycles = {};

var setGlobalLifeCycle = function setGlobalLifeCycle(lifeCycleName, handler) {
  globalLifeCycles[lifeCycleName] = handler;
};

var getGlobalLifeCycles = function getGlobalLifeCycles() {
  return globalLifeCycles;
};

var webComponentTagName = 'zmf-app';
var execLock = {};

function defineWebComponents() {
  if (rawWindow.customElements.get(webComponentTagName)) return;
  var globalLifeCycles = getGlobalLifeCycles();
  var template = rawWindow.document.createElement('template');
  template.innerHTML = "\n    <zmf-app-head></zmf-app-head>\n    <zmf-app-body></zmf-app-body>\n  ".trim();

  var ZmfWebComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(ZmfWebComponent, _HTMLElement);

    var _super = _createSuper(ZmfWebComponent);

    function ZmfWebComponent() {
      var _this3;

      _classCallCheck(this, ZmfWebComponent);

      _this3 = _super.call(this); // const shadow = this.attachShadow({ mode: 'open' });

      _this3.appId = '';
      _this3.app = null;
      return _this3;
    }

    _createClass(ZmfWebComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        this.appendChild(template.content.cloneNode(true));
        var name = this.getAttribute('name');
        var module = this.getAttribute('module');

        if (!isString(name)) {
          log.error('options `name` type must be a string.');
          return;
        }

        if (!/^\w+\/\w+$/.test(module)) {
          log.error('options `module` not available, e.g. remoteApp1/someModule');
          return;
        }

        var appId = "".concat(name, "_").concat(module);
        var shadow = this;
        this.appId = appId;
        if (execLock[this.appId]) return;
        execLock[this.appId] = true;
        setTimeout(function () {
          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":beforeMount")));

          globalLifeCycles['beforeMount'](appId);
        }, 0);
        var app = new index_esm_App({
          shadow: shadow,
          name: name,
          module: module,
          id: appId
        }).start();
        app.then(function (app) {
          _this4.app = app;

          if (typeof app.remoteModuleExports.mount !== 'function') {
            log.error("remote module ".concat(app.module, " rendered by zmf-app must export mount function."));
            return;
          }

          app.remoteModuleExports.mount(app.shadow.shadowBody);

          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":onMount")));

          globalLifeCycles['onMount'](appId);
        }).catch(function (e) {
          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":onError"), {
            detail: e
          }));

          globalLifeCycles['onError'](e, appId);
        }).finally(function () {
          execLock[_this4.appId] = false;
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.dispatchEvent(new CustomEvent("".concat(this.appId, ":onUnmount")));
        globalLifeCycles['onUnmount'](this.appId);
        if (this.app) this.app.destroy();
      }
    }]);

    return ZmfWebComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  rawWindow.customElements.define(webComponentTagName, ZmfWebComponent);
} // 共享一个事件池子


rawWindow.__ZMF_EVENT_LIST__ = rawWindow.__ZMF_EVENT_LIST__ || (rawWindow.__ZMF_EVENT_LIST__ = new Map());

function getCurrentAppName() {
  return window.__isZMF__ ? window.__APP_NAME__ : 'HOST';
} // 发布订阅系统


var EventCenter = /*#__PURE__*/function () {
  function EventCenter() {
    (0,classCallCheck/* default */.Z)(this, EventCenter);

    (0,defineProperty/* default */.Z)(this, "eventList", rawWindow.__ZMF_EVENT_LIST__);
  }

  (0,createClass/* default */.Z)(EventCenter, [{
    key: "on",
    value:
    /**
     * 绑定监听函数
     * @param name 事件名称
     * @param f 绑定函数
     */
    function on(name, f) {
      // 只能监听 app name
      var appNames = getApps().map(function (el) {
        return el.appName;
      }).concat(['HOST', 'GLOBAL']);
      if (!appNames.includes(name)) return;
      var eventInfo = this.eventList.get(name); // 如果没有缓存，则初始化

      if (!eventInfo) {
        eventInfo = {
          data: {},
          callbacks: new Set()
        }; // 放入缓存

        this.eventList.set(name, eventInfo);
      } // 记录绑定函数


      eventInfo.callbacks.add(f);
    } // 解除绑定

  }, {
    key: "off",
    value: function off(name, f) {
      var eventInfo = this.eventList.get(name); // eventInfo存在且f为函数则卸载指定函数,否则卸载所有函数

      if (eventInfo) {
        if (typeof f === 'function') {
          eventInfo.callbacks.delete(f);
        } else {
          eventInfo.callbacks = new Set();
        }
      }
    } // 发送数据

  }, {
    key: "emit",
    value: function emit(data) {
      var name = getCurrentAppName(); //  只能触发 app name, 这里防止在 app 实例化之前就已经监听过了.

      var appNames = getApps().map(function (el) {
        return el.appName;
      }).concat('HOST');
      if (!appNames.includes(name)) return;
      var eventInfo = this.eventList.get(name); // 当数据不相等时才更新

      if (eventInfo && eventInfo.data !== data) {
        eventInfo.data = data; // 遍历执行所有绑定函数

        var _iterator2 = (0,createForOfIteratorHelper/* default */.Z)(eventInfo.callbacks),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var f = _step2.value;
            f(data);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } // 获取特定appName的数据

  }, {
    key: "getData",
    value: function getData(name) {
      var eventInfo = this.eventList.get(name);

      if (eventInfo) {
        return eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.data;
      }

      return null;
    } // 创建全局对象

  }, {
    key: "createGlobalData",
    value: function createGlobalData(data) {
      this.eventList.set('GLOBAL', {
        data: data,
        callbacks: new Set()
      });
    } // 设置全局对象，并对全局对象进行事件分发

  }, {
    key: "setGlobalData",
    value: function setGlobalData(data) {
      var eventInfo = this.eventList.get('GLOBAL');

      if (!eventInfo) {
        this.createGlobalData(data);
      }

      if (eventInfo && eventInfo.data !== data) {
        var mergeData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, eventInfo.data), data);

        eventInfo.data = mergeData;

        var _iterator3 = (0,createForOfIteratorHelper/* default */.Z)(eventInfo.callbacks),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var f = _step3.value;
            f(mergeData);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } // 获取全局对象数据

  }, {
    key: "getGlobalData",
    value: function getGlobalData() {
      return this.getData('GLOBAL');
    }
  }]);

  return EventCenter;
}(); // 实例化发布订阅对象


var Event = new EventCenter(); // export class EventCenterForApp {
//   constructor(appName) {
//     this.appName = `${appName}`;
//   }
//   /**
//    * 向指定应用发送数据
//    * @param appNames 应用id,可为多个,单个唯一不可以重复（父应用往多个应用发送数据）
//    * @param data 对象数据
//    */
//   emit(appNames, data) {
//     const allApps = getApp().map(el => el.name);
//     if (Array.isArray(appNames)) {
//       appNames.map(appName => {
//         if (allApps.includes(appName)) {
//           eventCenter.dispatch(appName, data);
//         }
//       });
//     }
//   }
//   /**
//    * 监听基座应用发送的数据
//    * @param cb 绑定函数
//    */
//   on(cb) {
//     eventCenter.on(this.appName, cb);
//   }
//   /**
//    * 清空某个应用的监听函数
//    * @param appName 子应用名称
//    */
//   off() {
//     eventCenter.off(this.appName);
//   }
// }

var lifeCycleNames = (/* unused pure expression or super */ null && (['beforeMount', 'onMount', 'onUnmount', 'onError']));

function getLifeCycles(options) {
  return Object.keys(options).filter(function (propName) {
    return lifeCycleNames.includes(propName) && typeof options[propName] === 'function';
  });
} // 防止多次 start


var isStart = false;
var defaultOptions = {
  beforeMount: emptyFn,
  onMount: emptyFn,
  onUnmount: emptyFn,
  onError: emptyFn
};

function startMMF() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  if (isStart) return; // window.baseApp = new EventCenterForApp('baseApp');

  var mergedOpts = Object.assign({}, defaultOptions, options);
  getLifeCycles(mergedOpts).forEach(function (propName) {
    return setGlobalLifeCycle(propName, mergedOpts[propName]);
  });
  defineWebComponents();
  isStart = true;
}

var mmfEvent = Event;

// EXTERNAL MODULE: ./node_modules/postcss/lib/postcss.mjs
var postcss = __webpack_require__(6081);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/page1.js
/* eslint-disable */var Column=table/* default.Column */.Z.Column,ColumnGroup=table/* default.ColumnGroup */.Z.ColumnGroup;var data=[{key:'1',firstName:'John',lastName:'Brown',age:32,address:'New York No. 1 Lake Park',tags:['nice','developer']},{key:'2',firstName:'Jim',lastName:'Green',age:42,address:'London No. 1 Lake Park',tags:['loser']},{key:'3',firstName:'Joe',lastName:'Black',age:32,address:'Sidney No. 1 Lake Park',tags:['cool','teacher']}];function page1_App(props){var _useState=(0,index_js_.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),list=_useState2[0],setList=_useState2[1];var _useState3=(0,index_js_.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isModalVisible=_useState4[0],setIsModalVisible=_useState4[1];var _useState5=(0,index_js_.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),isModalVisible2=_useState6[0],setIsModalVisible2=_useState6[1];var clickHandle=function clickHandle(){props.history.push('/nextPage');};function clickHandle2(){setIsModalVisible2(!isModalVisible2);}function handleAddSomething(){var s=document.createComment('heiheihei');document.head.appendChild(s);}(0,index_js_.useEffect)(function(){mmfEvent.on('HOST',function(d){message/* default.info */.ZP.info(d);});},[]);function sendParent(){mmfEvent.emit('来自子应用数据: '+Math.random());}return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{border:'1px solid #fff'},className:"App",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fa fa-car"}),/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fa fa-car",style:{color:'green'}}),list.map(function(t){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:t},Math.random());}),/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:"App-header",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:logo,className:"App-logo",alt:"logo"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{onClick:handleAddSomething,children:"\u6211\u662F\u4E00\u4E2A\u8FDC\u7A0B\u5165\u53E3\u6A21\u5757"}),/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:clickHandle,children:"\u70B9\u6211\u8DF3\u8F6C\u9875\u9762"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:clickHandle2,children:"\u70B9\u6211\u52A0\u8F7D\u64AD\u653E\u5668"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:sendParent,children:"\u5411\u7236\u5E94\u7528\u53D1\u9001\u6570\u636E"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z,{title:"Basic Modal",visible:isModalVisible2,onOk:clickHandle2,onCancel:clickHandle2,children:/*#__PURE__*/(0,jsx_runtime.jsx)(player["default"],{})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(table/* default */.Z,{dataSource:data,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ColumnGroup,{title:"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"First Name",dataIndex:"firstName"},"firstName"),/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"Last Name",dataIndex:"lastName"},"lastName")]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"Age",dataIndex:"age"},"age"),/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"Address",dataIndex:"address"},"address"),/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"Tags",dataIndex:"tags",render:function render(tags){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:tags.map(function(tag){return/*#__PURE__*/(0,jsx_runtime.jsx)(es_tag/* default */.Z,{color:"blue",children:tag},tag);})});}},"tags"),/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{title:"Action",render:function render(_,record){return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"middle",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("a",{children:["Invite ",record.lastName]}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{children:"Delete"})]});}},"action")]})]})]});}/* harmony default export */ var page1 = ((0,react_router_dom_js_.withRouter)(page1_App));
;// CONCATENATED MODULE: ./src/nextpage.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var nextpage = ({});
;// CONCATENATED MODULE: ./src/nextPage.js
function click(){// var dom = document.createElement('link');
// dom.href = 'http://10.19.160.124:8000/test.css';
// document.head.appendChild(dom);
var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js';s.onload=function(){console.log('load');};s.onerror=function(e){console.log(e,'234234');};document.head.appendChild(s);console.log(window);}function NextPageComponent(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"nextpage",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{onClick:click,children:"\u6211\u662F\u8FDC\u7A0B\u53E6\u4E00\u4E2A\u9875\u9762, \u8DEF\u7531-> /nextpage"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{width:"100%",src:"https://pic3.zhimg.com/70/v2-9a820c30dd29f12a702d4eac13e9bbc6.jpg"})]});}
;// CONCATENATED MODULE: ./src/App.js
/* eslint-disable */var App_Column=table/* default.Column */.Z.Column,App_ColumnGroup=table/* default.ColumnGroup */.Z.ColumnGroup;var el=document.createElement('link');el.href='https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css';el.global=true;el.rel="stylesheet";document.head.appendChild(el);var pathname=window.location.pathname;var baseName=window.__isZMF__?pathname:'/app2';function TTT(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_js_.BrowserRouter,{basename:baseName,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom_js_.Switch,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_js_.Route,{exact:true,path:"/",component:page1}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_js_.Route,{exact:true,path:"/nextpage",component:NextPageComponent})]})});}function mounted(){console.log("I am app2, im loaded");}/* harmony default export */ var src_App = (TTT);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 787).then(__webpack_require__.bind(__webpack_require__, 787)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
;// CONCATENATED MODULE: ./src/bootstrap.js
/* eslint-disable */function Apps(){return/*#__PURE__*/(0,jsx_runtime.jsx)(src_App,{});}if(!window.__isZMF__){var root=client.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(Apps,{}));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();}/* harmony default export */ var bootstrap = (Apps);function mount(dom){client.createRoot(dom).render(/*#__PURE__*/(0,jsx_runtime.jsx)(Apps,{}));}

/***/ }),

/***/ 2868:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 4777:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 9830:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 209:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7414:
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=651.fbb1edc8.chunk.js.map