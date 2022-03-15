var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const isPlainObject = (obj) => {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
};
const generateRandomKey = () => Math.random().toString(36).substring(2, 10);
const ActionTypes = {
  INIT: `@store/INIT${generateRandomKey()}`,
  REPLACE: `@store/REPLACE${generateRandomKey()}`
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var consola_browser = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    function t(t2, e2) {
      if (!(t2 instanceof e2))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(t2, e2) {
      for (var r2 = 0; r2 < e2.length; r2++) {
        var o2 = e2[r2];
        o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, o2.key, o2);
      }
    }
    function r(t2, r2, o2) {
      return r2 && e(t2.prototype, r2), o2 && e(t2, o2), t2;
    }
    function o(t2, e2, r2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
    }
    function n(t2, e2) {
      var r2 = Object.keys(t2);
      if (Object.getOwnPropertySymbols) {
        var o2 = Object.getOwnPropertySymbols(t2);
        e2 && (o2 = o2.filter(function(e3) {
          return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
        })), r2.push.apply(r2, o2);
      }
      return r2;
    }
    function s(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var r2 = arguments[e2] != null ? arguments[e2] : {};
        e2 % 2 ? n(Object(r2), true).forEach(function(e3) {
          o(t2, e3, r2[e3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : n(Object(r2)).forEach(function(e3) {
          Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(r2, e3));
        });
      }
      return t2;
    }
    function i(t2) {
      return function(t3) {
        if (Array.isArray(t3))
          return l(t3);
      }(t2) || function(t3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3))
          return Array.from(t3);
      }(t2) || a(t2) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function a(t2, e2) {
      if (t2) {
        if (typeof t2 == "string")
          return l(t2, e2);
        var r2 = Object.prototype.toString.call(t2).slice(8, -1);
        return r2 === "Object" && t2.constructor && (r2 = t2.constructor.name), r2 === "Map" || r2 === "Set" ? Array.from(t2) : r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? l(t2, e2) : void 0;
      }
    }
    function l(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var r2 = 0, o2 = new Array(e2); r2 < e2; r2++)
        o2[r2] = t2[r2];
      return o2;
    }
    function u(t2) {
      if (typeof Symbol == "undefined" || t2[Symbol.iterator] == null) {
        if (Array.isArray(t2) || (t2 = a(t2))) {
          var e2 = 0, r2 = function() {
          };
          return { s: r2, n: function() {
            return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
          }, e: function(t3) {
            throw t3;
          }, f: r2 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o2, n2, s2 = true, i2 = false;
      return { s: function() {
        o2 = t2[Symbol.iterator]();
      }, n: function() {
        var t3 = o2.next();
        return s2 = t3.done, t3;
      }, e: function(t3) {
        i2 = true, n2 = t3;
      }, f: function() {
        try {
          s2 || o2.return == null || o2.return();
        } finally {
          if (i2)
            throw n2;
        }
      } };
    }
    var c = {};
    c[c.Fatal = 0] = "Fatal", c[c.Error = 0] = "Error", c[c.Warn = 1] = "Warn", c[c.Log = 2] = "Log", c[c.Info = 3] = "Info", c[c.Success = 3] = "Success", c[c.Debug = 4] = "Debug", c[c.Trace = 5] = "Trace", c[c.Silent = -1 / 0] = "Silent", c[c.Verbose = 1 / 0] = "Verbose";
    var f = { silent: { level: -1 }, fatal: { level: c.Fatal }, error: { level: c.Error }, warn: { level: c.Warn }, log: { level: c.Log }, info: { level: c.Info }, success: { level: c.Success }, debug: { level: c.Debug }, trace: { level: c.Trace }, verbose: { level: c.Trace }, ready: { level: c.Info }, start: { level: c.Info } };
    function h(t2) {
      return e2 = t2, Object.prototype.toString.call(e2) === "[object Object]" && (!(!t2.message && !t2.args) && !t2.stack);
      var e2;
    }
    var p = false, y = [], d = function() {
      function e2() {
        var r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        for (var o2 in t(this, e2), this._reporters = r2.reporters || [], this._types = r2.types || f, this.level = r2.level !== void 0 ? r2.level : 3, this._defaults = r2.defaults || {}, this._async = r2.async !== void 0 ? r2.async : void 0, this._stdout = r2.stdout, this._stderr = r2.stderr, this._mockFn = r2.mockFn, this._throttle = r2.throttle || 1e3, this._throttleMin = r2.throttleMin || 5, this._types) {
          var n2 = s(s({ type: o2 }, this._types[o2]), this._defaults);
          this[o2] = this._wrapLogFn(n2), this[o2].raw = this._wrapLogFn(n2, true);
        }
        this._mockFn && this.mockTypes(), this._lastLogSerialized = void 0, this._lastLog = void 0, this._lastLogTime = void 0, this._lastLogCount = 0, this._throttleTimeout = void 0;
      }
      return r(e2, [{ key: "create", value: function(t2) {
        return new e2(Object.assign({ reporters: this._reporters, level: this.level, types: this._types, defaults: this._defaults, stdout: this._stdout, stderr: this._stderr, mockFn: this._mockFn }, t2));
      } }, { key: "withDefaults", value: function(t2) {
        return this.create({ defaults: Object.assign({}, this._defaults, t2) });
      } }, { key: "withTag", value: function(t2) {
        return this.withDefaults({ tag: this._defaults.tag ? this._defaults.tag + ":" + t2 : t2 });
      } }, { key: "addReporter", value: function(t2) {
        return this._reporters.push(t2), this;
      } }, { key: "removeReporter", value: function(t2) {
        if (t2) {
          var e3 = this._reporters.indexOf(t2);
          if (e3 >= 0)
            return this._reporters.splice(e3, 1);
        } else
          this._reporters.splice(0);
        return this;
      } }, { key: "setReporters", value: function(t2) {
        return this._reporters = Array.isArray(t2) ? t2 : [t2], this;
      } }, { key: "wrapAll", value: function() {
        this.wrapConsole(), this.wrapStd();
      } }, { key: "restoreAll", value: function() {
        this.restoreConsole(), this.restoreStd();
      } }, { key: "wrapConsole", value: function() {
        for (var t2 in this._types)
          console["__" + t2] || (console["__" + t2] = console[t2]), console[t2] = this[t2].raw;
      } }, { key: "restoreConsole", value: function() {
        for (var t2 in this._types)
          console["__" + t2] && (console[t2] = console["__" + t2], delete console["__" + t2]);
      } }, { key: "wrapStd", value: function() {
        this._wrapStream(this.stdout, "log"), this._wrapStream(this.stderr, "log");
      } }, { key: "_wrapStream", value: function(t2, e3) {
        var r2 = this;
        t2 && (t2.__write || (t2.__write = t2.write), t2.write = function(t3) {
          r2[e3].raw(String(t3).trim());
        });
      } }, { key: "restoreStd", value: function() {
        this._restoreStream(this.stdout), this._restoreStream(this.stderr);
      } }, { key: "_restoreStream", value: function(t2) {
        t2 && t2.__write && (t2.write = t2.__write, delete t2.__write);
      } }, { key: "pauseLogs", value: function() {
        p = true;
      } }, { key: "resumeLogs", value: function() {
        p = false;
        var t2, e3 = u(y.splice(0));
        try {
          for (e3.s(); !(t2 = e3.n()).done; ) {
            var r2 = t2.value;
            r2[0]._logFn(r2[1], r2[2]);
          }
        } catch (t3) {
          e3.e(t3);
        } finally {
          e3.f();
        }
      } }, { key: "mockTypes", value: function(t2) {
        if (this._mockFn = t2 || this._mockFn, typeof this._mockFn == "function")
          for (var e3 in this._types)
            this[e3] = this._mockFn(e3, this._types[e3]) || this[e3], this[e3].raw = this[e3];
      } }, { key: "_wrapLogFn", value: function(t2, e3) {
        var r2 = this;
        return function() {
          for (var o2 = arguments.length, n2 = new Array(o2), s2 = 0; s2 < o2; s2++)
            n2[s2] = arguments[s2];
          if (!p)
            return r2._logFn(t2, n2, e3);
          y.push([r2, t2, n2, e3]);
        };
      } }, { key: "_logFn", value: function(t2, e3, r2) {
        var o2 = this;
        if (t2.level > this.level)
          return !!this._async && Promise.resolve(false);
        var n2 = Object.assign({ date: new Date(), args: [] }, t2);
        !r2 && e3.length === 1 && h(e3[0]) ? Object.assign(n2, e3[0]) : n2.args = Array.from(e3), n2.message && (n2.args.unshift(n2.message), delete n2.message), n2.additional && (Array.isArray(n2.additional) || (n2.additional = n2.additional.split("\n")), n2.args.push("\n" + n2.additional.join("\n")), delete n2.additional), n2.type = typeof n2.type == "string" ? n2.type.toLowerCase() : "", n2.tag = typeof n2.tag == "string" ? n2.tag.toLowerCase() : "";
        var a2 = function() {
          var t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e4 = o2._lastLogCount - o2._throttleMin;
          if (o2._lastLog && e4 > 0) {
            var r3 = i(o2._lastLog.args);
            e4 > 1 && r3.push("(repeated ".concat(e4, " times)")), o2._log(s(s({}, o2._lastLog), {}, { args: r3 })), o2._lastLogCount = 1;
          }
          if (t3) {
            if (o2._lastLog = n2, o2._async)
              return o2._logAsync(n2);
            o2._log(n2);
          }
        };
        clearTimeout(this._throttleTimeout);
        var l2 = this._lastLogTime ? n2.date - this._lastLogTime : 0;
        if (this._lastLogTime = n2.date, l2 < this._throttle)
          try {
            var u2 = JSON.stringify([n2.type, n2.tag, n2.args]), c2 = this._lastLogSerialized === u2;
            if (this._lastLogSerialized = u2, c2 && (this._lastLogCount++, this._lastLogCount > this._throttleMin))
              return void (this._throttleTimeout = setTimeout(a2, this._throttle));
          } catch (t3) {
          }
        a2(true);
      } }, { key: "_log", value: function(t2) {
        var e3, r2 = u(this._reporters);
        try {
          for (r2.s(); !(e3 = r2.n()).done; ) {
            e3.value.log(t2, { async: false, stdout: this.stdout, stderr: this.stderr });
          }
        } catch (t3) {
          r2.e(t3);
        } finally {
          r2.f();
        }
      } }, { key: "_logAsync", value: function(t2) {
        var e3 = this;
        return Promise.all(this._reporters.map(function(r2) {
          return r2.log(t2, { async: true, stdout: e3.stdout, stderr: e3.stderr });
        }));
      } }, { key: "stdout", get: function() {
        return this._stdout || console._stdout;
      } }, { key: "stderr", get: function() {
        return this._stderr || console._stderr;
      } }]), e2;
    }();
    d.prototype.add = d.prototype.addReporter, d.prototype.remove = d.prototype.removeReporter, d.prototype.clear = d.prototype.removeReporter, d.prototype.withScope = d.prototype.withTag, d.prototype.mock = d.prototype.mockTypes, d.prototype.pause = d.prototype.pauseLogs, d.prototype.resume = d.prototype.resumeLogs;
    var v, g = function() {
      function e2(r2) {
        t(this, e2), this.options = Object.assign({}, r2), this.defaultColor = "#7f8c8d", this.levelColorMap = { 0: "#c0392b", 1: "#f39c12", 3: "#00BCD4" }, this.typeColorMap = { success: "#2ecc71" };
      }
      return r(e2, [{ key: "log", value: function(t2) {
        var e3 = t2.level < 1 ? console.__error || console.error : t2.level === 1 && console.warn ? console.__warn || console.warn : console.__log || console.log, r2 = t2.type !== "log" ? t2.type : "", o2 = t2.tag ? t2.tag : "", n2 = this.typeColorMap[t2.type] || this.levelColorMap[t2.level] || this.defaultColor, s2 = "\n      background: ".concat(n2, ";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    "), a2 = "%c".concat([o2, r2].filter(Boolean).join(":"));
        typeof t2.args[0] == "string" ? e3.apply(void 0, ["".concat(a2, "%c ").concat(t2.args[0]), s2, ""].concat(i(t2.args.slice(1)))) : e3.apply(void 0, [a2, s2].concat(i(t2.args)));
      } }]), e2;
    }();
    return typeof window != "undefined" && window.consola || ((v = new d({ reporters: [new g()] })).Consola = d, v.LogLevel = c, v.BrowserReporter = g, v);
  });
})(consola_browser);
var consola = consola_browser.exports;
const error = (message) => consola.error(new Error(message));
const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer === "function")
    enhancer(createStore)(reducer, preloadedState);
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];
  let nextListeners = currentListeners;
  let isDispatching = false;
  const ensureCanMutateNextListeners = () => {
    if (nextListeners === currentListeners)
      nextListeners = [...currentListeners];
  };
  const getState = () => {
    if (isDispatching)
      error("The reducer has already received the state as an argument.");
    return currentState;
  };
  const subscribe = (listener) => {
    if (typeof listener !== "function")
      error("`listener` must be a function");
    if (isDispatching)
      error(`call subscribe while dispatching, see caveat-1`);
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return () => {
      if (!isSubscribed)
        return;
      if (isDispatching)
        error(`call unsubscribe while dispatching, see caveat-1`);
      isSubscribed = false;
      ensureCanMutateNextListeners();
      const index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  };
  const dispatch = (action) => {
    if (!isPlainObject(action))
      error("Action must be a plain object.");
    if (typeof action.type === "undefined")
      error("Action must have a not nil type.");
    if (isDispatching)
      error("Can not dispatch action in the reducer.");
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((fn) => fn && fn());
    return action;
  };
  const replaceReducer = (nextReducer) => {
    if (typeof nextReducer !== "function")
      error("`nextReducer` must be a function");
    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  };
  dispatch({ type: ActionTypes.INIT });
  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  };
};
var compose = (...funcs) => {
  if (funcs.length === 0)
    return (arg) => arg;
  if (funcs.length === 1)
    return funcs[0];
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};
var applyMiddleware = (...middlewares) => {
  return (createStore2) => (...args) => {
    const store = createStore2(...args);
    const middlewareAPI = {
      getState: store.getState
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    const dispatch = compose(...chain)(store.dispatch);
    return __spreadProps(__spreadValues({}, store), {
      dispatch
    });
  };
};
export { applyMiddleware, compose, createStore };
