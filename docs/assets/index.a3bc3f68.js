function I0(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function N0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var A = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ds = Symbol.for("react.element"),
  _0 = Symbol.for("react.portal"),
  x0 = Symbol.for("react.fragment"),
  D0 = Symbol.for("react.strict_mode"),
  R0 = Symbol.for("react.profiler"),
  A0 = Symbol.for("react.provider"),
  P0 = Symbol.for("react.context"),
  $0 = Symbol.for("react.forward_ref"),
  L0 = Symbol.for("react.suspense"),
  O0 = Symbol.for("react.memo"),
  M0 = Symbol.for("react.lazy"),
  vd = Symbol.iterator;
function F0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (vd && t[vd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Op = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mp = Object.assign,
  Fp = {};
function jr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Fp),
    (this.updater = n || Op);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
jr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Up() {}
Up.prototype = jr.prototype;
function Tc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Fp),
    (this.updater = n || Op);
}
var Ic = (Tc.prototype = new Up());
Ic.constructor = Tc;
Mp(Ic, jr.prototype);
Ic.isPureReactComponent = !0;
var wd = Array.isArray,
  Vp = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zp(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Vp.call(e, r) && !Bp.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ds,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Nc.current,
  };
}
function U0(t, e) {
  return {
    $$typeof: ds,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function _c(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ds;
}
function V0(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Ed = /\/+/g;
function ll(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? V0("" + t.key)
    : e.toString(36);
}
function so(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ds:
          case _0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + ll(o, 0) : r),
      wd(i)
        ? ((n = ""),
          t != null && (n = t.replace(Ed, "$&/") + "/"),
          so(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (_c(i) &&
            (i = U0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ed, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), wd(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + ll(s, a);
      o += so(s, e, n, l, i);
    }
  else if (((l = F0(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + ll(s, a++)), (o += so(s, e, n, l, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ms(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    so(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function B0(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ke = { current: null },
  oo = { transition: null },
  z0 = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: oo,
    ReactCurrentOwner: Nc,
  };
H.Children = {
  map: Ms,
  forEach: function (t, e, n) {
    Ms(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Ms(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ms(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!_c(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
H.Component = jr;
H.Fragment = x0;
H.Profiler = R0;
H.PureComponent = Tc;
H.StrictMode = D0;
H.Suspense = L0;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z0;
H.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = Mp({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Nc.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Vp.call(e, l) &&
        !Bp.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ds, type: t.type, key: i, ref: s, props: r, _owner: o };
};
H.createContext = function (t) {
  return (
    (t = {
      $$typeof: P0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: A0, _context: t }),
    (t.Consumer = t)
  );
};
H.createElement = zp;
H.createFactory = function (t) {
  var e = zp.bind(null, t);
  return (e.type = t), e;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (t) {
  return { $$typeof: $0, render: t };
};
H.isValidElement = _c;
H.lazy = function (t) {
  return { $$typeof: M0, _payload: { _status: -1, _result: t }, _init: B0 };
};
H.memo = function (t, e) {
  return { $$typeof: O0, type: t, compare: e === void 0 ? null : e };
};
H.startTransition = function (t) {
  var e = oo.transition;
  oo.transition = {};
  try {
    t();
  } finally {
    oo.transition = e;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (t, e) {
  return Ke.current.useCallback(t, e);
};
H.useContext = function (t) {
  return Ke.current.useContext(t);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (t) {
  return Ke.current.useDeferredValue(t);
};
H.useEffect = function (t, e) {
  return Ke.current.useEffect(t, e);
};
H.useId = function () {
  return Ke.current.useId();
};
H.useImperativeHandle = function (t, e, n) {
  return Ke.current.useImperativeHandle(t, e, n);
};
H.useInsertionEffect = function (t, e) {
  return Ke.current.useInsertionEffect(t, e);
};
H.useLayoutEffect = function (t, e) {
  return Ke.current.useLayoutEffect(t, e);
};
H.useMemo = function (t, e) {
  return Ke.current.useMemo(t, e);
};
H.useReducer = function (t, e, n) {
  return Ke.current.useReducer(t, e, n);
};
H.useRef = function (t) {
  return Ke.current.useRef(t);
};
H.useState = function (t) {
  return Ke.current.useState(t);
};
H.useSyncExternalStore = function (t, e, n) {
  return Ke.current.useSyncExternalStore(t, e, n);
};
H.useTransition = function () {
  return Ke.current.useTransition();
};
H.version = "18.2.0";
(function (t) {
  t.exports = H;
})(A);
const jp = N0(A.exports),
  Xl = I0({ __proto__: null, default: jp }, [A.exports]);
var Yl = {},
  bp = { exports: {} },
  ot = {},
  Hp = { exports: {} },
  Kp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(_, B) {
    var z = _.length;
    _.push(B);
    e: for (; 0 < z; ) {
      var ce = (z - 1) >>> 1,
        Ee = _[ce];
      if (0 < i(Ee, B)) (_[ce] = B), (_[z] = Ee), (z = ce);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var B = _[0],
      z = _.pop();
    if (z !== B) {
      _[0] = z;
      e: for (var ce = 0, Ee = _.length, Ls = Ee >>> 1; ce < Ls; ) {
        var Dn = 2 * (ce + 1) - 1,
          al = _[Dn],
          Rn = Dn + 1,
          Os = _[Rn];
        if (0 > i(al, z))
          Rn < Ee && 0 > i(Os, al)
            ? ((_[ce] = Os), (_[Rn] = z), (ce = Rn))
            : ((_[ce] = al), (_[Dn] = z), (ce = Dn));
        else if (Rn < Ee && 0 > i(Os, z)) (_[ce] = Os), (_[Rn] = z), (ce = Rn);
        else break e;
      }
    }
    return B;
  }
  function i(_, B) {
    var z = _.sortIndex - B.sortIndex;
    return z !== 0 ? z : _.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(_) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= _)
        r(u), (B.sortIndex = B.expirationTime), e(l, B);
      else break;
      B = n(u);
    }
  }
  function E(_) {
    if (((v = !1), g(_), !y))
      if (n(l) !== null) (y = !0), sl(I);
      else {
        var B = n(u);
        B !== null && ol(E, B.startTime - _);
      }
  }
  function I(_, B) {
    (y = !1), v && ((v = !1), p($), ($ = -1)), (m = !0);
    var z = d;
    try {
      for (
        g(B), h = n(l);
        h !== null && (!(h.expirationTime > B) || (_ && !mt()));

      ) {
        var ce = h.callback;
        if (typeof ce == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var Ee = ce(h.expirationTime <= B);
          (B = t.unstable_now()),
            typeof Ee == "function" ? (h.callback = Ee) : h === n(l) && r(l),
            g(B);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var Ls = !0;
      else {
        var Dn = n(u);
        Dn !== null && ol(E, Dn.startTime - B), (Ls = !1);
      }
      return Ls;
    } finally {
      (h = null), (d = z), (m = !1);
    }
  }
  var R = !1,
    x = null,
    $ = -1,
    ue = 5,
    K = -1;
  function mt() {
    return !(t.unstable_now() - K < ue);
  }
  function ei() {
    if (x !== null) {
      var _ = t.unstable_now();
      K = _;
      var B = !0;
      try {
        B = x(!0, _);
      } finally {
        B ? ti() : ((R = !1), (x = null));
      }
    } else R = !1;
  }
  var ti;
  if (typeof f == "function")
    ti = function () {
      f(ei);
    };
  else if (typeof MessageChannel < "u") {
    var yd = new MessageChannel(),
      T0 = yd.port2;
    (yd.port1.onmessage = ei),
      (ti = function () {
        T0.postMessage(null);
      });
  } else
    ti = function () {
      T(ei, 0);
    };
  function sl(_) {
    (x = _), R || ((R = !0), ti());
  }
  function ol(_, B) {
    $ = T(function () {
      _(t.unstable_now());
    }, B);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      y || m || ((y = !0), sl(I));
    }),
    (t.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (ue = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (_) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var z = d;
      d = B;
      try {
        return _();
      } finally {
        d = z;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (_, B) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = d;
      d = _;
      try {
        return B();
      } finally {
        d = z;
      }
    }),
    (t.unstable_scheduleCallback = function (_, B, z) {
      var ce = t.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? ce + z : ce))
          : (z = ce),
        _)
      ) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return (
        (Ee = z + Ee),
        (_ = {
          id: c++,
          callback: B,
          priorityLevel: _,
          startTime: z,
          expirationTime: Ee,
          sortIndex: -1,
        }),
        z > ce
          ? ((_.sortIndex = z),
            e(u, _),
            n(l) === null &&
              _ === n(u) &&
              (v ? (p($), ($ = -1)) : (v = !0), ol(E, z - ce)))
          : ((_.sortIndex = Ee), e(l, _), y || m || ((y = !0), sl(I))),
        _
      );
    }),
    (t.unstable_shouldYield = mt),
    (t.unstable_wrapCallback = function (_) {
      var B = d;
      return function () {
        var z = d;
        d = B;
        try {
          return _.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})(Kp);
(function (t) {
  t.exports = Kp;
})(Hp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wp = A.exports,
  it = Hp.exports;
function k(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qp = new Set(),
  $i = {};
function Jn(t, e) {
  xr(t, e), xr(t + "Capture", e);
}
function xr(t, e) {
  for ($i[t] = e, t = 0; t < e.length; t++) Qp.add(e[t]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Jl = Object.prototype.hasOwnProperty,
  j0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sd = {},
  kd = {};
function b0(t) {
  return Jl.call(kd, t)
    ? !0
    : Jl.call(Sd, t)
    ? !1
    : j0.test(t)
    ? (kd[t] = !0)
    : ((Sd[t] = !0), !1);
}
function H0(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function K0(t, e, n, r) {
  if (e === null || typeof e > "u" || H0(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function We(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Ae[t] = new We(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Ae[e] = new We(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Ae[t] = new We(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Ae[t] = new We(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Ae[t] = new We(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Ae[t] = new We(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Ae[t] = new We(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Ae[t] = new We(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Ae[t] = new We(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var xc = /[\-:]([a-z])/g;
function Dc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(xc, Dc);
    Ae[e] = new We(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(xc, Dc);
    Ae[e] = new We(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(xc, Dc);
  Ae[e] = new We(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Ae[t] = new We(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Ae[t] = new We(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Rc(t, e, n, r) {
  var i = Ae.hasOwnProperty(e) ? Ae[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (K0(e, n, i, r) && (n = null),
    r || i === null
      ? b0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Qt = Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fs = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  Ac = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  qp = Symbol.for("react.provider"),
  Gp = Symbol.for("react.context"),
  Pc = Symbol.for("react.forward_ref"),
  eu = Symbol.for("react.suspense"),
  tu = Symbol.for("react.suspense_list"),
  $c = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  Xp = Symbol.for("react.offscreen"),
  Cd = Symbol.iterator;
function ni(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Cd && t[Cd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var oe = Object.assign,
  ul;
function hi(t) {
  if (ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ul = (e && e[1]) || "";
    }
  return (
    `
` +
    ul +
    t
  );
}
var cl = !1;
function hl(t, e) {
  if (!t || cl) return "";
  cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (cl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? hi(t) : "";
}
function W0(t) {
  switch (t.tag) {
    case 5:
      return hi(t.type);
    case 16:
      return hi("Lazy");
    case 13:
      return hi("Suspense");
    case 19:
      return hi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = hl(t.type, !1)), t;
    case 11:
      return (t = hl(t.type.render, !1)), t;
    case 1:
      return (t = hl(t.type, !0)), t;
    default:
      return "";
  }
}
function nu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case or:
      return "Fragment";
    case sr:
      return "Portal";
    case Zl:
      return "Profiler";
    case Ac:
      return "StrictMode";
    case eu:
      return "Suspense";
    case tu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Gp:
        return (t.displayName || "Context") + ".Consumer";
      case qp:
        return (t._context.displayName || "Context") + ".Provider";
      case Pc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case $c:
        return (
          (e = t.displayName || null), e !== null ? e : nu(t.type) || "Memo"
        );
      case Xt:
        (e = t._payload), (t = t._init);
        try {
          return nu(t(e));
        } catch {}
    }
  return null;
}
function Q0(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return nu(e);
    case 8:
      return e === Ac ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function gn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Yp(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function q0(t) {
  var e = Yp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Us(t) {
  t._valueTracker || (t._valueTracker = q0(t));
}
function Jp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Yp(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function ko(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function ru(t, e) {
  var n = e.checked;
  return oe({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : t._wrapperState.initialChecked,
  });
}
function Td(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = gn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Zp(t, e) {
  (e = e.checked), e != null && Rc(t, "checked", e, !1);
}
function iu(t, e) {
  Zp(t, e);
  var n = gn(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? su(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && su(t, e.type, gn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Id(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function su(t, e, n) {
  (e !== "number" || ko(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var di = Array.isArray;
function wr(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function ou(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return oe({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Nd(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(k(92));
      if (di(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: gn(n) };
}
function em(t, e) {
  var n = gn(e.value),
    r = gn(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function _d(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function tm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function au(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? tm(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Vs,
  nm = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Vs = Vs || document.createElement("div"),
          Vs.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Vs.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Li(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var wi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  G0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(wi).forEach(function (t) {
  G0.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (wi[e] = wi[t]);
  });
});
function rm(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (wi.hasOwnProperty(t) && wi[t])
    ? ("" + e).trim()
    : e + "px";
}
function im(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = rm(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var X0 = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function lu(t, e) {
  if (e) {
    if (X0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(k(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function uu(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cu = null;
function Lc(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var hu = null,
  Er = null,
  Sr = null;
function xd(t) {
  if ((t = ms(t))) {
    if (typeof hu != "function") throw Error(k(280));
    var e = t.stateNode;
    e && ((e = ma(e)), hu(t.stateNode, t.type, e));
  }
}
function sm(t) {
  Er ? (Sr ? Sr.push(t) : (Sr = [t])) : (Er = t);
}
function om() {
  if (Er) {
    var t = Er,
      e = Sr;
    if (((Sr = Er = null), xd(t), e)) for (t = 0; t < e.length; t++) xd(e[t]);
  }
}
function am(t, e) {
  return t(e);
}
function lm() {}
var dl = !1;
function um(t, e, n) {
  if (dl) return t(e, n);
  dl = !0;
  try {
    return am(t, e, n);
  } finally {
    (dl = !1), (Er !== null || Sr !== null) && (lm(), om());
  }
}
function Oi(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = ma(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(k(231, e, typeof n));
  return n;
}
var du = !1;
if (Vt)
  try {
    var ri = {};
    Object.defineProperty(ri, "passive", {
      get: function () {
        du = !0;
      },
    }),
      window.addEventListener("test", ri, ri),
      window.removeEventListener("test", ri, ri);
  } catch {
    du = !1;
  }
function Y0(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ei = !1,
  Co = null,
  To = !1,
  fu = null,
  J0 = {
    onError: function (t) {
      (Ei = !0), (Co = t);
    },
  };
function Z0(t, e, n, r, i, s, o, a, l) {
  (Ei = !1), (Co = null), Y0.apply(J0, arguments);
}
function e1(t, e, n, r, i, s, o, a, l) {
  if ((Z0.apply(this, arguments), Ei)) {
    if (Ei) {
      var u = Co;
      (Ei = !1), (Co = null);
    } else throw Error(k(198));
    To || ((To = !0), (fu = u));
  }
}
function Zn(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function cm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Dd(t) {
  if (Zn(t) !== t) throw Error(k(188));
}
function t1(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Zn(t)), e === null)) throw Error(k(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Dd(i), t;
        if (s === r) return Dd(i), e;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? t : e;
}
function hm(t) {
  return (t = t1(t)), t !== null ? dm(t) : null;
}
function dm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = dm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var fm = it.unstable_scheduleCallback,
  Rd = it.unstable_cancelCallback,
  n1 = it.unstable_shouldYield,
  r1 = it.unstable_requestPaint,
  he = it.unstable_now,
  i1 = it.unstable_getCurrentPriorityLevel,
  Oc = it.unstable_ImmediatePriority,
  pm = it.unstable_UserBlockingPriority,
  Io = it.unstable_NormalPriority,
  s1 = it.unstable_LowPriority,
  mm = it.unstable_IdlePriority,
  ha = null,
  _t = null;
function o1(t) {
  if (_t && typeof _t.onCommitFiberRoot == "function")
    try {
      _t.onCommitFiberRoot(ha, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : u1,
  a1 = Math.log,
  l1 = Math.LN2;
function u1(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((a1(t) / l1) | 0)) | 0;
}
var Bs = 64,
  zs = 4194304;
function fi(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function No(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = fi(a)) : ((s &= o), s !== 0 && (r = fi(s)));
  } else (o = n & ~i), o !== 0 ? (r = fi(o)) : s !== 0 && (r = fi(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    (e & i) === 0 &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if (((r & 4) !== 0 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Et(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function c1(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function h1(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Et(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? ((a & n) === 0 || (a & r) !== 0) && (i[o] = c1(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function pu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function gm() {
  var t = Bs;
  return (Bs <<= 1), (Bs & 4194240) === 0 && (Bs = 64), t;
}
function fl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function fs(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Et(e)),
    (t[e] = n);
}
function d1(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Et(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Mc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Et(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var X = 0;
function ym(t) {
  return (
    (t &= -t),
    1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var vm,
  Fc,
  wm,
  Em,
  Sm,
  mu = !1,
  js = [],
  rn = null,
  sn = null,
  on = null,
  Mi = new Map(),
  Fi = new Map(),
  Jt = [],
  f1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ad(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Mi.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fi.delete(e.pointerId);
  }
}
function ii(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = ms(e)), e !== null && Fc(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function p1(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (rn = ii(rn, t, e, n, r, i)), !0;
    case "dragenter":
      return (sn = ii(sn, t, e, n, r, i)), !0;
    case "mouseover":
      return (on = ii(on, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Mi.set(s, ii(Mi.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Fi.set(s, ii(Fi.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function km(t) {
  var e = Ln(t.target);
  if (e !== null) {
    var n = Zn(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = cm(n)), e !== null)) {
          (t.blockedOn = e),
            Sm(t.priority, function () {
              wm(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ao(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = gu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (cu = r), n.target.dispatchEvent(r), (cu = null);
    } else return (e = ms(n)), e !== null && Fc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Pd(t, e, n) {
  ao(t) && n.delete(e);
}
function m1() {
  (mu = !1),
    rn !== null && ao(rn) && (rn = null),
    sn !== null && ao(sn) && (sn = null),
    on !== null && ao(on) && (on = null),
    Mi.forEach(Pd),
    Fi.forEach(Pd);
}
function si(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    mu ||
      ((mu = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, m1)));
}
function Ui(t) {
  function e(i) {
    return si(i, t);
  }
  if (0 < js.length) {
    si(js[0], t);
    for (var n = 1; n < js.length; n++) {
      var r = js[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && si(rn, t),
      sn !== null && si(sn, t),
      on !== null && si(on, t),
      Mi.forEach(e),
      Fi.forEach(e),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    km(n), n.blockedOn === null && Jt.shift();
}
var kr = Qt.ReactCurrentBatchConfig,
  _o = !0;
function g1(t, e, n, r) {
  var i = X,
    s = kr.transition;
  kr.transition = null;
  try {
    (X = 1), Uc(t, e, n, r);
  } finally {
    (X = i), (kr.transition = s);
  }
}
function y1(t, e, n, r) {
  var i = X,
    s = kr.transition;
  kr.transition = null;
  try {
    (X = 4), Uc(t, e, n, r);
  } finally {
    (X = i), (kr.transition = s);
  }
}
function Uc(t, e, n, r) {
  if (_o) {
    var i = gu(t, e, n, r);
    if (i === null) Cl(t, e, r, xo, n), Ad(t, r);
    else if (p1(i, t, e, n, r)) r.stopPropagation();
    else if ((Ad(t, r), e & 4 && -1 < f1.indexOf(t))) {
      for (; i !== null; ) {
        var s = ms(i);
        if (
          (s !== null && vm(s),
          (s = gu(t, e, n, r)),
          s === null && Cl(t, e, r, xo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Cl(t, e, r, null, n);
  }
}
var xo = null;
function gu(t, e, n, r) {
  if (((xo = null), (t = Lc(r)), (t = Ln(t)), t !== null))
    if (((e = Zn(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = cm(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (xo = t), null;
}
function Cm(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (i1()) {
        case Oc:
          return 1;
        case pm:
          return 4;
        case Io:
        case s1:
          return 16;
        case mm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  Vc = null,
  lo = null;
function Tm() {
  if (lo) return lo;
  var t,
    e = Vc,
    n = e.length,
    r,
    i = "value" in en ? en.value : en.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (lo = i.slice(t, 1 < r ? 1 - r : void 0));
}
function uo(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function bs() {
  return !0;
}
function $d() {
  return !1;
}
function at(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? bs
        : $d),
      (this.isPropagationStopped = $d),
      this
    );
  }
  return (
    oe(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bs));
      },
      persist: function () {},
      isPersistent: bs,
    }),
    e
  );
}
var br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bc = at(br),
  ps = oe({}, br, { view: 0, detail: 0 }),
  v1 = at(ps),
  pl,
  ml,
  oi,
  da = oe({}, ps, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== oi &&
            (oi && t.type === "mousemove"
              ? ((pl = t.screenX - oi.screenX), (ml = t.screenY - oi.screenY))
              : (ml = pl = 0),
            (oi = t)),
          pl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : ml;
    },
  }),
  Ld = at(da),
  w1 = oe({}, da, { dataTransfer: 0 }),
  E1 = at(w1),
  S1 = oe({}, ps, { relatedTarget: 0 }),
  gl = at(S1),
  k1 = oe({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C1 = at(k1),
  T1 = oe({}, br, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  I1 = at(T1),
  N1 = oe({}, br, { data: 0 }),
  Od = at(N1),
  _1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  x1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  D1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function R1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = D1[t]) ? !!e[t] : !1;
}
function zc() {
  return R1;
}
var A1 = oe({}, ps, {
    key: function (t) {
      if (t.key) {
        var e = _1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = uo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? x1[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zc,
    charCode: function (t) {
      return t.type === "keypress" ? uo(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? uo(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  P1 = at(A1),
  $1 = oe({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Md = at($1),
  L1 = oe({}, ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc,
  }),
  O1 = at(L1),
  M1 = oe({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F1 = at(M1),
  U1 = oe({}, da, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V1 = at(U1),
  B1 = [9, 13, 27, 32],
  jc = Vt && "CompositionEvent" in window,
  Si = null;
Vt && "documentMode" in document && (Si = document.documentMode);
var z1 = Vt && "TextEvent" in window && !Si,
  Im = Vt && (!jc || (Si && 8 < Si && 11 >= Si)),
  Fd = String.fromCharCode(32),
  Ud = !1;
function Nm(t, e) {
  switch (t) {
    case "keyup":
      return B1.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _m(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var ar = !1;
function j1(t, e) {
  switch (t) {
    case "compositionend":
      return _m(e);
    case "keypress":
      return e.which !== 32 ? null : ((Ud = !0), Fd);
    case "textInput":
      return (t = e.data), t === Fd && Ud ? null : t;
    default:
      return null;
  }
}
function b1(t, e) {
  if (ar)
    return t === "compositionend" || (!jc && Nm(t, e))
      ? ((t = Tm()), (lo = Vc = en = null), (ar = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Im && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var H1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!H1[t.type] : e === "textarea";
}
function xm(t, e, n, r) {
  sm(r),
    (e = Do(e, "onChange")),
    0 < e.length &&
      ((n = new Bc("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var ki = null,
  Vi = null;
function K1(t) {
  Vm(t, 0);
}
function fa(t) {
  var e = cr(t);
  if (Jp(e)) return t;
}
function W1(t, e) {
  if (t === "change") return e;
}
var Dm = !1;
if (Vt) {
  var yl;
  if (Vt) {
    var vl = "oninput" in document;
    if (!vl) {
      var Bd = document.createElement("div");
      Bd.setAttribute("oninput", "return;"),
        (vl = typeof Bd.oninput == "function");
    }
    yl = vl;
  } else yl = !1;
  Dm = yl && (!document.documentMode || 9 < document.documentMode);
}
function zd() {
  ki && (ki.detachEvent("onpropertychange", Rm), (Vi = ki = null));
}
function Rm(t) {
  if (t.propertyName === "value" && fa(Vi)) {
    var e = [];
    xm(e, Vi, t, Lc(t)), um(K1, e);
  }
}
function Q1(t, e, n) {
  t === "focusin"
    ? (zd(), (ki = e), (Vi = n), ki.attachEvent("onpropertychange", Rm))
    : t === "focusout" && zd();
}
function q1(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return fa(Vi);
}
function G1(t, e) {
  if (t === "click") return fa(e);
}
function X1(t, e) {
  if (t === "input" || t === "change") return fa(e);
}
function Y1(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var kt = typeof Object.is == "function" ? Object.is : Y1;
function Bi(t, e) {
  if (kt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Jl.call(e, i) || !kt(t[i], e[i])) return !1;
  }
  return !0;
}
function jd(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function bd(t, e) {
  var n = jd(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jd(n);
  }
}
function Am(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Am(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Pm() {
  for (var t = window, e = ko(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = ko(t.document);
  }
  return e;
}
function bc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function J1(t) {
  var e = Pm(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Am(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bc(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = bd(n, s));
        var o = bd(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Z1 = Vt && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  yu = null,
  Ci = null,
  vu = !1;
function Hd(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vu ||
    lr == null ||
    lr !== ko(r) ||
    ((r = lr),
    "selectionStart" in r && bc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ci && Bi(Ci, r)) ||
      ((Ci = r),
      (r = Do(yu, "onSelect")),
      0 < r.length &&
        ((e = new Bc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = lr))));
}
function Hs(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var ur = {
    animationend: Hs("Animation", "AnimationEnd"),
    animationiteration: Hs("Animation", "AnimationIteration"),
    animationstart: Hs("Animation", "AnimationStart"),
    transitionend: Hs("Transition", "TransitionEnd"),
  },
  wl = {},
  $m = {};
Vt &&
  (($m = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ur.animationend.animation,
    delete ur.animationiteration.animation,
    delete ur.animationstart.animation),
  "TransitionEvent" in window || delete ur.transitionend.transition);
function pa(t) {
  if (wl[t]) return wl[t];
  if (!ur[t]) return t;
  var e = ur[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in $m) return (wl[t] = e[n]);
  return t;
}
var Lm = pa("animationend"),
  Om = pa("animationiteration"),
  Mm = pa("animationstart"),
  Fm = pa("transitionend"),
  Um = new Map(),
  Kd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Cn(t, e) {
  Um.set(t, e), Jn(e, [t]);
}
for (var El = 0; El < Kd.length; El++) {
  var Sl = Kd[El],
    ew = Sl.toLowerCase(),
    tw = Sl[0].toUpperCase() + Sl.slice(1);
  Cn(ew, "on" + tw);
}
Cn(Lm, "onAnimationEnd");
Cn(Om, "onAnimationIteration");
Cn(Mm, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(Fm, "onTransitionEnd");
xr("onMouseEnter", ["mouseout", "mouseover"]);
xr("onMouseLeave", ["mouseout", "mouseover"]);
xr("onPointerEnter", ["pointerout", "pointerover"]);
xr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nw = new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));
function Wd(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), e1(r, e, void 0, t), (t.currentTarget = null);
}
function Vm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Wd(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Wd(i, a, u), (s = l);
        }
    }
  }
  if (To) throw ((t = fu), (To = !1), (fu = null), t);
}
function Z(t, e) {
  var n = e[Cu];
  n === void 0 && (n = e[Cu] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Bm(e, t, 2, !1), n.add(r));
}
function kl(t, e, n) {
  var r = 0;
  e && (r |= 4), Bm(n, t, r, e);
}
var Ks = "_reactListening" + Math.random().toString(36).slice(2);
function zi(t) {
  if (!t[Ks]) {
    (t[Ks] = !0),
      Qp.forEach(function (n) {
        n !== "selectionchange" && (nw.has(n) || kl(n, !1, t), kl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ks] || ((e[Ks] = !0), kl("selectionchange", !1, e));
  }
}
function Bm(t, e, n, r) {
  switch (Cm(e)) {
    case 1:
      var i = g1;
      break;
    case 4:
      i = y1;
      break;
    default:
      i = Uc;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !du ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Cl(t, e, n, r, i) {
  var s = r;
  if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Ln(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  um(function () {
    var u = s,
      c = Lc(n),
      h = [];
    e: {
      var d = Um.get(t);
      if (d !== void 0) {
        var m = Bc,
          y = t;
        switch (t) {
          case "keypress":
            if (uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = P1;
            break;
          case "focusin":
            (y = "focus"), (m = gl);
            break;
          case "focusout":
            (y = "blur"), (m = gl);
            break;
          case "beforeblur":
          case "afterblur":
            m = gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Ld;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = E1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = O1;
            break;
          case Lm:
          case Om:
          case Mm:
            m = C1;
            break;
          case Fm:
            m = F1;
            break;
          case "scroll":
            m = v1;
            break;
          case "wheel":
            m = V1;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = I1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Md;
        }
        var v = (e & 4) !== 0,
          T = !v && t === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E),
              p !== null && ((E = Oi(f, p)), E != null && v.push(ji(f, E, g)))),
            T)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), h.push({ event: d, listeners: v }));
      }
    }
    if ((e & 7) === 0) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (m = t === "mouseout" || t === "pointerout"),
          d &&
            n !== cu &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ln(y) || y[Bt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Ln(y) : null),
              y !== null &&
                ((T = Zn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Ld),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((v = Md),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (T = m == null ? d : cr(m)),
            (g = y == null ? d : cr(y)),
            (d = new v(E, f + "leave", m, n, c)),
            (d.target = T),
            (d.relatedTarget = g),
            (E = null),
            Ln(c) === u &&
              ((v = new v(p, f + "enter", y, n, c)),
              (v.target = g),
              (v.relatedTarget = T),
              (E = v)),
            (T = E),
            m && y)
          )
            t: {
              for (v = m, p = y, f = 0, g = v; g; g = rr(g)) f++;
              for (g = 0, E = p; E; E = rr(E)) g++;
              for (; 0 < f - g; ) (v = rr(v)), f--;
              for (; 0 < g - f; ) (p = rr(p)), g--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = rr(v)), (p = rr(p));
              }
              v = null;
            }
          else v = null;
          m !== null && Qd(h, d, m, v, !1),
            y !== null && T !== null && Qd(h, T, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? cr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var I = W1;
        else if (Vd(d))
          if (Dm) I = X1;
          else {
            I = q1;
            var R = Q1;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (I = G1);
        if (I && (I = I(t, u))) {
          xm(h, I, n, c);
          break e;
        }
        R && R(t, d, u),
          t === "focusout" &&
            (R = d._wrapperState) &&
            R.controlled &&
            d.type === "number" &&
            su(d, "number", d.value);
      }
      switch (((R = u ? cr(u) : window), t)) {
        case "focusin":
          (Vd(R) || R.contentEditable === "true") &&
            ((lr = R), (yu = u), (Ci = null));
          break;
        case "focusout":
          Ci = yu = lr = null;
          break;
        case "mousedown":
          vu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vu = !1), Hd(h, n, c);
          break;
        case "selectionchange":
          if (Z1) break;
        case "keydown":
        case "keyup":
          Hd(h, n, c);
      }
      var x;
      if (jc)
        e: {
          switch (t) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        ar
          ? Nm(t, n) && ($ = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (Im &&
          n.locale !== "ko" &&
          (ar || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && ar && (x = Tm())
            : ((en = c),
              (Vc = "value" in en ? en.value : en.textContent),
              (ar = !0))),
        (R = Do(u, $)),
        0 < R.length &&
          (($ = new Od($, t, null, n, c)),
          h.push({ event: $, listeners: R }),
          x ? ($.data = x) : ((x = _m(n)), x !== null && ($.data = x)))),
        (x = z1 ? j1(t, n) : b1(t, n)) &&
          ((u = Do(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Od("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    Vm(h, e);
  });
}
function ji(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Do(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Oi(t, n)),
      s != null && r.unshift(ji(t, s, i)),
      (s = Oi(t, e)),
      s != null && r.push(ji(t, s, i))),
      (t = t.return);
  }
  return r;
}
function rr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Qd(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Oi(n, s)), l != null && o.unshift(ji(n, l, a)))
        : i || ((l = Oi(n, s)), l != null && o.push(ji(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var rw = /\r\n?/g,
  iw = /\u0000|\uFFFD/g;
function qd(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      rw,
      `
`
    )
    .replace(iw, "");
}
function Ws(t, e, n) {
  if (((e = qd(e)), qd(t) !== e && n)) throw Error(k(425));
}
function Ro() {}
var wu = null,
  Eu = null;
function Su(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var ku = typeof setTimeout == "function" ? setTimeout : void 0,
  sw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gd = typeof Promise == "function" ? Promise : void 0,
  ow =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gd < "u"
      ? function (t) {
          return Gd.resolve(null).then(t).catch(aw);
        }
      : ku;
function aw(t) {
  setTimeout(function () {
    throw t;
  });
}
function Tl(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), Ui(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ui(e);
}
function an(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Xd(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Hr = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + Hr,
  bi = "__reactProps$" + Hr,
  Bt = "__reactContainer$" + Hr,
  Cu = "__reactEvents$" + Hr,
  lw = "__reactListeners$" + Hr,
  uw = "__reactHandles$" + Hr;
function Ln(t) {
  var e = t[It];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Bt] || n[It])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Xd(t); t !== null; ) {
          if ((n = t[It])) return n;
          t = Xd(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function ms(t) {
  return (
    (t = t[It] || t[Bt]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function cr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(k(33));
}
function ma(t) {
  return t[bi] || null;
}
var Tu = [],
  hr = -1;
function Tn(t) {
  return { current: t };
}
function ee(t) {
  0 > hr || ((t.current = Tu[hr]), (Tu[hr] = null), hr--);
}
function Y(t, e) {
  hr++, (Tu[hr] = t.current), (t.current = e);
}
var yn = {},
  Be = Tn(yn),
  Ye = Tn(!1),
  Hn = yn;
function Dr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return yn;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Je(t) {
  return (t = t.childContextTypes), t != null;
}
function Ao() {
  ee(Ye), ee(Be);
}
function Yd(t, e, n) {
  if (Be.current !== yn) throw Error(k(168));
  Y(Be, e), Y(Ye, n);
}
function zm(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(k(108, Q0(t) || "Unknown", i));
  return oe({}, n, r);
}
function Po(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || yn),
    (Hn = Be.current),
    Y(Be, t),
    Y(Ye, Ye.current),
    !0
  );
}
function Jd(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((t = zm(t, e, Hn)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      ee(Ye),
      ee(Be),
      Y(Be, t))
    : ee(Ye),
    Y(Ye, n);
}
var Pt = null,
  ga = !1,
  Il = !1;
function jm(t) {
  Pt === null ? (Pt = [t]) : Pt.push(t);
}
function cw(t) {
  (ga = !0), jm(t);
}
function In() {
  if (!Il && Pt !== null) {
    Il = !0;
    var t = 0,
      e = X;
    try {
      var n = Pt;
      for (X = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (ga = !1);
    } catch (i) {
      throw (Pt !== null && (Pt = Pt.slice(t + 1)), fm(Oc, In), i);
    } finally {
      (X = e), (Il = !1);
    }
  }
  return null;
}
var dr = [],
  fr = 0,
  $o = null,
  Lo = 0,
  lt = [],
  ut = 0,
  Kn = null,
  $t = 1,
  Lt = "";
function An(t, e) {
  (dr[fr++] = Lo), (dr[fr++] = $o), ($o = t), (Lo = e);
}
function bm(t, e, n) {
  (lt[ut++] = $t), (lt[ut++] = Lt), (lt[ut++] = Kn), (Kn = t);
  var r = $t;
  t = Lt;
  var i = 32 - Et(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Et(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      ($t = (1 << (32 - Et(e) + i)) | (n << i) | r),
      (Lt = s + t);
  } else ($t = (1 << s) | (n << i) | r), (Lt = t);
}
function Hc(t) {
  t.return !== null && (An(t, 1), bm(t, 1, 0));
}
function Kc(t) {
  for (; t === $o; )
    ($o = dr[--fr]), (dr[fr] = null), (Lo = dr[--fr]), (dr[fr] = null);
  for (; t === Kn; )
    (Kn = lt[--ut]),
      (lt[ut] = null),
      (Lt = lt[--ut]),
      (lt[ut] = null),
      ($t = lt[--ut]),
      (lt[ut] = null);
}
var nt = null,
  tt = null,
  te = !1,
  wt = null;
function Hm(t, e) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Zd(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (nt = t), (tt = an(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (nt = t), (tt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Kn !== null ? { id: $t, overflow: Lt } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (nt = t),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Iu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Nu(t) {
  if (te) {
    var e = tt;
    if (e) {
      var n = e;
      if (!Zd(t, e)) {
        if (Iu(t)) throw Error(k(418));
        e = an(n.nextSibling);
        var r = nt;
        e && Zd(t, e)
          ? Hm(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (te = !1), (nt = t));
      }
    } else {
      if (Iu(t)) throw Error(k(418));
      (t.flags = (t.flags & -4097) | 2), (te = !1), (nt = t);
    }
  }
}
function ef(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  nt = t;
}
function Qs(t) {
  if (t !== nt) return !1;
  if (!te) return ef(t), (te = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Su(t.type, t.memoizedProps))),
    e && (e = tt))
  ) {
    if (Iu(t)) throw (Km(), Error(k(418)));
    for (; e; ) Hm(t, e), (e = an(e.nextSibling));
  }
  if ((ef(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(k(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              tt = an(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? an(t.stateNode.nextSibling) : null;
  return !0;
}
function Km() {
  for (var t = tt; t; ) t = an(t.nextSibling);
}
function Rr() {
  (tt = nt = null), (te = !1);
}
function Wc(t) {
  wt === null ? (wt = [t]) : wt.push(t);
}
var hw = Qt.ReactCurrentBatchConfig;
function yt(t, e) {
  if (t && t.defaultProps) {
    (e = oe({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Oo = Tn(null),
  Mo = null,
  pr = null,
  Qc = null;
function qc() {
  Qc = pr = Mo = null;
}
function Gc(t) {
  var e = Oo.current;
  ee(Oo), (t._currentValue = e);
}
function _u(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Cr(t, e) {
  (Mo = t),
    (Qc = pr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      ((t.lanes & e) !== 0 && (Ge = !0), (t.firstContext = null));
}
function ft(t) {
  var e = t._currentValue;
  if (Qc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), pr === null)) {
      if (Mo === null) throw Error(k(308));
      (pr = t), (Mo.dependencies = { lanes: 0, firstContext: t });
    } else pr = pr.next = t;
  return e;
}
var On = null;
function Xc(t) {
  On === null ? (On = [t]) : On.push(t);
}
function Wm(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Xc(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    zt(t, r)
  );
}
function zt(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Yc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qm(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Mt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ln(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (Q & 2) !== 0)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      zt(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Xc(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    zt(t, n)
  );
}
function co(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mc(t, n);
  }
}
function tf(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Fo(t, e, n, r) {
  var i = t.updateQueue;
  Yt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = t,
            v = a;
          switch (((d = e), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                h = y.call(m, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, h, d) : y),
                d == null)
              )
                break e;
              h = oe({}, h, d);
              break e;
            case 2:
              Yt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = h)) : (c = c.next = m),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (Qn |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function nf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var qm = new Wp.Component().refs;
function xu(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : oe({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ya = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Zn(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = He(),
      i = cn(t),
      s = Mt(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (St(e, t, i, r), co(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = He(),
      i = cn(t),
      s = Mt(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (St(e, t, i, r), co(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = He(),
      r = cn(t),
      i = Mt(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = ln(t, i, r)),
      e !== null && (St(e, t, r, n), co(e, t, r));
  },
};
function rf(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Bi(n, r) || !Bi(i, s)
      : !0
  );
}
function Gm(t, e, n) {
  var r = !1,
    i = yn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((i = Je(e) ? Hn : Be.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Dr(t, i) : yn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ya),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function sf(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && ya.enqueueReplaceState(e, e.state, null);
}
function Du(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = qm), Yc(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ft(s))
    : ((s = Je(e) ? Hn : Be.current), (i.context = Dr(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (xu(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && ya.enqueueReplaceState(i, i.state, null),
      Fo(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function ai(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === qm && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, t));
  }
  return t;
}
function qs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      k(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function of(t) {
  var e = t._init;
  return e(t._payload);
}
function Xm(t) {
  function e(p, f) {
    if (t) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!t) return null;
    for (; f !== null; ) e(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = hn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, g) {
    return (
      (p.index = g),
      t
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return t && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, g, E) {
    return f === null || f.tag !== 6
      ? ((f = Pl(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function l(p, f, g, E) {
    var I = g.type;
    return I === or
      ? c(p, f, g.props.children, E, g.key)
      : f !== null &&
        (f.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === Xt &&
            of(I) === f.type))
      ? ((E = i(f, g.props)), (E.ref = ai(p, f, g)), (E.return = p), E)
      : ((E = yo(g.type, g.key, g.props, null, p.mode, E)),
        (E.ref = ai(p, f, g)),
        (E.return = p),
        E);
  }
  function u(p, f, g, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = $l(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g.children || [])), (f.return = p), f);
  }
  function c(p, f, g, E, I) {
    return f === null || f.tag !== 7
      ? ((f = zn(g, p.mode, E, I)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function h(p, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Pl("" + f, p.mode, g)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fs:
          return (
            (g = yo(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = ai(p, null, f)),
            (g.return = p),
            g
          );
        case sr:
          return (f = $l(f, p.mode, g)), (f.return = p), f;
        case Xt:
          var E = f._init;
          return h(p, E(f._payload), g);
      }
      if (di(f) || ni(f))
        return (f = zn(f, p.mode, g, null)), (f.return = p), f;
      qs(p, f);
    }
    return null;
  }
  function d(p, f, g, E) {
    var I = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return I !== null ? null : a(p, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Fs:
          return g.key === I ? l(p, f, g, E) : null;
        case sr:
          return g.key === I ? u(p, f, g, E) : null;
        case Xt:
          return (I = g._init), d(p, f, I(g._payload), E);
      }
      if (di(g) || ni(g)) return I !== null ? null : c(p, f, g, E, null);
      qs(p, g);
    }
    return null;
  }
  function m(p, f, g, E, I) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(g) || null), a(f, p, "" + E, I);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Fs:
          return (p = p.get(E.key === null ? g : E.key) || null), l(f, p, E, I);
        case sr:
          return (p = p.get(E.key === null ? g : E.key) || null), u(f, p, E, I);
        case Xt:
          var R = E._init;
          return m(p, f, g, R(E._payload), I);
      }
      if (di(E) || ni(E)) return (p = p.get(g) || null), c(f, p, E, I, null);
      qs(f, E);
    }
    return null;
  }
  function y(p, f, g, E) {
    for (
      var I = null, R = null, x = f, $ = (f = 0), ue = null;
      x !== null && $ < g.length;
      $++
    ) {
      x.index > $ ? ((ue = x), (x = null)) : (ue = x.sibling);
      var K = d(p, x, g[$], E);
      if (K === null) {
        x === null && (x = ue);
        break;
      }
      t && x && K.alternate === null && e(p, x),
        (f = s(K, f, $)),
        R === null ? (I = K) : (R.sibling = K),
        (R = K),
        (x = ue);
    }
    if ($ === g.length) return n(p, x), te && An(p, $), I;
    if (x === null) {
      for (; $ < g.length; $++)
        (x = h(p, g[$], E)),
          x !== null &&
            ((f = s(x, f, $)), R === null ? (I = x) : (R.sibling = x), (R = x));
      return te && An(p, $), I;
    }
    for (x = r(p, x); $ < g.length; $++)
      (ue = m(x, p, $, g[$], E)),
        ue !== null &&
          (t && ue.alternate !== null && x.delete(ue.key === null ? $ : ue.key),
          (f = s(ue, f, $)),
          R === null ? (I = ue) : (R.sibling = ue),
          (R = ue));
    return (
      t &&
        x.forEach(function (mt) {
          return e(p, mt);
        }),
      te && An(p, $),
      I
    );
  }
  function v(p, f, g, E) {
    var I = ni(g);
    if (typeof I != "function") throw Error(k(150));
    if (((g = I.call(g)), g == null)) throw Error(k(151));
    for (
      var R = (I = null), x = f, $ = (f = 0), ue = null, K = g.next();
      x !== null && !K.done;
      $++, K = g.next()
    ) {
      x.index > $ ? ((ue = x), (x = null)) : (ue = x.sibling);
      var mt = d(p, x, K.value, E);
      if (mt === null) {
        x === null && (x = ue);
        break;
      }
      t && x && mt.alternate === null && e(p, x),
        (f = s(mt, f, $)),
        R === null ? (I = mt) : (R.sibling = mt),
        (R = mt),
        (x = ue);
    }
    if (K.done) return n(p, x), te && An(p, $), I;
    if (x === null) {
      for (; !K.done; $++, K = g.next())
        (K = h(p, K.value, E)),
          K !== null &&
            ((f = s(K, f, $)), R === null ? (I = K) : (R.sibling = K), (R = K));
      return te && An(p, $), I;
    }
    for (x = r(p, x); !K.done; $++, K = g.next())
      (K = m(x, p, $, K.value, E)),
        K !== null &&
          (t && K.alternate !== null && x.delete(K.key === null ? $ : K.key),
          (f = s(K, f, $)),
          R === null ? (I = K) : (R.sibling = K),
          (R = K));
    return (
      t &&
        x.forEach(function (ei) {
          return e(p, ei);
        }),
      te && An(p, $),
      I
    );
  }
  function T(p, f, g, E) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === or &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Fs:
          e: {
            for (var I = g.key, R = f; R !== null; ) {
              if (R.key === I) {
                if (((I = g.type), I === or)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (f = i(R, g.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === Xt &&
                    of(I) === R.type)
                ) {
                  n(p, R.sibling),
                    (f = i(R, g.props)),
                    (f.ref = ai(p, R, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, R);
                break;
              } else e(p, R);
              R = R.sibling;
            }
            g.type === or
              ? ((f = zn(g.props.children, p.mode, E, g.key)),
                (f.return = p),
                (p = f))
              : ((E = yo(g.type, g.key, g.props, null, p.mode, E)),
                (E.ref = ai(p, f, g)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case sr:
          e: {
            for (R = g.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, g.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else e(p, f);
              f = f.sibling;
            }
            (f = $l(g, p.mode, E)), (f.return = p), (p = f);
          }
          return o(p);
        case Xt:
          return (R = g._init), T(p, f, R(g._payload), E);
      }
      if (di(g)) return y(p, f, g, E);
      if (ni(g)) return v(p, f, g, E);
      qs(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = Pl(g, p.mode, E)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return T;
}
var Ar = Xm(!0),
  Ym = Xm(!1),
  gs = {},
  xt = Tn(gs),
  Hi = Tn(gs),
  Ki = Tn(gs);
function Mn(t) {
  if (t === gs) throw Error(k(174));
  return t;
}
function Jc(t, e) {
  switch ((Y(Ki, e), Y(Hi, t), Y(xt, gs), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : au(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = au(e, t));
  }
  ee(xt), Y(xt, e);
}
function Pr() {
  ee(xt), ee(Hi), ee(Ki);
}
function Jm(t) {
  Mn(Ki.current);
  var e = Mn(xt.current),
    n = au(e, t.type);
  e !== n && (Y(Hi, t), Y(xt, n));
}
function Zc(t) {
  Hi.current === t && (ee(xt), ee(Hi));
}
var ie = Tn(0);
function Uo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if ((e.flags & 128) !== 0) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Nl = [];
function eh() {
  for (var t = 0; t < Nl.length; t++)
    Nl[t]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var ho = Qt.ReactCurrentDispatcher,
  _l = Qt.ReactCurrentBatchConfig,
  Wn = 0,
  se = null,
  me = null,
  ke = null,
  Vo = !1,
  Ti = !1,
  Wi = 0,
  dw = 0;
function $e() {
  throw Error(k(321));
}
function th(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!kt(t[n], e[n])) return !1;
  return !0;
}
function nh(t, e, n, r, i, s) {
  if (
    ((Wn = s),
    (se = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ho.current = t === null || t.memoizedState === null ? gw : yw),
    (t = n(r, i)),
    Ti)
  ) {
    s = 0;
    do {
      if (((Ti = !1), (Wi = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (ke = me = null),
        (e.updateQueue = null),
        (ho.current = vw),
        (t = n(r, i));
    } while (Ti);
  }
  if (
    ((ho.current = Bo),
    (e = me !== null && me.next !== null),
    (Wn = 0),
    (ke = me = se = null),
    (Vo = !1),
    e)
  )
    throw Error(k(300));
  return t;
}
function rh() {
  var t = Wi !== 0;
  return (Wi = 0), t;
}
function Tt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (se.memoizedState = ke = t) : (ke = ke.next = t), ke;
}
function pt() {
  if (me === null) {
    var t = se.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = me.next;
  var e = ke === null ? se.memoizedState : ke.next;
  if (e !== null) (ke = e), (me = t);
  else {
    if (t === null) throw Error(k(310));
    (me = t),
      (t = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ke === null ? (se.memoizedState = ke = t) : (ke = ke.next = t);
  }
  return ke;
}
function Qi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function xl(t) {
  var e = pt(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = me,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Wn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (se.lanes |= c),
          (Qn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      kt(r, e.memoizedState) || (Ge = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (se.lanes |= s), (Qn |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Dl(t) {
  var e = pt(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    kt(s, e.memoizedState) || (Ge = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Zm() {}
function eg(t, e) {
  var n = se,
    r = pt(),
    i = e(),
    s = !kt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    ih(rg.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qi(9, ng.bind(null, n, r, i, e), void 0, null),
      Ce === null)
    )
      throw Error(k(349));
    (Wn & 30) !== 0 || tg(n, e, i);
  }
  return i;
}
function tg(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (se.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function ng(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), ig(e) && sg(t);
}
function rg(t, e, n) {
  return n(function () {
    ig(e) && sg(t);
  });
}
function ig(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !kt(t, n);
  } catch {
    return !0;
  }
}
function sg(t) {
  var e = zt(t, 1);
  e !== null && St(e, t, 1, -1);
}
function af(t) {
  var e = Tt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qi,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = mw.bind(null, se, t)),
    [e.memoizedState, t]
  );
}
function qi(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (se.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function og() {
  return pt().memoizedState;
}
function fo(t, e, n, r) {
  var i = Tt();
  (se.flags |= t),
    (i.memoizedState = qi(1 | e, n, void 0, r === void 0 ? null : r));
}
function va(t, e, n, r) {
  var i = pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((s = o.destroy), r !== null && th(r, o.deps))) {
      i.memoizedState = qi(e, n, s, r);
      return;
    }
  }
  (se.flags |= t), (i.memoizedState = qi(1 | e, n, s, r));
}
function lf(t, e) {
  return fo(8390656, 8, t, e);
}
function ih(t, e) {
  return va(2048, 8, t, e);
}
function ag(t, e) {
  return va(4, 2, t, e);
}
function lg(t, e) {
  return va(4, 4, t, e);
}
function ug(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function cg(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), va(4, 4, ug.bind(null, e, t), n)
  );
}
function sh() {}
function hg(t, e) {
  var n = pt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && th(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function dg(t, e) {
  var n = pt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && th(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function fg(t, e, n) {
  return (Wn & 21) === 0
    ? (t.baseState && ((t.baseState = !1), (Ge = !0)), (t.memoizedState = n))
    : (kt(n, e) || ((n = gm()), (se.lanes |= n), (Qn |= n), (t.baseState = !0)),
      e);
}
function fw(t, e) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = _l.transition;
  _l.transition = {};
  try {
    t(!1), e();
  } finally {
    (X = n), (_l.transition = r);
  }
}
function pg() {
  return pt().memoizedState;
}
function pw(t, e, n) {
  var r = cn(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mg(t))
  )
    gg(e, n);
  else if (((n = Wm(t, e, n, r)), n !== null)) {
    var i = He();
    St(n, t, r, i), yg(n, e, r);
  }
}
function mw(t, e, n) {
  var r = cn(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mg(t)) gg(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), kt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), Xc(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wm(t, e, i, r)),
      n !== null && ((i = He()), St(n, t, r, i), yg(n, e, r));
  }
}
function mg(t) {
  var e = t.alternate;
  return t === se || (e !== null && e === se);
}
function gg(t, e) {
  Ti = Vo = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function yg(t, e, n) {
  if ((n & 4194240) !== 0) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mc(t, n);
  }
}
var Bo = {
    readContext: ft,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  gw = {
    readContext: ft,
    useCallback: function (t, e) {
      return (Tt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: ft,
    useEffect: lf,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        fo(4194308, 4, ug.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return fo(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return fo(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Tt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Tt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = pw.bind(null, se, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Tt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: af,
    useDebugValue: sh,
    useDeferredValue: function (t) {
      return (Tt().memoizedState = t);
    },
    useTransition: function () {
      var t = af(!1),
        e = t[0];
      return (t = fw.bind(null, t[1])), (Tt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = se,
        i = Tt();
      if (te) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = e()), Ce === null)) throw Error(k(349));
        (Wn & 30) !== 0 || tg(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        lf(rg.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        qi(9, ng.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Tt(),
        e = Ce.identifierPrefix;
      if (te) {
        var n = Lt,
          r = $t;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Wi++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = dw++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  yw = {
    readContext: ft,
    useCallback: hg,
    useContext: ft,
    useEffect: ih,
    useImperativeHandle: cg,
    useInsertionEffect: ag,
    useLayoutEffect: lg,
    useMemo: dg,
    useReducer: xl,
    useRef: og,
    useState: function () {
      return xl(Qi);
    },
    useDebugValue: sh,
    useDeferredValue: function (t) {
      var e = pt();
      return fg(e, me.memoizedState, t);
    },
    useTransition: function () {
      var t = xl(Qi)[0],
        e = pt().memoizedState;
      return [t, e];
    },
    useMutableSource: Zm,
    useSyncExternalStore: eg,
    useId: pg,
    unstable_isNewReconciler: !1,
  },
  vw = {
    readContext: ft,
    useCallback: hg,
    useContext: ft,
    useEffect: ih,
    useImperativeHandle: cg,
    useInsertionEffect: ag,
    useLayoutEffect: lg,
    useMemo: dg,
    useReducer: Dl,
    useRef: og,
    useState: function () {
      return Dl(Qi);
    },
    useDebugValue: sh,
    useDeferredValue: function (t) {
      var e = pt();
      return me === null ? (e.memoizedState = t) : fg(e, me.memoizedState, t);
    },
    useTransition: function () {
      var t = Dl(Qi)[0],
        e = pt().memoizedState;
      return [t, e];
    },
    useMutableSource: Zm,
    useSyncExternalStore: eg,
    useId: pg,
    unstable_isNewReconciler: !1,
  };
function $r(t, e) {
  try {
    var n = "",
      r = e;
    do (n += W0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Rl(t, e, n) {
  return {
    value: t,
    source: null,
    stack: n != null ? n : null,
    digest: e != null ? e : null,
  };
}
function Ru(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ww = typeof WeakMap == "function" ? WeakMap : Map;
function vg(t, e, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      jo || ((jo = !0), (Bu = r)), Ru(t, e);
    }),
    n
  );
}
function wg(t, e, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ru(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ru(t, e),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function uf(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new ww();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = $w.bind(null, t, e, n)), e.then(t, t));
}
function cf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function hf(t, e, n, r, i) {
  return (t.mode & 1) === 0
    ? (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Mt(-1, 1)), (e.tag = 2), ln(n, e, 1))),
          (n.lanes |= 1)),
      t)
    : ((t.flags |= 65536), (t.lanes = i), t);
}
var Ew = Qt.ReactCurrentOwner,
  Ge = !1;
function je(t, e, n, r) {
  e.child = t === null ? Ym(e, null, n, r) : Ar(e, t.child, n, r);
}
function df(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Cr(e, i),
    (r = nh(t, e, n, r, s, i)),
    (n = rh()),
    t !== null && !Ge
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        jt(t, e, i))
      : (te && n && Hc(e), (e.flags |= 1), je(t, e, r, i), e.child)
  );
}
function ff(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !fh(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Eg(t, e, s, r, i))
      : ((t = yo(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), (t.lanes & i) === 0)) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bi), n(o, r) && t.ref === e.ref)
    )
      return jt(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = hn(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Eg(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Bi(s, r) && t.ref === e.ref)
      if (((Ge = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        (t.flags & 131072) !== 0 && (Ge = !0);
      else return (e.lanes = t.lanes), jt(t, e, i);
  }
  return Au(t, e, n, r, i);
}
function Sg(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if ((e.mode & 1) === 0)
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(gr, et),
        (et |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Y(gr, et),
          (et |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Y(gr, et),
        (et |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Y(gr, et),
      (et |= r);
  return je(t, e, i, n), e.child;
}
function kg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Au(t, e, n, r, i) {
  var s = Je(n) ? Hn : Be.current;
  return (
    (s = Dr(e, s)),
    Cr(e, i),
    (n = nh(t, e, n, r, s, i)),
    (r = rh()),
    t !== null && !Ge
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        jt(t, e, i))
      : (te && r && Hc(e), (e.flags |= 1), je(t, e, n, i), e.child)
  );
}
function pf(t, e, n, r, i) {
  if (Je(n)) {
    var s = !0;
    Po(e);
  } else s = !1;
  if ((Cr(e, i), e.stateNode === null))
    po(t, e), Gm(e, n, r), Du(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Je(n) ? Hn : Be.current), (u = Dr(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && sf(e, o, r, u)),
      (Yt = !1);
    var d = e.memoizedState;
    (o.state = d),
      Fo(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || Ye.current || Yt
        ? (typeof c == "function" && (xu(e, n, c, r), (l = e.memoizedState)),
          (a = Yt || rf(e, n, a, r, d, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Qm(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : yt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ft(l))
        : ((l = Je(n) ? Hn : Be.current), (l = Dr(e, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || d !== l) && sf(e, o, r, l)),
      (Yt = !1),
      (d = e.memoizedState),
      (o.state = d),
      Fo(e, r, o, i);
    var y = e.memoizedState;
    a !== h || d !== y || Ye.current || Yt
      ? (typeof m == "function" && (xu(e, n, m, r), (y = e.memoizedState)),
        (u = Yt || rf(e, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Pu(t, e, n, r, s, i);
}
function Pu(t, e, n, r, i, s) {
  kg(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Jd(e, n, !1), jt(t, e, s);
  (r = e.stateNode), (Ew.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Ar(e, t.child, null, s)), (e.child = Ar(e, null, a, s)))
      : je(t, e, a, s),
    (e.memoizedState = r.state),
    i && Jd(e, n, !0),
    e.child
  );
}
function Cg(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Yd(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Yd(t, e.context, !1),
    Jc(t, e.containerInfo);
}
function mf(t, e, n, r, i) {
  return Rr(), Wc(i), (e.flags |= 256), je(t, e, n, r), e.child;
}
var $u = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lu(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Tg(t, e, n) {
  var r = e.pendingProps,
    i = ie.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Y(ie, i & 1),
    t === null)
  )
    return (
      Nu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? ((e.mode & 1) === 0
            ? (e.lanes = 1)
            : t.data === "$!"
            ? (e.lanes = 8)
            : (e.lanes = 1073741824),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Sa(o, r, 0, null)),
              (t = zn(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Lu(n)),
              (e.memoizedState = $u),
              t)
            : oh(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Sw(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      (o & 1) === 0 && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = hn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = hn(a, s)) : ((s = zn(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Lu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = $u),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = hn(s, { mode: "visible", children: r.children })),
    (e.mode & 1) === 0 && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function oh(t, e) {
  return (
    (e = Sa({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Gs(t, e, n, r) {
  return (
    r !== null && Wc(r),
    Ar(e, t.child, null, n),
    (t = oh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Sw(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Rl(Error(k(422)))), Gs(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Sa({ mode: "visible", children: r.children }, i, 0, null)),
        (s = zn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        (e.mode & 1) !== 0 && Ar(e, t.child, null, o),
        (e.child.memoizedState = Lu(o)),
        (e.memoizedState = $u),
        s);
  if ((e.mode & 1) === 0) return Gs(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(k(419))), (r = Rl(s, r, void 0)), Gs(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), Ge || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (r.suspendedLanes | o)) !== 0 ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), zt(t, i), St(r, t, i, -1));
    }
    return dh(), (r = Rl(Error(k(421)))), Gs(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Lw.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (tt = an(i.nextSibling)),
      (nt = e),
      (te = !0),
      (wt = null),
      t !== null &&
        ((lt[ut++] = $t),
        (lt[ut++] = Lt),
        (lt[ut++] = Kn),
        ($t = t.id),
        (Lt = t.overflow),
        (Kn = e)),
      (e = oh(e, r.children)),
      (e.flags |= 4096),
      e);
}
function gf(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), _u(t.return, e, n);
}
function Al(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ig(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((je(t, e, r.children, n), (r = ie.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && (t.flags & 128) !== 0)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && gf(t, n, e);
        else if (t.tag === 19) gf(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((Y(ie, r), (e.mode & 1) === 0)) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Uo(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Al(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Uo(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Al(e, !0, n, null, s);
        break;
      case "together":
        Al(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function po(t, e) {
  (e.mode & 1) === 0 &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function jt(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Qn |= e.lanes),
    (n & e.childLanes) === 0)
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(k(153));
  if (e.child !== null) {
    for (
      t = e.child, n = hn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = hn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function kw(t, e, n) {
  switch (e.tag) {
    case 3:
      Cg(e), Rr();
      break;
    case 5:
      Jm(e);
      break;
    case 1:
      Je(e.type) && Po(e);
      break;
    case 4:
      Jc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      Y(Oo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ie, ie.current & 1), (e.flags |= 128), null)
          : (n & e.child.childLanes) !== 0
          ? Tg(t, e, n)
          : (Y(ie, ie.current & 1),
            (t = jt(t, e, n)),
            t !== null ? t.sibling : null);
      Y(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), (t.flags & 128) !== 0)) {
        if (r) return Ig(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Sg(t, e, n);
  }
  return jt(t, e, n);
}
var Ng, Ou, _g, xg;
Ng = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ou = function () {};
_g = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Mn(xt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ru(t, i)), (r = ru(t, r)), (s = []);
        break;
      case "select":
        (i = oe({}, i, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ou(t, i)), (r = ou(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Ro);
    }
    lu(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            ($i.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              ($i.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Z("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
xg = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function li(t, e) {
  if (!te)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function Cw(t, e, n) {
  var r = e.pendingProps;
  switch ((Kc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(e), null;
    case 1:
      return Je(e.type) && Ao(), Le(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Pr(),
        ee(Ye),
        ee(Be),
        eh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Qs(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), wt !== null && (bu(wt), (wt = null)))),
        Ou(t, e),
        Le(e),
        null
      );
    case 5:
      Zc(e);
      var i = Mn(Ki.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        _g(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return Le(e), null;
        }
        if (((t = Mn(xt.current)), Qs(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[It] = e), (r[bi] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pi.length; i++) Z(pi[i], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Td(r, s), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              Nd(r, s), Z("invalid", r);
          }
          lu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ws(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ws(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : $i.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              Us(r), Id(r, s, !0);
              break;
            case "textarea":
              Us(r), _d(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ro);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = tm(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[It] = e),
            (t[bi] = r),
            Ng(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = uu(n, r)), n)) {
              case "dialog":
                Z("cancel", t), Z("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < pi.length; i++) Z(pi[i], t);
                i = r;
                break;
              case "source":
                Z("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", t), Z("load", t), (i = r);
                break;
              case "details":
                Z("toggle", t), (i = r);
                break;
              case "input":
                Td(t, r), (i = ru(t, r)), Z("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = oe({}, r, { value: void 0 })),
                  Z("invalid", t);
                break;
              case "textarea":
                Nd(t, r), (i = ou(t, r)), Z("invalid", t);
                break;
              default:
                i = r;
            }
            lu(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? im(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && nm(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Li(t, l)
                    : typeof l == "number" && Li(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    ($i.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && Z("scroll", t)
                      : l != null && Rc(t, s, l, o));
              }
            switch (n) {
              case "input":
                Us(t), Id(t, r, !1);
                break;
              case "textarea":
                Us(t), _d(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? wr(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      wr(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Ro);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Le(e), null;
    case 6:
      if (t && e.stateNode != null) xg(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(k(166));
        if (((n = Mn(Ki.current)), Mn(xt.current), Qs(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[It] = e),
            (s = r.nodeValue !== n) && ((t = nt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ws(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ws(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[It] = e),
            (e.stateNode = r);
      }
      return Le(e), null;
    case 13:
      if (
        (ee(ie),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (te && tt !== null && (e.mode & 1) !== 0 && (e.flags & 128) === 0)
          Km(), Rr(), (e.flags |= 98560), (s = !1);
        else if (((s = Qs(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[It] = e;
          } else
            Rr(),
              (e.flags & 128) === 0 && (e.memoizedState = null),
              (e.flags |= 4);
          Le(e), (s = !1);
        } else wt !== null && (bu(wt), (wt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return (e.flags & 128) !== 0
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            (e.mode & 1) !== 0 &&
              (t === null || (ie.current & 1) !== 0
                ? ge === 0 && (ge = 3)
                : dh())),
          e.updateQueue !== null && (e.flags |= 4),
          Le(e),
          null);
    case 4:
      return (
        Pr(), Ou(t, e), t === null && zi(e.stateNode.containerInfo), Le(e), null
      );
    case 10:
      return Gc(e.type._context), Le(e), null;
    case 17:
      return Je(e.type) && Ao(), Le(e), null;
    case 19:
      if ((ee(ie), (s = e.memoizedState), s === null)) return Le(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) li(s, !1);
        else {
          if (ge !== 0 || (t !== null && (t.flags & 128) !== 0))
            for (t = e.child; t !== null; ) {
              if (((o = Uo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    li(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return Y(ie, (ie.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            he() > Lr &&
            ((e.flags |= 128), (r = !0), li(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Uo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              li(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !te)
            )
              return Le(e), null;
          } else
            2 * he() - s.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), li(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = he()),
          (e.sibling = null),
          (n = ie.current),
          Y(ie, r ? (n & 1) | 2 : n & 1),
          e)
        : (Le(e), null);
    case 22:
    case 23:
      return (
        hh(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && (e.mode & 1) !== 0
          ? (et & 1073741824) !== 0 &&
            (Le(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Le(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function Tw(t, e) {
  switch ((Kc(e), e.tag)) {
    case 1:
      return (
        Je(e.type) && Ao(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Pr(),
        ee(Ye),
        ee(Be),
        eh(),
        (t = e.flags),
        (t & 65536) !== 0 && (t & 128) === 0
          ? ((e.flags = (t & -65537) | 128), e)
          : null
      );
    case 5:
      return Zc(e), null;
    case 13:
      if (
        (ee(ie), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(k(340));
        Rr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ee(ie), null;
    case 4:
      return Pr(), null;
    case 10:
      return Gc(e.type._context), null;
    case 22:
    case 23:
      return hh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xs = !1,
  Me = !1,
  Iw = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function mr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(t, e, r);
      }
    else n.current = null;
}
function Mu(t, e, n) {
  try {
    n();
  } catch (r) {
    ae(t, e, r);
  }
}
var yf = !1;
function Nw(t, e) {
  if (((wu = _o), (t = Pm()), bc(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (d = h), (h = m);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eu = { focusedElem: t, selectionRange: n }, _o = !1, N = e; N !== null; )
    if (((e = N), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (N = t);
    else
      for (; N !== null; ) {
        e = N;
        try {
          var y = e.alternate;
          if ((e.flags & 1024) !== 0)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    T = y.memoizedState,
                    p = e.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? v : yt(e.type, v),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = e.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (E) {
          ae(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (N = t);
          break;
        }
        N = e.return;
      }
  return (y = yf), (yf = !1), y;
}
function Ii(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Mu(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function wa(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Fu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Dg(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Dg(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[It], delete e[bi], delete e[Cu], delete e[lw], delete e[uw])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Rg(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function vf(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Rg(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Uu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Ro));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Uu(t, e, n), t = t.sibling; t !== null; ) Uu(t, e, n), (t = t.sibling);
}
function Vu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Vu(t, e, n), t = t.sibling; t !== null; ) Vu(t, e, n), (t = t.sibling);
}
var Ne = null,
  vt = !1;
function qt(t, e, n) {
  for (n = n.child; n !== null; ) Ag(t, e, n), (n = n.sibling);
}
function Ag(t, e, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function")
    try {
      _t.onCommitFiberUnmount(ha, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || mr(n, e);
    case 6:
      var r = Ne,
        i = vt;
      (Ne = null),
        qt(t, e, n),
        (Ne = r),
        (vt = i),
        Ne !== null &&
          (vt
            ? ((t = Ne),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (vt
          ? ((t = Ne),
            (n = n.stateNode),
            t.nodeType === 8
              ? Tl(t.parentNode, n)
              : t.nodeType === 1 && Tl(t, n),
            Ui(t))
          : Tl(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = vt),
        (Ne = n.stateNode.containerInfo),
        (vt = !0),
        qt(t, e, n),
        (Ne = r),
        (vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Mu(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      qt(t, e, n);
      break;
    case 1:
      if (
        !Me &&
        (mr(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ae(n, e, a);
        }
      qt(t, e, n);
      break;
    case 21:
      qt(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), qt(t, e, n), (Me = r))
        : qt(t, e, n);
      break;
    default:
      qt(t, e, n);
  }
}
function wf(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Iw()),
      e.forEach(function (r) {
        var i = Ow.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function gt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(k(160));
        Ag(s, o, i), (Ne = null), (vt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ae(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Pg(e, t), (e = e.sibling);
}
function Pg(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(e, t), Ct(t), r & 4)) {
        try {
          Ii(3, t, t.return), wa(3, t);
        } catch (v) {
          ae(t, t.return, v);
        }
        try {
          Ii(5, t, t.return);
        } catch (v) {
          ae(t, t.return, v);
        }
      }
      break;
    case 1:
      gt(e, t), Ct(t), r & 512 && n !== null && mr(n, n.return);
      break;
    case 5:
      if (
        (gt(e, t),
        Ct(t),
        r & 512 && n !== null && mr(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          Li(i, "");
        } catch (v) {
          ae(t, t.return, v);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Zp(i, s),
              uu(a, o);
            var u = uu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === "style"
                ? im(i, h)
                : c === "dangerouslySetInnerHTML"
                ? nm(i, h)
                : c === "children"
                ? Li(i, h)
                : Rc(i, c, h, u);
            }
            switch (a) {
              case "input":
                iu(i, s);
                break;
              case "textarea":
                em(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? wr(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? wr(i, !!s.multiple, s.defaultValue, !0)
                      : wr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[bi] = s;
          } catch (v) {
            ae(t, t.return, v);
          }
      }
      break;
    case 6:
      if ((gt(e, t), Ct(t), r & 4)) {
        if (t.stateNode === null) throw Error(k(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          ae(t, t.return, v);
        }
      }
      break;
    case 3:
      if (
        (gt(e, t), Ct(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ui(e.containerInfo);
        } catch (v) {
          ae(t, t.return, v);
        }
      break;
    case 4:
      gt(e, t), Ct(t);
      break;
    case 13:
      gt(e, t),
        Ct(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (uh = he())),
        r & 4 && wf(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Me = (u = Me) || c), gt(e, t), (Me = u)) : gt(e, t),
        Ct(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && (t.mode & 1) !== 0)
        )
          for (N = t, c = t.child; c !== null; ) {
            for (h = N = c; N !== null; ) {
              switch (((d = N), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, d, d.return);
                  break;
                case 1:
                  mr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ae(r, n, v);
                    }
                  }
                  break;
                case 5:
                  mr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Sf(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (N = m)) : Sf(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = rm("display", o)));
              } catch (v) {
                ae(t, t.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (v) {
                ae(t, t.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      gt(e, t), Ct(t), r & 4 && wf(t);
      break;
    case 21:
      break;
    default:
      gt(e, t), Ct(t);
  }
}
function Ct(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Rg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Li(i, ""), (r.flags &= -33));
          var s = vf(t);
          Vu(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = vf(t);
          Uu(t, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      ae(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function _w(t, e, n) {
  (N = t), $g(t);
}
function $g(t, e, n) {
  for (var r = (t.mode & 1) !== 0; N !== null; ) {
    var i = N,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Xs;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Me;
        a = Xs;
        var u = Me;
        if (((Xs = o), (Me = l) && !u))
          for (N = i; N !== null; )
            (o = N),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? kf(i)
                : l !== null
                ? ((l.return = o), (N = l))
                : kf(i);
        for (; s !== null; ) (N = s), $g(s), (s = s.sibling);
        (N = i), (Xs = a), (Me = u);
      }
      Ef(t);
    } else
      (i.subtreeFlags & 8772) !== 0 && s !== null
        ? ((s.return = i), (N = s))
        : Ef(t);
  }
}
function Ef(t) {
  for (; N !== null; ) {
    var e = N;
    if ((e.flags & 8772) !== 0) {
      var n = e.alternate;
      try {
        if ((e.flags & 8772) !== 0)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Me || wa(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : yt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && nf(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                nf(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Ui(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Me || (e.flags & 512 && Fu(e));
      } catch (d) {
        ae(e, e.return, d);
      }
    }
    if (e === t) {
      N = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (N = n);
      break;
    }
    N = e.return;
  }
}
function Sf(t) {
  for (; N !== null; ) {
    var e = N;
    if (e === t) {
      N = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (N = n);
      break;
    }
    N = e.return;
  }
}
function kf(t) {
  for (; N !== null; ) {
    var e = N;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            wa(4, e);
          } catch (l) {
            ae(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ae(e, i, l);
            }
          }
          var s = e.return;
          try {
            Fu(e);
          } catch (l) {
            ae(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Fu(e);
          } catch (l) {
            ae(e, o, l);
          }
      }
    } catch (l) {
      ae(e, e.return, l);
    }
    if (e === t) {
      N = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (N = a);
      break;
    }
    N = e.return;
  }
}
var xw = Math.ceil,
  zo = Qt.ReactCurrentDispatcher,
  ah = Qt.ReactCurrentOwner,
  ht = Qt.ReactCurrentBatchConfig,
  Q = 0,
  Ce = null,
  pe = null,
  De = 0,
  et = 0,
  gr = Tn(0),
  ge = 0,
  Gi = null,
  Qn = 0,
  Ea = 0,
  lh = 0,
  Ni = null,
  Qe = null,
  uh = 0,
  Lr = 1 / 0,
  At = null,
  jo = !1,
  Bu = null,
  un = null,
  Ys = !1,
  tn = null,
  bo = 0,
  _i = 0,
  zu = null,
  mo = -1,
  go = 0;
function He() {
  return (Q & 6) !== 0 ? he() : mo !== -1 ? mo : (mo = he());
}
function cn(t) {
  return (t.mode & 1) === 0
    ? 1
    : (Q & 2) !== 0 && De !== 0
    ? De & -De
    : hw.transition !== null
    ? (go === 0 && (go = gm()), go)
    : ((t = X),
      t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Cm(t.type))),
      t);
}
function St(t, e, n, r) {
  if (50 < _i) throw ((_i = 0), (zu = null), Error(k(185)));
  fs(t, n, r),
    ((Q & 2) === 0 || t !== Ce) &&
      (t === Ce && ((Q & 2) === 0 && (Ea |= n), ge === 4 && Zt(t, De)),
      Ze(t, r),
      n === 1 &&
        Q === 0 &&
        (e.mode & 1) === 0 &&
        ((Lr = he() + 500), ga && In()));
}
function Ze(t, e) {
  var n = t.callbackNode;
  h1(t, e);
  var r = No(t, t === Ce ? De : 0);
  if (r === 0)
    n !== null && Rd(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Rd(n), e === 1))
      t.tag === 0 ? cw(Cf.bind(null, t)) : jm(Cf.bind(null, t)),
        ow(function () {
          (Q & 6) === 0 && In();
        }),
        (n = null);
    else {
      switch (ym(r)) {
        case 1:
          n = Oc;
          break;
        case 4:
          n = pm;
          break;
        case 16:
          n = Io;
          break;
        case 536870912:
          n = mm;
          break;
        default:
          n = Io;
      }
      n = zg(n, Lg.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Lg(t, e) {
  if (((mo = -1), (go = 0), (Q & 6) !== 0)) throw Error(k(327));
  var n = t.callbackNode;
  if (Tr() && t.callbackNode !== n) return null;
  var r = No(t, t === Ce ? De : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & t.expiredLanes) !== 0 || e) e = Ho(t, r);
  else {
    e = r;
    var i = Q;
    Q |= 2;
    var s = Mg();
    (Ce !== t || De !== e) && ((At = null), (Lr = he() + 500), Bn(t, e));
    do
      try {
        Aw();
        break;
      } catch (a) {
        Og(t, a);
      }
    while (1);
    qc(),
      (zo.current = s),
      (Q = i),
      pe !== null ? (e = 0) : ((Ce = null), (De = 0), (e = ge));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = pu(t)), i !== 0 && ((r = i), (e = ju(t, i)))), e === 1)
    )
      throw ((n = Gi), Bn(t, 0), Zt(t, r), Ze(t, he()), n);
    if (e === 6) Zt(t, r);
    else {
      if (
        ((i = t.current.alternate),
        (r & 30) === 0 &&
          !Dw(i) &&
          ((e = Ho(t, r)),
          e === 2 && ((s = pu(t)), s !== 0 && ((r = s), (e = ju(t, s)))),
          e === 1))
      )
        throw ((n = Gi), Bn(t, 0), Zt(t, r), Ze(t, he()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Pn(t, Qe, At);
          break;
        case 3:
          if (
            (Zt(t, r), (r & 130023424) === r && ((e = uh + 500 - he()), 10 < e))
          ) {
            if (No(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              He(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = ku(Pn.bind(null, t, Qe, At), e);
            break;
          }
          Pn(t, Qe, At);
          break;
        case 4:
          if ((Zt(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Et(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xw(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = ku(Pn.bind(null, t, Qe, At), r);
            break;
          }
          Pn(t, Qe, At);
          break;
        case 5:
          Pn(t, Qe, At);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ze(t, he()), t.callbackNode === n ? Lg.bind(null, t) : null;
}
function ju(t, e) {
  var n = Ni;
  return (
    t.current.memoizedState.isDehydrated && (Bn(t, e).flags |= 256),
    (t = Ho(t, e)),
    t !== 2 && ((e = Qe), (Qe = n), e !== null && bu(e)),
    t
  );
}
function bu(t) {
  Qe === null ? (Qe = t) : Qe.push.apply(Qe, t);
}
function Dw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!kt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Zt(t, e) {
  for (
    e &= ~lh,
      e &= ~Ea,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Et(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Cf(t) {
  if ((Q & 6) !== 0) throw Error(k(327));
  Tr();
  var e = No(t, 0);
  if ((e & 1) === 0) return Ze(t, he()), null;
  var n = Ho(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = pu(t);
    r !== 0 && ((e = r), (n = ju(t, r)));
  }
  if (n === 1) throw ((n = Gi), Bn(t, 0), Zt(t, e), Ze(t, he()), n);
  if (n === 6) throw Error(k(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Pn(t, Qe, At),
    Ze(t, he()),
    null
  );
}
function ch(t, e) {
  var n = Q;
  Q |= 1;
  try {
    return t(e);
  } finally {
    (Q = n), Q === 0 && ((Lr = he() + 500), ga && In());
  }
}
function qn(t) {
  tn !== null && tn.tag === 0 && (Q & 6) === 0 && Tr();
  var e = Q;
  Q |= 1;
  var n = ht.transition,
    r = X;
  try {
    if (((ht.transition = null), (X = 1), t)) return t();
  } finally {
    (X = r), (ht.transition = n), (Q = e), (Q & 6) === 0 && In();
  }
}
function hh() {
  (et = gr.current), ee(gr);
}
function Bn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), sw(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Kc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ao();
          break;
        case 3:
          Pr(), ee(Ye), ee(Be), eh();
          break;
        case 5:
          Zc(r);
          break;
        case 4:
          Pr();
          break;
        case 13:
          ee(ie);
          break;
        case 19:
          ee(ie);
          break;
        case 10:
          Gc(r.type._context);
          break;
        case 22:
        case 23:
          hh();
      }
      n = n.return;
    }
  if (
    ((Ce = t),
    (pe = t = hn(t.current, null)),
    (De = et = e),
    (ge = 0),
    (Gi = null),
    (lh = Ea = Qn = 0),
    (Qe = Ni = null),
    On !== null)
  ) {
    for (e = 0; e < On.length; e++)
      if (((n = On[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    On = null;
  }
  return t;
}
function Og(t, e) {
  do {
    var n = pe;
    try {
      if ((qc(), (ho.current = Bo), Vo)) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vo = !1;
      }
      if (
        ((Wn = 0),
        (ke = me = se = null),
        (Ti = !1),
        (Wi = 0),
        (ah.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Gi = e), (pe = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = De),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if ((c.mode & 1) === 0 && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = cf(o);
          if (m !== null) {
            (m.flags &= -257),
              hf(m, o, a, s, e),
              m.mode & 1 && uf(s, u, e),
              (e = m),
              (l = u);
            var y = e.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (e.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if ((e & 1) === 0) {
              uf(s, u, e), dh();
              break e;
            }
            l = Error(k(426));
          }
        } else if (te && a.mode & 1) {
          var T = cf(o);
          if (T !== null) {
            (T.flags & 65536) === 0 && (T.flags |= 256),
              hf(T, o, a, s, e),
              Wc($r(l, a));
            break e;
          }
        }
        (s = l = $r(l, a)),
          ge !== 4 && (ge = 2),
          Ni === null ? (Ni = [s]) : Ni.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = vg(s, l, e);
              tf(s, p);
              break e;
            case 1:
              a = l;
              var f = s.type,
                g = s.stateNode;
              if (
                (s.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (un === null || !un.has(g))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = wg(s, a, e);
                tf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ug(n);
    } catch (I) {
      (e = I), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Mg() {
  var t = zo.current;
  return (zo.current = Bo), t === null ? Bo : t;
}
function dh() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    Ce === null ||
      ((Qn & 268435455) === 0 && (Ea & 268435455) === 0) ||
      Zt(Ce, De);
}
function Ho(t, e) {
  var n = Q;
  Q |= 2;
  var r = Mg();
  (Ce !== t || De !== e) && ((At = null), Bn(t, e));
  do
    try {
      Rw();
      break;
    } catch (i) {
      Og(t, i);
    }
  while (1);
  if ((qc(), (Q = n), (zo.current = r), pe !== null)) throw Error(k(261));
  return (Ce = null), (De = 0), ge;
}
function Rw() {
  for (; pe !== null; ) Fg(pe);
}
function Aw() {
  for (; pe !== null && !n1(); ) Fg(pe);
}
function Fg(t) {
  var e = Bg(t.alternate, t, et);
  (t.memoizedProps = t.pendingProps),
    e === null ? Ug(t) : (pe = e),
    (ah.current = null);
}
function Ug(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), (e.flags & 32768) === 0)) {
      if (((n = Cw(n, e, et)), n !== null)) {
        pe = n;
        return;
      }
    } else {
      if (((n = Tw(n, e)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ge = 6), (pe = null);
        return;
      }
    }
    if (((e = e.sibling), e !== null)) {
      pe = e;
      return;
    }
    pe = e = t;
  } while (e !== null);
  ge === 0 && (ge = 5);
}
function Pn(t, e, n) {
  var r = X,
    i = ht.transition;
  try {
    (ht.transition = null), (X = 1), Pw(t, e, n, r);
  } finally {
    (ht.transition = i), (X = r);
  }
  return null;
}
function Pw(t, e, n, r) {
  do Tr();
  while (tn !== null);
  if ((Q & 6) !== 0) throw Error(k(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(k(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (d1(t, s),
    t === Ce && ((pe = Ce = null), (De = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Ys ||
      ((Ys = !0),
      zg(Io, function () {
        return Tr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || s)
  ) {
    (s = ht.transition), (ht.transition = null);
    var o = X;
    X = 1;
    var a = Q;
    (Q |= 4),
      (ah.current = null),
      Nw(t, n),
      Pg(n, t),
      J1(Eu),
      (_o = !!wu),
      (Eu = wu = null),
      (t.current = n),
      _w(n),
      r1(),
      (Q = a),
      (X = o),
      (ht.transition = s);
  } else t.current = n;
  if (
    (Ys && ((Ys = !1), (tn = t), (bo = i)),
    (s = t.pendingLanes),
    s === 0 && (un = null),
    o1(n.stateNode),
    Ze(t, he()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (jo) throw ((jo = !1), (t = Bu), (Bu = null), t);
  return (
    (bo & 1) !== 0 && t.tag !== 0 && Tr(),
    (s = t.pendingLanes),
    (s & 1) !== 0 ? (t === zu ? _i++ : ((_i = 0), (zu = t))) : (_i = 0),
    In(),
    null
  );
}
function Tr() {
  if (tn !== null) {
    var t = ym(bo),
      e = ht.transition,
      n = X;
    try {
      if (((ht.transition = null), (X = 16 > t ? 16 : t), tn === null))
        var r = !1;
      else {
        if (((t = tn), (tn = null), (bo = 0), (Q & 6) !== 0))
          throw Error(k(331));
        var i = Q;
        for (Q |= 4, N = t.current; N !== null; ) {
          var s = N,
            o = s.child;
          if ((N.flags & 16) !== 0) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (N = h);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        m = c.return;
                      if ((Dg(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (N = d);
                        break;
                      }
                      N = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var T = v.sibling;
                    (v.sibling = null), (v = T);
                  } while (v !== null);
                }
              }
              N = s;
            }
          }
          if ((s.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = s), (N = o);
          else
            e: for (; N !== null; ) {
              if (((s = N), (s.flags & 2048) !== 0))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ii(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (N = p);
                break e;
              }
              N = s.return;
            }
        }
        var f = t.current;
        for (N = f; N !== null; ) {
          o = N;
          var g = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && g !== null)
            (g.return = o), (N = g);
          else
            e: for (o = f; N !== null; ) {
              if (((a = N), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(9, a);
                  }
                } catch (I) {
                  ae(a, a.return, I);
                }
              if (a === o) {
                N = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (N = E);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((Q = i), In(), _t && typeof _t.onPostCommitFiberRoot == "function")
        )
          try {
            _t.onPostCommitFiberRoot(ha, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ht.transition = e);
    }
  }
  return !1;
}
function Tf(t, e, n) {
  (e = $r(n, e)),
    (e = vg(t, e, 1)),
    (t = ln(t, e, 1)),
    (e = He()),
    t !== null && (fs(t, 1, e), Ze(t, e));
}
function ae(t, e, n) {
  if (t.tag === 3) Tf(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Tf(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (t = $r(n, t)),
            (t = wg(e, t, 1)),
            (e = ln(e, t, 1)),
            (t = He()),
            e !== null && (fs(e, 1, t), Ze(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function $w(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = He()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ce === t &&
      (De & n) === n &&
      (ge === 4 || (ge === 3 && (De & 130023424) === De && 500 > he() - uh)
        ? Bn(t, 0)
        : (lh |= n)),
    Ze(t, e);
}
function Vg(t, e) {
  e === 0 &&
    ((t.mode & 1) === 0
      ? (e = 1)
      : ((e = zs), (zs <<= 1), (zs & 130023424) === 0 && (zs = 4194304)));
  var n = He();
  (t = zt(t, e)), t !== null && (fs(t, e, n), Ze(t, n));
}
function Lw(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Vg(t, n);
}
function Ow(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(e), Vg(t, n);
}
var Bg;
Bg = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Ye.current) Ge = !0;
    else {
      if ((t.lanes & n) === 0 && (e.flags & 128) === 0)
        return (Ge = !1), kw(t, e, n);
      Ge = (t.flags & 131072) !== 0;
    }
  else (Ge = !1), te && (e.flags & 1048576) !== 0 && bm(e, Lo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      po(t, e), (t = e.pendingProps);
      var i = Dr(e, Be.current);
      Cr(e, n), (i = nh(null, e, r, t, i, n));
      var s = rh();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Je(r) ? ((s = !0), Po(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Yc(e),
            (i.updater = ya),
            (e.stateNode = i),
            (i._reactInternals = e),
            Du(e, r, t, n),
            (e = Pu(null, e, r, !0, s, n)))
          : ((e.tag = 0), te && s && Hc(e), je(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (po(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Fw(r)),
          (t = yt(r, t)),
          i)
        ) {
          case 0:
            e = Au(null, e, r, t, n);
            break e;
          case 1:
            e = pf(null, e, r, t, n);
            break e;
          case 11:
            e = df(null, e, r, t, n);
            break e;
          case 14:
            e = ff(null, e, r, yt(r.type, t), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : yt(r, i)),
        Au(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : yt(r, i)),
        pf(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Cg(e), t === null)) throw Error(k(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Qm(t, e),
          Fo(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = $r(Error(k(423)), e)), (e = mf(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = $r(Error(k(424)), e)), (e = mf(t, e, r, n, i));
            break e;
          } else
            for (
              tt = an(e.stateNode.containerInfo.firstChild),
                nt = e,
                te = !0,
                wt = null,
                n = Ym(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === i)) {
            e = jt(t, e, n);
            break e;
          }
          je(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Jm(e),
        t === null && Nu(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        Su(r, i) ? (o = null) : s !== null && Su(r, s) && (e.flags |= 32),
        kg(t, e),
        je(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Nu(e), null;
    case 13:
      return Tg(t, e, n);
    case 4:
      return (
        Jc(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Ar(e, null, r, n)) : je(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : yt(r, i)),
        df(t, e, r, i, n)
      );
    case 7:
      return je(t, e, e.pendingProps, n), e.child;
    case 8:
      return je(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return je(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          Y(Oo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (kt(s.value, o)) {
            if (s.children === i.children && !Ye.current) {
              e = jt(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Mt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      _u(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  _u(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        je(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Cr(e, n),
        (i = ft(i)),
        (r = r(i)),
        (e.flags |= 1),
        je(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = yt(r, e.pendingProps)),
        (i = yt(r.type, i)),
        ff(t, e, r, i, n)
      );
    case 15:
      return Eg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : yt(r, i)),
        po(t, e),
        (e.tag = 1),
        Je(r) ? ((t = !0), Po(e)) : (t = !1),
        Cr(e, n),
        Gm(e, r, i),
        Du(e, r, i, n),
        Pu(null, e, r, !0, t, n)
      );
    case 19:
      return Ig(t, e, n);
    case 22:
      return Sg(t, e, n);
  }
  throw Error(k(156, e.tag));
};
function zg(t, e) {
  return fm(t, e);
}
function Mw(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(t, e, n, r) {
  return new Mw(t, e, n, r);
}
function fh(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Fw(t) {
  if (typeof t == "function") return fh(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Pc)) return 11;
    if (t === $c) return 14;
  }
  return 2;
}
function hn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = ct(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function yo(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) fh(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case or:
        return zn(n.children, i, s, e);
      case Ac:
        (o = 8), (i |= 8);
        break;
      case Zl:
        return (
          (t = ct(12, n, e, i | 2)), (t.elementType = Zl), (t.lanes = s), t
        );
      case eu:
        return (t = ct(13, n, e, i)), (t.elementType = eu), (t.lanes = s), t;
      case tu:
        return (t = ct(19, n, e, i)), (t.elementType = tu), (t.lanes = s), t;
      case Xp:
        return Sa(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case qp:
              o = 10;
              break e;
            case Gp:
              o = 9;
              break e;
            case Pc:
              o = 11;
              break e;
            case $c:
              o = 14;
              break e;
            case Xt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = ct(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function zn(t, e, n, r) {
  return (t = ct(7, t, r, e)), (t.lanes = n), t;
}
function Sa(t, e, n, r) {
  return (
    (t = ct(22, t, r, e)),
    (t.elementType = Xp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Pl(t, e, n) {
  return (t = ct(6, t, null, e)), (t.lanes = n), t;
}
function $l(t, e, n) {
  return (
    (e = ct(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function Uw(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fl(0)),
    (this.expirationTimes = fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ph(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new Uw(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = ct(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yc(s),
    t
  );
}
function Vw(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function jg(t) {
  if (!t) return yn;
  t = t._reactInternals;
  e: {
    if (Zn(t) !== t || t.tag !== 1) throw Error(k(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Je(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Je(n)) return zm(t, n, e);
  }
  return e;
}
function bg(t, e, n, r, i, s, o, a, l) {
  return (
    (t = ph(n, r, !0, t, i, s, o, a, l)),
    (t.context = jg(null)),
    (n = t.current),
    (r = He()),
    (i = cn(n)),
    (s = Mt(r, i)),
    (s.callback = e != null ? e : null),
    ln(n, s, i),
    (t.current.lanes = i),
    fs(t, i, r),
    Ze(t, r),
    t
  );
}
function ka(t, e, n, r) {
  var i = e.current,
    s = He(),
    o = cn(i);
  return (
    (n = jg(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Mt(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = ln(i, e, o)),
    t !== null && (St(t, i, o, s), co(t, i, o)),
    o
  );
}
function Ko(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function If(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function mh(t, e) {
  If(t, e), (t = t.alternate) && If(t, e);
}
function Bw() {
  return null;
}
var Hg =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function gh(t) {
  this._internalRoot = t;
}
Ca.prototype.render = gh.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  ka(t, e, null, null);
};
Ca.prototype.unmount = gh.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    qn(function () {
      ka(null, t, null, null);
    }),
      (e[Bt] = null);
  }
};
function Ca(t) {
  this._internalRoot = t;
}
Ca.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Em();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Jt.length && e !== 0 && e < Jt[n].priority; n++);
    Jt.splice(n, 0, t), n === 0 && km(t);
  }
};
function yh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ta(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nf() {}
function zw(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ko(o);
        s.call(u);
      };
    }
    var o = bg(e, r, t, 0, null, !1, !1, "", Nf);
    return (
      (t._reactRootContainer = o),
      (t[Bt] = o.current),
      zi(t.nodeType === 8 ? t.parentNode : t),
      qn(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ko(l);
      a.call(u);
    };
  }
  var l = ph(t, 0, !1, null, null, !1, !1, "", Nf);
  return (
    (t._reactRootContainer = l),
    (t[Bt] = l.current),
    zi(t.nodeType === 8 ? t.parentNode : t),
    qn(function () {
      ka(e, l, n, r);
    }),
    l
  );
}
function Ia(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ko(o);
        a.call(l);
      };
    }
    ka(e, o, t, i);
  } else o = zw(n, e, t, i, r);
  return Ko(o);
}
vm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = fi(e.pendingLanes);
        n !== 0 &&
          (Mc(e, n | 1),
          Ze(e, he()),
          (Q & 6) === 0 && ((Lr = he() + 500), In()));
      }
      break;
    case 13:
      qn(function () {
        var r = zt(t, 1);
        if (r !== null) {
          var i = He();
          St(r, t, 1, i);
        }
      }),
        mh(t, 1);
  }
};
Fc = function (t) {
  if (t.tag === 13) {
    var e = zt(t, 134217728);
    if (e !== null) {
      var n = He();
      St(e, t, 134217728, n);
    }
    mh(t, 134217728);
  }
};
wm = function (t) {
  if (t.tag === 13) {
    var e = cn(t),
      n = zt(t, e);
    if (n !== null) {
      var r = He();
      St(n, t, e, r);
    }
    mh(t, e);
  }
};
Em = function () {
  return X;
};
Sm = function (t, e) {
  var n = X;
  try {
    return (X = t), e();
  } finally {
    X = n;
  }
};
hu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((iu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = ma(r);
            if (!i) throw Error(k(90));
            Jp(r), iu(r, i);
          }
        }
      }
      break;
    case "textarea":
      em(t, n);
      break;
    case "select":
      (e = n.value), e != null && wr(t, !!n.multiple, e, !1);
  }
};
am = ch;
lm = qn;
var jw = { usingClientEntryPoint: !1, Events: [ms, cr, ma, sm, om, ch] },
  ui = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  bw = {
    bundleType: ui.bundleType,
    version: ui.version,
    rendererPackageName: ui.rendererPackageName,
    rendererConfig: ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = hm(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: ui.findFiberByHostInstance || Bw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Js.isDisabled && Js.supportsFiber)
    try {
      (ha = Js.inject(bw)), (_t = Js);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jw;
ot.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yh(e)) throw Error(k(200));
  return Vw(t, e, null, n);
};
ot.createRoot = function (t, e) {
  if (!yh(t)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Hg;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = ph(t, 1, !1, null, null, n, !1, r, i)),
    (t[Bt] = e.current),
    zi(t.nodeType === 8 ? t.parentNode : t),
    new gh(e)
  );
};
ot.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(k(188))
      : ((t = Object.keys(t).join(",")), Error(k(268, t)));
  return (t = hm(e)), (t = t === null ? null : t.stateNode), t;
};
ot.flushSync = function (t) {
  return qn(t);
};
ot.hydrate = function (t, e, n) {
  if (!Ta(e)) throw Error(k(200));
  return Ia(null, t, e, !0, n);
};
ot.hydrateRoot = function (t, e, n) {
  if (!yh(t)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Hg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = bg(e, null, t, 1, n != null ? n : null, i, !1, s, o)),
    (t[Bt] = e.current),
    zi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Ca(e);
};
ot.render = function (t, e, n) {
  if (!Ta(e)) throw Error(k(200));
  return Ia(null, t, e, !1, n);
};
ot.unmountComponentAtNode = function (t) {
  if (!Ta(t)) throw Error(k(40));
  return t._reactRootContainer
    ? (qn(function () {
        Ia(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Bt] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = ch;
ot.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Ta(n)) throw Error(k(200));
  if (t == null || t._reactInternals === void 0) throw Error(k(38));
  return Ia(t, e, n, !1, r);
};
ot.version = "18.2.0-next-9e3b772b8-20220608";
(function (t) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  e(), (t.exports = ot);
})(bp);
var _f = bp.exports;
(Yl.createRoot = _f.createRoot), (Yl.hydrateRoot = _f.hydrateRoot);
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xi() {
  return (
    (Xi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Xi.apply(this, arguments)
  );
}
var nn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(nn || (nn = {}));
const xf = "popstate";
function Hw(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Hu(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Yi(i);
  }
  return Qw(e, n, null, t);
}
function Kw() {
  return Math.random().toString(36).substr(2, 8);
}
function Df(t) {
  return { usr: t.state, key: t.key };
}
function Hu(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    Xi(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Kr(e) : e,
      { state: n, key: (e && e.key) || r || Kw() }
    )
  );
}
function Yi(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Kr(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function Ww(t) {
  let e =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : "unknown://unknown",
    n = typeof t == "string" ? t : Yi(t);
  return new URL(n, e);
}
function Qw(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = nn.Pop,
    l = null;
  function u() {
    (a = nn.Pop), l && l({ action: a, location: d.location });
  }
  function c(m, y) {
    a = nn.Push;
    let v = Hu(d.location, m, y);
    n && n(v, m);
    let T = Df(v),
      p = d.createHref(v);
    try {
      o.pushState(T, "", p);
    } catch {
      i.location.assign(p);
    }
    s && l && l({ action: a, location: d.location });
  }
  function h(m, y) {
    a = nn.Replace;
    let v = Hu(d.location, m, y);
    n && n(v, m);
    let T = Df(v),
      p = d.createHref(v);
    o.replaceState(T, "", p), s && l && l({ action: a, location: d.location });
  }
  let d = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(m) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(xf, u),
        (l = m),
        () => {
          i.removeEventListener(xf, u), (l = null);
        }
      );
    },
    createHref(m) {
      return e(i, m);
    },
    encodeLocation(m) {
      let y = Ww(Yi(m));
      return Xi({}, m, {
        pathname: y.pathname,
        search: y.search,
        hash: y.hash,
      });
    },
    push: c,
    replace: h,
    go(m) {
      return o.go(m);
    },
  };
  return d;
}
var Rf;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Rf || (Rf = {}));
function qw(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? Kr(e) : e,
    i = Wg(r.pathname || "/", n);
  if (i == null) return null;
  let s = Kg(t);
  Gw(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = iE(s[a], aE(i));
  return o;
}
function Kg(t, e, n, r) {
  return (
    e === void 0 && (e = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    t.forEach((i, s) => {
      let o = {
        relativePath: i.path || "",
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: s,
        route: i,
      };
      o.relativePath.startsWith("/") &&
        (Te(
          o.relativePath.startsWith(r),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (o.relativePath = o.relativePath.slice(r.length)));
      let a = dn([r, o.relativePath]),
        l = n.concat(o);
      i.children &&
        i.children.length > 0 &&
        (Te(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + a + '".')
        ),
        Kg(i.children, e, l, a)),
        !(i.path == null && !i.index) &&
          e.push({ path: a, score: nE(a, i.index), routesMeta: l });
    }),
    e
  );
}
function Gw(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : rE(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Xw = /^:\w+$/,
  Yw = 3,
  Jw = 2,
  Zw = 1,
  eE = 10,
  tE = -2,
  Af = (t) => t === "*";
function nE(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(Af) && (r += tE),
    e && (r += Jw),
    n
      .filter((i) => !Af(i))
      .reduce((i, s) => i + (Xw.test(s) ? Yw : s === "" ? Zw : eE), r)
  );
}
function rE(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function iE(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = sE(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: dn([i, c.pathname]),
      pathnameBase: hE(dn([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = dn([i, c.pathnameBase]));
  }
  return s;
}
function sE(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = oE(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      if (c === "*") {
        let d = a[h] || "";
        o = s.slice(0, s.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = lE(a[h] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function oE(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    vh(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (o, a) => (r.push(a), "([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (r.push("*"),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function aE(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      vh(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function lE(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      vh(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      t
    );
  }
}
function Wg(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function Te(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function vh(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function uE(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? Kr(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : cE(n, e)) : e,
    search: dE(r),
    hash: fE(i),
  };
}
function cE(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ll(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Qg(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function qg(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = Kr(t))
    : ((i = Xi({}, t)),
      Te(
        !i.pathname || !i.pathname.includes("?"),
        Ll("?", "pathname", "search", i)
      ),
      Te(
        !i.pathname || !i.pathname.includes("#"),
        Ll("#", "pathname", "hash", i)
      ),
      Te(!i.search || !i.search.includes("#"), Ll("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let h = e.length - 1;
    if (o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (h -= 1);
      i.pathname = d.join("/");
    }
    a = h >= 0 ? e[h] : "/";
  }
  let l = uE(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const dn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  hE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dE = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  fE = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class pE {
  constructor(e, n, r) {
    (this.status = e), (this.statusText = n || ""), (this.data = r);
  }
}
function mE(t) {
  return t instanceof pE;
}
const gE = new Set(["POST", "PUT", "PATCH", "DELETE"]);
[...gE];
var Na = { exports: {} },
  _a = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yE = A.exports,
  vE = Symbol.for("react.element"),
  wE = Symbol.for("react.fragment"),
  EE = Object.prototype.hasOwnProperty,
  SE = yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kE = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) EE.call(e, r) && !kE.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: vE,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: SE.current,
  };
}
_a.Fragment = wE;
_a.jsx = Gg;
_a.jsxs = Gg;
(function (t) {
  t.exports = _a;
})(Na);
const Wr = Na.exports.Fragment,
  w = Na.exports.jsx,
  F = Na.exports.jsxs;
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ku() {
  return (
    (Ku = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ku.apply(this, arguments)
  );
}
function CE(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
const TE = typeof Object.is == "function" ? Object.is : CE,
  { useState: IE, useEffect: NE, useLayoutEffect: _E, useDebugValue: xE } = Xl;
function DE(t, e, n) {
  const r = e(),
    [{ inst: i }, s] = IE({ inst: { value: r, getSnapshot: e } });
  return (
    _E(() => {
      (i.value = r), (i.getSnapshot = e), Ol(i) && s({ inst: i });
    }, [t, r, e]),
    NE(
      () => (
        Ol(i) && s({ inst: i }),
        t(() => {
          Ol(i) && s({ inst: i });
        })
      ),
      [t]
    ),
    xE(r),
    r
  );
}
function Ol(t) {
  const e = t.getSnapshot,
    n = t.value;
  try {
    const r = e();
    return !TE(n, r);
  } catch {
    return !0;
  }
}
function RE(t, e, n) {
  return e();
}
const AE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  PE = !AE,
  $E = PE ? RE : DE;
"useSyncExternalStore" in Xl && ((t) => t.useSyncExternalStore)(Xl);
const LE = A.exports.createContext(null),
  OE = A.exports.createContext(null),
  Xg = A.exports.createContext(null),
  wh = A.exports.createContext(null),
  xa = A.exports.createContext(null),
  Qr = A.exports.createContext({ outlet: null, matches: [] }),
  Yg = A.exports.createContext(null);
function ME(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  ys() || Te(!1);
  let { basename: r, navigator: i } = A.exports.useContext(wh),
    { hash: s, pathname: o, search: a } = Jg(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : dn([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function ys() {
  return A.exports.useContext(xa) != null;
}
function Da() {
  return ys() || Te(!1), A.exports.useContext(xa).location;
}
function Eh() {
  ys() || Te(!1);
  let { basename: t, navigator: e } = A.exports.useContext(wh),
    { matches: n } = A.exports.useContext(Qr),
    { pathname: r } = Da(),
    i = JSON.stringify(Qg(n).map((a) => a.pathnameBase)),
    s = A.exports.useRef(!1);
  return (
    A.exports.useEffect(() => {
      s.current = !0;
    }),
    A.exports.useCallback(
      function (a, l) {
        if ((l === void 0 && (l = {}), !s.current)) return;
        if (typeof a == "number") {
          e.go(a);
          return;
        }
        let u = qg(a, JSON.parse(i), r, l.relative === "path");
        t !== "/" &&
          (u.pathname = u.pathname === "/" ? t : dn([t, u.pathname])),
          (l.replace ? e.replace : e.push)(u, l.state, l);
      },
      [t, e, i, r]
    )
  );
}
function FE() {
  let { matches: t } = A.exports.useContext(Qr),
    e = t[t.length - 1];
  return e ? e.params : {};
}
function Jg(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: r } = A.exports.useContext(Qr),
    { pathname: i } = Da(),
    s = JSON.stringify(Qg(r).map((o) => o.pathnameBase));
  return A.exports.useMemo(
    () => qg(t, JSON.parse(s), i, n === "path"),
    [t, s, i, n]
  );
}
function UE(t, e) {
  ys() || Te(!1);
  let n = A.exports.useContext(Xg),
    { matches: r } = A.exports.useContext(Qr),
    i = r[r.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let o = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Da(),
    l;
  if (e) {
    var u;
    let y = typeof e == "string" ? Kr(e) : e;
    o === "/" ||
      ((u = y.pathname) == null ? void 0 : u.startsWith(o)) ||
      Te(!1),
      (l = y);
  } else l = a;
  let c = l.pathname || "/",
    h = o === "/" ? c : c.slice(o.length) || "/",
    d = qw(t, { pathname: h }),
    m = jE(
      d &&
        d.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: dn([o, y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? o : dn([o, y.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return e && m
    ? w(xa.Provider, {
        value: {
          location: Ku(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            l
          ),
          navigationType: nn.Pop,
        },
        children: m,
      })
    : m;
}
function VE() {
  let t = HE(),
    e = mE(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    s = { padding: "2px 4px", backgroundColor: r };
  return F(Wr, {
    children: [
      w("h2", { children: "Unhandled Thrown Error!" }),
      w("h3", { style: { fontStyle: "italic" }, children: e }),
      n ? w("pre", { style: i, children: n }) : null,
      w("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }),
      F("p", {
        children: [
          "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
          w("code", { style: s, children: "errorElement" }),
          " props on\xA0",
          w("code", { style: s, children: "<Route>" }),
        ],
      }),
    ],
  });
}
class BE extends A.exports.Component {
  constructor(e) {
    super(e), (this.state = { location: e.location, error: e.error });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location
      ? { error: e.error, location: e.location }
      : { error: e.error || n.error, location: n.location };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error
      ? w(Yg.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function zE(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = A.exports.useContext(LE);
  return (
    i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id),
    w(Qr.Provider, { value: e, children: r })
  );
}
function jE(t, e, n) {
  if ((e === void 0 && (e = []), t == null))
    if (n != null && n.errors) t = n.matches;
    else return null;
  let r = t,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let s = r.findIndex(
      (o) => o.route.id && (i == null ? void 0 : i[o.route.id])
    );
    s >= 0 || Te(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
  }
  return r.reduceRight((s, o, a) => {
    let l = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
      u = n ? o.route.errorElement || w(VE, {}) : null,
      c = () =>
        w(zE, {
          match: o,
          routeContext: { outlet: s, matches: e.concat(r.slice(0, a + 1)) },
          children: l ? u : o.route.element !== void 0 ? o.route.element : s,
        });
    return n && (o.route.errorElement || a === 0)
      ? w(BE, { location: n.location, component: u, error: l, children: c() })
      : c();
  }, null);
}
var Pf;
(function (t) {
  t.UseRevalidator = "useRevalidator";
})(Pf || (Pf = {}));
var Wu;
(function (t) {
  (t.UseLoaderData = "useLoaderData"),
    (t.UseActionData = "useActionData"),
    (t.UseRouteError = "useRouteError"),
    (t.UseNavigation = "useNavigation"),
    (t.UseRouteLoaderData = "useRouteLoaderData"),
    (t.UseMatches = "useMatches"),
    (t.UseRevalidator = "useRevalidator");
})(Wu || (Wu = {}));
function bE(t) {
  let e = A.exports.useContext(Xg);
  return e || Te(!1), e;
}
function HE() {
  var t;
  let e = A.exports.useContext(Yg),
    n = bE(Wu.UseRouteError),
    r = A.exports.useContext(Qr),
    i = r.matches[r.matches.length - 1];
  return (
    e ||
    (r || Te(!1),
    i.route.id || Te(!1),
    (t = n.errors) == null ? void 0 : t[i.route.id])
  );
}
function Gt(t) {
  Te(!1);
}
function KE(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = nn.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  ys() && Te(!1);
  let a = e.replace(/^\/*/, "/"),
    l = A.exports.useMemo(
      () => ({ basename: a, navigator: s, static: o }),
      [a, s, o]
    );
  typeof r == "string" && (r = Kr(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: h = "",
      state: d = null,
      key: m = "default",
    } = r,
    y = A.exports.useMemo(() => {
      let v = Wg(u, a);
      return v == null
        ? null
        : { pathname: v, search: c, hash: h, state: d, key: m };
    }, [a, u, c, h, d, m]);
  return y == null
    ? null
    : w(wh.Provider, {
        value: l,
        children: w(xa.Provider, {
          children: n,
          value: { location: y, navigationType: i },
        }),
      });
}
function WE(t) {
  let { children: e, location: n } = t,
    r = A.exports.useContext(OE),
    i = r && !e ? r.router.routes : Qu(e);
  return UE(i, n);
}
var $f;
(function (t) {
  (t[(t.pending = 0)] = "pending"),
    (t[(t.success = 1)] = "success"),
    (t[(t.error = 2)] = "error");
})($f || ($f = {}));
new Promise(() => {});
function Qu(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    A.exports.Children.forEach(t, (r, i) => {
      if (!A.exports.isValidElement(r)) return;
      if (r.type === A.exports.Fragment) {
        n.push.apply(n, Qu(r.props.children, e));
        return;
      }
      r.type !== Gt && Te(!1), !r.props.index || !r.props.children || Te(!1);
      let s = [...e, i],
        o = {
          id: r.props.id || s.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (o.children = Qu(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function QE(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function qE(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function GE(t, e) {
  return t.button === 0 && (!e || e === "_self") && !qE(t);
}
const XE = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function YE(t) {
  let { basename: e, children: n, window: r } = t,
    i = A.exports.useRef();
  i.current == null && (i.current = Hw({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = A.exports.useState({ action: s.action, location: s.location });
  return (
    A.exports.useLayoutEffect(() => s.listen(a), [s]),
    w(KE, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
const Sh = A.exports.forwardRef(function (e, n) {
  let {
      onClick: r,
      relative: i,
      reloadDocument: s,
      replace: o,
      state: a,
      target: l,
      to: u,
      preventScrollReset: c,
    } = e,
    h = QE(e, XE),
    d = ME(u, { relative: i }),
    m = JE(u, {
      replace: o,
      state: a,
      target: l,
      preventScrollReset: c,
      relative: i,
    });
  function y(v) {
    r && r(v), v.defaultPrevented || m(v);
  }
  return w("a", { ...h, href: d, onClick: s ? r : y, ref: n, target: l });
});
var Lf;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmitImpl = "useSubmitImpl"),
    (t.UseFetcher = "useFetcher");
})(Lf || (Lf = {}));
var Of;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Of || (Of = {}));
function JE(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = e === void 0 ? {} : e,
    a = Eh(),
    l = Da(),
    u = Jg(t, { relative: o });
  return A.exports.useCallback(
    (c) => {
      if (GE(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : Yi(l) === Yi(u);
        a(t, { replace: h, state: i, preventScrollReset: s, relative: o });
      }
    },
    [l, a, u, r, i, n, t, s, o]
  );
}
const kh = () =>
  w("nav", {
    className: "navbar navbar-expand-lg bg-light",
    children: F("div", {
      className: "container-fluid",
      children: [
        w("img", {
          src: "https://www.bing.com/images/blob?bcid=SKFXEhO6OOIEbQ",
          alt: "Bootstrap",
          width: "80",
        }),
        w("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: F("div", {
            className: "navbar-nav",
            children: [
              w("a", { className: "nav-link", href: "/", children: "Inicio" }),
              w("a", {
                className: "nav-link",
                href: "./students",
                children: "Participantes",
              }),
              w("a", {
                className: "nav-link",
                href: "./students/add",
                children: "Registro",
              }),
            ],
          }),
        }),
        w("img", {
          src: "https://universidadesgratuitas.com/wp-content/uploads/2020/10/universidad-utl.png",
          alt: "Bootstrap",
          width: "50",
        }),
      ],
    }),
  });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zg = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  ZE = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  ey = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          u = l ? t[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (u >> 6),
          m = u & 63;
        l || ((m = 64), o || (d = 64)), r.push(n[c], n[h], n[d], n[m]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(Zg(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : ZE(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || h == null))
          throw Error();
        const d = (s << 2) | (a >> 4);
        if ((r.push(d), u !== 64)) {
          const m = ((a << 4) & 240) | (u >> 2);
          if ((r.push(m), h !== 64)) {
            const y = ((u << 6) & 192) | h;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  },
  eS = function (t) {
    const e = Zg(t);
    return ey.encodeByteArray(e, !0);
  },
  Wo = function (t) {
    return eS(t).replace(/\./g, "");
  },
  tS = function (t) {
    try {
      return ey.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
function nS() {
  return typeof indexedDB == "object";
}
function rS() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
function iS() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sS = () => iS().__FIREBASE_DEFAULTS__,
  oS = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const t = process.env.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  aS = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && tS(t[1]);
    return e && JSON.parse(e);
  },
  ty = () => {
    try {
      return sS() || oS() || aS();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  lS = (t) => {
    var e, n;
    return (n =
      (e = ty()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  uS = (t) => {
    const e = lS(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  cS = () => {
    var t;
    return (t = ty()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hS {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dS(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: "custom", identities: {} },
      },
      t
    ),
    a = "";
  return [Wo(JSON.stringify(n)), Wo(JSON.stringify(o)), a].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fS = "FirebaseError";
class qr extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = fS),
      Object.setPrototypeOf(this, qr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, ny.prototype.create);
  }
}
class ny {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? pS(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new qr(i, a, r);
  }
}
function pS(t, e) {
  return t.replace(mS, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const mS = /\{\$([^}]+)}/g;
function qu(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Mf(s) && Mf(o)) {
      if (!qu(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Mf(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vn(t) {
  return t && t._delegate ? t._delegate : t;
}
class Ji {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $n = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gS {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new hS();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (vS(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: $n });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = $n) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = $n) {
    return this.instances.has(e);
  }
  getOptions(e = $n) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (!!r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: yS(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = $n) {
    return this.component ? (this.component.multipleInstances ? e : $n) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function yS(t) {
  return t === $n ? void 0 : t;
}
function vS(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wS {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new gS(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var q;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(q || (q = {}));
const ES = {
    debug: q.DEBUG,
    verbose: q.VERBOSE,
    info: q.INFO,
    warn: q.WARN,
    error: q.ERROR,
    silent: q.SILENT,
  },
  SS = q.INFO,
  kS = {
    [q.DEBUG]: "log",
    [q.VERBOSE]: "log",
    [q.INFO]: "info",
    [q.WARN]: "warn",
    [q.ERROR]: "error",
  },
  CS = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = kS[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class ry {
  constructor(e) {
    (this.name = e),
      (this._logLevel = SS),
      (this._logHandler = CS),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in q))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? ES[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, q.DEBUG, ...e),
      this._logHandler(this, q.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, q.VERBOSE, ...e),
      this._logHandler(this, q.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, q.INFO, ...e),
      this._logHandler(this, q.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, q.WARN, ...e),
      this._logHandler(this, q.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, q.ERROR, ...e),
      this._logHandler(this, q.ERROR, ...e);
  }
}
const TS = (t, e) => e.some((n) => t instanceof n);
let Ff, Uf;
function IS() {
  return (
    Ff ||
    (Ff = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function NS() {
  return (
    Uf ||
    (Uf = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const iy = new WeakMap(),
  Gu = new WeakMap(),
  sy = new WeakMap(),
  Ml = new WeakMap(),
  Ch = new WeakMap();
function _S(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(fn(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && iy.set(n, t);
      })
      .catch(() => {}),
    Ch.set(e, t),
    e
  );
}
function xS(t) {
  if (Gu.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  Gu.set(t, e);
}
let Xu = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Gu.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || sy.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return fn(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function DS(t) {
  Xu = t(Xu);
}
function RS(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Fl(this), e, ...n);
        return sy.set(r, e.sort ? e.sort() : [e]), fn(r);
      }
    : NS().includes(t)
    ? function (...e) {
        return t.apply(Fl(this), e), fn(iy.get(this));
      }
    : function (...e) {
        return fn(t.apply(Fl(this), e));
      };
}
function AS(t) {
  return typeof t == "function"
    ? RS(t)
    : (t instanceof IDBTransaction && xS(t),
      TS(t, IS()) ? new Proxy(t, Xu) : t);
}
function fn(t) {
  if (t instanceof IDBRequest) return _S(t);
  if (Ml.has(t)) return Ml.get(t);
  const e = AS(t);
  return e !== t && (Ml.set(t, e), Ch.set(e, t)), e;
}
const Fl = (t) => Ch.get(t);
function PS(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = fn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(fn(o.result), l.oldVersion, l.newVersion, fn(o.transaction));
      }),
    n && o.addEventListener("blocked", () => n()),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i && l.addEventListener("versionchange", () => i());
      })
      .catch(() => {}),
    a
  );
}
const $S = ["get", "getKey", "getAll", "getAllKeys", "count"],
  LS = ["put", "add", "delete", "clear"],
  Ul = new Map();
function Vf(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Ul.get(e)) return Ul.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = LS.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || $S.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let u = l.store;
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), i && l.done]))[0]
    );
  };
  return Ul.set(e, s), s;
}
DS((t) => ({
  ...t,
  get: (e, n, r) => Vf(e, n) || t.get(e, n, r),
  has: (e, n) => !!Vf(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OS {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (MS(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function MS(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Yu = "@firebase/app",
  Bf = "0.8.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gn = new ry("@firebase/app"),
  FS = "@firebase/app-compat",
  US = "@firebase/analytics-compat",
  VS = "@firebase/analytics",
  BS = "@firebase/app-check-compat",
  zS = "@firebase/app-check",
  jS = "@firebase/auth",
  bS = "@firebase/auth-compat",
  HS = "@firebase/database",
  KS = "@firebase/database-compat",
  WS = "@firebase/functions",
  QS = "@firebase/functions-compat",
  qS = "@firebase/installations",
  GS = "@firebase/installations-compat",
  XS = "@firebase/messaging",
  YS = "@firebase/messaging-compat",
  JS = "@firebase/performance",
  ZS = "@firebase/performance-compat",
  ek = "@firebase/remote-config",
  tk = "@firebase/remote-config-compat",
  nk = "@firebase/storage",
  rk = "@firebase/storage-compat",
  ik = "@firebase/firestore",
  sk = "@firebase/firestore-compat",
  ok = "firebase",
  ak = "9.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ju = "[DEFAULT]",
  lk = {
    [Yu]: "fire-core",
    [FS]: "fire-core-compat",
    [VS]: "fire-analytics",
    [US]: "fire-analytics-compat",
    [zS]: "fire-app-check",
    [BS]: "fire-app-check-compat",
    [jS]: "fire-auth",
    [bS]: "fire-auth-compat",
    [HS]: "fire-rtdb",
    [KS]: "fire-rtdb-compat",
    [WS]: "fire-fn",
    [QS]: "fire-fn-compat",
    [qS]: "fire-iid",
    [GS]: "fire-iid-compat",
    [XS]: "fire-fcm",
    [YS]: "fire-fcm-compat",
    [JS]: "fire-perf",
    [ZS]: "fire-perf-compat",
    [ek]: "fire-rc",
    [tk]: "fire-rc-compat",
    [nk]: "fire-gcs",
    [rk]: "fire-gcs-compat",
    [ik]: "fire-fst",
    [sk]: "fire-fst-compat",
    "fire-js": "fire-js",
    [ok]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qo = new Map(),
  Zu = new Map();
function uk(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Gn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function qo(t) {
  const e = t.name;
  if (Zu.has(e))
    return (
      Gn.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  Zu.set(e, t);
  for (const n of Qo.values()) uk(n, t);
  return !0;
}
function ck(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hk = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]:
      "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["no-options"]:
      "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
    ["idb-open"]:
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get"]:
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set"]:
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete"]:
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  pn = new ny("app", "Firebase", hk);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dk {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Ji("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw pn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fk = ak;
function oy(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: Ju, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw pn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = cS()), !n)) throw pn.create("no-options");
  const s = Qo.get(i);
  if (s) {
    if (qu(n, s.options) && qu(r, s.config)) return s;
    throw pn.create("duplicate-app", { appName: i });
  }
  const o = new wS(i);
  for (const l of Zu.values()) o.addComponent(l);
  const a = new dk(n, r, o);
  return Qo.set(i, a), a;
}
function pk(t = Ju) {
  const e = Qo.get(t);
  if (!e && t === Ju) return oy();
  if (!e) throw pn.create("no-app", { appName: t });
  return e;
}
function Ir(t, e, n) {
  var r;
  let i = (r = lk[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Gn.warn(a.join(" "));
    return;
  }
  qo(new Ji(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mk = "firebase-heartbeat-database",
  gk = 1,
  Zi = "firebase-heartbeat-store";
let Vl = null;
function ay() {
  return (
    Vl ||
      (Vl = PS(mk, gk, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(Zi);
          }
        },
      }).catch((t) => {
        throw pn.create("idb-open", { originalErrorMessage: t.message });
      })),
    Vl
  );
}
async function yk(t) {
  var e;
  try {
    return (await ay()).transaction(Zi).objectStore(Zi).get(ly(t));
  } catch (n) {
    if (n instanceof qr) Gn.warn(n.message);
    else {
      const r = pn.create("idb-get", {
        originalErrorMessage:
          (e = n) === null || e === void 0 ? void 0 : e.message,
      });
      Gn.warn(r.message);
    }
  }
}
async function zf(t, e) {
  var n;
  try {
    const i = (await ay()).transaction(Zi, "readwrite");
    return await i.objectStore(Zi).put(e, ly(t)), i.done;
  } catch (r) {
    if (r instanceof qr) Gn.warn(r.message);
    else {
      const i = pn.create("idb-set", {
        originalErrorMessage:
          (n = r) === null || n === void 0 ? void 0 : n.message,
      });
      Gn.warn(i.message);
    }
  }
}
function ly(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vk = 1024,
  wk = 30 * 24 * 60 * 60 * 1e3;
class Ek {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new kk(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = jf();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= wk;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = jf(),
      { heartbeatsToSend: n, unsentEntries: r } = Sk(
        this._heartbeatsCache.heartbeats
      ),
      i = Wo(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function jf() {
  return new Date().toISOString().substring(0, 10);
}
function Sk(t, e = vk) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), bf(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), bf(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class kk {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return nS()
      ? rS()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await yk(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return zf(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return zf(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function bf(t) {
  return Wo(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ck(t) {
  qo(new Ji("platform-logger", (e) => new OS(e), "PRIVATE")),
    qo(new Ji("heartbeat", (e) => new Ek(e), "PRIVATE")),
    Ir(Yu, Bf, t),
    Ir(Yu, Bf, "esm2017"),
    Ir("fire-js", "");
}
Ck("");
var Tk =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  D,
  Th = Th || {},
  M = Tk || self;
function Go() {}
function Ra(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function vs(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function Ik(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, Bl) && t[Bl]) || (t[Bl] = ++Nk)
  );
}
var Bl = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Nk = 0;
function _k(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function xk(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), t.apply(e, i);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function Ue(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (Ue = _k)
      : (Ue = xk),
    Ue.apply(null, arguments)
  );
}
function Zs(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function Pe(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.X = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.Wb = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return e.prototype[i].apply(r, o);
    });
}
function Nn() {
  (this.s = this.s), (this.o = this.o);
}
var Dk = 0;
Nn.prototype.s = !1;
Nn.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), Dk != 0) && Ik(this);
};
Nn.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const uy = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Ih(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function Hf(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Ra(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function Ve(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
Ve.prototype.h = function () {
  this.defaultPrevented = !0;
};
var Rk = (function () {
  if (!M.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    M.addEventListener("test", Go, e), M.removeEventListener("test", Go, e);
  } catch {}
  return t;
})();
function Xo(t) {
  return /^[\s\xa0]*$/.test(t);
}
var Kf = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function zl(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Aa() {
  var t = M.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function Nt(t) {
  return Aa().indexOf(t) != -1;
}
function Nh(t) {
  return Nh[" "](t), t;
}
Nh[" "] = Go;
function Ak(t) {
  var e = Lk;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var Pk = Nt("Opera"),
  Or = Nt("Trident") || Nt("MSIE"),
  cy = Nt("Edge"),
  ec = cy || Or,
  hy =
    Nt("Gecko") &&
    !(Aa().toLowerCase().indexOf("webkit") != -1 && !Nt("Edge")) &&
    !(Nt("Trident") || Nt("MSIE")) &&
    !Nt("Edge"),
  $k = Aa().toLowerCase().indexOf("webkit") != -1 && !Nt("Edge");
function dy() {
  var t = M.document;
  return t ? t.documentMode : void 0;
}
var Yo;
e: {
  var jl = "",
    bl = (function () {
      var t = Aa();
      if (hy) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (cy) return /Edge\/([\d\.]+)/.exec(t);
      if (Or) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if ($k) return /WebKit\/(\S+)/.exec(t);
      if (Pk) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((bl && (jl = bl ? bl[1] : ""), Or)) {
    var Hl = dy();
    if (Hl != null && Hl > parseFloat(jl)) {
      Yo = String(Hl);
      break e;
    }
  }
  Yo = jl;
}
var Lk = {};
function Ok() {
  return Ak(function () {
    let t = 0;
    const e = Kf(String(Yo)).split("."),
      n = Kf("9").split("."),
      r = Math.max(e.length, n.length);
    for (let o = 0; t == 0 && o < r; o++) {
      var i = e[o] || "",
        s = n[o] || "";
      do {
        if (
          ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
          (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
          i[0].length == 0 && s[0].length == 0)
        )
          break;
        (t =
          zl(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          zl(i[2].length == 0, s[2].length == 0) ||
          zl(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var tc;
if (M.document && Or) {
  var Wf = dy();
  tc = Wf || parseInt(Yo, 10) || void 0;
} else tc = void 0;
var Mk = tc;
function es(t, e) {
  if (
    (Ve.call(this, t ? t.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (hy) {
        e: {
          try {
            Nh(e.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      n == "mouseover"
        ? (e = t.fromElement)
        : n == "mouseout" && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == "string"
          ? t.pointerType
          : Fk[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && es.X.h.call(this);
  }
}
Pe(es, Ve);
var Fk = { 2: "touch", 3: "pen", 4: "mouse" };
es.prototype.h = function () {
  es.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var ws = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  Uk = 0;
function Vk(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++Uk),
    (this.ba = this.ea = !1);
}
function Pa(t) {
  (t.ba = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ha = null);
}
function _h(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function fy(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const Qf =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function py(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < Qf.length; s++)
      (n = Qf[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function $a(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
$a.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = rc(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new Vk(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function nc(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = uy(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (Pa(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function rc(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var xh = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Kl = {};
function my(t, e, n, r, i) {
  if (r && r.once) return yy(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) my(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Ah(n)),
    t && t[ws] ? t.N(e, n, vs(r) ? !!r.capture : !!r, i) : gy(t, e, n, !1, r, i)
  );
}
function gy(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = vs(i) ? !!i.capture : !!i,
    a = Rh(t);
  if ((a || (t[xh] = a = new $a(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = Bk()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    Rk || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(wy(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function Bk() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = zk;
  return t;
}
function yy(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) yy(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Ah(n)),
    t && t[ws] ? t.O(e, n, vs(r) ? !!r.capture : !!r, i) : gy(t, e, n, !0, r, i)
  );
}
function vy(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) vy(t, e[s], n, r, i);
  else
    (r = vs(r) ? !!r.capture : !!r),
      (n = Ah(n)),
      t && t[ws]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = rc(s, n, r, i)),
            -1 < n &&
              (Pa(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Rh(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = rc(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Dh(n));
}
function Dh(t) {
  if (typeof t != "number" && t && !t.ba) {
    var e = t.src;
    if (e && e[ws]) nc(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(wy(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = Rh(e))
          ? (nc(n, t), n.h == 0 && ((n.src = null), (e[xh] = null)))
          : Pa(t);
    }
  }
}
function wy(t) {
  return t in Kl ? Kl[t] : (Kl[t] = "on" + t);
}
function zk(t, e) {
  if (t.ba) t = !0;
  else {
    e = new es(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Dh(t), (t = n.call(r, e));
  }
  return t;
}
function Rh(t) {
  return (t = t[xh]), t instanceof $a ? t : null;
}
var Wl = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Ah(t) {
  return typeof t == "function"
    ? t
    : (t[Wl] ||
        (t[Wl] = function (e) {
          return t.handleEvent(e);
        }),
      t[Wl]);
}
function Ie() {
  Nn.call(this), (this.i = new $a(this)), (this.P = this), (this.I = null);
}
Pe(Ie, Nn);
Ie.prototype[ws] = !0;
Ie.prototype.removeEventListener = function (t, e, n, r) {
  vy(this, t, e, n, r);
};
function Re(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == "string")) e = new Ve(e, t);
  else if (e instanceof Ve) e.target = e.target || t;
  else {
    var i = e;
    (e = new Ve(r, t)), py(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = eo(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = eo(o, r, !0, e) && i), (i = eo(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = eo(o, r, !1, e) && i);
}
Ie.prototype.M = function () {
  if ((Ie.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) Pa(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
Ie.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
Ie.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function eo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && nc(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Ph = M.JSON.stringify;
function jk() {
  var t = ky;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class bk {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = Ey.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var Ey = new (class {
  constructor(t, e) {
    (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
})(
  () => new Hk(),
  (t) => t.reset()
);
class Hk {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function Kk(t) {
  M.setTimeout(() => {
    throw t;
  }, 0);
}
function Sy(t, e) {
  ic || Wk(), sc || (ic(), (sc = !0)), ky.add(t, e);
}
var ic;
function Wk() {
  var t = M.Promise.resolve(void 0);
  ic = function () {
    t.then(Qk);
  };
}
var sc = !1,
  ky = new bk();
function Qk() {
  for (var t; (t = jk()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      Kk(n);
    }
    var e = Ey;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  sc = !1;
}
function La(t, e) {
  Ie.call(this),
    (this.h = t || 1),
    (this.g = e || M),
    (this.j = Ue(this.lb, this)),
    (this.l = Date.now());
}
Pe(La, Ie);
D = La.prototype;
D.ca = !1;
D.R = null;
D.lb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        Re(this, "tick"),
        this.ca && ($h(this), this.start()));
  }
};
D.start = function () {
  (this.ca = !0),
    this.R ||
      ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function $h(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
D.M = function () {
  La.X.M.call(this), $h(this), delete this.g;
};
function Lh(t, e, n) {
  if (typeof t == "function") n && (t = Ue(t, n));
  else if (t && typeof t.handleEvent == "function") t = Ue(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : M.setTimeout(t, e || 0);
}
function Cy(t) {
  t.g = Lh(() => {
    (t.g = null), t.i && ((t.i = !1), Cy(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class qk extends Nn {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : Cy(this);
  }
  M() {
    super.M(),
      this.g &&
        (M.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function ts(t) {
  Nn.call(this), (this.h = t), (this.g = {});
}
Pe(ts, Nn);
var qf = [];
function Ty(t, e, n, r) {
  Array.isArray(n) || (n && (qf[0] = n.toString()), (n = qf));
  for (var i = 0; i < n.length; i++) {
    var s = my(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function Iy(t) {
  _h(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Dh(e);
    },
    t
  ),
    (t.g = {});
}
ts.prototype.M = function () {
  ts.X.M.call(this), Iy(this);
};
ts.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Oa() {
  this.g = !0;
}
Oa.prototype.Aa = function () {
  this.g = !1;
};
function Gk(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = "", a = s.split("&"), l = 0; l < a.length; l++) {
          var u = a[l].split("=");
          if (1 < u.length) {
            var c = u[0];
            u = u[1];
            var h = c.split("_");
            o =
              2 <= h.length && h[1] == "type"
                ? o + (c + "=" + u + "&")
                : o + (c + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function Xk(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function yr(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + Jk(t, n) + (r ? " " + r : "");
  });
}
function Yk(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Oa.prototype.info = function () {};
function Jk(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return Ph(n);
  } catch {
    return e;
  }
}
var er = {},
  Gf = null;
function Ma() {
  return (Gf = Gf || new Ie());
}
er.Pa = "serverreachability";
function Ny(t) {
  Ve.call(this, er.Pa, t);
}
Pe(Ny, Ve);
function ns(t) {
  const e = Ma();
  Re(e, new Ny(e));
}
er.STAT_EVENT = "statevent";
function _y(t, e) {
  Ve.call(this, er.STAT_EVENT, t), (this.stat = e);
}
Pe(_y, Ve);
function be(t) {
  const e = Ma();
  Re(e, new _y(e, t));
}
er.Qa = "timingevent";
function xy(t, e) {
  Ve.call(this, er.Qa, t), (this.size = e);
}
Pe(xy, Ve);
function Es(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return M.setTimeout(function () {
    t();
  }, e);
}
var Fa = {
    NO_ERROR: 0,
    mb: 1,
    zb: 2,
    yb: 3,
    tb: 4,
    xb: 5,
    Ab: 6,
    Ma: 7,
    TIMEOUT: 8,
    Db: 9,
  },
  Dy = {
    rb: "complete",
    Nb: "success",
    Na: "error",
    Ma: "abort",
    Fb: "ready",
    Gb: "readystatechange",
    TIMEOUT: "timeout",
    Bb: "incrementaldata",
    Eb: "progress",
    ub: "downloadprogress",
    Vb: "uploadprogress",
  };
function Oh() {}
Oh.prototype.h = null;
function Xf(t) {
  return t.h || (t.h = t.i());
}
function Ry() {}
var Ss = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Mh() {
  Ve.call(this, "d");
}
Pe(Mh, Ve);
function Fh() {
  Ve.call(this, "c");
}
Pe(Fh, Ve);
var oc;
function Ua() {}
Pe(Ua, Oh);
Ua.prototype.g = function () {
  return new XMLHttpRequest();
};
Ua.prototype.i = function () {
  return {};
};
oc = new Ua();
function ks(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new ts(this)),
    (this.O = Zk),
    (t = ec ? 125 : void 0),
    (this.T = new La(t)),
    (this.H = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
    (this.D = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.Y = -1),
    (this.I = !1),
    (this.N = 0),
    (this.L = null),
    (this.$ = this.J = this.Z = this.P = !1),
    (this.h = new Ay());
}
function Ay() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var Zk = 45e3,
  ac = {},
  Jo = {};
D = ks.prototype;
D.setTimeout = function (t) {
  this.O = t;
};
function lc(t, e, n) {
  (t.K = 1), (t.v = Ba(bt(e))), (t.s = n), (t.P = !0), Py(t, null);
}
function Py(t, e) {
  (t.F = Date.now()), Cs(t), (t.A = bt(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    By(n.i, "t", r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new Ay()),
    (t.g = av(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new qk(Ue(t.La, t, t.g), t.N)),
    Ty(t.S, t.g, "readystatechange", t.ib),
    (e = t.H ? fy(t.H) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.da(t.A, t.u, null, e)),
    ns(),
    Gk(t.j, t.u, t.A, t.m, t.U, t.s);
}
D.ib = function (t) {
  t = t.target;
  const e = this.L;
  e && Ot(t) == 3 ? e.l() : this.La(t);
};
D.La = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = Ot(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (
          !(3 > c) &&
          (c != 3 || ec || (this.g && (this.h.h || this.g.fa() || ep(this.g))))
        ) {
          this.I || c != 4 || e == 7 || (e == 8 || 0 >= h ? ns(3) : ns(2)),
            Va(this);
          var n = this.g.aa();
          this.Y = n;
          t: if ($y(this)) {
            var r = ep(this.g);
            t = "";
            var i = r.length,
              s = Ot(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Fn(this), xi(this);
                var o = "";
                break t;
              }
              this.h.i = new M.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (
            ((this.i = n == 200),
            Xk(this.j, this.u, this.A, this.m, this.U, c, n),
            this.i)
          ) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g
                      ? l.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !Xo(a)
                  ) {
                    var u = a;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                yr(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  uc(this, n);
              else {
                (this.i = !1), (this.o = 3), be(12), Fn(this), xi(this);
                break e;
              }
            }
            this.P
              ? (Ly(this, c, o),
                ec &&
                  this.i &&
                  c == 3 &&
                  (Ty(this.S, this.T, "tick", this.hb), this.T.start()))
              : (yr(this.j, this.m, o, null), uc(this, o)),
              c == 4 && Fn(this),
              this.i &&
                !this.I &&
                (c == 4 ? rv(this.l, this) : ((this.i = !1), Cs(this)));
          } else
            n == 400 && 0 < o.indexOf("Unknown SID")
              ? ((this.o = 3), be(12))
              : ((this.o = 0), be(13)),
              Fn(this),
              xi(this);
        }
      }
  } catch {
  } finally {
  }
};
function $y(t) {
  return t.g ? t.u == "GET" && t.K != 2 && t.l.Da : !1;
}
function Ly(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = eC(t, n)), i == Jo)) {
      e == 4 && ((t.o = 4), be(14), (r = !1)),
        yr(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == ac) {
      (t.o = 4), be(15), yr(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else yr(t.j, t.m, i, null), uc(t, i);
  $y(t) && i != Jo && i != ac && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), be(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.$ &&
        ((t.$ = !0),
        (e = t.l),
        e.g == t &&
          e.$ &&
          !e.K &&
          (e.j.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          Hh(e),
          (e.K = !0),
          be(11)))
      : (yr(t.j, t.m, n, "[Invalid Chunked Response]"), Fn(t), xi(t));
}
D.hb = function () {
  if (this.g) {
    var t = Ot(this.g),
      e = this.g.fa();
    this.C < e.length &&
      (Va(this), Ly(this, t, e), this.i && t != 4 && Cs(this));
  }
};
function eC(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Jo
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? ac
        : ((r += 1),
          r + n > e.length ? Jo : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
D.cancel = function () {
  (this.I = !0), Fn(this);
};
function Cs(t) {
  (t.V = Date.now() + t.O), Oy(t, t.O);
}
function Oy(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = Es(Ue(t.gb, t), e);
}
function Va(t) {
  t.B && (M.clearTimeout(t.B), (t.B = null));
}
D.gb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (Yk(this.j, this.A),
      this.K != 2 && (ns(), be(17)),
      Fn(this),
      (this.o = 2),
      xi(this))
    : Oy(this, this.V - t);
};
function xi(t) {
  t.l.G == 0 || t.I || rv(t.l, t);
}
function Fn(t) {
  Va(t);
  var e = t.L;
  e && typeof e.na == "function" && e.na(),
    (t.L = null),
    $h(t.T),
    Iy(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function uc(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || cc(n.h, t))) {
      if (!t.J && cc(n.h, t) && n.G == 3) {
        try {
          var r = n.Fa.g.parse(e);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.F + 3e3 < t.F) ta(n), ba(n);
                else break e;
              bh(n), be(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = Es(Ue(n.cb, n), 6e3));
          if (1 >= by(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else Un(n, 11);
      } else if (((t.J || n.g == t) && ta(n), !Xo(e)))
        for (i = n.Fa.g.parse(e), e = 0; e < i.length; e++) {
          let u = i[e];
          if (((n.T = u[0]), (u = u[1]), n.G == 2))
            if (u[0] == "c") {
              (n.I = u[1]), (n.ka = u[2]);
              const c = u[3];
              c != null && ((n.ma = c), n.j.info("VER=" + n.ma));
              const h = u[4];
              h != null && ((n.Ca = h), n.j.info("SVER=" + n.Ca));
              const d = u[5];
              d != null &&
                typeof d == "number" &&
                0 < d &&
                ((r = 1.5 * d),
                (n.J = r),
                n.j.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const m = t.g;
              if (m) {
                const y = m.g
                  ? m.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (y) {
                  var s = r.h;
                  s.g ||
                    (y.indexOf("spdy") == -1 &&
                      y.indexOf("quic") == -1 &&
                      y.indexOf("h2") == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (Uh(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const v = m.g
                    ? m.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  v && ((r.za = v), ne(r.F, r.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ &&
                  ((n.P = Date.now() - t.F),
                  n.j.info("Handshake RTT: " + n.P + "ms")),
                (r = n);
              var o = t;
              if (((r.sa = ov(r, r.H ? r.ka : null, r.V)), o.J)) {
                Hy(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (Va(a), Cs(a)), (r.g = o);
              } else tv(r);
              0 < n.i.length && Ha(n);
            } else (u[0] != "stop" && u[0] != "close") || Un(n, 7);
          else
            n.G == 3 &&
              (u[0] == "stop" || u[0] == "close"
                ? u[0] == "stop"
                  ? Un(n, 7)
                  : jh(n)
                : u[0] != "noop" && n.l && n.l.wa(u),
              (n.A = 0));
        }
    }
    ns(4);
  } catch {}
}
function tC(t) {
  if (t.W && typeof t.W == "function") return t.W();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (Ra(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function nC(t) {
  if (t.oa && typeof t.oa == "function") return t.oa();
  if (!t.W || typeof t.W != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (Ra(t) || typeof t == "string") {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const r in t) e[n++] = r;
      return e;
    }
  }
}
function My(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (Ra(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = nC(t), r = tC(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var Fy = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function rC(t, e) {
  if (t) {
    t = t.split("&");
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = t[n].substring(0, r);
        i = t[n].substring(r + 1);
      } else s = t[n];
      e(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function jn(t, e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof jn)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      Zo(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      ea(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new rs();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Yf(this, n),
      (this.o = t.o);
  } else
    t && (n = String(t).match(Fy))
      ? ((this.h = !!e),
        Zo(this, n[1] || "", !0),
        (this.s = mi(n[2] || "")),
        (this.g = mi(n[3] || "", !0)),
        ea(this, n[4]),
        (this.l = mi(n[5] || "", !0)),
        Yf(this, n[6] || "", !0),
        (this.o = mi(n[7] || "")))
      : ((this.h = !!e), (this.i = new rs(null, this.h)));
}
jn.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(gi(e, Jf, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(gi(e, Jf, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(gi(n, n.charAt(0) == "/" ? oC : sC, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", gi(n, lC)),
    t.join("")
  );
};
function bt(t) {
  return new jn(t);
}
function Zo(t, e, n) {
  (t.j = n ? mi(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function ea(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Yf(t, e, n) {
  e instanceof rs
    ? ((t.i = e), uC(t.i, t.h))
    : (n || (e = gi(e, aC)), (t.i = new rs(e, t.h)));
}
function ne(t, e, n) {
  t.i.set(e, n);
}
function Ba(t) {
  return (
    ne(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  );
}
function mi(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function gi(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, iC)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function iC(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var Jf = /[#\/\?@]/g,
  sC = /[#\?:]/g,
  oC = /[#\?]/g,
  aC = /[#\?@]/g,
  lC = /#/g;
function rs(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function _n(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      rC(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
D = rs.prototype;
D.add = function (t, e) {
  _n(this), (this.i = null), (t = Gr(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Uy(t, e) {
  _n(t),
    (e = Gr(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function Vy(t, e) {
  return _n(t), (e = Gr(t, e)), t.g.has(e);
}
D.forEach = function (t, e) {
  _n(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
D.oa = function () {
  _n(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
D.W = function (t) {
  _n(this);
  let e = [];
  if (typeof t == "string")
    Vy(this, t) && (e = e.concat(this.g.get(Gr(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
D.set = function (t, e) {
  return (
    _n(this),
    (this.i = null),
    (t = Gr(this, t)),
    Vy(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
D.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function By(t, e, n) {
  Uy(t, e),
    0 < n.length && ((t.i = null), t.g.set(Gr(t, e), Ih(n)), (t.h += n.length));
}
D.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    const s = encodeURIComponent(String(r)),
      o = this.W(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), t.push(i);
    }
  }
  return (this.i = t.join("&"));
};
function Gr(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function uC(t, e) {
  e &&
    !t.j &&
    (_n(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Uy(this, r), By(this, i, n));
    }, t)),
    (t.j = e);
}
var cC = class {
  constructor(t, e) {
    (this.h = t), (this.g = e);
  }
};
function zy(t) {
  (this.l = t || hC),
    M.PerformanceNavigationTiming
      ? ((t = M.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(M.g && M.g.Ga && M.g.Ga() && M.g.Ga().$b)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var hC = 10;
function jy(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function by(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function cc(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Uh(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function Hy(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
zy.prototype.cancel = function () {
  if (((this.i = Ky(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Ky(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return Ih(t.i);
}
function Vh() {}
Vh.prototype.stringify = function (t) {
  return M.JSON.stringify(t, void 0);
};
Vh.prototype.parse = function (t) {
  return M.JSON.parse(t, void 0);
};
function dC() {
  this.g = new Vh();
}
function fC(t, e, n) {
  const r = n || "";
  try {
    My(t, function (i, s) {
      let o = i;
      vs(i) && (o = Ph(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function pC(t, e) {
  const n = new Oa();
  if (M.Image) {
    const r = new Image();
    (r.onload = Zs(to, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = Zs(to, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = Zs(to, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = Zs(to, n, r, "TestLoadImage: timeout", !1, e)),
      M.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function to(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function Ts(t) {
  (this.l = t.ac || null), (this.j = t.jb || !1);
}
Pe(Ts, Oh);
Ts.prototype.g = function () {
  return new za(this.l, this.j);
};
Ts.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function za(t, e) {
  Ie.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Bh),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
Pe(za, Ie);
var Bh = 0;
D = za.prototype;
D.open = function (t, e) {
  if (this.readyState != Bh)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), is(this);
};
D.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  t && (e.body = t),
    (this.D || M)
      .fetch(new Request(this.B, e))
      .then(this.Wa.bind(this), this.ga.bind(this));
};
D.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), Is(this)),
    (this.readyState = Bh);
};
D.Wa = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      is(this)),
    this.g && ((this.readyState = 3), is(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if (typeof M.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      Wy(this);
    } else t.text().then(this.Va.bind(this), this.ga.bind(this));
};
function Wy(t) {
  t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t));
}
D.Ta = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? Is(this) : is(this), this.readyState == 3 && Wy(this);
  }
};
D.Va = function (t) {
  this.g && ((this.response = this.responseText = t), Is(this));
};
D.Ua = function (t) {
  this.g && ((this.response = t), Is(this));
};
D.ga = function () {
  this.g && Is(this);
};
function Is(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), is(t);
}
D.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
D.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
D.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function is(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(za.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var mC = M.JSON.parse;
function le(t) {
  Ie.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.H = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.F = this.v = this.D = !1),
    (this.B = 0),
    (this.A = null),
    (this.J = Qy),
    (this.K = this.L = !1);
}
Pe(le, Ie);
var Qy = "",
  gC = /^https?$/i,
  yC = ["POST", "PUT"];
D = le.prototype;
D.Ka = function (t) {
  this.L = t;
};
D.da = function (t, e, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.H +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.H = t),
    (this.j = ""),
    (this.m = 0),
    (this.D = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : oc.g()),
    (this.C = this.u ? Xf(this.u) : Xf(oc)),
    (this.g.onreadystatechange = Ue(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    Zf(this, s);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = M.FormData && t instanceof M.FormData),
    !(0 <= uy(yC, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    Xy(this),
      0 < this.B &&
        ((this.K = vC(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = Ue(this.qa, this)))
          : (this.A = Lh(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Zf(this, s);
  }
};
function vC(t) {
  return Or && Ok() && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
D.qa = function () {
  typeof Th < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    Re(this, "timeout"),
    this.abort(8));
};
function Zf(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    qy(t),
    ja(t);
}
function qy(t) {
  t.D || ((t.D = !0), Re(t, "complete"), Re(t, "error"));
}
D.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    Re(this, "complete"),
    Re(this, "abort"),
    ja(this));
};
D.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    ja(this, !0)),
    le.X.M.call(this);
};
D.Ha = function () {
  this.s || (this.F || this.v || this.l ? Gy(this) : this.fb());
};
D.fb = function () {
  Gy(this);
};
function Gy(t) {
  if (t.h && typeof Th < "u" && (!t.C[1] || Ot(t) != 4 || t.aa() != 2)) {
    if (t.v && Ot(t) == 4) Lh(t.Ha, 0, t);
    else if ((Re(t, "readystatechange"), Ot(t) == 4)) {
      t.h = !1;
      try {
        const a = t.aa();
        e: switch (a) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var r;
          if ((r = a === 0)) {
            var i = String(t.H).match(Fy)[1] || null;
            if (!i && M.self && M.self.location) {
              var s = M.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !gC.test(i ? i.toLowerCase() : "");
          }
          n = r;
        }
        if (n) Re(t, "complete"), Re(t, "success");
        else {
          t.m = 6;
          try {
            var o = 2 < Ot(t) ? t.g.statusText : "";
          } catch {
            o = "";
          }
          (t.j = o + " [" + t.aa() + "]"), qy(t);
        }
      } finally {
        ja(t);
      }
    }
  }
}
function ja(t, e) {
  if (t.g) {
    Xy(t);
    const n = t.g,
      r = t.C[0] ? Go : null;
    (t.g = null), (t.C = null), e || Re(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function Xy(t) {
  t.g && t.K && (t.g.ontimeout = null),
    t.A && (M.clearTimeout(t.A), (t.A = null));
}
function Ot(t) {
  return t.g ? t.g.readyState : 0;
}
D.aa = function () {
  try {
    return 2 < Ot(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
D.fa = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
D.Sa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), mC(e);
  }
};
function ep(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.J) {
      case Qy:
      case "text":
        return t.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
D.Ea = function () {
  return this.m;
};
D.Oa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function Yy(t) {
  let e = "";
  return (
    _h(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function zh(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = Yy(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : ne(t, e, n));
}
function ci(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function Jy(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new Oa()),
    (this.ka =
      this.sa =
      this.F =
      this.V =
      this.g =
      this.za =
      this.D =
      this.ia =
      this.o =
      this.S =
      this.s =
        null),
    (this.ab = this.U = 0),
    (this.Za = ci("failFast", !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Xa = ci("baseRetryDelayMs", 5e3, t)),
    (this.bb = ci("retryDelaySeedMs", 1e4, t)),
    (this.$a = ci("forwardChannelMaxRetries", 2, t)),
    (this.ta = ci("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Zb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ""),
    (this.h = new zy(t && t.concurrentRequestLimit)),
    (this.Fa = new dC()),
    (this.O = (t && t.fastHandshake) || !1),
    (this.N = (t && t.encodeInitMessageHeaders) || !1),
    this.O && this.N && (this.N = !1),
    (this.Ya = (t && t.Xb) || !1),
    t && t.Aa && this.j.Aa(),
    t && t.forceLongPolling && (this.Y = !1),
    (this.$ = (!this.O && this.Y && t && t.detectBufferingProxy) || !1),
    (this.ja = void 0),
    (this.P = 0),
    (this.K = !1),
    (this.la = this.B = null);
}
D = Jy.prototype;
D.ma = 8;
D.G = 1;
function jh(t) {
  if ((Zy(t), t.G == 3)) {
    var e = t.U++,
      n = bt(t.F);
    ne(n, "SID", t.I),
      ne(n, "RID", e),
      ne(n, "TYPE", "terminate"),
      Ns(t, n),
      (e = new ks(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = Ba(bt(n))),
      (n = !1),
      M.navigator &&
        M.navigator.sendBeacon &&
        (n = M.navigator.sendBeacon(e.v.toString(), "")),
      !n && M.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = av(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      Cs(e);
  }
  sv(t);
}
function ba(t) {
  t.g && (Hh(t), t.g.cancel(), (t.g = null));
}
function Zy(t) {
  ba(t),
    t.u && (M.clearTimeout(t.u), (t.u = null)),
    ta(t),
    t.h.cancel(),
    t.m && (typeof t.m == "number" && M.clearTimeout(t.m), (t.m = null));
}
function Ha(t) {
  jy(t.h) || t.m || ((t.m = !0), Sy(t.Ja, t), (t.C = 0));
}
function wC(t, e) {
  return by(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Za ? 0 : t.$a)
    ? !1
    : ((t.m = Es(Ue(t.Ja, t, e), iv(t, t.C))), t.C++, !0);
}
D.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new ks(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = fy(s)), py(s, this.S)) : (s = this.S)),
          this.o !== null || this.N || ((i.H = s), (s = null)),
          this.O)
        )
          e: {
            for (var e = 0, n = 0; n < this.i.length; n++) {
              t: {
                var r = this.i[n];
                if (
                  "__data__" in r.g &&
                  ((r = r.g.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((e += r), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.i.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = ev(this, i, e)),
          (n = bt(this.F)),
          ne(n, "RID", t),
          ne(n, "CVER", 22),
          this.D && ne(n, "X-HTTP-Session-Id", this.D),
          Ns(this, n),
          s &&
            (this.N
              ? (e = "headers=" + encodeURIComponent(String(Yy(s))) + "&" + e)
              : this.o && zh(n, this.o, s)),
          Uh(this.h, i),
          this.Ya && ne(n, "TYPE", "init"),
          this.O
            ? (ne(n, "$req", e),
              ne(n, "SID", "null"),
              (i.Z = !0),
              lc(i, n, null))
            : lc(i, n, e),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (t ? tp(this, t) : this.i.length == 0 || jy(this.h) || tp(this));
};
function tp(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = bt(t.F);
  ne(r, "SID", t.I),
    ne(r, "RID", n),
    ne(r, "AID", t.T),
    Ns(t, r),
    t.o && t.s && zh(r, t.o, t.s),
    (n = new ks(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = ev(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())
    ),
    Uh(t.h, n),
    lc(n, r, e);
}
function Ns(t, e) {
  t.ia &&
    _h(t.ia, function (n, r) {
      ne(e, r, n);
    }),
    t.l &&
      My({}, function (n, r) {
        ne(e, r, n);
      });
}
function ev(t, e, n) {
  n = Math.min(t.i.length, n);
  var r = t.l ? Ue(t.l.Ra, t.l, t) : null;
  e: {
    var i = t.i;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].h), o.push("ofs=" + s))
          : (s = 0)
        : o.push("ofs=" + s);
      let a = !0;
      for (let l = 0; l < n; l++) {
        let u = i[l].h;
        const c = i[l].g;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[l].h - 100)), (a = !1);
        else
          try {
            fC(c, o, "req" + u + "_");
          } catch {
            r && r(c);
          }
      }
      if (a) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (t = t.i.splice(0, n)), (e.D = t), r;
}
function tv(t) {
  t.g || t.u || ((t.Z = 1), Sy(t.Ia, t), (t.A = 0));
}
function bh(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.Z++, (t.u = Es(Ue(t.Ia, t), iv(t, t.A))), t.A++, !0);
}
D.Ia = function () {
  if (
    ((this.u = null),
    nv(this),
    this.$ && !(this.K || this.g == null || 0 >= this.P))
  ) {
    var t = 2 * this.P;
    this.j.info("BP detection timer enabled: " + t),
      (this.B = Es(Ue(this.eb, this), t));
  }
};
D.eb = function () {
  this.B &&
    ((this.B = null),
    this.j.info("BP detection timeout reached."),
    this.j.info("Buffering proxy detected and switch to long-polling!"),
    (this.L = !1),
    (this.K = !0),
    be(10),
    ba(this),
    nv(this));
};
function Hh(t) {
  t.B != null && (M.clearTimeout(t.B), (t.B = null));
}
function nv(t) {
  (t.g = new ks(t, t.j, "rpc", t.Z)),
    t.o === null && (t.g.H = t.s),
    (t.g.N = 0);
  var e = bt(t.sa);
  ne(e, "RID", "rpc"),
    ne(e, "SID", t.I),
    ne(e, "CI", t.L ? "0" : "1"),
    ne(e, "AID", t.T),
    ne(e, "TYPE", "xmlhttp"),
    Ns(t, e),
    t.o && t.s && zh(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = Ba(bt(e))), (n.s = null), (n.P = !0), Py(n, t);
}
D.cb = function () {
  this.v != null && ((this.v = null), ba(this), bh(this), be(19));
};
function ta(t) {
  t.v != null && (M.clearTimeout(t.v), (t.v = null));
}
function rv(t, e) {
  var n = null;
  if (t.g == e) {
    ta(t), Hh(t), (t.g = null);
    var r = 2;
  } else if (cc(t.h, e)) (n = e.D), Hy(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = Ma()), Re(r, new xy(r, n)), Ha(t);
      } else tv(t);
    else if (
      ((i = e.o),
      i == 3 ||
        (i == 0 && 0 < t.pa) ||
        !((r == 1 && wC(t, e)) || (r == 2 && bh(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          Un(t, 5);
          break;
        case 4:
          Un(t, 10);
          break;
        case 3:
          Un(t, 6);
          break;
        default:
          Un(t, 2);
      }
  }
}
function iv(t, e) {
  let n = t.Xa + Math.floor(Math.random() * t.bb);
  return t.l || (n *= 2), n * e;
}
function Un(t, e) {
  if ((t.j.info("Error code " + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = Ue(t.kb, t);
    n ||
      ((n = new jn("//www.google.com/images/cleardot.gif")),
      (M.location && M.location.protocol == "http") || Zo(n, "https"),
      Ba(n)),
      pC(n.toString(), r);
  } else be(2);
  (t.G = 0), t.l && t.l.va(e), sv(t), Zy(t);
}
D.kb = function (t) {
  t
    ? (this.j.info("Successfully pinged google.com"), be(2))
    : (this.j.info("Failed to ping google.com"), be(1));
};
function sv(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Ky(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (Hf(t.la, e),
      Hf(t.la, t.i),
      (t.h.i.length = 0),
      Ih(t.i),
      (t.i.length = 0)),
      t.l.ua();
  }
}
function ov(t, e, n) {
  var r = n instanceof jn ? bt(n) : new jn(n, void 0);
  if (r.g != "") e && (r.g = e + "." + r.g), ea(r, r.m);
  else {
    var i = M.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new jn(null, void 0);
    r && Zo(s, r), e && (s.g = e), i && ea(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.D),
    (e = t.za),
    n && e && ne(r, n, e),
    ne(r, "VER", t.ma),
    Ns(t, r),
    r
  );
}
function av(t, e, n) {
  if (e && !t.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Da && !t.ra ? new le(new Ts({ jb: !0 })) : new le(t.ra)),
    e.Ka(t.H),
    e
  );
}
function lv() {}
D = lv.prototype;
D.xa = function () {};
D.wa = function () {};
D.va = function () {};
D.ua = function () {};
D.Ra = function () {};
function na() {
  if (Or && !(10 <= Number(Mk)))
    throw Error("Environmental error: no available transport.");
}
na.prototype.g = function (t, e) {
  return new st(t, e);
};
function st(t, e) {
  Ie.call(this),
    (this.g = new Jy(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.ya &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.ya)
        : (t = { "X-WebChannel-Client-Profile": e.ya })),
    (this.g.S = t),
    (t = e && e.Yb) && !Xo(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Xo(e) &&
      ((this.g.D = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Xr(this));
}
Pe(st, Ie);
st.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  be(0),
    (t.V = e),
    (t.ia = n || {}),
    (t.L = t.Y),
    (t.F = ov(t, null, t.V)),
    Ha(t);
};
st.prototype.close = function () {
  jh(this.g);
};
st.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Ph(t)), (t = n));
  e.i.push(new cC(e.ab++, t)), e.G == 3 && Ha(e);
};
st.prototype.M = function () {
  (this.g.l = null),
    delete this.j,
    jh(this.g),
    delete this.g,
    st.X.M.call(this);
};
function uv(t) {
  Mh.call(this);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e);
  } else this.data = t;
}
Pe(uv, Mh);
function cv() {
  Fh.call(this), (this.status = 1);
}
Pe(cv, Fh);
function Xr(t) {
  this.g = t;
}
Pe(Xr, lv);
Xr.prototype.xa = function () {
  Re(this.g, "a");
};
Xr.prototype.wa = function (t) {
  Re(this.g, new uv(t));
};
Xr.prototype.va = function (t) {
  Re(this.g, new cv());
};
Xr.prototype.ua = function () {
  Re(this.g, "b");
};
na.prototype.createWebChannel = na.prototype.g;
st.prototype.send = st.prototype.u;
st.prototype.open = st.prototype.m;
st.prototype.close = st.prototype.close;
Fa.NO_ERROR = 0;
Fa.TIMEOUT = 8;
Fa.HTTP_ERROR = 6;
Dy.COMPLETE = "complete";
Ry.EventType = Ss;
Ss.OPEN = "a";
Ss.CLOSE = "b";
Ss.ERROR = "c";
Ss.MESSAGE = "d";
Ie.prototype.listen = Ie.prototype.N;
le.prototype.listenOnce = le.prototype.O;
le.prototype.getLastError = le.prototype.Oa;
le.prototype.getLastErrorCode = le.prototype.Ea;
le.prototype.getStatus = le.prototype.aa;
le.prototype.getResponseJson = le.prototype.Sa;
le.prototype.getResponseText = le.prototype.fa;
le.prototype.send = le.prototype.da;
le.prototype.setWithCredentials = le.prototype.Ka;
var EC = function () {
    return new na();
  },
  SC = function () {
    return Ma();
  },
  Ql = Fa,
  kC = Dy,
  CC = er,
  np = {
    sb: 0,
    vb: 1,
    wb: 2,
    Pb: 3,
    Ub: 4,
    Rb: 5,
    Sb: 6,
    Qb: 7,
    Ob: 8,
    Tb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Mb: 12,
    Ib: 13,
    Jb: 14,
    Hb: 15,
    Kb: 16,
    Lb: 17,
    ob: 18,
    nb: 19,
    pb: 20,
  },
  TC = Ts,
  no = Ry,
  IC = le;
const rp = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oe {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(Oe.UNAUTHENTICATED = new Oe(null)),
  (Oe.GOOGLE_CREDENTIALS = new Oe("google-credentials-uid")),
  (Oe.FIRST_PARTY = new Oe("first-party-uid")),
  (Oe.MOCK_USER = new Oe("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Yr = "9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xn = new ry("@firebase/firestore");
function ip() {
  return Xn.logLevel;
}
function P(t, ...e) {
  if (Xn.logLevel <= q.DEBUG) {
    const n = e.map(Kh);
    Xn.debug(`Firestore (${Yr}): ${t}`, ...n);
  }
}
function Ht(t, ...e) {
  if (Xn.logLevel <= q.ERROR) {
    const n = e.map(Kh);
    Xn.error(`Firestore (${Yr}): ${t}`, ...n);
  }
}
function hc(t, ...e) {
  if (Xn.logLevel <= q.WARN) {
    const n = e.map(Kh);
    Xn.warn(`Firestore (${Yr}): ${t}`, ...n);
  }
}
function Kh(t) {
  if (typeof t == "string") return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function U(t = "Unexpected state") {
  const e = `FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Ht(e), new Error(e));
}
function J(t, e) {
  t || U();
}
function V(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class L extends qr {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ft {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hv {
  constructor(e, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class NC {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Oe.UNAUTHENTICATED));
  }
  shutdown() {}
}
class _C {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class xC {
  constructor(e) {
    (this.t = e),
      (this.currentUser = Oe.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (l) => (this.i !== r ? ((r = this.i), n(l)) : Promise.resolve());
    let s = new Ft();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Ft()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const l = s;
        e.enqueueRetryable(async () => {
          await l.promise, await i(this.currentUser);
        });
      },
      a = (l) => {
        P("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = l),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((l) => a(l)),
      setTimeout(() => {
        if (!this.auth) {
          const l = this.t.getImmediate({ optional: !0 });
          l
            ? a(l)
            : (P("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new Ft()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (P(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                ? (J(typeof r.accessToken == "string"),
                  new hv(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return J(e === null || typeof e == "string"), new Oe(e);
  }
}
class DC {
  constructor(e, n, r, i) {
    (this.h = e),
      (this.l = n),
      (this.m = r),
      (this.g = i),
      (this.type = "FirstParty"),
      (this.user = Oe.FIRST_PARTY),
      (this.p = new Map());
  }
  I() {
    return this.g
      ? this.g()
      : (J(
          !(
            typeof this.h != "object" ||
            this.h === null ||
            !this.h.auth ||
            !this.h.auth.getAuthHeaderValueForFirstParty
          )
        ),
        this.h.auth.getAuthHeaderValueForFirstParty([]));
  }
  get headers() {
    this.p.set("X-Goog-AuthUser", this.l);
    const e = this.I();
    return (
      e && this.p.set("Authorization", e),
      this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m),
      this.p
    );
  }
}
class RC {
  constructor(e, n, r, i) {
    (this.h = e), (this.l = n), (this.m = r), (this.g = i);
  }
  getToken() {
    return Promise.resolve(new DC(this.h, this.l, this.m, this.g));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Oe.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class AC {
  constructor(e) {
    (this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class PC {
  constructor(e) {
    (this.T = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        P(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        P(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      P("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s
            ? i(s)
            : P("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (J(typeof n.token == "string"),
                  (this.A = n.token),
                  new AC(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $C(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dv {
  static R() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = $C(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function G(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Mr(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ye {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new L(
        S.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new L(
        S.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new L(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new L(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return ye.fromMillis(Date.now());
  }
  static fromDate(e) {
    return ye.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new ye(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? G(this.nanoseconds, e.nanoseconds)
      : G(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new j(e);
  }
  static min() {
    return new j(new ye(0, 0));
  }
  static max() {
    return new j(new ye(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && U(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && U(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return ss.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof ss
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class re extends ss {
  construct(e, n, r) {
    return new re(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new L(
          S.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new re(n);
  }
  static emptyPath() {
    return new re([]);
  }
}
const LC = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Fe extends ss {
  construct(e, n, r) {
    return new Fe(e, n, r);
  }
  static isValidIdentifier(e) {
    return LC.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          Fe.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new Fe(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new L(
          S.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === "\\") {
        if (i + 1 === e.length)
          throw new L(
            S.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`")
          throw new L(
            S.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e
          );
        (r += l), (i += 2);
      } else
        a === "`"
          ? ((o = !o), i++)
          : a !== "." || o
          ? ((r += a), i++)
          : (s(), i++);
    }
    if ((s(), o))
      throw new L(S.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new Fe(n);
  }
  static emptyPath() {
    return new Fe([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new O(re.fromString(e));
  }
  static fromName(e) {
    return new O(re.fromString(e).popFirst(5));
  }
  static empty() {
    return new O(re.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && re.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return re.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new O(new re(e.slice()));
  }
}
function OC(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = j.fromTimestamp(r === 1e9 ? new ye(n + 1, 0) : new ye(n, r));
  return new wn(i, O.empty(), e);
}
function MC(t) {
  return new wn(t.readTime, t.key, -1);
}
class wn {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new wn(j.min(), O.empty(), -1);
  }
  static max() {
    return new wn(j.max(), O.empty(), -1);
  }
}
function FC(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = O.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : G(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const UC =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class VC {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _s(t) {
  if (t.code !== S.FAILED_PRECONDITION || t.message !== UC) throw t;
  P("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && U(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new C((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof C ? n : C.resolve(n);
    } catch (n) {
      return C.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.reject(n);
  }
  static resolve(e) {
    return new C((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new C((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new C((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (l) => r(l)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = C.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? C.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new C((r, i) => {
      const s = e.length,
        o = new Array(s);
      let a = 0;
      for (let l = 0; l < s; l++) {
        const u = l;
        n(e[u]).next(
          (c) => {
            (o[u] = c), ++a, a === s && r(o);
          },
          (c) => i(c)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new C((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function xs(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wh {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ut(r)),
        (this.ct = (r) => n.writeSequenceNumber(r)));
  }
  ut(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.ct && this.ct(e), e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sp(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function tr(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function fv(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Wh.at = -1;
class we {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || _e.EMPTY);
  }
  insert(e, n) {
    return new we(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, _e.BLACK, null, null)
    );
  }
  remove(e) {
    return new we(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, _e.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new ro(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new ro(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new ro(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new ro(this.root, e, this.comparator, !0);
  }
}
class ro {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class _e {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r != null ? r : _e.RED),
      (this.left = i != null ? i : _e.EMPTY),
      (this.right = s != null ? s : _e.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new _e(
      e != null ? e : this.key,
      n != null ? n : this.value,
      r != null ? r : this.color,
      i != null ? i : this.left,
      s != null ? s : this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return _e.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return _e.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, _e.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, _e.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw U();
    const e = this.left.check();
    if (e !== this.right.check()) throw U();
    return e + (this.isRed() ? 0 : 1);
  }
}
(_e.EMPTY = null), (_e.RED = !0), (_e.BLACK = !1);
_e.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw U();
  }
  get value() {
    throw U();
  }
  get color() {
    throw U();
  }
  get left() {
    throw U();
  }
  get right() {
    throw U();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new _e(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ve {
  constructor(e) {
    (this.comparator = e), (this.data = new we(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new op(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new op(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof ve) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new ve(this.comparator);
    return (n.data = e), n;
  }
}
class op {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dt {
  constructor(e) {
    (this.fields = e), e.sort(Fe.comparator);
  }
  static empty() {
    return new dt([]);
  }
  unionWith(e) {
    let n = new ve(Fe.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new dt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Mr(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ze {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new ze(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new ze(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (e = this.binaryString), btoa(e);
    var e;
  }
  toUint8Array() {
    return (function (e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return G(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
ze.EMPTY_BYTE_STRING = new ze("");
const BC = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function En(t) {
  if ((J(!!t), typeof t == "string")) {
    let e = 0;
    const n = BC.exec(t);
    if ((J(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: fe(t.seconds), nanos: fe(t.nanos) };
}
function fe(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Fr(t) {
  return typeof t == "string" ? ze.fromBase64String(t) : ze.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pv(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function mv(t) {
  const e = t.mapValue.fields.__previous_value__;
  return pv(e) ? mv(e) : e;
}
function os(t) {
  const e = En(t.mapValue.fields.__local_write_time__.timestampValue);
  return new ye(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zC {
  constructor(e, n, r, i, s, o, a, l) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.useFetchStreams = l);
  }
}
class as {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || "(default)");
  }
  static empty() {
    return new as("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return (
      e instanceof as &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
function Ka(t) {
  return t == null;
}
function ra(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function jC(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !ra(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const io = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function Yn(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? pv(t)
      ? 4
      : bC(t)
      ? 9007199254740991
      : 10
    : U();
}
function Rt(t, e) {
  if (t === e) return !0;
  const n = Yn(t);
  if (n !== Yn(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return os(t).isEqual(os(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = En(r.timestampValue),
          o = En(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return Fr(r.bytesValue).isEqual(Fr(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          fe(r.geoPointValue.latitude) === fe(i.geoPointValue.latitude) &&
          fe(r.geoPointValue.longitude) === fe(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ("integerValue" in r && "integerValue" in i)
          return fe(r.integerValue) === fe(i.integerValue);
        if ("doubleValue" in r && "doubleValue" in i) {
          const s = fe(r.doubleValue),
            o = fe(i.doubleValue);
          return s === o ? ra(s) === ra(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return Mr(t.arrayValue.values || [], e.arrayValue.values || [], Rt);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (sp(s) !== sp(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !Rt(s[a], o[a])))
            return !1;
        return !0;
      })(t, e);
    default:
      return U();
  }
}
function ls(t, e) {
  return (t.values || []).find((n) => Rt(n, e)) !== void 0;
}
function Ur(t, e) {
  if (t === e) return 0;
  const n = Yn(t),
    r = Yn(e);
  if (n !== r) return G(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return G(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = fe(i.integerValue || i.doubleValue),
          a = fe(s.integerValue || s.doubleValue);
        return o < a
          ? -1
          : o > a
          ? 1
          : o === a
          ? 0
          : isNaN(o)
          ? isNaN(a)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return ap(t.timestampValue, e.timestampValue);
    case 4:
      return ap(os(t), os(e));
    case 5:
      return G(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = Fr(i),
          a = Fr(s);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split("/"),
          a = s.split("/");
        for (let l = 0; l < o.length && l < a.length; l++) {
          const u = G(o[l], a[l]);
          if (u !== 0) return u;
        }
        return G(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = G(fe(i.latitude), fe(s.latitude));
        return o !== 0 ? o : G(fe(i.longitude), fe(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const u = Ur(o[l], a[l]);
          if (u) return u;
        }
        return G(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === io.mapValue && s === io.mapValue) return 0;
        if (i === io.mapValue) return 1;
        if (s === io.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          u = Object.keys(l);
        a.sort(), u.sort();
        for (let c = 0; c < a.length && c < u.length; ++c) {
          const h = G(a[c], u[c]);
          if (h !== 0) return h;
          const d = Ur(o[a[c]], l[u[c]]);
          if (d !== 0) return d;
        }
        return G(a.length, u.length);
      })(t.mapValue, e.mapValue);
    default:
      throw U();
  }
}
function ap(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return G(t, e);
  const n = En(t),
    r = En(e),
    i = G(n.seconds, r.seconds);
  return i !== 0 ? i : G(n.nanos, r.nanos);
}
function Nr(t) {
  return dc(t);
}
function dc(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
    ? "" + t.booleanValue
    : "integerValue" in t
    ? "" + t.integerValue
    : "doubleValue" in t
    ? "" + t.doubleValue
    : "timestampValue" in t
    ? (function (r) {
        const i = En(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Fr(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), O.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (r) {
        let i = "[",
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ","), (i += dc(o));
        return i + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = "{",
          o = !0;
        for (const a of i)
          o ? (o = !1) : (s += ","), (s += `${a}:${dc(r.fields[a])}`);
        return s + "}";
      })(t.mapValue)
    : U();
  var e, n;
}
function fc(t) {
  return !!t && "integerValue" in t;
}
function Qh(t) {
  return !!t && "arrayValue" in t;
}
function lp(t) {
  return !!t && "nullValue" in t;
}
function up(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function vo(t) {
  return !!t && "mapValue" in t;
}
function Di(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return tr(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Di(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Di(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function bC(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qe {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new qe({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !vo(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Di(n);
  }
  setAll(e) {
    let n = Fe.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = Di(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    vo(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return Rt(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (vo(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    tr(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new qe(Di(this.value));
  }
}
function gv(t) {
  const e = [];
  return (
    tr(t.fields, (n, r) => {
      const i = new Fe([n]);
      if (vo(r)) {
        const s = gv(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new dt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xe {
  constructor(e, n, r, i, s, o) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.data = s),
      (this.documentState = o);
  }
  static newInvalidDocument(e) {
    return new xe(e, 0, j.min(), j.min(), qe.empty(), 0);
  }
  static newFoundDocument(e, n, r) {
    return new xe(e, 1, n, j.min(), r, 0);
  }
  static newNoDocument(e, n) {
    return new xe(e, 2, n, j.min(), qe.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new xe(e, 3, n, j.min(), qe.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = qe.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = qe.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = j.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof xe &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new xe(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {documentType: ${this.documentType}}), {documentState: ${
      this.documentState
    }})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HC {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.ht = null);
  }
}
function cp(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new HC(t, e, n, r, i, s, o);
}
function qh(t) {
  const e = V(t);
  if (e.ht === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters
        .map((r) => {
          return (
            (i = r).field.canonicalString() + i.op.toString() + Nr(i.value)
          );
          var i;
        })
        .join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(",")),
      Ka(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => Nr(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => Nr(r)).join(","))),
      (e.ht = n);
  }
  return e.ht;
}
function KC(t) {
  let e = t.path.canonicalString();
  return (
    t.collectionGroup !== null &&
      (e += " collectionGroup=" + t.collectionGroup),
    t.filters.length > 0 &&
      (e += `, filters: [${t.filters
        .map((n) => {
          return `${(r = n).field.canonicalString()} ${r.op} ${Nr(r.value)}`;
          var r;
        })
        .join(", ")}]`),
    Ka(t.limit) || (e += ", limit: " + t.limit),
    t.orderBy.length > 0 &&
      (e += `, orderBy: [${t.orderBy
        .map((n) =>
          (function (r) {
            return `${r.field.canonicalString()} (${r.dir})`;
          })(n)
        )
        .join(", ")}]`),
    t.startAt &&
      ((e += ", startAt: "),
      (e += t.startAt.inclusive ? "b:" : "a:"),
      (e += t.startAt.position.map((n) => Nr(n)).join(","))),
    t.endAt &&
      ((e += ", endAt: "),
      (e += t.endAt.inclusive ? "a:" : "b:"),
      (e += t.endAt.position.map((n) => Nr(n)).join(","))),
    `Target(${e})`
  );
}
function Gh(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let i = 0; i < t.orderBy.length; i++)
    if (!ZC(t.orderBy[i], e.orderBy[i])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let i = 0; i < t.filters.length; i++)
    if (
      ((n = t.filters[i]),
      (r = e.filters[i]),
      n.op !== r.op || !n.field.isEqual(r.field) || !Rt(n.value, r.value))
    )
      return !1;
  var n, r;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!dp(t.startAt, e.startAt) &&
    dp(t.endAt, e.endAt)
  );
}
function pc(t) {
  return (
    O.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
class Xe extends class {} {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.lt(e, n, r)
        : new WC(e, n, r)
      : n === "array-contains"
      ? new GC(e, r)
      : n === "in"
      ? new XC(e, r)
      : n === "not-in"
      ? new YC(e, r)
      : n === "array-contains-any"
      ? new JC(e, r)
      : new Xe(e, n, r);
  }
  static lt(e, n, r) {
    return n === "in" ? new QC(e, r) : new qC(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.ft(Ur(n, this.value))
      : n !== null && Yn(this.value) === Yn(n) && this.ft(Ur(n, this.value));
  }
  ft(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return U();
    }
  }
  dt() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class WC extends Xe {
  constructor(e, n, r) {
    super(e, n, r), (this.key = O.fromName(r.referenceValue));
  }
  matches(e) {
    const n = O.comparator(e.key, this.key);
    return this.ft(n);
  }
}
class QC extends Xe {
  constructor(e, n) {
    super(e, "in", n), (this.keys = yv("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class qC extends Xe {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = yv("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function yv(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => O.fromName(r.referenceValue));
}
class GC extends Xe {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return Qh(n) && ls(n.arrayValue, this.value);
  }
}
class XC extends Xe {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && ls(this.value.arrayValue, n);
  }
}
class YC extends Xe {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (ls(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !ls(this.value.arrayValue, n);
  }
}
class JC extends Xe {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!Qh(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => ls(this.value.arrayValue, r))
    );
  }
}
class ia {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
class Ri {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
}
function ZC(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
function hp(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = O.comparator(O.fromName(o.referenceValue), n.key))
        : (r = Ur(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function dp(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!Rt(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wa {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    a = null,
    l = null
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = l),
      (this._t = null),
      (this.wt = null),
      this.startAt,
      this.endAt;
  }
}
function eT(t, e, n, r, i, s, o, a) {
  return new Wa(t, e, n, r, i, s, o, a);
}
function Xh(t) {
  return new Wa(t);
}
function fp(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function tT(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function nT(t) {
  for (const e of t.filters) if (e.dt()) return e.field;
  return null;
}
function rT(t) {
  return t.collectionGroup !== null;
}
function us(t) {
  const e = V(t);
  if (e._t === null) {
    e._t = [];
    const n = nT(e),
      r = tT(e);
    if (n !== null && r === null)
      n.isKeyField() || e._t.push(new Ri(n)),
        e._t.push(new Ri(Fe.keyField(), "asc"));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy)
        e._t.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e._t.push(new Ri(Fe.keyField(), s));
      }
    }
  }
  return e._t;
}
function Kt(t) {
  const e = V(t);
  if (!e.wt)
    if (e.limitType === "F")
      e.wt = cp(
        e.path,
        e.collectionGroup,
        us(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const s of us(e)) {
        const o = s.dir === "desc" ? "asc" : "desc";
        n.push(new Ri(s.field, o));
      }
      const r = e.endAt ? new ia(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new ia(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = cp(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.wt;
}
function mc(t, e, n) {
  return new Wa(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function Qa(t, e) {
  return Gh(Kt(t), Kt(e)) && t.limitType === e.limitType;
}
function vv(t) {
  return `${qh(Kt(t))}|lt:${t.limitType}`;
}
function gc(t) {
  return `Query(target=${KC(Kt(t))}; limitType=${t.limitType})`;
}
function Yh(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : O.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (n, r) {
      for (const i of n.explicitOrderBy)
        if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      for (const i of n.filters) if (!i.matches(r)) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      return !(
        (n.startAt &&
          !(function (i, s, o) {
            const a = hp(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, us(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = hp(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, us(n), r))
      );
    })(t, e)
  );
}
function iT(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function wv(t) {
  return (e, n) => {
    let r = !1;
    for (const i of us(t)) {
      const s = sT(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function sT(t, e, n) {
  const r = t.field.isKeyField()
    ? O.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? Ur(a, l) : U();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return U();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ev(t, e) {
  if (t.gt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: ra(e) ? "-0" : e };
}
function Sv(t) {
  return { integerValue: "" + t };
}
function oT(t, e) {
  return jC(e) ? Sv(e) : Ev(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qa {
  constructor() {
    this._ = void 0;
  }
}
function aT(t, e, n) {
  return t instanceof sa
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: r.seconds, nanos: r.nanoseconds },
            },
          },
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, e)
    : t instanceof cs
    ? Cv(t, e)
    : t instanceof hs
    ? Tv(t, e)
    : (function (r, i) {
        const s = kv(r, i),
          o = pp(s) + pp(r.yt);
        return fc(s) && fc(r.yt) ? Sv(o) : Ev(r.It, o);
      })(t, e);
}
function lT(t, e, n) {
  return t instanceof cs ? Cv(t, e) : t instanceof hs ? Tv(t, e) : n;
}
function kv(t, e) {
  return t instanceof oa
    ? fc((n = e)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class sa extends qa {}
class cs extends qa {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function Cv(t, e) {
  const n = Iv(e);
  for (const r of t.elements) n.some((i) => Rt(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class hs extends qa {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function Tv(t, e) {
  let n = Iv(e);
  for (const r of t.elements) n = n.filter((i) => !Rt(i, r));
  return { arrayValue: { values: n } };
}
class oa extends qa {
  constructor(e, n) {
    super(), (this.It = e), (this.yt = n);
  }
}
function pp(t) {
  return fe(t.integerValue || t.doubleValue);
}
function Iv(t) {
  return Qh(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function uT(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof cs && r instanceof cs) ||
        (n instanceof hs && r instanceof hs)
        ? Mr(n.elements, r.elements, Rt)
        : n instanceof oa && r instanceof oa
        ? Rt(n.yt, r.yt)
        : n instanceof sa && r instanceof sa;
    })(t.transform, e.transform)
  );
}
class cT {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Dt {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Dt();
  }
  static exists(e) {
    return new Dt(void 0, e);
  }
  static updateTime(e) {
    return new Dt(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function wo(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ga {}
function Nv(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new xv(t.key, Dt.none())
      : new Ds(t.key, t.data, Dt.none());
  {
    const n = t.data,
      r = qe.empty();
    let i = new ve(Fe.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new xn(t.key, r, new dt(i.toArray()), Dt.none());
  }
}
function hT(t, e, n) {
  t instanceof Ds
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = gp(r.fieldTransforms, i, s.transformResults);
        o.setAll(a),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof xn
    ? (function (r, i, s) {
        if (!wo(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        const o = gp(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(_v(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function Ai(t, e, n, r) {
  return t instanceof Ds
    ? (function (i, s, o, a) {
        if (!wo(i.precondition, s)) return o;
        const l = i.value.clone(),
          u = yp(i.fieldTransforms, a, s);
        return (
          l.setAll(u),
          s.convertToFoundDocument(s.version, l).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof xn
    ? (function (i, s, o, a) {
        if (!wo(i.precondition, s)) return o;
        const l = yp(i.fieldTransforms, a, s),
          u = s.data;
        return (
          u.setAll(_v(i)),
          u.setAll(l),
          s.convertToFoundDocument(s.version, u).setHasLocalMutations(),
          o === null
            ? null
            : o
                .unionWith(i.fieldMask.fields)
                .unionWith(i.fieldTransforms.map((c) => c.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return wo(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function dT(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = kv(r.transform, i || null);
    s != null && (n === null && (n = qe.empty()), n.set(r.field, s));
  }
  return n || null;
}
function mp(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && Mr(n, r, (i, s) => uT(i, s)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Ds extends Ga {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class xn extends Ga {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function _v(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function gp(t, e, n) {
  const r = new Map();
  J(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, lT(o, a, n[i]));
  }
  return r;
}
function yp(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, aT(s, o, e));
  }
  return r;
}
class xv extends Ga {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class fT extends Ga {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pT {
  constructor(e) {
    this.count = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var de, W;
function mT(t) {
  switch (t) {
    default:
      return U();
    case S.CANCELLED:
    case S.UNKNOWN:
    case S.DEADLINE_EXCEEDED:
    case S.RESOURCE_EXHAUSTED:
    case S.INTERNAL:
    case S.UNAVAILABLE:
    case S.UNAUTHENTICATED:
      return !1;
    case S.INVALID_ARGUMENT:
    case S.NOT_FOUND:
    case S.ALREADY_EXISTS:
    case S.PERMISSION_DENIED:
    case S.FAILED_PRECONDITION:
    case S.ABORTED:
    case S.OUT_OF_RANGE:
    case S.UNIMPLEMENTED:
    case S.DATA_LOSS:
      return !0;
  }
}
function Dv(t) {
  if (t === void 0) return Ht("GRPC error has no .code"), S.UNKNOWN;
  switch (t) {
    case de.OK:
      return S.OK;
    case de.CANCELLED:
      return S.CANCELLED;
    case de.UNKNOWN:
      return S.UNKNOWN;
    case de.DEADLINE_EXCEEDED:
      return S.DEADLINE_EXCEEDED;
    case de.RESOURCE_EXHAUSTED:
      return S.RESOURCE_EXHAUSTED;
    case de.INTERNAL:
      return S.INTERNAL;
    case de.UNAVAILABLE:
      return S.UNAVAILABLE;
    case de.UNAUTHENTICATED:
      return S.UNAUTHENTICATED;
    case de.INVALID_ARGUMENT:
      return S.INVALID_ARGUMENT;
    case de.NOT_FOUND:
      return S.NOT_FOUND;
    case de.ALREADY_EXISTS:
      return S.ALREADY_EXISTS;
    case de.PERMISSION_DENIED:
      return S.PERMISSION_DENIED;
    case de.FAILED_PRECONDITION:
      return S.FAILED_PRECONDITION;
    case de.ABORTED:
      return S.ABORTED;
    case de.OUT_OF_RANGE:
      return S.OUT_OF_RANGE;
    case de.UNIMPLEMENTED:
      return S.UNIMPLEMENTED;
    case de.DATA_LOSS:
      return S.DATA_LOSS;
    default:
      return U();
  }
}
((W = de || (de = {}))[(W.OK = 0)] = "OK"),
  (W[(W.CANCELLED = 1)] = "CANCELLED"),
  (W[(W.UNKNOWN = 2)] = "UNKNOWN"),
  (W[(W.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (W[(W.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (W[(W.NOT_FOUND = 5)] = "NOT_FOUND"),
  (W[(W.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (W[(W.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (W[(W.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (W[(W.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (W[(W.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (W[(W.ABORTED = 10)] = "ABORTED"),
  (W[(W.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (W[(W.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (W[(W.INTERNAL = 13)] = "INTERNAL"),
  (W[(W.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (W[(W.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jr {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    tr(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return fv(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gT = new we(O.comparator);
function Wt() {
  return gT;
}
const Rv = new we(O.comparator);
function yi(...t) {
  let e = Rv;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function Av(t) {
  let e = Rv;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Vn() {
  return Pi();
}
function Pv() {
  return Pi();
}
function Pi() {
  return new Jr(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const yT = new we(O.comparator),
  vT = new ve(O.comparator);
function b(...t) {
  let e = vT;
  for (const n of t) e = e.add(n);
  return e;
}
const wT = new ve(G);
function $v() {
  return wT;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xa {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, Rs.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Xa(j.min(), i, $v(), Wt(), b())
    );
  }
}
class Rs {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Rs(r, n, b(), b(), b());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Eo {
  constructor(e, n, r, i) {
    (this.Tt = e), (this.removedTargetIds = n), (this.key = r), (this.Et = i);
  }
}
class Lv {
  constructor(e, n) {
    (this.targetId = e), (this.At = n);
  }
}
class Ov {
  constructor(e, n, r = ze.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class vp {
  constructor() {
    (this.Rt = 0),
      (this.bt = Ep()),
      (this.Pt = ze.EMPTY_BYTE_STRING),
      (this.vt = !1),
      (this.Vt = !0);
  }
  get current() {
    return this.vt;
  }
  get resumeToken() {
    return this.Pt;
  }
  get St() {
    return this.Rt !== 0;
  }
  get Dt() {
    return this.Vt;
  }
  Ct(e) {
    e.approximateByteSize() > 0 && ((this.Vt = !0), (this.Pt = e));
  }
  xt() {
    let e = b(),
      n = b(),
      r = b();
    return (
      this.bt.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            U();
        }
      }),
      new Rs(this.Pt, this.vt, e, n, r)
    );
  }
  Nt() {
    (this.Vt = !1), (this.bt = Ep());
  }
  kt(e, n) {
    (this.Vt = !0), (this.bt = this.bt.insert(e, n));
  }
  Ot(e) {
    (this.Vt = !0), (this.bt = this.bt.remove(e));
  }
  Mt() {
    this.Rt += 1;
  }
  Ft() {
    this.Rt -= 1;
  }
  $t() {
    (this.Vt = !0), (this.vt = !0);
  }
}
class ET {
  constructor(e) {
    (this.Bt = e),
      (this.Lt = new Map()),
      (this.Ut = Wt()),
      (this.qt = wp()),
      (this.Kt = new ve(G));
  }
  Gt(e) {
    for (const n of e.Tt)
      e.Et && e.Et.isFoundDocument()
        ? this.Qt(n, e.Et)
        : this.jt(n, e.key, e.Et);
    for (const n of e.removedTargetIds) this.jt(n, e.key, e.Et);
  }
  Wt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.zt(n);
      switch (e.state) {
        case 0:
          this.Ht(n) && r.Ct(e.resumeToken);
          break;
        case 1:
          r.Ft(), r.St || r.Nt(), r.Ct(e.resumeToken);
          break;
        case 2:
          r.Ft(), r.St || this.removeTarget(n);
          break;
        case 3:
          this.Ht(n) && (r.$t(), r.Ct(e.resumeToken));
          break;
        case 4:
          this.Ht(n) && (this.Jt(n), r.Ct(e.resumeToken));
          break;
        default:
          U();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Lt.forEach((r, i) => {
          this.Ht(i) && n(i);
        });
  }
  Yt(e) {
    const n = e.targetId,
      r = e.At.count,
      i = this.Xt(n);
    if (i) {
      const s = i.target;
      if (pc(s))
        if (r === 0) {
          const o = new O(s.path);
          this.jt(n, o, xe.newNoDocument(o, j.min()));
        } else J(r === 1);
      else this.Zt(n) !== r && (this.Jt(n), (this.Kt = this.Kt.add(n)));
    }
  }
  te(e) {
    const n = new Map();
    this.Lt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && pc(a.target)) {
          const l = new O(a.target.path);
          this.Ut.get(l) !== null ||
            this.ee(o, l) ||
            this.jt(o, l, xe.newNoDocument(l, e));
        }
        s.Dt && (n.set(o, s.xt()), s.Nt());
      }
    });
    let r = b();
    this.qt.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const u = this.Xt(l);
        return !u || u.purpose === 2 || ((a = !1), !1);
      }),
        a && (r = r.add(s));
    }),
      this.Ut.forEach((s, o) => o.setReadTime(e));
    const i = new Xa(e, n, this.Kt, this.Ut, r);
    return (this.Ut = Wt()), (this.qt = wp()), (this.Kt = new ve(G)), i;
  }
  Qt(e, n) {
    if (!this.Ht(e)) return;
    const r = this.ee(e, n.key) ? 2 : 0;
    this.zt(e).kt(n.key, r),
      (this.Ut = this.Ut.insert(n.key, n)),
      (this.qt = this.qt.insert(n.key, this.ne(n.key).add(e)));
  }
  jt(e, n, r) {
    if (!this.Ht(e)) return;
    const i = this.zt(e);
    this.ee(e, n) ? i.kt(n, 1) : i.Ot(n),
      (this.qt = this.qt.insert(n, this.ne(n).delete(e))),
      r && (this.Ut = this.Ut.insert(n, r));
  }
  removeTarget(e) {
    this.Lt.delete(e);
  }
  Zt(e) {
    const n = this.zt(e).xt();
    return (
      this.Bt.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  Mt(e) {
    this.zt(e).Mt();
  }
  zt(e) {
    let n = this.Lt.get(e);
    return n || ((n = new vp()), this.Lt.set(e, n)), n;
  }
  ne(e) {
    let n = this.qt.get(e);
    return n || ((n = new ve(G)), (this.qt = this.qt.insert(e, n))), n;
  }
  Ht(e) {
    const n = this.Xt(e) !== null;
    return n || P("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Xt(e) {
    const n = this.Lt.get(e);
    return n && n.St ? null : this.Bt.se(e);
  }
  Jt(e) {
    this.Lt.set(e, new vp()),
      this.Bt.getRemoteKeysForTarget(e).forEach((n) => {
        this.jt(e, n, null);
      });
  }
  ee(e, n) {
    return this.Bt.getRemoteKeysForTarget(e).has(n);
  }
}
function wp() {
  return new we(O.comparator);
}
function Ep() {
  return new we(O.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ST = (() => ({ asc: "ASCENDING", desc: "DESCENDING" }))(),
  kT = (() => ({
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  }))();
class CT {
  constructor(e, n) {
    (this.databaseId = e), (this.gt = n);
  }
}
function aa(t, e) {
  return t.gt
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function Mv(t, e) {
  return t.gt ? e.toBase64() : e.toUint8Array();
}
function TT(t, e) {
  return aa(t, e.toTimestamp());
}
function Ut(t) {
  return (
    J(!!t),
    j.fromTimestamp(
      (function (e) {
        const n = En(e);
        return new ye(n.seconds, n.nanos);
      })(t)
    )
  );
}
function Jh(t, e) {
  return (function (n) {
    return new re(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function Fv(t) {
  const e = re.fromString(t);
  return J(Bv(e)), e;
}
function yc(t, e) {
  return Jh(t.databaseId, e.path);
}
function ql(t, e) {
  const n = Fv(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new L(
      S.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new L(
      S.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new O(Uv(n));
}
function vc(t, e) {
  return Jh(t.databaseId, e);
}
function IT(t) {
  const e = Fv(t);
  return e.length === 4 ? re.emptyPath() : Uv(e);
}
function wc(t) {
  return new re([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function Uv(t) {
  return J(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function Sp(t, e, n) {
  return { name: yc(t, e), fields: n.value.mapValue.fields };
}
function NT(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (l) {
        return l === "NO_CHANGE"
          ? 0
          : l === "ADD"
          ? 1
          : l === "REMOVE"
          ? 2
          : l === "CURRENT"
          ? 3
          : l === "RESET"
          ? 4
          : U();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (l, u) {
        return l.gt
          ? (J(u === void 0 || typeof u == "string"),
            ze.fromBase64String(u || ""))
          : (J(u === void 0 || u instanceof Uint8Array),
            ze.fromUint8Array(u || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const u = l.code === void 0 ? S.UNKNOWN : Dv(l.code);
          return new L(u, l.message || "");
        })(o);
    n = new Ov(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = ql(t, r.document.name),
      s = Ut(r.document.updateTime),
      o = new qe({ mapValue: { fields: r.document.fields } }),
      a = xe.newFoundDocument(i, s, o),
      l = r.targetIds || [],
      u = r.removedTargetIds || [];
    n = new Eo(l, u, a.key, a);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = ql(t, r.document),
      s = r.readTime ? Ut(r.readTime) : j.min(),
      o = xe.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new Eo([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = ql(t, r.document),
      s = r.removedTargetIds || [];
    n = new Eo([], s, i, null);
  } else {
    if (!("filter" in e)) return U();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new pT(i),
        o = r.targetId;
      n = new Lv(o, s);
    }
  }
  return n;
}
function _T(t, e) {
  let n;
  if (e instanceof Ds) n = { update: Sp(t, e.key, e.value) };
  else if (e instanceof xv) n = { delete: yc(t, e.key) };
  else if (e instanceof xn)
    n = { update: Sp(t, e.key, e.data), updateMask: FT(e.fieldMask) };
  else {
    if (!(e instanceof fT)) return U();
    n = { verify: yc(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, s) {
          const o = s.transform;
          if (o instanceof sa)
            return {
              fieldPath: s.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof cs)
            return {
              fieldPath: s.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof hs)
            return {
              fieldPath: s.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof oa)
            return { fieldPath: s.field.canonicalString(), increment: o.yt };
          throw U();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: TT(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : U();
      })(t, e.precondition)),
    n
  );
}
function xT(t, e) {
  return t && t.length > 0
    ? (J(e !== void 0),
      t.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? Ut(r.updateTime) : Ut(i);
          return (
            s.isEqual(j.min()) && (s = Ut(i)),
            new cT(s, r.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function DT(t, e) {
  return { documents: [vc(t, e.path)] };
}
function RT(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = vc(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = vc(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length === 0) return;
    const u = l.map((c) =>
      (function (h) {
        if (h.op === "==") {
          if (up(h.value))
            return { unaryFilter: { field: ir(h.field), op: "IS_NAN" } };
          if (lp(h.value))
            return { unaryFilter: { field: ir(h.field), op: "IS_NULL" } };
        } else if (h.op === "!=") {
          if (up(h.value))
            return { unaryFilter: { field: ir(h.field), op: "IS_NOT_NAN" } };
          if (lp(h.value))
            return { unaryFilter: { field: ir(h.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: ir(h.field), op: LT(h.op), value: h.value },
        };
      })(c)
    );
    return u.length === 1
      ? u[0]
      : { compositeFilter: { op: "AND", filters: u } };
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (l) {
    if (l.length !== 0)
      return l.map((u) =>
        (function (c) {
          return { field: ir(c.field), direction: $T(c.dir) };
        })(u)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, u) {
    return l.gt || Ka(u) ? u : { value: u };
  })(t, e.limit);
  var a;
  return (
    o !== null && (n.structuredQuery.limit = o),
    e.startAt &&
      (n.structuredQuery.startAt = {
        before: (a = e.startAt).inclusive,
        values: a.position,
      }),
    e.endAt &&
      (n.structuredQuery.endAt = (function (l) {
        return { before: !l.inclusive, values: l.position };
      })(e.endAt)),
    n
  );
}
function AT(t) {
  let e = IT(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    J(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId));
  }
  let s = [];
  n.where && (s = Vv(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((c) =>
      (function (h) {
        return new Ri(
          vr(h.field),
          (function (d) {
            switch (d) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(h.direction)
        );
      })(c)
    ));
  let a = null;
  n.limit &&
    (a = (function (c) {
      let h;
      return (h = typeof c == "object" ? c.value : c), Ka(h) ? null : h;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (c) {
      const h = !!c.before,
        d = c.values || [];
      return new ia(d, h);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (c) {
        const h = !c.before,
          d = c.values || [];
        return new ia(d, h);
      })(n.endAt)),
    eT(e, i, o, s, a, "F", l, u)
  );
}
function PT(t, e) {
  const n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return U();
    }
  })(0, e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function Vv(t) {
  return t
    ? t.unaryFilter !== void 0
      ? [MT(t)]
      : t.fieldFilter !== void 0
      ? [OT(t)]
      : t.compositeFilter !== void 0
      ? t.compositeFilter.filters
          .map((e) => Vv(e))
          .reduce((e, n) => e.concat(n))
      : U()
    : [];
}
function $T(t) {
  return ST[t];
}
function LT(t) {
  return kT[t];
}
function ir(t) {
  return { fieldPath: t.canonicalString() };
}
function vr(t) {
  return Fe.fromServerFormat(t.fieldPath);
}
function OT(t) {
  return Xe.create(
    vr(t.fieldFilter.field),
    (function (e) {
      switch (e) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return U();
      }
    })(t.fieldFilter.op),
    t.fieldFilter.value
  );
}
function MT(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      const e = vr(t.unaryFilter.field);
      return Xe.create(e, "==", { doubleValue: NaN });
    case "IS_NULL":
      const n = vr(t.unaryFilter.field);
      return Xe.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      const r = vr(t.unaryFilter.field);
      return Xe.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      const i = vr(t.unaryFilter.field);
      return Xe.create(i, "!=", { nullValue: "NULL_VALUE" });
    default:
      return U();
  }
}
function FT(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function Bv(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UT {
  constructor(e, n, r, i) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && hT(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Ai(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Ai(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = Pv();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = Nv(o, a);
        l !== null && r.set(i.key, l),
          o.isValidDocument() || o.convertToNoDocument(j.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), b());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Mr(this.mutations, e.mutations, (n, r) => mp(n, r)) &&
      Mr(this.baseMutations, e.baseMutations, (n, r) => mp(n, r))
    );
  }
}
class Zh {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    J(e.mutations.length === r.length);
    let i = yT;
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new Zh(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VT {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bn {
  constructor(e, n, r, i, s = j.min(), o = j.min(), a = ze.EMPTY_BYTE_STRING) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new bn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken
    );
  }
  withResumeToken(e, n) {
    return new bn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new bn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BT {
  constructor(e) {
    this.re = e;
  }
}
function zT(t) {
  const e = AT({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? mc(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jT {
  constructor() {
    this.Ye = new bT();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ye.add(n), C.resolve();
  }
  getCollectionParents(e, n) {
    return C.resolve(this.Ye.getEntries(n));
  }
  addFieldIndex(e, n) {
    return C.resolve();
  }
  deleteFieldIndex(e, n) {
    return C.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return C.resolve(null);
  }
  getIndexType(e, n) {
    return C.resolve(0);
  }
  getFieldIndexes(e, n) {
    return C.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return C.resolve(null);
  }
  getMinOffset(e, n) {
    return C.resolve(wn.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return C.resolve(wn.min());
  }
  updateCollectionGroup(e, n, r) {
    return C.resolve();
  }
  updateIndexEntries(e, n) {
    return C.resolve();
  }
}
class bT {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new ve(re.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new ve(re.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vr {
  constructor(e) {
    this.bn = e;
  }
  next() {
    return (this.bn += 2), this.bn;
  }
  static Pn() {
    return new Vr(0);
  }
  static vn() {
    return new Vr(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HT {
  constructor() {
    (this.changes = new Jr(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, xe.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? C.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KT {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WT {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.getBaseDocument(e, n, r)))
      .next((i) => (r !== null && Ai(r.mutation, i, dt.empty(), ye.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, b()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = b()) {
    const i = Vn();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = yi();
        return (
          s.forEach((a, l) => {
            o = o.insert(a, l.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const r = Vn();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, b())
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = Wt();
    const o = Pi(),
      a = Pi();
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof xn)
          ? (s = s.insert(u.key, u))
          : c !== void 0 &&
            (o.set(u.key, c.mutation.getFieldMask()),
            Ai(c.mutation, u, c.mutation.getFieldMask(), ye.now()));
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return a.set(
              u,
              new KT(c, (h = o.get(u)) !== null && h !== void 0 ? h : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Pi();
    let i = new we((o, a) => o - a),
      s = b();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l);
            if (u === null) return;
            let c = r.get(l) || dt.empty();
            (c = a.applyToLocalView(u, c)), r.set(l, c);
            const h = (i.get(a.batchId) || b()).add(l);
            i = i.insert(a.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            u = l.key,
            c = l.value,
            h = Pv();
          c.forEach((d) => {
            if (!s.has(d)) {
              const m = Nv(n.get(d), r.get(d));
              m !== null && h.set(d, m), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h));
        }
        return C.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r) {
    return (function (i) {
      return (
        O.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : rT(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r)
      : this.getDocumentsMatchingCollectionQuery(e, n, r);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : C.resolve(Vn());
        let a = -1,
          l = s;
        return o.next((u) =>
          C.forEach(
            u,
            (c, h) => (
              a < h.largestBatchId && (a = h.largestBatchId),
              s.get(c)
                ? C.resolve()
                : this.getBaseDocument(e, c, h).next((d) => {
                    l = l.insert(c, d);
                  })
            )
          )
            .next(() => this.populateOverlays(e, u, s))
            .next(() => this.computeViews(e, l, u, b()))
            .next((c) => ({ batchId: a, changes: Av(c) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new O(n)).next((r) => {
      let i = yi();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = yi();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      C.forEach(o, (a) => {
        const l = (function (u, c) {
          return new Wa(
            c,
            null,
            u.explicitOrderBy.slice(),
            u.filters.slice(),
            u.limit,
            u.limitType,
            u.startAt,
            u.endAt
          );
        })(n, a.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, l, r).next((u) => {
          u.forEach((c, h) => {
            s = s.insert(c, h);
          });
        });
      }).next(() => s)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r) {
    let i;
    return this.remoteDocumentCache
      .getAllFromCollection(e, n.path, r)
      .next(
        (s) => (
          (i = s),
          this.documentOverlayCache.getOverlaysForCollection(
            e,
            n.path,
            r.largestBatchId
          )
        )
      )
      .next((s) => {
        s.forEach((a, l) => {
          const u = l.getKey();
          i.get(u) === null && (i = i.insert(u, xe.newInvalidDocument(u)));
        });
        let o = yi();
        return (
          i.forEach((a, l) => {
            const u = s.get(a);
            u !== void 0 && Ai(u.mutation, l, dt.empty(), ye.now()),
              Yh(n, l) && (o = o.insert(a, l));
          }),
          o
        );
      });
  }
  getBaseDocument(e, n, r) {
    return r === null || r.mutation.type === 1
      ? this.remoteDocumentCache.getEntry(e, n)
      : C.resolve(xe.newInvalidDocument(n));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QT {
  constructor(e) {
    (this.It = e), (this.Zn = new Map()), (this.ts = new Map());
  }
  getBundleMetadata(e, n) {
    return C.resolve(this.Zn.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.Zn.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: Ut(r.createTime),
      }),
      C.resolve()
    );
  }
  getNamedQuery(e, n) {
    return C.resolve(this.ts.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ts.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: zT(r.bundledQuery),
            readTime: Ut(r.readTime),
          };
        })(n)
      ),
      C.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qT {
  constructor() {
    (this.overlays = new we(O.comparator)), (this.es = new Map());
  }
  getOverlay(e, n) {
    return C.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Vn();
    return C.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      })
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ue(e, n, s);
      }),
      C.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.es.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.es.delete(r)),
      C.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = Vn(),
      s = n.length + 1,
      o = new O(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        u = l.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return C.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new we((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = Vn()), (s = s.insert(u.largestBatchId, c))),
          c.set(u.getKey(), u);
      }
    }
    const a = Vn(),
      l = s.getIterator();
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((u, c) => a.set(u, c)), !(a.size() >= i));

    );
    return C.resolve(a);
  }
  ue(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.es.get(i.largestBatchId).delete(r.key);
      this.es.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new VT(n, r));
    let s = this.es.get(n);
    s === void 0 && ((s = b()), this.es.set(n, s)),
      this.es.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ed {
  constructor() {
    (this.ns = new ve(Se.ss)), (this.rs = new ve(Se.os));
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(e, n) {
    const r = new Se(e, n);
    (this.ns = this.ns.add(r)), (this.rs = this.rs.add(r));
  }
  us(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.cs(new Se(e, n));
  }
  hs(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  ls(e) {
    const n = new O(new re([])),
      r = new Se(n, e),
      i = new Se(n, e + 1),
      s = [];
    return (
      this.rs.forEachInRange([r, i], (o) => {
        this.cs(o), s.push(o.key);
      }),
      s
    );
  }
  fs() {
    this.ns.forEach((e) => this.cs(e));
  }
  cs(e) {
    (this.ns = this.ns.delete(e)), (this.rs = this.rs.delete(e));
  }
  ds(e) {
    const n = new O(new re([])),
      r = new Se(n, e),
      i = new Se(n, e + 1);
    let s = b();
    return (
      this.rs.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new Se(e, 0),
      r = this.ns.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class Se {
  constructor(e, n) {
    (this.key = e), (this._s = n);
  }
  static ss(e, n) {
    return O.comparator(e.key, n.key) || G(e._s, n._s);
  }
  static os(e, n) {
    return G(e._s, n._s) || O.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GT {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ws = 1),
      (this.gs = new ve(Se.ss));
  }
  checkEmpty(e) {
    return C.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ws;
    this.ws++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new UT(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.gs = this.gs.add(new Se(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return C.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return C.resolve(this.ys(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.ps(r),
      s = i < 0 ? 0 : i;
    return C.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return C.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
  }
  getAllMutationBatches(e) {
    return C.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Se(n, 0),
      i = new Se(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.gs.forEachInRange([r, i], (o) => {
        const a = this.ys(o._s);
        s.push(a);
      }),
      C.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new ve(G);
    return (
      n.forEach((i) => {
        const s = new Se(i, 0),
          o = new Se(i, Number.POSITIVE_INFINITY);
        this.gs.forEachInRange([s, o], (a) => {
          r = r.add(a._s);
        });
      }),
      C.resolve(this.Is(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    O.isDocumentKey(s) || (s = s.child(""));
    const o = new Se(new O(s), 0);
    let a = new ve(G);
    return (
      this.gs.forEachWhile((l) => {
        const u = l.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(l._s)), !0);
      }, o),
      C.resolve(this.Is(a))
    );
  }
  Is(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.ys(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    J(this.Ts(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.gs;
    return C.forEach(n.mutations, (i) => {
      const s = new Se(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      );
    }).next(() => {
      this.gs = r;
    });
  }
  An(e) {}
  containsKey(e, n) {
    const r = new Se(n, 0),
      i = this.gs.firstAfterOrEqual(r);
    return C.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, C.resolve();
  }
  Ts(e, n) {
    return this.ps(e);
  }
  ps(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  ys(e) {
    const n = this.ps(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XT {
  constructor(e) {
    (this.Es = e), (this.docs = new we(O.comparator)), (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Es(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return C.resolve(r ? r.document.mutableCopy() : xe.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Wt();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : xe.newInvalidDocument(i)
        );
      }),
      C.resolve(r)
    );
  }
  getAllFromCollection(e, n, r) {
    let i = Wt();
    const s = new O(n.child("")),
      o = this.docs.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const {
        key: a,
        value: { document: l },
      } = o.getNext();
      if (!n.isPrefixOf(a.path)) break;
      a.path.length > n.length + 1 ||
        FC(MC(l), r) <= 0 ||
        (i = i.insert(l.key, l.mutableCopy()));
    }
    return C.resolve(i);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    U();
  }
  As(e, n) {
    return C.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new YT(this);
  }
  getSize(e) {
    return C.resolve(this.size);
  }
}
class YT extends HT {
  constructor(e) {
    super(), (this.Yn = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.Yn.addEntry(e, i))
          : this.Yn.removeEntry(r);
      }),
      C.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Yn.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Yn.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JT {
  constructor(e) {
    (this.persistence = e),
      (this.Rs = new Jr((n) => qh(n), Gh)),
      (this.lastRemoteSnapshotVersion = j.min()),
      (this.highestTargetId = 0),
      (this.bs = 0),
      (this.Ps = new ed()),
      (this.targetCount = 0),
      (this.vs = Vr.Pn());
  }
  forEachTarget(e, n) {
    return this.Rs.forEach((r, i) => n(i)), C.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return C.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return C.resolve(this.bs);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.vs.next()), C.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.bs && (this.bs = n),
      C.resolve()
    );
  }
  Dn(e) {
    this.Rs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.vs = new Vr(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.bs && (this.bs = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Dn(n), (this.targetCount += 1), C.resolve();
  }
  updateTargetData(e, n) {
    return this.Dn(n), C.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Rs.delete(n.target),
      this.Ps.ls(n.targetId),
      (this.targetCount -= 1),
      C.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.Rs.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.Rs.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          i++);
      }),
      C.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return C.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Rs.get(n) || null;
    return C.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Ps.us(n, r), C.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.Ps.hs(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      C.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Ps.ls(n), C.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Ps.ds(n);
    return C.resolve(r);
  }
  containsKey(e, n) {
    return C.resolve(this.Ps.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZT {
  constructor(e, n) {
    (this.Vs = {}),
      (this.overlays = {}),
      (this.Ss = new Wh(0)),
      (this.Ds = !1),
      (this.Ds = !0),
      (this.referenceDelegate = e(this)),
      (this.Cs = new JT(this)),
      (this.indexManager = new jT()),
      (this.remoteDocumentCache = (function (r) {
        return new XT(r);
      })((r) => this.referenceDelegate.xs(r))),
      (this.It = new BT(n)),
      (this.Ns = new QT(this.It));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Ds = !1), Promise.resolve();
  }
  get started() {
    return this.Ds;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new qT()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Vs[e.toKey()];
    return (
      r || ((r = new GT(n, this.referenceDelegate)), (this.Vs[e.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(e, n, r) {
    P("MemoryPersistence", "Starting transaction:", e);
    const i = new eI(this.Ss.next());
    return (
      this.referenceDelegate.ks(),
      r(i)
        .next((s) => this.referenceDelegate.Os(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Ms(e, n) {
    return C.or(Object.values(this.Vs).map((r) => () => r.containsKey(e, n)));
  }
}
class eI extends VC {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class td {
  constructor(e) {
    (this.persistence = e), (this.Fs = new ed()), (this.$s = null);
  }
  static Bs(e) {
    return new td(e);
  }
  get Ls() {
    if (this.$s) return this.$s;
    throw U();
  }
  addReference(e, n, r) {
    return (
      this.Fs.addReference(r, n), this.Ls.delete(r.toString()), C.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Fs.removeReference(r, n), this.Ls.add(r.toString()), C.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ls.add(n.toString()), C.resolve();
  }
  removeTarget(e, n) {
    this.Fs.ls(n.targetId).forEach((i) => this.Ls.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Ls.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  ks() {
    this.$s = new Set();
  }
  Os(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return C.forEach(this.Ls, (r) => {
      const i = O.fromPath(r);
      return this.Us(e, i).next((s) => {
        s || n.removeEntry(i, j.min());
      });
    }).next(() => ((this.$s = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Us(e, n).next((r) => {
      r ? this.Ls.delete(n.toString()) : this.Ls.add(n.toString());
    });
  }
  xs(e) {
    return 0;
  }
  Us(e, n) {
    return C.or([
      () => C.resolve(this.Fs.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Ms(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nd {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Si = r), (this.Di = i);
  }
  static Ci(e, n) {
    let r = b(),
      i = b();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new nd(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tI {
  constructor() {
    this.xi = !1;
  }
  initialize(e, n) {
    (this.Ni = e), (this.indexManager = n), (this.xi = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return this.ki(e, n)
      .next((s) => s || this.Oi(e, n, i, r))
      .next((s) => s || this.Mi(e, n));
  }
  ki(e, n) {
    if (fp(n)) return C.resolve(null);
    let r = Kt(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = mc(n, null, "F")), (r = Kt(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = b(...s);
            return this.Ni.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Fi(n, a);
                return this.$i(n, u, o, l.readTime)
                  ? this.ki(e, mc(n, null, "F"))
                  : this.Bi(e, u, n, l);
              })
            );
          }))
    );
  }
  Oi(e, n, r, i) {
    return fp(n) || i.isEqual(j.min())
      ? this.Mi(e, n)
      : this.Ni.getDocuments(e, r).next((s) => {
          const o = this.Fi(n, s);
          return this.$i(n, o, r, i)
            ? this.Mi(e, n)
            : (ip() <= q.DEBUG &&
                P(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  gc(n)
                ),
              this.Bi(e, o, n, OC(i, -1)));
        });
  }
  Fi(e, n) {
    let r = new ve(wv(e));
    return (
      n.forEach((i, s) => {
        Yh(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  $i(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Mi(e, n) {
    return (
      ip() <= q.DEBUG &&
        P("QueryEngine", "Using full collection scan to execute query:", gc(n)),
      this.Ni.getDocumentsMatchingQuery(e, n, wn.min())
    );
  }
  Bi(e, n, r, i) {
    return this.Ni.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nI {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Li = n),
      (this.It = i),
      (this.Ui = new we(G)),
      (this.qi = new Jr((s) => qh(s), Gh)),
      (this.Ki = new Map()),
      (this.Gi = e.getRemoteDocumentCache()),
      (this.Cs = e.getTargetCache()),
      (this.Ns = e.getBundleCache()),
      this.Qi(r);
  }
  Qi(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new WT(
        this.Gi,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Gi.setIndexManager(this.indexManager),
      this.Li.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.Ui)
    );
  }
}
function rI(t, e, n, r) {
  return new nI(t, e, n, r);
}
async function zv(t, e) {
  const n = V(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.Qi(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            a = [];
          let l = b();
          for (const u of i) {
            o.push(u.batchId);
            for (const c of u.mutations) l = l.add(c.key);
          }
          for (const u of s) {
            a.push(u.batchId);
            for (const c of u.mutations) l = l.add(c.key);
          }
          return n.localDocuments
            .getDocuments(r, l)
            .next((u) => ({ ji: u, removedBatchIds: o, addedBatchIds: a }));
        });
    }
  );
}
function iI(t, e) {
  const n = V(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, l, u) {
        const c = l.batch,
          h = c.keys();
        let d = C.resolve();
        return (
          h.forEach((m) => {
            d = d
              .next(() => u.getEntry(a, m))
              .next((y) => {
                const v = l.docVersions.get(m);
                J(v !== null),
                  y.version.compareTo(v) < 0 &&
                    (c.applyToRemoteDocument(y, l),
                    y.isValidDocument() &&
                      (y.setReadTime(l.commitVersion), u.addEntry(y)));
              });
          }),
          d.next(() => o.mutationQueue.removeMutationBatch(a, c))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (o) {
              let a = b();
              for (let l = 0; l < o.mutationResults.length; ++l)
                o.mutationResults[l].transformResults.length > 0 &&
                  (a = a.add(o.batch.mutations[l].key));
              return a;
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    }
  );
}
function jv(t) {
  const e = V(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Cs.getLastRemoteSnapshotVersion(n)
  );
}
function sI(t, e) {
  const n = V(t),
    r = e.snapshotVersion;
  let i = n.Ui;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      i = n.Ui;
      const a = [];
      e.targetChanges.forEach((c, h) => {
        const d = i.get(h);
        if (!d) return;
        a.push(
          n.Cs.removeMatchingKeys(s, c.removedDocuments, h).next(() =>
            n.Cs.addMatchingKeys(s, c.addedDocuments, h)
          )
        );
        let m = d.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.has(h)
          ? (m = m
              .withResumeToken(ze.EMPTY_BYTE_STRING, j.min())
              .withLastLimboFreeSnapshotVersion(j.min()))
          : c.resumeToken.approximateByteSize() > 0 &&
            (m = m.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, m)),
          (function (y, v, T) {
            return y.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() -
                y.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : T.addedDocuments.size +
                  T.modifiedDocuments.size +
                  T.removedDocuments.size >
                  0;
          })(d, m, c) && a.push(n.Cs.updateTargetData(s, m));
      });
      let l = Wt(),
        u = b();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        a.push(
          oI(s, o, e.documentUpdates).next((c) => {
            (l = c.Wi), (u = c.zi);
          })
        ),
        !r.isEqual(j.min()))
      ) {
        const c = n.Cs.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Cs.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(c);
      }
      return C.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, u))
        .next(() => l);
    })
    .then((s) => ((n.Ui = i), s));
}
function oI(t, e, n) {
  let r = b(),
    i = b();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Wt();
      return (
        n.forEach((a, l) => {
          const u = s.get(a);
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(j.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !u.isValidDocument() ||
                l.version.compareTo(u.version) > 0 ||
                (l.version.compareTo(u.version) === 0 && u.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : P(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  a,
                  ". Current version:",
                  u.version,
                  " Watch version:",
                  l.version
                );
        }),
        { Wi: o, zi: i }
      );
    })
  );
}
function aI(t, e) {
  const n = V(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function lI(t, e) {
  const n = V(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Cs.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), C.resolve(i))
          : n.Cs.allocateTargetId(r).next(
              (o) => (
                (i = new bn(e, o, 0, r.currentSequenceNumber)),
                n.Cs.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      const i = n.Ui.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.Ui = n.Ui.insert(r.targetId, r)), n.qi.set(e, r.targetId)),
        r
      );
    });
}
async function Ec(t, e, n) {
  const r = V(t),
    i = r.Ui.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!xs(o)) throw o;
    P("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ui = r.Ui.remove(e)), r.qi.delete(i.target);
}
function kp(t, e, n) {
  const r = V(t);
  let i = j.min(),
    s = b();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, l, u) {
      const c = V(a),
        h = c.qi.get(u);
      return h !== void 0 ? C.resolve(c.Ui.get(h)) : c.Cs.getTargetData(l, u);
    })(r, o, Kt(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Cs.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() =>
        r.Li.getDocumentsMatchingQuery(o, e, n ? i : j.min(), n ? s : b())
      )
      .next((a) => (uI(r, iT(e), a), { documents: a, Hi: s }))
  );
}
function uI(t, e, n) {
  let r = t.Ki.get(e) || j.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Ki.set(e, r);
}
class Cp {
  constructor() {
    this.activeTargetIds = $v();
  }
  er(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  nr(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  tr() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class cI {
  constructor() {
    (this.Lr = new Cp()),
      (this.Ur = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.Lr.er(e), this.Ur[e] || "not-current";
  }
  updateQueryState(e, n, r) {
    this.Ur[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.Lr.nr(e);
  }
  isLocalQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Ur[e];
  }
  getAllActiveQueryTargets() {
    return this.Lr.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  start() {
    return (this.Lr = new Cp()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hI {
  qr(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tp {
  constructor() {
    (this.Kr = () => this.Gr()),
      (this.Qr = () => this.jr()),
      (this.Wr = []),
      this.zr();
  }
  qr(e) {
    this.Wr.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.Kr),
      window.removeEventListener("offline", this.Qr);
  }
  zr() {
    window.addEventListener("online", this.Kr),
      window.addEventListener("offline", this.Qr);
  }
  Gr() {
    P("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.Wr) e(0);
  }
  jr() {
    P("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Wr) e(1);
  }
  static C() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dI = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fI {
  constructor(e) {
    (this.Hr = e.Hr), (this.Jr = e.Jr);
  }
  Yr(e) {
    this.Xr = e;
  }
  Zr(e) {
    this.eo = e;
  }
  onMessage(e) {
    this.no = e;
  }
  close() {
    this.Jr();
  }
  send(e) {
    this.Hr(e);
  }
  so() {
    this.Xr();
  }
  io(e) {
    this.eo(e);
  }
  ro(e) {
    this.no(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pI extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const n = e.ssl ? "https" : "http";
    (this.oo = n + "://" + e.host),
      (this.uo =
        "projects/" +
        this.databaseId.projectId +
        "/databases/" +
        this.databaseId.database +
        "/documents");
  }
  get co() {
    return !1;
  }
  ao(e, n, r, i, s) {
    const o = this.ho(e, n);
    P("RestConnection", "Sending: ", o, r);
    const a = {};
    return (
      this.lo(a, i, s),
      this.fo(e, o, a, r).then(
        (l) => (P("RestConnection", "Received: ", l), l),
        (l) => {
          throw (
            (hc(
              "RestConnection",
              `${e} failed with error: `,
              l,
              "url: ",
              o,
              "request:",
              r
            ),
            l)
          );
        }
      )
    );
  }
  _o(e, n, r, i, s, o) {
    return this.ao(e, n, r, i, s);
  }
  lo(e, n, r) {
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + Yr),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  ho(e, n) {
    const r = dI[e];
    return `${this.oo}/v1/${n}:${r}`;
  }
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams);
  }
  fo(e, n, r, i) {
    return new Promise((s, o) => {
      const a = new IC();
      a.setWithCredentials(!0),
        a.listenOnce(kC.COMPLETE, () => {
          var u;
          try {
            switch (a.getLastErrorCode()) {
              case Ql.NO_ERROR:
                const c = a.getResponseJson();
                P("Connection", "XHR received:", JSON.stringify(c)), s(c);
                break;
              case Ql.TIMEOUT:
                P("Connection", 'RPC "' + e + '" timed out'),
                  o(new L(S.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case Ql.HTTP_ERROR:
                const h = a.getStatus();
                if (
                  (P(
                    "Connection",
                    'RPC "' + e + '" failed with status:',
                    h,
                    "response text:",
                    a.getResponseText()
                  ),
                  h > 0)
                ) {
                  let d = a.getResponseJson();
                  Array.isArray(d) && (d = d[0]);
                  const m = (u = d) === null || u === void 0 ? void 0 : u.error;
                  if (m && m.status && m.message) {
                    const y = (function (v) {
                      const T = v.toLowerCase().replace(/_/g, "-");
                      return Object.values(S).indexOf(T) >= 0 ? T : S.UNKNOWN;
                    })(m.status);
                    o(new L(y, m.message));
                  } else
                    o(
                      new L(
                        S.UNKNOWN,
                        "Server responded with status " + a.getStatus()
                      )
                    );
                } else o(new L(S.UNAVAILABLE, "Connection failed."));
                break;
              default:
                U();
            }
          } finally {
            P("Connection", 'RPC "' + e + '" completed.');
          }
        });
      const l = JSON.stringify(i);
      a.send(n, "POST", l, r, 15);
    });
  }
  wo(e, n, r) {
    const i = [
        this.oo,
        "/",
        "google.firestore.v1.Firestore",
        "/",
        e,
        "/channel",
      ],
      s = EC(),
      o = SC(),
      a = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      };
    this.useFetchStreams && (a.xmlHttpFactory = new TC({})),
      this.lo(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join("");
    P("Connection", "Creating WebChannel: " + l, a);
    const u = s.createWebChannel(l, a);
    let c = !1,
      h = !1;
    const d = new fI({
        Hr: (y) => {
          h
            ? P("Connection", "Not sending because WebChannel is closed:", y)
            : (c ||
                (P("Connection", "Opening WebChannel transport."),
                u.open(),
                (c = !0)),
              P("Connection", "WebChannel sending:", y),
              u.send(y));
        },
        Jr: () => u.close(),
      }),
      m = (y, v, T) => {
        y.listen(v, (p) => {
          try {
            T(p);
          } catch (f) {
            setTimeout(() => {
              throw f;
            }, 0);
          }
        });
      };
    return (
      m(u, no.EventType.OPEN, () => {
        h || P("Connection", "WebChannel transport opened.");
      }),
      m(u, no.EventType.CLOSE, () => {
        h || ((h = !0), P("Connection", "WebChannel transport closed"), d.io());
      }),
      m(u, no.EventType.ERROR, (y) => {
        h ||
          ((h = !0),
          hc("Connection", "WebChannel transport errored:", y),
          d.io(new L(S.UNAVAILABLE, "The operation could not be completed")));
      }),
      m(u, no.EventType.MESSAGE, (y) => {
        var v;
        if (!h) {
          const T = y.data[0];
          J(!!T);
          const p = T,
            f =
              p.error ||
              ((v = p[0]) === null || v === void 0 ? void 0 : v.error);
          if (f) {
            P("Connection", "WebChannel received error:", f);
            const g = f.status;
            let E = (function (R) {
                const x = de[R];
                if (x !== void 0) return Dv(x);
              })(g),
              I = f.message;
            E === void 0 &&
              ((E = S.INTERNAL),
              (I =
                "Unknown error status: " + g + " with message " + f.message)),
              (h = !0),
              d.io(new L(E, I)),
              u.close();
          } else P("Connection", "WebChannel received:", T), d.ro(T);
        }
      }),
      m(o, CC.STAT_EVENT, (y) => {
        y.stat === np.PROXY
          ? P("Connection", "Detected buffering proxy")
          : y.stat === np.NOPROXY &&
            P("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        d.so();
      }, 0),
      d
    );
  }
}
function Gl() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ya(t) {
  return new CT(t, !0);
}
class bv {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.Hs = e),
      (this.timerId = n),
      (this.mo = r),
      (this.yo = i),
      (this.po = s),
      (this.Io = 0),
      (this.To = null),
      (this.Eo = Date.now()),
      this.reset();
  }
  reset() {
    this.Io = 0;
  }
  Ao() {
    this.Io = this.po;
  }
  Ro(e) {
    this.cancel();
    const n = Math.floor(this.Io + this.bo()),
      r = Math.max(0, Date.now() - this.Eo),
      i = Math.max(0, n - r);
    i > 0 &&
      P(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.To = this.Hs.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Eo = Date.now()), e())
      )),
      (this.Io *= this.yo),
      this.Io < this.mo && (this.Io = this.mo),
      this.Io > this.po && (this.Io = this.po);
  }
  Po() {
    this.To !== null && (this.To.skipDelay(), (this.To = null));
  }
  cancel() {
    this.To !== null && (this.To.cancel(), (this.To = null));
  }
  bo() {
    return (Math.random() - 0.5) * this.Io;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hv {
  constructor(e, n, r, i, s, o, a, l) {
    (this.Hs = e),
      (this.vo = r),
      (this.Vo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = l),
      (this.state = 0),
      (this.So = 0),
      (this.Do = null),
      (this.Co = null),
      (this.stream = null),
      (this.xo = new bv(e, n));
  }
  No() {
    return this.state === 1 || this.state === 5 || this.ko();
  }
  ko() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Oo();
  }
  async stop() {
    this.No() && (await this.close(0));
  }
  Mo() {
    (this.state = 0), this.xo.reset();
  }
  Fo() {
    this.ko() &&
      this.Do === null &&
      (this.Do = this.Hs.enqueueAfterDelay(this.vo, 6e4, () => this.$o()));
  }
  Bo(e) {
    this.Lo(), this.stream.send(e);
  }
  async $o() {
    if (this.ko()) return this.close(0);
  }
  Lo() {
    this.Do && (this.Do.cancel(), (this.Do = null));
  }
  Uo() {
    this.Co && (this.Co.cancel(), (this.Co = null));
  }
  async close(e, n) {
    this.Lo(),
      this.Uo(),
      this.xo.cancel(),
      this.So++,
      e !== 4
        ? this.xo.reset()
        : n && n.code === S.RESOURCE_EXHAUSTED
        ? (Ht(n.toString()),
          Ht("Using maximum backoff delay to prevent overloading the backend."),
          this.xo.Ao())
        : n &&
          n.code === S.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.qo(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.Zr(n);
  }
  qo() {}
  auth() {
    this.state = 1;
    const e = this.Ko(this.So),
      n = this.So;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.So === n && this.Go(r, i);
      },
      (r) => {
        e(() => {
          const i = new L(
            S.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.Qo(i);
        });
      }
    );
  }
  Go(e, n) {
    const r = this.Ko(this.So);
    (this.stream = this.jo(e, n)),
      this.stream.Yr(() => {
        r(
          () => (
            (this.state = 2),
            (this.Co = this.Hs.enqueueAfterDelay(
              this.Vo,
              1e4,
              () => (this.ko() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Yr()
          )
        );
      }),
      this.stream.Zr((i) => {
        r(() => this.Qo(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Oo() {
    (this.state = 5),
      this.xo.Ro(async () => {
        (this.state = 0), this.start();
      });
  }
  Qo(e) {
    return (
      P("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Ko(e) {
    return (n) => {
      this.Hs.enqueueAndForget(() =>
        this.So === e
          ? n()
          : (P(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class mI extends Hv {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.It = s);
  }
  jo(e, n) {
    return this.connection.wo("Listen", e, n);
  }
  onMessage(e) {
    this.xo.reset();
    const n = NT(this.It, e),
      r = (function (i) {
        if (!("targetChange" in i)) return j.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length
          ? j.min()
          : s.readTime
          ? Ut(s.readTime)
          : j.min();
      })(e);
    return this.listener.Wo(n, r);
  }
  zo(e) {
    const n = {};
    (n.database = wc(this.It)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = pc(a) ? { documents: DT(i, a) } : { query: RT(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = Mv(i, s.resumeToken))
            : s.snapshotVersion.compareTo(j.min()) > 0 &&
              (o.readTime = aa(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.It, e));
    const r = PT(this.It, e);
    r && (n.labels = r), this.Bo(n);
  }
  Ho(e) {
    const n = {};
    (n.database = wc(this.It)), (n.removeTarget = e), this.Bo(n);
  }
}
class gI extends Hv {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.It = s),
      (this.Jo = !1);
  }
  get Yo() {
    return this.Jo;
  }
  start() {
    (this.Jo = !1), (this.lastStreamToken = void 0), super.start();
  }
  qo() {
    this.Jo && this.Xo([]);
  }
  jo(e, n) {
    return this.connection.wo("Write", e, n);
  }
  onMessage(e) {
    if ((J(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.Jo)) {
      this.xo.reset();
      const n = xT(e.writeResults, e.commitTime),
        r = Ut(e.commitTime);
      return this.listener.Zo(r, n);
    }
    return (
      J(!e.writeResults || e.writeResults.length === 0),
      (this.Jo = !0),
      this.listener.tu()
    );
  }
  eu() {
    const e = {};
    (e.database = wc(this.It)), this.Bo(e);
  }
  Xo(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => _T(this.It, r)),
    };
    this.Bo(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yI extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.It = i),
      (this.nu = !1);
  }
  su() {
    if (this.nu)
      throw new L(
        S.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  ao(e, n, r) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, s]) => this.connection.ao(e, n, r, i, s))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new L(S.UNKNOWN, i.toString());
        })
    );
  }
  _o(e, n, r, i) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection._o(e, n, r, s, o, i))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new L(S.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.nu = !0;
  }
}
class vI {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.iu = 0),
      (this.ru = null),
      (this.ou = !0);
  }
  uu() {
    this.iu === 0 &&
      (this.cu("Unknown"),
      (this.ru = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.ru = null),
          this.au("Backend didn't respond within 10 seconds."),
          this.cu("Offline"),
          Promise.resolve()
        )
      )));
  }
  hu(e) {
    this.state === "Online"
      ? this.cu("Unknown")
      : (this.iu++,
        this.iu >= 1 &&
          (this.lu(),
          this.au(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.cu("Offline")));
  }
  set(e) {
    this.lu(), (this.iu = 0), e === "Online" && (this.ou = !1), this.cu(e);
  }
  cu(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  au(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.ou ? (Ht(n), (this.ou = !1)) : P("OnlineStateTracker", n);
  }
  lu() {
    this.ru !== null && (this.ru.cancel(), (this.ru = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wI {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.fu = []),
      (this.du = new Map()),
      (this._u = new Set()),
      (this.wu = []),
      (this.mu = s),
      this.mu.qr((o) => {
        r.enqueueAndForget(async () => {
          nr(this) &&
            (P(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              const l = V(a);
              l._u.add(4),
                await As(l),
                l.gu.set("Unknown"),
                l._u.delete(4),
                await Ja(l);
            })(this));
        });
      }),
      (this.gu = new vI(r, i));
  }
}
async function Ja(t) {
  if (nr(t)) for (const e of t.wu) await e(!0);
}
async function As(t) {
  for (const e of t.wu) await e(!1);
}
function Kv(t, e) {
  const n = V(t);
  n.du.has(e.targetId) ||
    (n.du.set(e.targetId, e), sd(n) ? id(n) : Zr(n).ko() && rd(n, e));
}
function Wv(t, e) {
  const n = V(t),
    r = Zr(n);
  n.du.delete(e),
    r.ko() && Qv(n, e),
    n.du.size === 0 && (r.ko() ? r.Fo() : nr(n) && n.gu.set("Unknown"));
}
function rd(t, e) {
  t.yu.Mt(e.targetId), Zr(t).zo(e);
}
function Qv(t, e) {
  t.yu.Mt(e), Zr(t).Ho(e);
}
function id(t) {
  (t.yu = new ET({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t.du.get(e) || null,
  })),
    Zr(t).start(),
    t.gu.uu();
}
function sd(t) {
  return nr(t) && !Zr(t).No() && t.du.size > 0;
}
function nr(t) {
  return V(t)._u.size === 0;
}
function qv(t) {
  t.yu = void 0;
}
async function EI(t) {
  t.du.forEach((e, n) => {
    rd(t, e);
  });
}
async function SI(t, e) {
  qv(t), sd(t) ? (t.gu.hu(e), id(t)) : t.gu.set("Unknown");
}
async function kI(t, e, n) {
  if ((t.gu.set("Online"), e instanceof Ov && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.du.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s),
            r.du.delete(o),
            r.yu.removeTarget(o));
      })(t, e);
    } catch (r) {
      P(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await la(t, r);
    }
  else if (
    (e instanceof Eo ? t.yu.Gt(e) : e instanceof Lv ? t.yu.Yt(e) : t.yu.Wt(e),
    !n.isEqual(j.min()))
  )
    try {
      const r = await jv(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, s) {
          const o = i.yu.te(s);
          return (
            o.targetChanges.forEach((a, l) => {
              if (a.resumeToken.approximateByteSize() > 0) {
                const u = i.du.get(l);
                u && i.du.set(l, u.withResumeToken(a.resumeToken, s));
              }
            }),
            o.targetMismatches.forEach((a) => {
              const l = i.du.get(a);
              if (!l) return;
              i.du.set(
                a,
                l.withResumeToken(ze.EMPTY_BYTE_STRING, l.snapshotVersion)
              ),
                Qv(i, a);
              const u = new bn(l.target, a, 1, l.sequenceNumber);
              rd(i, u);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      P("RemoteStore", "Failed to raise snapshot:", r), await la(t, r);
    }
}
async function la(t, e, n) {
  if (!xs(e)) throw e;
  t._u.add(1),
    await As(t),
    t.gu.set("Offline"),
    n || (n = () => jv(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      P("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t._u.delete(1),
        await Ja(t);
    });
}
function Gv(t, e) {
  return e().catch((n) => la(t, n, e));
}
async function Za(t) {
  const e = V(t),
    n = Sn(e);
  let r = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; CI(e); )
    try {
      const i = await aI(e.localStore, r);
      if (i === null) {
        e.fu.length === 0 && n.Fo();
        break;
      }
      (r = i.batchId), TI(e, i);
    } catch (i) {
      await la(e, i);
    }
  Xv(e) && Yv(e);
}
function CI(t) {
  return nr(t) && t.fu.length < 10;
}
function TI(t, e) {
  t.fu.push(e);
  const n = Sn(t);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function Xv(t) {
  return nr(t) && !Sn(t).No() && t.fu.length > 0;
}
function Yv(t) {
  Sn(t).start();
}
async function II(t) {
  Sn(t).eu();
}
async function NI(t) {
  const e = Sn(t);
  for (const n of t.fu) e.Xo(n.mutations);
}
async function _I(t, e, n) {
  const r = t.fu.shift(),
    i = Zh.from(r, e, n);
  await Gv(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Za(t);
}
async function xI(t, e) {
  e &&
    Sn(t).Yo &&
    (await (async function (n, r) {
      if (((i = r.code), mT(i) && i !== S.ABORTED)) {
        const s = n.fu.shift();
        Sn(n).Mo(),
          await Gv(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Za(n);
      }
      var i;
    })(t, e)),
    Xv(t) && Yv(t);
}
async function Ip(t, e) {
  const n = V(t);
  n.asyncQueue.verifyOperationInProgress(),
    P("RemoteStore", "RemoteStore received new credentials");
  const r = nr(n);
  n._u.add(3),
    await As(n),
    r && n.gu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n._u.delete(3),
    await Ja(n);
}
async function DI(t, e) {
  const n = V(t);
  e
    ? (n._u.delete(2), await Ja(n))
    : e || (n._u.add(2), await As(n), n.gu.set("Unknown"));
}
function Zr(t) {
  return (
    t.pu ||
      ((t.pu = (function (e, n, r) {
        const i = V(e);
        return (
          i.su(),
          new mI(
            n,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.It,
            r
          )
        );
      })(t.datastore, t.asyncQueue, {
        Yr: EI.bind(null, t),
        Zr: SI.bind(null, t),
        Wo: kI.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.pu.Mo(), sd(t) ? id(t) : t.gu.set("Unknown"))
          : (await t.pu.stop(), qv(t));
      })),
    t.pu
  );
}
function Sn(t) {
  return (
    t.Iu ||
      ((t.Iu = (function (e, n, r) {
        const i = V(e);
        return (
          i.su(),
          new gI(
            n,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.It,
            r
          )
        );
      })(t.datastore, t.asyncQueue, {
        Yr: II.bind(null, t),
        Zr: xI.bind(null, t),
        tu: NI.bind(null, t),
        Zo: _I.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.Iu.Mo(), await Za(t))
          : (await t.Iu.stop(),
            t.fu.length > 0 &&
              (P(
                "RemoteStore",
                `Stopping write stream with ${t.fu.length} pending writes`
              ),
              (t.fu = [])));
      })),
    t.Iu
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class od {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Ft()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new od(e, n, o, i, s);
    return a.start(r), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new L(S.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function ad(t, e) {
  if ((Ht("AsyncQueue", `${e}: ${t}`), xs(t)))
    return new L(S.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _r {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || O.comparator(n.key, r.key)
      : (n, r) => O.comparator(n.key, r.key)),
      (this.keyedMap = yi()),
      (this.sortedSet = new we(this.comparator));
  }
  static emptySet(e) {
    return new _r(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof _r) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new _r();
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Np {
  constructor() {
    this.Tu = new we(O.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.Tu.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.Tu = this.Tu.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.Tu = this.Tu.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.Tu = this.Tu.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.Tu = this.Tu.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : U()
      : (this.Tu = this.Tu.insert(n, e));
  }
  Eu() {
    const e = [];
    return (
      this.Tu.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class Br {
  constructor(e, n, r, i, s, o, a, l, u) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = l),
      (this.hasCachedResults = u);
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new Br(e, n, _r.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Qa(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RI {
  constructor() {
    (this.Au = void 0), (this.listeners = []);
  }
}
class AI {
  constructor() {
    (this.queries = new Jr((e) => vv(e), Qa)),
      (this.onlineState = "Unknown"),
      (this.Ru = new Set());
  }
}
async function Jv(t, e) {
  const n = V(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new RI())), i))
    try {
      s.Au = await n.onListen(r);
    } catch (o) {
      const a = ad(o, `Initialization of query '${gc(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s),
    s.listeners.push(e),
    e.bu(n.onlineState),
    s.Au && e.Pu(s.Au) && ld(n);
}
async function Zv(t, e) {
  const n = V(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function PI(t, e) {
  const n = V(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.listeners) a.Pu(i) && (r = !0);
      o.Au = i;
    }
  }
  r && ld(n);
}
function $I(t, e, n) {
  const r = V(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function ld(t) {
  t.Ru.forEach((e) => {
    e.next();
  });
}
class e0 {
  constructor(e, n, r) {
    (this.query = e),
      (this.vu = n),
      (this.Vu = !1),
      (this.Su = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  Pu(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new Br(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.Vu
        ? this.Du(e) && (this.vu.next(e), (n = !0))
        : this.Cu(e, this.onlineState) && (this.xu(e), (n = !0)),
      (this.Su = e),
      n
    );
  }
  onError(e) {
    this.vu.error(e);
  }
  bu(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Su &&
        !this.Vu &&
        this.Cu(this.Su, e) &&
        (this.xu(this.Su), (n = !0)),
      n
    );
  }
  Cu(e, n) {
    if (!e.fromCache) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.Nu || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  Du(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Su && this.Su.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  xu(e) {
    (e = Br.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.Vu = !0),
      this.vu.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t0 {
  constructor(e) {
    this.key = e;
  }
}
class n0 {
  constructor(e) {
    this.key = e;
  }
}
class LI {
  constructor(e, n) {
    (this.query = e),
      (this.Uu = n),
      (this.qu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ku = b()),
      (this.mutatedKeys = b()),
      (this.Gu = wv(e)),
      (this.Qu = new _r(this.Gu));
  }
  get ju() {
    return this.Uu;
  }
  Wu(e, n) {
    const r = n ? n.zu : new Np(),
      i = n ? n.Qu : this.Qu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      u =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((c, h) => {
        const d = i.get(c),
          m = Yh(this.query, h) ? h : null,
          y = !!d && this.mutatedKeys.has(d.key),
          v =
            !!m &&
            (m.hasLocalMutations ||
              (this.mutatedKeys.has(m.key) && m.hasCommittedMutations));
        let T = !1;
        d && m
          ? d.data.isEqual(m.data)
            ? y !== v && (r.track({ type: 3, doc: m }), (T = !0))
            : this.Hu(d, m) ||
              (r.track({ type: 2, doc: m }),
              (T = !0),
              ((l && this.Gu(m, l) > 0) || (u && this.Gu(m, u) < 0)) &&
                (a = !0))
          : !d && m
          ? (r.track({ type: 0, doc: m }), (T = !0))
          : d &&
            !m &&
            (r.track({ type: 1, doc: d }), (T = !0), (l || u) && (a = !0)),
          T &&
            (m
              ? ((o = o.add(m)), (s = v ? s.add(c) : s.delete(c)))
              : ((o = o.delete(c)), (s = s.delete(c))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(c.key)),
          (s = s.delete(c.key)),
          r.track({ type: 1, doc: c });
      }
    return { Qu: o, zu: r, $i: a, mutatedKeys: s };
  }
  Hu(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r) {
    const i = this.Qu;
    (this.Qu = e.Qu), (this.mutatedKeys = e.mutatedKeys);
    const s = e.zu.Eu();
    s.sort(
      (u, c) =>
        (function (h, d) {
          const m = (y) => {
            switch (y) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return U();
            }
          };
          return m(h) - m(d);
        })(u.type, c.type) || this.Gu(u.doc, c.doc)
    ),
      this.Ju(r);
    const o = n ? this.Yu() : [],
      a = this.Ku.size === 0 && this.current ? 1 : 0,
      l = a !== this.qu;
    return (
      (this.qu = a),
      s.length !== 0 || l
        ? {
            snapshot: new Br(
              this.query,
              e.Qu,
              i,
              s,
              e.mutatedKeys,
              a === 0,
              l,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            Xu: o,
          }
        : { Xu: o }
    );
  }
  bu(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { Qu: this.Qu, zu: new Np(), mutatedKeys: this.mutatedKeys, $i: !1 },
          !1
        ))
      : { Xu: [] };
  }
  Zu(e) {
    return (
      !this.Uu.has(e) && !!this.Qu.has(e) && !this.Qu.get(e).hasLocalMutations
    );
  }
  Ju(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Uu = this.Uu.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Uu = this.Uu.delete(n))),
      (this.current = e.current));
  }
  Yu() {
    if (!this.current) return [];
    const e = this.Ku;
    (this.Ku = b()),
      this.Qu.forEach((r) => {
        this.Zu(r.key) && (this.Ku = this.Ku.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.Ku.has(r) || n.push(new n0(r));
      }),
      this.Ku.forEach((r) => {
        e.has(r) || n.push(new t0(r));
      }),
      n
    );
  }
  tc(e) {
    (this.Uu = e.Hi), (this.Ku = b());
    const n = this.Wu(e.documents);
    return this.applyChanges(n, !0);
  }
  ec() {
    return Br.fromInitialDocuments(
      this.query,
      this.Qu,
      this.mutatedKeys,
      this.qu === 0,
      this.hasCachedResults
    );
  }
}
class OI {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class MI {
  constructor(e) {
    (this.key = e), (this.nc = !1);
  }
}
class FI {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.sc = {}),
      (this.ic = new Jr((a) => vv(a), Qa)),
      (this.rc = new Map()),
      (this.oc = new Set()),
      (this.uc = new we(O.comparator)),
      (this.cc = new Map()),
      (this.ac = new ed()),
      (this.hc = {}),
      (this.lc = new Map()),
      (this.fc = Vr.vn()),
      (this.onlineState = "Unknown"),
      (this.dc = void 0);
  }
  get isPrimaryClient() {
    return this.dc === !0;
  }
}
async function UI(t, e) {
  const n = qI(t);
  let r, i;
  const s = n.ic.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.ec());
  else {
    const o = await lI(n.localStore, Kt(e));
    n.isPrimaryClient && Kv(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await VI(n, e, r, a === "current", o.resumeToken));
  }
  return i;
}
async function VI(t, e, n, r, i) {
  t._c = (h, d, m) =>
    (async function (y, v, T, p) {
      let f = v.view.Wu(T);
      f.$i &&
        (f = await kp(y.localStore, v.query, !1).then(({ documents: I }) =>
          v.view.Wu(I, f)
        ));
      const g = p && p.targetChanges.get(v.targetId),
        E = v.view.applyChanges(f, y.isPrimaryClient, g);
      return xp(y, v.targetId, E.Xu), E.snapshot;
    })(t, h, d, m);
  const s = await kp(t.localStore, e, !0),
    o = new LI(e, s.Hi),
    a = o.Wu(s.documents),
    l = Rs.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      i
    ),
    u = o.applyChanges(a, t.isPrimaryClient, l);
  xp(t, n, u.Xu);
  const c = new OI(e, n, o);
  return (
    t.ic.set(e, c),
    t.rc.has(n) ? t.rc.get(n).push(e) : t.rc.set(n, [e]),
    u.snapshot
  );
}
async function BI(t, e) {
  const n = V(t),
    r = n.ic.get(e),
    i = n.rc.get(r.targetId);
  if (i.length > 1)
    return (
      n.rc.set(
        r.targetId,
        i.filter((s) => !Qa(s, e))
      ),
      void n.ic.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await Ec(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              Wv(n.remoteStore, r.targetId),
              Sc(n, r.targetId);
          })
          .catch(_s)))
    : (Sc(n, r.targetId), await Ec(n.localStore, r.targetId, !0));
}
async function zI(t, e, n) {
  const r = GI(t);
  try {
    const i = await (function (s, o) {
      const a = V(s),
        l = ye.now(),
        u = o.reduce((d, m) => d.add(m.key), b());
      let c, h;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (d) => {
          let m = Wt(),
            y = b();
          return a.Gi.getEntries(d, u)
            .next((v) => {
              (m = v),
                m.forEach((T, p) => {
                  p.isValidDocument() || (y = y.add(T));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(d, m))
            .next((v) => {
              c = v;
              const T = [];
              for (const p of o) {
                const f = dT(p, c.get(p.key).overlayedDocument);
                f != null &&
                  T.push(new xn(p.key, f, gv(f.value.mapValue), Dt.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(d, l, T, o);
            })
            .next((v) => {
              h = v;
              const T = v.applyToLocalDocumentSet(c, y);
              return a.documentOverlayCache.saveOverlays(d, v.batchId, T);
            });
        })
        .then(() => ({ batchId: h.batchId, changes: Av(c) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, a) {
        let l = s.hc[s.currentUser.toKey()];
        l || (l = new we(G)),
          (l = l.insert(o, a)),
          (s.hc[s.currentUser.toKey()] = l);
      })(r, i.batchId, n),
      await Ps(r, i.changes),
      await Za(r.remoteStore);
  } catch (i) {
    const s = ad(i, "Failed to persist write");
    n.reject(s);
  }
}
async function r0(t, e) {
  const n = V(t);
  try {
    const r = await sI(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.cc.get(s);
      o &&
        (J(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.nc = !0)
          : i.modifiedDocuments.size > 0
          ? J(o.nc)
          : i.removedDocuments.size > 0 && (J(o.nc), (o.nc = !1)));
    }),
      await Ps(n, r, e);
  } catch (r) {
    await _s(r);
  }
}
function _p(t, e, n) {
  const r = V(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.ic.forEach((s, o) => {
      const a = o.view.bu(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        const a = V(s);
        a.onlineState = o;
        let l = !1;
        a.queries.forEach((u, c) => {
          for (const h of c.listeners) h.bu(o) && (l = !0);
        }),
          l && ld(a);
      })(r.eventManager, e),
      i.length && r.sc.Wo(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function jI(t, e, n) {
  const r = V(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.cc.get(e),
    s = i && i.key;
  if (s) {
    let o = new we(O.comparator);
    o = o.insert(s, xe.newNoDocument(s, j.min()));
    const a = b().add(s),
      l = new Xa(j.min(), new Map(), new ve(G), o, a);
    await r0(r, l), (r.uc = r.uc.remove(s)), r.cc.delete(e), ud(r);
  } else
    await Ec(r.localStore, e, !1)
      .then(() => Sc(r, e, n))
      .catch(_s);
}
async function bI(t, e) {
  const n = V(t),
    r = e.batch.batchId;
  try {
    const i = await iI(n.localStore, e);
    s0(n, r, null),
      i0(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Ps(n, i);
  } catch (i) {
    await _s(i);
  }
}
async function HI(t, e, n) {
  const r = V(t);
  try {
    const i = await (function (s, o) {
      const a = V(s);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (l) => {
          let u;
          return a.mutationQueue
            .lookupMutationBatch(l, o)
            .next(
              (c) => (
                J(c !== null),
                (u = c.keys()),
                a.mutationQueue.removeMutationBatch(l, c)
              )
            )
            .next(() => a.mutationQueue.performConsistencyCheck(l))
            .next(() =>
              a.documentOverlayCache.removeOverlaysForBatchId(l, u, o)
            )
            .next(() =>
              a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l, u)
            )
            .next(() => a.localDocuments.getDocuments(l, u));
        }
      );
    })(r.localStore, e);
    s0(r, e, n),
      i0(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await Ps(r, i);
  } catch (i) {
    await _s(i);
  }
}
function i0(t, e) {
  (t.lc.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.lc.delete(e);
}
function s0(t, e, n) {
  const r = V(t);
  let i = r.hc[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.hc[r.currentUser.toKey()] = i);
  }
}
function Sc(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.rc.get(e)) t.ic.delete(r), n && t.sc.wc(r, n);
  t.rc.delete(e),
    t.isPrimaryClient &&
      t.ac.ls(e).forEach((r) => {
        t.ac.containsKey(r) || o0(t, r);
      });
}
function o0(t, e) {
  t.oc.delete(e.path.canonicalString());
  const n = t.uc.get(e);
  n !== null &&
    (Wv(t.remoteStore, n), (t.uc = t.uc.remove(e)), t.cc.delete(n), ud(t));
}
function xp(t, e, n) {
  for (const r of n)
    r instanceof t0
      ? (t.ac.addReference(r.key, e), KI(t, r))
      : r instanceof n0
      ? (P("SyncEngine", "Document no longer in limbo: " + r.key),
        t.ac.removeReference(r.key, e),
        t.ac.containsKey(r.key) || o0(t, r.key))
      : U();
}
function KI(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.uc.get(n) ||
    t.oc.has(r) ||
    (P("SyncEngine", "New document in limbo: " + n), t.oc.add(r), ud(t));
}
function ud(t) {
  for (; t.oc.size > 0 && t.uc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.oc.values().next().value;
    t.oc.delete(e);
    const n = new O(re.fromString(e)),
      r = t.fc.next();
    t.cc.set(r, new MI(n)),
      (t.uc = t.uc.insert(n, r)),
      Kv(t.remoteStore, new bn(Kt(Xh(n.path)), r, 2, Wh.at));
  }
}
async function Ps(t, e, n) {
  const r = V(t),
    i = [],
    s = [],
    o = [];
  r.ic.isEmpty() ||
    (r.ic.forEach((a, l) => {
      o.push(
        r._c(l, e, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                l.targetId,
                u != null && u.fromCache ? "not-current" : "current"
              ),
            u)
          ) {
            i.push(u);
            const c = nd.Ci(l.targetId, u);
            s.push(c);
          }
        })
      );
    }),
    await Promise.all(o),
    r.sc.Wo(i),
    await (async function (a, l) {
      const u = V(a);
      try {
        await u.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (c) =>
            C.forEach(l, (h) =>
              C.forEach(h.Si, (d) =>
                u.persistence.referenceDelegate.addReference(c, h.targetId, d)
              ).next(() =>
                C.forEach(h.Di, (d) =>
                  u.persistence.referenceDelegate.removeReference(
                    c,
                    h.targetId,
                    d
                  )
                )
              )
            )
        );
      } catch (c) {
        if (!xs(c)) throw c;
        P("LocalStore", "Failed to update sequence numbers: " + c);
      }
      for (const c of l) {
        const h = c.targetId;
        if (!c.fromCache) {
          const d = u.Ui.get(h),
            m = d.snapshotVersion,
            y = d.withLastLimboFreeSnapshotVersion(m);
          u.Ui = u.Ui.insert(h, y);
        }
      }
    })(r.localStore, s));
}
async function WI(t, e) {
  const n = V(t);
  if (!n.currentUser.isEqual(e)) {
    P("SyncEngine", "User change. New user:", e.toKey());
    const r = await zv(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.lc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new L(S.CANCELLED, s));
          });
        }),
          i.lc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Ps(n, r.ji);
  }
}
function QI(t, e) {
  const n = V(t),
    r = n.cc.get(e);
  if (r && r.nc) return b().add(r.key);
  {
    let i = b();
    const s = n.rc.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.ic.get(o);
      i = i.unionWith(a.view.ju);
    }
    return i;
  }
}
function qI(t) {
  const e = V(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = r0.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = QI.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = jI.bind(null, e)),
    (e.sc.Wo = PI.bind(null, e.eventManager)),
    (e.sc.wc = $I.bind(null, e.eventManager)),
    e
  );
}
function GI(t) {
  const e = V(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = bI.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = HI.bind(null, e)),
    e
  );
}
class XI {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.It = Ya(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.gc(e)),
      (this.persistence = this.yc(e)),
      await this.persistence.start(),
      (this.localStore = this.Ic(e)),
      (this.gcScheduler = this.Tc(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Ec(e, this.localStore));
  }
  Tc(e, n) {
    return null;
  }
  Ec(e, n) {
    return null;
  }
  Ic(e) {
    return rI(this.persistence, new tI(), e.initialUser, this.It);
  }
  yc(e) {
    return new ZT(td.Bs, this.It);
  }
  gc(e) {
    return new cI();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class YI {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        _p(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = WI.bind(
        null,
        this.syncEngine
      )),
      await DI(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new AI();
  }
  createDatastore(e) {
    const n = Ya(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new pI(i));
    var i;
    return (function (s, o, a, l) {
      return new yI(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => _p(this.syncEngine, a, 0)),
      (o = Tp.C() ? new Tp() : new hI()),
      new wI(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, u) {
      const c = new FI(r, i, s, o, a, l);
      return u && (c.dc = !0), c;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  terminate() {
    return (async function (e) {
      const n = V(e);
      P("RemoteStore", "RemoteStore shutting down."),
        n._u.add(5),
        await As(n),
        n.mu.shutdown(),
        n.gu.set("Unknown");
    })(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a0(t, e, n) {
  if (!n)
    throw new L(
      S.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function JI(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new L(S.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Dp(t) {
  if (!O.isDocumentKey(t))
    throw new L(
      S.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function Rp(t) {
  if (O.isDocumentKey(t))
    throw new L(
      S.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function cd(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (n) {
        return n.constructor ? n.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : U();
}
function kn(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new L(
        S.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = cd(t);
      throw new L(
        S.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ap = new Map();
class Pp {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new L(
          S.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new L(
          S.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      JI(
        "experimentalForceLongPolling",
        e.experimentalForceLongPolling,
        "experimentalAutoDetectLongPolling",
        e.experimentalAutoDetectLongPolling
      );
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class el {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Pp({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new L(
        S.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new L(
        S.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Pp(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new NC();
          switch (n.type) {
            case "gapi":
              const r = n.client;
              return new RC(
                r,
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new L(
                S.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const n = Ap.get(e);
        n &&
          (P("ComponentProvider", "Removing Datastore"),
          Ap.delete(e),
          n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function ZI(t, e, n, r = {}) {
  var i;
  const s = (t = kn(t, el))._getSettings();
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== e &&
      hc(
        "Host has been set in both settings() and useEmulator(), emulator host will be used"
      ),
    t._setSettings(
      Object.assign(Object.assign({}, s), { host: `${e}:${n}`, ssl: !1 })
    ),
    r.mockUserToken)
  ) {
    let o, a;
    if (typeof r.mockUserToken == "string")
      (o = r.mockUserToken), (a = Oe.MOCK_USER);
    else {
      o = dS(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      );
      const l = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!l)
        throw new L(
          S.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      a = new Oe(l);
    }
    t._authCredentials = new _C(new hv(o, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt {
  constructor(e, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new mn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new rt(this.firestore, e, this._key);
  }
}
class tl {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new tl(this.firestore, e, this._query);
  }
}
class mn extends tl {
  constructor(e, n, r) {
    super(e, n, Xh(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new rt(this.firestore, null, new O(e));
  }
  withConverter(e) {
    return new mn(this.firestore, e, this._path);
  }
}
function l0(t, e, ...n) {
  if (((t = vn(t)), a0("collection", "path", e), t instanceof el)) {
    const r = re.fromString(e, ...n);
    return Rp(r), new mn(t, null, r);
  }
  {
    if (!(t instanceof rt || t instanceof mn))
      throw new L(
        S.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(re.fromString(e, ...n));
    return Rp(r), new mn(t.firestore, null, r);
  }
}
function kc(t, e, ...n) {
  if (
    ((t = vn(t)),
    arguments.length === 1 && (e = dv.R()),
    a0("doc", "path", e),
    t instanceof el)
  ) {
    const r = re.fromString(e, ...n);
    return Dp(r), new rt(t, null, new O(r));
  }
  {
    if (!(t instanceof rt || t instanceof mn))
      throw new L(
        S.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(re.fromString(e, ...n));
    return (
      Dp(r), new rt(t.firestore, t instanceof mn ? t.converter : null, new O(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class u0 {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Rc(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Rc(this.observer.error, e)
      : Ht("Uncaught Error in snapshot listener:", e.toString());
  }
  bc() {
    this.muted = !0;
  }
  Rc(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eN {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Oe.UNAUTHENTICATED),
      (this.clientId = dv.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        P("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          P("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new L(
        S.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Ft();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents &&
              (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = ad(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function tN(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    P("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await zv(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function nN(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await rN(t);
  P("FirestoreClient", "Initializing OnlineComponentProvider");
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => Ip(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => Ip(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function rN(t) {
  return (
    t.offlineComponents ||
      (P("FirestoreClient", "Using default OfflineComponentProvider"),
      await tN(t, new XI())),
    t.offlineComponents
  );
}
async function c0(t) {
  return (
    t.onlineComponents ||
      (P("FirestoreClient", "Using default OnlineComponentProvider"),
      await nN(t, new YI())),
    t.onlineComponents
  );
}
function iN(t) {
  return c0(t).then((e) => e.syncEngine);
}
async function h0(t) {
  const e = await c0(t),
    n = e.eventManager;
  return (
    (n.onListen = UI.bind(null, e.syncEngine)),
    (n.onUnlisten = BI.bind(null, e.syncEngine)),
    n
  );
}
function sN(t, e, n = {}) {
  const r = new Ft();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const u = new u0({
            next: (h) => {
              s.enqueueAndForget(() => Zv(i, c));
              const d = h.docs.has(o);
              !d && h.fromCache
                ? l.reject(
                    new L(
                      S.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : d && h.fromCache && a && a.source === "server"
                ? l.reject(
                    new L(
                      S.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : l.resolve(h);
            },
            error: (h) => l.reject(h),
          }),
          c = new e0(Xh(o.path), u, { includeMetadataChanges: !0, Nu: !0 });
        return Jv(i, c);
      })(await h0(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
function oN(t, e, n = {}) {
  const r = new Ft();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const u = new u0({
            next: (h) => {
              s.enqueueAndForget(() => Zv(i, c)),
                h.fromCache && a.source === "server"
                  ? l.reject(
                      new L(
                        S.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(h);
            },
            error: (h) => l.reject(h),
          }),
          c = new e0(o, u, { includeMetadataChanges: !0, Nu: !0 });
        return Jv(i, c);
      })(await h0(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
class aN {
  constructor() {
    (this.Bc = Promise.resolve()),
      (this.Lc = []),
      (this.Uc = !1),
      (this.qc = []),
      (this.Kc = null),
      (this.Gc = !1),
      (this.Qc = !1),
      (this.jc = []),
      (this.xo = new bv(this, "async_queue_retry")),
      (this.Wc = () => {
        const n = Gl();
        n &&
          P("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.xo.Po();
      });
    const e = Gl();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this.Wc);
  }
  get isShuttingDown() {
    return this.Uc;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.zc(), this.Hc(e);
  }
  enterRestrictedMode(e) {
    if (!this.Uc) {
      (this.Uc = !0), (this.Qc = e || !1);
      const n = Gl();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Wc);
    }
  }
  enqueue(e) {
    if ((this.zc(), this.Uc)) return new Promise(() => {});
    const n = new Ft();
    return this.Hc(() =>
      this.Uc && this.Qc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Lc.push(e), this.Jc()));
  }
  async Jc() {
    if (this.Lc.length !== 0) {
      try {
        await this.Lc[0](), this.Lc.shift(), this.xo.reset();
      } catch (e) {
        if (!xs(e)) throw e;
        P("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.Lc.length > 0 && this.xo.Ro(() => this.Jc());
    }
  }
  Hc(e) {
    const n = this.Bc.then(
      () => (
        (this.Gc = !0),
        e()
          .catch((r) => {
            (this.Kc = r), (this.Gc = !1);
            const i = (function (s) {
              let o = s.message || "";
              return (
                s.stack &&
                  (o = s.stack.includes(s.message)
                    ? s.stack
                    : s.message +
                      `
` +
                      s.stack),
                o
              );
            })(r);
            throw (Ht("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.Gc = !1), r))
      )
    );
    return (this.Bc = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.zc(), this.jc.indexOf(e) > -1 && (n = 0);
    const i = od.createAndSchedule(this, e, n, r, (s) => this.Yc(s));
    return this.qc.push(i), i;
  }
  zc() {
    this.Kc && U();
  }
  verifyOperationInProgress() {}
  async Xc() {
    let e;
    do (e = this.Bc), await e;
    while (e !== this.Bc);
  }
  Zc(e) {
    for (const n of this.qc) if (n.timerId === e) return !0;
    return !1;
  }
  ta(e) {
    return this.Xc().then(() => {
      this.qc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.qc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Xc();
    });
  }
  ea(e) {
    this.jc.push(e);
  }
  Yc(e) {
    const n = this.qc.indexOf(e);
    this.qc.splice(n, 1);
  }
}
class $s extends el {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new aN()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || d0(this), this._firestoreClient.terminate();
  }
}
function lN(t, e) {
  const n = typeof t == "object" ? t : pk(),
    r = typeof t == "string" ? t : e || "(default)",
    i = ck(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = uS("firestore");
    s && ZI(i, ...s);
  }
  return i;
}
function hd(t) {
  return (
    t._firestoreClient || d0(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function d0(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new zC(
        i,
        s,
        o,
        a.host,
        a.ssl,
        a.experimentalForceLongPolling,
        a.experimentalAutoDetectLongPolling,
        a.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      n
    );
  t._firestoreClient = new eN(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zr {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new zr(ze.fromBase64String(e));
    } catch (n) {
      throw new L(
        S.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new zr(ze.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nl {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new L(
          S.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new Fe(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dd {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fd {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new L(
        S.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new L(
        S.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return G(this._lat, e._lat) || G(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uN = /^__.*__$/;
class cN {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new xn(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Ds(e, this.data, n, this.fieldTransforms);
  }
}
class f0 {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new xn(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function p0(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw U();
  }
}
class pd {
  constructor(e, n, r, i, s, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.It = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.na(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get sa() {
    return this.settings.sa;
  }
  ia(e) {
    return new pd(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  ra(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.ia({ path: r, oa: !1 });
    return i.ua(e), i;
  }
  ca(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.ia({ path: r, oa: !1 });
    return i.na(), i;
  }
  aa(e) {
    return this.ia({ path: void 0, oa: !0 });
  }
  ha(e) {
    return ua(
      e,
      this.settings.methodName,
      this.settings.la || !1,
      this.path,
      this.settings.fa
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  na() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.ua(this.path.get(e));
  }
  ua(e) {
    if (e.length === 0) throw this.ha("Document fields must not be empty");
    if (p0(this.sa) && uN.test(e))
      throw this.ha('Document fields cannot begin and end with "__"');
  }
}
class hN {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.It = r || Ya(e));
  }
  da(e, n, r, i = !1) {
    return new pd(
      { sa: e, methodName: n, fa: r, path: Fe.emptyPath(), oa: !1, la: i },
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties
    );
  }
}
function m0(t) {
  const e = t._freezeSettings(),
    n = Ya(t._databaseId);
  return new hN(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function dN(t, e, n, r, i, s = {}) {
  const o = t.da(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  md("Data must be an object, but it was:", o, r);
  const a = g0(r, o);
  let l, u;
  if (s.merge) (l = new dt(o.fieldMask)), (u = o.fieldTransforms);
  else if (s.mergeFields) {
    const c = [];
    for (const h of s.mergeFields) {
      const d = Cc(e, h, n);
      if (!o.contains(d))
        throw new L(
          S.INVALID_ARGUMENT,
          `Field '${d}' is specified in your field mask but missing from your input data.`
        );
      v0(c, d) || c.push(d);
    }
    (l = new dt(c)), (u = o.fieldTransforms.filter((h) => l.covers(h.field)));
  } else (l = null), (u = o.fieldTransforms);
  return new cN(new qe(a), l, u);
}
class rl extends dd {
  _toFieldTransform(e) {
    if (e.sa !== 2)
      throw e.sa === 1
        ? e.ha(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : e.ha(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof rl;
  }
}
function fN(t, e, n, r) {
  const i = t.da(1, e, n);
  md("Data must be an object, but it was:", i, r);
  const s = [],
    o = qe.empty();
  tr(r, (l, u) => {
    const c = gd(e, l, n);
    u = vn(u);
    const h = i.ca(c);
    if (u instanceof rl) s.push(c);
    else {
      const d = il(u, h);
      d != null && (s.push(c), o.set(c, d));
    }
  });
  const a = new dt(s);
  return new f0(o, a, i.fieldTransforms);
}
function pN(t, e, n, r, i, s) {
  const o = t.da(1, e, n),
    a = [Cc(e, r, n)],
    l = [i];
  if (s.length % 2 != 0)
    throw new L(
      S.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let d = 0; d < s.length; d += 2) a.push(Cc(e, s[d])), l.push(s[d + 1]);
  const u = [],
    c = qe.empty();
  for (let d = a.length - 1; d >= 0; --d)
    if (!v0(u, a[d])) {
      const m = a[d];
      let y = l[d];
      y = vn(y);
      const v = o.ca(m);
      if (y instanceof rl) u.push(m);
      else {
        const T = il(y, v);
        T != null && (u.push(m), c.set(m, T));
      }
    }
  const h = new dt(u);
  return new f0(c, h, o.fieldTransforms);
}
function il(t, e) {
  if (y0((t = vn(t)))) return md("Unsupported field value:", e, t), g0(t, e);
  if (t instanceof dd)
    return (
      (function (n, r) {
        if (!p0(r.sa))
          throw r.ha(
            `${n._methodName}() can only be used with update() and set()`
          );
        if (!r.path)
          throw r.ha(
            `${n._methodName}() is not currently supported inside arrays`
          );
        const i = n._toFieldTransform(r);
        i && r.fieldTransforms.push(i);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.oa && e.sa !== 4)
      throw e.ha("Nested arrays are not supported");
    return (function (n, r) {
      const i = [];
      let s = 0;
      for (const o of n) {
        let a = il(o, r.aa(s));
        a == null && (a = { nullValue: "NULL_VALUE" }), i.push(a), s++;
      }
      return { arrayValue: { values: i } };
    })(t, e);
  }
  return (function (n, r) {
    if ((n = vn(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return oT(r.It, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const i = ye.fromDate(n);
      return { timestampValue: aa(r.It, i) };
    }
    if (n instanceof ye) {
      const i = new ye(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: aa(r.It, i) };
    }
    if (n instanceof fd)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof zr) return { bytesValue: Mv(r.It, n._byteString) };
    if (n instanceof rt) {
      const i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r.ha(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: Jh(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r.ha(`Unsupported field value: ${cd(n)}`);
  })(t, e);
}
function g0(t, e) {
  const n = {};
  return (
    fv(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : tr(t, (r, i) => {
          const s = il(i, e.ra(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function y0(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof ye ||
    t instanceof fd ||
    t instanceof zr ||
    t instanceof rt ||
    t instanceof dd
  );
}
function md(t, e, n) {
  if (
    !y0(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    const r = cd(n);
    throw r === "an object" ? e.ha(t + " a custom object") : e.ha(t + " " + r);
  }
}
function Cc(t, e, n) {
  if ((e = vn(e)) instanceof nl) return e._internalPath;
  if (typeof e == "string") return gd(t, e);
  throw ua("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const mN = new RegExp("[~\\*/\\[\\]]");
function gd(t, e, n) {
  if (e.search(mN) >= 0)
    throw ua(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new nl(...e.split("."))._internalPath;
  } catch {
    throw ua(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function ua(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let l = "";
  return (
    (s || o) &&
      ((l += " (found"),
      s && (l += ` in field ${r}`),
      o && (l += ` in document ${i}`),
      (l += ")")),
    new L(S.INVALID_ARGUMENT, a + t + l)
  );
}
function v0(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w0 {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new rt(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new gN(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(E0("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class gN extends w0 {
  data() {
    return super.data();
  }
}
function E0(t, e) {
  return typeof e == "string"
    ? gd(t, e)
    : e instanceof nl
    ? e._internalPath
    : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yN(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new L(
      S.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vN {
  convertValue(e, n = "none") {
    switch (Yn(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return fe(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Fr(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw U();
    }
  }
  convertObject(e, n) {
    const r = {};
    return (
      tr(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new fd(fe(e.latitude), fe(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = mv(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(os(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = En(e);
    return new ye(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = re.fromString(e);
    J(Bv(r));
    const i = new as(r.get(1), r.get(3)),
      s = new O(r.popFirst(5));
    return (
      i.isEqual(n) ||
        Ht(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wN(t, e, n) {
  let r;
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vi {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class S0 extends w0 {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new So(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(E0("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class So extends S0 {
  data(e = {}) {
    return super.data(e);
  }
}
class EN {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new vi(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new So(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new vi(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new L(
        S.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => {
              const a = new So(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new vi(
                  r._snapshot.mutatedKeys.has(o.doc.key),
                  r._snapshot.fromCache
                ),
                r.query.converter
              );
              return (
                o.doc, { type: "added", doc: a, oldIndex: -1, newIndex: s++ }
              );
            });
          }
          {
            let s = r._snapshot.oldDocs;
            return r._snapshot.docChanges
              .filter((o) => i || o.type !== 3)
              .map((o) => {
                const a = new So(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new vi(
                    r._snapshot.mutatedKeys.has(o.doc.key),
                    r._snapshot.fromCache
                  ),
                  r.query.converter
                );
                let l = -1,
                  u = -1;
                return (
                  o.type !== 0 &&
                    ((l = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 &&
                    ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                  { type: SN(o.type), doc: a, oldIndex: l, newIndex: u }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function SN(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return U();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kN(t) {
  t = kn(t, rt);
  const e = kn(t.firestore, $s);
  return sN(hd(e), t._key).then((n) => NN(e, t, n));
}
class k0 extends vN {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new zr(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new rt(this.firestore, null, n);
  }
}
function CN(t) {
  t = kn(t, tl);
  const e = kn(t.firestore, $s),
    n = hd(e),
    r = new k0(e);
  return yN(t._query), oN(n, t._query).then((i) => new EN(e, r, t, i));
}
function TN(t, e, n, ...r) {
  t = kn(t, rt);
  const i = kn(t.firestore, $s),
    s = m0(i);
  let o;
  return (
    (o =
      typeof (e = vn(e)) == "string" || e instanceof nl
        ? pN(s, "updateDoc", t._key, e, n, r)
        : fN(s, "updateDoc", t._key, e)),
    C0(i, [o.toMutation(t._key, Dt.exists(!0))])
  );
}
function IN(t, e) {
  const n = kn(t.firestore, $s),
    r = kc(t),
    i = wN(t.converter, e);
  return C0(n, [
    dN(
      m0(t.firestore),
      "addDoc",
      r._key,
      i,
      t.converter !== null,
      {}
    ).toMutation(r._key, Dt.exists(!1)),
  ]).then(() => r);
}
function C0(t, e) {
  return (function (n, r) {
    const i = new Ft();
    return (
      n.asyncQueue.enqueueAndForget(async () => zI(await iN(n), r, i)),
      i.promise
    );
  })(hd(t), e);
}
function NN(t, e, n) {
  const r = n.docs.get(e._key),
    i = new k0(t);
  return new S0(
    t,
    i,
    e._key,
    r,
    new vi(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
(function (t, e = !0) {
  (function (n) {
    Yr = n;
  })(fk),
    qo(
      new Ji(
        "firestore",
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider("app").getImmediate(),
            o = new $s(
              new xC(n.getProvider("auth-internal")),
              new PC(n.getProvider("app-check-internal")),
              (function (a, l) {
                if (
                  !Object.prototype.hasOwnProperty.apply(a.options, [
                    "projectId",
                  ])
                )
                  throw new L(
                    S.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new as(a.options.projectId, l);
              })(s, r),
              s
            );
          return (
            (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    Ir(rp, "3.7.3", t),
    Ir(rp, "3.7.3", "esm2017");
})();
var _N = "firebase",
  xN = "9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ir(_N, xN, "app");
const DN = {
    apiKey: "AIzaSyBa9zRKNS9GF2UKyaO71QvFW6KulUjhado",
    authDomain: "registro-alumnos-utl.firebaseapp.com",
    projectId: "registro-alumnos-utl",
    storageBucket: "registro-alumnos-utl.appspot.com",
    messagingSenderId: "264448475685",
    appId: "1:264448475685:web:7077da543321cc8f7c35cc",
  },
  RN = oy(DN),
  ca = lN(RN),
  AN = () => {
    const [t, e] = A.exports.useState(""),
      [n, r] = A.exports.useState(""),
      [i, s] = A.exports.useState(""),
      [o, a] = A.exports.useState(""),
      [l, u] = A.exports.useState(""),
      [c, h] = A.exports.useState(""),
      d = Eh(),
      m = l0(ca, "estudiantes");
    return F(Wr, {
      children: [
        w(kh, {}),
        F("div", {
          className: "container-fluid p-5",
          children: [
            w("div", {
              className: "col align-self-end pb-5",
              children: w(Sh, {
                className: "btn btn-danger ",
                role: "button",
                to: "/students",
                children: "Cancelar",
              }),
            }),
            F("div", {
              className: "card",
              children: [
                w("div", {
                  className: "card-header",
                  children: w("h3", { children: "Agregar nuevo estudiante" }),
                }),
                w("div", {
                  className: "card-body",
                  children: F("form", {
                    onSubmit: async (v) => {
                      v.preventDefault(),
                        await IN(m, {
                          nombre: t,
                          apellidos: n,
                          email: i,
                          carrera: o,
                          twitter: l,
                          avatar: c,
                        }),
                        d("/students");
                    },
                    children: [
                      w("h5", { htmlFor: "", children: "Datos generales" }),
                      F("div", {
                        className: "input-group mb-3",
                        children: [
                          w("span", {
                            className: "input-group-text",
                            id: "basic-addon1",
                            children: "Nombre",
                          }),
                          w("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Ingrese un nombre",
                            name: "nombre",
                            id: "nombre",
                            "aria-label": "nombre",
                            "aria-describedby": "basic-addon1",
                            value: t,
                            onChange: (v) => e(v.target.value),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "input-group mb-3",
                        children: [
                          w("span", {
                            className: "input-group-text",
                            id: "basic-addon1",
                            children: "Apellido/s",
                          }),
                          w("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Ingrese tus apellidos",
                            name: "apellidos",
                            id: "apellidos",
                            "aria-label": "apellidos",
                            "aria-describedby": "basic-addon1",
                            value: n,
                            onChange: (v) => r(v.target.value),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "input-group mb-3",
                        children: [
                          w("span", {
                            className: "input-group-text",
                            id: "basic-addon1",
                            children: "Correo electronico",
                          }),
                          w("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Ingrese un correo electronico",
                            name: "email",
                            id: "email",
                            "aria-label": "email",
                            "aria-describedby": "basic-addon1",
                            value: i,
                            onChange: (v) => s(v.target.value),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "input-group mb-3",
                        children: [
                          w("span", {
                            className: "input-group-text",
                            id: "basic-addon1",
                            children: "Carrera universitaria",
                          }),
                          w("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Ingrese su carrera universitaria",
                            id: "carrera",
                            "aria-label": "carrera",
                            "aria-describedby": "basic-addon1",
                            value: o,
                            onChange: (v) => a(v.target.value),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "input-group mb-3",
                        children: [
                          w("span", {
                            className: "input-group-text",
                            id: "basic-addon1",
                            children: "Usuario de Twitter",
                          }),
                          w("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Ingrese su usuario de Twitter",
                            name: "twitter",
                            id: "twitter",
                            "aria-label": "twitter",
                            "aria-describedby": "basic-addon1",
                            value: l,
                            onChange: (v) => u(v.target.value),
                          }),
                        ],
                      }),
                      w("h5", { children: "Escoge un avatar" }),
                      F("div", {
                        className: "form-check form-check-inline",
                        children: [
                          w("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "avatar",
                            id: "avatar1",
                            value:
                              "https://cdn-icons-png.flaticon.com/512/4202/4202835.png",
                            onChange: (v) => h(v.target.value),
                          }),
                          w("label", {
                            className: "form-check-label",
                            for: "avatar1",
                            children: w("img", {
                              src: "https://cdn-icons-png.flaticon.com/512/4202/4202835.png",
                              alt: "twbs",
                              width: "20%",
                              className: "rounded-circle flex-shrink-0",
                            }),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "form-check form-check-inline",
                        children: [
                          w("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "avatar",
                            id: "avatar2",
                            value:
                              "https://cdn-icons-png.flaticon.com/512/4202/4202834.png",
                            onChange: (v) => h(v.target.value),
                          }),
                          w("label", {
                            className: "form-check-label",
                            for: "avatar2",
                            children: w("img", {
                              src: "https://cdn-icons-png.flaticon.com/512/4202/4202834.png",
                              alt: "twbs",
                              width: "20%",
                              className: "rounded-circle flex-shrink-0",
                            }),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "form-check form-check-inline",
                        children: [
                          w("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "avatar",
                            id: "avatar3",
                            value:
                              "https://cdn-icons-png.flaticon.com/512/8602/8602751.png",
                            onChange: (v) => h(v.target.value),
                          }),
                          w("label", {
                            className: "form-check-label",
                            for: "avatar3",
                            children: w("img", {
                              src: "https://cdn-icons-png.flaticon.com/512/8602/8602751.png",
                              alt: "twbs",
                              width: "20%",
                              className: "rounded-circle flex-shrink-0",
                            }),
                          }),
                        ],
                      }),
                      F("div", {
                        className: "form-check form-check-inline",
                        children: [
                          w("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "avatar",
                            id: "avatar4",
                            value:
                              "https://cdn-icons-png.flaticon.com/512/8602/8602739.png",
                            onChange: (v) => h(v.target.value),
                          }),
                          w("label", {
                            className: "form-check-label",
                            for: "avatar4",
                            children: w("img", {
                              src: "https://cdn-icons-png.flaticon.com/512/8602/8602739.png",
                              alt: "twbs",
                              width: "20%",
                              className: "rounded-circle flex-shrink-0",
                            }),
                          }),
                        ],
                      }),
                      w("button", {
                        type: "submit",
                        className: "btn btn-success",
                        children: "Agregar",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  PN = () => {
    const [t, e] = A.exports.useState(""),
      [n, r] = A.exports.useState(""),
      [i, s] = A.exports.useState(""),
      [o, a] = A.exports.useState(""),
      [l, u] = A.exports.useState(""),
      [c, h] = A.exports.useState(""),
      d = Eh(),
      { id: m } = FE(),
      y = async (T) => {
        T.preventDefault();
        const p = kc(ca, "estudiantes", m);
        await TN(p, {
          nombre: t,
          apellidos: n,
          email: i,
          carrera: o,
          twitter: l,
          avatar: c,
        }),
          d("/students");
      },
      v = async (T) => {
        const p = await kN(kc(ca, "estudiantes", T));
        p.exists()
          ? (e(p.data().nombre),
            r(p.data().apellidos),
            s(p.data().email),
            a(p.data().carrera),
            u(p.data().twitter),
            h(p.data().avatar))
          : alert("Estudiante no encontrado");
      };
    return (
      A.exports.useEffect(() => {
        v(m);
      }, []),
      F(Wr, {
        children: [
          w(kh, {}),
          F("div", {
            className: "container-fluid p-5",
            children: [
              w("div", {
                className: "col align-self-end pb-5",
                children: w(Sh, {
                  className: "btn btn-danger ",
                  role: "button",
                  to: "/students",
                  children: "Cancelar",
                }),
              }),
              F("div", {
                className: "card",
                children: [
                  w("div", {
                    className: "card-header",
                    children: w("h3", { children: "Editar estudiante" }),
                  }),
                  w("div", {
                    className: "card-body",
                    children: F("form", {
                      onSubmit: y,
                      children: [
                        w("h5", { htmlFor: "", children: "Datos generales" }),
                        F("div", {
                          className: "input-group mb-3",
                          children: [
                            w("span", {
                              className: "input-group-text",
                              id: "basic-addon1",
                              children: "Nombre",
                            }),
                            w("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "Ingrese un nombre",
                              name: "nombre",
                              id: "nombre",
                              "aria-label": "nombre",
                              "aria-describedby": "basic-addon1",
                              value: t,
                              onChange: (T) => e(T.target.value),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "input-group mb-3",
                          children: [
                            w("span", {
                              className: "input-group-text",
                              id: "basic-addon1",
                              children: "Apellido/s",
                            }),
                            w("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "Ingrese tus apellidos",
                              name: "apellidos",
                              id: "apellidos",
                              "aria-label": "apellidos",
                              "aria-describedby": "basic-addon1",
                              value: n,
                              onChange: (T) => r(T.target.value),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "input-group mb-3",
                          children: [
                            w("span", {
                              className: "input-group-text",
                              id: "basic-addon1",
                              children: "Correo electronico",
                            }),
                            w("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "Ingrese un correo electronico",
                              name: "email",
                              id: "email",
                              "aria-label": "email",
                              "aria-describedby": "basic-addon1",
                              value: i,
                              onChange: (T) => s(T.target.value),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "input-group mb-3",
                          children: [
                            w("span", {
                              className: "input-group-text",
                              id: "basic-addon1",
                              children: "Carrera universitaria",
                            }),
                            w("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "Ingrese su carrera universitaria",
                              id: "carrera",
                              "aria-label": "carrera",
                              "aria-describedby": "basic-addon1",
                              value: o,
                              onChange: (T) => a(T.target.value),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "input-group mb-3",
                          children: [
                            w("span", {
                              className: "input-group-text",
                              id: "basic-addon1",
                              children: "Usuario de Twitter",
                            }),
                            w("input", {
                              type: "text",
                              className: "form-control",
                              placeholder: "Ingrese su usuario de Twitter",
                              name: "twitter",
                              id: "twitter",
                              "aria-label": "twitter",
                              "aria-describedby": "basic-addon1",
                              value: l,
                              onChange: (T) => u(T.target.value),
                            }),
                          ],
                        }),
                        w("h5", { children: "Escoge un avatar" }),
                        F("div", {
                          className: "form-check form-check-inline",
                          children: [
                            w("input", {
                              className: "form-check-input",
                              type: "radio",
                              name: "avatar",
                              id: "avatar1",
                              value:
                                "https://cdn-icons-png.flaticon.com/512/4202/4202835.png",
                              onChange: (T) => h(T.target.value),
                            }),
                            w("label", {
                              className: "form-check-label",
                              for: "avatar1",
                              children: w("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/4202/4202835.png",
                                alt: "twbs",
                                width: "20%",
                                className: "rounded-circle flex-shrink-0",
                              }),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "form-check form-check-inline",
                          children: [
                            w("input", {
                              className: "form-check-input",
                              type: "radio",
                              name: "avatar",
                              id: "avatar2",
                              value:
                                "https://cdn-icons-png.flaticon.com/512/4202/4202834.png",
                              onChange: (T) => h(T.target.value),
                            }),
                            w("label", {
                              className: "form-check-label",
                              for: "avatar2",
                              children: w("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/4202/4202834.png",
                                alt: "twbs",
                                width: "20%",
                                className: "rounded-circle flex-shrink-0",
                              }),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "form-check form-check-inline",
                          children: [
                            w("input", {
                              className: "form-check-input",
                              type: "radio",
                              name: "avatar",
                              id: "avatar3",
                              value:
                                "https://cdn-icons-png.flaticon.com/512/8602/8602751.png",
                              onChange: (T) => h(T.target.value),
                            }),
                            w("label", {
                              className: "form-check-label",
                              for: "avatar3",
                              children: w("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/8602/8602751.png",
                                alt: "twbs",
                                width: "20%",
                                className: "rounded-circle flex-shrink-0",
                              }),
                            }),
                          ],
                        }),
                        F("div", {
                          className: "form-check form-check-inline",
                          children: [
                            w("input", {
                              className: "form-check-input",
                              type: "radio",
                              name: "avatar",
                              id: "avatar4",
                              value:
                                "https://cdn-icons-png.flaticon.com/512/8602/8602739.png",
                              onChange: (T) => h(T.target.value),
                            }),
                            w("label", {
                              className: "form-check-label",
                              for: "avatar4",
                              children: w("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/8602/8602739.png",
                                alt: "twbs",
                                width: "20%",
                                className: "rounded-circle flex-shrink-0",
                              }),
                            }),
                          ],
                        }),
                        w("button", {
                          type: "submit",
                          className: "btn btn-success",
                          children: "Actualizar",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  $N = () =>
    w(Wr, {
      children: w("div", {
        className: "container py-4 ",
        bis_skin_checked: "1",
        children: F("div", {
          className: "row align-items-md-stretch pt-5 ",
          bis_skin_checked: "1",
          children: [
            w("div", {
              className: "col-md-6",
              bis_skin_checked: "1",
              children: F("div", {
                className: "h-100 p-5 border rounded-3",
                bis_skin_checked: "1",
                children: [
                  w("img", {
                    src: "https://universidadesgratuitas.com/wp-content/uploads/2020/10/universidad-utl.png",
                    alt: "image",
                  }),
                  F("div", {
                    className: "p-5",
                    children: [
                      w("h3", {
                        children:
                          "Congreso de Tecnolog\xEDas de la Informaci\xF3n",
                      }),
                      w("a", {
                        className: "btn btn-primary",
                        href: "/students",
                        role: "button",
                        children: "Entrar",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            w("div", {
              className: "col-md-6",
              bis_skin_checked: "1",
              children: w("div", {
                className: "h-100 p-5 border rounded-3",
                bis_skin_checked: "1",
                children: w("img", {
                  src: "https://www.bing.com/images/blob?bcid=SKFXEhO6OOIEbQ",
                  alt: "image2",
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  LN = () => {
    const [t, e] = A.exports.useState([]),
      n = l0(ca, "estudiantes"),
      r = async () => {
        const i = await CN(n);
        e(i.docs.map((s) => ({ ...s.data(), id: s.id })));
      };
    return (
      A.exports.useEffect(() => {
        r();
      }, []),
      w(Wr, {
        children: t.map((i) =>
          w(
            "div",
            {
              className: "position-relative",
              children: F("a", {
                href: `./students/edit/${i.id}`,
                className: "list-group-item d-flex gap-3 py-3",
                "aria-current": "true",
                children: [
                  w("div", {
                    children: w("img", {
                      src: i.avatar,
                      alt: "twbs",
                      width: "60%",
                      className: "rounded-circle flex-shrink-0",
                    }),
                  }),
                  w("div", {
                    className: "d-flex gap-2 w-100 justify-content-between",
                    children: F("div", {
                      children: [
                        w("h4", {
                          className: "mb-0",
                          children: i.nombre + " " + i.apellidos,
                        }),
                        w("h5", { className: "mb-0", children: i.carrera }),
                        F("p", {
                          className: "mb-0 opacity-75",
                          children: ["Correo: ", i.email],
                        }),
                        w("p", {
                          className: "mb-0 opacity-75",
                          children: i.twitter,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            i.id
          )
        ),
      })
    );
  },
  ON = () =>
    F(Wr, {
      children: [
        w(kh, {}),
        F("div", {
          className: "container-fluid p-5",
          children: [
            w("div", {
              className: "col align-self-end pb-5",
              children: w(Sh, {
                className: "btn btn-success ",
                role: "button",
                to: "./add",
                children: "Agregar nuevo estudiante",
              }),
            }),
            w("div", {
              className: "card",
              children: w("div", {
                className: "card-body",
                children: w("div", {
                  className: "list-group d-grid gap-2 border-0 w-auto",
                  children: w(LN, {}),
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  $p = () =>
    F("div", {
      className: "p-5",
      children: [
        "ERROR 404!!!!!",
        w("br", {}),
        w("img", {
          src: "https://img.wattpad.com/cover/226473226-256-k278285.jpg",
          alt: "perro-triste",
        }),
      ],
    });
function MN() {
  return w(YE, {
    children: F(WE, {
      children: [
        w(Gt, { path: "/", element: w($N, {}) }),
        F(Gt, {
          path: "/students/*",
          children: [
            w(Gt, { path: "", element: w(ON, {}) }),
            w(Gt, { path: "add", element: w(AN, {}) }),
            w(Gt, { path: "edit/:id", element: w(PN, {}) }),
            w(Gt, { path: "*", element: w($p, {}) }),
          ],
        }),
        w(Gt, { path: "*", element: w($p, {}) }),
      ],
    }),
  });
}
const FN = "modulepreload",
  UN = function (t) {
    return "/" + t;
  },
  Lp = {},
  VN = function (e, n, r) {
    if (!n || n.length === 0) return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = UN(s)), s in Lp)) return;
        Lp[s] = !0;
        const o = s.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const h = i[c];
            if (h.href === s && (!o || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = o ? "stylesheet" : FN),
          o || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = s),
          document.head.appendChild(u),
          o)
        )
          return new Promise((c, h) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    ).then(() => e());
  };
function BN(t = {}) {
  const {
    immediate: e = !1,
    onNeedRefresh: n,
    onOfflineReady: r,
    onRegistered: i,
    onRegisteredSW: s,
    onRegisterError: o,
  } = t;
  let a, l;
  const u = async (h = !0) => {
    await l;
  };
  async function c() {
    if ("serviceWorker" in navigator) {
      const { Workbox: h, messageSW: d } = await VN(
        () => import("./workbox-window.prod.es5.d2780aeb.js"),
        []
      );
      (a = new h("/sw.js", { scope: "/", type: "classic" })),
        a.addEventListener("activated", (m) => {
          m.isUpdate ? window.location.reload() : r == null || r();
        }),
        a
          .register({ immediate: e })
          .then((m) => {
            s ? s("/sw.js", m) : i == null || i(m);
          })
          .catch((m) => {
            o == null || o(m);
          });
    }
  }
  return (l = c()), u;
}
function zN(t = {}) {
  const {
      immediate: e = !0,
      onNeedRefresh: n,
      onOfflineReady: r,
      onRegistered: i,
      onRegisteredSW: s,
      onRegisterError: o,
    } = t,
    [a, l] = A.exports.useState(!1),
    [u, c] = A.exports.useState(!1),
    [h] = A.exports.useState(() =>
      BN({
        immediate: e,
        onOfflineReady() {
          c(!0), r == null || r();
        },
        onNeedRefresh() {
          l(!0), n == null || n();
        },
        onRegistered: i,
        onRegisteredSW: s,
        onRegisterError: o,
      })
    );
  return { needRefresh: [a, l], offlineReady: [u, c], updateServiceWorker: h };
}
function jN() {
  const {
      offlineReady: [t, e],
      needRefresh: [n, r],
      updateServiceWorker: i,
    } = zN({
      onRegistered(o) {
        console.log("SW Registered: " + o);
      },
      onRegisterError(o) {
        console.log("SW registration error", o);
      },
    }),
    s = () => {
      e(!1), r(!1);
    };
  return w("div", {
    className: "ReloadPrompt-container",
    children:
      (t || n) &&
      F("div", {
        className: "ReloadPrompt-toast",
        children: [
          w("div", {
            className: "ReloadPrompt-message",
            children: t
              ? w("span", { children: "App ready to work offline" })
              : w("span", {
                  children:
                    "New content available, click on reload button to update.",
                }),
          }),
          n &&
            w("button", {
              className: "ReloadPrompt-toast-button",
              onClick: () => i(!0),
              children: "Reload",
            }),
          w("button", {
            className: "ReloadPrompt-toast-button",
            onClick: () => s(),
            children: "Close",
          }),
        ],
      }),
  });
}
Yl.createRoot(document.getElementById("root")).render(
  F(jp.StrictMode, { children: [w(jN, {}), w(MN, {})] })
);
