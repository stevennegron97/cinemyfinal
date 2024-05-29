/*! For license information please see commons-main-index-680e2b70.js.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkNxStreaming = self.webpackChunkNxStreaming || []).push([
            [982], {
                4733: (e, t, n) => {
                        n.d(t, {
                            $: () => Qe,
                            A: () => u,
                            C: () => l,
                            H: () => ve,
                            I: () => _e,
                            K: () => Re,
                            M: () => Z,
                            N: () => Oe,
                            P: () => Tn,
                            Q: () => De,
                            R: () => fn,
                            U: () => Me,
                            V: () => Ue,
                            W: () => Le,
                            X: () => Fe,
                            Y: () => Ve,
                            Z: () => He,
                            _: () => Ze,
                            a: () => jt,
                            a0: () => et,
                            a1: () => tt,
                            a2: () => ot,
                            a3: () => at,
                            a4: () => ct,
                            a5: () => ut,
                            a6: () => dt,
                            a7: () => lt,
                            a8: () => ht,
                            a9: () => pt,
                            aA: () => Jn,
                            aB: () => E,
                            aC: () => Q,
                            aD: () => Gn,
                            aE: () => Vn,
                            aF: () => Fn,
                            aG: () => fe,
                            aK: () => Ht,
                            aN: () => xe,
                            aa: () => mt,
                            ab: () => ft,
                            ac: () => gt,
                            ad: () => vt,
                            ae: () => yt,
                            ah: () => It,
                            ai: () => _t,
                            aj: () => wt,
                            am: () => Ke,
                            an: () => Nt,
                            ap: () => Ct,
                            aq: () => Mt,
                            ar: () => k,
                            as: () => ue,
                            at: () => oe,
                            au: () => g,
                            av: () => gi,
                            aw: () => Xn,
                            ax: () => de,
                            ay: () => v,
                            az: () => w,
                            b: () => Vt,
                            c: () => On,
                            d: () => Cn,
                            e: () => Pn,
                            f: () => qn,
                            g: () => Wn,
                            h: () => Hn,
                            i: () => nn,
                            j: () => $n,
                            k: () => yi,
                            l: () => yn,
                            m: () => wi,
                            o: () => Ai,
                            p: () => c,
                            r: () => In,
                            s: () => vn,
                            u: () => wn
                        });
                        var i = n(4444),
                            r = n(2238),
                            s = n(3333),
                            o = n(655),
                            a = n(8463);
                        const c = {
                                FACEBOOK: "facebook.com",
                                GITHUB: "github.com",
                                GOOGLE: "google.com",
                                PASSWORD: "password",
                                PHONE: "phone",
                                TWITTER: "twitter.com"
                            },
                            u = {
                                EMAIL_SIGNIN: "EMAIL_SIGNIN",
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
                                VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            };

                        function d() {
                            return {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }
                        }
                        const l = function () {
                                return {
                                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                                    "argument-error": "",
                                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                                    "cordova-not-ready": "Cordova framework is not ready.",
                                    "cors-unsupported": "This browser is not supported.",
                                    "credential-already-in-use": "This credential is already associated with a different user account.",
                                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                                    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
                                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                                    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                                    "email-already-in-use": "The email address is already in use by another account.",
                                    "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
                                    "expired-action-code": "The action code has expired.",
                                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                                    "internal-error": "An internal AuthError has occurred.",
                                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                                    "invalid-auth-event": "An internal AuthError has occurred.",
                                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                                    "invalid-email": "The email address is badly formatted.",
                                    "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
                                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                                    "wrong-password": "The password is invalid or the user does not have a password.",
                                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                                    "invalid-provider-id": "The specified provider ID is invalid.",
                                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                                    "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
                                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                                    "missing-continue-uri": "A continue URL must be provided in the request.",
                                    "missing-iframe-start": "An internal AuthError has occurred.",
                                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                                    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                                    "missing-password": "A non-empty password must be provided",
                                    "missing-multi-factor-info": "No second factor identifier is provided.",
                                    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                                    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                                    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                                    "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
                                    "no-auth-event": "An internal AuthError has occurred.",
                                    "no-such-provider": "User was not linked to an account with the given provider.",
                                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                                    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                                    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                                    timeout: "The operation has timed out.",
                                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                                    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                                    "unverified-email": "The operation requires a verified email.",
                                    "user-cancelled": "The user did not grant your application the permissions it requested.",
                                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                                    "user-disabled": "The user account has been disabled by an administrator.",
                                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                                    "user-signed-out": "",
                                    "weak-password": "The password must be 6 characters long or more.",
                                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
                                    "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."
                                }
                            },
                            h = d,
                            p = new i.LL("auth", "Firebase", {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }),
                            m = new s.Yd("@firebase/auth");

                        function f(e, ...t) {
                            m.logLevel <= s.in.ERROR && m.error(`Auth (${r.SDK_VERSION}): ${e}`, ...t)
                        }

                        function g(e, ...t) {
                            throw _(e, ...t)
                        }

                        function v(e, ...t) {
                            return _(e, ...t)
                        }

                        function y(e, t, n) {
                            const r = Object.assign(Object.assign({}, h()), {
                                [t]: n
                            });
                            return new i.LL("auth", "Firebase", r).create(t, {
                                appName: e.name
                            })
                        }

                        function I(e, t, n) {
                            if (!(t instanceof n)) throw n.name !== t.constructor.name && g(e, "argument-error"), y(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
                        }

                        function _(e, ...t) {
                            if ("string" != typeof e) {
                                const n = t[0],
                                    i = [...t.slice(1)];
                                return i[0] && (i[0].appName = e.name), e._errorFactory.create(n, ...i)
                            }
                            return p.create(e, ...t)
                        }

                        function w(e, t, ...n) {
                            if (!e) throw _(t, ...n)
                        }

                        function T(e) {
                            const t = "INTERNAL ASSERTION FAILED: " + e;
                            throw f(t), new Error(t)
                        }

                        function k(e, t) {
                            e || T(t)
                        }
                        const b = new Map;

                        function E(e) {
                            k(e instanceof Function, "Expected a class definition");
                            let t = b.get(e);
                            return t ? (k(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, b.set(e, t), t)
                        }

                        function R() {
                            var e;
                            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
                        }

                        function S() {
                            return "http:" === A() || "https:" === A()
                        }

                        function A() {
                            var e;
                            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
                        }
                        class N {
                            constructor(e, t) {
                                this.shortDelay = e, this.longDelay = t, k(t > e, "Short delay should be less than long delay!"), this.isMobile = (0, i.uI)() || (0, i.b$)()
                            }
                            get() {
                                return "undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && (S() || (0, i.ru)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
                            }
                        }

                        function O(e, t) {
                            k(e.emulator, "Emulator should always be set here");
                            const {
                                url: n
                            } = e.emulator;
                            return t ? `${n}${t.startsWith("/")?t.slice(1):t}` : n
                        }
                        class P {
                            static initialize(e, t, n) {
                                this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
                            }
                            static fetch() {
                                return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static headers() {
                                return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static response() {
                                return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                        }
                        const C = {
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_PASSWORD: "wrong-password",
                                MISSING_PASSWORD: "missing-password",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_REQ_TYPE: "internal-error",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                SESSION_EXPIRED: "code-expired",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                                BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
                            },
                            L = new N(3e4, 6e4);

                        function D(e, t) {
                            return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
                                tenantId: e.tenantId
                            }) : t
                        }
                        async function M(e, t, n, r, s = {}) {
                            return U(e, s, (async () => {
                                let s = {},
                                    o = {};
                                r && ("GET" === t ? o = r : s = {
                                    body: JSON.stringify(r)
                                });
                                const a = (0, i.xO)(Object.assign({
                                        key: e.config.apiKey
                                    }, o)).slice(1),
                                    c = await e._getAdditionalHeaders();
                                return c["Content-Type"] = "application/json", e.languageCode && (c["X-Firebase-Locale"] = e.languageCode), P.fetch()(F(e, e.config.apiHost, n, a), Object.assign({
                                    method: t,
                                    headers: c,
                                    referrerPolicy: "no-referrer"
                                }, s))
                            }))
                        }
                        async function U(e, t, n) {
                            e._canInitEmulator = !1;
                            const r = Object.assign(Object.assign({}, C), t);
                            try {
                                const t = new V(e),
                                    i = await Promise.race([n(), t.promise]);
                                t.clearNetworkTimeout();
                                const s = await i.json();
                                if ("needConfirmation" in s) throw z(e, "account-exists-with-different-credential", s);
                                if (i.ok && !("errorMessage" in s)) return s; {
                                    const t = i.ok ? s.errorMessage : s.error.message,
                                        [n, o] = t.split(" : ");
                                    if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw z(e, "credential-already-in-use", s);
                                    if ("EMAIL_EXISTS" === n) throw z(e, "email-already-in-use", s);
                                    if ("USER_DISABLED" === n) throw z(e, "user-disabled", s);
                                    const a = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
                                    if (o) throw y(e, a, o);
                                    g(e, a)
                                }
                            } catch (t) {
                                if (t instanceof i.ZR) throw t;
                                g(e, "network-request-failed", {
                                    message: String(t)
                                })
                            }
                        }
                        async function x(e, t, n, i, r = {}) {
                            const s = await M(e, t, n, i, r);
                            return "mfaPendingCredential" in s && g(e, "multi-factor-auth-required", {
                                _serverResponse: s
                            }), s
                        }

                        function F(e, t, n, i) {
                            const r = `${t}${n}?${i}`;
                            return e.config.emulator ? O(e.config, r) : `${e.config.apiScheme}://${r}`
                        }
                        class V {
                            constructor(e) {
                                this.auth = e, this.timer = null, this.promise = new Promise(((e, t) => {
                                    this.timer = setTimeout((() => t(v(this.auth, "network-request-failed"))), L.get())
                                }))
                            }
                            clearNetworkTimeout() {
                                clearTimeout(this.timer)
                            }
                        }

                        function z(e, t, n) {
                            const i = {
                                appName: e.name
                            };
                            n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
                            const r = v(e, t, i);
                            return r.customData._tokenResponse = n, r
                        }

                        function j(e) {
                            if (e) try {
                                const t = new Date(Number(e));
                                if (!isNaN(t.getTime())) return t.toUTCString()
                            } catch (e) {}
                        }

                        function q(e) {
                            return 1e3 * Number(e)
                        }

                        function H(e) {
                            const [t, n, r] = e.split(".");
                            if (void 0 === t || void 0 === n || void 0 === r) return f("JWT malformed, contained fewer than 3 sections"), null;
                            try {
                                const e = (0, i.tV)(n);
                                return e ? JSON.parse(e) : (f("Failed to decode base64 JWT payload"), null)
                            } catch (e) {
                                return f("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()), null
                            }
                        }
                        async function W(e, t, n = !1) {
                            if (n) return t;
                            try {
                                return await t
                            } catch (t) {
                                throw t instanceof i.ZR && function ({
                                    code: e
                                }) {
                                    return "auth/user-disabled" === e || "auth/user-token-expired" === e
                                }(t) && e.auth.currentUser === e && await e.auth.signOut(), t
                            }
                        }
                        class $ {
                            constructor(e) {
                                this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
                            }
                            _start() {
                                this.isRunning || (this.isRunning = !0, this.schedule())
                            }
                            _stop() {
                                this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
                            }
                            getInterval(e) {
                                var t;
                                if (e) {
                                    const e = this.errorBackoff;
                                    return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
                                } {
                                    this.errorBackoff = 3e4;
                                    const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
                                    return Math.max(0, e)
                                }
                            }
                            schedule(e = !1) {
                                if (!this.isRunning) return;
                                const t = this.getInterval(e);
                                this.timerId = setTimeout((async () => {
                                    await this.iteration()
                                }), t)
                            }
                            async iteration() {
                                try {
                                    await this.user.getIdToken(!0)
                                } catch (e) {
                                    return void("auth/network-request-failed" === (null == e ? void 0 : e.code) && this.schedule(!0))
                                }
                                this.schedule()
                            }
                        }
                        class G {
                            constructor(e, t) {
                                this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
                            }
                            _initializeTime() {
                                this.lastSignInTime = j(this.lastLoginAt), this.creationTime = j(this.createdAt)
                            }
                            _copy(e) {
                                this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
                            }
                            toJSON() {
                                return {
                                    createdAt: this.createdAt,
                                    lastLoginAt: this.lastLoginAt
                                }
                            }
                        }
                        async function K(e) {
                            var t;
                            const n = e.auth,
                                i = await e.getIdToken(),
                                r = await W(e, async function (e, t) {
                                    return M(e, "POST", "/v1/accounts:lookup", t)
                                }(n, {
                                    idToken: i
                                }));
                            w(null == r ? void 0 : r.users.length, n, "internal-error");
                            const s = r.users[0];
                            e._notifyReloadListener(s);
                            const a = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? s.providerUserInfo.map((e => {
                                var {
                                    providerId: t
                                } = e, n = (0, o._T)(e, ["providerId"]);
                                return {
                                    providerId: t,
                                    uid: n.rawId || "",
                                    displayName: n.displayName || null,
                                    email: n.email || null,
                                    phoneNumber: n.phoneNumber || null,
                                    photoURL: n.photoUrl || null
                                }
                            })) : [];
                            const c = (u = e.providerData, d = a, [...u.filter((e => !d.some((t => t.providerId === e.providerId)))), ...d]);
                            var u, d;
                            const l = e.isAnonymous,
                                h = !(e.email && s.passwordHash || (null == c ? void 0 : c.length)),
                                p = !!l && h,
                                m = {
                                    uid: s.localId,
                                    displayName: s.displayName || null,
                                    photoURL: s.photoUrl || null,
                                    email: s.email || null,
                                    emailVerified: s.emailVerified || !1,
                                    phoneNumber: s.phoneNumber || null,
                                    tenantId: s.tenantId || null,
                                    providerData: c,
                                    metadata: new G(s.createdAt, s.lastLoginAt),
                                    isAnonymous: p
                                };
                            Object.assign(e, m)
                        }
                        class J {
                            constructor() {
                                this.refreshToken = null, this.accessToken = null, this.expirationTime = null
                            }
                            get isExpired() {
                                return !this.expirationTime || Date.now() > this.expirationTime - 3e4
                            }
                            updateFromServerResponse(e) {
                                w(e.idToken, "internal-error"), w(void 0 !== e.idToken, "internal-error"), w(void 0 !== e.refreshToken, "internal-error");
                                const t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function (e) {
                                    const t = H(e);
                                    return w(t, "internal-error"), w(void 0 !== t.exp, "internal-error"), w(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
                                }(e.idToken);
                                this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
                            }
                            async getToken(e, t = !1) {
                                return w(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
                            }
                            clearRefreshToken() {
                                this.refreshToken = null
                            }
                            async refresh(e, t) {
                                const {
                                    accessToken: n,
                                    refreshToken: r,
                                    expiresIn: s
                                } = await async function (e, t) {
                                    const n = await U(e, {}, (async () => {
                                        const n = (0, i.xO)({
                                                grant_type: "refresh_token",
                                                refresh_token: t
                                            }).slice(1),
                                            {
                                                tokenApiHost: r,
                                                apiKey: s
                                            } = e.config,
                                            o = F(e, r, "/v1/token", `key=${s}`),
                                            a = await e._getAdditionalHeaders();
                                        return a["Content-Type"] = "application/x-www-form-urlencoded", P.fetch()(o, {
                                            method: "POST",
                                            headers: a,
                                            body: n
                                        })
                                    }));
                                    return {
                                        accessToken: n.access_token,
                                        expiresIn: n.expires_in,
                                        refreshToken: n.refresh_token
                                    }
                                }(e, t);
                                this.updateTokensAndExpiration(n, r, Number(s))
                            }
                            updateTokensAndExpiration(e, t, n) {
                                this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
                            }
                            static fromJSON(e, t) {
                                const {
                                    refreshToken: n,
                                    accessToken: i,
                                    expirationTime: r
                                } = t, s = new J;
                                return n && (w("string" == typeof n, "internal-error", {
                                    appName: e
                                }), s.refreshToken = n), i && (w("string" == typeof i, "internal-error", {
                                    appName: e
                                }), s.accessToken = i), r && (w("number" == typeof r, "internal-error", {
                                    appName: e
                                }), s.expirationTime = r), s
                            }
                            toJSON() {
                                return {
                                    refreshToken: this.refreshToken,
                                    accessToken: this.accessToken,
                                    expirationTime: this.expirationTime
                                }
                            }
                            _assign(e) {
                                this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
                            }
                            _clone() {
                                return Object.assign(new J, this.toJSON())
                            }
                            _performRefresh() {
                                return T("not implemented")
                            }
                        }

                        function B(e, t) {
                            w("string" == typeof e || void 0 === e, "internal-error", {
                                appName: t
                            })
                        }
                        class Y {
                            constructor(e) {
                                var {
                                    uid: t,
                                    auth: n,
                                    stsTokenManager: i
                                } = e, r = (0, o._T)(e, ["uid", "auth", "stsTokenManager"]);
                                this.providerId = "firebase", this.proactiveRefresh = new $(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new G(r.createdAt || void 0, r.lastLoginAt || void 0)
                            }
                            async getIdToken(e) {
                                const t = await W(this, this.stsTokenManager.getToken(this.auth, e));
                                return w(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
                            }
                            getIdTokenResult(e) {
                                return async function (e, t = !1) {
                                    const n = (0, i.m9)(e),
                                        r = await n.getIdToken(t),
                                        s = H(r);
                                    w(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
                                    const o = "object" == typeof s.firebase ? s.firebase : void 0,
                                        a = null == o ? void 0 : o.sign_in_provider;
                                    return {
                                        claims: s,
                                        token: r,
                                        authTime: j(q(s.auth_time)),
                                        issuedAtTime: j(q(s.iat)),
                                        expirationTime: j(q(s.exp)),
                                        signInProvider: a || null,
                                        signInSecondFactor: (null == o ? void 0 : o.sign_in_second_factor) || null
                                    }
                                }(this, e)
                            }
                            reload() {
                                return async function (e) {
                                    const t = (0, i.m9)(e);
                                    await K(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
                                }(this)
                            }
                            _assign(e) {
                                this !== e && (w(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e => Object.assign({}, e))), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
                            }
                            _clone(e) {
                                const t = new Y(Object.assign(Object.assign({}, this), {
                                    auth: e,
                                    stsTokenManager: this.stsTokenManager._clone()
                                }));
                                return t.metadata._copy(this.metadata), t
                            }
                            _onReload(e) {
                                w(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
                            }
                            _notifyReloadListener(e) {
                                this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
                            }
                            _startProactiveRefresh() {
                                this.proactiveRefresh._start()
                            }
                            _stopProactiveRefresh() {
                                this.proactiveRefresh._stop()
                            }
                            async _updateTokensIfNecessary(e, t = !1) {
                                let n = !1;
                                e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await K(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
                            }
                            async delete() {
                                const e = await this.getIdToken();
                                return await W(this, async function (e, t) {
                                    return M(e, "POST", "/v1/accounts:delete", t)
                                }(this.auth, {
                                    idToken: e
                                })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
                            }
                            toJSON() {
                                return Object.assign(Object.assign({
                                    uid: this.uid,
                                    email: this.email || void 0,
                                    emailVerified: this.emailVerified,
                                    displayName: this.displayName || void 0,
                                    isAnonymous: this.isAnonymous,
                                    photoURL: this.photoURL || void 0,
                                    phoneNumber: this.phoneNumber || void 0,
                                    tenantId: this.tenantId || void 0,
                                    providerData: this.providerData.map((e => Object.assign({}, e))),
                                    stsTokenManager: this.stsTokenManager.toJSON(),
                                    _redirectEventId: this._redirectEventId
                                }, this.metadata.toJSON()), {
                                    apiKey: this.auth.config.apiKey,
                                    appName: this.auth.name
                                })
                            }
                            get refreshToken() {
                                return this.stsTokenManager.refreshToken || ""
                            }
                            static _fromJSON(e, t) {
                                var n, i, r, s, o, a, c, u;
                                const d = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
                                    l = null !== (i = t.email) && void 0 !== i ? i : void 0,
                                    h = null !== (r = t.phoneNumber) && void 0 !== r ? r : void 0,
                                    p = null !== (s = t.photoURL) && void 0 !== s ? s : void 0,
                                    m = null !== (o = t.tenantId) && void 0 !== o ? o : void 0,
                                    f = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
                                    g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0,
                                    v = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
                                    {
                                        uid: y,
                                        emailVerified: I,
                                        isAnonymous: _,
                                        providerData: T,
                                        stsTokenManager: k
                                    } = t;
                                w(y && k, e, "internal-error");
                                const b = J.fromJSON(this.name, k);
                                w("string" == typeof y, e, "internal-error"), B(d, e.name), B(l, e.name), w("boolean" == typeof I, e, "internal-error"), w("boolean" == typeof _, e, "internal-error"), B(h, e.name), B(p, e.name), B(m, e.name), B(f, e.name), B(g, e.name), B(v, e.name);
                                const E = new Y({
                                    uid: y,
                                    auth: e,
                                    email: l,
                                    emailVerified: I,
                                    displayName: d,
                                    isAnonymous: _,
                                    photoURL: p,
                                    phoneNumber: h,
                                    tenantId: m,
                                    stsTokenManager: b,
                                    createdAt: g,
                                    lastLoginAt: v
                                });
                                return T && Array.isArray(T) && (E.providerData = T.map((e => Object.assign({}, e)))), f && (E._redirectEventId = f), E
                            }
                            static async _fromIdTokenResponse(e, t, n = !1) {
                                const i = new J;
                                i.updateFromServerResponse(t);
                                const r = new Y({
                                    uid: t.localId,
                                    auth: e,
                                    stsTokenManager: i,
                                    isAnonymous: n
                                });
                                return await K(r), r
                            }
                        }
                        class X {
                            constructor() {
                                this.type = "NONE", this.storage = {}
                            }
                            async _isAvailable() {
                                return !0
                            }
                            async _set(e, t) {
                                this.storage[e] = t
                            }
                            async _get(e) {
                                const t = this.storage[e];
                                return void 0 === t ? null : t
                            }
                            async _remove(e) {
                                delete this.storage[e]
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }
                        X.type = "NONE";
                        const Z = X;

                        function Q(e, t, n) {
                            return `firebase:${e}:${t}:${n}`
                        }
                        class ee {
                            constructor(e, t, n) {
                                this.persistence = e, this.auth = t, this.userKey = n;
                                const {
                                    config: i,
                                    name: r
                                } = this.auth;
                                this.fullUserKey = Q(this.userKey, i.apiKey, r), this.fullPersistenceKey = Q("persistence", i.apiKey, r), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
                            }
                            setCurrentUser(e) {
                                return this.persistence._set(this.fullUserKey, e.toJSON())
                            }
                            async getCurrentUser() {
                                const e = await this.persistence._get(this.fullUserKey);
                                return e ? Y._fromJSON(this.auth, e) : null
                            }
                            removeCurrentUser() {
                                return this.persistence._remove(this.fullUserKey)
                            }
                            savePersistenceForRedirect() {
                                return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
                            }
                            async setPersistence(e) {
                                if (this.persistence === e) return;
                                const t = await this.getCurrentUser();
                                return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
                            }
                            delete() {
                                this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
                            }
                            static async create(e, t, n = "authUser") {
                                if (!t.length) return new ee(E(Z), e, n);
                                const i = (await Promise.all(t.map((async e => {
                                    if (await e._isAvailable()) return e
                                })))).filter((e => e));
                                let r = i[0] || E(Z);
                                const s = Q(n, e.config.apiKey, e.name);
                                let o = null;
                                for (const n of t) try {
                                    const t = await n._get(s);
                                    if (t) {
                                        const i = Y._fromJSON(e, t);
                                        n !== r && (o = i), r = n;
                                        break
                                    }
                                } catch (e) {}
                                const a = i.filter((e => e._shouldAllowMigration));
                                return r._shouldAllowMigration && a.length ? (r = a[0], o && await r._set(s, o.toJSON()), await Promise.all(t.map((async e => {
                                    if (e !== r) try {
                                        await e._remove(s)
                                    } catch (e) {}
                                }))), new ee(r, e, n)) : new ee(r, e, n)
                            }
                        }

                        function te(e) {
                            const t = e.toLowerCase();
                            if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
                            if (se(t)) return "IEMobile";
                            if (t.includes("msie") || t.includes("trident/")) return "IE";
                            if (t.includes("edge/")) return "Edge";
                            if (ne(t)) return "Firefox";
                            if (t.includes("silk/")) return "Silk";
                            if (ae(t)) return "Blackberry";
                            if (ce(t)) return "Webos";
                            if (ie(t)) return "Safari";
                            if ((t.includes("chrome/") || re(t)) && !t.includes("edge/")) return "Chrome";
                            if (oe(t)) return "Android"; {
                                const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
                                    n = e.match(t);
                                if (2 === (null == n ? void 0 : n.length)) return n[1]
                            }
                            return "Other"
                        }

                        function ne(e = (0, i.z$)()) {
                            return /firefox\//i.test(e)
                        }

                        function ie(e = (0, i.z$)()) {
                            const t = e.toLowerCase();
                            return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
                        }

                        function re(e = (0, i.z$)()) {
                            return /crios\//i.test(e)
                        }

                        function se(e = (0, i.z$)()) {
                            return /iemobile/i.test(e)
                        }

                        function oe(e = (0, i.z$)()) {
                            return /android/i.test(e)
                        }

                        function ae(e = (0, i.z$)()) {
                            return /blackberry/i.test(e)
                        }

                        function ce(e = (0, i.z$)()) {
                            return /webos/i.test(e)
                        }

                        function ue(e = (0, i.z$)()) {
                            return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
                        }

                        function de(e = (0, i.z$)()) {
                            return /(iPad|iPhone|iPod).*OS 7_\d/i.test(e) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(e)
                        }

                        function le(e = (0, i.z$)()) {
                            return ue(e) || oe(e) || ce(e) || ae(e) || /windows phone/i.test(e) || se(e)
                        }

                        function he(e, t = []) {
                            let n;
                            switch (e) {
                                case "Browser":
                                    n = te((0, i.z$)());
                                    break;
                                case "Worker":
                                    n = `${te((0,i.z$)())}-${e}`;
                                    break;
                                default:
                                    n = e
                            }
                            const s = t.length ? t.join(",") : "FirebaseCore-web";
                            return `${n}/JsCore/${r.SDK_VERSION}/${s}`
                        }
                        class pe {
                            constructor(e) {
                                this.auth = e, this.queue = []
                            }
                            pushCallback(e, t) {
                                const n = t => new Promise(((n, i) => {
                                    try {
                                        n(e(t))
                                    } catch (e) {
                                        i(e)
                                    }
                                }));
                                n.onAbort = t, this.queue.push(n);
                                const i = this.queue.length - 1;
                                return () => {
                                    this.queue[i] = () => Promise.resolve()
                                }
                            }
                            async runMiddleware(e) {
                                if (this.auth.currentUser === e) return;
                                const t = [];
                                try {
                                    for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort)
                                } catch (e) {
                                    t.reverse();
                                    for (const e of t) try {
                                        e()
                                    } catch (e) {}
                                    throw this.auth._errorFactory.create("login-blocked", {
                                        originalMessage: null == e ? void 0 : e.message
                                    })
                                }
                            }
                        }
                        class me {
                            constructor(e, t, n) {
                                this.app = e, this.heartbeatServiceProvider = t, this.config = n, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ge(this), this.idTokenSubscription = new ge(this), this.beforeStateQueue = new pe(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = p, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                                    appVerificationDisabledForTesting: !1
                                }, this.frameworks = [], this.name = e.name, this.clientVersion = n.sdkClientVersion
                            }
                            _initializeWithPersistence(e, t) {
                                return t && (this._popupRedirectResolver = E(t)), this._initializationPromise = this.queue((async () => {
                                    var n, i;
                                    if (!this._deleted && (this.persistenceManager = await ee.create(this, e), !this._deleted)) {
                                        if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively) try {
                                            await this._popupRedirectResolver._initialize(this)
                                        } catch (e) {}
                                        await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null, this._deleted || (this._isInitialized = !0)
                                    }
                                })), this._initializationPromise
                            }
                            async _onStorageEvent() {
                                if (this._deleted) return;
                                const e = await this.assertedPersistence.getCurrentUser();
                                return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e, !0) : void 0
                            }
                            async initializeCurrentUser(e) {
                                var t;
                                const n = await this.assertedPersistence.getCurrentUser();
                                let i = n,
                                    r = !1;
                                if (e && this.config.authDomain) {
                                    await this.getOrInitRedirectPersistenceManager();
                                    const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                                        s = null == i ? void 0 : i._redirectEventId,
                                        o = await this.tryRedirectSignIn(e);
                                    n && n !== s || !(null == o ? void 0 : o.user) || (i = o.user, r = !0)
                                }
                                if (!i) return this.directlySetCurrentUser(null);
                                if (!i._redirectEventId) {
                                    if (r) try {
                                        await this.beforeStateQueue.runMiddleware(i)
                                    } catch (e) {
                                        i = n, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(e)))
                                    }
                                    return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
                                }
                                return w(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
                            }
                            async tryRedirectSignIn(e) {
                                let t = null;
                                try {
                                    t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
                                } catch (e) {
                                    await this._setRedirectUser(null)
                                }
                                return t
                            }
                            async reloadAndSetCurrentUserOrClear(e) {
                                try {
                                    await K(e)
                                } catch (e) {
                                    if ("auth/network-request-failed" !== (null == e ? void 0 : e.code)) return this.directlySetCurrentUser(null)
                                }
                                return this.directlySetCurrentUser(e)
                            }
                            useDeviceLanguage() {
                                this.languageCode = function () {
                                    if ("undefined" == typeof navigator) return null;
                                    const e = navigator;
                                    return e.languages && e.languages[0] || e.language || null
                                }()
                            }
                            async _delete() {
                                this._deleted = !0
                            }
                            async updateCurrentUser(e) {
                                const t = e ? (0, i.m9)(e) : null;
                                return t && w(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
                            }
                            async _updateCurrentUser(e, t = !1) {
                                if (!this._deleted) return e && w(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue((async () => {
                                    await this.directlySetCurrentUser(e), this.notifyAuthListeners()
                                }))
                            }
                            async signOut() {
                                return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
                            }
                            setPersistence(e) {
                                return this.queue((async () => {
                                    await this.assertedPersistence.setPersistence(E(e))
                                }))
                            }
                            _getPersistence() {
                                return this.assertedPersistence.persistence.type
                            }
                            _updateErrorMap(e) {
                                this._errorFactory = new i.LL("auth", "Firebase", e())
                            }
                            onAuthStateChanged(e, t, n) {
                                return this.registerStateListener(this.authStateSubscription, e, t, n)
                            }
                            beforeAuthStateChanged(e, t) {
                                return this.beforeStateQueue.pushCallback(e, t)
                            }
                            onIdTokenChanged(e, t, n) {
                                return this.registerStateListener(this.idTokenSubscription, e, t, n)
                            }
                            toJSON() {
                                var e;
                                return {
                                    apiKey: this.config.apiKey,
                                    authDomain: this.config.authDomain,
                                    appName: this.name,
                                    currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
                                }
                            }
                            async _setRedirectUser(e, t) {
                                const n = await this.getOrInitRedirectPersistenceManager(t);
                                return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
                            }
                            async getOrInitRedirectPersistenceManager(e) {
                                if (!this.redirectPersistenceManager) {
                                    const t = e && E(e) || this._popupRedirectResolver;
                                    w(t, this, "argument-error"), this.redirectPersistenceManager = await ee.create(this, [E(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
                                }
                                return this.redirectPersistenceManager
                            }
                            async _redirectUserForId(e) {
                                var t, n;
                                return this._isInitialized && await this.queue((async () => {})), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
                            }
                            async _persistUserIfCurrent(e) {
                                if (e === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(e)))
                            }
                            _notifyListenersIfCurrent(e) {
                                e === this.currentUser && this.notifyAuthListeners()
                            }
                            _key() {
                                return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
                            }
                            _startProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
                            }
                            _stopProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
                            }
                            get _currentUser() {
                                return this.currentUser
                            }
                            notifyAuthListeners() {
                                var e, t;
                                if (!this._isInitialized) return;
                                this.idTokenSubscription.next(this.currentUser);
                                const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
                                this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
                            }
                            registerStateListener(e, t, n, i) {
                                if (this._deleted) return () => {};
                                const r = "function" == typeof t ? t : t.next.bind(t),
                                    s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                                return w(s, this, "internal-error"), s.then((() => r(this.currentUser))), "function" == typeof t ? e.addObserver(t, n, i) : e.addObserver(t)
                            }
                            async directlySetCurrentUser(e) {
                                this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
                            }
                            queue(e) {
                                return this.operations = this.operations.then(e, e), this.operations
                            }
                            get assertedPersistence() {
                                return w(this.persistenceManager, this, "internal-error"), this.persistenceManager
                            }
                            _logFramework(e) {
                                e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = he(this.config.clientPlatform, this._getFrameworks()))
                            }
                            _getFrameworks() {
                                return this.frameworks
                            }
                            async _getAdditionalHeaders() {
                                var e;
                                const t = {
                                    "X-Client-Version": this.clientVersion
                                };
                                this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
                                const n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                                    optional: !0
                                })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
                                return n && (t["X-Firebase-Client"] = n), t
                            }
                        }

                        function fe(e) {
                            return (0, i.m9)(e)
                        }
                        class ge {
                            constructor(e) {
                                this.auth = e, this.observer = null, this.addObserver = (0, i.ne)((e => this.observer = e))
                            }
                            get next() {
                                return w(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
                            }
                        }

                        function ve(e, t, n) {
                            const i = fe(e);
                            w(i._canInitEmulator, i, "emulator-config-failed"), w(/^https?:\/\//.test(t), i, "invalid-emulator-scheme");
                            const r = !!(null == n ? void 0 : n.disableWarnings),
                                s = ye(t),
                                {
                                    host: o,
                                    port: a
                                } = function (e) {
                                    const t = ye(e),
                                        n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
                                    if (!n) return {
                                        host: "",
                                        port: null
                                    };
                                    const i = n[2].split("@").pop() || "",
                                        r = /^(\[[^\]]+\])(:|$)/.exec(i);
                                    if (r) {
                                        const e = r[1];
                                        return {
                                            host: e,
                                            port: Ie(i.substr(e.length + 1))
                                        }
                                    } {
                                        const [e, t] = i.split(":");
                                        return {
                                            host: e,
                                            port: Ie(t)
                                        }
                                    }
                                }(t),
                                c = null === a ? "" : `:${a}`;
                            i.config.emulator = {
                                url: `${s}//${o}${c}/`
                            }, i.settings.appVerificationDisabledForTesting = !0, i.emulatorConfig = Object.freeze({
                                host: o,
                                port: a,
                                protocol: s.replace(":", ""),
                                options: Object.freeze({
                                    disableWarnings: r
                                })
                            }), r || function () {
                                function e() {
                                    const e = document.createElement("p"),
                                        t = e.style;
                                    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
                                }
                                "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
                                "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e())
                            }()
                        }

                        function ye(e) {
                            const t = e.indexOf(":");
                            return t < 0 ? "" : e.substr(0, t + 1)
                        }

                        function Ie(e) {
                            if (!e) return null;
                            const t = Number(e);
                            return isNaN(t) ? null : t
                        }
                        class _e {
                            constructor(e, t) {
                                this.providerId = e, this.signInMethod = t
                            }
                            toJSON() {
                                return T("not implemented")
                            }
                            _getIdTokenResponse(e) {
                                return T("not implemented")
                            }
                            _linkToIdToken(e, t) {
                                return T("not implemented")
                            }
                            _getReauthenticationResolver(e) {
                                return T("not implemented")
                            }
                        }
                        async function we(e, t) {
                            return M(e, "POST", "/v1/accounts:resetPassword", D(e, t))
                        }
                        async function Te(e, t) {
                            return M(e, "POST", "/v1/accounts:update", t)
                        }
                        async function ke(e, t) {
                            return M(e, "POST", "/v1/accounts:sendOobCode", D(e, t))
                        }
                        class be extends _e {
                            constructor(e, t, n, i = null) {
                                super("password", n), this._email = e, this._password = t, this._tenantId = i
                            }
                            static _fromEmailAndPassword(e, t) {
                                return new be(e, t, "password")
                            }
                            static _fromEmailAndCode(e, t, n = null) {
                                return new be(e, t, "emailLink", n)
                            }
                            toJSON() {
                                return {
                                    email: this._email,
                                    password: this._password,
                                    signInMethod: this.signInMethod,
                                    tenantId: this._tenantId
                                }
                            }
                            static fromJSON(e) {
                                const t = "string" == typeof e ? JSON.parse(e) : e;
                                if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                                    if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                                    if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
                                }
                                return null
                            }
                            async _getIdTokenResponse(e) {
                                switch (this.signInMethod) {
                                    case "password":
                                        return async function (e, t) {
                                            return x(e, "POST", "/v1/accounts:signInWithPassword", D(e, t))
                                        }(e, {
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password
                                        });
                                    case "emailLink":
                                        return async function (e, t) {
                                            return x(e, "POST", "/v1/accounts:signInWithEmailLink", D(e, t))
                                        }(e, {
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        g(e, "internal-error")
                                }
                            }
                            async _linkToIdToken(e, t) {
                                switch (this.signInMethod) {
                                    case "password":
                                        return Te(e, {
                                            idToken: t,
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password
                                        });
                                    case "emailLink":
                                        return async function (e, t) {
                                            return x(e, "POST", "/v1/accounts:signInWithEmailLink", D(e, t))
                                        }(e, {
                                            idToken: t,
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        g(e, "internal-error")
                                }
                            }
                            _getReauthenticationResolver(e) {
                                return this._getIdTokenResponse(e)
                            }
                        }
                        async function Ee(e, t) {
                            return x(e, "POST", "/v1/accounts:signInWithIdp", D(e, t))
                        }
                        class Re extends _e {
                            constructor() {
                                super(...arguments), this.pendingToken = null
                            }
                            static _fromParams(e) {
                                const t = new Re(e.providerId, e.signInMethod);
                                return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : g("argument-error"), t
                            }
                            toJSON() {
                                return {
                                    idToken: this.idToken,
                                    accessToken: this.accessToken,
                                    secret: this.secret,
                                    nonce: this.nonce,
                                    pendingToken: this.pendingToken,
                                    providerId: this.providerId,
                                    signInMethod: this.signInMethod
                                }
                            }
                            static fromJSON(e) {
                                const t = "string" == typeof e ? JSON.parse(e) : e,
                                    {
                                        providerId: n,
                                        signInMethod: i
                                    } = t,
                                    r = (0, o._T)(t, ["providerId", "signInMethod"]);
                                if (!n || !i) return null;
                                const s = new Re(n, i);
                                return s.idToken = r.idToken || void 0, s.accessToken = r.accessToken || void 0, s.secret = r.secret, s.nonce = r.nonce, s.pendingToken = r.pendingToken || null, s
                            }
                            _getIdTokenResponse(e) {
                                return Ee(e, this.buildRequest())
                            }
                            _linkToIdToken(e, t) {
                                const n = this.buildRequest();
                                return n.idToken = t, Ee(e, n)
                            }
                            _getReauthenticationResolver(e) {
                                const t = this.buildRequest();
                                return t.autoCreate = !1, Ee(e, t)
                            }
                            buildRequest() {
                                const e = {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0
                                };
                                if (this.pendingToken) e.pendingToken = this.pendingToken;
                                else {
                                    const t = {};
                                    this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = (0, i.xO)(t)
                                }
                                return e
                            }
                        }
                        const Se = {
                            USER_NOT_FOUND: "user-not-found"
                        };
                        class Ae extends _e {
                            constructor(e) {
                                super("phone", "phone"), this.params = e
                            }
                            static _fromVerification(e, t) {
                                return new Ae({
                                    verificationId: e,
                                    verificationCode: t
                                })
                            }
                            static _fromTokenResponse(e, t) {
                                return new Ae({
                                    phoneNumber: e,
                                    temporaryProof: t
                                })
                            }
                            _getIdTokenResponse(e) {
                                return async function (e, t) {
                                    return x(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, t))
                                }(e, this._makeVerificationRequest())
                            }
                            _linkToIdToken(e, t) {
                                return async function (e, t) {
                                    const n = await x(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, t));
                                    if (n.temporaryProof) throw z(e, "account-exists-with-different-credential", n);
                                    return n
                                }(e, Object.assign({
                                    idToken: t
                                }, this._makeVerificationRequest()))
                            }
                            _getReauthenticationResolver(e) {
                                return async function (e, t) {
                                    return x(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, Object.assign(Object.assign({}, t), {
                                        operation: "REAUTH"
                                    })), Se)
                                }(e, this._makeVerificationRequest())
                            }
                            _makeVerificationRequest() {
                                const {
                                    temporaryProof: e,
                                    phoneNumber: t,
                                    verificationId: n,
                                    verificationCode: i
                                } = this.params;
                                return e && t ? {
                                    temporaryProof: e,
                                    phoneNumber: t
                                } : {
                                    sessionInfo: n,
                                    code: i
                                }
                            }
                            toJSON() {
                                const e = {
                                    providerId: this.providerId
                                };
                                return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
                            }
                            static fromJSON(e) {
                                "string" == typeof e && (e = JSON.parse(e));
                                const {
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: i,
                                    temporaryProof: r
                                } = e;
                                return n || t || i || r ? new Ae({
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: i,
                                    temporaryProof: r
                                }) : null
                            }
                        }
                        class Ne {
                            constructor(e) {
                                var t, n, r, s, o, a;
                                const c = (0, i.zd)((0, i.pd)(e)),
                                    u = null !== (t = c.apiKey) && void 0 !== t ? t : null,
                                    d = null !== (n = c.oobCode) && void 0 !== n ? n : null,
                                    l = function (e) {
                                        switch (e) {
                                            case "recoverEmail":
                                                return "RECOVER_EMAIL";
                                            case "resetPassword":
                                                return "PASSWORD_RESET";
                                            case "signIn":
                                                return "EMAIL_SIGNIN";
                                            case "verifyEmail":
                                                return "VERIFY_EMAIL";
                                            case "verifyAndChangeEmail":
                                                return "VERIFY_AND_CHANGE_EMAIL";
                                            case "revertSecondFactorAddition":
                                                return "REVERT_SECOND_FACTOR_ADDITION";
                                            default:
                                                return null
                                        }
                                    }(null !== (r = c.mode) && void 0 !== r ? r : null);
                                w(u && d && l, "argument-error"), this.apiKey = u, this.operation = l, this.code = d, this.continueUrl = null !== (s = c.continueUrl) && void 0 !== s ? s : null, this.languageCode = null !== (o = c.languageCode) && void 0 !== o ? o : null, this.tenantId = null !== (a = c.tenantId) && void 0 !== a ? a : null
                            }
                            static parseLink(e) {
                                const t = function (e) {
                                    const t = (0, i.zd)((0, i.pd)(e)).link,
                                        n = t ? (0, i.zd)((0, i.pd)(t)).deep_link_id : null,
                                        r = (0, i.zd)((0, i.pd)(e)).deep_link_id;
                                    return (r ? (0, i.zd)((0, i.pd)(r)).link : null) || r || n || t || e
                                }(e);
                                try {
                                    return new Ne(t)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        class Oe {
                            constructor() {
                                this.providerId = Oe.PROVIDER_ID
                            }
                            static credential(e, t) {
                                return be._fromEmailAndPassword(e, t)
                            }
                            static credentialWithLink(e, t) {
                                const n = Ne.parseLink(t);
                                return w(n, "argument-error"), be._fromEmailAndCode(e, n.code, n.tenantId)
                            }
                        }
                        Oe.PROVIDER_ID = "password", Oe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Oe.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
                        class Pe {
                            constructor(e) {
                                this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
                            }
                            setDefaultLanguage(e) {
                                this.defaultLanguageCode = e
                            }
                            setCustomParameters(e) {
                                return this.customParameters = e, this
                            }
                            getCustomParameters() {
                                return this.customParameters
                            }
                        }
                        class Ce extends Pe {
                            constructor() {
                                super(...arguments), this.scopes = []
                            }
                            addScope(e) {
                                return this.scopes.includes(e) || this.scopes.push(e), this
                            }
                            getScopes() {
                                return [...this.scopes]
                            }
                        }
                        class Le extends Ce {
                            static credentialFromJSON(e) {
                                const t = "string" == typeof e ? JSON.parse(e) : e;
                                return w("providerId" in t && "signInMethod" in t, "argument-error"), Re._fromParams(t)
                            }
                            credential(e) {
                                return this._credential(Object.assign(Object.assign({}, e), {
                                    nonce: e.rawNonce
                                }))
                            }
                            _credential(e) {
                                return w(e.idToken || e.accessToken, "argument-error"), Re._fromParams(Object.assign(Object.assign({}, e), {
                                    providerId: this.providerId,
                                    signInMethod: this.providerId
                                }))
                            }
                            static credentialFromResult(e) {
                                return Le.oauthCredentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Le.oauthCredentialFromTaggedObject(e.customData || {})
                            }
                            static oauthCredentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                const {
                                    oauthIdToken: t,
                                    oauthAccessToken: n,
                                    oauthTokenSecret: i,
                                    pendingToken: r,
                                    nonce: s,
                                    providerId: o
                                } = e;
                                if (!(n || i || t || r)) return null;
                                if (!o) return null;
                                try {
                                    return new Le(o)._credential({
                                        idToken: t,
                                        accessToken: n,
                                        nonce: s,
                                        pendingToken: r
                                    })
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        class De extends Ce {
                            constructor() {
                                super("facebook.com")
                            }
                            static credential(e) {
                                return Re._fromParams({
                                    providerId: De.PROVIDER_ID,
                                    signInMethod: De.FACEBOOK_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return De.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return De.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e || !("oauthAccessToken" in e)) return null;
                                if (!e.oauthAccessToken) return null;
                                try {
                                    return De.credential(e.oauthAccessToken)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        De.FACEBOOK_SIGN_IN_METHOD = "facebook.com", De.PROVIDER_ID = "facebook.com";
                        class Me extends Ce {
                            constructor() {
                                super("google.com"), this.addScope("profile")
                            }
                            static credential(e, t) {
                                return Re._fromParams({
                                    providerId: Me.PROVIDER_ID,
                                    signInMethod: Me.GOOGLE_SIGN_IN_METHOD,
                                    idToken: e,
                                    accessToken: t
                                })
                            }
                            static credentialFromResult(e) {
                                return Me.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Me.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                const {
                                    oauthIdToken: t,
                                    oauthAccessToken: n
                                } = e;
                                if (!t && !n) return null;
                                try {
                                    return Me.credential(t, n)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        Me.GOOGLE_SIGN_IN_METHOD = "google.com", Me.PROVIDER_ID = "google.com";
                        class Ue extends Ce {
                            constructor() {
                                super("github.com")
                            }
                            static credential(e) {
                                return Re._fromParams({
                                    providerId: Ue.PROVIDER_ID,
                                    signInMethod: Ue.GITHUB_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return Ue.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Ue.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e || !("oauthAccessToken" in e)) return null;
                                if (!e.oauthAccessToken) return null;
                                try {
                                    return Ue.credential(e.oauthAccessToken)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        Ue.GITHUB_SIGN_IN_METHOD = "github.com", Ue.PROVIDER_ID = "github.com";
                        class xe extends _e {
                            constructor(e, t) {
                                super(e, e), this.pendingToken = t
                            }
                            _getIdTokenResponse(e) {
                                return Ee(e, this.buildRequest())
                            }
                            _linkToIdToken(e, t) {
                                const n = this.buildRequest();
                                return n.idToken = t, Ee(e, n)
                            }
                            _getReauthenticationResolver(e) {
                                const t = this.buildRequest();
                                return t.autoCreate = !1, Ee(e, t)
                            }
                            toJSON() {
                                return {
                                    signInMethod: this.signInMethod,
                                    providerId: this.providerId,
                                    pendingToken: this.pendingToken
                                }
                            }
                            static fromJSON(e) {
                                const t = "string" == typeof e ? JSON.parse(e) : e,
                                    {
                                        providerId: n,
                                        signInMethod: i,
                                        pendingToken: r
                                    } = t;
                                return n && i && r && n === i ? new xe(n, r) : null
                            }
                            static _create(e, t) {
                                return new xe(e, t)
                            }
                            buildRequest() {
                                return {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0,
                                    pendingToken: this.pendingToken
                                }
                            }
                        }
                        class Fe extends Pe {
                            constructor(e) {
                                w(e.startsWith("saml."), "argument-error"), super(e)
                            }
                            static credentialFromResult(e) {
                                return Fe.samlCredentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Fe.samlCredentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromJSON(e) {
                                const t = xe.fromJSON(e);
                                return w(t, "argument-error"), t
                            }
                            static samlCredentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                const {
                                    pendingToken: t,
                                    providerId: n
                                } = e;
                                if (!t || !n) return null;
                                try {
                                    return xe._create(n, t)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        class Ve extends Ce {
                            constructor() {
                                super("twitter.com")
                            }
                            static credential(e, t) {
                                return Re._fromParams({
                                    providerId: Ve.PROVIDER_ID,
                                    signInMethod: Ve.TWITTER_SIGN_IN_METHOD,
                                    oauthToken: e,
                                    oauthTokenSecret: t
                                })
                            }
                            static credentialFromResult(e) {
                                return Ve.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Ve.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                const {
                                    oauthAccessToken: t,
                                    oauthTokenSecret: n
                                } = e;
                                if (!t || !n) return null;
                                try {
                                    return Ve.credential(t, n)
                                } catch (e) {
                                    return null
                                }
                            }
                        }
                        async function ze(e, t) {
                            return x(e, "POST", "/v1/accounts:signUp", D(e, t))
                        }
                        Ve.TWITTER_SIGN_IN_METHOD = "twitter.com", Ve.PROVIDER_ID = "twitter.com";
                        class je {
                            constructor(e) {
                                this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
                            }
                            static async _fromIdTokenResponse(e, t, n, i = !1) {
                                const r = await Y._fromIdTokenResponse(e, n, i),
                                    s = qe(n);
                                return new je({
                                    user: r,
                                    providerId: s,
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                            static async _forOperation(e, t, n) {
                                await e._updateTokensIfNecessary(n, !0);
                                const i = qe(n);
                                return new je({
                                    user: e,
                                    providerId: i,
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                        }

                        function qe(e) {
                            return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
                        }
                        async function He(e) {
                            var t;
                            const n = fe(e);
                            if (await n._initializationPromise, null === (t = n.currentUser) || void 0 === t ? void 0 : t.isAnonymous) return new je({
                                user: n.currentUser,
                                providerId: null,
                                operationType: "signIn"
                            });
                            const i = await ze(n, {
                                    returnSecureToken: !0
                                }),
                                r = await je._fromIdTokenResponse(n, "signIn", i, !0);
                            return await n._updateCurrentUser(r.user), r
                        }
                        class We extends i.ZR {
                            constructor(e, t, n, i) {
                                var r;
                                super(t.code, t.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, We.prototype), this.customData = {
                                    appName: e.name,
                                    tenantId: null !== (r = e.tenantId) && void 0 !== r ? r : void 0,
                                    _serverResponse: t.customData._serverResponse,
                                    operationType: n
                                }
                            }
                            static _fromErrorAndOperation(e, t, n, i) {
                                return new We(e, t, n, i)
                            }
                        }

                        function $e(e, t, n, i) {
                            return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n => {
                                if ("auth/multi-factor-auth-required" === n.code) throw We._fromErrorAndOperation(e, n, t, i);
                                throw n
                            }))
                        }

                        function Ge(e) {
                            return new Set(e.map((({
                                providerId: e
                            }) => e)).filter((e => !!e)))
                        }
                        async function Ke(e, t) {
                            const n = (0, i.m9)(e);
                            await Be(!0, n, t);
                            const {
                                providerUserInfo: r
                            } = await async function (e, t) {
                                return M(e, "POST", "/v1/accounts:update", t)
                            }(n.auth, {
                                idToken: await n.getIdToken(),
                                deleteProvider: [t]
                            }), s = Ge(r || []);
                            return n.providerData = n.providerData.filter((e => s.has(e.providerId))), s.has("phone") || (n.phoneNumber = null), await n.auth._persistUserIfCurrent(n), n
                        }
                        async function Je(e, t, n = !1) {
                            const i = await W(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
                            return je._forOperation(e, "link", i)
                        }
                        async function Be(e, t, n) {
                            await K(t);
                            const i = !1 === e ? "provider-already-linked" : "no-such-provider";
                            w(Ge(t.providerData).has(n) === e, t.auth, i)
                        }
                        async function Ye(e, t, n = !1) {
                            const {
                                auth: i
                            } = e, r = "reauthenticate";
                            try {
                                const s = await W(e, $e(i, r, t, e), n);
                                w(s.idToken, i, "internal-error");
                                const o = H(s.idToken);
                                w(o, i, "internal-error");
                                const {
                                    sub: a
                                } = o;
                                return w(e.uid === a, i, "user-mismatch"), je._forOperation(e, r, s)
                            } catch (e) {
                                throw "auth/user-not-found" === (null == e ? void 0 : e.code) && g(i, "user-mismatch"), e
                            }
                        }
                        async function Xe(e, t, n = !1) {
                            const i = "signIn",
                                r = await $e(e, i, t),
                                s = await je._fromIdTokenResponse(e, i, r);
                            return n || await e._updateCurrentUser(s.user), s
                        }
                        async function Ze(e, t) {
                            return Xe(fe(e), t)
                        }
                        async function Qe(e, t) {
                            const n = (0, i.m9)(e);
                            return await Be(!1, n, t.providerId), Je(n, t)
                        }
                        async function et(e, t) {
                            return Ye((0, i.m9)(e), t)
                        }
                        async function tt(e, t) {
                            const n = fe(e),
                                i = await async function (e, t) {
                                    return x(e, "POST", "/v1/accounts:signInWithCustomToken", D(e, t))
                                }(n, {
                                    token: t,
                                    returnSecureToken: !0
                                }), r = await je._fromIdTokenResponse(n, "signIn", i);
                            return await n._updateCurrentUser(r.user), r
                        }
                        class nt {
                            constructor(e, t) {
                                this.factorId = e, this.uid = t.mfaEnrollmentId, this.enrollmentTime = new Date(t.enrolledAt).toUTCString(), this.displayName = t.displayName
                            }
                            static _fromServerResponse(e, t) {
                                return "phoneInfo" in t ? it._fromServerResponse(e, t) : "totpInfo" in t ? rt._fromServerResponse(e, t) : g(e, "internal-error")
                            }
                        }
                        class it extends nt {
                            constructor(e) {
                                super("phone", e), this.phoneNumber = e.phoneInfo
                            }
                            static _fromServerResponse(e, t) {
                                return new it(t)
                            }
                        }
                        class rt extends nt {
                            constructor(e) {
                                super("totp", e)
                            }
                            static _fromServerResponse(e, t) {
                                return new rt(t)
                            }
                        }

                        function st(e, t, n) {
                            var i;
                            w((null === (i = n.url) || void 0 === i ? void 0 : i.length) > 0, e, "invalid-continue-uri"), w(void 0 === n.dynamicLinkDomain || n.dynamicLinkDomain.length > 0, e, "invalid-dynamic-link-domain"), t.continueUrl = n.url, t.dynamicLinkDomain = n.dynamicLinkDomain, t.canHandleCodeInApp = n.handleCodeInApp, n.iOS && (w(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"), t.iOSBundleId = n.iOS.bundleId), n.android && (w(n.android.packageName.length > 0, e, "missing-android-pkg-name"), t.androidInstallApp = n.android.installApp, t.androidMinimumVersionCode = n.android.minimumVersion, t.androidPackageName = n.android.packageName)
                        }
                        async function ot(e, t, n) {
                            const r = (0, i.m9)(e),
                                s = {
                                    requestType: "PASSWORD_RESET",
                                    email: t
                                };
                            n && st(r, s, n), await async function (e, t) {
                                return ke(e, t)
                            }(r, s)
                        }
                        async function at(e, t, n) {
                            await we((0, i.m9)(e), {
                                oobCode: t,
                                newPassword: n
                            })
                        }
                        async function ct(e, t) {
                            await async function (e, t) {
                                return M(e, "POST", "/v1/accounts:update", D(e, t))
                            }((0, i.m9)(e), {
                                oobCode: t
                            })
                        }
                        async function ut(e, t) {
                            const n = (0, i.m9)(e),
                                r = await we(n, {
                                    oobCode: t
                                }),
                                s = r.requestType;
                            switch (w(s, n, "internal-error"), s) {
                                case "EMAIL_SIGNIN":
                                    break;
                                case "VERIFY_AND_CHANGE_EMAIL":
                                    w(r.newEmail, n, "internal-error");
                                    break;
                                case "REVERT_SECOND_FACTOR_ADDITION":
                                    w(r.mfaInfo, n, "internal-error");
                                default:
                                    w(r.email, n, "internal-error")
                            }
                            let o = null;
                            return r.mfaInfo && (o = nt._fromServerResponse(fe(n), r.mfaInfo)), {
                                data: {
                                    email: ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.newEmail : r.email) || null,
                                    previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.email : r.newEmail) || null,
                                    multiFactorInfo: o
                                },
                                operation: s
                            }
                        }
                        async function dt(e, t) {
                            const {
                                data: n
                            } = await ut((0, i.m9)(e), t);
                            return n.email
                        }
                        async function lt(e, t, n) {
                            const i = fe(e),
                                r = await ze(i, {
                                    returnSecureToken: !0,
                                    email: t,
                                    password: n
                                }),
                                s = await je._fromIdTokenResponse(i, "signIn", r);
                            return await i._updateCurrentUser(s.user), s
                        }

                        function ht(e, t, n) {
                            return Ze((0, i.m9)(e), Oe.credential(t, n))
                        }
                        async function pt(e, t, n) {
                            const r = (0, i.m9)(e),
                                s = {
                                    requestType: "EMAIL_SIGNIN",
                                    email: t
                                };
                            w(n.handleCodeInApp, r, "argument-error"), n && st(r, s, n), await async function (e, t) {
                                return ke(e, t)
                            }(r, s)
                        }

                        function mt(e, t) {
                            const n = Ne.parseLink(t);
                            return "EMAIL_SIGNIN" === (null == n ? void 0 : n.operation)
                        }
                        async function ft(e, t, n) {
                            const r = (0, i.m9)(e),
                                s = Oe.credentialWithLink(t, n || R());
                            return w(s._tenantId === (r.tenantId || null), r, "tenant-id-mismatch"), Ze(r, s)
                        }
                        async function gt(e, t) {
                            const n = {
                                    identifier: t,
                                    continueUri: S() ? R() : "http://localhost"
                                },
                                {
                                    signinMethods: r
                                } = await async function (e, t) {
                                    return M(e, "POST", "/v1/accounts:createAuthUri", D(e, t))
                                }((0, i.m9)(e), n);
                            return r || []
                        }
                        async function vt(e, t) {
                            const n = (0, i.m9)(e),
                                r = {
                                    requestType: "VERIFY_EMAIL",
                                    idToken: await e.getIdToken()
                                };
                            t && st(n.auth, r, t);
                            const {
                                email: s
                            } = await async function (e, t) {
                                return ke(e, t)
                            }(n.auth, r);
                            s !== e.email && await e.reload()
                        }
                        async function yt(e, t, n) {
                            const r = (0, i.m9)(e),
                                s = {
                                    requestType: "VERIFY_AND_CHANGE_EMAIL",
                                    idToken: await e.getIdToken(),
                                    newEmail: t
                                };
                            n && st(r.auth, s, n);
                            const {
                                email: o
                            } = await async function (e, t) {
                                return ke(e, t)
                            }(r.auth, s);
                            o !== e.email && await e.reload()
                        }
                        async function It(e, {
                            displayName: t,
                            photoURL: n
                        }) {
                            if (void 0 === t && void 0 === n) return;
                            const r = (0, i.m9)(e),
                                s = {
                                    idToken: await r.getIdToken(),
                                    displayName: t,
                                    photoUrl: n,
                                    returnSecureToken: !0
                                },
                                o = await W(r, async function (e, t) {
                                    return M(e, "POST", "/v1/accounts:update", t)
                                }(r.auth, s));
                            r.displayName = o.displayName || null, r.photoURL = o.photoUrl || null;
                            const a = r.providerData.find((({
                                providerId: e
                            }) => "password" === e));
                            a && (a.displayName = r.displayName, a.photoURL = r.photoURL), await r._updateTokensIfNecessary(o)
                        }

                        function _t(e, t) {
                            return Tt((0, i.m9)(e), t, null)
                        }

                        function wt(e, t) {
                            return Tt((0, i.m9)(e), null, t)
                        }
                        async function Tt(e, t, n) {
                            const {
                                auth: i
                            } = e, r = {
                                idToken: await e.getIdToken(),
                                returnSecureToken: !0
                            };
                            t && (r.email = t), n && (r.password = n);
                            const s = await W(e, Te(i, r));
                            await e._updateTokensIfNecessary(s, !0)
                        }
                        class kt {
                            constructor(e, t, n = {}) {
                                this.isNewUser = e, this.providerId = t, this.profile = n
                            }
                        }
                        class bt extends kt {
                            constructor(e, t, n, i) {
                                super(e, t, n), this.username = i
                            }
                        }
                        class Et extends kt {
                            constructor(e, t) {
                                super(e, "facebook.com", t)
                            }
                        }
                        class Rt extends bt {
                            constructor(e, t) {
                                super(e, "github.com", t, "string" == typeof (null == t ? void 0 : t.login) ? null == t ? void 0 : t.login : null)
                            }
                        }
                        class St extends kt {
                            constructor(e, t) {
                                super(e, "google.com", t)
                            }
                        }
                        class At extends bt {
                            constructor(e, t, n) {
                                super(e, "twitter.com", t, n)
                            }
                        }

                        function Nt(e) {
                            const {
                                user: t,
                                _tokenResponse: n
                            } = e;
                            return t.isAnonymous && !n ? {
                                providerId: null,
                                isNewUser: !1,
                                profile: null
                            } : function (e) {
                                var t, n;
                                if (!e) return null;
                                const {
                                    providerId: i
                                } = e, r = e.rawUserInfo ? JSON.parse(e.rawUserInfo) : {}, s = e.isNewUser || "identitytoolkit#SignupNewUserResponse" === e.kind;
                                if (!i && (null == e ? void 0 : e.idToken)) {
                                    const i = null === (n = null === (t = H(e.idToken)) || void 0 === t ? void 0 : t.firebase) || void 0 === n ? void 0 : n.sign_in_provider;
                                    if (i) return new kt(s, "anonymous" !== i && "custom" !== i ? i : null)
                                }
                                if (!i) return null;
                                switch (i) {
                                    case "facebook.com":
                                        return new Et(s, r);
                                    case "github.com":
                                        return new Rt(s, r);
                                    case "google.com":
                                        return new St(s, r);
                                    case "twitter.com":
                                        return new At(s, r, e.screenName || null);
                                    case "custom":
                                    case "anonymous":
                                        return new kt(s, null);
                                    default:
                                        return new kt(s, i, r)
                                }
                            }(n)
                        }
                        class Ot {
                            constructor(e, t, n) {
                                this.type = e, this.credential = t, this.auth = n
                            }
                            static _fromIdtoken(e, t) {
                                return new Ot("enroll", e, t)
                            }
                            static _fromMfaPendingCredential(e) {
                                return new Ot("signin", e)
                            }
                            toJSON() {
                                return {
                                    multiFactorSession: {
                                        ["enroll" === this.type ? "idToken" : "pendingCredential"]: this.credential
                                    }
                                }
                            }
                            static fromJSON(e) {
                                var t, n;
                                if (null == e ? void 0 : e.multiFactorSession) {
                                    if (null === (t = e.multiFactorSession) || void 0 === t ? void 0 : t.pendingCredential) return Ot._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);
                                    if (null === (n = e.multiFactorSession) || void 0 === n ? void 0 : n.idToken) return Ot._fromIdtoken(e.multiFactorSession.idToken)
                                }
                                return null
                            }
                        }
                        class Pt {
                            constructor(e, t, n) {
                                this.session = e, this.hints = t, this.signInResolver = n
                            }
                            static _fromError(e, t) {
                                const n = fe(e),
                                    i = t.customData._serverResponse,
                                    r = (i.mfaInfo || []).map((e => nt._fromServerResponse(n, e)));
                                w(i.mfaPendingCredential, n, "internal-error");
                                const s = Ot._fromMfaPendingCredential(i.mfaPendingCredential);
                                return new Pt(s, r, (async e => {
                                    const r = await e._process(n, s);
                                    delete i.mfaInfo, delete i.mfaPendingCredential;
                                    const o = Object.assign(Object.assign({}, i), {
                                        idToken: r.idToken,
                                        refreshToken: r.refreshToken
                                    });
                                    switch (t.operationType) {
                                        case "signIn":
                                            const e = await je._fromIdTokenResponse(n, t.operationType, o);
                                            return await n._updateCurrentUser(e.user), e;
                                        case "reauthenticate":
                                            return w(t.user, n, "internal-error"), je._forOperation(t.user, t.operationType, o);
                                        default:
                                            g(n, "internal-error")
                                    }
                                }))
                            }
                            async resolveSignIn(e) {
                                const t = e;
                                return this.signInResolver(t)
                            }
                        }

                        function Ct(e, t) {
                            var n;
                            const r = (0, i.m9)(e),
                                s = t;
                            return w(t.customData.operationType, r, "argument-error"), w(null === (n = s.customData._serverResponse) || void 0 === n ? void 0 : n.mfaPendingCredential, r, "argument-error"), Pt._fromError(r, s)
                        }
                        class Lt {
                            constructor(e) {
                                this.user = e, this.enrolledFactors = [], e._onReload((t => {
                                    t.mfaInfo && (this.enrolledFactors = t.mfaInfo.map((t => nt._fromServerResponse(e.auth, t))))
                                }))
                            }
                            static _fromUser(e) {
                                return new Lt(e)
                            }
                            async getSession() {
                                return Ot._fromIdtoken(await this.user.getIdToken(), this.user.auth)
                            }
                            async enroll(e, t) {
                                const n = e,
                                    i = await this.getSession(),
                                    r = await W(this.user, n._process(this.user.auth, i, t));
                                return await this.user._updateTokensIfNecessary(r), this.user.reload()
                            }
                            async unenroll(e) {
                                const t = "string" == typeof e ? e : e.uid,
                                    n = await this.user.getIdToken();
                                try {
                                    const e = await W(this.user, (i = this.user.auth, r = {
                                        idToken: n,
                                        mfaEnrollmentId: t
                                    }, M(i, "POST", "/v2/accounts/mfaEnrollment:withdraw", D(i, r))));
                                    this.enrolledFactors = this.enrolledFactors.filter((({
                                        uid: e
                                    }) => e !== t)), await this.user._updateTokensIfNecessary(e), await this.user.reload()
                                } catch (e) {
                                    throw e
                                }
                                var i, r
                            }
                        }
                        const Dt = new WeakMap;

                        function Mt(e) {
                            const t = (0, i.m9)(e);
                            return Dt.has(t) || Dt.set(t, Lt._fromUser(t)), Dt.get(t)
                        }
                        const Ut = "__sak";
                        class xt {
                            constructor(e, t) {
                                this.storageRetriever = e, this.type = t
                            }
                            _isAvailable() {
                                try {
                                    return this.storage ? (this.storage.setItem(Ut, "1"), this.storage.removeItem(Ut), Promise.resolve(!0)) : Promise.resolve(!1)
                                } catch (e) {
                                    return Promise.resolve(!1)
                                }
                            }
                            _set(e, t) {
                                return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
                            }
                            _get(e) {
                                const t = this.storage.getItem(e);
                                return Promise.resolve(t ? JSON.parse(t) : null)
                            }
                            _remove(e) {
                                return this.storage.removeItem(e), Promise.resolve()
                            }
                            get storage() {
                                return this.storageRetriever()
                            }
                        }
                        class Ft extends xt {
                            constructor() {
                                super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function () {
                                    const e = (0, i.z$)();
                                    return ie(e) || ue(e)
                                }() && function () {
                                    try {
                                        return !(!window || window === window.top)
                                    } catch (e) {
                                        return !1
                                    }
                                }(), this.fallbackToPolling = le(), this._shouldAllowMigration = !0
                            }
                            forAllChangedKeys(e) {
                                for (const t of Object.keys(this.listeners)) {
                                    const n = this.storage.getItem(t),
                                        i = this.localCache[t];
                                    n !== i && e(t, i, n)
                                }
                            }
                            onStorageEvent(e, t = !1) {
                                if (!e.key) return void this.forAllChangedKeys(((e, t, n) => {
                                    this.notifyListeners(e, n)
                                }));
                                const n = e.key;
                                if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                                    const i = this.storage.getItem(n);
                                    if (e.newValue !== i) null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
                                    else if (this.localCache[n] === e.newValue && !t) return
                                }
                                const r = () => {
                                        const e = this.storage.getItem(n);
                                        (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
                                    },
                                    s = this.storage.getItem(n);
                                (0, i.w1)() && 10 === document.documentMode && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                const n = this.listeners[e];
                                if (n)
                                    for (const e of Array.from(n)) e(t ? JSON.parse(t) : t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval((() => {
                                    this.forAllChangedKeys(((e, t, n) => {
                                        this.onStorageEvent(new StorageEvent("storage", {
                                            key: e,
                                            oldValue: t,
                                            newValue: n
                                        }), !0)
                                    }))
                                }), 1e3)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            attachListener() {
                                window.addEventListener("storage", this.boundEventHandler)
                            }
                            detachListener() {
                                window.removeEventListener("storage", this.boundEventHandler)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
                            }
                            async _set(e, t) {
                                await super._set(e, t), this.localCache[e] = JSON.stringify(t)
                            }
                            async _get(e) {
                                const t = await super._get(e);
                                return this.localCache[e] = JSON.stringify(t), t
                            }
                            async _remove(e) {
                                await super._remove(e), delete this.localCache[e]
                            }
                        }
                        Ft.type = "LOCAL";
                        const Vt = Ft;
                        class zt extends xt {
                            constructor() {
                                super((() => window.sessionStorage), "SESSION")
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }
                        zt.type = "SESSION";
                        const jt = zt;
                        class qt {
                            constructor(e) {
                                this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
                            }
                            static _getInstance(e) {
                                const t = this.receivers.find((t => t.isListeningto(e)));
                                if (t) return t;
                                const n = new qt(e);
                                return this.receivers.push(n), n
                            }
                            isListeningto(e) {
                                return this.eventTarget === e
                            }
                            async handleEvent(e) {
                                const t = e,
                                    {
                                        eventId: n,
                                        eventType: i,
                                        data: r
                                    } = t.data,
                                    s = this.handlersMap[i];
                                if (!(null == s ? void 0 : s.size)) return;
                                t.ports[0].postMessage({
                                    status: "ack",
                                    eventId: n,
                                    eventType: i
                                });
                                const o = Array.from(s).map((async e => e(t.origin, r))),
                                    a = await
                                function (e) {
                                    return Promise.all(e.map((async e => {
                                        try {
                                            return {
                                                fulfilled: !0,
                                                value: await e
                                            }
                                        } catch (e) {
                                            return {
                                                fulfilled: !1,
                                                reason: e
                                            }
                                        }
                                    })))
                                }(o);
                                t.ports[0].postMessage({
                                    status: "done",
                                    eventId: n,
                                    eventType: i,
                                    response: a
                                })
                            }
                            _subscribe(e, t) {
                                0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
                            }
                            _unsubscribe(e, t) {
                                this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
                            }
                        }

                        function Ht(e = "", t = 10) {
                            let n = "";
                            for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
                            return e + n
                        }
                        qt.receivers = [];
                        class Wt {
                            constructor(e) {
                                this.target = e, this.handlers = new Set
                            }
                            removeMessageHandler(e) {
                                e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
                            }
                            async _send(e, t, n = 50) {
                                const i = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                                if (!i) throw new Error("connection_unavailable");
                                let r, s;
                                return new Promise(((o, a) => {
                                    const c = Ht("", 20);
                                    i.port1.start();
                                    const u = setTimeout((() => {
                                        a(new Error("unsupported_event"))
                                    }), n);
                                    s = {
                                        messageChannel: i,
                                        onMessage(e) {
                                            const t = e;
                                            if (t.data.eventId === c) switch (t.data.status) {
                                                case "ack":
                                                    clearTimeout(u), r = setTimeout((() => {
                                                        a(new Error("timeout"))
                                                    }), 3e3);
                                                    break;
                                                case "done":
                                                    clearTimeout(r), o(t.data.response);
                                                    break;
                                                default:
                                                    clearTimeout(u), clearTimeout(r), a(new Error("invalid_response"))
                                            }
                                        }
                                    }, this.handlers.add(s), i.port1.addEventListener("message", s.onMessage), this.target.postMessage({
                                        eventType: e,
                                        eventId: c,
                                        data: t
                                    }, [i.port2])
                                })).finally((() => {
                                    s && this.removeMessageHandler(s)
                                }))
                            }
                        }

                        function $t() {
                            return window
                        }

                        function Gt() {
                            return void 0 !== $t().WorkerGlobalScope && "function" == typeof $t().importScripts
                        }
                        const Kt = "firebaseLocalStorageDb",
                            Jt = "firebaseLocalStorage",
                            Bt = "fbase_key";
                        class Yt {
                            constructor(e) {
                                this.request = e
                            }
                            toPromise() {
                                return new Promise(((e, t) => {
                                    this.request.addEventListener("success", (() => {
                                        e(this.request.result)
                                    })), this.request.addEventListener("error", (() => {
                                        t(this.request.error)
                                    }))
                                }))
                            }
                        }

                        function Xt(e, t) {
                            return e.transaction([Jt], t ? "readwrite" : "readonly").objectStore(Jt)
                        }

                        function Zt() {
                            const e = indexedDB.open(Kt, 1);
                            return new Promise(((t, n) => {
                                e.addEventListener("error", (() => {
                                    n(e.error)
                                })), e.addEventListener("upgradeneeded", (() => {
                                    const t = e.result;
                                    try {
                                        t.createObjectStore(Jt, {
                                            keyPath: Bt
                                        })
                                    } catch (e) {
                                        n(e)
                                    }
                                })), e.addEventListener("success", (async () => {
                                    const n = e.result;
                                    n.objectStoreNames.contains(Jt) ? t(n) : (n.close(), await
                                        function () {
                                            const e = indexedDB.deleteDatabase(Kt);
                                            return new Yt(e).toPromise()
                                        }(), t(await Zt()))
                                }))
                            }))
                        }
                        async function Qt(e, t, n) {
                            const i = Xt(e, !0).put({
                                [Bt]: t,
                                value: n
                            });
                            return new Yt(i).toPromise()
                        }

                        function en(e, t) {
                            const n = Xt(e, !0).delete(t);
                            return new Yt(n).toPromise()
                        }
                        class tn {
                            constructor() {
                                this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
                            }
                            async _openDb() {
                                return this.db || (this.db = await Zt()), this.db
                            }
                            async _withRetries(e) {
                                let t = 0;
                                for (;;) try {
                                    const t = await this._openDb();
                                    return await e(t)
                                } catch (e) {
                                    if (t++ > 3) throw e;
                                    this.db && (this.db.close(), this.db = void 0)
                                }
                            }
                            async initializeServiceWorkerMessaging() {
                                return Gt() ? this.initializeReceiver() : this.initializeSender()
                            }
                            async initializeReceiver() {
                                this.receiver = qt._getInstance(Gt() ? self : null), this.receiver._subscribe("keyChanged", (async (e, t) => ({
                                    keyProcessed: (await this._poll()).includes(t.key)
                                }))), this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
                            }
                            async initializeSender() {
                                var e, t;
                                if (this.activeServiceWorker = await async function () {
                                        if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                                        try {
                                            return (await navigator.serviceWorker.ready).active
                                        } catch (e) {
                                            return null
                                        }
                                    }(), !this.activeServiceWorker) return;
                                this.sender = new Wt(this.activeServiceWorker);
                                const n = await this.sender._send("ping", {}, 800);
                                n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
                            }
                            async notifyServiceWorker(e) {
                                var t;
                                if (this.sender && this.activeServiceWorker && ((null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker) try {
                                    await this.sender._send("keyChanged", {
                                        key: e
                                    }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                                } catch (t) {}
                            }
                            async _isAvailable() {
                                try {
                                    if (!indexedDB) return !1;
                                    const e = await Zt();
                                    return await Qt(e, Ut, "1"), await en(e, Ut), !0
                                } catch (e) {}
                                return !1
                            }
                            async _withPendingWrite(e) {
                                this.pendingWrites++;
                                try {
                                    await e()
                                } finally {
                                    this.pendingWrites--
                                }
                            }
                            async _set(e, t) {
                                return this._withPendingWrite((async () => (await this._withRetries((n => Qt(n, e, t))), this.localCache[e] = t, this.notifyServiceWorker(e))))
                            }
                            async _get(e) {
                                const t = await this._withRetries((t => async function (e, t) {
                                    const n = Xt(e, !1).get(t),
                                        i = await new Yt(n).toPromise();
                                    return void 0 === i ? null : i.value
                                }(t, e)));
                                return this.localCache[e] = t, t
                            }
                            async _remove(e) {
                                return this._withPendingWrite((async () => (await this._withRetries((t => en(t, e))), delete this.localCache[e], this.notifyServiceWorker(e))))
                            }
                            async _poll() {
                                const e = await this._withRetries((e => {
                                    const t = Xt(e, !1).getAll();
                                    return new Yt(t).toPromise()
                                }));
                                if (!e) return [];
                                if (0 !== this.pendingWrites) return [];
                                const t = [],
                                    n = new Set;
                                for (const {
                                        fbase_key: i,
                                        value: r
                                    } of e) n.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(r) && (this.notifyListeners(i, r), t.push(i));
                                for (const e of Object.keys(this.localCache)) this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null), t.push(e));
                                return t
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                const n = this.listeners[e];
                                if (n)
                                    for (const e of Array.from(n)) e(t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
                            }
                        }
                        tn.type = "LOCAL";
                        const nn = tn;

                        function rn(e) {
                            return new Promise(((t, n) => {
                                const i = document.createElement("script");
                                var r, s;
                                i.setAttribute("src", e), i.onload = t, i.onerror = e => {
                                    const t = v("internal-error");
                                    t.customData = e, n(t)
                                }, i.type = "text/javascript", i.charset = "UTF-8", (null !== (s = null === (r = document.getElementsByTagName("head")) || void 0 === r ? void 0 : r[0]) && void 0 !== s ? s : document).appendChild(i)
                            }))
                        }

                        function sn(e) {
                            return `__${e}${Math.floor(1e6*Math.random())}`
                        }
                        const on = 1e12;
                        class an {
                            constructor(e) {
                                this.auth = e, this.counter = on, this._widgets = new Map
                            }
                            render(e, t) {
                                const n = this.counter;
                                return this._widgets.set(n, new cn(e, this.auth.name, t || {})), this.counter++, n
                            }
                            reset(e) {
                                var t;
                                const n = e || on;
                                null === (t = this._widgets.get(n)) || void 0 === t || t.delete(), this._widgets.delete(n)
                            }
                            getResponse(e) {
                                var t;
                                const n = e || on;
                                return (null === (t = this._widgets.get(n)) || void 0 === t ? void 0 : t.getResponse()) || ""
                            }
                            async execute(e) {
                                var t;
                                const n = e || on;
                                return null === (t = this._widgets.get(n)) || void 0 === t || t.execute(), ""
                            }
                        }
                        class cn {
                            constructor(e, t, n) {
                                this.params = n, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
                                    this.execute()
                                };
                                const i = "string" == typeof e ? document.getElementById(e) : e;
                                w(i, "argument-error", {
                                    appName: t
                                }), this.container = i, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
                            }
                            getResponse() {
                                return this.checkIfDeleted(), this.responseToken
                            }
                            delete() {
                                this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
                            }
                            execute() {
                                this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
                                    this.responseToken = function (e) {
                                        const t = [],
                                            n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                        for (let i = 0; i < e; i++) t.push(n.charAt(Math.floor(Math.random() * n.length)));
                                        return t.join("")
                                    }(50);
                                    const {
                                        callback: e,
                                        "expired-callback": t
                                    } = this.params;
                                    if (e) try {
                                        e(this.responseToken)
                                    } catch (e) {}
                                    this.timerId = window.setTimeout((() => {
                                        if (this.timerId = null, this.responseToken = null, t) try {
                                            t()
                                        } catch (e) {}
                                        this.isVisible && this.execute()
                                    }), 6e4)
                                }), 500))
                            }
                            checkIfDeleted() {
                                if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
                            }
                        }
                        const un = sn("rcb"),
                            dn = new N(3e4, 6e4);
                        class ln {
                            constructor() {
                                var e;
                                this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (e = $t().grecaptcha) || void 0 === e ? void 0 : e.render)
                            }
                            load(e, t = "") {
                                return w(function (e) {
                                    return e.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(e)
                                }(t), e, "argument-error"), this.shouldResolveImmediately(t) ? Promise.resolve($t().grecaptcha) : new Promise(((n, r) => {
                                    const s = $t().setTimeout((() => {
                                        r(v(e, "network-request-failed"))
                                    }), dn.get());
                                    $t()[un] = () => {
                                        $t().clearTimeout(s), delete $t()[un];
                                        const i = $t().grecaptcha;
                                        if (!i) return void r(v(e, "internal-error"));
                                        const o = i.render;
                                        i.render = (e, t) => {
                                            const n = o(e, t);
                                            return this.counter++, n
                                        }, this.hostLanguage = t, n(i)
                                    };
                                    rn(`https://www.google.com/recaptcha/api.js??${(0,i.xO)({onload:un,render:"explicit",hl:t})}`).catch((() => {
                                        clearTimeout(s), r(v(e, "internal-error"))
                                    }))
                                }))
                            }
                            clearedOneInstance() {
                                this.counter--
                            }
                            shouldResolveImmediately(e) {
                                var t;
                                return !!(null === (t = $t().grecaptcha) || void 0 === t ? void 0 : t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
                            }
                        }
                        class hn {
                            async load(e) {
                                return new an(e)
                            }
                            clearedOneInstance() {}
                        }
                        const pn = "recaptcha",
                            mn = {
                                theme: "light",
                                type: "image"
                            };
                        class fn {
                            constructor(e, t = Object.assign({}, mn), n) {
                                this.parameters = t, this.type = pn, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = fe(n), this.isInvisible = "invisible" === this.parameters.size, w("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment");
                                const i = "string" == typeof e ? document.getElementById(e) : e;
                                w(i, this.auth, "argument-error"), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new hn : new ln, this.validateStartingState()
                            }
                            async verify() {
                                this.assertNotDestroyed();
                                const e = await this.render(),
                                    t = this.getAssertedRecaptcha(),
                                    n = t.getResponse(e);
                                return n || new Promise((n => {
                                    const i = e => {
                                        e && (this.tokenChangeListeners.delete(i), n(e))
                                    };
                                    this.tokenChangeListeners.add(i), this.isInvisible && t.execute(e)
                                }))
                            }
                            render() {
                                try {
                                    this.assertNotDestroyed()
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((e => {
                                    throw this.renderPromise = null, e
                                }))), this.renderPromise
                            }
                            _reset() {
                                this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
                            }
                            clear() {
                                this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((e => {
                                    this.container.removeChild(e)
                                }))
                            }
                            validateStartingState() {
                                w(!this.parameters.sitekey, this.auth, "argument-error"), w(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), w("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment")
                            }
                            makeTokenCallback(e) {
                                return t => {
                                    if (this.tokenChangeListeners.forEach((e => e(t))), "function" == typeof e) e(t);
                                    else if ("string" == typeof e) {
                                        const n = $t()[e];
                                        "function" == typeof n && n(t)
                                    }
                                }
                            }
                            assertNotDestroyed() {
                                w(!this.destroyed, this.auth, "internal-error")
                            }
                            async makeRenderPromise() {
                                if (await this.init(), !this.widgetId) {
                                    let e = this.container;
                                    if (!this.isInvisible) {
                                        const t = document.createElement("div");
                                        e.appendChild(t), e = t
                                    }
                                    this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters)
                                }
                                return this.widgetId
                            }
                            async init() {
                                w(S() && !Gt(), this.auth, "internal-error"), await
                                function () {
                                    let e = null;
                                    return new Promise((t => {
                                        "complete" !== document.readyState ? (e = () => t(), window.addEventListener("load", e)) : t()
                                    })).catch((t => {
                                        throw e && window.removeEventListener("load", e), t
                                    }))
                                }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
                                const e = await async function (e) {
                                    return (await M(e, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
                                }(this.auth);
                                w(e, this.auth, "internal-error"), this.parameters.sitekey = e
                            }
                            getAssertedRecaptcha() {
                                return w(this.recaptcha, this.auth, "internal-error"), this.recaptcha
                            }
                        }
                        class gn {
                            constructor(e, t) {
                                this.verificationId = e, this.onConfirmation = t
                            }
                            confirm(e) {
                                const t = Ae._fromVerification(this.verificationId, e);
                                return this.onConfirmation(t)
                            }
                        }
                        async function vn(e, t, n) {
                            const r = fe(e),
                                s = await _n(r, t, (0, i.m9)(n));
                            return new gn(s, (e => Ze(r, e)))
                        }
                        async function yn(e, t, n) {
                            const r = (0, i.m9)(e);
                            await Be(!1, r, "phone");
                            const s = await _n(r.auth, t, (0, i.m9)(n));
                            return new gn(s, (e => Qe(r, e)))
                        }
                        async function In(e, t, n) {
                            const r = (0, i.m9)(e),
                                s = await _n(r.auth, t, (0, i.m9)(n));
                            return new gn(s, (e => et(r, e)))
                        }
                        async function _n(e, t, n) {
                            var i;
                            const r = await n.verify();
                            try {
                                let s;
                                if (w("string" == typeof r, e, "argument-error"), w(n.type === pn, e, "argument-error"), s = "string" == typeof t ? {
                                        phoneNumber: t
                                    } : t, "session" in s) {
                                    const t = s.session;
                                    if ("phoneNumber" in s) {
                                        w("enroll" === t.type, e, "internal-error");
                                        const n = await
                                        function (e, t) {
                                            return M(e, "POST", "/v2/accounts/mfaEnrollment:start", D(e, t))
                                        }(e, {
                                            idToken: t.credential,
                                            phoneEnrollmentInfo: {
                                                phoneNumber: s.phoneNumber,
                                                recaptchaToken: r
                                            }
                                        });
                                        return n.phoneSessionInfo.sessionInfo
                                    } {
                                        w("signin" === t.type, e, "internal-error");
                                        const n = (null === (i = s.multiFactorHint) || void 0 === i ? void 0 : i.uid) || s.multiFactorUid;
                                        w(n, e, "missing-multi-factor-info");
                                        const o = await
                                        function (e, t) {
                                            return M(e, "POST", "/v2/accounts/mfaSignIn:start", D(e, t))
                                        }(e, {
                                            mfaPendingCredential: t.credential,
                                            mfaEnrollmentId: n,
                                            phoneSignInInfo: {
                                                recaptchaToken: r
                                            }
                                        });
                                        return o.phoneResponseInfo.sessionInfo
                                    }
                                } {
                                    const {
                                        sessionInfo: t
                                    } = await async function (e, t) {
                                        return M(e, "POST", "/v1/accounts:sendVerificationCode", D(e, t))
                                    }(e, {
                                        phoneNumber: s.phoneNumber,
                                        recaptchaToken: r
                                    });
                                    return t
                                }
                            } finally {
                                n._reset()
                            }
                        }
                        async function wn(e, t) {
                            await Je((0, i.m9)(e), t)
                        }
                        class Tn {
                            constructor(e) {
                                this.providerId = Tn.PROVIDER_ID, this.auth = fe(e)
                            }
                            verifyPhoneNumber(e, t) {
                                return _n(this.auth, e, (0, i.m9)(t))
                            }
                            static credential(e, t) {
                                return Ae._fromVerification(e, t)
                            }
                            static credentialFromResult(e) {
                                const t = e;
                                return Tn.credentialFromTaggedObject(t)
                            }
                            static credentialFromError(e) {
                                return Tn.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject({
                                _tokenResponse: e
                            }) {
                                if (!e) return null;
                                const {
                                    phoneNumber: t,
                                    temporaryProof: n
                                } = e;
                                return t && n ? Ae._fromTokenResponse(t, n) : null
                            }
                        }

                        function kn(e, t) {
                            return t ? E(t) : (w(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
                        }
                        Tn.PROVIDER_ID = "phone", Tn.PHONE_SIGN_IN_METHOD = "phone";
                        class bn extends _e {
                            constructor(e) {
                                super("custom", "custom"), this.params = e
                            }
                            _getIdTokenResponse(e) {
                                return Ee(e, this._buildIdpRequest())
                            }
                            _linkToIdToken(e, t) {
                                return Ee(e, this._buildIdpRequest(t))
                            }
                            _getReauthenticationResolver(e) {
                                return Ee(e, this._buildIdpRequest())
                            }
                            _buildIdpRequest(e) {
                                const t = {
                                    requestUri: this.params.requestUri,
                                    sessionId: this.params.sessionId,
                                    postBody: this.params.postBody,
                                    tenantId: this.params.tenantId,
                                    pendingToken: this.params.pendingToken,
                                    returnSecureToken: !0,
                                    returnIdpCredential: !0
                                };
                                return e && (t.idToken = e), t
                            }
                        }

                        function En(e) {
                            return Xe(e.auth, new bn(e), e.bypassAuthState)
                        }

                        function Rn(e) {
                            const {
                                auth: t,
                                user: n
                            } = e;
                            return w(n, t, "internal-error"), Ye(n, new bn(e), e.bypassAuthState)
                        }
                        async function Sn(e) {
                            const {
                                auth: t,
                                user: n
                            } = e;
                            return w(n, t, "internal-error"), Je(n, new bn(e), e.bypassAuthState)
                        }
                        class An {
                            constructor(e, t, n, i, r = !1) {
                                this.auth = e, this.resolver = n, this.user = i, this.bypassAuthState = r, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
                            }
                            execute() {
                                return new Promise((async (e, t) => {
                                    this.pendingPromise = {
                                        resolve: e,
                                        reject: t
                                    };
                                    try {
                                        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
                                    } catch (e) {
                                        this.reject(e)
                                    }
                                }))
                            }
                            async onAuthEvent(e) {
                                const {
                                    urlResponse: t,
                                    sessionId: n,
                                    postBody: i,
                                    tenantId: r,
                                    error: s,
                                    type: o
                                } = e;
                                if (s) return void this.reject(s);
                                const a = {
                                    auth: this.auth,
                                    requestUri: t,
                                    sessionId: n,
                                    tenantId: r || void 0,
                                    postBody: i || void 0,
                                    user: this.user,
                                    bypassAuthState: this.bypassAuthState
                                };
                                try {
                                    this.resolve(await this.getIdpTask(o)(a))
                                } catch (e) {
                                    this.reject(e)
                                }
                            }
                            onError(e) {
                                this.reject(e)
                            }
                            getIdpTask(e) {
                                switch (e) {
                                    case "signInViaPopup":
                                    case "signInViaRedirect":
                                        return En;
                                    case "linkViaPopup":
                                    case "linkViaRedirect":
                                        return Sn;
                                    case "reauthViaPopup":
                                    case "reauthViaRedirect":
                                        return Rn;
                                    default:
                                        g(this.auth, "internal-error")
                                }
                            }
                            resolve(e) {
                                k(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
                            }
                            reject(e) {
                                k(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
                            }
                            unregisterAndCleanUp() {
                                this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
                            }
                        }
                        const Nn = new N(2e3, 1e4);
                        async function On(e, t, n) {
                            const i = fe(e);
                            I(e, t, Pe);
                            const r = kn(i, n);
                            return new Ln(i, "signInViaPopup", t, r).executeNotNull()
                        }
                        async function Pn(e, t, n) {
                            const r = (0, i.m9)(e);
                            I(r.auth, t, Pe);
                            const s = kn(r.auth, n);
                            return new Ln(r.auth, "reauthViaPopup", t, s, r).executeNotNull()
                        }
                        async function Cn(e, t, n) {
                            const r = (0, i.m9)(e);
                            I(r.auth, t, Pe);
                            const s = kn(r.auth, n);
                            return new Ln(r.auth, "linkViaPopup", t, s, r).executeNotNull()
                        }
                        class Ln extends An {
                            constructor(e, t, n, i, r) {
                                super(e, t, i, r), this.provider = n, this.authWindow = null, this.pollId = null, Ln.currentPopupAction && Ln.currentPopupAction.cancel(), Ln.currentPopupAction = this
                            }
                            async executeNotNull() {
                                const e = await this.execute();
                                return w(e, this.auth, "internal-error"), e
                            }
                            async onExecution() {
                                k(1 === this.filter.length, "Popup operations only handle one event");
                                const e = Ht();
                                this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((e => {
                                    this.reject(e)
                                })), this.resolver._isIframeWebStorageSupported(this.auth, (e => {
                                    e || this.reject(v(this.auth, "web-storage-unsupported"))
                                })), this.pollUserCancellation()
                            }
                            get eventId() {
                                var e;
                                return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
                            }
                            cancel() {
                                this.reject(v(this.auth, "cancelled-popup-request"))
                            }
                            cleanUp() {
                                this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Ln.currentPopupAction = null
                            }
                            pollUserCancellation() {
                                const e = () => {
                                    var t, n;
                                    (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout((() => {
                                        this.pollId = null, this.reject(v(this.auth, "popup-closed-by-user"))
                                    }), 2e3): this.pollId = window.setTimeout(e, Nn.get())
                                };
                                e()
                            }
                        }
                        Ln.currentPopupAction = null;
                        const Dn = "pendingRedirect",
                            Mn = new Map;
                        class Un extends An {
                            constructor(e, t, n = !1) {
                                super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n), this.eventId = null
                            }
                            async execute() {
                                let e = Mn.get(this.auth._key());
                                if (!e) {
                                    try {
                                        const t = await async function (e, t) {
                                            const n = jn(t),
                                                i = zn(e);
                                            if (!await i._isAvailable()) return !1;
                                            const r = "true" === await i._get(n);
                                            return await i._remove(n), r
                                        }(this.resolver, this.auth) ? await super.execute() : null;
                                        e = () => Promise.resolve(t)
                                    } catch (t) {
                                        e = () => Promise.reject(t)
                                    }
                                    Mn.set(this.auth._key(), e)
                                }
                                return this.bypassAuthState || Mn.set(this.auth._key(), (() => Promise.resolve(null))), e()
                            }
                            async onAuthEvent(e) {
                                if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
                                if ("unknown" !== e.type) {
                                    if (e.eventId) {
                                        const t = await this.auth._redirectUserForId(e.eventId);
                                        if (t) return this.user = t, super.onAuthEvent(e);
                                        this.resolve(null)
                                    }
                                } else this.resolve(null)
                            }
                            async onExecution() {}
                            cleanUp() {}
                        }
                        async function xn(e, t) {
                            return zn(e)._set(jn(t), "true")
                        }

                        function Fn() {
                            Mn.clear()
                        }

                        function Vn(e, t) {
                            Mn.set(e._key(), t)
                        }

                        function zn(e) {
                            return E(e._redirectPersistence)
                        }

                        function jn(e) {
                            return Q(Dn, e.config.apiKey, e.name)
                        }

                        function qn(e, t, n) {
                            return async function (e, t, n) {
                                const i = fe(e);
                                I(e, t, Pe), await i._initializationPromise;
                                const r = kn(i, n);
                                return await xn(r, i), r._openRedirect(i, t, "signInViaRedirect")
                            }(e, t, n)
                        }

                        function Hn(e, t, n) {
                            return async function (e, t, n) {
                                const r = (0, i.m9)(e);
                                I(r.auth, t, Pe), await r.auth._initializationPromise;
                                const s = kn(r.auth, n);
                                await xn(s, r.auth);
                                const o = await Kn(r);
                                return s._openRedirect(r.auth, t, "reauthViaRedirect", o)
                            }(e, t, n)
                        }

                        function Wn(e, t, n) {
                            return async function (e, t, n) {
                                const r = (0, i.m9)(e);
                                I(r.auth, t, Pe), await r.auth._initializationPromise;
                                const s = kn(r.auth, n);
                                await Be(!1, r, t.providerId), await xn(s, r.auth);
                                const o = await Kn(r);
                                return s._openRedirect(r.auth, t, "linkViaRedirect", o)
                            }(e, t, n)
                        }
                        async function $n(e, t) {
                            return await fe(e)._initializationPromise, Gn(e, t, !1)
                        }
                        async function Gn(e, t, n = !1) {
                            const i = fe(e),
                                r = kn(i, t),
                                s = new Un(i, r, n),
                                o = await s.execute();
                            return o && !n && (delete o.user._redirectEventId, await i._persistUserIfCurrent(o.user), await i._setRedirectUser(null, t)), o
                        }
                        async function Kn(e) {
                            const t = Ht(`${e.uid}:::`);
                            return e._redirectEventId = t, await e.auth._setRedirectUser(e), await e.auth._persistUserIfCurrent(e), t
                        }
                        class Jn {
                            constructor(e) {
                                this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
                            }
                            registerConsumer(e) {
                                this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
                            }
                            unregisterConsumer(e) {
                                this.consumers.delete(e)
                            }
                            onEvent(e) {
                                if (this.hasEventBeenHandled(e)) return !1;
                                let t = !1;
                                return this.consumers.forEach((n => {
                                    this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
                                })), this.hasHandledPotentialRedirect || ! function (e) {
                                    switch (e.type) {
                                        case "signInViaRedirect":
                                        case "linkViaRedirect":
                                        case "reauthViaRedirect":
                                            return !0;
                                        case "unknown":
                                            return Yn(e);
                                        default:
                                            return !1
                                    }
                                }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
                            }
                            sendToConsumer(e, t) {
                                var n;
                                if (e.error && !Yn(e)) {
                                    const i = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
                                    t.onError(v(this.auth, i))
                                } else t.onAuthEvent(e)
                            }
                            isEventForConsumer(e, t) {
                                const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
                                return t.filter.includes(e.type) && n
                            }
                            hasEventBeenHandled(e) {
                                return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Bn(e))
                            }
                            saveEventToCache(e) {
                                this.cachedEventUids.add(Bn(e)), this.lastProcessedEventTime = Date.now()
                            }
                        }

                        function Bn(e) {
                            return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
                        }

                        function Yn({
                            type: e,
                            error: t
                        }) {
                            return "unknown" === e && "auth/no-auth-event" === (null == t ? void 0 : t.code)
                        }
                        async function Xn(e, t = {}) {
                            return M(e, "GET", "/v1/projects", t)
                        }
                        const Zn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                            Qn = /^https?/;

                        function ei(e) {
                            const t = R(),
                                {
                                    protocol: n,
                                    hostname: i
                                } = new URL(t);
                            if (e.startsWith("chrome-extension://")) {
                                const r = new URL(e);
                                return "" === r.hostname && "" === i ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && r.hostname === i
                            }
                            if (!Qn.test(n)) return !1;
                            if (Zn.test(e)) return i === e;
                            const r = e.replace(/\./g, "\\.");
                            return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(i)
                        }
                        const ti = new N(3e4, 6e4);

                        function ni() {
                            const e = $t().___jsl;
                            if (null == e ? void 0 : e.H)
                                for (const t of Object.keys(e.H))
                                    if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
                                        for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
                        }
                        let ii = null;

                        function ri(e) {
                            return ii = ii || function (e) {
                                return new Promise(((t, n) => {
                                    var i, r, s;

                                    function o() {
                                        ni(), gapi.load("gapi.iframes", {
                                            callback: () => {
                                                t(gapi.iframes.getContext())
                                            },
                                            ontimeout: () => {
                                                ni(), n(v(e, "network-request-failed"))
                                            },
                                            timeout: ti.get()
                                        })
                                    }
                                    if (null === (r = null === (i = $t().gapi) || void 0 === i ? void 0 : i.iframes) || void 0 === r ? void 0 : r.Iframe) t(gapi.iframes.getContext());
                                    else {
                                        if (!(null === (s = $t().gapi) || void 0 === s ? void 0 : s.load)) {
                                            const t = sn("iframefcb");
                                            return $t()[t] = () => {
                                                gapi.load ? o() : n(v(e, "network-request-failed"))
                                            }, rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e => n(e)))
                                        }
                                        o()
                                    }
                                })).catch((e => {
                                    throw ii = null, e
                                }))
                            }(e), ii
                        }
                        const si = new N(5e3, 15e3),
                            oi = "__/auth/iframe",
                            ai = "emulator/auth/iframe",
                            ci = {
                                style: {
                                    position: "absolute",
                                    top: "-100px",
                                    width: "1px",
                                    height: "1px"
                                },
                                "aria-hidden": "true",
                                tabindex: "-1"
                            },
                            ui = new Map([
                                ["identitytoolkit.googleapis.com", "p"],
                                ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
                                ["test-identitytoolkit.sandbox.googleapis.com", "t"]
                            ]);

                        function di(e) {
                            const t = e.config;
                            w(t.authDomain, e, "auth-domain-config-required");
                            const n = t.emulator ? O(t, ai) : `https://${e.config.authDomain}/${oi}`,
                                s = {
                                    apiKey: t.apiKey,
                                    appName: e.name,
                                    v: r.SDK_VERSION
                                },
                                o = ui.get(e.config.apiHost);
                            o && (s.eid = o);
                            const a = e._getFrameworks();
                            return a.length && (s.fw = a.join(",")), `${n}?${(0,i.xO)(s).slice(1)}`
                        }
                        const li = {
                            location: "yes",
                            resizable: "yes",
                            statusbar: "yes",
                            toolbar: "no"
                        };
                        class hi {
                            constructor(e) {
                                this.window = e, this.associatedEvent = null
                            }
                            close() {
                                if (this.window) try {
                                    this.window.close()
                                } catch (e) {}
                            }
                        }

                        function pi(e, t, n, r = 500, s = 600) {
                            const o = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
                                a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
                            let c = "";
                            const u = Object.assign(Object.assign({}, li), {
                                    width: r.toString(),
                                    height: s.toString(),
                                    top: o,
                                    left: a
                                }),
                                d = (0, i.z$)().toLowerCase();
                            n && (c = re(d) ? "_blank" : n), ne(d) && (t = t || "http://localhost", u.scrollbars = "yes");
                            const l = Object.entries(u).reduce(((e, [t, n]) => `${e}${t}=${n},`), "");
                            if (function (e = (0, i.z$)()) {
                                    var t;
                                    return ue(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
                                }(d) && "_self" !== c) return function (e, t) {
                                const n = document.createElement("a");
                                n.href = e, n.target = t;
                                const i = document.createEvent("MouseEvent");
                                i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(i)
                            }(t || "", c), new hi(null);
                            const h = window.open(t || "", c, l);
                            w(h, e, "popup-blocked");
                            try {
                                h.focus()
                            } catch (e) {}
                            return new hi(h)
                        }
                        const mi = "__/auth/handler",
                            fi = "emulator/auth/handler";

                        function gi(e, t, n, s, o, a) {
                            w(e.config.authDomain, e, "auth-domain-config-required"), w(e.config.apiKey, e, "invalid-api-key");
                            const c = {
                                apiKey: e.config.apiKey,
                                appName: e.name,
                                authType: n,
                                redirectUrl: s,
                                v: r.SDK_VERSION,
                                eventId: o
                            };
                            if (t instanceof Pe) {
                                t.setDefaultLanguage(e.languageCode), c.providerId = t.providerId || "", (0, i.xb)(t.getCustomParameters()) || (c.customParameters = JSON.stringify(t.getCustomParameters()));
                                for (const [e, t] of Object.entries(a || {})) c[e] = t
                            }
                            if (t instanceof Ce) {
                                const e = t.getScopes().filter((e => "" !== e));
                                e.length > 0 && (c.scopes = e.join(","))
                            }
                            e.tenantId && (c.tid = e.tenantId);
                            const u = c;
                            for (const e of Object.keys(u)) void 0 === u[e] && delete u[e];
                            return `${function({config:e}){if(!e.emulator)return`
                            https://${e.authDomain}/${mi}`;return O(e,fi)}(e)}?${(0,i.xO)(u).slice(1)}`}const vi="webStorageSupport";const yi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jt,this._completeRedirectFn=Gn,this._overrideRedirectResult=Vn}async _openPopup(e,t,n,i){var r;k(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return pi(e,gi(e,t,n,R(),i),Ht())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=gi(e,t,n,R(),i),$t().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ri(e),n=$t().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:di(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ci,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=v(e,"network-request-failed"),s=$t().setTimeout((()=>{i(r)}),si.get());function o(){$t().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Jn(e);return t.register("authEvent",(t=>{w(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vi,{type:vi},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[vi];void 0!==r&&t(!!r),g(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Xn(e);for(const e of t)try{if(ei(e))return}catch(e){}g(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||ie()||ue()}};class Ii{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class _i extends Ii{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _i(e)}_finalizeEnroll(e,t,n){return function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wi{constructor(){}static assertion(e){return _i._fromCredential(e)}}wi.FACTOR_ID="phone";var Ti="@firebase/auth",ki="0.22.0";class bi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Ei=(0,i.Pz)("authIdTokenMaxAge")||300;let Ri=null;const Si=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ei)return;const r=null==n?void 0:n.token;Ri!==r&&(Ri=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ai(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;g(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:yi,persistence:[nn,Vt,jt]}),s=(0,i.Pz)("authTokenSyncURL");if(s){const e=Si(s);!function(e,t,n){(0,i.m9)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.m9)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}const o=(0,i.q4)("auth");return o&&ve(n,`http://${o}`),n}var Ni;Ni="Browser",(0,r._registerComponent)(new a.wA("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{w(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),w(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Ni,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:he(Ni)},o=new me(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new a.wA("auth-internal",(e=>(e=>new bi(e))(fe(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Ti,ki,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ni)),(0,r.registerVersion)(Ti,ki,"esm2017")}}]);
                            //# sourceMappingURL=commons-main-index-680e2b70.js.bundle.js.map