(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [747], {
        3706: (t, e, i) => {
            var r = i(9144),
                n = Object.create || function () {
                    function t() {}
                    return function (e) {
                        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                        return t.prototype = e, new t
                    }
                }();

            function o(t, e) {
                this.name = "ParsingError", this.code = t.code, this.message = e || t.message
            }

            function a(t) {
                function e(t, e, i, r) {
                    return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | r) / 1e3
                }
                var i = t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
                return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
            }

            function s() {
                this.values = n(null)
            }

            function c(t, e, i, r) {
                var n = r ? t.split(r) : [t];
                for (var o in n)
                    if ("string" == typeof n[o]) {
                        var a = n[o].split(i);
                        if (2 === a.length) e(a[0].trim(), a[1].trim())
                    }
            }

            function h(t, e, i) {
                var r = t;

                function n() {
                    var e = a(t);
                    if (null === e) throw new o(o.Errors.BadTimeStamp, "Malformed timestamp: " + r);
                    return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                }

                function h() {
                    t = t.replace(/^\s+/, "")
                }
                if (h(), e.startTime = n(), h(), "--\x3e" !== t.substr(0, 3)) throw new o(o.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
                t = t.substr(3), h(), e.endTime = n(), h(),
                    function (t, e) {
                        var r = new s;
                        c(t, (function (t, e) {
                            switch (t) {
                                case "region":
                                    for (var n = i.length - 1; n >= 0; n--)
                                        if (i[n].id === e) {
                                            r.set(t, i[n].region);
                                            break
                                        } break;
                                case "vertical":
                                    r.alt(t, e, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var o = e.split(","),
                                        a = o[0];
                                    r.integer(t, a), r.percent(t, a) && r.set("snapToLines", !1), r.alt(t, a, ["auto"]), 2 === o.length && r.alt("lineAlign", o[1], ["start", "center", "end"]);
                                    break;
                                case "position":
                                    o = e.split(","), r.percent(t, o[0]), 2 === o.length && r.alt("positionAlign", o[1], ["start", "center", "end"]);
                                    break;
                                case "size":
                                    r.percent(t, e);
                                    break;
                                case "align":
                                    r.alt(t, e, ["start", "center", "end", "left", "right"])
                            }
                        }), /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", "");
                        try {
                            e.line = r.get("line", "auto")
                        } catch (t) {}
                        e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100);
                        try {
                            e.align = r.get("align", "center")
                        } catch (t) {
                            e.align = r.get("align", "middle")
                        }
                        try {
                            e.position = r.get("position", "auto")
                        } catch (t) {
                            e.position = r.get("position", {
                                start: 0,
                                left: 0,
                                center: 50,
                                middle: 50,
                                end: 100,
                                right: 100
                            }, e.align)
                        }
                        e.positionAlign = r.get("positionAlign", {
                            start: "start",
                            left: "start",
                            center: "center",
                            middle: "center",
                            end: "end",
                            right: "end"
                        }, e.align)
                    }(t, e)
            }
            o.prototype = n(Error.prototype), o.prototype.constructor = o, o.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            }, s.prototype = {
                set: function (t, e) {
                    this.get(t) || "" === e || (this.values[t] = e)
                },
                get: function (t, e, i) {
                    return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
                },
                has: function (t) {
                    return t in this.values
                },
                alt: function (t, e, i) {
                    for (var r = 0; r < i.length; ++r)
                        if (e === i[r]) {
                            this.set(t, e);
                            break
                        }
                },
                integer: function (t, e) {
                    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                },
                percent: function (t, e) {
                    return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
                }
            };
            var l = r.createElement && r.createElement("textarea"),
                u = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                f = {
                    white: "rgba(255,255,255,1)",
                    lime: "rgba(0,255,0,1)",
                    cyan: "rgba(0,255,255,1)",
                    red: "rgba(255,0,0,1)",
                    yellow: "rgba(255,255,0,1)",
                    magenta: "rgba(255,0,255,1)",
                    blue: "rgba(0,0,255,1)",
                    black: "rgba(0,0,0,1)"
                },
                p = {
                    v: "title",
                    lang: "lang"
                },
                g = {
                    rt: "ruby"
                };

            function d(t, e) {
                function i() {
                    if (!e) return null;
                    var t, i = e.match(/^([^<]*)(<[^>]*>?)?/);
                    return t = i[1] ? i[1] : i[2], e = e.substr(t.length), t
                }

                function r(t, e) {
                    return !g[e.localName] || g[e.localName] === t.localName
                }

                function n(e, i) {
                    var r = u[e];
                    if (!r) return null;
                    var n = t.document.createElement(r),
                        o = p[e];
                    return o && i && (n[o] = i.trim()), n
                }
                for (var o, s, c = t.document.createElement("div"), h = c, d = []; null !== (o = i());)
                    if ("<" !== o[0]) h.appendChild(t.document.createTextNode((s = o, l.innerHTML = s, s = l.textContent, l.textContent = "", s)));
                    else {
                        if ("/" === o[1]) {
                            d.length && d[d.length - 1] === o.substr(2).replace(">", "") && (d.pop(), h = h.parentNode);
                            continue
                        }
                        var m, v = a(o.substr(1, o.length - 2));
                        if (v) {
                            m = t.document.createProcessingInstruction("timestamp", v), h.appendChild(m);
                            continue
                        }
                        var y = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!y) continue;
                        if (!(m = n(y[1], y[3]))) continue;
                        if (!r(h, m)) continue;
                        if (y[2]) {
                            var b = y[2].split(".");
                            b.forEach((function (t) {
                                var e = /^bg_/.test(t),
                                    i = e ? t.slice(3) : t;
                                if (f.hasOwnProperty(i)) {
                                    var r = e ? "background-color" : "color",
                                        n = f[i];
                                    m.style[r] = n
                                }
                            })), m.className = b.join(" ")
                        }
                        d.push(y[1]), h.appendChild(m), h = m
                    } return c
            }
            var m = [
                [1470, 1470],
                [1472, 1472],
                [1475, 1475],
                [1478, 1478],
                [1488, 1514],
                [1520, 1524],
                [1544, 1544],
                [1547, 1547],
                [1549, 1549],
                [1563, 1563],
                [1566, 1610],
                [1645, 1647],
                [1649, 1749],
                [1765, 1766],
                [1774, 1775],
                [1786, 1805],
                [1807, 1808],
                [1810, 1839],
                [1869, 1957],
                [1969, 1969],
                [1984, 2026],
                [2036, 2037],
                [2042, 2042],
                [2048, 2069],
                [2074, 2074],
                [2084, 2084],
                [2088, 2088],
                [2096, 2110],
                [2112, 2136],
                [2142, 2142],
                [2208, 2208],
                [2210, 2220],
                [8207, 8207],
                [64285, 64285],
                [64287, 64296],
                [64298, 64310],
                [64312, 64316],
                [64318, 64318],
                [64320, 64321],
                [64323, 64324],
                [64326, 64449],
                [64467, 64829],
                [64848, 64911],
                [64914, 64967],
                [65008, 65020],
                [65136, 65140],
                [65142, 65276],
                [67584, 67589],
                [67592, 67592],
                [67594, 67637],
                [67639, 67640],
                [67644, 67644],
                [67647, 67669],
                [67671, 67679],
                [67840, 67867],
                [67872, 67897],
                [67903, 67903],
                [67968, 68023],
                [68030, 68031],
                [68096, 68096],
                [68112, 68115],
                [68117, 68119],
                [68121, 68147],
                [68160, 68167],
                [68176, 68184],
                [68192, 68223],
                [68352, 68405],
                [68416, 68437],
                [68440, 68466],
                [68472, 68479],
                [68608, 68680],
                [126464, 126467],
                [126469, 126495],
                [126497, 126498],
                [126500, 126500],
                [126503, 126503],
                [126505, 126514],
                [126516, 126519],
                [126521, 126521],
                [126523, 126523],
                [126530, 126530],
                [126535, 126535],
                [126537, 126537],
                [126539, 126539],
                [126541, 126543],
                [126545, 126546],
                [126548, 126548],
                [126551, 126551],
                [126553, 126553],
                [126555, 126555],
                [126557, 126557],
                [126559, 126559],
                [126561, 126562],
                [126564, 126564],
                [126567, 126570],
                [126572, 126578],
                [126580, 126583],
                [126585, 126588],
                [126590, 126590],
                [126592, 126601],
                [126603, 126619],
                [126625, 126627],
                [126629, 126633],
                [126635, 126651],
                [1114109, 1114109]
            ];

            function v(t) {
                for (var e = 0; e < m.length; e++) {
                    var i = m[e];
                    if (t >= i[0] && t <= i[1]) return !0
                }
                return !1
            }

            function y(t) {
                var e = [],
                    i = "";
                if (!t || !t.childNodes) return "ltr";

                function r(t, e) {
                    for (var i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
                }

                function n(t) {
                    if (!t || !t.length) return null;
                    var e = t.pop(),
                        i = e.textContent || e.innerText;
                    if (i) {
                        var o = i.match(/^.*(\n|\r)/);
                        return o ? (t.length = 0, o[0]) : i
                    }
                    return "ruby" === e.tagName ? n(t) : e.childNodes ? (r(t, e), n(t)) : void 0
                }
                for (r(e, t); i = n(e);)
                    for (var o = 0; o < i.length; o++)
                        if (v(i.charCodeAt(o))) return "rtl";
                return "ltr"
            }

            function b() {}

            function w(t, e, i) {
                b.call(this), this.cue = e, this.cueDiv = d(t, e.text);
                var r = {
                    color: "rgba(255, 255, 255, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    position: "relative",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline",
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext"
                };
                this.applyStyles(r, this.cueDiv), this.div = t.document.createElement("div"), r = {
                    direction: y(this.cueDiv),
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext",
                    textAlign: "middle" === e.align ? "center" : e.align,
                    font: i.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                }, this.applyStyles(r), this.div.appendChild(this.cueDiv);
                var n = 0;
                switch (e.positionAlign) {
                    case "start":
                        n = e.position;
                        break;
                    case "center":
                        n = e.position - e.size / 2;
                        break;
                    case "end":
                        n = e.position - e.size
                }
                "" === e.vertical ? this.applyStyles({
                    left: this.formatStyle(n, "%"),
                    width: this.formatStyle(e.size, "%")
                }) : this.applyStyles({
                    top: this.formatStyle(n, "%"),
                    height: this.formatStyle(e.size, "%")
                }), this.move = function (t) {
                    this.applyStyles({
                        top: this.formatStyle(t.top, "px"),
                        bottom: this.formatStyle(t.bottom, "px"),
                        left: this.formatStyle(t.left, "px"),
                        right: this.formatStyle(t.right, "px"),
                        height: this.formatStyle(t.height, "px"),
                        width: this.formatStyle(t.width, "px")
                    })
                }
            }

            function T(t) {
                var e, i, r, n;
                if (t.div) {
                    i = t.div.offsetHeight, r = t.div.offsetWidth, n = t.div.offsetTop;
                    var o = (o = t.div.childNodes) && (o = o[0]) && o.getClientRects && o.getClientRects();
                    t = t.div.getBoundingClientRect(), e = o ? Math.max(o[0] && o[0].height || 0, t.height / o.length) : 0
                }
                this.left = t.left, this.right = t.right, this.top = t.top || n, this.height = t.height || i, this.bottom = t.bottom || n + (t.height || i), this.width = t.width || r, this.lineHeight = void 0 !== e ? e : t.lineHeight
            }

            function x(t, e, i, r) {
                var n = new T(e),
                    o = e.cue,
                    a = function (t) {
                        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                        for (var e = t.track, i = e.textTrackList, r = 0, n = 0; n < i.length && i[n] !== e; n++) "showing" === i[n].mode && r++;
                        return -1 * ++r
                    }(o),
                    s = [];
                if (o.snapToLines) {
                    var c;
                    switch (o.vertical) {
                        case "":
                            s = ["+y", "-y"], c = "height";
                            break;
                        case "rl":
                            s = ["+x", "-x"], c = "width";
                            break;
                        case "lr":
                            s = ["-x", "+x"], c = "width"
                    }
                    var h = n.lineHeight,
                        l = h * Math.round(a),
                        u = i[c] + h,
                        f = s[0];
                    Math.abs(l) > u && (l = l < 0 ? -1 : 1, l *= Math.ceil(u / h) * h), a < 0 && (l += "" === o.vertical ? i.height : i.width, s = s.reverse()), n.move(f, l)
                } else {
                    var p = n.lineHeight / i.height * 100;
                    switch (o.lineAlign) {
                        case "center":
                            a -= p / 2;
                            break;
                        case "end":
                            a -= p
                    }
                    switch (o.vertical) {
                        case "":
                            e.applyStyles({
                                top: e.formatStyle(a, "%")
                            });
                            break;
                        case "rl":
                            e.applyStyles({
                                left: e.formatStyle(a, "%")
                            });
                            break;
                        case "lr":
                            e.applyStyles({
                                right: e.formatStyle(a, "%")
                            })
                    }
                    s = ["+y", "-x", "+x", "-y"], n = new T(e)
                }
                var g = function (t, e) {
                    for (var n, o = new T(t), a = 1, s = 0; s < e.length; s++) {
                        for (; t.overlapsOppositeAxis(i, e[s]) || t.within(i) && t.overlapsAny(r);) t.move(e[s]);
                        if (t.within(i)) return t;
                        var c = t.intersectPercentage(i);
                        a > c && (n = new T(t), a = c), t = new T(o)
                    }
                    return n || o
                }(n, s);
                e.move(g.toCSSCompatValues(i))
            }

            function E() {}
            b.prototype.applyStyles = function (t, e) {
                for (var i in e = e || this.div, t) t.hasOwnProperty(i) && (e.style[i] = t[i])
            }, b.prototype.formatStyle = function (t, e) {
                return 0 === t ? 0 : t + e
            }, w.prototype = n(b.prototype), w.prototype.constructor = w, T.prototype.move = function (t, e) {
                switch (e = void 0 !== e ? e : this.lineHeight, t) {
                    case "+x":
                        this.left += e, this.right += e;
                        break;
                    case "-x":
                        this.left -= e, this.right -= e;
                        break;
                    case "+y":
                        this.top += e, this.bottom += e;
                        break;
                    case "-y":
                        this.top -= e, this.bottom -= e
                }
            }, T.prototype.overlaps = function (t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, T.prototype.overlapsAny = function (t) {
                for (var e = 0; e < t.length; e++)
                    if (this.overlaps(t[e])) return !0;
                return !1
            }, T.prototype.within = function (t) {
                return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
            }, T.prototype.overlapsOppositeAxis = function (t, e) {
                switch (e) {
                    case "+x":
                        return this.left < t.left;
                    case "-x":
                        return this.right > t.right;
                    case "+y":
                        return this.top < t.top;
                    case "-y":
                        return this.bottom > t.bottom
                }
            }, T.prototype.intersectPercentage = function (t) {
                return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
            }, T.prototype.toCSSCompatValues = function (t) {
                return {
                    top: this.top - t.top,
                    bottom: t.bottom - this.bottom,
                    left: this.left - t.left,
                    right: t.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, T.getSimpleBoxPosition = function (t) {
                var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                    i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                    r = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
                return {
                    left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
                    right: t.right,
                    top: t.top || r,
                    height: t.height || e,
                    bottom: t.bottom || r + (t.height || e),
                    width: t.width || i
                }
            }, E.StringDecoder = function () {
                return {
                    decode: function (t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            }, E.convertCueToDOMTree = function (t, e) {
                return t && e ? d(t, e) : null
            };
            E.processCues = function (t, e, i) {
                if (!t || !e || !i) return null;
                for (; i.firstChild;) i.removeChild(i.firstChild);
                var r = t.document.createElement("div");
                if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", i.appendChild(r), function (t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].hasBeenReset || !t[e].displayState) return !0;
                        return !1
                    }(e)) {
                    var n = [],
                        o = T.getSimpleBoxPosition(r),
                        a = {
                            font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
                        };
                    ! function () {
                        for (var i, s, c = 0; c < e.length; c++) s = e[c], i = new w(t, s, a), r.appendChild(i.div), x(0, i, o, n), s.displayState = i.div, n.push(T.getSimpleBoxPosition(i))
                    }()
                } else
                    for (var s = 0; s < e.length; s++) r.appendChild(e[s].displayState)
            }, E.Parser = function (t, e, i) {
                i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
            }, E.Parser.prototype = {
                reportOrThrowError: function (t) {
                    if (!(t instanceof o)) throw t;
                    this.onparsingerror && this.onparsingerror(t)
                },
                parse: function (t) {
                    var e = this;

                    function i() {
                        for (var t = e.buffer, i = 0; i < t.length && "\r" !== t[i] && "\n" !== t[i];) ++i;
                        var r = t.substr(0, i);
                        return "\r" === t[i] && ++i, "\n" === t[i] && ++i, e.buffer = t.substr(i), r
                    }

                    function r(t) {
                        t.match(/X-TIMESTAMP-MAP/) ? c(t, (function (t, i) {
                            if ("X-TIMESTAMP-MAP" === t) ! function (t) {
                                var i = new s;
                                c(t, (function (t, e) {
                                    switch (t) {
                                        case "MPEGT":
                                            i.integer(t + "S", e);
                                            break;
                                        case "LOCA":
                                            i.set(t + "L", a(e))
                                    }
                                }), /[^\d]:/, /,/), e.ontimestampmap && e.ontimestampmap({
                                    MPEGTS: i.get("MPEGTS"),
                                    LOCAL: i.get("LOCAL")
                                })
                            }(i)
                        }), /=/) : c(t, (function (t, i) {
                            if ("Region" === t) ! function (t) {
                                var i = new s;
                                if (c(t, (function (t, e) {
                                        switch (t) {
                                            case "id":
                                                i.set(t, e);
                                                break;
                                            case "width":
                                                i.percent(t, e);
                                                break;
                                            case "lines":
                                                i.integer(t, e);
                                                break;
                                            case "regionanchor":
                                            case "viewportanchor":
                                                var r = e.split(",");
                                                if (2 !== r.length) break;
                                                var n = new s;
                                                if (n.percent("x", r[0]), n.percent("y", r[1]), !n.has("x") || !n.has("y")) break;
                                                i.set(t + "X", n.get("x")), i.set(t + "Y", n.get("y"));
                                                break;
                                            case "scroll":
                                                i.alt(t, e, ["up"])
                                        }
                                    }), /=/, /\s/), i.has("id")) {
                                    var r = new(e.vttjs.VTTRegion || e.window.VTTRegion);
                                    r.width = i.get("width", 100), r.lines = i.get("lines", 3), r.regionAnchorX = i.get("regionanchorX", 0), r.regionAnchorY = i.get("regionanchorY", 100), r.viewportAnchorX = i.get("viewportanchorX", 0), r.viewportAnchorY = i.get("viewportanchorY", 100), r.scroll = i.get("scroll", ""), e.onregion && e.onregion(r), e.regionList.push({
                                        id: i.get("id"),
                                        region: r
                                    })
                                }
                            }(i)
                        }), /:/)
                    }
                    t && (e.buffer += e.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        var n;
                        if ("INITIAL" === e.state) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            var l = (n = i()).match(/^WEBVTT([ \t].*)?$/);
                            if (!l || !l[0]) throw new o(o.Errors.BadSignature);
                            e.state = "HEADER"
                        }
                        for (var u = !1; e.buffer;) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            switch (u ? u = !1 : n = i(), e.state) {
                                case "HEADER":
                                    /:/.test(n) ? r(n) : n || (e.state = "ID");
                                    continue;
                                case "NOTE":
                                    n || (e.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(n)) {
                                        e.state = "NOTE";
                                        break
                                    }
                                    if (!n) continue;
                                    e.cue = new(e.vttjs.VTTCue || e.window.VTTCue)(0, 0, "");
                                    try {
                                        e.cue.align = "center"
                                    } catch (t) {
                                        e.cue.align = "middle"
                                    }
                                    if (e.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                        e.cue.id = n;
                                        continue
                                    }
                                    case "CUE":
                                        try {
                                            h(n, e.cue, e.regionList)
                                        } catch (t) {
                                            e.reportOrThrowError(t), e.cue = null, e.state = "BADCUE";
                                            continue
                                        }
                                        e.state = "CUETEXT";
                                        continue;
                                    case "CUETEXT":
                                        var f = -1 !== n.indexOf("--\x3e");
                                        if (!n || f && (u = !0)) {
                                            e.oncue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                            continue
                                        }
                                        e.cue.text && (e.cue.text += "\n"), e.cue.text += n.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                                        continue;
                                    case "BADCUE":
                                        n || (e.state = "ID");
                                        continue
                            }
                        }
                    } catch (t) {
                        e.reportOrThrowError(t), "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function () {
                    var t = this;
                    try {
                        if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new o(o.Errors.BadSignature)
                    } catch (e) {
                        t.reportOrThrowError(e)
                    }
                    return t.onflush && t.onflush(), this
                }
            }, t.exports = E
        }
    }
]);
//# sourceMappingURL=commons-main-vtt.js.bundle.js.map