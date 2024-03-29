// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@skyway-sdk/room/dist/index.mjs":[function(require,module,exports) {

var global = arguments[3];
var define;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuidV4 = exports.roomTypes = exports.logLevelTypes = exports.SkyWayRoom = exports.SkyWayMediaDevices = exports.SkyWayError = exports.SkyWayContext = exports.SkyWayAuthToken = exports.SfuRoomImpl = exports.RoomSubscriptionImpl = exports.RoomPublicationImpl = exports.RoomMemberImpl = exports.RoomImpl = exports.RemoteVideoStream = exports.RemoteRoomMemberImpl = exports.RemoteDataStream = exports.RemoteAudioStream = exports.PromiseQueue = exports.P2PRoomImpl = exports.MediaDeviceManager = exports.Logger = exports.LocalVideoStream = exports.LocalSFURoomMemberImpl = exports.LocalRoomMemberImpl = exports.LocalP2PRoomMemberImpl = exports.LocalDataStream = exports.LocalAudioStream = exports.HttpClient = exports.Events = exports.Event = exports.BackOff = void 0;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;

var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;

var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};

var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module[key],
      enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
    });
  }

  return target;
};

var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? {
    get: () => module.default,
    enumerable: true
  } : {
    value: module,
    enumerable: true
  })), module);
};

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = value => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };

    var rejected = value => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };

    var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);

    step((generator = generator.apply(__this, __arguments)).next());
  });
}; // shims/process.js


var process;

var init_process = __esm({
  "shims/process.js"() {
    process = void 0;
  }

}); // ../../node_modules/axios/lib/helpers/bind.js


var require_bind = __commonJS({
  "../../node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }

        return fn.apply(thisArg, args);
      };
    };
  }

}); // ../../node_modules/axios/lib/utils.js


var require_utils = __commonJS({
  "../../node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";

    init_process();
    var bind = require_bind();
    var toString = Object.prototype.toString;

    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }

    function isUndefined(val) {
      return typeof val === "undefined";
    }

    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }

    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }

    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }

    function isArrayBufferView(val) {
      var result;

      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }

      return result;
    }

    function isString(val) {
      return typeof val === "string";
    }

    function isNumber(val) {
      return typeof val === "number";
    }

    function isObject(val) {
      return val !== null && typeof val === "object";
    }

    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }

      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }

    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }

    function isFile(val) {
      return toString.call(val) === "[object File]";
    }

    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }

    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }

    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }

    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }

    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }

      return typeof window !== "undefined" && typeof document !== "undefined";
    }

    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }

      if (typeof obj !== "object") {
        obj = [obj];
      }

      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    function merge() {
      var result = {};

      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }

      return result;
    }

    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }

      return content;
    }

    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }

}); // ../../node_modules/axios/lib/helpers/buildURL.js


var require_buildURL = __commonJS({
  "../../node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();

    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }

      var serializedParams;

      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }

          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }

          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }

            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");

        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }

      return url;
    };
  }

}); // ../../node_modules/axios/lib/core/InterceptorManager.js


var require_InterceptorManager = __commonJS({
  "../../node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();

    function InterceptorManager() {
      this.handlers = [];
    }

    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };

    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    module.exports = InterceptorManager;
  }

}); // ../../node_modules/axios/lib/helpers/normalizeHeaderName.js


var require_normalizeHeaderName = __commonJS({
  "../../node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();

    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }

}); // ../../node_modules/axios/lib/core/enhanceError.js


var require_enhanceError = __commonJS({
  "../../node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;

      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };

      return error;
    };
  }

}); // ../../node_modules/axios/lib/core/createError.js


var require_createError = __commonJS({
  "../../node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";

    init_process();
    var enhanceError = require_enhanceError();

    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }

}); // ../../node_modules/axios/lib/core/settle.js


var require_settle = __commonJS({
  "../../node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";

    init_process();
    var createError = require_createError();

    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;

      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }

}); // ../../node_modules/axios/lib/helpers/cookies.js


var require_cookies = __commonJS({
  "../../node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write2(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }

          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }

          if (secure === true) {
            cookie.push("secure");
          }

          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write2() {},
        read: function read() {
          return null;
        },
        remove: function remove() {}
      };
    }();
  }

}); // ../../node_modules/axios/lib/helpers/isAbsoluteURL.js


var require_isAbsoluteURL = __commonJS({
  "../../node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }

}); // ../../node_modules/axios/lib/helpers/combineURLs.js


var require_combineURLs = __commonJS({
  "../../node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }

}); // ../../node_modules/axios/lib/core/buildFullPath.js


var require_buildFullPath = __commonJS({
  "../../node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";

    init_process();
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();

    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }

      return requestedURL;
    };
  }

}); // ../../node_modules/axios/lib/helpers/parseHeaders.js


var require_parseHeaders = __commonJS({
  "../../node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var ignoreDuplicateOf = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) {
        return parsed;
      }

      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }

          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }

}); // ../../node_modules/axios/lib/helpers/isURLSameOrigin.js


var require_isURLSameOrigin = __commonJS({
  "../../node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;

      function resolveURL(url) {
        var href = url;

        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }

}); // ../../node_modules/axios/lib/cancel/Cancel.js


var require_Cancel = __commonJS({
  "../../node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";

    init_process();

    function Cancel(message) {
      this.message = message;
    }

    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };

    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }

}); // ../../node_modules/axios/lib/adapters/xhr.js


var require_xhr = __commonJS({
  "../../node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();

    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;

        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }

          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }

        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }

        var request = new XMLHttpRequest();

        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }

        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;

        function onloadend() {
          if (!request) {
            return;
          }

          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }

        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }

            setTimeout(onloadend);
          };
        }

        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };

        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };

        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || defaults.transitional;

          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }

          reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
          request = null;
        };

        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }

        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }

        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }

        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }

        if (config.cancelToken || config.signal) {
          onCanceled = function (cancel) {
            if (!request) {
              return;
            }

            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };

          config.cancelToken && config.cancelToken.subscribe(onCanceled);

          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }

        if (!requestData) {
          requestData = null;
        }

        request.send(requestData);
      });
    };
  }

}); // ../../node_modules/axios/lib/defaults.js


var require_defaults = __commonJS({
  "../../node_modules/axios/lib/defaults.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;

      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }

      return adapter;
    }

    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e2) {
          if (e2.name !== "SyntaxError") {
            throw e2;
          }
        }
      }

      return (encoder || JSON.stringify)(rawValue);
    }

    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");

        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }

        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }

        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }

        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }

        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";

        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e2) {
            if (strictJSONParsing) {
              if (e2.name === "SyntaxError") {
                throw enhanceError(e2, this, "E_JSON_PARSE");
              }

              throw e2;
            }
          }
        }

        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }

}); // ../../node_modules/axios/lib/core/transformData.js


var require_transformData = __commonJS({
  "../../node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var defaults = require_defaults();

    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }

}); // ../../node_modules/axios/lib/cancel/isCancel.js


var require_isCancel = __commonJS({
  "../../node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }

}); // ../../node_modules/axios/lib/core/dispatchRequest.js


var require_dispatchRequest = __commonJS({
  "../../node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var Cancel = require_Cancel();

    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }

      if (config.signal && config.signal.aborted) {
        throw new Cancel("canceled");
      }
    }

    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }

        return Promise.reject(reason);
      });
    };
  }

}); // ../../node_modules/axios/lib/core/mergeConfig.js


var require_mergeConfig = __commonJS({
  "../../node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();

    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};

      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }

        return source;
      }

      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }

      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }

      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }

      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }

      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }

}); // ../../node_modules/axios/lib/env/data.js


var require_data = __commonJS({
  "../../node_modules/axios/lib/env/data.js"(exports, module) {
    init_process();
    module.exports = {
      "version": "0.23.0"
    };
  }

}); // ../../node_modules/axios/lib/helpers/validator.js


var require_validator = __commonJS({
  "../../node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";

    init_process();
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};

    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }

      return function (value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        }

        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }

        return validator ? validator(value, opt, opts) : true;
      };
    };

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }

      var keys = Object.keys(options);
      var i = keys.length;

      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];

        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);

          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }

          continue;
        }

        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }

    module.exports = {
      assertOptions,
      validators
    };
  }

}); // ../../node_modules/axios/lib/core/Axios.js


var require_Axios = __commonJS({
  "../../node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;

    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig(this.defaults, config);

      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }

      var transitional = config.transitional;

      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }

      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }

        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;

      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      }

      var newConfig = config;

      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();

        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }

      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }

      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }

      return promise;
    };

    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };

    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function (url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function (url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }

}); // ../../node_modules/axios/lib/cancel/CancelToken.js


var require_CancelToken = __commonJS({
  "../../node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";

    init_process();
    var Cancel = require_Cancel();

    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function (cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;

        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }

        token._listeners = null;
      });

      this.promise.then = function (onfulfilled) {
        var _resolve;

        var promise = new Promise(function (resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);

        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };

        return promise;
      };

      executor(function cancel(message) {
        if (token.reason) {
          return;
        }

        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }

    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }

      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };

    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }

      var index = this._listeners.indexOf(listener);

      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };

    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };

    module.exports = CancelToken;
  }

}); // ../../node_modules/axios/lib/helpers/spread.js


var require_spread = __commonJS({
  "../../node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }

}); // ../../node_modules/axios/lib/helpers/isAxiosError.js


var require_isAxiosError = __commonJS({
  "../../node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";

    init_process();

    module.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }

}); // ../../node_modules/axios/lib/axios.js


var require_axios = __commonJS({
  "../../node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";

    init_process();
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();

    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);

      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };

      return instance;
    }

    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.Cancel = require_Cancel();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.VERSION = require_data().version;

    axios2.all = function all(promises) {
      return Promise.all(promises);
    };

    axios2.spread = require_spread();
    axios2.isAxiosError = require_isAxiosError();
    module.exports = axios2;
    module.exports.default = axios2;
  }

}); // ../../node_modules/axios/index.js


var require_axios2 = __commonJS({
  "../../node_modules/axios/index.js"(exports, module) {
    init_process();
    module.exports = require_axios();
  }

}); // ../../node_modules/base64-js/index.js


var require_base64_js = __commonJS({
  "../../node_modules/base64-js/index.js"(exports) {
    "use strict";

    init_process();
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;

    function getLens(b64) {
      var len2 = b64.length;

      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }

      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }

    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }

    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }

    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;

      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }

      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }

      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }

      return arr;
    }

    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }

    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];

      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }

      return output.join("");
    }

    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;

      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }

      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }

      return parts.join("");
    }
  }

}); // ../../node_modules/ieee754/index.js


var require_ieee754 = __commonJS({
  "../../node_modules/ieee754/index.js"(exports) {
    init_process();

    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e2, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e2 = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;

      for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e2 & (1 << -nBits) - 1;
      e2 >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e2 === 0) {
        e2 = 1 - eBias;
      } else if (e2 === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e2 = e2 - eBias;
      }

      return (s ? -1 : 1) * m * Math.pow(2, e2 - mLen);
    };

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e2, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e2 = eMax;
      } else {
        e2 = Math.floor(Math.log(value) / Math.LN2);

        if (value * (c = Math.pow(2, -e2)) < 1) {
          e2--;
          c *= 2;
        }

        if (e2 + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e2++;
          c /= 2;
        }

        if (e2 + eBias >= eMax) {
          m = 0;
          e2 = eMax;
        } else if (e2 + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e2 = e2 + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e2 = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}

      e2 = e2 << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[offset + i] = e2 & 255, i += d, e2 /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    };
  }

}); // ../rtc-rpc-api-client/node_modules/buffer/index.js


var require_buffer = __commonJS({
  "../rtc-rpc-api-client/node_modules/buffer/index.js"(exports) {
    "use strict";

    init_process();
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();

    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }

    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function () {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e2) {
        return false;
      }
    }

    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function () {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function () {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });

    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }

      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }

    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }

        return allocUnsafe(arg);
      }

      return from(arg, encodingOrOffset, length);
    }

    Buffer3.poolSize = 8192;

    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }

      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }

      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }

      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }

      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }

      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }

      const valueOf = value.valueOf && value.valueOf();

      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }

      const b = fromObject(value);
      if (b) return b;

      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }

      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }

    Buffer3.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };

    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);

    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }

    function alloc(size, fill, encoding) {
      assertSize(size);

      if (size <= 0) {
        return createBuffer(size);
      }

      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }

      return createBuffer(size);
    }

    Buffer3.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding);
    };

    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }

    Buffer3.allocUnsafe = function (size) {
      return allocUnsafe(size);
    };

    Buffer3.allocUnsafeSlow = function (size) {
      return allocUnsafe(size);
    };

    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }

      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }

      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);

      if (actual !== length) {
        buf = buf.slice(0, actual);
      }

      return buf;
    }

    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);

      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }

      return buf;
    }

    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }

      return fromArrayLike(arrayView);
    }

    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }

      let buf;

      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }

      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }

    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);

        if (buf.length === 0) {
          return buf;
        }

        obj.copy(buf, 0, 0, len);
        return buf;
      }

      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }

        return fromArrayLike(obj);
      }

      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }

    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }

      return length | 0;
    }

    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }

      return Buffer3.alloc(+length);
    }

    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };

    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);

      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }

      if (a === b) return 0;
      let x = a.length;
      let y = b.length;

      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;

        default:
          return false;
      }
    };

    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return Buffer3.alloc(0);
      }

      let i;

      if (length === void 0) {
        length = 0;

        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;

      for (i = 0; i < list.length; ++i) {
        let buf = list[i];

        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }

        pos += buf.length;
      }

      return buffer;
    };

    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }

      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }

      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }

      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;

      for (;;) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;

          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;

          case "hex":
            return len >>> 1;

          case "base64":
            return base64ToBytes(string).length;

          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }

            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }

    Buffer3.byteLength = byteLength;

    function slowToString(encoding, start, end) {
      let loweredCase = false;

      if (start === void 0 || start < 0) {
        start = 0;
      }

      if (start > this.length) {
        return "";
      }

      if (end === void 0 || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return "";
      }

      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return "";
      }

      if (!encoding) encoding = "utf8";

      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);

          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);

          case "ascii":
            return asciiSlice(this, start, end);

          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);

          case "base64":
            return base64Slice(this, start, end);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);

          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }

    Buffer3.prototype._isBuffer = true;

    function swap(b, n2, m) {
      const i = b[n2];
      b[n2] = b[m];
      b[m] = i;
    }

    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;

      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }

      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }

      return this;
    };

    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;

      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }

      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }

      return this;
    };

    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;

      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }

      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }

      return this;
    };

    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };

    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;

    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    };

    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };

    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }

    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }

      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }

      if (start === void 0) {
        start = 0;
      }

      if (end === void 0) {
        end = target ? target.length : 0;
      }

      if (thisStart === void 0) {
        thisStart = 0;
      }

      if (thisEnd === void 0) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }

      if (thisStart >= thisEnd) {
        return -1;
      }

      if (start >= end) {
        return 1;
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);

      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }

      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };

    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;

      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }

      byteOffset = +byteOffset;

      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }

      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

      if (byteOffset >= buffer.length) {
        if (dir) return -1;else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;else return -1;
      }

      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }

      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }

        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;

        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }

        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }

      throw new TypeError("val must be string, number or Buffer");
    }

    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;

      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();

        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }

          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }

      let i;

      if (dir) {
        let foundIndex = -1;

        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

        for (i = byteOffset; i >= 0; i--) {
          let found = true;

          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }

          if (found) return i;
        }
      }

      return -1;
    }

    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };

    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };

    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };

    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;

      if (!length) {
        length = remaining;
      } else {
        length = Number(length);

        if (length > remaining) {
          length = remaining;
        }
      }

      const strLen = string.length;

      if (length > strLen / 2) {
        length = strLen / 2;
      }

      let i;

      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }

      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }

    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }

    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }

    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }

    Buffer3.prototype.write = function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;

        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }

      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;

      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }

      if (!encoding) encoding = "utf8";
      let loweredCase = false;

      for (;;) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);

          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);

          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);

          case "base64":
            return base64Write(this, string, offset, length);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);

          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }

    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;

      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;

        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }

              break;

            case 2:
              secondByte = buf[i + 1];

              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;

                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }

              break;

            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];

              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;

                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }

              break;

            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];

              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;

                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }

          }
        }

        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res);
    }

    var MAX_ARGUMENTS_LENGTH = 4096;

    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;

      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }

      let res = "";
      let i = 0;

      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }

      return res;
    }

    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);

      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }

      return ret;
    }

    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);

      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }

      return ret;
    }

    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";

      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }

      return out;
    }

    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";

      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }

      return res;
    }

    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };

    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }

    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;

      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }

      return val;
    };

    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;

      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }

      let val = this[offset + --byteLength2];
      let mul = 1;

      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }

      return val;
    };

    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };

    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };

    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };

    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };

    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };

    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];

      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }

      const lo = first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24);

      const hi = this[++offset] + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + last * __pow(2, 24);

      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];

      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }

      const hi = first * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
      const lo = this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });

    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;

      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }

      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };

    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];

      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }

      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };

    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };

    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };

    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };

    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };

    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };

    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];

      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }

      const val = this[offset + 4] + this[offset + 5] * __pow(2, 8) + this[offset + 6] * __pow(2, 16) + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24));
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];

      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }

      const val = (first << 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last);
    });

    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };

    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };

    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };

    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };

    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }

    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;

      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }

      let mul = 1;
      let i = 0;
      this[offset] = value & 255;

      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }

      return offset + byteLength2;
    };

    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;

      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }

      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;

      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }

      return offset + byteLength2;
    };

    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };

    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };

    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };

    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };

    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };

    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }

    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }

    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });

    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;

      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }

      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;

      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }

        this[offset + i] = (value / mul >> 0) - sub & 255;
      }

      return offset + byteLength2;
    };

    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;

      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }

      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;

      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }

        this[offset + i] = (value / mul >> 0) - sub & 255;
      }

      return offset + byteLength2;
    };

    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };

    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };

    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };

    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };

    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };

    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });

    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }

    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;

      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }

      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }

    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };

    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };

    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;

      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }

      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }

    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };

    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };

    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;

      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }

      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;

      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      const len = end - start;

      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }

      return len;
    };

    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }

        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }

        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }

        if (val.length === 1) {
          const code = val.charCodeAt(0);

          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }

      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;

      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;

        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }

        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    };

    var errors = {};

    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }

        get code() {
          return sym;
        }

        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }

        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }

      };
    }

    E("ERR_BUFFER_OUT_OF_BOUNDS", function (name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }

      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function (name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function (str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;

      if (Number.isInteger(input) && Math.abs(input) > __pow(2, 32)) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);

        if (input > __pow(BigInt(2), BigInt(32)) || input < -__pow(BigInt(2), BigInt(32))) {
          received = addNumericalSeparator(received);
        }

        received += "n";
      }

      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);

    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;

      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }

      return `${val.slice(0, i)}${res}`;
    }

    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");

      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }

    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n2 = typeof min === "bigint" ? "n" : "";
        let range;

        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        } else {
          range = `>= ${min}${n2} and <= ${max}${n2}`;
        }

        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }

      checkBounds(buf, offset, byteLength2);
    }

    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }

    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }

      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }

      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }

    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";

      while (str.length % 4 !== 0) {
        str = str + "=";
      }

      return str;
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];

      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }

            leadSurrogate = codePoint;
            continue;
          }

          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }

          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }

        leadSurrogate = null;

        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }

      return bytes;
    }

    function asciiToBytes(str) {
      const byteArray = [];

      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }

      return byteArray;
    }

    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];

      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray;
    }

    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }

    function blitBuffer(src, dst, offset, length) {
      let i;

      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }

      return i;
    }

    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }

    function numberIsNaN(obj) {
      return obj !== obj;
    }

    var hexSliceLookupTable = function () {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);

      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;

        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }

      return table;
    }();

    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }

    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }

}); // ../../node_modules/isomorphic-ws/browser.js


var require_browser = __commonJS({
  "../../node_modules/isomorphic-ws/browser.js"(exports, module) {
    init_process();
    var ws = null;

    if (typeof WebSocket !== "undefined") {
      ws = WebSocket;
    } else if (typeof MozWebSocket !== "undefined") {
      ws = MozWebSocket;
    } else if (typeof global !== "undefined") {
      ws = global.WebSocket || global.MozWebSocket;
    } else if (typeof window !== "undefined") {
      ws = window.WebSocket || window.MozWebSocket;
    } else if (typeof self !== "undefined") {
      ws = self.WebSocket || self.MozWebSocket;
    }

    module.exports = ws;
  }

}); // ../../node_modules/deepmerge/dist/cjs.js


var require_cjs = __commonJS({
  "../../node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";

    init_process();

    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };

    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }

    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }

    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;

    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }

    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge3(emptyTarget(value), value, options) : value;
    }

    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }

    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge3;
      }

      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge3;
    }

    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
        return target.propertyIsEnumerable(symbol);
      }) : [];
    }

    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }

    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }

    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }

    function mergeObject(target, source, options) {
      var destination = {};

      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function (key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }

      getKeys(source).forEach(function (key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }

        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }

    function deepmerge3(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }

    deepmerge3.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }

      return array.reduce(function (prev, next) {
        return deepmerge3(prev, next, options);
      }, {});
    };

    var deepmerge_1 = deepmerge3;
    module.exports = deepmerge_1;
  }

}); // ../../node_modules/ts.cryptojs256/ts.cryptojs256.js


var require_ts_cryptojs256 = __commonJS({
  "../../node_modules/ts.cryptojs256/ts.cryptojs256.js"(exports) {
    init_process();

    var CryptoJS = CryptoJS || function (h, s) {
      var f = {},
          g = f.lib = {},
          q = function () {},
          m = g.Base = {
        extend: function (a) {
          q.prototype = this;
          var c = new q();
          a && c.mixIn(a);
          c.hasOwnProperty("init") || (c.init = function () {
            c.$super.init.apply(this, arguments);
          });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create: function () {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function () {},
        mixIn: function (a) {
          for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);

          a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      },
          r2 = g.WordArray = m.extend({
        init: function (a, c) {
          a = this.words = a || [];
          this.sigBytes = c != s ? c : 4 * a.length;
        },
        toString: function (a) {
          return (a || k).stringify(this);
        },
        concat: function (a) {
          var c = this.words,
              d = a.words,
              b = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (b % 4) for (var e2 = 0; e2 < a; e2++) c[b + e2 >>> 2] |= (d[e2 >>> 2] >>> 24 - 8 * (e2 % 4) & 255) << 24 - 8 * ((b + e2) % 4);else if (65535 < d.length) for (e2 = 0; e2 < a; e2 += 4) c[b + e2 >>> 2] = d[e2 >>> 2];else c.push.apply(c, d);
          this.sigBytes += a;
          return this;
        },
        clamp: function () {
          var a = this.words,
              c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
          a.length = h.ceil(c / 4);
        },
        clone: function () {
          var a = m.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function (a) {
          for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);

          return new r2.init(c, a);
        }
      }),
          l = f.enc = {},
          k = l.Hex = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;

          for (var d = [], b = 0; b < a; b++) {
            var e2 = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
            d.push((e2 >>> 4).toString(16));
            d.push((e2 & 15).toString(16));
          }

          return d.join("");
        },
        parse: function (a) {
          for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);

          return new r2.init(d, c / 2);
        }
      },
          n2 = l.Latin1 = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;

          for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));

          return d.join("");
        },
        parse: function (a) {
          for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);

          return new r2.init(d, c);
        }
      },
          j = l.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(n2.stringify(a)));
          } catch (c) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (a) {
          return n2.parse(unescape(encodeURIComponent(a)));
        }
      },
          u = g.BufferedBlockAlgorithm = m.extend({
        reset: function () {
          this._data = new r2.init();
          this._nDataBytes = 0;
        },
        _append: function (a) {
          typeof a == "string" && (a = j.parse(a));

          this._data.concat(a);

          this._nDataBytes += a.sigBytes;
        },
        _process: function (a) {
          var c = this._data,
              d = c.words,
              b = c.sigBytes,
              e2 = this.blockSize,
              f2 = b / (4 * e2),
              f2 = a ? h.ceil(f2) : h.max((f2 | 0) - this._minBufferSize, 0);
          a = f2 * e2;
          b = h.min(4 * a, b);

          if (a) {
            for (var g2 = 0; g2 < a; g2 += e2) this._doProcessBlock(d, g2);

            g2 = d.splice(0, a);
            c.sigBytes -= b;
          }

          return new r2.init(g2, b);
        },
        clone: function () {
          var a = m.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0
      });

      g.Hasher = u.extend({
        cfg: m.extend(),
        init: function (a) {
          this.cfg = this.cfg.extend(a);
          this.reset();
        },
        reset: function () {
          u.reset.call(this);

          this._doReset();
        },
        update: function (a) {
          this._append(a);

          this._process();

          return this;
        },
        finalize: function (a) {
          a && this._append(a);
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (a) {
          return function (c, d) {
            return new a.init(d).finalize(c);
          };
        },
        _createHmacHelper: function (a) {
          return function (c, d) {
            return new t2.HMAC.init(a, d).finalize(c);
          };
        }
      });
      var t2 = f.algo = {};
      return f;
    }(Math);

    (function (h) {
      for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r2 = [], l = function (a2) {
        return 4294967296 * (a2 - (a2 | 0)) | 0;
      }, k = 2, n2 = 0; 64 > n2;) {
        var j;

        a: {
          j = k;

          for (var u = h.sqrt(j), t2 = 2; t2 <= u; t2++) if (!(j % t2)) {
            j = false;
            break a;
          }

          j = true;
        }

        j && (8 > n2 && (m[n2] = l(h.pow(k, 0.5))), r2[n2] = l(h.pow(k, 1 / 3)), n2++);
        k++;
      }

      var a = [],
          f = f.SHA256 = q.extend({
        _doReset: function () {
          this._hash = new g.init(m.slice(0));
        },
        _doProcessBlock: function (c, d) {
          for (var b = this._hash.words, e2 = b[0], f2 = b[1], g2 = b[2], j2 = b[3], h2 = b[4], m2 = b[5], n3 = b[6], q2 = b[7], p = 0; 64 > p; p++) {
            if (16 > p) a[p] = c[d + p] | 0;else {
              var k2 = a[p - 15],
                  l2 = a[p - 2];
              a[p] = ((k2 << 25 | k2 >>> 7) ^ (k2 << 14 | k2 >>> 18) ^ k2 >>> 3) + a[p - 7] + ((l2 << 15 | l2 >>> 17) ^ (l2 << 13 | l2 >>> 19) ^ l2 >>> 10) + a[p - 16];
            }
            k2 = q2 + ((h2 << 26 | h2 >>> 6) ^ (h2 << 21 | h2 >>> 11) ^ (h2 << 7 | h2 >>> 25)) + (h2 & m2 ^ ~h2 & n3) + r2[p] + a[p];
            l2 = ((e2 << 30 | e2 >>> 2) ^ (e2 << 19 | e2 >>> 13) ^ (e2 << 10 | e2 >>> 22)) + (e2 & f2 ^ e2 & g2 ^ f2 & g2);
            q2 = n3;
            n3 = m2;
            m2 = h2;
            h2 = j2 + k2 | 0;
            j2 = g2;
            g2 = f2;
            f2 = e2;
            e2 = k2 + l2 | 0;
          }

          b[0] = b[0] + e2 | 0;
          b[1] = b[1] + f2 | 0;
          b[2] = b[2] + g2 | 0;
          b[3] = b[3] + j2 | 0;
          b[4] = b[4] + h2 | 0;
          b[5] = b[5] + m2 | 0;
          b[6] = b[6] + n3 | 0;
          b[7] = b[7] + q2 | 0;
        },
        _doFinalize: function () {
          var a2 = this._data,
              d = a2.words,
              b = 8 * this._nDataBytes,
              e2 = 8 * a2.sigBytes;
          d[e2 >>> 5] |= 128 << 24 - e2 % 32;
          d[(e2 + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
          d[(e2 + 64 >>> 9 << 4) + 15] = b;
          a2.sigBytes = 4 * d.length;

          this._process();

          return this._hash;
        },
        clone: function () {
          var a2 = q.clone.call(this);
          a2._hash = this._hash.clone();
          return a2;
        }
      });
      s.SHA256 = q._createHelper(f);
      s.HmacSHA256 = q._createHmacHelper(f);
    })(Math);

    (function () {
      var h = CryptoJS,
          s = h.enc.Utf8;
      h.algo.HMAC = h.lib.Base.extend({
        init: function (f, g) {
          f = this._hasher = new f.init();
          typeof g == "string" && (g = s.parse(g));
          var h2 = f.blockSize,
              m = 4 * h2;
          g.sigBytes > m && (g = f.finalize(g));
          g.clamp();

          for (var r2 = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r2.words, n2 = l.words, j = 0; j < h2; j++) k[j] ^= 1549556828, n2[j] ^= 909522486;

          r2.sigBytes = l.sigBytes = m;
          this.reset();
        },
        reset: function () {
          var f = this._hasher;
          f.reset();
          f.update(this._iKey);
        },
        update: function (f) {
          this._hasher.update(f);

          return this;
        },
        finalize: function (f) {
          var g = this._hasher;
          f = g.finalize(f);
          g.reset();
          return g.finalize(this._oKey.clone().concat(f));
        }
      });
    })();

    (function () {
      var h = CryptoJS,
          j = h.lib.WordArray;
      h.enc.Base64 = {
        stringify: function (b) {
          var e2 = b.words,
              f = b.sigBytes,
              c = this._map;
          b.clamp();
          b = [];

          for (var a = 0; a < f; a += 3) for (var d = (e2[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e2[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e2[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));

          if (e2 = c.charAt(64)) for (; b.length % 4;) b.push(e2);
          return b.join("");
        },
        parse: function (b) {
          var e2 = b.length,
              f = this._map,
              c = f.charAt(64);
          c && (c = b.indexOf(c), c != -1 && (e2 = c));

          for (var c = [], a = 0, d = 0; d < e2; d++) if (d % 4) {
            var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4),
                h2 = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
            c[a >>> 2] |= (g | h2) << 24 - 8 * (a % 4);
            a++;
          }

          return j.create(c, a);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    })();

    (function (h) {
      for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r2 = [], l = function (a2) {
        return 4294967296 * (a2 - (a2 | 0)) | 0;
      }, k = 2, n2 = 0; 64 > n2;) {
        var j;

        a: {
          j = k;

          for (var u = h.sqrt(j), t2 = 2; t2 <= u; t2++) if (!(j % t2)) {
            j = false;
            break a;
          }

          j = true;
        }

        j && (8 > n2 && (m[n2] = l(h.pow(k, 0.5))), r2[n2] = l(h.pow(k, 1 / 3)), n2++);
        k++;
      }

      var a = [],
          f = f.SHA256 = q.extend({
        _doReset: function () {
          this._hash = new g.init(m.slice(0));
        },
        _doProcessBlock: function (c, d) {
          for (var b = this._hash.words, e2 = b[0], f2 = b[1], g2 = b[2], j2 = b[3], h2 = b[4], m2 = b[5], n3 = b[6], q2 = b[7], p = 0; 64 > p; p++) {
            if (16 > p) a[p] = c[d + p] | 0;else {
              var k2 = a[p - 15],
                  l2 = a[p - 2];
              a[p] = ((k2 << 25 | k2 >>> 7) ^ (k2 << 14 | k2 >>> 18) ^ k2 >>> 3) + a[p - 7] + ((l2 << 15 | l2 >>> 17) ^ (l2 << 13 | l2 >>> 19) ^ l2 >>> 10) + a[p - 16];
            }
            k2 = q2 + ((h2 << 26 | h2 >>> 6) ^ (h2 << 21 | h2 >>> 11) ^ (h2 << 7 | h2 >>> 25)) + (h2 & m2 ^ ~h2 & n3) + r2[p] + a[p];
            l2 = ((e2 << 30 | e2 >>> 2) ^ (e2 << 19 | e2 >>> 13) ^ (e2 << 10 | e2 >>> 22)) + (e2 & f2 ^ e2 & g2 ^ f2 & g2);
            q2 = n3;
            n3 = m2;
            m2 = h2;
            h2 = j2 + k2 | 0;
            j2 = g2;
            g2 = f2;
            f2 = e2;
            e2 = k2 + l2 | 0;
          }

          b[0] = b[0] + e2 | 0;
          b[1] = b[1] + f2 | 0;
          b[2] = b[2] + g2 | 0;
          b[3] = b[3] + j2 | 0;
          b[4] = b[4] + h2 | 0;
          b[5] = b[5] + m2 | 0;
          b[6] = b[6] + n3 | 0;
          b[7] = b[7] + q2 | 0;
        },
        _doFinalize: function () {
          var a2 = this._data,
              d = a2.words,
              b = 8 * this._nDataBytes,
              e2 = 8 * a2.sigBytes;
          d[e2 >>> 5] |= 128 << 24 - e2 % 32;
          d[(e2 + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
          d[(e2 + 64 >>> 9 << 4) + 15] = b;
          a2.sigBytes = 4 * d.length;

          this._process();

          return this._hash;
        },
        clone: function () {
          var a2 = q.clone.call(this);
          a2._hash = this._hash.clone();
          return a2;
        }
      });
      s.SHA256 = q._createHelper(f);
      s.HmacSHA256 = q._createHmacHelper(f);
    })(Math);

    exports.enc = {
      Base64: CryptoJS.enc.Base64,
      Utf8: CryptoJS.enc.Utf8,
      Latin1: CryptoJS.enc.Latin1
    };
    exports.SHA256 = CryptoJS.SHA256;
    exports.HmacSHA256 = CryptoJS.HmacSHA256;
  }

}); // ../../node_modules/jwt-encode/src/index.js


var require_src = __commonJS({
  "../../node_modules/jwt-encode/src/index.js"(exports, module) {
    init_process();
    var CryptoJS = require_ts_cryptojs256();
    var defaultHeader = {
      alg: "HS256",
      typ: "JWT"
    };

    function base64url(data) {
      return CryptoJS.enc.Base64.stringify(data).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
    }

    function sign(data, secret, options = {}) {
      const header = Object.assign(defaultHeader, options);

      if (header.alg !== "HS256" && header.typ !== "JWT") {
        throw new Error("jwt-encode only support the HS256 algorithm and the JWT type of hash");
      }

      const encodedHeader = encode(header);
      const encodedData = encode(data);
      let signature = `${encodedHeader}.${encodedData}`;
      signature = CryptoJS.HmacSHA256(signature, secret);
      signature = base64url(signature);
      return `${encodedHeader}.${encodedData}.${signature}`;
    }

    function encode(data) {
      const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
      return base64url(stringifiedData);
    }

    module.exports = sign;
  }

}); // ../../node_modules/sdp-transform/lib/grammar.js


var require_grammar = __commonJS({
  "../../node_modules/sdp-transform/lib/grammar.js"(exports, module) {
    init_process();
    var grammar = module.exports = {
      v: [{
        name: "version",
        reg: /^(\d*)$/
      }],
      o: [{
        name: "origin",
        reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
        names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
        format: "%s %s %d %s IP%d %s"
      }],
      s: [{
        name: "name"
      }],
      i: [{
        name: "description"
      }],
      u: [{
        name: "uri"
      }],
      e: [{
        name: "email"
      }],
      p: [{
        name: "phone"
      }],
      z: [{
        name: "timezones"
      }],
      r: [{
        name: "repeats"
      }],
      t: [{
        name: "timing",
        reg: /^(\d*) (\d*)/,
        names: ["start", "stop"],
        format: "%d %d"
      }],
      c: [{
        name: "connection",
        reg: /^IN IP(\d) (\S*)/,
        names: ["version", "ip"],
        format: "IN IP%d %s"
      }],
      b: [{
        push: "bandwidth",
        reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
        names: ["type", "limit"],
        format: "%s:%s"
      }],
      m: [{
        reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
        names: ["type", "port", "protocol", "payloads"],
        format: "%s %d %s %s"
      }],
      a: [{
        push: "rtp",
        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
        names: ["payload", "codec", "rate", "encoding"],
        format: function (o2) {
          return o2.encoding ? "rtpmap:%d %s/%s/%s" : o2.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
        }
      }, {
        push: "fmtp",
        reg: /^fmtp:(\d*) ([\S| ]*)/,
        names: ["payload", "config"],
        format: "fmtp:%d %s"
      }, {
        name: "control",
        reg: /^control:(.*)/,
        format: "control:%s"
      }, {
        name: "rtcp",
        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
        names: ["port", "netType", "ipVer", "address"],
        format: function (o2) {
          return o2.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
        }
      }, {
        push: "rtcpFbTrrInt",
        reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
        names: ["payload", "value"],
        format: "rtcp-fb:%s trr-int %d"
      }, {
        push: "rtcpFb",
        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
        names: ["payload", "type", "subtype"],
        format: function (o2) {
          return o2.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
        }
      }, {
        push: "ext",
        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
        names: ["value", "direction", "encrypt-uri", "uri", "config"],
        format: function (o2) {
          return "extmap:%d" + (o2.direction ? "/%s" : "%v") + (o2["encrypt-uri"] ? " %s" : "%v") + " %s" + (o2.config ? " %s" : "");
        }
      }, {
        name: "extmapAllowMixed",
        reg: /^(extmap-allow-mixed)/
      }, {
        push: "crypto",
        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
        names: ["id", "suite", "config", "sessionConfig"],
        format: function (o2) {
          return o2.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
        }
      }, {
        name: "setup",
        reg: /^setup:(\w*)/,
        format: "setup:%s"
      }, {
        name: "connectionType",
        reg: /^connection:(new|existing)/,
        format: "connection:%s"
      }, {
        name: "mid",
        reg: /^mid:([^\s]*)/,
        format: "mid:%s"
      }, {
        name: "msid",
        reg: /^msid:(.*)/,
        format: "msid:%s"
      }, {
        name: "ptime",
        reg: /^ptime:(\d*(?:\.\d*)*)/,
        format: "ptime:%d"
      }, {
        name: "maxptime",
        reg: /^maxptime:(\d*(?:\.\d*)*)/,
        format: "maxptime:%d"
      }, {
        name: "direction",
        reg: /^(sendrecv|recvonly|sendonly|inactive)/
      }, {
        name: "icelite",
        reg: /^(ice-lite)/
      }, {
        name: "iceUfrag",
        reg: /^ice-ufrag:(\S*)/,
        format: "ice-ufrag:%s"
      }, {
        name: "icePwd",
        reg: /^ice-pwd:(\S*)/,
        format: "ice-pwd:%s"
      }, {
        name: "fingerprint",
        reg: /^fingerprint:(\S*) (\S*)/,
        names: ["type", "hash"],
        format: "fingerprint:%s %s"
      }, {
        push: "candidates",
        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
        names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
        format: function (o2) {
          var str = "candidate:%s %d %s %d %s %d typ %s";
          str += o2.raddr != null ? " raddr %s rport %d" : "%v%v";
          str += o2.tcptype != null ? " tcptype %s" : "%v";

          if (o2.generation != null) {
            str += " generation %d";
          }

          str += o2["network-id"] != null ? " network-id %d" : "%v";
          str += o2["network-cost"] != null ? " network-cost %d" : "%v";
          return str;
        }
      }, {
        name: "endOfCandidates",
        reg: /^(end-of-candidates)/
      }, {
        name: "remoteCandidates",
        reg: /^remote-candidates:(.*)/,
        format: "remote-candidates:%s"
      }, {
        name: "iceOptions",
        reg: /^ice-options:(\S*)/,
        format: "ice-options:%s"
      }, {
        push: "ssrcs",
        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
        names: ["id", "attribute", "value"],
        format: function (o2) {
          var str = "ssrc:%d";

          if (o2.attribute != null) {
            str += " %s";

            if (o2.value != null) {
              str += ":%s";
            }
          }

          return str;
        }
      }, {
        push: "ssrcGroups",
        reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
        names: ["semantics", "ssrcs"],
        format: "ssrc-group:%s %s"
      }, {
        name: "msidSemantic",
        reg: /^msid-semantic:\s?(\w*) (\S*)/,
        names: ["semantic", "token"],
        format: "msid-semantic: %s %s"
      }, {
        push: "groups",
        reg: /^group:(\w*) (.*)/,
        names: ["type", "mids"],
        format: "group:%s %s"
      }, {
        name: "rtcpMux",
        reg: /^(rtcp-mux)/
      }, {
        name: "rtcpRsize",
        reg: /^(rtcp-rsize)/
      }, {
        name: "sctpmap",
        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
        names: ["sctpmapNumber", "app", "maxMessageSize"],
        format: function (o2) {
          return o2.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
        }
      }, {
        name: "xGoogleFlag",
        reg: /^x-google-flag:([^\s]*)/,
        format: "x-google-flag:%s"
      }, {
        push: "rids",
        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
        names: ["id", "direction", "params"],
        format: function (o2) {
          return o2.params ? "rid:%s %s %s" : "rid:%s %s";
        }
      }, {
        push: "imageattrs",
        reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
        format: function (o2) {
          return "imageattr:%s %s %s" + (o2.dir2 ? " %s %s" : "");
        }
      }, {
        name: "simulcast",
        reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
        names: ["dir1", "list1", "dir2", "list2"],
        format: function (o2) {
          return "simulcast:%s %s" + (o2.dir2 ? " %s %s" : "");
        }
      }, {
        name: "simulcast_03",
        reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
        names: ["value"],
        format: "simulcast: %s"
      }, {
        name: "framerate",
        reg: /^framerate:(\d+(?:$|\.\d+))/,
        format: "framerate:%s"
      }, {
        name: "sourceFilter",
        reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
        names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
        format: "source-filter: %s %s %s %s %s"
      }, {
        name: "bundleOnly",
        reg: /^(bundle-only)/
      }, {
        name: "label",
        reg: /^label:(.+)/,
        format: "label:%s"
      }, {
        name: "sctpPort",
        reg: /^sctp-port:(\d+)$/,
        format: "sctp-port:%s"
      }, {
        name: "maxMessageSize",
        reg: /^max-message-size:(\d+)$/,
        format: "max-message-size:%s"
      }, {
        push: "tsRefClocks",
        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
        names: ["clksrc", "clksrcExt"],
        format: function (o2) {
          return "ts-refclk:%s" + (o2.clksrcExt != null ? "=%s" : "");
        }
      }, {
        name: "mediaClk",
        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
        names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
        format: function (o2) {
          var str = "mediaclk:";
          str += o2.id != null ? "id=%s %s" : "%v%s";
          str += o2.mediaClockValue != null ? "=%s" : "";
          str += o2.rateNumerator != null ? " rate=%s" : "";
          str += o2.rateDenominator != null ? "/%s" : "";
          return str;
        }
      }, {
        name: "keywords",
        reg: /^keywds:(.+)$/,
        format: "keywds:%s"
      }, {
        name: "content",
        reg: /^content:(.+)/,
        format: "content:%s"
      }, {
        name: "bfcpFloorCtrl",
        reg: /^floorctrl:(c-only|s-only|c-s)/,
        format: "floorctrl:%s"
      }, {
        name: "bfcpConfId",
        reg: /^confid:(\d+)/,
        format: "confid:%s"
      }, {
        name: "bfcpUserId",
        reg: /^userid:(\d+)/,
        format: "userid:%s"
      }, {
        name: "bfcpFloorId",
        reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
        names: ["id", "mStream"],
        format: "floorid:%s mstrm:%s"
      }, {
        push: "invalid",
        names: ["value"]
      }]
    };
    Object.keys(grammar).forEach(function (key) {
      var objs = grammar[key];
      objs.forEach(function (obj) {
        if (!obj.reg) {
          obj.reg = /(.*)/;
        }

        if (!obj.format) {
          obj.format = "%s";
        }
      });
    });
  }

}); // ../../node_modules/sdp-transform/lib/parser.js


var require_parser = __commonJS({
  "../../node_modules/sdp-transform/lib/parser.js"(exports) {
    init_process();

    var toIntIfInt = function (v) {
      return String(Number(v)) === v ? Number(v) : v;
    };

    var attachProperties = function (match, location, names, rawName) {
      if (rawName && !names) {
        location[rawName] = toIntIfInt(match[1]);
      } else {
        for (var i = 0; i < names.length; i += 1) {
          if (match[i + 1] != null) {
            location[names[i]] = toIntIfInt(match[i + 1]);
          }
        }
      }
    };

    var parseReg = function (obj, location, content) {
      var needsBlank = obj.name && obj.names;

      if (obj.push && !location[obj.push]) {
        location[obj.push] = [];
      } else if (needsBlank && !location[obj.name]) {
        location[obj.name] = {};
      }

      var keyLocation = obj.push ? {} : needsBlank ? location[obj.name] : location;
      attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

      if (obj.push) {
        location[obj.push].push(keyLocation);
      }
    };

    var grammar = require_grammar();
    var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

    exports.parse = function (sdp) {
      var session = {},
          media = [],
          location = session;
      sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
        var type = l[0];
        var content = l.slice(2);

        if (type === "m") {
          media.push({
            rtp: [],
            fmtp: []
          });
          location = media[media.length - 1];
        }

        for (var j = 0; j < (grammar[type] || []).length; j += 1) {
          var obj = grammar[type][j];

          if (obj.reg.test(content)) {
            return parseReg(obj, location, content);
          }
        }
      });
      session.media = media;
      return session;
    };

    var paramReducer = function (acc, expr) {
      var s = expr.split(/=(.+)/, 2);

      if (s.length === 2) {
        acc[s[0]] = toIntIfInt(s[1]);
      } else if (s.length === 1 && expr.length > 1) {
        acc[s[0]] = void 0;
      }

      return acc;
    };

    exports.parseParams = function (str) {
      return str.split(/;\s?/).reduce(paramReducer, {});
    };

    exports.parseFmtpConfig = exports.parseParams;

    exports.parsePayloads = function (str) {
      return str.toString().split(" ").map(Number);
    };

    exports.parseRemoteCandidates = function (str) {
      var candidates = [];
      var parts = str.split(" ").map(toIntIfInt);

      for (var i = 0; i < parts.length; i += 3) {
        candidates.push({
          component: parts[i],
          ip: parts[i + 1],
          port: parts[i + 2]
        });
      }

      return candidates;
    };

    exports.parseImageAttributes = function (str) {
      return str.split(" ").map(function (item) {
        return item.substring(1, item.length - 1).split(",").reduce(paramReducer, {});
      });
    };

    exports.parseSimulcastStreamList = function (str) {
      return str.split(";").map(function (stream) {
        return stream.split(",").map(function (format) {
          var scid,
              paused = false;

          if (format[0] !== "~") {
            scid = toIntIfInt(format);
          } else {
            scid = toIntIfInt(format.substring(1, format.length));
            paused = true;
          }

          return {
            scid,
            paused
          };
        });
      });
    };
  }

}); // ../../node_modules/sdp-transform/lib/writer.js


var require_writer = __commonJS({
  "../../node_modules/sdp-transform/lib/writer.js"(exports, module) {
    init_process();
    var grammar = require_grammar();
    var formatRegExp = /%[sdv%]/g;

    var format = function (formatStr) {
      var i = 1;
      var args = arguments;
      var len = args.length;
      return formatStr.replace(formatRegExp, function (x) {
        if (i >= len) {
          return x;
        }

        var arg = args[i];
        i += 1;

        switch (x) {
          case "%%":
            return "%";

          case "%s":
            return String(arg);

          case "%d":
            return Number(arg);

          case "%v":
            return "";
        }
      });
    };

    var makeLine = function (type, obj, location) {
      var str = obj.format instanceof Function ? obj.format(obj.push ? location : location[obj.name]) : obj.format;
      var args = [type + "=" + str];

      if (obj.names) {
        for (var i = 0; i < obj.names.length; i += 1) {
          var n2 = obj.names[i];

          if (obj.name) {
            args.push(location[obj.name][n2]);
          } else {
            args.push(location[obj.names[i]]);
          }
        }
      } else {
        args.push(location[obj.name]);
      }

      return format.apply(null, args);
    };

    var defaultOuterOrder = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"];
    var defaultInnerOrder = ["i", "c", "b", "a"];

    module.exports = function (session, opts) {
      opts = opts || {};

      if (session.version == null) {
        session.version = 0;
      }

      if (session.name == null) {
        session.name = " ";
      }

      session.media.forEach(function (mLine) {
        if (mLine.payloads == null) {
          mLine.payloads = "";
        }
      });
      var outerOrder = opts.outerOrder || defaultOuterOrder;
      var innerOrder = opts.innerOrder || defaultInnerOrder;
      var sdp = [];
      outerOrder.forEach(function (type) {
        grammar[type].forEach(function (obj) {
          if (obj.name in session && session[obj.name] != null) {
            sdp.push(makeLine(type, obj, session));
          } else if (obj.push in session && session[obj.push] != null) {
            session[obj.push].forEach(function (el) {
              sdp.push(makeLine(type, obj, el));
            });
          }
        });
      });
      session.media.forEach(function (mLine) {
        sdp.push(makeLine("m", grammar.m[0], mLine));
        innerOrder.forEach(function (type) {
          grammar[type].forEach(function (obj) {
            if (obj.name in mLine && mLine[obj.name] != null) {
              sdp.push(makeLine(type, obj, mLine));
            } else if (obj.push in mLine && mLine[obj.push] != null) {
              mLine[obj.push].forEach(function (el) {
                sdp.push(makeLine(type, obj, el));
              });
            }
          });
        });
      });
      return sdp.join("\r\n") + "\r\n";
    };
  }

}); // ../../node_modules/sdp-transform/lib/index.js


var require_lib = __commonJS({
  "../../node_modules/sdp-transform/lib/index.js"(exports) {
    init_process();
    var parser = require_parser();
    var writer = require_writer();
    exports.write = writer;
    exports.parse = parser.parse;
    exports.parseParams = parser.parseParams;
    exports.parseFmtpConfig = parser.parseFmtpConfig;
    exports.parsePayloads = parser.parsePayloads;
    exports.parseRemoteCandidates = parser.parseRemoteCandidates;
    exports.parseImageAttributes = parser.parseImageAttributes;
    exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;
  }

}); // ../../node_modules/uuid/lib/rng-browser.js


var require_rng_browser = __commonJS({
  "../../node_modules/uuid/lib/rng-browser.js"(exports, module) {
    init_process();
    var getRandomValues5 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);

    if (getRandomValues5) {
      rnds85 = new Uint8Array(16);

      module.exports = function whatwgRNG() {
        getRandomValues5(rnds85);
        return rnds85;
      };
    } else {
      rnds = new Array(16);

      module.exports = function mathRNG() {
        for (var i = 0, r2; i < 16; i++) {
          if ((i & 3) === 0) r2 = Math.random() * 4294967296;
          rnds[i] = r2 >>> ((i & 3) << 3) & 255;
        }

        return rnds;
      };
    }

    var rnds85;
    var rnds;
  }

}); // ../../node_modules/uuid/lib/bytesToUuid.js


var require_bytesToUuid = __commonJS({
  "../../node_modules/uuid/lib/bytesToUuid.js"(exports, module) {
    init_process();
    var byteToHex5 = [];

    for (i = 0; i < 256; ++i) {
      byteToHex5[i] = (i + 256).toString(16).substr(1);
    }

    var i;

    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex5;
      return [bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], "-", bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]], bth[buf[i2++]]].join("");
    }

    module.exports = bytesToUuid;
  }

}); // ../../node_modules/uuid/v1.js


var require_v1 = __commonJS({
  "../../node_modules/uuid/v1.js"(exports, module) {
    init_process();
    var rng5 = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();

    var _nodeId;

    var _clockseq;

    var _lastMSecs = 0;
    var _lastNSecs = 0;

    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || [];
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;

      if (node == null || clockseq == null) {
        var seedBytes = rng5();

        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }

        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }

      var msecs = options.msecs !== void 0 ? options.msecs : new Date().getTime();
      var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;

      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }

      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }

      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }

      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      var tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;

      for (var n2 = 0; n2 < 6; ++n2) {
        b[i + n2] = node[n2];
      }

      return buf ? buf : bytesToUuid(b);
    }

    module.exports = v1;
  }

}); // ../../node_modules/uuid/v4.js


var require_v4 = __commonJS({
  "../../node_modules/uuid/v4.js"(exports, module) {
    init_process();
    var rng5 = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();

    function v45(options, buf, offset) {
      var i = buf && offset || 0;

      if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
      }

      options = options || {};
      var rnds = options.random || (options.rng || rng5)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;

      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }

      return buf || bytesToUuid(rnds);
    }

    module.exports = v45;
  }

}); // ../../node_modules/uuid/index.js


var require_uuid = __commonJS({
  "../../node_modules/uuid/index.js"(exports, module) {
    init_process();
    var v1 = require_v1();
    var v45 = require_v4();
    var uuid = v45;
    uuid.v1 = v1;
    uuid.v4 = v45;
    module.exports = uuid;
  }

}); // ../../node_modules/whatwg-fetch/dist/fetch.umd.js


var require_fetch_umd = __commonJS({
  "../../node_modules/whatwg-fetch/dist/fetch.umd.js"(exports, module) {
    init_process();

    (function (global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.WHATWGFetch = {});
    })(exports, function (exports2) {
      "use strict";

      var global2 = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2;
      var support = {
        searchParams: "URLSearchParams" in global2,
        iterable: "Symbol" in global2 && "iterator" in Symbol,
        blob: "FileReader" in global2 && "Blob" in global2 && function () {
          try {
            new Blob();
            return true;
          } catch (e2) {
            return false;
          }
        }(),
        formData: "FormData" in global2,
        arrayBuffer: "ArrayBuffer" in global2
      };

      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }

      if (support.arrayBuffer) {
        var viewClasses = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];

        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }

      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }

        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
          throw new TypeError('Invalid character in header field name: "' + name + '"');
        }

        return name.toLowerCase();
      }

      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }

        return value;
      }

      function iteratorFor(items) {
        var iterator = {
          next: function () {
            var value = items.shift();
            return {
              done: value === void 0,
              value
            };
          }
        };

        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
            return iterator;
          };
        }

        return iterator;
      }

      function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
          }, this);
        }
      }

      Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };

      Headers.prototype["delete"] = function (name) {
        delete this.map[normalizeName(name)];
      };

      Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };

      Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };

      Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };

      Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };

      Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };

      Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
          items.push(value);
        });
        return iteratorFor(items);
      };

      Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };

      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }

      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }

        body.bodyUsed = true;
      }

      function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
          reader.onload = function () {
            resolve(reader.result);
          };

          reader.onerror = function () {
            reject(reader.error);
          };
        });
      }

      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }

      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }

      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);

        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }

        return chars.join("");
      }

      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }

      function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;

          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }

          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };

        if (support.blob) {
          this.blob = function () {
            var rejected = consumed(this);

            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };

          this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);

              if (isConsumed) {
                return isConsumed;
              }

              if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }

        this.text = function () {
          var rejected = consumed(this);

          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };

        if (support.formData) {
          this.formData = function () {
            return this.text().then(decode);
          };
        }

        this.json = function () {
          return this.text().then(JSON.parse);
        };

        return this;
      }

      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }

      function Request(input, options) {
        if (!(this instanceof Request)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }

        options = options || {};
        var body = options.body;

        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }

          this.url = input.url;
          this.credentials = input.credentials;

          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }

          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;

          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }

        this.credentials = options.credentials || this.credentials || "same-origin";

        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }

        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;

        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }

        this._initBody(body);

        if (this.method === "GET" || this.method === "HEAD") {
          if (options.cache === "no-store" || options.cache === "no-cache") {
            var reParamSearch = /([?&])_=[^&]*/;

            if (reParamSearch.test(this.url)) {
              this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            } else {
              var reQueryString = /\?/;
              this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
      }

      Request.prototype.clone = function () {
        return new Request(this, {
          body: this._bodyInit
        });
      };

      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function (bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }

      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split("\r").map(function (header) {
          return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
        }).forEach(function (line) {
          var parts = line.split(":");
          var key = parts.shift().trim();

          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }

      Body.call(Request.prototype);

      function Response(bodyInit, options) {
        if (!(this instanceof Response)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }

        if (!options) {
          options = {};
        }

        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
        this.headers = new Headers(options.headers);
        this.url = options.url || "";

        this._initBody(bodyInit);
      }

      Body.call(Response.prototype);

      Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };

      Response.error = function () {
        var response = new Response(null, {
          status: 0,
          statusText: ""
        });
        response.type = "error";
        return response;
      };

      var redirectStatuses = [301, 302, 303, 307, 308];

      Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }

        return new Response(null, {
          status,
          headers: {
            location: url
          }
        });
      };

      exports2.DOMException = global2.DOMException;

      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function (message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };

        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }

      function fetch2(input, init) {
        return new Promise(function (resolve, reject) {
          var request = new Request(input, init);

          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }

          var xhr = new XMLHttpRequest();

          function abortXhr() {
            xhr.abort();
          }

          xhr.onload = function () {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function () {
              resolve(new Response(body, options));
            }, 0);
          };

          xhr.onerror = function () {
            setTimeout(function () {
              reject(new TypeError("Network request failed"));
            }, 0);
          };

          xhr.ontimeout = function () {
            setTimeout(function () {
              reject(new TypeError("Network request failed"));
            }, 0);
          };

          xhr.onabort = function () {
            setTimeout(function () {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            }, 0);
          };

          function fixUrl(url) {
            try {
              return url === "" && global2.location.href ? global2.location.href : url;
            } catch (e2) {
              return url;
            }
          }

          xhr.open(request.method, fixUrl(request.url), true);

          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }

          if ("responseType" in xhr) {
            if (support.blob) {
              xhr.responseType = "blob";
            } else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
              xhr.responseType = "arraybuffer";
            }
          }

          if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) {
            Object.getOwnPropertyNames(init.headers).forEach(function (name) {
              xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
          } else {
            request.headers.forEach(function (value, name) {
              xhr.setRequestHeader(name, value);
            });
          }

          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }

          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }

      fetch2.polyfill = true;

      if (!global2.fetch) {
        global2.fetch = fetch2;
        global2.Headers = Headers;
        global2.Request = Request;
        global2.Response = Response;
      }

      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
    });
  }

}); // ../../node_modules/isomorphic-fetch/fetch-npm-browserify.js


var require_fetch_npm_browserify = __commonJS({
  "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js"(exports, module) {
    init_process();
    require_fetch_umd();
    module.exports = self.fetch.bind(self);
  }

}); // ../../node_modules/ms/index.js


var require_ms = __commonJS({
  "../../node_modules/ms/index.js"(exports, module) {
    init_process();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    module.exports = function (val, options) {
      options = options || {};
      var type = typeof val;

      if (type === "string" && val.length > 0) {
        return parse3(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }

      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };

    function parse3(str) {
      str = String(str);

      if (str.length > 100) {
        return;
      }

      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

      if (!match) {
        return;
      }

      var n2 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();

      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y;

        case "weeks":
        case "week":
        case "w":
          return n2 * w;

        case "days":
        case "day":
        case "d":
          return n2 * d;

        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h;

        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m;

        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s;

        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;

        default:
          return void 0;
      }
    }

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }

      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }

      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }

      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }

      return ms + "ms";
    }

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }

      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }

      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }

      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }

      return ms + " ms";
    }

    function plural(ms, msAbs, n2, name) {
      var isPlural = msAbs >= n2 * 1.5;
      return Math.round(ms / n2) + " " + name + (isPlural ? "s" : "");
    }
  }

}); // ../../node_modules/debug/src/common.js


var require_common = __commonJS({
  "../../node_modules/debug/src/common.js"(exports, module) {
    init_process();

    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach(key => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};

      function selectColor(namespace) {
        let hash = 0;

        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }

        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }

      createDebug.selectColor = selectColor;

      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;

        function debug(...args) {
          if (!debug.enabled) {
            return;
          }

          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);

          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }

          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }

            index++;
            const formatter = createDebug.formatters[format];

            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }

            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }

        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }

            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }

            return enabledCache;
          },
          set: v => {
            enableOverride = v;
          }
        });

        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }

        return debug;
      }

      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }

      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;

        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }

          namespaces = split[i].replace(/\*/g, ".*?");

          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }

      function disable() {
        const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => "-" + namespace)].join(",");
        createDebug.enable("");
        return namespaces;
      }

      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }

        let i;
        let len;

        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }

        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }

        return false;
      }

      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }

      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }

        return val;
      }

      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }

      createDebug.enable(createDebug.load());
      return createDebug;
    }

    module.exports = setup;
  }

}); // ../../node_modules/debug/src/browser.js


var require_browser2 = __commonJS({
  "../../node_modules/debug/src/browser.js"(exports, module) {
    init_process();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();

    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();

    exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }

      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }

      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);

      if (!this.useColors) {
        return;
      }

      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, match => {
        if (match === "%%") {
          return;
        }

        index++;

        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }

    exports.log = console.debug || console.log || (() => {});

    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {}
    }

    function load() {
      let r2;

      try {
        r2 = exports.storage.getItem("debug");
      } catch (error) {}

      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = undefined;
      }

      return r2;
    }

    function localstorage() {
      try {
        return localStorage;
      } catch (error) {}
    }

    module.exports = require_common()(exports);
    var {
      formatters
    } = module.exports;

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }

}); // ../../node_modules/bowser/es5.js


var require_es5 = __commonJS({
  "../../node_modules/bowser/es5.js"(exports, module) {
    init_process();
    !function (e2, t2) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t2() : typeof define == "function" && define.amd ? define([], t2) : typeof exports == "object" ? exports.bowser = t2() : e2.bowser = t2();
    }(exports, function () {
      return function (e2) {
        var t2 = {};

        function r2(n2) {
          if (t2[n2]) return t2[n2].exports;
          var i = t2[n2] = {
            i: n2,
            l: false,
            exports: {}
          };
          return e2[n2].call(i.exports, i, i.exports, r2), i.l = true, i.exports;
        }

        return r2.m = e2, r2.c = t2, r2.d = function (e3, t3, n2) {
          r2.o(e3, t3) || Object.defineProperty(e3, t3, {
            enumerable: true,
            get: n2
          });
        }, r2.r = function (e3) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e3, "__esModule", {
            value: true
          });
        }, r2.t = function (e3, t3) {
          if (1 & t3 && (e3 = r2(e3)), 8 & t3) return e3;
          if (4 & t3 && typeof e3 == "object" && e3 && e3.__esModule) return e3;
          var n2 = /* @__PURE__ */Object.create(null);
          if (r2.r(n2), Object.defineProperty(n2, "default", {
            enumerable: true,
            value: e3
          }), 2 & t3 && typeof e3 != "string") for (var i in e3) r2.d(n2, i, function (t4) {
            return e3[t4];
          }.bind(null, i));
          return n2;
        }, r2.n = function (e3) {
          var t3 = e3 && e3.__esModule ? function () {
            return e3.default;
          } : function () {
            return e3;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function (e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r2.p = "", r2(r2.s = 90);
      }({
        17: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;

          var n2 = r2(18),
              i = function () {
            function e3() {}

            return e3.getFirstMatch = function (e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 0 && r3[1] || "";
            }, e3.getSecondMatch = function (e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 1 && r3[2] || "";
            }, e3.matchAndReturnConst = function (e4, t3, r3) {
              if (e4.test(t3)) return r3;
            }, e3.getWindowsVersionName = function (e4) {
              switch (e4) {
                case "NT":
                  return "NT";

                case "XP":
                  return "XP";

                case "NT 5.0":
                  return "2000";

                case "NT 5.1":
                  return "XP";

                case "NT 5.2":
                  return "2003";

                case "NT 6.0":
                  return "Vista";

                case "NT 6.1":
                  return "7";

                case "NT 6.2":
                  return "8";

                case "NT 6.3":
                  return "8.1";

                case "NT 10.0":
                  return "10";

                default:
                  return;
              }
            }, e3.getMacOSVersionName = function (e4) {
              var t3 = e4.split(".").splice(0, 2).map(function (e5) {
                return parseInt(e5, 10) || 0;
              });
              if (t3.push(0), t3[0] === 10) switch (t3[1]) {
                case 5:
                  return "Leopard";

                case 6:
                  return "Snow Leopard";

                case 7:
                  return "Lion";

                case 8:
                  return "Mountain Lion";

                case 9:
                  return "Mavericks";

                case 10:
                  return "Yosemite";

                case 11:
                  return "El Capitan";

                case 12:
                  return "Sierra";

                case 13:
                  return "High Sierra";

                case 14:
                  return "Mojave";

                case 15:
                  return "Catalina";

                default:
                  return;
              }
            }, e3.getAndroidVersionName = function (e4) {
              var t3 = e4.split(".").splice(0, 2).map(function (e5) {
                return parseInt(e5, 10) || 0;
              });
              if (t3.push(0), !(t3[0] === 1 && t3[1] < 5)) return t3[0] === 1 && t3[1] < 6 ? "Cupcake" : t3[0] === 1 && t3[1] >= 6 ? "Donut" : t3[0] === 2 && t3[1] < 2 ? "Eclair" : t3[0] === 2 && t3[1] === 2 ? "Froyo" : t3[0] === 2 && t3[1] > 2 ? "Gingerbread" : t3[0] === 3 ? "Honeycomb" : t3[0] === 4 && t3[1] < 1 ? "Ice Cream Sandwich" : t3[0] === 4 && t3[1] < 4 ? "Jelly Bean" : t3[0] === 4 && t3[1] >= 4 ? "KitKat" : t3[0] === 5 ? "Lollipop" : t3[0] === 6 ? "Marshmallow" : t3[0] === 7 ? "Nougat" : t3[0] === 8 ? "Oreo" : t3[0] === 9 ? "Pie" : void 0;
            }, e3.getVersionPrecision = function (e4) {
              return e4.split(".").length;
            }, e3.compareVersions = function (t3, r3, n3) {
              n3 === void 0 && (n3 = false);
              var i2 = e3.getVersionPrecision(t3),
                  s = e3.getVersionPrecision(r3),
                  a = Math.max(i2, s),
                  o2 = 0,
                  u = e3.map([t3, r3], function (t4) {
                var r4 = a - e3.getVersionPrecision(t4),
                    n4 = t4 + new Array(r4 + 1).join(".0");
                return e3.map(n4.split("."), function (e4) {
                  return new Array(20 - e4.length).join("0") + e4;
                }).reverse();
              });

              for (n3 && (o2 = a - Math.min(i2, s)), a -= 1; a >= o2;) {
                if (u[0][a] > u[1][a]) return 1;

                if (u[0][a] === u[1][a]) {
                  if (a === o2) return 0;
                  a -= 1;
                } else if (u[0][a] < u[1][a]) return -1;
              }
            }, e3.map = function (e4, t3) {
              var r3,
                  n3 = [];
              if (Array.prototype.map) return Array.prototype.map.call(e4, t3);

              for (r3 = 0; r3 < e4.length; r3 += 1) n3.push(t3(e4[r3]));

              return n3;
            }, e3.find = function (e4, t3) {
              var r3, n3;
              if (Array.prototype.find) return Array.prototype.find.call(e4, t3);

              for (r3 = 0, n3 = e4.length; r3 < n3; r3 += 1) {
                var i2 = e4[r3];
                if (t3(i2, r3)) return i2;
              }
            }, e3.assign = function (e4) {
              for (var t3, r3, n3 = e4, i2 = arguments.length, s = new Array(i2 > 1 ? i2 - 1 : 0), a = 1; a < i2; a++) s[a - 1] = arguments[a];

              if (Object.assign) return Object.assign.apply(Object, [e4].concat(s));

              var o2 = function () {
                var e5 = s[t3];
                typeof e5 == "object" && e5 !== null && Object.keys(e5).forEach(function (t4) {
                  n3[t4] = e5[t4];
                });
              };

              for (t3 = 0, r3 = s.length; t3 < r3; t3 += 1) o2();

              return e4;
            }, e3.getBrowserAlias = function (e4) {
              return n2.BROWSER_ALIASES_MAP[e4];
            }, e3.getBrowserTypeByAlias = function (e4) {
              return n2.BROWSER_MAP[e4] || "";
            }, e3;
          }();

          t2.default = i, e2.exports = t2.default;
        },
        18: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
          t2.BROWSER_ALIASES_MAP = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
          };
          t2.BROWSER_MAP = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
          };
          t2.PLATFORMS_MAP = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
          };
          t2.OS_MAP = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
          };
          t2.ENGINE_MAP = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
          };
        },
        90: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2,
              i = (n2 = r2(91)) && n2.__esModule ? n2 : {
            default: n2
          },
              s = r2(18);

          function a(e3, t3) {
            for (var r3 = 0; r3 < t3.length; r3++) {
              var n3 = t3[r3];
              n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, n3.key, n3);
            }
          }

          var o2 = function () {
            function e3() {}

            var t3, r3, n3;
            return e3.getParser = function (e4, t4) {
              if (t4 === void 0 && (t4 = false), typeof e4 != "string") throw new Error("UserAgent should be a string");
              return new i.default(e4, t4);
            }, e3.parse = function (e4) {
              return new i.default(e4).getResult();
            }, t3 = e3, n3 = [{
              key: "BROWSER_MAP",
              get: function () {
                return s.BROWSER_MAP;
              }
            }, {
              key: "ENGINE_MAP",
              get: function () {
                return s.ENGINE_MAP;
              }
            }, {
              key: "OS_MAP",
              get: function () {
                return s.OS_MAP;
              }
            }, {
              key: "PLATFORMS_MAP",
              get: function () {
                return s.PLATFORMS_MAP;
              }
            }], (r3 = null) && a(t3.prototype, r3), n3 && a(t3, n3), e3;
          }();

          t2.default = o2, e2.exports = t2.default;
        },
        91: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2 = u(r2(92)),
              i = u(r2(93)),
              s = u(r2(94)),
              a = u(r2(95)),
              o2 = u(r2(17));

          function u(e3) {
            return e3 && e3.__esModule ? e3 : {
              default: e3
            };
          }

          var d = function () {
            function e3(e4, t4) {
              if (t4 === void 0 && (t4 = false), e4 == null || e4 === "") throw new Error("UserAgent parameter can't be empty");
              this._ua = e4, this.parsedResult = {}, t4 !== true && this.parse();
            }

            var t3 = e3.prototype;
            return t3.getUA = function () {
              return this._ua;
            }, t3.test = function (e4) {
              return e4.test(this._ua);
            }, t3.parseBrowser = function () {
              var e4 = this;
              this.parsedResult.browser = {};
              var t4 = o2.default.find(n2.default, function (t5) {
                if (typeof t5.test == "function") return t5.test(e4);
                if (t5.test instanceof Array) return t5.test.some(function (t6) {
                  return e4.test(t6);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
            }, t3.getBrowser = function () {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t3.getBrowserName = function (e4) {
              return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t3.getBrowserVersion = function () {
              return this.getBrowser().version;
            }, t3.getOS = function () {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t3.parseOS = function () {
              var e4 = this;
              this.parsedResult.os = {};
              var t4 = o2.default.find(i.default, function (t5) {
                if (typeof t5.test == "function") return t5.test(e4);
                if (t5.test instanceof Array) return t5.test.some(function (t6) {
                  return e4.test(t6);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
            }, t3.getOSName = function (e4) {
              var t4 = this.getOS().name;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.getOSVersion = function () {
              return this.getOS().version;
            }, t3.getPlatform = function () {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t3.getPlatformType = function (e4) {
              e4 === void 0 && (e4 = false);
              var t4 = this.getPlatform().type;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.parsePlatform = function () {
              var e4 = this;
              this.parsedResult.platform = {};
              var t4 = o2.default.find(s.default, function (t5) {
                if (typeof t5.test == "function") return t5.test(e4);
                if (t5.test instanceof Array) return t5.test.some(function (t6) {
                  return e4.test(t6);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
            }, t3.getEngine = function () {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t3.getEngineName = function (e4) {
              return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t3.parseEngine = function () {
              var e4 = this;
              this.parsedResult.engine = {};
              var t4 = o2.default.find(a.default, function (t5) {
                if (typeof t5.test == "function") return t5.test(e4);
                if (t5.test instanceof Array) return t5.test.some(function (t6) {
                  return e4.test(t6);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
            }, t3.parse = function () {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t3.getResult = function () {
              return o2.default.assign({}, this.parsedResult);
            }, t3.satisfies = function (e4) {
              var t4 = this,
                  r3 = {},
                  n3 = 0,
                  i2 = {},
                  s2 = 0;

              if (Object.keys(e4).forEach(function (t5) {
                var a3 = e4[t5];
                typeof a3 == "string" ? (i2[t5] = a3, s2 += 1) : typeof a3 == "object" && (r3[t5] = a3, n3 += 1);
              }), n3 > 0) {
                var a2 = Object.keys(r3),
                    u2 = o2.default.find(a2, function (e5) {
                  return t4.isOS(e5);
                });

                if (u2) {
                  var d2 = this.satisfies(r3[u2]);
                  if (d2 !== void 0) return d2;
                }

                var c = o2.default.find(a2, function (e5) {
                  return t4.isPlatform(e5);
                });

                if (c) {
                  var f = this.satisfies(r3[c]);
                  if (f !== void 0) return f;
                }
              }

              if (s2 > 0) {
                var l = Object.keys(i2),
                    h = o2.default.find(l, function (e5) {
                  return t4.isBrowser(e5, true);
                });
                if (h !== void 0) return this.compareVersion(i2[h]);
              }
            }, t3.isBrowser = function (e4, t4) {
              t4 === void 0 && (t4 = false);
              var r3 = this.getBrowserName().toLowerCase(),
                  n3 = e4.toLowerCase(),
                  i2 = o2.default.getBrowserTypeByAlias(n3);
              return t4 && i2 && (n3 = i2.toLowerCase()), n3 === r3;
            }, t3.compareVersion = function (e4) {
              var t4 = [0],
                  r3 = e4,
                  n3 = false,
                  i2 = this.getBrowserVersion();
              if (typeof i2 == "string") return e4[0] === ">" || e4[0] === "<" ? (r3 = e4.substr(1), e4[1] === "=" ? (n3 = true, r3 = e4.substr(2)) : t4 = [], e4[0] === ">" ? t4.push(1) : t4.push(-1)) : e4[0] === "=" ? r3 = e4.substr(1) : e4[0] === "~" && (n3 = true, r3 = e4.substr(1)), t4.indexOf(o2.default.compareVersions(i2, r3, n3)) > -1;
            }, t3.isOS = function (e4) {
              return this.getOSName(true) === String(e4).toLowerCase();
            }, t3.isPlatform = function (e4) {
              return this.getPlatformType(true) === String(e4).toLowerCase();
            }, t3.isEngine = function (e4) {
              return this.getEngineName(true) === String(e4).toLowerCase();
            }, t3.is = function (e4, t4) {
              return t4 === void 0 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
            }, t3.some = function (e4) {
              var t4 = this;
              return e4 === void 0 && (e4 = []), e4.some(function (e5) {
                return t4.is(e5);
              });
            }, e3;
          }();

          t2.default = d, e2.exports = t2.default;
        },
        92: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2,
              i = (n2 = r2(17)) && n2.__esModule ? n2 : {
            default: n2
          };
          var s = /version\/(\d+(\.?_?\d+)+)/i,
              a = [{
            test: [/googlebot/i],
            describe: function (e3) {
              var t3 = {
                name: "Googlebot"
              },
                  r3 = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/opera/i],
            describe: function (e3) {
              var t3 = {
                name: "Opera"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/opr\/|opios/i],
            describe: function (e3) {
              var t3 = {
                name: "Opera"
              },
                  r3 = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/SamsungBrowser/i],
            describe: function (e3) {
              var t3 = {
                name: "Samsung Internet for Android"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/Whale/i],
            describe: function (e3) {
              var t3 = {
                name: "NAVER Whale Browser"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/MZBrowser/i],
            describe: function (e3) {
              var t3 = {
                name: "MZ Browser"
              },
                  r3 = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/focus/i],
            describe: function (e3) {
              var t3 = {
                name: "Focus"
              },
                  r3 = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/swing/i],
            describe: function (e3) {
              var t3 = {
                name: "Swing"
              },
                  r3 = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/coast/i],
            describe: function (e3) {
              var t3 = {
                name: "Opera Coast"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe: function (e3) {
              var t3 = {
                name: "Opera Touch"
              },
                  r3 = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/yabrowser/i],
            describe: function (e3) {
              var t3 = {
                name: "Yandex Browser"
              },
                  r3 = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/ucbrowser/i],
            describe: function (e3) {
              var t3 = {
                name: "UC Browser"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/Maxthon|mxios/i],
            describe: function (e3) {
              var t3 = {
                name: "Maxthon"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/epiphany/i],
            describe: function (e3) {
              var t3 = {
                name: "Epiphany"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/puffin/i],
            describe: function (e3) {
              var t3 = {
                name: "Puffin"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/sleipnir/i],
            describe: function (e3) {
              var t3 = {
                name: "Sleipnir"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/k-meleon/i],
            describe: function (e3) {
              var t3 = {
                name: "K-Meleon"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/micromessenger/i],
            describe: function (e3) {
              var t3 = {
                name: "WeChat"
              },
                  r3 = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/qqbrowser/i],
            describe: function (e3) {
              var t3 = {
                name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser"
              },
                  r3 = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/msie|trident/i],
            describe: function (e3) {
              var t3 = {
                name: "Internet Explorer"
              },
                  r3 = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/\sedg\//i],
            describe: function (e3) {
              var t3 = {
                name: "Microsoft Edge"
              },
                  r3 = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/edg([ea]|ios)/i],
            describe: function (e3) {
              var t3 = {
                name: "Microsoft Edge"
              },
                  r3 = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/vivaldi/i],
            describe: function (e3) {
              var t3 = {
                name: "Vivaldi"
              },
                  r3 = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/seamonkey/i],
            describe: function (e3) {
              var t3 = {
                name: "SeaMonkey"
              },
                  r3 = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/sailfish/i],
            describe: function (e3) {
              var t3 = {
                name: "Sailfish"
              },
                  r3 = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/silk/i],
            describe: function (e3) {
              var t3 = {
                name: "Amazon Silk"
              },
                  r3 = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/phantom/i],
            describe: function (e3) {
              var t3 = {
                name: "PhantomJS"
              },
                  r3 = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/slimerjs/i],
            describe: function (e3) {
              var t3 = {
                name: "SlimerJS"
              },
                  r3 = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function (e3) {
              var t3 = {
                name: "BlackBerry"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/(web|hpw)[o0]s/i],
            describe: function (e3) {
              var t3 = {
                name: "WebOS Browser"
              },
                  r3 = i.default.getFirstMatch(s, e3) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/bada/i],
            describe: function (e3) {
              var t3 = {
                name: "Bada"
              },
                  r3 = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/tizen/i],
            describe: function (e3) {
              var t3 = {
                name: "Tizen"
              },
                  r3 = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/qupzilla/i],
            describe: function (e3) {
              var t3 = {
                name: "QupZilla"
              },
                  r3 = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/firefox|iceweasel|fxios/i],
            describe: function (e3) {
              var t3 = {
                name: "Firefox"
              },
                  r3 = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/electron/i],
            describe: function (e3) {
              var t3 = {
                name: "Electron"
              },
                  r3 = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/MiuiBrowser/i],
            describe: function (e3) {
              var t3 = {
                name: "Miui"
              },
                  r3 = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/chromium/i],
            describe: function (e3) {
              var t3 = {
                name: "Chromium"
              },
                  r3 = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/chrome|crios|crmo/i],
            describe: function (e3) {
              var t3 = {
                name: "Chrome"
              },
                  r3 = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/GSA/i],
            describe: function (e3) {
              var t3 = {
                name: "Google Search"
              },
                  r3 = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: function (e3) {
              var t3 = !e3.test(/like android/i),
                  r3 = e3.test(/android/i);
              return t3 && r3;
            },
            describe: function (e3) {
              var t3 = {
                name: "Android Browser"
              },
                  r3 = i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/playstation 4/i],
            describe: function (e3) {
              var t3 = {
                name: "PlayStation 4"
              },
                  r3 = i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/safari|applewebkit/i],
            describe: function (e3) {
              var t3 = {
                name: "Safari"
              },
                  r3 = i.default.getFirstMatch(s, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/.*/i],
            describe: function (e3) {
              var t3 = e3.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
              return {
                name: i.default.getFirstMatch(t3, e3),
                version: i.default.getSecondMatch(t3, e3)
              };
            }
          }];
          t2.default = a, e2.exports = t2.default;
        },
        93: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2,
              i = (n2 = r2(17)) && n2.__esModule ? n2 : {
            default: n2
          },
              s = r2(18);
          var a = [{
            test: [/Roku\/DVP/],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
              return {
                name: s.OS_MAP.Roku,
                version: t3
              };
            }
          }, {
            test: [/windows phone/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
              return {
                name: s.OS_MAP.WindowsPhone,
                version: t3
              };
            }
          }, {
            test: [/windows /i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3),
                  r3 = i.default.getWindowsVersionName(t3);
              return {
                name: s.OS_MAP.Windows,
                version: t3,
                versionName: r3
              };
            }
          }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function (e3) {
              var t3 = {
                name: s.OS_MAP.iOS
              },
                  r3 = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/macintosh/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."),
                  r3 = i.default.getMacOSVersionName(t3),
                  n3 = {
                name: s.OS_MAP.MacOS,
                version: t3
              };
              return r3 && (n3.versionName = r3), n3;
            }
          }, {
            test: [/(ipod|iphone|ipad)/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
              return {
                name: s.OS_MAP.iOS,
                version: t3
              };
            }
          }, {
            test: function (e3) {
              var t3 = !e3.test(/like android/i),
                  r3 = e3.test(/android/i);
              return t3 && r3;
            },
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3),
                  r3 = i.default.getAndroidVersionName(t3),
                  n3 = {
                name: s.OS_MAP.Android,
                version: t3
              };
              return r3 && (n3.versionName = r3), n3;
            }
          }, {
            test: [/(web|hpw)[o0]s/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3),
                  r3 = {
                name: s.OS_MAP.WebOS
              };
              return t3 && t3.length && (r3.version = t3), r3;
            }
          }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || i.default.getFirstMatch(/\bbb(\d+)/i, e3);
              return {
                name: s.OS_MAP.BlackBerry,
                version: t3
              };
            }
          }, {
            test: [/bada/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
              return {
                name: s.OS_MAP.Bada,
                version: t3
              };
            }
          }, {
            test: [/tizen/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
              return {
                name: s.OS_MAP.Tizen,
                version: t3
              };
            }
          }, {
            test: [/linux/i],
            describe: function () {
              return {
                name: s.OS_MAP.Linux
              };
            }
          }, {
            test: [/CrOS/],
            describe: function () {
              return {
                name: s.OS_MAP.ChromeOS
              };
            }
          }, {
            test: [/PlayStation 4/],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
              return {
                name: s.OS_MAP.PlayStation4,
                version: t3
              };
            }
          }];
          t2.default = a, e2.exports = t2.default;
        },
        94: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2,
              i = (n2 = r2(17)) && n2.__esModule ? n2 : {
            default: n2
          },
              s = r2(18);
          var a = [{
            test: [/googlebot/i],
            describe: function () {
              return {
                type: "bot",
                vendor: "Google"
              };
            }
          }, {
            test: [/huawei/i],
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/(can-l01)/i, e3) && "Nova",
                  r3 = {
                type: s.PLATFORMS_MAP.mobile,
                vendor: "Huawei"
              };
              return t3 && (r3.model = t3), r3;
            }
          }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet,
                vendor: "Nexus"
              };
            }
          }, {
            test: [/ipad/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet,
                vendor: "Apple",
                model: "iPad"
              };
            }
          }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet,
                vendor: "Apple",
                model: "iPad"
              };
            }
          }, {
            test: [/kftt build/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
              };
            }
          }, {
            test: [/silk/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet,
                vendor: "Amazon"
              };
            }
          }, {
            test: [/tablet(?! pc)/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet
              };
            }
          }, {
            test: function (e3) {
              var t3 = e3.test(/ipod|iphone/i),
                  r3 = e3.test(/like (ipod|iphone)/i);
              return t3 && !r3;
            },
            describe: function (e3) {
              var t3 = i.default.getFirstMatch(/(ipod|iphone)/i, e3);
              return {
                type: s.PLATFORMS_MAP.mobile,
                vendor: "Apple",
                model: t3
              };
            }
          }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile,
                vendor: "Nexus"
              };
            }
          }, {
            test: [/[^-]mobi/i],
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile
              };
            }
          }, {
            test: function (e3) {
              return e3.getBrowserName(true) === "blackberry";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile,
                vendor: "BlackBerry"
              };
            }
          }, {
            test: function (e3) {
              return e3.getBrowserName(true) === "bada";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile
              };
            }
          }, {
            test: function (e3) {
              return e3.getBrowserName() === "windows phone";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile,
                vendor: "Microsoft"
              };
            }
          }, {
            test: function (e3) {
              var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
              return e3.getOSName(true) === "android" && t3 >= 3;
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tablet
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "android";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.mobile
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "macos";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.desktop,
                vendor: "Apple"
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "windows";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.desktop
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "linux";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.desktop
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "playstation 4";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tv
              };
            }
          }, {
            test: function (e3) {
              return e3.getOSName(true) === "roku";
            },
            describe: function () {
              return {
                type: s.PLATFORMS_MAP.tv
              };
            }
          }];
          t2.default = a, e2.exports = t2.default;
        },
        95: function (e2, t2, r2) {
          "use strict";

          t2.__esModule = true, t2.default = void 0;
          var n2,
              i = (n2 = r2(17)) && n2.__esModule ? n2 : {
            default: n2
          },
              s = r2(18);
          var a = [{
            test: function (e3) {
              return e3.getBrowserName(true) === "microsoft edge";
            },
            describe: function (e3) {
              if (/\sedg\//i.test(e3)) return {
                name: s.ENGINE_MAP.Blink
              };
              var t3 = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
              return {
                name: s.ENGINE_MAP.EdgeHTML,
                version: t3
              };
            }
          }, {
            test: [/trident/i],
            describe: function (e3) {
              var t3 = {
                name: s.ENGINE_MAP.Trident
              },
                  r3 = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: function (e3) {
              return e3.test(/presto/i);
            },
            describe: function (e3) {
              var t3 = {
                name: s.ENGINE_MAP.Presto
              },
                  r3 = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: function (e3) {
              var t3 = e3.test(/gecko/i),
                  r3 = e3.test(/like gecko/i);
              return t3 && !r3;
            },
            describe: function (e3) {
              var t3 = {
                name: s.ENGINE_MAP.Gecko
              },
                  r3 = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }, {
            test: [/(apple)?webkit\/537\.36/i],
            describe: function () {
              return {
                name: s.ENGINE_MAP.Blink
              };
            }
          }, {
            test: [/(apple)?webkit/i],
            describe: function (e3) {
              var t3 = {
                name: s.ENGINE_MAP.WebKit
              },
                  r3 = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
              return r3 && (t3.version = r3), t3;
            }
          }];
          t2.default = a, e2.exports = t2.default;
        }
      });
    });
  }

}); // ../../node_modules/mediasoup-client/lib/Logger.js


var require_Logger = __commonJS({
  "../../node_modules/mediasoup-client/lib/Logger.js"(exports) {
    "use strict";

    init_process();

    var __importDefault = exports && exports.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Logger = void 0;

    var debug_1 = __importDefault(require_browser2());

    var APP_NAME = "mediasoup-client";
    var Logger3 = class {
      constructor(prefix) {
        if (prefix) {
          this._debug = (0, debug_1.default)(`${APP_NAME}:${prefix}`);
          this._warn = (0, debug_1.default)(`${APP_NAME}:WARN:${prefix}`);
          this._error = (0, debug_1.default)(`${APP_NAME}:ERROR:${prefix}`);
        } else {
          this._debug = (0, debug_1.default)(APP_NAME);
          this._warn = (0, debug_1.default)(`${APP_NAME}:WARN`);
          this._error = (0, debug_1.default)(`${APP_NAME}:ERROR`);
        }

        this._debug.log = console.info.bind(console);
        this._warn.log = console.warn.bind(console);
        this._error.log = console.error.bind(console);
      }

      get debug() {
        return this._debug;
      }

      get warn() {
        return this._warn;
      }

      get error() {
        return this._error;
      }

    };
    exports.Logger = Logger3;
  }

}); // ../../node_modules/events/events.js


var require_events = __commonJS({
  "../../node_modules/events/events.js"(exports, module) {
    "use strict";

    init_process();
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;

    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }

    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }

    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;

    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }

    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function () {
        return defaultMaxListeners;
      },
      set: function (arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }

        defaultMaxListeners = arg;
      }
    });

    EventEmitter.init = function () {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */Object.create(null);
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || void 0;
    };

    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n2) {
      if (typeof n2 !== "number" || n2 < 0 || NumberIsNaN(n2)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n2 + ".");
      }

      this._maxListeners = n2;
      return this;
    };

    function _getMaxListeners(that) {
      if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };

    EventEmitter.prototype.emit = function emit(type) {
      var args = [];

      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

      var doError = type === "error";
      var events = this._events;
      if (events !== void 0) doError = doError && events.error === void 0;else if (!doError) return false;

      if (doError) {
        var er;
        if (args.length > 0) er = args[0];

        if (er instanceof Error) {
          throw er;
        }

        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }

      var handler = events[type];
      if (handler === void 0) return false;

      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);

        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;

      if (events === void 0) {
        events = target._events = /* @__PURE__ */Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }

        existing = events[type];
      }

      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }

        m = _getMaxListeners(target);

        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }

      return target;
    }

    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }

    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: void 0,
        target,
        type,
        listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }

    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0) return this;
      list = events[type];
      if (list === void 0) return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = /* @__PURE__ */Object.create(null);else {
          delete events[type];
          if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0) return this;
        if (position === 0) list.shift();else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
      }

      return this;
    };

    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0) return this;

      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */Object.create(null);else delete events[type];
        }

        return this;
      }

      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;

        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }

        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0) return [];
      var evlistener = events[type];
      if (evlistener === void 0) return [];
      if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }

    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };

    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };

    EventEmitter.listenerCount = function (emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;

    function listenerCount(type) {
      var events = this._events;

      if (events !== void 0) {
        var evlistener = events[type];

        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };

    function arrayClone(arr, n2) {
      var copy = new Array(n2);

      for (var i = 0; i < n2; ++i) copy[i] = arr[i];

      return copy;
    }

    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];

      list.pop();
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);

      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }

      return ret;
    }

    function once(emitter, name) {
      return new Promise(function (resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }

        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }

          resolve([].slice.call(arguments));
        }

        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, {
          once: true
        });

        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
          });
        }
      });
    }

    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }

    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }

          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }

}); // ../../node_modules/mediasoup-client/lib/EnhancedEventEmitter.js


var require_EnhancedEventEmitter = __commonJS({
  "../../node_modules/mediasoup-client/lib/EnhancedEventEmitter.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EnhancedEventEmitter = void 0;
    var events_1 = require_events();
    var Logger_1 = require_Logger();
    var logger = new Logger_1.Logger("EnhancedEventEmitter");
    var EnhancedEventEmitter = class extends events_1.EventEmitter {
      constructor() {
        super();
        this.setMaxListeners(Infinity);
      }

      safeEmit(event, ...args) {
        const numListeners = this.listenerCount(event);

        try {
          return this.emit(event, ...args);
        } catch (error) {
          logger.error("safeEmit() | event listener threw an error [event:%s]:%o", event, error);
          return Boolean(numListeners);
        }
      }

      safeEmitAsPromise(event, ...args) {
        return __async(this, null, function* () {
          return new Promise((resolve, reject) => {
            try {
              this.emit(event, ...args, resolve, reject);
            } catch (error) {
              logger.error("safeEmitAsPromise() | event listener threw an error [event:%s]:%o", event, error);
              reject(error);
            }
          });
        });
      }

    };
    exports.EnhancedEventEmitter = EnhancedEventEmitter;
  }

}); // ../../node_modules/mediasoup-client/lib/errors.js


var require_errors = __commonJS({
  "../../node_modules/mediasoup-client/lib/errors.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InvalidStateError = exports.UnsupportedError = void 0;
    var UnsupportedError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "UnsupportedError";

        if (Error.hasOwnProperty("captureStackTrace")) {
          Error.captureStackTrace(this, UnsupportedError);
        } else {
          this.stack = new Error(message).stack;
        }
      }

    };
    exports.UnsupportedError = UnsupportedError;
    var InvalidStateError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "InvalidStateError";

        if (Error.hasOwnProperty("captureStackTrace")) {
          Error.captureStackTrace(this, InvalidStateError);
        } else {
          this.stack = new Error(message).stack;
        }
      }

    };
    exports.InvalidStateError = InvalidStateError;
  }

}); // ../../node_modules/mediasoup-client/lib/utils.js


var require_utils2 = __commonJS({
  "../../node_modules/mediasoup-client/lib/utils.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateRandomNumber = exports.clone = void 0;

    function clone(data, defaultValue) {
      if (typeof data === "undefined") return defaultValue;
      return JSON.parse(JSON.stringify(data));
    }

    exports.clone = clone;

    function generateRandomNumber() {
      return Math.round(Math.random() * 1e7);
    }

    exports.generateRandomNumber = generateRandomNumber;
  }

}); // ../../node_modules/h264-profile-level-id/index.js


var require_h264_profile_level_id = __commonJS({
  "../../node_modules/h264-profile-level-id/index.js"(exports) {
    init_process();
    var debug = require_browser2()("h264-profile-level-id");
    debug.log = console.info.bind(console);
    var ProfileConstrainedBaseline = 1;
    var ProfileBaseline = 2;
    var ProfileMain = 3;
    var ProfileConstrainedHigh = 4;
    var ProfileHigh = 5;
    exports.ProfileConstrainedBaseline = ProfileConstrainedBaseline;
    exports.ProfileBaseline = ProfileBaseline;
    exports.ProfileMain = ProfileMain;
    exports.ProfileConstrainedHigh = ProfileConstrainedHigh;
    exports.ProfileHigh = ProfileHigh;
    var Level1_b = 0;
    var Level1 = 10;
    var Level1_1 = 11;
    var Level1_2 = 12;
    var Level1_3 = 13;
    var Level2 = 20;
    var Level2_1 = 21;
    var Level2_2 = 22;
    var Level3 = 30;
    var Level3_1 = 31;
    var Level3_2 = 32;
    var Level4 = 40;
    var Level4_1 = 41;
    var Level4_2 = 42;
    var Level5 = 50;
    var Level5_1 = 51;
    var Level5_2 = 52;
    exports.Level1_b = Level1_b;
    exports.Level1 = Level1;
    exports.Level1_1 = Level1_1;
    exports.Level1_2 = Level1_2;
    exports.Level1_3 = Level1_3;
    exports.Level2 = Level2;
    exports.Level2_1 = Level2_1;
    exports.Level2_2 = Level2_2;
    exports.Level3 = Level3;
    exports.Level3_1 = Level3_1;
    exports.Level3_2 = Level3_2;
    exports.Level4 = Level4;
    exports.Level4_1 = Level4_1;
    exports.Level4_2 = Level4_2;
    exports.Level5 = Level5;
    exports.Level5_1 = Level5_1;
    exports.Level5_2 = Level5_2;
    var ProfileLevelId = class {
      constructor(profile, level) {
        this.profile = profile;
        this.level = level;
      }

    };
    exports.ProfileLevelId = ProfileLevelId;
    var DefaultProfileLevelId = new ProfileLevelId(ProfileConstrainedBaseline, Level3_1);
    var ConstraintSet3Flag = 16;
    var BitPattern = class {
      constructor(str) {
        this._mask = ~byteMaskString("x", str);
        this._maskedValue = byteMaskString("1", str);
      }

      isMatch(value) {
        return this._maskedValue === (value & this._mask);
      }

    };
    var ProfilePattern = class {
      constructor(profile_idc, profile_iop, profile) {
        this.profile_idc = profile_idc;
        this.profile_iop = profile_iop;
        this.profile = profile;
      }

    };
    var ProfilePatterns = [new ProfilePattern(66, new BitPattern("x1xx0000"), ProfileConstrainedBaseline), new ProfilePattern(77, new BitPattern("1xxx0000"), ProfileConstrainedBaseline), new ProfilePattern(88, new BitPattern("11xx0000"), ProfileConstrainedBaseline), new ProfilePattern(66, new BitPattern("x0xx0000"), ProfileBaseline), new ProfilePattern(88, new BitPattern("10xx0000"), ProfileBaseline), new ProfilePattern(77, new BitPattern("0x0x0000"), ProfileMain), new ProfilePattern(100, new BitPattern("00000000"), ProfileHigh), new ProfilePattern(100, new BitPattern("00001100"), ProfileConstrainedHigh)];

    exports.parseProfileLevelId = function (str) {
      if (typeof str !== "string" || str.length !== 6) return null;
      const profile_level_id_numeric = parseInt(str, 16);
      if (profile_level_id_numeric === 0) return null;
      const level_idc = profile_level_id_numeric & 255;
      const profile_iop = profile_level_id_numeric >> 8 & 255;
      const profile_idc = profile_level_id_numeric >> 16 & 255;
      let level;

      switch (level_idc) {
        case Level1_1:
          {
            level = (profile_iop & ConstraintSet3Flag) !== 0 ? Level1_b : Level1_1;
            break;
          }

        case Level1:
        case Level1_2:
        case Level1_3:
        case Level2:
        case Level2_1:
        case Level2_2:
        case Level3:
        case Level3_1:
        case Level3_2:
        case Level4:
        case Level4_1:
        case Level4_2:
        case Level5:
        case Level5_1:
        case Level5_2:
          {
            level = level_idc;
            break;
          }

        default:
          {
            debug("parseProfileLevelId() | unrecognized level_idc:%s", level_idc);
            return null;
          }
      }

      for (const pattern of ProfilePatterns) {
        if (profile_idc === pattern.profile_idc && pattern.profile_iop.isMatch(profile_iop)) {
          return new ProfileLevelId(pattern.profile, level);
        }
      }

      debug("parseProfileLevelId() | unrecognized profile_idc/profile_iop combination");
      return null;
    };

    exports.profileLevelIdToString = function (profile_level_id) {
      if (profile_level_id.level == Level1_b) {
        switch (profile_level_id.profile) {
          case ProfileConstrainedBaseline:
            {
              return "42f00b";
            }

          case ProfileBaseline:
            {
              return "42100b";
            }

          case ProfileMain:
            {
              return "4d100b";
            }

          default:
            {
              debug("profileLevelIdToString() | Level 1_b not is allowed for profile:%s", profile_level_id.profile);
              return null;
            }
        }
      }

      let profile_idc_iop_string;

      switch (profile_level_id.profile) {
        case ProfileConstrainedBaseline:
          {
            profile_idc_iop_string = "42e0";
            break;
          }

        case ProfileBaseline:
          {
            profile_idc_iop_string = "4200";
            break;
          }

        case ProfileMain:
          {
            profile_idc_iop_string = "4d00";
            break;
          }

        case ProfileConstrainedHigh:
          {
            profile_idc_iop_string = "640c";
            break;
          }

        case ProfileHigh:
          {
            profile_idc_iop_string = "6400";
            break;
          }

        default:
          {
            debug("profileLevelIdToString() | unrecognized profile:%s", profile_level_id.profile);
            return null;
          }
      }

      let levelStr = profile_level_id.level.toString(16);
      if (levelStr.length === 1) levelStr = `0${levelStr}`;
      return `${profile_idc_iop_string}${levelStr}`;
    };

    exports.parseSdpProfileLevelId = function (params = {}) {
      const profile_level_id = params["profile-level-id"];
      return !profile_level_id ? DefaultProfileLevelId : exports.parseProfileLevelId(profile_level_id);
    };

    exports.isSameProfile = function (params1 = {}, params2 = {}) {
      const profile_level_id_1 = exports.parseSdpProfileLevelId(params1);
      const profile_level_id_2 = exports.parseSdpProfileLevelId(params2);
      return Boolean(profile_level_id_1 && profile_level_id_2 && profile_level_id_1.profile === profile_level_id_2.profile);
    };

    exports.generateProfileLevelIdForAnswer = function (local_supported_params = {}, remote_offered_params = {}) {
      if (!local_supported_params["profile-level-id"] && !remote_offered_params["profile-level-id"]) {
        debug("generateProfileLevelIdForAnswer() | no profile-level-id in local and remote params");
        return null;
      }

      const local_profile_level_id = exports.parseSdpProfileLevelId(local_supported_params);
      const remote_profile_level_id = exports.parseSdpProfileLevelId(remote_offered_params);
      if (!local_profile_level_id) throw new TypeError("invalid local_profile_level_id");
      if (!remote_profile_level_id) throw new TypeError("invalid remote_profile_level_id");
      if (local_profile_level_id.profile !== remote_profile_level_id.profile) throw new TypeError("H264 Profile mismatch");
      const level_asymmetry_allowed = isLevelAsymmetryAllowed(local_supported_params) && isLevelAsymmetryAllowed(remote_offered_params);
      const local_level = local_profile_level_id.level;
      const remote_level = remote_profile_level_id.level;
      const min_level = minLevel(local_level, remote_level);
      const answer_level = level_asymmetry_allowed ? local_level : min_level;
      debug("generateProfileLevelIdForAnswer() | result: [profile:%s, level:%s]", local_profile_level_id.profile, answer_level);
      return exports.profileLevelIdToString(new ProfileLevelId(local_profile_level_id.profile, answer_level));
    };

    function byteMaskString(c, str) {
      return (str[0] === c) << 7 | (str[1] === c) << 6 | (str[2] === c) << 5 | (str[3] === c) << 4 | (str[4] === c) << 3 | (str[5] === c) << 2 | (str[6] === c) << 1 | (str[7] === c) << 0;
    }

    function isLessLevel(a, b) {
      if (a === Level1_b) return b !== Level1 && b !== Level1_b;
      if (b === Level1_b) return a !== Level1;
      return a < b;
    }

    function minLevel(a, b) {
      return isLessLevel(a, b) ? a : b;
    }

    function isLevelAsymmetryAllowed(params = {}) {
      const level_asymmetry_allowed = params["level-asymmetry-allowed"];
      return level_asymmetry_allowed === 1 || level_asymmetry_allowed === "1";
    }
  }

}); // ../../node_modules/mediasoup-client/lib/ortc.js


var require_ortc = __commonJS({
  "../../node_modules/mediasoup-client/lib/ortc.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canReceive = exports.canSend = exports.generateProbatorRtpParameters = exports.reduceCodecs = exports.getSendingRemoteRtpParameters = exports.getSendingRtpParameters = exports.getRecvRtpCapabilities = exports.getExtendedRtpCapabilities = exports.validateSctpStreamParameters = exports.validateSctpParameters = exports.validateNumSctpStreams = exports.validateSctpCapabilities = exports.validateRtcpParameters = exports.validateRtpEncodingParameters = exports.validateRtpHeaderExtensionParameters = exports.validateRtpCodecParameters = exports.validateRtpParameters = exports.validateRtpHeaderExtension = exports.validateRtcpFeedback = exports.validateRtpCodecCapability = exports.validateRtpCapabilities = void 0;

    var h264 = __importStar(require_h264_profile_level_id());

    var utils = __importStar(require_utils2());

    var RTP_PROBATOR_MID = "probator";
    var RTP_PROBATOR_SSRC = 1234;
    var RTP_PROBATOR_CODEC_PAYLOAD_TYPE = 127;

    function validateRtpCapabilities(caps) {
      if (typeof caps !== "object") throw new TypeError("caps is not an object");
      if (caps.codecs && !Array.isArray(caps.codecs)) throw new TypeError("caps.codecs is not an array");else if (!caps.codecs) caps.codecs = [];

      for (const codec of caps.codecs) {
        validateRtpCodecCapability(codec);
      }

      if (caps.headerExtensions && !Array.isArray(caps.headerExtensions)) throw new TypeError("caps.headerExtensions is not an array");else if (!caps.headerExtensions) caps.headerExtensions = [];

      for (const ext of caps.headerExtensions) {
        validateRtpHeaderExtension(ext);
      }
    }

    exports.validateRtpCapabilities = validateRtpCapabilities;

    function validateRtpCodecCapability(codec) {
      const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
      if (typeof codec !== "object") throw new TypeError("codec is not an object");
      if (!codec.mimeType || typeof codec.mimeType !== "string") throw new TypeError("missing codec.mimeType");
      const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
      if (!mimeTypeMatch) throw new TypeError("invalid codec.mimeType");
      codec.kind = mimeTypeMatch[1].toLowerCase();
      if (codec.preferredPayloadType && typeof codec.preferredPayloadType !== "number") throw new TypeError("invalid codec.preferredPayloadType");
      if (typeof codec.clockRate !== "number") throw new TypeError("missing codec.clockRate");

      if (codec.kind === "audio") {
        if (typeof codec.channels !== "number") codec.channels = 1;
      } else {
        delete codec.channels;
      }

      if (!codec.parameters || typeof codec.parameters !== "object") codec.parameters = {};

      for (const key of Object.keys(codec.parameters)) {
        let value = codec.parameters[key];

        if (value === void 0) {
          codec.parameters[key] = "";
          value = "";
        }

        if (typeof value !== "string" && typeof value !== "number") {
          throw new TypeError(`invalid codec parameter [key:${key}s, value:${value}]`);
        }

        if (key === "apt") {
          if (typeof value !== "number") throw new TypeError("invalid codec apt parameter");
        }
      }

      if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) codec.rtcpFeedback = [];

      for (const fb of codec.rtcpFeedback) {
        validateRtcpFeedback(fb);
      }
    }

    exports.validateRtpCodecCapability = validateRtpCodecCapability;

    function validateRtcpFeedback(fb) {
      if (typeof fb !== "object") throw new TypeError("fb is not an object");
      if (!fb.type || typeof fb.type !== "string") throw new TypeError("missing fb.type");
      if (!fb.parameter || typeof fb.parameter !== "string") fb.parameter = "";
    }

    exports.validateRtcpFeedback = validateRtcpFeedback;

    function validateRtpHeaderExtension(ext) {
      if (typeof ext !== "object") throw new TypeError("ext is not an object");
      if (ext.kind !== "audio" && ext.kind !== "video") throw new TypeError("invalid ext.kind");
      if (!ext.uri || typeof ext.uri !== "string") throw new TypeError("missing ext.uri");
      if (typeof ext.preferredId !== "number") throw new TypeError("missing ext.preferredId");
      if (ext.preferredEncrypt && typeof ext.preferredEncrypt !== "boolean") throw new TypeError("invalid ext.preferredEncrypt");else if (!ext.preferredEncrypt) ext.preferredEncrypt = false;
      if (ext.direction && typeof ext.direction !== "string") throw new TypeError("invalid ext.direction");else if (!ext.direction) ext.direction = "sendrecv";
    }

    exports.validateRtpHeaderExtension = validateRtpHeaderExtension;

    function validateRtpParameters(params) {
      if (typeof params !== "object") throw new TypeError("params is not an object");
      if (params.mid && typeof params.mid !== "string") throw new TypeError("params.mid is not a string");
      if (!Array.isArray(params.codecs)) throw new TypeError("missing params.codecs");

      for (const codec of params.codecs) {
        validateRtpCodecParameters(codec);
      }

      if (params.headerExtensions && !Array.isArray(params.headerExtensions)) throw new TypeError("params.headerExtensions is not an array");else if (!params.headerExtensions) params.headerExtensions = [];

      for (const ext of params.headerExtensions) {
        validateRtpHeaderExtensionParameters(ext);
      }

      if (params.encodings && !Array.isArray(params.encodings)) throw new TypeError("params.encodings is not an array");else if (!params.encodings) params.encodings = [];

      for (const encoding of params.encodings) {
        validateRtpEncodingParameters(encoding);
      }

      if (params.rtcp && typeof params.rtcp !== "object") throw new TypeError("params.rtcp is not an object");else if (!params.rtcp) params.rtcp = {};
      validateRtcpParameters(params.rtcp);
    }

    exports.validateRtpParameters = validateRtpParameters;

    function validateRtpCodecParameters(codec) {
      const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
      if (typeof codec !== "object") throw new TypeError("codec is not an object");
      if (!codec.mimeType || typeof codec.mimeType !== "string") throw new TypeError("missing codec.mimeType");
      const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
      if (!mimeTypeMatch) throw new TypeError("invalid codec.mimeType");
      if (typeof codec.payloadType !== "number") throw new TypeError("missing codec.payloadType");
      if (typeof codec.clockRate !== "number") throw new TypeError("missing codec.clockRate");
      const kind = mimeTypeMatch[1].toLowerCase();

      if (kind === "audio") {
        if (typeof codec.channels !== "number") codec.channels = 1;
      } else {
        delete codec.channels;
      }

      if (!codec.parameters || typeof codec.parameters !== "object") codec.parameters = {};

      for (const key of Object.keys(codec.parameters)) {
        let value = codec.parameters[key];

        if (value === void 0) {
          codec.parameters[key] = "";
          value = "";
        }

        if (typeof value !== "string" && typeof value !== "number") {
          throw new TypeError(`invalid codec parameter [key:${key}s, value:${value}]`);
        }

        if (key === "apt") {
          if (typeof value !== "number") throw new TypeError("invalid codec apt parameter");
        }
      }

      if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) codec.rtcpFeedback = [];

      for (const fb of codec.rtcpFeedback) {
        validateRtcpFeedback(fb);
      }
    }

    exports.validateRtpCodecParameters = validateRtpCodecParameters;

    function validateRtpHeaderExtensionParameters(ext) {
      if (typeof ext !== "object") throw new TypeError("ext is not an object");
      if (!ext.uri || typeof ext.uri !== "string") throw new TypeError("missing ext.uri");
      if (typeof ext.id !== "number") throw new TypeError("missing ext.id");
      if (ext.encrypt && typeof ext.encrypt !== "boolean") throw new TypeError("invalid ext.encrypt");else if (!ext.encrypt) ext.encrypt = false;
      if (!ext.parameters || typeof ext.parameters !== "object") ext.parameters = {};

      for (const key of Object.keys(ext.parameters)) {
        let value = ext.parameters[key];

        if (value === void 0) {
          ext.parameters[key] = "";
          value = "";
        }

        if (typeof value !== "string" && typeof value !== "number") throw new TypeError("invalid header extension parameter");
      }
    }

    exports.validateRtpHeaderExtensionParameters = validateRtpHeaderExtensionParameters;

    function validateRtpEncodingParameters(encoding) {
      if (typeof encoding !== "object") throw new TypeError("encoding is not an object");
      if (encoding.ssrc && typeof encoding.ssrc !== "number") throw new TypeError("invalid encoding.ssrc");
      if (encoding.rid && typeof encoding.rid !== "string") throw new TypeError("invalid encoding.rid");

      if (encoding.rtx && typeof encoding.rtx !== "object") {
        throw new TypeError("invalid encoding.rtx");
      } else if (encoding.rtx) {
        if (typeof encoding.rtx.ssrc !== "number") throw new TypeError("missing encoding.rtx.ssrc");
      }

      if (!encoding.dtx || typeof encoding.dtx !== "boolean") encoding.dtx = false;
      if (encoding.scalabilityMode && typeof encoding.scalabilityMode !== "string") throw new TypeError("invalid encoding.scalabilityMode");
    }

    exports.validateRtpEncodingParameters = validateRtpEncodingParameters;

    function validateRtcpParameters(rtcp) {
      if (typeof rtcp !== "object") throw new TypeError("rtcp is not an object");
      if (rtcp.cname && typeof rtcp.cname !== "string") throw new TypeError("invalid rtcp.cname");
      if (!rtcp.reducedSize || typeof rtcp.reducedSize !== "boolean") rtcp.reducedSize = true;
    }

    exports.validateRtcpParameters = validateRtcpParameters;

    function validateSctpCapabilities(caps) {
      if (typeof caps !== "object") throw new TypeError("caps is not an object");
      if (!caps.numStreams || typeof caps.numStreams !== "object") throw new TypeError("missing caps.numStreams");
      validateNumSctpStreams(caps.numStreams);
    }

    exports.validateSctpCapabilities = validateSctpCapabilities;

    function validateNumSctpStreams(numStreams) {
      if (typeof numStreams !== "object") throw new TypeError("numStreams is not an object");
      if (typeof numStreams.OS !== "number") throw new TypeError("missing numStreams.OS");
      if (typeof numStreams.MIS !== "number") throw new TypeError("missing numStreams.MIS");
    }

    exports.validateNumSctpStreams = validateNumSctpStreams;

    function validateSctpParameters(params) {
      if (typeof params !== "object") throw new TypeError("params is not an object");
      if (typeof params.port !== "number") throw new TypeError("missing params.port");
      if (typeof params.OS !== "number") throw new TypeError("missing params.OS");
      if (typeof params.MIS !== "number") throw new TypeError("missing params.MIS");
      if (typeof params.maxMessageSize !== "number") throw new TypeError("missing params.maxMessageSize");
    }

    exports.validateSctpParameters = validateSctpParameters;

    function validateSctpStreamParameters(params) {
      if (typeof params !== "object") throw new TypeError("params is not an object");
      if (typeof params.streamId !== "number") throw new TypeError("missing params.streamId");
      let orderedGiven = false;
      if (typeof params.ordered === "boolean") orderedGiven = true;else params.ordered = true;
      if (params.maxPacketLifeTime && typeof params.maxPacketLifeTime !== "number") throw new TypeError("invalid params.maxPacketLifeTime");
      if (params.maxRetransmits && typeof params.maxRetransmits !== "number") throw new TypeError("invalid params.maxRetransmits");
      if (params.maxPacketLifeTime && params.maxRetransmits) throw new TypeError("cannot provide both maxPacketLifeTime and maxRetransmits");

      if (orderedGiven && params.ordered && (params.maxPacketLifeTime || params.maxRetransmits)) {
        throw new TypeError("cannot be ordered with maxPacketLifeTime or maxRetransmits");
      } else if (!orderedGiven && (params.maxPacketLifeTime || params.maxRetransmits)) {
        params.ordered = false;
      }

      if (params.label && typeof params.label !== "string") throw new TypeError("invalid params.label");
      if (params.protocol && typeof params.protocol !== "string") throw new TypeError("invalid params.protocol");
    }

    exports.validateSctpStreamParameters = validateSctpStreamParameters;

    function getExtendedRtpCapabilities(localCaps, remoteCaps) {
      const extendedRtpCapabilities = {
        codecs: [],
        headerExtensions: []
      };

      for (const remoteCodec of remoteCaps.codecs || []) {
        if (isRtxCodec(remoteCodec)) continue;
        const matchingLocalCodec = (localCaps.codecs || []).find(localCodec => matchCodecs(localCodec, remoteCodec, {
          strict: true,
          modify: true
        }));
        if (!matchingLocalCodec) continue;
        const extendedCodec = {
          mimeType: matchingLocalCodec.mimeType,
          kind: matchingLocalCodec.kind,
          clockRate: matchingLocalCodec.clockRate,
          channels: matchingLocalCodec.channels,
          localPayloadType: matchingLocalCodec.preferredPayloadType,
          localRtxPayloadType: void 0,
          remotePayloadType: remoteCodec.preferredPayloadType,
          remoteRtxPayloadType: void 0,
          localParameters: matchingLocalCodec.parameters,
          remoteParameters: remoteCodec.parameters,
          rtcpFeedback: reduceRtcpFeedback(matchingLocalCodec, remoteCodec)
        };
        extendedRtpCapabilities.codecs.push(extendedCodec);
      }

      for (const extendedCodec of extendedRtpCapabilities.codecs) {
        const matchingLocalRtxCodec = localCaps.codecs.find(localCodec => isRtxCodec(localCodec) && localCodec.parameters.apt === extendedCodec.localPayloadType);
        const matchingRemoteRtxCodec = remoteCaps.codecs.find(remoteCodec => isRtxCodec(remoteCodec) && remoteCodec.parameters.apt === extendedCodec.remotePayloadType);

        if (matchingLocalRtxCodec && matchingRemoteRtxCodec) {
          extendedCodec.localRtxPayloadType = matchingLocalRtxCodec.preferredPayloadType;
          extendedCodec.remoteRtxPayloadType = matchingRemoteRtxCodec.preferredPayloadType;
        }
      }

      for (const remoteExt of remoteCaps.headerExtensions) {
        const matchingLocalExt = localCaps.headerExtensions.find(localExt => matchHeaderExtensions(localExt, remoteExt));
        if (!matchingLocalExt) continue;
        const extendedExt = {
          kind: remoteExt.kind,
          uri: remoteExt.uri,
          sendId: matchingLocalExt.preferredId,
          recvId: remoteExt.preferredId,
          encrypt: matchingLocalExt.preferredEncrypt,
          direction: "sendrecv"
        };

        switch (remoteExt.direction) {
          case "sendrecv":
            extendedExt.direction = "sendrecv";
            break;

          case "recvonly":
            extendedExt.direction = "sendonly";
            break;

          case "sendonly":
            extendedExt.direction = "recvonly";
            break;

          case "inactive":
            extendedExt.direction = "inactive";
            break;
        }

        extendedRtpCapabilities.headerExtensions.push(extendedExt);
      }

      return extendedRtpCapabilities;
    }

    exports.getExtendedRtpCapabilities = getExtendedRtpCapabilities;

    function getRecvRtpCapabilities(extendedRtpCapabilities) {
      const rtpCapabilities = {
        codecs: [],
        headerExtensions: []
      };

      for (const extendedCodec of extendedRtpCapabilities.codecs) {
        const codec = {
          mimeType: extendedCodec.mimeType,
          kind: extendedCodec.kind,
          preferredPayloadType: extendedCodec.remotePayloadType,
          clockRate: extendedCodec.clockRate,
          channels: extendedCodec.channels,
          parameters: extendedCodec.localParameters,
          rtcpFeedback: extendedCodec.rtcpFeedback
        };
        rtpCapabilities.codecs.push(codec);
        if (!extendedCodec.remoteRtxPayloadType) continue;
        const rtxCodec = {
          mimeType: `${extendedCodec.kind}/rtx`,
          kind: extendedCodec.kind,
          preferredPayloadType: extendedCodec.remoteRtxPayloadType,
          clockRate: extendedCodec.clockRate,
          parameters: {
            apt: extendedCodec.remotePayloadType
          },
          rtcpFeedback: []
        };
        rtpCapabilities.codecs.push(rtxCodec);
      }

      for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
        if (extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "recvonly") {
          continue;
        }

        const ext = {
          kind: extendedExtension.kind,
          uri: extendedExtension.uri,
          preferredId: extendedExtension.recvId,
          preferredEncrypt: extendedExtension.encrypt,
          direction: extendedExtension.direction
        };
        rtpCapabilities.headerExtensions.push(ext);
      }

      return rtpCapabilities;
    }

    exports.getRecvRtpCapabilities = getRecvRtpCapabilities;

    function getSendingRtpParameters(kind, extendedRtpCapabilities) {
      const rtpParameters = {
        mid: void 0,
        codecs: [],
        headerExtensions: [],
        encodings: [],
        rtcp: {}
      };

      for (const extendedCodec of extendedRtpCapabilities.codecs) {
        if (extendedCodec.kind !== kind) continue;
        const codec = {
          mimeType: extendedCodec.mimeType,
          payloadType: extendedCodec.localPayloadType,
          clockRate: extendedCodec.clockRate,
          channels: extendedCodec.channels,
          parameters: extendedCodec.localParameters,
          rtcpFeedback: extendedCodec.rtcpFeedback
        };
        rtpParameters.codecs.push(codec);

        if (extendedCodec.localRtxPayloadType) {
          const rtxCodec = {
            mimeType: `${extendedCodec.kind}/rtx`,
            payloadType: extendedCodec.localRtxPayloadType,
            clockRate: extendedCodec.clockRate,
            parameters: {
              apt: extendedCodec.localPayloadType
            },
            rtcpFeedback: []
          };
          rtpParameters.codecs.push(rtxCodec);
        }
      }

      for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
        if (extendedExtension.kind && extendedExtension.kind !== kind || extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "sendonly") {
          continue;
        }

        const ext = {
          uri: extendedExtension.uri,
          id: extendedExtension.sendId,
          encrypt: extendedExtension.encrypt,
          parameters: {}
        };
        rtpParameters.headerExtensions.push(ext);
      }

      return rtpParameters;
    }

    exports.getSendingRtpParameters = getSendingRtpParameters;

    function getSendingRemoteRtpParameters(kind, extendedRtpCapabilities) {
      const rtpParameters = {
        mid: void 0,
        codecs: [],
        headerExtensions: [],
        encodings: [],
        rtcp: {}
      };

      for (const extendedCodec of extendedRtpCapabilities.codecs) {
        if (extendedCodec.kind !== kind) continue;
        const codec = {
          mimeType: extendedCodec.mimeType,
          payloadType: extendedCodec.localPayloadType,
          clockRate: extendedCodec.clockRate,
          channels: extendedCodec.channels,
          parameters: extendedCodec.remoteParameters,
          rtcpFeedback: extendedCodec.rtcpFeedback
        };
        rtpParameters.codecs.push(codec);

        if (extendedCodec.localRtxPayloadType) {
          const rtxCodec = {
            mimeType: `${extendedCodec.kind}/rtx`,
            payloadType: extendedCodec.localRtxPayloadType,
            clockRate: extendedCodec.clockRate,
            parameters: {
              apt: extendedCodec.localPayloadType
            },
            rtcpFeedback: []
          };
          rtpParameters.codecs.push(rtxCodec);
        }
      }

      for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
        if (extendedExtension.kind && extendedExtension.kind !== kind || extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "sendonly") {
          continue;
        }

        const ext = {
          uri: extendedExtension.uri,
          id: extendedExtension.sendId,
          encrypt: extendedExtension.encrypt,
          parameters: {}
        };
        rtpParameters.headerExtensions.push(ext);
      }

      if (rtpParameters.headerExtensions.some(ext => ext.uri === "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01")) {
        for (const codec of rtpParameters.codecs) {
          codec.rtcpFeedback = (codec.rtcpFeedback || []).filter(fb => fb.type !== "goog-remb");
        }
      } else if (rtpParameters.headerExtensions.some(ext => ext.uri === "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time")) {
        for (const codec of rtpParameters.codecs) {
          codec.rtcpFeedback = (codec.rtcpFeedback || []).filter(fb => fb.type !== "transport-cc");
        }
      } else {
        for (const codec of rtpParameters.codecs) {
          codec.rtcpFeedback = (codec.rtcpFeedback || []).filter(fb => fb.type !== "transport-cc" && fb.type !== "goog-remb");
        }
      }

      return rtpParameters;
    }

    exports.getSendingRemoteRtpParameters = getSendingRemoteRtpParameters;

    function reduceCodecs(codecs, capCodec) {
      const filteredCodecs = [];

      if (!capCodec) {
        filteredCodecs.push(codecs[0]);
        if (isRtxCodec(codecs[1])) filteredCodecs.push(codecs[1]);
      } else {
        for (let idx = 0; idx < codecs.length; ++idx) {
          if (matchCodecs(codecs[idx], capCodec)) {
            filteredCodecs.push(codecs[idx]);
            if (isRtxCodec(codecs[idx + 1])) filteredCodecs.push(codecs[idx + 1]);
            break;
          }
        }

        if (filteredCodecs.length === 0) throw new TypeError("no matching codec found");
      }

      return filteredCodecs;
    }

    exports.reduceCodecs = reduceCodecs;

    function generateProbatorRtpParameters(videoRtpParameters) {
      videoRtpParameters = utils.clone(videoRtpParameters, {});
      validateRtpParameters(videoRtpParameters);
      const rtpParameters = {
        mid: RTP_PROBATOR_MID,
        codecs: [],
        headerExtensions: [],
        encodings: [{
          ssrc: RTP_PROBATOR_SSRC
        }],
        rtcp: {
          cname: "probator"
        }
      };
      rtpParameters.codecs.push(videoRtpParameters.codecs[0]);
      rtpParameters.codecs[0].payloadType = RTP_PROBATOR_CODEC_PAYLOAD_TYPE;
      rtpParameters.headerExtensions = videoRtpParameters.headerExtensions;
      return rtpParameters;
    }

    exports.generateProbatorRtpParameters = generateProbatorRtpParameters;

    function canSend(kind, extendedRtpCapabilities) {
      return extendedRtpCapabilities.codecs.some(codec => codec.kind === kind);
    }

    exports.canSend = canSend;

    function canReceive(rtpParameters, extendedRtpCapabilities) {
      validateRtpParameters(rtpParameters);
      if (rtpParameters.codecs.length === 0) return false;
      const firstMediaCodec = rtpParameters.codecs[0];
      return extendedRtpCapabilities.codecs.some(codec => codec.remotePayloadType === firstMediaCodec.payloadType);
    }

    exports.canReceive = canReceive;

    function isRtxCodec(codec) {
      if (!codec) return false;
      return /.+\/rtx$/i.test(codec.mimeType);
    }

    function matchCodecs(aCodec, bCodec, {
      strict = false,
      modify = false
    } = {}) {
      const aMimeType = aCodec.mimeType.toLowerCase();
      const bMimeType = bCodec.mimeType.toLowerCase();
      if (aMimeType !== bMimeType) return false;
      if (aCodec.clockRate !== bCodec.clockRate) return false;
      if (aCodec.channels !== bCodec.channels) return false;

      switch (aMimeType) {
        case "video/h264":
          {
            if (strict) {
              const aPacketizationMode = aCodec.parameters["packetization-mode"] || 0;
              const bPacketizationMode = bCodec.parameters["packetization-mode"] || 0;
              if (aPacketizationMode !== bPacketizationMode) return false;
              if (!h264.isSameProfile(aCodec.parameters, bCodec.parameters)) return false;
              let selectedProfileLevelId;

              try {
                selectedProfileLevelId = h264.generateProfileLevelIdForAnswer(aCodec.parameters, bCodec.parameters);
              } catch (error) {
                return false;
              }

              if (modify) {
                if (selectedProfileLevelId) {
                  aCodec.parameters["profile-level-id"] = selectedProfileLevelId;
                  bCodec.parameters["profile-level-id"] = selectedProfileLevelId;
                } else {
                  delete aCodec.parameters["profile-level-id"];
                  delete bCodec.parameters["profile-level-id"];
                }
              }
            }

            break;
          }

        case "video/vp9":
          {
            if (strict) {
              const aProfileId = aCodec.parameters["profile-id"] || 0;
              const bProfileId = bCodec.parameters["profile-id"] || 0;
              if (aProfileId !== bProfileId) return false;
            }

            break;
          }
      }

      return true;
    }

    function matchHeaderExtensions(aExt, bExt) {
      if (aExt.kind && bExt.kind && aExt.kind !== bExt.kind) return false;
      if (aExt.uri !== bExt.uri) return false;
      return true;
    }

    function reduceRtcpFeedback(codecA, codecB) {
      const reducedRtcpFeedback = [];

      for (const aFb of codecA.rtcpFeedback || []) {
        const matchingBFb = (codecB.rtcpFeedback || []).find(bFb => bFb.type === aFb.type && (bFb.parameter === aFb.parameter || !bFb.parameter && !aFb.parameter));
        if (matchingBFb) reducedRtcpFeedback.push(matchingBFb);
      }

      return reducedRtcpFeedback;
    }
  }

}); // ../../node_modules/awaitqueue/lib/index.js


var require_lib2 = __commonJS({
  "../../node_modules/awaitqueue/lib/index.js"(exports) {
    "use strict";

    init_process();

    var __awaiter = exports && exports.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AwaitQueue = class {
      constructor({
        ClosedErrorClass = Error,
        StoppedErrorClass = Error
      } = {
        ClosedErrorClass: Error,
        StoppedErrorClass: Error
      }) {
        this.closed = false;
        this.pendingTasks = [];
        this.ClosedErrorClass = Error;
        this.StoppedErrorClass = Error;
        this.ClosedErrorClass = ClosedErrorClass;
        this.StoppedErrorClass = StoppedErrorClass;
      }

      get size() {
        return this.pendingTasks.length;
      }

      close() {
        if (this.closed) return;
        this.closed = true;

        for (const pendingTask of this.pendingTasks) {
          pendingTask.stopped = true;
          pendingTask.reject(new this.ClosedErrorClass("AwaitQueue closed"));
        }

        this.pendingTasks.length = 0;
      }

      push(task, name) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this.closed) throw new this.ClosedErrorClass("AwaitQueue closed");
          if (typeof task !== "function") throw new TypeError("given task is not a function");

          if (!task.name && name) {
            try {
              Object.defineProperty(task, "name", {
                value: name
              });
            } catch (error) {}
          }

          return new Promise((resolve, reject) => {
            const pendingTask = {
              task,
              name,
              resolve,
              reject,
              stopped: false,
              enqueuedAt: new Date(),
              executedAt: void 0
            };
            this.pendingTasks.push(pendingTask);
            if (this.pendingTasks.length === 1) this.next();
          });
        });
      }

      stop() {
        if (this.closed) return;

        for (const pendingTask of this.pendingTasks) {
          pendingTask.stopped = true;
          pendingTask.reject(new this.StoppedErrorClass("AwaitQueue stopped"));
        }

        this.pendingTasks.length = 0;
      }

      dump() {
        const now = new Date();
        return this.pendingTasks.map(pendingTask => {
          return {
            task: pendingTask.task,
            name: pendingTask.name,
            enqueuedTime: pendingTask.executedAt ? pendingTask.executedAt.getTime() - pendingTask.enqueuedAt.getTime() : now.getTime() - pendingTask.enqueuedAt.getTime(),
            executingTime: pendingTask.executedAt ? now.getTime() - pendingTask.executedAt.getTime() : 0
          };
        });
      }

      next() {
        return __awaiter(this, void 0, void 0, function* () {
          const pendingTask = this.pendingTasks[0];
          if (!pendingTask) return;
          yield this.executeTask(pendingTask);
          this.pendingTasks.shift();
          this.next();
        });
      }

      executeTask(pendingTask) {
        return __awaiter(this, void 0, void 0, function* () {
          if (pendingTask.stopped) return;
          pendingTask.executedAt = new Date();

          try {
            const result = yield pendingTask.task();
            if (pendingTask.stopped) return;
            pendingTask.resolve(result);
          } catch (error) {
            if (pendingTask.stopped) return;
            pendingTask.reject(error);
          }
        });
      }

    };
    exports.AwaitQueue = AwaitQueue;
  }

}); // ../../node_modules/mediasoup-client/lib/Producer.js


var require_Producer = __commonJS({
  "../../node_modules/mediasoup-client/lib/Producer.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Producer = void 0;
    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var errors_1 = require_errors();
    var logger = new Logger_1.Logger("Producer");
    var Producer = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor({
        id,
        localId,
        rtpSender,
        track,
        rtpParameters,
        stopTracks,
        disableTrackOnPause,
        zeroRtpOnPause,
        appData
      }) {
        super();
        this._closed = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor()");
        this._id = id;
        this._localId = localId;
        this._rtpSender = rtpSender;
        this._track = track;
        this._kind = track.kind;
        this._rtpParameters = rtpParameters;
        this._paused = disableTrackOnPause ? !track.enabled : false;
        this._maxSpatialLayer = void 0;
        this._stopTracks = stopTracks;
        this._disableTrackOnPause = disableTrackOnPause;
        this._zeroRtpOnPause = zeroRtpOnPause;
        this._appData = appData;
        this._onTrackEnded = this._onTrackEnded.bind(this);

        this._handleTrack();
      }

      get id() {
        return this._id;
      }

      get localId() {
        return this._localId;
      }

      get closed() {
        return this._closed;
      }

      get kind() {
        return this._kind;
      }

      get rtpSender() {
        return this._rtpSender;
      }

      get track() {
        return this._track;
      }

      get rtpParameters() {
        return this._rtpParameters;
      }

      get paused() {
        return this._paused;
      }

      get maxSpatialLayer() {
        return this._maxSpatialLayer;
      }

      get appData() {
        return this._appData;
      }

      set appData(appData) {
        throw new Error("cannot override appData object");
      }

      get observer() {
        return this._observer;
      }

      close() {
        if (this._closed) return;
        logger.debug("close()");
        this._closed = true;

        this._destroyTrack();

        this.emit("@close");

        this._observer.safeEmit("close");
      }

      transportClosed() {
        if (this._closed) return;
        logger.debug("transportClosed()");
        this._closed = true;

        this._destroyTrack();

        this.safeEmit("transportclose");

        this._observer.safeEmit("close");
      }

      getStats() {
        return __async(this, null, function* () {
          if (this._closed) throw new errors_1.InvalidStateError("closed");
          return this.safeEmitAsPromise("@getstats");
        });
      }

      pause() {
        logger.debug("pause()");

        if (this._closed) {
          logger.error("pause() | Producer closed");
          return;
        }

        this._paused = true;

        if (this._track && this._disableTrackOnPause) {
          this._track.enabled = false;
        }

        if (this._zeroRtpOnPause) {
          this.safeEmitAsPromise("@replacetrack", null).catch(() => {});
        }

        this._observer.safeEmit("pause");
      }

      resume() {
        logger.debug("resume()");

        if (this._closed) {
          logger.error("resume() | Producer closed");
          return;
        }

        this._paused = false;

        if (this._track && this._disableTrackOnPause) {
          this._track.enabled = true;
        }

        if (this._zeroRtpOnPause) {
          this.safeEmitAsPromise("@replacetrack", this._track).catch(() => {});
        }

        this._observer.safeEmit("resume");
      }

      replaceTrack(_0) {
        return __async(this, arguments, function* ({
          track
        }) {
          logger.debug("replaceTrack() [track:%o]", track);

          if (this._closed) {
            if (track && this._stopTracks) {
              try {
                track.stop();
              } catch (error) {}
            }

            throw new errors_1.InvalidStateError("closed");
          } else if (track && track.readyState === "ended") {
            throw new errors_1.InvalidStateError("track ended");
          }

          if (track === this._track) {
            logger.debug("replaceTrack() | same track, ignored");
            return;
          }

          if (!this._zeroRtpOnPause || !this._paused) {
            yield this.safeEmitAsPromise("@replacetrack", track);
          }

          this._destroyTrack();

          this._track = track;

          if (this._track && this._disableTrackOnPause) {
            if (!this._paused) this._track.enabled = true;else if (this._paused) this._track.enabled = false;
          }

          this._handleTrack();
        });
      }

      setMaxSpatialLayer(spatialLayer) {
        return __async(this, null, function* () {
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (this._kind !== "video") throw new errors_1.UnsupportedError("not a video Producer");else if (typeof spatialLayer !== "number") throw new TypeError("invalid spatialLayer");
          if (spatialLayer === this._maxSpatialLayer) return;
          yield this.safeEmitAsPromise("@setmaxspatiallayer", spatialLayer);
          this._maxSpatialLayer = spatialLayer;
        });
      }

      setRtpEncodingParameters(params) {
        return __async(this, null, function* () {
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (typeof params !== "object") throw new TypeError("invalid params");
          yield this.safeEmitAsPromise("@setrtpencodingparameters", params);
        });
      }

      _onTrackEnded() {
        logger.debug('track "ended" event');
        this.safeEmit("trackended");

        this._observer.safeEmit("trackended");
      }

      _handleTrack() {
        if (!this._track) return;

        this._track.addEventListener("ended", this._onTrackEnded);
      }

      _destroyTrack() {
        if (!this._track) return;

        try {
          this._track.removeEventListener("ended", this._onTrackEnded);

          if (this._stopTracks) this._track.stop();
        } catch (error) {}
      }

    };
    exports.Producer = Producer;
  }

}); // ../../node_modules/mediasoup-client/lib/Consumer.js


var require_Consumer = __commonJS({
  "../../node_modules/mediasoup-client/lib/Consumer.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Consumer = void 0;
    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var errors_1 = require_errors();
    var logger = new Logger_1.Logger("Consumer");
    var Consumer = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor({
        id,
        localId,
        producerId,
        rtpReceiver,
        track,
        rtpParameters,
        appData
      }) {
        super();
        this._closed = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor()");
        this._id = id;
        this._localId = localId;
        this._producerId = producerId;
        this._rtpReceiver = rtpReceiver;
        this._track = track;
        this._rtpParameters = rtpParameters;
        this._paused = !track.enabled;
        this._appData = appData;
        this._onTrackEnded = this._onTrackEnded.bind(this);

        this._handleTrack();
      }

      get id() {
        return this._id;
      }

      get localId() {
        return this._localId;
      }

      get producerId() {
        return this._producerId;
      }

      get closed() {
        return this._closed;
      }

      get kind() {
        return this._track.kind;
      }

      get rtpReceiver() {
        return this._rtpReceiver;
      }

      get track() {
        return this._track;
      }

      get rtpParameters() {
        return this._rtpParameters;
      }

      get paused() {
        return this._paused;
      }

      get appData() {
        return this._appData;
      }

      set appData(appData) {
        throw new Error("cannot override appData object");
      }

      get observer() {
        return this._observer;
      }

      close() {
        if (this._closed) return;
        logger.debug("close()");
        this._closed = true;

        this._destroyTrack();

        this.emit("@close");

        this._observer.safeEmit("close");
      }

      transportClosed() {
        if (this._closed) return;
        logger.debug("transportClosed()");
        this._closed = true;

        this._destroyTrack();

        this.safeEmit("transportclose");

        this._observer.safeEmit("close");
      }

      getStats() {
        return __async(this, null, function* () {
          if (this._closed) throw new errors_1.InvalidStateError("closed");
          return this.safeEmitAsPromise("@getstats");
        });
      }

      pause() {
        logger.debug("pause()");

        if (this._closed) {
          logger.error("pause() | Consumer closed");
          return;
        }

        this._paused = true;
        this._track.enabled = false;
        this.emit("@pause");

        this._observer.safeEmit("pause");
      }

      resume() {
        logger.debug("resume()");

        if (this._closed) {
          logger.error("resume() | Consumer closed");
          return;
        }

        this._paused = false;
        this._track.enabled = true;
        this.emit("@resume");

        this._observer.safeEmit("resume");
      }

      _onTrackEnded() {
        logger.debug('track "ended" event');
        this.safeEmit("trackended");

        this._observer.safeEmit("trackended");
      }

      _handleTrack() {
        this._track.addEventListener("ended", this._onTrackEnded);
      }

      _destroyTrack() {
        try {
          this._track.removeEventListener("ended", this._onTrackEnded);

          this._track.stop();
        } catch (error) {}
      }

    };
    exports.Consumer = Consumer;
  }

}); // ../../node_modules/mediasoup-client/lib/DataProducer.js


var require_DataProducer = __commonJS({
  "../../node_modules/mediasoup-client/lib/DataProducer.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DataProducer = void 0;
    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var errors_1 = require_errors();
    var logger = new Logger_1.Logger("DataProducer");
    var DataProducer = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor({
        id,
        dataChannel,
        sctpStreamParameters,
        appData
      }) {
        super();
        this._closed = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor()");
        this._id = id;
        this._dataChannel = dataChannel;
        this._sctpStreamParameters = sctpStreamParameters;
        this._appData = appData;

        this._handleDataChannel();
      }

      get id() {
        return this._id;
      }

      get closed() {
        return this._closed;
      }

      get sctpStreamParameters() {
        return this._sctpStreamParameters;
      }

      get readyState() {
        return this._dataChannel.readyState;
      }

      get label() {
        return this._dataChannel.label;
      }

      get protocol() {
        return this._dataChannel.protocol;
      }

      get bufferedAmount() {
        return this._dataChannel.bufferedAmount;
      }

      get bufferedAmountLowThreshold() {
        return this._dataChannel.bufferedAmountLowThreshold;
      }

      set bufferedAmountLowThreshold(bufferedAmountLowThreshold) {
        this._dataChannel.bufferedAmountLowThreshold = bufferedAmountLowThreshold;
      }

      get appData() {
        return this._appData;
      }

      set appData(appData) {
        throw new Error("cannot override appData object");
      }

      get observer() {
        return this._observer;
      }

      close() {
        if (this._closed) return;
        logger.debug("close()");
        this._closed = true;

        this._dataChannel.close();

        this.emit("@close");

        this._observer.safeEmit("close");
      }

      transportClosed() {
        if (this._closed) return;
        logger.debug("transportClosed()");
        this._closed = true;

        this._dataChannel.close();

        this.safeEmit("transportclose");

        this._observer.safeEmit("close");
      }

      send(data) {
        logger.debug("send()");
        if (this._closed) throw new errors_1.InvalidStateError("closed");

        this._dataChannel.send(data);
      }

      _handleDataChannel() {
        this._dataChannel.addEventListener("open", () => {
          if (this._closed) return;
          logger.debug('DataChannel "open" event');
          this.safeEmit("open");
        });

        this._dataChannel.addEventListener("error", event => {
          if (this._closed) return;
          let {
            error
          } = event;
          if (!error) error = new Error("unknown DataChannel error");

          if (error.errorDetail === "sctp-failure") {
            logger.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", error.sctpCauseCode, error.message);
          } else {
            logger.error('DataChannel "error" event: %o', error);
          }

          this.safeEmit("error", error);
        });

        this._dataChannel.addEventListener("close", () => {
          if (this._closed) return;
          logger.warn('DataChannel "close" event');
          this._closed = true;
          this.emit("@close");
          this.safeEmit("close");
        });

        this._dataChannel.addEventListener("message", () => {
          if (this._closed) return;
          logger.warn('DataChannel "message" event in a DataProducer, message discarded');
        });

        this._dataChannel.addEventListener("bufferedamountlow", () => {
          if (this._closed) return;
          this.safeEmit("bufferedamountlow");
        });
      }

    };
    exports.DataProducer = DataProducer;
  }

}); // ../../node_modules/mediasoup-client/lib/DataConsumer.js


var require_DataConsumer = __commonJS({
  "../../node_modules/mediasoup-client/lib/DataConsumer.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DataConsumer = void 0;
    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var logger = new Logger_1.Logger("DataConsumer");
    var DataConsumer = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor({
        id,
        dataProducerId,
        dataChannel,
        sctpStreamParameters,
        appData
      }) {
        super();
        this._closed = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor()");
        this._id = id;
        this._dataProducerId = dataProducerId;
        this._dataChannel = dataChannel;
        this._sctpStreamParameters = sctpStreamParameters;
        this._appData = appData;

        this._handleDataChannel();
      }

      get id() {
        return this._id;
      }

      get dataProducerId() {
        return this._dataProducerId;
      }

      get closed() {
        return this._closed;
      }

      get sctpStreamParameters() {
        return this._sctpStreamParameters;
      }

      get readyState() {
        return this._dataChannel.readyState;
      }

      get label() {
        return this._dataChannel.label;
      }

      get protocol() {
        return this._dataChannel.protocol;
      }

      get binaryType() {
        return this._dataChannel.binaryType;
      }

      set binaryType(binaryType) {
        this._dataChannel.binaryType = binaryType;
      }

      get appData() {
        return this._appData;
      }

      set appData(appData) {
        throw new Error("cannot override appData object");
      }

      get observer() {
        return this._observer;
      }

      close() {
        if (this._closed) return;
        logger.debug("close()");
        this._closed = true;

        this._dataChannel.close();

        this.emit("@close");

        this._observer.safeEmit("close");
      }

      transportClosed() {
        if (this._closed) return;
        logger.debug("transportClosed()");
        this._closed = true;

        this._dataChannel.close();

        this.safeEmit("transportclose");

        this._observer.safeEmit("close");
      }

      _handleDataChannel() {
        this._dataChannel.addEventListener("open", () => {
          if (this._closed) return;
          logger.debug('DataChannel "open" event');
          this.safeEmit("open");
        });

        this._dataChannel.addEventListener("error", event => {
          if (this._closed) return;
          let {
            error
          } = event;
          if (!error) error = new Error("unknown DataChannel error");

          if (error.errorDetail === "sctp-failure") {
            logger.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", error.sctpCauseCode, error.message);
          } else {
            logger.error('DataChannel "error" event: %o', error);
          }

          this.safeEmit("error", error);
        });

        this._dataChannel.addEventListener("close", () => {
          if (this._closed) return;
          logger.warn('DataChannel "close" event');
          this._closed = true;
          this.emit("@close");
          this.safeEmit("close");
        });

        this._dataChannel.addEventListener("message", event => {
          if (this._closed) return;
          this.safeEmit("message", event.data);
        });
      }

    };
    exports.DataConsumer = DataConsumer;
  }

}); // ../../node_modules/mediasoup-client/lib/Transport.js


var require_Transport = __commonJS({
  "../../node_modules/mediasoup-client/lib/Transport.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transport = void 0;
    var awaitqueue_1 = require_lib2();
    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var Producer_1 = require_Producer();
    var Consumer_1 = require_Consumer();
    var DataProducer_1 = require_DataProducer();
    var DataConsumer_1 = require_DataConsumer();
    var ConsumerCreationTask = class {
      constructor(consumerOptions) {
        this.consumerOptions = consumerOptions;
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
      }

    };
    var logger = new Logger_1.Logger("Transport");
    var Transport = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor({
        direction,
        id,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        appData,
        handlerFactory,
        extendedRtpCapabilities,
        canProduceByKind
      }) {
        super();
        this._closed = false;
        this._connectionState = "new";
        this._producers = /* @__PURE__ */new Map();
        this._consumers = /* @__PURE__ */new Map();
        this._dataProducers = /* @__PURE__ */new Map();
        this._dataConsumers = /* @__PURE__ */new Map();
        this._probatorConsumerCreated = false;
        this._awaitQueue = new awaitqueue_1.AwaitQueue({
          ClosedErrorClass: errors_1.InvalidStateError
        });
        this._pendingConsumerTasks = [];
        this._consumerCreationInProgress = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor() [id:%s, direction:%s]", id, direction);
        this._id = id;
        this._direction = direction;
        this._extendedRtpCapabilities = extendedRtpCapabilities;
        this._canProduceByKind = canProduceByKind;
        this._maxSctpMessageSize = sctpParameters ? sctpParameters.maxMessageSize : null;
        additionalSettings = utils.clone(additionalSettings, {});
        delete additionalSettings.iceServers;
        delete additionalSettings.iceTransportPolicy;
        delete additionalSettings.bundlePolicy;
        delete additionalSettings.rtcpMuxPolicy;
        delete additionalSettings.sdpSemantics;
        this._handler = handlerFactory();

        this._handler.run({
          direction,
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          iceServers,
          iceTransportPolicy,
          additionalSettings,
          proprietaryConstraints,
          extendedRtpCapabilities
        });

        this._appData = appData;

        this._handleHandler();
      }

      get id() {
        return this._id;
      }

      get closed() {
        return this._closed;
      }

      get direction() {
        return this._direction;
      }

      get handler() {
        return this._handler;
      }

      get connectionState() {
        return this._connectionState;
      }

      get appData() {
        return this._appData;
      }

      set appData(appData) {
        throw new Error("cannot override appData object");
      }

      get observer() {
        return this._observer;
      }

      close() {
        if (this._closed) return;
        logger.debug("close()");
        this._closed = true;

        this._awaitQueue.close();

        this._handler.close();

        for (const producer of this._producers.values()) {
          producer.transportClosed();
        }

        this._producers.clear();

        for (const consumer of this._consumers.values()) {
          consumer.transportClosed();
        }

        this._consumers.clear();

        for (const dataProducer of this._dataProducers.values()) {
          dataProducer.transportClosed();
        }

        this._dataProducers.clear();

        for (const dataConsumer of this._dataConsumers.values()) {
          dataConsumer.transportClosed();
        }

        this._dataConsumers.clear();

        this._observer.safeEmit("close");
      }

      getStats() {
        return __async(this, null, function* () {
          if (this._closed) throw new errors_1.InvalidStateError("closed");
          return this._handler.getTransportStats();
        });
      }

      restartIce(_0) {
        return __async(this, arguments, function* ({
          iceParameters
        }) {
          logger.debug("restartIce()");
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (!iceParameters) throw new TypeError("missing iceParameters");
          return this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.restartIce(iceParameters);
          }), "transport.restartIce()");
        });
      }

      updateIceServers() {
        return __async(this, arguments, function* ({
          iceServers
        } = {}) {
          logger.debug("updateIceServers()");
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (!Array.isArray(iceServers)) throw new TypeError("missing iceServers");
          return this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.updateIceServers(iceServers);
          }), "transport.updateIceServers()");
        });
      }

      produce() {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec,
          stopTracks = true,
          disableTrackOnPause = true,
          zeroRtpOnPause = false,
          appData = {}
        } = {}) {
          logger.debug("produce() [track:%o]", track);
          if (!track) throw new TypeError("missing track");else if (this._direction !== "send") throw new errors_1.UnsupportedError("not a sending Transport");else if (!this._canProduceByKind[track.kind]) throw new errors_1.UnsupportedError(`cannot produce ${track.kind}`);else if (track.readyState === "ended") throw new errors_1.InvalidStateError("track ended");else if (this.listenerCount("connect") === 0 && this._connectionState === "new") throw new TypeError('no "connect" listener set into this transport');else if (this.listenerCount("produce") === 0) throw new TypeError('no "produce" listener set into this transport');else if (appData && typeof appData !== "object") throw new TypeError("if given, appData must be an object");
          return this._awaitQueue.push(() => __async(this, null, function* () {
            let normalizedEncodings;

            if (encodings && !Array.isArray(encodings)) {
              throw TypeError("encodings must be an array");
            } else if (encodings && encodings.length === 0) {
              normalizedEncodings = void 0;
            } else if (encodings) {
              normalizedEncodings = encodings.map(encoding => {
                const normalizedEncoding = {
                  active: true
                };
                if (encoding.active === false) normalizedEncoding.active = false;
                if (typeof encoding.dtx === "boolean") normalizedEncoding.dtx = encoding.dtx;
                if (typeof encoding.scalabilityMode === "string") normalizedEncoding.scalabilityMode = encoding.scalabilityMode;
                if (typeof encoding.scaleResolutionDownBy === "number") normalizedEncoding.scaleResolutionDownBy = encoding.scaleResolutionDownBy;
                if (typeof encoding.maxBitrate === "number") normalizedEncoding.maxBitrate = encoding.maxBitrate;
                if (typeof encoding.maxFramerate === "number") normalizedEncoding.maxFramerate = encoding.maxFramerate;
                if (typeof encoding.adaptivePtime === "boolean") normalizedEncoding.adaptivePtime = encoding.adaptivePtime;
                if (typeof encoding.priority === "string") normalizedEncoding.priority = encoding.priority;
                if (typeof encoding.networkPriority === "string") normalizedEncoding.networkPriority = encoding.networkPriority;
                return normalizedEncoding;
              });
            }

            const {
              localId,
              rtpParameters,
              rtpSender
            } = yield this._handler.send({
              track,
              encodings: normalizedEncodings,
              codecOptions,
              codec
            });

            try {
              ortc.validateRtpParameters(rtpParameters);
              const {
                id
              } = yield this.safeEmitAsPromise("produce", {
                kind: track.kind,
                rtpParameters,
                appData
              });
              const producer = new Producer_1.Producer({
                id,
                localId,
                rtpSender,
                track,
                rtpParameters,
                stopTracks,
                disableTrackOnPause,
                zeroRtpOnPause,
                appData
              });

              this._producers.set(producer.id, producer);

              this._handleProducer(producer);

              this._observer.safeEmit("newproducer", producer);

              return producer;
            } catch (error) {
              this._handler.stopSending(localId).catch(() => {});

              throw error;
            }
          }), "transport.produce()").catch(error => {
            if (stopTracks) {
              try {
                track.stop();
              } catch (error2) {}
            }

            throw error;
          });
        });
      }

      consume(_0) {
        return __async(this, arguments, function* ({
          id,
          producerId,
          kind,
          rtpParameters,
          appData = {}
        }) {
          logger.debug("consume()");
          rtpParameters = utils.clone(rtpParameters, void 0);
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (this._direction !== "recv") throw new errors_1.UnsupportedError("not a receiving Transport");else if (typeof id !== "string") throw new TypeError("missing id");else if (typeof producerId !== "string") throw new TypeError("missing producerId");else if (kind !== "audio" && kind !== "video") throw new TypeError(`invalid kind '${kind}'`);else if (this.listenerCount("connect") === 0 && this._connectionState === "new") throw new TypeError('no "connect" listener set into this transport');else if (appData && typeof appData !== "object") throw new TypeError("if given, appData must be an object");
          const canConsume = ortc.canReceive(rtpParameters, this._extendedRtpCapabilities);
          if (!canConsume) throw new errors_1.UnsupportedError("cannot consume this Producer");
          const consumerCreationTask = new ConsumerCreationTask({
            id,
            producerId,
            kind,
            rtpParameters,
            appData
          });

          this._pendingConsumerTasks.push(consumerCreationTask);

          if (this._consumerCreationInProgress === false) {
            this._createPendingConsumers();
          }

          return consumerCreationTask.promise;
        });
      }

      produceData() {
        return __async(this, arguments, function* ({
          ordered = true,
          maxPacketLifeTime,
          maxRetransmits,
          label = "",
          protocol = "",
          appData = {}
        } = {}) {
          logger.debug("produceData()");
          if (this._direction !== "send") throw new errors_1.UnsupportedError("not a sending Transport");else if (!this._maxSctpMessageSize) throw new errors_1.UnsupportedError("SCTP not enabled by remote Transport");else if (this.listenerCount("connect") === 0 && this._connectionState === "new") throw new TypeError('no "connect" listener set into this transport');else if (this.listenerCount("producedata") === 0) throw new TypeError('no "producedata" listener set into this transport');else if (appData && typeof appData !== "object") throw new TypeError("if given, appData must be an object");
          if (maxPacketLifeTime || maxRetransmits) ordered = false;
          return this._awaitQueue.push(() => __async(this, null, function* () {
            const {
              dataChannel,
              sctpStreamParameters
            } = yield this._handler.sendDataChannel({
              ordered,
              maxPacketLifeTime,
              maxRetransmits,
              label,
              protocol
            });
            ortc.validateSctpStreamParameters(sctpStreamParameters);
            const {
              id
            } = yield this.safeEmitAsPromise("producedata", {
              sctpStreamParameters,
              label,
              protocol,
              appData
            });
            const dataProducer = new DataProducer_1.DataProducer({
              id,
              dataChannel,
              sctpStreamParameters,
              appData
            });

            this._dataProducers.set(dataProducer.id, dataProducer);

            this._handleDataProducer(dataProducer);

            this._observer.safeEmit("newdataproducer", dataProducer);

            return dataProducer;
          }), "transport.produceData()");
        });
      }

      consumeData(_0) {
        return __async(this, arguments, function* ({
          id,
          dataProducerId,
          sctpStreamParameters,
          label = "",
          protocol = "",
          appData = {}
        }) {
          logger.debug("consumeData()");
          sctpStreamParameters = utils.clone(sctpStreamParameters, void 0);
          if (this._closed) throw new errors_1.InvalidStateError("closed");else if (this._direction !== "recv") throw new errors_1.UnsupportedError("not a receiving Transport");else if (!this._maxSctpMessageSize) throw new errors_1.UnsupportedError("SCTP not enabled by remote Transport");else if (typeof id !== "string") throw new TypeError("missing id");else if (typeof dataProducerId !== "string") throw new TypeError("missing dataProducerId");else if (this.listenerCount("connect") === 0 && this._connectionState === "new") throw new TypeError('no "connect" listener set into this transport');else if (appData && typeof appData !== "object") throw new TypeError("if given, appData must be an object");
          ortc.validateSctpStreamParameters(sctpStreamParameters);
          return this._awaitQueue.push(() => __async(this, null, function* () {
            const {
              dataChannel
            } = yield this._handler.receiveDataChannel({
              sctpStreamParameters,
              label,
              protocol
            });
            const dataConsumer = new DataConsumer_1.DataConsumer({
              id,
              dataProducerId,
              dataChannel,
              sctpStreamParameters,
              appData
            });

            this._dataConsumers.set(dataConsumer.id, dataConsumer);

            this._handleDataConsumer(dataConsumer);

            this._observer.safeEmit("newdataconsumer", dataConsumer);

            return dataConsumer;
          }), "transport.consumeData()");
        });
      }

      _createPendingConsumers() {
        return __async(this, null, function* () {
          this._awaitQueue.push(() => __async(this, null, function* () {
            this._consumerCreationInProgress = true;
            const pendingConsumerTasks = [...this._pendingConsumerTasks];
            this._pendingConsumerTasks = [];
            let videoConsumerForProbator = void 0;
            const optionsList = [];

            for (const task of pendingConsumerTasks) {
              const {
                id,
                kind,
                rtpParameters
              } = task.consumerOptions;
              optionsList.push({
                trackId: id,
                kind,
                rtpParameters
              });
            }

            try {
              const results = yield this._handler.receive(optionsList);

              for (let idx = 0; idx < results.length; idx++) {
                const task = pendingConsumerTasks[idx];
                const result = results[idx];
                const {
                  id,
                  producerId,
                  kind,
                  rtpParameters,
                  appData
                } = task.consumerOptions;
                const {
                  localId,
                  rtpReceiver,
                  track
                } = result;
                const consumer = new Consumer_1.Consumer({
                  id,
                  localId,
                  producerId,
                  rtpReceiver,
                  track,
                  rtpParameters,
                  appData
                });

                this._consumers.set(consumer.id, consumer);

                this._handleConsumer(consumer);

                if (!this._probatorConsumerCreated && !videoConsumerForProbator && kind === "video") {
                  videoConsumerForProbator = consumer;
                }

                this._observer.safeEmit("newconsumer", consumer);

                task.resolve(consumer);
              }
            } catch (error) {
              for (const task of pendingConsumerTasks) {
                task.reject(error);
              }
            }

            if (videoConsumerForProbator) {
              try {
                const probatorRtpParameters = ortc.generateProbatorRtpParameters(videoConsumerForProbator.rtpParameters);
                yield this._handler.receive([{
                  trackId: "probator",
                  kind: "video",
                  rtpParameters: probatorRtpParameters
                }]);
                logger.debug("_createPendingConsumers() | Consumer for RTP probation created");
                this._probatorConsumerCreated = true;
              } catch (error) {
                logger.error("_createPendingConsumers() | failed to create Consumer for RTP probation:%o", error);
              }
            }

            this._consumerCreationInProgress = false;
          }), "transport._createPendingConsumers()").then(() => {
            if (this._pendingConsumerTasks.length > 0) {
              this._createPendingConsumers();
            }
          }).catch(() => {});
        });
      }

      _handleHandler() {
        const handler = this._handler;
        handler.on("@connect", ({
          dtlsParameters
        }, callback, errback) => {
          if (this._closed) {
            errback(new errors_1.InvalidStateError("closed"));
            return;
          }

          this.safeEmit("connect", {
            dtlsParameters
          }, callback, errback);
        });
        handler.on("@connectionstatechange", connectionState => {
          if (connectionState === this._connectionState) return;
          logger.debug("connection state changed to %s", connectionState);
          this._connectionState = connectionState;
          if (!this._closed) this.safeEmit("connectionstatechange", connectionState);
        });
      }

      _handleProducer(producer) {
        producer.on("@close", () => {
          this._producers.delete(producer.id);

          if (this._closed) return;

          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.stopSending(producer.localId);
          }), "producer @close event").catch(error => logger.warn("producer.close() failed:%o", error));
        });
        producer.on("@replacetrack", (track, callback, errback) => {
          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.replaceTrack(producer.localId, track);
          }), "producer @replacetrack event").then(callback).catch(errback);
        });
        producer.on("@setmaxspatiallayer", (spatialLayer, callback, errback) => {
          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.setMaxSpatialLayer(producer.localId, spatialLayer);
          }), "producer @setmaxspatiallayer event").then(callback).catch(errback);
        });
        producer.on("@setrtpencodingparameters", (params, callback, errback) => {
          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.setRtpEncodingParameters(producer.localId, params);
          }), "producer @setrtpencodingparameters event").then(callback).catch(errback);
        });
        producer.on("@getstats", (callback, errback) => {
          if (this._closed) return errback(new errors_1.InvalidStateError("closed"));

          this._handler.getSenderStats(producer.localId).then(callback).catch(errback);
        });
      }

      _handleConsumer(consumer) {
        consumer.on("@close", () => {
          this._consumers.delete(consumer.id);

          if (this._closed) return;

          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.stopReceiving(consumer.localId);
          }), "consumer @close event").catch(() => {});
        });
        consumer.on("@pause", () => {
          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.pauseReceiving(consumer.localId);
          }), "consumer @pause event").catch(() => {});
        });
        consumer.on("@resume", () => {
          this._awaitQueue.push(() => __async(this, null, function* () {
            return this._handler.resumeReceiving(consumer.localId);
          }), "consumer @resume event").catch(() => {});
        });
        consumer.on("@getstats", (callback, errback) => {
          if (this._closed) return errback(new errors_1.InvalidStateError("closed"));

          this._handler.getReceiverStats(consumer.localId).then(callback).catch(errback);
        });
      }

      _handleDataProducer(dataProducer) {
        dataProducer.on("@close", () => {
          this._dataProducers.delete(dataProducer.id);
        });
      }

      _handleDataConsumer(dataConsumer) {
        dataConsumer.on("@close", () => {
          this._dataConsumers.delete(dataConsumer.id);
        });
      }

    };
    exports.Transport = Transport;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/sdp/commonUtils.js


var require_commonUtils = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/sdp/commonUtils.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.applyCodecParameters = exports.getCname = exports.extractDtlsParameters = exports.extractRtpCapabilities = void 0;

    var sdpTransform3 = __importStar(require_lib());

    function extractRtpCapabilities({
      sdpObject
    }) {
      const codecsMap = /* @__PURE__ */new Map();
      const headerExtensions = [];
      let gotAudio = false;
      let gotVideo = false;

      for (const m of sdpObject.media) {
        const kind = m.type;

        switch (kind) {
          case "audio":
            {
              if (gotAudio) continue;
              gotAudio = true;
              break;
            }

          case "video":
            {
              if (gotVideo) continue;
              gotVideo = true;
              break;
            }

          default:
            {
              continue;
            }
        }

        for (const rtp of m.rtp) {
          const codec = {
            kind,
            mimeType: `${kind}/${rtp.codec}`,
            preferredPayloadType: rtp.payload,
            clockRate: rtp.rate,
            channels: rtp.encoding,
            parameters: {},
            rtcpFeedback: []
          };
          codecsMap.set(codec.preferredPayloadType, codec);
        }

        for (const fmtp of m.fmtp || []) {
          const parameters = sdpTransform3.parseParams(fmtp.config);
          const codec = codecsMap.get(fmtp.payload);
          if (!codec) continue;
          if (parameters && parameters.hasOwnProperty("profile-level-id")) parameters["profile-level-id"] = String(parameters["profile-level-id"]);
          codec.parameters = parameters;
        }

        for (const fb of m.rtcpFb || []) {
          const codec = codecsMap.get(fb.payload);
          if (!codec) continue;
          const feedback = {
            type: fb.type,
            parameter: fb.subtype
          };
          if (!feedback.parameter) delete feedback.parameter;
          codec.rtcpFeedback.push(feedback);
        }

        for (const ext of m.ext || []) {
          if (ext["encrypt-uri"]) continue;
          const headerExtension = {
            kind,
            uri: ext.uri,
            preferredId: ext.value
          };
          headerExtensions.push(headerExtension);
        }
      }

      const rtpCapabilities = {
        codecs: Array.from(codecsMap.values()),
        headerExtensions
      };
      return rtpCapabilities;
    }

    exports.extractRtpCapabilities = extractRtpCapabilities;

    function extractDtlsParameters({
      sdpObject
    }) {
      const mediaObject = (sdpObject.media || []).find(m => m.iceUfrag && m.port !== 0);
      if (!mediaObject) throw new Error("no active media section found");
      const fingerprint = mediaObject.fingerprint || sdpObject.fingerprint;
      let role;

      switch (mediaObject.setup) {
        case "active":
          role = "client";
          break;

        case "passive":
          role = "server";
          break;

        case "actpass":
          role = "auto";
          break;
      }

      const dtlsParameters = {
        role,
        fingerprints: [{
          algorithm: fingerprint.type,
          value: fingerprint.hash
        }]
      };
      return dtlsParameters;
    }

    exports.extractDtlsParameters = extractDtlsParameters;

    function getCname({
      offerMediaObject
    }) {
      const ssrcCnameLine = (offerMediaObject.ssrcs || []).find(line => line.attribute === "cname");
      if (!ssrcCnameLine) return "";
      return ssrcCnameLine.value;
    }

    exports.getCname = getCname;

    function applyCodecParameters({
      offerRtpParameters,
      answerMediaObject
    }) {
      for (const codec of offerRtpParameters.codecs) {
        const mimeType = codec.mimeType.toLowerCase();
        if (mimeType !== "audio/opus") continue;
        const rtp = (answerMediaObject.rtp || []).find(r2 => r2.payload === codec.payloadType);
        if (!rtp) continue;
        answerMediaObject.fmtp = answerMediaObject.fmtp || [];
        let fmtp = answerMediaObject.fmtp.find(f => f.payload === codec.payloadType);

        if (!fmtp) {
          fmtp = {
            payload: codec.payloadType,
            config: ""
          };
          answerMediaObject.fmtp.push(fmtp);
        }

        const parameters = sdpTransform3.parseParams(fmtp.config);

        switch (mimeType) {
          case "audio/opus":
            {
              const spropStereo = codec.parameters["sprop-stereo"];
              if (spropStereo !== void 0) parameters.stereo = spropStereo ? 1 : 0;
              break;
            }
        }

        fmtp.config = "";

        for (const key of Object.keys(parameters)) {
          if (fmtp.config) fmtp.config += ";";
          fmtp.config += `${key}=${parameters[key]}`;
        }
      }
    }

    exports.applyCodecParameters = applyCodecParameters;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/sdp/unifiedPlanUtils.js


var require_unifiedPlanUtils = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/sdp/unifiedPlanUtils.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLegacySimulcast = exports.getRtpEncodings = void 0;

    function getRtpEncodings({
      offerMediaObject
    }) {
      const ssrcs = /* @__PURE__ */new Set();

      for (const line of offerMediaObject.ssrcs || []) {
        const ssrc = line.id;
        ssrcs.add(ssrc);
      }

      if (ssrcs.size === 0) throw new Error("no a=ssrc lines found");
      const ssrcToRtxSsrc = /* @__PURE__ */new Map();

      for (const line of offerMediaObject.ssrcGroups || []) {
        if (line.semantics !== "FID") continue;
        let [ssrc, rtxSsrc] = line.ssrcs.split(/\s+/);
        ssrc = Number(ssrc);
        rtxSsrc = Number(rtxSsrc);

        if (ssrcs.has(ssrc)) {
          ssrcs.delete(ssrc);
          ssrcs.delete(rtxSsrc);
          ssrcToRtxSsrc.set(ssrc, rtxSsrc);
        }
      }

      for (const ssrc of ssrcs) {
        ssrcToRtxSsrc.set(ssrc, null);
      }

      const encodings = [];

      for (const [ssrc, rtxSsrc] of ssrcToRtxSsrc) {
        const encoding = {
          ssrc
        };
        if (rtxSsrc) encoding.rtx = {
          ssrc: rtxSsrc
        };
        encodings.push(encoding);
      }

      return encodings;
    }

    exports.getRtpEncodings = getRtpEncodings;

    function addLegacySimulcast({
      offerMediaObject,
      numStreams
    }) {
      if (numStreams <= 1) throw new TypeError("numStreams must be greater than 1");
      const ssrcMsidLine = (offerMediaObject.ssrcs || []).find(line => line.attribute === "msid");
      if (!ssrcMsidLine) throw new Error("a=ssrc line with msid information not found");
      const [streamId, trackId] = ssrcMsidLine.value.split(" ");
      const firstSsrc = ssrcMsidLine.id;
      let firstRtxSsrc;
      (offerMediaObject.ssrcGroups || []).some(line => {
        if (line.semantics !== "FID") return false;
        const ssrcs2 = line.ssrcs.split(/\s+/);

        if (Number(ssrcs2[0]) === firstSsrc) {
          firstRtxSsrc = Number(ssrcs2[1]);
          return true;
        } else {
          return false;
        }
      });
      const ssrcCnameLine = offerMediaObject.ssrcs.find(line => line.attribute === "cname");
      if (!ssrcCnameLine) throw new Error("a=ssrc line with cname information not found");
      const cname = ssrcCnameLine.value;
      const ssrcs = [];
      const rtxSsrcs = [];

      for (let i = 0; i < numStreams; ++i) {
        ssrcs.push(firstSsrc + i);
        if (firstRtxSsrc) rtxSsrcs.push(firstRtxSsrc + i);
      }

      offerMediaObject.ssrcGroups = [];
      offerMediaObject.ssrcs = [];
      offerMediaObject.ssrcGroups.push({
        semantics: "SIM",
        ssrcs: ssrcs.join(" ")
      });

      for (let i = 0; i < ssrcs.length; ++i) {
        const ssrc = ssrcs[i];
        offerMediaObject.ssrcs.push({
          id: ssrc,
          attribute: "cname",
          value: cname
        });
        offerMediaObject.ssrcs.push({
          id: ssrc,
          attribute: "msid",
          value: `${streamId} ${trackId}`
        });
      }

      for (let i = 0; i < rtxSsrcs.length; ++i) {
        const ssrc = ssrcs[i];
        const rtxSsrc = rtxSsrcs[i];
        offerMediaObject.ssrcs.push({
          id: rtxSsrc,
          attribute: "cname",
          value: cname
        });
        offerMediaObject.ssrcs.push({
          id: rtxSsrc,
          attribute: "msid",
          value: `${streamId} ${trackId}`
        });
        offerMediaObject.ssrcGroups.push({
          semantics: "FID",
          ssrcs: `${ssrc} ${rtxSsrc}`
        });
      }
    }

    exports.addLegacySimulcast = addLegacySimulcast;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/HandlerInterface.js


var require_HandlerInterface = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/HandlerInterface.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HandlerInterface = void 0;
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var HandlerInterface = class extends EnhancedEventEmitter_1.EnhancedEventEmitter {
      constructor() {
        super();
      }

    };
    exports.HandlerInterface = HandlerInterface;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/sdp/MediaSection.js


var require_MediaSection = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/sdp/MediaSection.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OfferMediaSection = exports.AnswerMediaSection = exports.MediaSection = void 0;

    var utils = __importStar(require_utils2());

    var MediaSection = class {
      constructor({
        iceParameters,
        iceCandidates,
        dtlsParameters,
        planB = false
      }) {
        this._mediaObject = {};
        this._planB = planB;

        if (iceParameters) {
          this.setIceParameters(iceParameters);
        }

        if (iceCandidates) {
          this._mediaObject.candidates = [];

          for (const candidate of iceCandidates) {
            const candidateObject = {};
            candidateObject.component = 1;
            candidateObject.foundation = candidate.foundation;
            candidateObject.ip = candidate.ip;
            candidateObject.port = candidate.port;
            candidateObject.priority = candidate.priority;
            candidateObject.transport = candidate.protocol;
            candidateObject.type = candidate.type;
            if (candidate.tcpType) candidateObject.tcptype = candidate.tcpType;

            this._mediaObject.candidates.push(candidateObject);
          }

          this._mediaObject.endOfCandidates = "end-of-candidates";
          this._mediaObject.iceOptions = "renomination";
        }

        if (dtlsParameters) {
          this.setDtlsRole(dtlsParameters.role);
        }
      }

      get mid() {
        return String(this._mediaObject.mid);
      }

      get closed() {
        return this._mediaObject.port === 0;
      }

      getObject() {
        return this._mediaObject;
      }

      setIceParameters(iceParameters) {
        this._mediaObject.iceUfrag = iceParameters.usernameFragment;
        this._mediaObject.icePwd = iceParameters.password;
      }

      disable() {
        this._mediaObject.direction = "inactive";
        delete this._mediaObject.ext;
        delete this._mediaObject.ssrcs;
        delete this._mediaObject.ssrcGroups;
        delete this._mediaObject.simulcast;
        delete this._mediaObject.simulcast_03;
        delete this._mediaObject.rids;
      }

      close() {
        this._mediaObject.direction = "inactive";
        this._mediaObject.port = 0;
        delete this._mediaObject.ext;
        delete this._mediaObject.ssrcs;
        delete this._mediaObject.ssrcGroups;
        delete this._mediaObject.simulcast;
        delete this._mediaObject.simulcast_03;
        delete this._mediaObject.rids;
        delete this._mediaObject.extmapAllowMixed;
      }

    };
    exports.MediaSection = MediaSection;
    var AnswerMediaSection = class extends MediaSection {
      constructor({
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        plainRtpParameters,
        planB = false,
        offerMediaObject,
        offerRtpParameters,
        answerRtpParameters,
        codecOptions,
        extmapAllowMixed = false
      }) {
        super({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          planB
        });
        this._mediaObject.mid = String(offerMediaObject.mid);
        this._mediaObject.type = offerMediaObject.type;
        this._mediaObject.protocol = offerMediaObject.protocol;

        if (!plainRtpParameters) {
          this._mediaObject.connection = {
            ip: "127.0.0.1",
            version: 4
          };
          this._mediaObject.port = 7;
        } else {
          this._mediaObject.connection = {
            ip: plainRtpParameters.ip,
            version: plainRtpParameters.ipVersion
          };
          this._mediaObject.port = plainRtpParameters.port;
        }

        switch (offerMediaObject.type) {
          case "audio":
          case "video":
            {
              this._mediaObject.direction = "recvonly";
              this._mediaObject.rtp = [];
              this._mediaObject.rtcpFb = [];
              this._mediaObject.fmtp = [];

              for (const codec of answerRtpParameters.codecs) {
                const rtp = {
                  payload: codec.payloadType,
                  codec: getCodecName(codec),
                  rate: codec.clockRate
                };
                if (codec.channels > 1) rtp.encoding = codec.channels;

                this._mediaObject.rtp.push(rtp);

                const codecParameters = utils.clone(codec.parameters, {});

                if (codecOptions) {
                  const {
                    opusStereo,
                    opusFec,
                    opusDtx,
                    opusMaxPlaybackRate,
                    opusMaxAverageBitrate,
                    opusPtime,
                    videoGoogleStartBitrate,
                    videoGoogleMaxBitrate,
                    videoGoogleMinBitrate
                  } = codecOptions;
                  const offerCodec = offerRtpParameters.codecs.find(c => c.payloadType === codec.payloadType);

                  switch (codec.mimeType.toLowerCase()) {
                    case "audio/opus":
                      {
                        if (opusStereo !== void 0) {
                          offerCodec.parameters["sprop-stereo"] = opusStereo ? 1 : 0;
                          codecParameters.stereo = opusStereo ? 1 : 0;
                        }

                        if (opusFec !== void 0) {
                          offerCodec.parameters.useinbandfec = opusFec ? 1 : 0;
                          codecParameters.useinbandfec = opusFec ? 1 : 0;
                        }

                        if (opusDtx !== void 0) {
                          offerCodec.parameters.usedtx = opusDtx ? 1 : 0;
                          codecParameters.usedtx = opusDtx ? 1 : 0;
                        }

                        if (opusMaxPlaybackRate !== void 0) {
                          codecParameters.maxplaybackrate = opusMaxPlaybackRate;
                        }

                        if (opusMaxAverageBitrate !== void 0) {
                          codecParameters.maxaveragebitrate = opusMaxAverageBitrate;
                        }

                        if (opusPtime !== void 0) {
                          offerCodec.parameters.ptime = opusPtime;
                          codecParameters.ptime = opusPtime;
                        }

                        break;
                      }

                    case "video/vp8":
                    case "video/vp9":
                    case "video/h264":
                    case "video/h265":
                      {
                        if (videoGoogleStartBitrate !== void 0) codecParameters["x-google-start-bitrate"] = videoGoogleStartBitrate;
                        if (videoGoogleMaxBitrate !== void 0) codecParameters["x-google-max-bitrate"] = videoGoogleMaxBitrate;
                        if (videoGoogleMinBitrate !== void 0) codecParameters["x-google-min-bitrate"] = videoGoogleMinBitrate;
                        break;
                      }
                  }
                }

                const fmtp = {
                  payload: codec.payloadType,
                  config: ""
                };

                for (const key of Object.keys(codecParameters)) {
                  if (fmtp.config) fmtp.config += ";";
                  fmtp.config += `${key}=${codecParameters[key]}`;
                }

                if (fmtp.config) this._mediaObject.fmtp.push(fmtp);

                for (const fb of codec.rtcpFeedback) {
                  this._mediaObject.rtcpFb.push({
                    payload: codec.payloadType,
                    type: fb.type,
                    subtype: fb.parameter
                  });
                }
              }

              this._mediaObject.payloads = answerRtpParameters.codecs.map(codec => codec.payloadType).join(" ");
              this._mediaObject.ext = [];

              for (const ext of answerRtpParameters.headerExtensions) {
                const found = (offerMediaObject.ext || []).some(localExt => localExt.uri === ext.uri);
                if (!found) continue;

                this._mediaObject.ext.push({
                  uri: ext.uri,
                  value: ext.id
                });
              }

              if (extmapAllowMixed && offerMediaObject.extmapAllowMixed === "extmap-allow-mixed") {
                this._mediaObject.extmapAllowMixed = "extmap-allow-mixed";
              }

              if (offerMediaObject.simulcast) {
                this._mediaObject.simulcast = {
                  dir1: "recv",
                  list1: offerMediaObject.simulcast.list1
                };
                this._mediaObject.rids = [];

                for (const rid of offerMediaObject.rids || []) {
                  if (rid.direction !== "send") continue;

                  this._mediaObject.rids.push({
                    id: rid.id,
                    direction: "recv"
                  });
                }
              } else if (offerMediaObject.simulcast_03) {
                this._mediaObject.simulcast_03 = {
                  value: offerMediaObject.simulcast_03.value.replace(/send/g, "recv")
                };
                this._mediaObject.rids = [];

                for (const rid of offerMediaObject.rids || []) {
                  if (rid.direction !== "send") continue;

                  this._mediaObject.rids.push({
                    id: rid.id,
                    direction: "recv"
                  });
                }
              }

              this._mediaObject.rtcpMux = "rtcp-mux";
              this._mediaObject.rtcpRsize = "rtcp-rsize";
              if (this._planB && this._mediaObject.type === "video") this._mediaObject.xGoogleFlag = "conference";
              break;
            }

          case "application":
            {
              if (typeof offerMediaObject.sctpPort === "number") {
                this._mediaObject.payloads = "webrtc-datachannel";
                this._mediaObject.sctpPort = sctpParameters.port;
                this._mediaObject.maxMessageSize = sctpParameters.maxMessageSize;
              } else if (offerMediaObject.sctpmap) {
                this._mediaObject.payloads = sctpParameters.port;
                this._mediaObject.sctpmap = {
                  app: "webrtc-datachannel",
                  sctpmapNumber: sctpParameters.port,
                  maxMessageSize: sctpParameters.maxMessageSize
                };
              }

              break;
            }
        }
      }

      setDtlsRole(role) {
        switch (role) {
          case "client":
            this._mediaObject.setup = "active";
            break;

          case "server":
            this._mediaObject.setup = "passive";
            break;

          case "auto":
            this._mediaObject.setup = "actpass";
            break;
        }
      }

    };
    exports.AnswerMediaSection = AnswerMediaSection;
    var OfferMediaSection = class extends MediaSection {
      constructor({
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        plainRtpParameters,
        planB = false,
        mid,
        kind,
        offerRtpParameters,
        streamId,
        trackId,
        oldDataChannelSpec = false
      }) {
        super({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          planB
        });
        this._mediaObject.mid = String(mid);
        this._mediaObject.type = kind;

        if (!plainRtpParameters) {
          this._mediaObject.connection = {
            ip: "127.0.0.1",
            version: 4
          };
          if (!sctpParameters) this._mediaObject.protocol = "UDP/TLS/RTP/SAVPF";else this._mediaObject.protocol = "UDP/DTLS/SCTP";
          this._mediaObject.port = 7;
        } else {
          this._mediaObject.connection = {
            ip: plainRtpParameters.ip,
            version: plainRtpParameters.ipVersion
          };
          this._mediaObject.protocol = "RTP/AVP";
          this._mediaObject.port = plainRtpParameters.port;
        }

        switch (kind) {
          case "audio":
          case "video":
            {
              this._mediaObject.direction = "sendonly";
              this._mediaObject.rtp = [];
              this._mediaObject.rtcpFb = [];
              this._mediaObject.fmtp = [];
              if (!this._planB) this._mediaObject.msid = `${streamId || "-"} ${trackId}`;

              for (const codec of offerRtpParameters.codecs) {
                const rtp = {
                  payload: codec.payloadType,
                  codec: getCodecName(codec),
                  rate: codec.clockRate
                };
                if (codec.channels > 1) rtp.encoding = codec.channels;

                this._mediaObject.rtp.push(rtp);

                const fmtp = {
                  payload: codec.payloadType,
                  config: ""
                };

                for (const key of Object.keys(codec.parameters)) {
                  if (fmtp.config) fmtp.config += ";";
                  fmtp.config += `${key}=${codec.parameters[key]}`;
                }

                if (fmtp.config) this._mediaObject.fmtp.push(fmtp);

                for (const fb of codec.rtcpFeedback) {
                  this._mediaObject.rtcpFb.push({
                    payload: codec.payloadType,
                    type: fb.type,
                    subtype: fb.parameter
                  });
                }
              }

              this._mediaObject.payloads = offerRtpParameters.codecs.map(codec => codec.payloadType).join(" ");
              this._mediaObject.ext = [];

              for (const ext of offerRtpParameters.headerExtensions) {
                this._mediaObject.ext.push({
                  uri: ext.uri,
                  value: ext.id
                });
              }

              this._mediaObject.rtcpMux = "rtcp-mux";
              this._mediaObject.rtcpRsize = "rtcp-rsize";
              const encoding = offerRtpParameters.encodings[0];
              const ssrc = encoding.ssrc;
              const rtxSsrc = encoding.rtx && encoding.rtx.ssrc ? encoding.rtx.ssrc : void 0;
              this._mediaObject.ssrcs = [];
              this._mediaObject.ssrcGroups = [];

              if (offerRtpParameters.rtcp.cname) {
                this._mediaObject.ssrcs.push({
                  id: ssrc,
                  attribute: "cname",
                  value: offerRtpParameters.rtcp.cname
                });
              }

              if (this._planB) {
                this._mediaObject.ssrcs.push({
                  id: ssrc,
                  attribute: "msid",
                  value: `${streamId || "-"} ${trackId}`
                });
              }

              if (rtxSsrc) {
                if (offerRtpParameters.rtcp.cname) {
                  this._mediaObject.ssrcs.push({
                    id: rtxSsrc,
                    attribute: "cname",
                    value: offerRtpParameters.rtcp.cname
                  });
                }

                if (this._planB) {
                  this._mediaObject.ssrcs.push({
                    id: rtxSsrc,
                    attribute: "msid",
                    value: `${streamId || "-"} ${trackId}`
                  });
                }

                this._mediaObject.ssrcGroups.push({
                  semantics: "FID",
                  ssrcs: `${ssrc} ${rtxSsrc}`
                });
              }

              break;
            }

          case "application":
            {
              if (!oldDataChannelSpec) {
                this._mediaObject.payloads = "webrtc-datachannel";
                this._mediaObject.sctpPort = sctpParameters.port;
                this._mediaObject.maxMessageSize = sctpParameters.maxMessageSize;
              } else {
                this._mediaObject.payloads = sctpParameters.port;
                this._mediaObject.sctpmap = {
                  app: "webrtc-datachannel",
                  sctpmapNumber: sctpParameters.port,
                  maxMessageSize: sctpParameters.maxMessageSize
                };
              }

              break;
            }
        }
      }

      setDtlsRole(role) {
        this._mediaObject.setup = "actpass";
      }

      planBReceive({
        offerRtpParameters,
        streamId,
        trackId
      }) {
        const encoding = offerRtpParameters.encodings[0];
        const ssrc = encoding.ssrc;
        const rtxSsrc = encoding.rtx && encoding.rtx.ssrc ? encoding.rtx.ssrc : void 0;

        const payloads = this._mediaObject.payloads.split(" ");

        for (const codec of offerRtpParameters.codecs) {
          if (payloads.includes(String(codec.payloadType))) {
            continue;
          }

          const rtp = {
            payload: codec.payloadType,
            codec: getCodecName(codec),
            rate: codec.clockRate
          };
          if (codec.channels > 1) rtp.encoding = codec.channels;

          this._mediaObject.rtp.push(rtp);

          const fmtp = {
            payload: codec.payloadType,
            config: ""
          };

          for (const key of Object.keys(codec.parameters)) {
            if (fmtp.config) fmtp.config += ";";
            fmtp.config += `${key}=${codec.parameters[key]}`;
          }

          if (fmtp.config) this._mediaObject.fmtp.push(fmtp);

          for (const fb of codec.rtcpFeedback) {
            this._mediaObject.rtcpFb.push({
              payload: codec.payloadType,
              type: fb.type,
              subtype: fb.parameter
            });
          }
        }

        this._mediaObject.payloads += ` ${offerRtpParameters.codecs.filter(codec => !this._mediaObject.payloads.includes(codec.payloadType)).map(codec => codec.payloadType).join(" ")}`;
        this._mediaObject.payloads = this._mediaObject.payloads.trim();

        if (offerRtpParameters.rtcp.cname) {
          this._mediaObject.ssrcs.push({
            id: ssrc,
            attribute: "cname",
            value: offerRtpParameters.rtcp.cname
          });
        }

        this._mediaObject.ssrcs.push({
          id: ssrc,
          attribute: "msid",
          value: `${streamId || "-"} ${trackId}`
        });

        if (rtxSsrc) {
          if (offerRtpParameters.rtcp.cname) {
            this._mediaObject.ssrcs.push({
              id: rtxSsrc,
              attribute: "cname",
              value: offerRtpParameters.rtcp.cname
            });
          }

          this._mediaObject.ssrcs.push({
            id: rtxSsrc,
            attribute: "msid",
            value: `${streamId || "-"} ${trackId}`
          });

          this._mediaObject.ssrcGroups.push({
            semantics: "FID",
            ssrcs: `${ssrc} ${rtxSsrc}`
          });
        }
      }

      planBStopReceiving({
        offerRtpParameters
      }) {
        const encoding = offerRtpParameters.encodings[0];
        const ssrc = encoding.ssrc;
        const rtxSsrc = encoding.rtx && encoding.rtx.ssrc ? encoding.rtx.ssrc : void 0;
        this._mediaObject.ssrcs = this._mediaObject.ssrcs.filter(s => s.id !== ssrc && s.id !== rtxSsrc);

        if (rtxSsrc) {
          this._mediaObject.ssrcGroups = this._mediaObject.ssrcGroups.filter(group => group.ssrcs !== `${ssrc} ${rtxSsrc}`);
        }
      }

    };
    exports.OfferMediaSection = OfferMediaSection;

    function getCodecName(codec) {
      const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
      const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
      if (!mimeTypeMatch) throw new TypeError("invalid codec.mimeType");
      return mimeTypeMatch[2];
    }
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/sdp/RemoteSdp.js


var require_RemoteSdp = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/sdp/RemoteSdp.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RemoteSdp = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();
    var MediaSection_1 = require_MediaSection();
    var logger = new Logger_1.Logger("RemoteSdp");
    var RemoteSdp = class {
      constructor({
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        plainRtpParameters,
        planB = false
      }) {
        this._mediaSections = [];
        this._midToIndex = /* @__PURE__ */new Map();
        this._iceParameters = iceParameters;
        this._iceCandidates = iceCandidates;
        this._dtlsParameters = dtlsParameters;
        this._sctpParameters = sctpParameters;
        this._plainRtpParameters = plainRtpParameters;
        this._planB = planB;
        this._sdpObject = {
          version: 0,
          origin: {
            address: "0.0.0.0",
            ipVer: 4,
            netType: "IN",
            sessionId: 1e4,
            sessionVersion: 0,
            username: "mediasoup-client"
          },
          name: "-",
          timing: {
            start: 0,
            stop: 0
          },
          media: []
        };

        if (iceParameters && iceParameters.iceLite) {
          this._sdpObject.icelite = "ice-lite";
        }

        if (dtlsParameters) {
          this._sdpObject.msidSemantic = {
            semantic: "WMS",
            token: "*"
          };
          const numFingerprints = this._dtlsParameters.fingerprints.length;
          this._sdpObject.fingerprint = {
            type: dtlsParameters.fingerprints[numFingerprints - 1].algorithm,
            hash: dtlsParameters.fingerprints[numFingerprints - 1].value
          };
          this._sdpObject.groups = [{
            type: "BUNDLE",
            mids: ""
          }];
        }

        if (plainRtpParameters) {
          this._sdpObject.origin.address = plainRtpParameters.ip;
          this._sdpObject.origin.ipVer = plainRtpParameters.ipVersion;
        }
      }

      updateIceParameters(iceParameters) {
        logger.debug("updateIceParameters() [iceParameters:%o]", iceParameters);
        this._iceParameters = iceParameters;
        this._sdpObject.icelite = iceParameters.iceLite ? "ice-lite" : void 0;

        for (const mediaSection of this._mediaSections) {
          mediaSection.setIceParameters(iceParameters);
        }
      }

      updateDtlsRole(role) {
        logger.debug("updateDtlsRole() [role:%s]", role);
        this._dtlsParameters.role = role;

        for (const mediaSection of this._mediaSections) {
          mediaSection.setDtlsRole(role);
        }
      }

      getNextMediaSectionIdx() {
        for (let idx = 0; idx < this._mediaSections.length; ++idx) {
          const mediaSection = this._mediaSections[idx];
          if (mediaSection.closed) return {
            idx,
            reuseMid: mediaSection.mid
          };
        }

        return {
          idx: this._mediaSections.length
        };
      }

      send({
        offerMediaObject,
        reuseMid,
        offerRtpParameters,
        answerRtpParameters,
        codecOptions,
        extmapAllowMixed = false
      }) {
        const mediaSection = new MediaSection_1.AnswerMediaSection({
          iceParameters: this._iceParameters,
          iceCandidates: this._iceCandidates,
          dtlsParameters: this._dtlsParameters,
          plainRtpParameters: this._plainRtpParameters,
          planB: this._planB,
          offerMediaObject,
          offerRtpParameters,
          answerRtpParameters,
          codecOptions,
          extmapAllowMixed
        });

        if (reuseMid) {
          this._replaceMediaSection(mediaSection, reuseMid);
        } else if (!this._midToIndex.has(mediaSection.mid)) {
          this._addMediaSection(mediaSection);
        } else {
          this._replaceMediaSection(mediaSection);
        }
      }

      receive({
        mid,
        kind,
        offerRtpParameters,
        streamId,
        trackId
      }) {
        const idx = this._midToIndex.get(mid);

        let mediaSection;
        if (idx !== void 0) mediaSection = this._mediaSections[idx];

        if (!mediaSection) {
          mediaSection = new MediaSection_1.OfferMediaSection({
            iceParameters: this._iceParameters,
            iceCandidates: this._iceCandidates,
            dtlsParameters: this._dtlsParameters,
            plainRtpParameters: this._plainRtpParameters,
            planB: this._planB,
            mid,
            kind,
            offerRtpParameters,
            streamId,
            trackId
          });

          const oldMediaSection = this._mediaSections.find(m => m.closed);

          if (oldMediaSection) {
            this._replaceMediaSection(mediaSection, oldMediaSection.mid);
          } else {
            this._addMediaSection(mediaSection);
          }
        } else {
          mediaSection.planBReceive({
            offerRtpParameters,
            streamId,
            trackId
          });

          this._replaceMediaSection(mediaSection);
        }
      }

      disableMediaSection(mid) {
        const idx = this._midToIndex.get(mid);

        if (idx === void 0) {
          throw new Error(`no media section found with mid '${mid}'`);
        }

        const mediaSection = this._mediaSections[idx];
        mediaSection.disable();
      }

      closeMediaSection(mid) {
        const idx = this._midToIndex.get(mid);

        if (idx === void 0) {
          throw new Error(`no media section found with mid '${mid}'`);
        }

        const mediaSection = this._mediaSections[idx];

        if (mid === this._firstMid) {
          logger.debug("closeMediaSection() | cannot close first media section, disabling it instead [mid:%s]", mid);
          this.disableMediaSection(mid);
          return;
        }

        mediaSection.close();

        this._regenerateBundleMids();
      }

      planBStopReceiving({
        mid,
        offerRtpParameters
      }) {
        const idx = this._midToIndex.get(mid);

        if (idx === void 0) {
          throw new Error(`no media section found with mid '${mid}'`);
        }

        const mediaSection = this._mediaSections[idx];
        mediaSection.planBStopReceiving({
          offerRtpParameters
        });

        this._replaceMediaSection(mediaSection);
      }

      sendSctpAssociation({
        offerMediaObject
      }) {
        const mediaSection = new MediaSection_1.AnswerMediaSection({
          iceParameters: this._iceParameters,
          iceCandidates: this._iceCandidates,
          dtlsParameters: this._dtlsParameters,
          sctpParameters: this._sctpParameters,
          plainRtpParameters: this._plainRtpParameters,
          offerMediaObject
        });

        this._addMediaSection(mediaSection);
      }

      receiveSctpAssociation({
        oldDataChannelSpec = false
      } = {}) {
        const mediaSection = new MediaSection_1.OfferMediaSection({
          iceParameters: this._iceParameters,
          iceCandidates: this._iceCandidates,
          dtlsParameters: this._dtlsParameters,
          sctpParameters: this._sctpParameters,
          plainRtpParameters: this._plainRtpParameters,
          mid: "datachannel",
          kind: "application",
          oldDataChannelSpec
        });

        this._addMediaSection(mediaSection);
      }

      getSdp() {
        this._sdpObject.origin.sessionVersion++;
        return sdpTransform3.write(this._sdpObject);
      }

      _addMediaSection(newMediaSection) {
        if (!this._firstMid) this._firstMid = newMediaSection.mid;

        this._mediaSections.push(newMediaSection);

        this._midToIndex.set(newMediaSection.mid, this._mediaSections.length - 1);

        this._sdpObject.media.push(newMediaSection.getObject());

        this._regenerateBundleMids();
      }

      _replaceMediaSection(newMediaSection, reuseMid) {
        if (typeof reuseMid === "string") {
          const idx = this._midToIndex.get(reuseMid);

          if (idx === void 0) {
            throw new Error(`no media section found for reuseMid '${reuseMid}'`);
          }

          const oldMediaSection = this._mediaSections[idx];
          this._mediaSections[idx] = newMediaSection;

          this._midToIndex.delete(oldMediaSection.mid);

          this._midToIndex.set(newMediaSection.mid, idx);

          this._sdpObject.media[idx] = newMediaSection.getObject();

          this._regenerateBundleMids();
        } else {
          const idx = this._midToIndex.get(newMediaSection.mid);

          if (idx === void 0) {
            throw new Error(`no media section found with mid '${newMediaSection.mid}'`);
          }

          this._mediaSections[idx] = newMediaSection;
          this._sdpObject.media[idx] = newMediaSection.getObject();
        }
      }

      _regenerateBundleMids() {
        if (!this._dtlsParameters) return;
        this._sdpObject.groups[0].mids = this._mediaSections.filter(mediaSection => !mediaSection.closed).map(mediaSection => mediaSection.mid).join(" ");
      }

    };
    exports.RemoteSdp = RemoteSdp;
  }

}); // ../../node_modules/mediasoup-client/lib/scalabilityModes.js


var require_scalabilityModes = __commonJS({
  "../../node_modules/mediasoup-client/lib/scalabilityModes.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = void 0;
    var ScalabilityModeRegex = new RegExp("^[LS]([1-9]\\d{0,1})T([1-9]\\d{0,1})");

    function parse3(scalabilityMode) {
      const match = ScalabilityModeRegex.exec(scalabilityMode || "");

      if (match) {
        return {
          spatialLayers: Number(match[1]),
          temporalLayers: Number(match[2])
        };
      } else {
        return {
          spatialLayers: 1,
          temporalLayers: 1
        };
      }
    }

    exports.parse = parse3;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Chrome74.js


var require_Chrome74 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Chrome74.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chrome74 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var scalabilityModes_1 = require_scalabilityModes();
    var logger = new Logger_1.Logger("Chrome74");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Chrome74 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._mapMidTransceiver = /* @__PURE__ */new Map();
        this._sendStream = new MediaStream();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Chrome74();
      }

      get name() {
        return "Chrome74";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });

          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = yield pc.createOffer();

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require",
          sdpSemantics: "unified-plan"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (encodings && encodings.length > 1) {
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
            });
          }

          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);

          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();

          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [this._sendStream],
            sendEncodings: encodings
          });

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          let hackVp9Svc = false;
          const layers = (0, scalabilityModes_1.parse)((encodings || [{}])[0].scalabilityMode);

          if (encodings && encodings.length === 1 && layers.spatialLayers > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp9") {
            logger.debug("send() | enabling legacy simulcast for VP9 SVC");
            hackVp9Svc = true;
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: layers.spatialLayers
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });

          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            let newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            if (hackVp9Svc) newEncodings = [newEncodings[0]];
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings;
          }

          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.set(localId, transceiver);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.sender.replaceTrack(null);

          this._pc.removeTrack(transceiver.sender);

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          yield transceiver.sender.replaceTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.sender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];
          const mapLocalId = /* @__PURE__ */new Map();

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid || String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);

            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              trackId,
              rtpParameters
            } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              trackId
            } = options;
            const localId = mapLocalId.get(trackId);

            const transceiver = this._pc.getTransceivers().find(t2 => t2.mid === localId);

            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            } else {
              this._mapMidTransceiver.set(localId, transceiver);

              results.push({
                localId,
                track: transceiver.receiver.track,
                rtpReceiver: transceiver.receiver
              });
            }
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("pauseReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "inactive";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("resumeReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "recvonly";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.receiver.getStats();
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Chrome74 = Chrome74;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Chrome70.js


var require_Chrome70 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Chrome70.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chrome70 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var scalabilityModes_1 = require_scalabilityModes();
    var logger = new Logger_1.Logger("Chrome70");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Chrome70 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._mapMidTransceiver = /* @__PURE__ */new Map();
        this._sendStream = new MediaStream();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Chrome70();
      }

      get name() {
        return "Chrome70";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });

          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = yield pc.createOffer();

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require",
          sdpSemantics: "unified-plan"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);

          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();

          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [this._sendStream]
          });

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (encodings && encodings.length > 1) {
            logger.debug("send() | enabling legacy simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          let hackVp9Svc = false;
          const layers = (0, scalabilityModes_1.parse)((encodings || [{}])[0].scalabilityMode);

          if (encodings && encodings.length === 1 && layers.spatialLayers > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp9") {
            logger.debug("send() | enabling legacy simulcast for VP9 SVC");
            hackVp9Svc = true;
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: layers.spatialLayers
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);

          if (encodings) {
            logger.debug("send() | applying given encodings");
            const parameters = transceiver.sender.getParameters();

            for (let idx = 0; idx < (parameters.encodings || []).length; ++idx) {
              const encoding = parameters.encodings[idx];
              const desiredEncoding = encodings[idx];
              if (!desiredEncoding) break;
              parameters.encodings[idx] = Object.assign(encoding, desiredEncoding);
            }

            yield transceiver.sender.setParameters(parameters);
          }

          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
            offerMediaObject
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (hackVp9Svc) {
            sendingRtpParameters.encodings = [sendingRtpParameters.encodings[0]];
          }

          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.set(localId, transceiver);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.sender.replaceTrack(null);

          this._pc.removeTrack(transceiver.sender);

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          yield transceiver.sender.replaceTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.sender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];
          const mapLocalId = /* @__PURE__ */new Map();

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid || String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);

            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              trackId,
              rtpParameters
            } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              trackId
            } = options;
            const localId = mapLocalId.get(trackId);

            const transceiver = this._pc.getTransceivers().find(t2 => t2.mid === localId);

            if (!transceiver) throw new Error("new RTCRtpTransceiver not found");

            this._mapMidTransceiver.set(localId, transceiver);

            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.receiver.getStats();
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Chrome70 = Chrome70;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/sdp/planBUtils.js


var require_planBUtils = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/sdp/planBUtils.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLegacySimulcast = exports.getRtpEncodings = void 0;

    function getRtpEncodings({
      offerMediaObject,
      track
    }) {
      let firstSsrc;
      const ssrcs = /* @__PURE__ */new Set();

      for (const line of offerMediaObject.ssrcs || []) {
        if (line.attribute !== "msid") continue;
        const trackId = line.value.split(" ")[1];

        if (trackId === track.id) {
          const ssrc = line.id;
          ssrcs.add(ssrc);
          if (!firstSsrc) firstSsrc = ssrc;
        }
      }

      if (ssrcs.size === 0) throw new Error(`a=ssrc line with msid information not found [track.id:${track.id}]`);
      const ssrcToRtxSsrc = /* @__PURE__ */new Map();

      for (const line of offerMediaObject.ssrcGroups || []) {
        if (line.semantics !== "FID") continue;
        let [ssrc, rtxSsrc] = line.ssrcs.split(/\s+/);
        ssrc = Number(ssrc);
        rtxSsrc = Number(rtxSsrc);

        if (ssrcs.has(ssrc)) {
          ssrcs.delete(ssrc);
          ssrcs.delete(rtxSsrc);
          ssrcToRtxSsrc.set(ssrc, rtxSsrc);
        }
      }

      for (const ssrc of ssrcs) {
        ssrcToRtxSsrc.set(ssrc, null);
      }

      const encodings = [];

      for (const [ssrc, rtxSsrc] of ssrcToRtxSsrc) {
        const encoding = {
          ssrc
        };
        if (rtxSsrc) encoding.rtx = {
          ssrc: rtxSsrc
        };
        encodings.push(encoding);
      }

      return encodings;
    }

    exports.getRtpEncodings = getRtpEncodings;

    function addLegacySimulcast({
      offerMediaObject,
      track,
      numStreams
    }) {
      if (numStreams <= 1) throw new TypeError("numStreams must be greater than 1");
      let firstSsrc;
      let firstRtxSsrc;
      let streamId;
      const ssrcMsidLine = (offerMediaObject.ssrcs || []).find(line => {
        if (line.attribute !== "msid") return false;
        const trackId = line.value.split(" ")[1];

        if (trackId === track.id) {
          firstSsrc = line.id;
          streamId = line.value.split(" ")[0];
          return true;
        } else {
          return false;
        }
      });
      if (!ssrcMsidLine) throw new Error(`a=ssrc line with msid information not found [track.id:${track.id}]`);
      (offerMediaObject.ssrcGroups || []).some(line => {
        if (line.semantics !== "FID") return false;
        const ssrcs2 = line.ssrcs.split(/\s+/);

        if (Number(ssrcs2[0]) === firstSsrc) {
          firstRtxSsrc = Number(ssrcs2[1]);
          return true;
        } else {
          return false;
        }
      });
      const ssrcCnameLine = offerMediaObject.ssrcs.find(line => line.attribute === "cname" && line.id === firstSsrc);
      if (!ssrcCnameLine) throw new Error(`a=ssrc line with cname information not found [track.id:${track.id}]`);
      const cname = ssrcCnameLine.value;
      const ssrcs = [];
      const rtxSsrcs = [];

      for (let i = 0; i < numStreams; ++i) {
        ssrcs.push(firstSsrc + i);
        if (firstRtxSsrc) rtxSsrcs.push(firstRtxSsrc + i);
      }

      offerMediaObject.ssrcGroups = offerMediaObject.ssrcGroups || [];
      offerMediaObject.ssrcs = offerMediaObject.ssrcs || [];
      offerMediaObject.ssrcGroups.push({
        semantics: "SIM",
        ssrcs: ssrcs.join(" ")
      });

      for (let i = 0; i < ssrcs.length; ++i) {
        const ssrc = ssrcs[i];
        offerMediaObject.ssrcs.push({
          id: ssrc,
          attribute: "cname",
          value: cname
        });
        offerMediaObject.ssrcs.push({
          id: ssrc,
          attribute: "msid",
          value: `${streamId} ${track.id}`
        });
      }

      for (let i = 0; i < rtxSsrcs.length; ++i) {
        const ssrc = ssrcs[i];
        const rtxSsrc = rtxSsrcs[i];
        offerMediaObject.ssrcs.push({
          id: rtxSsrc,
          attribute: "cname",
          value: cname
        });
        offerMediaObject.ssrcs.push({
          id: rtxSsrc,
          attribute: "msid",
          value: `${streamId} ${track.id}`
        });
        offerMediaObject.ssrcGroups.push({
          semantics: "FID",
          ssrcs: `${ssrc} ${rtxSsrc}`
        });
      }
    }

    exports.addLegacySimulcast = addLegacySimulcast;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Chrome67.js


var require_Chrome67 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Chrome67.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chrome67 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpPlanBUtils = __importStar(require_planBUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("Chrome67");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Chrome67 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._sendStream = new MediaStream();
        this._mapSendLocalIdRtpSender = /* @__PURE__ */new Map();
        this._nextSendLocalId = 0;
        this._mapRecvLocalIdInfo = /* @__PURE__ */new Map();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Chrome67();
      }

      get name() {
        return "Chrome67";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });

          try {
            const offer = yield pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          planB: true
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require",
          sdpSemantics: "plan-b"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }

          this._sendStream.addTrack(track);

          this._pc.addTrack(track, this._sendStream);

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find(m => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find(m => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;

          const rtpSender = this._pc.getSenders().find(s => s.track === track);

          this._mapSendLocalIdRtpSender.set(localId, rtpSender);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");

          this._pc.removeTrack(rtpSender);

          if (rtpSender.track) this._sendStream.removeTrack(rtpSender.track);

          this._mapSendLocalIdRtpSender.delete(localId);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);

          try {
            yield this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }

            throw error;
          }

          if (this._pc.signalingState === "stable") return;
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const oldTrack = rtpSender.track;
          yield rtpSender.replaceTrack(track);
          if (oldTrack) this._sendStream.removeTrack(oldTrack);
          if (track) this._sendStream.addTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          return rtpSender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;

            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              kind,
              rtpParameters
            } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              kind,
              trackId,
              rtpParameters
            } = options;
            const localId = trackId;
            const mid = kind;

            const rtpReceiver = this._pc.getReceivers().find(r2 => r2.track && r2.track.id === localId);

            if (!rtpReceiver) throw new Error("new RTCRtpReceiver not");

            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters,
              rtpReceiver
            });

            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);
          const {
            mid,
            rtpParameters
          } = this._mapRecvLocalIdInfo.get(localId) || {};

          this._mapRecvLocalIdInfo.delete(localId);

          this._remoteSdp.planBStopReceiving({
            mid,
            offerRtpParameters: rtpParameters
          });

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const {
            rtpReceiver
          } = this._mapRecvLocalIdInfo.get(localId) || {};
          if (!rtpReceiver) throw new Error("associated RTCRtpReceiver not found");
          return rtpReceiver.getStats();
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Chrome67 = Chrome67;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Chrome55.js


var require_Chrome55 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Chrome55.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chrome55 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpPlanBUtils = __importStar(require_planBUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("Chrome55");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Chrome55 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._sendStream = new MediaStream();
        this._mapSendLocalIdTrack = /* @__PURE__ */new Map();
        this._nextSendLocalId = 0;
        this._mapRecvLocalIdInfo = /* @__PURE__ */new Map();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Chrome55();
      }

      get name() {
        return "Chrome55";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });

          try {
            const offer = yield pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          planB: true
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require",
          sdpSemantics: "plan-b"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }

          this._sendStream.addTrack(track);

          this._pc.addStream(this._sendStream);

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find(m => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find(m => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;

          this._mapSendLocalIdTrack.set(localId, track);

          return {
            localId,
            rtpParameters: sendingRtpParameters
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const track = this._mapSendLocalIdTrack.get(localId);

          if (!track) throw new Error("track not found");

          this._mapSendLocalIdTrack.delete(localId);

          this._sendStream.removeTrack(track);

          this._pc.addStream(this._sendStream);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);

          try {
            yield this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }

            throw error;
          }

          if (this._pc.signalingState === "stable") return;
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError(" not implemented");
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not supported");
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            const streamId = rtpParameters.rtcp.cname;

            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              kind,
              rtpParameters
            } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              kind,
              trackId,
              rtpParameters
            } = options;
            const mid = kind;
            const localId = trackId;
            const streamId = rtpParameters.rtcp.cname;

            const stream = this._pc.getRemoteStreams().find(s => s.id === streamId);

            const track = stream.getTrackById(localId);
            if (!track) throw new Error("remote track not found");

            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters
            });

            results.push({
              localId,
              track
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);
          const {
            mid,
            rtpParameters
          } = this._mapRecvLocalIdInfo.get(localId) || {};

          this._mapRecvLocalIdInfo.delete(localId);

          this._remoteSdp.planBStopReceiving({
            mid,
            offerRtpParameters: rtpParameters
          });

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Chrome55 = Chrome55;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Firefox60.js


var require_Firefox60 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Firefox60.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Firefox60 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("Firefox60");
    var SCTP_NUM_STREAMS = {
      OS: 16,
      MIS: 2048
    };
    var Firefox60 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._mapMidTransceiver = /* @__PURE__ */new Map();
        this._sendStream = new MediaStream();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Firefox60();
      }

      get name() {
        return "Firefox60";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
          });
          const canvas = document.createElement("canvas");
          canvas.getContext("2d");
          const fakeStream = canvas.captureStream();
          const fakeVideoTrack = fakeStream.getVideoTracks()[0];

          try {
            pc.addTransceiver("audio", {
              direction: "sendrecv"
            });
            const videoTransceiver = pc.addTransceiver(fakeVideoTrack, {
              direction: "sendrecv"
            });
            const parameters = videoTransceiver.sender.getParameters();
            const encodings = [{
              rid: "r0",
              maxBitrate: 1e5
            }, {
              rid: "r1",
              maxBitrate: 5e5
            }];
            parameters.encodings = encodings;
            yield videoTransceiver.sender.setParameters(parameters);
            const offer = yield pc.createOffer();

            try {
              canvas.remove();
            } catch (error) {}

            try {
              fakeVideoTrack.stop();
            } catch (error) {}

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              canvas.remove();
            } catch (error2) {}

            try {
              fakeVideoTrack.stop();
            } catch (error2) {}

            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };
        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not supported");
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (encodings) {
            encodings = utils.clone(encodings, []);

            if (encodings.length > 1) {
              encodings.forEach((encoding, idx) => {
                encoding.rid = `r${idx}`;
              });
              encodings.reverse();
            }
          }

          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);

          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [this._sendStream]
          });

          if (encodings) {
            const parameters = transceiver.sender.getParameters();
            parameters.encodings = encodings;
            yield transceiver.sender.setParameters(parameters);
          }

          const offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          if (!this._transportReady) yield this._setupTransport({
            localDtlsRole: "client",
            localSdpObject
          });
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const offerMediaObject = localSdpObject.media[localSdpObject.media.length - 1];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });

          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            const newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings.reverse();
          }

          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.set(localId, transceiver);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          logger.debug("stopSending() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated transceiver not found");
          transceiver.sender.replaceTrack(null);

          this._pc.removeTrack(transceiver.sender);

          this._remoteSdp.disableMediaSection(transceiver.mid);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          yield transceiver.sender.replaceTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated transceiver not found");
          const parameters = transceiver.sender.getParameters();
          spatialLayer = parameters.encodings.length - 1 - spatialLayer;
          parameters.encodings.forEach((encoding, idx) => {
            if (idx >= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.sender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");
            if (!this._transportReady) yield this._setupTransport({
              localDtlsRole: "client",
              localSdpObject
            });
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const results = [];
          const mapLocalId = /* @__PURE__ */new Map();

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid || String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);

            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              trackId,
              rtpParameters
            } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
            answer = {
              type: "answer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          if (!this._transportReady) yield this._setupTransport({
            localDtlsRole: "client",
            localSdpObject
          });
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              trackId
            } = options;
            const localId = mapLocalId.get(trackId);

            const transceiver = this._pc.getTransceivers().find(t2 => t2.mid === localId);

            if (!transceiver) throw new Error("new RTCRtpTransceiver not found");

            this._mapMidTransceiver.set(localId, transceiver);

            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("pauseReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "inactive";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("resumeReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "recvonly";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.receiver.getStats();
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Firefox60 = Firefox60;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Safari12.js


var require_Safari12 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Safari12.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Safari12 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("Safari12");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Safari12 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._mapMidTransceiver = /* @__PURE__ */new Map();
        this._sendStream = new MediaStream();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Safari12();
      }

      get name() {
        return "Safari12";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
          });

          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = yield pc.createOffer();

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);

          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();

          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [this._sendStream]
          });

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (encodings && encodings.length > 1) {
            logger.debug("send() | enabling legacy simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
            offerMediaObject
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.set(localId, transceiver);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.sender.replaceTrack(null);

          this._pc.removeTrack(transceiver.sender);

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          yield transceiver.sender.replaceTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield transceiver.sender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.sender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];
          const mapLocalId = /* @__PURE__ */new Map();

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid || String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);

            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              trackId,
              rtpParameters
            } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              trackId
            } = options;
            const localId = mapLocalId.get(trackId);

            const transceiver = this._pc.getTransceivers().find(t2 => t2.mid === localId);

            if (!transceiver) throw new Error("new RTCRtpTransceiver not found");

            this._mapMidTransceiver.set(localId, transceiver);

            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");

          this._remoteSdp.closeMediaSection(transceiver.mid);

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          this._mapMidTransceiver.delete(localId);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("pauseReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "inactive";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("resumeReceiving() [localId:%s]", localId);

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          transceiver.direction = "recvonly";
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const transceiver = this._mapMidTransceiver.get(localId);

          if (!transceiver) throw new Error("associated RTCRtpTransceiver not found");
          return transceiver.receiver.getStats();
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Safari12 = Safari12;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Safari11.js


var require_Safari11 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Safari11.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Safari11 = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpPlanBUtils = __importStar(require_planBUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("Safari11");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var Safari11 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._sendStream = new MediaStream();
        this._mapSendLocalIdRtpSender = /* @__PURE__ */new Map();
        this._nextSendLocalId = 0;
        this._mapRecvLocalIdInfo = /* @__PURE__ */new Map();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Safari11();
      }

      get name() {
        return "Safari11";
      }

      close() {
        logger.debug("close()");

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });

          try {
            const offer = yield pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          planB: true
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }

          this._sendStream.addTrack(track);

          this._pc.addTrack(track, this._sendStream);

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find(m => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find(m => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;

          const rtpSender = this._pc.getSenders().find(s => s.track === track);

          this._mapSendLocalIdRtpSender.set(localId, rtpSender);

          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          if (rtpSender.track) this._sendStream.removeTrack(rtpSender.track);

          this._mapSendLocalIdRtpSender.delete(localId);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);

          try {
            yield this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }

            throw error;
          }

          if (this._pc.signalingState === "stable") return;
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const oldTrack = rtpSender.track;
          yield rtpSender.replaceTrack(track);
          if (oldTrack) this._sendStream.removeTrack(oldTrack);
          if (track) this._sendStream.addTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);

          if (!rtpSender) throw new Error("associated RTCRtpSender not found");
          return rtpSender.getStats();
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;

            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: rtpParameters.rtcp.cname,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              kind,
              rtpParameters
            } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              kind,
              trackId,
              rtpParameters
            } = options;
            const mid = kind;
            const localId = trackId;

            const rtpReceiver = this._pc.getReceivers().find(r2 => r2.track && r2.track.id === localId);

            if (!rtpReceiver) throw new Error("new RTCRtpReceiver not");

            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters,
              rtpReceiver
            });

            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);
          const {
            mid,
            rtpParameters
          } = this._mapRecvLocalIdInfo.get(localId) || {};

          this._mapRecvLocalIdInfo.delete(localId);

          this._remoteSdp.planBStopReceiving({
            mid,
            offerRtpParameters: rtpParameters
          });

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          const {
            rtpReceiver
          } = this._mapRecvLocalIdInfo.get(localId) || {};
          if (!rtpReceiver) throw new Error("associated RTCRtpReceiver not found");
          return rtpReceiver.getStats();
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.Safari11 = Safari11;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/ortc/edgeUtils.js


var require_edgeUtils = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/ortc/edgeUtils.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mangleRtpParameters = exports.getCapabilities = void 0;

    var utils = __importStar(require_utils2());

    function getCapabilities() {
      const nativeCaps = RTCRtpReceiver.getCapabilities();
      const caps = utils.clone(nativeCaps, {});

      for (const codec of caps.codecs) {
        codec.channels = codec.numChannels;
        delete codec.numChannels;
        codec.mimeType = codec.mimeType || `${codec.kind}/${codec.name}`;

        if (codec.parameters) {
          const parameters = codec.parameters;
          if (parameters.apt) parameters.apt = Number(parameters.apt);
          if (parameters["packetization-mode"]) parameters["packetization-mode"] = Number(parameters["packetization-mode"]);
        }

        for (const feedback of codec.rtcpFeedback || []) {
          if (!feedback.parameter) feedback.parameter = "";
        }
      }

      return caps;
    }

    exports.getCapabilities = getCapabilities;

    function mangleRtpParameters(rtpParameters) {
      const params = utils.clone(rtpParameters, {});

      if (params.mid) {
        params.muxId = params.mid;
        delete params.mid;
      }

      for (const codec of params.codecs) {
        if (codec.channels) {
          codec.numChannels = codec.channels;
          delete codec.channels;
        }

        if (codec.mimeType && !codec.name) codec.name = codec.mimeType.split("/")[1];
        delete codec.mimeType;
      }

      return params;
    }

    exports.mangleRtpParameters = mangleRtpParameters;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/Edge11.js


var require_Edge11 = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/Edge11.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Edge11 = void 0;
    var Logger_1 = require_Logger();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var edgeUtils = __importStar(require_edgeUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var logger = new Logger_1.Logger("Edge11");
    var Edge11 = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._rtpSenders = /* @__PURE__ */new Map();
        this._rtpReceivers = /* @__PURE__ */new Map();
        this._nextSendLocalId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new Edge11();
      }

      get name() {
        return "Edge11";
      }

      close() {
        logger.debug("close()");

        try {
          this._iceGatherer.close();
        } catch (error) {}

        try {
          this._iceTransport.stop();
        } catch (error) {}

        try {
          this._dtlsTransport.stop();
        } catch (error) {}

        for (const rtpSender of this._rtpSenders.values()) {
          try {
            rtpSender.stop();
          } catch (error) {}
        }

        for (const rtpReceiver of this._rtpReceivers.values()) {
          try {
            rtpReceiver.stop();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          return edgeUtils.getCapabilities();
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: {
              OS: 0,
              MIS: 0
            }
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._remoteIceParameters = iceParameters;
        this._remoteIceCandidates = iceCandidates;
        this._remoteDtlsParameters = dtlsParameters;
        this._cname = `CNAME-${utils.generateRandomNumber()}`;

        this._setIceGatherer({
          iceServers,
          iceTransportPolicy
        });

        this._setIceTransport();

        this._setDtlsTransport();
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not supported");
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");
          this._remoteIceParameters = iceParameters;
          if (!this._transportReady) return;
          logger.debug("restartIce() | calling iceTransport.start()");

          this._iceTransport.start(this._iceGatherer, iceParameters, "controlling");

          for (const candidate of this._remoteIceCandidates) {
            this._iceTransport.addRemoteCandidate(candidate);
          }

          this._iceTransport.addRemoteCandidate({});
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._iceTransport.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (!this._transportReady) yield this._setupTransport({
            localDtlsRole: "server"
          });
          logger.debug("send() | calling new RTCRtpSender()");
          const rtpSender = new RTCRtpSender(track, this._dtlsTransport);
          const rtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          rtpParameters.codecs = ortc.reduceCodecs(rtpParameters.codecs, codec);
          const useRtx = rtpParameters.codecs.some(_codec => /.+\/rtx$/i.test(_codec.mimeType));
          if (!encodings) encodings = [{}];

          for (const encoding of encodings) {
            encoding.ssrc = utils.generateRandomNumber();
            if (useRtx) encoding.rtx = {
              ssrc: utils.generateRandomNumber()
            };
          }

          rtpParameters.encodings = encodings;
          rtpParameters.rtcp = {
            cname: this._cname,
            reducedSize: true,
            mux: true
          };
          const edgeRtpParameters = edgeUtils.mangleRtpParameters(rtpParameters);
          logger.debug("send() | calling rtpSender.send() [params:%o]", edgeRtpParameters);
          yield rtpSender.send(edgeRtpParameters);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;

          this._rtpSenders.set(localId, rtpSender);

          return {
            localId,
            rtpParameters,
            rtpSender
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          logger.debug("stopSending() [localId:%s]", localId);

          const rtpSender = this._rtpSenders.get(localId);

          if (!rtpSender) throw new Error("RTCRtpSender not found");

          this._rtpSenders.delete(localId);

          try {
            logger.debug("stopSending() | calling rtpSender.stop()");
            rtpSender.stop();
          } catch (error) {
            logger.warn("stopSending() | rtpSender.stop() failed:%o", error);
            throw error;
          }
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }

          const rtpSender = this._rtpSenders.get(localId);

          if (!rtpSender) throw new Error("RTCRtpSender not found");
          rtpSender.setTrack(track);
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);

          const rtpSender = this._rtpSenders.get(localId);

          if (!rtpSender) throw new Error("RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) encoding.active = true;else encoding.active = false;
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);

          const rtpSender = this._rtpSenders.get(localId);

          if (!rtpSender) throw new Error("RTCRtpSender not found");
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = __spreadValues(__spreadValues({}, encoding), params);
          });
          yield rtpSender.setParameters(parameters);
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          const rtpSender = this._rtpSenders.get(localId);

          if (!rtpSender) throw new Error("RTCRtpSender not found");
          return rtpSender.getStats();
        });
      }

      sendDataChannel(options) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          const results = [];

          for (const options of optionsList) {
            const {
              trackId,
              kind
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
          }

          if (!this._transportReady) yield this._setupTransport({
            localDtlsRole: "server"
          });

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() | calling new RTCRtpReceiver()");
            const rtpReceiver = new RTCRtpReceiver(this._dtlsTransport, kind);
            rtpReceiver.addEventListener("error", event => {
              logger.error('rtpReceiver "error" event [event:%o]', event);
            });
            const edgeRtpParameters = edgeUtils.mangleRtpParameters(rtpParameters);
            logger.debug("receive() | calling rtpReceiver.receive() [params:%o]", edgeRtpParameters);
            yield rtpReceiver.receive(edgeRtpParameters);
            const localId = trackId;

            this._rtpReceivers.set(localId, rtpReceiver);

            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          logger.debug("stopReceiving() [localId:%s]", localId);

          const rtpReceiver = this._rtpReceivers.get(localId);

          if (!rtpReceiver) throw new Error("RTCRtpReceiver not found");

          this._rtpReceivers.delete(localId);

          try {
            logger.debug("stopReceiving() | calling rtpReceiver.stop()");
            rtpReceiver.stop();
          } catch (error) {
            logger.warn("stopReceiving() | rtpReceiver.stop() failed:%o", error);
          }
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          const rtpReceiver = this._rtpReceivers.get(localId);

          if (!rtpReceiver) throw new Error("RTCRtpReceiver not found");
          return rtpReceiver.getStats();
        });
      }

      receiveDataChannel(options) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      _setIceGatherer({
        iceServers,
        iceTransportPolicy
      }) {
        const iceGatherer = new RTCIceGatherer({
          iceServers: iceServers || [],
          gatherPolicy: iceTransportPolicy || "all"
        });
        iceGatherer.addEventListener("error", event => {
          logger.error('iceGatherer "error" event [event:%o]', event);
        });

        try {
          iceGatherer.gather();
        } catch (error) {
          logger.debug("_setIceGatherer() | iceGatherer.gather() failed: %s", error.toString());
        }

        this._iceGatherer = iceGatherer;
      }

      _setIceTransport() {
        const iceTransport = new RTCIceTransport(this._iceGatherer);
        iceTransport.addEventListener("statechange", () => {
          switch (iceTransport.state) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
        iceTransport.addEventListener("icestatechange", () => {
          switch (iceTransport.state) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
        iceTransport.addEventListener("candidatepairchange", event => {
          logger.debug('iceTransport "candidatepairchange" event [pair:%o]', event.pair);
        });
        this._iceTransport = iceTransport;
      }

      _setDtlsTransport() {
        const dtlsTransport = new RTCDtlsTransport(this._iceTransport);
        dtlsTransport.addEventListener("statechange", () => {
          logger.debug('dtlsTransport "statechange" event [state:%s]', dtlsTransport.state);
        });
        dtlsTransport.addEventListener("dtlsstatechange", () => {
          logger.debug('dtlsTransport "dtlsstatechange" event [state:%s]', dtlsTransport.state);
          if (dtlsTransport.state === "closed") this.emit("@connectionstatechange", "closed");
        });
        dtlsTransport.addEventListener("error", event => {
          logger.error('dtlsTransport "error" event [event:%o]', event);
        });
        this._dtlsTransport = dtlsTransport;
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole
        }) {
          logger.debug("_setupTransport()");

          const dtlsParameters = this._dtlsTransport.getLocalParameters();

          dtlsParameters.role = localDtlsRole;
          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });

          this._iceTransport.start(this._iceGatherer, this._remoteIceParameters, "controlling");

          for (const candidate of this._remoteIceCandidates) {
            this._iceTransport.addRemoteCandidate(candidate);
          }

          this._iceTransport.addRemoteCandidate({});

          this._remoteDtlsParameters.fingerprints = this._remoteDtlsParameters.fingerprints.filter(fingerprint => {
            return fingerprint.algorithm === "sha-256" || fingerprint.algorithm === "sha-384" || fingerprint.algorithm === "sha-512";
          });

          this._dtlsTransport.start(this._remoteDtlsParameters);

          this._transportReady = true;
        });
      }

    };
    exports.Edge11 = Edge11;
  }

}); // ../../node_modules/mediasoup-client/lib/handlers/ReactNative.js


var require_ReactNative = __commonJS({
  "../../node_modules/mediasoup-client/lib/handlers/ReactNative.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactNative = void 0;

    var sdpTransform3 = __importStar(require_lib());

    var Logger_1 = require_Logger();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var sdpCommonUtils = __importStar(require_commonUtils());

    var sdpPlanBUtils = __importStar(require_planBUtils());

    var HandlerInterface_1 = require_HandlerInterface();
    var RemoteSdp_1 = require_RemoteSdp();
    var logger = new Logger_1.Logger("ReactNative");
    var SCTP_NUM_STREAMS = {
      OS: 1024,
      MIS: 1024
    };
    var ReactNative = class extends HandlerInterface_1.HandlerInterface {
      constructor() {
        super();
        this._sendStream = new MediaStream();
        this._mapSendLocalIdTrack = /* @__PURE__ */new Map();
        this._nextSendLocalId = 0;
        this._mapRecvLocalIdInfo = /* @__PURE__ */new Map();
        this._hasDataChannelMediaSection = false;
        this._nextSendSctpStreamId = 0;
        this._transportReady = false;
      }

      static createFactory() {
        return () => new ReactNative();
      }

      get name() {
        return "ReactNative";
      }

      close() {
        logger.debug("close()");

        this._sendStream.release(false);

        if (this._pc) {
          try {
            this._pc.close();
          } catch (error) {}
        }
      }

      getNativeRtpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });

          try {
            const offer = yield pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });

            try {
              pc.close();
            } catch (error) {}

            const sdpObject = sdpTransform3.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {}

            throw error;
          }
        });
      }

      getNativeSctpCapabilities() {
        return __async(this, null, function* () {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        });
      }

      run({
        direction,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        extendedRtpCapabilities
      }) {
        logger.debug("run()");
        this._direction = direction;
        this._remoteSdp = new RemoteSdp_1.RemoteSdp({
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          planB: true
        });
        this._sendingRtpParametersByKind = {
          audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
        };
        this._sendingRemoteRtpParametersByKind = {
          audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
          video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
        };

        if (dtlsParameters.role && dtlsParameters.role !== "auto") {
          this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
        }

        this._pc = new RTCPeerConnection(__spreadValues({
          iceServers: iceServers || [],
          iceTransportPolicy: iceTransportPolicy || "all",
          bundlePolicy: "max-bundle",
          rtcpMuxPolicy: "require",
          sdpSemantics: "plan-b"
        }, additionalSettings), proprietaryConstraints);

        this._pc.addEventListener("iceconnectionstatechange", () => {
          switch (this._pc.iceConnectionState) {
            case "checking":
              this.emit("@connectionstatechange", "connecting");
              break;

            case "connected":
            case "completed":
              this.emit("@connectionstatechange", "connected");
              break;

            case "failed":
              this.emit("@connectionstatechange", "failed");
              break;

            case "disconnected":
              this.emit("@connectionstatechange", "disconnected");
              break;

            case "closed":
              this.emit("@connectionstatechange", "closed");
              break;
          }
        });
      }

      updateIceServers(iceServers) {
        return __async(this, null, function* () {
          logger.debug("updateIceServers()");

          const configuration = this._pc.getConfiguration();

          configuration.iceServers = iceServers;

          this._pc.setConfiguration(configuration);
        });
      }

      restartIce(iceParameters) {
        return __async(this, null, function* () {
          logger.debug("restartIce()");

          this._remoteSdp.updateIceParameters(iceParameters);

          if (!this._transportReady) return;

          if (this._direction === "send") {
            const offer = yield this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
          }
        });
      }

      getTransportStats() {
        return __async(this, null, function* () {
          return this._pc.getStats();
        });
      }

      send(_0) {
        return __async(this, arguments, function* ({
          track,
          encodings,
          codecOptions,
          codec
        }) {
          var _a2;

          this._assertSendDirection();

          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);

          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }

          this._sendStream.addTrack(track);

          this._pc.addStream(this._sendStream);

          let offer = yield this._pc.createOffer();
          let localSdpObject = sdpTransform3.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind], {});
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind], {});
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform3.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find(m => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform3.write(localSdpObject)
            };
          }

          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          yield this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find(m => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });

          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
            }
          }

          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "S1T3";
            }
          }

          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });

          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;

          this._mapSendLocalIdTrack.set(localId, track);

          return {
            localId,
            rtpParameters: sendingRtpParameters
          };
        });
      }

      stopSending(localId) {
        return __async(this, null, function* () {
          this._assertSendDirection();

          logger.debug("stopSending() [localId:%s]", localId);

          const track = this._mapSendLocalIdTrack.get(localId);

          if (!track) throw new Error("track not found");

          this._mapSendLocalIdTrack.delete(localId);

          this._sendStream.removeTrack(track);

          this._pc.addStream(this._sendStream);

          const offer = yield this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);

          try {
            yield this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }

            throw error;
          }

          if (this._pc.signalingState === "stable") return;
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          yield this._pc.setRemoteDescription(answer);
        });
      }

      replaceTrack(localId, track) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      setMaxSpatialLayer(localId, spatialLayer) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      setRtpEncodingParameters(localId, params) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      getSenderStats(localId) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      sendDataChannel(_0) {
        return __async(this, arguments, function* ({
          ordered,
          maxPacketLifeTime,
          maxRetransmits,
          label,
          protocol
        }) {
          var _a2;

          this._assertSendDirection();

          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("sendDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;

          if (!this._hasDataChannelMediaSection) {
            const offer = yield this._pc.createOffer();
            const localSdpObject = sdpTransform3.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find(m => m.type === "application");

            if (!this._transportReady) {
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            yield this._pc.setLocalDescription(offer);

            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });

            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        });
      }

      receive(optionsList) {
        return __async(this, null, function* () {
          var _a2;

          this._assertRecvDirection();

          const results = [];
          const mapStreamId = /* @__PURE__ */new Map();

          for (const options of optionsList) {
            const {
              trackId,
              kind,
              rtpParameters
            } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            let streamId = rtpParameters.rtcp.cname;
            logger.debug("receive() | forcing a random remote streamId to avoid well known bug in react-native-webrtc");
            streamId += `-hack-${utils.generateRandomNumber()}`;
            mapStreamId.set(trackId, streamId);

            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId,
              trackId
            });
          }

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          let answer = yield this._pc.createAnswer();
          const localSdpObject = sdpTransform3.parse(answer.sdp);

          for (const options of optionsList) {
            const {
              kind,
              rtpParameters
            } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find(m => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }

          answer = {
            type: "answer",
            sdp: sdpTransform3.write(localSdpObject)
          };

          if (!this._transportReady) {
            yield this._setupTransport({
              localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
              localSdpObject
            });
          }

          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);

          for (const options of optionsList) {
            const {
              kind,
              trackId,
              rtpParameters
            } = options;
            const localId = trackId;
            const mid = kind;
            const streamId = mapStreamId.get(trackId);

            const stream = this._pc.getRemoteStreams().find(s => s.id === streamId);

            const track = stream.getTrackById(localId);
            if (!track) throw new Error("remote track not found");

            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters
            });

            results.push({
              localId,
              track
            });
          }

          return results;
        });
      }

      stopReceiving(localId) {
        return __async(this, null, function* () {
          this._assertRecvDirection();

          logger.debug("stopReceiving() [localId:%s]", localId);
          const {
            mid,
            rtpParameters
          } = this._mapRecvLocalIdInfo.get(localId) || {};

          this._mapRecvLocalIdInfo.delete(localId);

          this._remoteSdp.planBStopReceiving({
            mid,
            offerRtpParameters: rtpParameters
          });

          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          yield this._pc.setRemoteDescription(offer);
          const answer = yield this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          yield this._pc.setLocalDescription(answer);
        });
      }

      pauseReceiving(localId) {
        return __async(this, null, function* () {});
      }

      resumeReceiving(localId) {
        return __async(this, null, function* () {});
      }

      getReceiverStats(localId) {
        return __async(this, null, function* () {
          throw new errors_1.UnsupportedError("not implemented");
        });
      }

      receiveDataChannel(_0) {
        return __async(this, arguments, function* ({
          sctpStreamParameters,
          label,
          protocol
        }) {
          var _a2;

          this._assertRecvDirection();

          const {
            streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits
          } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol
          };
          logger.debug("receiveDataChannel() [options:%o]", options);

          const dataChannel = this._pc.createDataChannel(label, options);

          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });

            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            yield this._pc.setRemoteDescription(offer);
            const answer = yield this._pc.createAnswer();

            if (!this._transportReady) {
              const localSdpObject = sdpTransform3.parse(answer.sdp);
              yield this._setupTransport({
                localDtlsRole: (_a2 = this._forcedLocalDtlsRole) !== null && _a2 !== void 0 ? _a2 : "client",
                localSdpObject
              });
            }

            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            yield this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }

          return {
            dataChannel
          };
        });
      }

      _setupTransport(_0) {
        return __async(this, arguments, function* ({
          localDtlsRole,
          localSdpObject
        }) {
          if (!localSdpObject) localSdpObject = sdpTransform3.parse(this._pc.localDescription.sdp);
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;

          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");

          yield this.safeEmitAsPromise("@connect", {
            dtlsParameters
          });
          this._transportReady = true;
        });
      }

      _assertSendDirection() {
        if (this._direction !== "send") {
          throw new Error('method can just be called for handlers with "send" direction');
        }
      }

      _assertRecvDirection() {
        if (this._direction !== "recv") {
          throw new Error('method can just be called for handlers with "recv" direction');
        }
      }

    };
    exports.ReactNative = ReactNative;
  }

}); // ../../node_modules/mediasoup-client/lib/Device.js


var require_Device = __commonJS({
  "../../node_modules/mediasoup-client/lib/Device.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    var __importDefault = exports && exports.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Device = exports.detectDevice = void 0;

    var bowser_1 = __importDefault(require_es5());

    var Logger_1 = require_Logger();
    var EnhancedEventEmitter_1 = require_EnhancedEventEmitter();
    var errors_1 = require_errors();

    var utils = __importStar(require_utils2());

    var ortc = __importStar(require_ortc());

    var Transport_1 = require_Transport();
    var Chrome74_1 = require_Chrome74();
    var Chrome70_1 = require_Chrome70();
    var Chrome67_1 = require_Chrome67();
    var Chrome55_1 = require_Chrome55();
    var Firefox60_1 = require_Firefox60();
    var Safari12_1 = require_Safari12();
    var Safari11_1 = require_Safari11();
    var Edge11_1 = require_Edge11();
    var ReactNative_1 = require_ReactNative();
    var logger = new Logger_1.Logger("Device");

    function detectDevice2() {
      if (typeof navigator === "object" && navigator.product === "ReactNative") {
        if (typeof RTCPeerConnection === "undefined") {
          logger.warn("this._detectDevice() | unsupported ReactNative without RTCPeerConnection");
          return void 0;
        }

        logger.debug("this._detectDevice() | ReactNative handler chosen");
        return "ReactNative";
      } else if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
        const ua = navigator.userAgent;
        const browser = bowser_1.default.getParser(ua);
        const engine = browser.getEngine();

        if (browser.satisfies({
          chrome: ">=74",
          chromium: ">=74",
          "microsoft edge": ">=88"
        })) {
          return "Chrome74";
        } else if (browser.satisfies({
          chrome: ">=70",
          chromium: ">=70"
        })) {
          return "Chrome70";
        } else if (browser.satisfies({
          chrome: ">=67",
          chromium: ">=67"
        })) {
          return "Chrome67";
        } else if (browser.satisfies({
          chrome: ">=55",
          chromium: ">=55"
        })) {
          return "Chrome55";
        } else if (browser.satisfies({
          firefox: ">=60"
        })) {
          return "Firefox60";
        } else if (browser.satisfies({
          ios: {
            OS: ">=14.3",
            firefox: ">=30.0"
          }
        })) {
          return "Safari12";
        } else if (browser.satisfies({
          safari: ">=12.0"
        }) && typeof RTCRtpTransceiver !== "undefined" && RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")) {
          return "Safari12";
        } else if (browser.satisfies({
          safari: ">=11"
        })) {
          return "Safari11";
        } else if (browser.satisfies({
          "microsoft edge": ">=11"
        }) && browser.satisfies({
          "microsoft edge": "<=18"
        })) {
          return "Edge11";
        } else if (engine.name && engine.name.toLowerCase() === "blink") {
          const match = ua.match(/(?:(?:Chrome|Chromium))[ /](\w+)/i);

          if (match) {
            const version = Number(match[1]);

            if (version >= 74) {
              return "Chrome74";
            } else if (version >= 70) {
              return "Chrome70";
            } else if (version >= 67) {
              return "Chrome67";
            } else {
              return "Chrome55";
            }
          } else {
            return "Chrome74";
          }
        } else {
          logger.warn("this._detectDevice() | browser not supported [name:%s, version:%s]", browser.getBrowserName(), browser.getBrowserVersion());
          return void 0;
        }
      } else {
        logger.warn("this._detectDevice() | unknown device");
        return void 0;
      }
    }

    exports.detectDevice = detectDevice2;
    var Device3 = class {
      constructor({
        handlerName,
        handlerFactory,
        Handler
      } = {}) {
        this._loaded = false;
        this._observer = new EnhancedEventEmitter_1.EnhancedEventEmitter();
        logger.debug("constructor()");

        if (Handler) {
          logger.warn("constructor() | Handler option is DEPRECATED, use handlerName or handlerFactory instead");
          if (typeof Handler === "string") handlerName = Handler;else throw new TypeError("non string Handler option no longer supported, use handlerFactory instead");
        }

        if (handlerName && handlerFactory) {
          throw new TypeError("just one of handlerName or handlerInterface can be given");
        }

        if (handlerFactory) {
          this._handlerFactory = handlerFactory;
        } else {
          if (handlerName) {
            logger.debug("constructor() | handler given: %s", handlerName);
          } else {
            handlerName = detectDevice2();
            if (handlerName) logger.debug("constructor() | detected handler: %s", handlerName);else throw new errors_1.UnsupportedError("device not supported");
          }

          switch (handlerName) {
            case "Chrome74":
              this._handlerFactory = Chrome74_1.Chrome74.createFactory();
              break;

            case "Chrome70":
              this._handlerFactory = Chrome70_1.Chrome70.createFactory();
              break;

            case "Chrome67":
              this._handlerFactory = Chrome67_1.Chrome67.createFactory();
              break;

            case "Chrome55":
              this._handlerFactory = Chrome55_1.Chrome55.createFactory();
              break;

            case "Firefox60":
              this._handlerFactory = Firefox60_1.Firefox60.createFactory();
              break;

            case "Safari12":
              this._handlerFactory = Safari12_1.Safari12.createFactory();
              break;

            case "Safari11":
              this._handlerFactory = Safari11_1.Safari11.createFactory();
              break;

            case "Edge11":
              this._handlerFactory = Edge11_1.Edge11.createFactory();
              break;

            case "ReactNative":
              this._handlerFactory = ReactNative_1.ReactNative.createFactory();
              break;

            default:
              throw new TypeError(`unknown handlerName "${handlerName}"`);
          }
        }

        const handler = this._handlerFactory();

        this._handlerName = handler.name;
        handler.close();
        this._extendedRtpCapabilities = void 0;
        this._recvRtpCapabilities = void 0;
        this._canProduceByKind = {
          audio: false,
          video: false
        };
        this._sctpCapabilities = void 0;
      }

      get handlerName() {
        return this._handlerName;
      }

      get loaded() {
        return this._loaded;
      }

      get rtpCapabilities() {
        if (!this._loaded) throw new errors_1.InvalidStateError("not loaded");
        return this._recvRtpCapabilities;
      }

      get sctpCapabilities() {
        if (!this._loaded) throw new errors_1.InvalidStateError("not loaded");
        return this._sctpCapabilities;
      }

      get observer() {
        return this._observer;
      }

      load(_0) {
        return __async(this, arguments, function* ({
          routerRtpCapabilities
        }) {
          logger.debug("load() [routerRtpCapabilities:%o]", routerRtpCapabilities);
          routerRtpCapabilities = utils.clone(routerRtpCapabilities, void 0);
          let handler;

          try {
            if (this._loaded) throw new errors_1.InvalidStateError("already loaded");
            ortc.validateRtpCapabilities(routerRtpCapabilities);
            handler = this._handlerFactory();
            const nativeRtpCapabilities = yield handler.getNativeRtpCapabilities();
            logger.debug("load() | got native RTP capabilities:%o", nativeRtpCapabilities);
            ortc.validateRtpCapabilities(nativeRtpCapabilities);
            this._extendedRtpCapabilities = ortc.getExtendedRtpCapabilities(nativeRtpCapabilities, routerRtpCapabilities);
            logger.debug("load() | got extended RTP capabilities:%o", this._extendedRtpCapabilities);
            this._canProduceByKind.audio = ortc.canSend("audio", this._extendedRtpCapabilities);
            this._canProduceByKind.video = ortc.canSend("video", this._extendedRtpCapabilities);
            this._recvRtpCapabilities = ortc.getRecvRtpCapabilities(this._extendedRtpCapabilities);
            ortc.validateRtpCapabilities(this._recvRtpCapabilities);
            logger.debug("load() | got receiving RTP capabilities:%o", this._recvRtpCapabilities);
            this._sctpCapabilities = yield handler.getNativeSctpCapabilities();
            logger.debug("load() | got native SCTP capabilities:%o", this._sctpCapabilities);
            ortc.validateSctpCapabilities(this._sctpCapabilities);
            logger.debug("load() succeeded");
            this._loaded = true;
            handler.close();
          } catch (error) {
            if (handler) handler.close();
            throw error;
          }
        });
      }

      canProduce(kind) {
        if (!this._loaded) throw new errors_1.InvalidStateError("not loaded");else if (kind !== "audio" && kind !== "video") throw new TypeError(`invalid kind "${kind}"`);
        return this._canProduceByKind[kind];
      }

      createSendTransport({
        id,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        appData = {}
      }) {
        logger.debug("createSendTransport()");
        return this._createTransport({
          direction: "send",
          id,
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          iceServers,
          iceTransportPolicy,
          additionalSettings,
          proprietaryConstraints,
          appData
        });
      }

      createRecvTransport({
        id,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        appData = {}
      }) {
        logger.debug("createRecvTransport()");
        return this._createTransport({
          direction: "recv",
          id,
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          iceServers,
          iceTransportPolicy,
          additionalSettings,
          proprietaryConstraints,
          appData
        });
      }

      _createTransport({
        direction,
        id,
        iceParameters,
        iceCandidates,
        dtlsParameters,
        sctpParameters,
        iceServers,
        iceTransportPolicy,
        additionalSettings,
        proprietaryConstraints,
        appData = {}
      }) {
        if (!this._loaded) throw new errors_1.InvalidStateError("not loaded");else if (typeof id !== "string") throw new TypeError("missing id");else if (typeof iceParameters !== "object") throw new TypeError("missing iceParameters");else if (!Array.isArray(iceCandidates)) throw new TypeError("missing iceCandidates");else if (typeof dtlsParameters !== "object") throw new TypeError("missing dtlsParameters");else if (sctpParameters && typeof sctpParameters !== "object") throw new TypeError("wrong sctpParameters");else if (appData && typeof appData !== "object") throw new TypeError("if given, appData must be an object");
        const transport = new Transport_1.Transport({
          direction,
          id,
          iceParameters,
          iceCandidates,
          dtlsParameters,
          sctpParameters,
          iceServers,
          iceTransportPolicy,
          additionalSettings,
          proprietaryConstraints,
          appData,
          handlerFactory: this._handlerFactory,
          extendedRtpCapabilities: this._extendedRtpCapabilities,
          canProduceByKind: this._canProduceByKind
        });

        this._observer.safeEmit("newtransport", transport);

        return transport;
      }

    };
    exports.Device = Device3;
  }

}); // ../../node_modules/mediasoup-client/lib/RtpParameters.js


var require_RtpParameters = __commonJS({
  "../../node_modules/mediasoup-client/lib/RtpParameters.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }

}); // ../../node_modules/mediasoup-client/lib/SctpParameters.js


var require_SctpParameters = __commonJS({
  "../../node_modules/mediasoup-client/lib/SctpParameters.js"(exports) {
    "use strict";

    init_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }

}); // ../../node_modules/mediasoup-client/lib/types.js


var require_types = __commonJS({
  "../../node_modules/mediasoup-client/lib/types.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __exportStar = exports && exports.__exportStar || function (m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __exportStar(require_Device(), exports);

    __exportStar(require_Transport(), exports);

    __exportStar(require_Producer(), exports);

    __exportStar(require_Consumer(), exports);

    __exportStar(require_DataProducer(), exports);

    __exportStar(require_DataConsumer(), exports);

    __exportStar(require_RtpParameters(), exports);

    __exportStar(require_SctpParameters(), exports);

    __exportStar(require_HandlerInterface(), exports);

    __exportStar(require_errors(), exports);
  }

}); // ../../node_modules/mediasoup-client/lib/index.js


var require_lib3 = __commonJS({
  "../../node_modules/mediasoup-client/lib/index.js"(exports) {
    "use strict";

    init_process();

    var __createBinding = exports && exports.__createBinding || (Object.create ? function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        }
      });
    } : function (o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    });

    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function (o2, v) {
      Object.defineProperty(o2, "default", {
        enumerable: true,
        value: v
      });
    } : function (o2, v) {
      o2["default"] = v;
    });

    var __importStar = exports && exports.__importStar || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};

      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    };

    var __importDefault = exports && exports.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.debug = exports.parseScalabilityMode = exports.detectDevice = exports.Device = exports.version = exports.types = void 0;

    var debug_1 = __importDefault(require_browser2());

    exports.debug = debug_1.default;
    var Device_1 = require_Device();
    Object.defineProperty(exports, "Device", {
      enumerable: true,
      get: function () {
        return Device_1.Device;
      }
    });
    Object.defineProperty(exports, "detectDevice", {
      enumerable: true,
      get: function () {
        return Device_1.detectDevice;
      }
    });

    var types = __importStar(require_types());

    exports.types = types;
    exports.version = "3.6.50";
    var scalabilityModes_1 = require_scalabilityModes();
    Object.defineProperty(exports, "parseScalabilityMode", {
      enumerable: true,
      get: function () {
        return scalabilityModes_1.parse;
      }
    });
  }

}); // src/index.ts


init_process(); // src/member/index.ts

init_process(); // ../common/src/index.ts

init_process(); // ../common/src/error.ts

init_process(); // ../common/src/logger.ts

init_process(); // ../common/src/event.ts

init_process();
var Event = class {
  constructor(_onSetListener = () => {}) {
    this._onSetListener = _onSetListener;
    this._stack = [];
    this._eventIndex = 0;

    this.emit = arg => {
      this._stack.forEach(v => v.execute(arg));
    };

    this.removeAllListeners = () => {
      this._stack = [];
    };

    this.pipe = event => {
      return this.add(arg => event.emit(arg));
    };

    this.add = callback => {
      const id = this._eventIndex;

      this._stack.push({
        execute: callback,
        id
      });

      this._eventIndex++;

      const removeListener = () => {
        this._stack = this._stack.filter(item => item.id !== id && item);
      };

      this._onSetListener();

      return {
        removeListener
      };
    };

    this.once = callback => {
      const off = this.add(arg => {
        off.removeListener();
        callback(arg);
      });
    };

    this.asPromise = timeLimit => new Promise((resolve, reject) => {
      const timeout = timeLimit && setTimeout(() => {
        reject("Event asPromise timeout : " + timeLimit);
      }, timeLimit);
      this.once(arg => {
        if (timeout) clearTimeout(timeout);
        resolve(arg);
      });
    });

    this.watch = (callback, timeLimit) => new Promise((resolve, reject) => {
      const timeout = timeLimit && setTimeout(() => {
        reject("Event watch timeout : " + timeLimit);
      }, timeLimit);
      const {
        removeListener
      } = this.add(arg => {
        const done = callback(arg);

        if (done) {
          if (timeout) clearTimeout(timeout);
          removeListener();
          resolve(arg);
        }
      });
    });
  }

  get length() {
    return this._stack.length;
  }

};
exports.Event = Event;
var Events = class {
  constructor() {
    this.events = [];
  }

  make() {
    const event = new Event();
    this.events.push(event);
    return event;
  }

  dispose() {
    this.events.forEach(event => event.removeAllListeners());
    this.events = [];
  }

}; // ../common/src/logger.ts

exports.Events = Events;
var logLevelTypes = ["error", "warn", "debug", "disable"];
exports.logLevelTypes = logLevelTypes;

var _Logger = class {
  constructor(_prefix) {
    this._prefix = _prefix;
  }

  debug(...msg) {
    this._log("debug", ...msg);
  }

  warn(...msg) {
    this._log("warn", ...msg);
  }

  error(...msg) {
    this._log("error", ...msg);
  }

  _log(level, ...msg) {
    const label = logLevelTypes.indexOf(level);
    const target = logLevelTypes.indexOf(_Logger.level);
    const timestamp = new Date(Date.now() + 60 * 9 * 6e4).toISOString() + "+JST";
    msg = [this._prefix, ...msg];

    if (target >= label) {
      switch (level) {
        case "debug":
          console.info(timestamp, level, ...msg);
          break;

        case "warn":
          console.warn(timestamp, level, ...msg);
          break;

        case "error":
          console.error(timestamp, level, ...msg);
          break;
      }
    }

    _Logger.onLog.emit({
      id: _Logger.id,
      timestamp,
      level,
      message: msg
    });
  }

};

var Logger = _Logger;
exports.Logger = Logger;
Logger.level = "error";
Logger.id = Math.random().toString().slice(2, 7);
Logger.onLog = new Event(); // ../common/src/error.ts

var log = new Logger("packages/common/src/error.ts");
var SkyWayError = class extends Error {
  constructor(init, logging = true) {
    super(init.message);
    this.id = Math.random().toString().slice(2, 10);
    Object.assign(this, init);
    this.name = this.type;

    if (logging) {
      if (this.payload) {
        log.warn("error detail", `id:${this.id}, type:${this.type}, message:${this.message}`, this.payload);
      } else {
        log.warn("error detail", `id:${this.id}, type:${this.type}, message:${this.message}`);
      }
    }
  }

  toJSON() {
    return {
      type: this.type,
      message: this.message,
      payload: this.payload
    };
  }

}; // ../common/src/http.ts

exports.SkyWayError = SkyWayError;
init_process();

var import_axios = __toESM(require_axios2());

var log2 = new Logger("packages/common/src/http.ts");
var HttpClient = class {
  constructor(baseURL) {
    this.api = import_axios.default.create({
      baseURL
    });
  }

  get(url, config) {
    return __async(this, null, function* () {
      const res = yield this.api.get(url, config).catch(err => err);

      if (import_axios.default.isAxiosError(res)) {
        const error = __spreadProps(__spreadValues({}, res.response), {
          message: res.message
        });

        if (config == null ? void 0 : config.retry) {
          const retry = yield config.retry(error);

          if (retry) {
            return this.get(url, config);
          } else {
            throw error;
          }
        }

        log2.warn("response error", {
          error
        });
        throw error;
      } else {
        return res.data;
      }
    });
  }

  post(url, data, config) {
    return __async(this, null, function* () {
      const res = yield this.api.post(url, data, config).catch(err => err);

      if (import_axios.default.isAxiosError(res)) {
        const error = __spreadProps(__spreadValues({}, res.response), {
          message: res.message
        });

        if (config == null ? void 0 : config.retry) {
          const retry = yield config.retry(error);

          if (retry) {
            return this.post(url, data, config);
          } else {
            throw error;
          }
        }

        log2.warn("response error", {
          error
        });
        throw error;
      } else {
        return res.data;
      }
    });
  }

  put(url, data, config) {
    return __async(this, null, function* () {
      const res = yield this.api.put(url, data, config).catch(err => err);

      if (import_axios.default.isAxiosError(res)) {
        const error = __spreadProps(__spreadValues({}, res.response), {
          message: res.message
        });

        if (config == null ? void 0 : config.retry) {
          const retry = yield config.retry(error);

          if (retry) {
            return this.put(url, data, config);
          } else {
            throw error;
          }
        }

        log2.warn("response error", {
          error
        });
        throw error;
      } else {
        return res.data;
      }
    });
  }

  delete(url, config) {
    return __async(this, null, function* () {
      const res = yield this.api.delete(url, config).catch(err => err);

      if (import_axios.default.isAxiosError(res)) {
        const error = __spreadProps(__spreadValues({}, res.response), {
          message: res.message
        });

        if (config == null ? void 0 : config.retry) {
          const retry = yield config.retry(error);

          if (retry) {
            return this.delete(url, config);
          } else {
            throw error;
          }
        }

        log2.warn("response error", {
          error
        });
        throw error;
      } else {
        return res.data;
      }
    });
  }

}; // ../common/src/promise.ts

exports.HttpClient = HttpClient;
init_process();
var PromiseQueue = class {
  constructor() {
    this.queue = [];
    this.running = false;

    this.push = promise => new Promise((r2, f) => {
      this.queue.push({
        promise,
        done: r2,
        failed: f
      });
      if (!this.running) this.run();
    });
  }

  run() {
    return __async(this, null, function* () {
      const task = this.queue.shift();

      if (task) {
        this.running = true;
        const res = yield task.promise().catch((...args) => {
          task.failed(...args);
          return void 0;
        });
        if (res) task.done(res);
        this.run();
      } else {
        this.running = false;
      }
    });
  }

}; // ../common/src/util.ts

exports.PromiseQueue = PromiseQueue;
init_process();
var BackOff = class {
  constructor(options = {
    duration: 100,
    times: 8
  }) {
    this.options = options;
    this.retry = 0;
  }

  wait() {
    return __async(this, null, function* () {
      if (this.retry++ > this.options.times) {
        return false;
      }

      const timeout = __pow(this.retry, 2) * this.options.duration;
      yield new Promise(r2 => setTimeout(r2, timeout));
      return true;
    });
  }

}; // src/member/index.ts

exports.BackOff = BackOff;
var RoomMemberImpl = class {
  constructor(member, room) {
    this.member = member;
    this.room = room;
    this.onLeft = new Event();
    const {
      removeListener
    } = room.onMemberLeft.add(e2 => {
      if (e2.member.id === this.member.id) {
        removeListener();
        this.onLeft.emit();
      }
    });
    this.onMetadataUpdated = member.onMetadataUpdated;
  }

  get id() {
    return this.member.id;
  }

  get name() {
    return this.member.name;
  }

  get roomId() {
    return this.room.id;
  }

  get roomName() {
    return this.room.name;
  }

  get roomType() {
    return this.room.type;
  }

  get status() {
    return this.member.status;
  }

  get metadata() {
    return this.member.metadata;
  }

  get _member() {
    return this.member;
  }

  get publications() {
    return this.room.publications.filter(p => p.publisher.id);
  }

  get subscriptions() {
    return this.member.subscriptions.map(s => this.room._getSubscription(s.id));
  }

  updateMetadata(metadata) {
    return this.member.updateMetadata(metadata);
  }

}; // src/member/local/base.ts

exports.RoomMemberImpl = RoomMemberImpl;
init_process();
var LocalRoomMemberImpl = class extends RoomMemberImpl {
  constructor(member, room) {
    super(member, room);
    this.side = "local";
    this._local = this._member;
    this.onStreamPublished = new Event();
    this.onStreamUnpublished = new Event();
    this.onPublicationChanged = new Event();
    this.onStreamSubscribed = new Event();
    this.onStreamUnsubscribed = new Event();
    this.onSubscriptionChanged = new Event();

    this._local.onStreamSubscribed.add(e2 => __async(this, null, function* () {
      const roomSubscription = room._addSubscription(e2.subscription);

      this.onStreamSubscribed.emit({
        subscription: roomSubscription,
        stream: e2.stream
      });
    }));

    this._listenRoomEvent();

    this.onStreamPublished.add(() => this.onPublicationChanged.emit());
    this.onStreamUnpublished.add(() => this.onPublicationChanged.emit());
    this.onStreamSubscribed.add(() => this.onSubscriptionChanged.emit());
    this.onStreamUnsubscribed.add(() => this.onSubscriptionChanged.emit());
  }

  _listenRoomEvent() {
    this.room.onStreamUnsubscribed.add(e2 => {
      if (e2.subscription.subscriber._member.id === this._local.id) {
        this.onStreamUnsubscribed.emit(e2);
      }
    });
  }

  leave() {
    return this._local.leave();
  }

}; // src/member/local/p2p.ts

exports.LocalRoomMemberImpl = LocalRoomMemberImpl;
init_process(); // ../core/src/index.ts

init_process(); // ../core/src/channel/index.ts

init_process(); // ../rtc-api-client/src/index.ts

init_process(); // ../rtc-api-client/src/client.ts

init_process(); // ../rtc-rpc-api-client/src/index.ts

init_process(); // ../rtc-rpc-api-client/src/client.ts

init_process(); // ../rtc-rpc-api-client/src/const.ts

init_process();
var defaultDomain = "b-rapi.beta.skyway.ntt.com";
var rpcTimeout = 2e4; // ../rtc-rpc-api-client/src/rpc.ts

init_process();

var import_buffer = __toESM(require_buffer());

var import_isomorphic_ws = __toESM(require_browser()); // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/index.js


init_process(); // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/rng.js

init_process();
var getRandomValues;
var rnds8 = new Uint8Array(16);

function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }

  return getRandomValues(rnds8);
} // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/stringify.js


init_process(); // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/validate.js

init_process(); // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/regex.js

init_process();
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i; // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/validate.js

function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}

var validate_default = validate; // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/stringify.js

var byteToHex = [];

for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}

var i;

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();

  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }

  return uuid;
}

var stringify_default = stringify; // ../rtc-rpc-api-client/node_modules/uuid/dist/esm-browser/v4.js

init_process();

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify_default(rnds);
}

var v4_default = v4; // ../rtc-rpc-api-client/src/rpc.ts

var log3 = new Logger("packages/rtc-rpc-api-client/src/rpc.ts");
var RPC = class {
  constructor() {
    this.closed = false;
    this.connected = false;
    this.reconnecting = false;
    this._reconnectCount = 0;
    this._reconnectLimit = 3;
    this._pendingRequests = [];
    this.received = 0;
    this._events = new Events();
    this._onMessage = this._events.make();
    this.onNotify = this._events.make();
    this.onFatalError = this._events.make();
    this.onReconnect = this._events.make();

    this._send = request => new Promise((r2, f) => __async(this, null, function* () {
      yield new Promise(r3 => setTimeout(r3, 0));

      if (this._ws.readyState !== this._ws.OPEN) {
        f(new SkyWayError({
          type: "forbidden",
          message: "wrong state",
          payload: {
            request,
            wsReadyState: wsStates[this._ws.readyState]
          }
        }));
        return;
      }

      this._ws.send(JSON.stringify(request), error => {
        if (error) {
          throw f(new SkyWayError({
            type: "internalError",
            message: "failed to send rpc message",
            payload: error
          }));
        }
      });

      r2();
    }));
  }

  connect(_0) {
    return __async(this, arguments, function* ({
      domain,
      token,
      secure
    }) {
      const subProtocol = token;
      this._ws = new import_isomorphic_ws.default(`${secure ? "wss" : "ws"}://${domain}/ws`, subProtocol);

      this._ws.onmessage = ev => {
        this.received += import_buffer.Buffer.byteLength(ev.data);

        this._onMessage.emit(JSON.parse(ev.data));
      };

      this._ws.onclose = ev => __async(this, null, function* () {
        log3.warn("ws connection closed", ev);

        if (this.connected && !this.closed) {
          if (this._reconnectCount > this._reconnectLimit) {
            this.onFatalError.emit(new SkyWayError({
              type: "backendError",
              message: "_reconnectLimit exceeded"
            }));
            this.close();
            return;
          }

          try {
            yield this.reconnect({
              domain,
              token,
              secure
            }).catch(e2 => {
              this.onFatalError.emit(e2);
              this.close();
              throw e2;
            });
            log3.warn("resolve pendingRequests", [...this._pendingRequests]);

            this._pendingRequests.forEach(req => __async(this, null, function* () {
              yield this._send(req);
            }));

            this._pendingRequests = [];
          } catch (error2) {
            log3.error(error2);
          }
        }
      });

      this._onMessage.add(msg => {
        this._reconnectCount = 0;

        if (isNotifyMessage(msg)) {
          this.onNotify.emit(msg);
        }
      });

      const error = yield new Promise((r2, f) => {
        const timeout = setTimeout(() => {
          f(new SkyWayError({
            type: "internalError",
            message: "timeout"
          }));
        }, 1e4);

        this._ws.onerror = e2 => {
          log3.error("ws error before established", e2);
          f(e2);
        };

        this._ws.onopen = () => {
          clearTimeout(timeout);
          r2();
        };
      }).catch(e2 => e2);

      if (error) {
        throw new SkyWayError({
          type: "internalError",
          message: "failed to connect rtc-api",
          payload: error
        });
      }

      this.connected = true;
    });
  }

  reconnect(_0) {
    return __async(this, arguments, function* ({
      domain,
      token,
      secure
    }) {
      this._reconnectCount++;
      this.reconnecting = true;
      log3.warn("[start] reconnect rtc api", {
        reconnectCount: this._reconnectCount
      });
      yield this.connect({
        domain,
        token,
        secure
      }).catch(err => {
        log3.warn(`[failed] reconnect rtc api`, {
          reconnectCount: this._reconnectCount
        });
        throw err;
      });
      this.reconnecting = false;
      log3.warn("[end] reconnect rtc api", {
        reconnectCount: this._reconnectCount
      });
      this.onReconnect.emit();
    });
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    log3.debug("closed");

    this._ws.close();

    this._events.dispose();
  }

  request(method, params) {
    return __async(this, null, function* () {
      if (this.closed) {
        throw new SkyWayError({
          type: "forbidden",
          message: "rpc closed"
        });
      }

      let done = false;

      try {
        const request = buildRequest(method, params);

        const handleMessage = () => __async(this, null, function* () {
          return yield this._onMessage.watch(msg => msg.id === request.id, rpcTimeout).catch(() => {
            if (done) {
              return;
            }

            throw new SkyWayError({
              type: "timeout",
              message: "rpc request timeout",
              payload: {
                method,
                params,
                wsReadyState: wsStates[this._ws.readyState]
              }
            });
          });
        });

        if (!this.reconnecting) {
          this._send(request).catch(e2 => {
            throw e2;
          });

          const message = yield Promise.race([this.onFatalError.asPromise(rpcTimeout + 100).then(e2 => {
            if (!done) {
              log3.error("onFatalError", {
                method,
                params
              });
            }

            throw e2;
          }), this.onReconnect.asPromise(rpcTimeout + 100).then(() => {
            if (!done) {
              log3.error("reconnectHappened", {
                method,
                params
              });
            }

            throw new ReconnectHappenedError();
          }), handleMessage()]);

          if (message.error) {
            log3.error("[failed] request ", {
              message,
              method,
              params
            });
            throw new RpcResponseError(message.error);
          }

          done = true;
          return message.result;
        } else {
          log3.warn("[start] reconnecting. pending request", {
            request
          });

          this._pendingRequests.push(request);

          const message = yield Promise.race([this.onFatalError.asPromise(rpcTimeout + 100).then(e2 => {
            if (!done) {
              log3.warn("[failed] reconnecting. pending request", {
                e: e2
              });
            }

            throw e2;
          }), handleMessage()]);

          if (message.error) {
            log3.warn("[failed] reconnecting. pending request", {
              message,
              request
            });
            throw new RpcResponseError(message.error);
          }

          log3.warn("[end] reconnecting. pending request", {
            request
          });
          done = true;
          return message.result;
        }
      } catch (error) {
        done = true;
        throw error;
      }
    });
  }

  notify(method, params) {
    return __async(this, null, function* () {
      const request = buildRequest(method, params, true);
      yield this._send(request);
    });
  }

  batch(requests) {
    return __async(this, null, function* () {
      const messages = requests.map(({
        method,
        params
      }) => buildRequest(method, params));

      this._send(messages).catch(e2 => {
        throw e2;
      });

      const responses = yield Promise.all(messages.map(_0 => __async(this, [_0], function* ({
        id
      }) {
        const message = yield this._onMessage.watch(msg => msg.id === id, rpcTimeout);
        return message;
      })));
      return responses;
    });
  }

};

var buildRequest = (method, params, notify) => {
  if (notify) {
    return {
      jsonrpc: "2.0",
      method,
      params
    };
  }

  const id = v4_default();
  return {
    jsonrpc: "2.0",
    method,
    params,
    id
  };
};

var isNotifyMessage = msg => {
  const notify = msg;

  if (notify.method && notify.id == void 0) {
    return true;
  }

  return false;
};

var ReconnectHappenedError = class extends SkyWayError {
  constructor() {
    super({
      type: "backendError",
      message: "reconnectHappened"
    });
  }

};
var RpcResponseError = class extends SkyWayError {
  constructor(payload) {
    super({
      type: "backendError",
      message: "request failed",
      payload
    });
  }

};
var wsStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"]; // ../rtc-rpc-api-client/src/client.ts

var log4 = new Logger("packages/rtc-rpc-api-client/src/client.ts");

var _a, _b;

var RtcRpcApiClient = class {
  constructor(args) {
    this.args = args;
    this.closed = false;
    this._domain = (_a = this.args.domain) != null ? _a : defaultDomain;
    this._secure = (_b = this.args.secure) != null ? _b : true;
    this._token = this.args.token;
    this._rpc = new RPC();
    this._subscribingChannelEvents = /* @__PURE__ */new Set();
    this._subscribingChannelVersions = {};
    this._httpClient = new HttpClient(`http${this.args.secure ? "s" : ""}://${this.args.domain}`);
    this._events = new Events();
    this.onEvent = this._events.make();
    this.onFatalError = this._events.make();
    this.onClose = this._events.make();

    if (args.logLevel) {
      Logger.level = args.logLevel;
    }

    log4.debug("RtcRpcApiClient spawned", args);

    this._rpc.onNotify.add(notify => {
      if (notify.method === "channelEventNotification") {
        const event = notify.params;
        this._subscribingChannelVersions[event.data.channel.id] = event.data.channel.version;
        this.onEvent.emit({
          channelId: event.data.channel.id,
          event
        });
      }
    });

    this._rpc.onFatalError.once(e2 => {
      log4.error("fatal error", e2);
      this.onFatalError.emit(e2);
      this.close();
    });

    this._rpc.onReconnect.add(() => {
      log4.warn("re subscribe channel events", {
        _subscribingChannelEvents: [...this._subscribingChannelEvents]
      });
      [...this._subscribingChannelEvents].forEach(s => __async(this, null, function* () {
        const [appId, channelId] = s.split(":");
        const offset = this._subscribingChannelVersions[channelId];
        yield this.subscribeChannelEvents({
          appId,
          channelId,
          offset
        });
      }));
    });
  }

  updateToken(token) {
    log4.debug("token update", {
      token
    });
    this._token = token;
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    log4.debug("closed");

    this._rpc.close();

    this.onClose.emit();

    this._events.dispose();
  }

  health() {
    return __async(this, null, function* () {
      const response = yield this._httpClient.get("/health");
      return response;
    });
  }

  connect() {
    return __async(this, null, function* () {
      log4.debug("connect to rtc api rpc", this._domain);
      yield this._rpc.connect({
        domain: this._domain,
        token: this._token,
        secure: this._secure
      }).catch(e2 => {
        throw new SkyWayError({
          type: "internalError",
          message: "failed to connect rpc api",
          payload: {
            reason: "There may be a problem with the token or failure on the server side",
            error: e2
          }
        });
      });
    });
  }

  _channelSubscribed(appId, channelId) {
    this._subscribingChannelEvents.add(appId + ":" + channelId);

    log4.debug("_channelSubscribed", {
      appId,
      channelId,
      _subscribingChannelEvents: [...this._subscribingChannelEvents]
    });
  }

  _isSubscribingChannel(appId, channelId) {
    return this._subscribingChannelEvents.has(appId + ":" + channelId);
  }

  createChannel(_0) {
    return __async(this, arguments, function* ({
      name,
      metadata,
      appId
    }) {
      const {
        channel
      } = yield this._rpc.request("createChannel", {
        name,
        metadata,
        appId,
        authToken: this._token
      });

      this._channelSubscribed(appId, channel.id);

      return channel;
    });
  }

  findOrCreateChannel(_0) {
    return __async(this, arguments, function* ({
      name,
      metadata,
      appId
    }) {
      const {
        channel
      } = yield this._rpc.request("findOrCreateChannel", {
        name,
        metadata,
        appId,
        authToken: this._token
      });

      this._channelSubscribed(appId, channel.id);

      return channel;
    });
  }

  getChannel(_0) {
    return __async(this, arguments, function* ({
      appId,
      id
    }) {
      const res = yield this._rpc.request("getChannel", {
        id,
        appId,
        authToken: this._token
      });

      if (!this._isSubscribingChannel(appId, id)) {
        this._channelSubscribed(appId, id);

        yield this.subscribeChannelEvents({
          appId,
          channelId: id,
          offset: res.channel.version
        });
      } else {
        log4.warn("debug _isSubscribingChannel", {
          appId,
          id
        });
      }

      return res.channel;
    });
  }

  getChannelByName(_0) {
    return __async(this, arguments, function* ({
      name,
      appId
    }) {
      const res = yield this._rpc.request("getChannelByName", {
        name,
        appId,
        authToken: this._token
      });
      return res.channel;
    });
  }

  deleteChannel(_0) {
    return __async(this, arguments, function* ({
      id,
      appId
    }) {
      yield this._rpc.request("deleteChannel", {
        id,
        appId,
        authToken: this._token
      });
    });
  }

  updateChannelMetadata(_0) {
    return __async(this, arguments, function* ({
      id,
      metadata,
      appId
    }) {
      yield this._rpc.request("updateChannelMetadata", {
        id,
        metadata,
        appId,
        authToken: this._token
      });
    });
  }

  addMember(_0) {
    return __async(this, arguments, function* ({
      channelId,
      name,
      metadata,
      subscribeChannelEvents,
      appId,
      ttlSec,
      subtype,
      type
    }) {
      const res = yield this._rpc.request("addMember", {
        channelId,
        name,
        metadata,
        subscribeChannelEvents,
        appId,
        ttlSec: ttlSec && parseInt(ttlSec.toString()),
        authToken: this._token,
        subtype,
        type
      });
      return res;
    });
  }

  updateMemberTtl(args, retry = 2) {
    return __async(this, null, function* () {
      const {
        appId,
        channelId,
        memberId,
        ttlSec
      } = args;

      try {
        yield this._rpc.request("updateMemberTtl", {
          appId,
          channelId,
          memberId,
          ttlSec: ttlSec && parseInt(ttlSec.toString()),
          authToken: this._token
        });
      } catch (e2) {
        const error = new SkyWayError({
          type: "internalError",
          message: "updateMemberTtl failed",
          payload: e2
        });

        if (retry > 0) {
          log4.warn("retry updateMemberTtl", {
            error,
            retry
          });
          yield this.updateMemberTtl(args, retry - 1);
        } else {
          throw error;
        }
      }
    });
  }

  updateMemberMetadata(_0) {
    return __async(this, arguments, function* ({
      channelId,
      memberId,
      metadata,
      appId
    }) {
      yield this._rpc.request("updateMemberMetadata", {
        channelId,
        memberId,
        metadata,
        appId,
        authToken: this._token
      });
    });
  }

  leaveChannel(_0) {
    return __async(this, arguments, function* ({
      channelId,
      id,
      appId
    }) {
      yield this._rpc.request("removeMember", {
        channelId,
        id,
        appId,
        authToken: this._token
      });
    });
  }

  publishStream(_0) {
    return __async(this, arguments, function* ({
      appId,
      channelId,
      publisherId,
      contentType,
      metadata,
      origin,
      codecCapabilities,
      encodings
    }) {
      const res = yield this._rpc.request("publishStream", {
        channelId,
        publisherId,
        contentType: contentType[0].toUpperCase() + contentType.slice(1),
        metadata,
        origin,
        codecCapabilities,
        encodings,
        appId,
        authToken: this._token
      });
      return {
        publicationId: res.id
      };
    });
  }

  updatePublicationMetadata(_0) {
    return __async(this, arguments, function* ({
      channelId,
      publicationId,
      appId,
      metadata
    }) {
      yield this._rpc.request("updatePublicationMetadata", {
        channelId,
        publicationId,
        metadata,
        appId,
        authToken: this._token
      });
    });
  }

  unpublishStream(_0) {
    return __async(this, arguments, function* ({
      channelId,
      publicationId,
      appId
    }) {
      yield this._rpc.request("unpublishStream", {
        channelId,
        publicationId,
        appId,
        authToken: this._token
      });
    });
  }

  subscribeStream(_0) {
    return __async(this, arguments, function* ({
      channelId,
      subscriberId,
      publicationId,
      appId
    }) {
      const res = yield this._rpc.request("subscribeStream", {
        channelId,
        subscriberId,
        publicationId,
        appId,
        authToken: this._token
      });
      return {
        subscriptionId: res.id
      };
    });
  }

  unsubscribeStream(_0) {
    return __async(this, arguments, function* ({
      channelId,
      subscriptionId,
      appId
    }) {
      yield this._rpc.request("unsubscribeStream", {
        channelId,
        subscriptionId,
        appId,
        authToken: this._token
      });
    });
  }

  subscribeChannelEvents(_0) {
    return __async(this, arguments, function* ({
      appId,
      channelId,
      offset
    }) {
      try {
        log4.debug("[start] subscribeChannelEvents", {
          offset
        });
        yield this._rpc.request("subscribeChannelEvents", {
          appId,
          authToken: this._token,
          channelId,
          offset
        });
        log4.debug("[end] subscribeChannelEvents", {
          offset
        });
      } catch (error) {
        if (error instanceof ReconnectHappenedError) {
          log4.warn("reconnect happened while subscribeChannelEvents. retry", {
            offset,
            error
          });
          yield this.subscribeChannelEvents({
            appId,
            channelId,
            offset
          });
        } else {
          log4.warn("[failed] subscribeChannelEvents", {
            offset,
            error
          });
          throw error;
        }
      }
    });
  }

}; // ../rtc-rpc-api-client/src/event.ts

init_process(); // ../rtc-api-client/src/config.ts

init_process();

var import_deepmerge = __toESM(require_cjs());

var Config = class {
  constructor(options = {}) {
    this.rtcApi = {
      domain: "b-rapi.beta.skyway.ntt.com",
      timeout: 3e4,
      secure: true
    };
    this.logLevel = "error";
    Object.assign(this, (0, import_deepmerge.default)(this, options));
  }

  static initialize(options = {}) {
    Config._instance = new Config(options);
    return Config._instance;
  }

  static get get() {
    if (!Config._instance) throw new Error("Config not initialized");
    return Config._instance;
  }

}; // ../rtc-api-client/src/infrastructure/api.ts

init_process();
var log5 = new Logger("packages/rtc-api-client/src/infrastructure/api.ts");
var SkyWayApiImpl = class {
  constructor(_client) {
    this._client = _client;
    this.closed = false;
    this.onClose = new Event();

    _client.onClose.once(() => {
      this.close();
    });
  }

  updateAuthToken(token) {
    this._client.updateToken(token);
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    log5.debug("closed");

    this._client.close();

    this.onClose.emit();
    this.onClose.removeAllListeners();
  }

  createChannel(appId, channelInit) {
    return __async(this, null, function* () {
      const {
        id
      } = yield this._client.createChannel({
        appId,
        name: channelInit.name,
        metadata: channelInit.metadata
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for creating a channel"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "createChannel failed",
              payload: e2
            });
        }
      });
      const res = yield this.getChannel(appId, {
        id
      });
      return res;
    });
  }

  getChannel(_0, _1) {
    return __async(this, arguments, function* (appId, {
      name,
      id
    }) {
      if (id) {
        return yield this._client.getChannel({
          appId,
          id
        }).catch(e2 => {
          const {
            payload
          } = e2;

          switch (payload == null ? void 0 : payload.code) {
            case 4030:
              throw new SkyWayError({
                type: "insufficientPermissions",
                message: "Insufficient permission for finding a channel"
              });

            default:
              throw new SkyWayError({
                type: "backendError",
                message: "getChannel failed",
                payload: e2
              });
          }
        });
      }

      if (name) {
        return yield this._client.getChannelByName({
          appId,
          name
        }).catch(e2 => {
          const {
            payload
          } = e2;

          switch (payload == null ? void 0 : payload.code) {
            case 4030:
              throw new SkyWayError({
                type: "insufficientPermissions",
                message: "Insufficient permission for finding a channel"
              });

            default:
              throw new SkyWayError({
                type: "backendError",
                message: "getChannel by name failed",
                payload: e2
              });
          }
        });
      }

      throw new SkyWayError({
        type: "invalidParameter",
        message: "channel query must has id or name"
      });
    });
  }

  findOrCreateChannel(appId, query) {
    return __async(this, null, function* () {
      return this._client.findOrCreateChannel(__spreadProps(__spreadValues({}, query), {
        appId
      })).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for finding or creating a channel"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "findOrCreateChannel failed",
              payload: e2
            });
        }
      });
    });
  }

  deleteChannel(appId, id) {
    return __async(this, null, function* () {
      yield this._client.deleteChannel({
        appId,
        id
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for finding or delete a channel"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "deleteChannel failed",
              payload: e2
            });
        }
      });
    });
  }

  updateChannelMetadata(appId, id, metadata) {
    return __async(this, null, function* () {
      yield this._client.updateChannelMetadata({
        appId,
        id,
        metadata
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for finding or update channel's metadata"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "updateChannelMetadata failed",
              payload: e2
            });
        }
      });
    });
  }

  join(appId, channelId, memberInit) {
    return __async(this, null, function* () {
      const {
        memberId
      } = yield this._client.addMember({
        appId,
        channelId,
        name: memberInit.name,
        metadata: memberInit.metadata,
        ttlSec: memberInit.ttlSec,
        type: memberInit.type,
        subtype: memberInit.subtype
      }).catch(e2 => {
        const {
          payload,
          message,
          type
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for join channel",
              payload: {
                memberInit,
                appId,
                channelId
              }
            });

          default:
            throw new SkyWayError({
              type,
              message: "join channel failed",
              payload: {
                message,
                payload,
                memberInit,
                channelId,
                appId
              }
            });
        }
      });
      const member = {
        id: memberId,
        name: memberInit.name,
        type: memberInit.type,
        subtype: memberInit.subtype,
        metadata: memberInit.metadata
      };
      return member;
    });
  }

  updateMemberTtl(appId, channelId, memberId, ttlSec) {
    return __async(this, null, function* () {
      yield this._client.updateMemberTtl({
        appId,
        channelId,
        memberId,
        ttlSec
      });
    });
  }

  updateMemberMetadata(appId, channelId, memberId, metadata) {
    return __async(this, null, function* () {
      yield this._client.updateMemberMetadata({
        appId,
        channelId,
        memberId,
        metadata
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for updateMemberMetadata"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "updateMemberMetadata failed",
              payload: e2
            });
        }
      });
    });
  }

  leave(appId, channelId, memberId) {
    return __async(this, null, function* () {
      yield this._client.leaveChannel({
        channelId,
        id: memberId,
        appId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for leaveChannel"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "leaveChannel failed",
              payload: e2
            });
        }
      });
    });
  }

  publish(appId, init) {
    return __async(this, null, function* () {
      var _a2, _b2;

      const {
        publicationId
      } = yield this._client.publishStream({
        channelId: init.channel,
        publisherId: init.publisher,
        contentType: init.contentType,
        metadata: init.metadata,
        origin: init.origin,
        codecCapabilities: init.codecCapabilities,
        encodings: init.encodings,
        appId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for publishStream"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "publishStream failed",
              payload: e2
            });
        }
      });
      const publication = {
        id: publicationId,
        channelId: init.channel,
        publisherId: init.publisher,
        origin: init.origin,
        contentType: init.contentType,
        metadata: init.metadata,
        codecCapabilities: (_a2 = init.codecCapabilities) != null ? _a2 : [],
        encodings: (_b2 = init.encodings) != null ? _b2 : []
      };
      return publication;
    });
  }

  updatePublicationMetadata(appId, channelId, publicationId, metadata) {
    return __async(this, null, function* () {
      yield this._client.updatePublicationMetadata({
        channelId,
        publicationId,
        metadata,
        appId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for updatePublicationMetadata"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "updatePublicationMetadata failed",
              payload: e2
            });
        }
      });
    });
  }

  unpublish(appId, channelId, publicationId) {
    return __async(this, null, function* () {
      yield this._client.unpublishStream({
        channelId,
        publicationId,
        appId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for unpublishStream"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "unpublishStream failed",
              payload: e2
            });
        }
      });
    });
  }

  subscribe(appId, init) {
    return __async(this, null, function* () {
      const {
        subscriptionId
      } = yield this._client.subscribeStream({
        channelId: init.channel.id,
        subscriberId: init.subscriber.id,
        publicationId: init.publication.id,
        appId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for subscribeStream"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "subscribeStream failed",
              payload: e2
            });
        }
      });
      const subscription = {
        id: subscriptionId,
        publicationId: init.publication.id,
        channelId: init.channel.id,
        publisherId: init.publication.publisherId,
        subscriberId: init.subscriber.id,
        contentType: init.publication.contentType
      };
      return subscription;
    });
  }

  unsubscribe(appId, channelId, subscriptionId) {
    return __async(this, null, function* () {
      yield this._client.unsubscribeStream({
        appId,
        channelId,
        subscriptionId
      }).catch(e2 => {
        const {
          payload
        } = e2;

        switch (payload == null ? void 0 : payload.code) {
          case 4030:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "Insufficient permission for unsubscribeStream"
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "unsubscribeStream failed",
              payload: e2
            });
        }
      });
    });
  }

}; // ../rtc-api-client/src/client.ts

var log6 = new Logger("packages/rtc-api-client/src/client.ts");
var RtcApiClient = class {
  constructor(appId, _rpc) {
    this.appId = appId;
    this._rpc = _rpc;
    this.closed = false;
    this.onFatalError = new Event();
    this.apiClient = new SkyWayApiImpl(_rpc);

    _rpc.onFatalError.once(e2 => {
      this.onFatalError.emit(e2);
    });
  }

  static Create(args) {
    return __async(this, null, function* () {
      const config = Config.initialize(args);
      Logger.level = config.logLevel;
      log6.debug("RtcApiClient spawned", config);
      const api = new RtcRpcApiClient(__spreadProps(__spreadValues({}, config.rtcApi), {
        token: args.token,
        logLevel: config.logLevel
      }));
      yield api.connect();
      return new RtcApiClient(args.appId, api);
    });
  }

  get received() {
    return this._rpc._rpc.received;
  }

  updateAuthToken(token) {
    this._rpc.updateToken(token);
  }

  createChannel() {
    return __async(this, arguments, function* (init = {}) {
      log6.debug("[start] apiClient.createChannel", {
        init
      });
      const channelDto = yield this.apiClient.createChannel(this.appId, init).catch(e2 => {
        log6.debug("[failed] apiClient.createChannel", {
          init,
          e: e2
        });
        throw e2;
      });
      channelDto.name = init.name;
      log6.debug("[end] apiClient.createChannel", {
        init
      });
      const channel = channelFactory(this.appId, this._rpc, this.apiClient, channelDto);
      return channel;
    });
  }

  findChannel(query) {
    return __async(this, null, function* () {
      log6.debug("[start] apiClient.getChannel", {
        query
      });
      const channelDto = yield this.apiClient.getChannel(this.appId, query).catch(e2 => {
        log6.debug("[failed] apiClient.getChannel", {
          query,
          e: e2
        });
        throw e2;
      });
      const channel = channelFactory(this.appId, this._rpc, this.apiClient, channelDto);
      log6.debug("[end] apiClient.getChannel", {
        channelId: channel.id
      });
      return channel;
    });
  }

  findOrCreateChannel(query) {
    return __async(this, null, function* () {
      log6.debug("[start] apiClient.findOrCreateChannel", {
        query
      });
      const channelDto = yield this.apiClient.findOrCreateChannel(this.appId, query).catch(e2 => {
        log6.debug("[failed] apiClient.findOrCreateChannel", {
          query,
          e: e2
        });
        throw e2;
      });
      log6.debug("[end] apiClient.findOrCreateChannel", {
        query
      });
      const channel = channelFactory(this.appId, this._rpc, this.apiClient, channelDto);
      return channel;
    });
  }

  deleteChannel(channelId) {
    return this.apiClient.deleteChannel(this.appId, channelId);
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    log6.debug("closed", {
      appid: this.appId
    });
    this.apiClient.close();
  }

}; // ../rtc-api-client/src/domain/api.ts

init_process(); // ../rtc-api-client/src/domain/channel.ts

init_process(); // ../rtc-api-client/src/infrastructure/eventObserver.ts

init_process();
var log7 = new Logger("packages/rtc-api-client/src/infrastructure/eventObserver.ts");
var EventObserverImpl = class {
  constructor(appId, client, channelDto) {
    this.onEvent = new Event();
    this._disposer = [];
    const eventBuffer = new EventJitterBuffer(channelDto.version, expectNextVersion => __async(this, null, function* () {
      yield client.subscribeChannelEvents({
        appId,
        channelId: channelDto.id,
        offset: expectNextVersion
      });
      yield new Promise(r2 => setTimeout(r2, 5e3));

      if (eventBuffer.packetLostHappened) {
        log7.error("failed to resolve event lost");
      }
    }));
    this._disposer = [client.onEvent.add(_0 => __async(this, [_0], function* ({
      channelId,
      event
    }) {
      if (channelId === channelDto.id) {
        eventBuffer.push({
          event,
          version: event.data.channel.version
        });
      }
    })).removeListener, eventBuffer.onEvent.add(e2 => {
      this.onEvent.emit(e2);
    }).removeListener];
  }

  dispose() {
    this._disposer.forEach(d => d());

    this.onEvent.removeAllListeners();
  }

};
var EventJitterBuffer = class {
  constructor(presentVersion, onPacketLost, packetLifetime = 1e3) {
    this.presentVersion = presentVersion;
    this.onPacketLost = onPacketLost;
    this.packetLifetime = packetLifetime;
    this.onEvent = new Event();
    this.eventBuffer = {};
    this.packetLostHappened = false;
  }

  get expectNextVersion() {
    return this.presentVersion + 1;
  }

  push(eventFrame) {
    const incomingVersion = eventFrame.version;

    if (incomingVersion < this.expectNextVersion) {
      log7.debug("duplicate event", __spreadProps(__spreadValues({}, eventFrame), {
        presentVersion: this.presentVersion
      }));
      return;
    }

    if (incomingVersion > this.expectNextVersion) {
      log7.debug("maybe miss order event received", __spreadProps(__spreadValues({}, eventFrame), {
        presentVersion: this.presentVersion
      }));
      this.eventBuffer[incomingVersion] = eventFrame;
      this.handlePacketLifetime();
      return;
    }

    if (this.packetLostHappened) {
      log7.warn("event packetLost resolved", {
        eventFrame
      });
      this.packetLostHappened = false;
    }

    this.eventBuffer[incomingVersion] = eventFrame;
    this.resolveEvents();
  }

  handlePacketLifetime() {
    const [oldestBufferedEvent] = Object.keys(this.eventBuffer).sort().map(key => this.eventBuffer[Number(key)]);

    if (this.packetLifeTimer == void 0 && oldestBufferedEvent) {
      log7.debug("set event packetLost timer", __spreadProps(__spreadValues({}, oldestBufferedEvent), {
        presentVersion: this.presentVersion
      }));
      this.packetLifeTimer = setTimeout(() => __async(this, null, function* () {
        if (this.presentVersion < oldestBufferedEvent.version) {
          log7.warn("event packetLost", {
            oldestBufferedEvent,
            eventBufferLength: Object.keys(this.eventBuffer).length,
            presentVersion: this.presentVersion
          });

          if (this.packetLostHappened) {
            log7.warn("event not retransmit yet");
            return;
          } else {
            this.packetLostHappened = true;
            yield this.onPacketLost(this.expectNextVersion);
          }
        }

        this.packetLifeTimer = void 0;
        this.handlePacketLifetime();
      }), this.packetLifetime);
    }
  }

  resolveEvents() {
    const resolve = [];

    for (let i = this.expectNextVersion;; i++) {
      const frame = this.eventBuffer[i];

      if (frame) {
        resolve.push(frame);
        delete this.eventBuffer[i];
      } else {
        break;
      }
    }

    if (resolve.length > 0) {
      this.presentVersion = resolve.slice(-1)[0].version;
      resolve.forEach(frame => {
        this.onEvent.emit(frame.event);
      });
    }
  }

}; // ../rtc-api-client/src/domain/channel.ts

var log8 = new Logger("packages/rtc-api-client/src/domain/channel.ts");
var ChannelImpl = class {
  constructor(appId, init, eventObserver, apiClient) {
    this.appId = appId;
    this.eventObserver = eventObserver;
    this.apiClient = apiClient;
    this.disposed = false;
    this._events = new Events();
    this.onClosed = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.onMembershipChanged = this._events.make();
    this.onMemberJoined = this._events.make();
    this.onMemberLeft = this._events.make();
    this.onMemberMetadataUpdated = this._events.make();
    this.onPublicationChanged = this._events.make();
    this.onStreamPublished = this._events.make();
    this.onStreamUnpublished = this._events.make();
    this.onPublicationMetadataUpdated = this._events.make();
    this.onSubscriptionChanged = this._events.make();
    this.onStreamSubscribed = this._events.make();
    this.onStreamUnsubscribed = this._events.make();

    this.updateChannelMetadata = metadata => new Promise((r2, f) => {
      this.apiClient.updateChannelMetadata(this.appId, this.id, metadata).catch(f);
      this.onMetadataUpdated.watch(e2 => e2.channel.metadata === metadata).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl updateChannelMetadata",
        payload: {
          error
        }
      })));
    });

    this.leave = (channelId, memberId) => new Promise((r2, f) => {
      this.apiClient.leave(this.appId, channelId, memberId).catch(f);
      this.onMemberLeft.watch(e2 => e2.member.id === memberId, Config.get.rtcApi.timeout).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl onMemberLeft",
        payload: {
          error
        }
      })));
    });

    this.updateMemberMetadata = (memberId, metadata) => new Promise((r2, f) => {
      this.apiClient.updateMemberMetadata(this.appId, this.id, memberId, metadata).catch(f);
      this.onMemberMetadataUpdated.watch(e2 => e2.member.id === memberId && e2.member.metadata === metadata).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl updateMemberMetadata",
        payload: {
          error
        }
      })));
    });

    this.unpublish = publicationId => new Promise((r2, f) => {
      this.apiClient.unpublish(this.appId, this.id, publicationId).catch(f);
      this.onStreamUnpublished.watch(e2 => e2.publication.id === publicationId).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl unpublish",
        payload: {
          error
        }
      })));
    });

    this.updatePublicationMetadata = (publicationId, metadata) => new Promise((r2, f) => {
      this.apiClient.updatePublicationMetadata(this.appId, this.id, publicationId, metadata).catch(f);
      this.onPublicationMetadataUpdated.watch(e2 => e2.publication.id === publicationId && e2.publication.metadata === metadata).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl updatePublicationMetadata",
        payload: {
          error
        }
      })));
    });

    this.unsubscribe = subscriptionId => new Promise((r2, f) => {
      this.apiClient.unsubscribe(this.appId, this.id, subscriptionId).catch(f);
      this.onStreamUnsubscribed.watch(e2 => e2.subscription.id === subscriptionId).then(() => r2()).catch(error => f(new SkyWayError({
        type: "timeout",
        message: "ChannelImpl unsubscribe",
        payload: {
          error
        }
      })));
    });

    this.id = init.id;
    this.name = init.name;
    this.metadata = init.metadata;
    this.members = init.members;
    this.publications = init.publications;
    this.subscriptions = init.subscriptions;
    this.version = init.version;
    eventObserver.onEvent.add(event => {
      log8.debug("received event: ", event);
      this.version = event.data.channel.version;

      switch (event.type) {
        case "ChannelDeleted":
          {
            this._channelClosed();
          }
          break;

        case "ChannelMetadataUpdated":
          {
            this._channelMetadataUpdated(event.data);
          }
          break;

        case "MemberAdded":
          {
            this._memberJoined(event.data);
          }
          break;

        case "MemberRemoved":
          {
            this._memberLeft(event.data);
          }
          break;

        case "MemberMetadataUpdated":
          {
            this._memberMetadataUpdated(event.data);
          }
          break;

        case "StreamPublished":
          {
            this._streamPublished(event.data);
          }
          break;

        case "StreamUnpublished":
          {
            this._streamUnpublished(event.data);
          }
          break;

        case "PublicationMetadataUpdated":
          {
            this._publicationMetadataUpdated(event.data);
          }
          break;

        case "StreamSubscribed":
          {
            this._streamSubscribed(event.data);
          }
          break;

        case "StreamUnsubscribed":
          {
            this._streamUnsubscribed(event.data);
          }
          break;
      }
    });
    apiClient.onClose.once(() => {
      this.dispose();
    });
  }

  getMember(id) {
    return this.members.find(s => s.id === id);
  }

  addMember(member) {
    const exist = this.getMember(member.id);

    if (exist) {
      return exist;
    }

    this.members.push(member);
    return member;
  }

  deleteMember(id) {
    this.members = this.members.filter(m => m.id !== id);
  }

  getPublication(id) {
    return this.publications.find(s => s.id === id);
  }

  addPublication(summary) {
    const exist = this.getPublication(summary.id);

    if (exist) {
      return exist;
    }

    const publication = __spreadProps(__spreadValues({}, summary), {
      channelId: this.id,
      codecCapabilities: [],
      encodings: []
    });

    this.publications.push(publication);
    return publication;
  }

  deletePublication(publicationId) {
    this.publications = this.publications.filter(p => p.id !== publicationId);
  }

  getSubscription(id) {
    return this.subscriptions.find(s => s.id === id);
  }

  addSubscription(summary) {
    const exist = this.getSubscription(summary.id);

    if (exist) {
      return exist;
    }

    const publication = this.getPublication(summary.publicationId);

    const subscription = __spreadProps(__spreadValues({}, summary), {
      channelId: this.id,
      publisherId: publication.publisherId,
      contentType: publication.contentType
    });

    this.subscriptions.push(subscription);
    return subscription;
  }

  deleteSubscription(subscriptionId) {
    this.subscriptions = this.subscriptions.filter(s => s.id !== subscriptionId);
  }

  _channelClosed() {
    this.onClosed.emit({});
  }

  _channelMetadataUpdated(event) {
    this.metadata = event.channel.metadata;
    this.onMetadataUpdated.emit(event);
  }

  _memberJoined(event) {
    this.addMember(event.member);
    this.onMemberJoined.emit(event);
    this.onMembershipChanged.emit({});
  }

  _memberLeft(event) {
    const member = this.getMember(event.member.id);

    if (!member) {
      throw new SkyWayError({
        type: "notFound",
        message: "member not found",
        payload: {
          event
        }
      });
    }

    this.deleteMember(member.id);
    this.onMemberLeft.emit({
      member
    });
    this.onMembershipChanged.emit({});
  }

  _memberMetadataUpdated(event) {
    const member = this.getMember(event.member.id);

    if (!member) {
      throw new SkyWayError({
        type: "notFound",
        message: "member not found",
        payload: {
          event
        }
      });
    }

    member.metadata = event.member.metadata;
    this.onMemberMetadataUpdated.emit(event);
  }

  _streamPublished(incoming) {
    const publication = this.addPublication(incoming.publication);

    const outgoing = __spreadProps(__spreadValues({}, incoming), {
      publication
    });

    this.onStreamPublished.emit(outgoing);
    this.onPublicationChanged.emit({});
  }

  _streamUnpublished(incoming) {
    const publication = this.getPublication(incoming.publication.id);

    if (!publication) {
      throw new SkyWayError({
        type: "notFound",
        message: "publication not found"
      });
    }

    this.deletePublication(publication.id);

    const outgoing = __spreadProps(__spreadValues({}, incoming), {
      publication
    });

    this.onStreamUnpublished.emit(outgoing);
    this.onPublicationChanged.emit({});
  }

  _publicationMetadataUpdated(incoming) {
    const publication = this.getPublication(incoming.publication.id);

    if (!publication) {
      throw new SkyWayError({
        type: "notFound",
        message: "publication not found"
      });
    }

    publication.metadata = incoming.publication.metadata;

    const outgoing = __spreadProps(__spreadValues({}, incoming), {
      publication
    });

    this.onPublicationMetadataUpdated.emit(outgoing);
  }

  _streamSubscribed(incoming) {
    const subscription = this.addSubscription(incoming.subscription);

    const outgoing = __spreadProps(__spreadValues({}, incoming), {
      subscription
    });

    this.onStreamSubscribed.emit(outgoing);
    this.onSubscriptionChanged.emit({});
  }

  _streamUnsubscribed(incoming) {
    const subscription = this.getSubscription(incoming.subscription.id);
    if (!subscription) throw new SkyWayError({
      type: "notFound",
      message: "subscription not found"
    });
    this.deleteSubscription(subscription.id);

    const outgoing = __spreadProps(__spreadValues({}, incoming), {
      subscription
    });

    this.onStreamUnsubscribed.emit(outgoing);
    this.onSubscriptionChanged.emit({});
  }

  joinChannel(memberInit) {
    return __async(this, null, function* () {
      var _a2;

      if (memberInit.type) {
        memberInit.type = memberInit.type[0].toUpperCase() + memberInit.type.slice(1);
      }

      if (memberInit.subtype) {
        memberInit.subtype = memberInit.subtype[0].toUpperCase() + memberInit.subtype.slice(1);
      }

      log8.debug("[start] joinChannel", {
        memberInit
      });
      const res = yield this.apiClient.join(this.appId, this.id, __spreadValues({}, memberInit));
      const member = (_a2 = this.getMember(res.id)) != null ? _a2 : (yield this.onMemberJoined.watch(e2 => e2.member.id === res.id, Config.get.rtcApi.timeout).catch(error => {
        throw new SkyWayError({
          type: "timeout",
          message: "ChannelImpl onMemberJoined",
          payload: {
            res,
            error,
            exist: this.getMember(res.id)
          }
        });
      })).member;
      log8.debug("[end] joinChannel", {
        member
      });
      return member;
    });
  }

  updateMemberTtl(memberId, ttlSec) {
    return this.apiClient.updateMemberTtl(this.appId, this.id, memberId, ttlSec);
  }

  publish(init) {
    return __async(this, null, function* () {
      log8.debug("[start] apiClient.publish", {
        init
      });
      const publicationDto = yield this.apiClient.publish(this.appId, __spreadProps(__spreadValues({}, init), {
        channel: this.id
      }));
      log8.debug("[end] apiClient.publish", {
        publicationDto
      });
      const exist = this.getPublication(publicationDto.id);

      if (exist) {
        return exist;
      }

      const {
        publication
      } = yield this.onStreamPublished.watch(e2 => e2.publication.id === publicationDto.id, Config.get.rtcApi.timeout).catch(error => {
        throw new SkyWayError({
          type: "timeout",
          message: "ChannelImpl onStreamPublished",
          payload: {
            publicationDto,
            error,
            exist: this.getPublication(publicationDto.id)
          }
        });
      });
      return publication;
    });
  }

  subscribe(init) {
    return __async(this, null, function* () {
      log8.debug("[start] apiClient.subscribe", {
        init
      });
      const subscriptionDto = yield this.apiClient.subscribe(this.appId, __spreadProps(__spreadValues({}, init), {
        channel: this
      }));
      log8.debug("[end] apiClient.subscribe", {
        subscriptionDto
      });
      const exist = this.getSubscription(subscriptionDto.id);

      if (exist) {
        return exist;
      }

      const {
        subscription
      } = yield this.onStreamSubscribed.watch(e2 => e2.subscription.id === subscriptionDto.id, Config.get.rtcApi.timeout).catch(error => {
        throw new SkyWayError({
          type: "timeout",
          message: "ChannelImpl onStreamSubscribed",
          payload: {
            subscriptionDto,
            error
          }
        });
      });
      return subscription;
    });
  }

  dispose() {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    log8.debug("disposed", {
      id: this.id
    });
    this.eventObserver.dispose();

    this._events.dispose();
  }

};

function channelFactory(appId, rpc, api, channelDto) {
  const eventObserver = new EventObserverImpl(appId, rpc, channelDto);
  const channel = new ChannelImpl(appId, channelDto, eventObserver, api);
  return channel;
} // ../core/src/config.ts


init_process();

var import_deepmerge2 = __toESM(require_cjs());

var SkyWayConfig = class {
  constructor(options = {}) {
    this.rtcApi = {
      domain: "b-rapi.beta.skyway.ntt.com",
      timeout: 3e4,
      secure: true
    };
    this.iceParamServer = {
      domain: "b-ice.beta.skyway.ntt.com",
      version: 1,
      secure: true
    };
    this.messageService = {
      domain: "b-msas.beta.skyway.ntt.com",
      secure: true
    };
    this.rtcConfig = {
      timeout: 3e4,
      turnPolicy: "enable",
      encodedInsertableStreams: false
    };
    this.token = {
      updateReminderSec: 60
    };
    this.logLevel = "error";
    this.debug = {
      disableDPlane: false
    };
    Object.assign(this, (0, import_deepmerge2.default)(this, options));
  }

  static initialize(options = {}) {
    SkyWayConfig._instance = new SkyWayConfig(options);
    return SkyWayConfig._instance;
  }

  static get get() {
    if (!SkyWayConfig._instance) throw new Error("Config not initialized");
    return SkyWayConfig._instance;
  }

}; // ../core/src/publication/factory.ts

init_process(); // ../core/src/publication/index.ts

init_process();
var log9 = new Logger("packages/core/src/publication/index.ts");
var PublicationImpl = class {
  constructor(args) {
    this._status = "created";
    this.onUnpublished = new Event();
    this.onSubscribed = new Event();
    this.onUnsubscribed = new Event();
    this.onSubscriptionChanged = new Event();
    this.onMetadataUpdated = new Event();
    this._onEncodingsChanged = new Event();

    var _a2, _b2;

    this.id = args.id;
    this._channel = args.channel;
    this.publisherId = args.publisherId;
    this.contentType = args.contentType;
    this._metadata = args.metadata;
    this.originId = args.origin;
    this.codecCapabilities = (_a2 = args.codecCapabilities) != null ? _a2 : [];
    this.encodings = (_b2 = args.encodings) != null ? _b2 : [];
    this.stream = args.stream;
    this._status = "published";
    log9.debug("publication spawned", this.toJSON());
  }

  get publisher() {
    return this._channel._getMember(this.publisherId);
  }

  get origin() {
    var _a2;

    return this._channel._getPublication((_a2 = this.originId) != null ? _a2 : "");
  }

  get metadata() {
    return this._metadata;
  }

  get status() {
    return this._status;
  }

  get subscriptions() {
    return this._channel.subscriptions.filter(s => s.publication.id === this.id);
  }

  _updateMetadata(metadata) {
    this._metadata = metadata;
    this.onMetadataUpdated.emit(metadata);
  }

  _unpublished() {
    this.onUnpublished.emit();
    this._status = "canceled";
  }

  _subscribed() {
    this.onSubscribed.emit();
    this.onSubscriptionChanged.emit();
  }

  _unsubscribed() {
    this.onUnsubscribed.emit();
    this.onSubscriptionChanged.emit();
  }

  cancel() {
    return __async(this, null, function* () {
      this._channel._unpublish(this.id).catch(e2 => {
        throw e2;
      });

      this.stream = void 0;
      yield this.onUnpublished.asPromise(SkyWayConfig.get.rtcApi.timeout);
    });
  }

  updateMetadata(metadata) {
    return __async(this, null, function* () {
      this._channel._updatePublicationMetadata(this.id, metadata).catch(e2 => {
        throw e2;
      });

      yield this.onMetadataUpdated.watch(m => m === metadata, SkyWayConfig.get.rtcApi.timeout).catch(error => {
        throw new SkyWayError({
          type: "timeout",
          message: "onMetadataUpdated",
          payload: {
            error
          }
        });
      });
    });
  }

  updateEncodings(encodings) {
    this.encodings = encodings;

    this._onEncodingsChanged.emit(encodings);
  }

  toJSON() {
    var _a2;

    return {
      id: this.id,
      channelId: this._channel.id,
      publisherId: this.publisher.id,
      origin: (_a2 = this.origin) == null ? void 0 : _a2.id,
      contentType: this.contentType,
      metadata: this.metadata,
      codecCapabilities: this.codecCapabilities,
      encodings: this.encodings
    };
  }

}; // ../core/src/publication/factory.ts

function createPublication(channel, {
  publisherId,
  stream,
  origin,
  metadata,
  codecCapabilities,
  encodings,
  contentType,
  id
}) {
  const exist = channel._getPublication(id);

  if (exist) {
    return exist;
  }

  contentType = contentType.toLowerCase();
  const publication = new PublicationImpl({
    id,
    channel,
    publisherId,
    contentType,
    metadata,
    origin,
    stream,
    codecCapabilities: codecCapabilities != null ? codecCapabilities : [],
    encodings: encodings != null ? encodings : []
  });
  return publication;
} // ../core/src/subscription/factory.ts


init_process(); // ../core/src/subscription/index.ts

init_process();
var log10 = new Logger("packages/core/src/subscription/index.ts");
var SubscriptionImpl = class {
  constructor(args) {
    this._status = "created";
    this.onCanceled = new Event();
    this.onStreamAttached = new Event();
    this._channel = args.channel;
    this.id = args.id;
    this.contentType = args.contentType;
    this.subscriberId = args.subscriberId;
    this.publicationId = args.publicationId;
    this._status = "subscribed";
    log10.debug("subscription spawned", this.toJSON());
  }

  get subscriber() {
    return this._channel._getMember(this.subscriberId);
  }

  get publication() {
    return this._channel._getPublication(this.publicationId);
  }

  get status() {
    return this._status;
  }

  set stream(stream) {
    this._stream = stream;

    if (stream) {
      this.onStreamAttached.emit();
    }
  }

  get stream() {
    return this._stream;
  }

  toJSON() {
    return {
      id: this.id,
      contentType: this.contentType,
      subscriberId: this.subscriberId,
      publication: this.publication,
      channelId: this._channel.id
    };
  }

  _canceled() {
    this.stream = void 0;
    this._status = "canceled";
    this.onCanceled.emit();
  }

  cancel() {
    return __async(this, null, function* () {
      this._channel._unsubscribe(this.id).catch(e2 => {
        throw e2;
      });

      yield this.onCanceled.asPromise(SkyWayConfig.get.rtcApi.timeout);
    });
  }

}; // ../core/src/subscription/factory.ts

function createSubscription(channel, {
  subscriberId,
  publicationId,
  id
}) {
  const exist = channel._getSubscription(id);

  if (exist) return exist;

  const publication = channel._getPublication(publicationId);

  const contentType = publication.contentType;
  const subscription = new SubscriptionImpl({
    channel,
    id,
    subscriberId,
    publicationId,
    contentType
  });
  return subscription;
} // ../core/src/channel/index.ts


var log11 = new Logger("packages/core/src/channel/index.ts");
var SkyWayChannelImpl = class {
  constructor(_context, _channelImpl) {
    this._context = _context;
    this._channelImpl = _channelImpl;
    this.id = this._channelImpl.id;
    this.name = this._channelImpl.name;
    this.appId = this._context.appId;
    this._status = "created";
    this._api = this._context._api;
    this.disposed = false;
    this._members = {};

    this._getMember = id => this._members[id];

    this._persons = {};

    this._getPerson = id => this._persons[id];

    this._publications = {};

    this._getPublication = id => this._publications[id];

    this._subscriptions = {};

    this._getSubscription = id => this._subscriptions[id];

    this._events = new Events();
    this.onClosed = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.onMembershipChanged = this._events.make();
    this.onMemberJoined = this._events.make();
    this.onMemberLeft = this._events.make();
    this.onMemberMetadataUpdated = this._events.make();
    this.onPublicationChanged = this._events.make();
    this.onStreamPublished = this._events.make();
    this.onStreamUnpublished = this._events.make();
    this.onPublicationMetadataUpdated = this._events.make();
    this.onSubscriptionChanged = this._events.make();
    this.onStreamSubscribed = this._events.make();
    this.onStreamUnsubscribed = this._events.make();
    this._onDisposed = this._events.make();

    this.leave = member => __async(this, null, function* () {
      return this._channelImpl.leave(this.id, member.id);
    });

    this.updateMetadata = metadata => this._channelImpl.updateChannelMetadata(metadata);

    this.close = () => new Promise((r2, f) => __async(this, null, function* () {
      log11.debug("[start] close channel", {
        id: this.id
      });

      this._api.deleteChannel(this.id).catch(e2 => {
        f(e2);
      });

      try {
        yield this.onClosed.asPromise(SkyWayConfig.get.rtcApi.timeout);
        log11.debug("[end] close channel", {
          id: this.id
        });
      } catch (error) {
        f(error);
        log11.error("[failed] close channel", {
          id: this.id,
          error
        });
      }

      this._status = "closed";
      r2();
    }));

    this._updateMemberTtl = (memberId, ttlSec) => this._channelImpl.updateMemberTtl(memberId, ttlSec);

    this._updateMemberMetadata = (memberId, metadata) => this._channelImpl.updateMemberMetadata(memberId, metadata);

    this._publish = init => this._channelImpl.publish(init);

    this._unpublish = publicationId => __async(this, null, function* () {
      return this._channelImpl.unpublish(publicationId);
    });

    this._subscribe = (subscriberId, publicationId) => {
      const publication = this._getPublication(publicationId);

      const subscriber = this._getMember(subscriberId);

      if (subscriber == void 0) {
        throw new SkyWayError({
          type: "notFound",
          message: "subscriber not found",
          payload: {
            subscriberId,
            publicationId
          }
        });
      }

      return this._channelImpl.subscribe({
        publication: publication.toJSON(),
        subscriber: subscriber.toJSON()
      });
    };

    this._unsubscribe = subscriptionId => __async(this, null, function* () {
      if (!this._getSubscription(subscriptionId)) {
        throw new SkyWayError({
          type: "forbidden",
          message: "can't unsubscribe not exist subscription",
          payload: {
            subscriptionId
          }
        });
      }

      yield this._channelImpl.unsubscribe(subscriptionId).catch(e2 => {
        throw e2;
      });
    });

    this._updatePublicationMetadata = (publicationId, metadata) => this._channelImpl.updatePublicationMetadata(publicationId, metadata);

    this._setupPropertiesFromChannel();

    this._setupListenChannelEvent();

    this._status = "opened";

    _context._onDisposed.once(() => {
      this.dispose();
    });

    log11.debug("channel spawned", this.toJSON());
  }

  _addMember(memberDto) {
    const exist = this._getMember(memberDto.id);

    if (exist) {
      return exist;
    }

    const member = this._context._createRemoteMember(this, memberDto);

    this._members[member.id] = member;
    return member;
  }

  _removeMember(memberId) {
    delete this._members[memberId];
  }

  _addPerson(member) {
    this._persons[member.id] = member;
  }

  _removePerson(memberId) {
    delete this._persons[memberId];
  }

  _addPublication(p) {
    const exist = this._getPublication(p.id);

    if (exist) {
      return exist;
    }

    const publication = createPublication(this, p);
    this._publications[p.id] = publication;
    return publication;
  }

  _removePublication(publicationId) {
    delete this._publications[publicationId];
  }

  _addSubscription(s) {
    const exist = this._getSubscription(s.id);

    if (exist) {
      return exist;
    }

    const subscription = createSubscription(this, s);
    this._subscriptions[s.id] = subscription;
    return subscription;
  }

  _removeSubscription(subscriptionId) {
    delete this._subscriptions[subscriptionId];
  }

  get members() {
    return Object.values(this._members);
  }

  get persons() {
    return Object.values(this._persons);
  }

  get bots() {
    return this.members.filter(m => m.type === "bot");
  }

  get publications() {
    return Object.values(this._publications);
  }

  get subscriptions() {
    return Object.values(this._subscriptions);
  }

  get metadata() {
    return this._channelImpl.metadata;
  }

  get status() {
    return this._status;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      appId: this.appId,
      metadata: this.metadata,
      members: this.members,
      publications: this.publications,
      subscriptions: this.subscriptions
    };
  }

  _setupPropertiesFromChannel() {
    this._channelImpl.members.forEach(memberDto => {
      this._addMember(memberDto);
    });

    this._channelImpl.publications.forEach(publicationDto => {
      this._addPublication(publicationDto);
    });

    this._channelImpl.subscriptions.forEach(subscriptionDto => {
      this._addSubscription(subscriptionDto);
    });
  }

  _setupListenChannelEvent() {
    this._channelImpl.onClosed.add(() => this._handleOnChannelClose());

    this._channelImpl.onMetadataUpdated.add(({
      channel
    }) => this._handleOnChannelMetadataUpdate(channel.metadata));

    this._channelImpl.onMemberJoined.add(({
      member
    }) => {
      this._handleOnMemberJoin(member);
    });

    this._channelImpl.onMemberLeft.add(({
      member
    }) => {
      this._handleOnMemberLeft(member);
    });

    this._channelImpl.onMembershipChanged.pipe(this.onMembershipChanged);

    this._channelImpl.onMemberMetadataUpdated.add(({
      member
    }) => {
      this._handleOnMemberMetadataUpdate(member, member.metadata);
    });

    this._channelImpl.onStreamPublished.add(({
      publication
    }) => {
      this._handleOnStreamPublish(publication);
    });

    this._channelImpl.onStreamUnpublished.add(({
      publication
    }) => {
      this._handleOnStreamUnpublish(publication);
    });

    this._channelImpl.onPublicationChanged.pipe(this.onPublicationChanged);

    this._channelImpl.onPublicationMetadataUpdated.add(({
      publication
    }) => {
      this._handleOnStreamMetadataUpdate(publication, publication.metadata);
    });

    this._channelImpl.onStreamSubscribed.add(({
      subscription
    }) => {
      this._handleOnStreamSubscribe(subscription);
    });

    this._channelImpl.onStreamUnsubscribed.add(({
      subscription
    }) => {
      this._handleOnStreamUnsubscribe(subscription);
    });

    this._channelImpl.onSubscriptionChanged.pipe(this.onSubscriptionChanged);
  }

  _handleOnChannelClose() {
    this.onClosed.emit({});
    this.dispose();
  }

  _handleOnChannelMetadataUpdate(metadata) {
    this.onMetadataUpdated.emit({
      metadata
    });
  }

  _handleOnMemberJoin(memberDto) {
    const member = this._addMember(memberDto);

    this.onMemberJoined.emit({
      member
    });
  }

  _handleOnMemberLeft(memberDto) {
    const member = this._getMember(memberDto.id);

    this._removeMember(member.id);

    member._left();

    const person = this._getPerson(memberDto.id);

    if (person) {
      this._removePerson(member.id);

      person._left();
    }

    this.onMemberLeft.emit({
      member
    });
  }

  _handleOnMemberMetadataUpdate(memberDto, metadata) {
    const member = this._getMember(memberDto.id);

    member._metadataUpdated(metadata);

    const person = this._getPerson(memberDto.id);

    if (person) {
      person._metadataUpdated(metadata);
    }

    this.onMemberMetadataUpdated.emit({
      member,
      metadata
    });
  }

  _handleOnStreamPublish(publicationDto) {
    const publication = this._addPublication(publicationDto);

    this.onStreamPublished.emit({
      publication
    });
  }

  _handleOnStreamUnpublish(publicationDto) {
    const publication = this._getPublication(publicationDto.id);

    this._removePublication(publication.id);

    publication._unpublished();

    this.onStreamUnpublished.emit({
      publication
    });
  }

  _handleOnStreamMetadataUpdate(publicationDto, metadata) {
    const publication = this._getPublication(publicationDto.id);

    publication._updateMetadata(metadata);

    this.onPublicationMetadataUpdated.emit({
      publication,
      metadata
    });
  }

  _handleOnStreamSubscribe(subscriptionDto) {
    const subscription = this._addSubscription(subscriptionDto);

    const publication = this._getPublication(subscription.publication.id);

    publication._subscribed();

    this.onStreamSubscribed.emit({
      subscription
    });
  }

  _handleOnStreamUnsubscribe(subscriptionDto) {
    const subscription = this._getSubscription(subscriptionDto.id);

    this._removeSubscription(subscription.id);

    subscription._canceled();

    const publication = this._getPublication(subscription.publication.id);

    publication._unsubscribed();

    this.onStreamUnsubscribed.emit({
      subscription
    });
  }

  join() {
    return __async(this, arguments, function* (options = {}) {
      if (options.name != void 0) {
        const exist = this.members.find(m => m.name === options.name);

        if (exist) {
          throw new SkyWayError({
            type: "forbidden",
            message: "already exist same name member",
            payload: options
          });
        }
      }

      if (options.keepaliveIntervalSec === void 0) {
        options.keepaliveIntervalSec = 25;
      }

      log11.debug("join channel", {
        channelId: this.id,
        options
      });

      const init = __spreadProps(__spreadValues({}, options), {
        type: "person",
        subtype: "person"
      });

      if (options.keepaliveIntervalSec !== null) {
        init["ttlSec"] = Date.now() / 1e3 + options.keepaliveIntervalSec;
      }

      const member = yield this._channelImpl.joinChannel(init);
      member.name = init.name;
      const person = yield this._createLocalPerson(member, {
        keepaliveIntervalSec: options.keepaliveIntervalSec
      });
      const adapter = new LocalPersonAdapter(person);
      return adapter;
    });
  }

  memberMoveFromOtherChannel(adapter) {
    return __async(this, null, function* () {
      if (!(adapter instanceof LocalPersonAdapter)) {
        throw new SkyWayError({
          type: "invalidType",
          message: "invalid person instance"
        });
      }

      const leaveChannel = adapter.channel;

      if (this.id === leaveChannel.id) {
        throw new SkyWayError({
          type: "invalidParameter",
          message: "same channel"
        });
      }

      yield leaveChannel.leave(adapter);
      const init = {
        name: adapter.name,
        type: adapter.type,
        subtype: adapter.subtype,
        metadata: adapter.metadata
      };

      if (adapter.keepaliveIntervalSec != void 0) {
        init["ttlSec"] = Date.now() / 1e3 + adapter.keepaliveIntervalSec;
      }

      const member = yield this._channelImpl.joinChannel(init);
      const person = yield this._createLocalPerson(member, {
        keepaliveIntervalSec: adapter.keepaliveIntervalSec
      });
      adapter.apply(person);
    });
  }

  _createLocalPerson(_0, _1) {
    return __async(this, arguments, function* (member, {
      keepaliveIntervalSec
    }) {
      const person = yield createLocalPerson(this._context, this, member, {
        keepaliveIntervalSec
      });

      this._addPerson(person);

      return person;
    });
  }

  dispose() {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    log11.debug("disposed", {
      id: this.id
    });

    this._onDisposed.emit();

    this._events.dispose();

    this._channelImpl.dispose();
  }

};
var SkyWayChannel = class {
  static Create(_0) {
    return __async(this, arguments, function* (context, init = {}) {
      const channelImpl = yield context._api.createChannel(init);
      const channel = new SkyWayChannelImpl(context, channelImpl);
      return channel;
    });
  }

  static Find(context, query) {
    return __async(this, null, function* () {
      const channelImpl = yield context._api.findChannel(query);
      const channel = new SkyWayChannelImpl(context, channelImpl);
      return channel;
    });
  }

  static FindOrCreate(context, query) {
    return __async(this, null, function* () {
      const channelImpl = yield context._api.findOrCreateChannel(query);
      const channel = new SkyWayChannelImpl(context, channelImpl);
      return channel;
    });
  }

  constructor() {}

}; // ../core/src/channel/event.ts

init_process(); // ../core/src/context.ts

init_process(); // ../token/src/index.ts

init_process(); // ../token/node_modules/uuid/dist/esm-browser/index.js

init_process(); // ../token/node_modules/uuid/dist/esm-browser/rng.js

init_process();
var getRandomValues2;
var rnds82 = new Uint8Array(16);

function rng2() {
  if (!getRandomValues2) {
    getRandomValues2 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues2) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }

  return getRandomValues2(rnds82);
} // ../token/node_modules/uuid/dist/esm-browser/stringify.js


init_process(); // ../token/node_modules/uuid/dist/esm-browser/validate.js

init_process(); // ../token/node_modules/uuid/dist/esm-browser/regex.js

init_process();
var regex_default2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i; // ../token/node_modules/uuid/dist/esm-browser/validate.js

function validate2(uuid) {
  return typeof uuid === "string" && regex_default2.test(uuid);
}

var validate_default2 = validate2; // ../token/node_modules/uuid/dist/esm-browser/stringify.js

var byteToHex2 = [];

for (i = 0; i < 256; ++i) {
  byteToHex2.push((i + 256).toString(16).substr(1));
}

var i;

function stringify2(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex2[arr[offset + 0]] + byteToHex2[arr[offset + 1]] + byteToHex2[arr[offset + 2]] + byteToHex2[arr[offset + 3]] + "-" + byteToHex2[arr[offset + 4]] + byteToHex2[arr[offset + 5]] + "-" + byteToHex2[arr[offset + 6]] + byteToHex2[arr[offset + 7]] + "-" + byteToHex2[arr[offset + 8]] + byteToHex2[arr[offset + 9]] + "-" + byteToHex2[arr[offset + 10]] + byteToHex2[arr[offset + 11]] + byteToHex2[arr[offset + 12]] + byteToHex2[arr[offset + 13]] + byteToHex2[arr[offset + 14]] + byteToHex2[arr[offset + 15]]).toLowerCase();

  if (!validate_default2(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }

  return uuid;
}

var stringify_default2 = stringify2; // ../token/node_modules/uuid/dist/esm-browser/v4.js

init_process();

function v42(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng2)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify_default2(rnds);
}

var v4_default2 = v42; // ../token/src/encoder.ts

exports.uuidV4 = v4_default2;
init_process(); // ../../node_modules/jwt-decode/build/jwt-decode.esm.js

init_process();

function e(e2) {
  this.message = e2;
}

e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";

var r = typeof window != "undefined" && window.atob && window.atob.bind(window) || function (r2) {
  var t2 = String(r2).replace(/=+$/, "");
  if (t2.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");

  for (var n2, o2, a = 0, i = 0, c = ""; o2 = t2.charAt(i++); ~o2 && (n2 = a % 4 ? 64 * n2 + o2 : o2, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0) o2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o2);

  return c;
};

function t(e2) {
  var t2 = e2.replace(/-/g, "+").replace(/_/g, "/");

  switch (t2.length % 4) {
    case 0:
      break;

    case 2:
      t2 += "==";
      break;

    case 3:
      t2 += "=";
      break;

    default:
      throw "Illegal base64url string!";
  }

  try {
    return function (e3) {
      return decodeURIComponent(r(e3).replace(/(.)/g, function (e4, r2) {
        var t3 = r2.charCodeAt(0).toString(16).toUpperCase();
        return t3.length < 2 && (t3 = "0" + t3), "%" + t3;
      }));
    }(t2);
  } catch (e3) {
    return r(t2);
  }
}

function n(e2) {
  this.message = e2;
}

function o(e2, r2) {
  if (typeof e2 != "string") throw new n("Invalid token specified");
  var o2 = (r2 = r2 || {}).header === true ? 0 : 1;

  try {
    return JSON.parse(t(e2.split(".")[o2]));
  } catch (e3) {
    throw new n("Invalid token specified: " + e3.message);
  }
}

n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
var jwt_decode_esm_default = o; // ../token/src/encoder.ts

var import_jwt_encode = __toESM(require_src());

var SkyWayAuthToken = class {
  constructor(props) {
    Object.assign(this, props);
  }

  static Decode(token) {
    try {
      const props = jwt_decode_esm_default(token);
      const authToken = new SkyWayAuthToken(props);
      authToken.tokenString = token;
      return authToken;
    } catch (error) {
      throw new SkyWayError({
        type: "invalidParameter",
        message: "failed to decode token",
        payload: error
      });
    }
  }

  encode(secret) {
    this.tokenString = (0, import_jwt_encode.default)({
      jti: this.jti,
      iat: this.iat,
      exp: this.exp,
      scope: this.scope
    }, secret);
    return this.tokenString;
  }

}; // ../token/src/scope/app.ts

exports.SkyWayAuthToken = SkyWayAuthToken;
init_process(); // ../token/src/token.ts

init_process(); // ../core/src/plugin/internal/person/plugin.ts

init_process(); // ../core/src/plugin/interface/plugin.ts

init_process();
var SkyWayPlugin = class {
  constructor() {
    this._onContextAttached = new Event();
  }

  _attachContext(context) {
    this._context = context;

    this._onContextAttached.emit();
  }

}; // ../core/src/plugin/internal/person/connection/messageBuffer.ts

init_process();
var log12 = new Logger("packages/core/src/plugin/internal/person/connection/messageBuffer.ts");
var MessageBuffer = class {
  constructor(messaging) {
    this.messaging = messaging;
    this._indicateMessageBuffer = {};
    this._excludeConnectionIndicateBuffering = /* @__PURE__ */new Set();
    const {
      removeListener
    } = this.messaging.onIndicated.addListener(req => {
      const requesterIdName = req.src.id + req.src.name;

      if (this._excludeConnectionIndicateBuffering.has(requesterIdName)) {
        return;
      }

      if (!this._indicateMessageBuffer[requesterIdName]) {
        this._indicateMessageBuffer[requesterIdName] = [];
      }

      this._indicateMessageBuffer[requesterIdName].push(req);
    });
    this._disposer = removeListener;
  }

  resolveMessagingBuffer({
    id,
    name
  }) {
    const endpointIdName = id + name;
    const bufferedIndicates = this._indicateMessageBuffer[endpointIdName];

    if ((bufferedIndicates == null ? void 0 : bufferedIndicates.length) > 0) {
      log12.debug("resolveMessagingBuffer", {
        length: bufferedIndicates.length
      });
      bufferedIndicates.forEach(req => {
        this.messaging.onIndicated.emit(req);
      });
      delete this._indicateMessageBuffer[endpointIdName];
    }

    this._excludeConnectionIndicateBuffering.add(endpointIdName);
  }

  close() {
    this._disposer();

    this._indicateMessageBuffer = {};
    this._excludeConnectionIndicateBuffering = /* @__PURE__ */new Set();
  }

}; // ../core/src/plugin/internal/person/member.ts

init_process(); // ../core/src/member/index.ts

init_process();
var MemberImpl = class {
  constructor(args) {
    this._status = "joined";
    this._events = new Events();
    this.onLeft = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.channel = args.channel;
    this.id = args.id;
    this.name = args.name;
    this._metadata = args.metadata;
  }

  get metadata() {
    return this._metadata;
  }

  get status() {
    return this._status;
  }

  get publications() {
    return this.channel.publications.filter(p => p.publisher.id === this.id);
  }

  get subscriptions() {
    return this.channel.subscriptions.filter(p => p.subscriber.id === this.id);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      subtype: this.subtype,
      metadata: this.metadata
    };
  }

  _left() {
    this._status = "left";
    this.onLeft.emit();

    this._events.dispose();
  }

  _metadataUpdated(metadata) {
    this._metadata = metadata;
    this.onMetadataUpdated.emit(metadata);
  }

  updateMetadata(metadata) {
    return __async(this, null, function* () {
      yield this.channel._updateMemberMetadata(this.id, metadata);
    });
  }

}; // ../core/src/plugin/internal/person/connection/index.ts

init_process(); // ../core/src/media/stream/remote/factory.ts

init_process(); // ../core/src/media/stream/remote/audio.ts

init_process(); // ../core/src/media/stream/share.ts

init_process();

function attachElement(element, track) {
  var _a2;

  if (((_a2 = element != null ? element : {}) == null ? void 0 : _a2.srcObject) === void 0) {
    throw new SkyWayError({
      type: "invalidType",
      message: "invalid element was passed",
      payload: {
        element
      }
    });
  }

  if (element.srcObject) {
    element.srcObject.addTrack(track);
  } else {
    element.srcObject = new MediaStream([track]);
  }
}

function detachElement(element, track) {
  var _a2;

  if (((_a2 = element != null ? element : {}) == null ? void 0 : _a2.srcObject) === void 0) {
    throw new SkyWayError({
      type: "invalidType",
      message: "invalid element was passed",
      payload: {
        element
      }
    });
  }

  const stream = element.srcObject;

  if (stream.getTracks().length > 0) {
    stream.removeTrack(track);
  }

  if (stream.getTracks().length === 0) {
    element.srcObject = null;
  }
} // ../core/src/media/stream/remote/index.ts


init_process();
var RemoteStreamBase = class {
  constructor(id, label, contentType) {
    this.id = id;
    this.label = label;
    this.contentType = contentType;
    this.side = "remote";
  }

}; // ../core/src/media/stream/remote/audio.ts

var RemoteAudioStream = class extends RemoteStreamBase {
  constructor(id, label, track) {
    super(id, label, "audio");
    this.track = track;
    this.contentType = "audio";
  }

  attach(element) {
    this._element = element;
    attachElement(element, this.track);
  }

  detach() {
    if (this._element) {
      detachElement(this._element, this.track);
      this._element = void 0;
    }
  }

}; // ../core/src/media/stream/remote/data.ts

exports.RemoteAudioStream = RemoteAudioStream;
init_process();
var RemoteDataStream = class extends RemoteStreamBase {
  constructor(id, label, _datachannel) {
    super(id, label, "data");
    this._datachannel = _datachannel;
    this.contentType = "data";
    this.onData = new Event();

    _datachannel.onmessage = ({
      data
    }) => {
      this.onData.emit(JSON.parse(data));
    };
  }

}; // ../core/src/media/stream/remote/video.ts

exports.RemoteDataStream = RemoteDataStream;
init_process();
var RemoteVideoStream = class extends RemoteStreamBase {
  constructor(id, label, track) {
    super(id, label, "video");
    this.track = track;
    this.contentType = "video";
  }

  attach(element) {
    this._element = element;
    attachElement(element, this.track);
  }

  detach() {
    if (this._element) {
      detachElement(this._element, this.track);
      this._element = void 0;
    }
  }

}; // ../core/src/media/stream/remote/factory.ts

exports.RemoteVideoStream = RemoteVideoStream;

var createRemoteStream = (id, label, media) => {
  if (media instanceof RTCDataChannel) {
    return new RemoteDataStream(id, label, media);
  } else {
    if (media.kind === "audio") {
      return new RemoteAudioStream(id, label, media);
    } else if (media.kind === "video") {
      return new RemoteVideoStream(id, label, media);
    }
  }

  throw new SkyWayError({
    type: "notImplemented",
    message: "invalid stream type"
  });
}; // ../core/src/plugin/internal/person/connection/receiver.ts


init_process();

var sdpTransform = __toESM(require_lib()); // ../core/src/plugin/internal/person/connection/datachannel.ts


init_process();
var DataChannelNegotiationLabel = class {
  constructor(publicationId, streamId, label) {
    this.publicationId = publicationId;
    this.streamId = streamId;
    this.label = label;
  }

  static fromLabel(label) {
    const {
      p,
      s,
      l
    } = JSON.parse(label);
    return new DataChannelNegotiationLabel(p, s, l);
  }

  toLabel() {
    return JSON.stringify({
      p: this.publicationId,
      s: this.streamId,
      l: this.label
    });
  }

}; // ../core/src/plugin/internal/person/connection/peer.ts

init_process();
var log13 = new Logger("src/core/dataPlane/peerConnection/peer.ts");
var Peer = class {
  constructor(_iceManager, messenger, localPersonId, endpoint, role) {
    this._iceManager = _iceManager;
    this.messenger = messenger;
    this.localPersonId = localPersonId;
    this.endpoint = endpoint;
    this.role = role;
    this._pendingCandidates = [];
    this.pc = new RTCPeerConnection(__spreadProps(__spreadValues({}, SkyWayConfig.get.rtcConfig), {
      iceTransportPolicy: SkyWayConfig.get.rtcConfig.turnPolicy === "turnOnly" ? "relay" : void 0,
      iceServers: this._iceManager.iceServers
    }));
    this.onSignalingStateChanged = new Event();
    this.onConnectionStateChanged = new Event();
    this.onDisconnect = new Event();
    this.connected = false;
    this.disconnected = false;

    this._onICECandidate = ev => __async(this, null, function* () {
      if (ev.candidate == null || this.pc.connectionState === "closed") return;
      const message = {
        type: "p2pMessage",
        kind: "iceCandidateMessage",
        payload: {
          candidate: ev.candidate,
          role: this.role
        }
      };
      this.messenger.indicate(this.endpoint, message).catch(e2 => log13.error("failed to send candidate", e2));
      log13.debug(`[${this.localPersonId}] send candidate`);
    });

    this._onConnectionStateChange = () => __async(this, null, function* () {
      log13.debug("_onConnectionStateChange", this.localPersonId, this.pc.iceConnectionState);

      switch (this.pc.iceConnectionState) {
        case "connected":
          this.connected = true;
          this._pendingCandidates = [];
          break;

        case "failed":
          log13.warn("ice failed", {
            localPersonId: this.localPersonId,
            endpointId: this.endpoint.id
          });
          break;

        case "disconnected":
          yield new Promise(r2 => setTimeout(r2, 5e3));

          if (!["disconnected", "failed"].includes(this.pc.iceConnectionState) || this.pc.connectionState === "closed") {
            return;
          }

          log13.warn("ice disconnected", {
            localPersonId: this.localPersonId,
            endpointId: this.endpoint.id
          });
          break;
      }

      this.onConnectionStateChanged.emit(this.pc.iceConnectionState);
    });

    this.waitForState = (state, timeout = 1e4) => __async(this, null, function* () {
      if (this.pc.signalingState === state) return;
      yield this.onSignalingStateChanged.watch(() => this.pc.signalingState === state, timeout).catch(err => log13.warn("peerConnection state timeout", err));
    });

    var _a2;

    this.setPeerConnectionListener();
    const peerIdentity = (_a2 = this.pc) == null ? void 0 : _a2.peerIdentity;

    if (peerIdentity) {
      peerIdentity.catch(err => {
        log13.debug("firefox peerIdentity", err);
      });
    }
  }

  setPeerConnectionListener() {
    this.pc.onicecandidate = this._onICECandidate;
    this.pc.onconnectionstatechange = this._onConnectionStateChange;

    this.pc.onsignalingstatechange = () => this.onSignalingStateChanged.emit(this.pc.signalingState);
  }

  unSetPeerConnectionListener() {
    this.pc.onicecandidate = null;
    this.pc.onconnectionstatechange = null;
    this.pc.onsignalingstatechange = null;
  }

  handleCandidate(candidate) {
    return __async(this, null, function* () {
      this._pendingCandidates.push(candidate);

      if (this.pc.remoteDescription) {
        yield this.resolveCandidates();
      }
    });
  }

  resolveCandidates() {
    return __async(this, null, function* () {
      const candidates = [...this._pendingCandidates];
      this._pendingCandidates = [];
      yield Promise.all(candidates.map(candidate => {
        if (this.pc.signalingState === "closed") return;
        log13.debug("addIcecandidate", candidate);
        this.pc.addIceCandidate(candidate).catch(err => {
          log13.warn("failed to add ice candidate", {
            localPersonId: this.localPersonId,
            endpointId: this.endpoint.id,
            err
          });
        });
      }));
    });
  }

}; // ../core/src/plugin/internal/person/connection/receiver.ts

var log14 = new Logger("packages/core/src/plugin/internal/person/connection/receiver.ts");
var Receiver = class extends Peer {
  constructor(iceManager, messenger, localPersonId, endpoint) {
    super(iceManager, messenger, localPersonId, endpoint, "receiver");
    this.onStreamAdded = new Event();
    this._publicationInfo = {};
    this.streams = {};
    this._subscriptions = {};
    this._promiseQueue = new PromiseQueue();
    this.messenger.onIndicated.add(_0 => __async(this, [_0], function* ({
      src,
      data
    }) {
      if (!(src.id === endpoint.id && src.name === endpoint.name)) return;
      const message = data;

      switch (message.kind) {
        case "senderProduceMessage":
          {
            this._promiseQueue.push(() => this._handleSenderProduce(message.payload)).catch(err => log14.error("handle senderProduceMessage failed", {
              localPersonId: this.localPersonId,
              endpointId: this.endpoint.id,
              err
            }));
          }
          break;

        case "senderUnproduceMessage":
          {
            this._promiseQueue.push(() => this._handleSenderUnproduce(message.payload)).catch(err => log14.error("handle handleSenderUnproduce", {
              localPersonId: this.localPersonId,
              endpointId: this.endpoint.id,
              err
            }));
          }
          break;

        case "iceCandidateMessage":
          {
            const {
              role,
              candidate
            } = message.payload;

            if (role === "sender") {
              this.handleCandidate(candidate).catch(err => log14.warn("handle iceCandidateMessage", {
                localPersonId: this.localPersonId,
                endpointId: this.endpoint.id,
                err
              }));
            }
          }
          break;
      }
    }));

    this.pc.ontrack = ({
      track,
      transceiver
    }) => {
      if (!transceiver.mid) {
        throw new SkyWayError({
          type: "parameterMissing",
          message: "mid missing"
        });
      }

      const info = Object.values(this._publicationInfo).find(i => {
        var _a2;

        return ((_a2 = i.mid) == null ? void 0 : _a2.toString()) === transceiver.mid;
      });

      if (!info) {
        log14.warn("info not exist", {
          localPersonId: this.localPersonId,
          endpointId: this.endpoint.id,
          publicationInfo: this._publicationInfo,
          mid: transceiver.mid
        });
        return;
      }

      const sdpObject = sdpTransform.parse(this.pc.remoteDescription.sdp);
      const media = sdpObject.media.find(m => {
        var _a2;

        return ((_a2 = m.mid) == null ? void 0 : _a2.toString()) === transceiver.mid;
      });

      if (!media) {
        throw new SkyWayError({
          type: "notFound",
          message: "m-line not exist"
        });
      }

      const codecPT = media.payloads.split(" ")[0];
      const codecName = media.rtp.find(r2 => r2.payload.toString() === codecPT).codec;
      const mimeType = `${track.kind}/${codecName}`;
      const codec = {
        mimeType
      };
      this.streams[info.publicationId] = {
        media: track,
        codec,
        streamId: info.streamId,
        label: info.label
      };
      log14.debug("MediaStreamTrack added", info, track, codec);
      this.onStreamAdded.emit(__spreadProps(__spreadValues({}, info), {
        stream: track,
        codec
      }));
    };

    this.pc.ondatachannel = ({
      channel
    }) => {
      const {
        publicationId,
        label,
        streamId
      } = DataChannelNegotiationLabel.fromLabel(channel.label);
      const codec = {
        mimeType: "datachannel"
      };
      this.streams[publicationId] = {
        media: channel,
        codec,
        label,
        streamId
      };
      log14.debug("DataChannel added", publicationId, channel, codec);
      this.onStreamAdded.emit({
        publicationId,
        stream: channel,
        codec
      });
    };
  }

  get hasMedia() {
    if (Object.values(this.streams).length > 0) {
      return true;
    }

    return false;
  }

  close() {
    log14.debug("close receiver", this.localPersonId, this.endpoint.id);
    this.unSetPeerConnectionListener();
    this.pc.close();
  }

  add(subscription) {
    this._subscriptions[subscription.id] = subscription;
  }

  remove(subscriptionId) {
    const subscription = this._subscriptions[subscriptionId];

    if (!subscription) {
      throw new SkyWayError({
        type: "notFound",
        message: "receiver not have subscription",
        payload: {
          subscriptionId
        }
      });
    }

    delete this._subscriptions[subscriptionId];
    const publicationId = subscription.publication.id;
    const stream = this.streams[publicationId];

    if (!stream) {
      throw new SkyWayError({
        type: "notFound",
        message: "stream not consumed",
        payload: {
          subscriptionId,
          publicationId
        }
      });
    }

    delete this.streams[publicationId];
  }

  _handleSenderProduce(_0) {
    return __async(this, arguments, function* ({
      sdp,
      publicationId,
      info
    }) {
      if (this.pc.signalingState === "closed") {
        log14.debug("pc already closed");
        return;
      }

      if (this.pc.signalingState !== "stable") {
        if (this.pc.signalingState === "have-local-offer" && this.pc.remoteDescription || this.pc.signalingState === "have-remote-offer") {
          log14.warn("wait for be stable", {
            localPersonId: this.localPersonId,
            endpointId: this.endpoint.id
          });
          yield this.waitForState("stable");
          yield this._handleSenderProduce({
            sdp,
            publicationId,
            info
          });
          return;
        }

        log14.warn("something wrong", {
          localPersonId: this.localPersonId,
          endpointId: this.endpoint.id,
          signalingState: this.pc.signalingState
        });
        return;
      }

      log14.debug("handle info", info, Object.keys(this._publicationInfo));
      this._publicationInfo[info.publicationId] = info;
      yield this.sendAnswer(sdp);
      yield this.resolveCandidates();
    });
  }

  _handleSenderUnproduce(_0) {
    return __async(this, arguments, function* ({
      sdp,
      publicationId
    }) {
      if (this.pc.signalingState === "closed") {
        return;
      }

      if (this.pc.signalingState !== "stable") {
        if (this.pc.signalingState === "have-local-offer" && this.pc.remoteDescription || this.pc.signalingState === "have-remote-offer") {
          log14.warn("wait for be stable");
          yield this.waitForState("stable");
          yield this._handleSenderUnproduce({
            sdp,
            publicationId
          });
          return;
        }

        return;
      }

      delete this._publicationInfo[publicationId];
      yield this.sendAnswer(sdp);
      yield this.resolveCandidates();
    });
  }

  sendAnswer(sdp) {
    return __async(this, null, function* () {
      log14.debug(`[receiver] start: _answer()`);
      yield this.pc.setRemoteDescription(sdp);
      const answer = yield this.pc.createAnswer();
      yield this.pc.setLocalDescription(answer);
      const message = {
        type: "p2pMessage",
        kind: "receiverAnswerMessage",
        payload: {
          sdp: this.pc.localDescription
        }
      };
      yield this.messenger.indicate(this.endpoint, message).catch(e2 => log14.error("failed to send answer", {
        localPersonId: this.localPersonId,
        endpointId: this.endpoint.id,
        e: e2
      }));
      log14.debug(`[receiver] end: _answer()`);
    });
  }

}; // ../core/src/plugin/internal/person/connection/sender.ts

init_process();

var sdpTransform2 = __toESM(require_lib());

var log15 = new Logger("packages/core/src/plugin/internal/person/connection/sender.ts");
var Sender = class extends Peer {
  constructor(iceManager, messenger, memberId, endpoint) {
    super(iceManager, messenger, memberId, endpoint, "sender");
    this.publications = {};
    this.transceivers = {};
    this.datachannels = {};
    this._pendingPublications = [];
    this._isNegotiating = false;
    this.promiseQueue = new PromiseQueue();
    this.disposer = [];

    this._setParam = (transceiver, sendEncoding) => __async(this, null, function* () {
      const params = transceiver.sender.getParameters();

      if (params.encodings == void 0 || params.encodings.length === 0) {
        params.encodings = [{}];
      }

      params.encodings = [__spreadValues(__spreadValues({}, params.encodings[0]), sendEncoding)];
      yield transceiver.sender.setParameters(params).catch(e2 => log15.error("setPrams", {
        e: e2,
        localPersonId: this.localPersonId,
        endpointId: this.endpoint.id
      }));
    });

    this.messenger.onIndicated.add(_0 => __async(this, [_0], function* ({
      src,
      data
    }) {
      if (!(src.id === endpoint.id && src.name === endpoint.name)) return;
      const message = data;

      switch (message.kind) {
        case "receiverAnswerMessage":
          {
            this.promiseQueue.push(() => this._handleReceiverAnswer(message.payload)).catch(err => log15.error("handle receiverAnswerMessage", {
              localPersonId: this.localPersonId,
              endpointId: this.endpoint.id,
              err
            }));
          }
          break;

        case "iceCandidateMessage":
          {
            const {
              role,
              candidate
            } = message.payload;

            if (role === "receiver") {
              this.handleCandidate(candidate).catch(err => log15.warn("handle iceCandidateMessage", {
                localPersonId: this.localPersonId,
                endpointId: this.endpoint.id,
                err
              }));
            }
          }
          break;
      }
    }));
  }

  get hasMedia() {
    if (Object.values(this.datachannels).length > 0 || Object.values(this.transceivers).length > 0) {
      return true;
    }

    return false;
  }

  add(publication) {
    return __async(this, null, function* () {
      var _a2, _b2, _c;

      if (this._isNegotiating || this.pc.signalingState !== "stable") {
        this._pendingPublications.push(publication);

        log15.debug("isNegotiating", {
          publication,
          isNegotiating: this._isNegotiating,
          signalingState: this.pc.signalingState
        });
        return;
      }

      this._isNegotiating = true;
      log15.debug("add publication", {
        publication
      });
      this.publications[publication.id] = publication;
      const stream = publication.stream;

      if (!stream) {
        throw new SkyWayError({
          type: "notFound",
          message: "stream not found"
        });
      }

      if (stream.contentType === "data") {
        const dc = this.pc.createDataChannel(new DataChannelNegotiationLabel(publication.id, stream.id, stream.label).toLabel(), stream._options);
        this.disposer = [...this.disposer, stream._onWriteData.add(data => {
          if (dc.readyState !== "open") return;
          dc.send(data);
        }).removeListener];
        this.datachannels[publication.id] = dc;
      } else {
        this.disposer = [...this.disposer, stream._onReplaceTrack.add(track2 => __async(this, null, function* () {
          yield this._replaceTrack(publication.id, track2.clone());
        })).removeListener, stream._onMuted.add(() => __async(this, null, function* () {
          yield this._replaceTrack(publication.id, stream._mutedTrack.clone());
        })).removeListener, stream._onUnmuted.add(() => __async(this, null, function* () {
          yield this._replaceTrack(publication.id, stream.track.clone());
        })).removeListener];
        const track = stream.muted ? stream._mutedTrack.clone() : stream.track.clone();
        const transceiver = this.pc.addTransceiver(track, {
          direction: "sendonly"
        });

        publication._onEncodingsChanged.add(encodings => __async(this, null, function* () {
          yield this._setParam(transceiver, encodings[0]);
        }));

        this.transceivers[publication.id] = transceiver;
      }

      const offer = yield this.pc.createOffer().catch(err => {
        throw new SkyWayError({
          type: "internalError",
          message: "can't create offer",
          payload: err
        });
      });
      yield this.pc.setLocalDescription(offer);
      const sdpObject = sdpTransform2.parse(this.pc.localDescription.sdp);

      if (publication.contentType !== "data" && ((_a2 = publication.codecCapabilities) == null ? void 0 : _a2.length) > 0) {
        const transceiver = this.transceivers[publication.id];
        const mid = transceiver.mid;

        if (mid == void 0) {
          throw new SkyWayError({
            type: "notFound",
            message: "transceiver not have mid"
          });
        }

        this.applyCodecCapabilities((_b2 = publication.codecCapabilities) != null ? _b2 : [], mid, sdpObject);
        const offerSdp = sdpTransform2.write(sdpObject);
        yield this.pc.setLocalDescription({
          type: "offer",
          sdp: offerSdp
        });
      }

      const message = {
        type: "p2pMessage",
        kind: "senderProduceMessage",
        payload: {
          sdp: this.pc.localDescription,
          publicationId: publication.id,
          info: {
            publicationId: publication.id,
            streamId: stream.id,
            label: stream.label
          }
        }
      };

      if (publication.contentType !== "data") {
        const transceiver = this.transceivers[publication.id];

        if (((_c = publication.encodings) == null ? void 0 : _c.length) > 0) {
          yield this._setParam(transceiver, publication.encodings[0]);
        }

        const mid = transceiver.mid;

        if (mid == void 0) {
          throw new SkyWayError({
            type: "parameterMissing",
            message: "mid undefined",
            payload: {
              mid: transceiver.mid,
              publication,
              localPersonId: this.localPersonId,
              endpointId: this.endpoint.id
            }
          });
        }

        message.payload.info.mid = mid;
      }

      yield this.messenger.indicate(this.endpoint, message).catch(error => log15.error("in remote error :", {
        localPersonId: this.localPersonId,
        endpointId: this.endpoint.id,
        error
      }));
    });
  }

  applyCodecCapabilities(codecCapabilities, mid, sdpObject) {
    const preferCodecNames = codecCapabilities.map(c => {
      if (!c.mimeType.includes("/")) {
        throw new SkyWayError({
          type: "invalidParameter",
          message: "invalid mimeType format",
          payload: codecCapabilities
        });
      }

      const [, codecName] = c.mimeType.split("/");

      if (!codecName) {
        throw new SkyWayError({
          type: "invalidParameter",
          message: "codecName not found in mimeType",
          payload: codecCapabilities
        });
      }

      return codecName.toLowerCase();
    });
    const media = sdpObject.media.find(m => {
      var _a2;

      return ((_a2 = m.mid) == null ? void 0 : _a2.toString()) === mid;
    });

    if (!media) {
      throw new SkyWayError({
        type: "notFound",
        message: "media not found"
      });
    }

    const preferCodecs = media.rtp.filter(rtp => {
      const [codecName] = rtp.codec.split("/");

      if (preferCodecNames.includes(codecName.toLowerCase())) {
        return true;
      }

      return false;
    });
    const sorted = [...preferCodecs, ...media.rtp.filter(rtp => !preferCodecNames.includes(rtp.codec.toLowerCase()))];
    media.payloads = sorted.map(rtp => rtp.payload.toString()).join(" ");
  }

  remove(publicationId) {
    return __async(this, null, function* () {
      if (this._isNegotiating || this.pc.signalingState !== "stable") {
        this._pendingPublications.push(publicationId);

        log15.debug("isNegotiating", {
          publicationId,
          _isNegotiating: this._isNegotiating,
          signalingState: this.pc.signalingState
        });
        return;
      }

      this._isNegotiating = true;
      const publication = this.publications[publicationId];

      if (!publication) {
        log15.warn("publication not found", {
          publicationId
        });
        return;
      }

      delete this.publications[publicationId];
      const stream = publication.stream;

      if (!stream) {
        throw new SkyWayError({
          type: "notFound",
          message: "publication not have stream",
          payload: publication
        });
      }

      if (stream.contentType === "data") {
        const dc = this.datachannels[publicationId];
        dc.close();
        delete this.datachannels[publicationId];
      } else {
        const transceiver = this.transceivers[publicationId];
        transceiver.stop();
        delete this.transceivers[publicationId];
      }

      const offer = yield this.pc.createOffer().catch(err => {
        throw new SkyWayError({
          type: "internalError",
          message: "can't create offer",
          payload: err
        });
      });
      yield this.pc.setLocalDescription(offer);
      const message = {
        type: "p2pMessage",
        kind: "senderUnproduceMessage",
        payload: {
          sdp: this.pc.localDescription,
          publicationId
        }
      };
      yield this.messenger.indicate(this.endpoint, message).catch(error => log15.error("in remote error :", {
        localPersonId: this.localPersonId,
        endpointId: this.endpoint.id,
        error
      }));
    });
  }

  _replaceTrack(publicationId, track) {
    return __async(this, null, function* () {
      const transceiver = this.transceivers[publicationId];

      if (!transceiver) {
        log15.warn("can't replace track, transceiver not found", {
          publicationId
        });
        return;
      }

      yield transceiver.sender.replaceTrack(track);
    });
  }

  _handleReceiverAnswer(_0) {
    return __async(this, arguments, function* ({
      sdp
    }) {
      if (this.pc.signalingState === "closed") {
        return;
      }

      log15.debug("_handleReceiverAnswer");
      yield this.pc.setRemoteDescription(new RTCSessionDescription(sdp)).catch(err => {
        log15.error("sRD failed", {
          localPersonId: this.localPersonId,
          endpointId: this.endpoint.id,
          sdp
        });
        throw err;
      });
      yield this.resolveCandidates();
      yield this.waitForState("stable");
      this._isNegotiating = false;
      yield this._resolvePendingSender();
    });
  }

  _resolvePendingSender() {
    return __async(this, null, function* () {
      const publication = this._pendingPublications.shift();

      if (!publication) return;
      log15.debug("resolve pending sender", {
        publication
      });

      if (typeof publication === "string") {
        yield this.remove(publication);
      } else {
        yield this.add(publication);
      }
    });
  }

  close() {
    log15.debug("close sender", {
      localPersonId: this.localPersonId,
      endpointId: this.endpoint.id
    });
    this.unSetPeerConnectionListener();
    this.disposer.forEach(d => d());
    this.disposer = [];
    this.pc.close();
  }

}; // ../core/src/plugin/internal/person/connection/index.ts

var log16 = new Logger("packages/core/src/plugin/internal/person/connection/index.ts");
var P2PConnection = class {
  constructor(_iceManager, _messenger, channelId, localPersonId, remoteMember) {
    this._iceManager = _iceManager;
    this._messenger = _messenger;
    this.channelId = channelId;
    this.localPersonId = localPersonId;
    this.remoteMember = remoteMember;
    this.type = "p2p";
    this.onDisconnect = new Event();
    this.onClose = new Event();
    this.closed = false;
    this.disconnected = false;
    this.sender = new Sender(this._iceManager, this._messenger, this.localPersonId, this.remoteMember);
    this.receiver = new Receiver(this._iceManager, this._messenger, this.localPersonId, this.remoteMember);
    this.sender.onDisconnect.once(() => {
      this.disconnected = true;
      this.onDisconnect.emit();
    });
    this.receiver.onDisconnect.once(() => {
      this.disconnected = true;
      this.onDisconnect.emit();
    });
  }

  startPublishing(publication) {
    return __async(this, null, function* () {
      yield this.sender.add(publication);
    });
  }

  stopPublishing(publication) {
    return __async(this, null, function* () {
      yield this.sender.remove(publication.id);

      this._closeIfNeeded();
    });
  }

  startSubscribing(subscription) {
    return __async(this, null, function* () {
      this.receiver.add(subscription);
      let streamInfo = this.receiver.streams[subscription.publication.id];

      if (!streamInfo) {
        yield this.receiver.onStreamAdded.watch(({
          publicationId
        }) => subscription.publication.id === publicationId, SkyWayConfig.get.rtcConfig.timeout).catch(() => {
          throw new SkyWayError({
            type: "timeout",
            message: "onStreamAdded"
          });
        });
        streamInfo = this.receiver.streams[subscription.publication.id];
      }

      const remoteStream = createRemoteStream(streamInfo.streamId, streamInfo.label, streamInfo.media);
      subscription.codec = streamInfo.codec;
      subscription.stream = remoteStream;
    });
  }

  stopSubscribing(subscription) {
    return __async(this, null, function* () {
      this.receiver.remove(subscription.id);

      this._closeIfNeeded();
    });
  }

  _closeIfNeeded() {
    if (this.sender.hasMedia || this.receiver.hasMedia) return;
    this.close();
  }

  getStats(content) {
    return __async(this, null, function* () {
      const stream = content.stream;

      if (!stream) {
        throw new SkyWayError({
          type: "parameterMissing",
          message: "Subscription or Publication must has stream"
        });
      }

      if (stream.side === "local") {
        if (stream.contentType === "data") {
          return this.sender.pc.getStats();
        }

        return this.sender.pc.getStats(stream.track);
      } else {
        if (stream.contentType === "data") {
          return this.receiver.pc.getStats();
        }

        return this.receiver.pc.getStats(stream.track);
      }
    });
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    log16.debug("closed", {
      endpointId: this.remoteMember.id
    });
    this.sender.close();
    this.receiver.close();
    this.onClose.emit();
  }

}; // ../core/src/plugin/internal/person/connection/messenger.ts

init_process();
var P2PMessenger = class {
  constructor(messaging) {
    this.messaging = messaging;
    this.onIndicated = new Event();
    this.indicateChunkedMessageBuffer = {};
    this.indicateVersion = 0;

    this.indicate = (target, message) => __async(this, null, function* () {
      var _a2;

      const id = (this.indicateVersion++).toString();
      const payload = JSON.stringify(message.payload);

      if (payload.length > 10 * 1024) {
        const split = (_a2 = payload.match(/.{1,10240}/g)) != null ? _a2 : [];
        let offset = 0;

        for (const chunk of split) {
          const chunkMessage = {
            type: message.type,
            kind: message.kind,
            length: split.length - 1,
            offset: offset++,
            chunk,
            id
          };
          yield this.messaging.indicate({
            id: target.id,
            name: target.name
          }, chunkMessage, SkyWayConfig.get.rtcConfig.timeout).catch(e2 => {
            throw new SkyWayError({
              type: "internalError",
              message: "indicate failed",
              payload: e2
            });
          });
        }
      } else {
        const chunkMessage = {
          type: message.type,
          kind: message.kind,
          length: 0,
          offset: 0,
          chunk: payload,
          id
        };
        yield this.messaging.indicate({
          id: target.id,
          name: target.name
        }, chunkMessage, 30).catch(e2 => {
          throw new SkyWayError({
            type: "internalError",
            message: "indicate failed",
            payload: e2
          });
        });
      }
    });

    messaging.onIndicated.addListener(({
      src,
      data
    }) => {
      var _a2;

      if (data.type !== "p2pMessage") return;
      const messageChunk = data;
      const {
        type,
        kind,
        chunk,
        length,
        offset,
        id: messageId
      } = messageChunk;

      if (length === 0) {
        this.onIndicated.emit({
          src,
          data: {
            type,
            kind,
            payload: JSON.parse(chunk)
          }
        });
      } else {
        this.indicateChunkedMessageBuffer[messageId] = [...((_a2 = this.indicateChunkedMessageBuffer[messageId]) != null ? _a2 : []), messageChunk.chunk];

        if (length === offset) {
          const message = this.indicateChunkedMessageBuffer[messageId].join("");
          delete this.indicateChunkedMessageBuffer[messageId];
          this.onIndicated.emit({
            src,
            data: {
              type,
              kind,
              payload: JSON.parse(message)
            }
          });
        }
      }
    });
  }

}; // ../core/src/plugin/internal/person/member.ts

var log17 = new Logger("packages/core/src/plugin/internal/person/member.ts");
var RemotePersonImpl = class extends MemberImpl {
  constructor(args) {
    super(args);
    this.type = "person";
    this.subtype = "person";
    this.side = "remote";
    this._connections = {};
    this.onPublicationSubscribed = this._events.make();
    this.onPublicationUnsubscribed = this._events.make();
    this.plugin = args.plugin;
    this.channel.onStreamUnsubscribed.add(({
      subscription
    }) => {
      if (subscription.subscriber.id === this.id) {
        this.onPublicationUnsubscribed.emit({
          subscription
        });
      }
    });
    this.channel.onStreamSubscribed.add(({
      subscription
    }) => {
      if (subscription.subscriber.id === this.id) {
        this.onPublicationSubscribed.emit({
          subscription
        });
      }
    });
    this.onLeft.once(() => {
      log17.debug("RemotePerson left: ", {
        id: this.id
      });
      Object.values(this._connections).forEach(connection => {
        connection.close();
      });
      this._connections = {};
    });
  }

  _getConnection(localPersonId) {
    return this._connections[localPersonId];
  }

  _getOrCreateConnection(localPersonId) {
    var _a2;

    const connection = (_a2 = this._getConnection(localPersonId)) != null ? _a2 : this._createConnection(this.channel, localPersonId, this);
    return connection;
  }

  _createConnection(channel, localPersonId, endpointMember) {
    const localPerson = channel._getPerson(localPersonId);

    if (localPerson.side !== "local") {
      throw new SkyWayError({
        type: "invalidParameter",
        message: "wrong localPerson type"
      });
    }

    const messaging = localPerson._messaging;
    const messenger = new P2PMessenger(messaging);
    const connection = new P2PConnection(localPerson.iceManager, messenger, channel.id, localPersonId, endpointMember);
    this.plugin.messageBuffers[localPersonId].resolveMessagingBuffer(endpointMember);
    connection.onClose.once(() => {
      delete this._connections[localPersonId];
    });
    this._connections[localPersonId] = connection;
    return connection;
  }

  subscribe(publicationId) {
    return __async(this, null, function* () {
      this.channel._subscribe(this.id, publicationId).catch(e2 => {
        throw e2;
      });

      const {
        subscription
      } = yield this.onPublicationSubscribed.watch(({
        subscription: subscription2
      }) => subscription2.publication.id === publicationId, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onPublicationSubscribed"
        });
      });
      return {
        subscription
      };
    });
  }

  unsubscribe(subscriptionId) {
    return __async(this, null, function* () {
      yield this.channel._unsubscribe(subscriptionId);
    });
  }

}; // ../core/src/plugin/internal/person/plugin.ts

var PersonPlugin = class extends SkyWayPlugin {
  constructor() {
    super(...arguments);
    this.subtype = "person";
    this.messageBuffers = {};

    this._whenCreateLocalPerson = person => __async(this, null, function* () {
      this.messageBuffers[person.id] = new MessageBuffer(person._messaging);
    });

    this._whenDisposeLocalPerson = person => __async(this, null, function* () {
      const messageBuffer = this.messageBuffers[person.id];
      messageBuffer.close();
      delete this.messageBuffers[person.id];
    });

    this._createRemoteMember = (channel, memberDto) => {
      const person = new RemotePersonImpl(__spreadProps(__spreadValues({}, this._context), {
        channel,
        metadata: memberDto.metadata,
        id: memberDto.id,
        name: memberDto.name,
        plugin: this
      }));
      return person;
    };
  }

};

var registerPersonPlugin = context => {
  const plugin = new PersonPlugin();
  context.registerPlugin(plugin);
  return plugin;
}; // ../core/src/plugin/internal/unknown/plugin.ts


init_process(); // ../core/src/plugin/internal/unknown/member.ts

init_process(); // ../core/src/plugin/internal/unknown/connection.ts

init_process();
var log18 = new Logger("packages/core/src/plugin/internal/unknown/connection.ts");
var UnknownConnection = class {
  constructor(localPersonId, remoteMember) {
    this.localPersonId = localPersonId;
    this.remoteMember = remoteMember;
    this.type = "unknown";
    this.onDisconnect = new Event();
    this.onClose = new Event();
    this.closed = false;
  }

  close() {
    this.closed = true;
    this.onClose.emit();
  }

  startPublishing(publication) {
    return __async(this, null, function* () {
      log18.debug(`this is unknown type connection. should install ${this.remoteMember.subtype} plugin`, {
        publication
      });
    });
  }

  stopPublishing(publication) {
    return __async(this, null, function* () {
      log18.debug(`this is unknown type connection. should install ${this.remoteMember.subtype} plugin`, {
        publication
      });
    });
  }

  startSubscribing(subscription) {
    return __async(this, null, function* () {
      log18.debug(`this is unknown type connection. should install ${this.remoteMember.subtype} plugin`, {
        subscription
      });
    });
  }

  stopSubscribing(subscription) {
    return __async(this, null, function* () {
      log18.debug(`this is unknown type connection. should install ${this.remoteMember.subtype} plugin`, {
        subscription
      });
    });
  }

}; // ../core/src/plugin/internal/unknown/member.ts

var log19 = new Logger("packages/core/src/plugin/internal/person/member.ts");
var UnknownMemberImpl = class extends MemberImpl {
  constructor(args) {
    super(args);
    this.type = "bot";
    this.side = "remote";
    this._connections = {};
    this.plugin = args.plugin;
    this.subtype = args.subtype;
    log19.warn("unknown subtype member spawned", args);
  }

  _getConnection(localPersonId) {
    return this._connections[localPersonId];
  }

  _getOrCreateConnection(localPersonId) {
    var _a2;

    const connection = (_a2 = this._getConnection(localPersonId)) != null ? _a2 : this._createConnection(localPersonId, this);
    return connection;
  }

  _createConnection(localPersonId, endpointMember) {
    return new UnknownConnection(localPersonId, endpointMember);
  }

}; // ../core/src/plugin/internal/unknown/plugin.ts

var UnknownPlugin = class extends SkyWayPlugin {
  constructor() {
    super(...arguments);
    this.subtype = "unknown";

    this._createRemoteMember = (channel, memberDto) => {
      const person = new UnknownMemberImpl(__spreadProps(__spreadValues({}, this._context), {
        channel,
        metadata: memberDto.metadata,
        id: memberDto.id,
        name: memberDto.name,
        plugin: this,
        subtype: memberDto.subtype
      }));
      return person;
    };
  }

}; // ../core/src/context.ts

var log20 = new Logger("packages/core/src/context.ts");
var SkyWayContext2 = class {
  constructor(api, authToken) {
    this.authToken = authToken;
    this.plugins = [];
    this._unknownPlugin = new UnknownPlugin();
    this.disposed = false;
    this._reminderSec = SkyWayConfig.get.token.updateReminderSec;
    this._events = new Events();
    this.onTokenUpdateReminder = this._events.make();
    this.onTokenExpired = this._events.make();
    this._onTokenUpdated = this._events.make();
    this._onDisposed = this._events.make();

    if (!authToken.tokenString) {
      throw new SkyWayError({
        type: "parameterMissing",
        message: "tokenString is required"
      });
    }

    this._authTokenString = authToken.tokenString;
    this.appId = this.authToken.scope.app.id;
    log20.debug("SkyWayContext spawned", {
      appId: this.appId
    });

    this._setTokenExpireTimer();

    registerPersonPlugin(this);
    this._api = api;

    this._api.onFatalError.once(() => {
      log20.error("onFatalError", {
        appId: this.appId
      });
      this.dispose();
    });
  }

  static Create(_0) {
    return __async(this, arguments, function* (authTokenString, configOptions = {}) {
      const config = SkyWayConfig.initialize(configOptions);
      Logger.level = config.logLevel;
      const token = SkyWayAuthToken.Decode(authTokenString);
      log20.debug("config", config);

      try {
        const api = yield RtcApiClient.Create({
          appId: token.scope.app.id,
          token: authTokenString,
          logLevel: config.logLevel,
          rtcApi: config.rtcApi
        });
        return new SkyWayContext2(api, token);
      } catch (error) {
        throw new SkyWayError({
          type: "internalError",
          message: "create api client failed",
          payload: {
            error
          }
        });
      }
    });
  }

  get authTokenString() {
    return this._authTokenString;
  }

  get config() {
    return SkyWayConfig.get;
  }

  get _received() {
    return this._api.received;
  }

  _setTokenExpireTimer() {
    const expiresInSec = this.authToken.exp - Date.now() / 1e3;

    if (expiresInSec < 0) {
      throw new SkyWayError({
        type: "invalidParameter",
        message: "exp is invalid value"
      });
    }

    if (this.tokenUpdateReminderTimer) {
      clearTimeout(this.tokenUpdateReminderTimer);
    }

    const tokenExpireReminderTimeSec = expiresInSec - this._reminderSec;

    if (tokenExpireReminderTimeSec < 0) {
      throw new SkyWayError({
        type: "invalidParameter",
        message: "exp is less than the reminder value",
        payload: {
          expiresInSec,
          reminderSec: this._reminderSec
        }
      });
    }

    log20.debug({
      tokenExpireReminderTimeSec
    });
    this.tokenUpdateReminderTimer = setTimeout(() => {
      log20.debug("tokenUpdateReminder", {
        appid: this.appId
      });
      this.onTokenUpdateReminder.emit();
    }, tokenExpireReminderTimeSec * 1e3);

    if (this.tokenExpiredTimer) {
      clearTimeout(this.tokenExpiredTimer);
    }

    log20.debug({
      expiresInSec
    });
    this.tokenExpiredTimer = setTimeout(() => {
      log20.debug("tokenExpired", {
        appid: this.appId
      });
      this.onTokenExpired.emit();
    }, expiresInSec * 1e3);
  }

  updateAuthToken(token) {
    this._authTokenString = token;
    this.authToken = SkyWayAuthToken.Decode(this._authTokenString);

    if (this.authToken.scope.app.id !== this.appId) {
      throw new SkyWayError({
        type: "invalidParameter",
        message: "appId does not match"
      });
    }

    this._api.updateAuthToken(token);

    this._onTokenUpdated.emit(token);

    this._setTokenExpireTimer();
  }

  registerPlugin(plugin) {
    if (this.plugins.find(p => p.subtype === plugin.subtype)) {
      return;
    }

    plugin._attachContext(this);

    this.plugins.push(plugin);
  }

  _createRemoteMember(channel, memberDto) {
    const exist = channel._getMember(memberDto.id);

    if (exist) {
      return exist;
    }

    log20.debug("createRemoteMember", {
      memberDto
    });
    memberDto.type = memberDto.type.toLowerCase();
    memberDto.subtype = memberDto.subtype.toLowerCase();
    let plugin = this.plugins.find(p => p.subtype === memberDto.subtype);

    if (!plugin) {
      plugin = this._unknownPlugin;
      log20.warn(`unknown remote member type. plugin not exist. should install ${memberDto.subtype} plugin`, {
        memberDto
      });
    }

    const member = plugin._createRemoteMember(channel, memberDto);

    return member;
  }

  dispose() {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    log20.debug("disposed", {
      appid: this.appId
    });

    this._onDisposed.emit();

    this._events.dispose();

    this._api.close();
  }

}; // ../core/src/external/ice.ts

exports.SkyWayContext = SkyWayContext2;
init_process();
var log21 = new Logger("packages/core/src/external/ice.ts");
var IceManager = class {
  constructor(domain, version, secure, turnPolicy) {
    this.domain = domain;
    this.version = version;
    this.secure = secure;
    this.turnPolicy = turnPolicy;
    this.stunServers = [];
    this._endpoint = `http${this.secure ? "s" : ""}://${this.domain}/v${this.version}`;
    this.http = new HttpClient(this._endpoint);
  }

  setupIceServers(jwt, memberId, ttl) {
    return __async(this, null, function* () {
      const body = {
        memberId,
        ttl
      };
      const {
        turn,
        stun
      } = yield this.http.post(`/ice-params`, body, {
        headers: {
          authorization: `Bearer ${jwt}`
        }
      });
      log21.debug("iceServer params", {
        turn,
        stun
      });

      if (turn) {
        this.turnServer = {
          credential: turn.credential,
          urls: `turn:${turn.domain}:${turn.port}`,
          username: turn.username
        };
      }

      this.stunServers = [{
        urls: `stun:${stun.domain}:${stun.port}`
      }];
    });
  }

  get iceServers() {
    const iceServers = [...this.stunServers];

    if (this.turnPolicy !== "disable" && this.turnServer) {
      iceServers.push(this.turnServer);
    }

    return iceServers;
  }

}; // ../core/src/media/index.ts

init_process(); // ../core/src/media/device.ts

init_process(); // ../core/src/media/stream/local/audio.ts

init_process(); // ../core/src/media/util.ts

init_process();

var silence = () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const dst = ctx.createMediaStreamDestination();
  return Object.assign(dst.stream.getAudioTracks()[0], {
    enabled: false
  });
}; // ../core/src/media/stream/local/index.ts


init_process();

var import_uuid3 = __toESM(require_uuid());

var LocalStreamBase = class {
  constructor(label, contentType) {
    this.label = label;
    this.contentType = contentType;
    this.side = "local";
    this.id = (0, import_uuid3.v4)();
    this._muted = false;
    this._onMuted = new Event();
    this._onUnmuted = new Event();
  }

  get muted() {
    return this._muted;
  }

  mute() {
    if (this.muted) return;
    this._muted = true;

    this._onMuted.emit();
  }

  unmute() {
    if (!this.muted) return;
    this._muted = false;

    this._onUnmuted.emit();
  }

}; // ../core/src/media/stream/local/audio.ts

var LocalAudioStream = class extends LocalStreamBase {
  constructor(label, track) {
    super(label, "audio");
    this.track = track;
    this.contentType = "audio";
    this._mutedTrack = silence();
    this._onReplaceTrack = new Event();
  }

  attach(element) {
    this._element = element;
    attachElement(element, this.track);
  }

  detach() {
    if (this._element) {
      detachElement(this._element, this.track);
      this._element = void 0;
    }
  }

  replaceTrack(track) {
    this._onReplaceTrack.emit(track);
  }

}; // ../core/src/media/stream/local/video.ts

exports.LocalAudioStream = LocalAudioStream;
init_process(); // ../core/src/media/stream/local/util.ts

init_process();

var blankScreen = ({
  width = 640,
  height = 480
} = {}) => {
  const canvas = Object.assign(document.createElement("canvas"), {
    width,
    height
  });
  canvas.getContext("2d").fillRect(0, 0, width, height);
  const stream = canvas.captureStream();
  return stream.getVideoTracks()[0];
}; // ../core/src/media/stream/local/video.ts


var LocalVideoStream = class extends LocalStreamBase {
  constructor(label, track) {
    super(label, "video");
    this.track = track;
    this.contentType = "video";
    this._mutedTrack = blankScreen({
      width: this.track.getSettings().width,
      height: this.track.getSettings().height
    });
    this._onReplaceTrack = new Event();
  }

  attach(element) {
    this._element = element;
    attachElement(element, this.track);
  }

  detach() {
    if (this._element) {
      detachElement(this._element, this.track);
      this._element = void 0;
    }
  }

  replaceTrack(track) {
    this._onReplaceTrack.emit(track);
  }

}; // ../core/src/media/device.ts

exports.LocalVideoStream = LocalVideoStream;
var MediaDeviceManager = class {
  constructor() {
    this.onDeviceChange = new Event();
    this._devices = [];

    if (!(navigator == null ? void 0 : navigator.mediaDevices)) {
      throw new SkyWayError({
        type: "forbidden",
        message: "mediaDevices not exist. maybe not under https or localhost or 127.0.0.1 environment"
      });
    }

    navigator.mediaDevices.addEventListener("devicechange", () => __async(this, null, function* () {
      const devices = yield this._enumerateDevicesArray();
      const removed = [];

      this._devices.forEach(prev => {
        if (!devices.map(d => d.id).includes(prev.id)) {
          removed.push(prev);
        }
      });

      const added = [];
      devices.map(d => d.id).forEach(next => {
        if (!this._devices.map(d => d.id).includes(next)) {
          added.push(devices.find(d => d.id === next));
        }
      });
      removed.forEach(device => {
        this.onDeviceChange.emit({
          state: "removed",
          device
        });
      });
      added.forEach(device => {
        this.onDeviceChange.emit({
          state: "added",
          device
        });
      });
      this._devices = devices;
    }));
  }

  _enumerateDevicesArray() {
    return __async(this, null, function* () {
      const devices = yield navigator.mediaDevices.enumerateDevices();
      return devices.map(d => new MediaDevice(d)).filter(d => d.id.length > 0);
    });
  }

  _enumerateDevicesWithAuth() {
    return __async(this, arguments, function* ({
      video,
      audio
    } = {
      audio: true,
      video: true
    }) {
      if (video || audio) {
        yield navigator.mediaDevices.getUserMedia({
          video,
          audio
        });
      }

      this._devices = yield this._enumerateDevicesArray();
      return this._devices;
    });
  }

  enumerateDevices() {
    return __async(this, null, function* () {
      const devices = yield this._enumerateDevicesWithAuth();
      return devices;
    });
  }

  enumerateInputVideoDevices() {
    return __async(this, null, function* () {
      const devices = yield this._enumerateDevicesWithAuth({
        video: true
      });
      return devices.filter(d => d.kind === "videoinput");
    });
  }

  enumerateInputAudioDevices() {
    return __async(this, null, function* () {
      const devices = yield this._enumerateDevicesWithAuth({
        audio: true
      });
      return devices.filter(d => d.kind === "audioinput");
    });
  }

  enumerateOutputAudioDevices() {
    return __async(this, null, function* () {
      const devices = yield this._enumerateDevicesWithAuth({
        audio: true
      });
      return devices.filter(d => d.kind === "audiooutput");
    });
  }

  createCameraVideoStream() {
    return __async(this, arguments, function* (options = {}) {
      const [track] = (yield navigator.mediaDevices.getUserMedia({
        video: options
      })).getTracks();
      return new LocalVideoStream("camera", track);
    });
  }

  createMicrophoneAudioStream() {
    return __async(this, arguments, function* (options = {}) {
      const [track] = (yield navigator.mediaDevices.getUserMedia({
        audio: options
      })).getTracks();
      return new LocalAudioStream("microphone", track);
    });
  }

  createDataStream() {
    return __async(this, arguments, function* (options = {}) {
      return new LocalDataStream(options);
    });
  }

  createMicrophoneAudioAndCameraStream() {
    return __async(this, arguments, function* ({
      audio,
      video
    } = {}) {
      const stream = yield navigator.mediaDevices.getUserMedia({
        audio: audio != null ? audio : true,
        video: video != null ? video : true
      });
      const [audioTrack] = stream.getAudioTracks();
      const [videoTrack] = stream.getVideoTracks();
      return {
        audio: new LocalAudioStream("microphone", audioTrack),
        video: new LocalVideoStream("camera", videoTrack)
      };
    });
  }

};
exports.MediaDeviceManager = MediaDeviceManager;
var SkyWayMediaDevices = new MediaDeviceManager();
exports.SkyWayMediaDevices = SkyWayMediaDevices;
var MediaDevice = class {
  constructor(info) {
    this.id = info.deviceId;
    this.label = info.label;
    this.kind = info.kind;
  }

}; // ../core/src/media/stream/index.ts

init_process(); // ../core/src/media/stream/local/data.ts

init_process();
var LocalDataStream = class extends LocalStreamBase {
  constructor(_options = {}) {
    super("datachannel", "data");
    this._options = _options;
    this.contentType = "data";
    this._onWriteData = new Event();
  }

  write(object) {
    this._onWriteData.emit(JSON.stringify(object));
  }

}; // ../core/src/member/localPerson/index.ts

exports.LocalDataStream = LocalDataStream;
init_process(); // ../core/src/member/remoteMember.ts

init_process();

function isRemoteMember(member) {
  if (member == void 0) return false;

  if (member["side"] === "remote") {
    return true;
  }

  return false;
} // ../core/src/member/localPerson/agent/index.ts


init_process(); // ../core/src/member/localPerson/agent/publishing.ts

init_process();
var log22 = new Logger("packages/core/src/dataPlane/agent/publishing.ts");
var PublishingAgent = class {
  constructor(_localPerson) {
    this._localPerson = _localPerson;
  }

  startPublishing(publication, subscriber) {
    return __async(this, null, function* () {
      if (SkyWayConfig.get.debug.disableDPlane) {
        yield new Promise(r2 => setTimeout(r2, 500));
        return;
      }

      if (!publication.stream) {
        yield this._localPerson.onStreamPublished.watch(e2 => e2.publication.id === publication.id, SkyWayConfig.get.rtcApi.timeout).catch(() => {
          throw new SkyWayError({
            type: "timeout",
            message: "PublishingAgent onStreamPublished",
            payload: publication
          });
        });
      }

      const connection = subscriber._getOrCreateConnection(this._localPerson.id);

      if (connection.startPublishing) {
        yield connection.startPublishing(publication);
      }
    });
  }

  stopPublishing(publication, subscriber) {
    return __async(this, null, function* () {
      const connection = subscriber._getConnection(this._localPerson.id);

      if (connection == null ? void 0 : connection.stopPublishing) {
        connection.stopPublishing(publication).catch(err => {
          log22.error("stopPublishing failed", err);
        });
      }
    });
  }

}; // ../core/src/member/localPerson/agent/subscribing.ts

init_process();
var SubscribingAgent = class {
  constructor(_localPerson) {
    this._localPerson = _localPerson;
  }

  startSubscribing(subscription) {
    return __async(this, null, function* () {
      if (SkyWayConfig.get.debug.disableDPlane) {
        yield new Promise(r2 => setTimeout(r2, 500));
        return;
      }

      const publisher = subscription.publication.publisher;

      const connection = publisher._getOrCreateConnection(this._localPerson.id);

      if (connection.startSubscribing) {
        yield connection.startSubscribing(subscription);
      }
    });
  }

  stopSubscribing(subscription) {
    return __async(this, null, function* () {
      const publisher = subscription.publication.publisher;

      const connection = publisher._getConnection(this._localPerson.id);

      if (connection == null ? void 0 : connection.stopSubscribing) {
        yield connection.stopSubscribing(subscription);
      }
    });
  }

}; // ../core/src/member/localPerson/adapter.ts

init_process();
var LocalPersonAdapter = class {
  constructor(_impl) {
    this._impl = _impl;
    this._events = new Events();
    this.onLeft = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.onStreamPublished = this._events.make();
    this.onStreamUnpublished = this._events.make();
    this.onPublicationChanged = this._events.make();
    this.onStreamSubscribed = this._events.make();
    this.onStreamUnsubscribed = this._events.make();
    this.onSubscriptionChanged = this._events.make();
    this.apply(_impl);
  }

  get keepaliveIntervalSec() {
    return this._impl.keepaliveIntervalSec;
  }

  get type() {
    return this._impl.type;
  }

  get subtype() {
    return this._impl.subtype;
  }

  get side() {
    return this._impl.side;
  }

  get id() {
    return this._impl.id;
  }

  get name() {
    return this._impl.name;
  }

  get channel() {
    return this._impl.channel;
  }

  get metadata() {
    return this._impl.metadata;
  }

  get status() {
    return this._impl.status;
  }

  get publications() {
    return this._impl.publications;
  }

  get subscriptions() {
    return this._impl.subscriptions;
  }

  apply(person) {
    this._impl = person;
    person.onLeft.pipe(this.onLeft);
    person.onMetadataUpdated.pipe(this.onMetadataUpdated);
    person.onStreamPublished.pipe(this.onStreamPublished);
    person.onStreamUnpublished.pipe(this.onStreamUnpublished);
    person.onPublicationChanged.pipe(this.onPublicationChanged);
    person.onStreamSubscribed.pipe(this.onStreamSubscribed);
    person.onStreamUnsubscribed.pipe(this.onStreamUnsubscribed);
    person.onSubscriptionChanged.pipe(this.onSubscriptionChanged);
  }

  subscribe(publicationId) {
    return this._impl.subscribe(publicationId);
  }

  unsubscribe(subscriptionId) {
    return this._impl.unsubscribe(subscriptionId);
  }

  publish(stream, options = {}) {
    return this._impl.publish(stream, options);
  }

  unpublish(publicationId) {
    return this._impl.unpublish(publicationId);
  }

  updateMetadata(metadata) {
    return this._impl.updateMetadata(metadata);
  }

  leave() {
    return __async(this, null, function* () {
      yield this._impl.leave();
    });
  }

  getConnections() {
    return this._impl.getConnections();
  }

  dispose() {
    this._impl.dispose();
  }

}; // ../core/src/member/localPerson/factory.ts

init_process(); // ../message-client/src/index.ts

init_process(); // ../message-client/src/messageClient.ts

init_process();

var import_isomorphic_fetch = __toESM(require_fetch_npm_browserify()); // ../message-client/node_modules/uuid/dist/esm-browser/index.js


init_process(); // ../message-client/node_modules/uuid/dist/esm-browser/rng.js

init_process();
var getRandomValues3;
var rnds83 = new Uint8Array(16);

function rng3() {
  if (!getRandomValues3) {
    getRandomValues3 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues3) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }

  return getRandomValues3(rnds83);
} // ../message-client/node_modules/uuid/dist/esm-browser/stringify.js


init_process(); // ../message-client/node_modules/uuid/dist/esm-browser/validate.js

init_process(); // ../message-client/node_modules/uuid/dist/esm-browser/regex.js

init_process();
var regex_default3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i; // ../message-client/node_modules/uuid/dist/esm-browser/validate.js

function validate3(uuid) {
  return typeof uuid === "string" && regex_default3.test(uuid);
}

var validate_default3 = validate3; // ../message-client/node_modules/uuid/dist/esm-browser/stringify.js

var byteToHex3 = [];

for (i = 0; i < 256; ++i) {
  byteToHex3.push((i + 256).toString(16).substr(1));
}

var i;

function stringify3(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex3[arr[offset + 0]] + byteToHex3[arr[offset + 1]] + byteToHex3[arr[offset + 2]] + byteToHex3[arr[offset + 3]] + "-" + byteToHex3[arr[offset + 4]] + byteToHex3[arr[offset + 5]] + "-" + byteToHex3[arr[offset + 6]] + byteToHex3[arr[offset + 7]] + "-" + byteToHex3[arr[offset + 8]] + byteToHex3[arr[offset + 9]] + "-" + byteToHex3[arr[offset + 10]] + byteToHex3[arr[offset + 11]] + byteToHex3[arr[offset + 12]] + byteToHex3[arr[offset + 13]] + byteToHex3[arr[offset + 14]] + byteToHex3[arr[offset + 15]]).toLowerCase();

  if (!validate_default3(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }

  return uuid;
}

var stringify_default3 = stringify3; // ../message-client/node_modules/uuid/dist/esm-browser/v4.js

init_process();

function v43(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng3)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify_default3(rnds);
}

var v4_default3 = v43; // ../message-client/src/order.ts

init_process();
var MAX_PAYLOAD_LENGTH = 20480;
var Order = class {
  constructor(name, payload = {}) {
    this.name = name;
    this.payload = payload;
    this.id = v4_default3();
    this.data = this.payload === {} ? JSON.stringify({
      order: this.name,
      orderId: this.id
    }) : JSON.stringify({
      order: this.name,
      orderId: this.id,
      payload: this.payload
    });

    if (this.data.length > MAX_PAYLOAD_LENGTH) {
      throw new Error("payload size exceeds the upper limit");
    }
  }

}; // ../message-client/src/payloadTypes.ts

init_process();
var MessageKind = ["indicate", "request", "response"];

function isMessagePayload(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (!isMember(payload.src)) return false;
  if (typeof payload.kind !== "string" || !MessageKind.includes(payload.kind)) return false;
  if (payload.kind === "indicate" && typeof payload.isBroadcast !== "boolean") return false;

  if ((payload.kind === "request" || payload.kind === "response") && typeof payload.requestOrderId !== "string") {
    return false;
  }

  if (!payload.data || typeof payload.data !== "object") return false;
  return true;
}

function isOrderAcceptedPayload(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (typeof payload.orderId !== "string") return false;
  return true;
}

function isOrderRejectedPayload(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (typeof payload.orderId !== "string") return false;
  if (typeof payload.reason !== "string") return false;
  return true;
}

function isMember(arg) {
  if (arg === void 0 || Array.isArray(arg)) return false;
  if (typeof arg !== "object") return false;
  if (typeof arg.id !== "string") return false;
  if (typeof arg.name !== "undefined" && typeof arg.name !== "string") return false;
  return true;
} // ../message-client/src/socket.ts


init_process();

var import_isomorphic_ws2 = __toESM(require_browser()); // ../message-client/src/utils/event.ts


init_process();
var Event4 = class {
  constructor() {
    this._listeners = /* @__PURE__ */new Map();
    this._listenerIndex = 0;

    this.emit = arg => {
      this._listeners.forEach(listener => listener(arg));
    };

    this.removeAllListeners = () => {
      this._listeners.clear();
    };

    this.addListener = listener => {
      const id = this._listenerIndex;

      this._listeners.set(id, listener);

      this._listenerIndex++;

      const removeListener = () => {
        this._listeners.delete(id);
      };

      return {
        removeListener
      };
    };

    this.addOneTimeListener = listener => {
      const off = this.addListener(arg => {
        off.removeListener();
        listener(arg);
      });
      return off;
    };

    this.asPromise = timeLimit => new Promise((resolve, reject) => {
      let removeListener = () => {};

      const timeout = timeLimit && setTimeout(() => {
        reject("Event asPromise timeout");
        removeListener();
      }, timeLimit);
      const off = this.addOneTimeListener(arg => {
        if (timeout) clearTimeout(timeout);
        resolve(arg);
      });
      removeListener = off.removeListener;
    });
  }

}; // ../message-client/src/version.ts

init_process();
var PACKAGE_VERSION = "0.2.0-beta.0"; // ../message-client/src/socket.ts

var getReconnectWaitTime = reconnectCount => {
  return (__pow(2, reconnectCount) + Math.random()) * 1e3;
};

var Socket = class {
  constructor({
    channelId,
    channelName,
    memberId,
    memberName,
    sessionEndpoint,
    token,
    connectivityCheckIntervalSec,
    logger
  }) {
    this._isOpen = false;
    this._isDestroyed = false;
    this._reconnectCount = 0;
    this.onOpened = new Event4();
    this.onEventReceived = new Event4();
    this.onConnectionFailed = new Event4();
    this._sessionEndpoint = sessionEndpoint;
    this._channelId = channelId;
    this._channelName = channelName;
    this._memberId = memberId;
    this._memberName = memberName;
    this._token = token;
    this._connectivityCheckIntervalSec = connectivityCheckIntervalSec;
    this._logger = logger;

    this._connect();
  }

  _reconnect() {
    this._ws = void 0;
    this._isOpen = false;

    if (this._reconnectCount >= 3) {
      this.onConnectionFailed.emit();
      this.destroy();

      this._logger.error("Failed to reconnect for three times", new Error());
    } else {
      const waitTime = getReconnectWaitTime(this._reconnectCount);
      setTimeout(() => {
        this._connect();

        this._reconnectCount++;

        this._logger.debug(`Try to reconnect: count = ${this._reconnectCount}`);
      }, waitTime);
    }
  }

  _connect() {
    let ws;

    try {
      const subProtocol = `SkyWayJWT!${this._token}`;
      const wsProperties = {
        channelId: this._channelId,
        channelName: this._channelName,
        memberId: this._memberId,
        memberName: this._memberName,
        connectivityCheckIntervalSec: this._connectivityCheckIntervalSec,
        platform: "javascript",
        version: PACKAGE_VERSION
      };
      const queryString = Object.entries(wsProperties).filter(([_, v]) => v !== void 0).map(pair => pair.join("=")).join("&");
      const wsURL = `${this._sessionEndpoint}?${queryString}`;
      const isNodeJS = typeof process === "object" && process.versions !== null && process.versions.node !== null;

      if (isNodeJS) {
        ws = new import_isomorphic_ws2.default(wsURL, subProtocol, {
          headers: {
            "User-Agent": `skyway-message-js-client/${process.version}`
          }
        });
      } else {
        ws = new import_isomorphic_ws2.default(wsURL, subProtocol);
      }

      this._logger.debug(`Connecting to message-server: ${this._sessionEndpoint}`);

      ws.onerror = event => {
        this._logger.error("WebSocket error occurred", event.error);

        this._reconnect();
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error();

      this._logger.error("Failed to create WebSocket instance", error);

      this._reconnect();

      return;
    }

    ws.onopen = () => {
      this._logger.debug("Connected to message-server");
    };

    ws.onclose = event => {
      this._logger.debug("Close event fired: " + JSON.stringify(event));

      if (event.code !== 1e3 && !(4e3 <= event.code && event.code <= 4199)) {
        this._reconnect();

        return;
      }

      this._logger.debug("Closed the connection to message-server");

      this.onConnectionFailed.emit();
      this.destroy();
    };

    ws.onmessage = event => {
      this._messageHandler(event.data);
    };

    this._ws = ws;
  }

  destroy() {
    this._isDestroyed = true;
    this.onOpened.removeAllListeners();
    this.onEventReceived.removeAllListeners();
    this.onConnectionFailed.removeAllListeners();

    if (this._ws !== void 0) {
      this._ws.close(1e3);
    }
  }

  send(order) {
    return new Promise((resolve, reject) => {
      const retrySend = () => {
        this.onOpened.addOneTimeListener(() => {
          this.send(order).then(() => {
            resolve();
          }).catch(err => {
            reject(err);
          });
        });
        this.onConnectionFailed.addOneTimeListener(() => {
          reject(new Error("Connection failed"));
        });
      };

      if (this._isDestroyed) {
        reject(new Error("The socket is already destroyed"));
        return;
      }

      if (this._ws === void 0 || !this._isOpen) {
        this._logger.debug("Retry send the order when connected because WebSocket is undefined or isOpen = false");

        retrySend();
        return;
      }

      this._logger.debug(`Send the event: ${order.data}`);

      this._ws.send(order.data, err => {
        if (err) {
          if (this._ws === void 0 || !this._isOpen || this._ws.readyState !== import_isomorphic_ws2.default.OPEN) {
            this._logger.debug("Retry send the order when connected because WebSocket.send failed");

            retrySend();
            return;
          }

          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  _messageHandler(data) {
    if (typeof data !== "string") {
      this._logger.error("Received invalid message: not string", new Error());

      return;
    }

    let parsedData;

    try {
      parsedData = JSON.parse(data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error();

      this._logger.error("Received invalid message: parse error", error);

      return;
    }

    if (!isEventData(parsedData)) {
      this._logger.error(`Received invalid message: ${parsedData}`, new Error());

      return;
    }

    if (parsedData.event === "open") {
      this._logger.debug("Received a open event");

      this._isOpen = true;

      if (this._reconnectCount !== 0) {
        this._reconnectCount = 0;

        this._logger.debug("Succeeded to reconnect");
      }

      this.onOpened.emit();
    } else {
      this._logger.debug(`Received the event: ${parsedData.event}, payload: ${parsedData.payload}`);

      this.onEventReceived.emit(parsedData);
    }
  }

};

function isEventData(data) {
  if (!data || typeof data !== "object") return false;
  if (typeof data.event !== "string") return false;
  if (data.payload && typeof data.payload !== "object") return false;
  return true;
} // ../message-client/src/messageClient.ts


var MSAS_DOMAIN = "b-msas.beta.skyway.ntt.com";
var API_VERSION = "v1";
var MessageClient = class {
  constructor({
    token,
    channelId,
    channelName,
    memberId,
    memberName
  }, options) {
    this.onConnectionFailed = new Event4();
    this.onRequested = new Event4();
    this.onIndicated = new Event4();
    this._responseCallbacks = {};
    this._orderAcceptedCallbacks = {};
    this._orderRejectedCallbacks = {};
    this._token = token;
    this._channelId = channelId;
    this._channelName = channelName;
    this._memberId = memberId;
    this._memberName = memberName;
    const defaultOptions = {
      connectivityCheckIntervalSec: 30,
      msasDomain: MSAS_DOMAIN,
      secure: true,
      logger: {
        debug: message => {
          console.debug(message);
        },
        error: error => {
          console.error(error);
        }
      }
    };
    this._options = Object.assign({}, defaultOptions, options != null ? options : {});
    this._logger = this._options.logger;

    this._logger.debug(`Created instance with the options: ${this._options}`);
  }

  connect() {
    return __async(this, null, function* () {
      const RESTProtocol = this._options.secure ? "https" : "http";
      const queryString = `channelId=${this._channelId}`;
      let sessionDomain;

      try {
        const response = yield (0, import_isomorphic_fetch.default)(`${RESTProtocol}://${this._options.msasDomain}/${API_VERSION}/sessions?${queryString}`, {
          headers: {
            Authorization: `Bearer ${this._token}`
          }
        }).then(res => res.json());
        sessionDomain = response.domain;
      } catch (error) {
        console.error(error);
      }

      if (!sessionDomain) {
        throw new Error("The response from SkyWay Server (MSAS) is empty");
      }

      const WSProtocol = this._options.secure ? "wss" : "ws";
      this._socket = new Socket({
        sessionEndpoint: `${WSProtocol}://${sessionDomain}/${API_VERSION}/ws`,
        channelId: this._channelId,
        channelName: this._channelName,
        memberId: this._memberId,
        memberName: this._memberName,
        token: this._token,
        connectivityCheckIntervalSec: this._options.connectivityCheckIntervalSec,
        logger: this._logger
      });

      this._socket.onEventReceived.addListener(data => {
        this._eventReceivedHandler(data);
      });

      this._socket.onConnectionFailed.addListener(() => {
        this.onConnectionFailed.emit();
      });

      yield this._socket.onOpened.asPromise(15 * 1e3);

      this._startConnectivityCheck();
    });
  }

  disconnect() {
    var _a2;

    this._stopConnectivityCheck();

    (_a2 = this._socket) == null ? void 0 : _a2.destroy();
    this._socket = void 0;
  }

  _startConnectivityCheck() {
    if (this._connectivityCheckTimer) {
      this._logger.debug("connectivity check timer is already set");

      return;
    }

    this._connectivityCheckTimer = setInterval(() => {
      var _a2;

      (_a2 = this._socket) == null ? void 0 : _a2.send(new Order("connectivityCheck")).catch(() => {});
    }, this._options.connectivityCheckIntervalSec * 1e3);

    this._logger.debug("Started connectivity check timer");
  }

  _stopConnectivityCheck() {
    if (!this._connectivityCheckTimer) {
      this._logger.debug("connectivity check timer is not set");

      return;
    }

    clearInterval(this._connectivityCheckTimer);
    this._connectivityCheckTimer = void 0;

    this._logger.debug("Stopped connectivity check timer");
  }

  indicate(targets, data, timeoutSec = 10) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(targets)) {
        targets = [targets];
      }

      if (targets.length === 0) {
        reject(new Error("targets is empty"));
        return;
      }

      for (const target of targets) {
        validateTarget(target);
      }

      validateData(data);

      if (this._socket === void 0) {
        reject(new Error("websocket is not connected"));
        return;
      }

      const payload = {
        kind: "indicate",
        isBroadcast: false,
        dst: targets,
        data
      };
      const order = new Order("message", payload);
      const timer = setTimeout(() => {
        this._clearOrderCallbacks(order.id);

        reject(new Error("indicate timeout"));
      }, timeoutSec * 1e3);

      this._setOrderAcceptedCallback(order.id, () => {
        clearTimeout(timer);
        resolve();
      });

      this._setOrderRejectedCallback(order.id, data2 => {
        clearTimeout(timer);
        reject(data2);
      });

      this._socket.send(order).catch(err => {
        this._clearOrderCallbacks(order.id);

        clearTimeout(timer);
        reject(err);
      });
    });
  }

  indicateAll(data, timeoutSec = 10) {
    return new Promise((resolve, reject) => {
      validateData(data);

      if (this._socket === void 0) {
        reject(new Error("websocket is not connected"));
        return;
      }

      const payload = {
        kind: "indicate",
        isBroadcast: true,
        data
      };
      const order = new Order("message", payload);
      const timer = setTimeout(() => {
        this._clearOrderCallbacks(order.id);

        reject(new Error("indicateAll timeout"));
      }, timeoutSec * 1e3);

      this._setOrderAcceptedCallback(order.id, () => {
        clearTimeout(timer);
        resolve();
      });

      this._setOrderRejectedCallback(order.id, data2 => {
        clearTimeout(timer);
        reject(data2);
      });

      this._socket.send(order).catch(err => {
        this._clearOrderCallbacks(order.id);

        clearTimeout(timer);
        reject(err);
      });
    });
  }

  request(target, data, timeoutSec = 10) {
    validateTarget(target);
    validateData(data);
    return new Promise((resolve, reject) => {
      if (this._socket === void 0) {
        reject(new Error("websocket is not connected"));
        return;
      }

      const payload = {
        kind: "request",
        dst: target,
        data
      };
      const order = new Order("message", payload);
      const timer = setTimeout(() => {
        delete this._responseCallbacks[order.id];
        delete this._orderRejectedCallbacks[order.id];
        reject(new Error("request timeout"));
      }, timeoutSec * 1e3);

      this._setResponseCallback(order.id, data2 => {
        clearTimeout(timer);
        resolve(data2);
      });

      this._setOrderRejectedCallback(order.id, data2 => {
        clearTimeout(timer);
        reject(data2);
      });

      this._setOrderAcceptedCallback(order.id, () => {});

      this._socket.send(order).catch(err => {
        delete this._responseCallbacks[order.id];
        delete this._orderRejectedCallbacks[order.id];
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  _response(target, requestOrderId, data, timeoutSec) {
    return new Promise((resolve, reject) => {
      validateData(data);

      if (this._socket === void 0) {
        reject(new Error("websocket is not connected"));
        return;
      }

      const payload = {
        kind: "response",
        dst: target,
        requestOrderId,
        data
      };
      const order = new Order("message", payload);
      const timer = setTimeout(() => {
        this._clearOrderCallbacks(order.id);

        reject(new Error("response timeout"));
      }, timeoutSec * 1e3);

      this._setOrderAcceptedCallback(order.id, () => {
        clearTimeout(timer);
        resolve();
      });

      this._setOrderRejectedCallback(order.id, data2 => {
        clearTimeout(timer);
        reject(data2);
      });

      this._socket.send(order).catch(err => {
        this._clearOrderCallbacks(order.id);

        clearTimeout(timer);
        reject(err);
      });
    });
  }

  _eventReceivedHandler(data) {
    switch (data.event) {
      case "orderAccepted":
        this._orderAcceptedHandler(data.payload);

        break;

      case "orderRejected":
        this._orderRejectedHandler(data.payload);

        break;

      case "message":
        this._eventMessageHandler(data.payload);

        break;
    }
  }

  _orderAcceptedHandler(payload) {
    if (!isOrderAcceptedPayload(payload)) {
      throw new Error("Invalid payload");
    }

    const orderId = payload.orderId;

    if (!this._orderAcceptedCallbacks[orderId]) {
      throw new Error(`accepted event has unknown orderId: ${orderId}`);
    }

    const callback = this._orderAcceptedCallbacks[orderId];

    this._clearOrderCallbacks(orderId);

    callback();
  }

  _orderRejectedHandler(payload) {
    if (!isOrderRejectedPayload(payload)) {
      throw new Error("Invalid payload");
    }

    const orderId = payload.orderId;

    if (!this._orderRejectedCallbacks[orderId]) {
      throw new Error(`rejected event has unknown orderId: ${orderId}`);
    }

    const callback = this._orderRejectedCallbacks[orderId];

    this._clearOrderCallbacks(orderId);

    callback(payload);
  }

  _eventMessageHandler(payload) {
    if (!isMessagePayload(payload)) {
      throw new Error("Invalid payload");
    }

    switch (payload.kind) {
      case "indicate":
        this._eventMessageIndicateHandler(payload);

        break;

      case "request":
        this._eventMessageRequestHandler(payload);

        break;

      case "response":
        this._eventMessageResponseHandler(payload);

        break;
    }
  }

  _eventMessageIndicateHandler(payload) {
    this.onIndicated.emit({
      data: payload.data,
      src: payload.src
    });
  }

  _eventMessageRequestHandler(payload) {
    if (!payload.requestOrderId) {
      throw new Error("Invalid payload");
    }

    const src = payload.src;
    const requestOrderId = payload.requestOrderId;

    const reply = (data, timeout = 10) => __async(this, null, function* () {
      yield this._response(src, requestOrderId, data, timeout);
    });

    this.onRequested.emit({
      data: payload.data,
      reply,
      requestOrderId: payload.requestOrderId,
      src: payload.src
    });
  }

  _eventMessageResponseHandler(payload) {
    if (!payload.requestOrderId || !this._responseCallbacks[payload.requestOrderId]) {
      throw new Error(`received response has unknown orderId: ${payload.requestOrderId}`);
    }

    const callback = this._responseCallbacks[payload.requestOrderId];
    delete this._responseCallbacks[payload.requestOrderId];
    callback(payload.data);
  }

  _setResponseCallback(orderId, callback) {
    this._responseCallbacks[orderId] = callback;
  }

  _setOrderAcceptedCallback(orderId, callback) {
    this._orderAcceptedCallbacks[orderId] = callback;
  }

  _setOrderRejectedCallback(orderId, callback) {
    this._orderRejectedCallbacks[orderId] = callback;
  }

  _clearOrderCallbacks(orderId) {
    delete this._orderAcceptedCallbacks[orderId];
    delete this._orderRejectedCallbacks[orderId];
  }

};

function validateData(data) {
  if (!data || typeof data !== "object") {
    throw new Error("the type of data must be object");
  }
}

function validateTarget(target) {
  if (!isMember(target)) {
    throw new Error("the type of target must be {id: string, name: string}");
  }

  if (!validate_default3(target.id)) {
    throw new Error("the type of target.id must be uuid format");
  }
} // ../message-client/src/utils/logger.ts


init_process(); // ../core/src/const.ts

init_process();
var maxDataSize = 20 * 1024 - 1;
var MaxIceParamServerTTL = 24 * 60 * 60; // ../core/src/member/localPerson/factory.ts

var log23 = new Logger("packages/core/src/member/person/local/factory.ts");

function createLocalPerson(_0, _1, _2) {
  return __async(this, arguments, function* (context, channel, memberDto, {
    keepaliveIntervalSec
  } = {}) {
    var _a2;

    log23.debug("createLocalPerson", {
      channel,
      memberDto,
      keepaliveIntervalSec
    });
    const {
      messageService,
      iceParamServer,
      rtcConfig
    } = SkyWayConfig.get;
    const session = new MessageClient({
      token: context.authTokenString,
      channelId: channel.id,
      channelName: channel.name,
      memberId: memberDto.id,
      memberName: memberDto.name
    }, {
      logger: {
        error: e2 => {
          throw new SkyWayError({
            type: "internalError",
            message: "messageClient error",
            payload: {
              error: e2
            }
          });
        },
        debug: () => {}
      },
      msasDomain: messageService.domain,
      secure: messageService.secure
    });
    log23.debug("[start] connect messageService");
    yield session.connect().catch(err => {
      throw new SkyWayError({
        type: "internalError",
        message: "messageClient failed to connect MessagingService",
        payload: err
      });
    });
    log23.debug("[end] connect messageService");
    const iceManager = new IceManager(iceParamServer.domain, iceParamServer.version, iceParamServer.secure, rtcConfig.turnPolicy);
    log23.debug("[start] fetch iceParams");
    yield iceManager.setupIceServers(context.authTokenString, memberDto.id, MaxIceParamServerTTL).catch(err => {
      throw new SkyWayError({
        type: "internalError",
        message: "iceManager failed to connect iceServer",
        payload: err
      });
    });
    log23.debug("[end] fetch iceParams");
    const person = yield LocalPersonImpl2.Create({
      iceManager,
      channel,
      messaging: session,
      metadata: memberDto.metadata,
      name: memberDto.name,
      id: memberDto.id,
      keepaliveIntervalSec
    });

    for (const plugin of context.plugins) {
      yield (_a2 = plugin._whenCreateLocalPerson) == null ? void 0 : _a2.call(plugin, person);

      person._onDisposed.once(() => __async(this, null, function* () {
        var _a3;

        yield (_a3 = plugin._whenDisposeLocalPerson) == null ? void 0 : _a3.call(plugin, person);
      }));
    }

    return person;
  });
} // ../core/src/member/localPerson/index.ts


var log24 = new Logger("packages/core/src/member/person/local/index.ts");
var LocalPersonImpl2 = class extends MemberImpl {
  constructor(args) {
    super(args);
    this.args = args;
    this.type = "person";
    this.subtype = "person";
    this.side = "local";
    this.keepaliveIntervalSec = this.args.keepaliveIntervalSec;
    this.iceManager = this.args.iceManager;
    this.onStreamPublished = this._events.make();
    this.onStreamUnpublished = this._events.make();
    this.onPublicationChanged = this._events.make();
    this.onStreamSubscribed = this._events.make();
    this.onStreamUnsubscribed = this._events.make();
    this.onSubscriptionChanged = this._events.make();
    this._onStreamSubscribeFailed = this._events.make();
    this._onDisposed = this._events.make();
    this._disposed = false;
    this._publishingAgent = new PublishingAgent(this);
    this._subscribingAgent = new SubscribingAgent(this);
    this._messaging = args.messaging;

    this._listenChannelEvent();

    this._listenBeforeUnload();
  }

  static Create(...args) {
    return __async(this, null, function* () {
      const person = new LocalPersonImpl2(...args);
      yield person._setupTtlTimer().catch(err => {
        log24.error("setupTtlTimer failed", err);
      });
      return person;
    });
  }

  _listenChannelEvent() {
    this.channel.onStreamSubscribed.add(_0 => __async(this, [_0], function* ({
      subscription
    }) {
      return this._handleOnStreamSubscribe(subscription);
    }));
    this.channel.onStreamUnsubscribed.add(({
      subscription
    }) => this._handleOnStreamUnsubscribe(subscription));

    this.channel._onDisposed.once(() => {
      this.dispose();
    });

    this.onLeft.once(() => {
      this.dispose();
    });
  }

  _setupTtlTimer() {
    return __async(this, null, function* () {
      if (this.keepaliveIntervalSec == null) return;

      const updateTtl = () => __async(this, null, function* () {
        const now = Math.floor(Date.now() / 1e3);
        this.ttlSec = Math.ceil(now + this.keepaliveIntervalSec + this.keepaliveIntervalSec / 2);
        yield this.channel._updateMemberTtl(this.id, this.ttlSec);
        log24.debug("updateTtl", {
          now,
          ttlSec: this.ttlSec,
          keepalive: this.keepaliveIntervalSec,
          diff: this.ttlSec - now
        });
      });

      yield updateTtl();
      this.ttlInterval = setInterval(() => __async(this, null, function* () {
        yield updateTtl().catch(() => {
          log24.error("updateMemberTtl failed", {
            id: this.id
          });
          this.dispose();
        });
      }), this.keepaliveIntervalSec * 1e3);
    });
  }

  _listenBeforeUnload() {
    const leave = () => __async(this, null, function* () {
      window.removeEventListener("beforeunload", leave);

      if (this.status !== "joined") {
        return;
      }

      log24.debug("leave by beforeunload");
      yield this.leave();
    });

    window.addEventListener("beforeunload", leave);
  }

  _handleOnStreamSubscribe(subscription) {
    return __async(this, null, function* () {
      var _a2;

      if (subscription.subscriberId === this.id) {
        try {
          log24.debug("[start] startSubscribing", {
            subscription
          });
          yield this._subscribingAgent.startSubscribing(subscription);
          this.onStreamSubscribed.emit({
            subscription,
            stream: subscription.stream
          });
          this.onSubscriptionChanged.emit();
          log24.debug("[end] startSubscribing", {
            subscription
          });
        } catch (error) {
          log24.warn("[failed] startSubscribing", {
            subscription,
            error
          });

          this._onStreamSubscribeFailed.emit({
            error,
            subscription
          });
        }
      }

      if (((_a2 = subscription.publication) == null ? void 0 : _a2.publisherId) === this.id) {
        if (subscription.subscriberId === this.id) {
          throw new SkyWayError({
            type: "forbidden",
            message: "can not subscribe own Publication"
          });
        }

        try {
          log24.debug("[start] startPublishing", {
            subscription
          });
          yield this._publishingAgent.startPublishing(subscription.publication, subscription.subscriber);
          log24.debug("[end] startPublishing", {
            subscription
          });
        } catch (error) {
          log24.debug("[failed] startPublishing", {
            subscription,
            error
          });
        }
      }
    });
  }

  _handleOnStreamUnsubscribe(subscription) {
    return __async(this, null, function* () {
      var _a2;

      if (((_a2 = subscription.publication) == null ? void 0 : _a2.publisherId) === this.id) {
        yield this._publishingAgent.stopPublishing(subscription.publication, subscription.subscriber);
      }

      if (subscription.subscriberId === this.id) {
        try {
          yield this._subscribingAgent.stopSubscribing(subscription);
          this.onStreamUnsubscribed.emit({
            subscription
          });
          this.onSubscriptionChanged.emit();
        } catch (error) {
          log24.warn("failed to stopSubscribing", {
            subscription,
            error
          });
        }
      }
    });
  }

  publish(_0) {
    return __async(this, arguments, function* (stream, options = {}) {
      var _a2, _b2, _c, _d;

      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "channel stopped"
        });
      }

      const init = {
        metadata: options.metadata,
        publisher: this.id,
        channel: this.channel.id,
        contentType: stream.contentType,
        codecCapabilities: (_a2 = options.codecCapabilities) != null ? _a2 : [],
        encodings: (_b2 = options.encodings) != null ? _b2 : []
      };
      log24.debug("[start] publish", {
        init
      });

      try {
        const published = yield this.channel._publish(init);

        const publication = this.channel._addPublication(published);

        publication.stream = stream;
        publication.codecCapabilities = (_c = options.codecCapabilities) != null ? _c : [];
        publication.encodings = (_d = options.encodings) != null ? _d : [];
        this.onStreamPublished.emit({
          publication
        });
        this.onPublicationChanged.emit();
        log24.debug("[end] publish", {
          publication
        });
        return publication;
      } catch (error) {
        throw new SkyWayError({
          type: "internalError",
          message: "[failed] publish",
          payload: {
            error,
            init
          }
        });
      }
    });
  }

  unpublish(publicationId) {
    return __async(this, null, function* () {
      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "channel stopped"
        });
      }

      const publication = this.channel._getPublication(publicationId);

      if (!publication) {
        throw new SkyWayError({
          type: "forbidden",
          message: "can not unpublish not exist publication",
          payload: {
            publicationId
          }
        });
      }

      log24.debug("[start] unpublish", {
        publication
      });
      yield this.channel._unpublish(publicationId);
      publication.subscriptions.map(s => s.subscriber).forEach(s => {
        if (isRemoteMember(s)) {
          this._publishingAgent.stopPublishing(publication, s);
        }
      });
      this.onStreamUnpublished.emit({
        publication
      });
      this.onPublicationChanged.emit();
      log24.debug("[end] unpublish", {
        publication
      });
    });
  }

  subscribe(publicationId) {
    return __async(this, null, function* () {
      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "channel stopped"
        });
      }

      const publication = this.channel._getPublication(publicationId);

      this._validatePublicationForSubscribe(publication);

      log24.debug("[start] subscribe", {
        publication
      });
      let subscribing = true;

      try {
        const subscriptionDto = yield this.channel._subscribe(this.id, publicationId);

        const subscription = this.channel._addSubscription(subscriptionDto);

        if (!subscription.stream) {
          yield Promise.race([this.onStreamSubscribed.watch(({
            subscription: subscription2
          }) => subscription2.publication.id === publicationId, SkyWayConfig.get.rtcApi.timeout).catch(e2 => __async(this, null, function* () {
            if (!subscribing) {
              return;
            }

            if (this.channel._getMember(subscriptionDto.publisherId)) {
              log24.warn("[start] fallback subscription", {
                subscriptionDto
              });
              this.unsubscribe(subscriptionDto.id).then(() => {
                log24.warn("[end] fallback subscription", {
                  subscriptionDto
                });
              }).catch(error => {
                log24.warn("[failed] fallback subscription", {
                  subscriptionDto,
                  error
                });
              });
            }

            throw new SkyWayError({
              type: "timeout",
              message: "failed to subscribe publication. maybe publisher already left room",
              payload: {
                error: e2,
                stream: !!subscription.stream
              }
            });
          })), this.channel.onMemberLeft.watch(e2 => e2.member.id === publication.publisherId, SkyWayConfig.get.rtcApi.timeout + 5e3).then(() => {
            if (subscribing) {
              throw new SkyWayError({
                type: "deleted",
                message: "failed to subscribe publication. publisher already left room"
              });
            }
          }).catch(() => {}), this._onStreamSubscribeFailed.watch(e2 => e2.subscription.publication.id === publication.id, SkyWayConfig.get.rtcApi.timeout).then(error => {
            if (subscribing) {
              throw new SkyWayError({
                type: "internalError",
                message: "subscribe _onStreamSubscribeFailed",
                payload: {
                  error
                }
              });
            }
          }).catch(() => {})]);
        }

        subscribing = false;
        log24.debug("[end] subscribe", {
          subscription
        });
        return {
          subscription,
          stream: subscription.stream
        };
      } catch (error) {
        subscribing = false;
        throw new SkyWayError({
          type: "internalError",
          message: "[failed] subscribe",
          payload: {
            error,
            publication
          }
        });
      }
    });
  }

  _validatePublicationForSubscribe(publication) {
    if (publication == void 0) {
      throw new SkyWayError({
        type: "notFound",
        message: "can not subscribe not exist publication",
        payload: {
          publication,
          memberId: this.id
        }
      });
    }

    if (publication.publisher.id === this.id) {
      throw new SkyWayError({
        type: "forbidden",
        message: "can not subscribe own Publication",
        payload: {
          publication,
          memberId: this.id
        }
      });
    }

    if (publication.publisher instanceof UnknownMemberImpl) {
      throw new SkyWayError({
        type: "forbidden",
        message: `can't subscribe publication. publisher subtype ${publication.publisher.subtype} plugin is not registered`,
        payload: {
          publication,
          memberId: this.id
        }
      });
    }

    if (this.subscriptions.find(s => s.publication.id === publication.id)) {
      throw new SkyWayError({
        type: "forbidden",
        message: "can not subscribe already subscribed Publication",
        payload: {
          publication,
          memberId: this.id
        }
      });
    }
  }

  unsubscribe(subscriptionId) {
    return __async(this, null, function* () {
      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "channel stopped"
        });
      }

      const subscription = this.subscriptions.find(s => s.id === subscriptionId);

      if (!subscription) {
        throw new SkyWayError({
          type: "forbidden",
          message: "can not unsubscribe not exist subscription",
          payload: {
            subscriptionId
          }
        });
      }

      log24.debug("[start] unsubscribe", {
        subscription
      });
      yield this.channel._unsubscribe(subscriptionId);
      log24.debug("[end] unsubscribe", {
        subscription
      });
    });
  }

  getConnections() {
    const connections = this.channel.members.map(m => m._getConnection(this.id));
    const active = connections.filter(c => (c == null ? void 0 : c.closed) === false);
    return active;
  }

  leave() {
    return __async(this, null, function* () {
      yield this.channel.leave(this);
    });
  }

  dispose() {
    if (this._disposed) {
      return;
    }

    this._disposed = true;
    log24.debug("disposed", {
      id: this.id
    });
    clearInterval(this.ttlInterval);

    this._messaging.disconnect();

    this.getConnections().forEach(c => c.close());

    this._onDisposed.emit();

    this._events.dispose();
  }

}; // ../core/src/plugin/interface/connection.ts

init_process(); // src/member/local/p2p.ts

var log25 = new Logger("packages/room/src/member/local/p2p.ts");
var LocalP2PRoomMemberImpl = class extends LocalRoomMemberImpl {
  constructor(member, room) {
    super(member, room);
  }

  publish(_0) {
    return __async(this, arguments, function* (stream, options = {}) {
      const publication = yield this._local.publish(stream, options);

      const roomPublication = this.room._addPublication(publication);

      this.onStreamPublished.emit({
        publication: roomPublication
      });
      return roomPublication;
    });
  }

  unpublish(publicationId) {
    return __async(this, null, function* () {
      this._local.unpublish(publicationId);

      const {
        publication
      } = yield this.room.onStreamUnpublished.watch(e2 => e2.publication.id === publicationId, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onStreamUnpublished"
        });
      });
      this.onStreamUnpublished.emit({
        publication
      });
    });
  }

  subscribe(publicationId) {
    return __async(this, null, function* () {
      const {
        subscription,
        stream
      } = yield this._local.subscribe(publicationId);

      const roomSubscription = this.room._addSubscription(subscription);

      return {
        subscription: roomSubscription,
        stream
      };
    });
  }

  unsubscribe(subscriptionId) {
    return __async(this, null, function* () {
      this._local.unsubscribe(subscriptionId);

      yield this.room.onStreamUnsubscribed.watch(e2 => e2.subscription.id === subscriptionId, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onStreamUnsubscribed"
        });
      });
    });
  }

  _updateRoom(room) {
    log25.debug("_updateRoom", {
      memberId: this.id
    });
    this.room = room;

    this._listenRoomEvent();
  }

}; // src/member/local/sfu.ts

exports.LocalP2PRoomMemberImpl = LocalP2PRoomMemberImpl;
init_process(); // ../sfu-client/src/index.ts

init_process(); // ../sfu-client/src/connection/index.ts

init_process(); // ../sfu-client/src/connection/receiver.ts

init_process();

var import_mediasoup_client = __toESM(require_lib3()); // ../sfu-client/src/connection/ice.ts


init_process();
var IceConnection = class {
  constructor(_transport) {
    this._transport = _transport;

    this._onConnectionStateChange = state => __async(this, null, function* () {
      switch (state) {
        case "connected":
          break;

        case "failed":
          break;

        case "disconnected":
          break;
      }
    });

    this._transport.on("connectionstatechange", this._onConnectionStateChange);
  }

  close() {
    this._transport.removeListener("connectionstatechange", this._onConnectionStateChange);
  }

}; // ../sfu-client/src/connection/receiver.ts

var log26 = new Logger("packages/sfu-client/src/connection/receiver.ts");
var Receiver2 = class {
  constructor(_iceManager, subscription, _api, _bot, _context, rtpCapabilities) {
    this._iceManager = _iceManager;
    this.subscription = subscription;
    this._api = _api;
    this._bot = _bot;
    this._context = _context;
    this.rtpCapabilities = rtpCapabilities;
    this._device = new import_mediasoup_client.Device();

    this._onConnect = (_0, _1, _2) => __async(this, [_0, _1, _2], function* ({
      dtlsParameters
    }, callback, errback) {
      try {
        log26.debug("[start] Receiver connect", {
          subscription: this.subscription
        });
        yield this._api.connect({
          botId: this._bot.id,
          forwardingId: this.subscription.publication.id,
          transportId: this._transport.id,
          dtlsParameters
        });
        log26.debug("[end] Receiver connect", {
          subscription: this.subscription
        });
        callback();
      } catch (error) {
        log26.error("Receiver connect failed", {
          error,
          subscription: this.subscription
        });
        errback(error);
      }
    });
  }

  consume() {
    return __async(this, null, function* () {
      yield this._device.load({
        routerRtpCapabilities: this.rtpCapabilities
      });
      log26.debug("[start] createConsumer", {
        subscription: this.subscription
      });
      const {
        consumerOptions,
        transportOptions,
        producerId
      } = yield this._api.createConsumer({
        botId: this._bot.id,
        forwardingId: this.subscription.publication.id,
        rtpCapabilities: this._device.rtpCapabilities,
        subscriptionId: this.subscription.id
      });

      this._setupTransport(transportOptions);

      log26.debug("[end] createConsumer");
      const consumer = yield this._transport.consume(__spreadProps(__spreadValues({}, consumerOptions), {
        producerId
      }));
      this._consumer = consumer;
      return {
        track: consumer.track,
        codecs: consumer.rtpParameters.codecs
      };
    });
  }

  _setupTransport(transportOptions) {
    this._transport = this._device.createRecvTransport(__spreadProps(__spreadValues({}, transportOptions), {
      iceServers: this._iceManager.iceServers,
      iceTransportPolicy: this._context.config.rtcConfig.turnPolicy === "turnOnly" ? "relay" : void 0,
      additionalSettings: this._context.config.rtcConfig
    }));

    this._transport.on("connect", this._onConnect);

    this._iceConnection = new IceConnection(this._transport);
  }

  unconsume() {
    if (!this._consumer) {
      log26.debug("unconsume failed, consumer not exist", {
        subscription: this.subscription
      });
      return;
    }

    this._iceConnection.close();

    this._consumer.close();

    this._consumer = void 0;

    this._transport.close();
  }

  getStats() {
    return this._transport.getStats();
  }

  close() {
    var _a2, _b2;

    const pc = (_b2 = (_a2 = this._transport) == null ? void 0 : _a2._handler) == null ? void 0 : _b2._pc;

    if (pc == null ? void 0 : pc.peerIdentity) {
      pc.peerIdentity.catch(() => {});
    }

    this._transport.close();
  }

  get pc() {
    var _a2, _b2;

    const pc = (_b2 = (_a2 = this._transport) == null ? void 0 : _a2._handler) == null ? void 0 : _b2._pc;
    return pc;
  }

}; // ../sfu-client/src/connection/sender.ts

init_process();

var import_mediasoup_client2 = __toESM(require_lib3());

var log27 = new Logger("packages/sfu-client/src/connection/sender.ts");
var Sender2 = class {
  constructor(publication, _iceManager, _api, _bot, _context) {
    this.publication = publication;
    this._iceManager = _iceManager;
    this._api = _api;
    this._bot = _bot;
    this._context = _context;
    this._device = new import_mediasoup_client2.Device();
    this._disposer = [];

    this._onConnect = (_0, _1, _2) => __async(this, [_0, _1, _2], function* ({
      dtlsParameters
    }, callback, errback) {
      try {
        log27.debug("[start] Sender connect", {
          publication: this.publication
        });
        yield this._api.connect({
          botId: this._bot.id,
          forwardingId: this.forwardingId,
          transportId: this._transport.id,
          dtlsParameters
        });
        log27.debug("[end] Sender connect", {
          publication: this.publication
        });
        callback();
      } catch (error) {
        log27.error("Sender connect failed", {
          error,
          publication: this.publication
        });
        errback(error);
      }
    });

    this._onProduce = (producerOptions, callback, errback) => __async(this, null, function* () {
      try {
        log27.debug("[start] createProducer", {
          publication: this.publication
        });
        const id = yield this._api.createProducer({
          botId: this._bot.id,
          forwardingId: this.forwardingId,
          transportId: this._transport.id,
          producerOptions
        });
        log27.debug("[end] createProducer", {
          publication: this.publication,
          id
        });
        callback({
          id
        });
      } catch (error) {
        log27.error("[failed] createProducer", {
          error,
          publication: this.publication
        });
        errback(error);
      }
    });
  }

  startForwarding(configure) {
    return __async(this, null, function* () {
      if (this.publication.contentType === "data") {
        throw new SkyWayError({
          type: "invalidParameter",
          message: "sfu not support dataStream"
        });
      }

      this._startingForwarding = new Event();
      log27.debug("[start] Sender startForwarding", {
        botId: this._bot.id,
        publicationId: this.publication.id,
        contentType: this.publication.contentType,
        maxSubscribers: configure.maxSubscribers
      });
      const {
        routerRtpCapabilities,
        transportOptions,
        forwardingId
      } = yield this._api.startForwarding({
        botId: this._bot.id,
        publicationId: this.publication.id,
        contentType: this.publication.contentType,
        maxSubscribers: configure.maxSubscribers
      });
      this.forwardingId = forwardingId;
      log27.debug("[end] Sender startForwarding", {
        forwardingId
      });
      yield this._loadDevice(routerRtpCapabilities);

      this._setupTransport(transportOptions);

      this._startingForwarding.emit();

      this._startingForwarding = void 0;
      yield this._produce();
      return forwardingId;
    });
  }

  _loadDevice(routerRtpCapabilities) {
    return __async(this, null, function* () {
      yield this._device.load({
        routerRtpCapabilities
      });
    });
  }

  _setupTransport(transportOptions) {
    this._transport = this._device.createSendTransport(__spreadProps(__spreadValues({}, transportOptions), {
      iceServers: this._iceManager.iceServers,
      iceTransportPolicy: this._context.config.rtcConfig.turnPolicy === "turnOnly" ? "relay" : void 0,
      additionalSettings: this._context.config.rtcConfig
    }));

    this._transport.on("connect", this._onConnect);

    this._transport.on("produce", this._onProduce);

    this._iceConnection = new IceConnection(this._transport);
  }

  _produce() {
    return __async(this, null, function* () {
      var _a2, _b2, _c;

      if (this._startingForwarding) {
        yield this._startingForwarding.asPromise(this._context.config.rtcApi.timeout);
      }

      const stream = this.publication.stream;

      if (!stream) {
        throw new SkyWayError({
          type: "notFound",
          message: "publication not have stream"
        });
      }

      this._disposer = [...this._disposer, stream._onReplaceTrack.add(track2 => __async(this, null, function* () {
        yield this._replaceTrack(track2.clone());
      })).removeListener, stream._onMuted.add(() => __async(this, null, function* () {
        yield this._replaceTrack(stream._mutedTrack.clone());
      })).removeListener, stream._onUnmuted.add(() => __async(this, null, function* () {
        yield this._replaceTrack(stream.track.clone());
      })).removeListener];
      const track = stream.muted ? stream._mutedTrack.clone() : stream.track.clone();
      const producerOptions = {
        track
      };
      const encodings = this.publication.encodings;

      if (encodings) {
        producerOptions.encodings = encodings;
      }

      const deviceCodecs = (_a2 = this._device.rtpCapabilities.codecs) != null ? _a2 : [];
      const codecMimeType = (_c = (_b2 = this.publication.codecCapabilities.find(codec2 => deviceCodecs.map(rtp => rtp.mimeType.toLowerCase()).includes(codec2.mimeType.toLowerCase()))) == null ? void 0 : _b2.mimeType) != null ? _c : "";
      const codec = deviceCodecs.find(c => c.mimeType.toLowerCase() === codecMimeType.toLocaleLowerCase());

      if (codec) {
        producerOptions.codec = codec;
      }

      const producer = yield this._transport.produce(producerOptions);
      this._producer = producer;
      yield this._setupEncoding(producer);
    });
  }

  _setupEncoding(producer) {
    return __async(this, null, function* () {
      const encodings = this.publication.encodings;

      const setEncodingParams = newEncodings => __async(this, null, function* () {
        const sender = producer.rtpSender;
        const params = sender.getParameters();

        if (params.encodings == void 0) {
          params.encodings = [];
        }

        params.encodings = newEncodings.map((v, i) => __spreadValues(__spreadValues({}, params.encodings[i] || {}), v));
        yield sender.setParameters(params).catch(e2 => log27.error("setParameters", e2));
      });

      this.publication._onEncodingsChanged.add(encodings2 => __async(this, null, function* () {
        yield setEncodingParams(encodings2);
      }));

      if (encodings.length > 0 && ((0, import_mediasoup_client2.detectDevice)() === "Safari11" || (0, import_mediasoup_client2.detectDevice)() === "Safari12")) {
        yield setEncodingParams(encodings);
      }
    });
  }

  unproduce() {
    if (!this._producer) {
      throw new SkyWayError({
        type: "notFound",
        message: "producer not exist"
      });
    }

    this._iceConnection.close();

    this._producer.close();

    this._producer = void 0;

    this._transport.close();
  }

  _replaceTrack(track) {
    return __async(this, null, function* () {
      var _a2, _b2;

      yield (_b2 = (_a2 = this._producer) == null ? void 0 : _a2.replaceTrack) == null ? void 0 : _b2.call(_a2, {
        track
      });
    });
  }

  getStats() {
    return this._transport.getStats();
  }

  close() {
    var _a2, _b2;

    const pc = (_b2 = (_a2 = this._transport) == null ? void 0 : _a2._handler) == null ? void 0 : _b2._pc;

    if (pc == null ? void 0 : pc.peerIdentity) {
      pc.peerIdentity.catch(() => {});
    }

    this._transport.close();

    this._disposer.forEach(d => d());

    this._disposer = [];
  }

}; // ../sfu-client/src/connection/index.ts

var log28 = new Logger("packages/sfu-client/src/connection/index.ts");
var SFUConnection = class {
  constructor(_iceManager, _api, channelId, localPersonId, remoteMember, _context) {
    this._iceManager = _iceManager;
    this._api = _api;
    this.channelId = channelId;
    this.localPersonId = localPersonId;
    this.remoteMember = remoteMember;
    this._context = _context;
    this.type = "sfu";
    this.onDisconnect = new Event();
    this.onClose = new Event();
    this.closed = false;
    this._receivers = {};
    this._senders = {};
  }

  addSenderConnection(publication) {
    const sender = new Sender2(publication, this._iceManager, this._api, this.remoteMember, this._context);
    this._senders[publication.id] = sender;
    return sender;
  }

  removeSenderConnection(originPublicationId) {
    log28.debug("removeSenderConnection", originPublicationId);
    const sender = this._senders[originPublicationId];

    if (sender) {
      sender.unproduce();
      delete this._senders[originPublicationId];
    }
  }

  startSubscribing(subscription) {
    return __async(this, null, function* () {
      if (!this.rtpCapabilities) {
        log28.debug("[start] getCapabilities");
        this.rtpCapabilities = yield this._api.getCapabilities({
          botId: this.remoteMember.id,
          forwardingId: subscription.publication.id
        });
        log28.debug("[end] getCapabilities");
      }

      const receiver = new Receiver2(this._iceManager, subscription, this._api, this.remoteMember, this._context, this.rtpCapabilities);
      this._receivers[subscription.id] = receiver;
      const {
        codecs,
        track
      } = yield receiver.consume();
      const [selectedCodec] = codecs;
      const stream = createRemoteStream("", "", track);
      subscription.codec = selectedCodec;
      subscription.stream = stream;
    });
  }

  stopSubscribing(subscription) {
    return __async(this, null, function* () {
      const connection = this._receivers[subscription.id];

      if (!connection) {
        throw new SkyWayError({
          type: "notFound",
          message: "not exist connection",
          payload: {
            subscription
          }
        });
      }

      connection.unconsume();
      delete this._receivers[subscription.id];
    });
  }

  stopPublishing(publication) {
    return __async(this, null, function* () {
      this.removeSenderConnection(publication.id);
    });
  }

  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
    Object.values(this._senders).forEach(s => {
      s.close();
    });
    this._senders = {};
    Object.values(this._receivers).forEach(r2 => {
      r2.close();
    });
    this._receivers = {};
    this.onClose.emit();
  }

  getReceiver(subscriptionId) {
    return this._receivers[subscriptionId];
  }

  getSender(forwardingId) {
    return this._senders[forwardingId];
  }

}; // ../sfu-client/src/forwarding.ts

init_process();
var Forwarding = class {
  constructor(id, configure, originPublication, relayingPublication) {
    this.id = id;
    this.configure = configure;
    this.originPublication = originPublication;
    this.relayingPublication = relayingPublication;
    this.state = "started";
    this.onStopped = new Event();
  }

  stop() {
    this.state = "stopped";
    this.onStopped.emit();
  }

  toJSON() {
    return {
      id: this.id,
      configure: this.configure,
      originPublication: this.originPublication,
      relayingPublication: this.relayingPublication
    };
  }

}; // ../sfu-client/src/member.ts

init_process();
var log29 = new Logger("packages/sfu-client/src/member.ts");

var _SfuBotMember = class extends MemberImpl {
  constructor(args) {
    super(args);
    this.side = "remote";
    this.subtype = _SfuBotMember.subtype;
    this.type = "bot";
    this._connections = {};
    this.onForwardingStarted = new Event();
    this.onForwardingStopped = new Event();
    this.onForwardingStateChanged = new Event();
    this._api = args.api;
    this._context = args.context;
    this.onLeft.once(() => {
      log29.debug("SfuBotMember left: ", {
        id: this.id
      });
      Object.values(this._connections).forEach(c => {
        c.close();
      });
      this._connections = {};
    });
  }

  _getConnection(localPersonId) {
    return this._connections[localPersonId];
  }

  _getOrCreateConnection(localPersonId) {
    var _a2;

    const connection = (_a2 = this._getConnection(localPersonId)) != null ? _a2 : this._createConnection(this.channel, localPersonId, this);
    return connection;
  }

  _createConnection(channel, localPersonId, endpointBot) {
    const localPerson = channel._getPerson(localPersonId);

    if (!localPerson) {
      throw new SkyWayError({
        type: "notFound",
        message: "LocalPerson not found in channel instance."
      });
    }

    const connection = new SFUConnection(localPerson.iceManager, endpointBot._api, channel.id, localPersonId, endpointBot, this._context);
    connection.onClose.once(() => {
      delete this._connections[localPersonId];
    });
    this._connections[localPersonId] = connection;
    return connection;
  }

  startForwarding(_0) {
    return __async(this, arguments, function* (publication, configure = {
      maxSubscribers: 4
    }) {
      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "sfuBot not in channel",
          payload: {
            status: this.status
          }
        });
      }

      const relayed = publication;
      log29.debug("[start] SfuBotMember startForwarding", {
        publication: relayed.toJSON(),
        configure
      });

      try {
        const connection = this._getOrCreateConnection(relayed.publisher.id);

        const sender = connection.addSenderConnection(relayed);
        const forwardingId = yield sender.startForwarding(configure);

        let relayingPublication = this.channel._getPublication(forwardingId);

        if (!relayingPublication) {
          relayingPublication = (yield this.channel.onStreamPublished.watch(e2 => e2.publication.id === forwardingId, this._context.config.rtcApi.timeout).catch(() => {
            throw new SkyWayError({
              type: "timeout",
              message: "SfuBotMember onStreamPublished",
              payload: {
                forwardingId
              }
            });
          })).publication;
        }

        const forwarding = new Forwarding(forwardingId, configure, relayed, relayingPublication);
        this.listenStopForwardEvent(forwarding);
        this.onForwardingStarted.emit(forwarding);
        this.onForwardingStateChanged.emit();
        log29.debug("[end] SfuBotMember startForwarding", {
          forwarding: forwarding.toJSON()
        });
        return forwarding;
      } catch (error) {
        throw new SkyWayError({
          type: "internalError",
          message: "[failed] SfuBotMember startForwarding",
          payload: {
            error,
            publication
          }
        });
      }
    });
  }

  listenStopForwardEvent(forwarding) {
    const {
      removeListener
    } = this.channel.onStreamUnpublished.add(e2 => {
      if (e2.publication.id === forwarding.id) {
        removeListener();
        forwarding.stop();
        const origin = forwarding.originPublication;

        const connection = this._getConnection(origin.publisherId);

        if (connection) {
          connection.removeSenderConnection(origin.id);
        }

        this.onForwardingStopped.emit(forwarding);
        this.onForwardingStateChanged.emit();
      }
    });
  }

  stopForwarding(forwardingId) {
    return __async(this, null, function* () {
      if (this.status !== "joined") {
        throw new SkyWayError({
          type: "forbidden",
          message: "sfuBot not in channel",
          payload: {
            status: this.status
          }
        });
      }

      this._api.stopForwarding({
        botId: this.id,
        forwardingId
      });

      yield this.onForwardingStopped.watch(f => f.id === forwardingId, this._context.config.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onForwardingStopped"
        });
      });
    });
  }

};

var SfuBotMember = _SfuBotMember;
SfuBotMember.subtype = "sfu";

SfuBotMember.IsSfuBotMember = member => {
  if (member.subtype === _SfuBotMember.subtype) {
    return true;
  }

  return false;
}; // ../sfu-client/src/plugin.ts


init_process(); // ../sfu-api-client/src/index.ts

init_process(); // ../sfu-api-client/src/api.ts

init_process(); // ../sfu-api-client/src/const.ts

init_process();
var defaultSfuApiOptions = {
  domain: "b-sbs.beta.skyway.ntt.com",
  secure: true,
  version: 1,
  logLevel: "warn"
}; // ../sfu-api-client/src/api.ts

var log30 = new Logger("packages/sfu-client/src/api.ts");
var SfuRestApiClient = class {
  constructor(_token, _options = {}) {
    this._token = _token;
    this.options = __spreadValues(__spreadValues({}, defaultSfuApiOptions), _options);
    this.endpoint = `http${this.options.secure ? "s" : ""}://${this.options.domain}/v${this.options.version}`;
    this.http = new HttpClient(this.endpoint);
    Logger.level = this.options.logLevel;
    log30.debug("SfuRestApiClient spawned", {
      endpoint: this.endpoint
    });
  }

  updateToken(token) {
    this._token = token;
  }

  createBot(_0) {
    return __async(this, arguments, function* ({
      appId,
      channelId
    }) {
      const res = yield this.http.post("/bots", {
        appId,
        channelId
      }, {
        headers: {
          authorization: `Bearer ${this._token}`
        }
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "createBot failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "createBot failed",
              payload: {
                data: e2.message
              }
            });
        }
      });
      return res.id;
    });
  }

  deleteBot(_0) {
    return __async(this, arguments, function* ({
      botId
    }) {
      yield this.http.delete(`/bots/${botId}`, {
        headers: {
          authorization: `Bearer ${this._token}`
        }
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "deleteBot failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "deleteBot failed",
              payload: {
                data: e2.message
              }
            });
        }
      });
    });
  }

  startForwarding(_0) {
    return __async(this, arguments, function* ({
      botId,
      publicationId,
      maxSubscribers,
      contentType
    }) {
      const backOff = new BackOff2();
      const res = yield this.http.post(`/bots/${botId}/forwardings`, {
        publicationId,
        maxSubscribers,
        contentType: contentType[0].toUpperCase() + contentType.slice(1)
      }, {
        headers: {
          authorization: `Bearer ${this._token}`
        },
        retry: () => __async(this, null, function* () {
          return yield backOff.wait();
        })
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "startForwarding failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "startForwarding failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status,
                retry: backOff.retry
              }
            });
        }
      });

      if (backOff.retry > 0) {
        log30.warn("success to retry startForwarding", {
          botId,
          publicationId,
          retry: backOff.retry
        });
      }

      return res;
    });
  }

  createProducer(_0) {
    return __async(this, arguments, function* ({
      botId,
      forwardingId,
      transportId,
      producerOptions
    }) {
      const backOff = new BackOff2();
      const res = yield this.http.put(`/bots/${botId}/forwardings/${forwardingId}/transport/producer`, {
        transportId,
        producerOptions
      }, {
        headers: {
          authorization: `Bearer ${this._token}`
        },
        retry: () => __async(this, null, function* () {
          return yield backOff.wait();
        })
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "createProducer failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "createProducer failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status,
                retry: backOff.retry
              }
            });
        }
      });

      if (backOff.retry > 0) {
        log30.warn("success to retry createProducer", {
          botId,
          forwardingId,
          transportId,
          retry: backOff.retry
        });
      }

      return "";
    });
  }

  createConsumer(_0) {
    return __async(this, arguments, function* ({
      botId,
      forwardingId,
      rtpCapabilities,
      subscriptionId
    }) {
      const backOff = new BackOff2();
      const requestPayload = {
        rtpCapabilities,
        subscriptionId
      };
      const res = yield this.http.post(`/bots/${botId}/forwardings/${forwardingId}/transport/consumers`, requestPayload, {
        retry: err => __async(this, null, function* () {
          if (err.status === 400) {
            return false;
          }

          return yield backOff.wait();
        }),
        headers: {
          authorization: `Bearer ${this._token}`
        }
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "createConsumer failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "createConsumer failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status,
                retry: backOff.retry
              }
            });
        }
      });

      if (backOff.retry > 0) {
        log30.warn("success to retry createConsumer", {
          botId,
          forwardingId,
          retry: backOff.retry
        });
      }

      return res;
    });
  }

  connect(_0) {
    return __async(this, arguments, function* ({
      botId,
      forwardingId,
      transportId,
      dtlsParameters
    }) {
      const backOff = new BackOff2();
      const res = yield this.http.put(`/bots/${botId}/forwardings/${forwardingId}/transport/connection`, {
        transportId,
        dtlsParameters
      }, {
        headers: {
          authorization: `Bearer ${this._token}`
        },
        retry: () => __async(this, null, function* () {
          return yield backOff.wait();
        })
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "connect failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "connect failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status,
                retry: backOff.retry
              }
            });
        }
      });

      if (backOff.retry > 0) {
        log30.warn("success to retry connect", {
          botId,
          forwardingId,
          transportId,
          retry: backOff.retry
        });
      }

      return res;
    });
  }

  stopForwarding(_0) {
    return __async(this, arguments, function* ({
      botId,
      forwardingId
    }) {
      yield this.http.delete(`/bots/${botId}/forwardings/${forwardingId}`, {
        headers: {
          authorization: `Bearer ${this._token}`
        }
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "stopForwarding failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "stopForwarding failed",
              payload: {
                data: e2.message
              }
            });
        }
      });
    });
  }

  getCapabilities(_0) {
    return __async(this, arguments, function* ({
      botId,
      forwardingId
    }) {
      const backOff = new BackOff2();
      const res = yield this.http.get(`/bots/${botId}/forwardings/${forwardingId}/transport/rtp_capabilities`, {
        headers: {
          authorization: `Bearer ${this._token}`
        },
        retry: () => __async(this, null, function* () {
          return yield backOff.wait();
        })
      }).catch(e2 => {
        switch (e2 == null ? void 0 : e2.status) {
          case 403:
            throw new SkyWayError({
              type: "insufficientPermissions",
              message: "getCapabilities failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status
              }
            });

          default:
            throw new SkyWayError({
              type: "backendError",
              message: "getCapabilities failed",
              payload: {
                data: e2 == null ? void 0 : e2.data,
                message: e2 == null ? void 0 : e2.message,
                status: e2 == null ? void 0 : e2.status,
                retry: backOff.retry
              }
            });
        }
      });

      if (backOff.retry > 0) {
        log30.warn("getCapabilities to retry connect", {
          botId,
          forwardingId,
          retry: backOff.retry
        });
      }

      return res.routerRtpCapabilities;
    });
  }

};
var BackOff2 = class {
  constructor(times = 8) {
    this.times = times;
    this.retry = 0;
  }

  wait() {
    return __async(this, null, function* () {
      if (this.retry++ > this.times) {
        return false;
      }

      const timeout = __pow(this.retry, 2) * 100;
      yield new Promise(r2 => setTimeout(r2, timeout));
      return true;
    });
  }

}; // ../sfu-client/src/const.ts

init_process();

var defaultSfuClientPluginOptions = __spreadProps(__spreadValues({}, defaultSfuApiOptions), {
  endpointTimeout: 3e4
}); // ../sfu-client/src/plugin.ts


var SfuClientPlugin = class extends SkyWayPlugin {
  constructor(_options = {}) {
    super();
    this.subtype = SfuBotMember.subtype;

    this._createRemoteMember = (channel, sfuBot) => {
      const member = new SfuBotMember(__spreadProps(__spreadValues({}, this._context), {
        channel,
        id: sfuBot.id,
        name: sfuBot.name,
        metadata: sfuBot.metadata,
        plugin: this,
        api: this._api,
        context: this._context
      }));
      return member;
    };

    this.createBot = channel => __async(this, null, function* () {
      var _a2;

      const botId = yield this._api.createBot({
        appId: this._context.authToken.scope.app.id,
        channelId: channel.id
      });
      const member = (_a2 = channel._getMember(botId)) != null ? _a2 : (yield channel.onMemberJoined.watch(e2 => e2.member.id === botId, this._context.config.rtcApi.timeout).catch(error => {
        throw new SkyWayError({
          type: "timeout",
          message: "SfuClientPlugin onMemberJoined",
          payload: {
            error
          }
        });
      })).member;
      return member;
    });

    this.deleteBot = (channel, botId) => __async(this, null, function* () {
      this._api.deleteBot({
        botId
      });

      yield channel.onMemberLeft.watch(e2 => e2.member.id === botId, this._context.config.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onMemberLeft"
        });
      });
    });

    this.options = __spreadValues(__spreadValues({}, defaultSfuClientPluginOptions), _options);

    this._onContextAttached.once(() => {
      this._api = new SfuRestApiClient(this._context.authTokenString, __spreadProps(__spreadValues({}, this.options), {
        logLevel: this._context.config.logLevel
      }));

      this._context._onTokenUpdated.add(token => {
        this._api.updateToken(token);
      });
    });
  }

}; // src/const.ts

init_process();
var defaultMaxSubscribers = 10; // src/member/local/sfu.ts

var log31 = new Logger("packages/room/src/member/local/sfu.ts");
var LocalSFURoomMemberImpl = class extends LocalRoomMemberImpl {
  constructor(member, room) {
    super(member, room);
  }

  publish(_0) {
    return __async(this, arguments, function* (stream, options = {}) {
      var _a2, _b2;

      if (stream instanceof LocalDataStream) {
        throw new SkyWayError({
          type: "invalidType",
          message: "not supported"
        });
      }

      log31.debug("[start] LocalSFURoomMemberImpl publish");

      try {
        options.maxSubscribers = (_a2 = options.maxSubscribers) != null ? _a2 : defaultMaxSubscribers;
        options.policy = (_b2 = options.policy) != null ? _b2 : "tile";

        if (options.policy === "tile") {
          let short = stream.track.getSettings().width;

          if (short > stream.track.getSettings().height) {
            short = stream.track.getSettings().height;
          }

          const res = calcResolutionByMaxSubscribers(options.maxSubscribers);
          let ratio = 1;

          if (short > res) {
            ratio = Math.floor(short / res);
          }

          log31.debug("original encodings", JSON.stringify(options.encodings));

          if (options.encodings) {
            options.encodings = options.encodings.map(e2 => {
              var _a3;

              if ((_a3 = e2.scaleResolutionDownBy) != null ? _a3 : 0 > ratio) return e2;
              return __spreadProps(__spreadValues({}, e2), {
                scaleResolutionDownBy: ratio
              });
            });
          } else {
            options.encodings = [{
              scaleResolutionDownBy: ratio
            }];
          }

          log31.debug("new encodings", JSON.stringify(options.encodings));
        }

        const origin = yield this._local.publish(stream, options);

        const bot = this.room._channel.members.find(m => m.subtype === SfuBotMember.subtype);

        if (!bot) {
          throw new SkyWayError({
            type: "notFound",
            message: "bot not found"
          });
        }

        const forwarding = yield bot.startForwarding(origin, {
          maxSubscribers: options.maxSubscribers
        });
        const relayingPublication = forwarding.relayingPublication;

        const roomPublication = this.room._addPublication(relayingPublication);

        this.onStreamPublished.emit({
          publication: roomPublication
        });
        log31.debug("[end] LocalSFURoomMemberImpl publish");
        return roomPublication;
      } catch (error) {
        throw new SkyWayError({
          type: "internalError",
          message: "[failed] LocalSFURoomMemberImpl publish",
          payload: {
            error,
            message: error == null ? void 0 : error.message
          }
        });
      }
    });
  }

  unpublish(publicationId) {
    return __async(this, null, function* () {
      const publication = this.room._getPublication(publicationId);

      const origin = publication._publication.origin;

      if (!origin) {
        throw new SkyWayError({
          type: "parameterMissing",
          message: "sfu room's publication must has origin"
        });
      }

      this._local.unpublish(origin.id);

      yield this.room.onStreamUnpublished.watch(e2 => e2.publication.id === publicationId, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onStreamUnpublished"
        });
      });
      this.onStreamUnpublished.emit({
        publication
      });
    });
  }

  subscribe(publicationId) {
    return __async(this, null, function* () {
      const {
        subscription,
        stream
      } = yield this._local.subscribe(publicationId);

      const roomSubscription = this.room._addSubscription(subscription);

      return {
        subscription: roomSubscription,
        stream
      };
    });
  }

  unsubscribe(subscriptionId) {
    return __async(this, null, function* () {
      this._local.unsubscribe(subscriptionId);

      yield this.room.onStreamUnsubscribed.watch(e2 => e2.subscription.id === subscriptionId, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onStreamUnsubscribed"
        });
      });
    });
  }

  _updateRoom(room) {
    log31.debug("_updateRoom", {
      memberId: this.id
    });
    this.room = room;

    this._listenRoomEvent();
  }

};
exports.LocalSFURoomMemberImpl = LocalSFURoomMemberImpl;

function calcResolutionByMaxSubscribers(max) {
  const baseResolution = 1080;
  const row = Math.floor(Math.sqrt(max));
  const resolution = Math.floor(baseResolution / row);
  return resolution;
} // src/member/remote/base.ts


init_process();
var RemoteRoomMemberImpl = class extends RoomMemberImpl {
  constructor(member, room) {
    super(member, room);
    this.side = "remote";
    this.onPublicationSubscribed = new Event();
    this.onPublicationUnsubscribed = new Event();
    this.onSubscriptionChanged = new Event();
    this._remotePerson = this._member;

    this.subscribe = publicationId => new Promise((r2, f) => {
      this._remotePerson.subscribe(publicationId).catch(f);

      this.onPublicationSubscribed.watch(e2 => e2.subscription.publication.id === publicationId).then(e2 => r2(e2)).catch(f);
    });

    this.unsubscribe = subscriptionId => new Promise((r2, f) => {
      this._remotePerson.unsubscribe(subscriptionId).catch(f);

      this.onPublicationUnsubscribed.watch(e2 => e2.subscription.id === subscriptionId).then(() => r2()).catch(f);
    });

    room.onStreamSubscribed.add(e2 => {
      if (e2.subscription.subscriber._member.id === member.id) {
        this.onPublicationSubscribed.emit(e2);
        this.onSubscriptionChanged.emit();
      }
    });
    room.onStreamUnsubscribed.add(e2 => {
      if (e2.subscription.subscriber._member.id === member.id) {
        this.onPublicationUnsubscribed.emit(e2);
        this.onSubscriptionChanged.emit();
      }
    });
  }

}; // src/publication/index.ts

exports.RemoteRoomMemberImpl = RemoteRoomMemberImpl;
init_process();
var log32 = new Logger("packages/room/src/publication/index.ts");
var RoomPublicationImpl = class {
  constructor(_publication, _room) {
    this._publication = _publication;
    this._room = _room;
    this._events = new Events();
    this.onUnpublished = this._events.make();
    this.onSubscribed = this._events.make();
    this.onUnsubscribed = this._events.make();
    this.onSubscriptionChanged = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.id = _publication.id;
    this.contentType = _publication.contentType;
    this.codecCapabilities = _publication.codecCapabilities;
    this._origin = _publication.origin;
    this.publisher = this._room._getMember(this._origin ? this._origin.publisher.id : _publication.publisher.id);

    this._setEvents();
  }

  _setEvents() {
    this._room.onStreamUnpublished.add(e2 => {
      if (e2.publication.id === this.id) {
        this.onUnpublished.emit();

        this._events.dispose();
      }
    });

    this._room.onStreamSubscribed.add(e2 => {
      if (e2.subscription.publication.id === this.id) {
        this.onSubscribed.emit();
        this.onSubscriptionChanged.emit();
      }
    });

    this._room.onStreamUnsubscribed.add(e2 => {
      if (e2.subscription.publication.id === this.id) {
        this.onUnsubscribed.emit();
        this.onSubscriptionChanged.emit();
      }
    });

    this._publication.onMetadataUpdated.pipe(this.onMetadataUpdated);
  }

  get encodings() {
    return this._publication.encodings;
  }

  get stream() {
    if (this._origin) {
      return this._origin.stream;
    }

    return this._publication.stream;
  }

  get subscriptions() {
    return this._publication.subscriptions.map(s => this._room._getSubscription(s.id));
  }

  get status() {
    return this._publication.status;
  }

  get metadata() {
    if (this._origin) {
      return this._origin.metadata;
    }

    return this._publication.metadata;
  }

  cancel() {
    return __async(this, null, function* () {
      if (this._origin) {
        yield Promise.all([this._origin.cancel(), this.onUnpublished.asPromise()]);
      } else {
        yield Promise.all([this._publication.cancel(), this.onUnpublished.asPromise()]);
      }
    });
  }

  updateMetadata(metadata) {
    return __async(this, null, function* () {
      if (this._origin) {
        return this._origin.updateMetadata(metadata);
      }

      return this._publication.updateMetadata(metadata);
    });
  }

  updateEncodings(encodings) {
    return this._publication.updateEncodings(encodings);
  }

}; // src/room/index.ts

exports.RoomPublicationImpl = RoomPublicationImpl;
init_process(); // node_modules/uuid/dist/esm-browser/index.js

init_process(); // node_modules/uuid/dist/esm-browser/rng.js

init_process();
var getRandomValues4;
var rnds84 = new Uint8Array(16);

function rng4() {
  if (!getRandomValues4) {
    getRandomValues4 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues4) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }

  return getRandomValues4(rnds84);
} // node_modules/uuid/dist/esm-browser/stringify.js


init_process(); // node_modules/uuid/dist/esm-browser/validate.js

init_process(); // node_modules/uuid/dist/esm-browser/regex.js

init_process();
var regex_default4 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i; // node_modules/uuid/dist/esm-browser/validate.js

function validate4(uuid) {
  return typeof uuid === "string" && regex_default4.test(uuid);
}

var validate_default4 = validate4; // node_modules/uuid/dist/esm-browser/stringify.js

var byteToHex4 = [];

for (i = 0; i < 256; ++i) {
  byteToHex4.push((i + 256).toString(16).substr(1));
}

var i;

function stringify4(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex4[arr[offset + 0]] + byteToHex4[arr[offset + 1]] + byteToHex4[arr[offset + 2]] + byteToHex4[arr[offset + 3]] + "-" + byteToHex4[arr[offset + 4]] + byteToHex4[arr[offset + 5]] + "-" + byteToHex4[arr[offset + 6]] + byteToHex4[arr[offset + 7]] + "-" + byteToHex4[arr[offset + 8]] + byteToHex4[arr[offset + 9]] + "-" + byteToHex4[arr[offset + 10]] + byteToHex4[arr[offset + 11]] + byteToHex4[arr[offset + 12]] + byteToHex4[arr[offset + 13]] + byteToHex4[arr[offset + 14]] + byteToHex4[arr[offset + 15]]).toLowerCase();

  if (!validate_default4(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }

  return uuid;
}

var stringify_default4 = stringify4; // node_modules/uuid/dist/esm-browser/v4.js

init_process();

function v44(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng4)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify_default4(rnds);
}

var v4_default4 = v44; // src/room/index.ts

var SkyWayRoom = class {
  static Create(context, init) {
    return __async(this, null, function* () {
      var _a2, _b2;

      const plugin = new SfuClientPlugin((_a2 = init == null ? void 0 : init.options) == null ? void 0 : _a2.sfu);
      context.registerPlugin(plugin);
      const channel = yield SkyWayChannel.Create(context, {
        name: (_b2 = init.name) != null ? _b2 : v4_default4(),
        metadata: init.metadata
      });
      const room = yield this._Factory(context, init.type, channel);
      return room;
    });
  }

  static Find(context, query, roomType, options) {
    return __async(this, null, function* () {
      const plugin = new SfuClientPlugin(options == null ? void 0 : options.sfu);
      context.registerPlugin(plugin);
      const channel = yield SkyWayChannel.Find(context, query);
      const room = yield this._Factory(context, roomType, channel);
      return room;
    });
  }

  static FindOrCreate(context, init) {
    return __async(this, null, function* () {
      var _a2;

      const plugin = new SfuClientPlugin((_a2 = init == null ? void 0 : init.options) == null ? void 0 : _a2.sfu);
      context.registerPlugin(plugin);
      const channel = yield SkyWayChannel.FindOrCreate(context, __spreadValues({}, init));
      const room = yield this._Factory(context, init.type, channel);
      return room;
    });
  }

  static _Factory(context, roomType, channel) {
    return __async(this, null, function* () {
      switch (roomType) {
        case "p2p":
          return new P2PRoomImpl(channel);

        case "sfu":
          return yield SfuRoomImpl.Create(context, channel);

        default:
          throw new SkyWayError({
            type: "notImplemented",
            message: "invalid RoomType"
          });
      }
    });
  }

};
exports.SkyWayRoom = SkyWayRoom;
var roomTypes = ["sfu", "p2p"]; // src/room/base.ts

exports.roomTypes = roomTypes;
init_process();
var RoomImpl = class {
  constructor(type, _channel) {
    this._channel = _channel;
    this._members = {};
    this._publications = {};
    this._subscriptions = {};
    this._events = new Events();
    this.onClosed = this._events.make();
    this.onMetadataUpdated = this._events.make();
    this.onMemberJoined = this._events.make();
    this.onMemberLeft = this._events.make();
    this.onMembershipChanged = this._events.make();
    this.onMemberMetadataUpdated = this._events.make();
    this.onStreamPublished = this._events.make();
    this.onStreamUnpublished = this._events.make();
    this.onPublicationChanged = this._events.make();
    this.onPublicationMetadataUpdated = this._events.make();
    this.onStreamSubscribed = this._events.make();
    this.onStreamUnsubscribed = this._events.make();
    this.onSubscriptionChangedEvent = this._events.make();
    this.type = type;

    this._channel.onClosed.pipe(this.onClosed);

    this._channel.onMetadataUpdated.pipe(this.onMetadataUpdated);

    this._channel.onMemberMetadataUpdated.add(e2 => {
      this._handleOnMemberMetadataUpdate(e2);
    });
  }

  _getMember(id) {
    return this._members[id];
  }

  _getPublication(id) {
    return this._publications[id];
  }

  _addPublication(p) {
    const exist = this._publications[p.id];

    if (exist) {
      return exist;
    }

    const publication = new RoomPublicationImpl(p, this);
    this._publications[p.id] = publication;
    return publication;
  }

  _getSubscription(id) {
    return this._subscriptions[id];
  }

  _addSubscription(s) {
    const exist = this._subscriptions[s.id];

    if (exist) {
      return exist;
    }

    const subscription = new RoomSubscriptionImpl(s, this);
    this._subscriptions[s.id] = subscription;
    return subscription;
  }

  get id() {
    return this._channel.id;
  }

  get name() {
    return this._channel.name;
  }

  get metadata() {
    return this._channel.metadata;
  }

  get status() {
    return this._channel.status;
  }

  get disposed() {
    return this._channel.disposed;
  }

  _handleOnMemberMetadataUpdate(e2) {
    const member = this._getMember(e2.member.id);

    this.onMemberMetadataUpdated.emit({
      member,
      metadata: e2.metadata
    });
  }

  get members() {
    return Object.values(this._members);
  }

  get publications() {
    return Object.values(this._publications);
  }

  get subscriptions() {
    return Object.values(this._subscriptions);
  }

  joinChannel() {
    return __async(this, arguments, function* (roomMemberInit = {}) {
      var _a2;

      if (this.status !== "opened") {
        throw new SkyWayError({
          type: "forbidden",
          message: "room not opened"
        });
      }

      roomMemberInit.name = (_a2 = roomMemberInit.name) != null ? _a2 : v4_default4();
      const local = yield this._channel.join(roomMemberInit);

      if (!this._getMember(local.id)) {
        yield this.onMemberJoined.watch(e2 => {
          return e2.member._member.id === local.id;
        }, SkyWayConfig.get.rtcApi.timeout).catch(error => {
          throw new SkyWayError({
            type: "timeout",
            message: "RoomImpl onMemberJoined",
            payload: {
              error
            }
          });
        });
      }

      return local;
    });
  }

  leave(member) {
    return __async(this, null, function* () {
      yield this._channel.leave(member._member);
    });
  }

  memberMoveFromOtherRoom(member) {
    return __async(this, null, function* () {
      yield this._channel.memberMoveFromOtherChannel(member._local);

      member._updateRoom(this);

      return member;
    });
  }

  updateMetadata(metadata) {
    return this._channel.updateMetadata(metadata);
  }

  close() {
    return __async(this, null, function* () {
      yield this._channel.close();
    });
  }

  dispose() {
    return __async(this, null, function* () {
      return this._channel.dispose();
    });
  }

}; // src/room/event.ts

exports.RoomImpl = RoomImpl;
init_process(); // src/room/p2p.ts

init_process();
var log33 = new Logger("packages/room/src/room/p2p.ts");
var P2PRoomImpl = class extends RoomImpl {
  constructor(channel) {
    super("p2p", channel);
    this.setChannelState();
    this.setChannelListener();
  }

  setChannelState() {
    this._channel.members.forEach(m => {
      const member = new RemoteRoomMemberImpl(m, this);
      this._members[m.id] = member;
    });

    this._channel.publications.forEach(p => {
      this._addPublication(p);
    });

    this._channel.subscriptions.forEach(s => {
      this._addSubscription(s);
    });
  }

  setChannelListener() {
    this._channel.onMemberJoined.add(e2 => this._handleOnMemberJoin(e2.member));

    this._channel.onMemberLeft.add(e2 => this._handleOnMemberLeft(e2.member));

    this._channel.onStreamPublished.add(e2 => this._handleOnStreamPublish(e2.publication));

    this._channel.onStreamUnpublished.add(e2 => this._handleOnStreamUnpublish(e2.publication));

    this._channel.onPublicationMetadataUpdated.add(e2 => {
      this._handleOnPublicationMetadataUpdate(e2.publication);
    });

    this._channel.onStreamSubscribed.add(e2 => this._handleOnStreamSubscribe(e2.subscription));

    this._channel.onStreamUnsubscribed.add(e2 => this._handleOnStreamUnsubscribe(e2.subscription));
  }

  _handleOnMemberJoin(m) {
    if (this._getMember(m.id)) {
      throw new SkyWayError({
        type: "duplicate",
        message: "member duplicate"
      });
    }

    const member = new RemoteRoomMemberImpl(m, this);
    this._members[m.id] = member;
    this.onMemberJoined.emit({
      member
    });
    this.onMembershipChanged.emit({});
  }

  _handleOnMemberLeft(m) {
    const member = this._getMember(m.id);

    delete this._members[m.id];
    this.onMemberLeft.emit({
      member
    });
    this.onMembershipChanged.emit({});
  }

  _handleOnStreamPublish(p) {
    if (this._getPublication(p.id)) {
      throw new SkyWayError({
        type: "duplicate",
        message: "publication duplicate"
      });
    }

    const publication = this._addPublication(p);

    this.onStreamPublished.emit({
      publication
    });
    this.onPublicationChanged.emit({});
  }

  _handleOnStreamUnpublish(p) {
    const publication = this._getPublication(p.id);

    delete this._publications[p.id];
    this.onStreamUnpublished.emit({
      publication
    });
    this.onPublicationChanged.emit({});
  }

  _handleOnPublicationMetadataUpdate(p) {
    const publication = this._getPublication(p.id);

    this.onPublicationMetadataUpdated.emit({
      publication,
      metadata: publication.metadata
    });
  }

  _handleOnStreamSubscribe(s) {
    if (this._getSubscription(s.id)) {
      throw new SkyWayError({
        type: "duplicate",
        message: "subscription duplicate"
      });
    }

    const subscription = this._addSubscription(s);

    this.onStreamSubscribed.emit({
      subscription
    });
    this.onSubscriptionChangedEvent.emit({});
  }

  _handleOnStreamUnsubscribe(s) {
    const subscription = this._getSubscription(s.id);

    delete this._subscriptions[s.id];
    this.onStreamUnsubscribed.emit({
      subscription
    });
    this.onSubscriptionChangedEvent.emit({});
  }

  join() {
    return __async(this, arguments, function* (memberInit = {}) {
      const local = yield this.joinChannel(memberInit);
      const localRoomMember = new LocalP2PRoomMemberImpl(local, this);
      log33.debug("member joined", memberInit);
      return localRoomMember;
    });
  }

}; // src/room/sfu.ts

exports.P2PRoomImpl = P2PRoomImpl;
init_process();
var log34 = new Logger("packages/room/src/room/sfu.ts");
var SfuRoomImpl = class extends RoomImpl {
  constructor(channel, _plugin) {
    super("sfu", channel);
    this._plugin = _plugin;
    this.setChannelState();
    this.setChannelListener();
  }

  static Create(context, channel) {
    return __async(this, null, function* () {
      const plugin = context.plugins.find(p => p.subtype === "sfu");
      const bot = channel.members.find(m => m.subtype === SfuBotMember.subtype);

      if (!bot) {
        yield plugin.createBot(channel);
      }

      const room = new SfuRoomImpl(channel, plugin);
      return room;
    });
  }

  setChannelState() {
    this._channel.members.forEach(m => {
      if (m.type === "bot") {
        return;
      }

      const member = new RemoteRoomMemberImpl(m, this);
      this._members[m.id] = member;
    });

    this._channel.publications.forEach(p => {
      if (!p.origin) {
        return;
      }

      this._addPublication(p);
    });

    this._channel.subscriptions.forEach(s => {
      if (s.subscriber.type === "bot") {
        return;
      }

      this._addSubscription(s);
    });
  }

  setChannelListener() {
    this._channel.onMemberJoined.add(e2 => this._handleOnMemberJoin(e2.member));

    this._channel.onMemberLeft.add(e2 => this._handleOnMemberLeft(e2.member));

    this._channel.onStreamPublished.add(e2 => {
      this._handleOnStreamPublish(e2.publication);
    });

    this._channel.onStreamUnpublished.add(e2 => this._handleOnStreamUnpublish(e2.publication));

    this._channel.onPublicationMetadataUpdated.add(e2 => {
      this._handleOnPublicationMetadataUpdate(e2.publication);
    });

    this._channel.onStreamSubscribed.add(e2 => {
      this._handleOnStreamSubscribe(e2.subscription);
    });

    this._channel.onStreamUnsubscribed.add(e2 => this._handleOnStreamUnsubscribe(e2.subscription));
  }

  _handleOnMemberJoin(m) {
    if (m.type === "bot") {
      return;
    }

    const member = new RemoteRoomMemberImpl(m, this);
    this._members[m.id] = member;
    this.onMemberJoined.emit({
      member
    });
    this.onMembershipChanged.emit({});
  }

  _handleOnMemberLeft(m) {
    const member = this._getMember(m.id);

    if (!member) {
      return;
    }

    delete this._members[m.id];
    this.onMemberLeft.emit({
      member
    });
    this.onMembershipChanged.emit({});
  }

  _handleOnStreamPublish(p) {
    if (!p.originId) {
      return;
    }

    const publication = this._addPublication(p);

    this.onStreamPublished.emit({
      publication
    });
    this.onPublicationChanged.emit({});
  }

  _handleOnStreamUnpublish(p) {
    if (!p.originId) {
      return;
    }

    const publication = this._getPublication(p.id);

    delete this._publications[p.id];
    this.onStreamUnpublished.emit({
      publication
    });
    this.onPublicationChanged.emit({});
  }

  _handleOnPublicationMetadataUpdate(publication) {
    const relayed = this.publications.find(p => {
      var _a2;

      return ((_a2 = p._publication.origin) == null ? void 0 : _a2.id) === publication.id;
    });
    if (!relayed) return;
    this.onPublicationMetadataUpdated.emit({
      publication: relayed,
      metadata: relayed.metadata
    });
  }

  _handleOnStreamSubscribe(s) {
    if (s.subscriber.type === "bot") {
      return;
    }

    const subscription = this._addSubscription(s);

    this.onStreamSubscribed.emit({
      subscription
    });
    this.onSubscriptionChangedEvent.emit({});
  }

  _handleOnStreamUnsubscribe(s) {
    if (s.subscriber.type === "bot") {
      return;
    }

    const subscription = this._getSubscription(s.id);

    delete this._subscriptions[s.id];
    this.onStreamUnsubscribed.emit({
      subscription
    });
    this.onSubscriptionChangedEvent.emit({});
  }

  join() {
    return __async(this, arguments, function* (memberInit = {}) {
      const local = yield this.joinChannel(memberInit);
      const localRoomMember = new LocalSFURoomMemberImpl(local, this);
      log34.debug("member joined", memberInit);
      return localRoomMember;
    });
  }

}; // src/subscription/index.ts

exports.SfuRoomImpl = SfuRoomImpl;
init_process();
var RoomSubscriptionImpl = class {
  constructor(_subscription, _room) {
    this._subscription = _subscription;
    this._room = _room;
    this.onStreamAttached = new Event();
    this.id = _subscription.id;
    this.contentType = _subscription.contentType;

    _subscription.onStreamAttached.pipe(this.onStreamAttached);
  }

  get stream() {
    return this._subscription.stream;
  }

  get publication() {
    const publicationId = this._subscription.publication.id;

    const publication = this._room._getPublication(publicationId);

    return publication;
  }

  get subscriber() {
    return this._room._getMember(this._subscription.subscriber.id);
  }

  get status() {
    return this._subscription.status;
  }

  cancel() {
    return __async(this, null, function* () {
      this._subscription.cancel();

      yield this._room.onStreamUnsubscribed.watch(e2 => e2.subscription.id === this.id, SkyWayConfig.get.rtcApi.timeout).catch(() => {
        throw new SkyWayError({
          type: "timeout",
          message: "onStreamUnsubscribed"
        });
      });
    });
  }

};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

/*
@skyway-sdk/common@0.2.0-beta.9

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/core@0.2.0-beta.21

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/message-client@0.2.0-beta.4

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/model@0.2.0-beta.4

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/room@0.2.0-beta.23

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/rtc-api-client@0.2.0-beta.15

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/rtc-rpc-api-client@0.2.0-beta.14

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/sfu-api-client@0.2.0-beta.9

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/sfu-client@0.2.0-beta.14

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@skyway-sdk/token@0.2.0-beta.8

SEE LICENSE IN https://beta.skyway.ntt.com/terms.html



---

@types/debug@4.1.7

MIT

https://github.com/DefinitelyTyped/DefinitelyTyped

    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE


---

@types/events@3.0.0

MIT

https://github.com/DefinitelyTyped/DefinitelyTyped

    MIT License

    Copyright (c) Microsoft Corporation. All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE


---

@types/ms@0.7.31

MIT

https://github.com/DefinitelyTyped/DefinitelyTyped

    MIT License

    Copyright (c) Microsoft Corporation. All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE


---

awaitqueue@2.3.3

ISC

https://github.com/versatica/awaitqueue

---

axios@0.23.0

MIT

https://github.com/axios/axios

Copyright (c) 2014-present Matt Zabriskie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---

base64-js@1.5.1

MIT

https://github.com/beatgammit/base64-js

The MIT License (MIT)

Copyright (c) 2014 Jameson Little

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---

bowser@2.11.0

MIT

https://github.com/lancedikson/bowser

Copyright 2015, Dustin Diaz (the "Original Author")
All rights reserved.

MIT License

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

Distributions of all or part of the Software intended to be used
by the recipients as they would use the unmodified Software,
containing modifications that substantially alter, remove, or
disable functionality of the Software, outside of the documented
configuration mechanisms provided by the Software, shall be
modified such that the Original Author's bug reporting email
addresses and urls are either replaced with the contact information
of the parties responsible for the changes, or removed entirely.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


Except where noted, this license applies to any and all software
programs and associated documentation files created by the
Original Author, when distributed with the Software.


---

buffer@6.0.3

MIT

https://github.com/feross/buffer

The MIT License (MIT)

Copyright (c) Feross Aboukhadijeh, and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---

debug@4.3.4

MIT

https://github.com/debug-js/debug

(The MIT License)

Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2018-2021 Josh Junon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the 'Software'), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



---

deepmerge@4.2.2

MIT

https://github.com/TehShrike/deepmerge

---

event-target-shim@5.0.1

MIT

https://github.com/mysticatea/event-target-shim

The MIT License (MIT)

Copyright (c) 2015 Toru Nagashima

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



---

events@3.3.0

MIT

https://github.com/Gozala/events

MIT

Copyright Joyent, Inc. and other Node contributors.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.


---

fake-mediastreamtrack@1.1.6

ISC

https://github.com/ibc/fake-mediastreamtrack

---

follow-redirects@1.14.9

MIT

https://github.com/follow-redirects/follow-redirects

Copyright 2014–present Olivier Lalonde <olalonde@gmail.com>, James Talmage <james@talmage.io>, Ruben Verborgh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

h264-profile-level-id@1.0.1

ISC

https://github.com/ibc/h264-profile-level-id

---

ieee754@1.2.1

BSD-3-Clause

https://github.com/feross/ieee754

Copyright 2008 Fair Oaks Labs, Inc.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


---

isomorphic-fetch@3.0.0

MIT

https://github.com/matthew-andrews/isomorphic-fetch

The MIT License (MIT)

Copyright (c) 2015 Matt Andrews

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

isomorphic-ws@4.0.1

MIT

https://github.com/heineiuo/isomorphic-ws

The MIT License (MIT)

Copyright (c) 2018 Zejin Zhuang <heineiuo@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

jwt-decode@3.1.2

MIT

https://github.com/auth0/jwt-decode

The MIT License (MIT)
 
Copyright (c) 2015 Auth0, Inc. <support@auth0.com> (http://auth0.com)
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

jwt-encode@1.0.1

BSD-3-Clause

https://github.com/eugeneware/jwt-encode


The BSD License

Copyright (c) 2020, Eugene Ware

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.



---

mediasoup-client@3.6.51

ISC

https://github.com/versatica/mediasoup-client

ISC License

Copyright © 2015, Iñaki Baz Castillo <ibc@aliax.net>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


---

ms@2.1.2

MIT

https://github.com/zeit/ms

The MIT License (MIT)

Copyright (c) 2020 Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

node-fetch@2.6.7

MIT

https://github.com/bitinn/node-fetch

The MIT License (MIT)

Copyright (c) 2016 David Frank

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



---

sdp-transform@2.14.1

MIT

https://github.com/clux/sdp-transform

(The MIT License)

Copyright (c) 2013 Eirik Albrigtsen

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

supports-color@9.2.2

MIT

https://github.com/chalk/supports-color

MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

tr46@0.0.3

MIT

https://github.com/Sebmaster/tr46.js

The MIT License (MIT)

Copyright (c) Sebastian Mayr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

ts.cryptojs256@1.0.1

Apache-2.0

https://github.com/TheSmiths-Widgets/ts.cryptojs256

---

uuid@8.3.2

MIT

https://github.com/uuidjs/uuid

The MIT License (MIT)

Copyright (c) 2010-2020 Robert Kieffer and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

webidl-conversions@3.0.1

BSD-2-Clause

https://github.com/jsdom/webidl-conversions

# The BSD 2-Clause License

Copyright (c) 2014, Domenic Denicola
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


---

whatwg-fetch@3.6.2

MIT

https://github.com/github/fetch

Copyright (c) 2014-2016 GitHub, Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

whatwg-url@5.0.0

MIT

https://github.com/jsdom/whatwg-url

---

ws@7.5.7

MIT

https://github.com/websockets/ws

The MIT License (MIT)

Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

*/

exports.RoomSubscriptionImpl = RoomSubscriptionImpl;
},{}],"lib/app.js":[function(require,module,exports) {
"use strict";

var _room = require("@skyway-sdk/room");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var buttonArea = document.getElementById("button-area");
var theirMediaArea = document.getElementById("their-media-area");
var roomNameInput = document.getElementById("room-name");
var myId = document.getElementById("my-id");

(function () {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var myVideo, myCapture, _yield$SkyWayMediaDev, audio, video, displayStream, _displayStream$getVid, _displayStream$getVid2, displayTrack, displayVideo, testToken, tokenString;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // 1
            myVideo = document.getElementById("my-video");
            myCapture = document.getElementById("my-capture");
            _context3.next = 4;
            return _room.SkyWayMediaDevices.createMicrophoneAudioAndCameraStream();

          case 4:
            _yield$SkyWayMediaDev = _context3.sent;
            audio = _yield$SkyWayMediaDev.audio;
            video = _yield$SkyWayMediaDev.video;
            _context3.next = 9;
            return navigator.mediaDevices.getDisplayMedia();

          case 9:
            displayStream = _context3.sent;
            _displayStream$getVid = displayStream.getVideoTracks(), _displayStream$getVid2 = _slicedToArray(_displayStream$getVid, 1), displayTrack = _displayStream$getVid2[0];
            displayVideo = new _room.LocalVideoStream("label", displayTrack); //myCapture.srcObject = displayStream;

            displayVideo.attach(myCapture); // 3

            video.attach(myVideo); // 3

            _context3.next = 16;
            return myVideo.play();

          case 16:
            // 4
            testToken = new _room.SkyWayAuthToken({
              jti: (0, _room.uuidV4)(),
              iat: Math.floor(Date.now() / 1000),
              exp: Math.floor(Date.now() / 1000) + 600,
              scope: {
                app: {
                  id: "0919bf13-8251-4c27-bdb0-2f5b8c41ceb2",
                  turn: true,
                  actions: ["read"],
                  channels: [{
                    id: "*",
                    name: "*",
                    actions: ["write"],
                    members: [{
                      id: "*",
                      name: "*",
                      actions: ["write"],
                      publication: {
                        actions: ["write"]
                      },
                      subscription: {
                        actions: ["write"]
                      }
                    }],
                    sfuBots: [{
                      actions: ["write"],
                      forwardings: [{
                        actions: ["write"]
                      }]
                    }]
                  }]
                }
              }
            });
            tokenString = testToken.encode("YZatigbFmhxZgS5PTM08kiK6vkp+4Y0EOvG2F5dDMw4=");

            document.getElementById("join").onclick = function () {
              return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var context, room, me, subscribeAndAttach;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        subscribeAndAttach = function _subscribeAndAttach(publication) {
                          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _yield$me$subscribe, stream, newMedia;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(publication.publisher.id === me.id)) {
                                      _context.next = 2;
                                      break;
                                    }

                                    return _context.abrupt("return");

                                  case 2:
                                    _context.next = 4;
                                    return me.subscribe(publication.id);

                                  case 4:
                                    _yield$me$subscribe = _context.sent;
                                    stream = _yield$me$subscribe.stream;
                                    _context.t0 = stream.track.kind;
                                    _context.next = _context.t0 === "video" ? 9 : _context.t0 === "audio" ? 14 : 18;
                                    break;

                                  case 9:
                                    newMedia = document.createElement("video");
                                    newMedia.playsInline = true;
                                    newMedia.autoplay = true;
                                    stream.attach(newMedia); // 3-2-3

                                    return _context.abrupt("break", 19);

                                  case 14:
                                    newMedia = document.createElement("audio");
                                    newMedia.controls = true;
                                    newMedia.autoplay = true;
                                    return _context.abrupt("break", 19);

                                  case 18:
                                    return _context.abrupt("return");

                                  case 19:
                                    theirMediaArea.appendChild(newMedia);

                                  case 20:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));
                        };

                        if (!(roomNameInput.value === "")) {
                          _context2.next = 3;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 3:
                        _context2.next = 5;
                        return _room.SkyWayContext.Create(tokenString);

                      case 5:
                        context = _context2.sent;
                        _context2.next = 8;
                        return _room.SkyWayRoom.FindOrCreate(context, {
                          type: "p2p",
                          name: roomNameInput.value
                        });

                      case 8:
                        room = _context2.sent;
                        _context2.next = 11;
                        return room.join();

                      case 11:
                        me = _context2.sent;
                        myId.textContent = me.id; //await me.publish(audio);

                        _context2.next = 15;
                        return me.publish(video);

                      case 15:
                        _context2.next = 17;
                        return me.publish(displayVideo);

                      case 17:
                        room.publications.forEach(subscribeAndAttach); // 1

                        room.onStreamPublished.add(function (e) {
                          // 2
                          //subscribeAndAttach(e.publication, me);
                          subscribeAndAttach(e.publication);
                        });

                      case 19:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            };

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
})(); // 1
},{"@skyway-sdk/room":"node_modules/@skyway-sdk/room/dist/index.mjs"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64500" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lib/app.js"], null)
//# sourceMappingURL=/app.6efd2b68.js.map