import hr from "react";
var Ve = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Qr() {
  if (or) return be;
  or = 1;
  var r = hr, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(u, m, R) {
    var f, E = {}, O = null, I = null;
    R !== void 0 && (O = "" + R), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (I = m.ref);
    for (f in m) o.call(m, f) && !s.hasOwnProperty(f) && (E[f] = m[f]);
    if (u && u.defaultProps) for (f in m = u.defaultProps, m) E[f] === void 0 && (E[f] = m[f]);
    return { $$typeof: t, type: u, key: O, ref: I, props: E, _owner: d.current };
  }
  return be.Fragment = n, be.jsx = i, be.jsxs = i, be;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function et() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    var r = hr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), F = Symbol.iterator, T = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = F && e[F] || e[T];
      return typeof a == "function" ? a : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
          l[p - 1] = arguments[p];
        oe("error", e, l);
      }
    }
    function oe(e, a, l) {
      {
        var p = $.ReactDebugCurrentFrame, C = p.getStackAddendum();
        C !== "" && (a += "%s", l = l.concat([C]));
        var j = l.map(function(x) {
          return String(x);
        });
        j.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var q = !1, ie = !1, se = !1, Q = !1, ee = !1, B;
    B = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || ee || e === d || e === R || e === f || Q || e === I || q || ie || se || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === E || e.$$typeof === i || e.$$typeof === u || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function te(e, a, l) {
      var p = e.displayName;
      if (p)
        return p;
      var C = a.displayName || a.name || "";
      return C !== "" ? l + "(" + C + ")" : l;
    }
    function c(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case d:
          return "StrictMode";
        case R:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var a = e;
            return c(a) + ".Consumer";
          case i:
            var l = e;
            return c(l._context) + ".Provider";
          case m:
            return te(e, e.render, "ForwardRef");
          case E:
            var p = e.displayName || null;
            return p !== null ? p : h(e.type) || "Memo";
          case O: {
            var C = e, j = C._payload, x = C._init;
            try {
              return h(x(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, w = 0, y, z, k, _, H, N, V;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function fe() {
      {
        if (w === 0) {
          y = console.log, z = console.info, k = console.warn, _ = console.error, H = console.group, N = console.groupCollapsed, V = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        w++;
      }
    }
    function pe() {
      {
        if (w--, w === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: y
            }),
            info: g({}, e, {
              value: z
            }),
            warn: g({}, e, {
              value: k
            }),
            error: g({}, e, {
              value: _
            }),
            group: g({}, e, {
              value: H
            }),
            groupCollapsed: g({}, e, {
              value: N
            }),
            groupEnd: g({}, e, {
              value: V
            })
          });
        }
        w < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = $.ReactCurrentDispatcher, he;
    function Ee(e, a, l) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (C) {
            var p = C.stack.trim().match(/\n( *(at )?)/);
            he = p && p[1] || "";
          }
        return `
` + he + e;
      }
    }
    var Ae = !1, Ce;
    {
      var _r = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new _r();
    }
    function Ue(e, a) {
      if (!e || Ae)
        return "";
      {
        var l = Ce.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      Ae = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = le.current, le.current = null, fe();
      try {
        if (a) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (L) {
              p = L;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (L) {
              p = L;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            p = L;
          }
          e();
        }
      } catch (L) {
        if (L && p && typeof L.stack == "string") {
          for (var S = L.stack.split(`
`), G = p.stack.split(`
`), W = S.length - 1, M = G.length - 1; W >= 1 && M >= 0 && S[W] !== G[M]; )
            M--;
          for (; W >= 1 && M >= 0; W--, M--)
            if (S[W] !== G[M]) {
              if (W !== 1 || M !== 1)
                do
                  if (W--, M--, M < 0 || S[W] !== G[M]) {
                    var U = `
` + S[W].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && Ce.set(e, U), U;
                  }
                while (W >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        Ae = !1, le.current = j, pe(), Error.prepareStackTrace = C;
      }
      var de = e ? e.displayName || e.name : "", ne = de ? Ee(de) : "";
      return typeof e == "function" && Ce.set(e, ne), ne;
    }
    function Tr(e, a, l) {
      return Ue(e, !1);
    }
    function jr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ke(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, jr(e));
      if (typeof e == "string")
        return Ee(e);
      switch (e) {
        case R:
          return Ee("Suspense");
        case f:
          return Ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Tr(e.render);
          case E:
            return ke(e.type, a, l);
          case O: {
            var p = e, C = p._payload, j = p._init;
            try {
              return ke(j(C), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Be = {}, Ye = $.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var a = e._owner, l = ke(e.type, e._source, a ? a.type : null);
        Ye.setExtraStackFrame(l);
      } else
        Ye.setExtraStackFrame(null);
    }
    function Ar(e, a, l, p, C) {
      {
        var j = Function.call.bind(ge);
        for (var x in e)
          if (j(e, x)) {
            var S = void 0;
            try {
              if (typeof e[x] != "function") {
                var G = Error((p || "React class") + ": " + l + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              S = e[x](a, x, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              S = W;
            }
            S && !(S instanceof Error) && (_e(C), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, x, typeof S), _e(null)), S instanceof Error && !(S.message in Be) && (Be[S.message] = !0, _e(C), v("Failed %s type: %s", l, S.message), _e(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Pe(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Hr(e) {
      try {
        return Je(e), !1;
      } catch {
        return !0;
      }
    }
    function Je(e) {
      return "" + e;
    }
    function qe(e) {
      if (Hr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Je(e);
    }
    var ve = $.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Xe, Oe;
    Oe = {};
    function Mr(e) {
      if (ge.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (ge.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $r(e, a) {
      if (typeof e.ref == "string" && ve.current && a && ve.current.stateNode !== a) {
        var l = h(ve.current.type);
        Oe[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(ve.current.type), e.ref), Oe[l] = !0);
      }
    }
    function Vr(e, a) {
      {
        var l = function() {
          Ke || (Ke = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Fr(e, a) {
      {
        var l = function() {
          Xe || (Xe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Gr = function(e, a, l, p, C, j, x) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: x,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Nr(e, a, l, p, C) {
      {
        var j, x = {}, S = null, G = null;
        l !== void 0 && (qe(l), S = "" + l), Ir(a) && (qe(a.key), S = "" + a.key), Mr(a) && (G = a.ref, $r(a, C));
        for (j in a)
          ge.call(a, j) && !Wr.hasOwnProperty(j) && (x[j] = a[j]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (j in W)
            x[j] === void 0 && (x[j] = W[j]);
        }
        if (S || G) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && Vr(x, M), G && Fr(x, M);
        }
        return Gr(e, S, G, C, p, ve.current, x);
      }
    }
    var He = $.ReactCurrentOwner, Ze = $.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var a = e._owner, l = ke(e.type, e._source, a ? a.type : null);
        Ze.setExtraStackFrame(l);
      } else
        Ze.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Qe() {
      {
        if (He.current) {
          var e = h(He.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Lr(e) {
      return "";
    }
    var er = {};
    function Dr(e) {
      {
        var a = Qe();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function rr(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Dr(a);
        if (er[l])
          return;
        er[l] = !0;
        var p = "";
        e && e._owner && e._owner !== He.current && (p = " It was passed a child from " + h(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ce(null);
      }
    }
    function tr(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Pe(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Me(p) && rr(p, a);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = A(e);
          if (typeof C == "function" && C !== e.entries)
            for (var j = C.call(e), x; !(x = j.next()).done; )
              Me(x.value) && rr(x.value, a);
        }
      }
    }
    function Ur(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === E))
          l = a.propTypes;
        else
          return;
        if (l) {
          var p = h(a);
          Ar(l, e.props, "prop", p, e);
        } else if (a.PropTypes !== void 0 && !We) {
          We = !0;
          var C = h(a);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var p = a[l];
          if (p !== "children" && p !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var nr = {};
    function ar(e, a, l, p, C, j) {
      {
        var x = re(e);
        if (!x) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Lr();
          G ? S += G : S += Qe();
          var W;
          e === null ? W = "null" : Pe(e) ? W = "array" : e !== void 0 && e.$$typeof === t ? (W = "<" + (h(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, S);
        }
        var M = Nr(e, a, l, C, j);
        if (M == null)
          return M;
        if (x) {
          var U = a.children;
          if (U !== void 0)
            if (p)
              if (Pe(U)) {
                for (var de = 0; de < U.length; de++)
                  tr(U[de], e);
                Object.freeze && Object.freeze(U);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(U, e);
        }
        if (ge.call(a, "key")) {
          var ne = h(e), L = Object.keys(a).filter(function(Zr) {
            return Zr !== "key";
          }), Ie = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nr[ne + Ie]) {
            var Xr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, ne, Xr, ne), nr[ne + Ie] = !0;
          }
        }
        return e === o ? Br(M) : Ur(M), M;
      }
    }
    function Yr(e, a, l) {
      return ar(e, a, l, !0);
    }
    function Jr(e, a, l) {
      return ar(e, a, l, !1);
    }
    var qr = Jr, Kr = Yr;
    ye.Fragment = o, ye.jsx = qr, ye.jsxs = Kr;
  }()), ye;
}
process.env.NODE_ENV === "production" ? Ve.exports = Qr() : Ve.exports = et();
var Z = Ve.exports, sr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, D = (r) => !r || typeof r != "object" || Object.keys(r).length === 0, rt = (r, t) => JSON.stringify(r) === JSON.stringify(t);
function gr(r, t) {
  r.forEach(function(n) {
    Array.isArray(n) ? gr(n, t) : t.push(n);
  });
}
function vr(r) {
  let t = [];
  return gr(r, t), t;
}
var br = (...r) => vr(r).filter(Boolean), yr = (r, t) => {
  let n = {}, o = Object.keys(r), d = Object.keys(t);
  for (let s of o) if (d.includes(s)) {
    let i = r[s], u = t[s];
    typeof i == "object" && typeof u == "object" ? n[s] = yr(i, u) : Array.isArray(i) || Array.isArray(u) ? n[s] = br(u, i) : n[s] = u + " " + i;
  } else n[s] = r[s];
  for (let s of d) o.includes(s) || (n[s] = t[s]);
  return n;
}, lr = (r) => !r || typeof r != "string" ? r : r.replace(/\s+/g, " ").trim();
const De = "-";
function tt(r) {
  const t = at(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = r;
  function d(i) {
    const u = i.split(De);
    return u[0] === "" && u.length !== 1 && u.shift(), wr(u, t) || nt(i);
  }
  function s(i, u) {
    const m = n[i] || [];
    return u && o[i] ? [...m, ...o[i]] : m;
  }
  return {
    getClassGroupId: d,
    getConflictingClassGroupIds: s
  };
}
function wr(r, t) {
  var i;
  if (r.length === 0)
    return t.classGroupId;
  const n = r[0], o = t.nextPart.get(n), d = o ? wr(r.slice(1), o) : void 0;
  if (d)
    return d;
  if (t.validators.length === 0)
    return;
  const s = r.join(De);
  return (i = t.validators.find(({
    validator: u
  }) => u(s))) == null ? void 0 : i.classGroupId;
}
const cr = /^\[(.+)\]$/;
function nt(r) {
  if (cr.test(r)) {
    const t = cr.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function at(r) {
  const {
    theme: t,
    prefix: n
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return it(Object.entries(r.classGroups), n).forEach(([s, i]) => {
    Fe(i, o, s, t);
  }), o;
}
function Fe(r, t, n, o) {
  r.forEach((d) => {
    if (typeof d == "string") {
      const s = d === "" ? t : dr(t, d);
      s.classGroupId = n;
      return;
    }
    if (typeof d == "function") {
      if (ot(d)) {
        Fe(d(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: d,
        classGroupId: n
      });
      return;
    }
    Object.entries(d).forEach(([s, i]) => {
      Fe(i, dr(t, s), n, o);
    });
  });
}
function dr(r, t) {
  let n = r;
  return t.split(De).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function ot(r) {
  return r.isThemeGetter;
}
function it(r, t) {
  return t ? r.map(([n, o]) => {
    const d = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, u]) => [t + i, u])) : s);
    return [n, d];
  }) : r;
}
function st(r) {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function d(s, i) {
    n.set(s, i), t++, t > r && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return d(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : d(s, i);
    }
  };
}
const Sr = "!";
function lt(r) {
  const t = r.separator, n = t.length === 1, o = t[0], d = t.length;
  return function(i) {
    const u = [];
    let m = 0, R = 0, f;
    for (let T = 0; T < i.length; T++) {
      let A = i[T];
      if (m === 0) {
        if (A === o && (n || i.slice(T, T + d) === t)) {
          u.push(i.slice(R, T)), R = T + d;
          continue;
        }
        if (A === "/") {
          f = T;
          continue;
        }
      }
      A === "[" ? m++ : A === "]" && m--;
    }
    const E = u.length === 0 ? i : i.substring(R), O = E.startsWith(Sr), I = O ? E.substring(1) : E, F = f && f > R ? f - R : void 0;
    return {
      modifiers: u,
      hasImportantModifier: O,
      baseClassName: I,
      maybePostfixModifierPosition: F
    };
  };
}
function ct(r) {
  if (r.length <= 1)
    return r;
  const t = [];
  let n = [];
  return r.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function dt(r) {
  return {
    cache: st(r.cacheSize),
    splitModifiers: lt(r),
    ...tt(r)
  };
}
const ut = /\s+/;
function mt(r, t) {
  const {
    splitModifiers: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: d
  } = t, s = /* @__PURE__ */ new Set();
  return r.trim().split(ut).map((i) => {
    const {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: R,
      maybePostfixModifierPosition: f
    } = n(i);
    let E = o(f ? R.substring(0, f) : R), O = !!f;
    if (!E) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (E = o(R), !E)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      O = !1;
    }
    const I = ct(u).join(":");
    return {
      isTailwindClass: !0,
      modifierId: m ? I + Sr : I,
      classGroupId: E,
      originalClassName: i,
      hasPostfixModifier: O
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: u,
      classGroupId: m,
      hasPostfixModifier: R
    } = i, f = u + m;
    return s.has(f) ? !1 : (s.add(f), d(m, R).forEach((E) => s.add(u + E)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function ft() {
  let r = 0, t, n, o = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (n = xr(t)) && (o && (o += " "), o += n);
  return o;
}
function xr(r) {
  if (typeof r == "string")
    return r;
  let t, n = "";
  for (let o = 0; o < r.length; o++)
    r[o] && (t = xr(r[o])) && (n && (n += " "), n += t);
  return n;
}
function Ge(r, ...t) {
  let n, o, d, s = i;
  function i(m) {
    const R = t.reduce((f, E) => E(f), r());
    return n = dt(R), o = n.cache.get, d = n.cache.set, s = u, u(m);
  }
  function u(m) {
    const R = o(m);
    if (R)
      return R;
    const f = mt(m, n);
    return d(m, f), f;
  }
  return function() {
    return s(ft.apply(null, arguments));
  };
}
function P(r) {
  const t = (n) => n[r] || [];
  return t.isThemeGetter = !0, t;
}
const zr = /^\[(?:([a-z-]+):)?(.+)\]$/i, pt = /^\d+\/\d+$/, ht = /* @__PURE__ */ new Set(["px", "full", "screen"]), gt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Y(r) {
  return ae(r) || ht.has(r) || pt.test(r);
}
function K(r) {
  return me(r, "length", _t);
}
function ae(r) {
  return !!r && !Number.isNaN(Number(r));
}
function Te(r) {
  return me(r, "number", ae);
}
function we(r) {
  return !!r && Number.isInteger(Number(r));
}
function St(r) {
  return r.endsWith("%") && ae(r.slice(0, -1));
}
function b(r) {
  return zr.test(r);
}
function X(r) {
  return gt.test(r);
}
const xt = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function zt(r) {
  return me(r, xt, Rr);
}
function Rt(r) {
  return me(r, "position", Rr);
}
const Et = /* @__PURE__ */ new Set(["image", "url"]);
function Ct(r) {
  return me(r, Et, jt);
}
function kt(r) {
  return me(r, "", Tt);
}
function Se() {
  return !0;
}
function me(r, t, n) {
  const o = zr.exec(r);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function _t(r) {
  return vt.test(r) && !bt.test(r);
}
function Rr() {
  return !1;
}
function Tt(r) {
  return yt.test(r);
}
function jt(r) {
  return wt.test(r);
}
function Ne() {
  const r = P("colors"), t = P("spacing"), n = P("blur"), o = P("brightness"), d = P("borderColor"), s = P("borderRadius"), i = P("borderSpacing"), u = P("borderWidth"), m = P("contrast"), R = P("grayscale"), f = P("hueRotate"), E = P("invert"), O = P("gap"), I = P("gradientColorStops"), F = P("gradientColorStopPositions"), T = P("inset"), A = P("margin"), $ = P("opacity"), v = P("padding"), oe = P("saturate"), q = P("scale"), ie = P("sepia"), se = P("skew"), Q = P("space"), ee = P("translate"), B = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", b, t], c = () => [b, t], h = () => ["", Y, K], g = () => ["auto", ae, b], w = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], y = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", b], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [ae, Te], V = () => [ae, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Se],
      spacing: [Y, K],
      blur: ["none", "", X, b],
      brightness: N(),
      borderColor: [r],
      borderRadius: ["none", "", "full", X, b],
      borderSpacing: c(),
      borderWidth: h(),
      contrast: N(),
      grayscale: _(),
      hueRotate: V(),
      invert: _(),
      gap: c(),
      gradientColorStops: [r],
      gradientColorStopPositions: [St, K],
      inset: te(),
      margin: te(),
      opacity: N(),
      padding: c(),
      saturate: N(),
      scale: N(),
      sepia: _(),
      skew: V(),
      space: c(),
      translate: c()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [X]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...w(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [T]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [T]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [T]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [T]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [T]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [T]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [T]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [T]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [T]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", we, b]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", we, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Se]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", we, b]
        }, b]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": g()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": g()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Se]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [we, b]
        }, b]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": g()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": g()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [O]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [O]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [O]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...k(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [A]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [A]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [A]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [A]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [A]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [A]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [A]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [A]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [A]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Q]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Q]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [b, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [b, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [X]
        }, X]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [b, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [b, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", X, K]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Te]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Se]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ae, Te]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Y, b]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [$]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [$]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Y, K]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Y, b]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: c()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", b]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [$]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...w(), Rt]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ct]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [F]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [F]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [F]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [I]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [I]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [I]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [$]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: y()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Y, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Y, K]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: h()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Y, K]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", X, kt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Se]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", X, b]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [E]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [oe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ie]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [E]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [oe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ie]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", b]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", b]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [q]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [q]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [q]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [we, b]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ee]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ee]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [se]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [se]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", b]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": c()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": c()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": c()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": c()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": c()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": c()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": c()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": c()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": c()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": c()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": c()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": c()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": c()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": c()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": c()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": c()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": c()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": c()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", b]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Y, K, Te]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function At(r, {
  cacheSize: t,
  prefix: n,
  separator: o,
  extend: d = {},
  override: s = {}
}) {
  je(r, "cacheSize", t), je(r, "prefix", n), je(r, "separator", o);
  for (const i in s)
    Pt(r[i], s[i]);
  for (const i in d)
    Ot(r[i], d[i]);
  return r;
}
function je(r, t, n) {
  n !== void 0 && (r[t] = n);
}
function Pt(r, t) {
  if (t)
    for (const n in t)
      je(r, n, t[n]);
}
function Ot(r, t) {
  if (t)
    for (const n in t) {
      const o = t[n];
      o !== void 0 && (r[n] = (r[n] || []).concat(o));
    }
}
function Ht(r, ...t) {
  return typeof r == "function" ? Ge(Ne, r, ...t) : Ge(() => At(Ne(), r), ...t);
}
const Er = /* @__PURE__ */ Ge(Ne);
var Wt = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Cr = (r) => r || void 0, ze = (...r) => Cr(vr(r).filter(Boolean).join(" ")), $e = null, J = {}, Le = !1, xe = (...r) => (t) => t.twMerge ? ((!$e || Le) && (Le = !1, $e = D(J) ? Er : Ht({ ...J, extend: { theme: J.theme, classGroups: J.classGroups, conflictingClassGroupModifiers: J.conflictingClassGroupModifiers, conflictingClassGroups: J.conflictingClassGroups, ...J.extend } })), Cr($e(ze(r)))) : ze(r), ur = (r, t) => {
  for (let n in t) r.hasOwnProperty(n) ? r[n] = ze(r[n], t[n]) : r[n] = t[n];
  return r;
}, Mt = (r, t) => {
  let { extend: n = null, slots: o = {}, variants: d = {}, compoundVariants: s = [], compoundSlots: i = [], defaultVariants: u = {} } = r, m = { ...Wt, ...t }, R = n != null && n.base ? ze(n.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, f = n != null && n.variants && !D(n.variants) ? yr(d, n.variants) : d, E = n != null && n.defaultVariants && !D(n.defaultVariants) ? { ...n.defaultVariants, ...u } : u;
  !D(m.twMergeConfig) && !rt(m.twMergeConfig, J) && (Le = !0, J = m.twMergeConfig);
  let O = D(n == null ? void 0 : n.slots), I = D(o) ? {} : { base: ze(r == null ? void 0 : r.base, O && (n == null ? void 0 : n.base)), ...o }, F = O ? I : ur({ ...n == null ? void 0 : n.slots }, D(I) ? { base: r == null ? void 0 : r.base } : I), T = D(n == null ? void 0 : n.compoundVariants) ? s : br(n == null ? void 0 : n.compoundVariants, s), A = (v) => {
    if (D(f) && D(o) && O) return xe(R, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(m);
    if (T && !Array.isArray(T)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof T}`);
    if (i && !Array.isArray(i)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let oe = (c, h, g = [], w) => {
      let y = g;
      if (typeof h == "string") y = y.concat(lr(h).split(" ").map((z) => `${c}:${z}`));
      else if (Array.isArray(h)) y = y.concat(h.reduce((z, k) => z.concat(`${c}:${k}`), []));
      else if (typeof h == "object" && typeof w == "string") {
        for (let z in h) if (h.hasOwnProperty(z) && z === w) {
          let k = h[z];
          if (k && typeof k == "string") {
            let _ = lr(k);
            y[w] ? y[w] = y[w].concat(_.split(" ").map((H) => `${c}:${H}`)) : y[w] = _.split(" ").map((H) => `${c}:${H}`);
          } else Array.isArray(k) && k.length > 0 && (y[w] = k.reduce((_, H) => _.concat(`${c}:${H}`), []));
        }
      }
      return y;
    }, q = (c, h = f, g = null, w = null) => {
      var y;
      let z = h[c];
      if (!z || D(z)) return null;
      let k = (y = w == null ? void 0 : w[c]) != null ? y : v == null ? void 0 : v[c];
      if (k === null) return null;
      let _ = sr(k), H = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, N = E == null ? void 0 : E[c], V = [];
      if (typeof _ == "object" && H) for (let [pe, le] of Object.entries(_)) {
        let he = z[le];
        if (pe === "initial") {
          N = le;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(pe) || (V = oe(pe, he, V, g));
      }
      let Re = _ != null && typeof _ != "object" ? _ : sr(N), fe = z[Re || "false"];
      return typeof V == "object" && typeof g == "string" && V[g] ? ur(V, fe) : V.length > 0 ? (V.push(fe), V) : fe;
    }, ie = () => f ? Object.keys(f).map((c) => q(c, f)) : null, se = (c, h) => {
      if (!f || typeof f != "object") return null;
      let g = new Array();
      for (let w in f) {
        let y = q(w, f, c, h), z = c === "base" && typeof y == "string" ? y : y && y[c];
        z && (g[g.length] = z);
      }
      return g;
    }, Q = {};
    for (let c in v) v[c] !== void 0 && (Q[c] = v[c]);
    let ee = (c, h) => {
      var g;
      let w = typeof (v == null ? void 0 : v[c]) == "object" ? { [c]: (g = v[c]) == null ? void 0 : g.initial } : {};
      return { ...E, ...Q, ...w, ...h };
    }, B = (c = [], h) => {
      let g = [];
      for (let { class: w, className: y, ...z } of c) {
        let k = !0;
        for (let [_, H] of Object.entries(z)) {
          let N = ee(_, h);
          if (Array.isArray(H)) {
            if (!H.includes(N[_])) {
              k = !1;
              break;
            }
          } else if (N[_] !== H) {
            k = !1;
            break;
          }
        }
        k && (w && g.push(w), y && g.push(y));
      }
      return g;
    }, re = (c) => {
      let h = B(T, c);
      if (!Array.isArray(h)) return h;
      let g = {};
      for (let w of h) if (typeof w == "string" && (g.base = xe(g.base, w)(m)), typeof w == "object") for (let [y, z] of Object.entries(w)) g[y] = xe(g[y], z)(m);
      return g;
    }, te = (c) => {
      if (i.length < 1) return null;
      let h = {};
      for (let { slots: g = [], class: w, className: y, ...z } of i) {
        if (!D(z)) {
          let k = !0;
          for (let _ of Object.keys(z)) {
            let H = ee(_, c)[_];
            if (H === void 0 || (Array.isArray(z[_]) ? !z[_].includes(H) : z[_] !== H)) {
              k = !1;
              break;
            }
          }
          if (!k) continue;
        }
        for (let k of g) h[k] = h[k] || [], h[k].push([w, y]);
      }
      return h;
    };
    if (!D(o) || !O) {
      let c = {};
      if (typeof F == "object" && !D(F)) for (let h of Object.keys(F)) c[h] = (g) => {
        var w, y;
        return xe(F[h], se(h, g), ((w = re(g)) != null ? w : [])[h], ((y = te(g)) != null ? y : [])[h], g == null ? void 0 : g.class, g == null ? void 0 : g.className)(m);
      };
      return c;
    }
    return xe(R, ie(), B(T), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(m);
  }, $ = () => {
    if (!(!f || typeof f != "object")) return Object.keys(f);
  };
  return A.variantKeys = $(), A.extend = n, A.base = R, A.slots = F, A.variants = f, A.defaultVariants = E, A.compoundSlots = i, A.compoundVariants = T, A;
};
const It = {
  base: "inline-flex items-center border",
  iconWrapper: "shrink-0",
  iconWrapperStart: "",
  iconWrapperEnd: "",
  icon: "",
  label: ""
}, $t = {
  variant: {
    primary: {
      base: "bg-primary-core text-primary-on border-primary-core hover:bg-primary-dim hover:text-primary-on border-primary-dim",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    ghost: {
      base: "bg-surface-transparent text-surface-on-highest border-surface-transparent hover:bg-surface-transparent hover:text-surface-on-high border-surface-transparent",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    addition: {
      base: "bg-addition-core text-addition-on border-addition-chroma hover:bg-addition-dim hover:text-addition-on border-addition-dim",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    secondary: {
      base: "bg-secondary-core text-secondary-on border-secondary-core hover:bg-secondary-dim hover:text-secondary-on border-secondary-dim",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    tertiary: {
      base: "bg-tertiary-core text-tertiary-on border-tertiary-core hover:bg-tertiary-dim hover:text-tertiary-on border-tertiary-dim",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    contrast: {
      base: "bg-surface-on-highest text-surface-bright border-surface-on-highest hover:bg-surface-on-highest hover:text-surface-bright border-surface-on-highest",
      iconWrapper: "",
      icon: "",
      label: ""
    }
  },
  size: {
    200: {
      base: "p-1.5 rounded-200",
      iconWrapper: "size-4",
      iconWrapperStart: "",
      iconWrapperEnd: "",
      icon: "size-4",
      label: "control-300 px-1"
    },
    300: {
      base: "p-1.5 rounded-300",
      iconWrapper: "size-5",
      iconWrapperStart: "",
      iconWrapperEnd: "",
      icon: "size-5",
      label: "control-400 px-1.5"
    },
    400: {
      base: "p-2.5 rounded-400",
      iconWrapper: "size-5",
      iconWrapperStart: "",
      iconWrapperEnd: "",
      icon: "size-5",
      label: "control-600 px-1.5"
    },
    500: {
      base: "p-3 rounded-500",
      iconWrapper: "size-6",
      iconWrapperStart: "",
      iconWrapperEnd: "",
      icon: "size-6",
      label: "control-800 px-1.5"
    },
    600: {
      base: "p-3 rounded-600",
      iconWrapper: "size-7",
      iconWrapperStart: "",
      iconWrapperEnd: "",
      icon: "size-7",
      label: "control-850 px-2.5"
    }
  },
  chroma: {
    true: {
      base: "",
      iconWrapper: "",
      icon: "",
      label: ""
    },
    false: {
      base: "",
      iconWrapper: "",
      icon: "",
      label: ""
    }
  },
  onlyIcon: {
    true: {
      iconWrapperStart: "",
      iconWrapperEnd: ""
    },
    false: {
      iconWrapperStart: "ms-2.5",
      iconWrapperEnd: "me-2.5"
    }
  }
}, Vt = {
  slots: It,
  variants: $t
}, mr = ({ name: r, size: t, className: n = "" }) => /* @__PURE__ */ Z.jsx(
  "svg",
  {
    className: n,
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    "aria-hidden": "true",
    children: /* @__PURE__ */ Z.jsx("use", { xlinkHref: `#${r}-outline-sm` })
  }
);
function kr(r) {
  var t, n, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var d = r.length;
    for (t = 0; t < d; t++) r[t] && (n = kr(r[t])) && (o && (o += " "), o += n);
  } else for (n in r) r[n] && (o && (o += " "), o += n);
  return o;
}
function Ft() {
  for (var r, t, n = 0, o = "", d = arguments.length; n < d; n++) (r = arguments[n]) && (t = kr(r)) && (o && (o += " "), o += t);
  return o;
}
function ue(...r) {
  return Er(Ft(r));
}
const Gt = Mt(Vt), {
  base: Nt,
  label: Lt,
  iconWrapper: fr,
  iconWrapperStart: Dt,
  iconWrapperEnd: Ut,
  icon: pr
} = Gt(), nn = ({
  label: r,
  variant: t = "primary",
  size: n = "500",
  iconStart: o,
  iconEnd: d,
  className: s = ""
}) => {
  const i = {
    variant: t,
    size: n,
    onlyIcon: !r
  };
  return /* @__PURE__ */ Z.jsxs(
    "button",
    {
      className: ue(Nt(i), s),
      children: [
        o && /* @__PURE__ */ Z.jsx("span", { className: ue(fr(i), Dt(i)), children: /* @__PURE__ */ Z.jsx(mr, { className: ue(pr(i)), name: o, size: 24 }) }),
        r && /* @__PURE__ */ Z.jsx("span", { className: ue(Lt(i)), children: r }),
        d && /* @__PURE__ */ Z.jsx("span", { className: ue(fr(i), Ut(i)), children: /* @__PURE__ */ Z.jsx(mr, { className: ue(pr(i)), name: d, size: 24 }) })
      ]
    }
  );
};
function an(r) {
  return "<button>button</button>";
}
class Bt {
  constructor() {
    this.config = {
      content: [],
      theme: {},
      variants: {},
      plugins: []
    };
  }
  setColors(t) {
    this.config.theme.colors = t;
  }
  setBorderRadius(t) {
    this.config.theme.borderRadius = t;
  }
  setExtend(t) {
    this.config.theme.extend = t;
  }
  setContent(t) {
    return this.config.content = t, this;
  }
  setTheme(t) {
    return this.config.theme = t, this;
  }
  setVariants(t) {
    return this.config.variants = t, this;
  }
  addPlugin(t) {
    return this.config.plugins.push(t), this;
  }
  build() {
    return { ...this.config };
  }
}
const Yt = {
  ".title-1": {
    fontSize: "2.125rem",
    lineHeight: "2.5rem",
    letterSpacing: "-0.10000000149011612rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      letterSpacing: "-0.125rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      letterSpacing: "-0.125rem"
    }
  },
  ".title-2": {
    fontSize: "1.75rem",
    lineHeight: "2rem",
    letterSpacing: "-0.07500000298023224rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "2rem",
      lineHeight: "2.25rem",
      letterSpacing: "-0.10000000149011612rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "2.125rem",
      lineHeight: "2.5rem",
      letterSpacing: "-0.10000000149011612rem"
    }
  },
  ".title-3": {
    fontSize: "1.375rem",
    lineHeight: "1.625rem",
    letterSpacing: "-0.0625rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      letterSpacing: "-0.0625rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.75rem",
      lineHeight: "2rem",
      letterSpacing: "-0.07500000298023224rem"
    }
  },
  ".title-4": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    letterSpacing: "-0.0625rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      letterSpacing: "-0.0625rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      letterSpacing: "-0.0625rem"
    }
  },
  ".title-5": {
    fontSize: "1.0625rem",
    lineHeight: "1.25rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.0625rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.125rem",
      lineHeight: "1.375rem",
      letterSpacing: "-0.0625rem"
    }
  },
  ".heading-1": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    letterSpacing: "-0.0625rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      letterSpacing: "-0.0625rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "2rem",
      lineHeight: "2.25rem",
      letterSpacing: "-0.0625rem"
    }
  },
  ".heading-2": {
    fontSize: "1.125rem",
    lineHeight: "1.375rem",
    letterSpacing: "-0.02500000037252903rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      letterSpacing: "-0.05000000074505806rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      letterSpacing: "-0.05000000074505806rem"
    }
  },
  ".heading-3": {
    fontSize: "1.0625rem",
    lineHeight: "1.25rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.0625rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.125rem",
      lineHeight: "1.375rem",
      letterSpacing: "-0.02500000037252903rem"
    }
  },
  ".heading-4": {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    }
  },
  ".heading-5": {
    fontSize: "0.875rem",
    lineHeight: "1.0625rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.875rem",
      lineHeight: "1.0625rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.875rem",
      lineHeight: "1.0625rem",
      letterSpacing: "0rem"
    }
  },
  ".display-1": {
    fontSize: "3rem",
    lineHeight: "3.625rem",
    letterSpacing: "-0.10000000149011612rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "4rem",
      lineHeight: "4.75rem",
      letterSpacing: "-0.125rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "4.375rem",
      lineHeight: "5.25rem",
      letterSpacing: "-0.125rem"
    }
  },
  ".display-2": {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    letterSpacing: "-0.07500000298023224rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "3.625rem",
      lineHeight: "4.375rem",
      letterSpacing: "-0.10000000149011612rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "4rem",
      lineHeight: "4.75rem",
      letterSpacing: "-0.16249999403953552rem"
    }
  },
  ".display-3": {
    fontSize: "2.125rem",
    lineHeight: "2.5rem",
    letterSpacing: "-0.0625rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "3.25rem",
      lineHeight: "3.875rem",
      letterSpacing: "-0.0625rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "3.625rem",
      lineHeight: "4.375rem",
      letterSpacing: "-0.07500000298023224rem"
    }
  },
  ".display-4": {
    fontSize: "2rem",
    lineHeight: "2.25rem",
    letterSpacing: "-0.0625rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "3rem",
      lineHeight: "3.625rem",
      letterSpacing: "-0.0625rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "3.25rem",
      lineHeight: "3.875rem",
      letterSpacing: "-0.0625rem"
    }
  },
  ".display-5": {
    fontSize: "1.75rem",
    lineHeight: "2rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "3rem",
      lineHeight: "3.625rem",
      letterSpacing: "-0.0625rem"
    }
  },
  ".body-50": {
    fontSize: "0.625rem",
    lineHeight: "0.875rem",
    letterSpacing: "0.05000000074505806rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.625rem",
      lineHeight: "0.875rem",
      letterSpacing: "0.05000000074505806rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.625rem",
      lineHeight: "0.875rem",
      letterSpacing: "0.05000000074505806rem"
    }
  },
  ".body-100": {
    fontSize: "0.6875rem",
    lineHeight: "0.9624999761581421rem",
    letterSpacing: "0.05000000074505806rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.6875rem",
      lineHeight: "0.9375rem",
      letterSpacing: "0.05000000074505806rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.6875rem",
      lineHeight: "0.9375rem",
      letterSpacing: "0.05000000074505806rem"
    }
  },
  ".body-200": {
    fontSize: "0.75rem",
    lineHeight: "1.0625rem",
    letterSpacing: "0.05000000074505806rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.75rem",
      lineHeight: "1.0625rem",
      letterSpacing: "0.05000000074505806rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.75rem",
      lineHeight: "1.0625rem",
      letterSpacing: "0.02500000037252903rem"
    }
  },
  ".body-300": {
    fontSize: "0.75rem",
    lineHeight: "1.0625rem",
    letterSpacing: "0.05000000074505806rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.75rem",
      lineHeight: "1.0625rem",
      letterSpacing: "0.02500000037252903rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.8125rem",
      lineHeight: "1.125rem",
      letterSpacing: "0.02500000037252903rem"
    }
  },
  ".body-400": {
    fontSize: "0.75rem",
    lineHeight: "1.0625rem",
    letterSpacing: "0.02500000037252903rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.8125rem",
      lineHeight: "1.125rem",
      letterSpacing: "0.02500000037252903rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    }
  },
  ".body-500": {
    fontSize: "0.8125rem",
    lineHeight: "1.125rem",
    letterSpacing: "0.02500000037252903rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      letterSpacing: "0rem"
    }
  },
  ".body-600": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "0.9375rem",
      lineHeight: "1.375rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1rem",
      lineHeight: "1.375rem",
      letterSpacing: "0rem"
    }
  },
  ".body-700": {
    fontSize: "0.9375rem",
    lineHeight: "1.375rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1rem",
      lineHeight: "1.375rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.0625rem",
      lineHeight: "1.5rem",
      letterSpacing: "0rem"
    }
  },
  ".body-800": {
    fontSize: "1rem",
    lineHeight: "1.375rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.0625rem",
      lineHeight: "1.5rem",
      letterSpacing: "0rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      letterSpacing: "-0.02500000037252903rem"
    }
  },
  ".body-900": {
    fontSize: "1.0625rem",
    lineHeight: "1.5rem",
    letterSpacing: "0rem",
    "@media screen and (min-width: 31.0625rem) and (max-width: 64.0625rem)": {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      letterSpacing: "-0.02500000037252903rem"
    },
    "@media screen and (min-width: 64.0625rem)": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      letterSpacing: "-0.05000000074505806rem"
    }
  },
  ".control-1000": {
    fontSize: "2rem"
  },
  ".control-950": {
    fontSize: "1.75rem"
  },
  ".control-900": {
    fontSize: "1.5rem"
  },
  ".control-850": {
    fontSize: "1.25rem"
  },
  ".control-800": {
    fontSize: "1.125rem"
  },
  ".control-700": {
    fontSize: "1.0625rem"
  },
  ".control-600": {
    fontSize: "1rem"
  },
  ".control-500": {
    fontSize: "0.9375rem"
  },
  ".control-400": {
    fontSize: "0.875rem"
  },
  ".control-300": {
    fontSize: "0.8125rem"
  },
  ".control-200": {
    fontSize: "0.75rem"
  },
  ".control-100": {
    fontSize: "0.6875rem"
  },
  ".control-50": {
    fontSize: "0.625rem"
  }
}, Jt = ({ addUtilities: r }) => r(Yt), qt = {
  ":root": {
    "--rounded-200": "0rem",
    "--rounded-300": "0rem",
    "--rounded-400": "0rem",
    "--rounded-500": "0rem",
    "--rounded-600": "0rem",
    "--rounded-full": "37.5rem",
    "--rounded-none": "0rem"
  },
  ".theme-rounded-none": {
    "--rounded-200": "0rem",
    "--rounded-300": "0rem",
    "--rounded-400": "0rem",
    "--rounded-500": "0rem",
    "--rounded-600": "0rem",
    "--rounded-full": "37.5rem",
    "--rounded-none": "0rem"
  },
  ".theme-rounded": {
    "--rounded-200": "1.625rem",
    "--rounded-300": "1.625rem",
    "--rounded-400": "1.625rem",
    "--rounded-500": "1.625rem",
    "--rounded-600": "1.625rem",
    "--rounded-full": "37.5rem",
    "--rounded-none": "0rem"
  },
  ".theme-rounded-smooth": {
    "--rounded-200": "0.25rem",
    "--rounded-300": "0.375rem",
    "--rounded-400": "0.5rem",
    "--rounded-500": "0.625rem",
    "--rounded-600": "0.75rem",
    "--rounded-full": "37.5rem",
    "--rounded-none": "0rem"
  }
}, Kt = ({ addComponents: r }) => {
  r(qt);
}, Xt = "var(--rounded-full)", Zt = "var(--rounded-none)", Qt = {
  200: "var(--rounded-200)",
  300: "var(--rounded-300)",
  400: "var(--rounded-400)",
  500: "var(--rounded-500)",
  600: "var(--rounded-600)",
  full: Xt,
  none: Zt
}, en = "rgb(255 255 255 / <alpha-value>)", rn = {
  "primary-core": "rgb(var(--primary-core ) / <alpha-value>)",
  "primary-chroma": "rgb(var(--primary-chroma) / <alpha-value>)",
  "primary-dim": "rgb(var(--primary-dim) / <alpha-value>)",
  "primary-on": "rgb(var(--primary-on) / <alpha-value>)",
  "primary-on-dim": "rgb(var(--primary-on-dim) / <alpha-value>)",
  "primary-container-core": "rgb(var(--primary-container-core) / <alpha-value>)",
  "primary-container-chroma": "rgb(var(--primary-container-chroma) / <alpha-value>)",
  "primary-container-dim": "rgb(var(--primary-container-dim) / <alpha-value>)",
  "primary-container-on": "rgb(var(--primary-container-on) / <alpha-value>)",
  "primary-container-on-highest": "rgb(var(--primary-container-on-highest) / <alpha-value>)",
  "primary-container-on-high": "rgb(var(--primary-container-on-high) / <alpha-value>)",
  "primary-container-on-low": "rgb(var(--primary-container-on-low) / <alpha-value>)",
  "primary-container-on-lowest": "rgb(var(--primary-container-on-lowest) / <alpha-value>)",
  "secondary-core": "rgb(var(--secondary-core) / <alpha-value>)",
  "secondary-chroma": "rgb(var(--secondary-chroma) / <alpha-value>)",
  "secondary-dim": "rgb(var(--secondary-dim) / <alpha-value>)",
  "secondary-on": "rgb(var(--secondary-on) / <alpha-value>)",
  "secondary-on-dim": "rgb(var(--secondary-on-dim) / <alpha-value>)",
  "secondary-container-core": "rgb(var(--secondary-container-core) / <alpha-value>)",
  "secondary-container-chroma": "rgb(var(--secondary-container-chroma) / <alpha-value>)",
  "secondary-container-dim": "rgb(var(--secondary-container-dim) / <alpha-value>)",
  "secondary-container-on": "rgb(var(--secondary-container-on) / <alpha-value>)",
  "secondary-container-on-highest": "rgb(var(--secondary-container-on-highest) / <alpha-value>)",
  "secondary-container-on-high": "rgb(var(--secondary-container-on-high) / <alpha-value>)",
  "secondary-container-on-low": "rgb(var(--secondary-container-on-low) / <alpha-value>)",
  "secondary-container-on-lowest": "rgb(var(--secondary-container-on-lowest) / <alpha-value>)",
  "tertiary-core": "rgb(var(--tertiary-core) / <alpha-value>)",
  "tertiary-chroma": "rgb(var(--tertiary-chroma) / <alpha-value>)",
  "tertiary-dim": "rgb(var(--tertiary-dim) / <alpha-value>)",
  "tertiary-on": "rgb(var(--tertiary-on) / <alpha-value>)",
  "tertiary-on-dim": "rgb(var(--tertiary-on-dim) / <alpha-value>)",
  "tertiary-container-core": "rgb(var(--tertiary-container-core) / <alpha-value>)",
  "tertiary-container-chroma": "rgb(var(--tertiary-container-chroma) / <alpha-value>)",
  "tertiary-container-dim": "rgb(var(--tertiary-container-dim) / <alpha-value>)",
  "tertiary-container-on": "rgb(var(--tertiary-container-on) / <alpha-value>)",
  "tertiary-container-on-highest": "rgb(var(--tertiary-container-on-highest) / <alpha-value>)",
  "tertiary-container-on-high": "rgb(var(--tertiary-container-on-high) / <alpha-value>)",
  "tertiary-container-on-low": "rgb(var(--tertiary-container-on-low) / <alpha-value>)",
  "tertiary-container-on-lowest": "rgb(var(--tertiary-container-on-lowest) / <alpha-value>)",
  "addition-core": "rgb(var(--addition-core) / <alpha-value>)",
  "addition-chroma": "rgb(var(--addition-chroma) / <alpha-value>)",
  "addition-dim": "rgb(var(--addition-dim) / <alpha-value>)",
  "addition-on": "rgb(var(--addition-on) / <alpha-value>)",
  "addition-on-dim": "rgb(var(--addition-on-dim) / <alpha-value>)",
  "addition-container-core": "rgb(var(--addition-container-core) / <alpha-value>)",
  "addition-container-chroma": "rgb(var(--addition-container-chroma) / <alpha-value>)",
  "addition-container-dim": "rgb(var(--addition-container-dim) / <alpha-value>)",
  "addition-container-on": "rgb(var(--addition-container-on) / <alpha-value>)",
  "addition-container-on-highest": "rgb(var(--addition-container-on-highest) / <alpha-value>)",
  "addition-container-on-high": "rgb(var(--addition-container-on-high) / <alpha-value>)",
  "addition-container-on-low": "rgb(var(--addition-container-on-low) / <alpha-value>)",
  "addition-container-on-lowest": "rgb(var(--addition-container-on-lowest) / <alpha-value>)",
  "success-core": "rgb(var(--success-core) / <alpha-value>)",
  "success-chroma": "rgb(var(--success-chroma) / <alpha-value>)",
  "success-dim": "rgb(var(--success-dim) / <alpha-value>)",
  "success-on": "rgb(var(--success-on) / <alpha-value>)",
  "success-on-dim": "rgb(var(--success-on-dim) / <alpha-value>)",
  "success-container-core": "rgb(var(--success-container-core) / <alpha-value>)",
  "success-container-chroma": "rgb(var(--success-container-chroma) / <alpha-value>)",
  "success-container-dim": "rgb(var(--success-container-dim) / <alpha-value>)",
  "success-container-on": "rgb(var(--success-container-on) / <alpha-value>)",
  "success-container-on-highest": "rgb(var(--success-container-on-highest) / <alpha-value>)",
  "success-container-on-high": "rgb(var(--success-container-on-high) / <alpha-value>)",
  "success-container-on-low": "rgb(var(--success-container-on-low) / <alpha-value>)",
  "success-container-on-lowest": "rgb(var(--success-container-on-lowest) / <alpha-value>)",
  "error-core": "rgb(var(--error-core) / <alpha-value>)",
  "error-chroma": "rgb(var(--error-chroma) / <alpha-value>)",
  "error-dim": "rgb(var(--error-dim) / <alpha-value>)",
  "error-on": "rgb(var(--error-on) / <alpha-value>)",
  "error-on-dim": "rgb(var(--error-on-dim) / <alpha-value>)",
  "error-container-core": "rgb(var(--error-container-core) / <alpha-value>)",
  "error-container-chroma": "rgb(var(--error-container-chroma) / <alpha-value>)",
  "error-container-dim": "rgb(var(--error-container-dim) / <alpha-value>)",
  "error-container-on": "rgb(var(--error-container-on) / <alpha-value>)",
  "error-container-on-highest": "rgb(var(--error-container-on-highest) / <alpha-value>)",
  "error-container-on-high": "rgb(var(--error-container-on-high) / <alpha-value>)",
  "error-container-on-low": "rgb(var(--error-container-on-low) / <alpha-value>)",
  "error-container-on-lowest": "rgb(var(--error-container-on-lowest) / <alpha-value>)",
  "surface-bright": "rgb(var(--surface-bright) / <alpha-value>)",
  "surface-surface": "rgb(var(--surface-surface) / <alpha-value>)",
  "surface-dim": "rgb(var(--surface-dim) / <alpha-value>)",
  "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
  "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
  "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
  "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
  "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
  "surface-chromatic-start": "rgb(var(--surface-chromatic-start) / <alpha-value>)",
  "surface-chromatic-mid-start": "rgb(var(--surface-chromatic-mid-start) / <alpha-value>)",
  "surface-chromatic-mid-end": "rgb(var(--surface-chromatic-mid-end) / <alpha-value>)",
  "surface-chromatic-end": "rgb(var(--surface-chromatic-end) / <alpha-value>)",
  "surface-on-highest": "rgb(var(--surface-on-highest) / <alpha-value>)",
  "surface-on-high": "rgb(var(--surface-on-high) / <alpha-value>)",
  "surface-on": "rgb(var(--surface-on) / <alpha-value>)",
  "surface-on-low": "rgb(var(--surface-on-low) / <alpha-value>)",
  "surface-on-lowest": "rgb(var(--surface-on-lowest) / <alpha-value>)",
  "surface-on-accent": "rgb(var(--surface-on-accent) / <alpha-value>)",
  "surface-transparent": "rgb(var(--surface-transparent) / 0)",
  "inverse-surface-bright": "rgb(var(--inverse-surface-bright) / <alpha-value>)",
  "inverse-surface-surface": "rgb(var(--inverse-surface-surface) / <alpha-value>)",
  "inverse-surface-dim": "rgb(var(--inverse-surface-dim) / <alpha-value>)",
  "inverse-surface-container-lowest": "rgb(var(--inverse-surface-container-lowest) / <alpha-value>)",
  "inverse-surface-container-low": "rgb(var(--inverse-surface-container-low) / <alpha-value>)",
  "inverse-surface-container": "rgb(var(--inverse-surface-container) / <alpha-value>)",
  "inverse-surface-container-high": "rgb(var(--inverse-surface-container-high) / <alpha-value>)",
  "inverse-surface-container-highest": "rgb(var(--inverse-surface-container-highest) / <alpha-value>)",
  "inverse-surface-chromatic-start": "rgb(var(--inverse-surface-chromatic-start) / <alpha-value>)",
  "inverse-surface-chromatic-mid-start": "rgb(var(--inverse-surface-chromatic-mid-start) / <alpha-value>)",
  "inverse-surface-chromatic-mid-end": "rgb(var(--inverse-surface-chromatic-mid-end) / <alpha-value>)",
  "inverse-surface-chromatic-end": "rgb(var(--inverse-surface-chromatic-end) / <alpha-value>)",
  "inverse-surface-on-highest": "rgb(var(--inverse-surface-on-highest) / <alpha-value>)",
  "inverse-surface-on-high": "rgb(var(--inverse-surface-on-high) / <alpha-value>)",
  "inverse-surface-on": "rgb(var(--inverse-surface-on) / <alpha-value>)",
  "inverse-surface-on-low": "rgb(var(--inverse-surface-on-low) / <alpha-value>)",
  "inverse-surface-on-lowest": "rgb(var(--inverse-surface-on-lowest) / <alpha-value>)",
  "inverse-surface-on-accent": "rgb(var(--inverse-surface-on-accent) / <alpha-value>)",
  white: en
}, on = (r) => {
  const t = new Bt();
  return t.setColors(rn), t.setBorderRadius(Qt), t.addPlugin(Jt), t.addPlugin(Kt), r(t), t.build();
};
export {
  nn as Button,
  mr as Icon,
  on as createTailwindConfig,
  an as makeButton
};
