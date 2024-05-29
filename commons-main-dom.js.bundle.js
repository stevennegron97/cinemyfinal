(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [668], {
        1146: (e, t, n) => {
            var r = n(2167),
                i = r.find,
                o = r.NAMESPACE;

            function a(e) {
                return "" !== e
            }

            function u(e, t) {
                return e.hasOwnProperty(t) || (e[t] = !0), e
            }

            function s(e) {
                if (!e) return [];
                var t = function (e) {
                    return e ? e.split(/[\t\n\f\r ]+/).filter(a) : []
                }(e);
                return Object.keys(t.reduce(u, {}))
            }

            function l(e, t) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }

            function c(e, t) {
                var n = e.prototype;
                if (!(n instanceof t)) {
                    function r() {}
                    r.prototype = t.prototype, l(n, r = new r), e.prototype = n = r
                }
                n.constructor != e && ("function" != typeof e && console.error("unknown Class:" + e), n.constructor = e)
            }
            var f = {},
                p = f.ELEMENT_NODE = 1,
                d = f.ATTRIBUTE_NODE = 2,
                h = f.TEXT_NODE = 3,
                m = f.CDATA_SECTION_NODE = 4,
                N = f.ENTITY_REFERENCE_NODE = 5,
                E = f.ENTITY_NODE = 6,
                v = f.PROCESSING_INSTRUCTION_NODE = 7,
                y = f.COMMENT_NODE = 8,
                g = f.DOCUMENT_NODE = 9,
                T = f.DOCUMENT_TYPE_NODE = 10,
                w = f.DOCUMENT_FRAGMENT_NODE = 11,
                b = f.NOTATION_NODE = 12,
                D = {},
                _ = {},
                O = (D.INDEX_SIZE_ERR = (_[1] = "Index size error", 1), D.DOMSTRING_SIZE_ERR = (_[2] = "DOMString size error", 2), D.HIERARCHY_REQUEST_ERR = (_[3] = "Hierarchy request error", 3)),
                S = (D.WRONG_DOCUMENT_ERR = (_[4] = "Wrong document", 4), D.INVALID_CHARACTER_ERR = (_[5] = "Invalid character", 5), D.NO_DATA_ALLOWED_ERR = (_[6] = "No data allowed", 6), D.NO_MODIFICATION_ALLOWED_ERR = (_[7] = "No modification allowed", 7), D.NOT_FOUND_ERR = (_[8] = "Not found", 8)),
                C = (D.NOT_SUPPORTED_ERR = (_[9] = "Not supported", 9), D.INUSE_ATTRIBUTE_ERR = (_[10] = "Attribute in use", 10));
            D.INVALID_STATE_ERR = (_[11] = "Invalid state", 11), D.SYNTAX_ERR = (_[12] = "Syntax error", 12), D.INVALID_MODIFICATION_ERR = (_[13] = "Invalid modification", 13), D.NAMESPACE_ERR = (_[14] = "Invalid namespace", 14), D.INVALID_ACCESS_ERR = (_[15] = "Invalid access", 15);

            function I(e, t) {
                if (t instanceof Error) var n = t;
                else n = this, Error.call(this, _[e]), this.message = _[e], Error.captureStackTrace && Error.captureStackTrace(this, I);
                return n.code = e, t && (this.message = this.message + ": " + t), n
            }

            function x() {}

            function R(e, t) {
                this._node = e, this._refresh = t, A(this)
            }

            function A(e) {
                var t = e._node._inc || e._node.ownerDocument._inc;
                if (e._inc != t) {
                    var n = e._refresh(e._node);
                    ye(e, "length", n.length), l(n, e), e._inc = t
                }
            }

            function M() {}

            function U(e, t) {
                for (var n = e.length; n--;)
                    if (e[n] === t) return n
            }

            function P(e, t, n, r) {
                if (r ? t[U(t, r)] = n : t[t.length++] = n, e) {
                    n.ownerElement = e;
                    var i = e.ownerDocument;
                    i && (r && G(i, e, r), function (e, t, n) {
                        e && e._inc++;
                        var r = n.namespaceURI;
                        r === o.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value)
                    }(i, e, n))
                }
            }

            function k(e, t, n) {
                var r = U(t, n);
                if (!(r >= 0)) throw new I(S, new Error(e.tagName + "@" + n));
                for (var i = t.length - 1; r < i;) t[r] = t[++r];
                if (t.length = i, e) {
                    var o = e.ownerDocument;
                    o && (G(o, e, n), n.ownerElement = null)
                }
            }

            function L() {}

            function B() {}

            function V(e) {
                return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
            }

            function j(e, t) {
                if (t(e)) return !0;
                if (e = e.firstChild)
                    do {
                        if (j(e, t)) return !0
                    } while (e = e.nextSibling)
            }

            function F() {
                this.ownerDocument = this
            }

            function G(e, t, n, r) {
                e && e._inc++, n.namespaceURI === o.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""]
            }

            function X(e, t, n) {
                if (e && e._inc) {
                    e._inc++;
                    var r = t.childNodes;
                    if (n) r[r.length++] = n;
                    else {
                        for (var i = t.firstChild, o = 0; i;) r[o++] = i, i = i.nextSibling;
                        r.length = o, delete r[r.length]
                    }
                }
            }

            function Y(e, t) {
                var n = t.previousSibling,
                    r = t.nextSibling;
                return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, X(e.ownerDocument, e), t
            }

            function z(e) {
                return e && e.nodeType === B.DOCUMENT_TYPE_NODE
            }

            function $(e) {
                return e && e.nodeType === B.ELEMENT_NODE
            }

            function H(e) {
                return e && e.nodeType === B.TEXT_NODE
            }

            function W(e, t) {
                var n = e.childNodes || [];
                if (i(n, $) || z(t)) return !1;
                var r = i(n, z);
                return !(t && r && n.indexOf(r) > n.indexOf(t))
            }

            function q(e, t) {
                var n = e.childNodes || [];
                if (i(n, (function (e) {
                        return $(e) && e !== t
                    }))) return !1;
                var r = i(n, z);
                return !(t && r && n.indexOf(r) > n.indexOf(t))
            }

            function Z(e, t, n) {
                if (! function (e) {
                        return e && (e.nodeType === B.DOCUMENT_NODE || e.nodeType === B.DOCUMENT_FRAGMENT_NODE || e.nodeType === B.ELEMENT_NODE)
                    }(e)) throw new I(O, "Unexpected parent node type " + e.nodeType);
                if (n && n.parentNode !== e) throw new I(S, "child not in parent");
                if (! function (e) {
                        return e && ($(e) || H(e) || z(e) || e.nodeType === B.DOCUMENT_FRAGMENT_NODE || e.nodeType === B.COMMENT_NODE || e.nodeType === B.PROCESSING_INSTRUCTION_NODE)
                    }(t) || z(t) && e.nodeType !== B.DOCUMENT_NODE) throw new I(O, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType)
            }

            function Q(e, t, n) {
                var r = e.childNodes || [],
                    o = t.childNodes || [];
                if (t.nodeType === B.DOCUMENT_FRAGMENT_NODE) {
                    var a = o.filter($);
                    if (a.length > 1 || i(o, H)) throw new I(O, "More than one element or text in fragment");
                    if (1 === a.length && !W(e, n)) throw new I(O, "Element in fragment can not be inserted before doctype")
                }
                if ($(t) && !W(e, n)) throw new I(O, "Only one element can be added and only after doctype");
                if (z(t)) {
                    if (i(r, z)) throw new I(O, "Only one doctype is allowed");
                    var u = i(r, $);
                    if (n && r.indexOf(u) < r.indexOf(n)) throw new I(O, "Doctype can only be inserted before an element");
                    if (!n && u) throw new I(O, "Doctype can not be appended since element is present")
                }
            }

            function J(e, t, n) {
                var r = e.childNodes || [],
                    o = t.childNodes || [];
                if (t.nodeType === B.DOCUMENT_FRAGMENT_NODE) {
                    var a = o.filter($);
                    if (a.length > 1 || i(o, H)) throw new I(O, "More than one element or text in fragment");
                    if (1 === a.length && !q(e, n)) throw new I(O, "Element in fragment can not be inserted before doctype")
                }
                if ($(t) && !q(e, n)) throw new I(O, "Only one element can be added and only after doctype");
                if (z(t)) {
                    if (i(r, (function (e) {
                            return z(e) && e !== n
                        }))) throw new I(O, "Only one doctype is allowed");
                    var u = i(r, $);
                    if (n && r.indexOf(u) < r.indexOf(n)) throw new I(O, "Doctype can only be inserted before an element")
                }
            }

            function K(e, t, n, r) {
                Z(e, t, n), e.nodeType === B.DOCUMENT_NODE && (r || Q)(e, t, n);
                var i = t.parentNode;
                if (i && i.removeChild(t), t.nodeType === w) {
                    var o = t.firstChild;
                    if (null == o) return t;
                    var a = t.lastChild
                } else o = a = t;
                var u = n ? n.previousSibling : e.lastChild;
                o.previousSibling = u, a.nextSibling = n, u ? u.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = a : n.previousSibling = a;
                do {
                    o.parentNode = e
                } while (o !== a && (o = o.nextSibling));
                return X(e.ownerDocument || e, e), t.nodeType == w && (t.firstChild = t.lastChild = null), t
            }

            function ee() {
                this._nsMap = {}
            }

            function te() {}

            function ne() {}

            function re() {}

            function ie() {}

            function oe() {}

            function ae() {}

            function ue() {}

            function se() {}

            function le() {}

            function ce() {}

            function fe() {}

            function pe() {}

            function de(e, t) {
                var n = [],
                    r = 9 == this.nodeType && this.documentElement || this,
                    i = r.prefix,
                    o = r.namespaceURI;
                if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [{
                    namespace: o,
                    prefix: null
                }];
                return Ne(this, n, e, t, a), n.join("")
            }

            function he(e, t, n) {
                var r = e.prefix || "",
                    i = e.namespaceURI;
                if (!i) return !1;
                if ("xml" === r && i === o.XML || i === o.XMLNS) return !1;
                for (var a = n.length; a--;) {
                    var u = n[a];
                    if (u.prefix === r) return u.namespace !== i
                }
                return !0
            }

            function me(e, t, n) {
                e.push(" ", t, '="', n.replace(/[<>&"\t\n\r]/g, V), '"')
            }

            function Ne(e, t, n, r, i) {
                if (i || (i = []), r) {
                    if (!(e = r(e))) return;
                    if ("string" == typeof e) return void t.push(e)
                }
                switch (e.nodeType) {
                    case p:
                        var a = e.attributes,
                            u = a.length,
                            s = e.firstChild,
                            l = e.tagName,
                            c = l;
                        if (!(n = o.isHTML(e.namespaceURI) || n) && !e.prefix && e.namespaceURI) {
                            for (var f, E = 0; E < a.length; E++)
                                if ("xmlns" === a.item(E).name) {
                                    f = a.item(E).value;
                                    break
                                } if (!f)
                                for (var b = i.length - 1; b >= 0; b--) {
                                    if ("" === (D = i[b]).prefix && D.namespace === e.namespaceURI) {
                                        f = D.namespace;
                                        break
                                    }
                                }
                            if (f !== e.namespaceURI)
                                for (b = i.length - 1; b >= 0; b--) {
                                    var D;
                                    if ((D = i[b]).namespace === e.namespaceURI) {
                                        D.prefix && (c = D.prefix + ":" + l);
                                        break
                                    }
                                }
                        }
                        t.push("<", c);
                        for (var _ = 0; _ < u; _++) {
                            "xmlns" == (O = a.item(_)).prefix ? i.push({
                                prefix: O.localName,
                                namespace: O.value
                            }) : "xmlns" == O.nodeName && i.push({
                                prefix: "",
                                namespace: O.value
                            })
                        }
                        for (_ = 0; _ < u; _++) {
                            var O, S, C;
                            if (he(O = a.item(_), 0, i)) me(t, (S = O.prefix || "") ? "xmlns:" + S : "xmlns", C = O.namespaceURI), i.push({
                                prefix: S,
                                namespace: C
                            });
                            Ne(O, t, n, r, i)
                        }
                        if (l === c && he(e, 0, i)) me(t, (S = e.prefix || "") ? "xmlns:" + S : "xmlns", C = e.namespaceURI), i.push({
                            prefix: S,
                            namespace: C
                        });
                        if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(l)) {
                            if (t.push(">"), n && /^script$/i.test(l))
                                for (; s;) s.data ? t.push(s.data) : Ne(s, t, n, r, i.slice()), s = s.nextSibling;
                            else
                                for (; s;) Ne(s, t, n, r, i.slice()), s = s.nextSibling;
                            t.push("</", c, ">")
                        } else t.push("/>");
                        return;
                    case g:
                    case w:
                        for (s = e.firstChild; s;) Ne(s, t, n, r, i.slice()), s = s.nextSibling;
                        return;
                    case d:
                        return me(t, e.name, e.value);
                    case h:
                        return t.push(e.data.replace(/[<&>]/g, V));
                    case m:
                        return t.push("<![CDATA[", e.data, "]]>");
                    case y:
                        return t.push("\x3c!--", e.data, "--\x3e");
                    case T:
                        var I = e.publicId,
                            x = e.systemId;
                        if (t.push("<!DOCTYPE ", e.name), I) t.push(" PUBLIC ", I), x && "." != x && t.push(" ", x), t.push(">");
                        else if (x && "." != x) t.push(" SYSTEM ", x, ">");
                        else {
                            var R = e.internalSubset;
                            R && t.push(" [", R, "]"), t.push(">")
                        }
                        return;
                    case v:
                        return t.push("<?", e.target, " ", e.data, "?>");
                    case N:
                        return t.push("&", e.nodeName, ";");
                    default:
                        t.push("??", e.nodeName)
                }
            }

            function Ee(e, t, n) {
                var r;
                switch (t.nodeType) {
                    case p:
                        (r = t.cloneNode(!1)).ownerDocument = e;
                    case w:
                        break;
                    case d:
                        n = !0
                }
                if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n)
                    for (var i = t.firstChild; i;) r.appendChild(Ee(e, i, n)), i = i.nextSibling;
                return r
            }

            function ve(e, t, n) {
                var r = new t.constructor;
                for (var i in t)
                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                        var o = t[i];
                        "object" != typeof o && o != r[i] && (r[i] = o)
                    } switch (t.childNodes && (r.childNodes = new x), r.ownerDocument = e, r.nodeType) {
                    case p:
                        var a = t.attributes,
                            u = r.attributes = new M,
                            s = a.length;
                        u._ownerElement = r;
                        for (var l = 0; l < s; l++) r.setAttributeNode(ve(e, a.item(l), !0));
                        break;
                    case d:
                        n = !0
                }
                if (n)
                    for (var c = t.firstChild; c;) r.appendChild(ve(e, c, n)), c = c.nextSibling;
                return r
            }

            function ye(e, t, n) {
                e[t] = n
            }
            I.prototype = Error.prototype, l(D, I), x.prototype = {
                length: 0,
                item: function (e) {
                    return this[e] || null
                },
                toString: function (e, t) {
                    for (var n = [], r = 0; r < this.length; r++) Ne(this[r], n, e, t);
                    return n.join("")
                },
                filter: function (e) {
                    return Array.prototype.filter.call(this, e)
                },
                indexOf: function (e) {
                    return Array.prototype.indexOf.call(this, e)
                }
            }, R.prototype.item = function (e) {
                return A(this), this[e]
            }, c(R, x), M.prototype = {
                length: 0,
                item: x.prototype.item,
                getNamedItem: function (e) {
                    for (var t = this.length; t--;) {
                        var n = this[t];
                        if (n.nodeName == e) return n
                    }
                },
                setNamedItem: function (e) {
                    var t = e.ownerElement;
                    if (t && t != this._ownerElement) throw new I(C);
                    var n = this.getNamedItem(e.nodeName);
                    return P(this._ownerElement, this, e, n), n
                },
                setNamedItemNS: function (e) {
                    var t, n = e.ownerElement;
                    if (n && n != this._ownerElement) throw new I(C);
                    return t = this.getNamedItemNS(e.namespaceURI, e.localName), P(this._ownerElement, this, e, t), t
                },
                removeNamedItem: function (e) {
                    var t = this.getNamedItem(e);
                    return k(this._ownerElement, this, t), t
                },
                removeNamedItemNS: function (e, t) {
                    var n = this.getNamedItemNS(e, t);
                    return k(this._ownerElement, this, n), n
                },
                getNamedItemNS: function (e, t) {
                    for (var n = this.length; n--;) {
                        var r = this[n];
                        if (r.localName == t && r.namespaceURI == e) return r
                    }
                    return null
                }
            }, L.prototype = {
                hasFeature: function (e, t) {
                    return !0
                },
                createDocument: function (e, t, n) {
                    var r = new F;
                    if (r.implementation = this, r.childNodes = new x, r.doctype = n || null, n && r.appendChild(n), t) {
                        var i = r.createElementNS(e, t);
                        r.appendChild(i)
                    }
                    return r
                },
                createDocumentType: function (e, t, n) {
                    var r = new ae;
                    return r.name = e, r.nodeName = e, r.publicId = t || "", r.systemId = n || "", r
                }
            }, B.prototype = {
                firstChild: null,
                lastChild: null,
                previousSibling: null,
                nextSibling: null,
                attributes: null,
                parentNode: null,
                childNodes: null,
                ownerDocument: null,
                nodeValue: null,
                namespaceURI: null,
                prefix: null,
                localName: null,
                insertBefore: function (e, t) {
                    return K(this, e, t)
                },
                replaceChild: function (e, t) {
                    K(this, e, t, J), t && this.removeChild(t)
                },
                removeChild: function (e) {
                    return Y(this, e)
                },
                appendChild: function (e) {
                    return this.insertBefore(e, null)
                },
                hasChildNodes: function () {
                    return null != this.firstChild
                },
                cloneNode: function (e) {
                    return ve(this.ownerDocument || this, this, e)
                },
                normalize: function () {
                    for (var e = this.firstChild; e;) {
                        var t = e.nextSibling;
                        t && t.nodeType == h && e.nodeType == h ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
                    }
                },
                isSupported: function (e, t) {
                    return this.ownerDocument.implementation.hasFeature(e, t)
                },
                hasAttributes: function () {
                    return this.attributes.length > 0
                },
                lookupPrefix: function (e) {
                    for (var t = this; t;) {
                        var n = t._nsMap;
                        if (n)
                            for (var r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r) && n[r] === e) return r;
                        t = t.nodeType == d ? t.ownerDocument : t.parentNode
                    }
                    return null
                },
                lookupNamespaceURI: function (e) {
                    for (var t = this; t;) {
                        var n = t._nsMap;
                        if (n && Object.prototype.hasOwnProperty.call(n, e)) return n[e];
                        t = t.nodeType == d ? t.ownerDocument : t.parentNode
                    }
                    return null
                },
                isDefaultNamespace: function (e) {
                    return null == this.lookupPrefix(e)
                }
            }, l(f, B), l(f, B.prototype), F.prototype = {
                nodeName: "#document",
                nodeType: g,
                doctype: null,
                documentElement: null,
                _inc: 1,
                insertBefore: function (e, t) {
                    if (e.nodeType == w) {
                        for (var n = e.firstChild; n;) {
                            var r = n.nextSibling;
                            this.insertBefore(n, t), n = r
                        }
                        return e
                    }
                    return K(this, e, t), e.ownerDocument = this, null === this.documentElement && e.nodeType === p && (this.documentElement = e), e
                },
                removeChild: function (e) {
                    return this.documentElement == e && (this.documentElement = null), Y(this, e)
                },
                replaceChild: function (e, t) {
                    K(this, e, t, J), e.ownerDocument = this, t && this.removeChild(t), $(e) && (this.documentElement = e)
                },
                importNode: function (e, t) {
                    return Ee(this, e, t)
                },
                getElementById: function (e) {
                    var t = null;
                    return j(this.documentElement, (function (n) {
                        if (n.nodeType == p && n.getAttribute("id") == e) return t = n, !0
                    })), t
                },
                getElementsByClassName: function (e) {
                    var t = s(e);
                    return new R(this, (function (n) {
                        var r = [];
                        return t.length > 0 && j(n.documentElement, (function (i) {
                            if (i !== n && i.nodeType === p) {
                                var o = i.getAttribute("class");
                                if (o) {
                                    var a = e === o;
                                    if (!a) {
                                        var u = s(o);
                                        a = t.every((l = u, function (e) {
                                            return l && -1 !== l.indexOf(e)
                                        }))
                                    }
                                    a && r.push(i)
                                }
                            }
                            var l
                        })), r
                    }))
                },
                createElement: function (e) {
                    var t = new ee;
                    return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new x, (t.attributes = new M)._ownerElement = t, t
                },
                createDocumentFragment: function () {
                    var e = new ce;
                    return e.ownerDocument = this, e.childNodes = new x, e
                },
                createTextNode: function (e) {
                    var t = new re;
                    return t.ownerDocument = this, t.appendData(e), t
                },
                createComment: function (e) {
                    var t = new ie;
                    return t.ownerDocument = this, t.appendData(e), t
                },
                createCDATASection: function (e) {
                    var t = new oe;
                    return t.ownerDocument = this, t.appendData(e), t
                },
                createProcessingInstruction: function (e, t) {
                    var n = new fe;
                    return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n
                },
                createAttribute: function (e) {
                    var t = new te;
                    return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
                },
                createEntityReference: function (e) {
                    var t = new le;
                    return t.ownerDocument = this, t.nodeName = e, t
                },
                createElementNS: function (e, t) {
                    var n = new ee,
                        r = t.split(":"),
                        i = n.attributes = new M;
                    return n.childNodes = new x, n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, i._ownerElement = n, n
                },
                createAttributeNS: function (e, t) {
                    var n = new te,
                        r = t.split(":");
                    return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n
                }
            }, c(F, B), ee.prototype = {
                nodeType: p,
                hasAttribute: function (e) {
                    return null != this.getAttributeNode(e)
                },
                getAttribute: function (e) {
                    var t = this.getAttributeNode(e);
                    return t && t.value || ""
                },
                getAttributeNode: function (e) {
                    return this.attributes.getNamedItem(e)
                },
                setAttribute: function (e, t) {
                    var n = this.ownerDocument.createAttribute(e);
                    n.value = n.nodeValue = "" + t, this.setAttributeNode(n)
                },
                removeAttribute: function (e) {
                    var t = this.getAttributeNode(e);
                    t && this.removeAttributeNode(t)
                },
                appendChild: function (e) {
                    return e.nodeType === w ? this.insertBefore(e, null) : function (e, t) {
                        return t.parentNode && t.parentNode.removeChild(t), t.parentNode = e, t.previousSibling = e.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : e.firstChild = t, e.lastChild = t, X(e.ownerDocument, e, t), t
                    }(this, e)
                },
                setAttributeNode: function (e) {
                    return this.attributes.setNamedItem(e)
                },
                setAttributeNodeNS: function (e) {
                    return this.attributes.setNamedItemNS(e)
                },
                removeAttributeNode: function (e) {
                    return this.attributes.removeNamedItem(e.nodeName)
                },
                removeAttributeNS: function (e, t) {
                    var n = this.getAttributeNodeNS(e, t);
                    n && this.removeAttributeNode(n)
                },
                hasAttributeNS: function (e, t) {
                    return null != this.getAttributeNodeNS(e, t)
                },
                getAttributeNS: function (e, t) {
                    var n = this.getAttributeNodeNS(e, t);
                    return n && n.value || ""
                },
                setAttributeNS: function (e, t, n) {
                    var r = this.ownerDocument.createAttributeNS(e, t);
                    r.value = r.nodeValue = "" + n, this.setAttributeNode(r)
                },
                getAttributeNodeNS: function (e, t) {
                    return this.attributes.getNamedItemNS(e, t)
                },
                getElementsByTagName: function (e) {
                    return new R(this, (function (t) {
                        var n = [];
                        return j(t, (function (r) {
                            r === t || r.nodeType != p || "*" !== e && r.tagName != e || n.push(r)
                        })), n
                    }))
                },
                getElementsByTagNameNS: function (e, t) {
                    return new R(this, (function (n) {
                        var r = [];
                        return j(n, (function (i) {
                            i === n || i.nodeType !== p || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i)
                        })), r
                    }))
                }
            }, F.prototype.getElementsByTagName = ee.prototype.getElementsByTagName, F.prototype.getElementsByTagNameNS = ee.prototype.getElementsByTagNameNS, c(ee, B), te.prototype.nodeType = d, c(te, B), ne.prototype = {
                data: "",
                substringData: function (e, t) {
                    return this.data.substring(e, e + t)
                },
                appendData: function (e) {
                    e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
                },
                insertData: function (e, t) {
                    this.replaceData(e, 0, t)
                },
                appendChild: function (e) {
                    throw new Error(_[O])
                },
                deleteData: function (e, t) {
                    this.replaceData(e, t, "")
                },
                replaceData: function (e, t, n) {
                    n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length
                }
            }, c(ne, B), re.prototype = {
                nodeName: "#text",
                nodeType: h,
                splitText: function (e) {
                    var t = this.data,
                        n = t.substring(e);
                    t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
                    var r = this.ownerDocument.createTextNode(n);
                    return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r
                }
            }, c(re, ne), ie.prototype = {
                nodeName: "#comment",
                nodeType: y
            }, c(ie, ne), oe.prototype = {
                nodeName: "#cdata-section",
                nodeType: m
            }, c(oe, ne), ae.prototype.nodeType = T, c(ae, B), ue.prototype.nodeType = b, c(ue, B), se.prototype.nodeType = E, c(se, B), le.prototype.nodeType = N, c(le, B), ce.prototype.nodeName = "#document-fragment", ce.prototype.nodeType = w, c(ce, B), fe.prototype.nodeType = v, c(fe, B), pe.prototype.serializeToString = function (e, t, n) {
                return de.call(e, t, n)
            }, B.prototype.toString = de;
            try {
                if (Object.defineProperty) {
                    function ge(e) {
                        switch (e.nodeType) {
                            case p:
                            case w:
                                var t = [];
                                for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && t.push(ge(e)), e = e.nextSibling;
                                return t.join("");
                            default:
                                return e.nodeValue
                        }
                    }
                    Object.defineProperty(R.prototype, "length", {
                        get: function () {
                            return A(this), this.$$length
                        }
                    }), Object.defineProperty(B.prototype, "textContent", {
                        get: function () {
                            return ge(this)
                        },
                        set: function (e) {
                            switch (this.nodeType) {
                                case p:
                                case w:
                                    for (; this.firstChild;) this.removeChild(this.firstChild);
                                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                                    break;
                                default:
                                    this.data = e, this.value = e, this.nodeValue = e
                            }
                        }
                    }), ye = function (e, t, n) {
                        e["$$" + t] = n
                    }
                }
            } catch (Te) {}
            t.DocumentType = ae, t.DOMException = I, t.DOMImplementation = L, t.Element = ee, t.Node = B, t.NodeList = x, t.XMLSerializer = pe
        }
    }
]);
//# sourceMappingURL=commons-main-dom.js.bundle.js.map