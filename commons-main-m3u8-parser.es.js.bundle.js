"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
    [769], {
        8440: (t, e, i) => {
            i.d(e, {
                _b: () => T
            });
            var a = i(4578),
                r = i(976),
                s = i(7462),
                n = i(7326),
                u = i(9084),
                o = function (t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).buffer = "", e
                    }
                    return (0, a.Z)(e, t), e.prototype.push = function (t) {
                        var e;
                        for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
                    }, e
                }(r.Z),
                g = String.fromCharCode(9),
                f = function (t) {
                    var e = /([0-9.]*)?@?([0-9.]*)?/.exec(t || ""),
                        i = {};
                    return e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), i
                },
                p = function (t) {
                    for (var e, i = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), a = {}, r = i.length; r--;) "" !== i[r] && ((e = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = e[0].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^['"](.*)['"]$/g, "$1"), a[e[0]] = e[1]);
                    return a
                },
                c = function (t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).customParsers = [], e.tagMappers = [], e
                    }(0, a.Z)(e, t);
                    var i = e.prototype;
                    return i.push = function (t) {
                        var e, i, a = this;
                        0 !== (t = t.trim()).length && ("#" === t[0] ? this.tagMappers.reduce((function (e, i) {
                            var a = i(t);
                            return a === t ? e : e.concat([a])
                        }), [t]).forEach((function (t) {
                            for (var r = 0; r < a.customParsers.length; r++)
                                if (a.customParsers[r].call(a, t)) return;
                            if (0 === t.indexOf("#EXT"))
                                if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) a.trigger("data", {
                                    type: "tag",
                                    tagType: "m3u"
                                });
                                else {
                                    if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "inf"
                                    }, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void a.trigger("data", i);
                                    if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "targetduration"
                                    }, e[1] && (i.duration = parseInt(e[1], 10)), void a.trigger("data", i);
                                    if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "version"
                                    }, e[1] && (i.version = parseInt(e[1], 10)), void a.trigger("data", i);
                                    if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "media-sequence"
                                    }, e[1] && (i.number = parseInt(e[1], 10)), void a.trigger("data", i);
                                    if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "discontinuity-sequence"
                                    }, e[1] && (i.number = parseInt(e[1], 10)), void a.trigger("data", i);
                                    if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "playlist-type"
                                    }, e[1] && (i.playlistType = e[1]), void a.trigger("data", i);
                                    if (e = /^#EXT-X-BYTERANGE:?(.*)?$/.exec(t)) return i = (0, s.Z)(f(e[1]), {
                                        type: "tag",
                                        tagType: "byterange"
                                    }), void a.trigger("data", i);
                                    if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "allow-cache"
                                    }, e[1] && (i.allowed = !/NO/.test(e[1])), void a.trigger("data", i);
                                    if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                                        if (i = {
                                                type: "tag",
                                                tagType: "map"
                                            }, e[1]) {
                                            var n = p(e[1]);
                                            n.URI && (i.uri = n.URI), n.BYTERANGE && (i.byterange = f(n.BYTERANGE))
                                        }
                                        a.trigger("data", i)
                                    } else if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                                        if (i = {
                                                type: "tag",
                                                tagType: "stream-inf"
                                            }, e[1]) {
                                            if (i.attributes = p(e[1]), i.attributes.RESOLUTION) {
                                                var u = i.attributes.RESOLUTION.split("x"),
                                                    o = {};
                                                u[0] && (o.width = parseInt(u[0], 10)), u[1] && (o.height = parseInt(u[1], 10)), i.attributes.RESOLUTION = o
                                            }
                                            i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["FRAME-RATE"] && (i.attributes["FRAME-RATE"] = parseFloat(i.attributes["FRAME-RATE"])), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                                        }
                                        a.trigger("data", i)
                                    } else {
                                        if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "media"
                                        }, e[1] && (i.attributes = p(e[1])), void a.trigger("data", i);
                                        if (e = /^#EXT-X-ENDLIST/.exec(t)) a.trigger("data", {
                                            type: "tag",
                                            tagType: "endlist"
                                        });
                                        else if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) a.trigger("data", {
                                            type: "tag",
                                            tagType: "discontinuity"
                                        });
                                        else {
                                            if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "program-date-time"
                                            }, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void a.trigger("data", i);
                                            if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "key"
                                            }, e[1] && (i.attributes = p(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void a.trigger("data", i);
                                            if (e = /^#EXT-X-START:?(.*)$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "start"
                                            }, e[1] && (i.attributes = p(e[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)), void a.trigger("data", i);
                                            if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "cue-out-cont"
                                            }, e[1] ? i.data = e[1] : i.data = "", void a.trigger("data", i);
                                            if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "cue-out"
                                            }, e[1] ? i.data = e[1] : i.data = "", void a.trigger("data", i);
                                            if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
                                                type: "tag",
                                                tagType: "cue-in"
                                            }, e[1] ? i.data = e[1] : i.data = "", void a.trigger("data", i);
                                            if ((e = /^#EXT-X-SKIP:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "skip"
                                            }).attributes = p(e[1]), i.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (i.attributes["SKIPPED-SEGMENTS"] = parseInt(i.attributes["SKIPPED-SEGMENTS"], 10)), i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (i.attributes["RECENTLY-REMOVED-DATERANGES"] = i.attributes["RECENTLY-REMOVED-DATERANGES"].split(g)), void a.trigger("data", i);
                                            if ((e = /^#EXT-X-PART:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "part"
                                            }).attributes = p(e[1]), ["DURATION"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = parseFloat(i.attributes[t]))
                                            })), ["INDEPENDENT", "GAP"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = /YES/.test(i.attributes[t]))
                                            })), i.attributes.hasOwnProperty("BYTERANGE") && (i.attributes.byterange = f(i.attributes.BYTERANGE)), void a.trigger("data", i);
                                            if ((e = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "server-control"
                                            }).attributes = p(e[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = parseFloat(i.attributes[t]))
                                            })), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = /YES/.test(i.attributes[t]))
                                            })), void a.trigger("data", i);
                                            if ((e = /^#EXT-X-PART-INF:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "part-inf"
                                            }).attributes = p(e[1]), ["PART-TARGET"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = parseFloat(i.attributes[t]))
                                            })), void a.trigger("data", i);
                                            if ((e = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "preload-hint"
                                            }).attributes = p(e[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach((function (t) {
                                                if (i.attributes.hasOwnProperty(t)) {
                                                    i.attributes[t] = parseInt(i.attributes[t], 10);
                                                    var e = "BYTERANGE-LENGTH" === t ? "length" : "offset";
                                                    i.attributes.byterange = i.attributes.byterange || {}, i.attributes.byterange[e] = i.attributes[t], delete i.attributes[t]
                                                }
                                            })), void a.trigger("data", i);
                                            if ((e = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t)) && e[1]) return (i = {
                                                type: "tag",
                                                tagType: "rendition-report"
                                            }).attributes = p(e[1]), ["LAST-MSN", "LAST-PART"].forEach((function (t) {
                                                i.attributes.hasOwnProperty(t) && (i.attributes[t] = parseInt(i.attributes[t], 10))
                                            })), void a.trigger("data", i);
                                            a.trigger("data", {
                                                type: "tag",
                                                data: t.slice(4)
                                            })
                                        }
                                    }
                                }
                            else a.trigger("data", {
                                type: "comment",
                                text: t.slice(1)
                            })
                        })) : this.trigger("data", {
                            type: "uri",
                            uri: t
                        }))
                    }, i.addParser = function (t) {
                        var e = this,
                            i = t.expression,
                            a = t.customType,
                            r = t.dataParser,
                            s = t.segment;
                        "function" != typeof r && (r = function (t) {
                            return t
                        }), this.customParsers.push((function (t) {
                            if (i.exec(t)) return e.trigger("data", {
                                type: "custom",
                                data: r(t),
                                customType: a,
                                segment: s
                            }), !0
                        }))
                    }, i.addTagMapper = function (t) {
                        var e = t.expression,
                            i = t.map;
                        this.tagMappers.push((function (t) {
                            return e.test(t) ? i(t) : t
                        }))
                    }, e
                }(r.Z),
                d = function (t) {
                    var e = {};
                    return Object.keys(t).forEach((function (i) {
                        var a;
                        e[(a = i, a.toLowerCase().replace(/-(\w)/g, (function (t) {
                            return t[1].toUpperCase()
                        })))] = t[i]
                    })), e
                },
                E = function (t) {
                    var e = t.serverControl,
                        i = t.targetDuration,
                        a = t.partTargetDuration;
                    if (e) {
                        var r = "#EXT-X-SERVER-CONTROL",
                            s = "holdBack",
                            n = "partHoldBack",
                            u = i && 3 * i,
                            o = a && 2 * a;
                        i && !e.hasOwnProperty(s) && (e[s] = u, this.trigger("info", {
                            message: r + " defaulting HOLD-BACK to targetDuration * 3 (" + u + ")."
                        })), u && e[s] < u && (this.trigger("warn", {
                            message: r + " clamping HOLD-BACK (" + e[s] + ") to targetDuration * 3 (" + u + ")"
                        }), e[s] = u), a && !e.hasOwnProperty(n) && (e[n] = 3 * a, this.trigger("info", {
                            message: r + " defaulting PART-HOLD-BACK to partTargetDuration * 3 (" + e[n] + ")."
                        })), a && e[n] < o && (this.trigger("warn", {
                            message: r + " clamping PART-HOLD-BACK (" + e[n] + ") to partTargetDuration * 2 (" + o + ")."
                        }), e[n] = o)
                    }
                },
                T = function (t) {
                    function e() {
                        var e;
                        (e = t.call(this) || this).lineStream = new o, e.parseStream = new c, e.lineStream.pipe(e.parseStream);
                        var i, a, r = (0, n.Z)(e),
                            g = [],
                            f = {},
                            p = !1,
                            T = function () {},
                            h = {
                                AUDIO: {},
                                VIDEO: {},
                                "CLOSED-CAPTIONS": {},
                                SUBTITLES: {}
                            },
                            b = 0;
                        e.manifest = {
                            allowCache: !0,
                            discontinuityStarts: [],
                            segments: []
                        };
                        var m = 0,
                            l = 0;
                        return e.on("end", (function () {
                            f.uri || !f.parts && !f.preloadHints || (!f.map && i && (f.map = i), !f.key && a && (f.key = a), f.timeline || "number" != typeof b || (f.timeline = b), e.manifest.preloadSegment = f)
                        })), e.parseStream.on("data", (function (t) {
                            var e, n;
                            ({
                                tag: function () {
                                    ({
                                        version: function () {
                                            t.version && (this.manifest.version = t.version)
                                        },
                                        "allow-cache": function () {
                                            this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
                                                message: "defaulting allowCache to YES"
                                            }), this.manifest.allowCache = !0)
                                        },
                                        byterange: function () {
                                            var e = {};
                                            "length" in t && (f.byterange = e, e.length = t.length, "offset" in t || (t.offset = m)), "offset" in t && (f.byterange = e, e.offset = t.offset), m = e.offset + e.length
                                        },
                                        endlist: function () {
                                            this.manifest.endList = !0
                                        },
                                        inf: function () {
                                            "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                                message: "defaulting media sequence to zero"
                                            })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                                message: "defaulting discontinuity sequence to zero"
                                            })), t.duration > 0 && (f.duration = t.duration), 0 === t.duration && (f.duration = .01, this.trigger("info", {
                                                message: "updating zero segment duration to a small value"
                                            })), this.manifest.segments = g
                                        },
                                        key: function () {
                                            if (t.attributes)
                                                if ("NONE" !== t.attributes.METHOD)
                                                    if (t.attributes.URI) {
                                                        if ("com.apple.streamingkeydelivery" === t.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void(this.manifest.contentProtection["com.apple.fps.1_0"] = {
                                                            attributes: t.attributes
                                                        });
                                                        if ("com.microsoft.playready" === t.attributes.KEYFORMAT) return this.manifest.contentProtection = this.manifest.contentProtection || {}, void(this.manifest.contentProtection["com.microsoft.playready"] = {
                                                            uri: t.attributes.URI
                                                        });
                                                        if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t.attributes.KEYFORMAT) {
                                                            return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD) ? void this.trigger("warn", {
                                                                message: "invalid key method provided for Widevine"
                                                            }) : ("SAMPLE-AES-CENC" === t.attributes.METHOD && this.trigger("warn", {
                                                                message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                                            }), "data:text/plain;base64," !== t.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                                                                message: "invalid key URI provided for Widevine"
                                                            }) : t.attributes.KEYID && "0x" === t.attributes.KEYID.substring(0, 2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void(this.manifest.contentProtection["com.widevine.alpha"] = {
                                                                attributes: {
                                                                    schemeIdUri: t.attributes.KEYFORMAT,
                                                                    keyId: t.attributes.KEYID.substring(2)
                                                                },
                                                                pssh: (0, u.Z)(t.attributes.URI.split(",")[1])
                                                            })) : void this.trigger("warn", {
                                                                message: "invalid key ID provided for Widevine"
                                                            }))
                                                        }
                                                        t.attributes.METHOD || this.trigger("warn", {
                                                            message: "defaulting key method to AES-128"
                                                        }), a = {
                                                            method: t.attributes.METHOD || "AES-128",
                                                            uri: t.attributes.URI
                                                        }, void 0 !== t.attributes.IV && (a.iv = t.attributes.IV)
                                                    } else this.trigger("warn", {
                                                        message: "ignoring key declaration without URI"
                                                    });
                                            else a = null;
                                            else this.trigger("warn", {
                                                message: "ignoring key declaration without attribute list"
                                            })
                                        },
                                        "media-sequence": function () {
                                            isFinite(t.number) ? this.manifest.mediaSequence = t.number : this.trigger("warn", {
                                                message: "ignoring invalid media sequence: " + t.number
                                            })
                                        },
                                        "discontinuity-sequence": function () {
                                            isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, b = t.number) : this.trigger("warn", {
                                                message: "ignoring invalid discontinuity sequence: " + t.number
                                            })
                                        },
                                        "playlist-type": function () {
                                            /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", {
                                                message: "ignoring unknown playlist type: " + t.playlist
                                            })
                                        },
                                        map: function () {
                                            i = {}, t.uri && (i.uri = t.uri), t.byterange && (i.byterange = t.byterange), a && (i.key = a)
                                        },
                                        "stream-inf": function () {
                                            this.manifest.playlists = g, this.manifest.mediaGroups = this.manifest.mediaGroups || h, t.attributes ? (f.attributes || (f.attributes = {}), (0, s.Z)(f.attributes, t.attributes)) : this.trigger("warn", {
                                                message: "ignoring empty stream-inf attributes"
                                            })
                                        },
                                        media: function () {
                                            if (this.manifest.mediaGroups = this.manifest.mediaGroups || h, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                                var i = this.manifest.mediaGroups[t.attributes.TYPE];
                                                i[t.attributes["GROUP-ID"]] = i[t.attributes["GROUP-ID"]] || {}, e = i[t.attributes["GROUP-ID"]], (n = {
                                                    default: /yes/i.test(t.attributes.DEFAULT)
                                                }).default ? n.autoselect = !0 : n.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE), t.attributes.URI && (n.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)), e[t.attributes.NAME] = n
                                            } else this.trigger("warn", {
                                                message: "ignoring incomplete or missing media group"
                                            })
                                        },
                                        discontinuity: function () {
                                            b += 1, f.discontinuity = !0, this.manifest.discontinuityStarts.push(g.length)
                                        },
                                        "program-date-time": function () {
                                            void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), f.dateTimeString = t.dateTimeString, f.dateTimeObject = t.dateTimeObject
                                        },
                                        targetduration: function () {
                                            !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                                message: "ignoring invalid target duration: " + t.duration
                                            }) : (this.manifest.targetDuration = t.duration, E.call(this, this.manifest))
                                        },
                                        start: function () {
                                            t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                                timeOffset: t.attributes["TIME-OFFSET"],
                                                precise: t.attributes.PRECISE
                                            } : this.trigger("warn", {
                                                message: "ignoring start declaration without appropriate attribute list"
                                            })
                                        },
                                        "cue-out": function () {
                                            f.cueOut = t.data
                                        },
                                        "cue-out-cont": function () {
                                            f.cueOutCont = t.data
                                        },
                                        "cue-in": function () {
                                            f.cueIn = t.data
                                        },
                                        skip: function () {
                                            this.manifest.skip = d(t.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", t.attributes, ["SKIPPED-SEGMENTS"])
                                        },
                                        part: function () {
                                            var e = this;
                                            p = !0;
                                            var i = this.manifest.segments.length,
                                                a = d(t.attributes);
                                            f.parts = f.parts || [], f.parts.push(a), a.byterange && (a.byterange.hasOwnProperty("offset") || (a.byterange.offset = l), l = a.byterange.offset + a.byterange.length);
                                            var r = f.parts.length - 1;
                                            this.warnOnMissingAttributes_("#EXT-X-PART #" + r + " for segment #" + i, t.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((function (t, i) {
                                                t.hasOwnProperty("lastPart") || e.trigger("warn", {
                                                    message: "#EXT-X-RENDITION-REPORT #" + i + " lacks required attribute(s): LAST-PART"
                                                })
                                            }))
                                        },
                                        "server-control": function () {
                                            var e = this.manifest.serverControl = d(t.attributes);
                                            e.hasOwnProperty("canBlockReload") || (e.canBlockReload = !1, this.trigger("info", {
                                                message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                                            })), E.call(this, this.manifest), e.canSkipDateranges && !e.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                                                message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                                            })
                                        },
                                        "preload-hint": function () {
                                            var e = this.manifest.segments.length,
                                                i = d(t.attributes),
                                                a = i.type && "PART" === i.type;
                                            f.preloadHints = f.preloadHints || [], f.preloadHints.push(i), i.byterange && (i.byterange.hasOwnProperty("offset") || (i.byterange.offset = a ? l : 0, a && (l = i.byterange.offset + i.byterange.length)));
                                            var r = f.preloadHints.length - 1;
                                            if (this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #" + r + " for segment #" + e, t.attributes, ["TYPE", "URI"]), i.type)
                                                for (var s = 0; s < f.preloadHints.length - 1; s++) {
                                                    var n = f.preloadHints[s];
                                                    n.type && (n.type === i.type && this.trigger("warn", {
                                                        message: "#EXT-X-PRELOAD-HINT #" + r + " for segment #" + e + " has the same TYPE " + i.type + " as preload hint #" + s
                                                    }))
                                                }
                                        },
                                        "rendition-report": function () {
                                            var e = d(t.attributes);
                                            this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(e);
                                            var i = this.manifest.renditionReports.length - 1,
                                                a = ["LAST-MSN", "URI"];
                                            p && a.push("LAST-PART"), this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + i, t.attributes, a)
                                        },
                                        "part-inf": function () {
                                            this.manifest.partInf = d(t.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", t.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), E.call(this, this.manifest)
                                        }
                                    } [t.tagType] || T).call(r)
                                },
                                uri: function () {
                                    f.uri = t.uri, g.push(f), this.manifest.targetDuration && !("duration" in f) && (this.trigger("warn", {
                                        message: "defaulting segment duration to the target duration"
                                    }), f.duration = this.manifest.targetDuration), a && (f.key = a), f.timeline = b, i && (f.map = i), l = 0, f = {}
                                },
                                comment: function () {},
                                custom: function () {
                                    t.segment ? (f.custom = f.custom || {}, f.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
                                }
                            })[t.type].call(r)
                        })), e
                    }(0, a.Z)(e, t);
                    var i = e.prototype;
                    return i.warnOnMissingAttributes_ = function (t, e, i) {
                        var a = [];
                        i.forEach((function (t) {
                            e.hasOwnProperty(t) || a.push(t)
                        })), a.length && this.trigger("warn", {
                            message: t + " lacks required attribute(s): " + a.join(", ")
                        })
                    }, i.push = function (t) {
                        this.lineStream.push(t)
                    }, i.end = function () {
                        this.lineStream.push("\n"), this.trigger("end")
                    }, i.addParser = function (t) {
                        this.parseStream.addParser(t)
                    }, i.addTagMapper = function (t) {
                        this.parseStream.addTagMapper(t)
                    }, e
                }(r.Z)
        }
    }
]);
//# sourceMappingURL=commons-main-m3u8-parser.es.js.bundle.js.map