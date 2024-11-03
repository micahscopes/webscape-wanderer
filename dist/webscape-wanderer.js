import { m as k, u as O, M as We, V as Ye, p as $t, g as $r, i as Ja, d as Va, w as Ss, a as Za, l as Xa, c as Wa, s as _, b as W, e as Se, f as Ua, h as Ka, j as _t, k as ks, n as Rs, o as ve, q as vt, r as $a, t as j, v as q, x as _a, y as R, z as qt, A as en, B as tn, C as eu, D as Qr, E as mi, T as tu, F as nu, G as js, H as nn, I as ru, J as Hs, K as Ai, L as iu, N as U, O as dt, P as bi, Q as yi, R as wi, S as ou, U as un, W as Oe, X as su, Y as au, Z as Qs, _ as uu, $ as cu, a0 as lu, a1 as fu, a2 as Ns, a3 as Rt, a4 as du, a5 as hu, a6 as Ts, a7 as gu, a8 as vu, a9 as cn, aa as rn, ab as pu, ac as mu, ad as Au, ae as bu, af as yu, ag as wu, ah as xi, ai as Ue, aj as Pn, ak as Pi, al as jt, am as xu, an as Ii, ao as In, ap as Pu, aq as Iu } from "./worker-bc1f9942.js";
const ln = k.infinite((t) => ({
  globalProjection: O(new We()),
  globalView: O(new We()),
  zoomedProjection: O(new We()),
  zoomedView: O(new We()),
  fixedProjection: O(new We()),
  fixedView: O(new We()),
  distance: O(0),
  center: O(new Ye(0, 0, 0)),
  rotationCenter: O(new Ye(0, 0, 0))
})), Eu = (t) => k(
  $t(
    (e, n, r, i, o, a, s) => {
      const u = ln(t);
      u.globalProjection.value.fromArray(e), u.globalView.value.fromArray(n), u.zoomedProjection.value.fromArray(r), u.zoomedView.value.fromArray(i), u.fixedProjection.value.fromArray(o), u.fixedView.value.fromArray(a), u.distance.value = s[0], u.center.value.fromArray(s.slice(1, 4)), u.rotationCenter.value.fromArray(s.slice(4, 7));
    }
  )
);
var It = {};
function Cu(t) {
  if (typeof t == "object") {
    if ("buttons" in t)
      return t.buttons;
    if ("which" in t) {
      var e = t.which;
      if (e === 2)
        return 4;
      if (e === 3)
        return 2;
      if (e > 0)
        return 1 << e - 1;
    } else if ("button" in t) {
      var e = t.button;
      if (e === 1)
        return 4;
      if (e === 2)
        return 2;
      if (e >= 0)
        return 1 << e;
    }
  }
  return 0;
}
It.buttons = Cu;
function _r(t) {
  return t.target || t.srcElement || window;
}
It.element = _r;
function Bu(t) {
  if (typeof t == "object") {
    if ("offsetX" in t)
      return t.offsetX;
    var e = _r(t), n = e.getBoundingClientRect();
    return t.clientX - n.left;
  }
  return 0;
}
It.x = Bu;
function Mu(t) {
  if (typeof t == "object") {
    if ("offsetY" in t)
      return t.offsetY;
    var e = _r(t), n = e.getBoundingClientRect();
    return t.clientY - n.top;
  }
  return 0;
}
It.y = Mu;
var zu = Su, ut = It;
function Su(t, e) {
  e || (e = t, t = window);
  var n = 0, r = 0, i = 0, o = {
    shift: !1,
    alt: !1,
    control: !1,
    meta: !1
  }, a = !1;
  function s(h) {
    var v = !1;
    return "altKey" in h && (v = v || h.altKey !== o.alt, o.alt = !!h.altKey), "shiftKey" in h && (v = v || h.shiftKey !== o.shift, o.shift = !!h.shiftKey), "ctrlKey" in h && (v = v || h.ctrlKey !== o.control, o.control = !!h.ctrlKey), "metaKey" in h && (v = v || h.metaKey !== o.meta, o.meta = !!h.metaKey), v;
  }
  function u(h, v) {
    var A = ut.x(v), x = ut.y(v);
    "buttons" in v && (h = v.buttons | 0), (h !== n || A !== r || x !== i || s(v)) && (n = h | 0, r = A || 0, i = x || 0, e && e(n, r, i, o));
  }
  function c(h) {
    u(0, h);
  }
  function l() {
    (n || r || i || o.shift || o.alt || o.meta || o.control) && (r = i = 0, n = 0, o.shift = o.alt = o.control = o.meta = !1, e && e(0, 0, 0, o));
  }
  function f(h) {
    s(h) && e && e(n, r, i, o);
  }
  function g(h) {
    ut.buttons(h) === 0 ? u(0, h) : u(n, h);
  }
  function d(h) {
    u(n | ut.buttons(h), h);
  }
  function y(h) {
    u(n & ~ut.buttons(h), h);
  }
  function p() {
    a || (a = !0, t.addEventListener("mousemove", g), t.addEventListener("mousedown", d), t.addEventListener("mouseup", y), t.addEventListener("mouseleave", c), t.addEventListener("mouseenter", c), t.addEventListener("mouseout", c), t.addEventListener("mouseover", c), t.addEventListener("blur", l), t.addEventListener("keyup", f), t.addEventListener("keydown", f), t.addEventListener("keypress", f), t !== window && (window.addEventListener("blur", l), window.addEventListener("keyup", f), window.addEventListener("keydown", f), window.addEventListener("keypress", f)));
  }
  function b() {
    a && (a = !1, t.removeEventListener("mousemove", g), t.removeEventListener("mousedown", d), t.removeEventListener("mouseup", y), t.removeEventListener("mouseleave", c), t.removeEventListener("mouseenter", c), t.removeEventListener("mouseout", c), t.removeEventListener("mouseover", c), t.removeEventListener("blur", l), t.removeEventListener("keyup", f), t.removeEventListener("keydown", f), t.removeEventListener("keypress", f), t !== window && (window.removeEventListener("blur", l), window.removeEventListener("keyup", f), window.removeEventListener("keydown", f), window.removeEventListener("keypress", f)));
  }
  p();
  var m = {
    element: t
  };
  return Object.defineProperties(m, {
    enabled: {
      get: function() {
        return a;
      },
      set: function(h) {
        h ? p() : b();
      },
      enumerable: !0
    },
    buttons: {
      get: function() {
        return n;
      },
      enumerable: !0
    },
    x: {
      get: function() {
        return r;
      },
      enumerable: !0
    },
    y: {
      get: function() {
        return i;
      },
      enumerable: !0
    },
    mods: {
      get: function() {
        return o;
      },
      enumerable: !0
    }
  }), m;
}
var ku = { left: 0, top: 0 }, Ru = ju;
function ju(t, e, n) {
  e = e || t.currentTarget || t.srcElement, Array.isArray(n) || (n = [0, 0]);
  var r = t.clientX || 0, i = t.clientY || 0, o = Hu(e);
  return n[0] = r - o.left, n[1] = i - o.top, n;
}
function Hu(t) {
  return t === window || t === document || t === document.body ? ku : t.getBoundingClientRect();
}
var Nr = { exports: {} }, Ys = { exports: {} }, Qu = void 0, Os = function(t) {
  return t !== Qu && t !== null;
}, Nu = Os, Tu = {
  object: !0,
  function: !0,
  undefined: !0
  /* document.all */
}, Yu = function(t) {
  return Nu(t) ? hasOwnProperty.call(Tu, typeof t) : !1;
}, Ou = Yu, Du = function(t) {
  if (!Ou(t))
    return !1;
  try {
    return t.constructor ? t.constructor.prototype === t : !1;
  } catch {
    return !1;
  }
}, Gu = Du, Fu = function(t) {
  if (typeof t != "function" || !hasOwnProperty.call(t, "length"))
    return !1;
  try {
    if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function")
      return !1;
  } catch {
    return !1;
  }
  return !Gu(t);
}, Lu = Fu, qu = /^\s*class[\s{/}]/, Ju = Function.prototype.toString, Vu = function(t) {
  return !(!Lu(t) || qu.test(Ju.call(t)));
}, Zu = function() {
  var t = Object.assign, e;
  return typeof t != "function" ? !1 : (e = { foo: "raz" }, t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
}, En, Ei;
function Xu() {
  return Ei || (Ei = 1, En = function() {
    try {
      return Object.keys("primitive"), !0;
    } catch {
      return !1;
    }
  }), En;
}
var Wu = function() {
}, Uu = Wu(), Ge = function(t) {
  return t !== Uu && t !== null;
}, Cn, Ci;
function Ku() {
  if (Ci)
    return Cn;
  Ci = 1;
  var t = Ge, e = Object.keys;
  return Cn = function(n) {
    return e(t(n) ? Object(n) : n);
  }, Cn;
}
var Bn, Bi;
function $u() {
  return Bi || (Bi = 1, Bn = Xu()() ? Object.keys : Ku()), Bn;
}
var _u = Ge, at = function(t) {
  if (!_u(t))
    throw new TypeError("Cannot use null or undefined");
  return t;
}, Mn, Mi;
function ec() {
  if (Mi)
    return Mn;
  Mi = 1;
  var t = $u(), e = at, n = Math.max;
  return Mn = function(r, i) {
    var o, a, s = n(arguments.length, 2), u;
    for (r = Object(e(r)), u = function(c) {
      try {
        r[c] = i[c];
      } catch (l) {
        o || (o = l);
      }
    }, a = 1; a < s; ++a)
      i = arguments[a], t(i).forEach(u);
    if (o !== void 0)
      throw o;
    return r;
  }, Mn;
}
var Ds = Zu() ? Object.assign : ec(), tc = Ge, nc = Array.prototype.forEach, rc = Object.create, ic = function(t, e) {
  var n;
  for (n in t)
    e[n] = t[n];
}, Gs = function(t) {
  var e = rc(null);
  return nc.call(arguments, function(n) {
    tc(n) && ic(Object(n), e);
  }), e;
}, zn = "razdwatrzy", oc = function() {
  return typeof zn.contains != "function" ? !1 : zn.contains("dwa") === !0 && zn.contains("foo") === !1;
}, Sn, zi;
function sc() {
  if (zi)
    return Sn;
  zi = 1;
  var t = String.prototype.indexOf;
  return Sn = function(e) {
    return t.call(this, e, arguments[1]) > -1;
  }, Sn;
}
var ac = oc() ? String.prototype.contains : sc(), Jt = Os, Si = Vu, Fs = Ds, Ls = Gs, pt = ac, uc = Ys.exports = function(t, e) {
  var n, r, i, o, a;
  return arguments.length < 2 || typeof t != "string" ? (o = e, e = t, t = null) : o = arguments[2], Jt(t) ? (n = pt.call(t, "c"), r = pt.call(t, "e"), i = pt.call(t, "w")) : (n = i = !0, r = !1), a = { value: e, configurable: n, enumerable: r, writable: i }, o ? Fs(Ls(o), a) : a;
};
uc.gs = function(t, e, n) {
  var r, i, o, a;
  return typeof t != "string" ? (o = n, n = e, e = t, t = null) : o = arguments[3], Jt(e) ? Si(e) ? Jt(n) ? Si(n) || (o = n, n = void 0) : n = void 0 : (o = e, e = n = void 0) : e = void 0, Jt(t) ? (r = pt.call(t, "c"), i = pt.call(t, "e")) : (r = !0, i = !1), a = { get: e, set: n, configurable: r, enumerable: i }, o ? Fs(Ls(o), a) : a;
};
var Fe = Ys.exports, ke = function(t) {
  if (typeof t != "function")
    throw new TypeError(t + " is not a function");
  return t;
};
(function(t, e) {
  var n = Fe, r = ke, i = Function.prototype.apply, o = Function.prototype.call, a = Object.create, s = Object.defineProperty, u = Object.defineProperties, c = Object.prototype.hasOwnProperty, l = { configurable: !0, enumerable: !1, writable: !0 }, f, g, d, y, p, b, m;
  f = function(h, v) {
    var A;
    return r(v), c.call(this, "__ee__") ? A = this.__ee__ : (A = l.value = a(null), s(this, "__ee__", l), l.value = null), A[h] ? typeof A[h] == "object" ? A[h].push(v) : A[h] = [A[h], v] : A[h] = v, this;
  }, g = function(h, v) {
    var A, x;
    return r(v), x = this, f.call(this, h, A = function() {
      d.call(x, h, A), i.call(v, this, arguments);
    }), A.__eeOnceListener__ = v, this;
  }, d = function(h, v) {
    var A, x, w, C;
    if (r(v), !c.call(this, "__ee__"))
      return this;
    if (A = this.__ee__, !A[h])
      return this;
    if (x = A[h], typeof x == "object")
      for (C = 0; w = x[C]; ++C)
        (w === v || w.__eeOnceListener__ === v) && (x.length === 2 ? A[h] = x[C ? 0 : 1] : x.splice(C, 1));
    else
      (x === v || x.__eeOnceListener__ === v) && delete A[h];
    return this;
  }, y = function(h) {
    var v, A, x, w, C;
    if (c.call(this, "__ee__") && (w = this.__ee__[h], !!w))
      if (typeof w == "object") {
        for (A = arguments.length, C = new Array(A - 1), v = 1; v < A; ++v)
          C[v - 1] = arguments[v];
        for (w = w.slice(), v = 0; x = w[v]; ++v)
          i.call(x, this, C);
      } else
        switch (arguments.length) {
          case 1:
            o.call(w, this);
            break;
          case 2:
            o.call(w, this, arguments[1]);
            break;
          case 3:
            o.call(w, this, arguments[1], arguments[2]);
            break;
          default:
            for (A = arguments.length, C = new Array(A - 1), v = 1; v < A; ++v)
              C[v - 1] = arguments[v];
            i.call(w, this, C);
        }
  }, p = {
    on: f,
    once: g,
    off: d,
    emit: y
  }, b = {
    on: n(f),
    once: n(g),
    off: n(d),
    emit: n(y)
  }, m = u({}, b), t.exports = e = function(h) {
    return h == null ? a(m) : u(Object(h), b);
  }, e.methods = p;
})(Nr, Nr.exports);
var qs = Nr.exports, cc = dc, lc = zu, Ke = Ru, fc = qs;
function dc(t) {
  t = t || window;
  var e = fc(), n = [null, null], r = [null, null], i = [null, null], o = [null, null], a = 0, s = {}, u, c, l = t === window ? function() {
    u = window.innerWidth, c = window.innerHeight;
  } : function() {
    u = t.clientWidth, c = t.clientHeight;
  }, f = 0, g, d, y = {}, p = lc(t, function(M, B, z, H) {
    g = B, d = z, f = M, y = H;
  });
  function b(M) {
    Ke(M, t, i), l(), s.buttons = f, s.mods = y, s.x0 = s.x = s.x1 = 2 * i[0] / u - 1, s.y0 = s.y = s.y1 = 1 - 2 * i[1] / c, s.x2 = null, s.y2 = null, s.dx = 2 * M.deltaX / u, s.dy = -2 * M.deltaY / c, s.dz = 2 * M.deltaZ / u, s.active = 1, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit("wheel", s), n[0] = i[0], n[1] = i[1];
  }
  var m = null, h = null, v = 0;
  function A(M) {
    Ke(M, t, i), v = 0, l(), s.buttons = f, s.mods = y, s.x = s.x1 = 2 * i[0] / u - 1, s.y = s.y1 = 1 - 2 * i[1] / c, s.x2 = null, s.y2 = null, s.active = v, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.dx = 0, s.dy = 0, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit("mouseup", s), m = h = null, n[0] = i[0], n[1] = i[1];
  }
  function x(M) {
    Ke(M, t, i), v = 1, l(), m = g, h = d, s.buttons = f, s.mods = y, s.x = s.x0 = s.x1 = 2 * i[0] / u - 1, s.y = s.y0 = s.y1 = 1 - 2 * i[1] / c, s.x2 = null, s.y2 = null, s.active = v, s.dx = 0, s.dy = 0, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit("mousedown", s), n[0] = i[0], n[1] = i[1];
  }
  function w(M) {
    Ke(M, t, i), l(), s.buttons = f, s.mods = y, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.x = s.x1 = 2 * i[0] / u - 1, s.y = s.y1 = 1 - 2 * i[1] / c, s.x2 = null, s.y2 = null, s.dx = 2 * (i[0] - n[0]) / u, s.dy = -2 * (i[1] - n[1]) / c, s.active = v, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit("mousemove", s), n[0] = i[0], n[1] = i[1];
  }
  function C(M) {
    for (var B = M.identifier, z = 0; z < o.length; z++)
      if (o[z] && o[z].touch && o[z].touch.identifier === B)
        return z;
    return -1;
  }
  function S(M) {
    r[0] = null, r[1] = null;
    for (var B = 0; B < M.changedTouches.length; B++) {
      var z = M.changedTouches[B], H = z.identifier, V = C(H);
      if (V === -1 && a < 2) {
        var Ae = o[0] ? 1 : 0, D = o[0] ? 0 : 1, Y = {
          position: [0, 0],
          touch: null
        };
        o[Ae] = Y, a++, Y.touch = z, Ke(z, t, Y.position), o[D] && o[D].touch;
      }
    }
    for (var F = 0, L = 0, Z = 0, B = 0; B < o.length; B++)
      o[B] && (F += o[B].position[0], L += o[B].position[1], Z++);
    if (F /= Z, L /= Z, a > 0) {
      if (s.theta = 0, Z > 1) {
        var xe = o[1].position[0] - o[0].position[0], be = (o[0].position[1] - o[1].position[1]) * u / c;
        s.theta = Math.atan2(be, xe);
      }
      l(), s.buttons = 0, s.mods = {}, s.active = a, m = F, h = L, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.x = 2 * F / u - 1, s.y = 1 - 2 * L / c, s.x1 = 2 * o[0].position[0] / u - 1, s.y1 = 1 - 2 * o[0].position[1] / c, a > 1 && (s.x2 = 2 * o[1].position[0] / u - 1, s.y2 = 1 - 2 * o[1].position[1] / c), s.active = a, s.dx = 0, s.dy = 0, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.dtheta = 0, s.originalEvent = M, e.emit(a === 1 ? "touchstart" : "pinchstart", s);
    }
  }
  function G(M) {
    for (var B, z = !1, H = 0; H < M.changedTouches.length; H++) {
      var V = M.changedTouches[H];
      B = C(V), B !== -1 && (z = !0, o[B].touch = V, Ke(V, t, o[B].position));
    }
    if (z) {
      if (a === 1) {
        for (B = 0; B < o.length && !o[B]; B++)
          ;
        if (o[B] && r[B]) {
          var Ae = o[B].position[0], D = o[B].position[1], Y = Ae - r[B][0], F = D - r[B][1];
          s.buttons = 0, s.mods = {}, s.active = a, s.x = s.x1 = 2 * Ae / u - 1, s.y = s.y1 = 1 - 2 * D / c, s.x2 = null, s.y2 = null, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.dx = 2 * Y / u, s.dy = -2 * F / c, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit("touchmove", s);
        }
      } else if (a === 2 && r[0] && r[1]) {
        var L = r[0], Z = r[1], xe = Z[0] - L[0], be = (Z[1] - L[1]) * u / c, Pe = o[0].position, Ie = o[1].position, Je = Ie[0] - Pe[0], Ve = (Pe[1] - Ie[1]) * u / c, Bt = Math.sqrt(xe * xe + be * be) * 0.5, An = Math.atan2(be, xe), Ze = Math.sqrt(Je * Je + Ve * Ve) * 0.5, Mt = Math.atan2(Ve, Je), bn = (Z[0] + L[0]) * 0.5, Re = (Z[1] + L[1]) * 0.5, Y = 0.5 * (Ie[0] + Pe[0] - L[0] - Z[0]), F = 0.5 * (Ie[1] + Pe[1] - L[1] - Z[1]), Xe = Ze / Bt, yn = Mt - An;
        s.buttons = 0, s.mods = y, s.active = a, s.x = 2 * bn / u - 1, s.y = 1 - 2 * Re / c, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.x1 = 2 * Pe[0] / u - 1, s.y1 = 1 - 2 * Pe[1] / c, s.x2 = 2 * Ie[0] / u - 1, s.y2 = 1 - 2 * Ie[1] / c, s.dx = 2 * Y / u, s.dy = -2 * F / c, s.dz = 0, s.zoomx = Xe, s.zoomy = Xe, s.theta = Mt, s.dtheta = yn, s.originalEvent = M, e.emit("pinchmove", s);
      }
    }
    o[0] && (r[0] = o[0].position.slice()), o[1] && (r[1] = o[1].position.slice());
  }
  function te(M) {
    for (var B, z = 0; z < M.changedTouches.length; z++) {
      var H = M.changedTouches[z], V = C(H);
      if (V !== -1) {
        B = o[V], o[V] = null, a--;
        var Ae = V === 0 ? 1 : 0;
        o[Ae] && o[Ae].touch;
      }
    }
    var D = 0, Y = 0;
    if (a === 0)
      B && (D = B.position[0], Y = B.position[1]);
    else {
      for (var F = 0, z = 0; z < o.length; z++)
        o[z] && (D += o[z].position[0], Y += o[z].position[1], F++);
      D /= F, Y /= F;
    }
    a < 2 && (s.buttons = 0, s.mods = y, s.active = a, s.x = 2 * D / u - 1, s.y = 1 - 2 * Y / c, s.x0 = 2 * m / u - 1, s.y0 = 1 - 2 * h / c, s.dx = 0, s.dy = 0, s.dz = 0, s.zoomx = 1, s.zoomy = 1, s.theta = 0, s.dtheta = 0, s.originalEvent = M, e.emit(a === 0 ? "touchend" : "pinchend", s)), a === 0 && (m = h = null);
  }
  var oe = !1;
  function me() {
    oe || (oe = !0, p.enabled = !0, t.addEventListener("wheel", b, !1), t.addEventListener("mousedown", x, !1), window.addEventListener("mousemove", w, !1), window.addEventListener("mouseup", A, !1), t.addEventListener("touchstart", S, !1), window.addEventListener("touchmove", G, !1), window.addEventListener("touchend", te, !1), window.addEventListener("touchcancel", te, !1));
  }
  function ne() {
    oe && (oe = !1, p.enabled = !1, t.removeEventListener("wheel", b, !1), t.removeEventListener("mousedown", x, !1), window.removeEventListener("mousemove", w, !1), window.removeEventListener("mouseup", A, !1), t.removeEventListener("touchstart", S, !1), window.removeEventListener("touchmove", G, !1), window.removeEventListener("touchend", te, !1), window.removeEventListener("touchcancel", te, !1));
  }
  return me(), e.enable = me, e.disable = ne, e;
}
const Vt = /* @__PURE__ */ $r(cc);
function Js() {
  return new Worker(
    new URL("worker-b6659453.js", import.meta.url).href,
    { type: "module" }
  );
}
var hc = "Expected a function";
function Tr(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(hc);
  return Ja(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Va(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
var ki = globalThis && globalThis.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, o; r < i; r++)
      (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}, gc = (
  /** @class */
  function() {
    function t(e, n, r) {
      this.name = e, this.version = n, this.os = r, this.type = "browser";
    }
    return t;
  }()
), vc = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), pc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      this.name = e, this.version = n, this.os = r, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), mc = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Ac = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), bc = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, yc = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ri = 3, wc = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", bc]
], ji = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function xc(t) {
  return t ? Hi(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Ac() : typeof navigator < "u" ? Hi(navigator.userAgent) : Ec();
}
function Pc(t) {
  return t !== "" && wc.reduce(function(e, n) {
    var r = n[0], i = n[1];
    if (e)
      return e;
    var o = i.exec(t);
    return !!o && [r, o];
  }, !1);
}
function Hi(t) {
  var e = Pc(t);
  if (!e)
    return null;
  var n = e[0], r = e[1];
  if (n === "searchbot")
    return new mc();
  var i = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Ri && (i = ki(ki([], i, !0), Cc(Ri - i.length), !0)) : i = [];
  var o = i.join("."), a = Ic(t), s = yc.exec(t);
  return s && s[1] ? new pc(n, o, a, s[1]) : new gc(n, o, a);
}
function Ic(t) {
  for (var e = 0, n = ji.length; e < n; e++) {
    var r = ji[e], i = r[0], o = r[1], a = o.exec(t);
    if (a)
      return i;
  }
  return null;
}
function Ec() {
  var t = typeof process < "u" && process.version;
  return t ? new vc(process.version.slice(1)) : null;
}
function Cc(t) {
  for (var e = [], n = 0; n < t; n++)
    e.push("0");
  return e;
}
const Qi = xc(navigator.userAgent), ei = Qi?.name !== "safari" && Qi?.os !== "iOS";
ei ? console.debug("Using workers") : console.warn(
  "Not using workers due to an awful memory leak that makes WebKit crash if you use workers"
);
const Yr = k.infinite(
  (t) => ei ? Ss(new Js()) : Za
), Bc = k.infinite(
  (t) => ei ? Ss(new Js()) : Xa
), ee = k.infinite(
  (t) => Wa
);
var E = globalThis && globalThis.__classPrivateFieldSet || function(t, e, n) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, n), n;
}, P = globalThis && globalThis.__classPrivateFieldGet || function(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}, Ce, Qe, ie, $e, ht, se, ae, ue, ce, le, fe, de, he, Ne, _e, Be, Zt, Me;
const Mc = function(t) {
  var e = 131, n = 137, r = 0;
  t += "x";
  var i = Math.floor(9007199254740991 / n);
  for (let o = 0; o < t.length; o++)
    r > i && (r = Math.floor(r / n)), r = r * e + t.charCodeAt(o);
  return r;
}, I = "0123456789abcdef".split(""), zc = [
  -2147483648,
  8388608,
  32768,
  128
], re = [
  24,
  16,
  8,
  0
], Ht = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], Q = [];
class Sc {
  constructor(e = !1, n = !1) {
    Ce.set(this, void 0), Qe.set(this, void 0), ie.set(this, void 0), $e.set(this, void 0), ht.set(this, void 0), se.set(this, void 0), ae.set(this, void 0), ue.set(this, void 0), ce.set(this, void 0), le.set(this, void 0), fe.set(this, void 0), de.set(this, void 0), he.set(this, void 0), Ne.set(this, void 0), _e.set(this, void 0), Be.set(this, void 0), Zt.set(this, 0), Me.set(this, void 0), this.init(e, n);
  }
  init(e, n) {
    n ? (Q[0] = Q[16] = Q[1] = Q[2] = Q[3] = Q[4] = Q[5] = Q[6] = Q[7] = Q[8] = Q[9] = Q[10] = Q[11] = Q[12] = Q[13] = Q[14] = Q[15] = 0, E(this, Qe, Q)) : E(this, Qe, [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]), e ? (E(this, se, 3238371032), E(this, ae, 914150663), E(this, ue, 812702999), E(this, ce, 4144912697), E(this, le, 4290775857), E(this, fe, 1750603025), E(this, de, 1694076839), E(this, he, 3204075428)) : (E(this, se, 1779033703), E(this, ae, 3144134277), E(this, ue, 1013904242), E(this, ce, 2773480762), E(this, le, 1359893119), E(this, fe, 2600822924), E(this, de, 528734635), E(this, he, 1541459225)), E(this, Ce, E(this, Me, E(this, ie, E(this, _e, 0)))), E(this, $e, E(this, Ne, !1)), E(this, ht, !0), E(this, Be, e);
  }
  update(e) {
    if (P(this, $e))
      return this;
    let n;
    e instanceof ArrayBuffer ? n = new Uint8Array(e) : n = e;
    let r = 0;
    const i = n.length, o = P(this, Qe);
    for (; r < i; ) {
      let a;
      if (P(this, Ne) && (E(this, Ne, !1), o[0] = P(this, Ce), o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), typeof n != "string")
        for (a = P(this, Me); r < i && a < 64; ++r)
          o[a >> 2] |= n[r] << re[a++ & 3];
      else
        for (a = P(this, Me); r < i && a < 64; ++r) {
          let s = n.charCodeAt(r);
          s < 128 ? o[a >> 2] |= s << re[a++ & 3] : s < 2048 ? (o[a >> 2] |= (192 | s >> 6) << re[a++ & 3], o[a >> 2] |= (128 | s & 63) << re[a++ & 3]) : s < 55296 || s >= 57344 ? (o[a >> 2] |= (224 | s >> 12) << re[a++ & 3], o[a >> 2] |= (128 | s >> 6 & 63) << re[a++ & 3], o[a >> 2] |= (128 | s & 63) << re[a++ & 3]) : (s = 65536 + ((s & 1023) << 10 | n.charCodeAt(++r) & 1023), o[a >> 2] |= (240 | s >> 18) << re[a++ & 3], o[a >> 2] |= (128 | s >> 12 & 63) << re[a++ & 3], o[a >> 2] |= (128 | s >> 6 & 63) << re[a++ & 3], o[a >> 2] |= (128 | s & 63) << re[a++ & 3]);
        }
      E(this, Zt, a), E(this, ie, P(this, ie) + (a - P(this, Me))), a >= 64 ? (E(this, Ce, o[16]), E(this, Me, a - 64), this.hash(), E(this, Ne, !0)) : E(this, Me, a);
    }
    return P(this, ie) > 4294967295 && (E(this, _e, P(this, _e) + (P(this, ie) / 4294967296 << 0)), E(this, ie, P(this, ie) % 4294967296)), this;
  }
  finalize() {
    if (P(this, $e))
      return;
    E(this, $e, !0);
    const e = P(this, Qe), n = P(this, Zt);
    e[16] = P(this, Ce), e[n >> 2] |= zc[n & 3], E(this, Ce, e[16]), n >= 56 && (P(this, Ne) || this.hash(), e[0] = P(this, Ce), e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = P(this, _e) << 3 | P(this, ie) >>> 29, e[15] = P(this, ie) << 3, this.hash();
  }
  hash() {
    let e = P(this, se), n = P(this, ae), r = P(this, ue), i = P(this, ce), o = P(this, le), a = P(this, fe), s = P(this, de), u = P(this, he);
    const c = P(this, Qe);
    let l, f, g, d, y, p, b, m, h, v;
    for (let A = 16; A < 64; ++A)
      d = c[A - 15], l = (d >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3, d = c[A - 2], f = (d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10, c[A] = c[A - 16] + l + c[A - 7] + f << 0;
    v = n & r;
    for (let A = 0; A < 64; A += 4)
      P(this, ht) ? (P(this, Be) ? (b = 300032, d = c[0] - 1413257819, u = d - 150054599 << 0, i = d + 24177077 << 0) : (b = 704751109, d = c[0] - 210244248, u = d - 1521486534 << 0, i = d + 143694565 << 0), E(this, ht, !1)) : (l = (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), f = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7), b = e & n, g = b ^ e & r ^ v, p = o & a ^ ~o & s, d = u + f + p + Ht[A] + c[A], y = l + g, u = i + d << 0, i = d + y << 0), l = (i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10), f = (u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7), m = i & e, g = m ^ i & n ^ b, p = u & o ^ ~u & a, d = s + f + p + Ht[A + 1] + c[A + 1], y = l + g, s = r + d << 0, r = d + y << 0, l = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10), f = (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7), h = r & i, g = h ^ r & e ^ m, p = s & u ^ ~s & o, d = a + f + p + Ht[A + 2] + c[A + 2], y = l + g, a = n + d << 0, n = d + y << 0, l = (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10), f = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7), v = n & r, g = v ^ n & i ^ h, p = a & s ^ ~a & u, d = o + f + p + Ht[A + 3] + c[A + 3], y = l + g, o = e + d << 0, e = d + y << 0;
    E(this, se, P(this, se) + e << 0), E(this, ae, P(this, ae) + n << 0), E(this, ue, P(this, ue) + r << 0), E(this, ce, P(this, ce) + i << 0), E(this, le, P(this, le) + o << 0), E(this, fe, P(this, fe) + a << 0), E(this, de, P(this, de) + s << 0), E(this, he, P(this, he) + u << 0);
  }
  hex() {
    this.finalize();
    const e = P(this, se), n = P(this, ae), r = P(this, ue), i = P(this, ce), o = P(this, le), a = P(this, fe), s = P(this, de), u = P(this, he);
    let c = I[e >> 28 & 15] + I[e >> 24 & 15] + I[e >> 20 & 15] + I[e >> 16 & 15] + I[e >> 12 & 15] + I[e >> 8 & 15] + I[e >> 4 & 15] + I[e & 15] + I[n >> 28 & 15] + I[n >> 24 & 15] + I[n >> 20 & 15] + I[n >> 16 & 15] + I[n >> 12 & 15] + I[n >> 8 & 15] + I[n >> 4 & 15] + I[n & 15] + I[r >> 28 & 15] + I[r >> 24 & 15] + I[r >> 20 & 15] + I[r >> 16 & 15] + I[r >> 12 & 15] + I[r >> 8 & 15] + I[r >> 4 & 15] + I[r & 15] + I[i >> 28 & 15] + I[i >> 24 & 15] + I[i >> 20 & 15] + I[i >> 16 & 15] + I[i >> 12 & 15] + I[i >> 8 & 15] + I[i >> 4 & 15] + I[i & 15] + I[o >> 28 & 15] + I[o >> 24 & 15] + I[o >> 20 & 15] + I[o >> 16 & 15] + I[o >> 12 & 15] + I[o >> 8 & 15] + I[o >> 4 & 15] + I[o & 15] + I[a >> 28 & 15] + I[a >> 24 & 15] + I[a >> 20 & 15] + I[a >> 16 & 15] + I[a >> 12 & 15] + I[a >> 8 & 15] + I[a >> 4 & 15] + I[a & 15] + I[s >> 28 & 15] + I[s >> 24 & 15] + I[s >> 20 & 15] + I[s >> 16 & 15] + I[s >> 12 & 15] + I[s >> 8 & 15] + I[s >> 4 & 15] + I[s & 15];
    return P(this, Be) || (c += I[u >> 28 & 15] + I[u >> 24 & 15] + I[u >> 20 & 15] + I[u >> 16 & 15] + I[u >> 12 & 15] + I[u >> 8 & 15] + I[u >> 4 & 15] + I[u & 15]), c;
  }
  toString() {
    return this.hex();
  }
  digest() {
    this.finalize();
    const e = P(this, se), n = P(this, ae), r = P(this, ue), i = P(this, ce), o = P(this, le), a = P(this, fe), s = P(this, de), u = P(this, he), c = [
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      n >> 24 & 255,
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255,
      r >> 24 & 255,
      r >> 16 & 255,
      r >> 8 & 255,
      r & 255,
      i >> 24 & 255,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      o >> 24 & 255,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      a >> 24 & 255,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      s >> 24 & 255,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255
    ];
    return P(this, Be) || c.push(u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, u & 255), c;
  }
  array() {
    return this.digest();
  }
  arrayBuffer() {
    this.finalize();
    const e = new ArrayBuffer(P(this, Be) ? 28 : 32), n = new DataView(e);
    return n.setUint32(0, P(this, se)), n.setUint32(4, P(this, ae)), n.setUint32(8, P(this, ue)), n.setUint32(12, P(this, ce)), n.setUint32(16, P(this, le)), n.setUint32(20, P(this, fe)), n.setUint32(24, P(this, de)), P(this, Be) || n.setUint32(28, P(this, he)), e;
  }
}
Ce = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap();
function kc(t) {
  const e = new Sc();
  return e.update(t), parseInt(e.hex().substring(0, 8), 16);
}
const Rc = function(t) {
  var e = "#";
  return t.forEach(function(n) {
    n < 16 && (e += 0), e += n.toString(16);
  }), e;
}, jc = function(t, e, n) {
  t /= 360;
  var r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r;
  return [
    t + 1 / 3,
    t,
    t - 1 / 3
  ].map(function(o) {
    return o < 0 && o++, o > 1 && o--, o < 1 / 6 ? o = i + (r - i) * 6 * o : o < 0.5 ? o = r : o < 2 / 3 ? o = i + (r - i) * 6 * (2 / 3 - o) : o = i, Math.round(o * 255);
  });
};
class Hc {
  constructor(e = {}) {
    const [n, r] = [
      e.lightness,
      e.saturation
    ].map(function(i) {
      return i = i !== void 0 ? i : [
        0.35,
        0.5,
        0.65
      ], Array.isArray(i) ? i.concat() : [
        i
      ];
    });
    this.L = n, this.S = r, typeof e.hue == "number" && (e.hue = {
      min: e.hue,
      max: e.hue
    }), typeof e.hue == "object" && !Array.isArray(e.hue) && (e.hue = [
      e.hue
    ]), typeof e.hue > "u" && (e.hue = []), this.hueRanges = e.hue.map(function(i) {
      return {
        min: typeof i.min > "u" ? 0 : i.min,
        max: typeof i.max > "u" ? 360 : i.max
      };
    }), this.hash = kc, typeof e.hash == "function" && (this.hash = e.hash), e.hash === "bkdr" && (this.hash = Mc);
  }
  hsl(e) {
    var n, r, i, o = this.hash(e), a = 727;
    if (this.hueRanges.length) {
      const s = this.hueRanges[o % this.hueRanges.length];
      n = o / this.hueRanges.length % a * (s.max - s.min) / a + s.min;
    } else
      n = o % 359;
    return o = Math.ceil(o / 360), r = this.S[o % this.S.length], o = Math.ceil(o / this.S.length), i = this.L[o % this.L.length], [
      n,
      r,
      i
    ];
  }
  rgb(e) {
    var n = this.hsl(e);
    return jc.apply(this, n);
  }
  hex(e) {
    var n = this.rgb(e);
    return Rc(n);
  }
}
var Qc = function() {
  var t = Math.sign;
  return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
}, kn, Ni;
function Nc() {
  return Ni || (Ni = 1, kn = function(t) {
    return t = Number(t), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
  }), kn;
}
var Tc = Qc() ? Math.sign : Nc(), Yc = Tc, Oc = Math.abs, Dc = Math.floor, Gc = function(t) {
  return isNaN(t) ? 0 : (t = Number(t), t === 0 || !isFinite(t) ? t : Yc(t) * Dc(Oc(t)));
}, Fc = Gc, Lc = Math.max, Le = function(t) {
  return Lc(0, Fc(t));
}, qc = Le, Vs = function(t, e, n) {
  var r;
  return isNaN(t) ? (r = e, r >= 0 ? n && r ? r - 1 : r : 1) : t === !1 ? !1 : qc(t);
}, Jc = ke, Vc = at, Zc = Function.prototype.bind, Ti = Function.prototype.call, Xc = Object.keys, Wc = Object.prototype.propertyIsEnumerable, Uc = function(t, e) {
  return function(n, r) {
    var i, o = arguments[2], a = arguments[3];
    return n = Object(Vc(n)), Jc(r), i = Xc(n), a && i.sort(typeof a == "function" ? Zc.call(a, n) : void 0), typeof t != "function" && (t = i[t]), Ti.call(t, i, function(s, u) {
      return Wc.call(n, s) ? Ti.call(r, o, n[s], s, n, u) : e;
    });
  };
}, fn = Uc("forEach"), qe = {}, Zs = { exports: {} }, Kc = Ge, $c = { function: !0, object: !0 }, _c = function(t) {
  return Kc(t) && $c[typeof t] || !1;
};
(function(t) {
  var e = Ds, n = _c, r = Ge, i = Error.captureStackTrace;
  t.exports = function(o) {
    var a = new Error(o), s = arguments[1], u = arguments[2];
    return r(u) || n(s) && (u = s, s = null), r(u) && e(a, u), r(s) && (a.code = s), i && i(a, t.exports), a;
  };
})(Zs);
var el = Zs.exports, Or = { exports: {} }, Rn, Yi;
function Xs() {
  if (Yi)
    return Rn;
  Yi = 1;
  var t = at, e = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getOwnPropertySymbols;
  return Rn = function(o, a) {
    var s, u = Object(t(a));
    if (o = Object(t(o)), r(u).forEach(function(c) {
      try {
        e(o, c, n(a, c));
      } catch (l) {
        s = l;
      }
    }), typeof i == "function" && i(u).forEach(function(c) {
      try {
        e(o, c, n(a, c));
      } catch (l) {
        s = l;
      }
    }), s !== void 0)
      throw s;
    return o;
  }, Rn;
}
var Oi = Le, Ws = function(t, e) {
  return e;
}, jn, Di, Gi, Fi;
try {
  Object.defineProperty(Ws, "length", {
    configurable: !0,
    writable: !1,
    enumerable: !1,
    value: 1
  });
} catch {
}
Ws.length === 1 ? (jn = { configurable: !0, writable: !1, enumerable: !1 }, Di = Object.defineProperty, Or.exports = function(t, e) {
  return e = Oi(e), t.length === e ? t : (jn.value = e, Di(t, "length", jn));
}) : (Fi = Xs(), Gi = function() {
  var t = [];
  return function(e) {
    var n, r = 0;
    if (t[e])
      return t[e];
    for (n = []; e--; )
      n.push("a" + (++r).toString(36));
    return new Function(
      "fn",
      "return function (" + n.join(", ") + ") { return fn.apply(this, arguments); };"
    );
  };
}(), Or.exports = function(t, e) {
  var n;
  if (e = Oi(e), t.length === e)
    return t;
  n = Gi(e)(t);
  try {
    Fi(n, t);
  } catch {
  }
  return n;
});
var Us = Or.exports, Hn, Li;
function tl() {
  return Li || (Li = 1, Hn = function() {
    var t = Array.from, e, n;
    return typeof t != "function" ? !1 : (e = ["raz", "dwa"], n = t(e), !!(n && n !== e && n[1] === "dwa"));
  }), Hn;
}
var Qn, qi;
function nl() {
  return qi || (qi = 1, Qn = function() {
    return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
  }), Qn;
}
var Nn, Ji;
function rl() {
  if (Ji)
    return Nn;
  Ji = 1;
  var t = function() {
    if (typeof self == "object" && self)
      return self;
    if (typeof window == "object" && window)
      return window;
    throw new Error("Unable to resolve global `this`");
  };
  return Nn = function() {
    if (this)
      return this;
    try {
      Object.defineProperty(Object.prototype, "__global__", {
        get: function() {
          return this;
        },
        configurable: !0
      });
    } catch {
      return t();
    }
    try {
      return __global__ || t();
    } finally {
      delete Object.prototype.__global__;
    }
  }(), Nn;
}
var Tn, Vi;
function dn() {
  return Vi || (Vi = 1, Tn = nl()() ? globalThis : rl()), Tn;
}
var Yn, Zi;
function il() {
  if (Zi)
    return Yn;
  Zi = 1;
  var t = dn(), e = { object: !0, symbol: !0 };
  return Yn = function() {
    var n = t.Symbol, r;
    if (typeof n != "function")
      return !1;
    r = n("test symbol");
    try {
      String(r);
    } catch {
      return !1;
    }
    return !(!e[typeof n.iterator] || !e[typeof n.toPrimitive] || !e[typeof n.toStringTag]);
  }, Yn;
}
var On, Xi;
function ol() {
  return Xi || (Xi = 1, On = function(t) {
    return t ? typeof t == "symbol" ? !0 : !t.constructor || t.constructor.name !== "Symbol" ? !1 : t[t.constructor.toStringTag] === "Symbol" : !1;
  }), On;
}
var Dn, Wi;
function Ks() {
  if (Wi)
    return Dn;
  Wi = 1;
  var t = ol();
  return Dn = function(e) {
    if (!t(e))
      throw new TypeError(e + " is not a symbol");
    return e;
  }, Dn;
}
var Gn, Ui;
function sl() {
  if (Ui)
    return Gn;
  Ui = 1;
  var t = Fe, e = Object.create, n = Object.defineProperty, r = Object.prototype, i = e(null);
  return Gn = function(o) {
    for (var a = 0, s, u; i[o + (a || "")]; )
      ++a;
    return o += a || "", i[o] = !0, s = "@@" + o, n(
      r,
      s,
      t.gs(null, function(c) {
        u || (u = !0, n(this, s, t(c)), u = !1);
      })
    ), s;
  }, Gn;
}
var Fn, Ki;
function al() {
  if (Ki)
    return Fn;
  Ki = 1;
  var t = Fe, e = dn().Symbol;
  return Fn = function(n) {
    return Object.defineProperties(n, {
      // To ensure proper interoperability with other native functions (e.g. Array.from)
      // fallback to eventual native implementation of given symbol
      hasInstance: t(
        "",
        e && e.hasInstance || n("hasInstance")
      ),
      isConcatSpreadable: t(
        "",
        e && e.isConcatSpreadable || n("isConcatSpreadable")
      ),
      iterator: t("", e && e.iterator || n("iterator")),
      match: t("", e && e.match || n("match")),
      replace: t("", e && e.replace || n("replace")),
      search: t("", e && e.search || n("search")),
      species: t("", e && e.species || n("species")),
      split: t("", e && e.split || n("split")),
      toPrimitive: t(
        "",
        e && e.toPrimitive || n("toPrimitive")
      ),
      toStringTag: t(
        "",
        e && e.toStringTag || n("toStringTag")
      ),
      unscopables: t(
        "",
        e && e.unscopables || n("unscopables")
      )
    });
  }, Fn;
}
var Ln, $i;
function ul() {
  if ($i)
    return Ln;
  $i = 1;
  var t = Fe, e = Ks(), n = /* @__PURE__ */ Object.create(null);
  return Ln = function(r) {
    return Object.defineProperties(r, {
      for: t(function(i) {
        return n[i] ? n[i] : n[i] = r(String(i));
      }),
      keyFor: t(function(i) {
        var o;
        e(i);
        for (o in n)
          if (n[o] === i)
            return o;
      })
    });
  }, Ln;
}
var qn, _i;
function cl() {
  if (_i)
    return qn;
  _i = 1;
  var t = Fe, e = Ks(), n = dn().Symbol, r = sl(), i = al(), o = ul(), a = Object.create, s = Object.defineProperties, u = Object.defineProperty, c, l, f;
  if (typeof n == "function")
    try {
      String(n()), f = !0;
    } catch {
    }
  else
    n = null;
  return l = function(d) {
    if (this instanceof l)
      throw new TypeError("Symbol is not a constructor");
    return c(d);
  }, qn = c = function g(d) {
    var y;
    if (this instanceof g)
      throw new TypeError("Symbol is not a constructor");
    return f ? n(d) : (y = a(l.prototype), d = d === void 0 ? "" : String(d), s(y, {
      __description__: t("", d),
      __name__: t("", r(d))
    }));
  }, i(c), o(c), s(l.prototype, {
    constructor: t(c),
    toString: t("", function() {
      return this.__name__;
    })
  }), s(c.prototype, {
    toString: t(function() {
      return "Symbol (" + e(this).__description__ + ")";
    }),
    valueOf: t(function() {
      return e(this);
    })
  }), u(
    c.prototype,
    c.toPrimitive,
    t("", function() {
      var g = e(this);
      return typeof g == "symbol" ? g : g.toString();
    })
  ), u(c.prototype, c.toStringTag, t("c", "Symbol")), u(
    l.prototype,
    c.toStringTag,
    t("c", c.prototype[c.toStringTag])
  ), u(
    l.prototype,
    c.toPrimitive,
    t("c", c.prototype[c.toPrimitive])
  ), qn;
}
var Jn, eo;
function ll() {
  return eo || (eo = 1, Jn = il()() ? dn().Symbol : cl()), Jn;
}
var Vn, to;
function fl() {
  if (to)
    return Vn;
  to = 1;
  var t = Object.prototype.toString, e = t.call(function() {
    return arguments;
  }());
  return Vn = function(n) {
    return t.call(n) === e;
  }, Vn;
}
var Zn, no;
function dl() {
  if (no)
    return Zn;
  no = 1;
  var t = Object.prototype.toString, e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
  return Zn = function(n) {
    return typeof n == "function" && e(t.call(n));
  }, Zn;
}
var Xn, ro;
function hl() {
  if (ro)
    return Xn;
  ro = 1;
  var t = Object.prototype.toString, e = t.call("");
  return Xn = function(n) {
    return typeof n == "string" || n && typeof n == "object" && (n instanceof String || t.call(n) === e) || !1;
  }, Xn;
}
var Wn, io;
function gl() {
  if (io)
    return Wn;
  io = 1;
  var t = ll().iterator, e = fl(), n = dl(), r = Le, i = ke, o = at, a = Ge, s = hl(), u = Array.isArray, c = Function.prototype.call, l = { configurable: !0, enumerable: !0, writable: !0, value: null }, f = Object.defineProperty;
  return Wn = function(g) {
    var d = arguments[1], y = arguments[2], p, b, m, h, v, A, x, w, C, S;
    if (g = Object(o(g)), a(d) && i(d), !this || this === Array || !n(this)) {
      if (!d) {
        if (e(g))
          return v = g.length, v !== 1 ? Array.apply(null, g) : (h = new Array(1), h[0] = g[0], h);
        if (u(g)) {
          for (h = new Array(v = g.length), b = 0; b < v; ++b)
            h[b] = g[b];
          return h;
        }
      }
      h = [];
    } else
      p = this;
    if (!u(g)) {
      if ((C = g[t]) !== void 0) {
        for (x = i(C).call(g), p && (h = new p()), w = x.next(), b = 0; !w.done; )
          S = d ? c.call(d, y, w.value, b) : w.value, p ? (l.value = S, f(h, b, l)) : h[b] = S, w = x.next(), ++b;
        v = b;
      } else if (s(g)) {
        for (v = g.length, p && (h = new p()), b = 0, m = 0; b < v; ++b)
          S = g[b], b + 1 < v && (A = S.charCodeAt(0), A >= 55296 && A <= 56319 && (S += g[++b])), S = d ? c.call(d, y, S, m) : S, p ? (l.value = S, f(h, m, l)) : h[m] = S, ++m;
        v = m;
      }
    }
    if (v === void 0)
      for (v = r(g.length), p && (h = new p(v)), b = 0; b < v; ++b)
        S = d ? c.call(d, y, g[b], b) : g[b], p ? (l.value = S, f(h, b, l)) : h[b] = S;
    return p && (l.value = null, h.length = v), h;
  }, Wn;
}
var Un, oo;
function ti() {
  return oo || (oo = 1, Un = tl()() ? Array.from : gl()), Un;
}
var vl = ti(), pl = Array.isArray, ml = function(t) {
  return pl(t) ? t : vl(t);
}, Al = ml, bl = Ge, yl = ke, wl = Array.prototype.slice, $s;
$s = function(t) {
  return this.map(function(e, n) {
    return e ? e(t[n]) : t[n];
  }).concat(
    wl.call(t, this.length)
  );
};
var xl = function(t) {
  return t = Al(t), t.forEach(function(e) {
    bl(e) && yl(e);
  }), $s.bind(t);
}, Qt = ke, Pl = function(t) {
  var e;
  return typeof t == "function" ? { set: t, get: t } : (e = { get: Qt(t.get) }, t.set !== void 0 ? (e.set = Qt(t.set), t.delete && (e.delete = Qt(t.delete)), t.clear && (e.clear = Qt(t.clear)), e) : (e.set = e.get, e));
}, Nt = el, Tt = Us, ct = Fe, _s = qs.methods, Il = xl, El = Pl, Kn = Function.prototype.apply, $n = Function.prototype.call, so = Object.create, Cl = Object.defineProperties, Bl = _s.on, Ml = _s.emit, zl = function(t, e, n) {
  var r = so(null), i, o, a, s, u, c, l, f, g, d, y, p, b, m, h;
  return e !== !1 ? o = e : isNaN(t.length) ? o = 1 : o = t.length, n.normalizer && (d = El(n.normalizer), a = d.get, s = d.set, u = d.delete, c = d.clear), n.resolvers != null && (h = Il(n.resolvers)), a ? m = Tt(function(v) {
    var A, x, w = arguments;
    if (h && (w = h(w)), A = a(w), A !== null && hasOwnProperty.call(r, A))
      return y && i.emit("get", A, w, this), r[A];
    if (w.length === 1 ? x = $n.call(t, this, w[0]) : x = Kn.call(t, this, w), A === null) {
      if (A = a(w), A !== null)
        throw Nt("Circular invocation", "CIRCULAR_INVOCATION");
      A = s(w);
    } else if (hasOwnProperty.call(r, A))
      throw Nt("Circular invocation", "CIRCULAR_INVOCATION");
    return r[A] = x, p && i.emit("set", A, null, x), x;
  }, o) : e === 0 ? m = function() {
    var v;
    if (hasOwnProperty.call(r, "data"))
      return y && i.emit("get", "data", arguments, this), r.data;
    if (arguments.length ? v = Kn.call(t, this, arguments) : v = $n.call(t, this), hasOwnProperty.call(r, "data"))
      throw Nt("Circular invocation", "CIRCULAR_INVOCATION");
    return r.data = v, p && i.emit("set", "data", null, v), v;
  } : m = function(v) {
    var A, x = arguments, w;
    if (h && (x = h(arguments)), w = String(x[0]), hasOwnProperty.call(r, w))
      return y && i.emit("get", w, x, this), r[w];
    if (x.length === 1 ? A = $n.call(t, this, x[0]) : A = Kn.call(t, this, x), hasOwnProperty.call(r, w))
      throw Nt("Circular invocation", "CIRCULAR_INVOCATION");
    return r[w] = A, p && i.emit("set", w, null, A), A;
  }, i = {
    original: t,
    memoized: m,
    profileName: n.profileName,
    get: function(v) {
      return h && (v = h(v)), a ? a(v) : String(v[0]);
    },
    has: function(v) {
      return hasOwnProperty.call(r, v);
    },
    delete: function(v) {
      var A;
      hasOwnProperty.call(r, v) && (u && u(v), A = r[v], delete r[v], b && i.emit("delete", v, A));
    },
    clear: function() {
      var v = r;
      c && c(), r = so(null), i.emit("clear", v);
    },
    on: function(v, A) {
      return v === "get" ? y = !0 : v === "set" ? p = !0 : v === "delete" && (b = !0), Bl.call(this, v, A);
    },
    emit: Ml,
    updateEnv: function() {
      t = i.original;
    }
  }, a ? l = Tt(function(v) {
    var A, x = arguments;
    h && (x = h(x)), A = a(x), A !== null && i.delete(A);
  }, o) : e === 0 ? l = function() {
    return i.delete("data");
  } : l = function(v) {
    return h && (v = h(arguments)[0]), i.delete(v);
  }, f = Tt(function() {
    var v, A = arguments;
    return e === 0 ? r.data : (h && (A = h(A)), a ? v = a(A) : v = String(A[0]), r[v]);
  }), g = Tt(function() {
    var v, A = arguments;
    return e === 0 ? i.has("data") : (h && (A = h(A)), a ? v = a(A) : v = String(A[0]), v === null ? !1 : i.has(v));
  }), Cl(m, {
    __memoized__: ct(!0),
    delete: ct(l),
    clear: ct(i.clear),
    _get: ct(f),
    _has: ct(g)
  }), i;
}, Sl = ke, kl = fn, ao = qe, Rl = zl, jl = Vs, Hl = function t(e) {
  var n, r, i;
  if (Sl(e), n = Object(arguments[1]), n.async && n.promise)
    throw new Error("Options 'async' and 'promise' cannot be used together");
  return hasOwnProperty.call(e, "__memoized__") && !n.force ? e : (r = jl(n.length, e.length, n.async && ao.async), i = Rl(e, r, n), kl(ao, function(o, a) {
    n[a] && o(n[a], i, n);
  }), t.__profiler__ && t.__profiler__(i), i.updateEnv(), i.memoized);
}, _n, uo;
function Ql() {
  return uo || (uo = 1, _n = function(t) {
    var e, n, r = t.length;
    if (!r)
      return "";
    for (e = String(t[n = 0]); --r; )
      e += "" + t[++n];
    return e;
  }), _n;
}
var er, co;
function Nl() {
  return co || (co = 1, er = function(t) {
    return t ? function(e) {
      for (var n = String(e[0]), r = 0, i = t; --i; )
        n += "" + e[++r];
      return n;
    } : function() {
      return "";
    };
  }), er;
}
var tr, lo;
function Tl() {
  return lo || (lo = 1, tr = function() {
    var t = Number.isNaN;
    return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
  }), tr;
}
var nr, fo;
function Yl() {
  return fo || (fo = 1, nr = function(t) {
    return t !== t;
  }), nr;
}
var rr, ho;
function Ol() {
  return ho || (ho = 1, rr = Tl()() ? Number.isNaN : Yl()), rr;
}
var ir, go;
function ni() {
  if (go)
    return ir;
  go = 1;
  var t = Ol(), e = Le, n = at, r = Array.prototype.indexOf, i = Object.prototype.hasOwnProperty, o = Math.abs, a = Math.floor;
  return ir = function(s) {
    var u, c, l, f;
    if (!t(s))
      return r.apply(this, arguments);
    for (c = e(n(this).length), l = arguments[1], isNaN(l) ? l = 0 : l >= 0 ? l = a(l) : l = e(this.length) - a(o(l)), u = l; u < c; ++u)
      if (i.call(this, u) && (f = this[u], t(f)))
        return u;
    return -1;
  }, ir;
}
var or, vo;
function Dl() {
  if (vo)
    return or;
  vo = 1;
  var t = ni(), e = Object.create;
  return or = function() {
    var n = 0, r = [], i = e(null);
    return {
      get: function(o) {
        var a = 0, s = r, u, c = o.length;
        if (c === 0)
          return s[c] || null;
        if (s = s[c]) {
          for (; a < c - 1; ) {
            if (u = t.call(s[0], o[a]), u === -1)
              return null;
            s = s[1][u], ++a;
          }
          return u = t.call(s[0], o[a]), u === -1 ? null : s[1][u] || null;
        }
        return null;
      },
      set: function(o) {
        var a = 0, s = r, u, c = o.length;
        if (c === 0)
          s[c] = ++n;
        else {
          for (s[c] || (s[c] = [[], []]), s = s[c]; a < c - 1; )
            u = t.call(s[0], o[a]), u === -1 && (u = s[0].push(o[a]) - 1, s[1].push([[], []])), s = s[1][u], ++a;
          u = t.call(s[0], o[a]), u === -1 && (u = s[0].push(o[a]) - 1), s[1][u] = ++n;
        }
        return i[n] = o, n;
      },
      delete: function(o) {
        var a = 0, s = r, u, c = i[o], l = c.length, f = [];
        if (l === 0)
          delete s[l];
        else if (s = s[l]) {
          for (; a < l - 1; ) {
            if (u = t.call(s[0], c[a]), u === -1)
              return;
            f.push(s, u), s = s[1][u], ++a;
          }
          if (u = t.call(s[0], c[a]), u === -1)
            return;
          for (o = s[1][u], s[0].splice(u, 1), s[1].splice(u, 1); !s[0].length && f.length; )
            u = f.pop(), s = f.pop(), s[0].splice(u, 1), s[1].splice(u, 1);
        }
        delete i[o];
      },
      clear: function() {
        r = [], i = e(null);
      }
    };
  }, or;
}
var sr, po;
function Gl() {
  if (po)
    return sr;
  po = 1;
  var t = ni();
  return sr = function() {
    var e = 0, n = [], r = [];
    return {
      get: function(i) {
        var o = t.call(n, i[0]);
        return o === -1 ? null : r[o];
      },
      set: function(i) {
        return n.push(i[0]), r.push(++e), e;
      },
      delete: function(i) {
        var o = t.call(r, i);
        o !== -1 && (n.splice(o, 1), r.splice(o, 1));
      },
      clear: function() {
        n = [], r = [];
      }
    };
  }, sr;
}
var ar, mo;
function Fl() {
  if (mo)
    return ar;
  mo = 1;
  var t = ni(), e = Object.create;
  return ar = function(n) {
    var r = 0, i = [[], []], o = e(null);
    return {
      get: function(a) {
        for (var s = 0, u = i, c; s < n - 1; ) {
          if (c = t.call(u[0], a[s]), c === -1)
            return null;
          u = u[1][c], ++s;
        }
        return c = t.call(u[0], a[s]), c === -1 ? null : u[1][c] || null;
      },
      set: function(a) {
        for (var s = 0, u = i, c; s < n - 1; )
          c = t.call(u[0], a[s]), c === -1 && (c = u[0].push(a[s]) - 1, u[1].push([[], []])), u = u[1][c], ++s;
        return c = t.call(u[0], a[s]), c === -1 && (c = u[0].push(a[s]) - 1), u[1][c] = ++r, o[r] = a, r;
      },
      delete: function(a) {
        for (var s = 0, u = i, c, l = [], f = o[a]; s < n - 1; ) {
          if (c = t.call(u[0], f[s]), c === -1)
            return;
          l.push(u, c), u = u[1][c], ++s;
        }
        if (c = t.call(u[0], f[s]), c !== -1) {
          for (a = u[1][c], u[0].splice(c, 1), u[1].splice(c, 1); !u[0].length && l.length; )
            c = l.pop(), u = l.pop(), u[0].splice(c, 1), u[1].splice(c, 1);
          delete o[a];
        }
      },
      clear: function() {
        i = [[], []], o = e(null);
      }
    };
  }, ar;
}
var Ao = {}, ur, bo;
function ea() {
  if (bo)
    return ur;
  bo = 1;
  var t = ke, e = fn, n = Function.prototype.call;
  return ur = function(r, i) {
    var o = {}, a = arguments[2];
    return t(i), e(r, function(s, u, c, l) {
      o[u] = n.call(i, a, s, u, c, l);
    }), o;
  }, ur;
}
var cr, yo;
function ri() {
  if (yo)
    return cr;
  yo = 1;
  var t = function(n) {
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    return n;
  }, e = function(n) {
    var r = document.createTextNode(""), i, o, a = 0;
    return new n(function() {
      var s;
      if (i)
        o && (i = o.concat(i));
      else {
        if (!o)
          return;
        i = o;
      }
      if (o = i, i = null, typeof o == "function") {
        s = o, o = null, s();
        return;
      }
      for (r.data = a = ++a % 2; o; )
        s = o.shift(), o.length || (o = null), s();
    }).observe(r, { characterData: !0 }), function(s) {
      if (t(s), i) {
        typeof i == "function" ? i = [i, s] : i.push(s);
        return;
      }
      i = s, r.data = a = ++a % 2;
    };
  };
  return cr = function() {
    if (typeof process == "object" && process && typeof process.nextTick == "function")
      return process.nextTick;
    if (typeof queueMicrotask == "function")
      return function(n) {
        queueMicrotask(t(n));
      };
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function")
        return e(MutationObserver);
      if (typeof WebKitMutationObserver == "function")
        return e(WebKitMutationObserver);
    }
    return typeof setImmediate == "function" ? function(n) {
      setImmediate(t(n));
    } : typeof setTimeout == "function" || typeof setTimeout == "object" ? function(n) {
      setTimeout(t(n), 0);
    } : null;
  }(), cr;
}
var wo;
function Ll() {
  if (wo)
    return Ao;
  wo = 1;
  var t = ti(), e = ea(), n = Xs(), r = Us, i = ri(), o = Array.prototype.slice, a = Function.prototype.apply, s = Object.create;
  return qe.async = function(u, c) {
    var l = s(null), f = s(null), g = c.memoized, d = c.original, y, p, b;
    c.memoized = r(function(m) {
      var h = arguments, v = h[h.length - 1];
      return typeof v == "function" && (y = v, h = o.call(h, 0, -1)), g.apply(p = this, b = h);
    }, g);
    try {
      n(c.memoized, g);
    } catch {
    }
    c.on("get", function(m) {
      var h, v, A;
      if (y) {
        if (l[m]) {
          typeof l[m] == "function" ? l[m] = [l[m], y] : l[m].push(y), y = null;
          return;
        }
        h = y, v = p, A = b, y = p = b = null, i(function() {
          var x;
          hasOwnProperty.call(f, m) ? (x = f[m], c.emit("getasync", m, A, v), a.call(h, x.context, x.args)) : (y = h, p = v, b = A, g.apply(v, A));
        });
      }
    }), c.original = function() {
      var m, h, v, A;
      return y ? (m = t(arguments), h = function x(w) {
        var C, S, G = x.id;
        if (G == null) {
          i(a.bind(x, this, arguments));
          return;
        }
        if (delete x.id, C = l[G], delete l[G], !!C)
          return S = t(arguments), c.has(G) && (w ? c.delete(G) : (f[G] = { context: this, args: S }, c.emit("setasync", G, typeof C == "function" ? 1 : C.length))), typeof C == "function" ? A = a.call(C, this, S) : C.forEach(function(te) {
            A = a.call(te, this, S);
          }, this), A;
      }, v = y, y = p = b = null, m.push(h), A = a.call(d, this, m), h.cb = v, y = h, A) : a.call(d, this, arguments);
    }, c.on("set", function(m) {
      if (!y) {
        c.delete(m);
        return;
      }
      l[m] ? typeof l[m] == "function" ? l[m] = [l[m], y.cb] : l[m].push(y.cb) : l[m] = y.cb, delete y.cb, y.id = m, y = null;
    }), c.on("delete", function(m) {
      var h;
      hasOwnProperty.call(l, m) || f[m] && (h = f[m], delete f[m], c.emit("deleteasync", m, o.call(h.args, 1)));
    }), c.on("clear", function() {
      var m = f;
      f = s(null), c.emit(
        "clearasync",
        e(m, function(h) {
          return o.call(h.args, 1);
        })
      );
    });
  }, Ao;
}
var xo = {}, lr, Po;
function ql() {
  if (Po)
    return lr;
  Po = 1;
  var t = Array.prototype.forEach, e = Object.create;
  return lr = function(n) {
    var r = e(null);
    return t.call(arguments, function(i) {
      r[i] = !0;
    }), r;
  }, lr;
}
var fr, Io;
function ta() {
  return Io || (Io = 1, fr = function(t) {
    return typeof t == "function";
  }), fr;
}
var dr, Eo;
function Jl() {
  if (Eo)
    return dr;
  Eo = 1;
  var t = ta();
  return dr = function(e) {
    try {
      return e && t(e.toString) ? e.toString() : String(e);
    } catch {
      throw new TypeError("Passed argument cannot be stringifed");
    }
  }, dr;
}
var hr, Co;
function Vl() {
  if (Co)
    return hr;
  Co = 1;
  var t = at, e = Jl();
  return hr = function(n) {
    return e(t(n));
  }, hr;
}
var gr, Bo;
function Zl() {
  if (Bo)
    return gr;
  Bo = 1;
  var t = ta();
  return gr = function(e) {
    try {
      return e && t(e.toString) ? e.toString() : String(e);
    } catch {
      return "<Non-coercible to string value>";
    }
  }, gr;
}
var vr, Mo;
function Xl() {
  if (Mo)
    return vr;
  Mo = 1;
  var t = Zl(), e = /[\n\r\u2028\u2029]/g;
  return vr = function(n) {
    var r = t(n);
    return r.length > 100 && (r = r.slice(0, 99) + "…"), r = r.replace(e, function(i) {
      return JSON.stringify(i).slice(1, -1);
    }), r;
  }, vr;
}
var Yt = { exports: {} }, zo;
function na() {
  if (zo)
    return Yt.exports;
  zo = 1, Yt.exports = t, Yt.exports.default = t;
  function t(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
  }
  return Yt.exports;
}
var So;
function Wl() {
  if (So)
    return xo;
  So = 1;
  var t = ea(), e = ql(), n = Vl(), r = Xl(), i = na(), o = ri(), a = Object.create, s = e("then", "then:finally", "done", "done:finally");
  return qe.promise = function(u, c) {
    var l = a(null), f = a(null), g = a(null);
    if (u === !0)
      u = null;
    else if (u = n(u), !s[u])
      throw new TypeError("'" + r(u) + "' is not valid promise mode");
    c.on("set", function(d, y, p) {
      var b = !1;
      if (!i(p)) {
        f[d] = p, c.emit("setasync", d, 1);
        return;
      }
      l[d] = 1, g[d] = p;
      var m = function(x) {
        var w = l[d];
        if (b)
          throw new Error(
            `Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`
          );
        w && (delete l[d], f[d] = x, c.emit("setasync", d, w));
      }, h = function() {
        b = !0, l[d] && (delete l[d], delete g[d], c.delete(d));
      }, v = u;
      if (v || (v = "then"), v === "then") {
        var A = function() {
          o(h);
        };
        p = p.then(function(x) {
          o(m.bind(this, x));
        }, A), typeof p.finally == "function" && p.finally(A);
      } else if (v === "done") {
        if (typeof p.done != "function")
          throw new Error(
            "Memoizee error: Retrieved promise does not implement 'done' in 'done' mode"
          );
        p.done(m, h);
      } else if (v === "done:finally") {
        if (typeof p.done != "function")
          throw new Error(
            "Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode"
          );
        if (typeof p.finally != "function")
          throw new Error(
            "Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode"
          );
        p.done(m), p.finally(h);
      }
    }), c.on("get", function(d, y, p) {
      var b;
      if (l[d]) {
        ++l[d];
        return;
      }
      b = g[d];
      var m = function() {
        c.emit("getasync", d, y, p);
      };
      i(b) ? typeof b.done == "function" ? b.done(m) : b.then(function() {
        o(m);
      }) : m();
    }), c.on("delete", function(d) {
      if (delete g[d], l[d]) {
        delete l[d];
        return;
      }
      if (hasOwnProperty.call(f, d)) {
        var y = f[d];
        delete f[d], c.emit("deleteasync", d, [y]);
      }
    }), c.on("clear", function() {
      var d = f;
      f = a(null), l = a(null), g = a(null), c.emit("clearasync", t(d, function(y) {
        return [y];
      }));
    });
  }, xo;
}
var ko = {}, Ro;
function Ul() {
  if (Ro)
    return ko;
  Ro = 1;
  var t = ke, e = fn, n = qe, r = Function.prototype.apply;
  return n.dispose = function(i, o, a) {
    var s;
    if (t(i), a.async && n.async || a.promise && n.promise) {
      o.on(
        "deleteasync",
        s = function(u, c) {
          r.call(i, null, c);
        }
      ), o.on("clearasync", function(u) {
        e(u, function(c, l) {
          s(l, c);
        });
      });
      return;
    }
    o.on("delete", s = function(u, c) {
      i(c);
    }), o.on("clear", function(u) {
      e(u, function(c, l) {
        s(l, c);
      });
    });
  }, ko;
}
var jo = {}, pr, Ho;
function Kl() {
  return Ho || (Ho = 1, pr = 2147483647), pr;
}
var mr, Qo;
function $l() {
  if (Qo)
    return mr;
  Qo = 1;
  var t = Le, e = Kl();
  return mr = function(n) {
    if (n = t(n), n > e)
      throw new TypeError(n + " exceeds maximum possible timeout");
    return n;
  }, mr;
}
var No;
function _l() {
  if (No)
    return jo;
  No = 1;
  var t = ti(), e = fn, n = ri(), r = na(), i = $l(), o = qe, a = Function.prototype, s = Math.max, u = Math.min, c = Object.create;
  return o.maxAge = function(l, f, g) {
    var d, y, p, b;
    l = i(l), l && (d = c(null), y = g.async && o.async || g.promise && o.promise ? "async" : "", f.on("set" + y, function(m) {
      d[m] = setTimeout(function() {
        f.delete(m);
      }, l), typeof d[m].unref == "function" && d[m].unref(), b && (b[m] && b[m] !== "nextTick" && clearTimeout(b[m]), b[m] = setTimeout(function() {
        delete b[m];
      }, p), typeof b[m].unref == "function" && b[m].unref());
    }), f.on("delete" + y, function(m) {
      clearTimeout(d[m]), delete d[m], b && (b[m] !== "nextTick" && clearTimeout(b[m]), delete b[m]);
    }), g.preFetch && (g.preFetch === !0 || isNaN(g.preFetch) ? p = 0.333 : p = s(u(Number(g.preFetch), 1), 0), p && (b = {}, p = (1 - p) * l, f.on("get" + y, function(m, h, v) {
      b[m] || (b[m] = "nextTick", n(function() {
        var A;
        b[m] === "nextTick" && (delete b[m], f.delete(m), g.async && (h = t(h), h.push(a)), A = f.memoized.apply(v, h), g.promise && r(A) && (typeof A.done == "function" ? A.done(a, a) : A.then(a, a)));
      }));
    }))), f.on("clear" + y, function() {
      e(d, function(m) {
        clearTimeout(m);
      }), d = {}, b && (e(b, function(m) {
        m !== "nextTick" && clearTimeout(m);
      }), b = {});
    }));
  }, jo;
}
var To = {}, Ar, Yo;
function ef() {
  if (Yo)
    return Ar;
  Yo = 1;
  var t = Le, e = Object.create, n = Object.prototype.hasOwnProperty;
  return Ar = function(r) {
    var i = 0, o = 1, a = e(null), s = e(null), u = 0, c;
    return r = t(r), {
      hit: function(l) {
        var f = s[l], g = ++u;
        if (a[g] = l, s[l] = g, !f)
          return ++i, i <= r ? void 0 : (l = a[o], c(l), l);
        if (delete a[f], o === f)
          for (; !n.call(a, ++o); )
            ;
      },
      delete: c = function(l) {
        var f = s[l];
        if (f && (delete a[f], delete s[l], --i, o === f)) {
          if (!i) {
            u = 0, o = 1;
            return;
          }
          for (; !n.call(a, ++o); )
            ;
        }
      },
      clear: function() {
        i = 0, o = 1, a = e(null), s = e(null), u = 0;
      }
    };
  }, Ar;
}
var Oo;
function tf() {
  if (Oo)
    return To;
  Oo = 1;
  var t = Le, e = ef(), n = qe;
  return n.max = function(r, i, o) {
    var a, s, u;
    r = t(r), r && (s = e(r), a = o.async && n.async || o.promise && n.promise ? "async" : "", i.on(
      "set" + a,
      u = function(c) {
        c = s.hit(c), c !== void 0 && i.delete(c);
      }
    ), i.on("get" + a, u), i.on("delete" + a, s.delete), i.on("clear" + a, s.clear));
  }, To;
}
var Do = {}, Go;
function nf() {
  if (Go)
    return Do;
  Go = 1;
  var t = Fe, e = qe, n = Object.create, r = Object.defineProperties;
  return e.refCounter = function(i, o, a) {
    var s, u;
    s = n(null), u = a.async && e.async || a.promise && e.promise ? "async" : "", o.on("set" + u, function(c, l) {
      s[c] = l || 1;
    }), o.on("get" + u, function(c) {
      ++s[c];
    }), o.on("delete" + u, function(c) {
      delete s[c];
    }), o.on("clear" + u, function() {
      s = {};
    }), r(o.memoized, {
      deleteRef: t(function() {
        var c = o.get(arguments);
        return c === null || !s[c] ? null : --s[c] ? !1 : (o.delete(c), !0);
      }),
      getRefCount: t(function() {
        var c = o.get(arguments);
        return c === null || !s[c] ? 0 : s[c];
      })
    });
  }, Do;
}
var rf = Gs, of = Vs, sf = Hl, af = function(t) {
  var e = rf(arguments[1]), n;
  return e.normalizer || (n = e.length = of(e.length, t.length, e.async), n !== 0 && (e.primitive ? n === !1 ? e.normalizer = Ql() : n > 1 && (e.normalizer = Nl()(n)) : n === !1 ? e.normalizer = Dl()() : n === 1 ? e.normalizer = Gl()() : e.normalizer = Fl()(n))), e.async && Ll(), e.promise && Wl(), e.dispose && Ul(), e.maxAge && _l(), e.max && tf(), e.refCounter && nf(), sf(t, e);
};
const hn = /* @__PURE__ */ $r(af), uf = "data:image/png;base64,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";
var Dr;
function Ot(t, e, n) {
  return Math.min(Math.max(t || 0, e), n);
}
function br(t) {
  return { r: Ot(t.r, 0, 255), g: Ot(t.g, 0, 255), b: Ot(t.b, 0, 255), a: Ot(t.a, 0, 1) };
}
function Gr(t) {
  return { r: 255 * t.r, g: 255 * t.g, b: 255 * t.b, a: t.a };
}
function Fr(t) {
  return { r: t.r / 255, g: t.g / 255, b: t.b / 255, a: t.a };
}
function Fo(t, e) {
  e === void 0 && (e = 0);
  var n = Math.pow(10, e);
  return { r: Math.round(t.r * n) / n, g: Math.round(t.g * n) / n, b: Math.round(t.b * n) / n, a: t.a };
}
function yr(t, e, n, r, i, o) {
  return (1 - e / n) * r + e / n * Math.round((1 - t) * i + t * o);
}
function cf(t, e, n, r, i) {
  i === void 0 && (i = { unitInput: !1, unitOutput: !1, roundOutput: !0 }), i.unitInput && (t = Gr(t), e = Gr(e)), t = br(t);
  var o = (e = br(e)).a + t.a - e.a * t.a, a = n(t, e, r), s = br({ r: yr(t.a, e.a, o, t.r, e.r, a.r), g: yr(t.a, e.a, o, t.g, e.g, a.g), b: yr(t.a, e.a, o, t.b, e.b, a.b), a: o });
  return i.unitOutput ? Fr(s) : i.roundOutput ? Fo(s) : Fo(s, 9);
}
function lf(t, e, n) {
  return Gr(n(Fr(t), Fr(e)));
}
function Lr(t) {
  return 0.3 * t.r + 0.59 * t.g + 0.11 * t.b;
}
function ff(t, e) {
  var n = e - Lr(t);
  return function(r) {
    var i = Lr(r), o = r.r, a = r.g, s = r.b, u = Math.min(o, a, s), c = Math.max(o, a, s);
    function l(g) {
      return i + (g - i) * i / (i - u);
    }
    function f(g) {
      return i + (g - i) * (1 - i) / (c - i);
    }
    return u < 0 && (o = l(o), a = l(a), s = l(s)), c > 1 && (o = f(o), a = f(a), s = f(s)), { r: o, g: a, b: s };
  }({ r: t.r + n, g: t.g + n, b: t.b + n });
}
function df(t) {
  return Math.max(t.r, t.g, t.b) - Math.min(t.r, t.g, t.b);
}
function hf(t, e) {
  var n = ["r", "g", "b"].sort(function(s, u) {
    return t[s] - t[u];
  }), r = n[0], i = n[1], o = n[2], a = { r: t.r, g: t.g, b: t.b };
  return a[o] > a[r] ? (a[i] = (a[i] - a[r]) * e / (a[o] - a[r]), a[o] = e) : a[i] = a[o] = 0, a[r] = 0, a;
}
function gf(t, e) {
  return ff(hf(e, df(t)), Lr(t));
}
Dr = function(t, e) {
  return cf(t, e, lf, gf, { unitInput: !0, unitOutput: !0 });
};
var vf = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, ye = function(t) {
  return typeof t == "string" ? t.length > 0 : typeof t == "number";
}, N = function(t, e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = Math.pow(10, e)), Math.round(n * t) / n + 0;
}, $ = function(t, e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = 1), t > n ? n : t > e ? t : e;
}, ra = function(t) {
  return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360;
}, Lo = function(t) {
  return { r: $(t.r, 0, 255), g: $(t.g, 0, 255), b: $(t.b, 0, 255), a: $(t.a) };
}, wr = function(t) {
  return { r: N(t.r), g: N(t.g), b: N(t.b), a: N(t.a, 3) };
}, pf = /^#([0-9a-f]{3,8})$/i, Dt = function(t) {
  var e = t.toString(16);
  return e.length < 2 ? "0" + e : e;
}, ia = function(t) {
  var e = t.r, n = t.g, r = t.b, i = t.a, o = Math.max(e, n, r), a = o - Math.min(e, n, r), s = a ? o === e ? (n - r) / a : o === n ? 2 + (r - e) / a : 4 + (e - n) / a : 0;
  return { h: 60 * (s < 0 ? s + 6 : s), s: o ? a / o * 100 : 0, v: o / 255 * 100, a: i };
}, oa = function(t) {
  var e = t.h, n = t.s, r = t.v, i = t.a;
  e = e / 360 * 6, n /= 100, r /= 100;
  var o = Math.floor(e), a = r * (1 - n), s = r * (1 - (e - o) * n), u = r * (1 - (1 - e + o) * n), c = o % 6;
  return { r: 255 * [r, s, a, a, u, r][c], g: 255 * [u, r, r, s, a, a][c], b: 255 * [a, a, u, r, r, s][c], a: i };
}, qo = function(t) {
  return { h: ra(t.h), s: $(t.s, 0, 100), l: $(t.l, 0, 100), a: $(t.a) };
}, Jo = function(t) {
  return { h: N(t.h), s: N(t.s), l: N(t.l), a: N(t.a, 3) };
}, Vo = function(t) {
  return oa((n = (e = t).s, { h: e.h, s: (n *= ((r = e.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * n / (r + n) * 100 : 0, v: r + n, a: e.a }));
  var e, n, r;
}, mt = function(t) {
  return { h: (e = ia(t)).h, s: (i = (200 - (n = e.s)) * (r = e.v) / 100) > 0 && i < 200 ? n * r / 100 / (i <= 100 ? i : 200 - i) * 100 : 0, l: i / 2, a: e.a };
  var e, n, r, i;
}, mf = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Af = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, bf = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, yf = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, qr = { string: [[function(t) {
  var e = pf.exec(t);
  return e ? (t = e[1]).length <= 4 ? { r: parseInt(t[0] + t[0], 16), g: parseInt(t[1] + t[1], 16), b: parseInt(t[2] + t[2], 16), a: t.length === 4 ? N(parseInt(t[3] + t[3], 16) / 255, 2) : 1 } : t.length === 6 || t.length === 8 ? { r: parseInt(t.substr(0, 2), 16), g: parseInt(t.substr(2, 2), 16), b: parseInt(t.substr(4, 2), 16), a: t.length === 8 ? N(parseInt(t.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(t) {
  var e = bf.exec(t) || yf.exec(t);
  return e ? e[2] !== e[4] || e[4] !== e[6] ? null : Lo({ r: Number(e[1]) / (e[2] ? 100 / 255 : 1), g: Number(e[3]) / (e[4] ? 100 / 255 : 1), b: Number(e[5]) / (e[6] ? 100 / 255 : 1), a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t) {
  var e = mf.exec(t) || Af.exec(t);
  if (!e)
    return null;
  var n, r, i = qo({ h: (n = e[1], r = e[2], r === void 0 && (r = "deg"), Number(n) * (vf[r] || 1)), s: Number(e[3]), l: Number(e[4]), a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1) });
  return Vo(i);
}, "hsl"]], object: [[function(t) {
  var e = t.r, n = t.g, r = t.b, i = t.a, o = i === void 0 ? 1 : i;
  return ye(e) && ye(n) && ye(r) ? Lo({ r: Number(e), g: Number(n), b: Number(r), a: Number(o) }) : null;
}, "rgb"], [function(t) {
  var e = t.h, n = t.s, r = t.l, i = t.a, o = i === void 0 ? 1 : i;
  if (!ye(e) || !ye(n) || !ye(r))
    return null;
  var a = qo({ h: Number(e), s: Number(n), l: Number(r), a: Number(o) });
  return Vo(a);
}, "hsl"], [function(t) {
  var e = t.h, n = t.s, r = t.v, i = t.a, o = i === void 0 ? 1 : i;
  if (!ye(e) || !ye(n) || !ye(r))
    return null;
  var a = function(s) {
    return { h: ra(s.h), s: $(s.s, 0, 100), v: $(s.v, 0, 100), a: $(s.a) };
  }({ h: Number(e), s: Number(n), v: Number(r), a: Number(o) });
  return oa(a);
}, "hsv"]] }, Zo = function(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n][0](t);
    if (r)
      return [r, e[n][1]];
  }
  return [null, void 0];
}, wf = function(t) {
  return typeof t == "string" ? Zo(t.trim(), qr.string) : typeof t == "object" && t !== null ? Zo(t, qr.object) : [null, void 0];
}, xr = function(t, e) {
  var n = mt(t);
  return { h: n.h, s: $(n.s + 100 * e, 0, 100), l: n.l, a: n.a };
}, Pr = function(t) {
  return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255;
}, Xo = function(t, e) {
  var n = mt(t);
  return { h: n.h, s: n.s, l: $(n.l + 100 * e, 0, 100), a: n.a };
}, Jr = function() {
  function t(e) {
    this.parsed = wf(e)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return t.prototype.isValid = function() {
    return this.parsed !== null;
  }, t.prototype.brightness = function() {
    return N(Pr(this.rgba), 2);
  }, t.prototype.isDark = function() {
    return Pr(this.rgba) < 0.5;
  }, t.prototype.isLight = function() {
    return Pr(this.rgba) >= 0.5;
  }, t.prototype.toHex = function() {
    return e = wr(this.rgba), n = e.r, r = e.g, i = e.b, a = (o = e.a) < 1 ? Dt(N(255 * o)) : "", "#" + Dt(n) + Dt(r) + Dt(i) + a;
    var e, n, r, i, o, a;
  }, t.prototype.toRgb = function() {
    return wr(this.rgba);
  }, t.prototype.toRgbString = function() {
    return e = wr(this.rgba), n = e.r, r = e.g, i = e.b, (o = e.a) < 1 ? "rgba(" + n + ", " + r + ", " + i + ", " + o + ")" : "rgb(" + n + ", " + r + ", " + i + ")";
    var e, n, r, i, o;
  }, t.prototype.toHsl = function() {
    return Jo(mt(this.rgba));
  }, t.prototype.toHslString = function() {
    return e = Jo(mt(this.rgba)), n = e.h, r = e.s, i = e.l, (o = e.a) < 1 ? "hsla(" + n + ", " + r + "%, " + i + "%, " + o + ")" : "hsl(" + n + ", " + r + "%, " + i + "%)";
    var e, n, r, i, o;
  }, t.prototype.toHsv = function() {
    return e = ia(this.rgba), { h: N(e.h), s: N(e.s), v: N(e.v), a: N(e.a, 3) };
    var e;
  }, t.prototype.invert = function() {
    return ge({ r: 255 - (e = this.rgba).r, g: 255 - e.g, b: 255 - e.b, a: e.a });
    var e;
  }, t.prototype.saturate = function(e) {
    return e === void 0 && (e = 0.1), ge(xr(this.rgba, e));
  }, t.prototype.desaturate = function(e) {
    return e === void 0 && (e = 0.1), ge(xr(this.rgba, -e));
  }, t.prototype.grayscale = function() {
    return ge(xr(this.rgba, -1));
  }, t.prototype.lighten = function(e) {
    return e === void 0 && (e = 0.1), ge(Xo(this.rgba, e));
  }, t.prototype.darken = function(e) {
    return e === void 0 && (e = 0.1), ge(Xo(this.rgba, -e));
  }, t.prototype.rotate = function(e) {
    return e === void 0 && (e = 15), this.hue(this.hue() + e);
  }, t.prototype.alpha = function(e) {
    return typeof e == "number" ? ge({ r: (n = this.rgba).r, g: n.g, b: n.b, a: e }) : N(this.rgba.a, 3);
    var n;
  }, t.prototype.hue = function(e) {
    var n = mt(this.rgba);
    return typeof e == "number" ? ge({ h: e, s: n.s, l: n.l, a: n.a }) : N(n.h);
  }, t.prototype.isEqual = function(e) {
    return this.toHex() === ge(e).toHex();
  }, t;
}(), ge = function(t) {
  return t instanceof Jr ? t : new Jr(t);
}, Wo = [], xf = function(t) {
  t.forEach(function(e) {
    Wo.indexOf(e) < 0 && (e(Jr, qr), Wo.push(e));
  });
};
function Pf(t, e) {
  var n = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r = {};
  for (var i in n)
    r[n[i]] = i;
  var o = {};
  t.prototype.toName = function(a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var s, u, c = r[this.toHex()];
    if (c)
      return c;
    if (a?.closest) {
      var l = this.toRgb(), f = 1 / 0, g = "black";
      if (!o.length)
        for (var d in n)
          o[d] = new t(n[d]).toRgb();
      for (var y in n) {
        var p = (s = l, u = o[y], Math.pow(s.r - u.r, 2) + Math.pow(s.g - u.g, 2) + Math.pow(s.b - u.b, 2));
        p < f && (f = p, g = y);
      }
      return g;
    }
  }, e.string.push([function(a) {
    var s = a.toLowerCase(), u = s === "transparent" ? "#0000" : n[s];
    return u ? new t(u).toRgb() : null;
  }, "name"]);
}
const sa = ({ color: t }) => t, If = (t, e = Se) => {
  const { nodes: n, links: r } = t;
  return new Float32Array(n.map(sa).flatMap(e));
}, aa = ({ size: t }) => t, Ef = (t, e = Se) => {
  const { nodes: n, links: r } = t;
  return new Float32Array(n.map(aa).map(e));
}, ua = async (t, { colorMap: e = Se, sizeMap: n = Se, immediate: r = !1 } = {}) => {
  await J(t);
  const i = await If(await J(t), e), o = await Ef(await J(t), n), a = we(t);
  a.setNodeProperties("colorTarget", "vec4", i), a.setNodeProperties("sizeTarget", "float", o), a.setNodeProperties(
    "emphasisTarget",
    "float",
    new Float32Array(o.length).fill(0)
  ), r && (a.setNodeProperties("colorInitial", "vec4", i), a.setNodeProperties("sizeInitial", "float", o), a.setNodeProperties(
    "emphasisInitial",
    "float",
    new Float32Array(o.length).fill(0)
  ));
}, Uo = async (t, e, {
  colorMap: n = Se,
  sizeMap: r = Se,
  emphasis: i = 0,
  immediate: o = !1
} = {}) => {
  const a = n(sa(e)), s = r(aa(e)), u = we(t);
  u.setNodeProperty("colorTarget", e.index, a), u.setNodeProperty("sizeTarget", e.index, s), u.setNodeProperty("emphasisTarget", e.index, i), o && (u.setNodeProperty("colorInitial", e.index, a), u.setNodeProperty("sizeInitial", e.index, s), u.setNodeProperty("emphasisInitial", e.index, i));
}, Cf = {
  colorMap: (t) => {
    const e = t.slice(0, 3).reduce((n, r) => n + r, 0) / 3;
    return [...t.slice(0, 3).map((n) => e), 0.5];
  },
  sizeMap: (t) => t
}, ca = async (t, e = !1) => {
  try {
    await ua(t, {
      ...Cf,
      immediate: e
    });
  } catch (n) {
    console.error(n);
  }
}, Bf = async (t, e, n = !0) => {
  if (await qf(t).get(), e) {
    $o(t, e.index), gn(t, e);
    const r = Ua(e.id), i = Ka(e.id), { nodesById: o, links: a } = await J(t), s = ({ sizeMap: u = Se, emphasis: c = 1, colorMap: l = Se }) => (f, g) => {
      g(["upstream", "downstream"]).then(({ upstream: d, downstream: y }) => {
        const p = d?.value || y?.value, b = o[p];
        Uo(t, b, {
          sizeMap: u,
          emphasis: c,
          colorMap: l
        });
      });
    };
    ca(t).then(() => {
      Yr(t).doQuery(
        r,
        $t(
          s({
            // sizeMap: (size) => size * 1.25,
            colorMap: (u) => {
              const c = { r: u[0], g: u[1], b: u[2], a: u[3] }, l = { r: 57 / 255, g: 179 / 255, b: 83 / 255, a: 0.8 }, f = Dr(c, l);
              return [f.r, f.g, f.b, f.a];
            }
          })
        )
        // proxy(() => {console.debug('downstream query done')})
      ), Uo(t, e, {
        sizeMap: (u) => u * 1.5,
        emphasis: 1
      }), Yr(t).doQuery(
        i,
        $t(
          s({
            // sizeMap: (size) => size * 1,
            colorMap: (u) => {
              const c = { r: u[0], g: u[1], b: u[2], a: u[3] }, l = { r: 0, g: 102 / 255, b: 209 / 255, a: 0.8 }, f = Dr(c, l);
              return [f.r, f.g, f.b, f.a];
            }
          })
        )
      );
    });
  } else
    ua(t), $o(t, -1);
}, Mf = async (t) => {
  const e = await J(t), { nodesByNavId: n } = e, i = W(t).focus, o = n[i];
  if (o) {
    const a = gn(t, o);
    Ia(t, a, !1);
  }
}, Ko = async (t) => {
  const e = await J(t), { nodesByNavId: n } = e, r = W(t), i = r.focus, o = n[i];
  if (o) {
    const a = gn(t, o);
    Ia(t, a, !0), ds(t, r.focusedZoom || 500);
  } else
    ds(t, r.unfocusedZoom || 1500);
};
window.initializeSelectionVisuals = ca;
const bt = (t) => _(t, "selectedIndex", () => -1).get(), $o = (t, e) => {
  _(t, "selectedIndex").set(e);
}, zf = async (t) => {
  const e = bt(t), { nodes: n } = await J(t);
  return n[e];
};
xf([Pf]);
const la = (t) => {
  const e = W(t), n = ge(
    getComputedStyle(e).getPropertyValue("--selected-color")
  ).toRgb();
  return [n.r / 255, n.g / 255, n.b / 255, 1];
}, _o = {
  globalScale: 1,
  nodeScale: 1,
  edgeFog: 1,
  nodeFog: 1,
  edgeScale: 1,
  edgeOvershoot: 1.25,
  edgeFrequency: 2,
  edgePulseSpeed: 1,
  edgeWaveSpeed: 1,
  focus: -1,
  selected: -1,
  defaultFogVisibility: 0.3,
  defaultFogBoundaryClipZ: 700,
  focusedZoom: 100,
  unfocusedZoom: 300,
  zoomBoundary: 150,
  nodeShape: "box"
}, Sf = (t) => Object.keys(W(t).constructor.properties), fa = k.infinite((t) => {
  const e = W(t);
  return Object.fromEntries(
    Sf(t).map((n) => [n, e[n]])
  );
}), Et = k.infinite((t) => {
  const e = {
    mousePosition: O(new _t(...Ea(t))),
    selectedIndex: O(-1),
    selectedColor: O(new ks(...la(t))),
    hoveringIndex: O(pn(t)),
    viewport: O(new _t(0, 0)),
    devicePixelRatio: O(window.devicePixelRatio),
    time: O(performance.now() / 1e3)
  }, n = fa(t);
  return Object.entries(n).forEach(([r, i]) => {
    e[r] = O(i);
  }), console.debug("initialized uniforms", e), e;
}), es = new _t(), kf = (t) => {
  const { renderer: e } = pe(t);
  e.getSize(es);
  let n = Et(t);
  n.mousePosition.value = new _t(...Ea(t)), n.selectedIndex.value = bt(t), n.selectedColor.value = new ks(...la(t)), n.hoveringIndex.value = pn(t), n.time.value = performance.now() / 1e3, n.viewport.value = es.toArray();
  const r = fa(t);
  Object.entries(r).forEach(([i, o]) => {
    n[i].value = o;
  });
}, Xt = (t, e, n) => {
  const r = Rs(t.div(n), -0.5, 0.5), i = ve(vt(ve(vt(r.mul(2), 2)), -1));
  return vt($a(i), e);
}, Vr = j(0.15), ts = (t, { nodePosition: e, scale: n }) => {
  const {
    globalProjection: r,
    globalView: i,
    zoomedProjection: o,
    zoomedView: a,
    fixedProjection: s,
    fixedView: u,
    distance: c,
    center: l,
    rotationCenter: f
  } = ln(t), { globalScale: g, nodeScale: d } = Et(t), y = r.mul(i).mul(q(e, j(1))), p = y.xyz.div(y.w), b = _a.mul(n).mul(g.value).mul(d.value), m = s.mul(
    u.mul(q(b, j(1)))
  ), h = m.xyz.div(
    m.w
  ), v = o.mul(
    a.mul(q(b, j(1)))
  ), A = v.xyz.div(
    v.w
  ), x = R(A, h, j(0.5)), w = qt(
    x.x.add(p.x),
    x.y.add(p.y),
    p.z.add(x.z.sub(j(0.99)).mul(j(0.1)))
  ), C = q(
    w.mul(y.w),
    y.w
  );
  return {
    globalNDC: p,
    globalClipPosition: y,
    orthoFixedClipPosition: m,
    orthoZoomedClipPosition: v,
    orthographicClipPosition: C
  };
}, Rf = ({ positionClipZ: t, fogBoundaryClipZ: e, distance: n }) => {
  const r = j(1).sub(
    Xt(t, j(1), e)
  );
  return R(
    r,
    j(0),
    en(j(400), j(800), n)
  );
}, jf = (t, e) => {
  const n = t.r.add(t.g).add(t.b).div(3);
  return R(t, n.toVec3(), e);
}, Hf = (t) => {
  const e = t.add(1).bitAnd(255).toFloat().div(255), n = t.add(1).bitAnd(65280).shiftRight(8).toFloat().div(255), r = t.add(1).bitAnd(16711680).shiftRight(16).toFloat().div(255);
  return q(e, n, r, 1);
}, da = (t) => {
  const e = nn, { fixedProjection: n, fixedView: r, distance: i } = ln(t), { selectedIndex: o, selectedColor: a, defaultFogBoundaryClipZ: s, nodeFog: u } = Et(t), c = we(t), l = c.getNodeProperties("positionInitial"), f = c.getNodeProperties("positionTarget"), g = l.element(e).sub(f.element(e).mul(0));
  c.getNodeProperties("colorInitial");
  const d = c.getNodeProperties("colorTarget");
  d.element(e).sub(d.element(e).mul(0));
  const y = c.getNodeProperties("sizeInitial"), p = c.getNodeProperties("sizeTarget"), b = y.element(e).sub(p.element(e).mul(0)), m = c.getNodeProperties("emphasisInitial"), h = c.getNodeProperties("emphasisTarget"), v = m.element(e).sub(h.element(e).mul(0)), x = o.greaterThan(-1).not().select(ve(v), v), w = c.getNodeProperties("colorTarget"), C = e.equal(o), S = b.mul(Vr).mul(R(0.5, 1, v)), G = tn(S.mul(1.1), 0.05), te = ts(t, {
    nodePosition: g,
    scale: S
    // scale: float(1),
  }), oe = ts(t, {
    nodePosition: g,
    scale: G
  });
  q(
    oe.orthographicClipPosition.xyz,
    oe.orthographicClipPosition.w.mul(1.01)
  ), r.mul(n).mul(eu).normalize();
  let me = w.element(e);
  l.element(o), Qr(l.element(e));
  let ne = mi(
    Rf({
      positionClipZ: te.globalClipPosition.z,
      fogBoundaryClipZ: s,
      distance: i
    }),
    ve(C.toFloat())
  );
  ne = mi(ne, ve(x)), ne = R(0, ne, u);
  let M = me.w;
  M = R(0.1, 1, x);
  let B = me.xyz.mul(R(1, 0.5, ne));
  B = jf(B, tn(ve(0.2).mul(ne), ve(x))), me = q(B, M);
  const z = R(me, a, C.toFloat()), H = new tu().load(uf);
  return {
    graphNodeMaterial: new nu({
      vertexNode: te.orthographicClipPosition,
      matcap: H,
      colorNode: z,
      // colorNode: vec4(1, 1, 0, 1),
      transparent: !0
      // depthTest: false,
    }),
    graphNodePickerMaterial: new js({
      vertexNode: oe.orthographicClipPosition,
      colorNode: Hf(e),
      depthWrite: !0
    })
  };
}, ns = (t) => {
  const e = we(t), n = nn, r = e.getEdgePairs("positionInitial"), i = e.getEdgePairs("positionTarget"), o = e.getEdgePairs("sizeInitial"), a = e.getEdgePairs("sizeTarget"), s = e.getEdgePairs("colorInitial"), u = e.getEdgePairs("colorTarget");
  e.getEdgePairs("emphasisInitial");
  const c = e.getEdgePairs("emphasisTarget");
  return {
    sourcePosition: r.source.element(n).add(i.source.element(n).mul(0)).toVar("srcPosition"),
    targetPosition: r.target.element(n).add(i.target.element(n).mul(0)).toVar("tgtPosition"),
    sourceColor: s.source.element(n).sub(u.source.element(n).mul(0)).toVar("srcColor"),
    targetColor: s.target.element(n).sub(u.target.element(n).mul(0)).toVar("tgtColor"),
    sourceSize: o.source.element(n).sub(a.source.element(n).mul(0)).mul(Vr).toVar("srcSize"),
    targetSize: o.target.element(n).sub(a.target.element(n).mul(0)).mul(Vr).toVar("tgtSize"),
    sourceEmphasis: c.source.element(n).x.toVar("srcEmphasis"),
    targetEmphasis: c.target.element(n).y.toVar("tgtEmphasis"),
    edgeIndices: e.getEdgeIndices().element(n).toVar("edgeIndices")
  };
}, Qf = ({
  nodePosition: t,
  vertexPosition: e,
  edgeDirection: n,
  scale: r,
  flatness: i,
  globalView: o,
  globalProjection: a,
  globalScale: s,
  edgeScale: u
}) => {
  const c = Hs(n), l = dt(
    c.y.negate(),
    c.x
  ).toVar("edgePerpendicular").mul(r).mul(s).mul(u).div(3), f = a.toVar("projection").mul(o.toVar("view")).mul(q(t, 1)).toVar("position"), g = f.div(f.w), d = q(
    f.xy.add(e.y.mul(l)),
    f.zw
  ), p = g.add(
    q(e.y.mul(l), 0, 0)
  ).mul(f.w);
  return R(d, p, i);
}, Nf = (t) => {
  const {
    globalProjection: e,
    globalView: n,
    distance: r
  } = ln(t), {
    selectedIndex: i,
    selectedColor: o,
    mousePosition: a,
    hoveringIndex: s,
    edgeFrequency: u,
    edgePulseSpeed: c,
    edgeWaveSpeed: l,
    time: f,
    devicePixelRatio: g,
    nodeDepthTexture: d,
    globalScale: y,
    edgeScale: p,
    edgeOvershoot: b,
    defaultFogBoundaryClipZ: m,
    edgeFog: h,
    selectedEdgeColor: v
  } = Et(t), A = ru("segmentOffset", "vec3");
  let {
    sourcePosition: x,
    targetPosition: w,
    sourceColor: C,
    targetColor: S,
    sourceSize: G,
    targetSize: te,
    sourceEmphasis: oe,
    targetEmphasis: me,
    edgeIndices: ne
  } = ns(t);
  const B = qt(
    A.y.mul(b),
    A.x,
    A.z
  ).add(qt(b.mul(0.5), 0, 0)).toVar("segmentPosition"), z = B.x.toVar("isSource"), H = ve(z).toVar("isTarget"), V = B.toVar("vertexOffset"), Ae = x.mul(z).add(w.mul(H)).toVar("nodePosition"), D = e.toVar("projection").mul(n.toVar("view")).mul(q(x, 1)).toVar("sourcePositionClip"), Y = e.toVar("projection").mul(n.toVar("view")).mul(q(w, 1)).toVar("targetPositionClip"), F = Hs(
    Y.xyz.div(Y.w).sub(D.xyz.div(D.w))
  ).xy.toVar("edgeDirection"), L = G.mul(z).add(te.mul(H)).mul(0.4).toVar("size"), Z = j(1).toVar("flatness"), xe = Qf({
    nodePosition: Ae,
    vertexPosition: V,
    edgeDirection: F,
    scale: L,
    flatness: Z,
    globalView: n,
    globalProjection: e,
    globalScale: y,
    edgeScale: p
  }).toVar("positionClip");
  let be = C.mul(z).add(S.mul(H)).toVar("color");
  const Pe = ne.x, Ie = ne.y, Je = Ai(i, Pe).toFloat(), Ve = Ai(i, Ie).toFloat(), Bt = Je.mul(z).add(Ve.mul(H));
  tn(Je, Ve).toFloat();
  const An = j(iu(i, -1)).toVar(
    "isAnySelected"
  ), Ze = tn(oe, me).toVar("emphasis"), Mt = Bt;
  let bn = be.xyz, Re = j(1);
  Re = Re.mul(R(0.4, 1, R(1, Ze, An))), Re = Re.mul(
    R(1, R(0.3, 1, Ze), en(400, 1200, r))
  ), be = q(bn, Re);
  const Xe = Tf(
    xe.z,
    m.div(2)
  ).toVar("fog"), yn = U(be);
  U(Xe), U(Ze), U(L), U(H);
  const Ha = U(
    D.xy.div(D.w).toVar("sourcePosition2DNDC")
  ), Qa = Y.xy.div(Y.w).toVar("targetPosition2DNDC"), wn = U(
    Ha.reflect(dt(0, 1)).add(dt(1, 1)).mul(0.5).mul(bi)
  ), Na = U(
    Qa.reflect(dt(0, 1)).add(dt(1, 1)).mul(0.5).mul(bi)
  ), hi = U(Qr(w.sub(x))), zt = U(Qr(Na.sub(wn)));
  U(V.y);
  const gi = U(B.y), Ta = () => {
    const vi = yi(wn, wi).div(zt), pi = H;
    let St = yn, Ee = St.w.mul(
      R(Xt(gi, j(2).mul(ve(Xe)), 1), 1, Xe)
    );
    ns(t);
    const Ya = zt.mul(u).mul(0.1), Oa = j(4).mul(l).div(zt), Da = Ir(vi.sub(f.mul(Oa)), Ya), Ga = hi.div(4).mul(u), Fa = j(20).div(hi).mul(c), xn = Rs(
      vt(Ir(vi.sub(f.mul(Fa)), 1), zt.div(2)),
      0,
      1
    );
    let kt = St.xyz;
    kt = R(St.xyz, qt(1, 1, 0), R(0, xn, 0.1)), Ee = St.w.mul(R(1, Da, ve(xn))), Ee = Ee.mul(
      Xt(
        gi,
        1,
        xn.mul(R(0.2, 0.4, Ze)).mul(Ir(pi, Ga)).add(0.6)
      )
    ), Ee = Ee.mul(R(0.4, 1, Mt)), Ee = Ee.mul(Xt(pi.sub(0.5), 2, b));
    const La = yi(wi, wn), qa = j(100);
    return en(qa, j(0), La), kt = R(kt, o.xyz, Bt), q(kt, Ee);
  };
  return new js({
    vertexNode: xe,
    colorNode: Ta(),
    depthTest: !1,
    // depthWrite: true,
    transparent: !0
  });
}, Tf = (t, e) => en(0, 1, t.sub(e).div(e)), Ir = (t, e) => vt(ou(t.mul(e).mul(Math.PI)), 2), Yf = hn((t, e) => {
  const n = new un(), r = new Oe(n, e);
  return oi(t, r), r;
}), rs = hn(
  (t) => {
    const { graphNodeMaterial: e, graphNodePickerMaterial: n } = da(t), r = new un(), i = new Oe(r, e), o = W(t)._nodeGeometryBuffer || ii("box");
    oi(o, i);
    const a = new Oe(r, n);
    return { mesh: i, pickerMesh: a };
  },
  {
    dispose: function(t, e, n) {
      console.debug("dispose node visualizer mesh", t);
    }
  }
), ii = (t) => {
  let e;
  try {
    return t == "sphere" ? e = new su(1, 32, 32) : t == "cone" ? e = new au(1, 2, 128) : t == "icosahedron" ? e = new Qs(1.5, 0) : t === "box" ? e = new uu(1, 1, 1) : t === "torusKnot" && (e = new cu(1, 0.3, 128, 64, 2, 3)), e.computeVertexNormals(), e.computeBoundingSphere(), e;
  } catch (n) {
    return console.warn("Error setting node geometry:", n), null;
  }
}, oi = (t, e) => {
  e.geometry.setAttribute("position", t.attributes.position), e.geometry.setAttribute("normal", t.attributes.normal), e.geometry.setIndex(t.index), e.material.needsUpdate = !0;
}, Of = (t, e) => {
  const { scene: n } = pe(t);
  n.nodeMeshes.forEach((i) => {
    on(e, i);
  });
  const r = Df(t);
  on(e, r);
}, on = (t, e) => {
  e.geometry.instanceCount = t;
}, ha = k.infinite((t) => {
  const e = new lu(0.5, 0.5, 1, 4, 4, !0), n = new un();
  return n.setAttribute("segmentOffset", e.attributes.position), n.setIndex(e.index), new Oe(n, Nf(t));
}), Df = (t) => {
  const { pickerScene: e } = pe(t);
  return e.children[0];
}, Zr = hn(async (t) => {
  const { nodes: e } = await J(t), { scene: n, pickerScene: r, renderer: i, camera: o } = pe(t), { graphNodeMaterial: a, graphNodePickerMaterial: s } = da(t), u = W(t)._nodeGeometryBuffer || ii("box"), c = Yf(u, a);
  on(e.length, c), c.material.needsUpdate = !0;
  const l = Array.from(n.nodeMeshes);
  for (await i.compileAsync(n, o, c), n.nodeMeshes.add(c), n.add(c), l.forEach((d) => {
    n.remove(d), n.nodeMeshes.delete(d);
  }); r.children.length > 0; )
    r.remove(r.children[0]);
  c.geometry.computeBoundingSphere();
  const f = new Qs(
    c.geometry.boundingSphere.radius,
    1
  ), g = new Oe(
    new un(),
    s
  );
  oi(f, g), g.material.needsUpdate = !0, on(e.length, g), await i.compileAsync(g, o), await r.add(g);
}), Gf = k.infinite((t) => {
  const { canvas: e } = X(t), n = new fu({
    canvas: e,
    forceWebGL: !0
  });
  return n.setClearColor(new Ns("#000000"), 0), n.setSize(window.innerWidth, window.innerHeight), n.setPixelRatio(window.devicePixelRatio), n;
}), pe = hn(
  (t) => {
    const e = new Rt(), n = new Rt(), r = new Rt(), i = new Rt();
    i.add(r), i.add(e);
    const o = new du(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1e3
    );
    o.position.z = 10;
    const a = new hu(16777215, 2);
    e.add(a);
    const s = Gf(t), u = ha(t);
    e.add(u);
    const c = rs(t).mesh;
    e.add(c), e.nodeMeshes = /* @__PURE__ */ new Set([c]);
    const l = rs(t).pickerMesh;
    return r.add(l), {
      scene: e,
      depthScene: n,
      pickerScene: r,
      camera: o,
      renderer: s,
      nodeVisualizerMesh: c,
      edgeVisualizerMesh: u,
      nodePickerMesh: l,
      debugPickerScene: i
    };
  },
  {
    // dispose: (x) => {
    //   console.log("Disposing Three.js setup");
    //   x.scene.traverse((object) => {
    //     if (object instanceof Mesh) {
    //       object.geometry.dispose();
    //       object.material.dispose();
    //     }
    //   });
    //   x.renderer.dispose();
    //   x.scene.clear();
    //   x.depthScene.clear();
    //   x.pickerScene.clear();
    //   if (x.nodeVisualizerMesh) x.nodeVisualizerMesh.geometry.dispose();
    //   if (x.edgeVisualizerMesh) x.edgeVisualizerMesh.geometry.dispose();
    //   if (x.nodePickerMesh) x.nodePickerMesh.geometry.dispose();
    //   requestAnimationFrame(() => {
    //     x.renderer.forceContextLoss();
    //     x.renderer.domElement.remove();
    //   });
    // },
  }
), si = k.infinite((t) => {
  const { canvas: e } = X(t);
  return new Ts(
    e.width,
    e.height,
    {
      stencilBuffer: !1
    }
  );
}), Ff = k.infinite((t) => {
  const { canvas: e } = X(t);
  return new Ts(
    e.width,
    e.height,
    {
      depthTexture: new gu(e.width, e.height),
      depthBuffer: !0,
      stencilBuffer: !1
    }
  );
}), ga = new Hc({ saturation: 0.7, lightness: 0.6 }), va = (t) => t.replace(/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z0-9-]+/i, "").replace(/\/$/, "").replace(/^\//, "").replace(/[^A-Za-z0-9\.]/gi, "-").replace(/-+/g, "-").replace(/^package-/, "").replace(/-v-/, "-"), we = k.infinite((t) => {
  const e = vu(t);
  return window.bufferState = e, [
    { name: "position", type: "vec3" },
    { name: "color", type: "vec4" },
    { name: "emphasis", type: "float" },
    { name: "size", type: "float" }
  ].forEach(({ name: r, type: i }) => {
    const o = new Float32Array(0), a = new Float32Array(0);
    e.setNodeProperties(`${r}Initial`, i, o), e.setNodeProperties(`${r}Target`, i, a);
  }), e;
}), Lf = async (t, e, n = !0) => {
  const { set: r } = cn(t, "graphData");
  r(e), (await Aa(t, e)).setData(e);
  const { nodes: o, linkIndexPairs: a } = e, s = we(t), u = n ? s.getNodeCount() : 0;
  n && s.getEdgeCount(), s.setNodeCount(o.length), s.setEdges(a);
  const c = 40, l = () => [
    Math.random() * c - c / 2,
    Math.random() * c - c / 2,
    Math.random() * c - c / 2
  ], f = new Float32Array(o.length * 3);
  if (n) {
    const p = s.getNodeProperties(
      "positionTarget",
      "vec3"
    ).value.array;
    f.set(p.subarray(0, u * 3));
    for (let b = u; b < o.length; b++) {
      const m = l();
      f.set(m, b * 3);
    }
  } else
    for (let p = 0; p < o.length; p++) {
      const b = l();
      f.set(b, p * 3);
    }
  s.setNodeProperties("positionInitial", "vec3", f), s.setNodeProperties("positionTarget", "vec3", f);
  const g = new Float32Array(o.length * 4);
  if (n) {
    const p = s.getNodeProperties("colorTarget", "vec4").value.array;
    g.set(p.subarray(0, u * 4));
    for (let b = u; b < o.length; b++)
      g.set(o[b].color, b * 4);
  } else
    for (let p = 0; p < o.length; p++)
      g.set(o[p].color, p * 4);
  s.setNodeProperties("colorInitial", "vec4", g), s.setNodeProperties("colorTarget", "vec4", g);
  const d = new Float32Array(o.length);
  if (n) {
    const p = s.getNodeProperties("sizeTarget", "float").value.array;
    d.set(p.subarray(0, u));
    for (let b = u; b < o.length; b++)
      d[b] = o[b].size;
  } else
    for (let p = 0; p < o.length; p++)
      d[p] = o[p].size;
  s.setNodeProperties("sizeInitial", "float", d), s.setNodeProperties("sizeTarget", "float", d);
  const y = new Float32Array(o.length);
  if (n) {
    const p = s.getNodeProperties(
      "emphasisTarget",
      "float"
    ).value.array;
    y.set(p.subarray(0, u)), y.fill(0, u);
  } else
    y.fill(0);
  s.setNodeProperties("emphasisTarget", "float", y), Of(t, o.length), ha(t).geometry.instanceCount = a.length, Jf(t, e);
}, J = async (t) => await cn(t, "graphData").get(), pa = (t) => ({
  index: t,
  id: `node://${t}`,
  size: 1,
  color: [...ga.rgb(String(t)).map((e) => e / 255), 1],
  navId: va(`node-${t}`)
}), ma = (t) => () => {
  const e = Math.floor(Math.random() * t.length), n = Math.floor(Math.random() * t.length);
  return {
    sourceIndex: e,
    targetIndex: n,
    source: t[e],
    target: t[n]
  };
}, _d = (t, e, n = 0) => {
  const r = [...Array(t).keys()].map((u) => u + n).map(pa), i = [...Array(e).keys()].map(ma(r)), o = i.map(({ sourceIndex: u, targetIndex: c }) => [
    u,
    c
  ]), a = rn(r.map((u) => [u.navId, u])), s = rn(r.map((u) => [u.id, u]));
  return { nodes: r, links: i, linkIndexPairs: o, nodesByNavId: a, nodesById: s };
}, eh = (t, { nodes: e, nodesByNavId: n, nodesById: r }) => {
  const i = e.length, o = [...Array(t).keys()].map((a) => a + i).map(pa);
  e.push(...o), o.forEach((a) => {
    n[a.navId] = a, r[a.id] = a;
  });
}, th = (t, { nodes: e, links: n, linkIndexPairs: r }) => {
  const i = [...Array(t).keys()].map(ma(e));
  n.push(...i), r.push(
    ...i.map(({ sourceIndex: o, targetIndex: a }) => [
      o,
      a
    ])
  );
}, nh = ({ nodes: t, links: e }) => {
  const n = t.map(({ id: s }, u) => ({
    index: u,
    id: `node://${s}`,
    size: 1,
    color: [...ga.rgb(String(s)).map((c) => c / 255), 1],
    navId: va(`node-${s}`)
  })), r = e.map((s) => {
    const u = n.findIndex(
      (l) => l.id === `node://${s.source}`
    ), c = n.findIndex(
      (l) => l.id === `node://${s.target}`
    );
    return {
      sourceIndex: u,
      targetIndex: c,
      source: n[u],
      target: n[c]
    };
  }), i = r.map(({ sourceIndex: s, targetIndex: u }) => [
    s,
    u
  ]), o = rn(n.map((s) => [s.navId, s])), a = rn(n.map((s) => [s.id, s]));
  return { nodes: n, links: r, linkIndexPairs: i, nodesByNavId: o, nodesById: a };
}, qf = (t) => cn(t, "graphDbPrepared"), Jf = async (t, e) => {
  const { set: n } = cn(t, "graphDbPrepared"), r = await Yr(t).buildGraph(e);
  return n(!0), r;
};
let Gt;
const Aa = k.infinite(
  async (t, e) => {
    const n = (await Bc(t)).D3ForceLayout;
    return Gt = await new n(e), Gt.start(), Gt;
  },
  {
    onExpire: () => {
      Gt.stop();
    },
    transformArgs: ([t, e]) => [
      t
      // graphData.nodes.length,
      // graphData.links.length,
    ]
  }
), is = (t) => we(t).getNodeProperties("positionTarget", "vec3").value.array, Vf = async (t) => {
  const e = await J(t);
  (await Aa(t, e)).getPositions(
    $t((r) => {
      r.length > 0 && we(t).setNodeProperties("positionTarget", "vec3", r);
    })
  );
}, gn = (t, e) => {
  const n = is(t) ? is(t) : [], r = e.index;
  return [
    n[r * 3],
    n[r * 3 + 1],
    n[r * 3 + 2]
  ];
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Er;
const sn = window, it = sn.trustedTypes, os = it ? it.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Xr = "$lit$", ze = `lit$${(Math.random() + "").slice(9)}$`, ba = "?" + ze, Zf = `<${ba}>`, De = document, yt = () => De.createComment(""), wt = (t) => t === null || typeof t != "object" && typeof t != "function", ya = Array.isArray, Xf = (t) => ya(t) || typeof t?.[Symbol.iterator] == "function", Cr = `[ 	
\f\r]`, lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ss = /-->/g, as = />/g, je = RegExp(`>|${Cr}(?:([^\\s"'>=/]+)(${Cr}*=${Cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), us = /'/g, cs = /"/g, wa = /^(?:script|style|textarea|title)$/i, Wf = (t) => (e, ...n) => ({ _$litType$: t, strings: e, values: n }), Uf = Wf(1), ot = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), ls = /* @__PURE__ */ new WeakMap(), Te = De.createTreeWalker(De, 129, null, !1);
function xa(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return os !== void 0 ? os.createHTML(e) : e;
}
const Kf = (t, e) => {
  const n = t.length - 1, r = [];
  let i, o = e === 2 ? "<svg>" : "", a = lt;
  for (let s = 0; s < n; s++) {
    const u = t[s];
    let c, l, f = -1, g = 0;
    for (; g < u.length && (a.lastIndex = g, l = a.exec(u), l !== null); )
      g = a.lastIndex, a === lt ? l[1] === "!--" ? a = ss : l[1] !== void 0 ? a = as : l[2] !== void 0 ? (wa.test(l[2]) && (i = RegExp("</" + l[2], "g")), a = je) : l[3] !== void 0 && (a = je) : a === je ? l[0] === ">" ? (a = i ?? lt, f = -1) : l[1] === void 0 ? f = -2 : (f = a.lastIndex - l[2].length, c = l[1], a = l[3] === void 0 ? je : l[3] === '"' ? cs : us) : a === cs || a === us ? a = je : a === ss || a === as ? a = lt : (a = je, i = void 0);
    const d = a === je && t[s + 1].startsWith("/>") ? " " : "";
    o += a === lt ? u + Zf : f >= 0 ? (r.push(c), u.slice(0, f) + Xr + u.slice(f) + ze + d) : u + ze + (f === -2 ? (r.push(void 0), s) : d);
  }
  return [xa(t, o + (t[n] || "<?>") + (e === 2 ? "</svg>" : "")), r];
};
class xt {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let o = 0, a = 0;
    const s = e.length - 1, u = this.parts, [c, l] = Kf(e, n);
    if (this.el = xt.createElement(c, r), Te.currentNode = this.el.content, n === 2) {
      const f = this.el.content, g = f.firstChild;
      g.remove(), f.append(...g.childNodes);
    }
    for (; (i = Te.nextNode()) !== null && u.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const f = [];
          for (const g of i.getAttributeNames())
            if (g.endsWith(Xr) || g.startsWith(ze)) {
              const d = l[a++];
              if (f.push(g), d !== void 0) {
                const y = i.getAttribute(d.toLowerCase() + Xr).split(ze), p = /([.?@])?(.*)/.exec(d);
                u.push({ type: 1, index: o, name: p[2], strings: y, ctor: p[1] === "." ? _f : p[1] === "?" ? td : p[1] === "@" ? nd : vn });
              } else
                u.push({ type: 6, index: o });
            }
          for (const g of f)
            i.removeAttribute(g);
        }
        if (wa.test(i.tagName)) {
          const f = i.textContent.split(ze), g = f.length - 1;
          if (g > 0) {
            i.textContent = it ? it.emptyScript : "";
            for (let d = 0; d < g; d++)
              i.append(f[d], yt()), Te.nextNode(), u.push({ type: 2, index: ++o });
            i.append(f[g], yt());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === ba)
          u.push({ type: 2, index: o });
        else {
          let f = -1;
          for (; (f = i.data.indexOf(ze, f + 1)) !== -1; )
            u.push({ type: 7, index: o }), f += ze.length - 1;
        }
      o++;
    }
  }
  static createElement(e, n) {
    const r = De.createElement("template");
    return r.innerHTML = e, r;
  }
}
function st(t, e, n = t, r) {
  var i, o, a, s;
  if (e === ot)
    return e;
  let u = r !== void 0 ? (i = n._$Co) === null || i === void 0 ? void 0 : i[r] : n._$Cl;
  const c = wt(e) ? void 0 : e._$litDirective$;
  return u?.constructor !== c && ((o = u?._$AO) === null || o === void 0 || o.call(u, !1), c === void 0 ? u = void 0 : (u = new c(t), u._$AT(t, n, r)), r !== void 0 ? ((a = (s = n)._$Co) !== null && a !== void 0 ? a : s._$Co = [])[r] = u : n._$Cl = u), u !== void 0 && (e = st(t, u._$AS(t, e.values), u, r)), e;
}
class $f {
  constructor(e, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var n;
    const { el: { content: r }, parts: i } = this._$AD, o = ((n = e?.creationScope) !== null && n !== void 0 ? n : De).importNode(r, !0);
    Te.currentNode = o;
    let a = Te.nextNode(), s = 0, u = 0, c = i[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let l;
        c.type === 2 ? l = new Ct(a, a.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (l = new rd(a, this, e)), this._$AV.push(l), c = i[++u];
      }
      s !== c?.index && (a = Te.nextNode(), s++);
    }
    return Te.currentNode = De, o;
  }
  v(e) {
    let n = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class Ct {
  constructor(e, n, r, i) {
    var o;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$Cp = (o = i?.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var e, n;
    return (n = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && n !== void 0 ? n : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && e?.nodeType === 11 && (e = n.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, n = this) {
    e = st(this, e, n), wt(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== ot && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Xf(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== T && wt(this._$AH) ? this._$AA.nextSibling.data = e : this.$(De.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var n;
    const { values: r, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = xt.createElement(xa(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.v(r);
    else {
      const a = new $f(o, this), s = a.u(this.options);
      a.v(r), this.$(s), this._$AH = a;
    }
  }
  _$AC(e) {
    let n = ls.get(e.strings);
    return n === void 0 && ls.set(e.strings, n = new xt(e)), n;
  }
  T(e) {
    ya(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const o of e)
      i === n.length ? n.push(r = new Ct(this.k(yt()), this.k(yt()), this, this.options)) : r = n[i], r._$AI(o), i++;
    i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
  }
  _$AR(e = this._$AA.nextSibling, n) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, n); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var n;
    this._$AM === void 0 && (this._$Cp = e, (n = this._$AP) === null || n === void 0 || n.call(this, e));
  }
}
class vn {
  constructor(e, n, r, i, o) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, n = this, r, i) {
    const o = this.strings;
    let a = !1;
    if (o === void 0)
      e = st(this, e, n, 0), a = !wt(e) || e !== this._$AH && e !== ot, a && (this._$AH = e);
    else {
      const s = e;
      let u, c;
      for (e = o[0], u = 0; u < o.length - 1; u++)
        c = st(this, s[r + u], n, u), c === ot && (c = this._$AH[u]), a || (a = !wt(c) || c !== this._$AH[u]), c === T ? e = T : e !== T && (e += (c ?? "") + o[u + 1]), this._$AH[u] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class _f extends vn {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
const ed = it ? it.emptyScript : "";
class td extends vn {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== T ? this.element.setAttribute(this.name, ed) : this.element.removeAttribute(this.name);
  }
}
class nd extends vn {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o), this.type = 5;
  }
  _$AI(e, n = this) {
    var r;
    if ((e = (r = st(this, e, n, 0)) !== null && r !== void 0 ? r : T) === ot)
      return;
    const i = this._$AH, o = e === T && i !== T || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, a = e !== T && (i === T || o);
    o && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class rd {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    st(this, e);
  }
}
const fs = sn.litHtmlPolyfillSupport;
fs?.(xt, Ct), ((Er = sn.litHtmlVersions) !== null && Er !== void 0 ? Er : sn.litHtmlVersions = []).push("2.8.0");
const Pa = (t, e, n) => {
  var r, i;
  const o = (r = n?.renderBefore) !== null && r !== void 0 ? r : e;
  let a = o._$litPart$;
  if (a === void 0) {
    const s = (i = n?.renderBefore) !== null && i !== void 0 ? i : null;
    o._$litPart$ = a = new Ct(e.insertBefore(yt(), s), s, void 0, n ?? {});
  }
  return a._$AI(t), a;
}, id = (t, e) => {
  const { canvas: n } = X(t), r = n.getBoundingClientRect(), i = (e.clientX - r.left) / r.width, o = (e.clientY - r.top) / r.height;
  return { x: i * 2 - 1, y: -(o * 2 - 1) };
}, Wt = (t, ...e) => ee(t).getGlobalCamera(t, ...e), od = (t, ...e) => ee(t).updateCameras(t, ...e), sd = (t, ...e) => ee(t).getGlobalCameraParams(t, ...e), Ia = (t, ...e) => ee(t).setCameraCenter(t, ...e), ds = (t, ...e) => ee(t).setCameraDistance(t, ...e), hs = (t, ...e) => ee(t).zoomGlobalCamera(t, ...e), gs = (t, ...e) => ee(t).panGlobalCamera(t, ...e), vs = (t, ...e) => ee(t).startZooming(t, ...e), ad = (t, ...e) => ee(t).stopZooming(t, ...e), ps = (t, ...e) => ee(t).startPanning(t, ...e), ms = (t, ...e) => ee(t).stopPanning(t, ...e), ud = (t, ...e) => ee(t).computeScreenPosition(t, ...e), Wr = () => window.matchMedia("(pointer:fine)").matches, As = async (t) => {
  const e = W(t);
  ad(t);
  const n = bt(t), r = (await sd(t)).distance;
  n > -1 ? (e.focusedZoom = Math.min(r, e.zoomBoundary), console.debug("setting selected zoom", e.focusedZoom)) : (e.unfocusedZoom = Math.max(r, e.zoomBoundary), console.debug("setting deselected zoom", e.unfocusedZoom));
}, Pt = (t) => _(t, "pointerPositionInfo", () => ({
  x: 0,
  y: 0,
  canvasX: 0,
  canvasY: 0,
  pickerX: 0,
  pickerY: 0
})).get(), bs = new Uint8Array(4).fill(0);
let gt = 0, nt = 0;
const Br = () => {
  gt++;
}, cd = async (t, e) => {
  const { nodes: n } = await J(t), r = n[e];
  W(t).dispatchEvent(
    new CustomEvent("tap", {
      detail: { tappedIndex: e, info: r }
    })
  );
}, Ea = (t) => [
  Pt(t).x,
  Pt(t).y
], ld = (t) => [
  Pt(t).pickerX,
  Pt(t).pickerY
], Ut = pu((t, { x: e, y: n }) => {
  const { canvas: r } = X(t), i = Pt(t);
  i.x = e, i.y = n, i.canvasX = (e + 1) / 2 * r.width, i.canvasY = (n + 1) / 2 * r.height;
  const o = window.devicePixelRatio || 1;
  i.pickerX = Math.floor(
    i.canvasX / o
  ), i.pickerY = Math.floor(
    i.canvasY / o
  );
}), pn = (t) => _(t, "currentlyHoveringIndex", () => -1).get(), fd = async (t) => {
  const { nodes: e } = await J(t), n = pn(t);
  return e[n];
}, dd = k.infinite((t) => {
  const e = t.context, { canvas: n } = X(e);
  Vt(n).on("touchmove", Ut(e)).on("mousemove", Ut(e)), Vt(n).on("mousemove", () => {
  }), Vt(n).on("touchmove", Br).on("pinchmove", Br).on("mousemove", Br), n.addEventListener("pointerdown", async (r) => {
    console.debug("pointer down");
    const i = async ([s, u]) => {
      console.debug("pointer clickHandler", s, u);
      const c = nt > 0.03 || gt > 5;
      if (console.debug(
        "was drag",
        c,
        nt,
        gt
      ), !c) {
        const l = pn(e);
        cd(e, l).catch((f) => {
          console.error("Error in notifyTapped:", f);
        });
      }
    }, o = new Promise((s, u) => {
      n.addEventListener("pointerup", s, { once: !0 }), setTimeout(() => u("pointer event timed out after 100ms"), 200);
    });
    gt = 0, nt = 0;
    const a = [o];
    Wr() && a.push(md(e)), Promise.all(a).then(i).catch((s) => console.debug(s)), setTimeout(() => {
      nt > 0.03 || gt > 5 || Ba(e)();
    }, 5), Ut(e, id(e, r));
  }), n.addEventListener("selected", (r) => {
  }), n.addEventListener("hover", async (r) => {
    const { nodes: i } = await J(e), o = r.detail.wasHoveredIndex;
    o > -1 && i[o];
    const a = r.detail.nowHoveredIndex, s = a > -1 ? i[a] : null;
    bt(e) > -1 && i[bt(e)], s ? _(e, "currentlyHoveringIndex").set(
      s?.index != null ? s.index : -1
    ) : _(e, "currentlyHoveringIndex").set(-1);
  });
}), Ft = Math.PI / 3, hd = (t) => {
  const { canvas: e } = X(t);
  e.addEventListener(
    "wheel",
    (n) => {
      const r = Math.exp(n.deltaY / e.clientHeight * 2) - 1, i = Math.sign(r);
      vs(t), hs(
        t,
        0,
        0,
        i * Math.min(Math.abs(r), 0.06)
      ), n.preventDefault(), As(t);
    },
    { passive: !1 }
  ), Vt(e).on("mousemove", function(n) {
    !n.active || n.buttons !== 1 || (nt += Math.sqrt(
      Math.pow(n.dx, 2) + Math.pow(n.dy, 2)
    ), n.mods.shift ? (ps(t), gs(t, n.dx, n.dy)) : n.mods.meta ? Wt(t).pivot(n.dx, n.dy) : (Wt(t).rotate(
      -n.dx * Ft,
      -n.dy * Ft
    ), ms(t)), n.originalEvent.preventDefault());
  }).on("touchmove", function(n) {
    Ut(n), n.active && (nt += Math.sqrt(
      Math.pow(n.dx, 2) + Math.pow(n.dy, 2)
    ), Wt(t).rotate(
      -n.dx * Ft,
      -n.dy * Ft
    ));
  }).on("pinchmove", function(n) {
    n.active && (ps(t), vs(t), hs(t, 0, 0, 1 - n.zoomx), gs(t, n.dx, n.dy));
  }).on("pinchstart", (n) => n.originalEvent.preventDefault()).on("pinchend", () => {
    ms(t), As(t);
  });
}, Ca = k.infinite((t) => ({
  lastOverIndex: -1,
  pickerTime: 0,
  pickerSync: null,
  pickerFailures: 0,
  pickerGuardFailed: !1
})), gd = (t) => t[0] + t[1] * 256 + t[2] * 256 * 256 - 1, vd = (t) => {
  const e = Ca(t), n = X(t).gl, r = () => n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE, 0);
  return e.pickerSync ? n?.clientWaitSync(e.pickerSync, 0, 0) === n?.CONDITION_SATISFIED ? (n.deleteSync(e.pickerSync), e.pickerSync = r(), !0) : !1 : (e.pickerSync = r(), !1);
}, Ba = k.infinite((t) => async () => {
  const e = Ca(t), n = vd(t), { canvas: r } = X(t), i = X(t).gl;
  if (e.pickerFailures > 10 && (e.pickerGuardFailed = !0, console.warn("picker guard failed")), !n && !e.pickerGuardFailed)
    console.debug("not ready to read picker pixel yet"), e.pickerFailures += 1;
  else {
    e.pickerFailures = 0;
    const { renderer: o } = pe(t), a = ld(t), s = si(t);
    a[0] >= 0 && a[0] < s.width && a[1] >= 0 && a[1] < s.height && await o.readRenderTargetPixelsAsync(
      s,
      ...a,
      1,
      1
    ).then((u) => {
      i.flush();
      for (let l = 0; l < 4; l++)
        bs[l] = u[l];
      const c = gd(bs);
      return e.lastOverIndex = c, c;
    }).then((u) => {
      r.dispatchEvent(
        new CustomEvent("hover", {
          detail: {
            wasHoveredIndex: e.lastOverIndex,
            nowHoveredIndex: u
          }
        })
      ), console.debug("hover", u, e.lastOverIndex), u > -1 && (r.dispatchEvent(
        new CustomEvent("hoveron", {
          detail: {
            wasHoveredIndex: e.lastOverIndex,
            nowHoveredIndex: u
          }
        })
      ), console.debug("hoveron", u, e.lastOverIndex));
    });
  }
}), pd = (t) => Tr(Ba(t), 1e3), md = async (t) => (console.debug("waiting for hover event"), new Promise((e) => {
  const n = X(t).canvas, r = (i) => {
    console.debug("got hover event", i.detail), e(i.detail);
  };
  n.addEventListener("hover", r, { once: !0 });
})), ai = k.deep(
  (t, { classes: e, htmlTemplate: n, applyScreenPositionStyle: r } = {}) => {
    const i = W(t);
    r = r || ((l, f) => {
      f.style.left = `${l[0]}vw`, f.style.bottom = `${l[1]}vh`;
    });
    const o = document.createElement("div");
    o?.classList.add("cursor"), e?.forEach((l) => o?.classList.add(l)), i?.shadowRoot?.appendChild(o);
    const a = (l) => {
      r(l, o);
    }, s = (l) => {
      const f = [
        (l[0] + 1) / 2 * 100,
        (l[1] + 1) / 2 * 100
      ];
      a(f);
    }, u = Tr(async (l) => {
      const f = gn(t, l), g = await ud(t, f);
      s(g);
    }, 1e3 / 10), c = Tr(async (l) => {
      l ? (await u(l), o.classList.add("focused")) : o.classList.remove("focused"), l && n && Pa(n(l), o);
    }, 50);
    return {
      element: o,
      alignToScreenPosition: a,
      alignToNDCPosition: s,
      alignToNode: u,
      highlightNode: c,
      destroy: () => o.remove()
    };
  }
), Ad = k.infinite(
  (t) => ai(t, {
    classes: ["selected-cursor"]
  })
), bd = k.infinite(
  (t) => ai(t, {
    classes: ["hovered-tooltip"],
    htmlTemplate: (e) => Uf`
      <div class="node-name">${e.data?.name}</div>
    `,
    applyScreenPositionStyle(e, n) {
      n.style.left = `calc(min(${e[0]}vw, calc(100vw - 15em)))`, n.style.bottom = `${e[1]}vh`;
    }
  })
), yd = k.infinite(
  (t) => ai(t, {
    classes: ["hovered-cursor"]
  })
);
var ui = { exports: {} };
function wd(t, e) {
  var n = e && e.cache ? e.cache : Bd, r = e && e.serializer ? e.serializer : Cd, i = e && e.strategy ? e.strategy : Pd;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function xd(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ma(t, e, n, r) {
  var i = xd(r) ? r : n(r), o = e.get(i);
  return typeof o > "u" && (o = t.call(this, r), e.set(i, o)), o;
}
function za(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = e.get(i);
  return typeof o > "u" && (o = t.apply(this, r), e.set(i, o)), o;
}
function ci(t, e, n, r, i) {
  return n.bind(
    e,
    t,
    r,
    i
  );
}
function Pd(t, e) {
  var n = t.length === 1 ? Ma : za;
  return ci(
    t,
    this,
    n,
    e.cache.create(),
    e.serializer
  );
}
function Id(t, e) {
  var n = za;
  return ci(
    t,
    this,
    n,
    e.cache.create(),
    e.serializer
  );
}
function Ed(t, e) {
  var n = Ma;
  return ci(
    t,
    this,
    n,
    e.cache.create(),
    e.serializer
  );
}
function Cd() {
  return JSON.stringify(arguments);
}
function mn() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
mn.prototype.has = function(t) {
  return t in this.cache;
};
mn.prototype.get = function(t) {
  return this.cache[t];
};
mn.prototype.set = function(t, e) {
  this.cache[t] = e;
};
var Bd = {
  create: function() {
    return new mn();
  }
};
ui.exports = wd;
ui.exports.strategies = {
  variadic: Id,
  monadic: Ed
};
var Md = ui.exports;
const zd = /* @__PURE__ */ $r(Md), Sd = zd(
  (t, e) => {
    const n = mu(() => {
      for (const { current: i, target: o } of e) {
        let a = i.element(nn), s = o.element(nn);
        a.assign(
          // targetElement.mul(0.05),
          a.add(s.sub(a).mul(0.05))
        );
      }
    }), r = e[0]?.target.value.count;
    return n().compute(r);
  },
  {
    // isShallowEqual: true,
    // maxSize: 50,
    // maxAge: 1000,
    serializer: ([t, e]) => {
      let n = e;
      const r = we(t);
      return n = JSON.stringify(
        e.flatMap((i) => [
          r.getNodeCount(),
          i?.target?.uuid,
          r.getEdgeCount(),
          i?.current?.uuid
        ])
      ), n;
    }
  }
), He = async (t, e) => {
  const { renderer: n } = pe(t), r = Sd(t, e);
  pe(t), await n.computeAsync(r);
}, kd = async (t) => {
  const e = we(t);
  Promise.all([
    He(t, [
      {
        current: e.getNodeProperties("positionInitial"),
        target: e.getNodeProperties("positionTarget")
      },
      {
        current: e.getNodeProperties("sizeInitial"),
        target: e.getNodeProperties("sizeTarget")
      }
    ]),
    He(t, [
      {
        current: e.getNodeProperties("emphasisInitial"),
        target: e.getNodeProperties("emphasisTarget")
      }
    ]),
    He(t, [
      {
        current: e.getNodeProperties("colorInitial"),
        target: e.getNodeProperties("colorTarget")
      }
    ]),
    He(t, [
      {
        current: e.getEdgePairs("positionInitial").source,
        target: e.getEdgePairs("positionTarget").source
      },
      {
        current: e.getEdgePairs("positionInitial").target,
        target: e.getEdgePairs("positionTarget").target
      }
    ]),
    He(t, [
      {
        current: e.getEdgePairs("sizeInitial").source,
        target: e.getEdgePairs("sizeTarget").source
      },
      {
        current: e.getEdgePairs("sizeInitial").target,
        target: e.getEdgePairs("sizeTarget").target
      }
    ]),
    He(t, [
      {
        current: e.getEdgePairs("colorInitial").source,
        target: e.getEdgePairs("colorTarget").source
      },
      {
        current: e.getEdgePairs("colorInitial").target,
        target: e.getEdgePairs("colorTarget").target
      }
    ]),
    He(t, [
      {
        current: e.getEdgePairs("emphasisInitial").source,
        target: e.getEdgePairs("emphasisTarget").source
      },
      {
        current: e.getEdgePairs("emphasisInitial").target,
        target: e.getEdgePairs("emphasisTarget").target
      }
    ])
  ]);
}, Rd = (t) => _(t, "togglePickerDebug", () => !1);
window.addEventListener("keydown", (t) => {
  t.key, t.key;
});
const li = k.infinite((t) => {
  const e = W(t), n = window.devicePixelRatio || 1, r = e.clientWidth, i = e.clientHeight, o = Math.floor(r * n), a = Math.floor(i * n);
  return {
    width: o,
    height: a,
    clientWidth: r,
    clientHeight: i
  };
}), jd = (t, e = null) => {
  const { set: n, get: r } = _(t, "canvas"), i = r();
  n(e ? i || e : i || document.createElement("canvas"));
}, X = k.infinite((t) => {
  const e = _(t, "canvas").get(), n = e.getContext("webgl2", {
    powerPreference: "high-performance"
  });
  return n ? console.debug("WebGL2 initialized") : console.error("WebGL2 failed to initialize"), { canvas: e, gl: n };
}), Hd = (t) => {
  X(t);
  const { renderer: e, camera: n } = pe(t), { width: r, height: i, clientWidth: o, clientHeight: a } = li(t);
  W(t), e.setSize(o, a), n.aspect = o / a, si(t).setSize(o, a), Ff(t).setSize(o, a), Wt(t).resize(r / i);
}, Qd = (t) => {
  Et(t);
}, Sa = async (t) => {
  if (_(t, "visible").get()) {
    kf(t), Vf(t), zf(t).then((c) => {
      Ad(t).highlightNode(c);
    }), Wr() && fd(t).then((c) => {
      bd(t).highlightNode(c), yd(t).highlightNode(c);
    });
    const { width: e, height: n } = li(t);
    od(t, Eu(t), e, n), X(t);
    const {
      renderer: r,
      scene: i,
      camera: o,
      // nodeVisualizerMesh,
      // nodePickerMesh,
      pickerScene: a,
      // edgeVisualizerMesh,
      debugPickerScene: s
    } = pe(t);
    Mf(t), kd(t);
    const u = Rd(t).get();
    r.setRenderTarget(null), u ? r.render(s, o) : r.render(i, o), r.setRenderTarget(si(t)), r.render(a, o), Zr(t), Wr() && await pd(t)();
  }
  requestAnimationFrame(() => Sa(t));
};
var rt = {}, Nd = (t, e) => {
  rt[t] ?? (rt[t] = []), rt[t].push(e);
}, Td = (t, e) => {
  var n;
  (n = rt[t]) == null || n.splice(rt[t].indexOf(e), 1);
}, ys = async (t, e, n) => {
  for (const r of rt[t] ?? [])
    await r(e, n);
}, Mr = (t) => t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t, Yd = (t) => {
  var e;
  const n = (e = t.match(/(:[^/]+)/g)) == null ? void 0 : e.map((r) => r.substring(1));
  return n && {
    keys: n,
    regExp: new RegExp("^" + t.replace(/(:[^/]+)/g, "([^/]+)") + "$")
  };
}, Od = (t, e) => Object.fromEntries(e.map((n, r) => [n, t[r + 1]])), ka = [], et, Dd = (t) => {
  for (const e of ka) {
    const { pattern: n, regExp: r, keys: i } = e, o = r ? t.match(r) : n === "*" || n === t;
    if (o) {
      const a = Array.isArray(o) ? Od(o, i) : void 0;
      return { definition: e, params: a };
    }
  }
}, ft = async (t, e) => {
  const n = Dd(t), r = !!n, i = n?.params ?? {}, o = et;
  et = { path: t, params: i, matches: r, trigger: e }, await ys("before-route", et, o), await n?.definition.action(i, et, o), await ys("route", et, o);
}, fi = {
  get currentRoute() {
    return et;
  },
  on: Nd,
  off: Td,
  start({ handleInitial: t = !0 } = {}) {
    const e = window.location.hash != "" && window.location.hash;
    t && ft(e || window.location.pathname || "/", "init"), window.addEventListener(
      "popstate",
      () => ft(window.location.pathname, "popstate")
    ), window.addEventListener(
      "hashchange",
      () => {
        ft(window.location.hash, "hashchange");
      }
    );
  },
  route(t, e) {
    const n = Mr(t), { regExp: r, keys: i = [] } = Yd(t) || {};
    ka.push({
      pattern: n,
      action: e,
      regExp: r,
      keys: i
    });
  },
  push(t) {
    window.history.pushState(null, "", Mr(t)), ft(t, "push");
  },
  replace(t) {
    window.history.replaceState(null, "", Mr(t)), ft(t, "replace");
  }
};
fi.route("#-", () => {
  console.debug("navigating to nothing");
});
fi.route("#node/:id", async (t, { trigger: e }) => {
});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = window, di = Kt.ShadowRoot && (Kt.ShadyCSS === void 0 || Kt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ra = Symbol(), ws = /* @__PURE__ */ new WeakMap();
let Gd = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== Ra)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (di && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = ws.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ws.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Fd = (t) => new Gd(typeof t == "string" ? t : t + "", void 0, Ra), Ld = (t, e) => {
  di ? t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach((n) => {
    const r = document.createElement("style"), i = Kt.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  });
}, xs = di ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules)
    n += r.cssText;
  return Fd(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var zr;
const an = window, Ps = an.trustedTypes, qd = Ps ? Ps.emptyScript : "", Is = an.reactiveElementPolyfillSupport, Ur = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? qd : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let n = t;
  switch (e) {
    case Boolean:
      n = t !== null;
      break;
    case Number:
      n = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(t);
      } catch {
        n = null;
      }
  }
  return n;
} }, ja = (t, e) => e !== t && (e == e || t == t), Sr = { attribute: !0, type: String, converter: Ur, reflect: !1, hasChanged: ja }, Kr = "finalized";
class tt extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(e) {
    var n;
    this.finalize(), ((n = this.h) !== null && n !== void 0 ? n : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((n, r) => {
      const i = this._$Ep(r, n);
      i !== void 0 && (this._$Ev.set(i, r), e.push(i));
    }), e;
  }
  static createProperty(e, n = Sr) {
    if (n.state && (n.attribute = !1), this.finalize(), this.elementProperties.set(e, n), !n.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const r = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, r, n);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, n, r) {
    return { get() {
      return this[n];
    }, set(i) {
      const o = this[e];
      this[n] = i, this.requestUpdate(e, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Sr;
  }
  static finalize() {
    if (this.hasOwnProperty(Kr))
      return !1;
    this[Kr] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const n = this.properties, r = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
      for (const i of r)
        this.createProperty(i, n[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const n = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r)
        n.unshift(xs(i));
    } else
      e !== void 0 && n.push(xs(e));
    return n;
  }
  static _$Ep(e, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((n) => this.enableUpdating = n), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((n) => n(this));
  }
  addController(e) {
    var n, r;
    ((n = this._$ES) !== null && n !== void 0 ? n : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) === null || r === void 0 || r.call(e));
  }
  removeController(e) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, n) => {
      this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]), delete this[n]);
    });
  }
  createRenderRoot() {
    var e;
    const n = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Ld(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
      var r;
      return (r = n.hostConnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
      var r;
      return (r = n.hostDisconnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  attributeChangedCallback(e, n, r) {
    this._$AK(e, r);
  }
  _$EO(e, n, r = Sr) {
    var i;
    const o = this.constructor._$Ep(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const a = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : Ur).toAttribute(n, r.type);
      this._$El = e, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null;
    }
  }
  _$AK(e, n) {
    var r;
    const i = this.constructor, o = i._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const a = i.getPropertyOptions(o), s = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? a.converter : Ur;
      this._$El = o, this[o] = s.fromAttribute(n, a.type), this._$El = null;
    }
  }
  requestUpdate(e, n, r) {
    let i = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || ja)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (n) {
      Promise.reject(n);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, o) => this[o] = i), this._$Ei = void 0);
    let n = !1;
    const r = this._$AL;
    try {
      n = this.shouldUpdate(r), n ? (this.willUpdate(r), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var o;
        return (o = i.hostUpdate) === null || o === void 0 ? void 0 : o.call(i);
      }), this.update(r)) : this._$Ek();
    } catch (i) {
      throw n = !1, this._$Ek(), i;
    }
    n && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.forEach((r) => {
      var i;
      return (i = r.hostUpdated) === null || i === void 0 ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((n, r) => this._$EO(r, this[r], n)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
tt[Kr] = !0, tt.elementProperties = /* @__PURE__ */ new Map(), tt.elementStyles = [], tt.shadowRootOptions = { mode: "open" }, Is?.({ ReactiveElement: tt }), ((zr = an.reactiveElementVersions) !== null && zr !== void 0 ? zr : an.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var kr, Rr;
class At extends tt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, n;
    const r = super.createRenderRoot();
    return (e = (n = this.renderOptions).renderBefore) !== null && e !== void 0 || (n.renderBefore = r.firstChild), r;
  }
  update(e) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Pa(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return ot;
  }
}
At.finalized = !0, At._$litElement$ = !0, (kr = globalThis.litElementHydrateSupport) === null || kr === void 0 || kr.call(globalThis, { LitElement: At });
const Es = globalThis.litElementPolyfillSupport;
Es?.({ LitElement: At });
((Rr = globalThis.litElementVersions) !== null && Rr !== void 0 ? Rr : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var jr;
((jr = window.HTMLSlotElement) === null || jr === void 0 ? void 0 : jr.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
const Jd = /^[og]\s*(.+)?/, Vd = /^mtllib /, Zd = /^usemtl /, Xd = /^usemap /, Cs = /\s+/, Bs = new Ye(), Hr = new Ye(), Ms = new Ye(), zs = new Ye(), K = new Ye(), Lt = new Ns();
function Wd() {
  const t = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(e, n) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = e, this.object.fromDeclaration = n !== !1;
        return;
      }
      const r = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: e || "",
        fromDeclaration: n !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(i, o) {
          const a = this._finalize(!1);
          a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
          const s = {
            index: this.materials.length,
            name: i || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: a !== void 0 ? a.smooth : this.smooth,
            groupStart: a !== void 0 ? a.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(u) {
              const c = {
                index: typeof u == "number" ? u : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return c.clone = this.clone.bind(c), c;
            }
          };
          return this.materials.push(s), s;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(i) {
          const o = this.currentMaterial();
          if (o && o.groupEnd === -1 && (o.groupEnd = this.geometry.vertices.length / 3, o.groupCount = o.groupEnd - o.groupStart, o.inherited = !1), i && this.materials.length > 1)
            for (let a = this.materials.length - 1; a >= 0; a--)
              this.materials[a].groupCount <= 0 && this.materials.splice(a, 1);
          return i && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), o;
        }
      }, r && r.name && typeof r.clone == "function") {
        const i = r.clone(0);
        i.inherited = !0, this.object.materials.push(i);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(e, n) {
      const r = parseInt(e, 10);
      return (r >= 0 ? r - 1 : r + n / 3) * 3;
    },
    parseNormalIndex: function(e, n) {
      const r = parseInt(e, 10);
      return (r >= 0 ? r - 1 : r + n / 3) * 3;
    },
    parseUVIndex: function(e, n) {
      const r = parseInt(e, 10);
      return (r >= 0 ? r - 1 : r + n / 2) * 2;
    },
    addVertex: function(e, n, r) {
      const i = this.vertices, o = this.object.geometry.vertices;
      o.push(i[e + 0], i[e + 1], i[e + 2]), o.push(i[n + 0], i[n + 1], i[n + 2]), o.push(i[r + 0], i[r + 1], i[r + 2]);
    },
    addVertexPoint: function(e) {
      const n = this.vertices;
      this.object.geometry.vertices.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addVertexLine: function(e) {
      const n = this.vertices;
      this.object.geometry.vertices.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addNormal: function(e, n, r) {
      const i = this.normals, o = this.object.geometry.normals;
      o.push(i[e + 0], i[e + 1], i[e + 2]), o.push(i[n + 0], i[n + 1], i[n + 2]), o.push(i[r + 0], i[r + 1], i[r + 2]);
    },
    addFaceNormal: function(e, n, r) {
      const i = this.vertices, o = this.object.geometry.normals;
      Bs.fromArray(i, e), Hr.fromArray(i, n), Ms.fromArray(i, r), K.subVectors(Ms, Hr), zs.subVectors(Bs, Hr), K.cross(zs), K.normalize(), o.push(K.x, K.y, K.z), o.push(K.x, K.y, K.z), o.push(K.x, K.y, K.z);
    },
    addColor: function(e, n, r) {
      const i = this.colors, o = this.object.geometry.colors;
      i[e] !== void 0 && o.push(i[e + 0], i[e + 1], i[e + 2]), i[n] !== void 0 && o.push(i[n + 0], i[n + 1], i[n + 2]), i[r] !== void 0 && o.push(i[r + 0], i[r + 1], i[r + 2]);
    },
    addUV: function(e, n, r) {
      const i = this.uvs, o = this.object.geometry.uvs;
      o.push(i[e + 0], i[e + 1]), o.push(i[n + 0], i[n + 1]), o.push(i[r + 0], i[r + 1]);
    },
    addDefaultUV: function() {
      const e = this.object.geometry.uvs;
      e.push(0, 0), e.push(0, 0), e.push(0, 0);
    },
    addUVLine: function(e) {
      const n = this.uvs;
      this.object.geometry.uvs.push(n[e + 0], n[e + 1]);
    },
    addFace: function(e, n, r, i, o, a, s, u, c) {
      const l = this.vertices.length;
      let f = this.parseVertexIndex(e, l), g = this.parseVertexIndex(n, l), d = this.parseVertexIndex(r, l);
      if (this.addVertex(f, g, d), this.addColor(f, g, d), s !== void 0 && s !== "") {
        const y = this.normals.length;
        f = this.parseNormalIndex(s, y), g = this.parseNormalIndex(u, y), d = this.parseNormalIndex(c, y), this.addNormal(f, g, d);
      } else
        this.addFaceNormal(f, g, d);
      if (i !== void 0 && i !== "") {
        const y = this.uvs.length;
        f = this.parseUVIndex(i, y), g = this.parseUVIndex(o, y), d = this.parseUVIndex(a, y), this.addUV(f, g, d), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(e) {
      this.object.geometry.type = "Points";
      const n = this.vertices.length;
      for (let r = 0, i = e.length; r < i; r++) {
        const o = this.parseVertexIndex(e[r], n);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(e, n) {
      this.object.geometry.type = "Line";
      const r = this.vertices.length, i = this.uvs.length;
      for (let o = 0, a = e.length; o < a; o++)
        this.addVertexLine(this.parseVertexIndex(e[o], r));
      for (let o = 0, a = n.length; o < a; o++)
        this.addUVLine(this.parseUVIndex(n[o], i));
    }
  };
  return t.startObject("", !1), t;
}
class Ud extends Au {
  constructor(e) {
    super(e), this.materials = null;
  }
  load(e, n, r, i) {
    const o = this, a = new bu(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(s) {
      try {
        n(o.parse(s));
      } catch (u) {
        i ? i(u) : console.error(u), o.manager.itemError(e);
      }
    }, r, i);
  }
  setMaterials(e) {
    return this.materials = e, this;
  }
  parse(e) {
    const n = new Wd();
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
    const r = e.split(`
`);
    let i = [];
    for (let s = 0, u = r.length; s < u; s++) {
      const c = r[s].trimStart();
      if (c.length === 0)
        continue;
      const l = c.charAt(0);
      if (l !== "#")
        if (l === "v") {
          const f = c.split(Cs);
          switch (f[0]) {
            case "v":
              n.vertices.push(
                parseFloat(f[1]),
                parseFloat(f[2]),
                parseFloat(f[3])
              ), f.length >= 7 ? (Lt.setRGB(
                parseFloat(f[4]),
                parseFloat(f[5]),
                parseFloat(f[6]),
                yu
              ), n.colors.push(Lt.r, Lt.g, Lt.b)) : n.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              n.normals.push(
                parseFloat(f[1]),
                parseFloat(f[2]),
                parseFloat(f[3])
              );
              break;
            case "vt":
              n.uvs.push(
                parseFloat(f[1]),
                parseFloat(f[2])
              );
              break;
          }
        } else if (l === "f") {
          const g = c.slice(1).trim().split(Cs), d = [];
          for (let p = 0, b = g.length; p < b; p++) {
            const m = g[p];
            if (m.length > 0) {
              const h = m.split("/");
              d.push(h);
            }
          }
          const y = d[0];
          for (let p = 1, b = d.length - 1; p < b; p++) {
            const m = d[p], h = d[p + 1];
            n.addFace(
              y[0],
              m[0],
              h[0],
              y[1],
              m[1],
              h[1],
              y[2],
              m[2],
              h[2]
            );
          }
        } else if (l === "l") {
          const f = c.substring(1).trim().split(" ");
          let g = [];
          const d = [];
          if (c.indexOf("/") === -1)
            g = f;
          else
            for (let y = 0, p = f.length; y < p; y++) {
              const b = f[y].split("/");
              b[0] !== "" && g.push(b[0]), b[1] !== "" && d.push(b[1]);
            }
          n.addLineGeometry(g, d);
        } else if (l === "p") {
          const g = c.slice(1).trim().split(" ");
          n.addPointGeometry(g);
        } else if ((i = Jd.exec(c)) !== null) {
          const f = (" " + i[0].slice(1).trim()).slice(1);
          n.startObject(f);
        } else if (Zd.test(c))
          n.object.startMaterial(c.substring(7).trim(), n.materialLibraries);
        else if (Vd.test(c))
          n.materialLibraries.push(c.substring(7).trim());
        else if (Xd.test(c))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (l === "s") {
          if (i = c.split(" "), i.length > 1) {
            const g = i[1].trim().toLowerCase();
            n.object.smooth = g !== "0" && g !== "off";
          } else
            n.object.smooth = !0;
          const f = n.object.currentMaterial();
          f && (f.smooth = n.object.smooth);
        } else {
          if (c === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + c + '"');
        }
    }
    n.finalize();
    const o = new wu();
    if (o.materialLibraries = [].concat(n.materialLibraries), !(n.objects.length === 1 && n.objects[0].geometry.vertices.length === 0) === !0)
      for (let s = 0, u = n.objects.length; s < u; s++) {
        const c = n.objects[s], l = c.geometry, f = c.materials, g = l.type === "Line", d = l.type === "Points";
        let y = !1;
        if (l.vertices.length === 0)
          continue;
        const p = new xi();
        p.setAttribute("position", new Ue(l.vertices, 3)), l.normals.length > 0 && p.setAttribute("normal", new Ue(l.normals, 3)), l.colors.length > 0 && (y = !0, p.setAttribute("color", new Ue(l.colors, 3))), l.hasUVIndices === !0 && p.setAttribute("uv", new Ue(l.uvs, 2));
        const b = [];
        for (let h = 0, v = f.length; h < v; h++) {
          const A = f[h], x = A.name + "_" + A.smooth + "_" + y;
          let w = n.materials[x];
          if (this.materials !== null) {
            if (w = this.materials.create(A.name), g && w && !(w instanceof Pn)) {
              const C = new Pn();
              Pi.prototype.copy.call(C, w), C.color.copy(w.color), w = C;
            } else if (d && w && !(w instanceof jt)) {
              const C = new jt({ size: 10, sizeAttenuation: !1 });
              Pi.prototype.copy.call(C, w), C.color.copy(w.color), C.map = w.map, w = C;
            }
          }
          w === void 0 && (g ? w = new Pn() : d ? w = new jt({ size: 1, sizeAttenuation: !1 }) : w = new xu(), w.name = A.name, w.flatShading = !A.smooth, w.vertexColors = y, n.materials[x] = w), b.push(w);
        }
        let m;
        if (b.length > 1) {
          for (let h = 0, v = f.length; h < v; h++) {
            const A = f[h];
            p.addGroup(A.groupStart, A.groupCount, h);
          }
          g ? m = new Ii(p, b) : d ? m = new In(p, b) : m = new Oe(p, b);
        } else
          g ? m = new Ii(p, b[0]) : d ? m = new In(p, b[0]) : m = new Oe(p, b[0]);
        m.name = c.name, o.add(m);
      }
    else if (n.vertices.length > 0) {
      const s = new jt({ size: 1, sizeAttenuation: !1 }), u = new xi();
      u.setAttribute("position", new Ue(n.vertices, 3)), n.colors.length > 0 && n.colors[0] !== void 0 && (u.setAttribute("color", new Ue(n.colors, 3)), s.vertexColors = !0);
      const c = new In(u, s);
      o.add(c);
    }
    return o;
  }
}
class Kd extends At {
  constructor() {
    super();
    for (const [e, n] of Object.entries(_o))
      this[e] = _o[e];
    if (this.context = Symbol(), Pu(this.context, this), W(this.context) !== this)
      throw new Error("What the heck");
    this.resizeObserver = new ResizeObserver((e) => {
      li.clear(this.context), Hd(this.context);
    }), this.intersectionObserver = new IntersectionObserver(
      (e) => {
        const n = e[0], { set: r, get: i } = _(this.context, "visible");
        n.isIntersecting ? r(!0) : r(!1), console.log("Intersection observer", i());
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      }
    ), this.onTapHandler = (e) => {
      this.setAttribute("selected", e.detail?.info?.navId), this.focus = e.detail?.info?.navId;
    };
  }
  static get properties() {
    return {
      globalScale: { type: Number, attribute: "global-scale" },
      nodeScale: { type: Number, attribute: "node-scale" },
      edgeFog: { type: Number, attribute: "edge-fog" },
      nodeFog: { type: Number, attribute: "node-fog" },
      edgeScale: { type: Number, attribute: "edge-scale" },
      edgeOvershoot: { type: Number, attribute: "edge-overshoot" },
      edgeFrequency: { type: Number, attribute: "edge-frequency" },
      edgePulseSpeed: { type: Number, attribute: "edge-pulse-speed" },
      edgeWaveSpeed: { type: Number, attribute: "edge-wave-speed" },
      selected: { type: String },
      focus: { type: String, attribute: !1 },
      focusedZoom: { type: Number },
      unfocusedZoom: { type: Number },
      zoomBoundary: { type: Number },
      defaultFogVisibility: {
        type: Number,
        attribute: "default-fog-visibility"
      },
      defaultFogBoundaryClipZ: {
        type: Number,
        attribute: "default-fog-boundary-clip-z"
      },
      nodeShape: {
        type: String,
        attribute: "node-shape"
      },
      nodeGeometryBuffer: {
        attribute: !1
      },
      graphData: {
        attribute: !1
      }
    };
  }
  // set graphData(data) {
  //   setGraphData(this.context, data);
  // }
  // get graphData() {
  //   return getGraphData(this.context);
  // }
  onTap(e) {
    this.onTapHandler = e;
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.context, n = this.shadowRoot, r = document.createElement("style");
    r.textContent = `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      canvas {
        max-width: 100%;
        max-height: fit-content;
        display: block;
        touch-action: none;
        background-color: black 0%;
      }
    `, n.appendChild(r);
    const i = document.createElement("canvas");
    n.appendChild(i), jd(e, i), console.debug("Canvas created and set"), Qd(e), console.debug("Renderer initialized"), pe(e), console.debug("Three.js setup complete"), hd(e), console.debug("Camera interaction set up"), dd(this), console.debug("Selection setup complete"), document.querySelector("html")?.classList.add("loading"), console.debug("Added loading class to HTML"), J(this.context).then((o) => {
      console.debug("Graph data retrieved", o), document.querySelector("html").classList.remove("loading"), console.debug("Removed loading class from HTML"), Sa(this.context), console.debug("Graph animation started"), fi.start(), console.debug("Navigation started");
    }), Iu(this.context), this.resizeObserver.observe(this), this.intersectionObserver.observe(this), this.addEventListener("tap", (o) => {
      o && this.onTapHandler(o);
    });
  }
  get visible() {
    return _(this.context, "visible").get() && this.isVisible();
  }
  disconnectedCallback() {
    this.resizeObserver.unobserve(this), this.intersectionObserver.unobserve(this);
  }
  adoptedCallback() {
  }
  updateCommon(e) {
    for (const [n, r] of e) {
      const i = this[n];
      switch (n) {
        case "graphData":
          Lf(this.context, i), Ko(this.context);
          break;
        case "selected":
          J(this.context).then(({ nodesByNavId: a }) => {
            const s = a[i];
            Bf(this.context, s, !0);
          });
          break;
        case "focus":
          Ko(this.context);
          break;
        case "nodeShape":
          let o = ii(this.nodeShape);
          if (o)
            this._nodeGeometryBuffer = o, Zr.delete(this.context);
          else
            try {
              new Ud().load(this.nodeShape, (s) => {
                this._nodeGeometryBuffer = s?.children[0]?.geometry, Zr.delete(this.context);
              });
            } catch (a) {
              console.warn("Failed to load node shape as an obj url", a);
            }
          break;
      }
    }
  }
  firstUpdated(e) {
    this.updateCommon(e);
  }
  updated(e) {
    this.updateCommon(e);
  }
  getNodeFromEvent(e) {
    return null;
  }
}
function ih(t = "webscape-wanderer") {
  customElements.get(t) || customElements.define(t, Kd);
}
export {
  th as addRandomEdges,
  eh as addRandomNodes,
  nh as dataFromGraph,
  va as makeNavId,
  _d as randomGraphData,
  ih as startWebscapeWanderer
};
//# sourceMappingURL=webscape-wanderer.js.map
