!function () {
    var e = {
        3099: function (e) {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        }, 9670: function (e, t, n) {
            var r = n(111);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        }, 8533: function (e, t, n) {
            "use strict";
            var r = n(2092).forEach, i = n(9341)("forEach");
            e.exports = i ? [].forEach : function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }, 1318: function (e, t, n) {
            var r = n(5656), i = n(7466), s = n(1400), o = function (e) {
                return function (t, n, o) {
                    var a, l = r(t), c = i(l.length), d = s(o, c);
                    if (e && n != n) {
                        for (; c > d;) if ((a = l[d++]) != a) return !0
                    } else for (; c > d; d++) if ((e || d in l) && l[d] === n) return e || d || 0;
                    return !e && -1
                }
            };
            e.exports = {includes: o(!0), indexOf: o(!1)}
        }, 2092: function (e, t, n) {
            var r = n(9974), i = n(8361), s = n(7908), o = n(7466), a = n(5417), l = [].push, c = function (e) {
                var t = 1 == e, n = 2 == e, c = 3 == e, d = 4 == e, u = 6 == e, p = 7 == e, f = 5 == e || u;
                return function (h, m, v, g) {
                    for (var w, y, b = s(h), S = i(b), T = r(m, v, 3), x = o(S.length), E = 0, C = g || a, M = t ? C(h, x) : n || p ? C(h, 0) : void 0; x > E; E++) if ((f || E in S) && (y = T(w = S[E], E, b), e)) if (t) M[E] = y; else if (y) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return w;
                        case 6:
                            return E;
                        case 2:
                            l.call(M, w)
                    } else switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            l.call(M, w)
                    }
                    return u ? -1 : c || d ? d : M
                }
            };
            e.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6),
                filterReject: c(7)
            }
        }, 1194: function (e, t, n) {
            var r = n(7293), i = n(5112), s = n(7392), o = i("species");
            e.exports = function (e) {
                return s >= 51 || !r((function () {
                    var t = [];
                    return (t.constructor = {})[o] = function () {
                        return {foo: 1}
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        }, 9341: function (e, t, n) {
            "use strict";
            var r = n(7293);
            e.exports = function (e, t) {
                var n = [][e];
                return !!n && r((function () {
                    n.call(null, t || function () {
                        throw 1
                    }, 1)
                }))
            }
        }, 7475: function (e, t, n) {
            var r = n(111), i = n(3157), s = n(5112)("species");
            e.exports = function (e) {
                var t;
                return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) ? r(t) && null === (t = t[s]) && (t = void 0) : t = void 0), void 0 === t ? Array : t
            }
        }, 5417: function (e, t, n) {
            var r = n(7475);
            e.exports = function (e, t) {
                return new (r(e))(0 === t ? 0 : t)
            }
        }, 4326: function (e) {
            var t = {}.toString;
            e.exports = function (e) {
                return t.call(e).slice(8, -1)
            }
        }, 9920: function (e, t, n) {
            var r = n(6656), i = n(3887), s = n(1236), o = n(3070);
            e.exports = function (e, t) {
                for (var n = i(t), a = o.f, l = s.f, c = 0; c < n.length; c++) {
                    var d = n[c];
                    r(e, d) || a(e, d, l(t, d))
                }
            }
        }, 8880: function (e, t, n) {
            var r = n(9781), i = n(3070), s = n(9114);
            e.exports = r ? function (e, t, n) {
                return i.f(e, t, s(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        }, 9114: function (e) {
            e.exports = function (e, t) {
                return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
            }
        }, 6135: function (e, t, n) {
            "use strict";
            var r = n(4948), i = n(3070), s = n(9114);
            e.exports = function (e, t, n) {
                var o = r(t);
                o in e ? i.f(e, o, s(0, n)) : e[o] = n
            }
        }, 9781: function (e, t, n) {
            var r = n(7293);
            e.exports = !r((function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        }, 317: function (e, t, n) {
            var r = n(7854), i = n(111), s = r.document, o = i(s) && i(s.createElement);
            e.exports = function (e) {
                return o ? s.createElement(e) : {}
            }
        }, 8324: function (e) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, 8113: function (e, t, n) {
            var r = n(5005);
            e.exports = r("navigator", "userAgent") || ""
        }, 7392: function (e, t, n) {
            var r, i, s = n(7854), o = n(8113), a = s.process, l = s.Deno, c = a && a.versions || l && l.version,
                d = c && c.v8;
            d ? i = (r = d.split("."))[0] < 4 ? 1 : r[0] + r[1] : o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
        }, 748: function (e) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, 2109: function (e, t, n) {
            var r = n(7854), i = n(1236).f, s = n(8880), o = n(1320), a = n(3505), l = n(9920), c = n(4705);
            e.exports = function (e, t) {
                var n, d, u, p, f, h = e.target, m = e.global, v = e.stat;
                if (n = m ? r : v ? r[h] || a(h, {}) : (r[h] || {}).prototype) for (d in t) {
                    if (p = t[d], u = e.noTargetGet ? (f = i(n, d)) && f.value : n[d], !c(m ? d : h + (v ? "." : "#") + d, e.forced) && void 0 !== u) {
                        if (typeof p == typeof u) continue;
                        l(p, u)
                    }
                    (e.sham || u && u.sham) && s(p, "sham", !0), o(n, d, p, e)
                }
            }
        }, 7293: function (e) {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, 7007: function (e, t, n) {
            "use strict";
            n(4916);
            var r = n(1320), i = n(2261), s = n(7293), o = n(5112), a = n(8880), l = o("species"), c = RegExp.prototype;
            e.exports = function (e, t, n, d) {
                var u = o(e), p = !s((function () {
                    var t = {};
                    return t[u] = function () {
                        return 7
                    }, 7 != ""[e](t)
                })), f = p && !s((function () {
                    var t = !1, n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[l] = function () {
                        return n
                    }, n.flags = "", n[u] = /./[u]), n.exec = function () {
                        return t = !0, null
                    }, n[u](""), !t
                }));
                if (!p || !f || n) {
                    var h = /./[u], m = t(u, ""[e], (function (e, t, n, r, s) {
                        var o = t.exec;
                        return o === i || o === c.exec ? p && !s ? {done: !0, value: h.call(t, n, r)} : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {done: !1}
                    }));
                    r(String.prototype, e, m[0]), r(c, u, m[1])
                }
                d && a(c[u], "sham", !0)
            }
        }, 9974: function (e, t, n) {
            var r = n(3099);
            e.exports = function (e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 0:
                        return function () {
                            return e.call(t)
                        };
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function (n, r, i) {
                            return e.call(t, n, r, i)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        }, 5005: function (e, t, n) {
            var r = n(7854), i = function (e) {
                return "function" == typeof e ? e : void 0
            };
            e.exports = function (e, t) {
                return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
            }
        }, 7854: function (e, t, n) {
            var r = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
                return this
            }() || Function("return this")()
        }, 6656: function (e, t, n) {
            var r = n(7908), i = {}.hasOwnProperty;
            e.exports = Object.hasOwn || function (e, t) {
                return i.call(r(e), t)
            }
        }, 3501: function (e) {
            e.exports = {}
        }, 490: function (e, t, n) {
            var r = n(5005);
            e.exports = r("document", "documentElement")
        }, 4664: function (e, t, n) {
            var r = n(9781), i = n(7293), s = n(317);
            e.exports = !r && !i((function () {
                return 7 != Object.defineProperty(s("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 8361: function (e, t, n) {
            var r = n(7293), i = n(4326), s = "".split;
            e.exports = r((function () {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function (e) {
                return "String" == i(e) ? s.call(e, "") : Object(e)
            } : Object
        }, 2788: function (e, t, n) {
            var r = n(5465), i = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
                return i.call(e)
            }), e.exports = r.inspectSource
        }, 9909: function (e, t, n) {
            var r, i, s, o = n(8536), a = n(7854), l = n(111), c = n(8880), d = n(6656), u = n(5465), p = n(6200),
                f = n(3501), h = "Object already initialized", m = a.WeakMap;
            if (o || u.state) {
                var v = u.state || (u.state = new m), g = v.get, w = v.has, y = v.set;
                r = function (e, t) {
                    if (w.call(v, e)) throw new TypeError(h);
                    return t.facade = e, y.call(v, e, t), t
                }, i = function (e) {
                    return g.call(v, e) || {}
                }, s = function (e) {
                    return w.call(v, e)
                }
            } else {
                var b = p("state");
                f[b] = !0, r = function (e, t) {
                    if (d(e, b)) throw new TypeError(h);
                    return t.facade = e, c(e, b, t), t
                }, i = function (e) {
                    return d(e, b) ? e[b] : {}
                }, s = function (e) {
                    return d(e, b)
                }
            }
            e.exports = {
                set: r, get: i, has: s, enforce: function (e) {
                    return s(e) ? i(e) : r(e, {})
                }, getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!l(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        }, 3157: function (e, t, n) {
            var r = n(4326);
            e.exports = Array.isArray || function (e) {
                return "Array" == r(e)
            }
        }, 4705: function (e, t, n) {
            var r = n(7293), i = /#|\.prototype\./, s = function (e, t) {
                var n = a[o(e)];
                return n == c || n != l && ("function" == typeof t ? r(t) : !!t)
            }, o = s.normalize = function (e) {
                return String(e).replace(i, ".").toLowerCase()
            }, a = s.data = {}, l = s.NATIVE = "N", c = s.POLYFILL = "P";
            e.exports = s
        }, 111: function (e) {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, 1913: function (e) {
            e.exports = !1
        }, 2190: function (e, t, n) {
            var r = n(5005), i = n(3307);
            e.exports = i ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                var t = r("Symbol");
                return "function" == typeof t && Object(e) instanceof t
            }
        }, 133: function (e, t, n) {
            var r = n(7392), i = n(7293);
            e.exports = !!Object.getOwnPropertySymbols && !i((function () {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        }, 8536: function (e, t, n) {
            var r = n(7854), i = n(2788), s = r.WeakMap;
            e.exports = "function" == typeof s && /native code/.test(i(s))
        }, 30: function (e, t, n) {
            var r, i = n(9670), s = n(6048), o = n(748), a = n(3501), l = n(490), c = n(317), d = n(6200)("IE_PROTO"),
                u = function () {
                }, p = function (e) {
                    return "<script>" + e + "<\/script>"
                }, f = function (e) {
                    e.write(p("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }, h = function () {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (e) {
                    }
                    h = document.domain && r ? f(r) : function () {
                        var e, t = c("iframe");
                        if (t.style) return t.style.display = "none", l.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F
                    }() || f(r);
                    for (var e = o.length; e--;) delete h.prototype[o[e]];
                    return h()
                };
            a[d] = !0, e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[d] = e) : n = h(), void 0 === t ? n : s(n, t)
            }
        }, 6048: function (e, t, n) {
            var r = n(9781), i = n(3070), s = n(9670), o = n(1956);
            e.exports = r ? Object.defineProperties : function (e, t) {
                s(e);
                for (var n, r = o(t), a = r.length, l = 0; a > l;) i.f(e, n = r[l++], t[n]);
                return e
            }
        }, 3070: function (e, t, n) {
            var r = n(9781), i = n(4664), s = n(9670), o = n(4948), a = Object.defineProperty;
            t.f = r ? a : function (e, t, n) {
                if (s(e), t = o(t), s(n), i) try {
                    return a(e, t, n)
                } catch (e) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        }, 1236: function (e, t, n) {
            var r = n(9781), i = n(5296), s = n(9114), o = n(5656), a = n(4948), l = n(6656), c = n(4664),
                d = Object.getOwnPropertyDescriptor;
            t.f = r ? d : function (e, t) {
                if (e = o(e), t = a(t), c) try {
                    return d(e, t)
                } catch (e) {
                }
                if (l(e, t)) return s(!i.f.call(e, t), e[t])
            }
        }, 8006: function (e, t, n) {
            var r = n(6324), i = n(748).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return r(e, i)
            }
        }, 5181: function (e, t) {
            t.f = Object.getOwnPropertySymbols
        }, 6324: function (e, t, n) {
            var r = n(6656), i = n(5656), s = n(1318).indexOf, o = n(3501);
            e.exports = function (e, t) {
                var n, a = i(e), l = 0, c = [];
                for (n in a) !r(o, n) && r(a, n) && c.push(n);
                for (; t.length > l;) r(a, n = t[l++]) && (~s(c, n) || c.push(n));
                return c
            }
        }, 1956: function (e, t, n) {
            var r = n(6324), i = n(748);
            e.exports = Object.keys || function (e) {
                return r(e, i)
            }
        }, 5296: function (e, t) {
            "use strict";
            var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, i = r && !n.call({1: 2}, 1);
            t.f = i ? function (e) {
                var t = r(this, e);
                return !!t && t.enumerable
            } : n
        }, 2140: function (e, t, n) {
            var r = n(111);
            e.exports = function (e, t) {
                var n, i;
                if ("string" === t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
                if ("string" !== t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        }, 3887: function (e, t, n) {
            var r = n(5005), i = n(8006), s = n(5181), o = n(9670);
            e.exports = r("Reflect", "ownKeys") || function (e) {
                var t = i.f(o(e)), n = s.f;
                return n ? t.concat(n(e)) : t
            }
        }, 1320: function (e, t, n) {
            var r = n(7854), i = n(8880), s = n(6656), o = n(3505), a = n(2788), l = n(9909), c = l.get, d = l.enforce,
                u = String(String).split("String");
            (e.exports = function (e, t, n, a) {
                var l, c = !!a && !!a.unsafe, p = !!a && !!a.enumerable, f = !!a && !!a.noTargetGet;
                "function" == typeof n && ("string" != typeof t || s(n, "name") || i(n, "name", t), (l = d(n)).source || (l.source = u.join("string" == typeof t ? t : ""))), e !== r ? (c ? !f && e[t] && (p = !0) : delete e[t], p ? e[t] = n : i(e, t, n)) : p ? e[t] = n : o(t, n)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && c(this).source || a(this)
            }))
        }, 7651: function (e, t, n) {
            var r = n(4326), i = n(2261);
            e.exports = function (e, t) {
                var n = e.exec;
                if ("function" == typeof n) {
                    var s = n.call(e, t);
                    if ("object" != typeof s) throw TypeError("RegExp exec method returned something other than an Object or null");
                    return s
                }
                if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                return i.call(e, t)
            }
        }, 2261: function (e, t, n) {
            "use strict";
            var r, i, s = n(1340), o = n(7066), a = n(2999), l = n(2309), c = n(30), d = n(9909).get, u = n(9441),
                p = n(8173), f = RegExp.prototype.exec, h = l("native-string-replace", String.prototype.replace), m = f,
                v = (r = /a/, i = /b*/g, f.call(r, "a"), f.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                g = a.UNSUPPORTED_Y || a.BROKEN_CARET, w = void 0 !== /()??/.exec("")[1];
            (v || w || g || u || p) && (m = function (e) {
                var t, n, r, i, a, l, u, p = this, y = d(p), b = s(e), S = y.raw;
                if (S) return S.lastIndex = p.lastIndex, t = m.call(S, b), p.lastIndex = S.lastIndex, t;
                var T = y.groups, x = g && p.sticky, E = o.call(p), C = p.source, M = 0, P = b;
                if (x && (-1 === (E = E.replace("y", "")).indexOf("g") && (E += "g"), P = b.slice(p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== b.charAt(p.lastIndex - 1)) && (C = "(?: " + C + ")", P = " " + P, M++), n = new RegExp("^(?:" + C + ")", E)), w && (n = new RegExp("^" + C + "$(?!\\s)", E)), v && (r = p.lastIndex), i = f.call(x ? n : p, P), x ? i ? (i.input = i.input.slice(M), i[0] = i[0].slice(M), i.index = p.lastIndex, p.lastIndex += i[0].length) : p.lastIndex = 0 : v && i && (p.lastIndex = p.global ? i.index + i[0].length : r), w && i && i.length > 1 && h.call(i[0], n, (function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0)
                })), i && T) for (i.groups = l = c(null), a = 0; a < T.length; a++) l[(u = T[a])[0]] = i[u[1]];
                return i
            }), e.exports = m
        }, 7066: function (e, t, n) {
            "use strict";
            var r = n(9670);
            e.exports = function () {
                var e = r(this), t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        }, 2999: function (e, t, n) {
            var r = n(7293), i = function (e, t) {
                return RegExp(e, t)
            };
            t.UNSUPPORTED_Y = r((function () {
                var e = i("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })), t.BROKEN_CARET = r((function () {
                var e = i("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        }, 9441: function (e, t, n) {
            var r = n(7293);
            e.exports = r((function () {
                var e = RegExp(".", "string".charAt(0));
                return !(e.dotAll && e.exec("\n") && "s" === e.flags)
            }))
        }, 8173: function (e, t, n) {
            var r = n(7293);
            e.exports = r((function () {
                var e = RegExp("(?<a>b)", "string".charAt(5));
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }))
        }, 4488: function (e) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            }
        }, 1150: function (e) {
            e.exports = Object.is || function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
        }, 3505: function (e, t, n) {
            var r = n(7854);
            e.exports = function (e, t) {
                try {
                    Object.defineProperty(r, e, {value: t, configurable: !0, writable: !0})
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        }, 6200: function (e, t, n) {
            var r = n(2309), i = n(9711), s = r("keys");
            e.exports = function (e) {
                return s[e] || (s[e] = i(e))
            }
        }, 5465: function (e, t, n) {
            var r = n(7854), i = n(3505), s = "__core-js_shared__", o = r[s] || i(s, {});
            e.exports = o
        }, 2309: function (e, t, n) {
            var r = n(1913), i = n(5465);
            (e.exports = function (e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.16.1",
                mode: r ? "pure" : "global",
                copyright: "?? 2021 Denis Pushkarev (zloirock.ru)"
            })
        }, 1400: function (e, t, n) {
            var r = n(9958), i = Math.max, s = Math.min;
            e.exports = function (e, t) {
                var n = r(e);
                return n < 0 ? i(n + t, 0) : s(n, t)
            }
        }, 5656: function (e, t, n) {
            var r = n(8361), i = n(4488);
            e.exports = function (e) {
                return r(i(e))
            }
        }, 9958: function (e) {
            var t = Math.ceil, n = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
            }
        }, 7466: function (e, t, n) {
            var r = n(9958), i = Math.min;
            e.exports = function (e) {
                return e > 0 ? i(r(e), 9007199254740991) : 0
            }
        }, 7908: function (e, t, n) {
            var r = n(4488);
            e.exports = function (e) {
                return Object(r(e))
            }
        }, 7593: function (e, t, n) {
            var r = n(111), i = n(2190), s = n(2140), o = n(5112)("toPrimitive");
            e.exports = function (e, t) {
                if (!r(e) || i(e)) return e;
                var n, a = e[o];
                if (void 0 !== a) {
                    if (void 0 === t && (t = "default"), n = a.call(e, t), !r(n) || i(n)) return n;
                    throw TypeError("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), s(e, t)
            }
        }, 4948: function (e, t, n) {
            var r = n(7593), i = n(2190);
            e.exports = function (e) {
                var t = r(e, "string");
                return i(t) ? t : String(t)
            }
        }, 1340: function (e, t, n) {
            var r = n(2190);
            e.exports = function (e) {
                if (r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                return String(e)
            }
        }, 9711: function (e) {
            var t = 0, n = Math.random();
            e.exports = function (e) {
                return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36)
            }
        }, 3307: function (e, t, n) {
            var r = n(133);
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, 5112: function (e, t, n) {
            var r = n(7854), i = n(2309), s = n(6656), o = n(9711), a = n(133), l = n(3307), c = i("wks"), d = r.Symbol,
                u = l ? d : d && d.withoutSetter || o;
            e.exports = function (e) {
                return s(c, e) && (a || "string" == typeof c[e]) || (a && s(d, e) ? c[e] = d[e] : c[e] = u("Symbol." + e)), c[e]
            }
        }, 7327: function (e, t, n) {
            "use strict";
            var r = n(2109), i = n(2092).filter;
            r({target: "Array", proto: !0, forced: !n(1194)("filter")}, {
                filter: function (e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, 7042: function (e, t, n) {
            "use strict";
            var r = n(2109), i = n(111), s = n(3157), o = n(1400), a = n(7466), l = n(5656), c = n(6135), d = n(5112),
                u = n(1194)("slice"), p = d("species"), f = [].slice, h = Math.max;
            r({target: "Array", proto: !0, forced: !u}, {
                slice: function (e, t) {
                    var n, r, d, u = l(this), m = a(u.length), v = o(e, m), g = o(void 0 === t ? m : t, m);
                    if (s(u) && ("function" != typeof (n = u.constructor) || n !== Array && !s(n.prototype) ? i(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return f.call(u, v, g);
                    for (r = new (void 0 === n ? Array : n)(h(g - v, 0)), d = 0; v < g; v++, d++) v in u && c(r, d, u[v]);
                    return r.length = d, r
                }
            })
        }, 4916: function (e, t, n) {
            "use strict";
            var r = n(2109), i = n(2261);
            r({target: "RegExp", proto: !0, forced: /./.exec !== i}, {exec: i})
        }, 4765: function (e, t, n) {
            "use strict";
            var r = n(7007), i = n(9670), s = n(4488), o = n(1150), a = n(1340), l = n(7651);
            r("search", (function (e, t, n) {
                return [function (t) {
                    var n = s(this), r = null == t ? void 0 : t[e];
                    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](a(n))
                }, function (e) {
                    var r = i(this), s = a(e), c = n(t, r, s);
                    if (c.done) return c.value;
                    var d = r.lastIndex;
                    o(d, 0) || (r.lastIndex = 0);
                    var u = l(r, s);
                    return o(r.lastIndex, d) || (r.lastIndex = d), null === u ? -1 : u.index
                }]
            }))
        }, 4747: function (e, t, n) {
            var r = n(7854), i = n(8324), s = n(8533), o = n(8880);
            for (var a in i) {
                var l = r[a], c = l && l.prototype;
                if (c && c.forEach !== s) try {
                    o(c, "forEach", s)
                } catch (e) {
                    c.forEach = s
                }
            }
        }
    }, t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var s = t[r] = {exports: {}};
        return e[r](s, s.exports, n), s.exports
    }

    n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), function () {
        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(n = {}, r = {}) {
            Object.keys(r).forEach((i => {
                void 0 === n[i] ? n[i] = r[i] : e(r[i]) && e(n[i]) && Object.keys(r[i]).length > 0 && t(n[i], r[i])
            }))
        }

        n(7327), n(7042), n(4916), n(4765), n(4747);
        const r = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {
                }
            }),
            createElement: () => ({
                children: [], childNodes: [], style: {}, setAttribute() {
                }, getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function i() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, r), e
        }

        const s = {
            document: r,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle: () => ({getPropertyValue: () => ""}),
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function o() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, s), e
        }

        class a extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t, set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function l(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...l(e)) : t.push(e)
            })), t
        }

        function c(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function d(e, t) {
            const n = o(), r = i();
            let s = [];
            if (!t && e instanceof a) return e;
            if (!e) return new a(s);
            if ("string" == typeof e) {
                const n = e.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    let e = "div";
                    0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                    const t = r.createElement(e);
                    t.innerHTML = n;
                    for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e])
                } else s = function (e, t) {
                    if ("string" != typeof e) return [e];
                    const n = [], r = t.querySelectorAll(e);
                    for (let e = 0; e < r.length; e += 1) n.push(r[e]);
                    return n
                }(e.trim(), t || r)
            } else if (e.nodeType || e === n || e === r) s.push(e); else if (Array.isArray(e)) {
                if (e instanceof a) return e;
                s = e
            }
            return new a(function (e) {
                const t = [];
                for (let n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(s))
        }

        d.fn = a.prototype;
        const u = "resize scroll".split(" ");

        function p(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) u.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }

        p("click"), p("blur"), p("focus"), p("focusin"), p("focusout"), p("keyup"), p("keydown"), p("keypress"), p("submit"), p("change"), p("mousedown"), p("mousemove"), p("mouseup"), p("mouseenter"), p("mouseleave"), p("mouseout"), p("mouseover"), p("touchstart"), p("touchend"), p("touchmove"), p("resize"), p("scroll");
        const f = {
            addClass: function (...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            }, removeClass: function (...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            }, hasClass: function (...e) {
                const t = l(e.map((e => e.split(" "))));
                return c(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            }, toggleClass: function (...e) {
                const t = l(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            }, attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(e, t); else for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
                return this
            }, removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            }, transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            }, transition: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            }, on: function (...e) {
                let [t, n, r, i] = e;

                function s(e) {
                    const t = e.target;
                    if (!t) return;
                    const i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), d(t).is(n)) r.apply(t, i); else {
                        const e = d(t).parents();
                        for (let t = 0; t < e.length; t += 1) d(e[t]).is(n) && r.apply(e[t], i)
                    }
                }

                function o(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                }

                "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
                const a = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (n) for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: s
                        }), t.addEventListener(e, s, i)
                    } else for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: r,
                            proxyListener: o
                        }), t.addEventListener(e, o, i)
                    }
                }
                return this
            }, off: function (...e) {
                let [t, n, r, i] = e;
                "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
                const s = t.split(" ");
                for (let e = 0; e < s.length; e += 1) {
                    const t = s[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const s = this[e];
                        let o;
                        if (!n && s.dom7Listeners ? o = s.dom7Listeners[t] : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]), o && o.length) for (let e = o.length - 1; e >= 0; e -= 1) {
                            const n = o[e];
                            r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (s.removeEventListener(t, n.proxyListener, i), o.splice(e, 1)) : r || (s.removeEventListener(t, n.proxyListener, i), o.splice(e, 1))
                        }
                    }
                }
                return this
            }, trigger: function (...e) {
                const t = o(), n = e[0].split(" "), r = e[1];
                for (let i = 0; i < n.length; i += 1) {
                    const s = n[i];
                    for (let n = 0; n < this.length; n += 1) {
                        const i = this[n];
                        if (t.CustomEvent) {
                            const n = new t.CustomEvent(s, {detail: r, bubbles: !0, cancelable: !0});
                            i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
                        }
                    }
                }
                return this
            }, transitionEnd: function (e) {
                const t = this;
                return e && t.on("transitionend", (function n(r) {
                    r.target === this && (e.call(this, r), t.off("transitionend", n))
                })), this
            }, outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            }, outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            }, styles: function () {
                const e = o();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            }, offset: function () {
                if (this.length > 0) {
                    const e = o(), t = i(), n = this[0], r = n.getBoundingClientRect(), s = t.body,
                        a = n.clientTop || s.clientTop || 0, l = n.clientLeft || s.clientLeft || 0,
                        c = n === e ? e.scrollY : n.scrollTop, d = n === e ? e.scrollX : n.scrollLeft;
                    return {top: r.top + c - a, left: r.left + d - l}
                }
                return null
            }, css: function (e, t) {
                const n = o();
                let r;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (r = 0; r < this.length; r += 1) for (const t in e) this[r].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
                    return this
                }
                return this
            }, each: function (e) {
                return e ? (this.forEach(((t, n) => {
                    e.apply(t, [t, n])
                })), this) : this
            }, html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            }, text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            }, is: function (e) {
                const t = o(), n = i(), r = this[0];
                let s, l;
                if (!r || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (r.matches) return r.matches(e);
                    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                    if (r.msMatchesSelector) return r.msMatchesSelector(e);
                    for (s = d(e), l = 0; l < s.length; l += 1) if (s[l] === r) return !0;
                    return !1
                }
                if (e === n) return r === n;
                if (e === t) return r === t;
                if (e.nodeType || e instanceof a) {
                    for (s = e.nodeType ? [e] : e, l = 0; l < s.length; l += 1) if (s[l] === r) return !0;
                    return !1
                }
                return !1
            }, index: function () {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            }, eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return d([]);
                if (e < 0) {
                    const n = t + e;
                    return d(n < 0 ? [] : [this[n]])
                }
                return d([this[e]])
            }, append: function (...e) {
                let t;
                const n = i();
                for (let r = 0; r < e.length; r += 1) {
                    t = e[r];
                    for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                        const r = n.createElement("div");
                        for (r.innerHTML = t; r.firstChild;) this[e].appendChild(r.firstChild)
                    } else if (t instanceof a) for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]); else this[e].appendChild(t)
                }
                return this
            }, prepend: function (e) {
                const t = i();
                let n, r;
                for (n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                    const i = t.createElement("div");
                    for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                } else if (e instanceof a) for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]); else this[n].insertBefore(e, this[n].childNodes[0]);
                return this
            }, next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
            }, nextAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return d([]);
                for (; n.nextElementSibling;) {
                    const r = n.nextElementSibling;
                    e ? d(r).is(e) && t.push(r) : t.push(r), n = r
                }
                return d(t)
            }, prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
                }
                return d([])
            }, prevAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return d([]);
                for (; n.previousElementSibling;) {
                    const r = n.previousElementSibling;
                    e ? d(r).is(e) && t.push(r) : t.push(r), n = r
                }
                return d(t)
            }, parent: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                return d(t)
            }, parents: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    let r = this[n].parentNode;
                    for (; r;) e ? d(r).is(e) && t.push(r) : t.push(r), r = r.parentNode
                }
                return d(t)
            }, closest: function (e) {
                let t = this;
                return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            }, find: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const r = this[n].querySelectorAll(e);
                    for (let e = 0; e < r.length; e += 1) t.push(r[e])
                }
                return d(t)
            }, children: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const r = this[n].children;
                    for (let n = 0; n < r.length; n += 1) e && !d(r[n]).is(e) || t.push(r[n])
                }
                return d(t)
            }, filter: function (e) {
                return d(c(this, e))
            }, remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(f).forEach((e => {
            Object.defineProperty(d.fn, e, {value: f[e], writable: !0})
        }));
        var h = d;

        function m(e, t = 0) {
            return setTimeout(e, t)
        }

        function v() {
            return Date.now()
        }

        function g(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function w(...e) {
            const t = Object(e[0]), n = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < e.length; i += 1) {
                const s = e[i];
                if (null != s && (r = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
                    const e = Object.keys(Object(s)).filter((e => n.indexOf(e) < 0));
                    for (let n = 0, r = e.length; n < r; n += 1) {
                        const r = e[n], i = Object.getOwnPropertyDescriptor(s, r);
                        void 0 !== i && i.enumerable && (g(t[r]) && g(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : w(t[r], s[r]) : !g(t[r]) && g(s[r]) ? (t[r] = {}, s[r].__swiper__ ? t[r] = s[r] : w(t[r], s[r])) : t[r] = s[r])
                    }
                }
            }
            var r;
            return t
        }

        function y(e, t, n) {
            e.style.setProperty(t, n)
        }

        function b({swiper: e, targetPosition: t, side: n}) {
            const r = o(), i = -e.translate;
            let s, a = null;
            const l = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
            const c = t > i ? "next" : "prev", d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    s = (new Date).getTime(), null === a && (a = s);
                    const o = Math.max(Math.min((s - a) / l, 1), 0), c = .5 - Math.cos(o * Math.PI) / 2;
                    let p = i + c * (t - i);
                    if (d(p, t) && (p = t), e.wrapperEl.scrollTo({[n]: p}), d(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[n]: p})
                    })), void r.cancelAnimationFrame(e.cssModeFrameID);
                    e.cssModeFrameID = r.requestAnimationFrame(u)
                };
            u()
        }

        let S, T, x;

        function E() {
            return S || (S = function () {
                const e = o(), t = i();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function () {
                        let t = !1;
                        try {
                            const n = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, n)
                        } catch (e) {
                        }
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), S
        }

        var C = {
            on(e, t, n) {
                const r = this;
                if ("function" != typeof t) return r;
                const i = n ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                })), r
            }, once(e, t, n) {
                const r = this;
                if ("function" != typeof t) return r;

                function i(...n) {
                    r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, n)
                }

                return i.__emitterProxy = t, r.on(e, i, n)
            }, onAny(e, t) {
                const n = this;
                if ("function" != typeof e) return n;
                const r = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
            }, offAny(e) {
                const t = this;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            }, off(e, t) {
                const n = this;
                return n.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, i) => {
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                    }))
                })), n) : n
            }, emit(...e) {
                const t = this;
                if (!t.eventsListeners) return t;
                let n, r, i;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], r = e.slice(1, e.length), i = t) : (n = e[0].events, r = e[0].data, i = e[0].context || t), r.unshift(i), (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                        t.apply(i, [e, ...r])
                    })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                        e.apply(i, r)
                    }))
                })), t
            }
        };

        function M({swiper: e, runCallbacks: t, direction: n, step: r}) {
            const {activeIndex: i, previousIndex: s} = e;
            let o = n;
            if (o || (o = i > s ? "next" : i < s ? "prev" : "reset"), e.emit(`transition${r}`), t && i !== s) {
                if ("reset" === o) return void e.emit(`slideResetTransition${r}`);
                e.emit(`slideChangeTransition${r}`), "next" === o ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
            }
        }

        function P(e) {
            const t = this, n = i(), r = o(), s = t.touchEventsData, {params: a, touches: l, enabled: c} = t;
            if (!c) return;
            if (t.animating && a.preventInteractionOnTransition) return;
            !t.animating && a.cssMode && a.loop && t.loopFix();
            let d = e;
            d.originalEvent && (d = d.originalEvent);
            let u = h(d.target);
            if ("wrapper" === a.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
            if (s.isTouchEvent = "touchstart" === d.type, !s.isTouchEvent && "which" in d && 3 === d.which) return;
            if (!s.isTouchEvent && "button" in d && d.button > 0) return;
            if (s.isTouched && s.isMoved) return;
            a.noSwipingClass && "" !== a.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (u = h(e.path[0]));
            const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                f = !(!d.target || !d.target.shadowRoot);
            if (a.noSwiping && (f ? function (e, t = this) {
                return function t(n) {
                    return n && n !== i() && n !== o() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                }(t)
            }(p, d.target) : u.closest(p)[0])) return void (t.allowClick = !0);
            if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
            l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
            const m = l.currentX, g = l.currentY, w = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                y = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
            if (w && (m <= y || m >= r.innerWidth - y)) {
                if ("prevent" !== w) return;
                e.preventDefault()
            }
            if (Object.assign(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = m, l.startY = g, s.touchStartTime = v(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
                let e = !0;
                u.is(s.focusableElements) && (e = !1), n.activeElement && h(n.activeElement).is(s.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
                const r = e && t.allowTouchMove && a.touchStartPreventDefault;
                !a.touchStartForcePreventDefault && !r || u[0].isContentEditable || d.preventDefault()
            }
            t.emit("touchStart", d)
        }

        function L(e) {
            const t = i(), n = this, r = n.touchEventsData, {params: s, touches: o, rtlTranslate: a, enabled: l} = n;
            if (!l) return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent), !r.isTouched) return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
            if (r.isTouchEvent && "touchmove" !== c.type) return;
            const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                u = "touchmove" === c.type ? d.pageX : c.pageX, p = "touchmove" === c.type ? d.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return o.startX = u, void (o.startY = p);
            if (!n.allowTouchMove) return n.allowClick = !1, void (r.isTouched && (Object.assign(o, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p
            }), r.touchStartTime = v()));
            if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
                if (p < o.startY && n.translate <= n.maxTranslate() || p > o.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
            } else if (u < o.startX && n.translate <= n.maxTranslate() || u > o.startX && n.translate >= n.minTranslate()) return;
            if (r.isTouchEvent && t.activeElement && c.target === t.activeElement && h(c.target).is(r.focusableElements)) return r.isMoved = !0, void (n.allowClick = !1);
            if (r.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
            o.currentX = u, o.currentY = p;
            const f = o.currentX - o.startX, m = o.currentY - o.startY;
            if (n.params.threshold && Math.sqrt(f ** 2 + m ** 2) < n.params.threshold) return;
            if (void 0 === r.isScrolling) {
                let e;
                n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
            }
            if (r.isScrolling && n.emit("touchMoveOpposite", c), void 0 === r.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling) return void (r.isTouched = !1);
            if (!r.startMoving) return;
            n.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), r.isMoved || (s.loop && !s.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), r.isMoved = !0;
            let g = n.isHorizontal() ? f : m;
            o.diff = g, g *= s.touchRatio, a && (g = -g), n.swipeDirection = g > 0 ? "prev" : "next", r.currentTranslate = g + r.startTranslate;
            let w = !0, y = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (y = 0), g > 0 && r.currentTranslate > n.minTranslate() ? (w = !1, s.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + g) ** y)) : g < 0 && r.currentTranslate < n.maxTranslate() && (w = !1, s.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - g) ** y)), w && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), s.threshold > 0) {
                if (!(Math.abs(g) > s.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void (o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
            }
            s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
        }

        function O(e) {
            const t = this, n = t.touchEventsData, {
                params: r,
                touches: i,
                rtlTranslate: s,
                slidesGrid: o,
                enabled: a
            } = t;
            if (!a) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
            r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = v(), d = c - n.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (n.lastClickTime = v(), m((() => {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
            let u;
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = r.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, r.cssMode) return;
            if (t.params.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: u});
            let p = 0, f = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== o[e + t] ? u >= o[e] && u < o[e + t] && (p = e, f = o[e + t] - o[e]) : u >= o[e] && (p = e, f = o[o.length - 1] - o[o.length - 2])
            }
            const h = (u - o[p]) / f, g = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (d > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (h >= r.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)), "prev" === t.swipeDirection && (h > 1 - r.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p))
            } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(p + g), "prev" === t.swipeDirection && t.slideTo(p)) : l.target === t.navigation.nextEl ? t.slideTo(p + g) : t.slideTo(p)
            }
        }

        function k() {
            const e = this, {params: t, el: n} = e;
            if (n && 0 === n.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: r, allowSlidePrev: i, snapGrid: s} = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }

        function A(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function I() {
            const e = this, {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
            if (!r) return;
            let i;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const s = e.maxTranslate() - e.minTranslate();
            i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        let $ = !1;

        function _() {
        }

        const z = (e, t) => {
            const n = i(), {params: r, touchEvents: s, el: o, wrapperEl: a, device: l, support: c} = e, d = !!r.nested,
                u = "on" === t ? "addEventListener" : "removeEventListener", p = t;
            if (c.touch) {
                const t = !("touchstart" !== s.start || !c.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o[u](s.start, e.onTouchStart, t), o[u](s.move, e.onTouchMove, c.passiveListener ? {
                    passive: !1,
                    capture: d
                } : d), o[u](s.end, e.onTouchEnd, t), s.cancel && o[u](s.cancel, e.onTouchEnd, t)
            } else o[u](s.start, e.onTouchStart, !1), n[u](s.move, e.onTouchMove, d), n[u](s.end, e.onTouchEnd, !1);
            (r.preventClicks || r.preventClicksPropagation) && o[u]("click", e.onClick, !0), r.cssMode && a[u]("scroll", e.onScroll), r.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[p]("observerUpdate", k, !0)
        }, D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var G = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function j(e, t) {
            return function (n = {}) {
                const r = Object.keys(n)[0], i = n[r];
                "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {auto: !0}), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {enabled: !0}), "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {enabled: !1}), w(t, n)) : w(t, n)) : w(t, n)
            }
        }

        const N = {
            eventsEmitter: C, update: {
                updateSize: function () {
                    const e = this;
                    let t, n;
                    const r = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                }, updateSlides: function () {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function n(e, n) {
                        return parseFloat(e.getPropertyValue(t(n)) || 0)
                    }

                    const r = e.params, {$wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a} = e,
                        l = e.virtual && r.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                        d = i.children(`.${e.params.slideClass}`), u = l ? e.virtual.slides.length : d.length;
                    let p = [];
                    const f = [], h = [];
                    let m = r.slidesOffsetBefore;
                    "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
                    let v = r.slidesOffsetAfter;
                    "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
                    const g = e.snapGrid.length, w = e.slidesGrid.length;
                    let b = r.spaceBetween, S = -m, T = 0, x = 0;
                    if (void 0 === s) return;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), e.virtualSize = -b, o ? d.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), r.centeredSlides && r.cssMode && (y(e.wrapperEl, "--swiper-centered-offset-before", ""), y(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const E = r.grid && r.grid.rows > 1 && e.grid;
                    let C;
                    E && e.grid.initSlides(u);
                    const M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < u; i += 1) {
                        C = 0;
                        const o = d.eq(i);
                        if (E && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display")) {
                            if ("auto" === r.slidesPerView) {
                                M && (d[i].style[t("width")] = "");
                                const s = getComputedStyle(o[0]), a = o[0].style.transform,
                                    l = o[0].style.webkitTransform;
                                if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0); else {
                                    const e = n(s, "width"), t = n(s, "padding-left"), r = n(s, "padding-right"),
                                        i = n(s, "margin-left"), a = n(s, "margin-right"),
                                        l = s.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) C = e + i + a; else {
                                        const {clientWidth: n, offsetWidth: s} = o[0];
                                        C = e + t + r + i + a + (s - n)
                                    }
                                }
                                a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
                            } else C = (s - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), d[i] && (d[i].style[t("width")] = `${C}px`);
                            d[i] && (d[i].swiperSlideSize = C), h.push(C), r.centeredSlides ? (S = S + C / 2 + T / 2 + b, 0 === T && 0 !== i && (S = S - s / 2 - b), 0 === i && (S = S - s / 2 - b), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), x % r.slidesPerGroup == 0 && p.push(S), f.push(S)) : (r.roundLengths && (S = Math.floor(S)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && p.push(S), f.push(S), S = S + C + b), e.virtualSize += C + b, T = C, x += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + v, o && a && ("slide" === r.effect || "coverflow" === r.effect) && i.css({width: `${e.virtualSize + r.spaceBetween}px`}), r.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + r.spaceBetween}px`}), E && e.grid.updateWrapperSize(C, p, t), !r.centeredSlides) {
                        const t = [];
                        for (let n = 0; n < p.length; n += 1) {
                            let i = p[n];
                            r.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - s && t.push(i)
                        }
                        p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
                        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                        d.filter(((e, t) => !r.cssMode || t !== d.length - 1)).css({[n]: `${b}px`})
                    }
                    if (r.centeredSlides && r.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (r.spaceBetween ? r.spaceBetween : 0)
                        })), e -= r.spaceBetween;
                        const t = e - s;
                        p = p.map((e => e < 0 ? -m : e > t ? t + v : e))
                    }
                    if (r.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                            e += t + (r.spaceBetween ? r.spaceBetween : 0)
                        })), e -= r.spaceBetween, e < s) {
                            const t = (s - e) / 2;
                            p.forEach(((e, n) => {
                                p[n] = e - t
                            })), f.forEach(((e, n) => {
                                f[n] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                        slides: d,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: h
                    }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                        y(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), y(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0], n = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                    }
                    u !== c && e.emit("slidesLengthChange"), p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset()
                }, updateAutoHeight: function (e) {
                    const t = this, n = [], r = t.virtual && t.params.virtual.enabled;
                    let i, s = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const o = e => r ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) t.visibleSlides.each((e => {
                        n.push(e)
                    })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !r) break;
                        n.push(o(e))
                    } else n.push(o(t.activeIndex));
                    for (i = 0; i < n.length; i += 1) if (void 0 !== n[i]) {
                        const e = n[i].offsetHeight;
                        s = e > s ? e : s
                    }
                    (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`)
                }, updateSlidesOffset: function () {
                    const e = this, t = e.slides;
                    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                }, updateSlidesProgress: function (e = this && this.translate || 0) {
                    const t = this, n = t.params, {slides: r, rtlTranslate: i, snapGrid: s} = t;
                    if (0 === r.length) return;
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let o = -e;
                    i && (o = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < r.length; e += 1) {
                        const a = r[e];
                        let l = a.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
                        const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            d = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            u = -(o - l), p = u + t.slidesSizesGrid[e];
                        (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), r.eq(e).addClass(n.slideVisibleClass)), a.progress = i ? -c : c, a.originalProgress = i ? -d : d
                    }
                    t.visibleSlides = h(t.visibleSlides)
                }, updateProgress: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params, r = t.maxTranslate() - t.minTranslate();
                    let {progress: i, isBeginning: s, isEnd: o} = t;
                    const a = s, l = o;
                    0 === r ? (i = 0, s = !0, o = !0) : (i = (e - t.minTranslate()) / r, s = i <= 0, o = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: s,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !s || l && !o) && t.emit("fromEdge"), t.emit("progress", i)
                }, updateSlidesClasses: function () {
                    const e = this, {slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: s} = e,
                        o = e.virtual && n.virtual.enabled;
                    let a;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));
                    let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                    let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                }, updateActiveIndex: function (e) {
                    const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
                        slidesGrid: r,
                        snapGrid: i,
                        params: s,
                        activeIndex: o,
                        realIndex: a,
                        snapIndex: l
                    } = t;
                    let c, d = e;
                    if (void 0 === d) {
                        for (let e = 0; e < r.length; e += 1) void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? d = e : n >= r[e] && n < r[e + 1] && (d = e + 1) : n >= r[e] && (d = e);
                        s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (i.indexOf(n) >= 0) c = i.indexOf(n); else {
                        const e = Math.min(s.slidesPerGroupSkip, d);
                        c = e + Math.floor((d - e) / s.slidesPerGroup)
                    }
                    if (c >= i.length && (c = i.length - 1), d === o) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: u,
                        previousIndex: o,
                        activeIndex: d
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                }, updateClickedSlide: function (e) {
                    const t = this, n = t.params, r = h(e).closest(`.${n.slideClass}`)[0];
                    let i, s = !1;
                    if (r) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === r) {
                        s = !0, i = e;
                        break
                    }
                    if (!r || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(h(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            }, translate: {
                getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                    const {params: t, rtlTranslate: n, translate: r, $wrapperEl: i} = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let s = function (e, t = "x") {
                        const n = o();
                        let r, i, s;
                        const a = function (e) {
                            const t = o();
                            let n;
                            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                        }(e);
                        return n.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? s.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? s.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
                    }(i[0], e);
                    return n && (s = -s), s || 0
                }, setTranslate: function (e, t) {
                    const n = this, {rtlTranslate: r, params: i, $wrapperEl: s, wrapperEl: o, progress: a} = n;
                    let l, c = 0, d = 0;
                    n.isHorizontal() ? c = r ? -e : e : d = e, i.roundLengths && (c = Math.floor(c), d = Math.floor(d)), i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : i.virtualTranslate || s.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
                    const u = n.maxTranslate() - n.minTranslate();
                    l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e = 0, t = this.params.speed, n = !0, r = !0, i) {
                    const s = this, {params: o, wrapperEl: a} = s;
                    if (s.animating && o.preventInteractionOnTransition) return !1;
                    const l = s.minTranslate(), c = s.maxTranslate();
                    let d;
                    if (d = r && e > l ? l : r && e < c ? c : e, s.updateProgress(d), o.cssMode) {
                        const e = s.isHorizontal();
                        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d; else {
                            if (!s.support.smoothScroll) return b({
                                swiper: s,
                                targetPosition: -d,
                                side: e ? "left" : "top"
                            }), !0;
                            a.scrollTo({[e ? "left" : "top"]: -d, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (s.setTransition(0), s.setTranslate(d), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(d), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                }, transitionStart: function (e = !0, t) {
                    const n = this, {params: r} = n;
                    r.cssMode || (r.autoHeight && n.updateAutoHeight(), M({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e = !0, t) {
                    const n = this, {params: r} = n;
                    n.animating = !1, r.cssMode || (n.setTransition(0), M({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: {
                slideTo: function (e = 0, t = this.params.speed, n = !0, r, i) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const s = this;
                    let o = e;
                    o < 0 && (o = 0);
                    const {
                        params: a,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: d,
                        activeIndex: u,
                        rtlTranslate: p,
                        wrapperEl: f,
                        enabled: h
                    } = s;
                    if (s.animating && a.preventInteractionOnTransition || !h && !r && !i) return !1;
                    const m = Math.min(s.params.slidesPerGroupSkip, o);
                    let v = m + Math.floor((o - m) / s.params.slidesPerGroup);
                    v >= l.length && (v = l.length - 1), (u || a.initialSlide || 0) === (d || 0) && n && s.emit("beforeSlideChangeStart");
                    const g = -l[v];
                    if (s.updateProgress(g), a.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                        const t = -Math.floor(100 * g), n = Math.floor(100 * c[e]), r = Math.floor(100 * c[e + 1]);
                        void 0 !== c[e + 1] ? t >= n && t < r - (r - n) / 2 ? o = e : t >= n && t < r && (o = e + 1) : t >= n && (o = e)
                    }
                    if (s.initialized && o !== u) {
                        if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (u || 0) !== o) return !1
                    }
                    let w;
                    if (w = o > u ? "next" : o < u ? "prev" : "reset", p && -g === s.translate || !p && g === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(g), "reset" !== w && (s.transitionStart(n, w), s.transitionEnd(n, w)), !1;
                    if (a.cssMode) {
                        const e = s.isHorizontal(), n = p ? g : -g;
                        if (0 === t) {
                            const t = s.virtual && s.params.virtual.enabled;
                            t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                                s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!s.support.smoothScroll) return b({
                                swiper: s,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
                        }
                        return !0
                    }
                    return s.setTransition(t), s.setTranslate(g), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, w), 0 === t ? s.transitionEnd(n, w) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, w))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0
                }, slideToLoop: function (e = 0, t = this.params.speed, n = !0, r) {
                    const i = this;
                    let s = e;
                    return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r)
                }, slideNext: function (e = this.params.speed, t = !0, n) {
                    const r = this, {animating: i, enabled: s, params: o} = r;
                    if (!s) return r;
                    let a = o.slidesPerGroup;
                    "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                    const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                    if (o.loop) {
                        if (i && o.loopPreventsSlide) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }
                    return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
                }, slidePrev: function (e = this.params.speed, t = !0, n) {
                    const r = this, {
                        params: i,
                        animating: s,
                        snapGrid: o,
                        slidesGrid: a,
                        rtlTranslate: l,
                        enabled: c
                    } = r;
                    if (!c) return r;
                    if (i.loop) {
                        if (s && i.loopPreventsSlide) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }

                    const u = d(l ? r.translate : -r.translate), p = o.map((e => d(e)));
                    let f = o[p.indexOf(u) - 1];
                    if (void 0 === f && i.cssMode) {
                        let e;
                        o.forEach(((t, n) => {
                            u >= t && (e = n)
                        })), void 0 !== e && (f = o[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    return void 0 !== f && (h = a.indexOf(f), h < 0 && (h = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && r.isBeginning ? r.slideTo(r.slides.length - 1, e, t, n) : r.slideTo(h, e, t, n)
                }, slideReset: function (e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                }, slideToClosest: function (e = this.params.speed, t = !0, n, r = .5) {
                    const i = this;
                    let s = i.activeIndex;
                    const o = Math.min(i.params.slidesPerGroupSkip, s),
                        a = o + Math.floor((s - o) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[a]) {
                        const e = i.snapGrid[a];
                        l - e > (i.snapGrid[a + 1] - e) * r && (s += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[a - 1];
                        l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup)
                    }
                    return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, n)
                }, slideToClickedSlide: function () {
                    const e = this, {params: t, $wrapperEl: n} = e,
                        r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, s = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
                            e.slideTo(s)
                        }))) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
                            e.slideTo(s)
                        }))) : e.slideTo(s)
                    } else e.slideTo(s)
                }
            }, loop: {
                loopCreate: function () {
                    const e = this, t = i(), {params: n, $wrapperEl: r} = e,
                        s = r.children().length > 0 ? h(r.children()[0].parentNode) : r;
                    s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                    let o = s.children(`.${n.slideClass}`);
                    if (n.loopFillGroupWithBlank) {
                        const e = n.slidesPerGroup - o.length % n.slidesPerGroup;
                        if (e !== n.slidesPerGroup) {
                            for (let r = 0; r < e; r += 1) {
                                const e = h(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                s.append(e)
                            }
                            o = s.children(`.${n.slideClass}`)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = o.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > o.length && (e.loopedSlides = o.length);
                    const a = [], l = [];
                    o.each(((t, n) => {
                        const r = h(t);
                        n < e.loopedSlides && l.push(t), n < o.length && n >= o.length - e.loopedSlides && a.push(t), r.attr("data-swiper-slide-index", n)
                    }));
                    for (let e = 0; e < l.length; e += 1) s.append(h(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (let e = a.length - 1; e >= 0; e -= 1) s.prepend(h(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                }, loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: r,
                        allowSlidePrev: i,
                        allowSlideNext: s,
                        snapGrid: o,
                        rtlTranslate: a
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -o[t] - e.getTranslate();
                    t < r ? (l = n.length - 3 * r + t, l += r, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - r && (l = -n.length + t + r, l += r, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = i, e.allowSlideNext = s, e.emit("loopFix")
                }, loopDestroy: function () {
                    const {$wrapperEl: e, params: t, slides: n} = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            }, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                }, unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            }, events: {
                attachEvents: function () {
                    const e = this, t = i(), {params: n, support: r} = e;
                    e.onTouchStart = P.bind(e), e.onTouchMove = L.bind(e), e.onTouchEnd = O.bind(e), n.cssMode && (e.onScroll = I.bind(e)), e.onClick = A.bind(e), r.touch && !$ && (t.addEventListener("touchstart", _), $ = !0), z(e, "on")
                }, detachEvents: function () {
                    z(this, "off")
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    const e = this, {activeIndex: t, initialized: n, loopedSlides: r = 0, params: i, $el: s} = e,
                        o = i.breakpoints;
                    if (!o || o && 0 === Object.keys(o).length) return;
                    const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a) return;
                    const l = (a in o ? o[a] : void 0) || e.originalParams, c = D(e, i), d = D(e, l), u = i.enabled;
                    c && !d ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (s.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && s.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const p = l.direction && l.direction !== i.direction,
                        f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                    p && n && e.changeDirection(), w(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                }, getBreakpoint: function (e, t = "window", n) {
                    if (!e || "container" === t && !n) return;
                    let r = !1;
                    const i = o(), s = "window" === t ? i.innerHeight : n.clientHeight, a = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {value: s * t, point: e}
                        }
                        return {value: e, point: e}
                    }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < a.length; e += 1) {
                        const {point: s, value: o} = a[e];
                        "window" === t ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = s) : o <= n.clientWidth && (r = s)
                    }
                    return r || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: r} = n;
                    if (r) {
                        const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: {
                addClasses: function () {
                    const e = this, {classNames: t, params: n, rtl: r, $el: i, device: s, support: o} = e,
                        a = function (e, t) {
                            const n = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((r => {
                                    e[r] && n.push(t + r)
                                })) : "string" == typeof e && n.push(t + e)
                            })), n
                        }(["initialized", n.direction, {"pointer-events": !o.touch}, {"free-mode": e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: r}, {grid: n.grid && n.grid.rows > 1}, {"grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": n.cssMode}, {centered: n.cssMode && n.centeredSlides}], n.containerModifierClass);
                    t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses()
                }, removeClasses: function () {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            }, images: {
                loadImage: function (e, t, n, r, i, s) {
                    const a = o();
                    let l;

                    function c() {
                        s && s()
                    }

                    h(e).parent("picture")[0] || e.complete && i ? c() : t ? (l = new a.Image, l.onload = c, l.onerror = c, r && (l.sizes = r), n && (l.srcset = n), t && (l.src = t)) : c()
                }, preloadImages: function () {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                        const r = e.imagesToLoad[n];
                        e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, B = {};

        class V {
            constructor(...e) {
                let t, n;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = w({}, n), t && !n.el && (n.el = t), n.el && h(n.el).length > 1) {
                    const e = [];
                    return h(n.el).each((t => {
                        const r = w({}, n, {el: t});
                        e.push(new V(r))
                    })), e
                }
                const r = this;
                r.__swiper__ = !0, r.support = E(), r.device = function (e = {}) {
                    return T || (T = function ({userAgent: e} = {}) {
                        const t = E(), n = o(), r = n.navigator.platform, i = e || n.navigator.userAgent,
                            s = {ios: !1, android: !1}, a = n.screen.width, l = n.screen.height,
                            c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let d = i.match(/(iPad).*OS\s([\d_]+)/);
                        const u = i.match(/(iPod)(.*OS\s([\d_]+))?/), p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            f = "Win32" === r;
                        let h = "MacIntel" === r;
                        return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), h = !1), c && !f && (s.os = "android", s.android = !0), (d || p || u) && (s.os = "ios", s.ios = !0), s
                    }(e)), T
                }({userAgent: n.userAgent}), r.browser = (x || (x = function () {
                    const e = o();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), x), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
                const i = {};
                r.modules.forEach((e => {
                    e({
                        swiper: r,
                        extendParams: j(n, i),
                        on: r.on.bind(r),
                        once: r.once.bind(r),
                        off: r.off.bind(r),
                        emit: r.emit.bind(r)
                    })
                }));
                const s = w({}, G, i);
                return r.params = w({}, s, B, n), r.originalParams = w({}, r.params), r.passedParams = w({}, n), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                    r.on(e, r.params.on[e])
                })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = h, Object.assign(r, {
                    enabled: r.params.enabled,
                    el: t,
                    classNames: [],
                    slides: h(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === r.params.direction,
                    isVertical: () => "vertical" === r.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: function () {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return r.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, r.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: r.params.focusableElements,
                        lastClickTime: v(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), r.emit("_swiper"), r.params.init && r.init(), r
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const n = this;
                e = Math.min(Math.max(e, 0), 1);
                const r = n.minTranslate(), i = (n.maxTranslate() - r) * e + r;
                n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((n => {
                    const r = e.getSlideClasses(n);
                    t.push({slideEl: n, classNames: r}), e.emit("_slideClass", n, r)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e = "current", t = !1) {
                const {params: n, slides: r, slidesGrid: i, slidesSizesGrid: s, size: o, activeIndex: a} = this;
                let l = 1;
                if (n.centeredSlides) {
                    let e, t = r[a].swiperSlideSize;
                    for (let n = a + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0));
                    for (let n = a - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0))
                } else if ("current" === e) for (let e = a + 1; e < r.length; e += 1) (t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1); else for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: n} = e;

                function r() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let i;
                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t = !0) {
                const n = this, r = n.params.direction;
                return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const n = h(e || t.params.el);
                if (!(e = n[0])) return !1;
                e.swiper = t;
                const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let s = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = h(e.shadowRoot.querySelector(r()));
                        return t.children = e => n.children(e), t
                    }
                    return n.children(r())
                })();
                if (0 === s.length && t.params.createElements) {
                    const e = i().createElement("div");
                    s = h(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
                        s.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: n,
                    el: e,
                    $wrapperEl: s,
                    wrapperEl: s[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                    wrongRTL: "-webkit-box" === s.css("display")
                }), !0
            }

            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }

            destroy(e = !0, t = !0) {
                const n = this, {params: r, $el: i, $wrapperEl: s, slides: o} = n;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                    n.off(e)
                })), !1 !== e && (n.$el[0].swiper = null, function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(n)), n.destroyed = !0), null
            }

            static extendDefaults(e) {
                w(B, e)
            }

            static get extendedDefaults() {
                return B
            }

            static get defaults() {
                return G
            }

            static installModule(e) {
                V.prototype.__modules__ || (V.prototype.__modules__ = []);
                const t = V.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
            }
        }

        Object.keys(N).forEach((e => {
            Object.keys(N[e]).forEach((t => {
                V.prototype[t] = N[e][t]
            }))
        })), V.use([function ({swiper: e, on: t, emit: n}) {
            const r = o();
            let i = null;
            const s = () => {
                e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
            }, a = () => {
                e && !e.destroyed && e.initialized && n("orientationchange")
            };
            t("init", (() => {
                e.params.resizeObserver && void 0 !== r.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                    const {width: n, height: r} = e;
                    let i = n, o = r;
                    t.forEach((({contentBoxSize: t, contentRect: n, target: r}) => {
                        r && r !== e.el || (i = n ? n.width : (t[0] || t).inlineSize, o = n ? n.height : (t[0] || t).blockSize)
                    })), i === n && o === r || s()
                })), i.observe(e.el)) : (r.addEventListener("resize", s), r.addEventListener("orientationchange", a))
            })), t("destroy", (() => {
                i && i.unobserve && e.el && (i.unobserve(e.el), i = null), r.removeEventListener("resize", s), r.removeEventListener("orientationchange", a)
            }))
        }, function ({swiper: e, extendParams: t, on: n, emit: r}) {
            const i = [], s = o(), a = (e, t = {}) => {
                const n = new (s.MutationObserver || s.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                        r("observerUpdate", e[0])
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                }));
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.push(n)
            };
            t({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", (() => {
                if (e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let e = 0; e < t.length; e += 1) a(t[e])
                    }
                    a(e.$el[0], {childList: e.params.observeSlideChildren}), a(e.$wrapperEl[0], {attributes: !1})
                }
            })), n("destroy", (() => {
                i.forEach((e => {
                    e.disconnect()
                })), i.splice(0, i.length)
            }))
        }]);
        var q = V;

        function F(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        new function (e) {
            var t = this;
            void 0 === e && (e = {});
            var n = e.offset;
            void 0 === n && (n = 0);
            var r = e.duration;
            void 0 === r && (r = 800), this.offset = n, this.duration = r;
            var i = Array.prototype.slice.call(document.getElementsByTagName("a")).filter((function (e) {
                return function (e) {
                    return -1 != (e.href && e.href.indexOf("#"))
                }(e)
            })).filter((function (e) {
                return function (e) {
                    return e.pathname == window.location.pathname || "/" + e.pathname == window.location.pathname && e.search == location.search
                }(e)
            }));
            document.addEventListener("click", (function (e) {
                var s = i.filter((function (t) {
                    return e.target === t
                }))[0];
                s && (e.preventDefault(), function (e) {
                    var i = e.getAttribute("href"), s = document.querySelector(i),
                        o = s.getAttribute("data-anchor-offset");
                    n = o || t.offset;
                    var a = function (e) {
                            return Math.floor(e.getBoundingClientRect().top)
                        }(s), l = window.pageYOffset || document.documentElement.scrollTop, c = l, d = l + a - n, u = !1,
                        p = null, f = function e(t) {
                            if (u) return document.documentElement.scrollTop = d, s.focus(), void window.history.pushState("", "", i);
                            (c == d || t - p >= r) && (u = !0);
                            var n = function (e) {
                                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                            }((t - p) / r), o = c + (d - c) * n;
                            document.documentElement.scrollTop = o, requestAnimationFrame(e)
                        };
                    requestAnimationFrame((function (e) {
                        p = e, f(e)
                    }))
                }(s))
            }))
        }({offset: 200, duration: 1e3}), q.use([function ({swiper: e, extendParams: t, on: n, emit: r}) {
            let s;

            function o() {
                const t = e.slides.eq(e.activeIndex);
                let n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(s), s = m((() => {
                    let t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), r("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), r("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), r("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), r("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), r("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), r("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && o()
                }), n)
            }

            function a() {
                return void 0 === s && !e.autoplay.running && (e.autoplay.running = !0, r("autoplayStart"), o(), !0)
            }

            function l() {
                return !!e.autoplay.running && void 0 !== s && (s && (clearTimeout(s), s = void 0), e.autoplay.running = !1, r("autoplayStop"), !0)
            }

            function c(t) {
                e.autoplay.running && (e.autoplay.paused || (s && clearTimeout(s), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].addEventListener(t, u)
                })) : (e.autoplay.paused = !1, o())))
            }

            function d() {
                const t = i();
                "hidden" === t.visibilityState && e.autoplay.running && c(), "visible" === t.visibilityState && e.autoplay.paused && (o(), e.autoplay.paused = !1)
            }

            function u(t) {
                e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].removeEventListener(t, u)
                })), e.autoplay.paused = !1, e.autoplay.running ? o() : l())
            }

            function p() {
                e.params.autoplay.disableOnInteraction ? l() : c(), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].removeEventListener(t, u)
                }))
            }

            function f() {
                e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, o())
            }

            e.autoplay = {running: !1, paused: !1}, t({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), n("init", (() => {
                e.params.autoplay.enabled && (a(), i().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f)))
            })), n("beforeTransitionStart", ((t, n, r) => {
                e.autoplay.running && (r || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(n) : l())
            })), n("sliderFirstMove", (() => {
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : c())
            })), n("touchEnd", (() => {
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && o()
            })), n("destroy", (() => {
                e.$el.off("mouseenter", p), e.$el.off("mouseleave", f), e.autoplay.running && l(), i().removeEventListener("visibilitychange", d)
            })), Object.assign(e.autoplay, {pause: c, run: o, start: a, stop: l})
        }, function ({swiper: e, extendParams: t, on: n}) {
            t({fadeEffect: {crossFade: !1, transformEl: null}}), function (e) {
                const {
                    effect: t,
                    swiper: n,
                    on: r,
                    setTranslate: i,
                    setTransition: s,
                    overwriteParams: o,
                    perspective: a
                } = e;
                r("beforeInit", (() => {
                    if (n.params.effect !== t) return;
                    n.classNames.push(`${n.params.containerModifierClass}${t}`), a && a() && n.classNames.push(`${n.params.containerModifierClass}3d`);
                    const e = o ? o() : {};
                    Object.assign(n.params, e), Object.assign(n.originalParams, e)
                })), r("setTranslate", (() => {
                    n.params.effect === t && i()
                })), r("setTransition", ((e, r) => {
                    n.params.effect === t && s(r)
                }))
            }({
                effect: "fade",
                swiper: e,
                on: n,
                setTranslate: () => {
                    const {slides: t} = e, n = e.params.fadeEffect;
                    for (let r = 0; r < t.length; r += 1) {
                        const t = e.slides.eq(r);
                        let i = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (i -= e.translate);
                        let s = 0;
                        e.isHorizontal() || (s = i, i = 0);
                        const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        F(n, t).css({opacity: o}).transform(`translate3d(${i}px, ${s}px, 0px)`)
                    }
                },
                setTransition: t => {
                    const {transformEl: n} = e.params.fadeEffect;
                    (n ? e.slides.find(n) : e.slides).transition(t), function ({
                                                                                   swiper: e,
                                                                                   duration: t,
                                                                                   transformEl: n,
                                                                                   allSlides: r
                                                                               }) {
                        const {slides: i, activeIndex: s, $wrapperEl: o} = e;
                        if (e.params.virtualTranslate && 0 !== t) {
                            let t, a = !1;
                            t = r ? n ? i.find(n) : i : n ? i.eq(s).find(n) : i.eq(s), t.transitionEnd((() => {
                                if (a) return;
                                if (!e || e.destroyed) return;
                                a = !0, e.animating = !1;
                                const t = ["webkitTransitionEnd", "transitionend"];
                                for (let e = 0; e < t.length; e += 1) o.trigger(t[e])
                            }))
                        }
                    }({swiper: e, duration: t, transformEl: n, allSlides: !0})
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }]);
        var R = document.querySelectorAll(".tape-swiper");
        0 !== R.length && R.forEach((function (e) {
            var t = e.querySelector(".swiper");
            "celebrities" === e.getAttribute("data-swiper-name") ? new q(t, {
                slidesPerView: 2,
                spaceBetween: 16,
                breakpoints: {768: {slidesPerView: 4}, 1199: {slidesPerView: 6, allowTouchMove: !1}}
            }) : new q(t, {
                slidesPerView: 3,
                spaceBetween: 16,
                loop: !0,
                autoplay: {delay: 2500, disableOnInteraction: !1},
                breakpoints: {768: {slidesPerView: 4}, 1199: {slidesPerView: 6}}
            })
        }));
        var H = document.querySelector(".team-swiper");
        H && (window.innerWidth >= 768 ? new q(H, {
            slidesPerView: "auto",
            spaceBetween: 16,
            autoplay: {delay: 2500, disableOnInteraction: !1},
            breakpoints: {768: {slidesPerView: 4, loop: !1}, 1199: {slidesPerView: 5, spaceBetween: 26}}
        }) : new q(H, {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: !0,
            autoplay: {delay: 2500, disableOnInteraction: !1},
            breakpoints: {768: {slidesPerView: 4, loop: !1}, 1199: {slidesPerView: 5, spaceBetween: 26}}
        }));
        var W = document.querySelectorAll(".faq__items");
        0 !== W.length && W.forEach((function (e) {
            var t = e.querySelectorAll(".faq-item"), n = function () {
                t.forEach((function (e) {
                    var t = e.querySelector(".faq-item__head"), n = e.querySelector(".faq-item__body");
                    e.classList.remove("faq-item--active"), t.classList.remove("faq-item__head--active"), n.style.height = 0
                }))
            };
            t.forEach((function (e) {
                e.querySelector(".faq-item__head").addEventListener("click", (function () {
                    var t, r, i;
                    e.classList.contains("faq-item--active") ? n() : (n(), r = (t = e).querySelector(".faq-item__head"), i = t.querySelector(".faq-item__body"), t.classList.add("faq-item--active"), r.classList.add("faq-item__head--active"), i.style.height = i.scrollHeight + "px")
                }))
            }))
        }));
        var Y = document.querySelector(".nav"), X = document.querySelector(".header__burger");
        document.querySelectorAll(".toggle-nav-menu-trigger").forEach((function (e) {
            e.addEventListener("click", (function () {
                X.classList.toggle("burger--active"), Y.classList.toggle("nav--active")
            }))
        }));
        var U = document.querySelectorAll(".var-nav__btn"), K = document.querySelector(".var-nav__swiper"),
            J = new q(K, {slidesPerView: 1, allowTouchMove: !1, effect: "fade"}),
            Q = document.querySelector(".variations__swiper"),
            Z = new q(Q, {slidesPerView: 1, allowTouchMove: !1, effect: "fade", thumbs: J}),
            ee = ["first", "second", "third"], te = document.querySelector(".var-nav__inner");
        U.forEach((function (e, t) {
            e.addEventListener("click", (function () {
                J.slideTo(t), Z.slideTo(t), te.classList.remove("var-nav__inner--" + ee[0]), te.classList.remove("var-nav__inner--" + ee[1]), te.classList.remove("var-nav__inner--" + ee[2]), U.forEach((function (e) {
                    e.classList.remove("var-nav__btn--active")
                })), e.classList.add("var-nav__btn--active"), te.classList.add("var-nav__inner--" + ee[t])
            }))
        })), document.querySelectorAll(".var-nav__swiper-slide").forEach((function (e, t) {
            var n = document.querySelectorAll(".var-content-swiper")[t],
                r = new q(n, {slidesPerView: 1, allowTouchMove: !1, effect: "fade", autoHeight: !0}),
                i = e.querySelectorAll(".category-btn");
            i.forEach((function (e, t) {
                e.addEventListener("click", (function () {
                    r.slideTo(t), i.forEach((function (e) {
                        e.classList.remove("category-btn--active")
                    })), e.classList.add("category-btn--active")
                }))
            }))
        }));
        var ne = document.querySelectorAll("img");

        function re(e) {
            e.src = e.getAttribute("data-src"), ie.unobserve(e)
        }

        var ie = new IntersectionObserver((function (e, t) {
            e.forEach((function (e) {
                e.intersectionRatio > 0 && re(e.target)
            }))
        }), {root: null, rootMargin: "0px", threshold: .1});
        ne.forEach((function (e) {
            ie.observe(e)
        }))
    }()
}();
