(self["webpackChunkapp2"] = self["webpackChunkapp2"] || []).push([[555],{

/***/ 8058:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var stringHash = _interopDefault(__webpack_require__(5917));

var asap = _interopDefault(__webpack_require__(3931));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
/* @flow */

/* ::
type ObjectMap = { [id:string]: any };
*/


var UPPERCASE_RE = /([A-Z])/g;

var UPPERCASE_RE_TO_KEBAB = function UPPERCASE_RE_TO_KEBAB(match
/* : string */
) {
  return (
    /* : string */
    "-".concat(match.toLowerCase())
  );
};

var kebabifyStyleName = function kebabifyStyleName(string
/* : string */
)
/* : string */
{
  var result = string.replace(UPPERCASE_RE, UPPERCASE_RE_TO_KEBAB);

  if (result[0] === 'm' && result[1] === 's' && result[2] === '-') {
    return "-".concat(result);
  }

  return result;
};
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */


var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var stringifyValue = function stringifyValue(key
/* : string */
, prop
/* : any */
)
/* : string */
{
  if (typeof prop === "number") {
    if (isUnitlessNumber[key]) {
      return "" + prop;
    } else {
      return prop + "px";
    }
  } else {
    return '' + prop;
  }
};

var stringifyAndImportantifyValue = function stringifyAndImportantifyValue(key
/* : string */
, prop
/* : any */
) {
  return (
    /* : string */
    importantify(stringifyValue(key, prop))
  );
}; // Turn a string into a hash string of base-36 values (using letters and numbers)
// eslint-disable-next-line no-unused-vars


var hashString = function hashString(string
/* : string */
, key
/* : ?string */
) {
  return (
    /* string */
    stringHash(string).toString(36)
  );
}; // Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.


var hashObject = function hashObject(object
/* : ObjectMap */
) {
  return (
    /* : string */
    hashString(JSON.stringify(object))
  );
}; // Given a single style value string like the "b" from "a: b;", adds !important
// to generate "b !important".


var importantify = function importantify(string
/* : string */
) {
  return (
    /* : string */
    // Bracket string character access is very fast, and in the default case we
    // normally don't expect there to be "!important" at the end of the string
    // so we can use this simple check to take an optimized path. If there
    // happens to be a "!" in this position, we follow up with a more thorough
    // check.
    string[string.length - 10] === '!' && string.slice(-11) === ' !important' ? string : "".concat(string, " !important")
  );
};
/* @flow */


var MAP_EXISTS = typeof Map !== 'undefined';

var OrderedElements = /*#__PURE__*/function () {
  /* ::
  elements: {[string]: any};
  keyOrder: string[];
  */
  function OrderedElements() {
    this.elements = {};
    this.keyOrder = [];
  }

  var _proto = OrderedElements.prototype;

  _proto.forEach = function forEach(callback
  /* : (string, any) => void */
  ) {
    for (var i = 0; i < this.keyOrder.length; i++) {
      // (value, key) to match Map's API
      callback(this.elements[this.keyOrder[i]], this.keyOrder[i]);
    }
  };

  _proto.set = function set(key
  /* : string */
  , value
  /* : any */
  , shouldReorder
  /* : ?boolean */
  ) {
    if (!this.elements.hasOwnProperty(key)) {
      this.keyOrder.push(key);
    } else if (shouldReorder) {
      var index = this.keyOrder.indexOf(key);
      this.keyOrder.splice(index, 1);
      this.keyOrder.push(key);
    }

    if (value == null) {
      this.elements[key] = value;
      return;
    }

    if (MAP_EXISTS && value instanceof Map || value instanceof OrderedElements) {
      // We have found a nested Map, so we need to recurse so that all
      // of the nested objects and Maps are merged properly.
      var nested = this.elements.hasOwnProperty(key) ? this.elements[key] : new OrderedElements();
      value.forEach(function (value, key) {
        nested.set(key, value, shouldReorder);
      });
      this.elements[key] = nested;
      return;
    }

    if (!Array.isArray(value) && _typeof(value) === 'object') {
      // We have found a nested object, so we need to recurse so that all
      // of the nested objects and Maps are merged properly.
      var _nested = this.elements.hasOwnProperty(key) ? this.elements[key] : new OrderedElements();

      var keys = Object.keys(value);

      for (var i = 0; i < keys.length; i += 1) {
        _nested.set(keys[i], value[keys[i]], shouldReorder);
      }

      this.elements[key] = _nested;
      return;
    }

    this.elements[key] = value;
  };

  _proto.get = function get(key
  /* : string */
  )
  /* : any */
  {
    return this.elements[key];
  };

  _proto.has = function has(key
  /* : string */
  )
  /* : boolean */
  {
    return this.elements.hasOwnProperty(key);
  };

  _proto.addStyleType = function addStyleType(styleType
  /* : any */
  )
  /* : void */
  {
    var _this = this;

    if (MAP_EXISTS && styleType instanceof Map || styleType instanceof OrderedElements) {
      styleType.forEach(function (value, key) {
        _this.set(key, value, true);
      });
    } else {
      var keys = Object.keys(styleType);

      for (var i = 0; i < keys.length; i++) {
        this.set(keys[i], styleType[keys[i]], true);
      }
    }
  };

  return OrderedElements;
}();

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace(n) {
  return n && n.default || n;
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = capitalizeString;

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
unwrapExports(capitalizeString_1);
var prefixProperty_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixProperty;

  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var newStyle = {};
      var requiredPrefixes = prefixProperties[property];
      var capitalizedProperty = (0, _capitalizeString2.default)(property);
      var keys = Object.keys(style);

      for (var i = 0; i < keys.length; i++) {
        var styleProperty = keys[i];

        if (styleProperty === property) {
          for (var j = 0; j < requiredPrefixes.length; j++) {
            newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
          }
        }

        newStyle[styleProperty] = style[styleProperty];
      }

      return newStyle;
    }

    return style;
  }
});
unwrapExports(prefixProperty_1);
var prefixValue_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixValue;

  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData); // we can stop processing if a value is returned
      // as all plugin criteria are unique

      if (processedValue) {
        return processedValue;
      }
    }
  }
});
unwrapExports(prefixValue_1);
var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addNewValuesOnly;

  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }
});
unwrapExports(addNewValuesOnly_1);
var isObject_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isObject;

  function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
  }
});
unwrapExports(isObject_1);
var createPrefixer_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createPrefixer;

  var _prefixProperty2 = _interopRequireDefault(prefixProperty_1);

  var _prefixValue2 = _interopRequireDefault(prefixValue_1);

  var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);

  var _isObject2 = _interopRequireDefault(isObject_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;
    return function prefix(style) {
      for (var property in style) {
        var value = style[property]; // handle nested objects

        if ((0, _isObject2.default)(value)) {
          style[property] = prefix(value); // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
            (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
          } // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations


          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap); // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations


          if (_processedValue) {
            style[property] = _processedValue;
          }

          style = (0, _prefixProperty2.default)(prefixMap, property, style);
        }
      }

      return style;
    };
  }
});
var createPrefixer = unwrapExports(createPrefixer_1);
var backgroundClip_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = backgroundClip; // https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility

  function backgroundClip(property, value) {
    if (typeof value === 'string' && value === 'text') {
      return ['-webkit-text', 'text'];
    }
  }
});
var backgroundClip = unwrapExports(backgroundClip_1);
var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }

  module.exports = exports['default'];
});
unwrapExports(isPrefixedValue_1);
var calc_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = calc;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var prefixes = ['-webkit-', '-moz-', ''];

  function calc(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/calc\(/g, prefix + 'calc(');
      });
    }
  }
});
var calc = unwrapExports(calc_1);
var crossFade_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = crossFade;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  } // http://caniuse.com/#search=cross-fade


  var prefixes = ['-webkit-', ''];

  function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }
});
var crossFade = unwrapExports(crossFade_1);
var cursor_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cursor;
  var prefixes = ['-webkit-', '-moz-', ''];
  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
});
var cursor = unwrapExports(cursor_1);
var filter_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = filter;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  } // http://caniuse.com/#feat=css-filter-function


  var prefixes = ['-webkit-', ''];

  function filter(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }
});
var filter = unwrapExports(filter_1);
var flex_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;
  var values = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
});
var flex = unwrapExports(flex_1);
var flexboxIE_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxIE;
  var alternativeValues = {
    'space-around': 'distribute',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end'
  };
  var alternativeProps = {
    alignContent: 'msFlexLinePack',
    alignSelf: 'msFlexItemAlign',
    alignItems: 'msFlexAlign',
    justifyContent: 'msFlexPack',
    order: 'msFlexOrder',
    flexGrow: 'msFlexPositive',
    flexShrink: 'msFlexNegative',
    flexBasis: 'msFlexPreferredSize' // Full expanded syntax is flex-grow | flex-shrink | flex-basis.

  };
  var flexShorthandMappings = {
    auto: '1 1 auto',
    inherit: 'inherit',
    initial: '0 1 auto',
    none: '0 0 auto',
    unset: 'unset'
  };
  var isUnitlessNumber = /^\d+(\.\d+)?$/;

  function flexboxIE(property, value, style) {
    if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }

    if (property === 'flex') {
      // For certain values we can do straight mappings based on the spec
      // for the expansions.
      if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
        style.msFlex = flexShorthandMappings[value];
        return;
      } // Here we have no direct mapping, so we favor looking for a
      // unitless positive number as that will be the most common use-case.


      if (isUnitlessNumber.test(value)) {
        style.msFlex = value + ' 1 0%';
        return;
      } // The next thing we can look for is if there are multiple values.


      var flexValues = value.split(/\s/); // If we only have a single value that wasn't a positive unitless
      // or a pre-mapped value, then we can assume it is a unit value.

      switch (flexValues.length) {
        case 1:
          style.msFlex = '1 1 ' + value;
          return;

        case 2:
          // If we have 2 units, then we expect that the first will
          // always be a unitless number and represents flex-grow.
          // The second unit will represent flex-shrink for a unitless
          // value, or flex-basis otherwise.
          if (isUnitlessNumber.test(flexValues[1])) {
            style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
          } else {
            style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
          }

          return;

        default:
          style.msFlex = value;
      }
    }
  }
});
var flexboxIE = unwrapExports(flexboxIE_1);
var flexboxOld_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;
  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };
  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines',
    flexGrow: 'WebkitBoxFlex'
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }

      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }

    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
});
var flexboxOld = unwrapExports(flexboxOld_1);
var gradient_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var prefixes = ['-webkit-', '-moz-', ''];
  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

  function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
      return prefixes.map(function (prefix) {
        return value.replace(values, function (grad) {
          return prefix + grad;
        });
      });
    }
  }
});
var gradient = unwrapExports(gradient_1);
var grid_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  exports.default = grid;

  function isSimplePositionValue(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  var alignmentValues = ['center', 'end', 'start', 'stretch'];
  var displayValues = {
    'inline-grid': ['-ms-inline-grid', 'inline-grid'],
    grid: ['-ms-grid', 'grid']
  };
  var propertyConverters = {
    alignSelf: function alignSelf(value, style) {
      if (alignmentValues.indexOf(value) > -1) {
        style.msGridRowAlign = value;
      }
    },
    gridColumn: function gridColumn(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridColumn = value;
      } else {
        var _value$split$map = value.split('/').map(function (position) {
          return +position;
        }),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            start = _value$split$map2[0],
            end = _value$split$map2[1];

        propertyConverters.gridColumnStart(start, style);
        propertyConverters.gridColumnEnd(end, style);
      }
    },
    gridColumnEnd: function gridColumnEnd(value, style) {
      var msGridColumn = style.msGridColumn;

      if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
        style.msGridColumnSpan = value - msGridColumn;
      }
    },
    gridColumnStart: function gridColumnStart(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridColumn = value;
      }
    },
    gridRow: function gridRow(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridRow = value;
      } else {
        var _value$split$map3 = value.split('/').map(function (position) {
          return +position;
        }),
            _value$split$map4 = _slicedToArray(_value$split$map3, 2),
            start = _value$split$map4[0],
            end = _value$split$map4[1];

        propertyConverters.gridRowStart(start, style);
        propertyConverters.gridRowEnd(end, style);
      }
    },
    gridRowEnd: function gridRowEnd(value, style) {
      var msGridRow = style.msGridRow;

      if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
        style.msGridRowSpan = value - msGridRow;
      }
    },
    gridRowStart: function gridRowStart(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridRow = value;
      }
    },
    gridTemplateColumns: function gridTemplateColumns(value, style) {
      style.msGridColumns = value;
    },
    gridTemplateRows: function gridTemplateRows(value, style) {
      style.msGridRows = value;
    },
    justifySelf: function justifySelf(value, style) {
      if (alignmentValues.indexOf(value) > -1) {
        style.msGridColumnAlign = value;
      }
    }
  };

  function grid(property, value, style) {
    if (property === 'display' && value in displayValues) {
      return displayValues[value];
    }

    if (property in propertyConverters) {
      var propertyConverter = propertyConverters[property];
      propertyConverter(value, style);
    }
  }
});
var grid = unwrapExports(grid_1);
var imageSet_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = imageSet;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  } // http://caniuse.com/#feat=css-image-set


  var prefixes = ['-webkit-', ''];

  function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }
});
var imageSet = unwrapExports(imageSet_1);
var logical_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = logical;
  var alternativeProps = {
    marginBlockStart: ['WebkitMarginBefore'],
    marginBlockEnd: ['WebkitMarginAfter'],
    marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
    marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
    paddingBlockStart: ['WebkitPaddingBefore'],
    paddingBlockEnd: ['WebkitPaddingAfter'],
    paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
    paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
    borderBlockStart: ['WebkitBorderBefore'],
    borderBlockStartColor: ['WebkitBorderBeforeColor'],
    borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
    borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
    borderBlockEnd: ['WebkitBorderAfter'],
    borderBlockEndColor: ['WebkitBorderAfterColor'],
    borderBlockEndStyle: ['WebkitBorderAfterStyle'],
    borderBlockEndWidth: ['WebkitBorderAfterWidth'],
    borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
    borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
    borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
    borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
    borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
    borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
    borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
    borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
  };

  function logical(property, value, style) {
    if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
      var alternativePropList = alternativeProps[property];

      for (var i = 0, len = alternativePropList.length; i < len; ++i) {
        style[alternativePropList[i]] = value;
      }
    }
  }
});
var logical = unwrapExports(logical_1);
var position_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = position;

  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }
});
var position = unwrapExports(position_1);
var sizing_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;
  var prefixes = ['-webkit-', '-moz-', ''];
  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
});
var sizing = unwrapExports(sizing_1);
/* eslint-disable no-var, prefer-template */

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}

var hyphenateStyleName$1 = /*#__PURE__*/Object.freeze({
  default: hyphenateStyleName
});

var _hyphenateStyleName = getCjsExportFromNamespace(hyphenateStyleName$1);

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;

  var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }

  module.exports = exports['default'];
});
unwrapExports(hyphenateProperty_1);
var transition_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;

  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };
  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    } // only split multi values, not cubic beziers


    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];

      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];

          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap); // if the property is already prefixed

      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
});
var transition = unwrapExports(transition_1);
var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
var staticData = {
  plugins: [backgroundClip, calc, crossFade, cursor, filter, flex, flexboxIE, flexboxOld, gradient, grid, imageSet, logical, position, sizing, transition],
  prefixMap: {
    "transform": wms,
    "transformOrigin": wms,
    "transformOriginX": wms,
    "transformOriginY": wms,
    "backfaceVisibility": w,
    "perspective": w,
    "perspectiveOrigin": w,
    "transformStyle": w,
    "transformOriginZ": w,
    "animation": w,
    "animationDelay": w,
    "animationDirection": w,
    "animationFillMode": w,
    "animationDuration": w,
    "animationIterationCount": w,
    "animationName": w,
    "animationPlayState": w,
    "animationTimingFunction": w,
    "appearance": wm,
    "userSelect": wmms,
    "fontKerning": w,
    "textEmphasisPosition": w,
    "textEmphasis": w,
    "textEmphasisStyle": w,
    "textEmphasisColor": w,
    "boxDecorationBreak": w,
    "clipPath": w,
    "maskImage": w,
    "maskMode": w,
    "maskRepeat": w,
    "maskPosition": w,
    "maskClip": w,
    "maskOrigin": w,
    "maskSize": w,
    "maskComposite": w,
    "mask": w,
    "maskBorderSource": w,
    "maskBorderMode": w,
    "maskBorderSlice": w,
    "maskBorderWidth": w,
    "maskBorderOutset": w,
    "maskBorderRepeat": w,
    "maskBorder": w,
    "maskType": w,
    "textDecorationStyle": wm,
    "textDecorationSkip": wm,
    "textDecorationLine": wm,
    "textDecorationColor": wm,
    "filter": w,
    "fontFeatureSettings": wm,
    "breakAfter": wmms,
    "breakBefore": wmms,
    "breakInside": wmms,
    "columnCount": wm,
    "columnFill": wm,
    "columnGap": wm,
    "columnRule": wm,
    "columnRuleColor": wm,
    "columnRuleStyle": wm,
    "columnRuleWidth": wm,
    "columns": wm,
    "columnSpan": wm,
    "columnWidth": wm,
    "writingMode": wms,
    "flex": wms,
    "flexBasis": w,
    "flexDirection": wms,
    "flexGrow": w,
    "flexFlow": wms,
    "flexShrink": w,
    "flexWrap": wms,
    "alignContent": w,
    "alignItems": w,
    "alignSelf": w,
    "justifyContent": w,
    "order": w,
    "transitionDelay": w,
    "transitionDuration": w,
    "transitionProperty": w,
    "transitionTimingFunction": w,
    "backdropFilter": w,
    "scrollSnapType": wms,
    "scrollSnapPointsX": wms,
    "scrollSnapPointsY": wms,
    "scrollSnapDestination": wms,
    "scrollSnapCoordinate": wms,
    "shapeImageThreshold": w,
    "shapeImageMargin": w,
    "shapeImageOutside": w,
    "hyphens": wmms,
    "flowInto": wms,
    "flowFrom": wms,
    "regionFragment": wms,
    "textOrientation": w,
    "boxSizing": m,
    "textAlignLast": m,
    "tabSize": m,
    "wrapFlow": ms,
    "wrapThrough": ms,
    "wrapMargin": ms,
    "touchAction": ms,
    "textSizeAdjust": wms,
    "borderImage": w,
    "borderImageOutset": w,
    "borderImageRepeat": w,
    "borderImageSlice": w,
    "borderImageSource": w,
    "borderImageWidth": w
  }
};
var prefixAll = createPrefixer(staticData);
/* ::
import type { SheetDefinition } from './index.js';
type StringHandlers = { [id:string]: Function };
type SelectorCallback = (selector: string) => string[];
export type SelectorHandler = (
    selector: string,
    baseSelector: string,
    callback: SelectorCallback
) => string[] | string | null;
*/

/**
 * `selectorHandlers` are functions which handle special selectors which act
 * differently than normal style definitions. These functions look at the
 * current selector and can generate CSS for the styles in their subtree by
 * calling the callback with a new selector.
 *
 * For example, when generating styles with a base selector of '.foo' and the
 * following styles object:
 *
 *   {
 *     ':nth-child(2n)': {
 *       ':hover': {
 *         color: 'red'
 *       }
 *     }
 *   }
 *
 * when we reach the ':hover' style, we would call our selector handlers like
 *
 *   handler(':hover', '.foo:nth-child(2n)', callback)
 *
 * Since our `pseudoSelectors` handles ':hover' styles, that handler would call
 * the callback like
 *
 *   callback('.foo:nth-child(2n):hover')
 *
 * to generate its subtree `{ color: 'red' }` styles with a
 * '.foo:nth-child(2n):hover' selector. The callback would return an array of CSS
 * rules like
 *
 *   ['.foo:nth-child(2n):hover{color:red !important;}']
 *
 * and the handler would then return that resulting CSS.
 *
 * `defaultSelectorHandlers` is the list of default handlers used in a call to
 * `generateCSS`.
 *
 * @name SelectorHandler
 * @function
 * @param {string} selector: The currently inspected selector. ':hover' in the
 *     example above.
 * @param {string} baseSelector: The selector of the parent styles.
 *     '.foo:nth-child(2n)' in the example above.
 * @param {function} generateSubtreeStyles: A function which can be called to
 *     generate CSS for the subtree of styles corresponding to the selector.
 *     Accepts a new baseSelector to use for generating those styles.
 * @returns {string[] | string | null} The generated CSS for this selector, or
 *     null if we don't handle this selector.
 */

var defaultSelectorHandlers
/* : SelectorHandler[] */
= [// Handle pseudo-selectors, like :hover and :nth-child(3n)
function pseudoSelectors(selector, baseSelector, generateSubtreeStyles) {
  if (selector[0] !== ":") {
    return null;
  }

  return generateSubtreeStyles(baseSelector + selector);
}, // Handle media queries (or font-faces)
function mediaQueries(selector, baseSelector, generateSubtreeStyles) {
  if (selector[0] !== "@") {
    return null;
  } // Generate the styles normally, and then wrap them in the media query.


  var generated = generateSubtreeStyles(baseSelector);
  return ["".concat(selector, "{").concat(generated.join(''), "}")];
}];
/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries and pseudo selectors that can be used
 * in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param {Array.<SelectorHandler>} selectorHandlers: A list of selector
 *     handlers to use for handling special selectors. See
 *     `defaultSelectorHandlers`.
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSS(".foo", [{
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold"
 *       }
 *     }], defaultSelectorHandlers);
 *
 * with the default `selectorHandlers` will make 5 calls to
 * `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */

var generateCSS = function generateCSS(selector
/* : string */
, styleTypes
/* : SheetDefinition[] */
, selectorHandlers
/* : SelectorHandler[] */
, stringHandlers
/* : StringHandlers */
, useImportant
/* : boolean */
)
/* : string[] */
{
  var merged = new OrderedElements();

  for (var i = 0; i < styleTypes.length; i++) {
    merged.addStyleType(styleTypes[i]);
  }

  var plainDeclarations = new OrderedElements();
  var generatedStyles = []; // TODO(emily): benchmark this to see if a plain for loop would be faster.

  merged.forEach(function (val, key) {
    // For each key, see if one of the selector handlers will handle these
    // styles.
    var foundHandler = selectorHandlers.some(function (handler) {
      var result = handler(key, selector, function (newSelector) {
        return generateCSS(newSelector, [val], selectorHandlers, stringHandlers, useImportant);
      });

      if (result != null) {
        // If the handler returned something, add it to the generated
        // CSS and stop looking for another handler.
        if (Array.isArray(result)) {
          generatedStyles.push.apply(generatedStyles, _toConsumableArray(result));
        } else {
          // eslint-disable-next-line
          console.warn('WARNING: Selector handlers should return an array of rules.' + 'Returning a string containing multiple rules is deprecated.', handler);
          generatedStyles.push("@media all {".concat(result, "}"));
        }

        return true;
      }
    }); // If none of the handlers handled it, add it to the list of plain
    // style declarations.

    if (!foundHandler) {
      plainDeclarations.set(key, val, true);
    }
  });
  var generatedRuleset = generateCSSRuleset(selector, plainDeclarations, stringHandlers, useImportant, selectorHandlers);

  if (generatedRuleset) {
    generatedStyles.unshift(generatedRuleset);
  }

  return generatedStyles;
};
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */


var runStringHandlers = function runStringHandlers(declarations
/* : OrderedElements */
, stringHandlers
/* : StringHandlers */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : void */
{
  if (!stringHandlers) {
    return;
  }

  var stringHandlerKeys = Object.keys(stringHandlers);

  for (var i = 0; i < stringHandlerKeys.length; i++) {
    var key = stringHandlerKeys[i];

    if (declarations.has(key)) {
      // A declaration exists for this particular string handler, so we
      // need to let the string handler interpret the declaration first
      // before proceeding.
      //
      // TODO(emily): Pass in a callback which generates CSS, similar to
      // how our selector handlers work, instead of passing in
      // `selectorHandlers` and have them make calls to `generateCSS`
      // themselves. Right now, this is impractical because our string
      // handlers are very specialized and do complex things.
      declarations.set(key, stringHandlers[key](declarations.get(key), selectorHandlers), // Preserve order here, since we are really replacing an
      // unprocessed style with a processed style, not overriding an
      // earlier style
      false);
    }
  }
};

var transformRule = function transformRule(key
/* : string */
, value
/* : string */
, transformValue
/* : function */
) {
  return (
    /* : string */
    "".concat(kebabifyStyleName(key), ":").concat(transformValue(key, value), ";")
  );
};

var arrayToObjectKeysReducer = function arrayToObjectKeysReducer(acc, val) {
  acc[val] = true;
  return acc;
};
/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */


var generateCSSRuleset = function generateCSSRuleset(selector
/* : string */
, declarations
/* : OrderedElements */
, stringHandlers
/* : StringHandlers */
, useImportant
/* : boolean */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : string */
{
  // Mutates declarations
  runStringHandlers(declarations, stringHandlers, selectorHandlers);
  var originalElements = Object.keys(declarations.elements).reduce(arrayToObjectKeysReducer, Object.create(null)); // NOTE(emily): This mutates handledDeclarations.elements.

  var prefixedElements = prefixAll(declarations.elements);
  var elementNames = Object.keys(prefixedElements);

  if (elementNames.length !== declarations.keyOrder.length) {
    // There are some prefixed values, so we need to figure out how to sort
    // them.
    //
    // Loop through prefixedElements, looking for anything that is not in
    // sortOrder, which means it was added by prefixAll. This means that we
    // need to figure out where it should appear in the sortOrder.
    for (var i = 0; i < elementNames.length; i++) {
      if (!originalElements[elementNames[i]]) {
        // This element is not in the sortOrder, which means it is a prefixed
        // value that was added by prefixAll. Let's try to figure out where it
        // goes.
        var originalStyle = void 0;

        if (elementNames[i][0] === 'W') {
          // This is a Webkit-prefixed style, like "WebkitTransition". Let's
          // find its original style's sort order.
          originalStyle = elementNames[i][6].toLowerCase() + elementNames[i].slice(7);
        } else if (elementNames[i][1] === 'o') {
          // This is a Moz-prefixed style, like "MozTransition". We check
          // the second character to avoid colliding with Ms-prefixed
          // styles. Let's find its original style's sort order.
          originalStyle = elementNames[i][3].toLowerCase() + elementNames[i].slice(4);
        } else {
          // if (elementNames[i][1] === 's') {
          // This is a Ms-prefixed style, like "MsTransition".
          originalStyle = elementNames[i][2].toLowerCase() + elementNames[i].slice(3);
        }

        if (originalStyle && originalElements[originalStyle]) {
          var originalIndex = declarations.keyOrder.indexOf(originalStyle);
          declarations.keyOrder.splice(originalIndex, 0, elementNames[i]);
        } else {
          // We don't know what the original style was, so sort it to
          // top. This can happen for styles that are added that don't
          // have the same base name as the original style.
          declarations.keyOrder.unshift(elementNames[i]);
        }
      }
    }
  }

  var transformValue = useImportant === false ? stringifyValue : stringifyAndImportantifyValue;
  var rules = [];

  for (var _i = 0; _i < declarations.keyOrder.length; _i++) {
    var key = declarations.keyOrder[_i];
    var value = prefixedElements[key];

    if (Array.isArray(value)) {
      // inline-style-prefixer returns an array when there should be
      // multiple rules for the same key. Here we flatten to multiple
      // pairs with the same key.
      for (var j = 0; j < value.length; j++) {
        rules.push(transformRule(key, value[j], transformValue));
      }
    } else {
      rules.push(transformRule(key, value, transformValue));
    }
  }

  if (rules.length) {
    return "".concat(selector, "{").concat(rules.join(""), "}");
  } else {
    return "";
  }
};
/* ::
import type { SheetDefinition, SheetDefinitions } from './index.js';
import type { MaybeSheetDefinition } from './exports.js';
import type { SelectorHandler } from './generate.js';
*/
// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.


var styleTag
/* : ?HTMLStyleElement */
= null; // Inject a set of rules into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.

var injectStyleTag = function injectStyleTag(cssRules
/* : string[] */
) {
  if (styleTag == null) {
    // Try to find a style tag with the `data-aphrodite` attribute first.
    styleTag = document.querySelector("style[data-aphrodite]")
    /* : any */
    ; // If that doesn't work, generate a new style tag.

    if (styleTag == null) {
      // Taken from
      // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
      var head = document.head || document.getElementsByTagName('head')[0];
      styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.setAttribute("data-aphrodite", "");
      head.appendChild(styleTag);
    }
  } // $FlowFixMe


  var sheet = styleTag.styleSheet || styleTag.sheet
  /* : any */
  ;

  if (sheet.insertRule) {
    var numRules = sheet.cssRules.length;
    cssRules.forEach(function (rule) {
      try {
        sheet.insertRule(rule, numRules);
        numRules += 1;
      } catch (e) {// The selector for this rule wasn't compatible with the browser
      }
    });
  } else {
    styleTag.innerText = (styleTag.innerText || '') + cssRules.join('');
  }
}; // Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)


var stringHandlers = {
  // With fontFamily we look for objects that are passed in and interpret
  // them as @font-face rules that we need to inject. The value of fontFamily
  // can either be a string (as normal), an object (a single font face), or
  // an array of objects and strings.
  fontFamily: function fontFamily(val) {
    if (Array.isArray(val)) {
      var nameMap = {};
      val.forEach(function (v) {
        nameMap[fontFamily(v)] = true;
      });
      return Object.keys(nameMap).join(",");
    } else if (_typeof(val) === "object") {
      injectStyleOnce(val.src, "@font-face", [val], false);
      return "\"".concat(val.fontFamily, "\"");
    } else {
      return val;
    }
  },
  // With animationName we look for an object that contains keyframes and
  // inject them as an `@keyframes` block, returning a uniquely generated
  // name. The keyframes object should look like
  //  animationName: {
  //    from: {
  //      left: 0,
  //      top: 0,
  //    },
  //    '50%': {
  //      left: 15,
  //      top: 5,
  //    },
  //    to: {
  //      left: 20,
  //      top: 20,
  //    }
  //  }
  // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
  // to use `animationName` here. Improve that so we can call this
  // `animation` instead of `animationName`.
  animationName: function animationName(val, selectorHandlers) {
    if (Array.isArray(val)) {
      return val.map(function (v) {
        return animationName(v, selectorHandlers);
      }).join(",");
    } else if (_typeof(val) === "object") {
      // Generate a unique name based on the hash of the object. We can't
      // just use the hash because the name can't start with a number.
      // TODO(emily): this probably makes debugging hard, allow a custom
      // name?
      var name = "keyframe_".concat(hashObject(val)); // Since keyframes need 3 layers of nesting, we use `generateCSS` to
      // build the inner layers and wrap it in `@keyframes` ourselves.

      var finalVal = "@keyframes ".concat(name, "{"); // TODO see if we can find a way where checking for OrderedElements
      // here is not necessary. Alternatively, perhaps we should have a
      // utility method that can iterate over either a plain object, an
      // instance of OrderedElements, or a Map, and then use that here and
      // elsewhere.

      if (val instanceof OrderedElements) {
        val.forEach(function (valVal, valKey) {
          finalVal += generateCSS(valKey, [valVal], selectorHandlers, stringHandlers, false).join('');
        });
      } else {
        Object.keys(val).forEach(function (key) {
          finalVal += generateCSS(key, [val[key]], selectorHandlers, stringHandlers, false).join('');
        });
      }

      finalVal += '}';
      injectGeneratedCSSOnce(name, [finalVal]);
      return name;
    } else {
      return val;
    }
  }
}; // This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)

var alreadyInjected = {}; // This is the buffer of styles which have not yet been flushed.

var injectionBuffer
/* : string[] */
= []; // A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.

var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
  var _injectionBuffer;

  if (alreadyInjected[key]) {
    return;
  }

  if (!isBuffering) {
    // We should never be automatically buffering on the server (or any
    // place without a document), so guard against that.
    if (typeof document === "undefined") {
      throw new Error("Cannot automatically buffer without a document");
    } // If we're not already buffering, schedule a call to flush the
    // current styles.


    isBuffering = true;
    asap(flushToStyleTag);
  }

  (_injectionBuffer = injectionBuffer).push.apply(_injectionBuffer, _toConsumableArray(generatedCSS));

  alreadyInjected[key] = true;
};

var injectStyleOnce = function injectStyleOnce(key
/* : string */
, selector
/* : string */
, definitions
/* : SheetDefinition[] */
, useImportant
/* : boolean */
) {
  var selectorHandlers
  /* : SelectorHandler[] */
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  if (alreadyInjected[key]) {
    return;
  }

  var generated = generateCSS(selector, definitions, selectorHandlers, stringHandlers, useImportant);
  injectGeneratedCSSOnce(key, generated);
};

var reset = function reset() {
  injectionBuffer = [];
  alreadyInjected = {};
  isBuffering = false;
  styleTag = null;
};

var resetInjectedStyle = function resetInjectedStyle(key
/* : string */
) {
  delete alreadyInjected[key];
};

var getBufferedStyles = function getBufferedStyles() {
  return injectionBuffer;
};

var startBuffering = function startBuffering() {
  if (isBuffering) {
    throw new Error("Cannot buffer while already buffering");
  }

  isBuffering = true;
};

var flushToArray = function flushToArray() {
  isBuffering = false;
  var ret = injectionBuffer;
  injectionBuffer = [];
  return ret;
};

var flushToString = function flushToString() {
  return flushToArray().join('');
};

var flushToStyleTag = function flushToStyleTag() {
  var cssRules = flushToArray();

  if (cssRules.length > 0) {
    injectStyleTag(cssRules);
  }
};

var getRenderedClassNames = function getRenderedClassNames()
/* : string[] */
{
  return Object.keys(alreadyInjected);
};

var addRenderedClassNames = function addRenderedClassNames(classNames
/* : string[] */
) {
  classNames.forEach(function (className) {
    alreadyInjected[className] = true;
  });
};

var isValidStyleDefinition = function isValidStyleDefinition(def
/* : Object */
) {
  return "_definition" in def && "_name" in def && "_len" in def;
};

var processStyleDefinitions = function processStyleDefinitions(styleDefinitions
/* : any[] */
, classNameBits
/* : string[] */
, definitionBits
/* : Object[] */
, length
/* : number */
)
/* : number */
{
  for (var i = 0; i < styleDefinitions.length; i += 1) {
    // Filter out falsy values from the input, to allow for
    // `css(a, test && c)`
    if (styleDefinitions[i]) {
      if (Array.isArray(styleDefinitions[i])) {
        // We've encountered an array, so let's recurse
        length += processStyleDefinitions(styleDefinitions[i], classNameBits, definitionBits, length);
      } else if (isValidStyleDefinition(styleDefinitions[i])) {
        classNameBits.push(styleDefinitions[i]._name);
        definitionBits.push(styleDefinitions[i]._definition);
        length += styleDefinitions[i]._len;
      } else {
        throw new Error("Invalid Style Definition: Styles should be defined using the StyleSheet.create method.");
      }
    }
  }

  return length;
};
/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {(Object|Object[])[]} styleDefinitions style definition objects, or
 *     arbitrarily nested arrays of them, as returned as properties of the
 *     return value of StyleSheet.create().
 */


var injectAndGetClassName = function injectAndGetClassName(useImportant
/* : boolean */
, styleDefinitions
/* : MaybeSheetDefinition[] */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : string */
{
  var classNameBits = [];
  var definitionBits = []; // Mutates classNameBits and definitionBits and returns a length which we
  // will append to the hash to decrease the chance of hash collisions.

  var length = processStyleDefinitions(styleDefinitions, classNameBits, definitionBits, 0); // Break if there aren't any valid styles.

  if (classNameBits.length === 0) {
    return "";
  }

  var className;

  if (true) {
    className = classNameBits.length === 1 ? "_".concat(classNameBits[0]) : "_".concat(hashString(classNameBits.join())).concat((length % 36).toString(36));
  } else {}

  injectStyleOnce(className, ".".concat(className), definitionBits, useImportant, selectorHandlers);
  return className;
};
/* ::
import type { SelectorHandler } from './generate.js';
export type SheetDefinition = { [id:string]: any };
export type SheetDefinitions = SheetDefinition | SheetDefinition[];
type RenderFunction = () => string;
type Extension = {
    selectorHandler: SelectorHandler
};
export type MaybeSheetDefinition = SheetDefinition | false | null | void
*/


var unminifiedHashFn = function unminifiedHashFn(str
/* : string */
, key
/* : string */
) {
  return "".concat(key, "_").concat(hashString(str));
}; // StyleSheet.create is in a hot path so we want to keep as much logic out of it
// as possible. So, we figure out which hash function to use once, and only
// switch it out via minify() as necessary.
//
// This is in an exported function to make it easier to test.


var initialHashFn = function initialHashFn() {
  return  true ? hashString : 0;
};

var hashFn = initialHashFn();
var StyleSheet = {
  create: function create(sheetDefinition
  /* : SheetDefinition */
  )
  /* : Object */
  {
    var mappedSheetDefinition = {};
    var keys = Object.keys(sheetDefinition);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var val = sheetDefinition[key];
      var stringVal = JSON.stringify(val);
      mappedSheetDefinition[key] = {
        _len: stringVal.length,
        _name: hashFn(stringVal, key),
        _definition: val
      };
    }

    return mappedSheetDefinition;
  },
  rehydrate: function rehydrate() {
    var renderedClassNames
    /* : string[] */
    = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    addRenderedClassNames(renderedClassNames);
  }
};
/**
 * Utilities for using Aphrodite server-side.
 *
 * This can be minified out in client-only bundles by replacing `typeof window`
 * with `"object"`, e.g. via Webpack's DefinePlugin:
 *
 *   new webpack.DefinePlugin({
 *     "typeof window": JSON.stringify("object")
 *   })
 */

var StyleSheetServer = typeof window !== 'undefined' ? null : {
  renderStatic: function renderStatic(renderFunc
  /* : RenderFunction */
  ) {
    reset();
    startBuffering();
    var html = renderFunc();
    var cssContent = flushToString();
    return {
      html: html,
      css: {
        content: cssContent,
        renderedClassNames: getRenderedClassNames()
      }
    };
  }
};
/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */

var StyleSheetTestUtils =  true ? null : 0;
/**
 * Generate the Aphrodite API exports, with given `selectorHandlers` and
 * `useImportant` state.
 */

function makeExports(useImportant
/* : boolean */
) {
  var selectorHandlers
  /* : SelectorHandler[] */
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelectorHandlers;
  return {
    StyleSheet: _objectSpread({}, StyleSheet, {
      /**
       * Returns a version of the exports of Aphrodite (i.e. an object
       * with `css` and `StyleSheet` properties) which have some
       * extensions included.
       *
       * @param {Array.<Object>} extensions: An array of extensions to
       *     add to this instance of Aphrodite. Each object should have a
       *     single property on it, defining which kind of extension to
       *     add.
       * @param {SelectorHandler} [extensions[].selectorHandler]: A
       *     selector handler extension. See `defaultSelectorHandlers` in
       *     generate.js.
       *
       * @returns {Object} An object containing the exports of the new
       *     instance of Aphrodite.
       */
      extend: function extend(extensions
      /* : Extension[] */
      ) {
        var extensionSelectorHandlers = extensions // Pull out extensions with a selectorHandler property
        .map(function (extension) {
          return extension.selectorHandler;
        }) // Remove nulls (i.e. extensions without a selectorHandler property).
        .filter(function (handler) {
          return handler;
        });
        return makeExports(useImportant, selectorHandlers.concat(extensionSelectorHandlers));
      }
    }),
    StyleSheetServer: StyleSheetServer,
    StyleSheetTestUtils: StyleSheetTestUtils,
    minify: function minify(shouldMinify
    /* : boolean */
    ) {
      hashFn = shouldMinify ? hashString : unminifiedHashFn;
    },
    css: function css()
    /* : MaybeSheetDefinition[] */
    {
      for (var _len = arguments.length, styleDefinitions = new Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
      }

      return injectAndGetClassName(useImportant, styleDefinitions, selectorHandlers);
    },
    flushToStyleTag: flushToStyleTag,
    injectAndGetClassName: injectAndGetClassName,
    defaultSelectorHandlers: defaultSelectorHandlers,
    reset: reset,
    resetInjectedStyle: resetInjectedStyle
  };
}

exports.makeExports = makeExports;

/***/ }),

/***/ 5011:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var __chunk_1 = __webpack_require__(8058);

__webpack_require__(5917);

__webpack_require__(3931);
/* @flow */


var useImportant = false; // Don't add !important to style definitions

var Aphrodite = __chunk_1.makeExports(useImportant);

var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers,
    reset = Aphrodite.reset,
    resetInjectedStyle = Aphrodite.resetInjectedStyle;
exports.StyleSheet = StyleSheet;
__webpack_unused_export__ = StyleSheetServer;
__webpack_unused_export__ = StyleSheetTestUtils;
exports.css = css;
__webpack_unused_export__ = minify;
__webpack_unused_export__ = flushToStyleTag;
__webpack_unused_export__ = injectAndGetClassName;
__webpack_unused_export__ = defaultSelectorHandlers;
__webpack_unused_export__ = reset;
__webpack_unused_export__ = resetInjectedStyle;

/***/ }),

/***/ 3493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5011);

/***/ }),

/***/ 3931:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
 // rawAsap provides everything we need except exception management.

var rawAsap = __webpack_require__(5316); // RawTasks are recycled to reduce GC churn.


var freeTasks = []; // We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.

var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */


module.exports = asap;

function asap(task) {
  var rawTask;

  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }

  rawTask.task = task;
  rawAsap(rawTask);
} // We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.


function RawTask() {
  this.task = null;
} // The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.


RawTask.prototype.call = function () {
  try {
    this.task.call();
  } catch (error) {
    if (asap.onerror) {
      // This hook exists purely for testing purposes.
      // Its name will be periodically randomized to break any code that
      // depends on its existence.
      asap.onerror(error);
    } else {
      // In a web browser, exceptions are not fatal. However, to avoid
      // slowing down the queue of pending tasks, we rethrow the error in a
      // lower priority turn.
      pendingErrors.push(error);
      requestErrorThrow();
    }
  } finally {
    this.task = null;
    freeTasks[freeTasks.length] = this;
  }
};

/***/ }),

/***/ 5316:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
 // Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.

module.exports = rawAsap;

function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
    flushing = true;
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}

var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.

var flushing = false; // `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
  flushing = false;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === "function") {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/***/ }),

/***/ 3390:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// BigScreen v2.0.5 - 2015-05-02 - MIT License
!function (a, b, c) {
  "use strict";

  function d(a) {
    var b = null;
    if ("VIDEO" === a.tagName) b = a;else {
      var c = a.getElementsByTagName("video");
      c[0] && (b = c[0]);
    }
    return b;
  }

  function e(a) {
    var b = d(a);

    if (b && b.webkitEnterFullscreen) {
      try {
        b.readyState < b.HAVE_METADATA ? (b.addEventListener("loadedmetadata", function e() {
          b.removeEventListener("loadedmetadata", e, !1), b.webkitEnterFullscreen(), l = !!b.getAttribute("controls");
        }, !1), b.load()) : (b.webkitEnterFullscreen(), l = !!b.getAttribute("controls")), k = b;
      } catch (c) {
        return r("not_supported", a);
      }

      return !0;
    }

    return r(void 0 === j.request ? "not_supported" : "not_enabled", a);
  }

  function f() {
    s.element || (q(), h());
  }

  function g() {
    c && "webkitfullscreenchange" === j.change && window.addEventListener("resize", f, !1);
  }

  function h() {
    c && "webkitfullscreenchange" === j.change && window.removeEventListener("resize", f, !1);
  }

  var i = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7,
      j = function () {
    var a = b.createElement("video"),
        c = {
      request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
      exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
      enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
      element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
      change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
      error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
    },
        d = {};

    for (var e in c) {
      for (var f = 0, g = c[e].length; g > f; f++) {
        if (c[e][f] in a || c[e][f] in b || "on" + c[e][f].toLowerCase() in b) {
          d[e] = c[e][f];
          break;
        }
      }
    }

    return d;
  }(),
      k = null,
      l = null,
      m = function m() {},
      n = [],
      o = !1;

  navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (o = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0);

  var p = function p(a) {
    var b = n[n.length - 1];
    b && (a !== b.element && a !== k || !b.hasEntered) && ("VIDEO" === a.tagName && (k = a), 1 === n.length && s.onenter(s.element), b.enter.call(b.element, a || b.element), b.hasEntered = !0);
  },
      q = function q() {
    !k || l || i || (k.setAttribute("controls", "controls"), k.removeAttribute("controls")), k = null, l = null;
    var a = n.pop();
    a && (a.exit.call(a.element), s.element || (n.forEach(function (a) {
      a.exit.call(a.element);
    }), n = [], s.onexit()));
  },
      r = function r(a, b) {
    if (n.length > 0) {
      var c = n.pop();
      b = b || c.element, c.error.call(b, a), s.onerror(b, a);
    }
  },
      s = {
    request: function request(a, d, f, g) {
      if (a = a || b.body, n.push({
        element: a,
        enter: d || m,
        exit: f || m,
        error: g || m
      }), void 0 === j.request) return void e(a);
      if (c && b[j.enabled] === !1) return void e(a);
      if (o !== !1 && 32 > o) return void e(a);
      if (c && void 0 === j.enabled) return j.enabled = "webkitFullscreenEnabled", a[j.request](), void setTimeout(function () {
        b[j.element] ? b[j.enabled] = !0 : (b[j.enabled] = !1, e(a));
      }, 250);

      try {
        a[j.request](), setTimeout(function () {
          b[j.element] || r(c ? "not_enabled" : "not_allowed", a);
        }, 100);
      } catch (h) {
        r("not_enabled", a);
      }
    },
    exit: function exit() {
      h(), b[j.exit]();
    },
    toggle: function toggle(a, b, c, d) {
      s.element ? s.exit() : s.request(a, b, c, d);
    },
    videoEnabled: function videoEnabled(a) {
      if (s.enabled) return !0;
      a = a || b.body;
      var c = d(a);
      return c && void 0 !== c.webkitSupportsFullscreen ? c.readyState < c.HAVE_METADATA ? "maybe" : c.webkitSupportsFullscreen : !1;
    },
    onenter: m,
    onexit: m,
    onchange: m,
    onerror: m
  };

  try {
    Object.defineProperties(s, {
      element: {
        enumerable: !0,
        get: function get() {
          return k && k.webkitDisplayingFullscreen ? k : b[j.element] || null;
        }
      },
      enabled: {
        enumerable: !0,
        get: function get() {
          return "webkitCancelFullScreen" !== j.exit || c ? o !== !1 && 32 > o ? !1 : b[j.enabled] || !1 : !0;
        }
      }
    }), j.change && b.addEventListener(j.change, function (a) {
      if (s.onchange(s.element), s.element) {
        var b = n[n.length - 2];
        b && b.element === s.element ? q() : (p(s.element), g());
      } else q();
    }, !1), b.addEventListener("webkitbeginfullscreen", function (a) {
      var b = !0;
      if (n.length > 0) for (var c = 0, e = n.length; e > c; c++) {
        var f = d(n[c].element);

        if (f === a.srcElement) {
          b = !1;
          break;
        }
      }
      b && n.push({
        element: a.srcElement,
        enter: m,
        exit: m,
        error: m
      }), s.onchange(a.srcElement), p(a.srcElement);
    }, !0), b.addEventListener("webkitendfullscreen", function (a) {
      s.onchange(a.srcElement), q(a.srcElement);
    }, !0), j.error && b.addEventListener(j.error, function (a) {
      r("not_allowed");
    }, !1);
  } catch (t) {
    s.element = null, s.enabled = !1;
  }

   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return s;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, document, self !== top);

/***/ }),

/***/ 7143:
/***/ (function(module) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */

function Events() {} //
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//


if (Object.create) {
  Events.prototype = Object.create(null); //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //

  if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */


function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */


function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
  return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */


function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */


function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */


EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
      events,
      name;
  if (this._eventsCount === 0) return names;

  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */


EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */


EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */


EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return false;
  var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;

      case 2:
        return listeners.fn.call(listeners.context, a1), true;

      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;

      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;

      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);
          break;

        case 2:
          listeners[i].fn.call(listeners[i].context, a1);
          break;

        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);
          break;

        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);
          break;

        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }
          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return this;

  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    } //
    // Reset the array, or remove it completely if we have no more listeners.
    //


    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
  }

  return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
}; //
// Alias methods names because people roll like that.
//


EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
// Expose the prefix.
//

EventEmitter.prefixed = prefix; //
// Allow `EventEmitter` to be imported as module namespace.
//

EventEmitter.EventEmitter = EventEmitter; //
// Expose the module.
//

if (true) {
  module.exports = EventEmitter;
}

/***/ }),

/***/ 6555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ Player$1; }
});

// UNUSED EXPORTS: ACTIONS, Controller, EVENTS, Layer, MessageContext, VideoSourceContext, createMessageHelper, useMessageContextRef

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/griffith-message/dist/index.esm.js
// pair to native DOM events, see https://mdn.io/video
// NOTE: 补充新类型时，应当在 `EventParamsMap` 中定义参数类型
var DOM;

(function (DOM) {
  DOM["PLAY"] = "event/dom/play";
  DOM["PLAYING"] = "event/dom/playing";
  DOM["PAUSE"] = "event/dom/pause";
  DOM["ENDED"] = "event/dom/ended";
  DOM["TIMEUPDATE"] = "event/dom/timeupdate";
  DOM["ERROR"] = "event/dom/error";
  DOM["WAITING"] = "event/dom/waiting";
  DOM["CANPLAY"] = "event/dom/canplay";
  DOM["LOADEDDATA"] = "event/dom/loadeddata";
  DOM["PROGRESS"] = "event/dom/progress";
})(DOM || (DOM = {})); // custom events
// NOTE: 补充新类型时，应当在 `EventParamsMap` 中定义参数类型


var PLAYER$1;

(function (PLAYER) {
  PLAYER["QUALITY_CHANGE"] = "event/player/quality-change";
  PLAYER["CHANGE_QUALITY_START"] = "event/player/quality-change-start";
  PLAYER["CHANGE_QUALITY_SUCCESS"] = "event/player/quality-change-success";
  PLAYER["CHANGE_QUALITY_FAIL"] = "event/player/quality-change-fail";
  PLAYER["PLAYBACK_RATE_CHANGE"] = "event/player/rate-change";
  PLAYER["REQUEST_PLAY"] = "event/player/request-play";
  PLAYER["PLAY_REJECTED"] = "event/player/play-rejected";
  PLAYER["REQUEST_PAUSE"] = "event/player/request-pause";
  PLAYER["PLAY_COUNT"] = "event/player/play-count";
  PLAYER["PLAY_FAILED"] = "event/player/play-failed";
  PLAYER["ENTER_FULLSCREEN"] = "event/player/enter-fullscreen";
  PLAYER["EXIT_FULLSCREEN"] = "event/player/exit-fullscreen";
  PLAYER["ENTER_PAGE_FULLSCREEN"] = "event/player/enter-page-fullscreen";
  PLAYER["EXIT_PAGE_FULLSCREEN"] = "event/player/exit-page-fullscreen";
  PLAYER["ENTER_PIP"] = "event/player/enter-pip";
  PLAYER["EXIT_PIP"] = "event/player/exit-pip";
  PLAYER["SHOW_CONTROLLER"] = "event/player/show-controller";
  PLAYER["HIDE_CONTROLLER"] = "event/player/hide-controller";
  PLAYER["HOVER_PROGRESS_DOT"] = "event/player/hover-progress-dot";
  PLAYER["LEAVE_PROGRESS_DOT"] = "event/player/leave-progress-dot";
  PLAYER["SUBSCRIPTION_READY"] = "event/player/subscription-ready";
})(PLAYER$1 || (PLAYER$1 = {})); // TODO：临时兼容，下一版本删除，直接在定义上合并，否则造成引用上的麻烦


var EVENTS = Object.assign(Object.assign(Object.assign({}, DOM), PLAYER$1), {
  /** @deprecated Please use `EVENTS.NAME` instead */
  DOM: DOM,

  /** @deprecated Please use `EVENTS.NAME` instead */
  PLAYER: PLAYER$1
}); // NOTE: 补充新类型时，应当在 `ActionParamsMap` 中定义参数类型

var PLAYER;

(function (PLAYER) {
  PLAYER["PLAY"] = "action/player/play";
  PLAYER["PAUSE"] = "action/player/pause";
  PLAYER["SET_VOLUME"] = "action/player/set-volume";
  PLAYER["ENTER_FULLSCREEN"] = "action/player/enter-fullscreen";
  PLAYER["EXIT_FULLSCREEN"] = "action/player/exit-fullscreen";
  PLAYER["ENTER_PAGE_FULLSCREEN"] = "event/player/enter-page-fullscreen";
  PLAYER["EXIT_PAGE_FULLSCREEN"] = "event/player/exit-page-fullscreen";
  PLAYER["ENTER_PIP"] = "action/player/enter-pip";
  PLAYER["EXIT_PIP"] = "action/player/exit-pip";
  PLAYER["TIME_UPDATE"] = "action/player/time-update";
  PLAYER["SHOW_CONTROLLER"] = "action/player/show-controller";
})(PLAYER || (PLAYER = {})); // TODO：临时兼容，下一版本删除，直接在定义上合并，否则造成引用上的麻烦


var ACTIONS = Object.assign(Object.assign({}, PLAYER), {
  /** @deprecated Please use `ACTIONS.NAME` instead */
  PLAYER: PLAYER
});
var LIB_ID = 'griffith';
/**
 * 创建一个消息管理器
 *
 * @example
 *
 * ```ts
 * import {createMessageHelper, EVENTS, ACTIONS} from 'griffith-message'
 *
 * const helper = createMessageHelper()
 * // register event listener
 * helper.subscribeMessage(EVENTS.PLAY, r => { r.currentTime })
 * helper.subscribeMessage(EVENTS.QUALITY_CHANGE, r => { r.quality })
 * // dispatch action to player
 * helper.dispatchMessage(window, ACTIONS.SET_VOLUME, {volume: .5})
 * // dispose all event listeners
 * helper.dispose()
 * ```
 *
 * @param id 唯一 id，传出消息会带着这个 id
 * @param targetOrigin 对应窗口的域名，不传或者传 * 表示不限制
 * @param shouldValidateId 是否验证传入消息的 id 和自身 id 相同
 */

function createMessageHelper(id) {
  var targetOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  var shouldValidateId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var disposers = new Set();

  function subscribeMessage(arg1, arg2) {
    var isLegacy = typeof arg1 === 'function';
    var handler = isLegacy ? arg1 : arg2;
    var eventName = isLegacy ? undefined : arg1;

    function realHandler(event) {
      // 限制消息来源 @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#The_dispatched_event
      var origin = event.origin;
      var originIsValidated = targetOrigin === '*' || targetOrigin === origin;

      var _ref = event.data || {},
          from = _ref.from,
          incomingId = _ref.id,
          payload = _ref.payload;

      var idIsValidated = !shouldValidateId || id === incomingId;

      if (originIsValidated && from === LIB_ID && idIsValidated && payload) {
        var name = payload.name,
            data = payload.data;

        if (!name || typeof handler !== 'function') {
          return;
        }

        if (isLegacy) {
          handler(name, data, event.source);
        } else if (eventName === name) {
          handler(data, event.source);
        }
      }
    }

    window.addEventListener('message', realHandler);
    var disposer = {
      unsubscribe: function unsubscribe() {
        window.removeEventListener('message', realHandler);
        disposers.delete(disposer);
      }
    };
    disposers.add(disposer);
    return disposer;
  }
  /**
   * Dispose all registered event listeners.
   */


  var dispose = function dispose() {
    disposers.forEach(function (x) {
      return x.unsubscribe();
    });
  };
  /**
   * Dispatch action to player
   */


  var dispatchMessage = function dispatchMessage(target, name) {
    var _a;

    (_a = target === null || target === void 0 ? void 0 : target.postMessage) === null || _a === void 0 ? void 0 : _a.call(target, {
      from: LIB_ID,
      id: id,
      payload: {
        name: name,
        data: arguments.length <= 2 ? undefined : arguments[2]
      }
    }, targetOrigin || '*');
  };

  return {
    subscribeMessage: subscribeMessage,
    dispatchMessage: dispatchMessage,
    dispose: dispose
  };
}


// EXTERNAL MODULE: ./node_modules/aphrodite/no-important.js
var no_important = __webpack_require__(3493);
;// CONCATENATED MODULE: ./node_modules/griffith-utils/dist/index.esm.js
var LogLevel;

(function (LogLevel) {
  LogLevel["LOG"] = "log";
  LogLevel["DEBUG"] = "debug";
  LogLevel["INFO"] = "info";
  LogLevel["WARN"] = "warn";
  LogLevel["ERROR"] = "error";
})(LogLevel || (LogLevel = {}));

var logger = {
  log: function log(level) {
    var _console;

    /* eslint-disable no-console */
    var method = console[level] ? level : 'log';

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, ['[griffith]'].concat(params));
    /* eslint-enable no-console */

  },
  debug: function debug() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.log.apply(this, [LogLevel.DEBUG].concat(args));
  },
  info: function info() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.log.apply(this, [LogLevel.INFO].concat(args));
  },
  warn: function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.log.apply(this, [LogLevel.WARN].concat(args));
  },
  error: function error() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.log.apply(this, [LogLevel.ERROR].concat(args));
  }
};

function parseUA(userAgent) {
  return {
    isIE: /MSIE|Trident/i.test(userAgent),
    isMobile: /iPhone|iPad|iPod|Android/i.test(userAgent),
    isAndroid: /(android)/i.test(userAgent),
    isSafari: /^((?!chrome|android).)*safari/i.test(userAgent)
  };
}

var ua = parseUA( // TODO: 加一个 context 让各处访问更好
typeof navigator !== 'undefined' ? navigator.userAgent : '');
/**
 * Copied from https://github.com/video-dev/hls.js/blob/master/src/is-supported.js
 */

function getMediaSource() {
  if (typeof window !== 'undefined') {
    return window.MediaSource || window.WebKitMediaSource;
  }
}

function isMSESupported() {
  var mediaSource = getMediaSource();
  var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
  var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
  var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
  return !!isTypeSupported && !!sourceBufferValidAPI;
}

function isHlsNativeSupported() {
  var video = document.createElement('video');
  return Boolean(video.canPlayType('application/vnd.apple.mpegURL'));
}

function sequence() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return function () {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return fns.reduce(function (_, fn) {
      return fn.apply(void 0, args);
    }, null);
  };
}


// EXTERNAL MODULE: ./node_modules/isomorphic-bigscreen/index.browser.js
var index_browser = __webpack_require__(3771);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);
// EXTERNAL MODULE: consume shared module (default) react@^16.8 || ^17 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(9138);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(7143);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(8573);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(9151);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/lodash/clamp.js
var clamp = __webpack_require__(4442);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);
// EXTERNAL MODULE: ./node_modules/lodash/noop.js
var noop = __webpack_require__(9694);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);
// EXTERNAL MODULE: ./node_modules/hls.js/dist/hls.light.min.js
var hls_light_min = __webpack_require__(6237);
var hls_light_min_default = /*#__PURE__*/__webpack_require__.n(hls_light_min);
;// CONCATENATED MODULE: ./node_modules/griffith-hls/dist/index.esm.js







/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function createMasterM3U8(list) {
  var result = [];
  result.push('#EXTM3U');
  list.forEach(function (item) {
    var meta = {
      'PROGRAM-ID': '1',
      BANDWIDTH: String(item.bandwidth)
    };

    if (item.resolution) {
      var _item$resolution = item.resolution,
          width = _item$resolution.width,
          height = _item$resolution.height;
      meta.RESOLUTION = "".concat(width, "x").concat(height);
    }

    result.push("#EXT-X-STREAM-INF:".concat(Object.entries(meta).map(function (_ref) {
      var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return "".concat(key, "=").concat(value);
    }).join(',')));
    result.push(item.source);
  });
  return result.join('\n');
}

var getMasterM3U8Blob = function getMasterM3U8Blob(sources) {
  var list = sources.map(function (item) {
    return {
      source: item.source,
      bandwidth: item.bitrate * 1024,
      resolution: {
        width: item.width,
        height: item.height
      }
    };
  });
  return new Blob([createMasterM3U8(list)], {
    type: 'application/vnd.apple.mpegURL'
  });
};

var VideoComponent = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(VideoComponent, _Component);

  var _super = (0,createSuper/* default */.Z)(VideoComponent);

  function VideoComponent() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, VideoComponent);

    _this = _super.apply(this, arguments);
    _this.video = null;
    _this.manuallyBuildAdaptiveM3U8Blob = false;
    _this.hasLoadStarted = false;
    return _this;
  }

  (0,createClass/* default */.Z)(VideoComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          src = _this$props.src,
          sources = _this$props.sources,
          useAutoQuality = _this$props.useAutoQuality;
      this.hls = new (hls_light_min_default())({
        autoStartLoad: false
      });
      this.hls.attachMedia(this.video);
      var isAutoQualitySourceProvided = Boolean(sources.find(function (s) {
        return s.quality === 'auto';
      })); // 启用自动质量但是又没有提供 auto 规格的 source，那么就尝试本地手动生成

      if (useAutoQuality && !isAutoQualitySourceProvided) {
        var master = getMasterM3U8Blob(sources);
        this.src = URL.createObjectURL(master);
        this.manuallyBuildAdaptiveM3U8Blob = true;
      } else {
        this.src = src;
      }

      this.hls.loadSource(this.src);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          currentQuality = _this$props2.currentQuality,
          sources = _this$props2.sources,
          paused = _this$props2.paused,
          src = _this$props2.src;

      if (!this.hls) {
        return;
      }

      if (currentQuality !== prevProps.currentQuality || prevProps.src !== src) {
        // 切换清晰度
        var source = sources.find(function (s) {
          return s.quality === currentQuality;
        });

        if (source) {
          if (this.manuallyBuildAdaptiveM3U8Blob) {
            var levels = this.hls.levels;
            var level = levels.findIndex(function (l) {
              return l.url.includes(source.source);
            });
            this.hls.nextLevel = level;
          } else {
            // TODO: 没有在 hls 的 API 内部找到顺畅切换 source 的方法
            // 因此这里比较直接和生硬
            var currentTime = this.video.currentTime;
            this.hls.destroy();
            this.hls = new (hls_light_min_default())({
              autoStartLoad: false
            });
            this.hls.attachMedia(this.video);
            this.hls.loadSource(source.source);
            this.video.currentTime = currentTime;
            this.hls.startLoad();

            if (!paused) {
              void this.video.play();
            }
          }
        } else {
          // 一定意味着选择了手动生成的「auto」
          this.hls.nextLevel = -1;
        }
      } // 切换播放状态


      if (!paused && prevProps.paused && !this.hasLoadStarted) {
        this.hls.startLoad();
        this.hasLoadStarted = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hls.destroy();

      if (this.manuallyBuildAdaptiveM3U8Blob) {
        URL.revokeObjectURL(this.src);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          onRef = _a.onRef,
          currentQuality = _a.currentQuality,
          useAutoQuality = _a.useAutoQuality,
          src = _a.src,
          sources = _a.sources,
          paused = _a.paused,
          props = __rest(_a, ["onRef", "currentQuality", "useAutoQuality", "src", "sources", "paused"]);

      return index_js_default().createElement("video", Object.assign({
        ref: function ref(el) {
          if (onRef) {
            onRef(el);
          }

          _this2.video = el;
        }
      }, props));
    }
  }]);

  return VideoComponent;
}(index_js_.Component);

var index = {
  pluginName: 'griffith-hls',
  VideoComponent: VideoComponent,
  willHandleSrcChange: true
};

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(8121);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./node_modules/griffith-mp4/dist/index.esm.js










/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function index_esm_rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

var FragmentFetch = /*#__PURE__*/function () {
  function FragmentFetch(url, start, end, callback) {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, FragmentFetch);

    this.remove = function () {
      FragmentFetch.queue = FragmentFetch.queue.filter(function (item) {
        return item.start !== _this.start;
      });
    };

    this.start = start;
    FragmentFetch.queue.push(this);
    var xhr = new XMLHttpRequest();
    this.xhr = xhr;
    xhr.open('get', url);
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader('Range', "bytes=".concat(start, "-").concat(end));

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 206) {
        callback(xhr.response);
      }

      _this.remove();
    };

    xhr.send();

    xhr.onerror = function () {
      _this.remove();
    };

    xhr.onabort = function () {
      _this.remove();
    };
  }

  (0,createClass/* default */.Z)(FragmentFetch, null, [{
    key: "clear",
    value: function clear() {
      while (FragmentFetch.queue.length) {
        var item = FragmentFetch.queue.shift();
        item.xhr.abort();
      }
    }
  }]);

  return FragmentFetch;
}();

FragmentFetch.queue = [];

var Stream = /*#__PURE__*/function () {
  function Stream(buffer) {
    (0,classCallCheck/* default */.Z)(this, Stream);

    this.buffer = buffer;
    this.position = 0;
  }

  (0,createClass/* default */.Z)(Stream, [{
    key: "readType",
    value: function readType() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var typeBuffer = [];

      for (var i = 0; i < length; i++) {
        typeBuffer.push(this.buffer[this.position++]);
      }

      return String.fromCharCode.apply(null, typeBuffer);
    }
  }, {
    key: "readByte",
    value: function readByte(length) {
      switch (length) {
        case 1:
          return this.readOneByte();

        case 2:
          return this.readTwoByte();

        case 3:
          return this.readThreeByte();

        case 4:
          return this.readFourByte();

        default:
          return 0;
      }
    }
  }, {
    key: "readOneByte",
    value: function readOneByte() {
      return this.buffer[this.position++] >>> 0;
    }
  }, {
    key: "readTwoByte",
    value: function readTwoByte() {
      return (this.buffer[this.position++] << 8 | this.buffer[this.position++]) >>> 0;
    }
  }, {
    key: "readThreeByte",
    value: function readThreeByte() {
      return (this.buffer[this.position++] << 16 | this.buffer[this.position++] << 8 | this.buffer[this.position++]) >>> 0;
    }
  }, {
    key: "readFourByte",
    value: function readFourByte() {
      return (this.buffer[this.position++] << 24 | this.buffer[this.position++] << 16 | this.buffer[this.position++] << 8 | this.buffer[this.position++]) >>> 0;
    }
  }]);

  return Stream;
}();

function ftyp$1(buffer) {
  var stream = new Stream(buffer);
  var majorBrand = stream.readType();
  var minorVersion = stream.readByte(4);
  var compatibleBrands = [];

  for (var i = stream.position; i < buffer.length; i += 4) {
    compatibleBrands.push(stream.readType(4));
  }

  var ftypBox = {
    majorBrand: majorBrand,
    minorVersion: minorVersion,
    compatibleBrands: compatibleBrands
  };
  return ftypBox;
}

function mvhd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var creationTime = stream.readByte(4);
  var modificationTime = stream.readByte(4);
  var timescale = stream.readByte(4);
  var duration = stream.readByte(4);
  var rate = stream.readByte(4);
  var volume = stream.readByte(1); // reserved

  stream.readByte(3);
  stream.readByte(4);
  stream.readByte(4);
  var matrix = [];

  for (var i = 0; i < 36; i += 4) {
    matrix.push(stream.readByte(4));
  } // preDefined


  for (var _i = 0; _i < 24; _i += 4) {
    stream.readByte(4);
  }

  var nextTrackID = stream.readByte(4);
  var mvhdBox = {
    version: version,
    flags: flags,
    creationTime: creationTime,
    modificationTime: modificationTime,
    timescale: timescale,
    duration: duration,
    rate: rate,
    volume: volume,
    matrix: matrix,
    nextTrackID: nextTrackID
  };
  return mvhdBox;
}

function tkhd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var creationTime = stream.readByte(4);
  var modificationTime = stream.readByte(4);
  var trackID = stream.readByte(4); // reserved

  stream.readByte(4);
  var duration = stream.readByte(4); // reserved

  stream.readByte(4);
  stream.readByte(4);
  var layer = stream.readByte(2);
  var alternateGroup = stream.readByte(2);
  var volume = stream.readByte(2); // reserved

  stream.readByte(2);
  var matrix = [];

  for (var i = 0; i < 36; i += 4) {
    matrix.push(stream.readByte(4));
  }

  var width = Number("".concat(stream.readByte(2), ".").concat(stream.readByte(2)));
  var height = Number("".concat(stream.readByte(2), ".").concat(stream.readByte(2)));
  var tkhdBox = {
    version: version,
    flags: flags,
    creationTime: creationTime,
    modificationTime: modificationTime,
    trackID: trackID,
    duration: duration,
    layer: layer,
    alternateGroup: alternateGroup,
    volume: volume,
    matrix: matrix,
    width: width,
    height: height
  };
  return tkhdBox;
}

function elst(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var entries = [];

  for (var i = 0; i < entryCount; ++i) {
    var segmentDuration = stream.readByte(4);
    var mediaTime = stream.readByte(4); // 0xffffffff -> -1

    if (mediaTime === 4294967295) {
      mediaTime = -1;
    }

    var mediaRateInteger = stream.readByte(2);
    var mediaRateFraction = stream.readByte(2);
    entries.push({
      segmentDuration: segmentDuration,
      mediaTime: mediaTime,
      mediaRateInteger: mediaRateInteger,
      mediaRateFraction: mediaRateFraction
    });
  }

  var elstBox = {
    version: version,
    flags: flags,
    entries: entries
  };
  return elstBox;
}

function mdhd$2(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var creationTime = stream.readByte(4);
  var modificationTime = stream.readByte(4);
  var timescale = stream.readByte(4);
  var duration = stream.readByte(4);
  var language = stream.readByte(2);
  var field = [];
  field[0] = language >> 10 & 0x1f;
  field[1] = language >> 5 & 0x1f;
  field[2] = language & 0x1f;
  var languageString = String.fromCharCode(0x60 + field[0], 0x60 + field[1], 0x60 + field[2]); // preDefined

  stream.readByte(2);
  var mdhdBox = {
    version: version,
    flags: flags,
    creationTime: creationTime,
    modificationTime: modificationTime,
    timescale: timescale,
    duration: duration,
    languageString: languageString
  };
  return mdhdBox;
}

function hdlr$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3); // preDefined

  stream.readByte(4);
  var handlerType = stream.readType().toString();
  var handlerType2 = stream.readType().toString(); // reserved

  stream.readByte(4);
  stream.readByte(4);
  var name = [];
  var c;

  while ((c = stream.readByte(1)) !== 0x00) {
    name.push(String.fromCharCode(c));
  }

  var hdlrBox = {
    version: version,
    flags: flags,
    handlerType: handlerType,
    handlerType2: handlerType2 || 0,
    name: name.join('')
  };
  return hdlrBox;
}

function vmhd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var graphicsmode = stream.readByte(2);
  var opcolor = new Array(3).fill(stream.readByte(2));
  var vmhdBox = {
    version: version,
    flags: flags,
    graphicsmode: graphicsmode,
    opcolor: opcolor
  };
  return vmhdBox;
}

function dref$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var urlBox = [];
  var urlBuffer = stream.buffer.slice(8);
  var newStream = new Stream(urlBuffer);
  var MP4Box$1 = new MP4Box();

  for (var i = 0; i < entryCount; i++) {
    MP4Box$1.readSize(newStream);
    MP4Box$1.readType(newStream);
    MP4Box$1.readBody(newStream);
    urlBox.push(MP4Box$1.box);
  }

  var drefBox = {
    version: version,
    flags: flags,
    url: urlBox
  };
  return drefBox;
}

function url$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var urlBox = {
    version: version,
    flags: flags
  };
  return urlBox;
}

function stsd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var box = [];
  var avc1Buffer = stream.buffer.slice(8);
  var newStream = new Stream(avc1Buffer);
  var MP4Box$1 = new MP4Box();
  var type = 'avc1';

  for (var i = 0; i < entryCount; i++) {
    MP4Box$1.readSize(newStream);
    MP4Box$1.readType(newStream);
    MP4Box$1.readBody(newStream);
    box.push(MP4Box$1.box);
    type = MP4Box$1.type;
  }

  var stsdBox = (0,defineProperty/* default */.Z)({
    version: version,
    flags: flags
  }, type, box);

  return stsdBox;
}

function avc1(buffer) {
  var stream = new Stream(buffer); // reserved

  stream.readByte(4);
  stream.readByte(2);
  var dataReferenceIndex = stream.readByte(2); // preDefined

  stream.readByte(2); // reserved

  stream.readByte(2); // preDefined

  stream.readByte(4);
  stream.readByte(4);
  stream.readByte(4);
  var width = stream.readByte(2);
  var height = stream.readByte(2);
  var horizresolution = stream.readByte(4);
  var vertresolution = stream.readByte(4); // reserved

  stream.readByte(4);
  var frameCount = stream.readByte(2);
  var compressorname = stream.readType(32);
  var depth = stream.readByte(2); // preDefined

  stream.readByte(2);
  var avcCBuffer = stream.buffer.slice(78);
  var newStream = new Stream(avcCBuffer);
  var MP4Box$1 = new MP4Box();
  MP4Box$1.readSize(newStream);
  MP4Box$1.readType(newStream);
  MP4Box$1.readBody(newStream);
  var avcCBox = MP4Box$1.box;
  var avc1Box = {
    dataReferenceIndex: dataReferenceIndex,
    width: width,
    height: height,
    horizresolution: horizresolution,
    vertresolution: vertresolution,
    frameCount: frameCount,
    compressorname: compressorname,
    depth: depth,
    avcC: avcCBox
  };
  return avc1Box;
}

function avcC$1(buffer) {
  var stream = new Stream(buffer);
  var configurationVersion = stream.readByte(1);
  var AVCProfileIndication = stream.readByte(1);
  var profileCompatibility = stream.readByte(1);
  var AVCLevelIndication = stream.readByte(1);
  var lengthSizeMinusOne = stream.readByte(1) & 0x3;
  var numOfSequenceParameterSets = stream.readByte(1) & 31;
  var SPS = [];

  for (var i = 0; i < numOfSequenceParameterSets; i++) {
    var length = stream.readByte(2);
    SPS.push.apply(SPS, (0,toConsumableArray/* default */.Z)(stream.buffer.slice(stream.position, stream.position + length)));
    stream.position += length;
  }

  var numOfPictureParameterSets = stream.readByte(1);
  var PPS = [];

  for (var _i2 = 0; _i2 < numOfPictureParameterSets; _i2++) {
    var _length = stream.readByte(2);

    PPS.push.apply(PPS, (0,toConsumableArray/* default */.Z)(stream.buffer.slice(stream.position, stream.position + _length)));
    stream.position += _length;
  }

  var avcCBox = {
    configurationVersion: configurationVersion,
    AVCProfileIndication: AVCProfileIndication,
    profileCompatibility: profileCompatibility,
    AVCLevelIndication: AVCLevelIndication,
    lengthSizeMinusOne: lengthSizeMinusOne,
    SPS: SPS,
    PPS: PPS
  };
  return avcCBox;
}

function stts$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < entryCount; i++) {
    var sampleCount = stream.readByte(4);
    var sampleDelta = stream.readByte(4);
    samples.push({
      sampleCount: sampleCount,
      sampleDelta: sampleDelta
    });
  }

  var sttsBox = {
    version: version,
    flags: flags,
    samples: samples
  };
  return sttsBox;
}

function stss$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < entryCount; i++) {
    samples.push({
      sampleNumber: stream.readByte(4)
    });
  }

  var stssBox = {
    version: version,
    flags: flags,
    samples: samples
  };
  return stssBox;
}

function ctts(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < entryCount; i++) {
    samples.push({
      sampleCount: stream.readByte(4),
      sampleOffset: stream.readByte(4)
    });
  }

  var cttsBox = {
    version: version,
    flags: flags,
    samples: samples
  };
  return cttsBox;
}

function mdhd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < entryCount; i++) {
    samples.push({
      firstChunk: stream.readByte(4),
      samplesPerChunk: stream.readByte(4),
      sampleDescriptionIndex: stream.readByte(4)
    });
  }

  var mdhdBox = {
    version: version,
    flags: flags,
    samples: samples
  };
  return mdhdBox;
}

function stss(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var sampleSize = stream.readByte(4);
  var sampleCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < sampleCount; i++) {
    samples.push({
      entrySize: stream.readByte(4)
    });
  }

  var stssBox = {
    version: version,
    flags: flags,
    sampleSize: sampleSize,
    samples: samples
  };
  return stssBox;
}

function stco$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var entryCount = stream.readByte(4);
  var samples = [];

  for (var i = 0; i < entryCount; i++) {
    samples.push({
      chunkOffset: stream.readByte(4)
    });
  }

  var stcoBox = {
    version: version,
    flags: flags,
    samples: samples
  };
  return stcoBox;
}

function smhd$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var data = [];

  for (var i = 0; i < 4; i++) {
    data.push(stream.readByte(1));
  }

  var smhdBox = {
    version: version,
    flags: flags,
    data: data
  };
  return smhdBox;
}

function mp4a$1(buffer) {
  var stream = new Stream(buffer); // reserved

  stream.readByte(4);
  stream.readByte(2);
  var dataReferenceIndex = stream.readByte(2); // preDefined

  stream.readByte(2); // reserved

  stream.readByte(2); // preDefined

  stream.readByte(4);
  var channelCount = stream.readByte(2);
  var sampleSize = stream.readByte(2); // reserved

  stream.readByte(4);
  var sampleRate = stream.readByte(4) / (1 << 16);
  var esdsBuffer = stream.buffer.slice(28);
  var newStream = new Stream(esdsBuffer);
  var MP4Box$1 = new MP4Box();
  MP4Box$1.readSize(newStream);
  MP4Box$1.readType(newStream);
  MP4Box$1.readBody(newStream);
  var esdsBox = MP4Box$1.box;
  var mp4aBox = {
    dataReferenceIndex: dataReferenceIndex,
    channelCount: channelCount,
    sampleSize: sampleSize,
    sampleRate: sampleRate,
    esds: esdsBox
  };
  return mp4aBox;
}

var TAGS = [null, null, null, 'ESDescrTag', 'DecoderConfigDescrTag', 'DecSpecificDescrTag'];

function esds$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var type = TAGS[stream.readByte(1)];

  var esdsBox = (0,defineProperty/* default */.Z)({
    version: version,
    flags: flags
  }, type, getESDescrTag(stream));

  return esdsBox;
}

function getESDescrTag(stream) {
  var data = {};
  var size = stream.readByte(1);

  if (size === 0x80) {
    stream.readByte(2);
    size = stream.readByte(1) + 5;
  } else {
    size += 2;
  }

  data.size = size;
  data.ESID = stream.readByte(2);
  data.streamPriority = stream.readByte(1);
  data[TAGS[stream.readByte(1)]] = getDecoderConfigDescrTag(stream);
  data[TAGS[stream.readByte(1)]] = getDecSpecificDescrTag(stream);
  return data;
}

function getDecoderConfigDescrTag(stream) {
  var data = {};
  var size = stream.readByte(1);

  if (size === 0x80) {
    stream.readByte(2);
    size = stream.readByte(1) + 5;
  } else {
    size += 2;
  }

  data.size = size;
  data.objectTypeIndication = stream.readByte(1);
  var type = stream.readByte(1);
  data.streamType = type & (1 << 7) - 1;
  data.upStream = type & 1 << 1;
  data.bufferSize = stream.readByte(3);
  data.maxBitrate = stream.readByte(4);
  data.avgBitrate = stream.readByte(4);
  return data;
}

function getDecSpecificDescrTag(stream) {
  var data = {};
  var size = stream.readByte(1);
  var dataSize = size;

  if (size === 0x80) {
    stream.readByte(2);
    size = stream.readByte(1) + 5;
    dataSize = size - 5;
  } else {
    size += 2;
  }

  data.size = size;
  var EScode = [];

  for (var i = 0; i < dataSize; i++) {
    EScode.push(Number(stream.readByte(1)).toString(16).padStart(2, '0'));
  }

  data.audioConfig = EScode.map(function (item) {
    return Number("0x".concat(item));
  });
  return data;
}

function meta(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var metaBox = {
    version: version,
    flags: flags
  };
  return metaBox;
}

function mdat$1(buffer) {
  var stream = new Stream(buffer);
  var data = stream.buffer.subarray(stream.position, stream.buffer.length);
  var mdatBox = {
    data: data
  };
  return mdatBox;
}

function sdtp$1(buffer) {
  var stream = new Stream(buffer);
  var version = stream.readByte(1);
  var flags = stream.readByte(3);
  var samplesFlag = [];

  for (var i = stream.position; i < buffer.length; i++) {
    var tmpByte = stream.readByte(1);
    samplesFlag.push({
      isLeading: tmpByte >> 6,
      dependsOn: tmpByte >> 4 & 0x3,
      isDepended: tmpByte >> 2 & 0x3,
      hasRedundancy: tmpByte & 0x3
    });
  }

  var sdtpBox = {
    version: version,
    flags: flags,
    samplesFlag: samplesFlag
  };
  return sdtpBox;
}

function thmb(buffer) {
  var stream = new Stream(buffer);
  var data = stream.readByte(buffer.length);
  var thmbBox = {
    data: data
  };
  return thmbBox;
}

var boxParse = {
  ftyp: ftyp$1,
  mvhd: mvhd$1,
  tkhd: tkhd$1,
  elst: elst,
  mdhd: mdhd$2,
  hdlr: hdlr$1,
  vmhd: vmhd$1,
  dref: dref$1,
  'url ': url$1,
  stsd: stsd$1,
  avc1: avc1,
  avcC: avcC$1,
  stts: stts$1,
  stss: stss$1,
  ctts: ctts,
  stsc: mdhd$1,
  stsz: stss,
  stco: stco$1,
  smhd: smhd$1,
  mp4a: mp4a$1,
  esds: esds$1,
  meta: meta,
  mdat: mdat$1,
  sdtp: sdtp$1,
  thmb: thmb
};
var CONTAINER_BOXES = ['moov', 'trak', 'edts', 'mdia', 'minf', 'dinf', 'stbl'];
var SPECIAL_BOXES = ['udta', 'free'];

var MP4Box = /*#__PURE__*/function () {
  function MP4Box() {
    (0,classCallCheck/* default */.Z)(this, MP4Box);

    this.size = 0;
    this.type = '';
    this.start = 0;
    this.box = {};
  }

  (0,createClass/* default */.Z)(MP4Box, [{
    key: "readSize",
    value: function readSize(stream) {
      this.start = stream.position;
      this.size = stream.readByte(4);
    }
  }, {
    key: "readType",
    value: function readType(stream) {
      this.type = stream.readType(); // 一个 box 的 size 只可能大于等于 8
      // 如果从 readSize 中解析出来的 mdat size 为 1，则表明此视频比较大，需要 type 后的 8 个字节来计算实际大小

      if (this.size === 1) {
        this.size = stream.readByte(4) << 32;
        this.size |= stream.readByte(4);
      }
    }
  }, {
    key: "readBody",
    value: function readBody(stream) {
      var _this2 = this;

      this.data = stream.buffer.slice(stream.position, this.size + this.start);

      if (CONTAINER_BOXES.find(function (item) {
        return item === _this2.type;
      }) || SPECIAL_BOXES.find(function (item) {
        return item === _this2.type;
      })) {
        this.parserContainerBox();
      } else {
        if (!boxParse[this.type]) {
          this.box = {};
        } else {
          this.box = Object.assign(Object.assign({}, this.box), boxParse[this.type](this.data));
        }
      }

      stream.position += this.data.length;
    }
  }, {
    key: "parserContainerBox",
    value: function parserContainerBox() {
      var stream = new Stream(this.data);
      var size = stream.buffer.length;

      while (stream.position < size) {
        var Box = new MP4Box();
        Box.readSize(stream);
        Box.readType(stream);
        Box.readBody(stream); // @ts-expect-error This condition will always return 'false'

        if (Box.type === 'trak' && Box.box.mdia && Box.box.mdia.hdlr) {
          var handlerType = Box.box.mdia.hdlr.handlerType;

          if (handlerType === 'vide') {
            this.box.videoTrak = Box.box;
          } else if (handlerType === 'soun') {
            this.box.audioTrak = Box.box;
          } else {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            this.box["".concat(handlerType, "Trak")] = Box.box;
          }
        } else {
          this.box[Box.type] = Box.box;
        }
      }
    }
  }]);

  return MP4Box;
}();

var MP4Parse = /*#__PURE__*/function () {
  function MP4Parse(buffer) {
    (0,classCallCheck/* default */.Z)(this, MP4Parse);

    this.buffer = buffer;
    this.stream = new Stream(buffer);
    this.mp4BoxTreeObject = {};
    this.init();
  }

  (0,createClass/* default */.Z)(MP4Parse, [{
    key: "init",
    value: function init() {
      this.parse();
    }
  }, {
    key: "parse",
    value: function parse() {
      while (this.stream.position < this.buffer.length) {
        var MP4Box$1 = new MP4Box();
        MP4Box$1.readSize(this.stream);
        MP4Box$1.readType(this.stream);
        MP4Box$1.readBody(this.stream);
        this.mp4BoxTreeObject[MP4Box$1.type] = MP4Box$1.box; // @ts-expect-error Property 'size' does not exist on type

        this.mp4BoxTreeObject[MP4Box$1.type].size = MP4Box$1.size;
      }
    }
  }]);

  return MP4Parse;
}();

var fnMap = {
  moov: findMoovBox,
  mvhd: findMvhdBox,
  videoTrak: findVideoTrakBox,
  audioTrak: findAudioTrakBox,
  videoTkhd: findVideoTkhdBox,
  audioTkhd: findAudioTkhdBox,
  videoStbl: findVideoStblBox,
  audioStbl: findAudioStblBox,
  videoStsc: findVideoStscBox,
  audioStsc: findAudioStscBox,
  avcC: findAvcCBox,
  esds: findEsdsBox,
  videoStco: findVideoStcoBox,
  audioStco: findAudioStcoBox,
  videoStts: findVideoSttsBox,
  audioStts: findAudioSttsBox,
  audioMdhd: findAudioMdhdBox,
  videoMdhd: findVideoMdhdBox,
  videoStss: findVideoStssBox,
  videoStsz: findVideoStszBox,
  videoCtts: findVideoCttsBox,
  audioStsz: findAudioStszBox,
  mp4a: findMp4aBox,
  audioElst: findAudioElstBox,
  videoElst: findVideoElstBox
};

function findBox(mp4BoxTree, type) {
  var fn = fnMap[type];
  return fn ? fn(mp4BoxTree) : {};
}

function findMoovBox(mp4BoxTree) {
  return mp4BoxTree['moov'];
}

function findMvhdBox(mp4BoxTree) {
  return findMoovBox(mp4BoxTree)['mvhd'];
}

function findVideoTrakBox(mp4BoxTree) {
  return findMoovBox(mp4BoxTree)['videoTrak'];
}

function findVideoTkhdBox(mp4BoxTree) {
  return findVideoTrakBox(mp4BoxTree)['tkhd'];
}

function findVideoStblBox(mp4BoxTree) {
  return findVideoTrakBox(mp4BoxTree)['mdia']['minf']['stbl'];
}

function findAudioTrakBox(mp4BoxTree) {
  return findMoovBox(mp4BoxTree)['audioTrak'];
}

function findAudioStblBox(mp4BoxTree) {
  return findAudioTrakBox(mp4BoxTree)['mdia']['minf']['stbl'];
}

function findAudioTkhdBox(mp4BoxTree) {
  return findAudioTrakBox(mp4BoxTree)['tkhd'];
}

function findVideoStscBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stsc'];
}

function findAudioStscBox(mp4BoxTree) {
  return findAudioStblBox(mp4BoxTree)['stsc'];
}

function findAvcCBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stsd']['avc1'][0]['avcC'];
}

function findMp4aBox(mp4BoxTree) {
  return findAudioStblBox(mp4BoxTree)['stsd']['mp4a'][0];
}

function findEsdsBox(mp4BoxTree) {
  return findMp4aBox(mp4BoxTree)['esds'];
}

function findVideoStcoBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stco'];
}

function findAudioStcoBox(mp4BoxTree) {
  return findAudioStblBox(mp4BoxTree)['stco'];
}

function findVideoSttsBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stts'];
}

function findAudioSttsBox(mp4BoxTree) {
  return findAudioStblBox(mp4BoxTree)['stts'];
}

function findVideoMdhdBox(mp4BoxTree) {
  return findVideoTrakBox(mp4BoxTree)['mdia']['mdhd'];
}

function findAudioMdhdBox(mp4BoxTree) {
  return findAudioTrakBox(mp4BoxTree)['mdia']['mdhd'];
}

function findVideoStssBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stss'];
}

function findVideoStszBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['stsz'];
}

function findAudioStszBox(mp4BoxTree) {
  return findAudioStblBox(mp4BoxTree)['stsz'];
}

function findVideoCttsBox(mp4BoxTree) {
  return findVideoStblBox(mp4BoxTree)['ctts'];
}

function findAudioElstBox(mp4BoxTree) {
  return findAudioTrakBox(mp4BoxTree)['edts']['elst'];
}

function findVideoElstBox(mp4BoxTree) {
  return findAudioTrakBox(mp4BoxTree)['edts']['elst'];
}

function getSamplesOffset(stszBox, stscBoxSamplesPerChunkArray) {
  var samplesOffset = [];

  for (var i = 0, j = 0; i < stscBoxSamplesPerChunkArray.length; i++) {
    if (i + j >= stszBox.samples.length) {
      break;
    }

    samplesOffset.push(stszBox.samples[i + j].entrySize);

    if (stscBoxSamplesPerChunkArray[i] !== 1) {
      for (var flag = 1; flag < stscBoxSamplesPerChunkArray[i]; flag++) {
        var offset = stszBox.samples[i + flag + j].entrySize + samplesOffset[i + flag - 1 + j];
        samplesOffset.push(offset);
      }

      j = j + stscBoxSamplesPerChunkArray[i] - 1;
    }
  }

  return samplesOffset;
}

function getPerChunkArray(stscBox, end) {
  var stscBoxSamplesPerChunkArray = [];
  var stscSamplesLength = stscBox.samples.length; // stsc box
  // firstChunk         1  3  6  7
  // samplesPerChunk    1  2  1  2
  // ↓
  // [1,1,2,2,2,1,2,2]

  for (var i = 0; i < end; i++) {
    if (i !== 0 && i < stscSamplesLength && stscBox.samples[i].firstChunk - 1 !== stscBox.samples[i - 1].firstChunk) {
      i--;
      stscBox.samples[i].firstChunk++;
    } // 处理最后一位不是 end 时的情况


    if (i >= stscSamplesLength) {
      // @ts-expect-error semantic error TS2367: This condition will always return 'true'
      if (stscBox.samples[stscSamplesLength - 1] !== 1) {
        i = i + stscBox.samples[stscSamplesLength - 1].samplesPerChunk - 1;
      }

      stscBoxSamplesPerChunkArray.push(stscBox.samples[stscSamplesLength - 1].samplesPerChunk);
    } else {
      stscBoxSamplesPerChunkArray.push(stscBox.samples[i].samplesPerChunk);
    }
  }

  return stscBoxSamplesPerChunkArray;
}

function getFragmentPosition(videoSamples, audioSamples, mdatStart, isLastFragmentPosition) {
  var videoSamplesEnd = videoSamples[videoSamples.length - 1].end;
  var videoSamplesStart = 0;

  if (videoSamples.length > 0) {
    videoSamplesStart = videoSamples[0].start;
  } // maybe the last GOP dont have audio track
  // 最后一个 GOP 序列可能没有音频轨


  var audioSamplesEnd = 0;
  var audioSamplesStart = Number.MAX_SAFE_INTEGER;

  if (audioSamples.length !== 0) {
    audioSamplesEnd = audioSamples[audioSamples.length - 1].end;
    audioSamplesStart = audioSamples[0].start;
  }

  var fragmentEndPosition = isLastFragmentPosition ? '' : Math.max(videoSamplesEnd, audioSamplesEnd) + mdatStart;
  var fragmentStartPosition = Math.min(videoSamplesStart, audioSamplesStart) + mdatStart;
  return [fragmentStartPosition, fragmentEndPosition];
}

function getBufferStart(mp4BoxTree) {
  var videoOffsetStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var audioOffsetStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.min(getChunkSize(mp4BoxTree, videoOffsetStart, 'video'), getChunkSize(mp4BoxTree, audioOffsetStart, 'audio'));
}

function getChunkSize(mp4BoxTree, offsetStart, type) {
  var stscBox = cloneDeep_default()(findBox(mp4BoxTree, type === 'video' ? 'videoStsc' : 'audioStsc'));
  var newOffsetStart = 0;
  var stscBoxSamplesPerChunkArray = getPerChunkArray(stscBox, offsetStart);
  var chunkIndex = 0;

  for (var i = 0; offsetStart > 0 && i <= stscBoxSamplesPerChunkArray.length; i++) {
    newOffsetStart += stscBoxSamplesPerChunkArray[i];

    if (newOffsetStart === offsetStart) {
      chunkIndex = i + 1;
      break;
    } else if (newOffsetStart > offsetStart) {
      newOffsetStart -= stscBoxSamplesPerChunkArray[i];
      chunkIndex = i;
      break;
    }
  }

  var sampleInterval = [newOffsetStart, offsetStart];
  var stszBox = findBox(mp4BoxTree, type === 'video' ? 'videoStsz' : 'audioStsz');
  var sampleSize = 0; // 考虑到 stsc 不为 1 的情况

  var samples = stszBox.samples.slice(sampleInterval[0], sampleInterval[1]);

  for (var _i3 = 0; _i3 < samples.length; _i3++) {
    sampleSize += samples[_i3].entrySize;
  }

  var stcoBox = findBox(mp4BoxTree, type === 'video' ? 'videoStco' : 'audioStco'); // 如果最后一个 GOP 没有音频轨，BufferStart 需要按照视频轨来计算。
  // If the last GOP dont have audio track, we should ignore the audio chunk size.

  if (chunkIndex >= stcoBox.samples.length) {
    return Number.MAX_SAFE_INTEGER;
  }

  return stcoBox.samples[chunkIndex].chunkOffset + sampleSize;
}

function getVideoSamples(mp4BoxTree, bufferStart, offsetInterVal) {
  var cttsBox = cloneDeep_default()(findBox(mp4BoxTree, 'videoCtts'));
  var compositionTimeOffset = [];

  if (cttsBox) {
    for (var i = 0; i < cttsBox.samples.length; i++) {
      compositionTimeOffset.push(cttsBox.samples[i].sampleOffset);

      if (cttsBox.samples[i].sampleCount !== 1) {
        cttsBox.samples[i].sampleCount--;
        i--;
      }
    }
  }

  return getSamples(mp4BoxTree, bufferStart, offsetInterVal, compositionTimeOffset);
}

function getAudioSamples(mp4BoxTree, bufferStart, offsetInterVal) {
  return getSamples(mp4BoxTree, bufferStart, offsetInterVal);
}

function getSamples(mp4BoxTree, bufferStart, _ref, compositionTimeOffset) {
  var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
      offsetStart = _ref2[0],
      offsetEnd = _ref2[1];

  var samples = [];
  var sttsBox = findBox(mp4BoxTree, compositionTimeOffset ? 'videoStts' : 'audioStts');
  var stszBox = findBox(mp4BoxTree, compositionTimeOffset ? 'videoStsz' : 'audioStsz');
  var stcoBox = findBox(mp4BoxTree, compositionTimeOffset ? 'videoStco' : 'audioStco');
  var stscBox = cloneDeep_default()(findBox(mp4BoxTree, compositionTimeOffset ? 'videoStsc' : 'audioStsc'));
  var stscBoxSamplesPerChunkArray = getPerChunkArray(stscBox, offsetEnd);
  var samplesOffset = getSamplesOffset(stszBox, stscBoxSamplesPerChunkArray);
  var sttsFormatBox = [];

  for (var i = 0; i < sttsBox.samples.length; i++) {
    var _sttsBox$samples$i = sttsBox.samples[i],
        sampleCount = _sttsBox$samples$i.sampleCount,
        sampleDelta = _sttsBox$samples$i.sampleDelta;
    sttsFormatBox.push({
      sampleCount: sampleCount + (sttsFormatBox[i - 1] ? sttsFormatBox[i - 1].sampleCount : 0),
      sampleDelta: sampleDelta
    });
  } // 算法不太好，可以和下面 for 循环结合，用双指针来做
  // FIXME


  var chunkOffsetArray = [];

  for (var _i4 = 0; _i4 < stscBoxSamplesPerChunkArray.length; _i4++) {
    for (var j = 0; j < stscBoxSamplesPerChunkArray[_i4]; j++) {
      var sample = stcoBox.samples[_i4];
      chunkOffsetArray.push(sample ? sample.chunkOffset : stcoBox.samples[stcoBox.samples.length - 1].chunkOffset);
    }
  }

  var _loop = function _loop(_i5) {
    var size = stszBox.samples[_i5].entrySize;
    var end = chunkOffsetArray[_i5] - bufferStart + samplesOffset[_i5];
    var start = end - size; // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sample' implicitly has an 'any' type.

    var duration = sttsFormatBox.find(function (sample, idx) {
      if (sttsFormatBox[idx - 1]) {
        return _i5 + 1 <= sample.sampleCount && _i5 + 1 > sttsFormatBox[idx - 1].sampleCount;
      } else {
        return _i5 + 1 <= sample.sampleCount;
      }
    }).sampleDelta;
    samples.push(Object.assign(Object.assign({}, compositionTimeOffset && {
      compositionTimeOffset: compositionTimeOffset.length ? compositionTimeOffset[_i5] : 0
    }), {
      duration: duration,
      size: size,
      start: start,
      end: end,
      bufferStart: bufferStart
    }));
  };

  for (var _i5 = offsetStart; _i5 < offsetEnd; _i5++) {
    _loop(_i5);
  }

  return samples;
}

function getDuration(sttsBox, totalCount) {
  var count = 0;
  var duration = 0;

  for (var i = 0; i < sttsBox.samples.length; i++) {
    var _sttsBox$samples$i2 = sttsBox.samples[i],
        sampleCount = _sttsBox$samples$i2.sampleCount,
        sampleDelta = _sttsBox$samples$i2.sampleDelta;

    for (var j = 0; j < sampleCount; j++) {
      if (count < totalCount && totalCount !== 0) {
        duration += sampleDelta;
        count++;
      } else {
        return duration;
      }
    }
  }

  return duration;
}

function getVideoSamplesInterval(mp4BoxTree) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stssBox = cloneDeep_default()(findBox(mp4BoxTree, 'videoStss'));
  var sttsBox = cloneDeep_default()(findBox(mp4BoxTree, 'videoStts'));
  var stszBox = findBox(mp4BoxTree, 'videoStsz');
  var duration = getDuration(sttsBox, stszBox.samples.length);
  var intervalArray = getIntervalArray(stssBox, stszBox);
  var timeInterval = intervalArray.map(function (interval) {
    return getDuration(sttsBox, interval);
  });
  var interval = {
    offsetInterVal: [],
    timeInterVal: []
  };

  for (var i = 0; i < timeInterval.length; i++) {
    var start = timeInterval[i];
    var end = timeInterval[i + 1] ? timeInterval[i + 1] : duration;

    if (start <= time && time < end) {
      var offsetStart = intervalArray[i];
      var offsetEnd = intervalArray[i + 1] !== undefined ? intervalArray[i + 1] : stszBox.samples.length;
      interval.offsetInterVal.push(offsetStart, offsetEnd);
      interval.timeInterVal.push(start, end);
      break;
    }
  }

  return interval;
}

function getAudioSamplesInterval(mp4BoxTree, videoInterval) {
  var _videoInterval$timeIn = (0,slicedToArray/* default */.Z)(videoInterval.timeInterVal, 2),
      startTime = _videoInterval$timeIn[0],
      endTime = _videoInterval$timeIn[1],
      offsetInterVal = videoInterval.offsetInterVal;

  var sttsBox = cloneDeep_default()(findBox(mp4BoxTree, 'audioStts'));

  var _findBox = findBox(mp4BoxTree, 'audioMdhd'),
      audioTimescale = _findBox.timescale;

  var _findBox2 = findBox(mp4BoxTree, 'videoMdhd'),
      videoTimescale = _findBox2.timescale;

  var videoStszBox = findBox(mp4BoxTree, 'videoStsz');
  var audioStszBox = findBox(mp4BoxTree, 'audioStsz');
  var audioElstBox = findBox(mp4BoxTree, 'audioElst');
  var audioStartTime = startTime / videoTimescale * audioTimescale;
  var audioEndTime = endTime / videoTimescale * audioTimescale;
  var start = 0;
  var end = 0;
  var _audioElstBox$entries = audioElstBox.entries[0],
      mediaTime = _audioElstBox$entries.mediaTime,
      segmentDuration = _audioElstBox$entries.segmentDuration;
  var startDuration = mediaTime !== -1 ? mediaTime : segmentDuration;
  var endDuration = 0;

  for (var i = 0; i < sttsBox.samples.length; i++) {
    var _sttsBox$samples$i3 = sttsBox.samples[i],
        sampleCount = _sttsBox$samples$i3.sampleCount,
        sampleDelta = _sttsBox$samples$i3.sampleDelta;

    for (var j = 0; j < sampleCount; j++) {
      if (startDuration <= audioStartTime && audioStartTime !== 0) {
        startDuration += sampleDelta;
        start++;
      }

      if (endDuration <= audioEndTime) {
        endDuration += sampleDelta;
        end++;
      }
    }
  } // 如果是 video 的最后一个片段，也就是 audio 的最有一个片段
  // 使用 stsz 的长度来判断


  var audioEnd;

  if (offsetInterVal[1] === videoStszBox.samples.length) {
    audioEnd = audioStszBox.samples.length;
  }

  var interval = {
    offsetInterVal: [start, audioEnd ? audioEnd : end],
    timeInterVal: [startDuration, endDuration]
  };
  return interval;
}

function getNextVideoSamplesInterval(mp4BoxTree, sample) {
  var stssBox = cloneDeep_default()(findBox(mp4BoxTree, 'videoStss'));
  var sttsBox = cloneDeep_default()(findBox(mp4BoxTree, 'videoStts'));
  var stszBox = findBox(mp4BoxTree, 'videoStsz');
  var sampleCount = stszBox.samples.length;
  var duration = getDuration(sttsBox, sampleCount);
  var intervalArray = getIntervalArray(stssBox, stszBox);
  var timeInterval = intervalArray.map(function (interval) {
    return getDuration(sttsBox, interval);
  });
  var result = [];

  if (sample + 1 > intervalArray[intervalArray.length - 1]) {
    result = {
      offsetInterVal: [intervalArray[intervalArray.length - 1], sampleCount],
      timeInterVal: [timeInterval[intervalArray.length - 1], duration]
    };
  }

  for (var i = 0; i < intervalArray.length; i++) {
    if (intervalArray[i] < sample + 1 && intervalArray[i + 1] >= sample + 1) {
      result = {
        offsetInterVal: [intervalArray[i], intervalArray[i + 1]],
        timeInterVal: [timeInterval[i], timeInterval[i + 1]]
      };
      break;
    }
  }

  return result;
}

function getIntervalArray(stssBox, stszBox) {
  var intervalArray = [];

  if (stssBox) {
    intervalArray = stssBox.samples.map(function (sample) {
      return sample.sampleNumber - 1;
    });
  } else {
    // make a fake GOP when video dont have B/P frame
    for (var i = 0; i <= Math.floor(stszBox.samples.length / 5); i++) {
      intervalArray.push(i * 5);
    }
  }

  return intervalArray;
}

function getVideoTrackInfo(videoSamples, mdatBuffer) {
  return {
    samples: videoSamples.map(function (sample) {
      return Object.assign(Object.assign({}, sample), {
        buffer: mdatBuffer.slice(sample.start, sample.end)
      });
    }),
    trackId: 1
  };
}

function getAudioTrackInfo(audioSamples, mdatBuffer) {
  return {
    samples: audioSamples.map(function (sample) {
      return Object.assign(Object.assign({}, sample), {
        buffer: mdatBuffer.slice(sample.start, sample.end)
      });
    }),
    trackId: 2
  };
}

var MP4Probe = /*#__PURE__*/function () {
  function MP4Probe(mp4BoxTree) {
    var _this3 = this;

    (0,classCallCheck/* default */.Z)(this, MP4Probe);

    this.updateInterval = function (time) {
      var _this3$mp4Data = _this3.mp4Data,
          videoTimescale = _this3$mp4Data.videoTimescale,
          audioTimescale = _this3$mp4Data.audioTimescale;

      if (typeof time === 'number') {
        _this3.videoInterval = getVideoSamplesInterval(_this3.mp4BoxTree, time * videoTimescale);
      } else {
        _this3.videoInterval = getNextVideoSamplesInterval(_this3.mp4BoxTree, _this3.videoInterval.offsetInterVal[1]);
      }

      _this3.audioInterval = getAudioSamplesInterval(_this3.mp4BoxTree, _this3.videoInterval);

      var videoTimeRange = _this3.videoInterval.timeInterVal.map(function (time) {
        return time / videoTimescale;
      });

      var audioTimeRange = _this3.audioInterval.timeInterVal.map(function (time) {
        return time / audioTimescale;
      });

      _this3.timeRange = [Math.min(videoTimeRange[0], audioTimeRange[0]), Math.max(videoTimeRange[1], audioTimeRange[1])];
    };

    this.isDraining = function (time) {
      return time > (_this3.timeRange[1] - _this3.timeRange[0]) / 4 + _this3.timeRange[0];
    };

    this.getFragmentPosition = function (time) {
      _this3.updateInterval(time);

      _this3.bufferStart = getBufferStart(_this3.mp4BoxTree, _this3.videoInterval.offsetInterVal[0], _this3.audioInterval.offsetInterVal[0]);

      var _this3$getSamples = _this3.getSamples(),
          videoSamples = _this3$getSamples.videoSamples,
          audioSamples = _this3$getSamples.audioSamples;

      var stcoBox = findBox(_this3.mp4BoxTree, 'videoStco');
      var videoSamplesStart = 0;

      if (videoSamples.length > 0) {
        videoSamplesStart = videoSamples[videoSamples.length - 1].start;
      }

      var isLastFragmentPosition = videoSamplesStart + videoSamples[videoSamples.length - 1].bufferStart === stcoBox.samples[stcoBox.samples.length - 1].chunkOffset;
      return getFragmentPosition(videoSamples, audioSamples, _this3.bufferStart, isLastFragmentPosition);
    };

    this.getSamples = function () {
      var videoSamples = getVideoSamples(_this3.mp4BoxTree, _this3.bufferStart, _this3.videoInterval.offsetInterVal);
      var audioSamples = getAudioSamples(_this3.mp4BoxTree, _this3.bufferStart, _this3.audioInterval.offsetInterVal);
      return {
        videoSamples: videoSamples,
        audioSamples: audioSamples
      };
    };

    this.getTrackInfo = function (mdatBuffer) {
      var _this3$getSamples2 = _this3.getSamples(),
          videoSamples = _this3$getSamples2.videoSamples,
          audioSamples = _this3$getSamples2.audioSamples;

      var videoTrackInfo = getVideoTrackInfo(videoSamples, mdatBuffer);
      var audioTrackInfo = getAudioTrackInfo(audioSamples, mdatBuffer);
      return {
        videoTrackInfo: videoTrackInfo,
        audioTrackInfo: audioTrackInfo
      };
    };

    this.mp4BoxTree = mp4BoxTree;
    this.mp4Data = {};
    this.init();
  }

  (0,createClass/* default */.Z)(MP4Probe, [{
    key: "init",
    value: function init() {
      this.getMP4Data();
    }
  }, {
    key: "getMP4Data",
    value: function getMP4Data() {
      var _findBox3 = findBox(this.mp4BoxTree, 'mvhd'),
          duration = _findBox3.duration,
          timescale = _findBox3.timescale;

      var _findBox4 = findBox(this.mp4BoxTree, 'mp4a'),
          channelCount = _findBox4.channelCount,
          sampleRate = _findBox4.sampleRate;

      var _findBox5 = findBox(this.mp4BoxTree, 'audioMdhd'),
          audioTimescale = _findBox5.timescale,
          audioDuration = _findBox5.duration;

      var _findBox6 = findBox(this.mp4BoxTree, 'esds'),
          audioConfig = _findBox6.ESDescrTag.DecSpecificDescrTag.audioConfig;

      this.mp4Data = {
        duration: duration,
        timescale: timescale,
        channelCount: channelCount,
        sampleRate: sampleRate,
        audioConfig: audioConfig,
        audioDuration: audioDuration,
        audioTimescale: audioTimescale
      };
      var hasVideoStream = findBox(this.mp4BoxTree, 'videoTrak');

      if (hasVideoStream) {
        var _findBox7 = findBox(this.mp4BoxTree, 'videoTkhd'),
            width = _findBox7.width,
            height = _findBox7.height;

        var _findBox8 = findBox(this.mp4BoxTree, 'videoStsz'),
            samples = _findBox8.samples;

        var _findBox9 = findBox(this.mp4BoxTree, 'avcC'),
            SPS = _findBox9.SPS,
            PPS = _findBox9.PPS;

        var _findBox10 = findBox(this.mp4BoxTree, 'videoMdhd'),
            videoTimescale = _findBox10.timescale,
            videoDuration = _findBox10.duration;

        this.mp4Data = Object.assign(Object.assign({}, this.mp4Data), {
          width: width,
          height: height,
          SPS: SPS,
          PPS: PPS,
          videoDuration: videoDuration,
          videoTimescale: videoTimescale,
          videoSamplesLength: samples.length
        });
      }
    }
  }]);

  return MP4Probe;
}();

function generateVersionAndFlags(version, flag) {
  return new Uint8Array([version & 0xff, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
}

function concatTypedArray() {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  for (var _i6 = 0, _arrays = arrays; _i6 < _arrays.length; _i6++) {
    var arr = _arrays[_i6];
    totalLength += arr.length;
  }

  var result = new Uint8Array(totalLength);
  var offset = 0;

  for (var _i7 = 0, _arrays2 = arrays; _i7 < _arrays2.length; _i7++) {
    var _arr = _arrays2[_i7];
    result.set(_arr, offset);
    offset += _arr.length;
  }

  return result;
}

function num2FourBytes(num) {
  return new Uint8Array([num >>> 24 & 0xff, num >>> 16 & 0xff, num >>> 8 & 0xff, num & 0xff]);
}

function num2EightBytes(num) {
  var upper = num / Math.pow(2, 32);
  var lower = num % Math.pow(2, 32);
  return new Uint8Array([upper >>> 24 & 0xff, upper >>> 16 & 0xff, upper >>> 8 & 0xff, upper & 0xff, lower >>> 24 & 0xff, lower >>> 16 & 0xff, lower >>> 8 & 0xff, lower & 0xff]);
}

var char2Hex = function char2Hex(char) {
  return char.charCodeAt(0);
};

var str2TypedArray = function str2TypedArray(str) {
  // 字符串转 uint8 array
  // 应该使用 Uint8Array.from/TextEncoder
  return new Uint8Array(Array.prototype.map.call(str, char2Hex));
};

function generateBox(type, content) {
  return concatTypedArray(num2FourBytes(content.length + 8), str2TypedArray(type), content);
}

function generatePredefined(length) {
  return generateZeroBytes(length);
}

function generateReserved(length) {
  return generateZeroBytes(length);
}

function generateZeroBytes(bytes) {
  return new Uint8Array(bytes);
} // prettier-ignore


var _ftyp = function ftyp() {
  var content = new Uint8Array([0x69, 0x73, 0x6F, 0x6D, 0x00, 0x00, 0x00, 0x01, 0x69, 0x73, 0x6F, 0x6D, 0x61, 0x76, 0x63, 0x31 // avc1
  ]);
  return generateBox('ftyp', content);
}; // prettier-ignore


var MATRIX_TYPED_ARRAY = new Uint8Array([0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00]);

function mvhd(data) {
  var duration = data.duration,
      timescale = data.timescale; // prettier-ignore

  var content = new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].concat((0,toConsumableArray/* default */.Z)(num2FourBytes(timescale)), (0,toConsumableArray/* default */.Z)(num2EightBytes(duration)), [0x00, 0x01, 0x00, 0x00, 0x01, 0x00], (0,toConsumableArray/* default */.Z)(generateReserved(10)), (0,toConsumableArray/* default */.Z)(MATRIX_TYPED_ARRAY), (0,toConsumableArray/* default */.Z)(generatePredefined(24)), [0xff, 0xff, 0xff, 0xff // next_track_ID
  ]));
  return generateBox('mvhd', content);
}

function tkhd(data) {
  var type = data.type,
      duration = data.duration,
      width = data.width,
      height = data.height; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(1, 7)), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], (0,toConsumableArray/* default */.Z)(num2FourBytes(type === 'video' ? 1 : 2)), (0,toConsumableArray/* default */.Z)(generateReserved(4)), (0,toConsumableArray/* default */.Z)(num2EightBytes(duration)), (0,toConsumableArray/* default */.Z)(generateReserved(8)), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], (0,toConsumableArray/* default */.Z)(MATRIX_TYPED_ARRAY), [width >> 8 & 0xff, width & 0xff, 0x00, 0x00, height >> 8 & 0xff, height & 0xff, 0x00, 0x00]));
  return generateBox('tkhd', content);
}

function mdhd(data) {
  var type = data.type;
  var duration;
  var timescale;

  if (type === 'video') {
    duration = data.videoDuration;
    timescale = data.videoTimescale;
  } else {
    duration = data.audioDuration;
    timescale = data.audioTimescale;
  } // prettier-ignore


  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(1, 0)), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], (0,toConsumableArray/* default */.Z)(num2FourBytes(timescale)), (0,toConsumableArray/* default */.Z)(num2EightBytes(duration)), [0x55, 0xc4, 0x00, 0x00 // pre_defined
  ]));
  return generateBox('mdhd', content);
}

function hdlr(type) {
  var handler = '';
  var name = '';

  switch (type) {
    case 'video':
      handler = 'vide';
      name = 'VideoHandler';
      break;

    case 'audio':
      handler = 'soun';
      name = 'SoundHandler';
  } // prettier-ignore


  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), (0,toConsumableArray/* default */.Z)(generatePredefined(4)), (0,toConsumableArray/* default */.Z)(str2TypedArray(handler)), (0,toConsumableArray/* default */.Z)(generateReserved(12)), (0,toConsumableArray/* default */.Z)(str2TypedArray(name)), [0x00]));
  return generateBox('hdlr', content);
}

function vmhd() {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 1)), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]));
  return generateBox('vmhd', content);
}

function smhd() {
  // prettier-ignore
  var content = [].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x00 // balance(2) + reserved(2)
  ]);
  return generateBox('smhd', content);
}

function dinf() {
  return generateBox('dinf', dref());
}

function dref() {
  // prettier-ignore
  var content = concatTypedArray(new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x01 // entry_count
  ])), url());
  return generateBox('dref', content);
}

function url() {
  // prettier-ignore
  return generateBox('url ', [0x00, 0x00, 0x00, 0x01]);
}

function avcC(data) {
  var SPS = data.SPS,
      PPS = data.PPS; // prettier-ignore

  var content = new Uint8Array([0x01, SPS[1], SPS[2], SPS[3], 0xfc | 3, 0xE0 | 1, SPS.length >> 8 & 0xff, SPS.length & 0xff].concat((0,toConsumableArray/* default */.Z)(SPS), [0x01, PPS.length >> 8 & 0xff, PPS.length & 0xff], (0,toConsumableArray/* default */.Z)(PPS)));
  return generateBox('avcC', content);
}

function acv1(data) {
  var width = data.width,
      height = data.height; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateReserved(6)), [0x00, 0x01], (0,toConsumableArray/* default */.Z)(generatePredefined(16)), [width >> 8 & 0xff, width & 0xff, height >> 8 & 0xff, height & 0xff, 0x00, 0x48, 0x00, 0x00, 0x00, 0x48, 0x00, 0x00], (0,toConsumableArray/* default */.Z)(generateReserved(4)), [0x00, 0x01, 0x0B, 0x57, 0x41, 0x4E, 0x47, 0x4C, 0x75, 0x76, 0X44, 0x41, 0x4E, 0x47], (0,toConsumableArray/* default */.Z)(generatePredefined(20)), [0x00, 0x18, // 设置成 0x00, 0x00 的话 safari 无法正常播放。
  0xff, 0xff // pre_defined
  ]));
  content = concatTypedArray(content, avcC(data));
  return generateBox('avc1', content);
}

function esds(data) {
  var _data$audioConfig = data.audioConfig,
      config = _data$audioConfig === void 0 ? [43, 146, 8, 0] : _data$audioConfig; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x03, 0x17 + config.length, 0x00, 0x01, 0x00, 0x04, 0x0f + config.length, 0x40, 0x15, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, config.length], (0,toConsumableArray/* default */.Z)(config), [0x06, 0x01, 0x02 // GASpecificConfig
  ]));
  return generateBox('esds', content);
}

function mp4a(data) {
  var channelCount = data.channelCount,
      sampleRate = data.sampleRate; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateReserved(6)), [0x00, 0x01], (0,toConsumableArray/* default */.Z)(generateReserved(8)), [0x00, channelCount, 0x00, 0x10], (0,toConsumableArray/* default */.Z)(generateReserved(4)), [sampleRate >> 8 & 0xFF, sampleRate & 0xFF, 0x00, 0x00]));
  content = concatTypedArray(content, esds(data));
  return generateBox('mp4a', content);
}

function stsd(data) {
  var type = data.type;
  var content;

  if (type === 'video') {
    content = acv1(data);
  } else if (type === 'audio') {
    content = mp4a(data);
  }

  content = concatTypedArray( // prettier-ignore
  new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x01 // entry_count
  ])), content);
  return generateBox('stsd', content);
}

function stbl(data) {
  var content = concatTypedArray(stsd(data), stts(), stsc(), stsz(), stco());
  return generateBox('stbl', content);
}

var stsz = function stsz() {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // sample_count
  ]));
  return generateBox('stsz', content);
};

var stsc = function stsc() {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x00 // entry_count
  ]));
  return generateBox('stsc', content);
};

var stts = function stts() {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x00 // entry_count
  ]));
  return generateBox('stts', content);
};

var stco = function stco() {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), [0x00, 0x00, 0x00, 0x00 // entry_count
  ]));
  return generateBox('stco', content);
};

function minf(data) {
  var type = data.type;
  var header = '';

  switch (type) {
    case 'video':
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'Uint8Array' is not assignable to type 'strin... Remove this comment to see the full error message
      header = vmhd();
      break;

    case 'audio':
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'Uint8Array' is not assignable to type 'strin... Remove this comment to see the full error message
      header = smhd();
      break;
  }

  var content = concatTypedArray(header, dinf(), stbl(data));
  return generateBox('minf', content);
}

function mdia(data) {
  var content = concatTypedArray(mdhd(data), hdlr(data.type), minf(data));
  return generateBox('mdia', content);
}

function trak(data) {
  var content = concatTypedArray(tkhd(data), mdia(data));
  return generateBox('trak', content);
}

function mvex(data) {
  var content = concatTypedArray(mehd(data), trex(1), trex(2));
  return generateBox('mvex', content);
}

function mehd(data) {
  var duration = data.duration; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), (0,toConsumableArray/* default */.Z)(num2FourBytes(duration))));
  return generateBox('mehd', content);
}

function trex(trackId) {
  // prettier-ignore
  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), (0,toConsumableArray/* default */.Z)(num2FourBytes(trackId)), [0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01 // default_sample_flags
  ]));
  return generateBox('trex', content);
}

function _moov(data, type) {
  var content = concatTypedArray(mvhd(data), trak(Object.assign(Object.assign({}, data), {
    type: type
  })), mvex(data));
  return generateBox('moov', content);
}

function mfhd(data) {
  var sequenceNumber = data.sequenceNumber; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), (0,toConsumableArray/* default */.Z)(num2FourBytes(sequenceNumber))));
  return generateBox('mfhd', content);
}

function tfhd(data) {
  var trackId = data.trackId; // prettier-ignore

  return generateBox('tfhd', new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(0, 0)), (0,toConsumableArray/* default */.Z)(num2FourBytes(trackId)))));
}

function sdtp(data) {
  var samples = data.samples;
  var content = concatTypedArray.apply(void 0, [[0x00, 0x00, 0x00, 0x00]].concat((0,toConsumableArray/* default */.Z)(samples.map(function () {
    return new Uint8Array([0x10]);
  }))));
  return generateBox('sdtp', content);
}

function tfdt(data) {
  var baseMediaDecodeTime = data.baseMediaDecodeTime; // prettier-ignore

  var content = new Uint8Array([].concat((0,toConsumableArray/* default */.Z)(generateVersionAndFlags(1, 0)), [0x00, 0x00, 0x00, 0x00, baseMediaDecodeTime >>> 24 & 0xFF, baseMediaDecodeTime >>> 16 & 0xFF, baseMediaDecodeTime >>> 8 & 0xFF, baseMediaDecodeTime & 0xFF]));
  return generateBox('tfdt', content);
}

function trun(data) {
  var samples = data.samples,
      trackId = data.trackId;
  var ceil = trackId === 1 ? 16 : 12;
  var length = samples.length; // mdat-header 8
  // moof-header 8
  // mfhd 16
  // traf-header 8
  // thhd 16
  // tfdt 20
  // trun-header 12
  // sampleCount 4
  // data-offset 4
  // samples.length
  // sdtp-header 12

  var offset = 108 + ceil * length + samples.length; // prettier-ignore

  var content = new Uint8Array([0x00, 0x00, trackId === 1 ? 0x0f : 0x07, 0x01].concat((0,toConsumableArray/* default */.Z)(num2FourBytes(samples.length)), (0,toConsumableArray/* default */.Z)(num2FourBytes(offset)), (0,toConsumableArray/* default */.Z)(concatTypedArray.apply(void 0, (0,toConsumableArray/* default */.Z)(samples.map(function (sample, index) {
    var duration = sample.duration,
        size = sample.size,
        compositionTimeOffset = sample.compositionTimeOffset;
    return concatTypedArray(num2FourBytes(duration), num2FourBytes(size), trackId === 1 ? index === 0 // FIXME:need sample flags
    ? [0x02, 0x00, 0x00, 0x00] : [0x01, 0x01, 0x00, 0x00] : [0x01, 0x00, 0x00, 0x00], trackId === 1 ? num2FourBytes(compositionTimeOffset) : []);
  }))))));
  return generateBox('trun', content);
}

function traf(data) {
  var content = concatTypedArray(tfhd(data), tfdt(data), sdtp(data), trun(data));
  return generateBox('traf', content);
}

function _moof(data) {
  var content = concatTypedArray(mfhd(data), traf(data));
  return generateBox('moof', content);
}

function _mdat(data) {
  return generateBox('mdat', data);
}

var FMP4Generator = /*#__PURE__*/function () {
  function FMP4Generator() {
    (0,classCallCheck/* default */.Z)(this, FMP4Generator);
  }

  (0,createClass/* default */.Z)(FMP4Generator, null, [{
    key: "ftyp",
    value: function ftyp() {
      return _ftyp();
    }
  }, {
    key: "moov",
    value: function moov(data, type) {
      return _moov(data, type);
    }
  }, {
    key: "moof",
    value: function moof(trackInfo, baseMediaDecodeTime) {
      return _moof(Object.assign({}, trackInfo, {
        sequenceNumber: FMP4Generator.sequenceNumber++,
        baseMediaDecodeTime: baseMediaDecodeTime
      }));
    }
  }, {
    key: "mdat",
    value: function mdat(trackInfo) {
      var samples = trackInfo.samples.map(function (sample) {
        return new Uint8Array(sample.buffer);
      });
      return _mdat(concatTypedArray.apply(void 0, (0,toConsumableArray/* default */.Z)(samples)));
    }
  }]);

  return FMP4Generator;
}();

FMP4Generator.sequenceNumber = 1; // copy from https://github.com/google/shaka-player/blob/master/lib/polyfill/mediasource.js#L125

function abortPolyfill() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  var addSourceBuffer = MediaSource.prototype.addSourceBuffer;

  MediaSource.prototype.addSourceBuffer = function () {
    for (var _len2 = arguments.length, varArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      varArgs[_key2] = arguments[_key2];
    }

    var sourceBuffer = addSourceBuffer.apply(this, varArgs); // eslint-disable-next-line @typescript-eslint/no-empty-function

    sourceBuffer.abort = function () {}; // Stub out for buggy implementations.


    return sourceBuffer;
  };
}

var MAGIC_NUMBER = 20000;

var MSE = /*#__PURE__*/function () {
  function MSE(video, src) {
    var _this4 = this;

    (0,classCallCheck/* default */.Z)(this, MSE);

    this.installSrc = function () {
      _this4.mediaSource = new MediaSource();

      _this4.mediaSource.addEventListener('sourceopen', _this4.handleSourceOpen);

      _this4.video.src = URL.createObjectURL(_this4.mediaSource);
    };

    this.handleSourceOpen = function () {
      _this4.sourceBuffers.video = _this4.mediaSource.addSourceBuffer(_this4.mimeTypes.video);
      _this4.sourceBuffers.audio = _this4.mediaSource.addSourceBuffer(_this4.mimeTypes.audio);

      _this4.sourceBuffers.video.addEventListener('updateend', function () {
        var buffer = _this4.videoQueue.shift();

        if (buffer && _this4.mediaSource.readyState === 'open') {
          _this4.handleAppendBuffer(buffer, 'video');
        }

        if (_this4.needUpdateTime) {
          _this4.needUpdateTime = false;

          _this4.handleTimeUpdate();
        }
      });

      _this4.sourceBuffers.audio.addEventListener('updateend', function () {
        var buffer = _this4.audioQueue.shift();

        if (buffer && _this4.mediaSource.readyState === 'open') {
          _this4.handleAppendBuffer(buffer, 'audio');
        }
      });
    };

    this.handleAppendBuffer = function (buffer, type) {
      if (_this4.mediaSource.readyState === 'open') {
        try {
          if (_this4.sourceBuffers[type]) {
            _this4.sourceBuffers[type].appendBuffer(buffer);
          }
        } catch (error) {
          // see https://developers.google.com/web/updates/2017/10/quotaexceedederror
          // @ts-expect-error any
          if (error.code === 22) {
            _this4.handleQuotaExceededError(buffer, type);
          } else {
            throw error;
          }
        }
      } else {
        _this4["".concat(type, "Queue")].push(buffer);
      }
    };

    this.hasBufferedCache = function (isSeek) {
      var _this4$mp4Probe$timeR = (0,slicedToArray/* default */.Z)(_this4.mp4Probe.timeRange, 2),
          start = _this4$mp4Probe$timeR[0],
          end = _this4$mp4Probe$timeR[1]; // handle seek case and normal case
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands


      var time = isSeek ? _this4.video.currentTime : Math.floor((start + end) / 2);
      var buffered = _this4.video.buffered;

      if (buffered && buffered.length > 0) {
        for (var i = 0; i < buffered.length; i++) {
          if (time >= buffered.start(i) && time <= buffered.end(i)) {
            return true;
          }
        }
      }

      return false;
    };

    this.seek = function (time) {
      FragmentFetch.clear();

      var _this4$mp4Probe$getFr = _this4.mp4Probe.getFragmentPosition(time),
          _this4$mp4Probe$getFr2 = (0,slicedToArray/* default */.Z)(_this4$mp4Probe$getFr, 2),
          start = _this4$mp4Probe$getFr2[0],
          end = _this4$mp4Probe$getFr2[1]; // 对于已经请求的数据不再重复请求
      // No need to repeat request video data


      if (_this4.hasBufferedCache(time) && !_this4.qualityChangeFlag) {
        return;
      }

      _this4.handleReplayCase();

      void _this4.loadData(start, end).then(function (mdatBuffer) {
        if (!mdatBuffer) {
          return;
        }

        var _this4$mp4Probe$getTr = _this4.mp4Probe.getTrackInfo(mdatBuffer),
            videoTrackInfo = _this4$mp4Probe$getTr.videoTrackInfo,
            audioTrackInfo = _this4$mp4Probe$getTr.audioTrackInfo;

        var _this4$mp4Probe = _this4.mp4Probe,
            videoInterval = _this4$mp4Probe.videoInterval,
            audioInterval = _this4$mp4Probe.audioInterval;
        var videoBaseMediaDecodeTime = videoInterval.timeInterVal[0];
        var audioBaseMediaDecodeTime = audioInterval.timeInterVal[0];
        var videoRawData = concatTypedArray(FMP4Generator.moof(videoTrackInfo, videoBaseMediaDecodeTime), FMP4Generator.mdat(videoTrackInfo)); // maybe the last GOP dont have audio track
        // 最后一个 GOP 序列可能没有音频轨

        if (audioTrackInfo.samples.length !== 0) {
          var audioRawData = concatTypedArray(FMP4Generator.moof(audioTrackInfo, audioBaseMediaDecodeTime), FMP4Generator.mdat(audioTrackInfo));

          _this4.handleAppendBuffer(audioRawData, 'audio');
        }

        _this4.handleAppendBuffer(videoRawData, 'video');

        if (time) {
          _this4.needUpdateTime = true;
        }

        _this4.qualityChangeFlag = false;
      });
    };

    this.handleTimeUpdate = function () {
      if (!_this4.mp4Probe) {
        return;
      }

      var _this4$mp4Probe2 = _this4.mp4Probe,
          _this4$mp4Probe2$vide = _this4$mp4Probe2.videoInterval;
      _this4$mp4Probe2$vide = _this4$mp4Probe2$vide === void 0 ? [] : _this4$mp4Probe2$vide;
      var _this4$mp4Probe2$vide2 = _this4$mp4Probe2$vide.offsetInterVal,
          offsetInterVal = _this4$mp4Probe2$vide2 === void 0 ? [] : _this4$mp4Probe2$vide2,
          videoSamplesLength = _this4$mp4Probe2.mp4Data.videoSamplesLength,
          _this4$mp4Probe2$time = _this4$mp4Probe2.timeRange,
          timeRange = _this4$mp4Probe2$time === void 0 ? [] : _this4$mp4Probe2$time;

      if (_this4.mediaSource.readyState !== 'closed') {
        if (offsetInterVal[1] === videoSamplesLength && _this4.video.currentTime > timeRange[0]) {
          _this4.destroy();
        } else if (_this4.shouldFetchNextSegment()) {
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
          _this4.seek();
        }
      }
    };

    this.handleReplayCase = function () {
      if (_this4.mediaSource.readyState === 'ended') {
        // If MediaSource.readyState value is ended,
        // setting SourceBuffer.timestampOffset will cause this value to transition to open.
        _this4.sourceBuffers.video.timestampOffset = 0;
      }
    };

    this.shouldFetchNextSegment = function () {
      _this4.handleReplayCase();

      if (_this4.mp4Probe.isDraining(_this4.video.currentTime)) {
        return true;
      }

      return false;
    };

    this.destroy = function () {
      _this4.mediaSource.removeEventListener('sourceopen', _this4.handleSourceOpen);

      URL.revokeObjectURL(_this4.video.src);

      if (_this4.mediaSource.readyState === 'open' && !_this4.sourceBuffers.video.updating && !_this4.sourceBuffers.audio.updating) {
        _this4.mediaSource.endOfStream();
      }
    };

    this.handleQuotaExceededError = function (buffer, type) {
      for (var key in _this4.sourceBuffers) {
        var track = _this4.sourceBuffers[key];
        var currentTime = _this4.video.currentTime;
        var removeStart = 0;

        if (track.buffered.length > 0) {
          removeStart = track.buffered.start(0) + 10;
        }

        _this4.removeBuffer(removeStart, currentTime - 10, key);
      } // re-append(maybe should lower the playback resolution)


      _this4.handleAppendBuffer(buffer, type);
    };

    this.video = video;
    this.src = src;
    this.qualityChangeFlag = false;
    this.videoQueue = [];
    this.audioQueue = [];
    this.sourceBuffers = {
      video: null,
      audio: null
    };
    this.mimeTypes = {
      video: 'video/mp4; codecs="avc1.42E01E"',
      audio: 'audio/mp4; codecs="mp4a.40.2"'
    };
    this.installSrc();
  }

  (0,createClass/* default */.Z)(MSE, [{
    key: "init",
    value: function init() {
      var _this5 = this;

      // 获取 mdat 外的数据
      return this.loadData().then(function (res) {
        // @ts-expect-error No overload matches this call.
        return new MP4Parse(new Uint8Array(res)).mp4BoxTreeObject;
      }).then(function (mp4BoxTreeObject) {
        // 有可能 moov 在最后一个 box，导致我们第一次请求 0~MAGIC_NUMBER 没有请求到 moov。
        var moov = mp4BoxTreeObject.moov,
            ftyp = mp4BoxTreeObject.ftyp;

        if (!moov) {
          var moovStart = 0;

          for (var box in mp4BoxTreeObject) {
            // @ts-expect-error Property 'size' does not exist
            moovStart += mp4BoxTreeObject[box].size;
          } // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '""' is not assignable to paramet... Remove this comment to see the full error message


          return _this5.loadData(moovStart, '').then(function (res) {
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            var moov = new MP4Parse(new Uint8Array(res)).mp4BoxTreeObject.moov;

            if (moov) {
              mp4BoxTreeObject.moov = moov;
              return mp4BoxTreeObject;
            }
          });
        } else {
          // 有可能视频较大，第一次请求没有请求到完整的 moov box
          // @ts-expect-error Operands of '+' operation must either be both strings or both numbers
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          var ftypAndMoovSize = moov.size + ftyp.size;

          if (ftypAndMoovSize > MAGIC_NUMBER) {
            // @ts-expect-error Property 'size' does not exist on type
            return _this5.loadData(ftyp.size, ftypAndMoovSize).then(function (res) {
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              var moov = new MP4Parse(new Uint8Array(res)).mp4BoxTreeObject.moov;

              if (moov) {
                mp4BoxTreeObject.moov = moov;
                return mp4BoxTreeObject;
              }
            });
          }
        }

        return mp4BoxTreeObject;
      }).then(function (mp4BoxTreeObject) {
        _this5.mp4Probe = new MP4Probe(mp4BoxTreeObject);
        _this5.mp4BoxTreeObject = mp4BoxTreeObject;
        var videoRawData = concatTypedArray(FMP4Generator.ftyp(), FMP4Generator.moov(_this5.mp4Probe.mp4Data, 'video'));
        var audioRawData = concatTypedArray(FMP4Generator.ftyp(), FMP4Generator.moov(_this5.mp4Probe.mp4Data, 'audio')); // 如果是切换清晰度，mediaSource 的 readyState 已经 open 了，可以直接 append 数据。
        // mediaSource is already open when we switch video quality.

        if (_this5.qualityChangeFlag) {
          _this5.handleAppendBuffer(videoRawData, 'video');

          _this5.handleAppendBuffer(audioRawData, 'audio');
        } else {
          _this5.mediaSource.addEventListener('sourceopen', function () {
            _this5.handleAppendBuffer(videoRawData, 'video');

            _this5.handleAppendBuffer(audioRawData, 'audio');
          });
        }
      });
    }
  }, {
    key: "changeQuality",
    value: function changeQuality(newSrc) {
      var _this6 = this;

      this.src = newSrc;
      this.qualityChangeFlag = true; // remove old quality buffer before append new quality buffer

      for (var key in this.sourceBuffers) {
        var track = this.sourceBuffers[key];
        var length = track.buffered.length;

        if (length > 0) {
          this.removeBuffer(track.buffered.start(0), track.buffered.end(length - 1), key);
        }
      }

      void this.init().then(function () {
        // eslint-disable-next-line no-self-assign
        _this6.video.currentTime = _this6.video.currentTime;
      });
    }
  }, {
    key: "removeBuffer",
    value: function removeBuffer(start, end, type) {
      var track = this.sourceBuffers[type];

      if (track.updating) {
        var _isSafari = ua.isSafari;

        if (_isSafari) {
          // Safari 9/10/11/12 does not correctly implement abort() on SourceBuffer.
          // Calling abort() before appending a segment causes that segment to be
          // incomplete in buffer.
          // Bug filed: https://bugs.webkit.org/show_bug.cgi?id=165342
          abortPolyfill();
        }

        track.abort();
      }

      track.remove(start, end);
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this7 = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAGIC_NUMBER;
      return new Promise(function (resolve) {
        new FragmentFetch(_this7.src, start, end, resolve);
      }).catch(function () {// catch cancel error
      });
    }
  }]);

  return MSE;
}();

var isSafari = ua.isSafari;

var Player = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Player, _Component);

  var _super = (0,createSuper/* default */.Z)(Player);

  function Player() {
    var _this8;

    (0,classCallCheck/* default */.Z)(this, Player);

    _this8 = _super.apply(this, arguments);
    _this8.video = null;
    _this8.useMSE = true;

    _this8.handleTimeUpdate = function (e) {
      var _a, _b;

      if (_this8.useMSE) {
        _this8.mse.handleTimeUpdate();
      }

      (_b = (_a = _this8.props).onTimeUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };

    _this8.handleVideoSeeking = function (e) {
      var _a, _b;

      if (!_this8.video) {
        return;
      }

      var currentTime = _this8.video.currentTime;
      var buffered = _this8.video.buffered;

      if (isSafari && buffered && buffered.length > 0) {
        if (currentTime - 0.1 > buffered.start(0)) {
          if (_this8.useMSE) {
            _this8.mse.seek(_this8.video.currentTime);
          }
        } else if (currentTime < buffered.start(0)) {
          _this8.handleSafariBug();

          return;
        }
      } else {
        if (_this8.useMSE) {
          _this8.mse.seek(_this8.video.currentTime);
        }
      }

      (_b = (_a = _this8.props).onSeeking) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };

    _this8.handlePlay = function (e) {
      if (!_this8.video) {
        return;
      }

      var currentTime = _this8.video.currentTime;

      if (currentTime === 0 && _this8.useMSE) {
        _this8.mse.seek(0);
      }

      var onPlay = _this8.props.onPlay;

      if (onPlay) {
        onPlay(e);
      }
    };

    _this8.handleVideoProgress = function (e) {
      var _a, _b;

      if (!_this8.video) {
        return;
      }

      var buffered = _this8.video.buffered;
      var currentTime = _this8.video.currentTime;

      if (isSafari && buffered && buffered.length > 0 && currentTime < buffered.start(0)) {
        _this8.handleVideoSeeking(e);
      }

      (_b = (_a = _this8.props).onProgress) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }; // 如果当前时间为 0，safari 浏览器需要把 currentTime 设置成 buffered.start(0) 右边一点点的位置
    // 否则 MSE 无法正常播放，会卡在 loading 状态。


    _this8.handleSafariBug = function () {
      if (!_this8.video) {
        return;
      }

      var start = 0;

      if (_this8.video.buffered.length > 0) {
        start = _this8.video.buffered.start(0);
      }

      _this8.video.currentTime = start + 0.1;
    };

    return _this8;
  }

  (0,createClass/* default */.Z)(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this9 = this;

      this.mse = new MSE(this.video, this.props.src);
      void this.mse.init().then(function () {
        // don't use MSE If the video don't have a video track
        if (!_this9.mse.mp4Probe.mp4Data.videoDuration) {
          _this9.useMSE = false;
          _this9.video.src = _this9.props.src;
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.src !== prevProps.src && this.useMSE) {
        this.mse.changeQuality(this.props.src);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.useMSE) {
        this.mse.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _a = this.props,
          src = _a.src,
          onRef = _a.onRef,
          currentQuality = _a.currentQuality,
          useAutoQuality = _a.useAutoQuality,
          onSeeking = _a.onSeeking,
          onPlay = _a.onPlay,
          paused = _a.paused,
          onTimeUpdate = _a.onTimeUpdate,
          onProgress = _a.onProgress,
          props = index_esm_rest(_a, ["src", "onRef", "currentQuality", "useAutoQuality", "onSeeking", "onPlay", "paused", "onTimeUpdate", "onProgress"]);

      return index_js_default().createElement("video", Object.assign({
        ref: function ref(el) {
          _this10.video = el;
          onRef(el);
        }
      }, props, {
        onSeeking: this.handleVideoSeeking,
        onTimeUpdate: this.handleTimeUpdate,
        onPlay: this.handlePlay,
        onProgress: this.handleVideoProgress
      }));
    }
  }]);

  return Player;
}(index_js_.Component);

var index_esm_index = {
  pluginName: 'griffith-mp4',
  VideoComponent: Player,
  willHandleSrcChange: true
};

;// CONCATENATED MODULE: ./node_modules/griffith/dist/index.esm.js




















/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function dist_index_esm_rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
} // 提供一个基础值，再推断出类型，让其他语言符合条件


var en = {
  'quality-auto': 'Auto',
  'quality-ld': 'LD',
  'quality-sd': 'SD',
  'quality-hd': 'HD',
  'quality-fhd': 'FHD',
  'action-enter-fullscreen': 'Fullscreen',
  'action-exit-fullscreen': 'Exit Fullscreen',
  'action-enter-page-fullscreen': 'Page Fullscreen',
  'action-exit-page-fullscreen': 'Exit Page Fullscreen',
  'action-enter-pip': 'Picture in Picture',
  'action-exit-pip': 'Exit Picture in Picture',
  'playback-rate': 'Speed',
  replay: 'Replay',
  play: 'Play',
  pause: 'Pause',
  mute: 'Mute',
  unmute: 'Unmute'
};
var defaultLocale = 'en'; // TODO: 应该提供 tree-shaking 的方式加载

var locales = {
  en: en,
  ja: {
    'quality-auto': '自動',
    'quality-ld': '低画質',
    'quality-sd': '標準画質',
    'quality-hd': '高画質',
    'quality-fhd': '超高画質',
    'action-enter-fullscreen': '全画面',
    'action-exit-fullscreen': '全画面終了',
    'action-enter-page-fullscreen': '全画面ページ',
    'action-exit-page-fullscreen': '全画面から撤退する',
    'action-enter-pip': 'ピクチャーインピクチャー',
    'action-exit-pip': 'ピクチャーインピクチャー終了',
    'playback-rate': '再生速度',
    replay: 'もう一回見る',
    play: '再生',
    pause: '一時停止',
    mute: 'ミュート（消音）',
    unmute: 'ミュート解除'
  },
  // covers zh-Hans-CN and zh-Hans-SG
  'zh-Hans': {
    'quality-auto': '自动',
    'quality-ld': '低清',
    'quality-sd': '标清',
    'quality-hd': '高清',
    'quality-fhd': '超清',
    'action-enter-fullscreen': '全屏',
    'action-exit-fullscreen': '退出全屏',
    'action-enter-page-fullscreen': '网页全屏',
    'action-exit-page-fullscreen': '退出网页全屏',
    'action-enter-pip': '画中画',
    'action-exit-pip': '退出画中画',
    'playback-rate': '倍速',
    replay: '重新播放',
    play: '播放',
    pause: '暂停',
    mute: '静音',
    unmute: '取消静音'
  },
  // covers zh-Hant-HK and zh-Hant-TW
  'zh-Hant': {
    'quality-auto': '自動',
    'quality-ld': '低畫質',
    'quality-sd': '標準畫質',
    'quality-hd': '高畫質',
    'quality-fhd': '超高畫質',
    'action-enter-fullscreen': '全螢幕',
    'action-exit-fullscreen': '結束全螢幕',
    'action-enter-page-fullscreen': '網頁全屏',
    'action-exit-page-fullscreen': '退出網頁全屏',
    'action-enter-pip': '子母畫面',
    'action-exit-pip': '關閉子母畫面',
    'playback-rate': '倍速',
    replay: '重新播放',
    play: '播放',
    pause: '暫停',
    mute: '静音',
    unmute: '解除静音'
  }
};
var LocaleContext = index_js_default().createContext(locales[defaultLocale]);
LocaleContext.displayName = 'LocaleContext';
/** Get i18n locale text */

var useLocaleText = function useLocaleText(name) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  var locale = (0,index_js_.useContext)(LocaleContext);

  if (typeof locale[name] === 'object') {
    var value = locale[name];
    return value[style];
  }

  return locale[name];
};

var getLocalConfig = function getLocalConfig(locale, userLocals) {
  var defaultConfig = locales[locale];
  var userConfig = userLocals === null || userLocals === void 0 ? void 0 : userLocals[locale];
  return userConfig ? Object.assign({}, defaultConfig, userConfig) : defaultConfig;
};

var LocaleProvider = function LocaleProvider(_ref) {
  var locale = _ref.locale,
      localeConfig = _ref.localeConfig,
      children = _ref.children;
  var value = (0,index_js_.useMemo)(function () {
    return getLocalConfig(locale, localeConfig);
  }, [locale, localeConfig]);
  return index_js_default().createElement(LocaleContext.Provider, {
    value: value
  }, children);
};
/**
 * Create immutable function ref
 */


var useHandler = function useHandler(handler) {
  var handlerRef = (0,index_js_.useRef)(handler);
  handlerRef.current = handler; // eslint-disable-next-line @typescript-eslint/no-unsafe-return

  return (0,index_js_.useRef)(function () {
    return handlerRef.current.apply(handlerRef, arguments);
  }).current;
};

var EVENT_TYPE = 'event';
var ACTION_TYPE = 'action';
/**
 * 用于播放器内部，只能接收外界传入的 Action，向外界发出 Event
 */

var InternalMessageContext = index_js_default().createContext({});
InternalMessageContext.displayName = 'InternalMessageContext';
/**
 * 用于播放器外部，只能接收播放器发出的 Event, 或者向播放器发送 Action
 */

var MessageContext = index_js_default().createContext(null);
MessageContext.displayName = 'MessageContext';
/**
 *
 * Retrieve `MessageContext` from outside of Player
 *
 * ```js
 * const messageContextRef = useMessageContextRef()
 *
 * messageContextRef.useEvent(EVENTS.PLAY, () => {})
 *
 * render(
 *  <>
 *    <Player messageContextRef={messageContextRef} />
 *    <button onClick={() => messageContextRef.dispatchAction(ACTIONS.PLAY)}>Play</button>
 *  </>
 * )
 * ```
 */

var useMessageContextRef = function useMessageContextRef() {
  var extra = {
    useEvent: function useEvent(name, listener) {
      var handler = useHandler(listener);
      useLayoutEffect(function () {
        return ref.subscribeEvent(name, handler).unsubscribe;
      }, [name, handler]);
    }
  };
  var ref = useRef(extra).current; // Player mount 中触发了事件，确保在它之前开始监听

  useLayoutEffect(function () {
    if (!ref.current) {
      throw new Error('Missing ref value, please pass it to Player, eg. `<Player messageContextRef={messageContextRef} />`');
    }

    Object.assign(ref, ref.current);
  }, [ref]);
  return ref;
};

var MessageProvider = /*#__PURE__*/function (_React$PureComponent) {
  (0,inherits/* default */.Z)(MessageProvider, _React$PureComponent);

  var _super = (0,createSuper/* default */.Z)(MessageProvider);

  function MessageProvider(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MessageProvider);

    _this = _super.call(this, props);

    _this.emitEvent = function (eventName, data) {
      var _a, _b;

      _this.emitter.emit(eventName, {
        __type__: EVENT_TYPE,
        data: data
      });

      (_b = (_a = _this.props).onEvent) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, data);

      if (_this.props.enableCrossWindow) {
        _this.crossWindowMessager.dispatchMessage(window.parent, eventName, data);
      }
    };

    _this.subscribeEvent = function (eventName, listener) {
      var realListener = function realListener() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            __type__ = _ref2.__type__,
            data = _ref2.data;

        if (__type__ === EVENT_TYPE) {
          // @ts-expect-error Argument of type 'any' is not assignable to parameter of type 'never'
          listener(data);
        }
      };

      _this.emitter.on(eventName, realListener);

      return {
        unsubscribe: function unsubscribe() {
          return _this.emitter.off(eventName, realListener);
        }
      };
    };

    _this.dispatchAction = function (actionName, data) {
      _this.emitter.emit(actionName, {
        __type__: ACTION_TYPE,
        data: data
      });
    };

    _this.subscribeAction = function (actionName, listener) {
      var realListener = function realListener(_ref3) {
        var __type__ = _ref3.__type__,
            data = _ref3.data;

        if (__type__ === ACTION_TYPE) {
          listener(data);
        }
      };

      _this.emitter.on(actionName, realListener);

      return {
        unsubscribe: function unsubscribe() {
          return _this.emitter.off(actionName, realListener);
        }
      };
    };

    _this.internalContextValue = {
      emitEvent: _this.emitEvent,
      subscribeAction: _this.subscribeAction
    };
    _this.externalContextValue = {
      dispatchAction: _this.dispatchAction,
      subscribeEvent: _this.subscribeEvent
    };
    _this.emitter = new (eventemitter3_default())();
    var _this$props = _this.props,
        id = _this$props.id,
        targetOrigin = _this$props.targetOrigin;
    _this.crossWindowMessager = createMessageHelper(id, targetOrigin);

    if (_this.props.dispatchRef) {
      _this.props.dispatchRef.current = _this.externalContextValue.dispatchAction;
    }

    if (_this.props.messageContextRef) {
      _this.props.messageContextRef.current = _this.externalContextValue;
    }

    void Promise.resolve().then(function () {
      _this.emitEvent(EVENTS.SUBSCRIPTION_READY);
    });
    return _this;
  }

  (0,createClass/* default */.Z)(MessageProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.enableCrossWindow) {
        this.crossWindowMessager.subscribeMessage(function (name, data) {
          // TODO: `createMessageHelper` 应当在 API 上区分内部使用（event/action 与相反）与外部使用，这会导致签名不匹配
          _this2.dispatchAction(name, data);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.dispatchRef) {
        this.props.dispatchRef.current = undefined;
      }

      if (this.props.messageContextRef) {
        this.props.messageContextRef.current = undefined;
      }

      this.crossWindowMessager.dispose();
      this.emitter.removeAllListeners();
    }
  }, {
    key: "render",
    value: function render() {
      return index_js_default().createElement(InternalMessageContext.Provider, {
        value: this.internalContextValue
      }, index_js_default().createElement(MessageContext.Provider, {
        value: this.externalContextValue
      }, this.props.children));
    }
  }]);

  return MessageProvider;
}((index_js_default()).PureComponent);

MessageProvider.defaultProps = {
  targetOrigin: '*'
};
var ObjectFitContext = index_js_default().createContext({});
ObjectFitContext.displayName = 'ObjectFitContext';

var ObjectFitProvider = function ObjectFitProvider(_ref4) {
  var _ref4$initialObjectFi = _ref4.initialObjectFit,
      initialObjectFit = _ref4$initialObjectFi === void 0 ? 'contain' : _ref4$initialObjectFi,
      children = _ref4.children;

  var _useState = (0,index_js_.useState)(initialObjectFit),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      objectFit = _useState2[0],
      setObjectFit = _useState2[1];

  var contextValue = (0,index_js_.useMemo)(function () {
    return {
      objectFit: objectFit,
      setObjectFit: setObjectFit
    };
  }, [objectFit, setObjectFit]);
  (0,index_js_.useEffect)(function () {
    setObjectFit(initialObjectFit);
  }, [initialObjectFit]);
  return index_js_default().createElement(ObjectFitContext.Provider, {
    value: contextValue
  }, children);
};
/**
 * Get previous rendered value
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */


function usePrevious(value) {
  var ref = (0,index_js_.useRef)();
  (0,index_js_.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

var listenResizePolyfill = function listenResizePolyfill(target, callback) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var lastRect;

  var handler = function handler() {
    var rect = target.getBoundingClientRect();
    var keys = ['left', 'top', 'width', 'height'];
    var isChanged = !(lastRect && keys.every(function (k) {
      return lastRect[k] === rect[k];
    }));

    if (isChanged) {
      lastRect = rect;
      callback(rect);
    }
  };

  var debounceHandler = debounce_default()(handler, 100);
  var observer = new MutationObserver(debounceHandler);
  observer.observe(target, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  });
  handler();
  window.addEventListener('resize', handler);
  return function () {
    observer.disconnect();
    window.removeEventListener('resize', handler);
  };
};

var listenResizeNative = function listenResizeNative(target, callback) {
  var observer = new ResizeObserver(function (changes) {
    return callback(changes[0].contentRect);
  });
  observer.observe(target);
  return function () {
    observer.disconnect();
  };
};
/** 监听元素大小改改 @see https://caniuse.com/#search=ResizeObserver */


var listenResize = typeof ResizeObserver === 'function' ? listenResizeNative : listenResizePolyfill;
var PositionContext = index_js_default().createContext({
  isFullWidth: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateVideoSize: function updateVideoSize() {}
});
PositionContext.displayName = 'PositionContext';
var styles$a = no_important.StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
}); // Create a placeholder image to preserve the original aspect ratio

var createHolderImageSrc = function createHolderImageSrc(width, height) {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='".concat(width, "' height='").concat(height, "'></svg>");
};

var PositionProvider = function PositionProvider(_ref5) {
  var children = _ref5.children;
  var ref = (0,index_js_.useRef)(null);

  var _useState3 = (0,index_js_.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      helperImageSrc = _useState4[0],
      setHelperImageSrc = _useState4[1];

  var _useState5 = (0,index_js_.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      isFullWidth = _useState6[0],
      setIsFullWidth = _useState6[1];

  var _useState7 = (0,index_js_.useState)({
    videoWidth: 0,
    videoHeight: 0
  }),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      videoSize = _useState8[0],
      setVideoSize = _useState8[1];

  var updateHelperImageSrc = useHandler(function () {
    var videoWidth = videoSize.videoWidth,
        videoHeight = videoSize.videoHeight;

    if (!videoWidth || !videoHeight) {
      return;
    }

    setHelperImageSrc(createHolderImageSrc(videoWidth, videoHeight));
  });
  var updateIsFullWidth = useHandler(function () {
    var videoWidth = videoSize.videoWidth,
        videoHeight = videoSize.videoHeight;

    if (!videoWidth || !videoHeight) {
      return;
    }

    if (!ref.current) {
      return;
    }

    var _ref$current$getBound = ref.current.getBoundingClientRect(),
        width = _ref$current$getBound.width,
        height = _ref$current$getBound.height; // 因为视频缩放后，长宽可能不严格相等，所以认为差值小于等于 0.01 的就算相等。
    // 比如 1280x720 (1.777777778) 和 848x478 (1.774058577)，认为相等。


    var isFullWidthNew = width / height - videoWidth / videoHeight <= 0.01;

    if (isFullWidthNew !== isFullWidth) {
      setIsFullWidth(isFullWidthNew);
    }
  });
  (0,index_js_.useEffect)(function () {
    if (ref.current) {
      return listenResize(ref.current, updateIsFullWidth);
    }
  }, [ref, updateIsFullWidth]);
  (0,index_js_.useEffect)(function () {
    updateHelperImageSrc();
  }, [updateHelperImageSrc]);
  var prevVideoSize = usePrevious(videoSize);
  (0,index_js_.useEffect)(function () {
    if (!prevVideoSize) {
      return;
    }

    var prevWidth = prevVideoSize.videoWidth,
        prevHeight = prevVideoSize.videoHeight;
    var videoWidth = videoSize.videoWidth,
        videoHeight = videoSize.videoHeight;

    if (prevWidth !== videoWidth || prevHeight !== videoHeight) {
      requestAnimationFrame(updateIsFullWidth);
      updateHelperImageSrc();
    }
  }, [prevVideoSize, updateHelperImageSrc, updateIsFullWidth, videoSize]);
  var contextValue = (0,index_js_.useMemo)(function () {
    return {
      isFullWidth: isFullWidth,
      helperImageSrc: helperImageSrc,
      updateVideoSize: setVideoSize
    };
  }, [helperImageSrc, isFullWidth]);
  return index_js_default().createElement(PositionContext.Provider, {
    value: contextValue
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$a.root),
    ref: ref
  }, children));
};

var VideoSourceContext = index_js_default().createContext({});
VideoSourceContext.displayName = 'VideoSourceContext';
var QUALITY_ORDER = ['auto', 'ld', 'sd', 'hd', 'fhd'];

var getQualities = function getQualities(sources, isMobile, isDescOrder) {
  var qualities = Object.keys(sources).sort(function (a, b) {
    return isDescOrder ? QUALITY_ORDER.indexOf(b) - QUALITY_ORDER.indexOf(a) : QUALITY_ORDER.indexOf(a) - QUALITY_ORDER.indexOf(b);
  });

  if (qualities.length > 1) {
    if (isMobile) {
      // 移动端只返回最低清晰度
      return qualities.slice(0, 1);
    } else {
      // 桌面端端去掉低清，除非只有一个低清
      return qualities.filter(function (item) {
        return item !== 'ld';
      });
    }
  }

  return qualities;
};

var getSources = function getSources(qualities, sources) {
  return qualities.map(function (quality) {
    // @ts-expect-error Property 'auto' does not exist on type 'PlaySourceMap'，应当是 QUALITY_ORDER 定义错了
    var _a = sources[quality],
        play_url = _a.play_url,
        rest = dist_index_esm_rest(_a, ["play_url"]);

    return Object.assign(Object.assign({}, rest), {
      source: play_url,
      quality: quality
    });
  });
};
/**
 * reverse an array without mutating the original one
 */


var reverseArray = function reverseArray(arr) {
  return arr.slice().reverse();
};
/**
 * Get last changed value (useful for object comparison)
 */


var useChanged = function useChanged(value) {
  var ref = (0,index_js_.useRef)(value);

  if (value !== ref.current && JSON.stringify(value) !== JSON.stringify(ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

var isMobile$1 = ua.isMobile;

var VideoSourceProvider = function VideoSourceProvider(_ref6) {
  var sourceMap = _ref6.sources,
      useAutoQuality = _ref6.useAutoQuality,
      playbackRates = _ref6.playbackRates,
      defaultPlaybackRate = _ref6.defaultPlaybackRate,
      defaultQuality = _ref6.defaultQuality,
      defaultQualityOrder = _ref6.defaultQualityOrder,
      children = _ref6.children;

  var _useContext = (0,index_js_.useContext)(InternalMessageContext),
      emitEvent = _useContext.emitEvent;

  var lastSourceMap = useChanged(sourceMap);

  var _useMemo = (0,index_js_.useMemo)(function () {
    // 其实视频源应当是必需参数
    if (!lastSourceMap) {
      return {
        qualities: [],
        sources: []
      };
    }

    var format = Object.values(lastSourceMap)[0].format;
    var isDescOrder = defaultQualityOrder === 'desc';
    var qualities = getQualities(lastSourceMap, isMobile$1, isDescOrder);
    var sources = getSources(qualities, lastSourceMap); // 目前只有直播流实现了手动拼接 auto 清晰度的功能

    if (useAutoQuality && !isMobile$1 && format === 'm3u8' && !qualities.includes('auto')) {
      qualities.unshift('auto');
    }

    return {
      qualities: qualities,
      sources: sources,
      format: format,
      isDescOrder: isDescOrder
    };
  }, [useAutoQuality, lastSourceMap, defaultQualityOrder]),
      qualities = _useMemo.qualities,
      sources = _useMemo.sources,
      format = _useMemo.format,
      isDescOrder = _useMemo.isDescOrder;

  var _useState9 = (0,index_js_.useState)(defaultQuality && qualities.includes(defaultQuality) ? defaultQuality : qualities[0]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      currentQuality = _useState10[0],
      setCurrentQualityRaw = _useState10[1];

  var _useState11 = (0,index_js_.useState)(defaultPlaybackRate),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      playbackRate = _useState12[0],
      setPlaybackRate = _useState12[1];

  var setCurrentQuality = useHandler(function (quality) {
    if (currentQuality !== quality) {
      setCurrentQualityRaw(quality);
      emitEvent(EVENTS.QUALITY_CHANGE, {
        prevQuality: currentQuality,
        quality: quality
      });
    }
  }); // 当 sources 改变重置 `currentQuality`

  var prevQualities = usePrevious(qualities);
  (0,index_js_.useEffect)(function () {
    if (prevQualities && prevQualities !== qualities) {
      setCurrentQuality(defaultQuality || qualities[0]);
    }
  }, [prevQualities, qualities, defaultQuality, setCurrentQuality]);
  var setCurrentPlaybackRate = useHandler(function (rate) {
    if (playbackRate !== rate) {
      setPlaybackRate(rate);
      emitEvent(EVENTS.PLAYBACK_RATE_CHANGE, {
        prevRate: playbackRate,
        rate: rate
      });
    }
  }); // 根据当前清晰度返回对应的 src

  var currentSrc = (0,index_js_.useMemo)(function () {
    if (sources.length === 0) {
      return;
    }

    var source = sources.find(function (item) {
      return item.quality === currentQuality;
    }) || sources[0];
    return source.source;
  }, [currentQuality, sources]);
  var contextValue = (0,index_js_.useMemo)(function () {
    return {
      qualities: isDescOrder ? qualities : reverseArray(qualities),
      playbackRates: playbackRates,
      format: format,
      sources: sources,
      currentQuality: currentQuality,
      currentPlaybackRate: playbackRate,
      currentSrc: currentSrc,
      setCurrentQuality: setCurrentQuality,
      setCurrentPlaybackRate: setCurrentPlaybackRate
    };
  }, [playbackRate, currentQuality, currentSrc, format, playbackRates, qualities, isDescOrder, setCurrentPlaybackRate, setCurrentQuality, sources]);
  return index_js_default().createElement(VideoSourceContext.Provider, {
    value: contextValue
  }, children);
};
/**
 * Create a boolean value and switches for changing it
 *
 * ```js
 * const [isOpen, isOpenSwitch] = useBoolean()
 *
 * <Button onClick={isOpenSwitch.on} label="Open" />
 * <Button onClick={isOpenSwitch.off} label="Close" />
 * <Button onClick={isOpenSwitch.toggle} label="Toggle" />
 * ```
 */


var useBoolean = function useBoolean() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState13 = (0,index_js_.useState)(initialState),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      value = _useState14[0],
      setValue = _useState14[1];

  var valueSwitch = (0,index_js_.useRef)({
    on: (0,index_js_.useCallback)(function () {
      return setValue(true);
    }, []),
    off: (0,index_js_.useCallback)(function () {
      return setValue(false);
    }, []),
    toggle: (0,index_js_.useCallback)(function () {
      return setValue(function (v) {
        return !v;
      });
    }, [])
  }).current;
  return [value, valueSwitch];
};
/**
 * Mount callback
 */


function useMount(effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,index_js_.useEffect)(effect, []);
} // https://github.com/zloirock/core-js/issues/280


function pad(number) {
  var result = String(number);

  if (result.length < 2) {
    result = '0' + result;
  }

  return result;
}

function formatDuration(time) {
  if (!Number.isFinite(time)) return '';
  time = Math.floor(time);
  var seconds = time % 60;
  var minutes = Math.floor(time / 60);
  return "".concat(pad(minutes), ":").concat(pad(seconds));
}

function getBufferedTime(currentTime, buffered) {
  var item = buffered.find(function (item) {
    return item.start <= currentTime && currentTime <= item.end;
  });

  if (item) {
    return item.end;
  }

  return 0;
} // Refer to:
// https://w3c.github.io/picture-in-picture/
// https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/


var Pip = /*#__PURE__*/function () {
  function Pip() {
    (0,classCallCheck/* default */.Z)(this, Pip);

    this.inited = false;
  }

  (0,createClass/* default */.Z)(Pip, [{
    key: "init",
    value: function init(element, onEnter, onExit) {
      this.inited = true;
      this.element = element;
      this.onEnter = onEnter;
      this.onExit = onExit;
      this.element.addEventListener('enterpictureinpicture', this.handleEnter.bind(this));
      this.element.addEventListener('leavepictureinpicture', this.handleExit.bind(this));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e) {
      if (this.onEnter) {
        this.onEnter(e);
      }
    }
  }, {
    key: "handleExit",
    value: function handleExit(e) {
      if (this.onExit) {
        this.onExit(e);
      }
    }
  }, {
    key: "supported",
    get: function get() {
      if (!this.inited) return false; // experimental types

      return document.pictureInPictureEnabled;
    }
  }, {
    key: "pictureInPictureElement",
    get: function get() {
      return document.pictureInPictureElement;
    }
  }, {
    key: "request",
    value: function request() {
      if (this.element) {
        this.element.requestPictureInPicture();
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      document.exitPictureInPicture();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.pictureInPictureElement) {
        this.exit();
      } else {
        this.request();
      }
    }
  }]);

  return Pip;
}();

var compatibleStorage = {
  store: {},
  setItem: function setItem(key, value) {
    this.store[key] = value;
  },
  removeItem: function removeItem(key) {
    return delete this.store[key];
  },
  getItem: function getItem(key) {
    return this.store[key];
  }
};
var storage = {
  isSupported: memoize_default()(function () {
    try {
      var testSupport = {
        key: '__test_support_key__',
        value: '__test_support_value__'
      };
      var supported = Boolean(__webpack_require__.g.localStorage);
      localStorage.setItem(testSupport.key, testSupport.value);
      localStorage.removeItem(testSupport.key);
      return supported;
    } catch (err) {
      return false;
    }
  }),
  getStorage: memoize_default()(function () {
    return storage.isSupported() ? localStorage : compatibleStorage;
  }),
  set: function set(key, value) {
    storage.getStorage().setItem(key, JSON.stringify(value));
  },
  get: function get(key) {
    try {
      var value = storage.getStorage().getItem(key);
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  },
  delete: function _delete(key) {
    storage.getStorage().removeItem(key);
  }
};
var actionAnimation = {
  '0%': {
    opacity: 0,
    transform: 'scale(0)'
  },
  '50%': {
    opacity: 0.6,
    transform: 'scale(0.8)'
  },
  '100%': {
    opacity: 0,
    transform: 'scale(1)'
  }
};
var actionLabelAnimation = {
  '90%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
};
var fadeinAnimation = {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
};
var breakpoints = {
  mobile: '26em' // 416px

};

var breakTo = function breakTo(breakpoint) {
  return "@media screen and (max-width: ".concat(breakpoints[breakpoint], ")");
};

var styles$9 = no_important.StyleSheet.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
    width: '100%',
    height: '100%',
    fontSize: 16,
    backgroundColor: '#000',
    ':focus': {
      outline: 'none'
    }
  },
  fullScreened: {
    fontSize: 24
  },
  pageFullScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100000
  },
  actionButton: {
    color: '#fff',
    width: '4.5em',
    height: '4.5em'
  },
  actionButtonAnimated: {
    animationName: actionAnimation,
    animationDuration: '600ms',
    animationFillMode: 'both'
  },
  actionLabelAnimation: {
    animationName: actionLabelAnimation,
    animationDuration: '600ms',
    animationFillMode: 'both'
  },
  actionIcon: (0,defineProperty/* default */.Z)({
    width: '4.5em',
    height: '4.5em'
  }, breakTo('mobile'), {
    transform: 'scale(0.75)'
  }),
  actionLabel: {
    marginTop: '.5em',
    padding: '.3em .5em',
    textAlign: 'center',
    color: '#fff',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: 5
  },
  video: {
    width: '100%',
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  overlayMask: {
    background: 'rgba(0, 0, 0, 0.08)'
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    color: '#0f88eb',
    transform: 'translate(-50%, -50%)'
  },
  action: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  actionToast: {
    pointerEvents: 'none'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    overflow: 'hidden',
    padding: '0 1em',
    lineHeight: 2.5,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#fff',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))',
    transform: 'translateY(-100%)',
    transition: 'transform 300ms'
  },
  titleShown: {
    transform: 'translateY(0)'
  },
  controller: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))'
  },
  volumeButton: {
    position: 'absolute',
    bottom: 0,
    right: 8
  },
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden',
    backgroundColor: '#000',
    cursor: 'pointer',
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 300ms, opacity 300ms'
  },
  coverShown: {
    visibility: 'visible',
    opacity: 1
  },
  coverImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  coverTime: {
    position: 'absolute',
    right: '0.5em',
    bottom: '0.5em',
    padding: '0.375em',
    fontSize: '0.875em',
    lineHeight: 1,
    color: 'rgba(255, 255, 255, 0.9)',
    backgroundColor: 'transparent',
    textShadow: '0 0 6px rgba(0, 0, 0, 0.4)'
  },
  coverTimeMobile: {
    padding: 0
  },
  coverAction: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  coverReplayAction: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
    animationName: fadeinAnimation,
    animationDuration: '600ms',
    animationFillMode: 'both'
  },
  coverReplayButton: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    height: '40px',
    width: '116px',
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '8px',
    boxSizing: 'border-box',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'transform 200ms, opacity 200ms',
    willChange: 'transform'
  },
  coverReplayButtonHovered: {
    transform: 'scale(1.1)'
  },
  coverReplayButtonPressed: {
    opacity: 0.7
  },
  replayIcon: {
    verticalAlign: 'top',
    marginRight: '4px'
  },
  error: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#000'
  },
  errorIcon: {
    width: '2.5em',
    height: '2.5em',
    margin: '0 auto',
    fill: 'currentColor'
  },
  errorMessage: {
    marginTop: '1em',
    fontSize: '1.25em',
    lineHeight: 1,
    textAlign: 'center'
  }
});
var hiddenOrShownStyle = no_important.StyleSheet.create({
  base: {
    transition: "opacity .5s ease-in-out, visibility .5s ease-in-out"
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden'
  },
  shown: {
    opacity: 1,
    visibility: 'visible'
  }
});
var styles$8 = no_important.StyleSheet.create({
  root: {
    display: 'inline-block',
    width: '1.5em',
    height: '1.5em'
  },
  svg: {
    display: 'block',
    width: '100%',
    height: '100%',
    fill: 'currentColor'
  }
});

function Icon(_ref7) {
  var icon = _ref7.icon,
      customStyles = _ref7.styles;
  var children = (0,index_js_.cloneElement)(icon, {
    className: (0,no_important.css)(styles$8.svg)
  });
  return index_js_default().createElement("span", {
    className: (0,no_important.css)(styles$8.root, customStyles)
  }, children);
}

var ActionToastStateContext = (0,index_js_.createContext)(void 0);
var ActionToastDispatchContext = (0,index_js_.createContext)(function () {// noop
});
/** 触发操作反馈 */

var useActionToastDispatch = function useActionToastDispatch() {
  return (0,index_js_.useContext)(ActionToastDispatchContext);
};
/**
 * 操作反馈提示（主要提示用户热键或鼠标操作的结果）
 */


var ActionToastProvider = function ActionToastProvider(_ref8) {
  var children = _ref8.children;

  var _useState15 = (0,index_js_.useState)(),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      state = _useState16[0],
      setState = _useState16[1];

  var lastKey = (0,index_js_.useRef)(0);
  var dispatch = (0,index_js_.useCallback)(function (state) {
    // 每一次设定必定是创建一个新的提示，key 的变化让元素重新 mount，CSS 动画得以执行
    lastKey.current += 1;
    setState(Object.assign(Object.assign({}, state), {
      key: String(lastKey.current)
    }));
  }, []);
  return index_js_default().createElement(ActionToastStateContext.Provider, {
    value: state
  }, index_js_default().createElement(ActionToastDispatchContext.Provider, {
    value: dispatch
  }, children));
};
/** 操作反馈提示的目标渲染位置 */


var ActionToastOutlet = index_js_default().memo(function () {
  var state = (0,index_js_.useContext)(ActionToastStateContext);

  if (!state) {
    return null;
  }

  var key = state.key,
      icon = state.icon,
      label = state.label;
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.action, styles$9.actionToast),
    key: key
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.actionButton, styles$9.actionButtonAnimated)
  }, icon && index_js_default().createElement(Icon, {
    icon: icon,
    styles: styles$9.actionIcon
  })), label && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.actionLabel, styles$9.actionLabelAnimation)
  }, label));
});
var exitPip = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M19.7180574,15 C20.1638168,15 20.3254599,15.0464128 20.4884229,15.1335664 C20.6513858,15.2207199 20.7792801,15.3486142 20.8664336,15.5115771 C20.9535872,15.6745401 21,15.8361832 21,16.2819426 L21,19.7180574 C21,20.1638168 20.9535872,20.3254599 20.8664336,20.4884229 C20.7792801,20.6513858 20.6513858,20.7792801 20.4884229,20.8664336 C20.3254599,20.9535872 20.1638168,21 19.7180574,21 L16.2819426,21 C15.8361832,21 15.6745401,20.9535872 15.5115771,20.8664336 C15.3486142,20.7792801 15.2207199,20.6513858 15.1335664,20.4884229 C15.0464128,20.3254599 15,20.1638168 15,19.7180574 L15,16.2819426 C15,15.8361832 15.0464128,15.6745401 15.1335664,15.5115771 C15.2207199,15.3486142 15.3486142,15.2207199 15.5115771,15.1335664 C15.6745401,15.0464128 15.8361832,15 16.2819426,15 L19.7180574,15 Z M18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,11.75 C20,11.8880712 19.8880712,12 19.75,12 L18.25,12 C18.1119288,12 18,11.8880712 18,11.75 L18,6.5 C18,6.24358208 17.8069799,6.03224642 17.5583106,6.00336387 L17.5,6 L6.5,6 C6.24358208,6 6.03224642,6.1930201 6.00336387,6.44168944 L6,6.5 L6,17.5 C6,17.7564179 6.1930201,17.9677536 6.44168944,17.9966361 L6.5,18 L11.75,18 C11.8880712,18 12,18.1119288 12,18.25 L12,19.75 C12,19.8880712 11.8880712,20 11.75,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 L18.5,4 Z M12.263324,13.6777091 L9.53508966,10.956021 L9.55615206,13.2225752 C9.55502994,13.3470231 9.46566931,13.4482773 9.34885743,13.4683645 L9.30388492,13.4719793 L7.79658322,13.4583417 C7.67542934,13.4572455 7.57490537,13.3702653 7.5531943,13.2554476 L7.54886064,13.2111995 L7.49923911,7.74790313 C7.50035209,7.62546574 7.5897117,7.52443494 7.70652348,7.50437256 L7.75149597,7.50076089 L13.2230869,7.55026617 C13.3442408,7.55136234 13.4447648,7.6383426 13.4664758,7.75316028 L13.4708095,7.79740841 L13.4844791,9.30570263 C13.4833661,9.42814002 13.3940065,9.52917082 13.2771947,9.5492332 L13.2322222,9.55284487 L10.9362217,9.53206969 L13.6775376,12.2668086 C13.7751687,12.364211 13.7751687,12.5221314 13.6775376,12.6195338 L12.6168774,13.6777091 C12.5192463,13.7751115 12.3609551,13.7751115 12.263324,13.6777091 Z"
}));
var fullscreen = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M20,10 L20,5 C20,4.44771525 19.5490248,4 19.009222,4 L14,4 L14,6 L18,6 L18,10 L20,10 Z M19.7115371,19.7068284 C19.8902571,19.5277733 20,19.2813055 20,19.009222 L20,14 L18,14 L18,18 L14,18 L14,20 L19.009222,20 C19.2776249,20 19.5240668,19.8893106 19.7040291,19.7101145 L19.7115371,19.7068284 Z M6,18 L6,14 L4,14 L4,19.009222 C4,19.2813055 4.10974288,19.5277733 4.28846285,19.7068284 C4.47593315,19.8893106 4.72237506,20 4.99077797,20 L10,20 L10,18 L6,18 Z M4.28846285,4.29317155 C4.10974288,4.47222673 4,4.71869448 4,4.99077797 L4,10 L6,10 L6,6 L10,6 L10,4 L4.99077797,4 C4.72237506,4 4.47593315,4.11068941 4.29597088,4.28988548 L4.28846285,4.29317155 Z"
}));
var muted = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M7.38001507,9.5 L5,9.5 L5,12.0119396 L5,14.5238791 L8.33098415,14.5238791 L8.33098415,14.5238791 C8.39017333,14.520451 8.4497727,14.5223174 8.50904598,14.5296109 C8.72475585,14.5524598 8.91816198,14.6424266 9.06920843,14.7779841 L13,17.4293365 L13,15.1199849 L7.38001507,9.5 Z M15,17.1199849 L15,19.251289 C15,19.8045373 14.5522847,20.25 14,20.25 C13.98423,20.25 13.9685502,20.2496405 13.9529683,20.2489292 C13.7472793,20.2584936 13.5372091,20.2041245 13.3535806,20.0802655 L8.08102098,16.5238791 L4.00000001,16.5238791 C3.71994909,16.5238791 3.46994918,16.4119504 3.29196292,16.2310404 C3.11117675,16.0497507 3,15.7991447 3,15.5223056 L3,12.0119396 L3,8.50157356 C3,8.2247344 3.11117675,7.97412842 3.29196292,7.79283868 C3.46994918,7.61192872 3.71994909,7.5 4.00000001,7.5 L5.38001507,7.5 L3.38382011,5.50380504 C2.99233448,5.1123194 2.98883249,4.48109777 3.38207944,4.08785081 C3.77260374,3.69732652 4.3999302,3.691488 4.79803367,4.08959148 L18.936688,18.2282458 C19.3281736,18.6197314 19.3316756,19.250953 18.9384286,19.6442 C18.5479043,20.0347243 17.9205779,20.0405628 17.5224744,19.6424593 L15,17.1199849 Z M10.792179,8.08373676 L9.35149599,6.64305379 L13.3535806,3.94361361 C13.5372091,3.81975463 13.7472793,3.76538554 13.9529683,3.77494994 C13.9685502,3.77423867 13.98423,3.77387913 14,3.77387913 C14.5522847,3.77387913 15,4.21934183 15,4.77259008 L15,12.0119396 L15,12.2915578 L13,10.2915578 L13,6.59454265 L10.792179,8.08373676 Z M18.0173138,15.3088716 C18.8917509,14.408489 19.4301566,13.1799808 19.4301566,11.8257212 C19.4301566,10.2214787 18.6746368,8.79369726 17.5,7.87877967 L17.5067574,7.87009164 C17.2041341,7.69816923 17,7.37292366 17,7 C17,6.44771525 17.4477153,6 18,6 C18.2836948,6 18.5397977,6.11813499 18.721799,6.30789526 L18.7279374,6.30000305 C20.3724289,7.58088767 21.4301566,9.57978168 21.4301566,11.8257212 C21.4301566,13.7322659 20.6679517,15.4607882 19.431636,16.7231938 L18.0173138,15.3088716 Z"
}));
var pause$1 = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M9,5 C10,5 10,6 10,6 C10,6 10,17 10,18 C10,19 9,19 9,19 L7,19 C6,19 6,18 6,18 L6,6 C6,5 7,5 7,5 C7,5 8,5 9,5 Z M17,5 C18,5 18,6 18,6 C18,6 18,17 18,18 C18,19 17,19 17,19 L15,19 C14,19 14,18 14,18 L14,6 C14,5 15,5 15,5 C15,5 16,5 17,5 Z"
}));
var pip = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M19.7180574,15 C20.1638168,15 20.3254599,15.0464128 20.4884229,15.1335664 C20.6513858,15.2207199 20.7792801,15.3486142 20.8664336,15.5115771 C20.9535872,15.6745401 21,15.8361832 21,16.2819426 L21,19.7180574 C21,20.1638168 20.9535872,20.3254599 20.8664336,20.4884229 C20.7792801,20.6513858 20.6513858,20.7792801 20.4884229,20.8664336 C20.3254599,20.9535872 20.1638168,21 19.7180574,21 L16.2819426,21 C15.8361832,21 15.6745401,20.9535872 15.5115771,20.8664336 C15.3486142,20.7792801 15.2207199,20.6513858 15.1335664,20.4884229 C15.0464128,20.3254599 15,20.1638168 15,19.7180574 L15,16.2819426 C15,15.8361832 15.0464128,15.6745401 15.1335664,15.5115771 C15.2207199,15.3486142 15.3486142,15.2207199 15.5115771,15.1335664 C15.6745401,15.0464128 15.8361832,15 16.2819426,15 L19.7180574,15 Z M18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,11.75 C20,11.8880712 19.8880712,12 19.75,12 L18.25,12 C18.1119288,12 18,11.8880712 18,11.75 L18,6.5 C18,6.24358208 17.8069799,6.03224642 17.5583106,6.00336387 L17.5,6 L6.5,6 C6.24358208,6 6.03224642,6.1930201 6.00336387,6.44168944 L6,6.5 L6,17.5 C6,17.7564179 6.1930201,17.9677536 6.44168944,17.9966361 L6.5,18 L11.75,18 C11.8880712,18 12,18.1119288 12,18.25 L12,19.75 C12,19.8880712 11.8880712,20 11.75,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 L18.5,4 Z M8.98667598,7.57381266 L11.7149103,10.2955008 L11.6938479,8.02894655 C11.6949701,7.90449864 11.7843307,7.80324445 11.9011426,7.78315725 L11.9461151,7.77954248 L13.4534168,7.79318008 C13.5745707,7.79427625 13.6750946,7.88125651 13.6968057,7.99607419 L13.7011394,8.04032232 L13.7507609,13.5036187 C13.7496479,13.626056 13.6602883,13.7270868 13.5434765,13.7471492 L13.498504,13.7507609 L8.0269131,13.7012556 C7.90575922,13.7001594 7.80523525,13.6131792 7.78352418,13.4983615 L7.77919052,13.4541134 L7.76552089,11.9458192 C7.76663388,11.8233818 7.85599349,11.722351 7.97280526,11.7022886 L8.01777775,11.6986769 L10.3137783,11.7194521 L7.57246241,8.98471315 C7.47483134,8.8873108 7.47483134,8.72939038 7.57246241,8.63198803 L8.63312259,7.57381266 C8.73075366,7.4764103 8.8890449,7.4764103 8.98667598,7.57381266 Z"
}));
var play$1 = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M8.03610236,19.7012935 C6.93281899,20.3993842 6,19.8347521 6,18.4154722 L6,5.59575582 C6,4.14567779 6.91151094,3.59901121 8.03610236,4.30993442 L18.1645278,10.7185093 C19.2678112,11.4166 19.2891193,12.5817954 18.1645278,13.2927186 L8.03610236,19.7012935 Z"
}));
var smallscreen = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M14.2884629,14.2931716 C14.1097429,14.4722267 14,14.7186945 14,14.990778 L14,20 L16,20 L16,16 L20,16 L20,14 L14.990778,14 C14.7223751,14 14.4759332,14.1106894 14.2959709,14.2898855 L14.2884629,14.2931716 Z M16,8 L16,4 L14,4 L14,9.00922203 C14,9.28130552 14.1097429,9.52777327 14.2884629,9.70682845 C14.4759332,9.88931059 14.7223751,10 14.990778,10 L20,10 L20,8 L16,8 Z M8,16 L8,20 L10,20 L10,14.990778 C10,14.7186945 9.89025712,14.4722267 9.71153715,14.2931716 C9.52406685,14.1106894 9.27762494,14 9.00922203,14 L4,14 L4,16 L8,16 L8,16 Z M9.71153715,9.70682845 C9.89025712,9.52777327 10,9.28130552 10,9.00922203 L10,4 L8,4 L8,8 L4,8 L4,10 L9.00922203,10 C9.27762494,10 9.52406685,9.88931059 9.70402912,9.71011452 L9.71153715,9.70682845 Z"
}));
var volume = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("path", {
  d: "M5,12.0119396 L5,14.5238791 L8.33098415,14.5238791 L8.33098415,14.5238791 C8.39017333,14.520451 8.4497727,14.5223174 8.50904598,14.5296109 C8.72475585,14.5524598 8.91816198,14.6424266 9.06920843,14.7779841 L13,17.4293365 L13,12.0119396 L13,6.59454265 L9.06920843,9.24589504 C8.91816198,9.38145255 8.72475585,9.47141933 8.50904598,9.49426822 C8.4497727,9.50156175 8.39017333,9.5034281 8.33098415,9.5 L8.33098415,9.5 L5,9.5 L5,12.0119396 Z M3,12.0119396 L3,8.50157356 C3,8.2247344 3.11117675,7.97412842 3.29196292,7.79283868 C3.46994918,7.61192872 3.71994909,7.5 4.00000001,7.5 L8.08102098,7.5 L13.3535806,3.94361361 C13.5372091,3.81975463 13.7472793,3.76538554 13.9529683,3.77494994 C13.9685502,3.77423867 13.98423,3.77387913 14,3.77387913 C14.5522847,3.77387913 15,4.21934183 15,4.77259008 L15,12.0119396 L15,19.251289 C15,19.8045373 14.5522847,20.25 14,20.25 C13.98423,20.25 13.9685502,20.2496405 13.9529683,20.2489292 C13.7472793,20.2584936 13.5372091,20.2041245 13.3535806,20.0802655 L8.08102098,16.5238791 L4.00000001,16.5238791 C3.71994909,16.5238791 3.46994918,16.4119504 3.29196292,16.2310404 C3.11117675,16.0497507 3,15.7991447 3,15.5223056 L3,12.0119396 Z M17.5059844,15.7803571 L17.5,15.7726628 C18.6746368,14.8577452 19.4301566,13.4299638 19.4301566,11.8257212 C19.4301566,10.2214787 18.6746368,8.79369726 17.5,7.87877967 L17.5067574,7.87009164 C17.2041341,7.69816923 17,7.37292366 17,7 C17,6.44771525 17.4477153,6 18,6 C18.2836948,6 18.5397977,6.11813499 18.721799,6.30789526 L18.7279374,6.30000305 C20.3724289,7.58088767 21.4301566,9.57978168 21.4301566,11.8257212 C21.4301566,14.0716608 20.3724289,16.0705548 18.7279374,17.3514394 L18.7211832,17.3427554 C18.5392202,17.5321404 18.283375,17.6500092 18,17.6500092 C17.4477153,17.6500092 17,17.2022939 17,16.6500092 C17,16.2774031 17.2037866,15.9523939 17.5059844,15.7803571 L17.5059844,15.7803571 Z"
}));
var enterPageScreen = index_js_default().createElement("svg", {
  viewBox: "0 -4 16 24"
}, index_js_default().createElement("path", {
  d: "M15.9964 0.207284C15.9763 0.0904726 15.8753 0.00111298 15.7529 0L10.2896 0.0496215L10.2453 0.0539552C10.1305 0.0756663 10.0435 0.17619 10.0424 0.297344L10.0288 1.80465L10.0324 1.84962C10.0525 1.96643 10.1537 2.05579 10.2782 2.05691L12.5447 2.03585L9.82305 4.76408C9.72565 4.86172 9.72565 5.02001 9.82305 5.11764L10.8812 6.1783C10.9786 6.27593 11.1365 6.27593 11.234 6.1783L13.9687 3.43698L13.9479 5.73298L13.9515 5.77796C13.9716 5.89477 14.0726 5.98413 14.1951 5.98524L15.7034 5.97157L15.7476 5.96724C15.8624 5.94553 15.9494 5.845 15.9505 5.72385L16 0.252257L15.9964 0.207284ZM0.00361156 15.7942C0.0236739 15.911 0.124705 16.0004 0.247142 16.0015L5.71044 15.9519L5.75469 15.9476C5.8695 15.9259 5.95648 15.8253 5.95758 15.7042L5.97122 14.1969L5.9676 14.1519C5.94752 14.0351 5.84626 13.9457 5.72181 13.9446L3.45526 13.9657L6.17695 11.2374C6.27435 11.1398 6.27435 10.9815 6.17695 10.8839L5.11877 9.82322C5.02137 9.72559 4.86345 9.72559 4.76605 9.82322L2.03131 12.5645L2.05208 10.2685L2.04847 10.2236C2.02841 10.1068 1.92738 10.0174 1.80494 10.0163L0.296648 10.03L0.252399 10.0343C0.137582 10.056 0.0506014 10.1565 0.0495052 10.2777L0 15.7493L0.00361156 15.7942Z"
}));
var exitPageScreen = index_js_default().createElement("svg", {
  viewBox: "0 -4 16 24"
}, index_js_default().createElement("path", {
  d: "M9.75361 6.04424C9.77367 6.16105 9.87471 6.25041 9.99714 6.25152L15.4604 6.2019L15.5047 6.19757C15.6195 6.17586 15.7065 6.07533 15.7076 5.95418L15.7212 4.44688L15.7176 4.4019C15.6975 4.28509 15.5963 4.19573 15.4718 4.19461L13.2053 4.21567L15.9269 1.48744C16.0244 1.38981 16.0244 1.23151 15.9269 1.13388L14.8688 0.0732233C14.7714 -0.0244078 14.6135 -0.0244078 14.516 0.0732233L11.7813 2.81454L11.8021 0.518539L11.7985 0.473566C11.7784 0.356754 11.6774 0.267395 11.5549 0.266282L10.0466 0.279951L10.0024 0.284285C9.88758 0.305996 9.8006 0.40652 9.79951 0.527674L9.75 5.99926L9.75361 6.04424ZM6.24639 9.95728C6.22633 9.84047 6.1253 9.75111 6.00286 9.75L0.539561 9.79962L0.495313 9.80396C0.380496 9.82567 0.293515 9.92619 0.292419 10.0473L0.278782 11.5546L0.282396 11.5996C0.302484 11.7164 0.403738 11.8058 0.528186 11.8069L2.79474 11.7859L0.0730518 14.5141C-0.0243506 14.6117 -0.0243506 14.77 0.0730518 14.8676L1.13123 15.9283C1.22863 16.0259 1.38655 16.0259 1.48395 15.9283L4.21869 13.187L4.19792 15.483L4.20153 15.528C4.22159 15.6448 4.32262 15.7341 4.44506 15.7352L5.95335 15.7216L5.9976 15.7172C6.11242 15.6955 6.1994 15.595 6.20049 15.4738L6.25 10.0023L6.24639 9.95728Z"
}));
var styles$7 = no_important.StyleSheet.create({
  root: {
    padding: '0 0.5em'
  },
  rootTop: {
    height: '2em'
  },
  rootBottom: {
    height: '2.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rootBottomLeft: {
    display: 'flex'
  },
  rootBottomRight: {
    display: 'flex'
  },
  button: {
    display: 'block',
    width: '2.5em',
    height: '2.5em',
    margin: 0,
    padding: '0.5em',
    border: 'none',
    borderRadius: 0,
    fontSize: 'inherit',
    color: 'rgba(255, 255, 255, 0.7)',
    background: 'none',
    cursor: 'pointer',
    transition: 'color 300ms',
    ':hover': {
      color: '#fff'
    },
    ':focus': {
      outline: 'none'
    }
  },
  menuContainer: {
    position: 'relative'
  },
  menu: {
    position: 'absolute',
    left: '50%',
    bottom: '100%',
    visibility: 'hidden',
    opacity: 0,
    transform: 'translateX(-50%)',
    transition: 'visibility 300ms, opacity 300ms',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '4px'
  },
  menuShown: {
    visibility: 'visible',
    opacity: 1
  },
  timeline: {
    flex: 1
  },
  timelineHolder: {
    flex: 1
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0.5em',
    minWidth: '100px',
    fontSize: '0.875em',
    color: 'rgba(255, 255, 255, 0.9)',
    boxSizing: 'content-box',
    fontVariantNumeric: 'tabular-nums'
  },
  labelButton: {
    width: 'auto',
    lineHeight: 1.5
  },
  labelButtonText: {
    fontSize: '0.875em'
  },
  qualityMenu: {
    padding: '0.25em 0'
  },
  qualityMenuItem: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    height: '2em',
    margin: 0,
    padding: '0 0.75em',
    border: 'none',
    borderRadius: 0,
    fontSize: '0.875em',
    lineHeight: 2,
    whiteSpace: 'nowrap',
    color: 'rgba(255, 255, 255, 0.5)',
    background: 'none',
    cursor: 'pointer',
    transition: 'color 300ms, background-color 300ms',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    ':focus': {
      outline: 'none'
    }
  },
  qualityMenuActiveItem: {
    color: '#fff'
  },
  fullScreenedTime: {
    width: '150px'
  },
  tooltipContent: {
    pointerEvents: 'none',
    padding: '0.25em 0.5em',
    fontSize: '0.875em',
    whiteSpace: 'nowrap',
    color: '#fff'
  }
});

var ControllerButton = function ControllerButton(_a) {
  var icon = _a.icon,
      label = _a.label,
      props = dist_index_esm_rest(_a, ["icon", "label"]);

  return index_js_default().createElement("button", Object.assign({}, props, {
    className: (0,no_important.css)(styles$7.button, label ? styles$7.labelButton : null),
    type: "button"
  }), icon && index_js_default().createElement(Icon, {
    icon: icon
  }), label && index_js_default().createElement("span", {
    className: (0,no_important.css)(styles$7.labelButtonText)
  }, label));
};

var canUseTouch = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;
/**
 * ControllerButton
 *
 * `localeKey` 取本地文本，显示为 tooltip，同时设定为 children 的 `aria-label`
 */

var ControllerTooltip = function ControllerTooltip(_ref9) {
  var localeKey = _ref9.localeKey,
      hotkey = _ref9.hotkey,
      children = _ref9.children;
  var text = useLocaleText(localeKey);

  var _useBoolean = useBoolean(),
      _useBoolean2 = (0,slicedToArray/* default */.Z)(_useBoolean, 2),
      isHovered = _useBoolean2[0],
      isHoveredSwitch = _useBoolean2[1];

  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.menuContainer),
    onMouseEnter: isHoveredSwitch.on,
    onMouseLeave: isHoveredSwitch.off
  }, (0,index_js_.cloneElement)(children, {
    'aria-label': text
  }), !canUseTouch && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.menu, isHovered && styles$7.menuShown, styles$7.tooltipContent)
  }, text, hotkey && " (".concat(hotkey, ")")));
};

var PlayButtonItem = function PlayButtonItem(_ref10) {
  var isPlaying = _ref10.isPlaying,
      onClick = _ref10.onClick;
  return index_js_default().createElement(ControllerTooltip, {
    localeKey: isPlaying ? 'pause' : 'play',
    hotkey: "k"
  }, index_js_default().createElement(ControllerButton, {
    icon: isPlaying ? pause$1 : play$1,
    onClick: onClick
  }));
};

function calculatePercentage(value, total) {
  if (!total) {
    return "0%";
  }

  return "".concat(clamp_default()(value / total, 0, 1) * 100, "%");
}

var styles$6 = no_important.StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    bottom: 0,
    width: '100%'
  },
  item: {
    position: 'absolute',
    width: 12,
    height: '100%',
    transform: 'translate(-50%)',
    ':hover': {
      height: 6,
      top: -1
    }
  },
  innerItem: {
    width: 6,
    backgroundColor: '#ff9607',
    height: '100%',
    margin: '0 auto'
  }
});

var ProgressDotItem = function ProgressDotItem(_ref11) {
  var startTime = _ref11.startTime,
      total = _ref11.total,
      onProgressDotHover = _ref11.onProgressDotHover,
      onProgressDotLeave = _ref11.onProgressDotLeave;
  var ref = (0,index_js_.useRef)(null);

  var handleMouseEnter = function handleMouseEnter() {
    if (!ref.current) {
      return;
    }

    var _ref$current$getBound2 = ref.current.getBoundingClientRect(),
        left = _ref$current$getBound2.left,
        top = _ref$current$getBound2.top;

    onProgressDotHover === null || onProgressDotHover === void 0 ? void 0 : onProgressDotHover({
      startTime: startTime,
      left: left,
      top: top
    });
  };

  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$6.item),
    style: {
      left: calculatePercentage(startTime, total)
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: onProgressDotLeave
  }, index_js_default().createElement("div", {
    ref: ref,
    className: (0,no_important.css)(styles$6.innerItem)
  }));
};

var ProgressDots = function ProgressDots(_ref12) {
  var _ref12$progressDots = _ref12.progressDots,
      progressDots = _ref12$progressDots === void 0 ? [] : _ref12$progressDots,
      total = _ref12.total,
      onProgressDotHover = _ref12.onProgressDotHover,
      onProgressDotLeave = _ref12.onProgressDotLeave;
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$6.root)
  }, progressDots.map(function (i, index) {
    return index_js_default().createElement(ProgressDotItem, {
      key: index,
      startTime: i.startTime,
      total: total,
      onProgressDotHover: onProgressDotHover,
      onProgressDotLeave: onProgressDotLeave
    });
  }));
};

var styles$5 = no_important.StyleSheet.create({
  root: {
    overflow: 'hidden',
    userSelect: 'none',
    cursor: 'pointer',
    touchAction: 'none',
    WebkitTapHighlightColor: 'transparent',
    ':focus': {
      outline: 'none'
    }
  },
  inner: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  track: {
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '2px'
  },
  bar: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '2px 0 0 2px'
  },
  thumbWrapper: {
    position: 'absolute'
  },
  thumb: {
    width: '1em',
    height: '1em',
    margin: '-0.5em',
    borderRadius: '50%',
    backgroundColor: '#fff'
  }
});
var horizontal = no_important.StyleSheet.create({
  root: {
    height: '1em',
    padding: "0 0.5em"
  },
  inner: {
    flexDirection: 'row'
  },
  track: {
    height: 4
  },
  bar: {
    top: 0,
    bottom: 0
  },
  thumbWrapper: {
    top: '50%'
  }
});
var vertical = no_important.StyleSheet.create({
  root: {
    width: '1em',
    padding: "0.5em 0"
  },
  inner: {
    flexDirection: 'column'
  },
  track: {
    width: 4
  },
  bar: {
    left: 0,
    right: 0
  },
  thumbWrapper: {
    left: '50%'
  }
});

var useSetState = function useSetState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState17 = (0,index_js_.useState)(initialState),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      state = _useState18[0],
      setState = _useState18[1];

  var setPartial = (0,index_js_.useCallback)(function (nextState) {
    return setState(function (prevState) {
      return Object.assign(Object.assign({}, prevState), nextState);
    });
  }, []);
  return [state, setPartial];
};

var getRatio = function getRatio(value, total) {
  return total ? clamp_default()(value / total, 0, 1) : 0;
};

var toPercentage = function toPercentage(value) {
  return "".concat(value * 100, "%");
};

Slider.defaultProps = {
  orientation: 'horizontal',
  reverse: false,
  progressDots: []
};

function Slider(props) {
  var orientation = props.orientation,
      reverse = props.reverse,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onDragStart = props.onDragStart,
      onDragEnd = props.onDragEnd,
      noInteraction = props.noInteraction,
      progressDots = props.progressDots,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$buffered = props.buffered,
      buffered = _props$buffered === void 0 ? 0 : _props$buffered,
      _props$total = props.total,
      total = _props$total === void 0 ? 0 : _props$total,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      onProgressDotHover = props.onProgressDotHover,
      onProgressDotLeave = props.onProgressDotLeave;

  var _useSetState = useSetState({
    isSlideActive: false,
    isSliding: false,
    slidingValue: null
  }),
      _useSetState2 = (0,slicedToArray/* default */.Z)(_useSetState, 2),
      _useSetState2$ = _useSetState2[0],
      isSlideActive = _useSetState2$.isSlideActive,
      isSliding = _useSetState2$.isSliding,
      slidingValue = _useSetState2$.slidingValue,
      setState = _useSetState2[1];

  var isHorizontal = orientation === 'horizontal';
  var trackRef = (0,index_js_.useRef)(null);

  var getStyles = function getStyles(name) {
    var variantStyles = isHorizontal ? horizontal : vertical;
    var customStyles = props.styles;

    if (!Array.isArray(customStyles)) {
      customStyles = [customStyles];
    }

    customStyles = customStyles.filter(Boolean);
    return [styles$5[name], variantStyles[name]].concat((0,toConsumableArray/* default */.Z)(customStyles.map(function (item) {
      return item[name];
    })));
  };

  var getClassName = function getClassName() {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }

    return no_important.css.apply(void 0, (0,toConsumableArray/* default */.Z)(names.map(function (name) {
      return getStyles(name);
    })));
  };

  var alignKey = function () {
    if (isHorizontal) {
      return reverse ? 'right' : 'left';
    } else {
      return reverse ? 'top' : 'bottom';
    }
  }();

  var sizeKey = isHorizontal ? 'width' : 'height';

  var getProgressStyle = function getProgressStyle(value) {
    var _ref13;

    var scaleAxis = isHorizontal ? 'scaleX' : 'scaleY';
    return _ref13 = {}, (0,defineProperty/* default */.Z)(_ref13, sizeKey, '100%'), (0,defineProperty/* default */.Z)(_ref13, "transform", "".concat(scaleAxis, "(").concat(value, ")")), (0,defineProperty/* default */.Z)(_ref13, "transformOrigin", alignKey), _ref13;
  };

  var getProgressThumbStyle = function getProgressThumbStyle(value) {
    var _ref14;

    var translateAxis = isHorizontal ? 'translateX' : 'translateY';
    return _ref14 = {}, (0,defineProperty/* default */.Z)(_ref14, sizeKey, '100%'), (0,defineProperty/* default */.Z)(_ref14, "transform", "".concat(translateAxis, "(").concat(toPercentage(isHorizontal ? value : 1 - value), ")")), (0,defineProperty/* default */.Z)(_ref14, "transformOrigin", alignKey), _ref14;
  };

  var getSlidingValue = function getSlidingValue(event) {
    var track = trackRef.current;
    if (!track) return 0;
    var rect = track.getBoundingClientRect();
    var value;

    if (isHorizontal) {
      value = (event.clientX - rect.left) / rect.width;
    } else {
      value = (rect.bottom - event.clientY) / rect.height;
    }

    value = clamp_default()(value, 0, 1);

    if (reverse) {
      value = 1 - value;
    }

    return value * total;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var direction = 0;
    var handled = false;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      handled = true;
      direction = -1;
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      handled = true;
      direction = 1;
    }

    if (handled) {
      event.preventDefault();

      if (reverse) {
        direction = -direction;
      }

      var result = clamp_default()(value + step * direction, 0, total);

      if (result !== value) {
        handleChange(result);
      }
    }
  };

  var handleDragStart = function handleDragStart(event) {
    if (event.button !== 0) return;
    var value = getSlidingValue(event);
    setState({
      isSlideActive: true,
      slidingValue: value
    });
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
    handleChange(value);
  };

  var handleDragMove = useHandler(function (event) {
    var value = getSlidingValue(event);
    setState({
      slidingValue: value,
      isSliding: true
    });
    handleChange(value);
  });
  var handleDragEnd = useHandler(function (event) {
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();

    if (isSliding) {
      // 点击动作不需要重复触发 change event
      handleChange(getSlidingValue(event));
    }

    setState({
      isSlideActive: false,
      slidingValue: null,
      isSliding: false
    });
  });
  (0,index_js_.useEffect)(function () {
    if (isSlideActive) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      return function () {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [handleDragEnd, handleDragMove, isSlideActive]);

  var handleChange = function handleChange(value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  };

  var interactionProps = noInteraction ? {} : {
    tabIndex: 0,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: handleKeyDown,
    onMouseDown: handleDragStart
  };
  var ratio = getRatio(isSlideActive ? slidingValue : value, total);
  var bufferedRatio = getRatio(buffered, total);
  return index_js_default().createElement("div", Object.assign({
    className: getClassName('root')
  }, interactionProps, {
    role: "slider"
  }), index_js_default().createElement("div", {
    className: getClassName('inner')
  }, index_js_default().createElement("div", {
    ref: trackRef,
    className: getClassName('track')
  }, Boolean(buffered) && index_js_default().createElement("div", {
    className: getClassName('bar', 'buffered'),
    style: getProgressStyle(bufferedRatio)
  }), index_js_default().createElement("div", {
    className: getClassName('bar'),
    style: getProgressStyle(ratio)
  }), Boolean(progressDots === null || progressDots === void 0 ? void 0 : progressDots.length) && index_js_default().createElement(ProgressDots, {
    progressDots: progressDots,
    total: total,
    onProgressDotHover: onProgressDotHover,
    onProgressDotLeave: onProgressDotLeave
  })), !noInteraction && // the position indicator (visible when hovering)
  index_js_default().createElement("div", {
    className: getClassName('thumbWrapper'),
    style: getProgressThumbStyle(ratio)
  }, index_js_default().createElement("div", {
    className: getClassName('thumb', isSlideActive && 'thumbSliding')
  }))));
}

var styles$4 = no_important.StyleSheet.create({
  root: {}
});
var slider$1 = no_important.StyleSheet.create({
  root: {},
  track: {
    transition: 'transform 300ms'
  },
  bar: {
    backgroundColor: '#0f88eb'
  },
  thumb: {
    transform: 'scale(0)',
    transition: 'transform 300ms'
  },
  buffered: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '2px 0 0 2px'
  }
});
var hoveredSlider = no_important.StyleSheet.create({
  thumb: {
    transform: 'scale(1)'
  }
});
var dotHoveredSlider = no_important.StyleSheet.create({
  track: {
    overflow: 'visible'
  }
});
var minimal = no_important.StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
    height: '3px'
  },
  track: {
    borderRadius: 0
  },
  thumb: {
    display: 'none'
  },
  buffered: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '2px 0 0 2px'
  }
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

var useConstCallbacks = function useConstCallbacks() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return (// eslint-disable-next-line react-hooks/exhaustive-deps
    (0,index_js_.useCallback)(function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fns.forEach(function (f) {
        return f.apply(void 0, args);
      });
    }, [])
  );
};

var Timeline = function Timeline(_a) {
  var value = _a.value,
      onDragStart = _a.onDragStart,
      onDragEnd = _a.onDragEnd,
      onSeek = _a.onSeek,
      onChange = _a.onChange,
      onProgressDotHover = _a.onProgressDotHover,
      onProgressDotLeave = _a.onProgressDotLeave,
      props = dist_index_esm_rest(_a, ["value", "onDragStart", "onDragEnd", "onSeek", "onChange", "onProgressDotHover", "onProgressDotLeave"]);

  var _useBoolean3 = useBoolean(),
      _useBoolean4 = (0,slicedToArray/* default */.Z)(_useBoolean3, 2),
      isFocused = _useBoolean4[0],
      isFocusedSwitch = _useBoolean4[1];

  var _useBoolean5 = useBoolean(),
      _useBoolean6 = (0,slicedToArray/* default */.Z)(_useBoolean5, 2),
      isHovered = _useBoolean6[0],
      isHoveredSwitch = _useBoolean6[1];

  var _useBoolean7 = useBoolean(),
      _useBoolean8 = (0,slicedToArray/* default */.Z)(_useBoolean7, 2),
      isDragging = _useBoolean8[0],
      isDraggingSwitch = _useBoolean8[1];

  var _useBoolean9 = useBoolean(),
      _useBoolean10 = (0,slicedToArray/* default */.Z)(_useBoolean9, 2),
      progressDotHovered = _useBoolean10[0],
      progressDotHoveredSwitch = _useBoolean10[1];

  var handleChange = useHandler(function (newValue) {
    if (newValue !== value) {
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }

    if (!isDragging) {
      onSeek === null || onSeek === void 0 ? void 0 : onSeek(newValue);
    }
  });
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$4.root),
    onMouseEnter: isHoveredSwitch.on,
    onMouseLeave: useConstCallbacks(isHoveredSwitch.off, isFocusedSwitch.off)
  }, index_js_default().createElement(Slider, Object.assign({}, props, {
    styles: [slider$1, (isHovered || isFocused || isDragging) && hoveredSlider, progressDotHovered && dotHoveredSlider].filter(Boolean),
    value: value,
    onChange: handleChange,
    onFocus: isFocusedSwitch.on,
    onBlur: isFocusedSwitch.off,
    onDragStart: useConstCallbacks(isDraggingSwitch.on, useHandler(onDragStart || (noop_default()))),
    onDragEnd: useConstCallbacks(isDraggingSwitch.off, useHandler(onDragEnd || (noop_default()))),
    onProgressDotHover: useConstCallbacks(progressDotHoveredSwitch.on, useHandler(onProgressDotHover || (noop_default()))),
    onProgressDotLeave: useConstCallbacks(progressDotHoveredSwitch.off, useHandler(onProgressDotLeave || (noop_default())))
  })));
};

var TimelineItem = function TimelineItem(props) {
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.timeline)
  }, index_js_default().createElement(Timeline, Object.assign({}, props)));
};

var CombinedTimeItem = function CombinedTimeItem(_ref15) {
  var isFullScreen = _ref15.isFullScreen,
      currentTime = _ref15.currentTime,
      duration = _ref15.duration;
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.time, isFullScreen && styles$7.fullScreenedTime)
  }, "".concat(formatDuration(currentTime), " / ").concat(formatDuration(duration)));
};

var TranslatedText = function TranslatedText(_ref16) {
  var name = _ref16.name,
      _ref16$style = _ref16.style,
      style = _ref16$style === void 0 ? 'text' : _ref16$style;
  return index_js_default().createElement((index_js_default()).Fragment, null, useLocaleText(name, style));
};

var QUALITIES = {
  auto: 'quality-auto',
  ld: 'quality-ld',
  sd: 'quality-sd',
  hd: 'quality-hd',
  fhd: 'quality-fhd'
};

var QualityMenuItem = /*#__PURE__*/function (_React$PureComponent2) {
  (0,inherits/* default */.Z)(QualityMenuItem, _React$PureComponent2);

  var _super2 = (0,createSuper/* default */.Z)(QualityMenuItem);

  function QualityMenuItem() {
    var _this3;

    (0,classCallCheck/* default */.Z)(this, QualityMenuItem);

    _this3 = _super2.apply(this, arguments);
    _this3.state = {
      isQualityHovered: false
    };

    _this3.handleQualityPointerEnter = function () {
      _this3.setState({
        isQualityHovered: true
      });
    };

    _this3.handleQualityPointerLeave = function () {
      _this3.setState({
        isQualityHovered: false
      });
    };

    return _this3;
  }

  (0,createClass/* default */.Z)(QualityMenuItem, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var isQualityHovered = this.state.isQualityHovered;
      return index_js_default().createElement(VideoSourceContext.Consumer, null, function (_ref17) {
        var qualities = _ref17.qualities,
            setCurrentQuality = _ref17.setCurrentQuality,
            currentQuality = _ref17.currentQuality;
        return (qualities === null || qualities === void 0 ? void 0 : qualities.length) > 1 && index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.menuContainer),
          onMouseEnter: _this4.handleQualityPointerEnter,
          onMouseLeave: _this4.handleQualityPointerLeave
        }, index_js_default().createElement(ControllerButton, {
          label: index_js_default().createElement(TranslatedText, {
            style: "narrow",
            name: QUALITIES[currentQuality]
          })
        }), index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.menu, isQualityHovered && styles$7.menuShown)
        }, index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.qualityMenu)
        }, qualities.map(function (q) {
          return index_js_default().createElement("button", {
            key: q,
            className: (0,no_important.css)(styles$7.qualityMenuItem, currentQuality === q && styles$7.qualityMenuActiveItem),
            onClick: function onClick() {
              _this4.handleQualityPointerLeave();

              setCurrentQuality(q);
            }
          }, index_js_default().createElement(TranslatedText, {
            name: QUALITIES[q]
          }));
        }))));
      });
    }
  }]);

  return QualityMenuItem;
}((index_js_default()).PureComponent);

var styles$3 = no_important.StyleSheet.create({
  root: {
    padding: '0.375em 0'
  }
});
var slider = no_important.StyleSheet.create({
  root: {
    width: '2.5em',
    height: '4em'
  },
  track: {
    margin: '-0.4em 0',
    // 之前是 -0.5em（thumb 的半径），是为了在 0 或 100% 的情况下，让 thumb 的边缘和 track 的边缘平齐
    // 因为下面缩放了 0.8 所以改为 0.5em * 0.8 = 0.4em
    // workaround for bug with overflow: hidden; in chrome
    transform: 'translate3d(0, 0, 0)'
  },
  thumb: {
    transform: 'scale(0.8)',
    transition: 'transform 300ms',
    ':hover': {
      transform: 'scale(1)'
    }
  },
  thumbSliding: {
    transform: 'scale(1)'
  }
});

var VolumeSlider = function VolumeSlider(props) {
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$3.root)
  }, index_js_default().createElement(Slider, Object.assign({}, props, {
    styles: slider,
    orientation: "vertical",
    step: 0.1
  })));
};

var VolumeItem = function VolumeItem(_ref18) {
  var volume$1 = _ref18.volume,
      menuShown = _ref18.menuShown,
      onMouseEnter = _ref18.onMouseEnter,
      onMouseLeave = _ref18.onMouseLeave,
      onDragStart = _ref18.onDragStart,
      onDragEnd = _ref18.onDragEnd,
      onChange = _ref18.onChange,
      onToggleMuted = _ref18.onToggleMuted;
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.menuContainer),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, index_js_default().createElement(ControllerButton, {
    "aria-label": useLocaleText(volume$1 === 0 ? 'unmute' : 'mute'),
    icon: volume$1 === 0 ? muted : volume,
    onClick: function onClick() {
      return onToggleMuted === null || onToggleMuted === void 0 ? void 0 : onToggleMuted();
    }
  }), index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.menu, menuShown && styles$7.menuShown)
  }, index_js_default().createElement(VolumeSlider, {
    value: volume$1,
    total: 1,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onChange: onChange
  })));
};

var FullScreenButtonItem = function FullScreenButtonItem(_ref19) {
  var isFullScreen = _ref19.isFullScreen,
      onClick = _ref19.onClick;
  return index_js_default().createElement(ControllerTooltip, {
    localeKey: isFullScreen ? 'action-exit-fullscreen' : 'action-enter-fullscreen',
    hotkey: "f"
  }, index_js_default().createElement(ControllerButton, {
    icon: isFullScreen ? smallscreen : fullscreen,
    onClick: onClick
  }));
};

var PipButtonItem = function PipButtonItem(_ref20) {
  var isPip = _ref20.isPip,
      onClick = _ref20.onClick;
  return index_js_default().createElement(ControllerTooltip, {
    localeKey: isPip ? 'action-exit-pip' : 'action-enter-pip',
    hotkey: "p"
  }, index_js_default().createElement(ControllerButton, {
    icon: isPip ? exitPip : pip,
    onClick: onClick
  }));
};

var PlaybackRateMenuItem = /*#__PURE__*/function (_React$PureComponent3) {
  (0,inherits/* default */.Z)(PlaybackRateMenuItem, _React$PureComponent3);

  var _super3 = (0,createSuper/* default */.Z)(PlaybackRateMenuItem);

  function PlaybackRateMenuItem() {
    var _this5;

    (0,classCallCheck/* default */.Z)(this, PlaybackRateMenuItem);

    _this5 = _super3.apply(this, arguments);
    _this5.state = {
      isPlaybackRateHovered: false
    };

    _this5.handlePlaybackRatePointerEnter = function () {
      _this5.setState({
        isPlaybackRateHovered: true
      });
    };

    _this5.handlePlaybackRatePointerLeave = function () {
      _this5.setState({
        isPlaybackRateHovered: false
      });
    };

    return _this5;
  }

  (0,createClass/* default */.Z)(PlaybackRateMenuItem, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var isPlaybackRateHovered = this.state.isPlaybackRateHovered;
      return index_js_default().createElement(VideoSourceContext.Consumer, null, function (_ref21) {
        var playbackRates = _ref21.playbackRates,
            setCurrentPlaybackRate = _ref21.setCurrentPlaybackRate,
            currentPlaybackRate = _ref21.currentPlaybackRate;
        return (playbackRates === null || playbackRates === void 0 ? void 0 : playbackRates.length) > 1 && index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.menuContainer),
          onMouseEnter: _this6.handlePlaybackRatePointerEnter,
          onMouseLeave: _this6.handlePlaybackRatePointerLeave
        }, index_js_default().createElement(ControllerButton, {
          label: currentPlaybackRate.value === 1.0 ? index_js_default().createElement(TranslatedText, {
            name: 'playback-rate'
          }) : "".concat(currentPlaybackRate.text)
        }), index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.menu, isPlaybackRateHovered && styles$7.menuShown)
        }, index_js_default().createElement("div", {
          className: (0,no_important.css)(styles$7.qualityMenu)
        }, reverseArray(playbackRates).map(function (q) {
          return index_js_default().createElement("button", {
            key: q.value,
            className: (0,no_important.css)(styles$7.qualityMenuItem, currentPlaybackRate.value === q.value && styles$7.qualityMenuActiveItem),
            onClick: function onClick() {
              _this6.handlePlaybackRatePointerLeave();

              setCurrentPlaybackRate(q);
            }
          }, q.text);
        }))));
      });
    }
  }]);

  return PlaybackRateMenuItem;
}((index_js_default()).PureComponent);

var PageFullScreenButtonItem = function PageFullScreenButtonItem(_ref22) {
  var isFullScreen = _ref22.isFullScreen,
      onClick = _ref22.onClick;
  return index_js_default().createElement(ControllerTooltip, {
    localeKey: isFullScreen ? 'action-exit-page-fullscreen' : 'action-enter-page-fullscreen',
    hotkey: "t"
  }, index_js_default().createElement(ControllerButton, {
    icon: isFullScreen ? exitPageScreen : enterPageScreen,
    onClick: onClick
  }));
};

Controller.defaultProps = {
  show: false,
  standalone: false,
  duration: 0,
  currentTime: 0,
  volume: 0.5,
  buffered: 0,
  isPageFullScreen: false,
  showPip: false,
  hiddenPlayButton: false,
  hiddenTimeline: false,
  hiddenTime: false,
  hiddenQualityMenu: false,
  hiddenPlaybackRateItem: false,
  hiddenVolumeItem: false,
  hiddenFullScreenButton: false,
  progressDots: []
};

function Controller(props) {
  var _props$isPlaying = props.isPlaying,
      isPlaying = _props$isPlaying === void 0 ? false : _props$isPlaying,
      buffered = props.buffered,
      duration = props.duration,
      currentTime = props.currentTime,
      volume = props.volume,
      _props$isFullScreen = props.isFullScreen,
      isFullScreen = _props$isFullScreen === void 0 ? false : _props$isFullScreen,
      isPageFullScreen = props.isPageFullScreen,
      isPip = props.isPip,
      onDragStart = props.onDragStart,
      onDragEnd = props.onDragEnd,
      onToggleFullScreen = props.onToggleFullScreen,
      onTogglePageFullScreen = props.onTogglePageFullScreen,
      onTogglePip = props.onTogglePip,
      showPip = props.showPip,
      progressDots = props.progressDots,
      hiddenPlayButton = props.hiddenPlayButton,
      hiddenTimeline = props.hiddenTimeline,
      hiddenTime = props.hiddenTime,
      hiddenQualityMenu = props.hiddenQualityMenu,
      hiddenVolumeItem = props.hiddenVolumeItem,
      hiddenPlaybackRateItem = props.hiddenPlaybackRateItem,
      hiddenFullScreenButton = props.hiddenFullScreenButton,
      shouldShowPageFullScreenButton = props.shouldShowPageFullScreenButton,
      onProgressDotHover = props.onProgressDotHover,
      onProgressDotLeave = props.onProgressDotLeave,
      onTogglePlay = props.onTogglePlay,
      onSeek = props.onSeek,
      onToggleMuted = props.onToggleMuted,
      onVolumeChange = props.onVolumeChange;

  var _useBoolean11 = useBoolean(),
      _useBoolean12 = (0,slicedToArray/* default */.Z)(_useBoolean11, 2),
      isVolumeHovered = _useBoolean12[0],
      isVolumeHoveredSwitch = _useBoolean12[1];

  var _useState19 = (0,index_js_.useState)(),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      slideTime = _useState20[0],
      setSlideTime = _useState20[1];

  var handleDragMove = useHandler(function (slideTime) {
    setSlideTime(clamp_default()(slideTime, 0, duration));
  });
  var handleSeek = useHandler(function (currentTime) {
    onSeek === null || onSeek === void 0 ? void 0 : onSeek(clamp_default()(currentTime, 0, duration));
    setSlideTime(void 0);
  });
  var displayedCurrentTime = slideTime || currentTime;
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.root)
  }, !hiddenTimeline && index_js_default().createElement(TimelineItem, {
    value: currentTime,
    total: duration,
    buffered: buffered,
    progressDots: progressDots,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onChange: handleDragMove,
    onSeek: handleSeek,
    onProgressDotHover: onProgressDotHover,
    onProgressDotLeave: onProgressDotLeave
  }), index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.rootBottom)
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.rootBottomLeft)
  }, !hiddenPlayButton && index_js_default().createElement(PlayButtonItem, {
    isPlaying: isPlaying,
    onClick: function onClick() {
      return onTogglePlay === null || onTogglePlay === void 0 ? void 0 : onTogglePlay();
    }
  }), hiddenTimeline && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.timelineHolder)
  }), !hiddenTime && index_js_default().createElement(CombinedTimeItem, {
    isFullScreen: isFullScreen,
    currentTime: displayedCurrentTime,
    duration: duration
  })), index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$7.rootBottomRight)
  }, !hiddenPlaybackRateItem && index_js_default().createElement(PlaybackRateMenuItem, null), !hiddenQualityMenu && index_js_default().createElement(QualityMenuItem, null), showPip && index_js_default().createElement(PipButtonItem, {
    isPip: isPip,
    onClick: onTogglePip
  }), shouldShowPageFullScreenButton && index_js_default().createElement(PageFullScreenButtonItem, {
    isFullScreen: isPageFullScreen,
    onClick: onTogglePageFullScreen
  }), !hiddenFullScreenButton && index_js_default().createElement(FullScreenButtonItem, {
    isFullScreen: isFullScreen,
    onClick: onToggleFullScreen
  }), !hiddenVolumeItem && index_js_default().createElement(VolumeItem, {
    volume: volume,
    menuShown: isVolumeHovered,
    onMouseEnter: isVolumeHoveredSwitch.on,
    onMouseLeave: isVolumeHoveredSwitch.off,
    onToggleMuted: onToggleMuted,
    onChange: onVolumeChange
  }))));
}

var Controller$1 = index_js_default().memo(Controller);
var index_esm_alert = index_js_default().createElement("svg", {
  viewBox: "0 0 20 20"
}, index_js_default().createElement("path", {
  d: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-.034 2.966c1.95 0 1.485 1.807 1.485 2.21 0 .116-.784 7.79-.784 7.79h-1.4S8.48 5.344 8.48 5.23c0-.417-.462-2.264 1.486-2.264zm1.057 13.522c-.294.287-.647.43-1.056.43-.41 0-.762-.142-1.058-.43-.296-.286-.444-.643-.444-1.07 0-.41.148-.762.443-1.057.294-.294.647-.44 1.057-.44.41 0 .762.142 1.056.43.296.286.443.643.443 1.07 0 .426-.147.782-.443 1.068z"
}));
var pause = index_js_default().createElement("svg", {
  viewBox: "0 0 72 72"
}, index_js_default().createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, index_js_default().createElement("circle", {
  cx: "36",
  cy: "36",
  r: "36",
  fill: "#FFF",
  fillOpacity: ".95"
}), index_js_default().createElement("path", {
  fill: "#444",
  fillRule: "nonzero",
  d: "M41.143 22.5h5.786v27h-5.786zM25.071 22.5h5.786v27h-5.786z"
})));
var play = index_js_default().createElement("svg", {
  viewBox: "0 0 72 72"
}, index_js_default().createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, index_js_default().createElement("circle", {
  cx: "36",
  cy: "36",
  r: "36",
  fill: "#FFF",
  fillOpacity: ".95"
}), index_js_default().createElement("path", {
  fill: "#444",
  fillRule: "nonzero",
  d: "M50.8350169,37.0602664 L29.4767217,49.9693832 C28.900608,50.3175908 28.1558807,50.1251285 27.8133266,49.5395068 C27.701749,49.3487566 27.6428571,49.1309436 27.6428571,48.9090213 L27.6428571,23.0907876 C27.6428571,22.4094644 28.1862113,21.8571429 28.8564727,21.8571429 C29.0747919,21.8571429 29.2890685,21.9170066 29.4767217,22.0304257 L50.8350169,34.9395425 C51.4111306,35.28775 51.6004681,36.0447682 51.257914,36.6303899 C51.154433,36.8072984 51.0090531,36.9550776 50.8350169,37.0602664 Z"
})));
var replay = index_js_default().createElement("svg", {
  viewBox: "0 0 24 24"
}, index_js_default().createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, index_js_default().createElement("rect", {
  width: "24",
  height: "24"
}), index_js_default().createElement("path", {
  fill: "#FFF",
  d: "M12.4049973,3.62840003 C17.1876069,3.84468032 21,7.87252205 21,12.8096305 C21,17.8853314 16.9705627,22 12,22 C7.02943725,22 3,17.8853314 3,12.8096305 C3,12.0229797 3.624497,11.3852732 4.39485308,11.3852732 C5.16520917,11.3852732 5.78970616,12.0229797 5.78970616,12.8096305 C5.78970616,16.3120298 8.57014942,19.1512855 12,19.1512855 C15.4298506,19.1512855 18.2102938,16.3120298 18.2102938,12.8096305 C18.2102938,9.44617464 15.6460805,6.69429107 12.4049973,6.4812447 L12.4049973,8.30324795 C12.4049973,8.71101381 12.0954942,9.04157334 11.7137028,9.04157334 C11.5841406,9.04157334 11.457186,9.00268616 11.3473174,8.92934663 L6.42999892,5.64693477 C6.10624047,5.4308193 6.00781868,4.97530916 6.21016772,4.62952441 C6.26580359,4.53445089 6.34098153,4.45415835 6.42999892,4.3947374 L11.3473174,1.11232554 C11.6710759,0.896210069 12.0975703,1.00132779 12.2999193,1.34711255 C12.3685872,1.46445578 12.4049973,1.60004749 12.4049973,1.73842422 L12.4049973,3.62840003 Z"
})));
var styles$2 = no_important.StyleSheet.create({
  container: {
    position: 'absolute',
    pointerEvents: 'none',
    overflow: 'hidden'
  },
  containerFullWidth: {
    width: '100%',
    height: 'auto',
    top: '50%',
    left: 0,
    transform: 'translate(0, -50%)'
  },
  containerFullHeight: {
    width: 'auto',
    height: '100%',
    top: 0,
    left: '50%',
    transform: 'translate(-50%)'
  },
  image: {
    display: 'block',
    visibility: 'hidden'
  },
  imageFullWidth: {
    width: '100%',
    height: 'auto'
  },
  imageFullHeight: {
    width: 'auto',
    height: '100%'
  },
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none'
  }
});

var getContainerClassName = function getContainerClassName(isFullWidth) {
  return (0,no_important.css)(styles$2.container, isFullWidth ? styles$2.containerFullWidth : styles$2.containerFullHeight);
};

var getImageClassName = function getImageClassName(isFullWidth) {
  return (0,no_important.css)(styles$2.image, isFullWidth ? styles$2.imageFullWidth : styles$2.imageFullHeight);
};

var Positioned = function Positioned(_ref23) {
  var children = _ref23.children;

  var _useContext2 = (0,index_js_.useContext)(PositionContext),
      isFullWidth = _useContext2.isFullWidth,
      helperImageSrc = _useContext2.helperImageSrc;

  if (helperImageSrc) {
    return index_js_default().createElement("div", {
      className: getContainerClassName(isFullWidth)
    }, index_js_default().createElement("img", {
      src: helperImageSrc,
      className: getImageClassName(isFullWidth)
    }), children);
  }

  return null;
};

var Layer = function Layer(_ref24) {
  var children = _ref24.children;

  var _useContext3 = (0,index_js_.useContext)(ObjectFitContext),
      objectFit = _useContext3.objectFit;

  if (children) {
    var layer = index_js_default().createElement("div", {
      className: (0,no_important.css)(styles$2.layer)
    }, children); // 暂时先只考虑 cover

    return objectFit === 'cover' ? layer : index_js_default().createElement(Positioned, null, layer);
  }

  return null;
};

var SIZE = 64;
var BORDER = 3;
var RADIUS = (SIZE - BORDER) / 2;
var PERIMETER = 2 * Math.PI * RADIUS;
var animation = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
};
var circleAnimation = {
  '0%': {
    strokeDashoffset: PERIMETER,
    transform: 'rotate(0deg)'
  },
  '50%': {
    strokeDashoffset: PERIMETER / 4,
    transform: 'rotate(90deg)'
  },
  '100%': {
    strokeDashoffset: PERIMETER,
    transform: 'rotate(360deg)'
  }
};
var styles$1 = no_important.StyleSheet.create({
  root: {
    width: '4em',
    height: '4em'
  },
  svg: {
    display: 'block',
    width: '100%',
    height: '100%',
    animationName: animation,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },
  circle: {
    cx: '50%',
    cy: '50%',
    r: RADIUS,
    strokeDasharray: PERIMETER,
    stroke: 'currentColor',
    strokeWidth: BORDER,
    strokeLinecap: 'round',
    fill: 'none',
    transformOrigin: 'center',
    animationName: circleAnimation,
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  }
});

var Loader = function Loader() {
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$1.root)
  }, index_js_default().createElement("svg", {
    viewBox: "0 0 64 64",
    className: (0,no_important.css)(styles$1.svg)
  }, index_js_default().createElement("circle", {
    className: (0,no_important.css)(styles$1.circle)
  })));
};

var MinimalTimeline = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(MinimalTimeline, _Component);

  var _super4 = (0,createSuper/* default */.Z)(MinimalTimeline);

  function MinimalTimeline() {
    (0,classCallCheck/* default */.Z)(this, MinimalTimeline);

    return _super4.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(MinimalTimeline, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return this.props.show || nextProps.show;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          duration = _this$props2.duration,
          currentTime = _this$props2.currentTime,
          buffered = _this$props2.buffered,
          progressDots = _this$props2.progressDots;
      return index_js_default().createElement(Slider, {
        value: currentTime,
        total: duration,
        buffered: buffered,
        progressDots: progressDots,
        styles: [slider$1, minimal],
        noInteraction: true
      });
    }
  }]);

  return MinimalTimeline;
}(index_js_.Component);

MinimalTimeline.defaultProps = {
  show: false,
  duration: 0,
  currentTime: 0,
  buffered: 0,
  progressDots: []
};

var isInput = function isInput(el) {
  return /^(input|textarea|select)$/i.test(el.tagName) || el.isContentEditable;
};

var usePlayerShortcuts = function usePlayerShortcuts(_ref25) {
  var root = _ref25.root,
      prevVolumeRef = _ref25.prevVolumeRef,
      isPlaying = _ref25.isPlaying,
      isPageFullScreen = _ref25.isPageFullScreen,
      volume$1 = _ref25.volume,
      duration = _ref25.duration,
      currentTime = _ref25.currentTime,
      standalone = _ref25.standalone,
      onVolumeChange = _ref25.onVolumeChange,
      onTogglePlay = _ref25.onTogglePlay,
      onTogglePip = _ref25.onTogglePip,
      onToggleFullScreen = _ref25.onToggleFullScreen,
      onTogglePageFullScreen = _ref25.onTogglePageFullScreen,
      onSeek = _ref25.onSeek;
  var actionToastDispatch = useActionToastDispatch();

  var _useContext4 = (0,index_js_.useContext)(VideoSourceContext),
      playbackRates = _useContext4.playbackRates,
      currentPlaybackRate = _useContext4.currentPlaybackRate,
      setCurrentPlaybackRate = _useContext4.setCurrentPlaybackRate;

  var rotatePlaybackRate = function rotatePlaybackRate(dir) {
    var index = playbackRates === null || playbackRates === void 0 ? void 0 : playbackRates.findIndex(function (x) {
      return x.value === currentPlaybackRate.value;
    });

    if (index >= 0) {
      var next = playbackRates[index + (dir === 'next' ? 1 : -1)];
      actionToastDispatch({
        icon: play,
        label: (next || currentPlaybackRate).text
      });

      if (next) {
        setCurrentPlaybackRate(next);
      }
    }
  };

  var handleVolumeChange = useHandler(function (value) {
    var showToast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    value = clamp_default()(value, 0, 1);

    if (showToast) {
      actionToastDispatch({
        icon: value ? volume : muted,
        label: "".concat((value * 100).toFixed(0), "%")
      });
    }

    onVolumeChange === null || onVolumeChange === void 0 ? void 0 : onVolumeChange(value);
  });
  var handleSeek = useHandler(function (currentTime) {
    onSeek(clamp_default()(currentTime, 0, duration));
  });
  var handleKeyDown = useHandler(function (event) {
    // 防止事件已经在别处被处理过（如 Slider 中）
    if (event.defaultPrevented) {
      return;
    } // 防止冲突，有修饰键按下时不触发自定义热键


    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (event.target && isInput(event.target)) {
      return;
    }

    var handled = true;

    switch (event.key) {
      case ' ':
      case 'k':
      case 'K':
        actionToastDispatch({
          icon: isPlaying ? pause : play
        });
        onTogglePlay();
        break;

      case 'p':
      case 'P':
        onTogglePip();
        break;

      case 't':
      case 'T':
        onTogglePageFullScreen();
        break;

      case 'f':
      case 'F':
        onToggleFullScreen();
        break;

      case 'Escape':
        if (isPageFullScreen) {
          onTogglePageFullScreen();
        }

        break;

      case 'ArrowLeft':
        handleSeek(currentTime - 5);
        break;

      case 'ArrowRight':
        handleSeek(currentTime + 5);
        break;

      case 'ArrowUp':
        // 可能静音状态调整时不切换为非静音会更好（设置临时状态，恢复音量时应用临时状态）
        handleVolumeChange(volume$1 + 0.05, true);
        break;

      case 'ArrowDown':
        handleVolumeChange(volume$1 - 0.05, true);
        break;

      case 'j':
      case 'J':
        handleSeek(currentTime - 10);
        break;

      case 'l':
      case 'L':
        handleSeek(currentTime + 10);
        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        handleSeek(duration / 10 * Number(event.key));
        break;

      case 'm':
      case 'M':
        handleVolumeChange(volume$1 ? 0 : prevVolumeRef.current, true);
        break;

      case '<':
        rotatePlaybackRate('prev');
        break;

      case '>':
        rotatePlaybackRate('next');
        break;

      default:
        handled = false;
        break;
    }

    if (handled) {
      event.preventDefault();
    }
  });
  (0,index_js_.useEffect)(function () {
    // 对于 React 16，需要使用 document 来处理冒泡（17 之后任何上层元素都能正常冒泡）
    if (standalone) {
      document.addEventListener('keydown', handleKeyDown);
      return function () {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else if (root) {
      root.addEventListener('keydown', handleKeyDown);
      return function () {
        root.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, root, standalone]);
};

var eventMap = [[EVENTS.PLAY, 'onPlay'], [EVENTS.PLAYING, 'onPlaying'], [EVENTS.PAUSE, 'onPause'], [EVENTS.ENDED, 'onEnded'], [EVENTS.TIMEUPDATE, 'onTimeUpdate'], [EVENTS.ERROR, 'onError'], [EVENTS.WAITING, 'onWaiting'], [EVENTS.CANPLAY, 'onCanPlay'], [EVENTS.LOADEDDATA, 'onLoadedData'], [EVENTS.PROGRESS, 'onProgress']];

function serializeDOMException(exception) {
  if (!exception) return null;
  var code = exception.code,
      message = exception.message;
  return {
    code: code,
    message: message,
    name: exception.name
  };
}

function getMediaEventPayload(event) {
  var _event$currentTarget = event.currentTarget,
      currentTime = _event$currentTarget.currentTime,
      duration = _event$currentTarget.duration,
      error = _event$currentTarget.error;
  return {
    currentTime: currentTime,
    duration: duration,
    error: serializeDOMException(error)
  };
} // TODO：这个文件只是做了一层方法拦截，触发播放事件，删除这些封装，简化逻辑


var VideoWithMessage = index_js_default().forwardRef(function (props, ref) {
  var _useContext5 = (0,index_js_.useContext)(PositionContext),
      updateVideoSize = _useContext5.updateVideoSize;

  var _useContext6 = (0,index_js_.useContext)(ObjectFitContext),
      objectFit = _useContext6.objectFit;

  var _useContext7 = (0,index_js_.useContext)(InternalMessageContext),
      emitEvent = _useContext7.emitEvent;

  var propsRef = (0,index_js_.useRef)(props);
  (0,index_js_.useEffect)(function () {
    propsRef.current = props;
  }, [props]);
  var newProps = (0,index_js_.useMemo)(function () {
    var newProps = {};
    eventMap.forEach(function (_ref26) {
      var _ref27 = (0,slicedToArray/* default */.Z)(_ref26, 2),
          eventName = _ref27[0],
          key = _ref27[1];

      newProps[key] = function (event) {
        var _a, _b;

        emitEvent(eventName, getMediaEventPayload(event));
        var handler = propsRef.current[key];
        (_b = (_a = propsRef.current).onNativeEvent) === null || _b === void 0 ? void 0 : _b.call(_a, event);

        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        return handler === null || handler === void 0 ? void 0 : handler.apply(void 0, [event].concat(args));
      };
    });
    return newProps;
  }, [emitEvent]);
  var handleOnLoadedMetadata = (0,index_js_.useCallback)(function (event) {
    var _a, _b;

    var videoNode = event.currentTarget;

    if (videoNode) {
      var videoWidth = videoNode.videoWidth,
          videoHeight = videoNode.videoHeight;
      updateVideoSize({
        videoWidth: videoWidth,
        videoHeight: videoHeight
      });
    }

    (_b = (_a = propsRef.current).onLoadedMetadata) === null || _b === void 0 ? void 0 : _b.call(_a, event);
  }, [updateVideoSize]);

  var Video = props.Video,
      onNativeEvent = props.onNativeEvent,
      otherProps = dist_index_esm_rest(props, ["Video", "onNativeEvent"]);

  return index_js_default().createElement(Video, Object.assign({}, otherProps, newProps, {
    ref: ref,
    style: {
      objectFit: objectFit
    },
    onLoadedMetadata: handleOnLoadedMetadata
  }));
});

var NormalVideo = function NormalVideo(props) {
  var onRef = props.onRef,
      paused = props.paused,
      currentQuality = props.currentQuality,
      useAutoQuality = props.useAutoQuality,
      sources = props.sources,
      restProps = dist_index_esm_rest(props, ["onRef", "paused", "currentQuality", "useAutoQuality", "sources"]);

  return index_js_default().createElement("video", Object.assign({}, restProps, {
    ref: onRef
  }));
};

var NormalVideo$1 = {
  pluginName: 'native',
  VideoComponent: NormalVideo,
  willHandleSrcChange: false
};

function selectVideo(format, useMSE) {
  if (format === 'm3u8' && (index === null || index === void 0 ? void 0 : index.VideoComponent) && isMSESupported() && !isHlsNativeSupported()) {
    return index;
  }

  if (format === 'mp4' && (index_esm_index === null || index_esm_index === void 0 ? void 0 : index_esm_index.VideoComponent) && isMSESupported() && useMSE) {
    return index_esm_index;
  }

  return NormalVideo$1;
} // 内部利用了 DOM 推测，避免 render 过程中多次执行


var selectVideo$1 = memoize_default()(selectVideo, function () {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return String(args);
});
var styles = no_important.StyleSheet.create({
  root: {
    display: 'block',
    width: '100%',
    height: '100%'
  }
});
var isMobile = ua.isMobile;

var isAbortError = function isAbortError(error) {
  return error && error.name === 'AbortError' || error instanceof MediaError && error.code === MediaError.MEDIA_ERR_ABORTED;
};

var isNotAllowedError = function isNotAllowedError(error) {
  return error && error.name === 'NotAllowedError';
};

var Video = /*#__PURE__*/function (_Component2) {
  (0,inherits/* default */.Z)(Video, _Component2);

  var _super5 = (0,createSuper/* default */.Z)(Video);

  function Video() {
    var _this7;

    (0,classCallCheck/* default */.Z)(this, Video);

    _this7 = _super5.apply(this, arguments);
    _this7.isMetadataLoaded = false;
    _this7.pendingAction = null;
    _this7.loading = false;
    _this7.isSwitchDefinition = false; // refs

    _this7.root = null;
    /**
     * @see https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
     */

    _this7.safeExecute = function (fn) {
      if (_this7.playPromise !== undefined) {
        void _this7.playPromise.then(function () {
          fn();
        });
      } else {
        fn();
      }
    };

    _this7.handleMetadataLoaded = function () {
      _this7.isMetadataLoaded = true;

      _this7.applyPendingAction();

      if (_this7.isSwitchDefinition) {
        _this7.isSwitchDefinition = false;

        _this7.setRate(_this7.props.currentPlaybackRate);

        _this7.props.onEvent(EVENTS.CHANGE_QUALITY_SUCCESS, _this7.props.currentQuality);
      }
    };

    _this7.handleDurationChange = function () {
      var onDurationUpdate = _this7.props.onDurationUpdate;

      if (onDurationUpdate) {
        onDurationUpdate(_this7.root.duration);
      }
    };

    _this7.prevLoadingEvent = undefined;

    _this7.handleNativeEvent = function (e) {
      var _a, _b, _c, _d;

      var type = e.type;

      if (type === 'waiting' || type === 'canplay' || type === 'playing' || type === 'error') {
        if (type === 'waiting') {
          _this7.loading = true;
          (_b = (_a = _this7.props).onLoadingChange) === null || _b === void 0 ? void 0 : _b.call(_a, _this7.loading);
        } else if ( // 修复 Safari 中可能不触发 playing 问题：https://github.com/zhihu/griffith/issues/234
        type === 'canplay' && _this7.prevLoadingEvent === 'waiting' || type === 'playing' || type === 'error') {
          _this7.loading = false;
          (_d = (_c = _this7.props).onLoadingChange) === null || _d === void 0 ? void 0 : _d.call(_c, _this7.loading);
        }

        _this7.prevLoadingEvent = type;
      }
    };

    _this7.handleTimeUpdate = function () {
      _this7.notifyTimeUpdate(false);
    }; // NOTE: 原生 `timeupdate` 事件更新频率不固定（4Hz~66Hz，由系统决定），这里以 rAF 提高了 UI 更新频率
    // TODO: 考虑使用回调直接操作 DOM，减少 React rendering


    _this7.notifyTimeUpdate = function (isRaf) {
      var _a;

      var _this7$props = _this7.props,
          onCurrentTimeUpdate = _this7$props.onCurrentTimeUpdate,
          paused = _this7$props.paused;

      if (_this7._timeUpdateRafId !== undefined) {
        window.cancelAnimationFrame(_this7._timeUpdateRafId);
      }

      if (paused || _this7.loading) {
        return;
      }

      var currentTime = (_a = _this7.root) === null || _a === void 0 ? void 0 : _a.currentTime;

      if (onCurrentTimeUpdate && currentTime) {
        onCurrentTimeUpdate(currentTime, isRaf);

        if (!isMobile) {
          // 移动端使用原生进度条，不需要频繁更新，减少性能压力
          _this7._timeUpdateRafId = window.requestAnimationFrame(function () {
            return _this7.notifyTimeUpdate(true);
          });
        }
      }
    };

    _this7.handleProgress = function () {
      var onProgressUpdate = _this7.props.onProgressUpdate;
      var buffered = _this7.root.buffered;
      var result = [];

      for (var i = 0; i < buffered.length; i++) {
        result.push({
          start: buffered.start(i),
          end: buffered.end(i)
        });
      }

      if (onProgressUpdate) {
        onProgressUpdate(result);
      }
    };

    _this7.handleError = function () {
      var _ref28 = _this7.root || {},
          error = _ref28.error,
          currentTime = _ref28.currentTime;

      if (!error) {
        return;
      }

      var code = error.code,
          message = error.message;
      logger.debug('Error: %o', {
        code: code,
        message: message,
        name: error.name
      });
      var dontReportPlayFailed = isNotAllowedError(error) || isAbortError(error); // 这两种错误不认为是播放失败

      if (!dontReportPlayFailed) {
        _this7.props.onEvent(EVENTS.PLAY_FAILED, {
          currentTime: currentTime
        });
      }

      if (_this7.isSwitchDefinition) {
        _this7.isSwitchDefinition = false;

        _this7.setRate(_this7.props.currentPlaybackRate);

        _this7.props.onEvent(EVENTS.CHANGE_QUALITY_FAIL, _this7.props.currentQuality);
      }

      _this7.props.onError(error);
    };

    return _this7;
  }

  (0,createClass/* default */.Z)(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.root.volume = Math.pow(this.props.volume, 2);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      return {
        paused: this.root.paused,
        currentTime: this.root.currentTime
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this8 = this;

      var _this$props3 = this.props,
          src = _this$props3.src,
          paused = _this$props3.paused,
          volume = _this$props3.volume,
          format = _this$props3.format,
          useMSE = _this$props3.useMSE,
          currentPlaybackRate = _this$props3.currentPlaybackRate,
          currentQuality = _this$props3.currentQuality,
          onEvent = _this$props3.onEvent;
      /**
       * 切换清晰度，如果是非 mse 视频（src 是 blob 类型）
       * data 变化的时候会 remount，所以 componentDidUpdate 中 src 变化一定是清晰度变了
       */

      if (prevProps.src && src !== prevProps.src) {
        this.isSwitchDefinition = true;
        onEvent(EVENTS.CHANGE_QUALITY_START, currentQuality);

        var _selectVideo$ = selectVideo$1(format, useMSE),
            willHandleSrcChange = _selectVideo$.willHandleSrcChange; // TODO 这一块逻辑需要 Video 自己处理


        if (!willHandleSrcChange) {
          this.safeExecute(function () {
            _this8.isMetadataLoaded = false;

            _this8.seek(snapshot.currentTime);

            if (!snapshot.paused) {
              _this8.play();
            }
          });
        }
      }

      if (paused !== prevProps.paused && this.root && paused !== this.root.paused) {
        if (paused) {
          this.pause();
        } else {
          this.play();
        }
      }

      if (this.root && this.root.volume !== Math.pow(volume, 2) && !isMobile) {
        this.root.volume = Math.pow(volume, 2);
      }

      if (prevProps.currentPlaybackRate.value !== currentPlaybackRate.value) {
        this.setRate(currentPlaybackRate);
      }
    }
  }, {
    key: "pending",
    value: function pending(action) {
      this.pendingAction = Object.assign(Object.assign({}, this.pendingAction), action);
    }
  }, {
    key: "applyPendingAction",
    value: function applyPendingAction() {
      if (!this.pendingAction) {
        return;
      }

      var action = this.pendingAction;
      this.pendingAction = null;

      if (action.currentTime !== undefined) {
        this.seek(action.currentTime);
      }

      if (action.paused !== undefined && this.root && action.paused !== this.root.paused) {
        if (action.paused) {
          this.pause();
        } else {
          this.play();
        }
      }
    }
  }, {
    key: "setRate",
    value: function setRate(rate) {
      var _this9 = this;

      if (!isMobile && !this.isMetadataLoaded) {
        this.pending({
          paused: true
        });
        return;
      }

      this.safeExecute(function () {
        return _this9.root.playbackRate = Number(rate.value);
      });
    }
  }, {
    key: "play",
    value: function play() {
      var _this10 = this;

      var _a;

      if (!isMobile && !this.isMetadataLoaded) {
        this.pending({
          paused: false
        });

        if ((_a = this.root) === null || _a === void 0 ? void 0 : _a.load) {
          this.safeExecute(function () {
            return _this10.root.load();
          });
        }

        return;
      }

      this.playPromise = Promise.resolve(this.root.play()) // 保证是 promise
      .catch(function (error) {
        var onError = _this10.props.onError;

        if (onError) {
          onError(error);
        }
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this11 = this;

      if (!isMobile && !this.isMetadataLoaded) {
        this.pending({
          paused: true
        });
        return;
      }

      this.safeExecute(function () {
        return _this11.root.pause();
      });
    }
  }, {
    key: "seek",
    value: function seek(currentTime) {
      var _a;

      if (!Number.isFinite(currentTime)) return;

      if (!this.isMetadataLoaded) {
        this.pending({
          currentTime: currentTime
        });
        return;
      } // see https://stackoverflow.com/a/23353005


      if ((_a = this.root) === null || _a === void 0 ? void 0 : _a.duration) {
        this.root.currentTime = currentTime;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      var _this$props4 = this.props,
          src = _this$props4.src,
          controls = _this$props4.controls,
          loop = _this$props4.loop,
          paused = _this$props4.paused,
          volume = _this$props4.volume,
          onPlay = _this$props4.onPlay,
          onPause = _this$props4.onPause,
          onEnded = _this$props4.onEnded,
          onLoadedData = _this$props4.onLoadedData,
          onSeeking = _this$props4.onSeeking,
          onSeeked = _this$props4.onSeeked,
          format = _this$props4.format,
          useMSE = _this$props4.useMSE,
          sources = _this$props4.sources,
          currentQuality = _this$props4.currentQuality;

      var _selectVideo$2 = selectVideo$1(format, useMSE),
          VideoComponent = _selectVideo$2.VideoComponent;

      return index_js_default().createElement(VideoWithMessage // @ts-expect-error ts-migrate(2322) FIXME: Type '{ onRef: (node: any) => void; className: str... Remove this comment to see the full error message
      , {
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ onRef: (node: any) => void; className: str... Remove this comment to see the full error message
        onRef: function onRef(node) {
          _this12.root = node;
        },
        className: (0,no_important.css)(styles.root),
        preload: "metadata",
        playsInline: true,
        "webkit-playsinline": "",
        "x-webkit-airplay": "deny",
        muted: !volume,
        controls: controls,
        loop: loop,
        src: src,
        onPlay: onPlay,
        onPause: onPause,
        onEnded: onEnded,
        onLoadedData: onLoadedData,
        onSeeking: onSeeking,
        onSeeked: onSeeked,
        onClick: this.handleClick,
        onLoadedMetadata: this.handleMetadataLoaded,
        onError: this.handleError,
        onDurationChange: this.handleDurationChange,
        onTimeUpdate: this.handleTimeUpdate,
        onProgress: this.handleProgress,
        onNativeEvent: this.handleNativeEvent,
        paused: paused,
        sources: sources,
        currentQuality: currentQuality,
        Video: VideoComponent
      });
    }
  }]);

  return Video;
}(index_js_.Component);

Video.defaultProps = {
  paused: true,
  volume: 0.5
};
var Video$1 = index_js_default().forwardRef(function (props, ref) {
  return index_js_default().createElement(VideoSourceContext.Consumer, null, function (_ref29) {
    var currentSrc = _ref29.currentSrc,
        sources = _ref29.sources,
        currentQuality = _ref29.currentQuality,
        format = _ref29.format,
        currentPlaybackRate = _ref29.currentPlaybackRate;
    return index_js_default().createElement(Video, Object.assign({
      ref: ref
    }, props, {
      src: currentSrc,
      format: format,
      sources: sources,
      currentQuality: currentQuality,
      currentPlaybackRate: currentPlaybackRate
    }));
  });
});
var CONTROLLER_HIDE_DELAY = 3000; // 非基本类型默认值（对象或数组），防止引用变化

var defaultProgressDots = [];

var InnerPlayer = function InnerPlayer(_ref30) {
  var autoplay = _ref30.autoplay,
      muted = _ref30.muted,
      error = _ref30.error,
      title = _ref30.title,
      cover = _ref30.cover,
      standalone = _ref30.standalone,
      loop = _ref30.loop,
      _ref30$duration = _ref30.duration,
      durationProp = _ref30$duration === void 0 ? 0 : _ref30$duration,
      onBeforePlay = _ref30.onBeforePlay,
      useMSE = _ref30.useMSE,
      useAutoQuality = _ref30.useAutoQuality,
      alwaysShowVolumeButton = _ref30.alwaysShowVolumeButton,
      disablePictureInPicture = _ref30.disablePictureInPicture,
      _ref30$progressDots = _ref30.progressDots,
      progressDots = _ref30$progressDots === void 0 ? defaultProgressDots : _ref30$progressDots,
      hiddenPlayButton = _ref30.hiddenPlayButton,
      hiddenTimeline = _ref30.hiddenTimeline,
      hiddenTime = _ref30.hiddenTime,
      hiddenQualityMenu = _ref30.hiddenQualityMenu,
      hiddenVolume = _ref30.hiddenVolume,
      hiddenFullScreenButton = _ref30.hiddenFullScreenButton,
      shouldShowPageFullScreenButton = _ref30.shouldShowPageFullScreenButton,
      children = _ref30.children,
      hiddenPlaybackRateItem = _ref30.hiddenPlaybackRateItem,
      hideMobileControls = _ref30.hideMobileControls,
      hideCover = _ref30.hideCover,
      noWriteDocTitle = _ref30.noWriteDocTitle,
      layerContent = _ref30.layerContent;

  var _a, _b;

  var _useContext8 = (0,index_js_.useContext)(InternalMessageContext),
      emitEvent = _useContext8.emitEvent,
      subscribeAction = _useContext8.subscribeAction;

  var _useContext9 = (0,index_js_.useContext)(VideoSourceContext),
      currentSrc = _useContext9.currentSrc,
      sources = _useContext9.sources;

  var _useState21 = (0,index_js_.useState)(null),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      root = _useState22[0],
      setRoot = _useState22[1];

  var videoRef = (0,index_js_.useRef)();
  var actionToastDispatch = useActionToastDispatch();

  var _useState23 = (0,index_js_.useState)([]),
      _useState24 = (0,slicedToArray/* default */.Z)(_useState23, 2),
      buffered = _useState24[0],
      setBuffered = _useState24[1];

  var _useState25 = (0,index_js_.useState)(0.5),
      _useState26 = (0,slicedToArray/* default */.Z)(_useState25, 2),
      volume = _useState26[0],
      setVolume = _useState26[1];

  var _useState27 = (0,index_js_.useState)(durationProp),
      _useState28 = (0,slicedToArray/* default */.Z)(_useState27, 2),
      duration = _useState28[0],
      setDuration = _useState28[1];

  var _useState29 = (0,index_js_.useState)(0),
      _useState30 = (0,slicedToArray/* default */.Z)(_useState29, 2),
      currentTime = _useState30[0],
      setCurrentTime = _useState30[1];

  var _useBoolean13 = useBoolean(),
      _useBoolean14 = (0,slicedToArray/* default */.Z)(_useBoolean13, 2),
      isDataLoaded = _useBoolean14[0],
      isDataLoadedSwitch = _useBoolean14[1];

  var _useBoolean15 = useBoolean(),
      _useBoolean16 = (0,slicedToArray/* default */.Z)(_useBoolean15, 2),
      isPlaying = _useBoolean16[0],
      isPlayingSwitch = _useBoolean16[1]; // 开始播放的时候设置为 true，播放中途暂停仍然为 true，直到播放到最后停止的时候才会变成 false


  var _useBoolean17 = useBoolean(),
      _useBoolean18 = (0,slicedToArray/* default */.Z)(_useBoolean17, 2),
      isPlaybackStarted = _useBoolean18[0],
      isPlaybackStartedSwitch = _useBoolean18[1]; // 用户第一次播放之后设置为 false，并且之后永远为 false


  var _useBoolean19 = useBoolean(true),
      _useBoolean20 = (0,slicedToArray/* default */.Z)(_useBoolean19, 2),
      isNeverPlayed = _useBoolean20[0],
      isNeverPlayedSwitch = _useBoolean20[1];

  var _useBoolean21 = useBoolean(),
      _useBoolean22 = (0,slicedToArray/* default */.Z)(_useBoolean21, 2),
      isControllerShown = _useBoolean22[0],
      isControllerShownSwitch = _useBoolean22[1];

  var _useBoolean23 = useBoolean(),
      _useBoolean24 = (0,slicedToArray/* default */.Z)(_useBoolean23, 2),
      isControllerHovered = _useBoolean24[0],
      isControllerHoveredSwitch = _useBoolean24[1];

  var _useBoolean25 = useBoolean(),
      _useBoolean26 = (0,slicedToArray/* default */.Z)(_useBoolean25, 2),
      isControllerDragging = _useBoolean26[0],
      isControllerDraggingSwitch = _useBoolean26[1];

  var _useBoolean27 = useBoolean(),
      _useBoolean28 = (0,slicedToArray/* default */.Z)(_useBoolean27, 2),
      hovered = _useBoolean28[0],
      hoveredSwitch = _useBoolean28[1];

  var _useBoolean29 = useBoolean(),
      _useBoolean30 = (0,slicedToArray/* default */.Z)(_useBoolean29, 2),
      pressed = _useBoolean30[0],
      pressedSwitch = _useBoolean30[1];

  var _useBoolean31 = useBoolean(),
      _useBoolean32 = (0,slicedToArray/* default */.Z)(_useBoolean31, 2),
      isPageFullScreen = _useBoolean32[0],
      isPageFullScreenSwitch = _useBoolean32[1];

  var _useBoolean33 = useBoolean(),
      _useBoolean34 = (0,slicedToArray/* default */.Z)(_useBoolean33, 2),
      isLoading = _useBoolean34[0],
      isLoadingSwitch = _useBoolean34[1];

  var pipRef = (0,index_js_.useRef)();
  (0,index_js_.useEffect)(function () {
    if (durationProp && !duration) {
      setDuration(durationProp);
    }
  }, [duration, durationProp]);
  useMount(function () {
    var historyVolume = storage.get('@griffith/history-volume');

    if (historyVolume) {
      setVolume(historyVolume);
    }

    var actionSubscriptions_ = [subscribeAction(ACTIONS.PLAY, handlePlay), subscribeAction(ACTIONS.PAUSE, handlePauseAction), subscribeAction(ACTIONS.TIME_UPDATE, function (_ref31) {
      var currentTime = _ref31.currentTime;
      return handleSeek(currentTime);
    }), subscribeAction(ACTIONS.SHOW_CONTROLLER, handleShowController), subscribeAction(ACTIONS.SET_VOLUME, function (_ref32) {
      var volume = _ref32.volume;
      return handleVideoVolumeChange(volume);
    })];

    if (videoRef.current.root) {
      if (muted) {
        handleVideoVolumeChange(0);
      }

      if (autoplay) {
        handlePlay();
      }
    }

    return function () {
      actionSubscriptions_.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  });

  var showController = function () {
    // 播放中：暂停 或 Controller shown/hovered/dragging 时展示 Controller
    if (isPlaybackStarted) {
      return !isPlaying || isControllerShown || isControllerHovered || isControllerDragging;
    } // 非播放中：播放结束时展示 Controller（未播放时不展示）


    return currentTime !== 0;
  }();

  (0,index_js_.useEffect)(function () {
    if (showController) {
      emitEvent(EVENTS.SHOW_CONTROLLER);
    } else {
      emitEvent(EVENTS.HIDE_CONTROLLER);
    }
  }, [emitEvent, showController]); // sync document title

  (0,index_js_.useEffect)(function () {
    if (standalone && typeof title === 'string' && title !== document.title && !noWriteDocTitle) {
      document.title = title;
    }
  }, [noWriteDocTitle, standalone, title]); // setup pip

  (0,index_js_.useEffect)(function () {
    if (!disablePictureInPicture && videoRef.current.root && !pipRef.current) {
      pipRef.current = new Pip();
      pipRef.current.init(videoRef.current.root, function () {
        return emitEvent(EVENTS.ENTER_PIP);
      }, function () {
        return emitEvent(EVENTS.EXIT_PIP);
      });
    }
  }, [disablePictureInPicture, emitEvent]);
  var handlePauseAction = useHandler(function () {
    var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        dontApplyOnFullScreen = _ref33.dontApplyOnFullScreen;

    if (!isPlaying) return;
    if (dontApplyOnFullScreen && Boolean((index_browser_default()).element)) return;
    handlePause();
  });

  var handleClickToTogglePlay = function handleClickToTogglePlay() {
    // 仅点击覆盖层触发提示（控制条上的按钮点击不需要）
    actionToastDispatch({
      icon: isPlaying ? pause : play
    });
    handleTogglePlay();
  };

  var handlePlay = useHandler(function () {
    emitEvent(EVENTS.REQUEST_PLAY);
    Promise.resolve(onBeforePlay === null || onBeforePlay === void 0 ? void 0 : onBeforePlay(currentSrc)).then(function () {
      if (!isPlaybackStarted) {
        emitEvent(EVENTS.PLAY_COUNT);
        isPlaybackStartedSwitch.on();

        if (!isDataLoaded) {
          isLoadingSwitch.on();
        } // workaround a bug in IE about replaying a video.


        if (ua.isIE && currentTime !== 0) {
          handleSeek(0);
        }
      }

      isPlayingSwitch.on();
      isNeverPlayedSwitch.off();
    }).catch(function () {
      emitEvent(EVENTS.PLAY_REJECTED); // 播放被取消
    });
  });
  var handlePause = useHandler(function () {
    emitEvent(EVENTS.REQUEST_PAUSE);
    isPlayingSwitch.off();
  });

  var handleVideoPlay = function handleVideoPlay() {
    if (!isPlaying) {
      isPlayingSwitch.on();
    }
  };

  var handleVideoPause = function handleVideoPause() {
    if (isPlaying) {
      isPlayingSwitch.off();
    }
  };

  var handleVideoEnded = function handleVideoEnded() {
    isPlaybackStartedSwitch.off();
    isPlayingSwitch.off();
    isLoadingSwitch.off();
  };

  var handleVideoLoadedData = function handleVideoLoadedData() {
    isDataLoadedSwitch.on();
    isLoadingSwitch.off();
  };

  var handleVideoError = function handleVideoError() {
    isPlayingSwitch.off();
  };

  var handleVideoDurationChange = function handleVideoDurationChange(duration) {
    setDuration(duration);
  };

  var handleVideoTimeUpdate = function handleVideoTimeUpdate(currentTime) {
    if (isLoading || isSeekingRef.current) {
      return;
    }

    setCurrentTime(currentTime);
  };

  var handleVideoVolumeChange = useHandler(function (volume) {
    volume = Math.round(volume * 100) / 100;
    setVolume(volume);
    storage.set('@griffith/history-volume', volume);
  });
  var handleSeek = useHandler(function (value) {
    var _a;

    setCurrentTime(value); // TODO 想办法去掉这个实例方法调用

    (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.seek(value);
  });

  var handleLoadingChange = function handleLoadingChange(value) {
    value ? isLoadingSwitch.on() : isLoadingSwitch.off();
  };

  var isSeekingRef = (0,index_js_.useRef)(false);

  var handleVideoSeeking = function handleVideoSeeking() {
    isSeekingRef.current = true;
  };

  var handleVideoSeeked = function handleVideoSeeked() {
    isSeekingRef.current = false;
  };

  var handleVideoProgress = function handleVideoProgress(value) {
    setBuffered(value);
  };

  var handleToggleFullScreen = useHandler(function () {
    if ((index_browser_default()).enabled) {
      var onEnter = function onEnter() {
        return emitEvent(EVENTS.ENTER_FULLSCREEN);
      };

      var onExit = function onExit() {
        return emitEvent(EVENTS.EXIT_FULLSCREEN);
      };

      (index_browser_default()) === null || (index_browser_default()) === void 0 ? void 0 : index_browser_default().toggle(root, onEnter, onExit);
    }
  });
  var handleTogglePageFullScreen = useHandler(function () {
    var _a; // 如果当前正在全屏就先关闭全屏


    if (Boolean((index_browser_default()).element) && !((_a = pipRef.current) === null || _a === void 0 ? void 0 : _a.pictureInPictureElement)) {
      handleToggleFullScreen();
    }

    if (isPageFullScreen) {
      isPageFullScreenSwitch.off();
      emitEvent(EVENTS.EXIT_PAGE_FULLSCREEN);
    } else {
      isPageFullScreenSwitch.on();
      emitEvent(EVENTS.ENTER_PAGE_FULLSCREEN);
    }
  });
  var handleTogglePip = useHandler(function () {
    var _a;

    if (isPageFullScreen) {
      isPageFullScreenSwitch.off();
      emitEvent(EVENTS.EXIT_PAGE_FULLSCREEN);
    }

    (_a = pipRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
  });
  var hideControllerTimerRef = (0,index_js_.useRef)(null);
  var handleShowController = useHandler(function () {
    if (!isControllerShown) {
      isControllerShownSwitch.on();
    }

    if (hideControllerTimerRef.current !== null) {
      clearTimeout(hideControllerTimerRef.current);
    }

    hideControllerTimerRef.current = setTimeout(function () {
      hideControllerTimerRef.current = null;
      isControllerShownSwitch.off();
    }, CONTROLLER_HIDE_DELAY);
  });

  var handleHideController = function handleHideController() {
    if (hideControllerTimerRef.current !== null) {
      clearTimeout(hideControllerTimerRef.current);
      hideControllerTimerRef.current = null;
    }

    isControllerShownSwitch.off();
  };

  var handleMouseEnter = function handleMouseEnter() {
    hoveredSwitch.on();
    handleShowController();
  };

  var handleMouseLeave = function handleMouseLeave() {
    hoveredSwitch.off();
    handleHideController();
  };

  var handleMouseDown = function handleMouseDown() {
    pressedSwitch.on();
    handleShowController();
  };

  var handleMouseUp = function handleMouseUp() {
    pressedSwitch.off();
    handleShowController();
  };

  var handleProgressDotHover = function handleProgressDotHover(info) {
    emitEvent(EVENTS.HOVER_PROGRESS_DOT, info);
  };

  var handleProgressDotLeave = function handleProgressDotLeave() {
    emitEvent(EVENTS.LEAVE_PROGRESS_DOT);
  };

  var handleTogglePlay = useHandler(function () {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  });
  var prevVolumeRef = (0,index_js_.useRef)(volume);
  var handleToggleMuted = useHandler(function () {
    if (volume) {
      prevVolumeRef.current = volume;
    }

    handleVideoVolumeChange(volume ? 0 : prevVolumeRef.current);
  });
  usePlayerShortcuts({
    root: root,
    prevVolumeRef: prevVolumeRef,
    isPlaying: isPlaying,
    volume: volume,
    currentTime: currentTime,
    duration: duration,
    standalone: standalone,
    isPageFullScreen: isPageFullScreen,
    onTogglePlay: handleTogglePlay,
    onToggleFullScreen: handleToggleFullScreen,
    onTogglePageFullScreen: handleTogglePageFullScreen,
    onTogglePip: handleTogglePip,
    onVolumeChange: handleVideoVolumeChange,
    onSeek: handleSeek
  });
  var prevSources = usePrevious(sources);
  (0,index_js_.useEffect)(function () {
    if (prevSources && prevSources !== sources) {
      handleSeek(0); //TODO: Event

      handlePause();

      if (autoplay) {
        handlePlay();
      }
    }
  }, [autoplay, handlePlay, handleSeek, handlePause, prevSources, sources]);
  var isPip = Boolean((_a = pipRef.current) === null || _a === void 0 ? void 0 : _a.pictureInPictureElement); // Safari 会将 pip 状态视为全屏

  var isFullScreen = Boolean((index_browser_default()).element) && !isPip;
  var bufferedTime = (0,index_js_.useMemo)(function () {
    return getBufferedTime(currentTime, buffered);
  }, [buffered, currentTime]);
  var videoDataLoaded = !isLoading || currentTime !== 0;
  var renderController = videoDataLoaded && isPlaybackStarted;
  var controlsOverlay = !ua.isMobile && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.overlay, isNeverPlayed && styles$9.overlayMask)
  }, isPlaybackStarted && isLoading && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.loader)
  }, index_js_default().createElement(Loader, null)), index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.backdrop),
    onTouchStart: function onTouchStart(event) {
      // prevent touch to toggle
      event.preventDefault();
    },
    onClick: handleClickToTogglePlay
  }), title && isFullScreen && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.title, showController && styles$9.titleShown)
  }, title), !hiddenTimeline && isPlaying && videoDataLoaded && index_js_default().createElement("div", {
    className: (0,no_important.css)(hiddenOrShownStyle.base, showController ? hiddenOrShownStyle.hidden : hiddenOrShownStyle.shown)
  }, index_js_default().createElement(MinimalTimeline, {
    progressDots: progressDots,
    buffered: bufferedTime,
    duration: duration,
    currentTime: currentTime,
    show: !showController
  })), alwaysShowVolumeButton && renderController && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.volumeButton, hiddenOrShownStyle.base, showController ? hiddenOrShownStyle.hidden : hiddenOrShownStyle.shown)
  }, index_js_default().createElement(VolumeItem, {
    volume: volume
  })), renderController && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.controller, hiddenOrShownStyle.base, showController ? hiddenOrShownStyle.shown : hiddenOrShownStyle.hidden),
    onMouseEnter: isControllerHoveredSwitch.on,
    onMouseLeave: isControllerHoveredSwitch.off
  }, index_js_default().createElement(Controller$1, {
    standalone: standalone,
    isPlaying: isPlaying,
    duration: duration,
    currentTime: currentTime,
    volume: volume,
    progressDots: progressDots,
    buffered: bufferedTime,
    isFullScreen: isFullScreen,
    isPageFullScreen: isPageFullScreen,
    isPip: isPip,
    onDragStart: isControllerDraggingSwitch.on,
    onDragEnd: isControllerDraggingSwitch.off,
    onTogglePlay: handleTogglePlay,
    onToggleMuted: handleToggleMuted,
    onSeek: handleSeek,
    onVolumeChange: handleVideoVolumeChange,
    onToggleFullScreen: handleToggleFullScreen,
    onTogglePageFullScreen: handleTogglePageFullScreen,
    onTogglePip: handleTogglePip,
    onProgressDotHover: handleProgressDotHover,
    onProgressDotLeave: handleProgressDotLeave,
    show: showController,
    showPip: !disablePictureInPicture && ((_b = pipRef.current) === null || _b === void 0 ? void 0 : _b.supported),
    hiddenPlayButton: hiddenPlayButton,
    hiddenTimeline: hiddenTimeline,
    hiddenTime: hiddenTime,
    hiddenQualityMenu: hiddenQualityMenu,
    hiddenVolumeItem: hiddenVolume,
    hiddenPlaybackRateItem: hiddenPlaybackRateItem,
    hiddenFullScreenButton: hiddenFullScreenButton,
    shouldShowPageFullScreenButton: shouldShowPageFullScreenButton
  })));
  return index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.root, isFullScreen && styles$9.fullScreened, isPageFullScreen && styles$9.pageFullScreen),
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleShowController,
    ref: setRoot,
    tabIndex: -1,
    "aria-label": title
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.video)
  }, index_js_default().createElement(Video$1, {
    ref: videoRef,
    controls: ua.isMobile && isPlaybackStarted && !hideMobileControls,
    paused: !isPlaying,
    volume: volume,
    loop: loop,
    onPlay: handleVideoPlay,
    onPause: handleVideoPause,
    onEnded: handleVideoEnded,
    onLoadedData: handleVideoLoadedData,
    onError: handleVideoError,
    onLoadingChange: handleLoadingChange,
    onDurationUpdate: handleVideoDurationChange,
    onCurrentTimeUpdate: handleVideoTimeUpdate,
    onSeeking: handleVideoSeeking,
    onSeeked: handleVideoSeeked,
    onProgressUpdate: handleVideoProgress,
    // TODO: 变更 prop 名称
    onEvent: emitEvent,
    useMSE: useMSE,
    useAutoQuality: useAutoQuality
  })), hideMobileControls && isPlaybackStarted && isLoading && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.loader)
  }, index_js_default().createElement(Loader, null)), !hideCover && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.cover, !isPlaybackStarted && styles$9.coverShown),
    onClick: function onClick() {
      return handlePlay();
    }
  }, cover && index_js_default().createElement(ObjectFitContext.Consumer, null, function (_ref34) {
    var objectFit = _ref34.objectFit;
    return index_js_default().createElement("img", {
      className: (0,no_important.css)(styles$9.coverImage),
      src: cover,
      style: {
        objectFit: objectFit
      }
    });
  }), duration && currentTime === 0 && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.coverTime, ua.isMobile && styles$9.coverTimeMobile)
  }, formatDuration(duration)), isNeverPlayed && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.coverAction)
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.actionButton)
  }, index_js_default().createElement(Icon, {
    icon: play,
    styles: styles$9.actionIcon
  }))), !isNeverPlayed && currentTime !== 0 && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.coverReplayAction)
  }, index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.coverReplayButton, hovered && styles$9.coverReplayButtonHovered, pressed && styles$9.coverReplayButtonPressed)
  }, index_js_default().createElement(Icon, {
    icon: replay,
    styles: styles$9.replayIcon
  }), index_js_default().createElement(TranslatedText, {
    name: "replay"
  })))), controlsOverlay, index_js_default().createElement(ActionToastOutlet, null), layerContent && index_js_default().createElement(Layer, null, layerContent), error && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.error)
  }, index_js_default().createElement(Icon, {
    icon: index_esm_alert,
    styles: styles$9.errorIcon
  }), error.message && index_js_default().createElement("div", {
    className: (0,no_important.css)(styles$9.errorMessage)
  }, error.message)), children);
};

var DEFAULT_PLAYBACK_RATE = {
  value: 1.0,
  text: '1.0x'
};
var DEFAULT_PLAYBACK_RATES = [{
  value: 0.5,
  text: '0.5x'
}, {
  value: 0.75,
  text: '0.75x'
}, {
  value: 1.0,
  text: '1.0x'
}, {
  value: 1.25,
  text: '1.25x'
}, {
  value: 1.5,
  text: '1.5x'
}, {
  value: 2.0,
  text: '2.0x'
}];

var index_esm_Player = function Player(_a) {
  var standalone = _a.standalone,
      id = _a.id,
      sources = _a.sources,
      onEvent = _a.onEvent,
      dispatchRef = _a.dispatchRef,
      enableCrossWindowMessage = _a.enableCrossWindowMessage,
      messageContextRef = _a.messageContextRef,
      shouldObserveResize = _a.shouldObserveResize,
      initialObjectFit = _a.initialObjectFit,
      _a$locale = _a.locale,
      locale = _a$locale === void 0 ? defaultLocale : _a$locale,
      localeConfig = _a.localeConfig,
      defaultQuality = _a.defaultQuality,
      _a$defaultQualityOrde = _a.defaultQualityOrder,
      defaultQualityOrder = _a$defaultQualityOrde === void 0 ? 'asc' : _a$defaultQualityOrde,
      _a$defaultPlaybackRat = _a.defaultPlaybackRate,
      defaultPlaybackRate = _a$defaultPlaybackRat === void 0 ? DEFAULT_PLAYBACK_RATE : _a$defaultPlaybackRat,
      _a$playbackRates = _a.playbackRates,
      playbackRates = _a$playbackRates === void 0 ? DEFAULT_PLAYBACK_RATES : _a$playbackRates,
      _a$useAutoQuality = _a.useAutoQuality,
      useAutoQuality = _a$useAutoQuality === void 0 ? false : _a$useAutoQuality,
      restProps = dist_index_esm_rest(_a, ["standalone", "id", "sources", "onEvent", "dispatchRef", "enableCrossWindowMessage", "messageContextRef", "shouldObserveResize", "initialObjectFit", "locale", "localeConfig", "defaultQuality", "defaultQualityOrder", "defaultPlaybackRate", "playbackRates", "useAutoQuality"]);

  return index_js_default().createElement(ObjectFitProvider, {
    initialObjectFit: initialObjectFit
  }, index_js_default().createElement(PositionProvider, {
    shouldObserveResize: shouldObserveResize
  }, index_js_default().createElement(MessageProvider, {
    id: id,
    enableCrossWindow: typeof enableCrossWindowMessage !== 'undefined' ? enableCrossWindowMessage : standalone,
    onEvent: onEvent,
    dispatchRef: dispatchRef,
    messageContextRef: messageContextRef
  }, index_js_default().createElement(VideoSourceProvider, {
    sources: sources,
    defaultQuality: defaultQuality,
    useAutoQuality: useAutoQuality,
    defaultPlaybackRate: defaultPlaybackRate,
    defaultQualityOrder: defaultQualityOrder,
    playbackRates: playbackRates
  }, index_js_default().createElement(LocaleProvider, {
    locale: locale,
    localeConfig: localeConfig
  }, index_js_default().createElement(ActionToastProvider, null, index_js_default().createElement(InnerPlayer, Object.assign({}, restProps, {
    useAutoQuality: useAutoQuality,
    standalone: standalone
  }))))))));
};

var Player$1 = index_js_default().memo(index_esm_Player);


/***/ }),

/***/ 6237:
/***/ (function(module) {

!function (e) {
  if (true) module.exports = e();else {}
}(function () {
  return function e(t, r, a) {
    function i(o, s) {
      if (!r[o]) {
        if (!t[o]) {
          var l = undefined;
          if (!s && l) return require(o, !0);
          if (n) return n(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = r[o] = {
          exports: {}
        };
        t[o][0].call(d.exports, function (e) {
          var r = t[o][1][e];
          return i(r || e);
        }, d, d.exports, e, t, r, a);
      }

      return r[o].exports;
    }

    for (var n = undefined, o = 0; o < a.length; o++) {
      i(a[o]);
    }

    return i;
  }({
    1: [function (e, t, r) {
      function a() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
      }

      function i(e) {
        return "function" == typeof e;
      }

      function n(e) {
        return "number" == typeof e;
      }

      function o(e) {
        return "object" == typeof e && null !== e;
      }

      function s(e) {
        return void 0 === e;
      }

      t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._maxListeners = void 0, a.defaultMaxListeners = 10, a.prototype.setMaxListeners = function (e) {
        if (!n(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this;
      }, a.prototype.emit = function (e) {
        var t, r, a, n, l, u;

        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw d.context = t, d;
        }

        if (r = this._events[e], s(r)) return !1;
        if (i(r)) switch (arguments.length) {
          case 1:
            r.call(this);
            break;

          case 2:
            r.call(this, arguments[1]);
            break;

          case 3:
            r.call(this, arguments[1], arguments[2]);
            break;

          default:
            n = Array.prototype.slice.call(arguments, 1), r.apply(this, n);
        } else if (o(r)) for (n = Array.prototype.slice.call(arguments, 1), a = (u = r.slice()).length, l = 0; l < a; l++) {
          u[l].apply(this, n);
        }
        return !0;
      }, a.prototype.addListener = function (e, t) {
        var r;
        if (!i(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = s(this._maxListeners) ? a.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.trace), this;
      }, a.prototype.on = a.prototype.addListener, a.prototype.once = function (e, t) {
        function r() {
          this.removeListener(e, r), a || (a = !0, t.apply(this, arguments));
        }

        if (!i(t)) throw TypeError("listener must be a function");
        var a = !1;
        return r.listener = t, this.on(e, r), this;
      }, a.prototype.removeListener = function (e, t) {
        var r, a, n, s;
        if (!i(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (r = this._events[e], n = r.length, a = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (o(r)) {
          for (s = n; s-- > 0;) {
            if (r[s] === t || r[s].listener && r[s].listener === t) {
              a = s;
              break;
            }
          }

          if (a < 0) return this;
          1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(a, 1), this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }, a.prototype.removeAllListeners = function (e) {
        var t, r;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;

        if (0 === arguments.length) {
          for (t in this._events) {
            "removeListener" !== t && this.removeAllListeners(t);
          }

          return this.removeAllListeners("removeListener"), this._events = {}, this;
        }

        if (r = this._events[e], i(r)) this.removeListener(e, r);else if (r) for (; r.length;) {
          this.removeListener(e, r[r.length - 1]);
        }
        return delete this._events[e], this;
      }, a.prototype.listeners = function (e) {
        return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
      }, a.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];
          if (i(t)) return 1;
          if (t) return t.length;
        }

        return 0;
      }, a.listenerCount = function (e, t) {
        return e.listenerCount(t);
      };
    }, {}],
    2: [function (e, t, r) {
      !function (e) {
        var a = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
            i = /^([^\/;?#]*)(.*)$/,
            n = /(?:\/|^)\.(?=\/)/g,
            o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
            s = {
          buildAbsoluteURL: function buildAbsoluteURL(e, t, r) {
            if (r = r || {}, e = e.trim(), !(t = t.trim())) {
              if (!r.alwaysNormalize) return e;
              var a = this.parseURL(e);
              if (!o) throw new Error("Error trying to parse base URL.");
              return a.path = s.normalizePath(a.path), s.buildURLFromParts(a);
            }

            var n = this.parseURL(t);
            if (!n) throw new Error("Error trying to parse relative URL.");
            if (n.scheme) return r.alwaysNormalize ? (n.path = s.normalizePath(n.path), s.buildURLFromParts(n)) : t;
            var o = this.parseURL(e);
            if (!o) throw new Error("Error trying to parse base URL.");

            if (!o.netLoc && o.path && "/" !== o.path[0]) {
              var l = i.exec(o.path);
              o.netLoc = l[1], o.path = l[2];
            }

            o.netLoc && !o.path && (o.path = "/");
            var u = {
              scheme: o.scheme,
              netLoc: n.netLoc,
              path: null,
              params: n.params,
              query: n.query,
              fragment: n.fragment
            };
            if (!n.netLoc && (u.netLoc = o.netLoc, "/" !== n.path[0])) if (n.path) {
              var d = o.path,
                  f = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
              u.path = s.normalizePath(f);
            } else u.path = o.path, n.params || (u.params = o.params, n.query || (u.query = o.query));
            return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(n.path) : n.path), s.buildURLFromParts(u);
          },
          parseURL: function parseURL(e) {
            var t = a.exec(e);
            return t ? {
              scheme: t[1] || "",
              netLoc: t[2] || "",
              path: t[3] || "",
              params: t[4] || "",
              query: t[5] || "",
              fragment: t[6] || ""
            } : null;
          },
          normalizePath: function normalizePath(e) {
            for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(o, "")).length;) {
              ;
            }

            return e.split("").reverse().join("");
          },
          buildURLFromParts: function buildURLFromParts(e) {
            return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
          }
        };
        "object" == typeof r && "object" == typeof t ? t.exports = s : "object" == typeof r ? r.URLToolkit = s : e.URLToolkit = s;
      }(this);
    }, {}],
    3: [function (e, t, r) {
      var a = arguments[3],
          i = arguments[4],
          n = arguments[5],
          o = JSON.stringify;

      t.exports = function (e, t) {
        function r(e) {
          p[e] = !0;

          for (var t in i[e][1]) {
            var a = i[e][1][t];
            p[a] || r(a);
          }
        }

        for (var s, l = Object.keys(n), u = 0, d = l.length; u < d; u++) {
          var f = l[u],
              h = n[f].exports;

          if (h === e || h && h.default === e) {
            s = f;
            break;
          }
        }

        if (!s) {
          s = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

          for (var c = {}, u = 0, d = l.length; u < d; u++) {
            c[f = l[u]] = f;
          }

          i[s] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), c];
        }

        var v = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
            g = {};
        g[s] = s, i[v] = [Function(["require"], "var f = require(" + o(s) + ");(f.default ? f.default : f)(self);"), g];
        var p = {};
        r(v);
        var y = "(" + a + ")({" + Object.keys(p).map(function (e) {
          return o(e) + ":[" + i[e][0] + "," + o(i[e][1]) + "]";
        }).join(",") + "},{},[" + o(v) + "])",
            m = window.URL || window.webkitURL || window.mozURL || window.msURL,
            b = new Blob([y], {
          type: "text/javascript"
        });
        if (t && t.bare) return b;

        var E = m.createObjectURL(b),
            _ = new Worker(E);

        return _.objectURL = E, _;
      };
    }, {}],
    4: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.hlsDefaultConfig = void 0;
      var i = a(e(5)),
          n = a(e(6)),
          o = a(e(7)),
          s = a(e(8)),
          l = a(e(48));
      r.hlsDefaultConfig = {
        autoStartLoad: !0,
        startPosition: -1,
        defaultAudioCodec: void 0,
        debug: !1,
        capLevelOnFPSDrop: !1,
        capLevelToPlayerSize: !1,
        initialLiveManifestSize: 1,
        maxBufferLength: 30,
        maxBufferSize: 6e7,
        maxBufferHole: .5,
        maxSeekHole: 2,
        lowBufferWatchdogPeriod: .5,
        highBufferWatchdogPeriod: 3,
        nudgeOffset: .1,
        nudgeMaxRetry: 3,
        maxFragLookUpTolerance: .25,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 1 / 0,
        liveSyncDuration: void 0,
        liveMaxLatencyDuration: void 0,
        maxMaxBufferLength: 600,
        enableWorker: !0,
        enableSoftwareAES: !0,
        manifestLoadingTimeOut: 1e4,
        manifestLoadingMaxRetry: 1,
        manifestLoadingRetryDelay: 1e3,
        manifestLoadingMaxRetryTimeout: 64e3,
        startLevel: void 0,
        levelLoadingTimeOut: 1e4,
        levelLoadingMaxRetry: 4,
        levelLoadingRetryDelay: 1e3,
        levelLoadingMaxRetryTimeout: 64e3,
        fragLoadingTimeOut: 2e4,
        fragLoadingMaxRetry: 6,
        fragLoadingRetryDelay: 1e3,
        fragLoadingMaxRetryTimeout: 64e3,
        fragLoadingLoopThreshold: 3,
        startFragPrefetch: !1,
        fpsDroppedMonitoringPeriod: 5e3,
        fpsDroppedMonitoringThreshold: .2,
        appendErrorMaxRetry: 3,
        loader: l.default,
        fLoader: void 0,
        pLoader: void 0,
        xhrSetup: void 0,
        fetchSetup: void 0,
        abrController: i.default,
        bufferController: n.default,
        capLevelController: o.default,
        fpsController: s.default,
        stretchShortVideoTrack: !1,
        forceKeyFrameOnDiscontinuity: !0,
        abrEwmaFastLive: 3,
        abrEwmaSlowLive: 9,
        abrEwmaFastVoD: 3,
        abrEwmaSlowVoD: 9,
        abrEwmaDefaultEstimate: 5e5,
        abrBandWidthFactor: .95,
        abrBandWidthUpFactor: .7,
        abrMaxWithRealBitrate: !1,
        maxStarvationDelay: 4,
        maxLoadingDelay: 4,
        minAutoBitrate: 0
      };
    }, {
      48: 48,
      5: 5,
      6: 6,
      7: 7,
      8: 8
    }],
    5: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = a(e(32)),
          f = e(28),
          h = e(46),
          c = a(e(44)),
          v = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.FRAG_LOADING, l.default.FRAG_LOADED, l.default.FRAG_BUFFERED, l.default.ERROR));
          return r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = e, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(r), r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            this.clearTimer(), u.default.prototype.destroy.call(this);
          }
        }, {
          key: "onFragLoading",
          value: function value(e) {
            var t = e.frag;

            if ("main" === t.type) {
              if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
                var r = this.hls,
                    a = e.frag.level,
                    i = r.levels[a].details.live,
                    n = r.config,
                    o = void 0,
                    s = void 0;
                i ? (o = n.abrEwmaFastLive, s = n.abrEwmaSlowLive) : (o = n.abrEwmaFastVoD, s = n.abrEwmaSlowVoD), this._bwEstimator = new c.default(r, s, o, n.abrEwmaDefaultEstimate);
              }

              this.fragCurrent = t;
            }
          }
        }, {
          key: "_abandonRulesCheck",
          value: function value() {
            var e = this.hls,
                t = e.media,
                r = this.fragCurrent,
                a = r.loader,
                i = e.minAutoLevel;
            if (!a || a.stats && a.stats.aborted) return h.logger.warn("frag loader destroy or aborted, disarm abandonRules"), void this.clearTimer();
            var n = a.stats;

            if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
              var o = performance.now() - n.trequest,
                  s = Math.abs(t.playbackRate);

              if (o > 500 * r.duration / s) {
                var u = e.levels,
                    f = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / o),
                    c = u[r.level],
                    v = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate,
                    g = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * v / 8)),
                    p = t.currentTime,
                    y = (g - n.loaded) / f,
                    m = (d.default.bufferInfo(t, p, e.config.maxBufferHole).end - p) / s;

                if (m < 2 * r.duration / s && y > m) {
                  var b = void 0,
                      E = void 0;

                  for (E = r.level - 1; E > i; E--) {
                    var _ = u[E].realBitrate ? Math.max(u[E].realBitrate, u[E].bitrate) : u[E].bitrate;

                    if ((b = r.duration * _ / (6.4 * f)) < m) break;
                  }

                  b < y && (h.logger.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + b.toFixed(1) + "<" + y.toFixed(1) + ":" + m.toFixed(1)), e.nextLoadLevel = E, this._bwEstimator.sample(o, n.loaded), a.abort(), this.clearTimer(), e.trigger(l.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                    frag: r,
                    stats: n
                  }));
                }
              }
            }
          }
        }, {
          key: "onFragLoaded",
          value: function value(e) {
            var t = e.frag;

            if ("main" === t.type && !isNaN(t.sn)) {
              if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                var r = this.hls.levels[t.level],
                    a = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                    i = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                r.loaded = {
                  bytes: a,
                  duration: i
                }, r.realBitrate = Math.round(8 * a / i);
              }

              if (e.frag.bitrateTest) {
                var n = e.stats;
                n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(e);
              }
            }
          }
        }, {
          key: "onFragBuffered",
          value: function value(e) {
            var t = e.stats,
                r = e.frag;

            if (!(!0 === t.aborted || 1 !== r.loadCounter || "main" !== r.type || isNaN(r.sn) || r.bitrateTest && t.tload !== t.tbuffered)) {
              var a = t.tparsed - t.trequest;
              h.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(a, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
            }
          }
        }, {
          key: "onError",
          value: function value(e) {
            switch (e.details) {
              case f.ErrorDetails.FRAG_LOAD_ERROR:
              case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                this.clearTimer();
            }
          }
        }, {
          key: "clearTimer",
          value: function value() {
            clearInterval(this.timer), this.timer = null;
          }
        }, {
          key: "_findBestLevel",
          value: function value(e, t, r, a, i, n, o, s, l) {
            for (var u = i; u >= a; u--) {
              var d = l[u].details,
                  f = d ? d.totalduration / d.fragments.length : t,
                  c = !!d && d.live,
                  v = void 0;
              v = u <= e ? o * r : s * r;
              var g = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
                  p = g * f / v;
              if (h.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(v) + "/" + g + "/" + f + "/" + n + "/" + p), v > g && (!p || c && !this.bitrateTestDelay || p < n)) return u;
            }

            return -1;
          }
        }, {
          key: "nextAutoLevel",
          get: function get() {
            var e = this._nextAutoLevel,
                t = this._bwEstimator;
            if (!(-1 === e || t && t.canEstimate())) return e;
            var r = this._nextABRAutoLevel;
            return -1 !== e && (r = Math.min(e, r)), r;
          },
          set: function set(e) {
            this._nextAutoLevel = e;
          }
        }, {
          key: "_nextABRAutoLevel",
          get: function get() {
            var e = this.hls,
                t = e.maxAutoLevel,
                r = e.levels,
                a = e.config,
                i = e.minAutoLevel,
                n = e.media,
                o = this.lastLoadedFragLevel,
                s = this.fragCurrent ? this.fragCurrent.duration : 0,
                l = n ? n.currentTime : 0,
                u = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
                f = this._bwEstimator ? this._bwEstimator.getEstimate() : a.abrEwmaDefaultEstimate,
                c = (d.default.bufferInfo(n, l, a.maxBufferHole).end - l) / u,
                v = this._findBestLevel(o, s, f, i, t, c, a.abrBandWidthFactor, a.abrBandWidthUpFactor, r);

            if (v >= 0) return v;
            h.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
            var g = s ? Math.min(s, a.maxStarvationDelay) : a.maxStarvationDelay,
                p = a.abrBandWidthFactor,
                y = a.abrBandWidthUpFactor;

            if (0 === c) {
              var m = this.bitrateTestDelay;
              m && (g = (s ? Math.min(s, a.maxLoadingDelay) : a.maxLoadingDelay) - m, h.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), p = y = 1);
            }

            return v = this._findBestLevel(o, s, f, i, t, c + g, p, y, r), Math.max(v, 0);
          }
        }]), t;
      }(u.default);

      r.default = v;
    }, {
      28: 28,
      29: 29,
      30: 30,
      32: 32,
      44: 44,
      46: 46
    }],
    6: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = e(46),
          f = e(28),
          h = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.MEDIA_ATTACHING, l.default.MEDIA_DETACHING, l.default.MANIFEST_PARSED, l.default.BUFFER_RESET, l.default.BUFFER_APPENDING, l.default.BUFFER_CODECS, l.default.BUFFER_EOS, l.default.BUFFER_FLUSHING, l.default.LEVEL_PTS_UPDATED, l.default.LEVEL_UPDATED));
          return r._msDuration = null, r._levelDuration = null, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            u.default.prototype.destroy.call(this);
          }
        }, {
          key: "onLevelPtsUpdated",
          value: function value(e) {
            var t = e.type,
                r = this.tracks.audio;

            if ("audio" === t && r && "audio/mpeg" === r.container) {
              var a = this.sourceBuffer.audio;

              if (Math.abs(a.timestampOffset - e.start) > .1) {
                var i = a.updating;

                try {
                  a.abort();
                } catch (e) {
                  i = !0, d.logger.warn("can not abort audio buffer: " + e);
                }

                i ? this.audioTimestampOffset = e.start : (d.logger.warn("change mpeg audio timestamp offset from " + a.timestampOffset + " to " + e.start), a.timestampOffset = e.start);
              }
            }
          }
        }, {
          key: "onManifestParsed",
          value: function value(e) {
            var t = e.audio,
                r = e.video || e.levels.length && e.audio,
                a = 0;
            e.altAudio && (t || r) && (a = (t ? 1 : 0) + (r ? 1 : 0), d.logger.log(a + " sourceBuffer(s) expected")), this.sourceBufferNb = a;
          }
        }, {
          key: "onMediaAttaching",
          value: function value(e) {
            var t = this.media = e.media;

            if (t) {
              var r = this.mediaSource = new MediaSource();
              this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), t.src = URL.createObjectURL(r);
            }
          }
        }, {
          key: "onMediaDetaching",
          value: function value() {
            d.logger.log("media source detaching");
            var e = this.mediaSource;

            if (e) {
              if ("open" === e.readyState) try {
                e.endOfStream();
              } catch (e) {
                d.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream");
              }
              e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0;
            }

            this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(l.default.MEDIA_DETACHED);
          }
        }, {
          key: "onMediaSourceOpen",
          value: function value() {
            d.logger.log("media source opened"), this.hls.trigger(l.default.MEDIA_ATTACHED, {
              media: this.media
            });
            var e = this.mediaSource;
            e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks();
          }
        }, {
          key: "checkPendingTracks",
          value: function value() {
            var e = this.pendingTracks,
                t = Object.keys(e).length;
            t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending());
          }
        }, {
          key: "onMediaSourceClose",
          value: function value() {
            d.logger.log("media source closed");
          }
        }, {
          key: "onMediaSourceEnded",
          value: function value() {
            d.logger.log("media source ended");
          }
        }, {
          key: "onSBUpdateEnd",
          value: function value() {
            if (this.audioTimestampOffset) {
              var e = this.sourceBuffer.audio;
              d.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset;
            }

            this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
            var t = this.parent,
                r = this.segments.reduce(function (e, r) {
              return r.parent === t ? e + 1 : e;
            }, 0);
            this.hls.trigger(l.default.BUFFER_APPENDED, {
              parent: t,
              pending: r
            }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration();
          }
        }, {
          key: "onSBUpdateError",
          value: function value(e) {
            d.logger.error("sourceBuffer error:", e), this.hls.trigger(l.default.ERROR, {
              type: f.ErrorTypes.MEDIA_ERROR,
              details: f.ErrorDetails.BUFFER_APPENDING_ERROR,
              fatal: !1
            });
          }
        }, {
          key: "onBufferReset",
          value: function value() {
            var e = this.sourceBuffer;

            for (var t in e) {
              var r = e[t];

              try {
                this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe);
              } catch (e) {}
            }

            this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0;
          }
        }, {
          key: "onBufferCodecs",
          value: function value(e) {
            if (0 === Object.keys(this.sourceBuffer).length) {
              for (var t in e) {
                this.pendingTracks[t] = e[t];
              }

              var r = this.mediaSource;
              r && "open" === r.readyState && this.checkPendingTracks();
            }
          }
        }, {
          key: "createSourceBuffers",
          value: function value(e) {
            var t = this.sourceBuffer,
                r = this.mediaSource;

            for (var a in e) {
              if (!t[a]) {
                var i = e[a],
                    n = i.levelCodec || i.codec,
                    o = i.container + ";codecs=" + n;
                d.logger.log("creating sourceBuffer(" + o + ")");

                try {
                  var s = t[a] = r.addSourceBuffer(o);
                  s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), this.tracks[a] = {
                    codec: n,
                    container: i.container
                  }, i.buffer = s;
                } catch (e) {
                  d.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(l.default.ERROR, {
                    type: f.ErrorTypes.MEDIA_ERROR,
                    details: f.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                    fatal: !1,
                    err: e,
                    mimeType: o
                  });
                }
              }
            }

            this.hls.trigger(l.default.BUFFER_CREATED, {
              tracks: e
            });
          }
        }, {
          key: "onBufferAppending",
          value: function value(e) {
            this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending());
          }
        }, {
          key: "onBufferAppendFail",
          value: function value(e) {
            d.logger.error("sourceBuffer error:", e.event), this.hls.trigger(l.default.ERROR, {
              type: f.ErrorTypes.MEDIA_ERROR,
              details: f.ErrorDetails.BUFFER_APPENDING_ERROR,
              fatal: !1
            });
          }
        }, {
          key: "onBufferEos",
          value: function value(e) {
            var t = this.sourceBuffer,
                r = e.type;

            for (var a in t) {
              r && a !== r || t[a].ended || (t[a].ended = !0, d.logger.log(a + " sourceBuffer now EOS"));
            }

            this.checkEos();
          }
        }, {
          key: "checkEos",
          value: function value() {
            var e = this.sourceBuffer,
                t = this.mediaSource;

            if (t && "open" === t.readyState) {
              for (var r in e) {
                var a = e[r];
                if (!a.ended) return;
                if (a.updating) return void (this._needsEos = !0);
              }

              d.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");

              try {
                t.endOfStream();
              } catch (e) {
                d.logger.warn("exception while calling mediaSource.endOfStream()");
              }

              this._needsEos = !1;
            } else this._needsEos = !1;
          }
        }, {
          key: "onBufferFlushing",
          value: function value(e) {
            this.flushRange.push({
              start: e.startOffset,
              end: e.endOffset,
              type: e.type
            }), this.flushBufferCounter = 0, this.doFlush();
          }
        }, {
          key: "onLevelUpdated",
          value: function value(e) {
            var t = e.details;
            0 !== t.fragments.length && (this._levelDuration = t.totalduration + t.fragments[0].start, this.updateMediaElementDuration());
          }
        }, {
          key: "updateMediaElementDuration",
          value: function value() {
            var e = this.media,
                t = this.mediaSource,
                r = this.sourceBuffer,
                a = this._levelDuration;

            if (null !== a && e && t && r && 0 !== e.readyState && "open" === t.readyState) {
              for (var i in r) {
                if (r[i].updating) return;
              }

              null === this._msDuration && (this._msDuration = t.duration);
              var n = e.duration;
              (a > this._msDuration && a > n || n === 1 / 0 || isNaN(n)) && (d.logger.log("Updating mediasource duration to " + a.toFixed(3)), this._msDuration = t.duration = a);
            }
          }
        }, {
          key: "doFlush",
          value: function value() {
            for (; this.flushRange.length;) {
              var e = this.flushRange[0];
              if (!this.flushBuffer(e.start, e.end, e.type)) return void (this._needsFlush = !0);
              this.flushRange.shift(), this.flushBufferCounter = 0;
            }

            if (0 === this.flushRange.length) {
              this._needsFlush = !1;
              var t = 0,
                  r = this.sourceBuffer;

              try {
                for (var a in r) {
                  t += r[a].buffered.length;
                }
              } catch (e) {
                d.logger.error("error while accessing sourceBuffer.buffered");
              }

              this.appended = t, this.hls.trigger(l.default.BUFFER_FLUSHED);
            }
          }
        }, {
          key: "doAppending",
          value: function value() {
            var e = this.hls,
                t = this.sourceBuffer,
                r = this.segments;

            if (Object.keys(t).length) {
              if (this.media.error) return this.segments = [], void d.logger.error("trying to append although a media error occured, flush segment and abort");
              if (this.appending) return;

              if (r && r.length) {
                var a = r.shift();

                try {
                  var i = t[a.type];
                  i ? i.updating ? r.unshift(a) : (i.ended = !1, this.parent = a.parent, i.appendBuffer(a.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd();
                } catch (t) {
                  d.logger.error("error while trying to append buffer:" + t.message), r.unshift(a);
                  var n = {
                    type: f.ErrorTypes.MEDIA_ERROR,
                    parent: a.parent
                  };
                  if (22 === t.code) return this.segments = [], n.details = f.ErrorDetails.BUFFER_FULL_ERROR, n.fatal = !1, void e.trigger(l.default.ERROR, n);
                  if (this.appendError ? this.appendError++ : this.appendError = 1, n.details = f.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry) return d.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], n.fatal = !0, void e.trigger(l.default.ERROR, n);
                  n.fatal = !1, e.trigger(l.default.ERROR, n);
                }
              }
            }
          }
        }, {
          key: "flushBuffer",
          value: function value(e, t, r) {
            var a,
                i,
                n,
                o,
                s,
                l,
                u = this.sourceBuffer;

            if (Object.keys(u).length) {
              if (d.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
                for (var f in u) {
                  if (!r || f === r) {
                    if (a = u[f], a.ended = !1, a.updating) return d.logger.warn("cannot flush, sb updating in progress"), !1;

                    try {
                      for (i = 0; i < a.buffered.length; i++) {
                        if (n = a.buffered.start(i), o = a.buffered.end(i), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && t === Number.POSITIVE_INFINITY ? (s = e, l = t) : (s = Math.max(n, e), l = Math.min(o, t)), Math.min(l, o) - s > .5) return this.flushBufferCounter++, d.logger.log("flush " + f + " [" + s + "," + l + "], of [" + n + "," + o + "], pos:" + this.media.currentTime), a.remove(s, l), !1;
                      }
                    } catch (e) {
                      d.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource");
                    }
                  }
                }
              } else d.logger.warn("abort flushing too many retries");

              d.logger.log("buffer flushed");
            }

            return !0;
          }
        }]), t;
      }(u.default);

      r.default = h;
    }, {
      28: 28,
      29: 29,
      30: 30,
      46: 46
    }],
    7: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = function (e) {
        function t(e) {
          return i(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.FPS_DROP_LEVEL_CAPPING, l.default.MEDIA_ATTACHING, l.default.MANIFEST_PARSED));
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)));
          }
        }, {
          key: "onFpsDropLevelCapping",
          value: function value(e) {
            t.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel);
          }
        }, {
          key: "onMediaAttaching",
          value: function value(e) {
            this.media = e.media instanceof HTMLVideoElement ? e.media : null;
          }
        }, {
          key: "onManifestParsed",
          value: function value(e) {
            var t = this.hls;
            this.restrictedLevels = [], t.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, t.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
          }
        }, {
          key: "detectPlayerSize",
          value: function value() {
            if (this.media) {
              var e = this.levels ? this.levels.length : 0;

              if (e) {
                var t = this.hls;
                t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
              }
            }
          }
        }, {
          key: "getMaxLevel",
          value: function value(e) {
            var r = this;
            if (!this.levels) return -1;
            var a = this.levels.filter(function (a, i) {
              return t.isLevelAllowed(i, r.restrictedLevels) && i <= e;
            });
            return t.getMaxLevelByMediaSize(a, this.mediaWidth, this.mediaHeight);
          }
        }, {
          key: "mediaWidth",
          get: function get() {
            var e = void 0,
                r = this.media;
            return r && (e = r.width || r.clientWidth || r.offsetWidth, e *= t.contentScaleFactor), e;
          }
        }, {
          key: "mediaHeight",
          get: function get() {
            var e = void 0,
                r = this.media;
            return r && (e = r.height || r.clientHeight || r.offsetHeight, e *= t.contentScaleFactor), e;
          }
        }], [{
          key: "isLevelAllowed",
          value: function value(e) {
            return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(e);
          }
        }, {
          key: "getMaxLevelByMediaSize",
          value: function value(e, t, r) {
            if (!e || e && !e.length) return -1;

            for (var a = e.length - 1, i = 0; i < e.length; i += 1) {
              var n = e[i];

              if ((n.width >= t || n.height >= r) && function (e, t) {
                return !t || e.width !== t.width || e.height !== t.height;
              }(n, e[i + 1])) {
                a = i;
                break;
              }
            }

            return a;
          }
        }, {
          key: "contentScaleFactor",
          get: function get() {
            var e = 1;

            try {
              e = window.devicePixelRatio;
            } catch (e) {}

            return e;
          }
        }]), t;
      }(a(e(29)).default);

      r.default = u;
    }, {
      29: 29,
      30: 30
    }],
    8: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = e(46),
          f = function (e) {
        function t(e) {
          return i(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.MEDIA_ATTACHING));
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1;
          }
        }, {
          key: "onMediaAttaching",
          value: function value(e) {
            var t = this.hls.config;
            t.capLevelOnFPSDrop && ("function" == typeof (this.video = e.media instanceof HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod));
          }
        }, {
          key: "checkFPS",
          value: function value(e, t, r) {
            var a = performance.now();

            if (t) {
              if (this.lastTime) {
                var i = a - this.lastTime,
                    n = r - this.lastDroppedFrames,
                    o = t - this.lastDecodedFrames,
                    s = 1e3 * n / i,
                    u = this.hls;

                if (u.trigger(l.default.FPS_DROP, {
                  currentDropped: n,
                  currentDecoded: o,
                  totalDroppedFrames: r
                }), s > 0 && n > u.config.fpsDroppedMonitoringThreshold * o) {
                  var f = u.currentLevel;
                  d.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + f), f > 0 && (-1 === u.autoLevelCapping || u.autoLevelCapping >= f) && (f -= 1, u.trigger(l.default.FPS_DROP_LEVEL_CAPPING, {
                    level: f,
                    droppedLevel: u.currentLevel
                  }), u.autoLevelCapping = f, u.streamController.nextLevelSwitch());
                }
              }

              this.lastTime = a, this.lastDroppedFrames = r, this.lastDecodedFrames = t;
            }
          }
        }, {
          key: "checkFPSInterval",
          value: function value() {
            var e = this.video;
            if (e) if (this.isVideoPlaybackQualityAvailable) {
              var t = e.getVideoPlaybackQuality();
              this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
            } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
          }
        }]), t;
      }(u.default);

      r.default = f;
    }, {
      29: 29,
      30: 30,
      46: 46
    }],
    9: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = a(e(22)),
          f = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.MEDIA_ATTACHED, l.default.MEDIA_DETACHING, l.default.FRAG_PARSING_METADATA));
          return r.id3Track = void 0, r.media = void 0, r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            u.default.prototype.destroy.call(this);
          }
        }, {
          key: "onMediaAttached",
          value: function value(e) {
            this.media = e.media, this.media && (this.id3Track = this.media.addTextTrack("metadata", "id3"), this.id3Track.mode = "hidden");
          }
        }, {
          key: "onMediaDetaching",
          value: function value() {
            this.media = void 0;
          }
        }, {
          key: "onFragParsingMetadata",
          value: function value(e) {
            for (var t = e.frag, r = e.samples, a = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < r.length; i++) {
              var n = d.default.getID3Frames(r[i].data);

              if (n) {
                var o = r[i].pts,
                    s = i < r.length - 1 ? r[i + 1].pts : t.endPTS;
                o === s && (s += 1e-4);

                for (var l = 0; l < n.length; l++) {
                  var u = n[l];

                  if (!d.default.isTimeStampFrame(u)) {
                    var f = new a(o, s, "");
                    f.value = u, this.id3Track.addCue(f);
                  }
                }
              }
            }
          }
        }]), t;
      }(u.default);

      r.default = f;
    }, {
      22: 22,
      29: 29,
      30: 30
    }],
    10: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = e(46),
          f = e(28),
          h = a(e(32)),
          c = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.MANIFEST_LOADED, l.default.LEVEL_LOADED, l.default.FRAG_LOADED, l.default.ERROR));
          return r.ontick = r.tick.bind(r), r._manualLevel = -1, r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            this.cleanTimer(), this._manualLevel = -1;
          }
        }, {
          key: "cleanTimer",
          value: function value() {
            this.timer && (clearTimeout(this.timer), this.timer = null);
          }
        }, {
          key: "startLoad",
          value: function value() {
            this.canload = !0;
            var e = this._levels;
            e && e.forEach(function (e) {
              e.loadError = 0;
              var t = e.details;
              t && t.live && (e.details = void 0);
            }), this.timer && this.tick();
          }
        }, {
          key: "stopLoad",
          value: function value() {
            this.canload = !1;
          }
        }, {
          key: "onManifestLoaded",
          value: function value(e) {
            var t,
                r = [],
                a = [],
                i = {},
                n = !1,
                o = !1,
                s = this.hls,
                u = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                h = function h(e, t) {
              return MediaSource.isTypeSupported(e + "/mp4;codecs=" + t);
            };

            if (e.levels.forEach(function (e) {
              e.videoCodec && (n = !0), u && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (o = !0);
              var t = i[e.bitrate];
              void 0 === t ? (i[e.bitrate] = r.length, e.url = [e.url], e.urlId = 0, r.push(e)) : r[t].url.push(e.url);
            }), n && o ? r.forEach(function (e) {
              e.videoCodec && a.push(e);
            }) : a = r, (a = a.filter(function (e) {
              var t = e.audioCodec,
                  r = e.videoCodec;
              return (!t || h("audio", t)) && (!r || h("video", r));
            })).length) {
              t = a[0].bitrate, a.sort(function (e, t) {
                return e.bitrate - t.bitrate;
              }), this._levels = a;

              for (var c = 0; c < a.length; c++) {
                if (a[c].bitrate === t) {
                  this._firstLevel = c, d.logger.log("manifest loaded," + a.length + " level(s) found, first bitrate:" + t);
                  break;
                }
              }

              s.trigger(l.default.MANIFEST_PARSED, {
                levels: a,
                firstLevel: this._firstLevel,
                stats: e.stats,
                audio: o,
                video: n,
                altAudio: e.audioTracks.length > 0
              });
            } else s.trigger(l.default.ERROR, {
              type: f.ErrorTypes.MEDIA_ERROR,
              details: f.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
              fatal: !0,
              url: s.url,
              reason: "no level with compatible codecs found in manifest"
            });
          }
        }, {
          key: "setLevelInternal",
          value: function value(e) {
            var t = this._levels,
                r = this.hls;

            if (e >= 0 && e < t.length) {
              if (this.cleanTimer(), this._level !== e) {
                d.logger.log("switching to level " + e), this._level = e;
                var a = t[e];
                a.level = e, r.trigger(l.default.LEVEL_SWITCH, a), r.trigger(l.default.LEVEL_SWITCHING, a);
              }

              var i = t[e],
                  n = i.details;

              if (!n || !0 === n.live) {
                var o = i.urlId;
                r.trigger(l.default.LEVEL_LOADING, {
                  url: i.url[o],
                  level: e,
                  id: o
                });
              }
            } else r.trigger(l.default.ERROR, {
              type: f.ErrorTypes.OTHER_ERROR,
              details: f.ErrorDetails.LEVEL_SWITCH_ERROR,
              level: e,
              fatal: !1,
              reason: "invalid level idx"
            });
          }
        }, {
          key: "onError",
          value: function value(e) {
            if (e.fatal) e.type === f.ErrorTypes.NETWORK_ERROR && this.cleanTimer();else {
              var t = e.details,
                  r = this.hls,
                  a = void 0,
                  i = void 0,
                  n = !1;

              switch (t) {
                case f.ErrorDetails.FRAG_LOAD_ERROR:
                case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case f.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                case f.ErrorDetails.KEY_LOAD_ERROR:
                case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                  a = e.frag.level;
                  break;

                case f.ErrorDetails.LEVEL_LOAD_ERROR:
                case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  a = e.context.level, n = !0;
                  break;

                case f.ErrorDetails.REMUX_ALLOC_ERROR:
                  a = e.level;
              }

              if (void 0 !== a) {
                (i = this._levels[a]).loadError ? i.loadError++ : i.loadError = 1;
                var o = i.url.length;
                if (o > 1 && i.loadError < o) i.urlId = (i.urlId + 1) % o, i.details = void 0, d.logger.warn("level controller," + t + " for level " + a + ": switching to redundant stream id " + i.urlId);else if (-1 === this._manualLevel && a) d.logger.warn("level controller," + t + ": switch-down for next fragment"), r.nextAutoLevel = Math.max(0, a - 1);else if (i && i.details && i.details.live) d.logger.warn("level controller," + t + " on live stream, discard"), n && (this._level = void 0);else if (t === f.ErrorDetails.LEVEL_LOAD_ERROR || t === f.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                  var s = r.media;

                  if (s && h.default.isBuffered(s, s.currentTime) && h.default.isBuffered(s, s.currentTime + .5)) {
                    var l = r.config.levelLoadingRetryDelay;
                    d.logger.warn("level controller," + t + ", but media buffered, retry in " + l + "ms"), this.timer = setTimeout(this.ontick, l), e.levelRetry = !0;
                  } else d.logger.error("cannot recover " + t + " error"), this._level = void 0, this.cleanTimer(), e.fatal = !0;
                }
              }
            }
          }
        }, {
          key: "onFragLoaded",
          value: function value(e) {
            var t = e.frag;

            if (t && "main" === t.type) {
              var r = this._levels[t.level];
              r && (r.loadError = 0);
            }
          }
        }, {
          key: "onLevelLoaded",
          value: function value(e) {
            var t = e.level;

            if (t === this._level) {
              var r = this._levels[t];
              r.loadError = 0;
              var a = e.details;

              if (a.live) {
                var i = 1e3 * (a.averagetargetduration ? a.averagetargetduration : a.targetduration),
                    n = r.details;
                n && a.endSN === n.endSN && (i /= 2, d.logger.log("same live playlist, reload twice faster")), i -= performance.now() - e.stats.trequest, i = Math.max(1e3, Math.round(i)), d.logger.log("live playlist, reload in " + i + " ms"), this.timer = setTimeout(this.ontick, i);
              } else this.timer = null;
            }
          }
        }, {
          key: "tick",
          value: function value() {
            var e = this._level;

            if (void 0 !== e && this.canload) {
              var t = this._levels[e];

              if (t && t.url) {
                var r = t.urlId;
                this.hls.trigger(l.default.LEVEL_LOADING, {
                  url: t.url[r],
                  level: e,
                  id: r
                });
              }
            }
          }
        }, {
          key: "levels",
          get: function get() {
            return this._levels;
          }
        }, {
          key: "level",
          get: function get() {
            return this._level;
          },
          set: function set(e) {
            var t = this._levels;
            t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e));
          }
        }, {
          key: "manualLevel",
          get: function get() {
            return this._manualLevel;
          },
          set: function set(e) {
            this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e);
          }
        }, {
          key: "firstLevel",
          get: function get() {
            return this._firstLevel;
          },
          set: function set(e) {
            this._firstLevel = e;
          }
        }, {
          key: "startLevel",
          get: function get() {
            if (void 0 === this._startLevel) {
              var e = this.hls.config.startLevel;
              return void 0 !== e ? e : this._firstLevel;
            }

            return this._startLevel;
          },
          set: function set(e) {
            this._startLevel = e;
          }
        }, {
          key: "nextLoadLevel",
          get: function get() {
            return -1 !== this._manualLevel ? this._manualLevel : this.hls.nextAutoLevel;
          },
          set: function set(e) {
            this.level = e, -1 === this._manualLevel && (this.hls.nextAutoLevel = e);
          }
        }]), t;
      }(u.default);

      r.default = c;
    }, {
      28: 28,
      29: 29,
      30: 30,
      32: 32,
      46: 46
    }],
    11: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(43)),
          u = a(e(32)),
          d = a(e(20)),
          f = a(e(30)),
          h = a(e(29)),
          c = a(e(33)),
          v = a(e(47)),
          g = e(28),
          p = e(46),
          y = {
        STOPPED: "STOPPED",
        IDLE: "IDLE",
        KEY_LOADING: "KEY_LOADING",
        FRAG_LOADING: "FRAG_LOADING",
        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
        WAITING_LEVEL: "WAITING_LEVEL",
        PARSING: "PARSING",
        PARSED: "PARSED",
        BUFFER_FLUSHING: "BUFFER_FLUSHING",
        ENDED: "ENDED",
        ERROR: "ERROR"
      },
          m = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, f.default.MEDIA_ATTACHED, f.default.MEDIA_DETACHING, f.default.MANIFEST_LOADING, f.default.MANIFEST_PARSED, f.default.LEVEL_LOADED, f.default.KEY_LOADED, f.default.FRAG_LOADED, f.default.FRAG_LOAD_EMERGENCY_ABORTED, f.default.FRAG_PARSING_INIT_SEGMENT, f.default.FRAG_PARSING_DATA, f.default.FRAG_PARSED, f.default.ERROR, f.default.AUDIO_TRACK_SWITCHING, f.default.AUDIO_TRACK_SWITCHED, f.default.BUFFER_CREATED, f.default.BUFFER_APPENDED, f.default.BUFFER_FLUSHED));
          return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r._state = y.STOPPED, r.ontick = r.tick.bind(r), r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), h.default.prototype.destroy.call(this), this.state = y.STOPPED;
          }
        }, {
          key: "startLoad",
          value: function value(e) {
            if (this.levels) {
              var t = this.lastCurrentTime,
                  r = this.hls;

              if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                var a = r.startLevel;
                -1 === a && (a = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = a, this.loadedmetadata = !1;
              }

              t > 0 && -1 === e && (p.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = y.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
            } else this.forceStartLoad = !0, this.state = y.STOPPED;
          }
        }, {
          key: "stopLoad",
          value: function value() {
            var e = this.fragCurrent;
            e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = y.STOPPED, this.forceStartLoad = !1;
          }
        }, {
          key: "tick",
          value: function value() {
            1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0);
          }
        }, {
          key: "doTick",
          value: function value() {
            switch (this.state) {
              case y.ERROR:
                break;

              case y.BUFFER_FLUSHING:
                this.fragLoadError = 0;
                break;

              case y.IDLE:
                this._doTickIdle();

                break;

              case y.WAITING_LEVEL:
                var e = this.levels[this.level];
                e && e.details && (this.state = y.IDLE);
                break;

              case y.FRAG_LOADING_WAITING_RETRY:
                var t = performance.now(),
                    r = this.retryDate;
                (!r || t >= r || this.media && this.media.seeking) && (p.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = y.IDLE);
                break;

              case y.ERROR:
              case y.STOPPED:
              case y.FRAG_LOADING:
              case y.PARSING:
              case y.PARSED:
              case y.ENDED:
            }

            this._checkBuffer(), this._checkFragmentChanged();
          }
        }, {
          key: "_doTickIdle",
          value: function value() {
            var e = this.hls,
                t = e.config,
                r = this.media;

            if (void 0 === this.levelLastLoaded || r || !this.startFragRequested && t.startFragPrefetch) {
              var a = void 0;
              a = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
              var i = e.nextLoadLevel,
                  n = this.levels[i];

              if (n) {
                var o = n.bitrate,
                    s = void 0;
                s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength, s = Math.min(s, t.maxMaxBufferLength);
                var l = u.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, a, t.maxBufferHole),
                    d = l.len;

                if (!(d >= s)) {
                  p.logger.trace("buffer length of " + d.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = i;
                  var h = n.details;
                  if (void 0 === h || h.live && this.levelLastLoaded !== i) this.state = y.WAITING_LEVEL;else {
                    var c = this.fragPrevious;

                    if (!h.live && c && c.sn === h.endSN && d && !l.nextStart && Math.min(r.duration, c.start + c.duration) - Math.max(l.end, c.start) <= Math.max(.2, c.duration)) {
                      var v = {};
                      return this.altAudio && (v.type = "video"), this.hls.trigger(f.default.BUFFER_EOS, v), void (this.state = y.ENDED);
                    }

                    this._fetchPayloadOrEos(a, l, h);
                  }
                }
              }
            }
          }
        }, {
          key: "_fetchPayloadOrEos",
          value: function value(e, t, r) {
            var a = this.fragPrevious,
                i = this.level,
                n = r.fragments,
                o = n.length;

            if (0 !== o) {
              var s = n[0].start,
                  l = n[o - 1].start + n[o - 1].duration,
                  u = t.end,
                  d = void 0;
              if (r.initSegment && !r.initSegment.data) d = r.initSegment;else if (r.live) {
                var f = this.config.initialLiveManifestSize;
                if (o < f) return void p.logger.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + f);
                if (null === (d = this._ensureFragmentAtLivePoint(r, u, s, l, a, n, o))) return;
              } else u < s && (d = n[0]);
              d || (d = this._findFragment(s, a, o, n, u, l, r)), d && this._loadFragmentOrKey(d, i, r, e, u);
            }
          }
        }, {
          key: "_ensureFragmentAtLivePoint",
          value: function value(e, t, r, a, i, n, o) {
            var s = this.hls.config,
                u = this.media,
                d = void 0,
                f = void 0 !== s.liveMaxLatencyDuration ? s.liveMaxLatencyDuration : s.liveMaxLatencyDurationCount * e.targetduration;

            if (t < Math.max(r - s.maxFragLookUpTolerance, a - f)) {
              var h = this.liveSyncPosition = this.computeLivePosition(r, e);
              p.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), t = h, u && u.readyState && u.duration > h && (u.currentTime = h), this.nextLoadPosition = h;
            }

            if (e.PTSKnown && t > a && u && u.readyState) return null;

            if (this.startFragRequested && !e.PTSKnown) {
              if (i) {
                var c = i.sn + 1;

                if (c >= e.startSN && c <= e.endSN) {
                  var v = n[c - e.startSN];
                  i.cc === v.cc && (d = v, p.logger.log("live playlist, switching playlist, load frag with next SN: " + d.sn));
                }

                d || (d = l.default.search(n, function (e) {
                  return i.cc - e.cc;
                })) && p.logger.log("live playlist, switching playlist, load frag with same CC: " + d.sn);
              }

              d || (d = n[Math.min(o - 1, Math.round(o / 2))], p.logger.log("live playlist, switching playlist, unknown, load middle frag : " + d.sn));
            }

            return d;
          }
        }, {
          key: "_findFragment",
          value: function value(e, t, r, a, i, n, o) {
            var s = this.hls.config,
                u = void 0,
                d = void 0,
                f = s.maxFragLookUpTolerance,
                h = t ? a[t.sn - a[0].sn + 1] : void 0,
                c = function c(e) {
              var t = Math.min(f, e.duration);
              return e.start + e.duration - t <= i ? 1 : e.start - t > i && e.start ? -1 : 0;
            };

            if (i < n ? (i > n - f && (f = 0), d = h && !c(h) ? h : l.default.search(a, c)) : d = a[r - 1], d) {
              var v = (u = d).sn - o.startSN,
                  g = t && u.level === t.level,
                  y = a[v - 1],
                  m = a[v + 1];
              if (t && u.sn === t.sn) if (g && !u.backtracked) {
                if (u.sn < o.endSN) {
                  var b = t.deltaPTS;
                  b && b > s.maxBufferHole && t.dropped && v ? (u = y, p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), t.loadCounter--) : (u = m, p.logger.log("SN just loaded, load next one: " + u.sn));
                } else u = null;
              } else u.backtracked && (m && m.backtracked ? (p.logger.warn("Already backtracked from fragment " + m.sn + ", will not backtrack to fragment " + u.sn + ". Loading fragment " + m.sn), u = m) : (p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), u.dropped = 0, y ? (y.loadCounter && y.loadCounter--, (u = y).backtracked = !0) : v && (u = null)));
            }

            return u;
          }
        }, {
          key: "_loadFragmentOrKey",
          value: function value(e, t, r, a, i) {
            var n = this.hls,
                o = n.config;

            if (!e.decryptdata || null == e.decryptdata.uri || null != e.decryptdata.key) {
              if (p.logger.log("Loading " + e.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + t + ", currentTime:" + a.toFixed(3) + ",bufferEnd:" + i.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, e.loadCounter) {
                e.loadCounter++;
                var s = o.fragLoadingLoopThreshold;
                if (e.loadCounter > s && Math.abs(this.fragLoadIdx - e.loadIdx) < s) return void n.trigger(f.default.ERROR, {
                  type: g.ErrorTypes.MEDIA_ERROR,
                  details: g.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                  fatal: !1,
                  frag: e
                });
              } else e.loadCounter = 1;

              return e.loadIdx = this.fragLoadIdx, this.fragCurrent = e, this.startFragRequested = !0, isNaN(e.sn) || (this.nextLoadPosition = e.start + e.duration), e.autoLevel = n.autoLevelEnabled, e.bitrateTest = this.bitrateTest, n.trigger(f.default.FRAG_LOADING, {
                frag: e
              }), this.demuxer || (this.demuxer = new d.default(n, "main")), void (this.state = y.FRAG_LOADING);
            }

            p.logger.log("Loading key for " + e.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + t), this.state = y.KEY_LOADING, n.trigger(f.default.KEY_LOADING, {
              frag: e
            });
          }
        }, {
          key: "getBufferedFrag",
          value: function value(e) {
            return l.default.search(this._bufferedFrags, function (t) {
              return e < t.startPTS ? -1 : e > t.endPTS ? 1 : 0;
            });
          }
        }, {
          key: "followingBufferedFrag",
          value: function value(e) {
            return e ? this.getBufferedFrag(e.endPTS + .5) : null;
          }
        }, {
          key: "_checkFragmentChanged",
          value: function value() {
            var e,
                t,
                r = this.media;

            if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = t), u.default.isBuffered(r, t) ? e = this.getBufferedFrag(t) : u.default.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
              var a = e;

              if (a !== this.fragPlaying) {
                this.hls.trigger(f.default.FRAG_CHANGED, {
                  frag: a
                });
                var i = a.level;
                this.fragPlaying && this.fragPlaying.level === i || this.hls.trigger(f.default.LEVEL_SWITCHED, {
                  level: i
                }), this.fragPlaying = a;
              }
            }
          }
        }, {
          key: "immediateLevelSwitch",
          value: function value() {
            if (p.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
              this.immediateSwitch = !0;
              var e = this.media,
                  t = void 0;
              e ? (t = e.paused, e.pause()) : t = !0, this.previouslyPaused = t;
            }

            var r = this.fragCurrent;
            r && r.loader && r.loader.abort(), this.fragCurrent = null, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }
        }, {
          key: "immediateLevelSwitchEnd",
          value: function value() {
            var e = this.media;
            e && e.buffered.length && (this.immediateSwitch = !1, u.default.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play());
          }
        }, {
          key: "nextLevelSwitch",
          value: function value() {
            var e = this.media;

            if (e && e.readyState) {
              var t = void 0,
                  r = void 0,
                  a = void 0;
              if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, (r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;else {
                var i = this.hls.nextLoadLevel,
                    n = this.levels[i],
                    o = this.fragLastKbps;
                t = o && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * o) + 1 : 0;
              }

              if ((a = this.getBufferedFrag(e.currentTime + t)) && (a = this.followingBufferedFrag(a))) {
                var s = this.fragCurrent;
                s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(a.maxStartPTS, Number.POSITIVE_INFINITY);
              }
            }
          }
        }, {
          key: "flushMainBuffer",
          value: function value(e, t) {
            this.state = y.BUFFER_FLUSHING;
            var r = {
              startOffset: e,
              endOffset: t
            };
            this.altAudio && (r.type = "video"), this.hls.trigger(f.default.BUFFER_FLUSHING, r);
          }
        }, {
          key: "onMediaAttached",
          value: function value(e) {
            var t = this.media = this.mediaBuffer = e.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
            var r = this.config;
            this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition);
          }
        }, {
          key: "onMediaDetaching",
          value: function value() {
            var e = this.media;
            e && e.ended && (p.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
            var t = this.levels;
            t && t.forEach(function (e) {
              e.details && e.details.fragments.forEach(function (e) {
                e.loadCounter = void 0, e.backtracked = void 0;
              });
            }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad();
          }
        }, {
          key: "onMediaSeeking",
          value: function value() {
            var e = this.media,
                t = e ? e.currentTime : void 0,
                r = this.config;
            isNaN(t) || p.logger.log("media seeking to " + t.toFixed(3));
            var a = this.mediaBuffer ? this.mediaBuffer : e,
                i = u.default.bufferInfo(a, t, this.config.maxBufferHole);

            if (this.state === y.FRAG_LOADING) {
              var n = this.fragCurrent;

              if (0 === i.len && n) {
                var o = r.maxFragLookUpTolerance,
                    s = n.start - o,
                    l = n.start + n.duration + o;
                t < s || t > l ? (n.loader && (p.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = y.IDLE) : p.logger.log("seeking outside of buffer but within currently loaded fragment range");
              }
            } else this.state === y.ENDED && (0 === i.len && (this.fragPrevious = 0), this.state = y.IDLE);

            e && (this.lastCurrentTime = t), this.state !== y.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * r.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = t), this.tick();
          }
        }, {
          key: "onMediaSeeked",
          value: function value() {
            var e = this.media,
                t = e ? e.currentTime : void 0;
            isNaN(t) || p.logger.log("media seeked to " + t.toFixed(3)), this.tick();
          }
        }, {
          key: "onMediaEnded",
          value: function value() {
            p.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0;
          }
        }, {
          key: "onManifestLoading",
          value: function value() {
            p.logger.log("trigger BUFFER_RESET"), this.hls.trigger(f.default.BUFFER_RESET), this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0;
          }
        }, {
          key: "onManifestParsed",
          value: function value(e) {
            var t,
                r = !1,
                a = !1;
            e.levels.forEach(function (e) {
              (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (a = !0));
            }), this.audioCodecSwitch = r && a, this.audioCodecSwitch && p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;
            var i = this.config;
            (i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition);
          }
        }, {
          key: "onLevelLoaded",
          value: function value(e) {
            var t = e.details,
                r = e.level,
                a = this.levels[r],
                i = t.totalduration,
                n = 0;

            if (p.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), this.levelLastLoaded = r, t.live) {
              var o = a.details;
              o && t.fragments.length > 0 ? (c.default.mergeDetails(o, t), n = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(n, o), t.PTSKnown ? p.logger.log("live playlist sliding:" + n.toFixed(3)) : p.logger.log("live playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, p.logger.log("live playlist - first load, unknown sliding"));
            } else t.PTSKnown = !1;

            if (a.details = t, this.hls.trigger(f.default.LEVEL_UPDATED, {
              details: t,
              level: r
            }), !1 === this.startFragRequested) {
              if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                var s = t.startTimeOffset;
                isNaN(s) ? t.live ? (this.startPosition = this.computeLivePosition(n, t), p.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (s < 0 && (p.logger.log("negative start time offset " + s + ", count from end of last fragment"), s = n + i + s), p.logger.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s), this.lastCurrentTime = this.startPosition;
              }

              this.nextLoadPosition = this.startPosition;
            }

            this.state === y.WAITING_LEVEL && (this.state = y.IDLE), this.tick();
          }
        }, {
          key: "onKeyLoaded",
          value: function value() {
            this.state === y.KEY_LOADING && (this.state = y.IDLE, this.tick());
          }
        }, {
          key: "onFragLoaded",
          value: function value(e) {
            var t = this.fragCurrent,
                r = e.frag;

            if (this.state === y.FRAG_LOADING && t && "main" === r.type && r.level === t.level && r.sn === t.sn) {
              var a = e.stats,
                  i = this.levels[t.level],
                  n = i.details;
              if (p.logger.log("Loaded  " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + t.level), this.bitrateTest = !1, this.stats = a, !0 === r.bitrateTest && this.hls.nextLoadLevel) this.state = y.IDLE, this.startFragRequested = !1, a.tparsed = a.tbuffered = performance.now(), this.hls.trigger(f.default.FRAG_BUFFERED, {
                stats: a,
                frag: t,
                id: "main"
              }), this.tick();else if ("initSegment" === r.sn) this.state = y.IDLE, a.tparsed = a.tbuffered = performance.now(), n.initSegment.data = e.payload, this.hls.trigger(f.default.FRAG_BUFFERED, {
                stats: a,
                frag: t,
                id: "main"
              }), this.tick();else {
                this.state = y.PARSING;
                var o = n.totalduration,
                    s = t.level,
                    l = t.sn,
                    u = this.config.defaultAudioCodec || i.audioCodec;
                this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), void 0 === u && (u = this.lastAudioCodec), u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, p.logger.log("Parsing " + l + " of [" + n.startSN + " ," + n.endSN + "],level " + s + ", cc " + t.cc);
                var h = this.demuxer;
                h || (h = this.demuxer = new d.default(this.hls, "main"));
                var c = this.media,
                    v = !(c && c.seeking) && (n.PTSKnown || !n.live),
                    g = n.initSegment ? n.initSegment.data : [];
                h.push(e.payload, g, u, i.videoCodec, t, o, v, void 0);
              }
            }

            this.fragLoadError = 0;
          }
        }, {
          key: "onFragParsingInitSegment",
          value: function value(e) {
            var t = this.fragCurrent,
                r = e.frag;

            if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === y.PARSING) {
              var a,
                  i,
                  n = e.tracks;

              if (n.audio && this.altAudio && delete n.audio, i = n.audio) {
                var o = this.levels[this.level].audioCodec,
                    s = navigator.userAgent.toLowerCase();
                o && this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== i.container && (o = "mp4a.40.2", p.logger.log("Android: force audio codec to " + o)), i.levelCodec = o, i.id = e.id;
              }

              (i = n.video) && (i.levelCodec = this.levels[this.level].videoCodec, i.id = e.id), this.hls.trigger(f.default.BUFFER_CODECS, n);

              for (a in n) {
                i = n[a], p.logger.log("main track:" + a + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                var l = i.initSegment;
                l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(f.default.BUFFER_APPENDING, {
                  type: a,
                  data: l,
                  parent: "main",
                  content: "initSegment"
                }));
              }

              this.tick();
            }
          }
        }, {
          key: "onFragParsingData",
          value: function value(e) {
            var t = this,
                r = this.fragCurrent,
                a = e.frag;

            if (r && "main" === e.id && a.sn === r.sn && a.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === y.PARSING) {
              var i = this.levels[this.level],
                  n = r;
              if (isNaN(e.endPTS) && (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), p.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type) if (n.dropped = e.dropped, n.dropped) {
                if (!n.backtracked) return p.logger.warn("missing video frame(s), backtracking fragment"), n.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = y.IDLE, this.fragPrevious = n, void this.tick();
                p.logger.warn("Already backtracked on this fragment, appending with the gap");
              } else n.backtracked = !1;
              var o = c.default.updateFragPTSDTS(i.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                  s = this.hls;
              s.trigger(f.default.LEVEL_PTS_UPDATED, {
                details: i.details,
                level: this.level,
                drift: o,
                type: e.type,
                start: e.startPTS,
                end: e.endPTS
              }), [e.data1, e.data2].forEach(function (r) {
                r && r.length && t.state === y.PARSING && (t.appended = !0, t.pendingBuffering = !0, s.trigger(f.default.BUFFER_APPENDING, {
                  type: e.type,
                  data: r,
                  parent: "main",
                  content: "data"
                }));
              }), this.tick();
            }
          }
        }, {
          key: "onFragParsed",
          value: function value(e) {
            var t = this.fragCurrent,
                r = e.frag;
            t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === y.PARSING && (this.stats.tparsed = performance.now(), this.state = y.PARSED, this._checkAppendedParsed());
          }
        }, {
          key: "onAudioTrackSwitching",
          value: function value(e) {
            var t = !!e.url,
                r = e.id;

            if (!t) {
              if (this.mediaBuffer !== this.media) {
                p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                var a = this.fragCurrent;
                a.loader && (p.logger.log("switching to main audio track, cancel main fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = y.IDLE;
              }

              var i = this.hls;
              i.trigger(f.default.BUFFER_FLUSHING, {
                startOffset: 0,
                endOffset: Number.POSITIVE_INFINITY,
                type: "audio"
              }), i.trigger(f.default.AUDIO_TRACK_SWITCHED, {
                id: r
              }), this.altAudio = !1;
            }
          }
        }, {
          key: "onAudioTrackSwitched",
          value: function value(e) {
            var t = e.id,
                r = !!this.hls.audioTracks[t].url;

            if (r) {
              var a = this.videoBuffer;
              a && this.mediaBuffer !== a && (p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = a);
            }

            this.altAudio = r, this.tick();
          }
        }, {
          key: "onBufferCreated",
          value: function value(e) {
            var t = e.tracks,
                r = void 0,
                a = void 0,
                i = !1;

            for (var n in t) {
              var o = t[n];
              "main" === o.id ? (a = n, r = o, "video" === n && (this.videoBuffer = t[n].buffer)) : i = !0;
            }

            i && r ? (p.logger.log("alternate track found, use " + a + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media;
          }
        }, {
          key: "onBufferAppended",
          value: function value(e) {
            if ("main" === e.parent) {
              var t = this.state;
              t !== y.PARSING && t !== y.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed());
            }
          }
        }, {
          key: "_checkAppendedParsed",
          value: function value() {
            if (!(this.state !== y.PARSED || this.appended && this.pendingBuffering)) {
              var e = this.fragCurrent;

              if (e) {
                var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                p.logger.log("main buffered : " + v.default.toString(t.buffered));

                var r = this._bufferedFrags.filter(function (e) {
                  return u.default.isBuffered(t, (e.startPTS + e.endPTS) / 2);
                });

                r.push(e), this._bufferedFrags = r.sort(function (e, t) {
                  return e.startPTS - t.startPTS;
                }), this.fragPrevious = e;
                var a = this.stats;
                a.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * a.total / (a.tbuffered - a.tfirst)), this.hls.trigger(f.default.FRAG_BUFFERED, {
                  stats: a,
                  frag: e,
                  id: "main"
                }), this.state = y.IDLE;
              }

              this.tick();
            }
          }
        }, {
          key: "onError",
          value: function value(e) {
            var t = e.frag || this.fragCurrent;

            if (!t || "main" === t.type) {
              var r = this.media,
                  a = r && u.default.isBuffered(r, r.currentTime) && u.default.isBuffered(r, r.currentTime + .5);

              switch (e.details) {
                case g.ErrorDetails.FRAG_LOAD_ERROR:
                case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case g.ErrorDetails.KEY_LOAD_ERROR:
                case g.ErrorDetails.KEY_LOAD_TIMEOUT:
                  if (!e.fatal) {
                    var i = this.fragLoadError;
                    i ? i++ : i = 1;
                    var n = this.config;

                    if (i <= n.fragLoadingMaxRetry || a || t.autoLevel && t.level) {
                      this.fragLoadError = i, t.loadCounter = 0;
                      var o = Math.min(Math.pow(2, i - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                      p.logger.warn("mediaController: frag loading failed, retry in " + o + " ms"), this.retryDate = performance.now() + o, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.state = y.FRAG_LOADING_WAITING_RETRY;
                    } else p.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = y.ERROR;
                  }

                  break;

                case g.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                  e.fatal || (a ? (this._reduceMaxBufferLength(t.duration), this.state = y.IDLE) : t.autoLevel && 0 !== t.level || (e.fatal = !0, this.state = y.ERROR));
                  break;

                case g.ErrorDetails.LEVEL_LOAD_ERROR:
                case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  this.state !== y.ERROR && (e.fatal ? (this.state = y.ERROR, p.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== y.WAITING_LEVEL || (this.state = y.IDLE));
                  break;

                case g.ErrorDetails.BUFFER_FULL_ERROR:
                  "main" !== e.parent || this.state !== y.PARSING && this.state !== y.PARSED || (a ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = y.IDLE) : (p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)));
              }
            }
          }
        }, {
          key: "_reduceMaxBufferLength",
          value: function value(e) {
            var t = this.config;
            t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, p.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * t.fragLoadingLoopThreshold);
          }
        }, {
          key: "_checkBuffer",
          value: function value() {
            var e = this.media,
                t = this.config;

            if (e && e.readyState) {
              var r = e.currentTime,
                  a = this.mediaBuffer ? this.mediaBuffer : e,
                  i = a.buffered;

              if (!this.loadedmetadata && i.length) {
                this.loadedmetadata = !0;
                var n = e.seeking ? r : this.startPosition,
                    o = u.default.isBuffered(a, n),
                    s = i.start(0);
                (r !== n || !o && Math.abs(n - s) < t.maxSeekHole) && (p.logger.log("target start position:" + n), o || (n = s, p.logger.log("target start position not buffered, seek to buffered.start(0) " + n)), p.logger.log("adjust currentTime from " + r + " to " + n), e.currentTime = n);
              } else if (this.immediateSwitch) this.immediateLevelSwitchEnd();else {
                var l = u.default.bufferInfo(e, r, 0),
                    d = !(e.paused || e.ended || 0 === e.buffered.length);
                if (r !== this.lastCurrentTime) this.stallReported && (p.logger.warn("playback not stuck anymore @" + r + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;else if (d) {
                  var h = performance.now(),
                      c = this.hls;

                  if (this.stalled) {
                    var v = h - this.stalled,
                        y = l.len,
                        m = this.nudgeRetry || 0;

                    if (y <= .5 && v > 1e3 * t.lowBufferWatchdogPeriod) {
                      this.stallReported || (this.stallReported = !0, p.logger.warn("playback stalling in low buffer @" + r), c.trigger(f.default.ERROR, {
                        type: g.ErrorTypes.MEDIA_ERROR,
                        details: g.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: y
                      }));
                      var b = l.nextStart,
                          E = b - r;

                      if (b && E < t.maxSeekHole && E > 0) {
                        this.nudgeRetry = ++m;

                        var _ = m * t.nudgeOffset;

                        p.logger.log("adjust currentTime from " + e.currentTime + " to next buffered @ " + b + " + nudge " + _), e.currentTime = b + _, this.stalled = void 0, c.trigger(f.default.ERROR, {
                          type: g.ErrorTypes.MEDIA_ERROR,
                          details: g.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                          fatal: !1,
                          hole: b + _ - r
                        });
                      }
                    } else if (y > .5 && v > 1e3 * t.highBufferWatchdogPeriod) if (this.stallReported || (this.stallReported = !0, p.logger.warn("playback stalling in high buffer @" + r), c.trigger(f.default.ERROR, {
                      type: g.ErrorTypes.MEDIA_ERROR,
                      details: g.ErrorDetails.BUFFER_STALLED_ERROR,
                      fatal: !1,
                      buffer: y
                    })), this.stalled = void 0, this.nudgeRetry = ++m, m < t.nudgeMaxRetry) {
                      var T = e.currentTime,
                          R = T + m * t.nudgeOffset;
                      p.logger.log("adjust currentTime from " + T + " to " + R), e.currentTime = R, c.trigger(f.default.ERROR, {
                        type: g.ErrorTypes.MEDIA_ERROR,
                        details: g.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                        fatal: !1
                      });
                    } else p.logger.error("still stuck in high buffer @" + r + " after " + t.nudgeMaxRetry + ", raise fatal error"), c.trigger(f.default.ERROR, {
                      type: g.ErrorTypes.MEDIA_ERROR,
                      details: g.ErrorDetails.BUFFER_STALLED_ERROR,
                      fatal: !0
                    });
                  } else this.stalled = h, this.stallReported = !1;
                }
              }
            }
          }
        }, {
          key: "onFragLoadEmergencyAborted",
          value: function value() {
            this.state = y.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick();
          }
        }, {
          key: "onBufferFlushed",
          value: function value() {
            var e = this.mediaBuffer ? this.mediaBuffer : this.media;
            this._bufferedFrags = this._bufferedFrags.filter(function (t) {
              return u.default.isBuffered(e, (t.startPTS + t.endPTS) / 2);
            }), this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = y.IDLE, this.fragPrevious = null;
          }
        }, {
          key: "swapAudioCodec",
          value: function value() {
            this.audioCodecSwap = !this.audioCodecSwap;
          }
        }, {
          key: "computeLivePosition",
          value: function value(e, t) {
            var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
            return e + Math.max(0, t.totalduration - r);
          }
        }, {
          key: "state",
          set: function set(e) {
            if (this.state !== e) {
              var t = this.state;
              this._state = e, p.logger.log("main stream:" + t + "->" + e), this.hls.trigger(f.default.STREAM_STATE_TRANSITION, {
                previousState: t,
                nextState: e
              });
            }
          },
          get: function get() {
            return this._state;
          }
        }, {
          key: "currentLevel",
          get: function get() {
            var e = this.media;

            if (e) {
              var t = this.getBufferedFrag(e.currentTime);
              if (t) return t.level;
            }

            return -1;
          }
        }, {
          key: "nextBufferedFrag",
          get: function get() {
            var e = this.media;
            return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null;
          }
        }, {
          key: "nextLevel",
          get: function get() {
            var e = this.nextBufferedFrag;
            return e ? e.level : -1;
          }
        }, {
          key: "liveSyncPosition",
          get: function get() {
            return this._liveSyncPosition;
          },
          set: function set(e) {
            this._liveSyncPosition = e;
          }
        }]), t;
      }(h.default);

      r.default = m;
    }, {
      20: 20,
      28: 28,
      29: 29,
      30: 30,
      32: 32,
      33: 33,
      43: 43,
      46: 46,
      47: 47
    }],
    12: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e(t, r) {
          a(this, e), this.subtle = t, this.aesIV = r;
        }

        return i(e, [{
          key: "decrypt",
          value: function value(e, t) {
            return this.subtle.decrypt({
              name: "AES-CBC",
              iv: this.aesIV
            }, t, e);
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    13: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e() {
          a(this, e), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable();
        }

        return i(e, [{
          key: "uint8ArrayToUint32Array_",
          value: function value(e) {
            for (var t = new DataView(e), r = new Uint32Array(4), a = 0; a < 4; a++) {
              r[a] = t.getUint32(4 * a);
            }

            return r;
          }
        }, {
          key: "initTable",
          value: function value() {
            var e = this.sBox,
                t = this.invSBox,
                r = this.subMix,
                a = r[0],
                i = r[1],
                n = r[2],
                o = r[3],
                s = this.invSubMix,
                l = s[0],
                u = s[1],
                d = s[2],
                f = s[3],
                h = new Uint32Array(256),
                c = 0,
                v = 0,
                g = 0;

            for (g = 0; g < 256; g++) {
              h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
            }

            for (g = 0; g < 256; g++) {
              var p = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
              p = p >>> 8 ^ 255 & p ^ 99, e[c] = p, t[p] = c;
              var y = h[c],
                  m = h[y],
                  b = h[m],
                  E = 257 * h[p] ^ 16843008 * p;
              a[c] = E << 24 | E >>> 8, i[c] = E << 16 | E >>> 16, n[c] = E << 8 | E >>> 24, o[c] = E, E = 16843009 * b ^ 65537 * m ^ 257 * y ^ 16843008 * c, l[p] = E << 24 | E >>> 8, u[p] = E << 16 | E >>> 16, d[p] = E << 8 | E >>> 24, f[p] = E, c ? (c = y ^ h[h[h[b ^ y]]], v ^= h[h[v]]) : c = v = 1;
            }
          }
        }, {
          key: "expandKey",
          value: function value(e) {
            for (var t = this.uint8ArrayToUint32Array_(e), r = !0, a = 0; a < t.length && r;) {
              r = t[a] === this.key[a], a++;
            }

            if (!r) {
              this.key = t;
              var i = this.keySize = t.length;
              if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
              var n = this.ksRows = 4 * (i + 6 + 1),
                  o = void 0,
                  s = void 0,
                  l = this.keySchedule = new Uint32Array(n),
                  u = this.invKeySchedule = new Uint32Array(n),
                  d = this.sBox,
                  f = this.rcon,
                  h = this.invSubMix,
                  c = h[0],
                  v = h[1],
                  g = h[2],
                  p = h[3],
                  y = void 0,
                  m = void 0;

              for (o = 0; o < n; o++) {
                o < i ? y = l[o] = t[o] : (m = y, o % i == 0 ? (m = d[(m = m << 8 | m >>> 24) >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m], m ^= f[o / i | 0] << 24) : i > 6 && o % i == 4 && (m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m]), l[o] = y = (l[o - i] ^ m) >>> 0);
              }

              for (s = 0; s < n; s++) {
                o = n - s, m = 3 & s ? l[o] : l[o - 4], u[s] = s < 4 || o <= 4 ? m : c[d[m >>> 24]] ^ v[d[m >>> 16 & 255]] ^ g[d[m >>> 8 & 255]] ^ p[d[255 & m]], u[s] = u[s] >>> 0;
              }
            }
          }
        }, {
          key: "networkToHostOrderSwap",
          value: function value(e) {
            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24;
          }
        }, {
          key: "decrypt",
          value: function value(e, t, r) {
            for (var a, i, n = this.keySize + 6, o = this.invKeySchedule, s = this.invSBox, l = this.invSubMix, u = l[0], d = l[1], f = l[2], h = l[3], c = this.uint8ArrayToUint32Array_(r), v = c[0], g = c[1], p = c[2], y = c[3], m = new Int32Array(e), b = new Int32Array(m.length), E = void 0, _ = void 0, T = void 0, R = void 0, A = void 0, S = void 0, k = void 0, L = void 0, w = void 0, D = void 0, O = void 0, P = void 0, x = this.networkToHostOrderSwap; t < m.length;) {
              for (w = x(m[t]), D = x(m[t + 1]), O = x(m[t + 2]), P = x(m[t + 3]), A = w ^ o[0], S = P ^ o[1], k = O ^ o[2], L = D ^ o[3], a = 4, i = 1; i < n; i++) {
                E = u[A >>> 24] ^ d[S >> 16 & 255] ^ f[k >> 8 & 255] ^ h[255 & L] ^ o[a], _ = u[S >>> 24] ^ d[k >> 16 & 255] ^ f[L >> 8 & 255] ^ h[255 & A] ^ o[a + 1], T = u[k >>> 24] ^ d[L >> 16 & 255] ^ f[A >> 8 & 255] ^ h[255 & S] ^ o[a + 2], R = u[L >>> 24] ^ d[A >> 16 & 255] ^ f[S >> 8 & 255] ^ h[255 & k] ^ o[a + 3], A = E, S = _, k = T, L = R, a += 4;
              }

              E = s[A >>> 24] << 24 ^ s[S >> 16 & 255] << 16 ^ s[k >> 8 & 255] << 8 ^ s[255 & L] ^ o[a], _ = s[S >>> 24] << 24 ^ s[k >> 16 & 255] << 16 ^ s[L >> 8 & 255] << 8 ^ s[255 & A] ^ o[a + 1], T = s[k >>> 24] << 24 ^ s[L >> 16 & 255] << 16 ^ s[A >> 8 & 255] << 8 ^ s[255 & S] ^ o[a + 2], R = s[L >>> 24] << 24 ^ s[A >> 16 & 255] << 16 ^ s[S >> 8 & 255] << 8 ^ s[255 & k] ^ o[a + 3], a += 3, b[t] = x(E ^ v), b[t + 1] = x(R ^ g), b[t + 2] = x(T ^ p), b[t + 3] = x(_ ^ y), v = w, g = D, p = O, y = P, t += 4;
            }

            return b.buffer;
          }
        }, {
          key: "destroy",
          value: function value() {
            this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0;
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    14: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(12)),
          s = a(e(15)),
          l = a(e(13)),
          u = e(28),
          d = e(46),
          f = function () {
        function e(t, r) {
          i(this, e), this.observer = t, this.config = r, this.logEnabled = !0;

          try {
            var a = crypto || self.crypto;
            this.subtle = a.subtle || a.webkitSubtle;
          } catch (e) {}

          this.disableWebCrypto = !this.subtle;
        }

        return n(e, [{
          key: "isSync",
          value: function value() {
            return this.disableWebCrypto && this.config.enableSoftwareAES;
          }
        }, {
          key: "decrypt",
          value: function value(e, t, r, a) {
            var i = this;

            if (this.disableWebCrypto && this.config.enableSoftwareAES) {
              this.logEnabled && (d.logger.log("JS AES decrypt"), this.logEnabled = !1);
              var n = this.decryptor;
              n || (this.decryptor = n = new l.default()), n.expandKey(t), a(n.decrypt(e, 0, r));
            } else {
              this.logEnabled && (d.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
              var u = this.subtle;
              this.key !== t && (this.key = t, this.fastAesKey = new s.default(u, t)), this.fastAesKey.expandKey().then(function (n) {
                new o.default(u, r).decrypt(e, n).catch(function (n) {
                  i.onWebCryptoError(n, e, t, r, a);
                }).then(function (e) {
                  a(e);
                });
              }).catch(function (n) {
                i.onWebCryptoError(n, e, t, r, a);
              });
            }
          }
        }, {
          key: "onWebCryptoError",
          value: function value(e, t, r, a, i) {
            this.config.enableSoftwareAES ? (d.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, a, i)) : (d.logger.error("decrypting error : " + e.message), this.observer.trigger(Event.ERROR, {
              type: u.ErrorTypes.MEDIA_ERROR,
              details: u.ErrorDetails.FRAG_DECRYPT_ERROR,
              fatal: !0,
              reason: e.message
            }));
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = this.decryptor;
            e && (e.destroy(), this.decryptor = void 0);
          }
        }]), e;
      }();

      r.default = f;
    }, {
      12: 12,
      13: 13,
      15: 15,
      28: 28,
      46: 46
    }],
    15: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e(t, r) {
          a(this, e), this.subtle = t, this.key = r;
        }

        return i(e, [{
          key: "expandKey",
          value: function value() {
            return this.subtle.importKey("raw", this.key, {
              name: "AES-CBC"
            }, !1, ["encrypt", "decrypt"]);
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    16: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(17)),
          s = e(46),
          l = a(e(22)),
          u = function () {
        function e(t, r, a) {
          i(this, e), this.observer = t, this.config = a, this.remuxer = r;
        }

        return n(e, [{
          key: "resetInitSegment",
          value: function value(e, t, r, a) {
            this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: -1,
              sequenceNumber: 0,
              isAAC: !0,
              samples: [],
              len: 0,
              manifestCodec: t,
              duration: a,
              inputTimeScale: 9e4
            };
          }
        }, {
          key: "resetTimeStamp",
          value: function value() {}
        }, {
          key: "append",
          value: function value(e, t, r, a) {
            for (var i = this._audioTrack, n = l.default.getID3Data(e, 0), u = 90 * l.default.getTimeStamp(n), d = 0, f = u, h = e.length, c = n.length, v = [{
              pts: f,
              dts: f,
              data: n
            }]; c < h - 1;) {
              if (o.default.isHeader(e, c) && c + 5 < h) {
                o.default.initTrackConfig(i, this.observer, e, c, i.manifestCodec);
                var g = o.default.appendFrame(i, e, c, u, d);

                if (!g) {
                  s.logger.log("Unable to parse AAC frame");
                  break;
                }

                c += g.length, f = g.sample.pts, d++;
              } else l.default.isHeader(e, c) ? (n = l.default.getID3Data(e, c), v.push({
                pts: f,
                dts: f,
                data: n
              }), c += n.length) : c++;
            }

            this.remuxer.remux(i, {
              samples: []
            }, {
              samples: v,
              inputTimeScale: 9e4
            }, {
              samples: []
            }, t, r, a);
          }
        }, {
          key: "destroy",
          value: function value() {}
        }], [{
          key: "probe",
          value: function value(e) {
            var t,
                r,
                a = l.default.getID3Data(e, 0);
            if (a && void 0 !== l.default.getTimeStamp(a)) for (t = a.length, r = Math.min(e.length - 1, t + 100); t < r; t++) {
              if (o.default.probe(e, t)) return s.logger.log("ADTS sync word found !"), !0;
            }
            return !1;
          }
        }]), e;
      }();

      r.default = u;
    }, {
      17: 17,
      22: 22,
      46: 46
    }],
    17: [function (e, t, r) {
      "use strict";

      var a = e(46),
          i = e(28),
          n = {
        getAudioConfig: function getAudioConfig(e, t, r, n) {
          var o,
              s,
              l,
              u,
              d,
              f = navigator.userAgent.toLowerCase(),
              h = n,
              c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
          if (o = 1 + ((192 & t[r + 2]) >>> 6), !((s = (60 & t[r + 2]) >>> 2) > c.length - 1)) return u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, a.logger.log("manifest codec:" + n + ",ADTS data:type:" + o + ",sampleingIndex:" + s + "[" + c[s] + "Hz],channelConfig:" + u), /firefox/i.test(f) ? s >= 6 ? (o = 5, d = new Array(4), l = s - 3) : (o = 2, d = new Array(2), l = s) : -1 !== f.indexOf("android") ? (o = 2, d = new Array(2), l = s) : (o = 5, d = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && s >= 6 ? l = s - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (s >= 6 && 1 === u || /vivaldi/i.test(f)) || !n && 1 === u) && (o = 2, d = new Array(2)), l = s)), d[0] = o << 3, d[0] |= (14 & s) >> 1, d[1] |= (1 & s) << 7, d[1] |= u << 3, 5 === o && (d[1] |= (14 & l) >> 1, d[2] = (1 & l) << 7, d[2] |= 8, d[3] = 0), {
            config: d,
            samplerate: c[s],
            channelCount: u,
            codec: "mp4a.40." + o,
            manifestCodec: h
          };
          e.trigger(Event.ERROR, {
            type: i.ErrorTypes.MEDIA_ERROR,
            details: i.ErrorDetails.FRAG_PARSING_ERROR,
            fatal: !0,
            reason: "invalid ADTS sampling index:" + s
          });
        },
        isHeaderPattern: function isHeaderPattern(e, t) {
          return 255 === e[t] && 240 == (246 & e[t + 1]);
        },
        getHeaderLength: function getHeaderLength(e, t) {
          return 1 & e[t + 1] ? 7 : 9;
        },
        getFullFrameLength: function getFullFrameLength(e, t) {
          return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5;
        },
        isHeader: function isHeader(e, t) {
          return !!(t + 1 < e.length && this.isHeaderPattern(e, t));
        },
        probe: function probe(e, t) {
          if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
            var r = this.getHeaderLength(e, t);
            t + 5 < e.length && (r = this.getFullFrameLength(e, t));
            var a = t + r;
            if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return !0;
          }

          return !1;
        },
        initTrackConfig: function initTrackConfig(e, t, r, i, n) {
          if (!e.samplerate) {
            var o = this.getAudioConfig(t, r, i, n);
            e.config = o.config, e.samplerate = o.samplerate, e.channelCount = o.channelCount, e.codec = o.codec, e.manifestCodec = o.manifestCodec, a.logger.log("parsed codec:" + e.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount);
          }
        },
        getFrameDuration: function getFrameDuration(e) {
          return 9216e4 / e;
        },
        appendFrame: function appendFrame(e, t, r, a, i) {
          var n = this.getFrameDuration(e.samplerate),
              o = this.parseFrameHeader(t, r, a, i, n);

          if (o) {
            var s = o.stamp,
                l = o.headerLength,
                u = o.frameLength,
                d = {
              unit: t.subarray(r + l, r + l + u),
              pts: s,
              dts: s
            };
            return e.samples.push(d), e.len += u, {
              sample: d,
              length: u + l
            };
          }
        },
        parseFrameHeader: function parseFrameHeader(e, t, r, a, i) {
          var n,
              o,
              s,
              l = e.length;
          if (n = this.getHeaderLength(e, t), o = this.getFullFrameLength(e, t), (o -= n) > 0 && t + n + o <= l) return s = r + a * i, {
            headerLength: n,
            frameLength: o,
            stamp: s
          };
        }
      };
      t.exports = n;
    }, {
      28: 28,
      46: 46
    }],
    18: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(30)),
          s = e(28),
          l = a(e(14)),
          u = a(e(16)),
          d = a(e(24)),
          f = a(e(27)),
          h = a(e(23)),
          c = a(e(40)),
          v = a(e(41)),
          g = function () {
        function e(t, r, a, n) {
          i(this, e), this.observer = t, this.typeSupported = r, this.config = a, this.vendor = n;
        }

        return n(e, [{
          key: "destroy",
          value: function value() {
            var e = this.demuxer;
            e && e.destroy();
          }
        }, {
          key: "push",
          value: function value(e, t, r, a, i, n, s, u, d, f, h, c) {
            if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
              var v = this.decrypter;
              null == v && (v = this.decrypter = new l.default(this.observer, this.config));
              var g,
                  p = this;

              try {
                g = performance.now();
              } catch (e) {
                g = Date.now();
              }

              v.decrypt(e, t.key.buffer, t.iv.buffer, function (e) {
                var l;

                try {
                  l = performance.now();
                } catch (e) {
                  l = Date.now();
                }

                p.observer.trigger(o.default.FRAG_DECRYPTED, {
                  stats: {
                    tstart: g,
                    tdecrypt: l
                  }
                }), p.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, i, n, s, u, d, f, h, c);
              });
            } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, i, n, s, u, d, f, h, c);
          }
        }, {
          key: "pushDecrypted",
          value: function value(e, t, r, a, i, n, l, g, p, y, m, b) {
            var E = this.demuxer;

            if (!E || l && !this.probe(e)) {
              for (var _ = this.observer, T = this.typeSupported, R = this.config, A = [{
                demux: u.default,
                remux: c.default
              }, {
                demux: h.default,
                remux: c.default
              }, {
                demux: f.default,
                remux: c.default
              }, {
                demux: d.default,
                remux: v.default
              }], S = 0, k = A.length; S < k; S++) {
                var L = A[S],
                    w = L.demux.probe;

                if (w(e)) {
                  var D = this.remuxer = new L.remux(_, R, T, this.vendor);
                  E = new L.demux(_, D, R, T), this.probe = w;
                  break;
                }
              }

              if (!E) return void _.trigger(o.default.ERROR, {
                type: s.ErrorTypes.MEDIA_ERROR,
                details: s.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "no demux matching with content found"
              });
              this.demuxer = E;
            }

            var O = this.remuxer;
            (l || g) && (E.resetInitSegment(r, a, i, y), O.resetInitSegment()), l && (E.resetTimeStamp(b), O.resetTimeStamp(b)), "function" == typeof E.setDecryptData && E.setDecryptData(t), E.append(e, n, p, m);
          }
        }]), e;
      }();

      r.default = g;
    }, {
      14: 14,
      16: 16,
      23: 23,
      24: 24,
      27: 27,
      28: 28,
      30: 30,
      40: 40,
      41: 41
    }],
    19: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = a(e(18)),
          n = a(e(30)),
          o = e(46),
          s = a(e(1));

      r.default = function (e) {
        var t = new s.default();
        t.trigger = function (e) {
          for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
            a[i - 1] = arguments[i];
          }

          t.emit.apply(t, [e, e].concat(a));
        }, t.off = function (e) {
          for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
            a[i - 1] = arguments[i];
          }

          t.removeListener.apply(t, [e].concat(a));
        };

        var r = function r(t, _r) {
          e.postMessage({
            event: t,
            data: _r
          });
        };

        e.addEventListener("message", function (a) {
          var n = a.data;

          switch (n.cmd) {
            case "init":
              var s = JSON.parse(n.config);
              e.demuxer = new i.default(t, n.typeSupported, s, n.vendor);

              try {
                (0, o.enableLogs)(!0 === s.debug);
              } catch (e) {}

              r("init", null);
              break;

            case "demux":
              e.demuxer.push(n.data, n.decryptdata, n.initSegment, n.audioCodec, n.videoCodec, n.timeOffset, n.discontinuity, n.trackSwitch, n.contiguous, n.duration, n.accurateTimeOffset, n.defaultInitPTS);
          }
        }), t.on(n.default.FRAG_DECRYPTED, r), t.on(n.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(n.default.FRAG_PARSED, r), t.on(n.default.ERROR, r), t.on(n.default.FRAG_PARSING_METADATA, r), t.on(n.default.FRAG_PARSING_USERDATA, r), t.on(n.default.INIT_PTS_FOUND, r), t.on(n.default.FRAG_PARSING_DATA, function (t, r) {
          var a = [],
              i = {
            event: t,
            data: r
          };
          r.data1 && (i.data1 = r.data1.buffer, a.push(r.data1.buffer), delete r.data1), r.data2 && (i.data2 = r.data2.buffer, a.push(r.data2.buffer), delete r.data2), e.postMessage(i, a);
        });
      };
    }, {
      1: 1,
      18: 18,
      30: 30,
      46: 46
    }],
    20: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(30)),
          s = a(e(18)),
          l = a(e(19)),
          u = e(46),
          d = e(28),
          f = a(e(1)),
          h = function () {
        function t(r, a) {
          i(this, t), this.hls = r, this.id = a;
          var n = this.observer = new f.default(),
              h = r.config;
          n.trigger = function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
              r[a - 1] = arguments[a];
            }

            n.emit.apply(n, [e, e].concat(r));
          }, n.off = function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
              r[a - 1] = arguments[a];
            }

            n.removeListener.apply(n, [e].concat(r));
          };

          var c = function (e, t) {
            (t = t || {}).frag = this.frag, t.id = this.id, r.trigger(e, t);
          }.bind(this);

          n.on(o.default.FRAG_DECRYPTED, c), n.on(o.default.FRAG_PARSING_INIT_SEGMENT, c), n.on(o.default.FRAG_PARSING_DATA, c), n.on(o.default.FRAG_PARSED, c), n.on(o.default.ERROR, c), n.on(o.default.FRAG_PARSING_METADATA, c), n.on(o.default.FRAG_PARSING_USERDATA, c), n.on(o.default.INIT_PTS_FOUND, c);
          var v = {
            mp4: MediaSource.isTypeSupported("video/mp4"),
            mpeg: MediaSource.isTypeSupported("audio/mpeg"),
            mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')
          },
              g = navigator.vendor;

          if (h.enableWorker && "undefined" != typeof Worker) {
            u.logger.log("demuxing in webworker");
            var p = void 0;

            try {
              var y = e(3);
              p = this.w = y(l.default), this.onwmsg = this.onWorkerMessage.bind(this), p.addEventListener("message", this.onwmsg), p.onerror = function (e) {
                r.trigger(o.default.ERROR, {
                  type: d.ErrorTypes.OTHER_ERROR,
                  details: d.ErrorDetails.INTERNAL_EXCEPTION,
                  fatal: !0,
                  event: "demuxerWorker",
                  err: {
                    message: e.message + " (" + e.filename + ":" + e.lineno + ")"
                  }
                });
              }, p.postMessage({
                cmd: "init",
                typeSupported: v,
                vendor: g,
                id: a,
                config: JSON.stringify(h)
              });
            } catch (e) {
              u.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), p && URL.revokeObjectURL(p.objectURL), this.demuxer = new s.default(n, v, h, g), this.w = void 0;
            }
          } else this.demuxer = new s.default(n, v, h, g);
        }

        return n(t, [{
          key: "destroy",
          value: function value() {
            var e = this.w;
            if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;else {
              var t = this.demuxer;
              t && (t.destroy(), this.demuxer = null);
            }
            var r = this.observer;
            r && (r.removeAllListeners(), this.observer = null);
          }
        }, {
          key: "push",
          value: function value(e, t, r, a, i, n, o, s) {
            var l = this.w,
                d = isNaN(i.startDTS) ? i.start : i.startDTS,
                f = i.decryptdata,
                h = this.frag,
                c = !(h && i.cc === h.cc),
                v = !(h && i.level === h.level),
                g = h && i.sn === h.sn + 1,
                p = !v && g;
            if (c && u.logger.log(this.id + ":discontinuity detected"), v && u.logger.log(this.id + ":switch detected"), this.frag = i, l) l.postMessage({
              cmd: "demux",
              data: e,
              decryptdata: f,
              initSegment: t,
              audioCodec: r,
              videoCodec: a,
              timeOffset: d,
              discontinuity: c,
              trackSwitch: v,
              contiguous: p,
              duration: n,
              accurateTimeOffset: o,
              defaultInitPTS: s
            }, [e]);else {
              var y = this.demuxer;
              y && y.push(e, f, t, r, a, d, c, v, p, n, o, s);
            }
          }
        }, {
          key: "onWorkerMessage",
          value: function value(e) {
            var t = e.data,
                r = this.hls;

            switch (t.event) {
              case "init":
                URL.revokeObjectURL(this.w.objectURL);
                break;

              case o.default.FRAG_PARSING_DATA:
                t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));

              default:
                t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data);
            }
          }
        }]), t;
      }();

      r.default = h;
    }, {
      1: 1,
      18: 18,
      19: 19,
      28: 28,
      3: 3,
      30: 30,
      46: 46
    }],
    21: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = e(46),
          o = function () {
        function e(t) {
          a(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0;
        }

        return i(e, [{
          key: "loadWord",
          value: function value() {
            var e = this.data,
                t = this.bytesAvailable,
                r = e.byteLength - t,
                a = new Uint8Array(4),
                i = Math.min(4, t);
            if (0 === i) throw new Error("no bytes available");
            a.set(e.subarray(r, r + i)), this.word = new DataView(a.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i;
          }
        }, {
          key: "skipBits",
          value: function value(e) {
            var t;
            this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
          }
        }, {
          key: "readBits",
          value: function value(e) {
            var t = Math.min(this.bitsAvailable, e),
                r = this.word >>> 32 - t;
            return e > 32 && n.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r;
          }
        }, {
          key: "skipLZ",
          value: function value() {
            var e;

            for (e = 0; e < this.bitsAvailable; ++e) {
              if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
            }

            return this.loadWord(), e + this.skipLZ();
          }
        }, {
          key: "skipUEG",
          value: function value() {
            this.skipBits(1 + this.skipLZ());
          }
        }, {
          key: "skipEG",
          value: function value() {
            this.skipBits(1 + this.skipLZ());
          }
        }, {
          key: "readUEG",
          value: function value() {
            var e = this.skipLZ();
            return this.readBits(e + 1) - 1;
          }
        }, {
          key: "readEG",
          value: function value() {
            var e = this.readUEG();
            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
          }
        }, {
          key: "readBoolean",
          value: function value() {
            return 1 === this.readBits(1);
          }
        }, {
          key: "readUByte",
          value: function value() {
            return this.readBits(8);
          }
        }, {
          key: "readUShort",
          value: function value() {
            return this.readBits(16);
          }
        }, {
          key: "readUInt",
          value: function value() {
            return this.readBits(32);
          }
        }, {
          key: "skipScalingList",
          value: function value(e) {
            var t,
                r = 8,
                a = 8;

            for (t = 0; t < e; t++) {
              0 !== a && (a = (r + this.readEG() + 256) % 256), r = 0 === a ? r : a;
            }
          }
        }, {
          key: "readSPS",
          value: function value() {
            var e,
                t,
                r,
                a,
                i,
                n,
                o,
                s = 0,
                l = 0,
                u = 0,
                d = 0,
                f = this.readUByte.bind(this),
                h = this.readBits.bind(this),
                c = this.readUEG.bind(this),
                v = this.readBoolean.bind(this),
                g = this.skipBits.bind(this),
                p = this.skipEG.bind(this),
                y = this.skipUEG.bind(this),
                m = this.skipScalingList.bind(this);

            if (f(), e = f(), h(5), g(3), f(), y(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
              var b = c();
              if (3 === b && g(1), y(), y(), g(1), v()) for (n = 3 !== b ? 8 : 12, o = 0; o < n; o++) {
                v() && m(o < 6 ? 16 : 64);
              }
            }

            y();
            var E = c();
            if (0 === E) c();else if (1 === E) for (g(1), p(), p(), t = c(), o = 0; o < t; o++) {
              p();
            }
            y(), g(1), r = c(), a = c(), 0 === (i = h(1)) && g(1), g(1), v() && (s = c(), l = c(), u = c(), d = c());
            var _ = [1, 1];
            if (v() && v()) switch (f()) {
              case 1:
                _ = [1, 1];
                break;

              case 2:
                _ = [12, 11];
                break;

              case 3:
                _ = [10, 11];
                break;

              case 4:
                _ = [16, 11];
                break;

              case 5:
                _ = [40, 33];
                break;

              case 6:
                _ = [24, 11];
                break;

              case 7:
                _ = [20, 11];
                break;

              case 8:
                _ = [32, 11];
                break;

              case 9:
                _ = [80, 33];
                break;

              case 10:
                _ = [18, 11];
                break;

              case 11:
                _ = [15, 11];
                break;

              case 12:
                _ = [64, 33];
                break;

              case 13:
                _ = [160, 99];
                break;

              case 14:
                _ = [4, 3];
                break;

              case 15:
                _ = [3, 2];
                break;

              case 16:
                _ = [2, 1];
                break;

              case 255:
                _ = [f() << 8 | f(), f() << 8 | f()];
            }
            return {
              width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l),
              height: (2 - i) * (a + 1) * 16 - (i ? 2 : 4) * (u + d),
              pixelRatio: _
            };
          }
        }, {
          key: "readSliceType",
          value: function value() {
            return this.readUByte(), this.readUEG(), this.readUEG();
          }
        }]), e;
      }();

      r.default = o;
    }, {
      46: 46
    }],
    22: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e() {
          a(this, e);
        }

        return i(e, null, [{
          key: "isHeader",
          value: function value(e, t) {
            return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128;
          }
        }, {
          key: "isFooter",
          value: function value(e, t) {
            return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128;
          }
        }, {
          key: "getID3Data",
          value: function value(t, r) {
            for (var a = r, i = 0; e.isHeader(t, r);) {
              i += 10, i += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (i += 10), r += i;
            }

            if (i > 0) return t.subarray(a, a + i);
          }
        }, {
          key: "_readSize",
          value: function value(e, t) {
            var r = 0;
            return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3];
          }
        }, {
          key: "getTimeStamp",
          value: function value(t) {
            for (var r = e.getID3Frames(t), a = 0; a < r.length; a++) {
              var i = r[a];
              if (e.isTimeStampFrame(i)) return e._readTimeStamp(i);
            }
          }
        }, {
          key: "isTimeStampFrame",
          value: function value(e) {
            return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info;
          }
        }, {
          key: "_getFrameData",
          value: function value(t) {
            var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                a = e._readSize(t, 4);

            return {
              type: r,
              size: a,
              data: t.subarray(10, 10 + a)
            };
          }
        }, {
          key: "getID3Frames",
          value: function value(t) {
            for (var r = 0, a = []; e.isHeader(t, r);) {
              for (var i = e._readSize(t, r + 6), n = (r += 10) + i; r + 8 < n;) {
                var o = e._getFrameData(t.subarray(r)),
                    s = e._decodeFrame(o);

                s && a.push(s), r += o.size + 10;
              }

              e.isFooter(t, r) && (r += 10);
            }

            return a;
          }
        }, {
          key: "_decodeFrame",
          value: function value(t) {
            return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0;
          }
        }, {
          key: "_readTimeStamp",
          value: function value(e) {
            if (8 === e.data.byteLength) {
              var t = new Uint8Array(e.data),
                  r = 1 & t[3],
                  a = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
              return a /= 45, r && (a += 47721858.84), Math.round(a);
            }
          }
        }, {
          key: "_decodePrivFrame",
          value: function value(t) {
            if (!(t.size < 2)) {
              var r = e._utf8ArrayToStr(t.data),
                  a = new Uint8Array(t.data.subarray(r.length + 1));

              return {
                key: t.type,
                info: r,
                data: a.buffer
              };
            }
          }
        }, {
          key: "_decodeTextFrame",
          value: function value(t) {
            if (!(t.size < 2)) {
              if ("TXXX" === t.type) {
                var r = 1,
                    a = e._utf8ArrayToStr(t.data.subarray(r));

                r += a.length + 1;

                var i = e._utf8ArrayToStr(t.data.subarray(r));

                return {
                  key: t.type,
                  info: a,
                  data: i
                };
              }

              var n = e._utf8ArrayToStr(t.data.subarray(1));

              return {
                key: t.type,
                data: n
              };
            }
          }
        }, {
          key: "_decodeURLFrame",
          value: function value(t) {
            if ("WXXX" === t.type) {
              if (t.size < 2) return;

              var r = 1,
                  a = e._utf8ArrayToStr(t.data.subarray(r));

              r += a.length + 1;

              var i = e._utf8ArrayToStr(t.data.subarray(r));

              return {
                key: t.type,
                info: a,
                data: i
              };
            }

            var n = e._utf8ArrayToStr(t.data);

            return {
              key: t.type,
              data: n
            };
          }
        }, {
          key: "_utf8ArrayToStr",
          value: function value(e) {
            for (var t = void 0, r = void 0, a = "", i = 0, n = e.length; i < n;) {
              var o = e[i++];

              switch (o >> 4) {
                case 0:
                  return a;

                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  a += String.fromCharCode(o);
                  break;

                case 12:
                case 13:
                  t = e[i++], a += String.fromCharCode((31 & o) << 6 | 63 & t);
                  break;

                case 14:
                  t = e[i++], r = e[i++], a += String.fromCharCode((15 & o) << 12 | (63 & t) << 6 | (63 & r) << 0);
              }
            }

            return a;
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    23: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(22)),
          s = e(46),
          l = a(e(25)),
          u = function () {
        function e(t, r, a) {
          i(this, e), this.observer = t, this.config = a, this.remuxer = r;
        }

        return n(e, [{
          key: "resetInitSegment",
          value: function value(e, t, r, a) {
            this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: -1,
              sequenceNumber: 0,
              isAAC: !1,
              samples: [],
              len: 0,
              manifestCodec: t,
              duration: a,
              inputTimeScale: 9e4
            };
          }
        }, {
          key: "resetTimeStamp",
          value: function value() {}
        }, {
          key: "append",
          value: function value(e, t, r, a) {
            for (var i = o.default.getID3Data(e, 0), n = 90 * o.default.getTimeStamp(i), s = i.length, u = e.length, d = 0, f = 0, h = this._audioTrack, c = [{
              pts: n,
              dts: n,
              data: i
            }]; s < u;) {
              if (l.default.isHeader(e, s)) {
                var v = l.default.appendFrame(h, e, s, n, d);
                if (!v) break;
                s += v.length, f = v.sample.pts, d++;
              } else o.default.isHeader(e, s) ? (i = o.default.getID3Data(e, s), c.push({
                pts: f,
                dts: f,
                data: i
              }), s += i.length) : s++;
            }

            this.remuxer.remux(h, {
              samples: []
            }, {
              samples: c,
              inputTimeScale: 9e4
            }, {
              samples: []
            }, t, r, a);
          }
        }, {
          key: "destroy",
          value: function value() {}
        }], [{
          key: "probe",
          value: function value(e) {
            var t,
                r,
                a = o.default.getID3Data(e, 0);
            if (a && void 0 !== o.default.getTimeStamp(a)) for (t = a.length, r = Math.min(e.length - 1, t + 100); t < r; t++) {
              if (l.default.probe(e, t)) return s.logger.log("MPEG Audio sync word found !"), !0;
            }
            return !1;
          }
        }]), e;
      }();

      r.default = u;
    }, {
      22: 22,
      25: 25,
      46: 46
    }],
    24: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(e(30)),
          o = Math.pow(2, 32) - 1,
          s = function () {
        function e(t, r) {
          a(this, e), this.observer = t, this.remuxer = r;
        }

        return i(e, [{
          key: "resetTimeStamp",
          value: function value(e) {
            this.initPTS = e;
          }
        }, {
          key: "resetInitSegment",
          value: function value(t, r, a, i) {
            if (t && t.byteLength) {
              var o = this.initData = e.parseInitSegment(t),
                  s = {};
              o.audio && (s.audio = {
                container: "audio/mp4",
                codec: r,
                initSegment: i ? t : null
              }), o.video && (s.video = {
                container: "video/mp4",
                codec: a,
                initSegment: i ? t : null
              }), this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, {
                tracks: s
              });
            } else r && (this.audioCodec = r), a && (this.videoCodec = a);
          }
        }, {
          key: "append",
          value: function value(t, r, a, i) {
            var o = this.initData;
            o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec), o = this.initData);
            var s = void 0,
                l = this.initPTS;

            if (void 0 === l) {
              var u = e.getStartDTS(o, t);
              this.initPTS = l = u - r, this.observer.trigger(n.default.INIT_PTS_FOUND, {
                initPTS: l
              });
            }

            e.offsetStartDTS(o, t, l), s = e.getStartDTS(o, t), this.remuxer.remux(o.audio, o.video, null, null, s, a, i, t);
          }
        }, {
          key: "destroy",
          value: function value() {}
        }], [{
          key: "probe",
          value: function value(t) {
            if (t.length >= 8) {
              var r = e.bin2str(t.subarray(4, 8));
              return ["moof", "ftyp", "styp"].indexOf(r) >= 0;
            }

            return !1;
          }
        }, {
          key: "bin2str",
          value: function value(e) {
            return String.fromCharCode.apply(null, e);
          }
        }, {
          key: "readUint32",
          value: function value(e, t) {
            e.data && (t += e.start, e = e.data);
            var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
            return r < 0 ? 4294967296 + r : r;
          }
        }, {
          key: "writeUint32",
          value: function value(e, t, r) {
            e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r;
          }
        }, {
          key: "findBox",
          value: function value(t, r) {
            var a,
                i,
                n,
                o,
                s,
                l,
                u,
                d = [];
            if (t.data ? (l = t.start, o = t.end, t = t.data) : (l = 0, o = t.byteLength), !r.length) return null;

            for (a = l; a < o;) {
              i = e.readUint32(t, a), n = e.bin2str(t.subarray(a + 4, a + 8)), u = i > 1 ? a + i : o, n === r[0] && (1 === r.length ? d.push({
                data: t,
                start: a + 8,
                end: u
              }) : (s = e.findBox({
                data: t,
                start: a + 8,
                end: u
              }, r.slice(1))).length && (d = d.concat(s))), a = u;
            }

            return d;
          }
        }, {
          key: "parseInitSegment",
          value: function value(t) {
            var r = [];
            return e.findBox(t, ["moov", "trak"]).forEach(function (t) {
              var a = e.findBox(t, ["tkhd"])[0];

              if (a) {
                var i = a.data[a.start],
                    n = 0 === i ? 12 : 20,
                    o = e.readUint32(a, n),
                    s = e.findBox(t, ["mdia", "mdhd"])[0];

                if (s) {
                  n = 0 === (i = s.data[s.start]) ? 12 : 20;
                  var l = e.readUint32(s, n),
                      u = e.findBox(t, ["mdia", "hdlr"])[0];

                  if (u) {
                    var d = {
                      soun: "audio",
                      vide: "video"
                    }[e.bin2str(u.data.subarray(u.start + 8, u.start + 12))];
                    d && (r[o] = {
                      timescale: l,
                      type: d
                    }, r[d] = {
                      timescale: l,
                      id: o
                    });
                  }
                }
              }
            }), r;
          }
        }, {
          key: "getStartDTS",
          value: function value(t, r) {
            var a, i, n;
            return a = e.findBox(r, ["moof", "traf"]), i = [].concat.apply([], a.map(function (r) {
              return e.findBox(r, ["tfhd"]).map(function (a) {
                var i, n, o;
                return i = e.readUint32(a, 4), n = t[i].timescale || 9e4, o = e.findBox(r, ["tfdt"]).map(function (t) {
                  var r, a;
                  return r = t.data[t.start], a = e.readUint32(t, 4), 1 === r && (a *= Math.pow(2, 32), a += e.readUint32(t, 8)), a;
                })[0], (o = o || 1 / 0) / n;
              });
            })), n = Math.min.apply(null, i), isFinite(n) ? n : 0;
          }
        }, {
          key: "offsetStartDTS",
          value: function value(t, r, a) {
            e.findBox(r, ["moof", "traf"]).map(function (r) {
              return e.findBox(r, ["tfhd"]).map(function (i) {
                var n = e.readUint32(i, 4),
                    s = t[n].timescale || 9e4;
                e.findBox(r, ["tfdt"]).map(function (t) {
                  var r = t.data[t.start],
                      i = e.readUint32(t, 4);
                  if (0 === r) e.writeUint32(t, 4, i - a * s);else {
                    i *= Math.pow(2, 32), i += e.readUint32(t, 8), i -= a * s;
                    var n = Math.floor(i / (o + 1)),
                        l = Math.floor(i % (o + 1));
                    e.writeUint32(t, 4, n), e.writeUint32(t, 8, l);
                  }
                });
              });
            });
          }
        }]), e;
      }();

      r.default = s;
    }, {
      30: 30
    }],
    25: [function (e, t, r) {
      "use strict";

      var a = {
        BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
        SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
        appendFrame: function appendFrame(e, t, r, a, i) {
          if (!(r + 24 > t.length)) {
            var n = this.parseHeader(t, r);

            if (n && r + n.frameLength <= t.length) {
              var o = a + i * (10368e4 / n.sampleRate),
                  s = {
                unit: t.subarray(r, r + n.frameLength),
                pts: o,
                dts: o
              };
              return e.config = [], e.channelCount = n.channelCount, e.samplerate = n.sampleRate, e.samples.push(s), e.len += n.frameLength, {
                sample: s,
                length: n.frameLength
              };
            }
          }
        },
        parseHeader: function parseHeader(e, t) {
          var r = e[t + 1] >> 3 & 3,
              i = e[t + 1] >> 1 & 3,
              n = e[t + 2] >> 4 & 15,
              o = e[t + 2] >> 2 & 3,
              s = !!(2 & e[t + 2]);

          if (1 !== r && 0 !== n && 15 !== n && 3 !== o) {
            var l = 3 === r ? 3 - i : 3 === i ? 3 : 4,
                u = 1e3 * a.BitratesMap[14 * l + n - 1],
                d = 3 === r ? 0 : 2 === r ? 1 : 2,
                f = a.SamplingRateMap[3 * d + o],
                h = s ? 1 : 0;
            return {
              sampleRate: f,
              channelCount: e[t + 3] >> 6 == 3 ? 1 : 2,
              frameLength: 3 === i ? (3 === r ? 12 : 6) * u / f + h << 2 : (3 === r ? 144 : 72) * u / f + h | 0
            };
          }
        },
        isHeaderPattern: function isHeaderPattern(e, t) {
          return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1]);
        },
        isHeader: function isHeader(e, t) {
          return !!(t + 1 < e.length && this.isHeaderPattern(e, t));
        },
        probe: function probe(e, t) {
          if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
            var r = this.parseHeader(e, t),
                a = 4;
            r && r.frameLength && (a = r.frameLength);
            var i = t + a;
            if (i === e.length || i + 1 < e.length && this.isHeaderPattern(e, i)) return !0;
          }

          return !1;
        }
      };
      t.exports = a;
    }, {}],
    26: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(e(14)),
          o = function () {
        function e(t, r, i, o) {
          a(this, e), this.decryptdata = i, this.discardEPB = o, this.decrypter = new n.default(t, r);
        }

        return i(e, [{
          key: "decryptBuffer",
          value: function value(e, t) {
            this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t);
          }
        }, {
          key: "decryptAacSample",
          value: function value(e, t, r, a) {
            var i = e[t].unit,
                n = i.subarray(16, i.length - i.length % 16),
                o = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
                s = this;
            this.decryptBuffer(o, function (n) {
              n = new Uint8Array(n), i.set(n, 16), a || s.decryptAacSamples(e, t + 1, r);
            });
          }
        }, {
          key: "decryptAacSamples",
          value: function value(e, t, r) {
            for (;; t++) {
              if (t >= e.length) return void r();

              if (!(e[t].unit.length < 32)) {
                var a = this.decrypter.isSync();
                if (this.decryptAacSample(e, t, r, a), !a) return;
              }
            }
          }
        }, {
          key: "getAvcEncryptedData",
          value: function value(e) {
            for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), a = 0, i = 32; i <= e.length - 16; i += 160, a += 16) {
              r.set(e.subarray(i, i + 16), a);
            }

            return r;
          }
        }, {
          key: "getAvcDecryptedUnit",
          value: function value(e, t) {
            t = new Uint8Array(t);

            for (var r = 0, a = 32; a <= e.length - 16; a += 160, r += 16) {
              e.set(t.subarray(r, r + 16), a);
            }

            return e;
          }
        }, {
          key: "decryptAvcSample",
          value: function value(e, t, r, a, i, n) {
            var o = this.discardEPB(i.data),
                s = this.getAvcEncryptedData(o),
                l = this;
            this.decryptBuffer(s.buffer, function (s) {
              i.data = l.getAvcDecryptedUnit(o, s), n || l.decryptAvcSamples(e, t, r + 1, a);
            });
          }
        }, {
          key: "decryptAvcSamples",
          value: function value(e, t, r, a) {
            for (;; t++, r = 0) {
              if (t >= e.length) return void a();

              for (var i = e[t].units; !(r >= i.length); r++) {
                var n = i[r];

                if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                  var o = this.decrypter.isSync();
                  if (this.decryptAvcSample(e, t, r, a, n, o), !o) return;
                }
              }
            }
          }
        }]), e;
      }();

      r.default = o;
    }, {
      14: 14
    }],
    27: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(17)),
          s = a(e(25)),
          l = a(e(30)),
          u = a(e(21)),
          d = a(e(26)),
          f = e(46),
          h = e(28),
          c = function () {
        function e(t, r, a, n) {
          i(this, e), this.observer = t, this.config = a, this.typeSupported = n, this.remuxer = r, this.sampleAes = null;
        }

        return n(e, [{
          key: "setDecryptData",
          value: function value(e) {
            null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new d.default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null;
          }
        }, {
          key: "resetInitSegment",
          value: function value(e, t, r, a) {
            this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = {
              container: "video/mp2t",
              type: "video",
              id: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              len: 0,
              dropped: 0
            }, this._audioTrack = {
              container: "video/mp2t",
              type: "audio",
              id: -1,
              inputTimeScale: 9e4,
              duration: a,
              sequenceNumber: 0,
              samples: [],
              len: 0,
              isAAC: !0
            }, this._id3Track = {
              type: "id3",
              id: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              len: 0
            }, this._txtTrack = {
              type: "text",
              id: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              len: 0
            }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = t, this.videoCodec = r, this._duration = a;
          }
        }, {
          key: "resetTimeStamp",
          value: function value() {}
        }, {
          key: "append",
          value: function value(e, t, r, a) {
            var i,
                n,
                o,
                s,
                u,
                d = e.length,
                c = !1;
            this.contiguous = r;

            var v = this.pmtParsed,
                g = this._avcTrack,
                p = this._audioTrack,
                y = this._id3Track,
                m = g.id,
                b = p.id,
                E = y.id,
                _ = this._pmtId,
                T = g.pesData,
                R = p.pesData,
                A = y.pesData,
                S = this._parsePAT,
                k = this._parsePMT,
                L = this._parsePES,
                w = this._parseAVCPES.bind(this),
                D = this._parseAACPES.bind(this),
                O = this._parseMPEGPES.bind(this),
                P = this._parseID3PES.bind(this);

            for (d -= d % 188, i = 0; i < d; i += 188) {
              if (71 === e[i]) {
                if (n = !!(64 & e[i + 1]), o = ((31 & e[i + 1]) << 8) + e[i + 2], (48 & e[i + 3]) >> 4 > 1) {
                  if ((s = i + 5 + e[i + 4]) === i + 188) continue;
                } else s = i + 4;

                switch (o) {
                  case m:
                    n && (T && (u = L(T)) && w(u, !1), T = {
                      data: [],
                      size: 0
                    }), T && (T.data.push(e.subarray(s, i + 188)), T.size += i + 188 - s);
                    break;

                  case b:
                    n && (R && (u = L(R)) && (p.isAAC ? D(u) : O(u)), R = {
                      data: [],
                      size: 0
                    }), R && (R.data.push(e.subarray(s, i + 188)), R.size += i + 188 - s);
                    break;

                  case E:
                    n && (A && (u = L(A)) && P(u), A = {
                      data: [],
                      size: 0
                    }), A && (A.data.push(e.subarray(s, i + 188)), A.size += i + 188 - s);
                    break;

                  case 0:
                    n && (s += e[s] + 1), _ = this._pmtId = S(e, s);
                    break;

                  case _:
                    n && (s += e[s] + 1);
                    var x = k(e, s, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                    (m = x.avc) > 0 && (g.id = m), (b = x.audio) > 0 && (p.id = b, p.isAAC = x.isAAC), (E = x.id3) > 0 && (y.id = E), c && !v && (f.logger.log("reparse from beginning"), c = !1, i = -188), v = this.pmtParsed = !0;
                    break;

                  case 17:
                  case 8191:
                    break;

                  default:
                    c = !0;
                }
              } else this.observer.trigger(l.default.ERROR, {
                type: h.ErrorTypes.MEDIA_ERROR,
                details: h.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !1,
                reason: "TS packet did not start with 0x47"
              });
            }

            T && (u = L(T)) ? (w(u, !0), g.pesData = null) : g.pesData = T, R && (u = L(R)) ? (p.isAAC ? D(u) : O(u), p.pesData = null) : (R && R.size && f.logger.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = R), A && (u = L(A)) ? (P(u), y.pesData = null) : y.pesData = A, null == this.sampleAes ? this.remuxer.remux(p, g, y, this._txtTrack, t, r, a) : this.decryptAndRemux(p, g, y, this._txtTrack, t, r, a);
          }
        }, {
          key: "decryptAndRemux",
          value: function value(e, t, r, a, i, n, o) {
            if (e.samples && e.isAAC) {
              var s = this;
              this.sampleAes.decryptAacSamples(e.samples, 0, function () {
                s.decryptAndRemuxAvc(e, t, r, a, i, n, o);
              });
            } else this.decryptAndRemuxAvc(e, t, r, a, i, n, o);
          }
        }, {
          key: "decryptAndRemuxAvc",
          value: function value(e, t, r, a, i, n, o) {
            if (t.samples) {
              var s = this;
              this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function () {
                s.remuxer.remux(e, t, r, a, i, n, o);
              });
            } else this.remuxer.remux(e, t, r, a, i, n, o);
          }
        }, {
          key: "destroy",
          value: function value() {
            this._initPTS = this._initDTS = void 0, this._duration = 0;
          }
        }, {
          key: "_parsePAT",
          value: function value(e, t) {
            return (31 & e[t + 10]) << 8 | e[t + 11];
          }
        }, {
          key: "_parsePMT",
          value: function value(e, t, r, a) {
            var i,
                n,
                o = {
              audio: -1,
              avc: -1,
              id3: -1,
              isAAC: !0
            };

            for (i = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < i;) {
              switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                case 207:
                  if (!a) {
                    f.logger.log("unkown stream type:" + e[t]);
                    break;
                  }

                case 15:
                  -1 === o.audio && (o.audio = n);
                  break;

                case 21:
                  -1 === o.id3 && (o.id3 = n);
                  break;

                case 219:
                  if (!a) {
                    f.logger.log("unkown stream type:" + e[t]);
                    break;
                  }

                case 27:
                  -1 === o.avc && (o.avc = n);
                  break;

                case 3:
                case 4:
                  r ? -1 === o.audio && (o.audio = n, o.isAAC = !1) : f.logger.log("MPEG audio found, not supported in this browser for now");
                  break;

                case 36:
                  f.logger.warn("HEVC stream type found, not supported for now");
                  break;

                default:
                  f.logger.log("unkown stream type:" + e[t]);
              }

              t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4]);
            }

            return o;
          }
        }, {
          key: "_parsePES",
          value: function value(e) {
            var t,
                r,
                a,
                i,
                n,
                o,
                s,
                l,
                u = 0,
                d = e.data;
            if (!e || 0 === e.size) return null;

            for (; d[0].length < 19 && d.length > 1;) {
              var h = new Uint8Array(d[0].length + d[1].length);
              h.set(d[0]), h.set(d[1], d[0].length), d[0] = h, d.splice(1, 1);
            }

            if (t = d[0], 1 === (t[0] << 16) + (t[1] << 8) + t[2]) {
              if ((a = (t[4] << 8) + t[5]) && a > e.size - 6) return null;
              192 & (r = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & r ? ((s = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (s -= 8589934592), o - s > 54e5 && (f.logger.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o), l = (i = t[8]) + 9, e.size -= l, n = new Uint8Array(e.size);

              for (var c = 0, v = d.length; c < v; c++) {
                var g = (t = d[c]).byteLength;

                if (l) {
                  if (l > g) {
                    l -= g;
                    continue;
                  }

                  t = t.subarray(l), g -= l, l = 0;
                }

                n.set(t, u), u += g;
              }

              return a && (a -= i + 3), {
                data: n,
                pts: o,
                dts: s,
                len: a
              };
            }

            return null;
          }
        }, {
          key: "pushAccesUnit",
          value: function value(e, t) {
            if (e.units.length && e.frame) {
              var r = t.samples,
                  a = r.length;
              !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (a || this.contiguous) ? (e.id = a, r.push(e)) : t.dropped++;
            }

            e.debug.length && f.logger.log(e.pts + "/" + e.dts + ":" + e.debug);
          }
        }, {
          key: "_parseAVCPES",
          value: function value(e, t) {
            var r,
                a,
                i,
                n = this,
                o = this._avcTrack,
                s = this._parseAVCNALu(e.data),
                l = this.avcSample,
                d = !1,
                f = this.pushAccesUnit.bind(this),
                h = function h(e, t, r, a) {
              return {
                key: e,
                pts: t,
                dts: r,
                units: [],
                debug: a
              };
            };

            e.data = null, l && s.length && (f(l, o), l = this.avcSample = h(!1, e.pts, e.dts, "")), s.forEach(function (t) {
              switch (t.type) {
                case 1:
                  a = !0, l.frame = !0;
                  var s = t.data;

                  if (d && s.length > 4) {
                    var c = new u.default(s).readSliceType();
                    2 !== c && 4 !== c && 7 !== c && 9 !== c || (l.key = !0);
                  }

                  break;

                case 5:
                  a = !0, l || (l = n.avcSample = h(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;
                  break;

                case 6:
                  a = !0, (r = new u.default(n.discardEPB(t.data))).readUByte();

                  for (var v = 0, g = 0, p = !1, y = 0; !p && r.bytesAvailable > 1;) {
                    v = 0;

                    do {
                      v += y = r.readUByte();
                    } while (255 === y);

                    g = 0;

                    do {
                      g += y = r.readUByte();
                    } while (255 === y);

                    if (4 === v && 0 !== r.bytesAvailable) {
                      if (p = !0, 181 === r.readUByte() && 49 === r.readUShort() && 1195456820 === r.readUInt() && 3 === r.readUByte()) {
                        var m = r.readUByte(),
                            b = 31 & m,
                            E = [m, r.readUByte()];

                        for (i = 0; i < b; i++) {
                          E.push(r.readUByte()), E.push(r.readUByte()), E.push(r.readUByte());
                        }

                        n._insertSampleInOrder(n._txtTrack.samples, {
                          type: 3,
                          pts: e.pts,
                          bytes: E
                        });
                      }
                    } else if (g < r.bytesAvailable) for (i = 0; i < g; i++) {
                      r.readUByte();
                    }
                  }

                  break;

                case 7:
                  if (a = !0, d = !0, !o.sps) {
                    var _ = (r = new u.default(t.data)).readSPS();

                    o.width = _.width, o.height = _.height, o.pixelRatio = _.pixelRatio, o.sps = [t.data], o.duration = n._duration;
                    var T = t.data.subarray(1, 4),
                        R = "avc1.";

                    for (i = 0; i < 3; i++) {
                      var A = T[i].toString(16);
                      A.length < 2 && (A = "0" + A), R += A;
                    }

                    o.codec = R;
                  }

                  break;

                case 8:
                  a = !0, o.pps || (o.pps = [t.data]);
                  break;

                case 9:
                  a = !1, l && f(l, o), l = n.avcSample = h(!1, e.pts, e.dts, "");
                  break;

                case 12:
                  a = !1;
                  break;

                default:
                  a = !1, l && (l.debug += "unknown NAL " + t.type + " ");
              }

              l && a && l.units.push(t);
            }), t && l && (f(l, o), this.avcSample = null);
          }
        }, {
          key: "_insertSampleInOrder",
          value: function value(e, t) {
            var r = e.length;

            if (r > 0) {
              if (t.pts >= e[r - 1].pts) e.push(t);else for (var a = r - 1; a >= 0; a--) {
                if (t.pts < e[a].pts) {
                  e.splice(a, 0, t);
                  break;
                }
              }
            } else e.push(t);
          }
        }, {
          key: "_getLastNalUnit",
          value: function value() {
            var e = this.avcSample,
                t = void 0;

            if (!e || 0 === e.units.length) {
              var r = this._avcTrack.samples;
              e = r[r.length - 1];
            }

            if (e) {
              var a = e.units;
              t = a[a.length - 1];
            }

            return t;
          }
        }, {
          key: "_parseAVCNALu",
          value: function value(e) {
            var t,
                r,
                a,
                i,
                n = 0,
                o = e.byteLength,
                s = this._avcTrack,
                l = s.naluState || 0,
                u = l,
                d = [],
                f = -1;

            for (-1 === l && (f = 0, i = 31 & e[0], l = 0, n = 1); n < o;) {
              if (t = e[n++], l) {
                if (1 !== l) {
                  if (t) {
                    if (1 === t) {
                      if (f >= 0) a = {
                        data: e.subarray(f, n - l - 1),
                        type: i
                      }, d.push(a);else {
                        var h = this._getLastNalUnit();

                        if (h && (u && n <= 4 - u && h.state && (h.data = h.data.subarray(0, h.data.byteLength - u)), (r = n - l - 1) > 0)) {
                          var c = new Uint8Array(h.data.byteLength + r);
                          c.set(h.data, 0), c.set(e.subarray(0, r), h.data.byteLength), h.data = c;
                        }
                      }
                      n < o ? (f = n, i = 31 & e[n], l = 0) : l = -1;
                    } else l = 0;
                  } else l = 3;
                } else l = t ? 0 : 2;
              } else l = t ? 0 : 1;
            }

            if (f >= 0 && l >= 0 && (a = {
              data: e.subarray(f, o),
              type: i,
              state: l
            }, d.push(a)), 0 === d.length) {
              var v = this._getLastNalUnit();

              if (v) {
                var g = new Uint8Array(v.data.byteLength + e.byteLength);
                g.set(v.data, 0), g.set(e, v.data.byteLength), v.data = g;
              }
            }

            return s.naluState = l, d;
          }
        }, {
          key: "discardEPB",
          value: function value(e) {
            for (var t, r, a = e.byteLength, i = [], n = 1; n < a - 2;) {
              0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (i.push(n + 2), n += 2) : n++;
            }

            if (0 === i.length) return e;
            t = a - i.length, r = new Uint8Array(t);
            var o = 0;

            for (n = 0; n < t; o++, n++) {
              o === i[0] && (o++, i.shift()), r[n] = e[o];
            }

            return r;
          }
        }, {
          key: "_parseAACPES",
          value: function value(e) {
            var t,
                r,
                a,
                i,
                n,
                s = this._audioTrack,
                u = e.data,
                d = e.pts,
                c = this.aacOverFlow,
                v = this.aacLastPTS;

            if (c) {
              var g = new Uint8Array(c.byteLength + u.byteLength);
              g.set(c, 0), g.set(u, c.byteLength), u = g;
            }

            for (a = 0, n = u.length; a < n - 1 && !o.default.isHeader(u, a); a++) {
              ;
            }

            if (a) {
              var p, y;
              if (a < n - 1 ? (p = "AAC PES did not start with ADTS header,offset:" + a, y = !1) : (p = "no ADTS header found in AAC PES", y = !0), f.logger.warn("parsing error:" + p), this.observer.trigger(l.default.ERROR, {
                type: h.ErrorTypes.MEDIA_ERROR,
                details: h.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: y,
                reason: p
              }), y) return;
            }

            if (o.default.initTrackConfig(s, this.observer, u, a, this.audioCodec), r = 0, t = o.default.getFrameDuration(s.samplerate), c && v) {
              var m = v + t;
              Math.abs(m - d) > 1 && (f.logger.log("AAC: align PTS for overlapping frames by " + Math.round((m - d) / 90)), d = m);
            }

            for (; a < n;) {
              if (o.default.isHeader(u, a) && a + 5 < n) {
                var b = o.default.appendFrame(s, u, a, d, r);
                if (!b) break;
                a += b.length, i = b.sample.pts, r++;
              } else a++;
            }

            c = a < n ? u.subarray(a, n) : null, this.aacOverFlow = c, this.aacLastPTS = i;
          }
        }, {
          key: "_parseMPEGPES",
          value: function value(e) {
            for (var t = e.data, r = t.length, a = 0, i = 0, n = e.pts; i < r;) {
              if (s.default.isHeader(t, i)) {
                var o = s.default.appendFrame(this._audioTrack, t, i, n, a);
                if (!o) break;
                i += o.length, a++;
              } else i++;
            }
          }
        }, {
          key: "_parseID3PES",
          value: function value(e) {
            this._id3Track.samples.push(e);
          }
        }], [{
          key: "probe",
          value: function value(e) {
            return e.length >= 564 && 71 === e[0] && 71 === e[188] && 71 === e[376];
          }
        }]), e;
      }();

      r.default = c;
    }, {
      17: 17,
      21: 21,
      25: 25,
      26: 26,
      28: 28,
      30: 30,
      46: 46
    }],
    28: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      r.ErrorTypes = {
        NETWORK_ERROR: "networkError",
        MEDIA_ERROR: "mediaError",
        MUX_ERROR: "muxError",
        OTHER_ERROR: "otherError"
      }, r.ErrorDetails = {
        MANIFEST_LOAD_ERROR: "manifestLoadError",
        MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
        MANIFEST_PARSING_ERROR: "manifestParsingError",
        MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
        LEVEL_LOAD_ERROR: "levelLoadError",
        LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
        LEVEL_SWITCH_ERROR: "levelSwitchError",
        AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
        AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
        FRAG_LOAD_ERROR: "fragLoadError",
        FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
        FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
        FRAG_DECRYPT_ERROR: "fragDecryptError",
        FRAG_PARSING_ERROR: "fragParsingError",
        REMUX_ALLOC_ERROR: "remuxAllocError",
        KEY_LOAD_ERROR: "keyLoadError",
        KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
        BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
        BUFFER_APPEND_ERROR: "bufferAppendError",
        BUFFER_APPENDING_ERROR: "bufferAppendingError",
        BUFFER_STALLED_ERROR: "bufferStalledError",
        BUFFER_FULL_ERROR: "bufferFullError",
        BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
        BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
        INTERNAL_EXCEPTION: "internalException",
        WEBVTT_EXCEPTION: "webVTTException"
      };
    }, {}],
    29: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = e(46),
          s = e(28),
          l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(e(30)),
          u = function () {
        function e(t) {
          a(this, e), this.hls = t, this.onEvent = this.onEvent.bind(this);

          for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
            i[n - 1] = arguments[n];
          }

          this.handledEvents = i, this.useGenericHandler = !0, this.registerListeners();
        }

        return n(e, [{
          key: "destroy",
          value: function value() {
            this.unregisterListeners();
          }
        }, {
          key: "isEventHandler",
          value: function value() {
            return "object" === i(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent;
          }
        }, {
          key: "registerListeners",
          value: function value() {
            this.isEventHandler() && this.handledEvents.forEach(function (e) {
              if ("hlsEventGeneric" === e) throw new Error("Forbidden event name: " + e);
              this.hls.on(e, this.onEvent);
            }, this);
          }
        }, {
          key: "unregisterListeners",
          value: function value() {
            this.isEventHandler() && this.handledEvents.forEach(function (e) {
              this.hls.off(e, this.onEvent);
            }, this);
          }
        }, {
          key: "onEvent",
          value: function value(e, t) {
            this.onEventGeneric(e, t);
          }
        }, {
          key: "onEventGeneric",
          value: function value(e, t) {
            try {
              (function (e, t) {
                var r = "on" + e.replace("hls", "");
                if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                return this[r].bind(this, t);
              }).call(this, e, t).call();
            } catch (t) {
              o.logger.error("internal error happened while processing " + e + ":" + t.message), this.hls.trigger(l.default.ERROR, {
                type: s.ErrorTypes.OTHER_ERROR,
                details: s.ErrorDetails.INTERNAL_EXCEPTION,
                fatal: !1,
                event: e,
                err: t
              });
            }
          }
        }]), e;
      }();

      r.default = u;
    }, {
      28: 28,
      30: 30,
      46: 46
    }],
    30: [function (e, t, r) {
      "use strict";

      t.exports = {
        MEDIA_ATTACHING: "hlsMediaAttaching",
        MEDIA_ATTACHED: "hlsMediaAttached",
        MEDIA_DETACHING: "hlsMediaDetaching",
        MEDIA_DETACHED: "hlsMediaDetached",
        BUFFER_RESET: "hlsBufferReset",
        BUFFER_CODECS: "hlsBufferCodecs",
        BUFFER_CREATED: "hlsBufferCreated",
        BUFFER_APPENDING: "hlsBufferAppending",
        BUFFER_APPENDED: "hlsBufferAppended",
        BUFFER_EOS: "hlsBufferEos",
        BUFFER_FLUSHING: "hlsBufferFlushing",
        BUFFER_FLUSHED: "hlsBufferFlushed",
        MANIFEST_LOADING: "hlsManifestLoading",
        MANIFEST_LOADED: "hlsManifestLoaded",
        MANIFEST_PARSED: "hlsManifestParsed",
        LEVEL_SWITCH: "hlsLevelSwitch",
        LEVEL_SWITCHING: "hlsLevelSwitching",
        LEVEL_SWITCHED: "hlsLevelSwitched",
        LEVEL_LOADING: "hlsLevelLoading",
        LEVEL_LOADED: "hlsLevelLoaded",
        LEVEL_UPDATED: "hlsLevelUpdated",
        LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
        AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
        AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
        AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
        AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
        AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
        AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
        SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
        SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
        SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
        SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
        SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
        INIT_PTS_FOUND: "hlsInitPtsFound",
        FRAG_LOADING: "hlsFragLoading",
        FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
        FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
        FRAG_LOADED: "hlsFragLoaded",
        FRAG_DECRYPTED: "hlsFragDecrypted",
        FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
        FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
        FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
        FRAG_PARSING_DATA: "hlsFragParsingData",
        FRAG_PARSED: "hlsFragParsed",
        FRAG_BUFFERED: "hlsFragBuffered",
        FRAG_CHANGED: "hlsFragChanged",
        FPS_DROP: "hlsFpsDrop",
        FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
        ERROR: "hlsError",
        DESTROYING: "hlsDestroying",
        KEY_LOADING: "hlsKeyLoading",
        KEY_LOADED: "hlsKeyLoaded",
        STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
      };
    }, {}],
    31: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e() {
          a(this, e);
        }

        return i(e, null, [{
          key: "getSilentFrame",
          value: function value(e, t) {
            switch (e) {
              case "mp4a.40.2":
                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                break;

              default:
                if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }

            return null;
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    32: [function (e, t, r) {
      "use strict";

      var a = {
        isBuffered: function isBuffered(e, t) {
          if (e) for (var r = e.buffered, a = 0; a < r.length; a++) {
            if (t >= r.start(a) && t <= r.end(a)) return !0;
          }
          return !1;
        },
        bufferInfo: function bufferInfo(e, t, r) {
          if (e) {
            var a,
                i = e.buffered,
                n = [];

            for (a = 0; a < i.length; a++) {
              n.push({
                start: i.start(a),
                end: i.end(a)
              });
            }

            return this.bufferedInfo(n, t, r);
          }

          return {
            len: 0,
            start: t,
            end: t,
            nextStart: void 0
          };
        },
        bufferedInfo: function bufferedInfo(e, t, r) {
          var a,
              i,
              n,
              o,
              s,
              l = [];

          for (e.sort(function (e, t) {
            var r = e.start - t.start;
            return r || t.end - e.end;
          }), s = 0; s < e.length; s++) {
            var u = l.length;

            if (u) {
              var d = l[u - 1].end;
              e[s].start - d < r ? e[s].end > d && (l[u - 1].end = e[s].end) : l.push(e[s]);
            } else l.push(e[s]);
          }

          for (s = 0, a = 0, i = n = t; s < l.length; s++) {
            var f = l[s].start,
                h = l[s].end;
            if (t + r >= f && t < h) i = f, a = (n = h) - t;else if (t + r < f) {
              o = f;
              break;
            }
          }

          return {
            len: a,
            start: i,
            end: n,
            nextStart: o
          };
        }
      };
      t.exports = a;
    }, {}],
    33: [function (e, t, r) {
      "use strict";

      var a = e(46),
          i = {
        mergeDetails: function mergeDetails(e, t) {
          var r,
              n = Math.max(e.startSN, t.startSN) - t.startSN,
              o = Math.min(e.endSN, t.endSN) - t.startSN,
              s = t.startSN - e.startSN,
              l = e.fragments,
              u = t.fragments,
              d = 0;
          if (o < n) t.PTSKnown = !1;else {
            for (var f = n; f <= o; f++) {
              var h = l[s + f],
                  c = u[f];
              c && h && (d = h.cc - c.cc, isNaN(h.startPTS) || (c.start = c.startPTS = h.startPTS, c.endPTS = h.endPTS, c.duration = h.duration, c.backtracked = h.backtracked, c.dropped = h.dropped, r = c));
            }

            if (d) for (a.logger.log("discontinuity sliding from playlist, take drift into account"), f = 0; f < u.length; f++) {
              u[f].cc += d;
            }
            if (r) i.updateFragPTSDTS(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS);else if (s >= 0 && s < l.length) {
              var v = l[s].start;

              for (f = 0; f < u.length; f++) {
                u[f].start += v;
              }
            }
            t.PTSKnown = e.PTSKnown;
          }
        },
        updateFragPTSDTS: function updateFragPTSDTS(e, t, r, a, n, o) {
          var s = r;

          if (!isNaN(t.startPTS)) {
            var l = Math.abs(t.startPTS - r);
            isNaN(t.deltaPTS) ? t.deltaPTS = l : t.deltaPTS = Math.max(l, t.deltaPTS), s = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), a = Math.max(a, t.endPTS), n = Math.min(n, t.startDTS), o = Math.max(o, t.endDTS);
          }

          var u = r - t.start;
          t.start = t.startPTS = r, t.maxStartPTS = s, t.endPTS = a, t.startDTS = n, t.endDTS = o, t.duration = a - r;
          var d = t.sn;
          if (!e || d < e.startSN || d > e.endSN) return 0;
          var f, h, c;

          for (f = d - e.startSN, (h = e.fragments)[f] = t, c = f; c > 0; c--) {
            i.updatePTS(h, c, c - 1);
          }

          for (c = f; c < h.length - 1; c++) {
            i.updatePTS(h, c, c + 1);
          }

          return e.PTSKnown = !0, u;
        },
        updatePTS: function updatePTS(e, t, r) {
          var i = e[t],
              n = e[r],
              o = n.startPTS;
          isNaN(o) ? n.start = r > t ? i.start + i.duration : Math.max(i.start - n.duration, 0) : r > t ? (i.duration = o - i.start, i.duration < 0 && a.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = i.start - o, n.duration < 0 && a.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!"));
        }
      };
      t.exports = i;
    }, {
      46: 46
    }],
    34: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(2)),
          s = a(e(30)),
          l = e(28),
          u = a(e(38)),
          d = a(e(36)),
          f = a(e(37)),
          h = a(e(11)),
          c = a(e(10)),
          v = a(e(9)),
          g = e(46),
          p = a(e(1)),
          y = e(4),
          m = function () {
        function e() {
          var t = this,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i(this, e);
          var a = e.DefaultConfig;
          if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");

          for (var n in a) {
            n in r || (r[n] = a[n]);
          }

          if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
          if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
          (0, g.enableLogs)(r.debug), this.config = r, this._autoLevelCapping = -1;
          var o = this.observer = new p.default();
          o.trigger = function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
              r[a - 1] = arguments[a];
            }

            o.emit.apply(o, [e, e].concat(r));
          }, o.off = function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
              r[a - 1] = arguments[a];
            }

            o.removeListener.apply(o, [e].concat(r));
          }, this.on = o.on.bind(o), this.off = o.off.bind(o), this.trigger = o.trigger.bind(o);

          var s = this.abrController = new r.abrController(this),
              l = new r.bufferController(this),
              y = new r.capLevelController(this),
              m = new r.fpsController(this),
              b = new u.default(this),
              E = new d.default(this),
              _ = new f.default(this),
              T = new v.default(this),
              R = [this.levelController = new c.default(this), this.streamController = new h.default(this)],
              A = r.audioStreamController;

          A && R.push(new A(this)), this.networkControllers = R;
          var S = [b, E, _, s, l, y, m, T];

          if (A = r.audioTrackController) {
            var k = new A(this);
            this.audioTrackController = k, S.push(k);
          }

          if (A = r.subtitleTrackController) {
            var L = new A(this);
            this.subtitleTrackController = L, S.push(L);
          }

          [r.subtitleStreamController, r.timelineController].forEach(function (e) {
            e && S.push(new e(t));
          }), this.coreComponents = S;
        }

        return n(e, null, [{
          key: "isSupported",
          value: function value() {
            var e = window.MediaSource = window.MediaSource || window.WebKitMediaSource,
                t = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer,
                r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                a = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
            return r && a;
          }
        }, {
          key: "version",
          get: function get() {
            return "0.7.11";
          }
        }, {
          key: "Events",
          get: function get() {
            return s.default;
          }
        }, {
          key: "ErrorTypes",
          get: function get() {
            return l.ErrorTypes;
          }
        }, {
          key: "ErrorDetails",
          get: function get() {
            return l.ErrorDetails;
          }
        }, {
          key: "DefaultConfig",
          get: function get() {
            return e.defaultConfig ? e.defaultConfig : y.hlsDefaultConfig;
          },
          set: function set(t) {
            e.defaultConfig = t;
          }
        }]), n(e, [{
          key: "destroy",
          value: function value() {
            g.logger.log("destroy"), this.trigger(s.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function (e) {
              e.destroy();
            }), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1;
          }
        }, {
          key: "attachMedia",
          value: function value(e) {
            g.logger.log("attachMedia"), this.media = e, this.trigger(s.default.MEDIA_ATTACHING, {
              media: e
            });
          }
        }, {
          key: "detachMedia",
          value: function value() {
            g.logger.log("detachMedia"), this.trigger(s.default.MEDIA_DETACHING), this.media = null;
          }
        }, {
          key: "loadSource",
          value: function value(e) {
            e = o.default.buildAbsoluteURL(window.location.href, e, {
              alwaysNormalize: !0
            }), g.logger.log("loadSource:" + e), this.url = e, this.trigger(s.default.MANIFEST_LOADING, {
              url: e
            });
          }
        }, {
          key: "startLoad",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
            g.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach(function (t) {
              t.startLoad(e);
            });
          }
        }, {
          key: "stopLoad",
          value: function value() {
            g.logger.log("stopLoad"), this.networkControllers.forEach(function (e) {
              e.stopLoad();
            });
          }
        }, {
          key: "swapAudioCodec",
          value: function value() {
            g.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
          }
        }, {
          key: "recoverMediaError",
          value: function value() {
            g.logger.log("recoverMediaError");
            var e = this.media;
            this.detachMedia(), this.attachMedia(e);
          }
        }, {
          key: "levels",
          get: function get() {
            return this.levelController.levels;
          }
        }, {
          key: "currentLevel",
          get: function get() {
            return this.streamController.currentLevel;
          },
          set: function set(e) {
            g.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch();
          }
        }, {
          key: "nextLevel",
          get: function get() {
            return this.streamController.nextLevel;
          },
          set: function set(e) {
            g.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
          }
        }, {
          key: "loadLevel",
          get: function get() {
            return this.levelController.level;
          },
          set: function set(e) {
            g.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e;
          }
        }, {
          key: "nextLoadLevel",
          get: function get() {
            return this.levelController.nextLoadLevel;
          },
          set: function set(e) {
            this.levelController.nextLoadLevel = e;
          }
        }, {
          key: "firstLevel",
          get: function get() {
            return Math.max(this.levelController.firstLevel, this.minAutoLevel);
          },
          set: function set(e) {
            g.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e;
          }
        }, {
          key: "startLevel",
          get: function get() {
            return this.levelController.startLevel;
          },
          set: function set(e) {
            g.logger.log("set startLevel:" + e);
            var t = this;
            -1 !== e && (e = Math.max(e, t.minAutoLevel)), t.levelController.startLevel = e;
          }
        }, {
          key: "autoLevelCapping",
          get: function get() {
            return this._autoLevelCapping;
          },
          set: function set(e) {
            g.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e;
          }
        }, {
          key: "autoLevelEnabled",
          get: function get() {
            return -1 === this.levelController.manualLevel;
          }
        }, {
          key: "manualLevel",
          get: function get() {
            return this.levelController.manualLevel;
          }
        }, {
          key: "minAutoLevel",
          get: function get() {
            for (var e = this, t = e.levels, r = e.config.minAutoBitrate, a = t ? t.length : 0, i = 0; i < a; i++) {
              if ((t[i].realBitrate ? Math.max(t[i].realBitrate, t[i].bitrate) : t[i].bitrate) > r) return i;
            }

            return 0;
          }
        }, {
          key: "maxAutoLevel",
          get: function get() {
            var e = this,
                t = e.levels,
                r = e.autoLevelCapping;
            return -1 === r && t && t.length ? t.length - 1 : r;
          }
        }, {
          key: "nextAutoLevel",
          get: function get() {
            var e = this;
            return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel);
          },
          set: function set(e) {
            var t = this;
            t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e);
          }
        }, {
          key: "audioTracks",
          get: function get() {
            var e = this.audioTrackController;
            return e ? e.audioTracks : [];
          }
        }, {
          key: "audioTrack",
          get: function get() {
            var e = this.audioTrackController;
            return e ? e.audioTrack : -1;
          },
          set: function set(e) {
            var t = this.audioTrackController;
            t && (t.audioTrack = e);
          }
        }, {
          key: "liveSyncPosition",
          get: function get() {
            return this.streamController.liveSyncPosition;
          }
        }, {
          key: "subtitleTracks",
          get: function get() {
            var e = this.subtitleTrackController;
            return e ? e.subtitleTracks : [];
          }
        }, {
          key: "subtitleTrack",
          get: function get() {
            var e = this.subtitleTrackController;
            return e ? e.subtitleTrack : -1;
          },
          set: function set(e) {
            var t = this.subtitleTrackController;
            t && (t.subtitleTrack = e);
          }
        }]), e;
      }();

      r.default = m;
    }, {
      1: 1,
      10: 10,
      11: 11,
      2: 2,
      28: 28,
      30: 30,
      36: 36,
      37: 37,
      38: 38,
      4: 4,
      46: 46,
      9: 9
    }],
    35: [function (e, t, r) {
      "use strict";

      t.exports = e(34).default;
    }, {
      34: 34
    }],
    36: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = e(28),
          f = e(46),
          h = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.FRAG_LOADING));
          return r.loaders = {}, r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            var e = this.loaders;

            for (var t in e) {
              var r = e[t];
              r && r.destroy();
            }

            this.loaders = {}, u.default.prototype.destroy.call(this);
          }
        }, {
          key: "onFragLoading",
          value: function value(e) {
            var t = e.frag,
                r = t.type,
                a = this.loaders[r],
                i = this.hls.config;
            t.loaded = 0, a && (f.logger.warn("abort previous fragment loader for type:" + r), a.abort()), a = this.loaders[r] = t.loader = void 0 !== i.fLoader ? new i.fLoader(i) : new i.loader(i);
            var n = void 0,
                o = void 0,
                s = void 0;
            n = {
              url: t.url,
              frag: t,
              responseType: "arraybuffer",
              progressData: !1
            };
            var l = t.byteRangeStartOffset,
                u = t.byteRangeEndOffset;
            isNaN(l) || isNaN(u) || (n.rangeStart = l, n.rangeEnd = u), o = {
              timeout: i.fragLoadingTimeOut,
              maxRetry: 0,
              retryDelay: 0,
              maxRetryDelay: i.fragLoadingMaxRetryTimeout
            }, s = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this),
              onProgress: this.loadprogress.bind(this)
            }, a.load(n, o, s);
          }
        }, {
          key: "loadsuccess",
          value: function value(e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                i = e.data,
                n = r.frag;
            n.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(l.default.FRAG_LOADED, {
              payload: i,
              frag: n,
              stats: t,
              networkDetails: a
            });
          }
        }, {
          key: "loaderror",
          value: function value(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                a = t.loader;
            a && a.abort(), this.loaders[t.type] = void 0, this.hls.trigger(l.default.ERROR, {
              type: d.ErrorTypes.NETWORK_ERROR,
              details: d.ErrorDetails.FRAG_LOAD_ERROR,
              fatal: !1,
              frag: t.frag,
              response: e,
              networkDetails: r
            });
          }
        }, {
          key: "loadtimeout",
          value: function value(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                a = t.loader;
            a && a.abort(), this.loaders[t.type] = void 0, this.hls.trigger(l.default.ERROR, {
              type: d.ErrorTypes.NETWORK_ERROR,
              details: d.ErrorDetails.FRAG_LOAD_TIMEOUT,
              fatal: !1,
              frag: t.frag,
              networkDetails: r
            });
          }
        }, {
          key: "loadprogress",
          value: function value(e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                i = t.frag;
            i.loaded = e.loaded, this.hls.trigger(l.default.FRAG_LOAD_PROGRESS, {
              frag: i,
              stats: e,
              networkDetails: a
            });
          }
        }]), t;
      }(u.default);

      r.default = h;
    }, {
      28: 28,
      29: 29,
      30: 30,
      46: 46
    }],
    37: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(30)),
          u = a(e(29)),
          d = e(28),
          f = e(46),
          h = function (e) {
        function t(e) {
          i(this, t);
          var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, l.default.KEY_LOADING));
          return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r;
        }

        return o(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            for (var e in this.loaders) {
              var t = this.loaders[e];
              t && t.destroy();
            }

            this.loaders = {}, u.default.prototype.destroy.call(this);
          }
        }, {
          key: "onKeyLoading",
          value: function value(e) {
            var t = e.frag,
                r = t.type,
                a = this.loaders[r],
                i = t.decryptdata,
                n = i.uri;

            if (n !== this.decrypturl || null === this.decryptkey) {
              var o = this.hls.config;
              a && (f.logger.warn("abort previous key loader for type:" + r), a.abort()), t.loader = this.loaders[r] = new o.loader(o), this.decrypturl = n, this.decryptkey = null;
              var s = void 0,
                  u = void 0,
                  d = void 0;
              s = {
                url: n,
                frag: t,
                responseType: "arraybuffer"
              }, u = {
                timeout: o.fragLoadingTimeOut,
                maxRetry: o.fragLoadingMaxRetry,
                retryDelay: o.fragLoadingRetryDelay,
                maxRetryDelay: o.fragLoadingMaxRetryTimeout
              }, d = {
                onSuccess: this.loadsuccess.bind(this),
                onError: this.loaderror.bind(this),
                onTimeout: this.loadtimeout.bind(this)
              }, t.loader.load(s, u, d);
            } else this.decryptkey && (i.key = this.decryptkey, this.hls.trigger(l.default.KEY_LOADED, {
              frag: t
            }));
          }
        }, {
          key: "loadsuccess",
          value: function value(e, t, r) {
            var a = r.frag;
            this.decryptkey = a.decryptdata.key = new Uint8Array(e.data), a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(l.default.KEY_LOADED, {
              frag: a
            });
          }
        }, {
          key: "loaderror",
          value: function value(e, t) {
            var r = t.frag,
                a = r.loader;
            a && a.abort(), this.loaders[t.type] = void 0, this.hls.trigger(l.default.ERROR, {
              type: d.ErrorTypes.NETWORK_ERROR,
              details: d.ErrorDetails.KEY_LOAD_ERROR,
              fatal: !1,
              frag: r,
              response: e
            });
          }
        }, {
          key: "loadtimeout",
          value: function value(e, t) {
            var r = t.frag,
                a = r.loader;
            a && a.abort(), this.loaders[t.type] = void 0, this.hls.trigger(l.default.ERROR, {
              type: d.ErrorTypes.NETWORK_ERROR,
              details: d.ErrorDetails.KEY_LOAD_TIMEOUT,
              fatal: !1,
              frag: r
            });
          }
        }]), t;
      }(u.default);

      r.default = h;
    }, {
      28: 28,
      29: 29,
      30: 30,
      46: 46
    }],
    38: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }

      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          l = a(e(2)),
          u = a(e(30)),
          d = a(e(29)),
          f = e(28),
          h = a(e(42)),
          c = e(46),
          v = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
          g = /#EXT-X-MEDIA:(.*)/g,
          p = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
          y = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
          m = function () {
        function e() {
          o(this, e), this.method = null, this.key = null, this.iv = null, this._uri = null;
        }

        return s(e, [{
          key: "uri",
          get: function get() {
            return !this._uri && this.reluri && (this._uri = l.default.buildAbsoluteURL(this.baseuri, this.reluri, {
              alwaysNormalize: !0
            })), this._uri;
          }
        }]), e;
      }(),
          b = function () {
        function e() {
          o(this, e), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [];
        }

        return s(e, [{
          key: "createInitializationVector",
          value: function value(e) {
            for (var t = new Uint8Array(16), r = 12; r < 16; r++) {
              t[r] = e >> 8 * (15 - r) & 255;
            }

            return t;
          }
        }, {
          key: "fragmentDecryptdataFromLevelkey",
          value: function value(e, t) {
            var r = e;
            return e && e.method && e.uri && !e.iv && ((r = new m()).method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)), r;
          }
        }, {
          key: "cloneObj",
          value: function value(e) {
            return JSON.parse(JSON.stringify(e));
          }
        }, {
          key: "url",
          get: function get() {
            return !this._url && this.relurl && (this._url = l.default.buildAbsoluteURL(this.baseurl, this.relurl, {
              alwaysNormalize: !0
            })), this._url;
          },
          set: function set(e) {
            this._url = e;
          }
        }, {
          key: "programDateTime",
          get: function get() {
            return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime;
          }
        }, {
          key: "byteRange",
          get: function get() {
            if (!this._byteRange) {
              var e = this._byteRange = [];

              if (this.rawByteRange) {
                var t = this.rawByteRange.split("@", 2);

                if (1 === t.length) {
                  var r = this.lastByteRangeEndOffset;
                  e[0] = r || 0;
                } else e[0] = parseInt(t[1]);

                e[1] = parseInt(t[0]) + e[0];
              }
            }

            return this._byteRange;
          }
        }, {
          key: "byteRangeStartOffset",
          get: function get() {
            return this.byteRange[0];
          }
        }, {
          key: "byteRangeEndOffset",
          get: function get() {
            return this.byteRange[1];
          }
        }, {
          key: "decryptdata",
          get: function get() {
            return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata;
          }
        }]), e;
      }(),
          E = function (e) {
        function t(e) {
          o(this, t);
          var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADING, u.default.LEVEL_LOADING, u.default.AUDIO_TRACK_LOADING, u.default.SUBTITLE_TRACK_LOADING));
          return r.loaders = {}, r;
        }

        return n(t, e), s(t, [{
          key: "destroy",
          value: function value() {
            for (var e in this.loaders) {
              var t = this.loaders[e];
              t && t.destroy();
            }

            this.loaders = {}, d.default.prototype.destroy.call(this);
          }
        }, {
          key: "onManifestLoading",
          value: function value(e) {
            this.load(e.url, {
              type: "manifest"
            });
          }
        }, {
          key: "onLevelLoading",
          value: function value(e) {
            this.load(e.url, {
              type: "level",
              level: e.level,
              id: e.id
            });
          }
        }, {
          key: "onAudioTrackLoading",
          value: function value(e) {
            this.load(e.url, {
              type: "audioTrack",
              id: e.id
            });
          }
        }, {
          key: "onSubtitleTrackLoading",
          value: function value(e) {
            this.load(e.url, {
              type: "subtitleTrack",
              id: e.id
            });
          }
        }, {
          key: "load",
          value: function value(e, t) {
            var r = this.loaders[t.type];

            if (r) {
              var a = r.context;
              if (a && a.url === e) return void c.logger.trace("playlist request ongoing");
              c.logger.warn("abort previous loader for type:" + t.type), r.abort();
            }

            var i = this.hls.config,
                n = void 0,
                o = void 0,
                s = void 0,
                l = void 0;
            "manifest" === t.type ? (n = i.manifestLoadingMaxRetry, o = i.manifestLoadingTimeOut, s = i.manifestLoadingRetryDelay, l = i.manifestLoadingMaxRetryTimeout) : (n = i.levelLoadingMaxRetry, o = i.levelLoadingTimeOut, s = i.levelLoadingRetryDelay, l = i.levelLoadingMaxRetryTimeout, c.logger.log("loading playlist for " + t.type + " " + (t.level || t.id))), r = this.loaders[t.type] = t.loader = void 0 !== i.pLoader ? new i.pLoader(i) : new i.loader(i), t.url = e, t.responseType = "";
            var u = void 0,
                d = void 0;
            u = {
              timeout: o,
              maxRetry: n,
              retryDelay: s,
              maxRetryDelay: l
            }, d = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this)
            }, r.load(t, u, d);
          }
        }, {
          key: "resolve",
          value: function value(e, t) {
            return l.default.buildAbsoluteURL(t, e, {
              alwaysNormalize: !0
            });
          }
        }, {
          key: "parseMasterPlaylist",
          value: function value(e, t) {
            var r = [],
                a = void 0;

            for (v.lastIndex = 0; null != (a = v.exec(e));) {
              var i = {},
                  n = i.attrs = new h.default(a[1]);
              i.url = this.resolve(a[2], t);
              var o = n.decimalResolution("RESOLUTION");
              o && (i.width = o.width, i.height = o.height), i.bitrate = n.decimalInteger("AVERAGE-BANDWIDTH") || n.decimalInteger("BANDWIDTH"), i.name = n.NAME;
              var s = n.CODECS;

              if (s) {
                s = s.split(/[ ,]+/);

                for (var l = 0; l < s.length; l++) {
                  var u = s[l];
                  -1 !== u.indexOf("avc1") ? i.videoCodec = this.avc1toavcoti(u) : -1 !== u.indexOf("hvc1") ? i.videoCodec = u : i.audioCodec = u;
                }
              }

              r.push(i);
            }

            return r;
          }
        }, {
          key: "parseMasterPlaylistMedia",
          value: function value(e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                i = void 0,
                n = [],
                o = 0;

            for (g.lastIndex = 0; null != (i = g.exec(e));) {
              var s = {},
                  l = new h.default(i[1]);
              l.TYPE === r && (s.groupId = l["GROUP-ID"], s.name = l.NAME, s.type = r, s.default = "YES" === l.DEFAULT, s.autoselect = "YES" === l.AUTOSELECT, s.forced = "YES" === l.FORCED, l.URI && (s.url = this.resolve(l.URI, t)), s.lang = l.LANGUAGE, s.name || (s.name = s.lang), a && (s.audioCodec = a), s.id = o++, n.push(s));
            }

            return n;
          }
        }, {
          key: "avc1toavcoti",
          value: function value(e) {
            var t,
                r = e.split(".");
            return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t;
          }
        }, {
          key: "parseLevelPlaylist",
          value: function value(e, t, r, a) {
            var i,
                n,
                o = 0,
                s = 0,
                l = {
              type: null,
              version: null,
              url: t,
              fragments: [],
              live: !0,
              startSN: 0
            },
                u = new m(),
                d = 0,
                f = null,
                v = new b();

            for (p.lastIndex = 0; null !== (i = p.exec(e));) {
              var g = i[1];

              if (g) {
                v.duration = parseFloat(g);
                var E = (" " + i[2]).slice(1);
                v.title = E || null, v.tagList.push(E ? ["INF", g, E] : ["INF", g]);
              } else if (i[3]) {
                if (!isNaN(v.duration)) {
                  var _ = o++;

                  v.type = a, v.start = s, v.levelkey = u, v.sn = _, v.level = r, v.cc = d, v.baseurl = t, v.relurl = (" " + i[3]).slice(1), l.fragments.push(v), f = v, s += v.duration, v = new b();
                }
              } else if (i[4]) {
                if (v.rawByteRange = (" " + i[4]).slice(1), f) {
                  var T = f.byteRangeEndOffset;
                  T && (v.lastByteRangeEndOffset = T);
                }
              } else if (i[5]) v.rawProgramDateTime = (" " + i[5]).slice(1), v.tagList.push(["PROGRAM-DATE-TIME", v.rawProgramDateTime]);else {
                for (i = i[0].match(y), n = 1; n < i.length && void 0 === i[n]; n++) {
                  ;
                }

                var R = (" " + i[n + 1]).slice(1),
                    A = (" " + i[n + 2]).slice(1);

                switch (i[n]) {
                  case "#":
                    v.tagList.push(A ? [R, A] : [R]);
                    break;

                  case "PLAYLIST-TYPE":
                    l.type = R.toUpperCase();
                    break;

                  case "MEDIA-SEQUENCE":
                    o = l.startSN = parseInt(R);
                    break;

                  case "TARGETDURATION":
                    l.targetduration = parseFloat(R);
                    break;

                  case "VERSION":
                    l.version = parseInt(R);
                    break;

                  case "EXTM3U":
                    break;

                  case "ENDLIST":
                    l.live = !1;
                    break;

                  case "DIS":
                    d++, v.tagList.push(["DIS"]);
                    break;

                  case "DISCONTINUITY-SEQ":
                    d = parseInt(R);
                    break;

                  case "KEY":
                    var S = R,
                        k = new h.default(S),
                        L = k.enumeratedString("METHOD"),
                        w = k.URI,
                        D = k.hexadecimalInteger("IV");
                    L && (u = new m(), w && ["AES-128", "SAMPLE-AES"].indexOf(L) >= 0 && (u.method = L, u.baseuri = t, u.reluri = w, u.key = null, u.iv = D));
                    break;

                  case "START":
                    var O = R,
                        P = new h.default(O).decimalFloatingPoint("TIME-OFFSET");
                    isNaN(P) || (l.startTimeOffset = P);
                    break;

                  case "MAP":
                    var x = new h.default(R);
                    v.relurl = x.URI, v.rawByteRange = x.BYTERANGE, v.baseurl = t, v.level = r, v.type = a, v.sn = "initSegment", l.initSegment = v, v = new b();
                    break;

                  default:
                    c.logger.warn("line parsed but not handled: " + i);
                }
              }
            }

            return (v = f) && !v.relurl && (l.fragments.pop(), s -= v.duration), l.totalduration = s, l.averagetargetduration = s / l.fragments.length, l.endSN = o - 1, l;
          }
        }, {
          key: "loadsuccess",
          value: function value(e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                i = e.data,
                n = e.url,
                o = r.type,
                s = r.id,
                l = r.level,
                d = this.hls;
            if (this.loaders[o] = void 0, void 0 !== n && 0 !== n.indexOf("data:") || (n = r.url), t.tload = performance.now(), 0 === i.indexOf("#EXTM3U")) {
              if (i.indexOf("#EXTINF:") > 0) {
                var h = "audioTrack" !== o && "subtitleTrack" !== o,
                    v = isNaN(l) ? isNaN(s) ? 0 : s : l,
                    g = this.parseLevelPlaylist(i, n, v, "audioTrack" === o ? "audio" : "subtitleTrack" === o ? "subtitle" : "main");
                g.tload = t.tload, "manifest" === o && d.trigger(u.default.MANIFEST_LOADED, {
                  levels: [{
                    url: n,
                    details: g
                  }],
                  audioTracks: [],
                  url: n,
                  stats: t,
                  networkDetails: a
                }), t.tparsed = performance.now(), g.targetduration ? h ? d.trigger(u.default.LEVEL_LOADED, {
                  details: g,
                  level: l || 0,
                  id: s || 0,
                  stats: t,
                  networkDetails: a
                }) : "audioTrack" === o ? d.trigger(u.default.AUDIO_TRACK_LOADED, {
                  details: g,
                  id: s,
                  stats: t,
                  networkDetails: a
                }) : "subtitleTrack" === o && d.trigger(u.default.SUBTITLE_TRACK_LOADED, {
                  details: g,
                  id: s,
                  stats: t,
                  networkDetails: a
                }) : d.trigger(u.default.ERROR, {
                  type: f.ErrorTypes.NETWORK_ERROR,
                  details: f.ErrorDetails.MANIFEST_PARSING_ERROR,
                  fatal: !0,
                  url: n,
                  reason: "invalid targetduration",
                  networkDetails: a
                });
              } else {
                var p = this.parseMasterPlaylist(i, n);

                if (p.length) {
                  var y = this.parseMasterPlaylistMedia(i, n, "AUDIO", p[0].audioCodec),
                      m = this.parseMasterPlaylistMedia(i, n, "SUBTITLES");

                  if (y.length) {
                    var b = !1;
                    y.forEach(function (e) {
                      e.url || (b = !0);
                    }), !1 === b && p[0].audioCodec && !p[0].attrs.AUDIO && (c.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), y.unshift({
                      type: "main",
                      name: "main"
                    }));
                  }

                  d.trigger(u.default.MANIFEST_LOADED, {
                    levels: p,
                    audioTracks: y,
                    subtitles: m,
                    url: n,
                    stats: t,
                    networkDetails: a
                  });
                } else d.trigger(u.default.ERROR, {
                  type: f.ErrorTypes.NETWORK_ERROR,
                  details: f.ErrorDetails.MANIFEST_PARSING_ERROR,
                  fatal: !0,
                  url: n,
                  reason: "no level found in manifest",
                  networkDetails: a
                });
              }
            } else d.trigger(u.default.ERROR, {
              type: f.ErrorTypes.NETWORK_ERROR,
              details: f.ErrorDetails.MANIFEST_PARSING_ERROR,
              fatal: !0,
              url: n,
              reason: "no EXTM3U delimiter",
              networkDetails: a
            });
          }
        }, {
          key: "loaderror",
          value: function value(e, t) {
            var r,
                a,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = t.loader;

            switch (t.type) {
              case "manifest":
                r = f.ErrorDetails.MANIFEST_LOAD_ERROR, a = !0;
                break;

              case "level":
                r = f.ErrorDetails.LEVEL_LOAD_ERROR, a = !1;
                break;

              case "audioTrack":
                r = f.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, a = !1;
            }

            n && (n.abort(), this.loaders[t.type] = void 0), this.hls.trigger(u.default.ERROR, {
              type: f.ErrorTypes.NETWORK_ERROR,
              details: r,
              fatal: a,
              url: n.url,
              loader: n,
              response: e,
              context: t,
              networkDetails: i
            });
          }
        }, {
          key: "loadtimeout",
          value: function value(e, t) {
            var r,
                a,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = t.loader;

            switch (t.type) {
              case "manifest":
                r = f.ErrorDetails.MANIFEST_LOAD_TIMEOUT, a = !0;
                break;

              case "level":
                r = f.ErrorDetails.LEVEL_LOAD_TIMEOUT, a = !1;
                break;

              case "audioTrack":
                r = f.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, a = !1;
            }

            n && (n.abort(), this.loaders[t.type] = void 0), this.hls.trigger(u.default.ERROR, {
              type: f.ErrorTypes.NETWORK_ERROR,
              details: r,
              fatal: a,
              url: n.url,
              loader: n,
              context: t,
              networkDetails: i
            });
          }
        }]), t;
      }(d.default);

      r.default = E;
    }, {
      2: 2,
      28: 28,
      29: 29,
      30: 30,
      42: 42,
      46: 46
    }],
    39: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = Math.pow(2, 32) - 1,
          o = function () {
        function e() {
          a(this, e);
        }

        return i(e, null, [{
          key: "init",
          value: function value() {
            e.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
            };
            var t;

            for (t in e.types) {
              e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
            }

            var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            e.HDLR_TYPES = {
              video: r,
              audio: a
            };
            var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            var o = new Uint8Array([105, 115, 111, 109]),
                s = new Uint8Array([97, 118, 99, 49]),
                l = new Uint8Array([0, 0, 0, 1]);
            e.FTYP = e.box(e.types.ftyp, o, l, o, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i));
          }
        }, {
          key: "box",
          value: function value(e) {
            for (var t, r = Array.prototype.slice.call(arguments, 1), a = 8, i = r.length, n = i; i--;) {
              a += r[i].byteLength;
            }

            for ((t = new Uint8Array(a))[0] = a >> 24 & 255, t[1] = a >> 16 & 255, t[2] = a >> 8 & 255, t[3] = 255 & a, t.set(e, 4), i = 0, a = 8; i < n; i++) {
              t.set(r[i], a), a += r[i].byteLength;
            }

            return t;
          }
        }, {
          key: "hdlr",
          value: function value(t) {
            return e.box(e.types.hdlr, e.HDLR_TYPES[t]);
          }
        }, {
          key: "mdat",
          value: function value(t) {
            return e.box(e.types.mdat, t);
          }
        }, {
          key: "mdhd",
          value: function value(t, r) {
            r *= t;
            var a = Math.floor(r / (n + 1)),
                i = Math.floor(r % (n + 1));
            return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]));
          }
        }, {
          key: "mdia",
          value: function value(t) {
            return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t));
          }
        }, {
          key: "mfhd",
          value: function value(t) {
            return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]));
          }
        }, {
          key: "minf",
          value: function value(t) {
            return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t));
          }
        }, {
          key: "moof",
          value: function value(t, r, a) {
            return e.box(e.types.moof, e.mfhd(t), e.traf(a, r));
          }
        }, {
          key: "moov",
          value: function value(t) {
            for (var r = t.length, a = []; r--;) {
              a[r] = e.trak(t[r]);
            }

            return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(a).concat(e.mvex(t)));
          }
        }, {
          key: "mvex",
          value: function value(t) {
            for (var r = t.length, a = []; r--;) {
              a[r] = e.trex(t[r]);
            }

            return e.box.apply(null, [e.types.mvex].concat(a));
          }
        }, {
          key: "mvhd",
          value: function value(t, r) {
            r *= t;
            var a = Math.floor(r / (n + 1)),
                i = Math.floor(r % (n + 1)),
                o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return e.box(e.types.mvhd, o);
          }
        }, {
          key: "sdtp",
          value: function value(t) {
            var r,
                a,
                i = t.samples || [],
                n = new Uint8Array(4 + i.length);

            for (a = 0; a < i.length; a++) {
              r = i[a].flags, n[a + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
            }

            return e.box(e.types.sdtp, n);
          }
        }, {
          key: "stbl",
          value: function value(t) {
            return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO));
          }
        }, {
          key: "avc1",
          value: function value(t) {
            var r,
                a,
                i,
                n = [],
                o = [];

            for (r = 0; r < t.sps.length; r++) {
              i = (a = t.sps[r]).byteLength, n.push(i >>> 8 & 255), n.push(255 & i), n = n.concat(Array.prototype.slice.call(a));
            }

            for (r = 0; r < t.pps.length; r++) {
              i = (a = t.pps[r]).byteLength, o.push(i >>> 8 & 255), o.push(255 & i), o = o.concat(Array.prototype.slice.call(a));
            }

            var s = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(o))),
                l = t.width,
                u = t.height,
                d = t.pixelRatio[0],
                f = t.pixelRatio[1];
            return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f])));
          }
        }, {
          key: "esds",
          value: function value(e) {
            var t = e.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]));
          }
        }, {
          key: "mp4a",
          value: function value(t) {
            var r = t.samplerate;
            return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)));
          }
        }, {
          key: "mp3",
          value: function value(t) {
            var r = t.samplerate;
            return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]));
          }
        }, {
          key: "stsd",
          value: function value(t) {
            return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t));
          }
        }, {
          key: "tkhd",
          value: function value(t) {
            var r = t.id,
                a = t.duration * t.timescale,
                i = t.width,
                o = t.height,
                s = Math.floor(a / (n + 1)),
                l = Math.floor(a % (n + 1));
            return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, o >> 8 & 255, 255 & o, 0, 0]));
          }
        }, {
          key: "traf",
          value: function value(t, r) {
            var a = e.sdtp(t),
                i = t.id,
                o = Math.floor(r / (n + 1)),
                s = Math.floor(r % (n + 1));
            return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, a.length + 16 + 20 + 8 + 16 + 8 + 8), a);
          }
        }, {
          key: "trak",
          value: function value(t) {
            return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t));
          }
        }, {
          key: "trex",
          value: function value(t) {
            var r = t.id;
            return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
          }
        }, {
          key: "trun",
          value: function value(t, r) {
            var a,
                i,
                n,
                o,
                s,
                l,
                u = t.samples || [],
                d = u.length,
                f = 12 + 16 * d,
                h = new Uint8Array(f);

            for (r += 8 + f, h.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), a = 0; a < d; a++) {
              n = (i = u[a]).duration, o = i.size, s = i.flags, l = i.cts, h.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * a);
            }

            return e.box(e.types.trun, h);
          }
        }, {
          key: "initSegment",
          value: function value(t) {
            e.types || e.init();
            var r,
                a = e.moov(t);
            return (r = new Uint8Array(e.FTYP.byteLength + a.byteLength)).set(e.FTYP), r.set(a, e.FTYP.byteLength), r;
          }
        }]), e;
      }();

      r.default = o;
    }, {}],
    40: [function (e, t, r) {
      "use strict";

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          o = a(e(31)),
          s = a(e(30)),
          l = e(46),
          u = a(e(39)),
          d = e(28),
          f = function () {
        function e(t, r, a, n) {
          i(this, e), this.observer = t, this.config = r, this.typeSupported = a;
          var o = navigator.userAgent;
          this.isSafari = n && n.indexOf("Apple") > -1 && o && !o.match("CriOS"), this.ISGenerated = !1;
        }

        return n(e, [{
          key: "destroy",
          value: function value() {}
        }, {
          key: "resetTimeStamp",
          value: function value(e) {
            this._initPTS = this._initDTS = e;
          }
        }, {
          key: "resetInitSegment",
          value: function value() {
            this.ISGenerated = !1;
          }
        }, {
          key: "remux",
          value: function value(e, t, r, a, i, n, o) {
            if (this.ISGenerated) {
              if (o) {
                var u = this._initPTS,
                    d = this._PTSNormalize,
                    f = e.inputTimeScale || t.inputTimeScale,
                    h = 1 / 0,
                    c = 1 / 0,
                    v = e.samples;

                if (v.length && (h = c = d(v[0].pts - f * i, u)), (v = t.samples).length) {
                  var g = v[0];
                  h = Math.min(h, d(g.pts - f * i, u)), c = Math.min(c, d(g.dts - f * i, u));
                }

                if (h !== 1 / 0) {
                  var p = u - h;
                  Math.abs(p) > 10 * f && (l.logger.warn("timestamp inconsistency, " + (p / f).toFixed(3) + "s delta against expected value: missing discontinuity ? reset initPTS/initDTS"), this._initPTS = h, this._initDTS = c, this.observer.trigger(s.default.INIT_PTS_FOUND, {
                    initPTS: h
                  }));
                }
              }
            } else this.generateIS(e, t, i);

            if (this.ISGenerated) if (e.samples.length) {
              e.timescale || (l.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, i));
              var y = this.remuxAudio(e, i, n, o);

              if (t.samples.length) {
                var m = void 0;
                y && (m = y.endPTS - y.startPTS), t.timescale || (l.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, i)), this.remuxVideo(t, i, n, m, o);
              }
            } else {
              var b = void 0;
              t.samples.length && (b = this.remuxVideo(t, i, n, o)), b && e.codec && this.remuxEmptyAudio(e, i, n, b);
            }
            r.samples.length && this.remuxID3(r, i), a.samples.length && this.remuxText(a, i), this.observer.trigger(s.default.FRAG_PARSED);
          }
        }, {
          key: "generateIS",
          value: function value(e, t, r) {
            var a,
                i,
                n = this.observer,
                o = e.samples,
                f = t.samples,
                h = this.typeSupported,
                c = "audio/mp4",
                v = {},
                g = {
              tracks: v
            },
                p = void 0 === this._initPTS;

            if (p && (a = i = 1 / 0), e.config && o.length && (e.timescale = e.samplerate, l.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (h.mpeg ? (c = "audio/mpeg", e.codec = "") : h.mp3 && (e.codec = "mp3")), v.audio = {
              container: c,
              codec: e.codec,
              initSegment: !e.isAAC && h.mpeg ? new Uint8Array() : u.default.initSegment([e]),
              metadata: {
                channelCount: e.channelCount
              }
            }, p && (a = i = o[0].pts - e.inputTimeScale * r)), t.sps && t.pps && f.length) {
              var y = t.inputTimeScale;
              t.timescale = y, v.video = {
                container: "video/mp4",
                codec: t.codec,
                initSegment: u.default.initSegment([t]),
                metadata: {
                  width: t.width,
                  height: t.height
                }
              }, p && (a = Math.min(a, f[0].pts - y * r), i = Math.min(i, f[0].dts - y * r), this.observer.trigger(s.default.INIT_PTS_FOUND, {
                initPTS: a
              }));
            }

            Object.keys(v).length ? (n.trigger(s.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, p && (this._initPTS = a, this._initDTS = i)) : n.trigger(s.default.ERROR, {
              type: d.ErrorTypes.MEDIA_ERROR,
              details: d.ErrorDetails.FRAG_PARSING_ERROR,
              fatal: !1,
              reason: "no audio/video samples found"
            });
          }
        }, {
          key: "remuxVideo",
          value: function value(e, t, r, a, i) {
            var n,
                o,
                f,
                h,
                c,
                v,
                g,
                p = 8,
                y = e.timescale,
                m = e.samples,
                b = [],
                E = m.length,
                _ = this._PTSNormalize,
                T = this._initDTS,
                R = this.nextAvcDts,
                A = this.isSafari;
            A && (r |= m.length && R && (i && Math.abs(t - R / y) < .1 || Math.abs(m[0].pts - R - T) < y / 5)), r || (R = t * y), m.forEach(function (e) {
              e.pts = _(e.pts - T, R), e.dts = _(e.dts - T, R);
            }), m.sort(function (e, t) {
              var r = e.dts - t.dts,
                  a = e.pts - t.pts;
              return r || a || e.id - t.id;
            });
            var S = m.reduce(function (e, t) {
              return Math.max(Math.min(e, t.pts - t.dts), -18e3);
            }, 0);

            if (S < 0) {
              l.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(S / 90) + " ms to overcome this issue");

              for (var k = 0; k < m.length; k++) {
                m[k].dts += S;
              }
            }

            var L = m[0];
            c = Math.max(L.dts, 0), h = Math.max(L.pts, 0);
            var w = Math.round((c - R) / 90);
            r && w && (w > 1 ? l.logger.log("AVC:" + w + " ms hole between fragments detected,filling it") : w < -1 && l.logger.log("AVC:" + -w + " ms overlapping between fragments detected"), c = R, m[0].dts = c, h = Math.max(h - w, R), m[0].pts = h, l.logger.log("Video/PTS/DTS adjusted: " + Math.round(h / 90) + "/" + Math.round(c / 90) + ",delta:" + w + " ms")), L = m[m.length - 1], g = Math.max(L.dts, 0), v = Math.max(L.pts, 0, g), A && (n = Math.round((g - c) / (m.length - 1)));

            for (var D = 0, O = 0, P = 0; P < E; P++) {
              for (var x = m[P], I = x.units, M = I.length, F = 0, C = 0; C < M; C++) {
                F += I[C].data.length;
              }

              O += F, D += M, x.length = F, x.dts = A ? c + P * n : Math.max(x.dts, c), x.pts = Math.max(x.pts, x.dts);
            }

            var N = O + 4 * D + 8;

            try {
              o = new Uint8Array(N);
            } catch (e) {
              return void this.observer.trigger(s.default.ERROR, {
                type: d.ErrorTypes.MUX_ERROR,
                details: d.ErrorDetails.REMUX_ALLOC_ERROR,
                fatal: !1,
                bytes: N,
                reason: "fail allocating video mdat " + N
              });
            }

            var U = new DataView(o.buffer);
            U.setUint32(0, N), o.set(u.default.types.mdat, 4);

            for (var B = 0; B < E; B++) {
              for (var G = m[B], j = G.units, H = 0, V = void 0, W = 0, K = j.length; W < K; W++) {
                var z = j[W],
                    Y = z.data,
                    X = z.data.byteLength;
                U.setUint32(p, X), p += 4, o.set(Y, p), p += X, H += 4 + X;
              }

              if (A) V = Math.max(0, n * Math.round((G.pts - G.dts) / n));else {
                if (B < E - 1) n = m[B + 1].dts - G.dts;else {
                  var q = this.config,
                      Q = G.dts - m[B > 0 ? B - 1 : B].dts;

                  if (q.stretchShortVideoTrack) {
                    var Z = q.maxBufferHole,
                        J = q.maxSeekHole,
                        $ = Math.floor(Math.min(Z, J) * y),
                        ee = (a ? h + a * y : this.nextAudioPts) - G.pts;
                    ee > $ ? ((n = ee - Q) < 0 && (n = Q), l.logger.log("It is approximately " + ee / 90 + " ms to the next segment; using duration " + n / 90 + " ms for the last video frame.")) : n = Q;
                  } else n = Q;
                }
                V = Math.round(G.pts - G.dts);
              }
              b.push({
                size: H,
                duration: n,
                cts: V,
                flags: {
                  isLeading: 0,
                  isDependedOn: 0,
                  hasRedundancy: 0,
                  degradPrio: 0,
                  dependsOn: G.key ? 2 : 1,
                  isNonSync: G.key ? 0 : 1
                }
              });
            }

            this.nextAvcDts = g + n;
            var te = e.dropped;

            if (e.len = 0, e.nbNalu = 0, e.dropped = 0, b.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
              var re = b[0].flags;
              re.dependsOn = 2, re.isNonSync = 0;
            }

            e.samples = b, f = u.default.moof(e.sequenceNumber++, c, e), e.samples = [];
            var ae = {
              data1: f,
              data2: o,
              startPTS: h / y,
              endPTS: (v + n) / y,
              startDTS: c / y,
              endDTS: this.nextAvcDts / y,
              type: "video",
              nb: b.length,
              dropped: te
            };
            return this.observer.trigger(s.default.FRAG_PARSING_DATA, ae), ae;
          }
        }, {
          key: "remuxAudio",
          value: function value(e, t, r, a) {
            var i,
                n,
                f,
                h,
                c,
                v,
                g,
                p = e.inputTimeScale,
                y = p / e.timescale,
                m = (e.isAAC ? 1024 : 1152) * y,
                b = this._PTSNormalize,
                E = this._initDTS,
                _ = !e.isAAC && this.typeSupported.mpeg,
                T = e.samples,
                R = [],
                A = this.nextAudioPts;

            if ((r |= T.length && A && (a && Math.abs(t - A / p) < .1 || Math.abs(T[0].pts - A - E) < 20 * m)) || (A = t * p), T.forEach(function (e) {
              e.pts = e.dts = b(e.pts - E, A);
            }), T.sort(function (e, t) {
              return e.pts - t.pts;
            }), a && e.isAAC) for (var S = 0, k = A; S < T.length;) {
              var L,
                  w = T[S];
              L = w.pts - k;
              var D = Math.abs(1e3 * L / p);
              if (L <= -m) l.logger.warn("Dropping 1 audio frame @ " + (k / p).toFixed(3) + "s due to " + D + " ms overlap."), T.splice(S, 1), e.len -= w.unit.length;else if (L >= m && D < 1e4 && k) {
                var O = Math.round(L / m);
                l.logger.warn("Injecting " + O + " audio frame @ " + (k / p).toFixed(3) + "s due to " + Math.round(1e3 * L / p) + " ms gap.");

                for (var P = 0; P < O; P++) {
                  var x = Math.max(k, 0);
                  (f = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), f = w.unit.subarray()), T.splice(S, 0, {
                    unit: f,
                    pts: x,
                    dts: x
                  }), e.len += f.length, k += m, S++;
                }

                w.pts = w.dts = k, k += m, S++;
              } else Math.abs(L), w.pts = w.dts = k, k += m, S++;
            }

            for (var I = 0, M = T.length; I < M; I++) {
              var F = T[I],
                  C = F.unit,
                  N = F.pts;
              if (void 0 !== g) n.duration = Math.round((N - g) / y);else {
                var U = Math.round(1e3 * (N - A) / p),
                    B = 0;

                if (r && e.isAAC && U) {
                  if (U > 0 && U < 1e4) B = Math.round((N - A) / m), l.logger.log(U + " ms hole between AAC samples detected,filling it"), B > 0 && ((f = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (f = C.subarray()), e.len += B * f.length);else if (U < -12) {
                    l.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (A / p).toFixed(3) + "s/" + (N / p).toFixed(3) + "s/" + -U + "ms"), e.len -= C.byteLength;
                    continue;
                  }
                  N = A;
                }

                if (v = Math.max(0, N), !(e.len > 0)) return;
                var G = _ ? e.len : e.len + 8;
                i = _ ? 0 : 8;

                try {
                  h = new Uint8Array(G);
                } catch (e) {
                  return void this.observer.trigger(s.default.ERROR, {
                    type: d.ErrorTypes.MUX_ERROR,
                    details: d.ErrorDetails.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    bytes: G,
                    reason: "fail allocating audio mdat " + G
                  });
                }

                _ || (new DataView(h.buffer).setUint32(0, G), h.set(u.default.types.mdat, 4));

                for (var j = 0; j < B; j++) {
                  (f = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), f = C.subarray()), h.set(f, i), i += f.byteLength, n = {
                    size: f.byteLength,
                    cts: 0,
                    duration: 1024,
                    flags: {
                      isLeading: 0,
                      isDependedOn: 0,
                      hasRedundancy: 0,
                      degradPrio: 0,
                      dependsOn: 1
                    }
                  }, R.push(n);
                }
              }
              h.set(C, i);
              var H = C.byteLength;
              i += H, n = {
                size: H,
                cts: 0,
                duration: 0,
                flags: {
                  isLeading: 0,
                  isDependedOn: 0,
                  hasRedundancy: 0,
                  degradPrio: 0,
                  dependsOn: 1
                }
              }, R.push(n), g = N;
            }

            var V = 0,
                W = R.length;

            if (W >= 2 && (V = R[W - 2].duration, n.duration = V), W) {
              this.nextAudioPts = A = g + y * V, e.len = 0, e.samples = R, c = _ ? new Uint8Array() : u.default.moof(e.sequenceNumber++, v / y, e), e.samples = [];
              var K = v / p,
                  z = A / p,
                  Y = {
                data1: c,
                data2: h,
                startPTS: K,
                endPTS: z,
                startDTS: K,
                endDTS: z,
                type: "audio",
                nb: W
              };
              return this.observer.trigger(s.default.FRAG_PARSING_DATA, Y), Y;
            }

            return null;
          }
        }, {
          key: "remuxEmptyAudio",
          value: function value(e, t, r, a) {
            var i = e.inputTimeScale,
                n = i / (e.samplerate ? e.samplerate : i),
                s = this.nextAudioPts,
                u = (void 0 !== s ? s : a.startDTS * i) + this._initDTS,
                d = a.endDTS * i + this._initDTS,
                f = 1024 * n,
                h = Math.ceil((d - u) / f),
                c = o.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);

            if (l.logger.warn("remux empty Audio"), c) {
              for (var v = [], g = 0; g < h; g++) {
                var p = u + g * f;
                v.push({
                  unit: c,
                  pts: p,
                  dts: p
                }), e.len += c.length;
              }

              e.samples = v, this.remuxAudio(e, t, r);
            } else l.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
          }
        }, {
          key: "remuxID3",
          value: function value(e, t) {
            var r,
                a = e.samples.length,
                i = e.inputTimeScale,
                n = this._initPTS,
                o = this._initDTS;

            if (a) {
              for (var l = 0; l < a; l++) {
                (r = e.samples[l]).pts = (r.pts - n) / i, r.dts = (r.dts - o) / i;
              }

              this.observer.trigger(s.default.FRAG_PARSING_METADATA, {
                samples: e.samples
              });
            }

            e.samples = [], t = t;
          }
        }, {
          key: "remuxText",
          value: function value(e, t) {
            e.samples.sort(function (e, t) {
              return e.pts - t.pts;
            });
            var r,
                a = e.samples.length,
                i = e.inputTimeScale,
                n = this._initPTS;

            if (a) {
              for (var o = 0; o < a; o++) {
                (r = e.samples[o]).pts = (r.pts - n) / i;
              }

              this.observer.trigger(s.default.FRAG_PARSING_USERDATA, {
                samples: e.samples
              });
            }

            e.samples = [], t = t;
          }
        }, {
          key: "_PTSNormalize",
          value: function value(e, t) {
            var r;
            if (void 0 === t) return e;

            for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) {
              e += r;
            }

            return e;
          }
        }]), e;
      }();

      r.default = f;
    }, {
      28: 28,
      30: 30,
      31: 31,
      39: 39,
      46: 46
    }],
    41: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(e(30)),
          o = function () {
        function e(t) {
          a(this, e), this.observer = t;
        }

        return i(e, [{
          key: "destroy",
          value: function value() {}
        }, {
          key: "resetTimeStamp",
          value: function value() {}
        }, {
          key: "resetInitSegment",
          value: function value() {}
        }, {
          key: "remux",
          value: function value(e, t, r, a, i, o, s, l) {
            var u = this.observer,
                d = "";
            e && (d += "audio"), t && (d += "video"), u.trigger(n.default.FRAG_PARSING_DATA, {
              data1: l,
              startPTS: i,
              startDTS: i,
              type: d,
              nb: 1,
              dropped: 0
            }), u.trigger(n.default.FRAG_PARSED);
          }
        }]), e;
      }();

      r.default = o;
    }, {
      30: 30
    }],
    42: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = /^(\d+)x(\d+)$/,
          o = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
          s = function () {
        function e(t) {
          a(this, e), "string" == typeof t && (t = e.parseAttrList(t));

          for (var r in t) {
            t.hasOwnProperty(r) && (this[r] = t[r]);
          }
        }

        return i(e, [{
          key: "decimalInteger",
          value: function value(e) {
            var t = parseInt(this[e], 10);
            return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
          }
        }, {
          key: "hexadecimalInteger",
          value: function value(e) {
            if (this[e]) {
              var t = (this[e] || "0x").slice(2);
              t = (1 & t.length ? "0" : "") + t;

              for (var r = new Uint8Array(t.length / 2), a = 0; a < t.length / 2; a++) {
                r[a] = parseInt(t.slice(2 * a, 2 * a + 2), 16);
              }

              return r;
            }

            return null;
          }
        }, {
          key: "hexadecimalIntegerAsNumber",
          value: function value(e) {
            var t = parseInt(this[e], 16);
            return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
          }
        }, {
          key: "decimalFloatingPoint",
          value: function value(e) {
            return parseFloat(this[e]);
          }
        }, {
          key: "enumeratedString",
          value: function value(e) {
            return this[e];
          }
        }, {
          key: "decimalResolution",
          value: function value(e) {
            var t = n.exec(this[e]);
            if (null !== t) return {
              width: parseInt(t[1], 10),
              height: parseInt(t[2], 10)
            };
          }
        }], [{
          key: "parseAttrList",
          value: function value(e) {
            var t,
                r = {};

            for (o.lastIndex = 0; null !== (t = o.exec(e));) {
              var a = t[2];
              0 === a.indexOf('"') && a.lastIndexOf('"') === a.length - 1 && (a = a.slice(1, -1)), r[t[1]] = a;
            }

            return r;
          }
        }]), e;
      }();

      r.default = s;
    }, {}],
    43: [function (e, t, r) {
      "use strict";

      var a = {
        search: function search(e, t) {
          for (var r = 0, a = e.length - 1, i = null, n = null; r <= a;) {
            var o = t(n = e[i = (r + a) / 2 | 0]);
            if (o > 0) r = i + 1;else {
              if (!(o < 0)) return n;
              a = i - 1;
            }
          }

          return null;
        }
      };
      t.exports = a;
    }, {}],
    44: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(e(45)),
          o = function () {
        function e(t, r, i, o) {
          a(this, e), this.hls = t, this.defaultEstimate_ = o, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new n.default(r), this.fast_ = new n.default(i);
        }

        return i(e, [{
          key: "sample",
          value: function value(e, t) {
            var r = 8e3 * t / (e = Math.max(e, this.minDelayMs_)),
                a = e / 1e3;
            this.fast_.sample(a, r), this.slow_.sample(a, r);
          }
        }, {
          key: "canEstimate",
          value: function value() {
            var e = this.fast_;
            return e && e.getTotalWeight() >= this.minWeight_;
          }
        }, {
          key: "getEstimate",
          value: function value() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          }
        }, {
          key: "destroy",
          value: function value() {}
        }]), e;
      }();

      r.default = o;
    }, {
      45: 45
    }],
    45: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = function () {
        function e(t) {
          a(this, e), this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0;
        }

        return i(e, [{
          key: "sample",
          value: function value(e, t) {
            var r = Math.pow(this.alpha_, e);
            this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e;
          }
        }, {
          key: "getTotalWeight",
          value: function value() {
            return this.totalWeight_;
          }
        }, {
          key: "getEstimate",
          value: function value() {
            if (this.alpha_) {
              var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
              return this.estimate_ / e;
            }

            return this.estimate_;
          }
        }]), e;
      }();

      r.default = n;
    }, {}],
    46: [function (e, t, r) {
      "use strict";

      function a() {}

      function i(e, t) {
        return t = "[" + e + "] > " + t;
      }

      function n(e) {
        var t = self.console[e];
        return t ? function () {
          for (var r = arguments.length, a = Array(r), n = 0; n < r; n++) {
            a[n] = arguments[n];
          }

          a[0] && (a[0] = i(e, a[0])), t.apply(self.console, a);
        } : a;
      }

      function o(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
          r[a - 1] = arguments[a];
        }

        r.forEach(function (t) {
          u[t] = e[t] ? e[t].bind(e) : n(t);
        });
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          l = {
        trace: a,
        debug: a,
        log: a,
        warn: a,
        info: a,
        error: a
      },
          u = l;
      r.enableLogs = function (e) {
        if (!0 === e || "object" === (void 0 === e ? "undefined" : s(e))) {
          o(e, "debug", "log", "info", "warn", "error");

          try {
            u.log();
          } catch (e) {
            u = l;
          }
        } else u = l;
      }, r.logger = u;
    }, {}],
    47: [function (e, t, r) {
      "use strict";

      var a = {
        toString: function toString(e) {
          for (var t = "", r = e.length, a = 0; a < r; a++) {
            t += "[" + e.start(a).toFixed(3) + "," + e.end(a).toFixed(3) + "]";
          }

          return t;
        }
      };
      t.exports = a;
    }, {}],
    48: [function (e, t, r) {
      "use strict";

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        return function (t, r, a) {
          return r && e(t.prototype, r), a && e(t, a), t;
        };
      }(),
          n = e(46),
          o = function () {
        function e(t) {
          a(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup);
        }

        return i(e, [{
          key: "destroy",
          value: function value() {
            this.abort(), this.loader = null;
          }
        }, {
          key: "abort",
          value: function value() {
            var e = this.loader;
            e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null;
          }
        }, {
          key: "load",
          value: function value(e, t, r) {
            this.context = e, this.config = t, this.callbacks = r, this.stats = {
              trequest: performance.now(),
              retry: 0
            }, this.retryDelay = t.retryDelay, this.loadInternal();
          }
        }, {
          key: "loadInternal",
          value: function value() {
            var e,
                t = this.context;
            e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest() : this.loader = new XMLHttpRequest();
            var r = this.stats;
            r.tfirst = 0, r.loaded = 0;
            var a = this.xhrSetup;

            try {
              if (a) try {
                a(e, t.url);
              } catch (r) {
                e.open("GET", t.url, !0), a(e, t.url);
              }
              e.readyState || e.open("GET", t.url, !0);
            } catch (r) {
              return void this.callbacks.onError({
                code: e.status,
                text: r.message
              }, t, e);
            }

            t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send();
          }
        }, {
          key: "readystatechange",
          value: function value(e) {
            var t = e.currentTarget,
                r = t.readyState,
                a = this.stats,
                i = this.context,
                o = this.config;
            if (!a.aborted && r >= 2) if (window.clearTimeout(this.requestTimeout), 0 === a.tfirst && (a.tfirst = Math.max(performance.now(), a.trequest)), 4 === r) {
              var s = t.status;

              if (s >= 200 && s < 300) {
                a.tload = Math.max(a.tfirst, performance.now());
                var l = void 0,
                    u = void 0;
                u = "arraybuffer" === i.responseType ? (l = t.response).byteLength : (l = t.responseText).length, a.loaded = a.total = u;
                var d = {
                  url: t.responseURL,
                  data: l
                };
                this.callbacks.onSuccess(d, a, i, t);
              } else a.retry >= o.maxRetry || s >= 400 && s < 499 ? (n.logger.error(s + " while loading " + i.url), this.callbacks.onError({
                code: s,
                text: t.statusText
              }, i, t)) : (n.logger.warn(s + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), a.retry++);
            } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout);
          }
        }, {
          key: "loadtimeout",
          value: function value() {
            n.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null);
          }
        }, {
          key: "loadprogress",
          value: function value(e) {
            var t = e.currentTarget,
                r = this.stats;
            r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
            var a = this.callbacks.onProgress;
            a && a(r, this.context, null, t);
          }
        }]), e;
      }();

      r.default = o;
    }, {
      46: 46
    }]
  }, {}, [35])(35);
});

/***/ }),

/***/ 3771:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3390);

/***/ }),

/***/ 4550:
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ 8463:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(2526),
    eq = __webpack_require__(9231);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ 1855:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(4503),
    keys = __webpack_require__(2742);
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ 5076:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(4503),
    keysIn = __webpack_require__(3961);
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */


function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ 2526:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(8528);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ 3200:
/***/ (function(module) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }

    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }

  return number;
}

module.exports = baseClamp;

/***/ }),

/***/ 1905:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(2854),
    arrayEach = __webpack_require__(4550),
    assignValue = __webpack_require__(8463),
    baseAssign = __webpack_require__(1855),
    baseAssignIn = __webpack_require__(5076),
    cloneBuffer = __webpack_require__(4523),
    copyArray = __webpack_require__(291),
    copySymbols = __webpack_require__(2455),
    copySymbolsIn = __webpack_require__(7636),
    getAllKeys = __webpack_require__(8248),
    getAllKeysIn = __webpack_require__(5341),
    getTag = __webpack_require__(8383),
    initCloneArray = __webpack_require__(9243),
    initCloneByTag = __webpack_require__(9759),
    initCloneObject = __webpack_require__(548),
    isArray = __webpack_require__(3629),
    isBuffer = __webpack_require__(5174),
    isMap = __webpack_require__(103),
    isObject = __webpack_require__(8092),
    isSet = __webpack_require__(6995),
    keys = __webpack_require__(2742),
    keysIn = __webpack_require__(3961);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject(value)) {
    return value;
  }

  var isArr = isArray(value);

  if (isArr) {
    result = initCloneArray(value);

    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);

      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ 5763:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(8092);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ 3085:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(8383),
    isObjectLike = __webpack_require__(3141);
/** `Object#toString` result references. */


var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ 8680:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(8383),
    isObjectLike = __webpack_require__(3141);
/** `Object#toString` result references. */


var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ 8664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(8092),
    isPrototype = __webpack_require__(2936),
    nativeKeysIn = __webpack_require__(4221);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ 821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(6050);
/** Used to match leading whitespace. */


var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */

function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

module.exports = baseTrim;

/***/ }),

/***/ 7010:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(6219);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ 4523:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(7009);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/***/ }),

/***/ 1022:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(7010);
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */


function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ 8503:
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ 4720:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(7197);
/** Used to convert symbols to primitives and strings. */


var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ 613:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(7010);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ 291:
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ 4503:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(8463),
    baseAssignValue = __webpack_require__(2526);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ 2455:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(4503),
    getSymbols = __webpack_require__(5918);
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ 7636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(4503),
    getSymbolsIn = __webpack_require__(8487);
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */


function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ 8528:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(8136);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ 5341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1986),
    getSymbolsIn = __webpack_require__(8487),
    keysIn = __webpack_require__(3961);
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ 1137:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(2709);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ 8487:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(1705),
    getPrototype = __webpack_require__(1137),
    getSymbols = __webpack_require__(5918),
    stubArray = __webpack_require__(8174);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];

  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }

  return result;
};
module.exports = getSymbolsIn;

/***/ }),

/***/ 9243:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ 9759:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(7010),
    cloneDataView = __webpack_require__(1022),
    cloneRegExp = __webpack_require__(8503),
    cloneSymbol = __webpack_require__(4720),
    cloneTypedArray = __webpack_require__(613);
/** `Object#toString` result references. */


var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ 548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(5763),
    getPrototype = __webpack_require__(1137),
    isPrototype = __webpack_require__(2936);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ 4221:
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ 6050:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */

function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}

  return index;
}

module.exports = trimmedEndIndex;

/***/ }),

/***/ 4442:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClamp = __webpack_require__(3200),
    toNumber = __webpack_require__(2582);
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */


function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }

  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }

  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }

  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;

/***/ }),

/***/ 8121:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(1905);
/** Used to compose bitmasks for cloning. */


var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

/***/ }),

/***/ 8573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(8092),
    now = __webpack_require__(72),
    toNumber = __webpack_require__(2582);
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ 103:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(3085),
    baseUnary = __webpack_require__(6194),
    nodeUtil = __webpack_require__(9494);
/* Node.js helper references. */


var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

/***/ }),

/***/ 6995:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(8680),
    baseUnary = __webpack_require__(6194),
    nodeUtil = __webpack_require__(9494);
/* Node.js helper references. */


var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

/***/ }),

/***/ 152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9066),
    isObjectLike = __webpack_require__(3141);
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ 3961:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(7538),
    baseKeysIn = __webpack_require__(8664),
    isArrayLike = __webpack_require__(1473);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ 9151:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(8059);
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ 9694:
/***/ (function(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {// No operation performed.
}

module.exports = noop;

/***/ }),

/***/ 72:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(7009);
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */


var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ 2582:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(821),
    isObject = __webpack_require__(8092),
    isSymbol = __webpack_require__(152);
/** Used as references for various `Number` constants. */


var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ 5917:
/***/ (function(module) {

"use strict";


function hash(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }
  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */


  return hash >>> 0;
}

module.exports = hash;

/***/ }),

/***/ 7326:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 5671:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 3144:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 8557:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _createSuper; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && ((0,esm_typeof/* default */.Z)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,assertThisInitialized/* default */.Z)(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9611);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 9199:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ 9611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 3433:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(907);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(9199);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 1002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=555.d824411e.chunk.js.map