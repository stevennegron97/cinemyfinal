"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [792], {
        973: (t, e, n) => {
            n.d(e, {
                LG: () => ot,
                Qc: () => ut,
                jp: () => N,
                mm: () => w
            });
            var i = n(779),
                r = n(8908),
                a = n.n(r),
                u = n(6723),
                o = n(9084),
                s = n(3969),
                c = function (t) {
                    return !!t && "object" == typeof t
                },
                d = function t() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return n.reduce((function (e, n) {
                        return "object" != typeof n || Object.keys(n).forEach((function (i) {
                            Array.isArray(e[i]) && Array.isArray(n[i]) ? e[i] = e[i].concat(n[i]) : c(e[i]) && c(n[i]) ? e[i] = t(e[i], n[i]) : e[i] = n[i]
                        })), e
                    }), {})
                },
                l = function (t) {
                    return Object.keys(t).map((function (e) {
                        return t[e]
                    }))
                },
                m = function (t) {
                    return t.reduce((function (t, e) {
                        return t.concat(e)
                    }), [])
                },
                f = function (t) {
                    if (!t.length) return [];
                    for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
                    return e
                },
                p = function (t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (e(t[n])) return n;
                    return -1
                },
                g = "INVALID_NUMBER_OF_PERIOD",
                v = "DASH_EMPTY_MANIFEST",
                b = "DASH_INVALID_XML",
                h = "NO_BASE_URL",
                y = "SEGMENT_TIME_UNSPECIFIED",
                S = "UNSUPPORTED_UTC_TIMING_SCHEME",
                I = function (t) {
                    var e = t.baseUrl,
                        n = void 0 === e ? "" : e,
                        r = t.source,
                        u = void 0 === r ? "" : r,
                        o = t.range,
                        s = void 0 === o ? "" : o,
                        c = t.indexRange,
                        d = void 0 === c ? "" : c,
                        l = {
                            uri: u,
                            resolvedUri: (0, i.Z)(n || "", u)
                        };
                    if (s || d) {
                        var m, f = (s || d).split("-"),
                            p = a().BigInt ? a().BigInt(f[0]) : parseInt(f[0], 10),
                            g = a().BigInt ? a().BigInt(f[1]) : parseInt(f[1], 10);
                        p < Number.MAX_SAFE_INTEGER && "bigint" == typeof p && (p = Number(p)), g < Number.MAX_SAFE_INTEGER && "bigint" == typeof g && (g = Number(g)), "bigint" == typeof (m = "bigint" == typeof g || "bigint" == typeof p ? a().BigInt(g) - a().BigInt(p) + a().BigInt(1) : g - p + 1) && m < Number.MAX_SAFE_INTEGER && (m = Number(m)), l.byterange = {
                            length: m,
                            offset: p
                        }
                    }
                    return l
                },
                D = function (t) {
                    return t && "number" != typeof t && (t = parseInt(t, 10)), isNaN(t) ? null : t
                },
                U = {
                    static: function (t) {
                        var e = t.duration,
                            n = t.timescale,
                            i = void 0 === n ? 1 : n,
                            r = t.sourceDuration,
                            a = t.periodDuration,
                            u = D(t.endNumber),
                            o = e / i;
                        return "number" == typeof u ? {
                            start: 0,
                            end: u
                        } : "number" == typeof a ? {
                            start: 0,
                            end: a / o
                        } : {
                            start: 0,
                            end: r / o
                        }
                    },
                    dynamic: function (t) {
                        var e = t.NOW,
                            n = t.clientOffset,
                            i = t.availabilityStartTime,
                            r = t.timescale,
                            a = void 0 === r ? 1 : r,
                            u = t.duration,
                            o = t.periodStart,
                            s = void 0 === o ? 0 : o,
                            c = t.minimumUpdatePeriod,
                            d = void 0 === c ? 0 : c,
                            l = t.timeShiftBufferDepth,
                            m = void 0 === l ? 1 / 0 : l,
                            f = D(t.endNumber),
                            p = (e + n) / 1e3,
                            g = i + s,
                            v = p + d - g,
                            b = Math.ceil(v * a / u),
                            h = Math.floor((p - g - m) * a / u),
                            y = Math.floor((p - g) * a / u);
                        return {
                            start: Math.max(0, h),
                            end: "number" == typeof f ? f : Math.min(b, y)
                        }
                    }
                },
                E = function (t) {
                    var e = t.type,
                        n = t.duration,
                        i = t.timescale,
                        r = void 0 === i ? 1 : i,
                        a = t.periodDuration,
                        u = t.sourceDuration,
                        o = U[e](t),
                        s = function (t, e) {
                            for (var n = [], i = t; i < e; i++) n.push(i);
                            return n
                        }(o.start, o.end).map(function (t) {
                            return function (e) {
                                var n = t.duration,
                                    i = t.timescale,
                                    r = void 0 === i ? 1 : i,
                                    a = t.periodStart,
                                    u = t.startNumber;
                                return {
                                    number: (void 0 === u ? 1 : u) + e,
                                    duration: n / r,
                                    timeline: a,
                                    time: e * n
                                }
                            }
                        }(t));
                    if ("static" === e) {
                        var c = s.length - 1,
                            d = "number" == typeof a ? a : u;
                        s[c].duration = d - n / r * c
                    }
                    return s
                },
                T = function (t) {
                    var e = t.baseUrl,
                        n = t.initialization,
                        i = void 0 === n ? {} : n,
                        r = t.sourceDuration,
                        a = t.indexRange,
                        u = void 0 === a ? "" : a,
                        o = t.periodStart,
                        s = t.presentationTime,
                        c = t.number,
                        d = void 0 === c ? 0 : c,
                        l = t.duration;
                    if (!e) throw new Error(h);
                    var m = I({
                            baseUrl: e,
                            source: i.sourceURL,
                            range: i.range
                        }),
                        f = I({
                            baseUrl: e,
                            source: e,
                            indexRange: u
                        });
                    if (f.map = m, l) {
                        var p = E(t);
                        p.length && (f.duration = p[0].duration, f.timeline = p[0].timeline)
                    } else r && (f.duration = r, f.timeline = o);
                    return f.presentationTime = s || o, f.number = d, [f]
                },
                N = function (t, e, n) {
                    var i, r = t.sidx.map ? t.sidx.map : null,
                        u = t.sidx.duration,
                        o = t.timeline || 0,
                        s = t.sidx.byterange,
                        c = s.offset + s.length,
                        d = e.timescale,
                        l = e.references.filter((function (t) {
                            return 1 !== t.referenceType
                        })),
                        m = [],
                        f = t.endList ? "static" : "dynamic",
                        p = t.sidx.timeline,
                        g = p,
                        v = t.mediaSequence || 0;
                    i = "bigint" == typeof e.firstOffset ? a().BigInt(c) + e.firstOffset : c + e.firstOffset;
                    for (var b = 0; b < l.length; b++) {
                        var h = e.references[b],
                            y = h.referencedSize,
                            S = h.subsegmentDuration,
                            I = void 0;
                        I = "bigint" == typeof i ? i + a().BigInt(y) - a().BigInt(1) : i + y - 1;
                        var D = T({
                            baseUrl: n,
                            timescale: d,
                            timeline: o,
                            periodStart: p,
                            presentationTime: g,
                            number: v,
                            duration: S,
                            sourceDuration: u,
                            indexRange: i + "-" + I,
                            type: f
                        })[0];
                        r && (D.map = r), m.push(D), i += "bigint" == typeof i ? a().BigInt(y) : y, g += S / d, v++
                    }
                    return t.segments = m, t
                },
                R = ["AUDIO", "SUBTITLES"],
                O = function (t) {
                    return (e = t, n = function (t) {
                        return t.timeline
                    }, l(e.reduce((function (t, e) {
                        return e.forEach((function (e) {
                            t[n(e)] = e
                        })), t
                    }), {}))).sort((function (t, e) {
                        return t.timeline > e.timeline ? 1 : -1
                    }));
                    var e, n
                },
                P = function (t) {
                    var e = [];
                    return (0, u.g)(t, R, (function (t, n, i, r) {
                        e = e.concat(t.playlists || [])
                    })), e
                },
                A = function (t) {
                    var e = t.playlist,
                        n = t.mediaSequence;
                    e.mediaSequence = n, e.segments.forEach((function (t, n) {
                        t.number = e.mediaSequence + n
                    }))
                },
                M = function (t) {
                    var e = t.oldManifest,
                        n = t.newManifest,
                        i = e.playlists.concat(P(e)),
                        r = n.playlists.concat(P(n));
                    return n.timelineStarts = O([e.timelineStarts, n.timelineStarts]),
                        function (t) {
                            var e = t.oldPlaylists,
                                n = t.newPlaylists,
                                i = t.timelineStarts;
                            n.forEach((function (t) {
                                t.discontinuitySequence = p(i, (function (e) {
                                    return e.timeline === t.timeline
                                }));
                                var n = function (t, e) {
                                    for (var n = 0; n < t.length; n++)
                                        if (t[n].attributes.NAME === e) return t[n];
                                    return null
                                }(e, t.attributes.NAME);
                                if (n && !t.sidx) {
                                    var r = t.segments[0],
                                        a = p(n.segments, (function (t) {
                                            return Math.abs(t.presentationTime - r.presentationTime) < .016666666666666666
                                        }));
                                    if (-1 === a) return A({
                                        playlist: t,
                                        mediaSequence: n.mediaSequence + n.segments.length
                                    }), t.segments[0].discontinuity = !0, t.discontinuityStarts.unshift(0), void((!n.segments.length && t.timeline > n.timeline || n.segments.length && t.timeline > n.segments[n.segments.length - 1].timeline) && t.discontinuitySequence--);
                                    n.segments[a].discontinuity && !r.discontinuity && (r.discontinuity = !0, t.discontinuityStarts.unshift(0), t.discontinuitySequence--), A({
                                        playlist: t,
                                        mediaSequence: n.segments[a].number
                                    })
                                }
                            }))
                        }({
                            oldPlaylists: i,
                            newPlaylists: r,
                            timelineStarts: n.timelineStarts
                        }), n
                },
                w = function (t) {
                    return t && t.uri + "-" + (e = t.byterange, n = "bigint" == typeof e.offset || "bigint" == typeof e.length ? a().BigInt(e.offset) + a().BigInt(e.length) - a().BigInt(1) : e.offset + e.length - 1, e.offset + "-" + n);
                    var e, n
                },
                L = function (t) {
                    return l(t.reduce((function (t, e) {
                        var n = e.attributes.id + (e.attributes.lang || "");
                        if (t[n]) {
                            var i;
                            if (e.segments) e.segments[0] && (e.segments[0].discontinuity = !0), (i = t[n].segments).push.apply(i, e.segments);
                            e.attributes.contentProtection && (t[n].attributes.contentProtection = e.attributes.contentProtection)
                        } else t[n] = e, t[n].attributes.timelineStarts = [];
                        return t[n].attributes.timelineStarts.push({
                            start: e.attributes.periodStart,
                            timeline: e.attributes.periodStart
                        }), t
                    }), {})).map((function (t) {
                        var e, n;
                        return t.discontinuityStarts = (e = t.segments || [], n = "discontinuity", e.reduce((function (t, e, i) {
                            return e[n] && t.push(i), t
                        }), [])), t
                    }))
                },
                B = function (t, e) {
                    var n = w(t.sidx),
                        i = n && e[n] && e[n].sidx;
                    return i && N(t, i, t.sidx.resolvedUri), t
                },
                x = function (t, e) {
                    if (void 0 === e && (e = {}), !Object.keys(e).length) return t;
                    for (var n in t) t[n] = B(t[n], e);
                    return t
                },
                C = function (t) {
                    var e, n = t.attributes,
                        i = t.segments,
                        r = t.sidx,
                        a = t.discontinuityStarts,
                        u = {
                            attributes: (e = {
                                NAME: n.id,
                                AUDIO: "audio",
                                SUBTITLES: "subs",
                                RESOLUTION: {
                                    width: n.width,
                                    height: n.height
                                },
                                CODECS: n.codecs,
                                BANDWIDTH: n.bandwidth
                            }, e["PROGRAM-ID"] = 1, e),
                            uri: "",
                            endList: "static" === n.type,
                            timeline: n.periodStart,
                            resolvedUri: "",
                            targetDuration: n.duration,
                            discontinuityStarts: a,
                            timelineStarts: n.timelineStarts,
                            segments: i
                        };
                    return n.frameRate && (u.attributes["FRAME-RATE"] = n.frameRate), n.contentProtection && (u.contentProtection = n.contentProtection), r && (u.sidx = r), u
                },
                q = function (t) {
                    var e = t.attributes;
                    return "video/mp4" === e.mimeType || "video/webm" === e.mimeType || "video" === e.contentType
                },
                _ = function (t) {
                    var e = t.attributes;
                    return "audio/mp4" === e.mimeType || "audio/webm" === e.mimeType || "audio" === e.contentType
                },
                F = function (t) {
                    var e = t.attributes;
                    return "text/vtt" === e.mimeType || "text" === e.contentType
                },
                k = function (t) {
                    return t ? Object.keys(t).reduce((function (e, n) {
                        var i = t[n];
                        return e.concat(i.playlists)
                    }), []) : []
                },
                G = function (t) {
                    var e, n = t.dashPlaylists,
                        i = t.locations,
                        r = t.sidxMapping,
                        a = void 0 === r ? {} : r,
                        u = t.previousManifest;
                    if (!n.length) return {};
                    var o = n[0].attributes,
                        s = o.sourceDuration,
                        c = o.type,
                        d = o.suggestedPresentationDelay,
                        l = o.minimumUpdatePeriod,
                        m = L(n.filter(q)).map(C),
                        f = L(n.filter(_)),
                        g = L(n.filter(F)),
                        v = n.map((function (t) {
                            return t.attributes.captionServices
                        })).filter(Boolean),
                        b = {
                            allowCache: !0,
                            discontinuityStarts: [],
                            segments: [],
                            endList: !0,
                            mediaGroups: (e = {
                                AUDIO: {},
                                VIDEO: {}
                            }, e["CLOSED-CAPTIONS"] = {}, e.SUBTITLES = {}, e),
                            uri: "",
                            duration: s,
                            playlists: x(m, a)
                        };
                    l >= 0 && (b.minimumUpdatePeriod = 1e3 * l), i && (b.locations = i), "dynamic" === c && (b.suggestedPresentationDelay = d);
                    var h, y, S = 0 === b.playlists.length,
                        I = f.length ? function (t, e, n) {
                            var i;
                            void 0 === e && (e = {}), void 0 === n && (n = !1);
                            var r = t.reduce((function (t, r) {
                                var a = r.attributes.role && r.attributes.role.value || "",
                                    u = r.attributes.lang || "",
                                    o = r.attributes.label || "main";
                                if (u && !r.attributes.label) {
                                    var s = a ? " (" + a + ")" : "";
                                    o = "" + r.attributes.lang + s
                                }
                                t[o] || (t[o] = {
                                    language: u,
                                    autoselect: !0,
                                    default: "main" === a,
                                    playlists: [],
                                    uri: ""
                                });
                                var c = B(function (t, e) {
                                    var n, i = t.attributes,
                                        r = t.segments,
                                        a = t.sidx,
                                        u = t.mediaSequence,
                                        o = t.discontinuitySequence,
                                        s = t.discontinuityStarts,
                                        c = {
                                            attributes: (n = {
                                                NAME: i.id,
                                                BANDWIDTH: i.bandwidth,
                                                CODECS: i.codecs
                                            }, n["PROGRAM-ID"] = 1, n),
                                            uri: "",
                                            endList: "static" === i.type,
                                            timeline: i.periodStart,
                                            resolvedUri: "",
                                            targetDuration: i.duration,
                                            discontinuitySequence: o,
                                            discontinuityStarts: s,
                                            timelineStarts: i.timelineStarts,
                                            mediaSequence: u,
                                            segments: r
                                        };
                                    return i.contentProtection && (c.contentProtection = i.contentProtection), a && (c.sidx = a), e && (c.attributes.AUDIO = "audio", c.attributes.SUBTITLES = "subs"), c
                                }(r, n), e);
                                return t[o].playlists.push(c), void 0 === i && "main" === a && ((i = r).default = !0), t
                            }), {});
                            return i || (r[Object.keys(r)[0]].default = !0), r
                        }(f, a, S) : null,
                        D = g.length ? function (t, e) {
                            return void 0 === e && (e = {}), t.reduce((function (t, n) {
                                var i = n.attributes.lang || "text";
                                return t[i] || (t[i] = {
                                    language: i,
                                    default: !1,
                                    autoselect: !1,
                                    playlists: [],
                                    uri: ""
                                }), t[i].playlists.push(B(function (t) {
                                    var e, n = t.attributes,
                                        i = t.segments,
                                        r = t.mediaSequence,
                                        a = t.discontinuityStarts,
                                        u = t.discontinuitySequence;
                                    void 0 === i && (i = [{
                                        uri: n.baseUrl,
                                        timeline: n.periodStart,
                                        resolvedUri: n.baseUrl || "",
                                        duration: n.sourceDuration,
                                        number: 0
                                    }], n.duration = n.sourceDuration);
                                    var o = ((e = {
                                        NAME: n.id,
                                        BANDWIDTH: n.bandwidth
                                    })["PROGRAM-ID"] = 1, e);
                                    return n.codecs && (o.CODECS = n.codecs), {
                                        attributes: o,
                                        uri: "",
                                        endList: "static" === n.type,
                                        timeline: n.periodStart,
                                        resolvedUri: n.baseUrl || "",
                                        targetDuration: n.duration,
                                        timelineStarts: n.timelineStarts,
                                        discontinuityStarts: a,
                                        discontinuitySequence: u,
                                        mediaSequence: r,
                                        segments: i
                                    }
                                }(n), e)), t
                            }), {})
                        }(g, a) : null,
                        U = m.concat(k(I), k(D)),
                        E = U.map((function (t) {
                            return t.timelineStarts
                        }));
                    return b.timelineStarts = O(E), h = U, y = b.timelineStarts, h.forEach((function (t) {
                        t.mediaSequence = 0, t.discontinuitySequence = p(y, (function (e) {
                            return e.timeline === t.timeline
                        })), t.segments && t.segments.forEach((function (t, e) {
                            t.number = e
                        }))
                    })), I && (b.mediaGroups.AUDIO.audio = I), D && (b.mediaGroups.SUBTITLES.subs = D), v.length && (b.mediaGroups["CLOSED-CAPTIONS"].cc = v.reduce((function (t, e) {
                        return e ? (e.forEach((function (e) {
                            var n = e.channel,
                                i = e.language;
                            t[i] = {
                                autoselect: !1,
                                default: !1,
                                instreamId: n,
                                language: i
                            }, e.hasOwnProperty("aspectRatio") && (t[i].aspectRatio = e.aspectRatio), e.hasOwnProperty("easyReader") && (t[i].easyReader = e.easyReader), e.hasOwnProperty("3D") && (t[i]["3D"] = e["3D"])
                        })), t) : t
                    }), {})), u ? M({
                        oldManifest: u,
                        newManifest: b
                    }) : b
                },
                z = function (t, e, n) {
                    var i = t.NOW,
                        r = t.clientOffset,
                        a = t.availabilityStartTime,
                        u = t.timescale,
                        o = void 0 === u ? 1 : u,
                        s = t.periodStart,
                        c = void 0 === s ? 0 : s,
                        d = t.minimumUpdatePeriod,
                        l = (i + r) / 1e3 + (void 0 === d ? 0 : d) - (a + c);
                    return Math.ceil((l * o - e) / n)
                },
                j = function (t, e) {
                    for (var n = t.type, i = t.minimumUpdatePeriod, r = void 0 === i ? 0 : i, a = t.media, u = void 0 === a ? "" : a, o = t.sourceDuration, s = t.timescale, c = void 0 === s ? 1 : s, d = t.startNumber, l = void 0 === d ? 1 : d, m = t.periodStart, f = [], p = -1, g = 0; g < e.length; g++) {
                        var v = e[g],
                            b = v.d,
                            h = v.r || 0,
                            y = v.t || 0;
                        p < 0 && (p = y), y && y > p && (p = y);
                        var S = void 0;
                        if (h < 0) {
                            var I = g + 1;
                            S = I === e.length ? "dynamic" === n && r > 0 && u.indexOf("$Number$") > 0 ? z(t, p, b) : (o * c - p) / b : (e[I].t - p) / b
                        } else S = h + 1;
                        for (var D = l + f.length + S, U = l + f.length; U < D;) f.push({
                            number: U,
                            duration: b / c,
                            time: p,
                            timeline: m
                        }), p += b, U++
                    }
                    return f
                },
                $ = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
                H = function (t, e) {
                    return t.replace($, function (t) {
                        return function (e, n, i, r) {
                            if ("$$" === e) return "$";
                            if (void 0 === t[n]) return e;
                            var a = "" + t[n];
                            return "RepresentationID" === n ? a : (r = i ? parseInt(r, 10) : 1, a.length >= r ? a : "" + new Array(r - a.length + 1).join("0") + a)
                        }
                    }(e))
                },
                W = function (t, e) {
                    var n = {
                            RepresentationID: t.id,
                            Bandwidth: t.bandwidth || 0
                        },
                        r = t.initialization,
                        a = void 0 === r ? {
                            sourceURL: "",
                            range: ""
                        } : r,
                        u = I({
                            baseUrl: t.baseUrl,
                            source: H(a.sourceURL, n),
                            range: a.range
                        }),
                        o = function (t, e) {
                            return t.duration || e ? t.duration ? E(t) : j(t, e) : [{
                                number: t.startNumber || 1,
                                duration: t.sourceDuration,
                                time: 0,
                                timeline: t.periodStart
                            }]
                        }(t, e);
                    return o.map((function (e) {
                        n.Number = e.number, n.Time = e.time;
                        var r = H(t.media || "", n),
                            a = t.timescale || 1,
                            o = t.presentationTimeOffset || 0,
                            s = t.periodStart + (e.time - o) / a;
                        return {
                            uri: r,
                            timeline: e.timeline,
                            duration: e.duration,
                            resolvedUri: (0, i.Z)(t.baseUrl || "", r),
                            map: u,
                            number: e.number,
                            presentationTime: s
                        }
                    }))
                },
                V = function (t, e) {
                    var n = t.duration,
                        i = t.segmentUrls,
                        r = void 0 === i ? [] : i,
                        a = t.periodStart;
                    if (!n && !e || n && e) throw new Error(y);
                    var u, o = r.map((function (e) {
                        return function (t, e) {
                            var n = t.baseUrl,
                                i = t.initialization,
                                r = void 0 === i ? {} : i,
                                a = I({
                                    baseUrl: n,
                                    source: r.sourceURL,
                                    range: r.range
                                }),
                                u = I({
                                    baseUrl: n,
                                    source: e.media,
                                    range: e.mediaRange
                                });
                            return u.map = a, u
                        }(t, e)
                    }));
                    return n && (u = E(t)), e && (u = j(t, e)), u.map((function (e, n) {
                        if (o[n]) {
                            var i = o[n],
                                r = t.timescale || 1,
                                u = t.presentationTimeOffset || 0;
                            return i.timeline = e.timeline, i.duration = e.duration, i.number = e.number, i.presentationTime = a + (e.time - u) / r, i
                        }
                    })).filter((function (t) {
                        return t
                    }))
                },
                Z = function (t) {
                    var e, n, i = t.attributes,
                        r = t.segmentInfo;
                    r.template ? (n = W, e = d(i, r.template)) : r.base ? (n = T, e = d(i, r.base)) : r.list && (n = V, e = d(i, r.list));
                    var a = {
                        attributes: i
                    };
                    if (!n) return a;
                    var u = n(e, r.segmentTimeline);
                    if (e.duration) {
                        var o = e,
                            s = o.duration,
                            c = o.timescale,
                            l = void 0 === c ? 1 : c;
                        e.duration = s / l
                    } else u.length ? e.duration = u.reduce((function (t, e) {
                        return Math.max(t, Math.ceil(e.duration))
                    }), 0) : e.duration = 0;
                    return a.attributes = e, a.segments = u, r.base && e.indexRange && (a.sidx = u[0], a.segments = []), a
                },
                X = function (t, e) {
                    return f(t.childNodes).filter((function (t) {
                        return t.tagName === e
                    }))
                },
                Y = function (t) {
                    return t.textContent.trim()
                },
                Q = function (t) {
                    var e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
                    if (!e) return 0;
                    var n = e.slice(1),
                        i = n[0],
                        r = n[1],
                        a = n[2],
                        u = n[3],
                        o = n[4],
                        s = n[5];
                    return 31536e3 * parseFloat(i || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(u || 0) + 60 * parseFloat(o || 0) + parseFloat(s || 0)
                },
                J = {
                    mediaPresentationDuration: function (t) {
                        return Q(t)
                    },
                    availabilityStartTime: function (t) {
                        return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = t) && (e += "Z"), Date.parse(e) / 1e3;
                        var e
                    },
                    minimumUpdatePeriod: function (t) {
                        return Q(t)
                    },
                    suggestedPresentationDelay: function (t) {
                        return Q(t)
                    },
                    type: function (t) {
                        return t
                    },
                    timeShiftBufferDepth: function (t) {
                        return Q(t)
                    },
                    start: function (t) {
                        return Q(t)
                    },
                    width: function (t) {
                        return parseInt(t, 10)
                    },
                    height: function (t) {
                        return parseInt(t, 10)
                    },
                    bandwidth: function (t) {
                        return parseInt(t, 10)
                    },
                    frameRate: function (t) {
                        return function (t) {
                            return parseFloat(t.split("/").reduce((function (t, e) {
                                return t / e
                            })))
                        }(t)
                    },
                    startNumber: function (t) {
                        return parseInt(t, 10)
                    },
                    timescale: function (t) {
                        return parseInt(t, 10)
                    },
                    presentationTimeOffset: function (t) {
                        return parseInt(t, 10)
                    },
                    duration: function (t) {
                        var e = parseInt(t, 10);
                        return isNaN(e) ? Q(t) : e
                    },
                    d: function (t) {
                        return parseInt(t, 10)
                    },
                    t: function (t) {
                        return parseInt(t, 10)
                    },
                    r: function (t) {
                        return parseInt(t, 10)
                    },
                    DEFAULT: function (t) {
                        return t
                    }
                },
                K = function (t) {
                    return t && t.attributes ? f(t.attributes).reduce((function (t, e) {
                        var n = J[e.name] || J.DEFAULT;
                        return t[e.name] = n(e.value), t
                    }), {}) : {}
                },
                tt = {
                    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                },
                et = function (t, e) {
                    return e.length ? m(t.map((function (t) {
                        return e.map((function (e) {
                            return (0, i.Z)(t, Y(e))
                        }))
                    }))) : t
                },
                nt = function (t) {
                    var e = X(t, "SegmentTemplate")[0],
                        n = X(t, "SegmentList")[0],
                        i = n && X(n, "SegmentURL").map((function (t) {
                            return d({
                                tag: "SegmentURL"
                            }, K(t))
                        })),
                        r = X(t, "SegmentBase")[0],
                        a = n || e,
                        u = a && X(a, "SegmentTimeline")[0],
                        o = n || r || e,
                        s = o && X(o, "Initialization")[0],
                        c = e && K(e);
                    c && s ? c.initialization = s && K(s) : c && c.initialization && (c.initialization = {
                        sourceURL: c.initialization
                    });
                    var l = {
                        template: c,
                        segmentTimeline: u && X(u, "S").map((function (t) {
                            return K(t)
                        })),
                        list: n && d(K(n), {
                            segmentUrls: i,
                            initialization: K(s)
                        }),
                        base: r && d(K(r), {
                            initialization: K(s)
                        })
                    };
                    return Object.keys(l).forEach((function (t) {
                        l[t] || delete l[t]
                    })), l
                },
                it = function (t, e, n) {
                    return function (i) {
                        var r, a = K(i),
                            u = et(e, X(i, "BaseURL")),
                            s = X(i, "Role")[0],
                            c = {
                                role: K(s)
                            },
                            l = d(t, a, c),
                            f = X(i, "Accessibility")[0],
                            p = "urn:scte:dash:cc:cea-608:2015" === (r = K(f)).schemeIdUri ? ("string" != typeof r.value ? [] : r.value.split(";")).map((function (t) {
                                var e, n;
                                if (n = t, /^CC\d=/.test(t)) {
                                    var i = t.split("=");
                                    e = i[0], n = i[1]
                                } else /^CC\d$/.test(t) && (e = t);
                                return {
                                    channel: e,
                                    language: n
                                }
                            })) : "urn:scte:dash:cc:cea-708:2015" === r.schemeIdUri ? ("string" != typeof r.value ? [] : r.value.split(";")).map((function (t) {
                                var e = {
                                    channel: void 0,
                                    language: void 0,
                                    aspectRatio: 1,
                                    easyReader: 0,
                                    "3D": 0
                                };
                                if (/=/.test(t)) {
                                    var n = t.split("="),
                                        i = n[0],
                                        r = n[1],
                                        a = void 0 === r ? "" : r;
                                    e.channel = i, e.language = t, a.split(",").forEach((function (t) {
                                        var n = t.split(":"),
                                            i = n[0],
                                            r = n[1];
                                        "lang" === i ? e.language = r : "er" === i ? e.easyReader = Number(r) : "war" === i ? e.aspectRatio = Number(r) : "3D" === i && (e["3D"] = Number(r))
                                    }))
                                } else e.language = t;
                                return e.channel && (e.channel = "SERVICE" + e.channel), e
                            })) : void 0;
                        p && (l = d(l, {
                            captionServices: p
                        }));
                        var g = X(i, "Label")[0];
                        if (g && g.childNodes.length) {
                            var v = g.childNodes[0].nodeValue.trim();
                            l = d(l, {
                                label: v
                            })
                        }
                        var b = X(i, "ContentProtection").reduce((function (t, e) {
                            var n = K(e);
                            n.schemeIdUri && (n.schemeIdUri = n.schemeIdUri.toLowerCase());
                            var i = tt[n.schemeIdUri];
                            if (i) {
                                t[i] = {
                                    attributes: n
                                };
                                var r = X(e, "cenc:pssh")[0];
                                if (r) {
                                    var a = Y(r);
                                    t[i].pssh = a && (0, o.Z)(a)
                                }
                            }
                            return t
                        }), {});
                        Object.keys(b).length && (l = d(l, {
                            contentProtection: b
                        }));
                        var h = nt(i),
                            y = X(i, "Representation"),
                            S = d(n, h);
                        return m(y.map(function (t, e, n) {
                            return function (i) {
                                var r = X(i, "BaseURL"),
                                    a = et(e, r),
                                    u = d(t, K(i)),
                                    o = nt(i);
                                return a.map((function (t) {
                                    return {
                                        segmentInfo: d(n, o),
                                        attributes: d(u, {
                                            baseUrl: t
                                        })
                                    }
                                }))
                            }
                        }(l, u, S)))
                    }
                },
                rt = function (t, e) {
                    return function (n, i) {
                        var r = et(e, X(n.node, "BaseURL")),
                            a = d(t, {
                                periodStart: n.attributes.start
                            });
                        "number" == typeof n.attributes.duration && (a.periodDuration = n.attributes.duration);
                        var u = X(n.node, "AdaptationSet"),
                            o = nt(n.node);
                        return m(u.map(it(a, r, o)))
                    }
                },
                at = function (t) {
                    if ("" === t) throw new Error(v);
                    var e, n, i = new s.DOMParser;
                    try {
                        n = (e = i.parseFromString(t, "application/xml")) && "MPD" === e.documentElement.tagName ? e.documentElement : null
                    } catch (t) {}
                    if (!n || n && n.getElementsByTagName("parsererror").length > 0) throw new Error(b);
                    return n
                },
                ut = function (t, e) {
                    void 0 === e && (e = {});
                    var n = function (t, e) {
                            void 0 === e && (e = {});
                            var n = e,
                                i = n.manifestUri,
                                r = void 0 === i ? "" : i,
                                a = n.NOW,
                                u = void 0 === a ? Date.now() : a,
                                o = n.clientOffset,
                                s = void 0 === o ? 0 : o,
                                c = X(t, "Period");
                            if (!c.length) throw new Error(g);
                            var d = X(t, "Location"),
                                l = K(t),
                                f = et([r], X(t, "BaseURL"));
                            l.type = l.type || "static", l.sourceDuration = l.mediaPresentationDuration || 0, l.NOW = u, l.clientOffset = s, d.length && (l.locations = d.map(Y));
                            var p = [];
                            return c.forEach((function (t, e) {
                                var n = K(t),
                                    i = p[e - 1];
                                n.start = function (t) {
                                    var e = t.attributes,
                                        n = t.priorPeriodAttributes,
                                        i = t.mpdType;
                                    return "number" == typeof e.start ? e.start : n && "number" == typeof n.start && "number" == typeof n.duration ? n.start + n.duration : n || "static" !== i ? null : 0
                                }({
                                    attributes: n,
                                    priorPeriodAttributes: i ? i.attributes : null,
                                    mpdType: l.type
                                }), p.push({
                                    node: t,
                                    attributes: n
                                })
                            })), {
                                locations: l.locations,
                                representationInfo: m(p.map(rt(l, f)))
                            }
                        }(at(t), e),
                        i = n.representationInfo.map(Z);
                    return G({
                        dashPlaylists: i,
                        locations: n.locations,
                        sidxMapping: e.sidxMapping,
                        previousManifest: e.previousManifest
                    })
                },
                ot = function (t) {
                    return function (t) {
                        var e = X(t, "UTCTiming")[0];
                        if (!e) return null;
                        var n = K(e);
                        switch (n.schemeIdUri) {
                            case "urn:mpeg:dash:utc:http-head:2014":
                            case "urn:mpeg:dash:utc:http-head:2012":
                                n.method = "HEAD";
                                break;
                            case "urn:mpeg:dash:utc:http-xsdate:2014":
                            case "urn:mpeg:dash:utc:http-iso:2014":
                            case "urn:mpeg:dash:utc:http-xsdate:2012":
                            case "urn:mpeg:dash:utc:http-iso:2012":
                                n.method = "GET";
                                break;
                            case "urn:mpeg:dash:utc:direct:2014":
                            case "urn:mpeg:dash:utc:direct:2012":
                                n.method = "DIRECT", n.value = Date.parse(n.value);
                                break;
                            default:
                                throw new Error(S)
                        }
                        return n
                    }(at(t))
                }
        }
    }
]);
//# sourceMappingURL=commons-main-mpd-parser.es.js.bundle.js.map