(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~fontawesome"],{

/***/ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Font Awesome Free 5.8.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
    return Constructor;
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
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
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'far': 'regular',
    'fal': 'light',
    'fab': 'brands',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'brands': 'fab'
  };
  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/;
  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';

  var NOOP = function NOOP() {};

  var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var asyncQueue = [];
  var asyncTimer;

  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    } // reset async asyncQueue


    asyncQueue = [];
    asyncTimer = false;
  }

  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);

    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }

  function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
      resolve(promise, value);
    }

    function rejectPromise(reason) {
      reject(promise, reason);
    }

    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }

  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;

    if (typeof callback === 'function') {
      settled = FULFILLED;

      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }

    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }

      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }

  function handleThenable(promise, value) {
    var resolved;

    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }

      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;

        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;

              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }

      return true;
    }

    return false;
  }

  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }

  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }

  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }

  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }

  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);

    if (!promise._handled && isNode) {
      global.process.emit('unhandledRejection', promise._data, promise);
    }
  }

  function notifyRejectionHandled(promise) {
    global.process.emit('rejectionHandled', promise);
  }
  /**
   * @class
   */


  function P(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    if (this instanceof P === false) {
      throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
    }

    this._then = [];
    invokeResolver(resolver, this);
  }

  P.prototype = {
    constructor: P,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function then(onFulfillment, onRejection) {
      var subscriber = {
        owner: this,
        then: new this.constructor(NOOP),
        fulfilled: onFulfillment,
        rejected: onRejection
      };

      if ((onRejection || onFulfillment) && !this._handled) {
        this._handled = true;

        if (this._state === REJECTED && isNode) {
          asyncCall(notifyRejectionHandled, this);
        }
      }

      if (this._state === FULFILLED || this._state === REJECTED) {
        // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
      } else {
        // subscribe
        this._then.push(subscriber);
      }

      return subscriber.then;
    },
    catch: function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };

  P.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.all().');
    }

    return new P(function (resolve, reject) {
      var results = [];
      var remaining = 0;

      function resolver(index) {
        remaining++;
        return function (value) {
          results[index] = value;

          if (! --remaining) {
            resolve(results);
          }
        };
      }

      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolver(i), reject);
        } else {
          results[i] = promise;
        }
      }

      if (!remaining) {
        resolve(results);
      }
    });
  };

  P.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.race().');
    }

    return new P(function (resolve, reject) {
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    });
  };

  P.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === P) {
      return value;
    }

    return new P(function (resolve) {
      resolve(value);
    });
  };

  P.reject = function (reason) {
    return new P(function (resolve, reject) {
      reject(reason);
    });
  };

  var picked = typeof Promise === 'function' ? Promise : P;

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };
  function makeIconMasking (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [{
        tag: 'path',
        attributes: _objectSpread({}, mainPath.attributes, trans.path, {
          fill: 'black'
        })
      }]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(nextUniqueId());
    var clipId = "clip-".concat(nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: [maskPath]
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      transform: transform,
      symbol: symbol,
      styles: extra.styles
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"5.8.1\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = 'far' in styles;
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };
  build();
  function byUnicode(prefix, unicode) {
    return _byUnicode[prefix][unicode];
  }
  function byLigature(prefix, ligature) {
    return _byLigature[prefix][ligature];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }

  var styles$1 = namespace.styles;
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalIcon(values) {
    return values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles$1[cls]) {
        acc.prefix = cls;
      } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fab', 'fa'].indexOf(cls) > -1) {
        acc.prefix = cls;
      } else if (iconName) {
        var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
        acc.iconName = shim.iconName || iconName;
        acc.prefix = shim.prefix || acc.prefix;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      return acc;
    }, emptyCanonicalIcon());
  }
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];
      var newOuterHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');

      if (node.parentNode && node.outerHTML) {
        node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
      } else if (node.parentNode) {
        var newNode = document.createElement('span');
        node.parentNode.replaceChild(newNode, node);
        newNode.outerHTML = newOuterHTML;
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete abstract[0].attributes.style;
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute('class', splitClasses.toNode.join(' '));
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var treeCallback = options.treeCallback,
        nodeCallback = options.nodeCallback,
        pseudoElementsCallback = options.pseudoElementsCallback,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class') {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
            if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
          } else {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function toHex(unicode) {
    var result = '';

    for (var i = 0; i < unicode.length; i++) {
      var hex = unicode.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-4);
    }

    return result;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;

          case 'shrink':
            acc.size = acc.size - rest;
            break;

          case 'left':
            acc.x = acc.x - rest;
            break;

          case 'right':
            acc.x = acc.x + rest;
            break;

          case 'up':
            acc.y = acc.y - rest;
            break;

          case 'down':
            acc.y = acc.y + rest;
            break;

          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };
  function transformParser (node) {
    return parseTransformString(node.getAttribute('data-fa-transform'));
  }

  function symbolParser (node) {
    var symbol = node.getAttribute('data-fa-symbol');
    return symbol === null ? false : symbol === '' ? true : symbol;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function maskParser (node) {
    var mask = node.getAttribute('data-fa-mask');

    if (!mask) {
      return emptyCanonicalIcon();
    } else {
      return getCanonicalIcon(mask.split(' ').map(function (i) {
        return i.trim();
      }));
    }
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var transform = transformParser(node);
    var symbol = symbolParser(node);
    var extraAttributes = attributesParser(node);
    var mask = maskParser(node);
    return {
      iconName: iconName,
      title: node.getAttribute('title'),
      prefix: prefix,
      transform: transform,
      symbol: symbol,
      mask: mask,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    };
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }
  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  var DOT = {
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  };
  var missing = {
    tag: 'g',
    children: [RING, DOT, QUESTION, EXCLAMATION]
  };

  var styles$2 = namespace.styles;
  function findIcon(iconName, prefix) {
    return new picked(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: missing
      };

      if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
        var icon = styles$2[prefix][iconName];
        var width = icon[0];
        var height = icon[1];
        var vectorData = icon.slice(4);
        val = {
          found: true,
          width: width,
          height: height,
          icon: {
            tag: 'path',
            attributes: {
              fill: 'currentColor',
              d: vectorData[0]
            }
          }
        };
        return resolve(val);
      }

      if (iconName && prefix && !config.showMissingIcons) {
        reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
      } else {
        resolve(val);
      }
    });
  }

  var styles$3 = namespace.styles;

  function generateSvgReplacementMutation(node, nodeMeta) {
    var iconName = nodeMeta.iconName,
        title = nodeMeta.title,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        symbol = nodeMeta.symbol,
        mask = nodeMeta.mask,
        extra = nodeMeta.extra;
    return new picked(function (resolve, reject) {
      picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            main = _ref2[0],
            mask = _ref2[1];

        resolve([node, makeInlineSvgAbstract({
          icons: {
            main: main,
            mask: mask
          },
          prefix: prefix,
          iconName: iconName,
          transform: transform,
          symbol: symbol,
          mask: mask,
          title: title,
          extra: extra,
          watchable: true
        })]);
      });
    });
  }

  function generateLayersText(node, nodeMeta) {
    var title = nodeMeta.title,
        transform = nodeMeta.transform,
        extra = nodeMeta.extra;
    var width = null;
    var height = null;

    if (IS_IE) {
      var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
      var boundingClientRect = node.getBoundingClientRect();
      width = boundingClientRect.width / computedFontSize;
      height = boundingClientRect.height / computedFontSize;
    }

    if (config.autoA11y && !title) {
      extra.attributes['aria-hidden'] = 'true';
    }

    return picked.resolve([node, makeLayersTextAbstract({
      content: node.innerHTML,
      width: width,
      height: height,
      transform: transform,
      title: title,
      extra: extra,
      watchable: true
    })]);
  }

  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return generateLayersText(node, nodeMeta);
    } else {
      return generateSvgReplacementMutation(node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return;
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return;
    }

    var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return;
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e instanceof MissingIcon) {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new picked(function (resolve, reject) {
      picked.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function () {
        mark();
        reject();
      });
    });
  }
  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new picked(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily) {
        var content = styles.getPropertyValue('content');
        var prefix = ~['Light', 'Regular', 'Solid', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
        var iconName = byUnicode(prefix, toHex(content.length === 3 ? content.substr(1, 1) : content)); // Only convert the pseudo element in this :before/:after position into an icon if we haven't
        // already done so with the same prefix and iconName

        if (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconName) {
          node.setAttribute(pendingAttribute, iconName);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconName,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElement('svg');

            if (position === ':before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements (root) {
    if (!IS_DOM) return;
    return new picked(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      picked.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";

  function css () {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library =
  /*#__PURE__*/
  function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function prepIcon(icon) {
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);
    return {
      found: true,
      width: width,
      height: height,
      icon: {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData[0]
        }
      }
    };
  }

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    disconnect();
  };
  var _cssInserted = false;
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        ensureCss();
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }

        return onTree(node, callback);
      } else {
        return picked.reject('Operation requires a DOM of some kind.');
      }
    },
    css: css,
    insertCss: function insertCss$$1() {
      if (!_cssInserted) {
        insertCss(css());

        _cssInserted = true;
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
          observeMutationsRoot = params.observeMutationsRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements,
          observeMutationsRoot: observeMutationsRoot
        });
      });
    }
  };
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: prepIcon(icon),
          mask: mask ? prepIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });
  var text = function text(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform2 = params.transform,
        transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
        _params$title2 = params.title,
        title = _params$title2 === void 0 ? null : _params$title2,
        _params$classes2 = params.classes,
        classes = _params$classes2 === void 0 ? [] : _params$classes2,
        _params$attributes2 = params.attributes,
        attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
        _params$styles2 = params.styles,
        styles = _params$styles2 === void 0 ? {} : _params$styles2;
    return apiObject({
      type: 'text',
      content: content
    }, function () {
      ensureCss();
      return makeLayersTextAbstract({
        content: content,
        transform: _objectSpread({}, meaninglessTransform, transform),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var counter = function counter(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$title3 = params.title,
        title = _params$title3 === void 0 ? null : _params$title3,
        _params$classes3 = params.classes,
        classes = _params$classes3 === void 0 ? [] : _params$classes3,
        _params$attributes3 = params.attributes,
        attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
        _params$styles3 = params.styles,
        styles = _params$styles3 === void 0 ? {} : _params$styles3;
    return apiObject({
      type: 'counter',
      content: content
    }, function () {
      ensureCss();
      return makeLayersCounterAbstract({
        content: content.toString(),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
        }
      });
    });
  };
  var layer = function layer(assembler) {
    return apiObject({
      type: 'layer'
    }, function () {
      ensureCss();
      var children = [];
      assembler(function (args) {
        Array.isArray(args) ? args.map(function (a) {
          children = children.concat(a.abstract);
        }) : children = children.concat(args.abstract);
      });
      return [{
        tag: 'span',
        attributes: {
          class: "".concat(config.familyPrefix, "-layers")
        },
        children: children
      }];
    });
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    library: library,
    parse: parse,
    findIconDefinition: findIconDefinition,
    icon: icon,
    text: text,
    counter: counter,
    layer: layer,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap() {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      });
    }

    namespace.hooks = _objectSpread({}, namespace.hooks, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons);
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  bunker(bootstrap);

}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjs7QUFFbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQywrQkFBK0I7QUFDOUU7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7O0FBRUEsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFP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RTtBQUM3QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM3QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM3QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxtREFBbUQsZ0NBQWdDO0FBQ25GO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzUxRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJjaHVua3MvdmVuZG9yc35mb250YXdlc29tZS4xNjBlZjdlN2YwNmExZTIwODA1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRm9udCBBd2Vzb21lIEZyZWUgNS44LjEgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cbiAqIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgKEljb25zOiBDQyBCWSA0LjAsIEZvbnRzOiBTSUwgT0ZMIDEuMSwgQ29kZTogTUlUIExpY2Vuc2UpXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgdmFyIF9XSU5ET1cgPSB7fTtcbiAgdmFyIF9ET0NVTUVOVCA9IHt9O1xuICB2YXIgX01VVEFUSU9OX09CU0VSVkVSID0gbnVsbDtcbiAgdmFyIF9QRVJGT1JNQU5DRSA9IHtcbiAgICBtYXJrOiBub29wLFxuICAgIG1lYXN1cmU6IG5vb3BcbiAgfTtcblxuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgX1dJTkRPVyA9IHdpbmRvdztcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgX0RPQ1VNRU5UID0gZG9jdW1lbnQ7XG4gICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJykgX1BFUkZPUk1BTkNFID0gcGVyZm9ybWFuY2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICAgIF9yZWYkdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQsXG4gICAgICB1c2VyQWdlbnQgPSBfcmVmJHVzZXJBZ2VudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHVzZXJBZ2VudDtcblxuICB2YXIgV0lORE9XID0gX1dJTkRPVztcbiAgdmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xuICB2YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG4gIHZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbiAgdmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbiAgdmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIHZhciBOQU1FU1BBQ0VfSURFTlRJRklFUiA9ICdfX19GT05UX0FXRVNPTUVfX18nO1xuICB2YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xuICB2YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbiAgdmFyIERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MgPSAnc3ZnLWlubGluZS0tZmEnO1xuICB2YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbiAgdmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG4gIHZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudC1wZW5kaW5nJztcbiAgdmFyIERBVEFfUFJFRklYID0gJ2RhdGEtcHJlZml4JztcbiAgdmFyIERBVEFfSUNPTiA9ICdkYXRhLWljb24nO1xuICB2YXIgSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTID0gJ2ZvbnRhd2Vzb21lLWkyc3ZnJztcbiAgdmFyIE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DID0gJ2FzeW5jJztcbiAgdmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG4gIHZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gXCJwcm9kdWN0aW9uXCIgPT09ICdwcm9kdWN0aW9uJztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KCk7XG4gIHZhciBQUkVGSVhfVE9fU1RZTEUgPSB7XG4gICAgJ2Zhcyc6ICdzb2xpZCcsXG4gICAgJ2Zhcic6ICdyZWd1bGFyJyxcbiAgICAnZmFsJzogJ2xpZ2h0JyxcbiAgICAnZmFiJzogJ2JyYW5kcycsXG4gICAgJ2ZhJzogJ3NvbGlkJ1xuICB9O1xuICB2YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAgICdzb2xpZCc6ICdmYXMnLFxuICAgICdyZWd1bGFyJzogJ2ZhcicsXG4gICAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICAgJ2JyYW5kcyc6ICdmYWInXG4gIH07XG4gIHZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xuICB2YXIgRk9OVF9GQU1JTFlfUEFUVEVSTiA9IC9Gb250IEF3ZXNvbWUgNSAoU29saWR8UmVndWxhcnxMaWdodHxCcmFuZHN8RnJlZXxQcm8pLztcbiAgdmFyIEZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IHtcbiAgICAnOTAwJzogJ2ZhcycsXG4gICAgJzQwMCc6ICdmYXInLFxuICAgICdub3JtYWwnOiAnZmFyJyxcbiAgICAnMzAwJzogJ2ZhbCdcbiAgfTtcbiAgdmFyIG9uZVRvVGVuID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgdmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xuICB2YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xuICB2YXIgUkVTRVJWRURfQ0xBU1NFUyA9IFsneHMnLCAnc20nLCAnbGcnLCAnZncnLCAndWwnLCAnbGknLCAnYm9yZGVyJywgJ3B1bGwtbGVmdCcsICdwdWxsLXJpZ2h0JywgJ3NwaW4nLCAncHVsc2UnLCAncm90YXRlLTkwJywgJ3JvdGF0ZS0xODAnLCAncm90YXRlLTI3MCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCcsICdmbGlwLWJvdGgnLCAnc3RhY2snLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnaW52ZXJzZScsICdsYXllcnMnLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzLWNvdW50ZXInXS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbiAgfSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gXCJ3LVwiLmNvbmNhdChuKTtcbiAgfSkpO1xuXG4gIHZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldEF0dHJDb25maWcoYXR0cikge1xuICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAgIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gICAgLy8gRm9yIGV4YW1wbGUgPHNjcmlwdCBkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMgc3JjPVwiLi4uXCI+PC9zY3JpcHQ+XG4gICAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBpZiAoRE9DVU1FTlQgJiYgdHlwZW9mIERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICAgIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAgICBrZXkgPSBfcmVmMlsxXTtcblxuICAgICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICBpbml0aWFsW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2RlZmF1bHQgPSB7XG4gICAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gICAgcmVwbGFjZW1lbnRDbGFzczogREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyxcbiAgICBhdXRvUmVwbGFjZVN2ZzogdHJ1ZSxcbiAgICBhdXRvQWRkQ3NzOiB0cnVlLFxuICAgIGF1dG9BMTF5OiB0cnVlLFxuICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICAgIG11dGF0ZUFwcHJvYWNoOiAnYXN5bmMnLFxuICAgIGtlZXBPcmlnaW5hbFNvdXJjZTogdHJ1ZSxcbiAgICBtZWFzdXJlUGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbiAgfTtcblxuICB2YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0LCBpbml0aWFsKTtcblxuICBpZiAoIV9jb25maWcuYXV0b1JlcGxhY2VTdmcpIF9jb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuXG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnKTtcblxuICBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG5cbiAgdmFyIHcgPSBXSU5ET1cgfHwge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0pIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG4gIGlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbiAgaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbiAgaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbiAgdmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG4gIHZhciBmdW5jdGlvbnMgPSBbXTtcblxuICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcblxuICBpZiAoSVNfRE9NKSB7XG4gICAgbG9hZGVkID0gKERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChET0NVTUVOVC5yZWFkeVN0YXRlKTtcbiAgICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG4gIH1cblxuICB2YXIgUEVORElORyA9ICdwZW5kaW5nJztcbiAgdmFyIFNFVFRMRUQgPSAnc2V0dGxlZCc7XG4gIHZhciBGVUxGSUxMRUQgPSAnZnVsZmlsbGVkJztcbiAgdmFyIFJFSkVDVEVEID0gJ3JlamVjdGVkJztcblxuICB2YXIgTk9PUCA9IGZ1bmN0aW9uIE5PT1AoKSB7fTtcblxuICB2YXIgaXNOb2RlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIGFzeW5jU2V0VGltZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAndW5kZWZpbmVkJyA/IHNldFRpbWVvdXQgOiBzZXRJbW1lZGlhdGU7XG4gIHZhciBhc3luY1F1ZXVlID0gW107XG4gIHZhciBhc3luY1RpbWVyO1xuXG4gIGZ1bmN0aW9uIGFzeW5jRmx1c2goKSB7XG4gICAgLy8gcnVuIHByb21pc2UgY2FsbGJhY2tzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3luY1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhc3luY1F1ZXVlW2ldWzBdKGFzeW5jUXVldWVbaV1bMV0pO1xuICAgIH0gLy8gcmVzZXQgYXN5bmMgYXN5bmNRdWV1ZVxuXG5cbiAgICBhc3luY1F1ZXVlID0gW107XG4gICAgYXN5bmNUaW1lciA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXN5bmNDYWxsKGNhbGxiYWNrLCBhcmcpIHtcbiAgICBhc3luY1F1ZXVlLnB1c2goW2NhbGxiYWNrLCBhcmddKTtcblxuICAgIGlmICghYXN5bmNUaW1lcikge1xuICAgICAgYXN5bmNUaW1lciA9IHRydWU7XG4gICAgICBhc3luY1NldFRpbWVyKGFzeW5jRmx1c2gsIDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCBwcm9taXNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZXIocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdFByb21pc2UoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc3Vic2NyaWJlcikge1xuICAgIHZhciBvd25lciA9IHN1YnNjcmliZXIub3duZXI7XG4gICAgdmFyIHNldHRsZWQgPSBvd25lci5fc3RhdGU7XG4gICAgdmFyIHZhbHVlID0gb3duZXIuX2RhdGE7XG4gICAgdmFyIGNhbGxiYWNrID0gc3Vic2NyaWJlcltzZXR0bGVkXTtcbiAgICB2YXIgcHJvbWlzZSA9IHN1YnNjcmliZXIudGhlbjtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldHRsZWQgPSBGVUxGSUxMRUQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICAgIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIHJlc29sdmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gdGhlbiBzaG91bGQgYmUgcmV0cmlldmVkIG9ubHkgb25jZVxuICAgICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSB8fCAhaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgICBwcm9taXNlLl9kYXRhID0gdmFsdWU7XG4gICAgICBhc3luY0NhbGwocHVibGlzaEZ1bGZpbGxtZW50LCBwcm9taXNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgICBwcm9taXNlLl9kYXRhID0gcmVhc29uO1xuICAgICAgYXN5bmNDYWxsKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICAgIHByb21pc2UuX3RoZW4gPSBwcm9taXNlLl90aGVuLmZvckVhY2goaW52b2tlQ2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVibGlzaEZ1bGZpbGxtZW50KHByb21pc2UpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICBwdWJsaXNoKHByb21pc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgICBwdWJsaXNoKHByb21pc2UpO1xuXG4gICAgaWYgKCFwcm9taXNlLl9oYW5kbGVkICYmIGlzTm9kZSkge1xuICAgICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgcHJvbWlzZS5fZGF0YSwgcHJvbWlzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5UmVqZWN0aW9uSGFuZGxlZChwcm9taXNlKSB7XG4gICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICB9XG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG5cblxuICBmdW5jdGlvbiBQKHJlc29sdmVyKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciAnICsgcmVzb2x2ZXIgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdQcm9taXNlXFwnOiBQbGVhc2UgdXNlIHRoZSBcXCduZXdcXCcgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLl90aGVuID0gW107XG4gICAgaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHRoaXMpO1xuICB9XG5cbiAgUC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IFAsXG4gICAgX3N0YXRlOiBQRU5ESU5HLFxuICAgIF90aGVuOiBudWxsLFxuICAgIF9kYXRhOiB1bmRlZmluZWQsXG4gICAgX2hhbmRsZWQ6IGZhbHNlLFxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVyID0ge1xuICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgdGhlbjogbmV3IHRoaXMuY29uc3RydWN0b3IoTk9PUCksXG4gICAgICAgIGZ1bGZpbGxlZDogb25GdWxmaWxsbWVudCxcbiAgICAgICAgcmVqZWN0ZWQ6IG9uUmVqZWN0aW9uXG4gICAgICB9O1xuXG4gICAgICBpZiAoKG9uUmVqZWN0aW9uIHx8IG9uRnVsZmlsbG1lbnQpICYmICF0aGlzLl9oYW5kbGVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQgJiYgaXNOb2RlKSB7XG4gICAgICAgICAgYXN5bmNDYWxsKG5vdGlmeVJlamVjdGlvbkhhbmRsZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gRlVMRklMTEVEIHx8IHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAvLyBhbHJlYWR5IHJlc29sdmVkLCBjYWxsIGNhbGxiYWNrIGFzeW5jXG4gICAgICAgIGFzeW5jQ2FsbChpbnZva2VDYWxsYmFjaywgc3Vic2NyaWJlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdWJzY3JpYmVcbiAgICAgICAgdGhpcy5fdGhlbi5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3Vic2NyaWJlci50aGVuO1xuICAgIH0sXG4gICAgY2F0Y2g6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIFAuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDA7XG5cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKGluZGV4KSB7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICAgIGlmICghIC0tcmVtYWluaW5nKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzW2ldID0gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFAucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUC5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlamVjdChyZWFzb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBwaWNrZWQgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UgOiBQO1xuXG4gIHZhciBkID0gVU5JVFNfSU5fR1JJRDtcbiAgdmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByb3RhdGU6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZVxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICAgIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVua2VyKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluc2VydENzcyhjc3MpIHtcbiAgICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gICAgdmFyIGhlYWRDaGlsZHJlbiA9IERPQ1VNRU5ULmhlYWQuY2hpbGROb2RlcztcbiAgICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IGhlYWRDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgdmFyIGNoaWxkID0gaGVhZENoaWxkcmVuW2ldO1xuICAgICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgICAgaWYgKFsnU1RZTEUnLCAnTElOSyddLmluZGV4T2YodGFnTmFtZSkgPiAtMSkge1xuICAgICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH1cblxuICAgIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG4gICAgcmV0dXJuIGNzcztcbiAgfVxuICB2YXIgaWRQb29sID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICAgIHZhciBzaXplID0gMTI7XG4gICAgdmFyIGlkID0gJyc7XG5cbiAgICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgICAgaWQgKz0gaWRQb29sW01hdGgucmFuZG9tKCkgKiA2MiB8IDBdO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbiAgfVxuICBmdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IChvYmogfHwgW10pLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICAgIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICAgIHZhciBwcmVmaXggPSBwYXJ0c1swXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICBpZiAocHJlZml4ID09PSBmYW1pbHlQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgICAgcmV0dXJuIGljb25OYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIH1cbiAgZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gICAgfSwgJycpLnRyaW0oKTtcbiAgfVxuICBmdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOiBcIikuY29uY2F0KHN0eWxlc1tzdHlsZU5hbWVdLCBcIjtcIik7XG4gICAgfSwgJycpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRm9yU3ZnKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG4gICAgdmFyIG91dGVyID0ge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gICAgfTtcbiAgICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICAgIHZhciBpbm5lclJvdGF0ZSA9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcIiAwIDApXCIpO1xuICAgIHZhciBpbm5lciA9IHtcbiAgICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgICB9O1xuICAgIHZhciBwYXRoID0ge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIG91dGVyOiBvdXRlcixcbiAgICAgIGlubmVyOiBpbm5lcixcbiAgICAgIHBhdGg6IHBhdGhcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBfcmVmMi50cmFuc2Zvcm0sXG4gICAgICAgIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgICAgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgICBoZWlnaHQgPSBfcmVmMiRoZWlnaHQgPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiRoZWlnaHQsXG4gICAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgICBzdGFydENlbnRlcmVkID0gX3JlZjIkc3RhcnRDZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdGFydENlbnRlcmVkO1xuICAgIHZhciB2YWwgPSAnJztcblxuICAgIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCAtIHdpZHRoIC8gMiwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQgLSBoZWlnaHQgLyAyLCBcImVtKSBcIik7XG4gICAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pIFwiKTtcbiAgICB9XG5cbiAgICB2YWwgKz0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICAgIHZhbCArPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCJkZWcpIFwiKTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgdmFyIEFMTF9TUEFDRSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9O1xuICBmdW5jdGlvbiBtYWtlSWNvbk1hc2tpbmcgKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgICB2YXIgbWFpbldpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gICAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICAgIG1hc2tQYXRoID0gbWFzay5pY29uO1xuICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiBtYXNrV2lkdGgsXG4gICAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICAgIH0pO1xuICAgIHZhciBtYXNrUmVjdCA9IHtcbiAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICAgIH0pXG4gICAgfTtcbiAgICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpblBhdGguYXR0cmlidXRlcywgdHJhbnMucGF0aCwge1xuICAgICAgICAgIGZpbGw6ICdibGFjaydcbiAgICAgICAgfSlcbiAgICAgIH1dXG4gICAgfTtcbiAgICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gICAgfTtcbiAgICB2YXIgbWFza0lkID0gXCJtYXNrLVwiLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICAgIHZhciBtYXNrVGFnID0ge1xuICAgICAgdGFnOiAnbWFzaycsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICAgIH07XG4gICAgdmFyIGRlZnMgPSB7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogY2xpcElkXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbbWFza1BhdGhdXG4gICAgICB9LCBtYXNrVGFnXVxuICAgIH07XG4gICAgY2hpbGRyZW4ucHVzaChkZWZzLCB7XG4gICAgICB0YWc6ICdyZWN0JyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJ2NsaXAtcGF0aCc6IFwidXJsKCNcIi5jb25jYXQoY2xpcElkLCBcIilcIiksXG4gICAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICAgIH0sIEFMTF9TUEFDRSlcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlSWNvblN0YW5kYXJkIChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuICAgIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICAgIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsXG4gICAgICAgIGljb25XaWR0aDogbWFpbi53aWR0aFxuICAgICAgfSk7XG4gICAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW4ucHVzaChtYWluLmljb24pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzSWNvbiAoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICAgIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSAmJiBtYWluLmZvdW5kICYmICFtYXNrLmZvdW5kKSB7XG4gICAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgICB5OiAwLjVcbiAgICAgIH07XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZXMsIHtcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3tcbiAgICAgIHRhZzogJ3N2ZycsXG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBhc1N5bWJvbCAoX3JlZikge1xuICAgIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeCxcbiAgICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuICAgIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6IHN5bWJvbDtcbiAgICByZXR1cm4gW3tcbiAgICAgIHRhZzogJ3N2ZycsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZTsnXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3N5bWJvbCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfV1cbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgICAgbWFzayA9IF9wYXJhbXMkaWNvbnMubWFzayxcbiAgICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICAgIHZhciBfcmVmID0gbWFzay5mb3VuZCA/IG1hc2sgOiBtYWluLFxuICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gICAgdmFyIHdpZHRoQ2xhc3MgPSBcImZhLXctXCIuY29uY2F0KE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KSk7XG4gICAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWcucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6ICcnLCB3aWR0aENsYXNzXS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICAgIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAgICdkYXRhLXByZWZpeCc6IHByZWZpeCxcbiAgICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAgICdyb2xlJzogJ2ltZycsXG4gICAgICAgICd4bWxucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIGlmICh3YXRjaGFibGUpIHtcbiAgICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ3RpdGxlJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gX29iamVjdFNwcmVhZCh7fSwgY29udGVudCwge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICBtYWluOiBtYWluLFxuICAgICAgbWFzazogbWFzayxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICBzdHlsZXM6IGV4dHJhLnN0eWxlc1xuICAgIH0pO1xuXG4gICAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gbWFrZUljb25NYXNraW5nKGFyZ3MpIDogbWFrZUljb25TdGFuZGFyZChhcmdzKSxcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgYXJncy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblxuICAgIGlmIChzeW1ib2wpIHtcbiAgICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAgICd0aXRsZSc6IHRpdGxlXG4gICAgfSA6IHt9LCB7XG4gICAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICAgIH0pO1xuXG4gICAgaWYgKHdhdGNoYWJsZSkge1xuICAgICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICAgIH1cblxuICAgIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gdHJhbnNmb3JtRm9yQ3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgICAgc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVzWyd0cmFuc2Zvcm0nXTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSBbXTtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gICAgfSk7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHZhbC5wdXNoKHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAgICd0aXRsZSc6IHRpdGxlXG4gICAgfSA6IHt9LCB7XG4gICAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICAgIH0pO1xuXG4gICAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gICAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgICB9XG5cbiAgICB2YXIgdmFsID0gW107XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRyZW46IFtjb250ZW50XVxuICAgIH0pO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB2YWwucHVzaCh7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgdmFyIHAgPSBjb25maWcubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDoge1xuICAgIG1hcms6IG5vb3AkMSxcbiAgICBtZWFzdXJlOiBub29wJDFcbiAgfTtcbiAgdmFyIHByZWFtYmxlID0gXCJGQSBcXFwiNS44LjFcXFwiXCI7XG5cbiAgdmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICAgIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZW5kKG5hbWUpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gICAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICAgIHAubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgfTtcblxuICB2YXIgcGVyZiA9IHtcbiAgICBiZWdpbjogYmVnaW4sXG4gICAgZW5kOiBlbmRcbiAgfTtcblxuICAvKipcbiAgICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gICAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAgICovXG5cbiAgdmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjLCBkKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiAjIFJlZHVjZVxuICAgKlxuICAgKiBBIGZhc3Qgb2JqZWN0IGAucmVkdWNlKClgIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAgICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICAgKi9cblxuXG4gIHZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0KHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgICBpLFxuICAgICAgICBrZXksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaSA9IDE7XG4gICAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBpID0gMDtcbiAgICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBmdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhpY29ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb25OYW1lKSB7XG4gICAgICB2YXIgaWNvbiA9IGljb25zW2ljb25OYW1lXTtcbiAgICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgYWNjW2ljb24uaWNvbk5hbWVdID0gaWNvbi5pY29uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcEhvb2tzKSB7XG4gICAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIG5vcm1hbGl6ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc3kgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICAgKiB0aGlzIGFzIHdlbGwuXG4gICAgICovXG5cblxuICAgIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXMsXG4gICAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbiAgdmFyIF9ieVVuaWNvZGUgPSB7fTtcbiAgdmFyIF9ieUxpZ2F0dXJlID0ge307XG4gIHZhciBfYnlPbGROYW1lID0ge307XG4gIHZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgIHZhciBsb29rdXAgPSBmdW5jdGlvbiBsb29rdXAocmVkdWNlcikge1xuICAgICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuXG4gICAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgICAgaWYgKGljb25bM10pIHtcbiAgICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7XG4gICAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICAgIHZhciBsaWdhdHVyZXMgPSBpY29uWzJdO1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgICAgbGlnYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2F0dXJlKSB7XG4gICAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9KTtcbiAgICB2YXIgaGFzUmVndWxhciA9ICdmYXInIGluIHN0eWxlcztcbiAgICBfYnlPbGROYW1lID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgICB2YXIgb2xkTmFtZSA9IHNoaW1bMF07XG4gICAgICB2YXIgcHJlZml4ID0gc2hpbVsxXTtcbiAgICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICAgIGlmIChwcmVmaXggPT09ICdmYXInICYmICFoYXNSZWd1bGFyKSB7XG4gICAgICAgIHByZWZpeCA9ICdmYXMnO1xuICAgICAgfVxuXG4gICAgICBhY2Nbb2xkTmFtZV0gPSB7XG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfTtcbiAgYnVpbGQoKTtcbiAgZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICAgIHJldHVybiBfYnlVbmljb2RlW3ByZWZpeF1bdW5pY29kZV07XG4gIH1cbiAgZnVuY3Rpb24gYnlMaWdhdHVyZShwcmVmaXgsIGxpZ2F0dXJlKSB7XG4gICAgcmV0dXJuIF9ieUxpZ2F0dXJlW3ByZWZpeF1bbGlnYXR1cmVdO1xuICB9XG4gIGZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcbiAgdmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGwsXG4gICAgICByZXN0OiBbXVxuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgICBpZiAoc3R5bGVzJDFbY2xzXSkge1xuICAgICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcuYXV0b0ZldGNoU3ZnICYmIFsnZmFzJywgJ2ZhcicsICdmYWwnLCAnZmFiJywgJ2ZhJ10uaW5kZXhPZihjbHMpID4gLTEpIHtcbiAgICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgICAgICBhY2MuaWNvbk5hbWUgPSBzaGltLmljb25OYW1lIHx8IGljb25OYW1lO1xuICAgICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgICBhY2MucmVzdC5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgZW1wdHlDYW5vbmljYWxJY29uKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gICAgaWYgKG1hcHBpbmcgJiYgbWFwcGluZ1twcmVmaXhdICYmIG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICAgIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuICBmdW5jdGlvbiBpc1dhdGNoZWQobm9kZSkge1xuICAgIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICAgIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgICB9XG5cbiAgICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gICAgcmV0dXJuIG11dGF0b3IgfHwgbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIHZhciBtdXRhdG9ycyA9IHtcbiAgICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKG11dGF0aW9uKSB7XG4gICAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgICB2YXIgbmV3T3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLm91dGVySFRNTCkge1xuICAgICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWcua2VlcE9yaWdpbmFsU291cmNlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJyA/IFwiPCEtLSBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIC0tPlwiKSA6ICcnKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpO1xuICAgICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTsgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKSkge1xuICAgICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JTdmcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLS4qXCIpKTtcbiAgICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLnN0eWxlO1xuICAgICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7XG4gICAgICAgIHRvTm9kZTogW10sXG4gICAgICAgIHRvU3ZnOiBbXVxuICAgICAgfSk7XG4gICAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcbiAgICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRywgJycpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gICAgb3AoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZnJhbWUgPSBwZXJmb3JtT3BlcmF0aW9uU3luYztcblxuICAgICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgICAgfVxuXG4gICAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIHZhciBtbyA9IG51bGw7XG4gIGZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICAgIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgICBub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IG9wdGlvbnMucHNldWRvRWxlbWVudHNDYWxsYmFjayxcbiAgICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICAgIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiAhaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXNbMF0pKSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXgpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4JywgcHJlZml4KTtcbiAgICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIW1vKSByZXR1cm47XG4gICAgbW8uZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB2YXIgdmFsID0gW107XG5cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhleCA9IHVuaWNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gICAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICAgIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICAgIH1cblxuICAgIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFsLmljb25OYW1lID0gYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICAgIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgICBzaXplOiAxNixcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgZmxpcFg6IGZhbHNlLFxuICAgICAgZmxpcFk6IGZhbHNlLFxuICAgICAgcm90YXRlOiAwXG4gICAgfTtcblxuICAgIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAnaCcpIHtcbiAgICAgICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgICAgaWYgKGlzTmFOKHJlc3QpKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZmlyc3QpIHtcbiAgICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHRyYW5zZm9ybSk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiB0cmFuc2Zvcm1QYXJzZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3ltYm9sUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIHN5bWJvbCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXN5bWJvbCcpO1xuICAgIHJldHVybiBzeW1ib2wgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbCA9PT0gJycgPyB0cnVlIDogc3ltYm9sO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0cmlidXRlc1BhcnNlciAobm9kZSkge1xuICAgIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICAgIGlmIChhY2MubmFtZSAhPT0gJ2NsYXNzJyAmJiBhY2MubmFtZSAhPT0gJ3N0eWxlJykge1xuICAgICAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICAgIGV4dHJhQXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBtYXNrUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIG1hc2sgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG5cbiAgICBpZiAoIW1hc2spIHtcbiAgICAgIHJldHVybiBlbXB0eUNhbm9uaWNhbEljb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldENhbm9uaWNhbEljb24obWFzay5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmxhbmtNZXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uTmFtZTogbnVsbCxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICAgIHN5bWJvbDogZmFsc2UsXG4gICAgICBtYXNrOiBudWxsLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgY2xhc3NlczogW10sXG4gICAgICAgIHN0eWxlczoge30sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICAgIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgICAgaWNvbk5hbWUgPSBfY2xhc3NQYXJzZXIuaWNvbk5hbWUsXG4gICAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gICAgdmFyIGV4dHJhU3R5bGVzID0gc3R5bGVQYXJzZXIobm9kZSk7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcnNlcihub2RlKTtcbiAgICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICAgIHZhciBleHRyYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzUGFyc2VyKG5vZGUpO1xuICAgIHZhciBtYXNrID0gbWFza1BhcnNlcihub2RlKTtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdGl0bGU6IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgbWFzazogbWFzayxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGNsYXNzZXM6IGV4dHJhQ2xhc3NlcyxcbiAgICAgICAgc3R5bGVzOiBleHRyYVN0eWxlcyxcbiAgICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1pc3NpbmdJY29uKGVycm9yKSB7XG4gICAgdGhpcy5uYW1lID0gJ01pc3NpbmdJY29uJztcbiAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvciB8fCAnSWNvbiB1bmF2YWlsYWJsZSc7XG4gICAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICB9XG4gIE1pc3NpbmdJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbiAgdmFyIEZJTEwgPSB7XG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfTtcbiAgdmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICAgIGF0dHJpYnV0ZVR5cGU6ICdYTUwnLFxuICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gICAgZHVyOiAnMnMnXG4gIH07XG4gIHZhciBSSU5HID0ge1xuICAgIHRhZzogJ3BhdGgnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICAgIH0pXG4gIH07XG5cbiAgdmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG4gIH0pO1xuXG4gIHZhciBET1QgPSB7XG4gICAgdGFnOiAnY2lyY2xlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgICBjeDogJzI1NicsXG4gICAgICBjeTogJzM2NCcsXG4gICAgICByOiAnMjgnXG4gICAgfSksXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgICAgdmFsdWVzOiAnMjg7MTQ7Mjg7Mjg7MTQ7Mjg7J1xuICAgICAgfSlcbiAgICB9LCB7XG4gICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgICB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnXG4gICAgICB9KVxuICAgIH1dXG4gIH07XG4gIHZhciBRVUVTVElPTiA9IHtcbiAgICB0YWc6ICdwYXRoJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgICBvcGFjaXR5OiAnMScsXG4gICAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICAgIH0pXG4gICAgfV1cbiAgfTtcbiAgdmFyIEVYQ0xBTUFUSU9OID0ge1xuICAgIHRhZzogJ3BhdGgnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgICAgdmFsdWVzOiAnMDswOzE7MTswOzA7J1xuICAgICAgfSlcbiAgICB9XVxuICB9O1xuICB2YXIgbWlzc2luZyA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBjaGlsZHJlbjogW1JJTkcsIERPVCwgUVVFU1RJT04sIEVYQ0xBTUFUSU9OXVxuICB9O1xuXG4gIHZhciBzdHlsZXMkMiA9IG5hbWVzcGFjZS5zdHlsZXM7XG4gIGZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgdmFsID0ge1xuICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgIGhlaWdodDogNTEyLFxuICAgICAgICBpY29uOiBtaXNzaW5nXG4gICAgICB9O1xuXG4gICAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlcyQyW3ByZWZpeF0gJiYgc3R5bGVzJDJbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgICAgdmFyIGljb24gPSBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXTtcbiAgICAgICAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgICAgICAgdmFyIGhlaWdodCA9IGljb25bMV07XG4gICAgICAgIHZhciB2ZWN0b3JEYXRhID0gaWNvbi5zbGljZSg0KTtcbiAgICAgICAgdmFsID0ge1xuICAgICAgICAgIGZvdW5kOiB0cnVlLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zKSB7XG4gICAgICAgIHJlamVjdChuZXcgTWlzc2luZ0ljb24oXCJJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCBcIi5jb25jYXQocHJlZml4LCBcIiB3aXRoIGljb24gbmFtZSBcIikuY29uY2F0KGljb25OYW1lKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxlcyQzID0gbmFtZXNwYWNlLnN0eWxlcztcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBub2RlTWV0YS5pY29uTmFtZSxcbiAgICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gICAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcGlja2VkLmFsbChbZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCksIGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBtYXNrID0gX3JlZjJbMV07XG5cbiAgICAgICAgcmVzb2x2ZShbbm9kZSwgbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgIH0pXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSkge1xuICAgIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gICAgdmFyIHdpZHRoID0gbnVsbDtcbiAgICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICAgIGlmIChJU19JRSkge1xuICAgICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuYXV0b0ExMXkgJiYgIXRpdGxlKSB7XG4gICAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIHJldHVybiBwaWNrZWQucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYTogZXh0cmEsXG4gICAgICB3YXRjaGFibGU6IHRydWVcbiAgICB9KV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gICAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gICAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gICAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gICAgfTtcblxuICAgIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICAgIH07XG5cbiAgICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8gT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFKSA6IE9iamVjdC5rZXlzKHN0eWxlcyQzKTtcbiAgICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgICB9KSkuam9pbignLCAnKTtcblxuICAgIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgaGNsQWRkKCdwZW5kaW5nJyk7XG4gICAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ29uVHJlZScpO1xuICAgIHZhciBtdXRhdGlvbnMgPSBjYW5kaWRhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdJY29uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwaWNrZWQuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgICAgbWFyaygpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcmsoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpLnRoZW4oZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgcGVyZm9ybShbbXV0YXRpb25dLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3NpdGlvbjtcbiAgICAgIH0pWzBdO1xuICAgICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuXG4gICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgJiYgIWZvbnRGYW1pbHkpIHtcbiAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseSkge1xuICAgICAgICB2YXIgY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICAgIHZhciBwcmVmaXggPSB+WydMaWdodCcsICdSZWd1bGFyJywgJ1NvbGlkJywgJ0JyYW5kcyddLmluZGV4T2YoZm9udEZhbWlseVsxXSkgPyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsxXS50b0xvd2VyQ2FzZSgpXSA6IEZPTlRfV0VJR0hUX1RPX1BSRUZJWFtmb250V2VpZ2h0XTtcbiAgICAgICAgdmFyIGljb25OYW1lID0gYnlVbmljb2RlKHByZWZpeCwgdG9IZXgoY29udGVudC5sZW5ndGggPT09IDMgPyBjb250ZW50LnN1YnN0cigxLCAxKSA6IGNvbnRlbnQpKTsgLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDpiZWZvcmUvOmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcblxuICAgICAgICBpZiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbk5hbWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlLCBpY29uTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIG9uZSwgc2luY2Ugd2UncmUgcmVwbGFjaW5nIGl0IHdpdGggYSBuZXcgb25lXG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICAgIHZhciBleHRyYSA9IG1ldGEuZXh0cmE7XG4gICAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICAgIHZhciBhYnN0cmFjdCA9IG1ha2VJbmxpbmVTdmdBYnN0cmFjdChfb2JqZWN0U3ByZWFkKHt9LCBtZXRhLCB7XG4gICAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgICBtYXNrOiBlbXB0eUNhbm9uaWNhbEljb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKG5vZGUpIHtcbiAgICByZXR1cm4gcGlja2VkLmFsbChbcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmFmdGVyJyldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWFyY2hQc2V1ZG9FbGVtZW50cyAocm9vdCkge1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG9wZXJhdGlvbnMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpKS5maWx0ZXIocHJvY2Vzc2FibGUpLm1hcChyZXBsYWNlKTtcbiAgICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICBwaWNrZWQuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYXtvdmVyZmxvdzp2aXNpYmxlfS5zdmctaW5saW5lLS1mYXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6aW5oZXJpdDtoZWlnaHQ6MWVtO292ZXJmbG93OnZpc2libGU7dmVydGljYWwtYWxpZ246LS4xMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtbGd7dmVydGljYWwtYWxpZ246LS4yMjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtdy0xe3dpZHRoOi4wNjI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctMnt3aWR0aDouMTI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctM3t3aWR0aDouMTg3NWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTR7d2lkdGg6LjI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctNXt3aWR0aDouMzEyNWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTZ7d2lkdGg6LjM3NWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTd7d2lkdGg6LjQzNzVlbX0uc3ZnLWlubGluZS0tZmEuZmEtdy04e3dpZHRoOi41ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctOXt3aWR0aDouNTYyNWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTEwe3dpZHRoOi42MjVlbX0uc3ZnLWlubGluZS0tZmEuZmEtdy0xMXt3aWR0aDouNjg3NWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTEye3dpZHRoOi43NWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTEze3dpZHRoOi44MTI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctMTR7d2lkdGg6Ljg3NWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTE1e3dpZHRoOi45Mzc1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctMTZ7d2lkdGg6MWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTE3e3dpZHRoOjEuMDYyNWVtfS5zdmctaW5saW5lLS1mYS5mYS13LTE4e3dpZHRoOjEuMTI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctMTl7d2lkdGg6MS4xODc1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXctMjB7d2lkdGg6MS4yNWVtfS5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0Oi4zZW07d2lkdGg6YXV0b30uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtO3dpZHRoOmF1dG99LnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlcntoZWlnaHQ6MS41ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLWxpe3dpZHRoOjJlbX0uc3ZnLWlubGluZS0tZmEuZmEtZnd7d2lkdGg6MS4yNWVtfS5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhe2JvdHRvbTowO2xlZnQ6MDttYXJnaW46YXV0bztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5mYS1sYXllcnN7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjotLjEyNWVtO3dpZHRoOjFlbX0uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9LmZhLWxheWVycy1jb3VudGVyLC5mYS1sYXllcnMtdGV4dHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtbGF5ZXJzLXRleHR7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5mYS1sYXllcnMtY291bnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjI1M2E7Ym9yZGVyLXJhZGl1czoxZW07LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiNmZmY7aGVpZ2h0OjEuNWVtO2xpbmUtaGVpZ2h0OjE7bWF4LXdpZHRoOjVlbTttaW4td2lkdGg6MS41ZW07b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6LjI1ZW07cmlnaHQ6MDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yNSk7dHJhbnNmb3JtOnNjYWxlKC4yNSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnRvcCByaWdodDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCByaWdodH0uZmEtbGF5ZXJzLWJvdHRvbS1yaWdodHtib3R0b206MDtyaWdodDowO3RvcDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yNSk7dHJhbnNmb3JtOnNjYWxlKC4yNSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0e2JvdHRvbTowO2xlZnQ6MDtyaWdodDphdXRvO3RvcDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yNSk7dHJhbnNmb3JtOnNjYWxlKC4yNSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBsZWZ0O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9LmZhLWxheWVycy10b3AtcmlnaHR7cmlnaHQ6MDt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMjUpO3RyYW5zZm9ybTpzY2FsZSguMjUpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHQ7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9LmZhLWxheWVycy10b3AtbGVmdHtsZWZ0OjA7cmlnaHQ6YXV0bzt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMjUpO3RyYW5zZm9ybTpzY2FsZSguMjUpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBsZWZ0fS5mYS1sZ3tmb250LXNpemU6MS4zMzMzMzMzMzMzZW07bGluZS1oZWlnaHQ6Ljc1ZW07dmVydGljYWwtYWxpZ246LS4wNjY3ZW19LmZhLXhze2ZvbnQtc2l6ZTouNzVlbX0uZmEtc217Zm9udC1zaXplOi44NzVlbX0uZmEtMXh7Zm9udC1zaXplOjFlbX0uZmEtMnh7Zm9udC1zaXplOjJlbX0uZmEtM3h7Zm9udC1zaXplOjNlbX0uZmEtNHh7Zm9udC1zaXplOjRlbX0uZmEtNXh7Zm9udC1zaXplOjVlbX0uZmEtNnh7Zm9udC1zaXplOjZlbX0uZmEtN3h7Zm9udC1zaXplOjdlbX0uZmEtOHh7Zm9udC1zaXplOjhlbX0uZmEtOXh7Zm9udC1zaXplOjllbX0uZmEtMTB4e2ZvbnQtc2l6ZToxMGVtfS5mYS1md3t0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjI1ZW19LmZhLXVse2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OjIuNWVtO3BhZGRpbmctbGVmdDowfS5mYS11bD5saXtwb3NpdGlvbjpyZWxhdGl2ZX0uZmEtbGl7bGVmdDotMmVtO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjJlbTtsaW5lLWhlaWdodDppbmhlcml0fS5mYS1ib3JkZXJ7Ym9yZGVyOnNvbGlkIC4wOGVtICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtO3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbX0uZmEtcHVsbC1sZWZ0e2Zsb2F0OmxlZnR9LmZhLXB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHR9LmZhLmZhLXB1bGwtbGVmdCwuZmFiLmZhLXB1bGwtbGVmdCwuZmFsLmZhLXB1bGwtbGVmdCwuZmFyLmZhLXB1bGwtbGVmdCwuZmFzLmZhLXB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6LjNlbX0uZmEuZmEtcHVsbC1yaWdodCwuZmFiLmZhLXB1bGwtcmlnaHQsLmZhbC5mYS1wdWxsLXJpZ2h0LC5mYXIuZmEtcHVsbC1yaWdodCwuZmFzLmZhLXB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6LjNlbX0uZmEtc3Bpbnstd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXJ9LmZhLXB1bHNley13ZWJraXQtYW5pbWF0aW9uOmZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7YW5pbWF0aW9uOmZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCl9QC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LmZhLXJvdGF0ZS05MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5mYS1yb3RhdGUtMTgwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uZmEtcm90YXRlLTI3MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmZhLWZsaXAtaG9yaXpvbnRhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwxKTt0cmFuc2Zvcm06c2NhbGUoLTEsMSl9LmZhLWZsaXAtdmVydGljYWx7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwtMSk7dHJhbnNmb3JtOnNjYWxlKDEsLTEpfS5mYS1mbGlwLWJvdGgsLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2Fsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLC0xKTt0cmFuc2Zvcm06c2NhbGUoLTEsLTEpfTpyb290IC5mYS1mbGlwLWJvdGgsOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCw6cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCw6cm9vdCAuZmEtcm90YXRlLTE4MCw6cm9vdCAuZmEtcm90YXRlLTI3MCw6cm9vdCAuZmEtcm90YXRlLTkwey13ZWJraXQtZmlsdGVyOm5vbmU7ZmlsdGVyOm5vbmV9LmZhLXN0YWNre2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoyZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6Mi41ZW19LmZhLXN0YWNrLTF4LC5mYS1zdGFjay0yeHtib3R0b206MDtsZWZ0OjA7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXh7aGVpZ2h0OjFlbTt3aWR0aDoxLjI1ZW19LnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4e2hlaWdodDoyZW07d2lkdGg6Mi41ZW19LmZhLWludmVyc2V7Y29sb3I6I2ZmZn0uc3Itb25seXtib3JkZXI6MDtjbGlwOnJlY3QoMCwwLDAsMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweH0uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1c3tjbGlwOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtwb3NpdGlvbjpzdGF0aWM7d2lkdGg6YXV0b31cIjtcblxuICBmdW5jdGlvbiBjc3MgKCkge1xuICAgIHZhciBkZnAgPSBERUZBVUxUX0ZBTUlMWV9QUkVGSVg7XG4gICAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gICAgdmFyIGZwID0gY29uZmlnLmZhbWlseVByZWZpeDtcbiAgICB2YXIgcmMgPSBjb25maWcucmVwbGFjZW1lbnRDbGFzcztcbiAgICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgICBpZiAoZnAgIT09IGRmcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgICB2YXIgZFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZGZwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICB2YXIgTGlicmFyeSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTGlicmFyeSwgW3tcbiAgICAgIGtleTogXCJhZGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcbiAgICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpcy5kZWZpbml0aW9uc1trZXldID0gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuICAgICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaWJyYXJ5O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gcHJlcEljb24oaWNvbikge1xuICAgIHZhciB3aWR0aCA9IGljb25bMF07XG4gICAgdmFyIGhlaWdodCA9IGljb25bMV07XG4gICAgdmFyIHZlY3RvckRhdGEgPSBpY29uLnNsaWNlKDQpO1xuICAgIHJldHVybiB7XG4gICAgICBmb3VuZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgaWNvbjoge1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBlbnN1cmVDc3MoKSB7XG4gICAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBpT2JqZWN0KHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWNvbkRlZmluaXRpb24oaWNvbkxvb2t1cCkge1xuICAgIHZhciBfaWNvbkxvb2t1cCRwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCxcbiAgICAgICAgcHJlZml4ID0gX2ljb25Mb29rdXAkcHJlZml4ID09PSB2b2lkIDAgPyAnZmEnIDogX2ljb25Mb29rdXAkcHJlZml4LFxuICAgICAgICBpY29uTmFtZSA9IGljb25Mb29rdXAuaWNvbk5hbWU7XG4gICAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICAgIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9vYmplY3RTcHJlYWQoe30sIHBhcmFtcywge1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbiAgdmFyIG5vQXV0byA9IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICAgIGRpc2Nvbm5lY3QoKTtcbiAgfTtcbiAgdmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xuICB2YXIgZG9tID0ge1xuICAgIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAoSVNfRE9NKSB7XG4gICAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZSxcbiAgICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwaWNrZWQucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiBjc3MsXG4gICAgaW5zZXJ0Q3NzOiBmdW5jdGlvbiBpbnNlcnRDc3MkJDEoKSB7XG4gICAgICBpZiAoIV9jc3NJbnNlcnRlZCkge1xuICAgICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDogZnVuY3Rpb24gd2F0Y2goKSB7XG4gICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gcGFyYW1zLm9ic2VydmVNdXRhdGlvbnNSb290O1xuXG4gICAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZSh7XG4gICAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjazogc2VhcmNoUHNldWRvRWxlbWVudHMsXG4gICAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICB2YXIgcGFyc2UgPSB7XG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgICB9XG4gIH07XG4gIHZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgICBfcGFyYW1zJHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgICAgbWFzayA9IF9wYXJhbXMkbWFzayA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkbWFzayxcbiAgICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgICAgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMsXG4gICAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gICAgaWYgKCFpY29uRGVmaW5pdGlvbikgcmV0dXJuO1xuICAgIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICAgIGljb24gPSBpY29uRGVmaW5pdGlvbi5pY29uO1xuICAgIHJldHVybiBhcGlPYmplY3QoX29iamVjdFNwcmVhZCh7XG4gICAgICB0eXBlOiAnaWNvbidcbiAgICB9LCBpY29uRGVmaW5pdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuXG4gICAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IHByZXBJY29uKGljb24pLFxuICAgICAgICAgIG1hc2s6IG1hc2sgPyBwcmVwSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICBpY29uOiB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQoY29udGVudCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybTIgPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0yLFxuICAgICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgICBfcGFyYW1zJGNsYXNzZXMyID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczIgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMixcbiAgICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcbiAgICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbnN1cmVDc3MoKTtcbiAgICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBleHRyYToge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy10ZXh0XCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIGNvdW50ZXIgPSBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyR0aXRsZTMgPSBwYXJhbXMudGl0bGUsXG4gICAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTMgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMyxcbiAgICAgICAgX3BhcmFtcyRjbGFzc2VzMyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMzLFxuICAgICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczMsXG4gICAgICAgIF9wYXJhbXMkc3R5bGVzMyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczM7XG4gICAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgICB0eXBlOiAnY291bnRlcicsXG4gICAgICBjb250ZW50OiBjb250ZW50XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQudG9TdHJpbmcoKSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBleHRyYToge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIGxheWVyID0gZnVuY3Rpb24gbGF5ZXIoYXNzZW1ibGVyKSB7XG4gICAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgICB0eXBlOiAnbGF5ZXInXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVyc1wiKVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH1dO1xuICAgIH0pO1xuICB9O1xuICB2YXIgYXBpID0ge1xuICAgIG5vQXV0bzogbm9BdXRvLFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGRvbTogZG9tLFxuICAgIGxpYnJhcnk6IGxpYnJhcnksXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICAgIGljb246IGljb24sXG4gICAgdGV4dDogdGV4dCxcbiAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgIGxheWVyOiBsYXllcixcbiAgICB0b0h0bWw6IHRvSHRtbFxuICB9O1xuXG4gIHZhciBhdXRvUmVwbGFjZSA9IGZ1bmN0aW9uIGF1dG9SZXBsYWNlKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRhdXRvUmVwbGFjZVN2O1xuICAgIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgICBpZiAoSVNfQlJPV1NFUikge1xuICAgICAgaWYgKCFXSU5ET1cuRm9udEF3ZXNvbWUpIHtcbiAgICAgICAgV0lORE9XLkZvbnRBd2Vzb21lID0gYXBpO1xuICAgICAgfVxuXG4gICAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICAgIG9ic2VydmUoe1xuICAgICAgICAgIHRyZWVDYWxsYmFjazogb25UcmVlLFxuICAgICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmFtZXNwYWNlLmhvb2tzID0gX29iamVjdFNwcmVhZCh7fSwgbmFtZXNwYWNlLmhvb2tzLCB7XG4gICAgICBhZGRQYWNrOiBmdW5jdGlvbiBhZGRQYWNrKHByZWZpeCwgaWNvbnMpIHtcbiAgICAgICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZCh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBpY29ucyk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9LFxuICAgICAgYWRkU2hpbXM6IGZ1bmN0aW9uIGFkZFNoaW1zKHNoaW1zKSB7XG4gICAgICAgIHZhciBfbmFtZXNwYWNlJHNoaW1zO1xuXG4gICAgICAgIChfbmFtZXNwYWNlJHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zKS5wdXNoLmFwcGx5KF9uYW1lc3BhY2Ukc2hpbXMsIF90b0NvbnN1bWFibGVBcnJheShzaGltcykpO1xuXG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidW5rZXIoYm9vdHN0cmFwKTtcblxufSgpKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=