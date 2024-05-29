"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [758], {
        4593: (e, t, r) => {
            r.d(t, {
                Z: () => he
            });
            var n, o, i, a, c = r(5697),
                u = r.n(c),
                s = r(3524),
                l = r.n(s),
                f = r(6909),
                p = r.n(f),
                d = r(7294),
                y = r(7418),
                h = r.n(y),
                m = "bodyAttributes",
                T = "htmlAttributes",
                b = "titleAttributes",
                g = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                v = Object.keys(g).map((function (e) {
                    return g[e]
                })),
                A = "charset",
                w = "cssText",
                C = "href",
                O = "http-equiv",
                S = "innerHTML",
                E = "itemprop",
                P = "name",
                j = "property",
                k = "rel",
                I = "src",
                L = "target",
                x = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                R = "defaultTitle",
                N = "defer",
                M = "encodeSpecialCharacters",
                H = "onChangeClientState",
                q = "titleTemplate",
                Y = Object.keys(x).reduce((function (e, t) {
                    return e[x[t]] = t, e
                }), {}),
                D = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
                B = "data-react-helmet",
                F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                K = function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                _ = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                U = function (e, t) {
                    var r = {};
                    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                    return r
                },
                z = function (e) {
                    return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                Z = function (e) {
                    var t = W(e, g.TITLE),
                        r = W(e, q);
                    if (r && t) return r.replace(/%s/g, (function () {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var n = W(e, R);
                    return t || n || void 0
                },
                G = function (e) {
                    return W(e, H) || function () {}
                },
                J = function (e, t) {
                    return t.filter((function (t) {
                        return void 0 !== t[e]
                    })).map((function (t) {
                        return t[e]
                    })).reduce((function (e, t) {
                        return _({}, e, t)
                    }), {})
                },
                Q = function (e, t) {
                    return t.filter((function (e) {
                        return void 0 !== e[g.BASE]
                    })).map((function (e) {
                        return e[g.BASE]
                    })).reverse().reduce((function (t, r) {
                        if (!t.length)
                            for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                                var i = n[o].toLowerCase();
                                if (-1 !== e.indexOf(i) && r[i]) return t.concat(r)
                            }
                        return t
                    }), [])
                },
                V = function (e, t, r) {
                    var n = {};
                    return r.filter((function (t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + F(t[e]) + '"'), !1)
                    })).map((function (t) {
                        return t[e]
                    })).reverse().reduce((function (e, r) {
                        var o = {};
                        r.filter((function (e) {
                            for (var r = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    u = c.toLowerCase(); - 1 === t.indexOf(u) || r === k && "canonical" === e[r].toLowerCase() || u === k && "stylesheet" === e[u].toLowerCase() || (r = u), -1 === t.indexOf(c) || c !== S && c !== w && c !== E || (r = c)
                            }
                            if (!r || !e[r]) return !1;
                            var s = e[r].toLowerCase();
                            return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][s] && (o[r][s] = !0, !0)
                        })).reverse().forEach((function (t) {
                            return e.push(t)
                        }));
                        for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                            var c = i[a],
                                u = h()({}, n[c], o[c]);
                            n[c] = u
                        }
                        return e
                    }), []).reverse()
                },
                W = function (e, t) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var n = e[r];
                        if (n.hasOwnProperty(t)) return n[t]
                    }
                    return null
                },
                X = (n = Date.now(), function (e) {
                    var t = Date.now();
                    t - n > 16 ? (n = t, e(t)) : setTimeout((function () {
                        X(e)
                    }), 0)
                }),
                $ = function (e) {
                    return clearTimeout(e)
                },
                ee = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || X : r.g.requestAnimationFrame || X,
                te = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || $ : r.g.cancelAnimationFrame || $,
                re = function (e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                ne = null,
                oe = function (e, t) {
                    var r = e.baseTag,
                        n = e.bodyAttributes,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.onChangeClientState,
                        s = e.scriptTags,
                        l = e.styleTags,
                        f = e.title,
                        p = e.titleAttributes;
                    ce(g.BODY, n), ce(g.HTML, o), ae(f, p);
                    var d = {
                            baseTag: ue(g.BASE, r),
                            linkTags: ue(g.LINK, i),
                            metaTags: ue(g.META, a),
                            noscriptTags: ue(g.NOSCRIPT, c),
                            scriptTags: ue(g.SCRIPT, s),
                            styleTags: ue(g.STYLE, l)
                        },
                        y = {},
                        h = {};
                    Object.keys(d).forEach((function (e) {
                        var t = d[e],
                            r = t.newTags,
                            n = t.oldTags;
                        r.length && (y[e] = r), n.length && (h[e] = d[e].oldTags)
                    })), t && t(), u(e, y, h)
                },
                ie = function (e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                ae = function (e, t) {
                    void 0 !== e && document.title !== e && (document.title = ie(e)), ce(g.TITLE, t)
                },
                ce = function (e, t) {
                    var r = document.getElementsByTagName(e)[0];
                    if (r) {
                        for (var n = r.getAttribute(B), o = n ? n.split(",") : [], i = [].concat(o), a = Object.keys(t), c = 0; c < a.length; c++) {
                            var u = a[c],
                                s = t[u] || "";
                            r.getAttribute(u) !== s && r.setAttribute(u, s), -1 === o.indexOf(u) && o.push(u);
                            var l = i.indexOf(u); - 1 !== l && i.splice(l, 1)
                        }
                        for (var f = i.length - 1; f >= 0; f--) r.removeAttribute(i[f]);
                        o.length === i.length ? r.removeAttribute(B) : r.getAttribute(B) !== a.join(",") && r.setAttribute(B, a.join(","))
                    }
                },
                ue = function (e, t) {
                    var r = document.head || document.querySelector(g.HEAD),
                        n = r.querySelectorAll(e + "[" + B + "]"),
                        o = Array.prototype.slice.call(n),
                        i = [],
                        a = void 0;
                    return t && t.length && t.forEach((function (t) {
                        var r = document.createElement(e);
                        for (var n in t)
                            if (t.hasOwnProperty(n))
                                if (n === S) r.innerHTML = t.innerHTML;
                                else if (n === w) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
                        else {
                            var c = void 0 === t[n] ? "" : t[n];
                            r.setAttribute(n, c)
                        }
                        r.setAttribute(B, "true"), o.some((function (e, t) {
                            return a = t, r.isEqualNode(e)
                        })) ? o.splice(a, 1) : i.push(r)
                    })), o.forEach((function (e) {
                        return e.parentNode.removeChild(e)
                    })), i.forEach((function (e) {
                        return r.appendChild(e)
                    })), {
                        oldTags: o,
                        newTags: i
                    }
                },
                se = function (e) {
                    return Object.keys(e).reduce((function (t, r) {
                        var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
                        return t ? t + " " + n : n
                    }), "")
                },
                le = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function (t, r) {
                        return t[x[r] || r] = e[r], t
                    }), t)
                },
                fe = function (e, t, r) {
                    switch (e) {
                        case g.TITLE:
                            return {
                                toComponent: function () {
                                    return e = t.title, r = t.titleAttributes, (n = {
                                        key: e
                                    })[B] = !0, o = le(r, n), [d.createElement(g.TITLE, o, e)];
                                    var e, r, n, o
                                }, toString: function () {
                                    return function (e, t, r, n) {
                                        var o = se(r),
                                            i = ie(t);
                                        return o ? "<" + e + " " + B + '="true" ' + o + ">" + z(i, n) + "</" + e + ">" : "<" + e + " " + B + '="true">' + z(i, n) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, r)
                                }
                            };
                        case m:
                        case T:
                            return {
                                toComponent: function () {
                                    return le(t)
                                }, toString: function () {
                                    return se(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function () {
                                    return function (e, t) {
                                        return t.map((function (t, r) {
                                            var n, o = ((n = {
                                                key: r
                                            })[B] = !0, n);
                                            return Object.keys(t).forEach((function (e) {
                                                var r = x[e] || e;
                                                if (r === S || r === w) {
                                                    var n = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = {
                                                        __html: n
                                                    }
                                                } else o[r] = t[e]
                                            })), d.createElement(e, o)
                                        }))
                                    }(e, t)
                                }, toString: function () {
                                    return function (e, t, r) {
                                        return t.reduce((function (t, n) {
                                            var o = Object.keys(n).filter((function (e) {
                                                    return !(e === S || e === w)
                                                })).reduce((function (e, t) {
                                                    var o = void 0 === n[t] ? t : t + '="' + z(n[t], r) + '"';
                                                    return e ? e + " " + o : o
                                                }), ""),
                                                i = n.innerHTML || n.cssText || "",
                                                a = -1 === D.indexOf(e);
                                            return t + "<" + e + " " + B + '="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                        }), "")
                                    }(e, t, r)
                                }
                            }
                    }
                },
                pe = function (e) {
                    var t = e.baseTag,
                        r = e.bodyAttributes,
                        n = e.encode,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.scriptTags,
                        s = e.styleTags,
                        l = e.title,
                        f = void 0 === l ? "" : l,
                        p = e.titleAttributes;
                    return {
                        base: fe(g.BASE, t, n),
                        bodyAttributes: fe(m, r, n),
                        htmlAttributes: fe(T, o, n),
                        link: fe(g.LINK, i, n),
                        meta: fe(g.META, a, n),
                        noscript: fe(g.NOSCRIPT, c, n),
                        script: fe(g.SCRIPT, u, n),
                        style: fe(g.STYLE, s, n),
                        title: fe(g.TITLE, {
                            title: f,
                            titleAttributes: p
                        }, n)
                    }
                },
                de = l()((function (e) {
                    return {
                        baseTag: Q([C, L], e),
                        bodyAttributes: J(m, e),
                        defer: W(e, N),
                        encode: W(e, M),
                        htmlAttributes: J(T, e),
                        linkTags: V(g.LINK, [k, C], e),
                        metaTags: V(g.META, [P, A, O, j, E], e),
                        noscriptTags: V(g.NOSCRIPT, [S], e),
                        onChangeClientState: G(e),
                        scriptTags: V(g.SCRIPT, [I, S], e),
                        styleTags: V(g.STYLE, [w], e),
                        title: Z(e),
                        titleAttributes: J(b, e)
                    }
                }), (function (e) {
                    ne && te(ne), e.defer ? ne = ee((function () {
                        oe(e, (function () {
                            ne = null
                        }))
                    })) : (oe(e), ne = null)
                }), pe)((function () {
                    return null
                })),
                ye = (o = de, a = i = function (e) {
                    function t() {
                        return function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function (e) {
                        return !p()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function (e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case g.SCRIPT:
                            case g.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case g.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function (e) {
                        var t, r = e.child,
                            n = e.arrayTypeChildren,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        return _({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [_({}, o, this.mapNestedChildrenToProps(r, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function (e) {
                        var t, r, n = e.child,
                            o = e.newProps,
                            i = e.newChildProps,
                            a = e.nestedChildren;
                        switch (n.type) {
                            case g.TITLE:
                                return _({}, o, ((t = {})[n.type] = a, t.titleAttributes = _({}, i), t));
                            case g.BODY:
                                return _({}, o, {
                                    bodyAttributes: _({}, i)
                                });
                            case g.HTML:
                                return _({}, o, {
                                    htmlAttributes: _({}, i)
                                })
                        }
                        return _({}, o, ((r = {})[n.type] = _({}, i), r))
                    }, t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                        var r = _({}, t);
                        return Object.keys(e).forEach((function (t) {
                            var n;
                            r = _({}, r, ((n = {})[t] = e[t], n))
                        })), r
                    }, t.prototype.warnOnInvalidChildren = function (e, t) {
                        if (!v.some((function (t) {
                                return e.type === t
                            }))) return "function" == typeof e.type ? re("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.") : re("Only elements types " + v.join(", ") + " are allowed. Helmet does not support rendering <" + e.type + "> elements. Refer to our API for more information.");
                        if (t && "string" != typeof t && (!Array.isArray(t) || t.some((function (e) {
                                return "string" != typeof e
                            })))) throw new Error("Helmet expects a string as a child of <" + e.type + ">. Did you forget to wrap your children in braces? ( <" + e.type + ">{``}</" + e.type + "> ) Refer to our API for more information.");
                        return !0
                    }, t.prototype.mapChildrenToProps = function (e, t) {
                        var r = this,
                            n = {};
                        return d.Children.forEach(e, (function (e) {
                            if (e && e.props) {
                                var o = e.props,
                                    i = o.children,
                                    a = function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function (t, r) {
                                            return t[Y[r] || r] = e[r], t
                                        }), t)
                                    }(U(o, ["children"]));
                                switch (r.warnOnInvalidChildren(e, i), e.type) {
                                    case g.LINK:
                                    case g.META:
                                    case g.NOSCRIPT:
                                    case g.SCRIPT:
                                    case g.STYLE:
                                        n = r.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: n,
                                            newChildProps: a,
                                            nestedChildren: i
                                        });
                                        break;
                                    default:
                                        t = r.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: a,
                                            nestedChildren: i
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(n, t)
                    }, t.prototype.render = function () {
                        var e = this.props,
                            t = e.children,
                            r = U(e, ["children"]),
                            n = _({}, r);
                        return t && (n = this.mapChildrenToProps(t, n)), d.createElement(o, n)
                    }, K(t, null, [{
                        key: "canUseDOM",
                        set: function (e) {
                            o.canUseDOM = e
                        }
                    }]), t
                }(d.Component), i.propTypes = {
                    base: u().object,
                    bodyAttributes: u().object,
                    children: u().oneOfType([u().arrayOf(u().node), u().node]),
                    defaultTitle: u().string,
                    defer: u().bool,
                    encodeSpecialCharacters: u().bool,
                    htmlAttributes: u().object,
                    link: u().arrayOf(u().object),
                    meta: u().arrayOf(u().object),
                    noscript: u().arrayOf(u().object),
                    onChangeClientState: u().func,
                    script: u().arrayOf(u().object),
                    style: u().arrayOf(u().object),
                    title: u().string,
                    titleAttributes: u().object,
                    titleTemplate: u().string
                }, i.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, i.peek = o.peek, i.rewind = function () {
                    var e = o.rewind();
                    return e || (e = pe({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, a);
            ye.renderStatic = ye.rewind;
            const he = ye
        }
    }
]);
//# sourceMappingURL=commons-main-Helmet.js.bundle.js.map