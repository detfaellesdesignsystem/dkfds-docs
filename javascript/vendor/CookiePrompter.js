(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode === null) {
                    return;
                }
                this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

var CookieMgr = (function () {
    var enableLog = false;
    var setCookieOnTopLevelDomain = false;
    var log = function (msg) {
        if (enableLog && window.console) {
            console.log(msg);
        }
    };

    var getCookieDomain = function (hostname) {
        console.log("hostname", hostname);
        var domain = hostname.replace('www.', ''); // strip www
        log('setting cookie on toplevel domain:' + setCookieOnTopLevelDomain);
        if (setCookieOnTopLevelDomain) {
            domain = domain.replace(/[\w\d\-\.]*\.([\w\d\-]*\.\w{2,3})$/i, '$1');
        }
        console.log("domain", domain);
        return domain;
    };

    var createCookie = function (name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }

            if (value === '') {
                // deleting cookies from www-domain, if set
                document.cookie = name + "=" + value + expires + ";domain=" + window.location.hostname + "; path=/";
            }

            var domain = getCookieDomain(window.location.hostname);
            log('setting cookie on ' + domain);
            if (domain === 'localhost') {
                document.cookie = name + "=" + value + expires + "; path=/"+ ";SameSite=Strict";
            } else {
                document.cookie = name + "=" + value + expires + ";domain=" + domain + "; path=/"+ ";SameSite=Strict";
            }
        },
        readCookie = function (name) {
            var nameEq = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
            }
            return null;
        },
        eraseCookie = function (name) {
            log('erasing cookie: ' + name);
            createCookie(name, "", -1);
        },
        init = function (opts) {
            log('init cookiemgr:');
            log(opts);
            setCookieOnTopLevelDomain = opts.setCookieOnTopLevelDomain;
        };

    return {
        init: init,
        createCookie: createCookie,
        readCookie: readCookie,
        eraseCookie: eraseCookie,
        getCookieDomain: getCookieDomain
    };
})();
var TestTracker = (function () {
    "use strict";
    var enableLog = false;
    var log = function (msg) {
        if (enableLog && window.console) {
            console.log(msg);
        }
    };
    var init = function (cfg) {
            log('initializing TestTracker');
            log(cfg);
            if (cfg.ready && typeof cfg.ready === 'function') {
                cfg.ready();
            }
        },
        injectCode = function () {
            var testTag = document.createElement('h1');
            testTag.className = 'testheader';
            testTag.innerText = 'Overskrift';
            testTag.id = 'h1header';
            var body = document.getElementsByTagName('body')[0];
            body.insertBefore(testTag, body.firstChild);
        },
        eraseCookie = function () {
            var el = document.getElementById("h1header");
            if (el) {
                el.parentNode.removeChild(el);
            }
        };
    return {
        init: init,
        injectCode: injectCode,
        eraseCookie: eraseCookie
    };
})();
var GemiusTracker = (function () {
    "use strict";

    var scriptLocation, gemiusAccount, loadAsync = false,
        enableLog = false;

    var log = function (msg) {
        if (window.console && enableLog) {
            console.log(msg);
        }
    };
    var injectCode = function (injectCfg) {
        if (gemiusAccount && scriptLocation !== '') {
            log('inserting Geminus tracking code');
            window.pp_gemius_identifier = new String(gemiusAccount);
            var script = document.createElement('script');
            script.src = scriptLocation;
            setAsyncOnScript(script, injectCfg);
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
    };

    var eraseCookie = function () {
        // user should be redirected to http://optout.hit.gemius.pl/removeDK.php
    };

    var init = function (cfg) {
        scriptLocation = cfg.scriptLocation;
        gemiusAccount = cfg.gemiusAccount;
        loadAsync = cfg.async || true;
        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({
                scriptLocation: scriptLocation,
                gemiusAccount: gemiusAccount
            });
        }
    };


    var setAsyncOnScript = function (ga, injectCfg) {
        // if injectCode is called with a cfg object where async is set, use that. Otherwise fallback
        if (injectCfg && typeof (injectCfg.async) !== 'undefined') {
            log('setting async attribute from injectCfg');
            if (injectCfg.async === true) {
                log('it was true');
                ga.async = injectCfg.async;
            } else {
                ga.async = undefined;
            }
        } else {
            log('setting default async attribute');
            if (loadAsync === true) {
                ga.async = loadAsync;
            } else {
                ga.async = undefined;
            }
        }
    };


    return {
        init: init,
        injectCode: injectCode,
        eraseCookie: eraseCookie
    };
})();
var PiwikProTracker = (function () {
    "use strict";
    var cookieMgr = CookieMgr,
        loadAsync = true,
        account,
        piwikProPath,
        params = [],
        fakeAnalytics,
        enableLog = true;

    var log = function (msg) {
        if (window.console && enableLog) {
            console.log(msg);
        }
    };

    var eraseCookie = function () {
        log('erasing cookies in piwikpro tracker');
        // Get the Piwik cookie's domainHash (also known as 'cookie hash' generated by Piwik Pro JS tracker)
        let domainHash = "";
        let pk_id_cookie = (document.cookie).match(/_pk_id\.[^=]+/); // '_pk_id' used instead of '_pk_ses' as it expires last
        if (pk_id_cookie) {
            let pk_id_cookie_string = pk_id_cookie[0];
            let domainHash_array = pk_id_cookie_string.match(/\.....$/);
            if (domainHash_array) {
                domainHash = domainHash_array[0];
            }
        }
        // Known Piwik Pro cookies
        cookieMgr.eraseCookie('_pk_ses.' + account + domainHash);
        cookieMgr.eraseCookie('_pk_id.' + account + domainHash);
        cookieMgr.eraseCookie('_pk_cvar');
        cookieMgr.eraseCookie('app_id');
        cookieMgr.eraseCookie('piwik_auth');
        cookieMgr.eraseCookie('PIWIK_SESSID');
        cookieMgr.eraseCookie('stg_traffic_source_priority');
        cookieMgr.eraseCookie('stg_last_interaction');
        cookieMgr.eraseCookie('stg_returning_visitor');
        cookieMgr.eraseCookie('stg_utm_campaign');
        cookieMgr.eraseCookie('stg_pk_campaign');
        cookieMgr.eraseCookie('stg_externalReferrer');
        cookieMgr.eraseCookie('stg_popup');
        cookieMgr.eraseCookie('stg_content');
    };

    var callSetupCode = function (accountPath, accountId) {
        /* jshint ignore:start */
        (function (window, document, dataLayerName, id) {
            window[dataLayerName] = window[dataLayerName] || [], window[dataLayerName].push({
                start: (new Date).getTime(),
                event: "stg.start"
            });
            var scripts = document.getElementsByTagName('script')[0],
                tags = document.createElement('script');

            function stgCreateCookie(a, b, c) {
                var d = "";
                if (c) {
                    var e = new Date;
                    e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3), d = "; expires=" + e.toUTCString()
                }
                document.cookie = a + "=" + b + d + "; path=/"
            }
            var isStgDebug = (window.location.href.match("stg_debug") || document.cookie.match("stg_debug")) && !window.location.href.match("stg_disable_debug");
            stgCreateCookie("stg_debug", isStgDebug ? 1 : "", isStgDebug ? 14 : -1);
            var qP = [];
            dataLayerName !== "dataLayer" && qP.push("data_layer_name=" + dataLayerName), isStgDebug && qP.push("stg_debug");
            var qPString = qP.length > 0 ? ("?" + qP.join("&")) : "";
            tags.async = !0, tags.src = "//"+accountPath+"/" + id + ".js" + qPString, scripts.parentNode.insertBefore(tags, scripts);
            ! function (a, n, i) {
                a[n] = a[n] || {};
                for (var c = 0; c < i.length; c++) ! function (i) {
                    a[n][i] = a[n][i] || {}, a[n][i].api = a[n][i].api || function () {
                        var a = [].slice.call(arguments, 0);
                        "string" == typeof a[0] && window[dataLayerName].push({
                            event: n + "." + i + ":" + a[0],
                            parameters: [].slice.call(arguments, 1)
                        })
                    }
                }(i[c])
            }(window, "ppms", ["tm", "cm"]);
        })(window, document, 'dataLayer', accountId);

        /* jshint ignore:end */
    };

    var injectCode = function (injectCfg) {
        if (account) {
            log('inserting Piwik Pro tracking code',piwikProPath,account);
            callSetupCode(piwikProPath, account);
        }
    };

    var setAsyncOnScript = function (ga, injectCfg) {};

    var init = function (cfg) {
        loadAsync = cfg.async || true;
        params = cfg.params || [];
        account = cfg.account;
        piwikProPath = cfg.piwikProPath;
        fakeAnalytics = cfg.fakeAnalytics;
        // if there is a ready() function on the configuration, this will be called.
        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({
                loadAsync: loadAsync,
                params: params,
                account: account
            });
        }
    };

    return {
        init: init,
        eraseCookie: eraseCookie,
        injectCode: injectCode
    };
})();
var NetMinersTracker = (function () {
    "use strict";
    var netminersAccount, scriptLocation, enableLog = false;
    var log = function (msg) {
        if (enableLog && window.console) {
            console.log(msg);
        }
    };
    var injectCode = function () {
        log('scriptlocation:' + scriptLocation);
        if (typeof scriptLocation == 'string') {
            var script = document.createElement('script');
            script.src = scriptLocation;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
    };
    var eraseCookie = function () {
        log('erasing netminers cookie for account ' + netminersAccount);
        var script = document.createElement('script');
        script.src = document.location.protocol + '//' + netminersAccount + '.netminers.dk/tracker/removecookies.ashx?n=' + Math.random();
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    };

    var init = function (cfg) {
        netminersAccount = cfg.netminersAccount;
        scriptLocation = cfg.scriptLocation;

        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({
                scriptLocation: scriptLocation,
                netminersAccount: netminersAccount
            });
        }

    };

    return {
        init: init,
        injectCode: injectCode,
        eraseCookie: eraseCookie
    };
})();
var GoogleAnalyticsTracker = (function () {
    "use strict";
    var cookieMgr = CookieMgr,
        loadAsync = true,
        account,
        params = [],
        fakeAnalytics,
        enableLog = false;

    var log = function (msg) {
        if (window.console && enableLog) {
            console.log(msg);
        }
    };

    var eraseCookie = function () {
        // known google analytics cookies
        cookieMgr.eraseCookie('__utma');
        cookieMgr.eraseCookie('__utmb');
        cookieMgr.eraseCookie('__utmc');
        cookieMgr.eraseCookie('__utmz');
    };

    var injectCode = function (injectCfg) {
        log('injectCfg:');
        log(injectCfg);
        if (account) {
            log('inserting Google Analytics tracking code');
            window._gaq = window._gaq || [];
            window._gaq.push(['_setAccount', account]);
            window._gaq.push(['_trackPageview']);
            for (var i = 0; i < params.length; i++) {
                window._gaq.push(params[i]);
            }

            (function () {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                setAsyncOnScript(ga, injectCfg);
                if (fakeAnalytics === true) {
                    ga.src = '/scripts/FakeAnalytics.js';
                } else {
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
                        'http://www') + '.google-analytics.com/ga.js';
                }
                log('async property on script: ' + ga.async);
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        }
    };

    var setAsyncOnScript = function (ga, injectCfg) {
        // if injectCode is called with a cfg object where async is set, use that. Otherwise fallback
        if (injectCfg && typeof (injectCfg.async) !== 'undefined') {
            log('setting async attribute from injectCfg');
            if (injectCfg.async === true) {
                log('it was true');
                ga.async = injectCfg.async;
            } else {
                ga.async = undefined;
            }
        } else {
            log('setting default async attribute');
            if (loadAsync === true) {
                ga.async = loadAsync;
            } else {
                ga.async = undefined;
            }
        }
    };

    var init = function (cfg) {
        loadAsync = cfg.async || true;
        params = cfg.params || [];
        account = cfg.account;
        fakeAnalytics = cfg.fakeAnalytics;
        // if there is a ready() function on the configuration, this will be called.
        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({
                loadAsync: loadAsync,
                params: params,
                account: account,
                fakeAnalytics: fakeAnalytics
            });
        }
    };

    return {
        init: init,
        eraseCookie: eraseCookie,
        injectCode: injectCode
    };
})();
var SiteImproveTracker = (function () {
    "use strict";
    var scriptLocation,
        enableLog = false,
        cookieMgr = CookieMgr;

    var log = function (msg) {
        if (enableLog && window.console) {
            console.log(msg);
        }
    };

    var injectCode = function () {
        if (typeof scriptLocation == 'string') {
            log('inserting SiteImprove tracking code');
            var script = document.createElement('script');
            script.src = scriptLocation;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
    };

    var eraseCookie = function () {
        log('deleting SiteImprove cookie');
        cookieMgr.eraseCookie('nmstat');
    };

    var init = function (cfg) {
        scriptLocation = cfg.scriptLocation;
        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({
                scriptLocation: scriptLocation
            });
        }
    };

    return {
        init: init,
        injectCode: injectCode,
        eraseCookie: eraseCookie
    };
})();
// Add a getElementsByClassName function if the browser doesn't have one
// Limitation: only works with one class name
// Copyright: Eike Send http://eike.se/nd
// License: MIT License
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (search) {
        var d = document,
            elements, pattern, i, results = [];
        if (d.querySelectorAll) { // IE8
            return d.querySelectorAll("." + search);
        }
        if (d.evaluate) { // IE6, IE7
            pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
            elements = d.evaluate(pattern, d, null, 0, null);
            while ((i = elements.iterateNext())) {
                results.push(i);
            }
        } else {
            elements = d.getElementsByTagName("*");
            pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
            for (i = 0; i < elements.length; i++) {
                if (pattern.test(elements[i].className)) {
                    results.push(elements[i]);
                }
            }
        }
        return results;
    };
}
var CookiePrompter = (function () {
    "use strict";
    var NO_TRACK_VAL = 'n',
        OK_TRACK_VAL = 'y',
        TRACKING_COOKIE = 'cookieOptOut',
        trackers = [],
        config = {}, // will get keys from defaults on init
        defaults = { // will be copied into config on init
            setCookieOnTopLevelDomain: false,
            expiryDays: 365,
            readMoreUrl: '/',
            textHeader: 'Vi samler statistik ved hjælp af cookies',
            textblock1: 'Ved at klikke OK accepterer du vores cookies til statistik. Du kan sige ',
            textblock2: '. Vi bruger en cookie, for at huske dit nej.',
            textNoThanks: 'nej tak til statistikcookies ved at klikke her',
            textReadMore: 'Læs mere om cookies her',
            textAccept: 'OK',
            textDontAccept: '',
            styling: {
                'inlinestyle': 'border-bottom:2px solid #000;padding: 12px 20px 0 20px;margin-bottom:12px;',
                'inlinestyleInner': 'max-width:960px;margin-left:auto;margin-right:auto;'
            },
            enableLog: false,
            onOptOut: function (pageHref) {
                log('opting out from page: ' + pageHref);
            },
            onReady: function (cfg) {
                log('config.onReady()');
            },
            cookieMgr: CookieMgr
        };

    var log = function (msg) {
        if (config.enableLog && window.console) {
            console.log(msg);
        }
    };

    var removePrompt = function () {
        var el = document.getElementById("cookiePrompt");
        if (el) {
            el.parentNode.remove();
        }
    };

    var setNoTrackingCookie = function () {
        config.cookieMgr.eraseCookie(TRACKING_COOKIE);
        config.cookieMgr.createCookie(TRACKING_COOKIE, NO_TRACK_VAL, config.expiryDays);
    };

    var acceptBtnClick = function () {
        config.cookieMgr.createCookie(TRACKING_COOKIE, OK_TRACK_VAL, config.expiryDays);
        insertTrackingCode();
        removePrompt();
        return false;
    };

    var eraseCookiesAndRemovePrompt = function () {
        log('eraseCookiesAndRemovePrompt()');
        removeCookies();
        removePrompt();
        if (config.onOptOut && typeof (config.onOptOut) === 'function') {
            log('firing onOptOut callback');
            config.onOptOut(window.location.href);
        }
        return false;
    };

    var bindAcceptCookiesBtn = function () {
        log('bindAcceptCookiesBtn()');
        var acceptbtns = document.getElementsByClassName('cpAcceptBtn');
        for (var i = acceptbtns.length - 1; i >= 0; i--) {
            var btn = acceptbtns[i];
            btn.onclick = acceptBtnClick;
        }
    };

    var bindDontAcceptCookiesBtn = function () {
        log('bindDontAcceptCookiesBtn()');
        var dontAcceptBtns = document.getElementsByClassName('cpDontAcceptBtn');
        for (var i = dontAcceptBtns.length - 1; i >= 0; i--) {
            var btn = dontAcceptBtns[i];
            btn.onclick = eraseCookiesAndRemovePrompt;
        }
    };

    var hookupExplicitBtns = function () {
        log('hookupExplicitBtns()');
        bindAcceptCookiesBtn();
        bindDontAcceptCookiesBtn();
    };

    var renderCookieprompt = function () {
        log('renderCookieprompt()');
        log('  removing prompt');
        removePrompt();

        log('  creating and inserting html');
        var html = [];
        html.push('<div class="cookie-message" id="cookiePrompt" role="complementary" aria-labelledby="cookie-message-title1" aria-describedby="cookie-message-content1">');
        html.push('<div class="cookie-text">');
        html.push('<div class="h3 mt-0 mb-3" id="cookie-message-title1">' + config.textHeader + '</div>');
        html.push('<p class="mt-0" id="cookie-message-content1">' + config.textblock1);
        html.push(config.textblock2);

        if (config.readMoreUrl && document.location.hash !== '#cookieprompt') {
            html.push(' <a href="' + config.readMoreUrl + '#cookieprompt">' + config.textReadMore + '</a>');
        }
        html.push('</p>');
        html.push('</div>');

        html.push('<div class="cookie-actions">');
        html.push('<ul class="inline-list">');
        html.push('<li><a href="#" class="cpAcceptBtn button button-secondary">' + config.textAccept + '</a></li>');
        if (config.textDontAccept !== '') {
            html.push('<li><a href="#" class="cpDontAcceptBtn ml-md-4 button button-secondary">' + config.textDontAccept + '</a></li>');
        }
        html.push('</ul>');
        html.push('</div>');

        html.push('</div>');
        var body = document.getElementsByTagName('body')[0];
        var block = document.createElement('div');
        block.className = 'cookie-container';
        block.innerHTML = html.join('');
        body.insertBefore(block, body.firstChild);
        var link = document.getElementById('eksCookieNo');
        if (link) {
            link.onclick = eraseCookiesAndRemovePrompt;
        }

        hookupExplicitBtns();
    };

    var insertTrackingCode = function (cfg) {
        log('inserting tracking code for ' + trackers.length + ' trackers');
        for (var i = 0; i < trackers.length; i++) {
            var t = trackers[i];
            t.injectCode(cfg);
        }
    };

    var init = function (opts) {
        log('init()');

        // merge defaults into config
        for (var k in defaults) {
            config[k] = defaults[k];
        }

        // merge supplied overrides into config
        for (var j in opts) {
            config[j] = opts[j];
        }

        config.cookieMgr.init({
            setCookieOnTopLevelDomain: config.setCookieOnTopLevelDomain
        });

        trackers = [];
        if (opts.trackers) {
            for (var i = 0; i < opts.trackers.length; i++) {
                var tracker = opts.trackers[i].name;
                log(tracker);
                var trackerConfig = opts.trackers[i].config;
                tracker.init(trackerConfig);
                trackers.push(tracker);
            }
        } else {
            log('  no trackers added. You would probably want at least one.');
        }

        // read more page
        if (document.location.hash === '#cookieprompt') {
            renderCookieprompt();
            return;
        }

        // check for cookie
        var cookie = config.cookieMgr.readCookie(TRACKING_COOKIE);
        log('  tracking cookie found:', cookie);

        if (cookie === NO_TRACK_VAL) {
            log('  a) disabletracking cookie found. Not tracking');
            eraseCookies();
        } else {
            if (cookie === OK_TRACK_VAL) {
                log('  b) ok cookie found, tracking accepted, we are tracking');
                insertTrackingCode();
            } else {
                log('  rendering prompt because explicit (no cookie)');
                renderCookieprompt();
            }
        }

        config.onReady(config);
    };

    // erasing cookies in all trackers
    var eraseCookies = function () {
        log('deleting cookies');
        for (var i = 0; i < trackers.length; i++) {
            log('deleting for ', trackers[i]);
            trackers[i].eraseCookie();
        }
    };

    // erasing cookies and setting dont-track cookie
    var removeCookies = function () {
        eraseCookies();
        setNoTrackingCookie();
    };

    // get the optout cookie
    var getCookie = function () {
        return config.cookieMgr.readCookie(TRACKING_COOKIE);
    };

    return {
        init: init,
        removeCookies: removeCookies,
        removePrompt: removePrompt,
        eraseCookiesAndRemovePrompt: eraseCookiesAndRemovePrompt,
        getCookie: getCookie
    };
})();

module.exports = { CookiePrompter: CookiePrompter, PiwikProTracker: PiwikProTracker, CookieMgr: CookieMgr, TestTracker: TestTracker, TestTracker: TestTracker, SiteImproveTracker: SiteImproveTracker};
