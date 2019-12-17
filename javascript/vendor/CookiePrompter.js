
/*
* This script was based on the CookiePrompter v2.0.7 - https://github.com/CookiePrompter/CookiePrompter
* This script has been edited and does not correspond to any version of the original CookiePrompter.
* */
var CookieMgr = (function () {
    var enableLog = false;
    var setCookieOnTopLevelDomain=false;
    var log = function(msg){
        if(enableLog && window.console){
            console.log(msg);
        }
    };


        var getCookieDomain=function(hostname){
            // strip www
            var domain=hostname.replace('www.','');
            log('setting cookie on toplevel domain:'+setCookieOnTopLevelDomain);
            if(setCookieOnTopLevelDomain){

                domain = domain.replace(/[\w\d\-\.]*\.([\w\d\-]*\.\w{2,3})$/i,'$1');
            }
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
        log('setting cookie on '+domain);
        if (domain === 'localhost') {
            document.cookie = name + "=" + value + expires + "; path=/";
        } else {
            document.cookie = name + "=" + value + expires + ";domain=" + domain + "; path=/";
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
        init=function(opts){
            log('init cookiemgr:');
            log(opts);
            setCookieOnTopLevelDomain=opts.setCookieOnTopLevelDomain;
        };
    return {init:init, createCookie: createCookie, readCookie: readCookie, eraseCookie: eraseCookie,getCookieDomain:getCookieDomain };
})();

var TestTracker = (function() {
    "use strict";
    var enableLog = false;
    var log = function(msg) {
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
    injectCode= function() {
        var testTag = document.createElement('h1');
        testTag.className = 'testheader';
        testTag.innerText = 'Overskrift';
        testTag.id = 'h1header';
        var body = document.getElementsByTagName('body')[0];
        body.insertBefore(testTag, body.firstChild);
    },
    eraseCookie= function() {
        var el = document.getElementById("h1header");
        if (el) {
            el.parentNode.removeChild(el);
        }
    };
    return { init: init,injectCode:injectCode,eraseCookie:eraseCookie };
})();

var NetMinersTracker = (function () {
    "use strict";
    var netminersAccount,scriptLocation,enableLog = false;
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

    var init = function(cfg){
        netminersAccount = cfg.netminersAccount;
        scriptLocation = cfg.scriptLocation;

        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({scriptLocation:scriptLocation,netminersAccount:netminersAccount});
        }

    };

    return { init:init,injectCode: injectCode, eraseCookie: eraseCookie };
})();
var SiteImproveTracker = (function () {
    "use strict";
    var scriptLocation,
        enableLog=false,
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

    var init = function(cfg) {
        scriptLocation = cfg.scriptLocation;
        if (cfg.ready && typeof cfg.ready === 'function') {
            cfg.ready({scriptLocation:scriptLocation});
        }
    };

    return { init:init,injectCode: injectCode, eraseCookie: eraseCookie };
})();
var ReferrerHandler = (function(){
	var cameFromSameDomain = function(doc){
                if(doc.referrer === null || typeof doc.referrer === 'undefined' ){return;}
                var indexAfterProtocolAndHostName = doc.referrer.indexOf('/',doc.referrer.indexOf('//')+2);
                var indexOfHostName = doc.referrer.indexOf(doc.location.host);
                if(indexOfHostName===-1 || indexOfHostName>indexAfterProtocolAndHostName){
                    return false;
                }else{
                    return true;
                }
            };
	return{cameFromSameDomain:cameFromSameDomain};
})();
// Add a getElementsByClassName function if the browser doesn't have one
// Limitation: only works with one class name
// Copyright: Eike Send http://eike.se/nd
// License: MIT License
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function(search) {
    var d = document, elements, pattern, i, results = [];
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
        if ( pattern.test(elements[i].className) ) {
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
        trackers =[],
        config={}, // will get keys from defaults on init
        defaults = { // will be copied into config on init
            setCookieOnTopLevelDomain:false,
            explicitAccept: false,
            showOKbutton: false,
            expiryDays: 365,
            trackLandingPage: false,
            readMoreUrl: '/',
            textHeader: 'Vi samler statistik ved hjælp af cookies',
            textblock1: 'Vi begynder dog først, når du klikker dig videre til næste side. Du kan sige ',
            textblock2: '. Vi bruger en cookie, for at huske dit Nej. Ønsker du helt at undgå cookies, skal du slå cookies fra i din browser. Du skal dog være opmærksom på, at hvis du slår cookies fra, kan du ikke logge på eller bruge andre funktioner, som forudsætter, at hjemmesiden kan huske dine valg.',
            textNoThanks: 'Nej tak til statistik ved at klikke her',
            textReadMore: 'Læs mere om cookies her',
            textAccept: 'Accepter cookies',
            textDontAccept: 'Accepter ikke Cookies',
            textOKbutton: 'OK',
            styling: {
                'inlinestyle': 'border-bottom:2px solid #000;padding: 12px 20px 0 20px;margin-bottom:12px;',
                'inlinestyleInner': 'max-width:960px;margin-left:auto;margin-right:auto;'
            },
            enableLog: false,
            onOptOut: function(pageHref){
                log('opting out from page: '+pageHref);
            },
            onReady: function(cfg){},
            referrerHandler: ReferrerHandler,
            cookieMgr: CookieMgr
        };

    var log = function (msg) {
        if (config.enableLog && window.console) {
            console.log(msg);
        }
    };

    var removePrompt = function () {
        var el = document.getElementById("cookieMessage");
        if (el) {
            el.parentNode.removeChild(el);
        }
    };

    var setNoTrackingCookie = function () {
        config.cookieMgr.eraseCookie(TRACKING_COOKIE);
        config.cookieMgr.createCookie(TRACKING_COOKIE, NO_TRACK_VAL, config.expiryDays);
    };

    var acceptBtnClick = function(){
        config.cookieMgr.createCookie(TRACKING_COOKIE, OK_TRACK_VAL, config.expiryDays);
        insertTrackingCode();
        removePrompt();
        return false;
    };

    var eraseCookiesAndRemovePrompt = function(){
        removeCookies();
        removePrompt();
        if(config.onOptOut && typeof(config.onOptOut)==='function'){
            log('firing onOptOut callback');
            config.onOptOut(window.location.href);
        }
        return false;
    };

    var bindAcceptCookiesBtn = function(){
        var acceptbtns = document.getElementsByClassName('acceptCookieButton');
        for (var i = acceptbtns.length - 1; i >= 0; i--) {
            var btn = acceptbtns[i];
            btn.onclick = acceptBtnClick;
        }
    };

    var bindDontAcceptCookiesBtn = function(){
      var dontAcceptBtns = document.getElementsByClassName('cpDontAcceptBtn');
        for (var i = dontAcceptBtns.length - 1; i >= 0; i--) {
            var btn = dontAcceptBtns[i];
            btn.onclick = eraseCookiesAndRemovePrompt;
        }
    };

    var hookupExplicitBtns = function(){
        bindAcceptCookiesBtn();
        bindDontAcceptCookiesBtn();
    };

    var renderCookieprompt = function () {
        log('rendering prompt');
        removePrompt();

        var html = [];


        html.push('<div class="container">');
        html.push('<div class="card w-percent-md-70 w-percent-lg-50">');
        html.push('<div class="card-text pt-6 pl-6 pr-6 pb-0">');

        if(config.textHeader !== '') {
            html.push('<strong>' + config.textHeader + '</strong>');
        }
        html.push('<p class="mt-0 mb-0">' + config.textblock1);
        if (config.readMoreUrl && document.location.hash !== '#cookieprompt') {
            html.push(' <a href="' + config.readMoreUrl + '#cookieprompt">' + config.textReadMore + '</a>');
        }
        html.push(config.textblock2 + '</p>');
        html.push('</div>');
        html.push('<div class="card-action pb-6 pl-6 pr-6">');

        if(config.showOKbutton){
            html.push('<ul class="unstyled-list mt-4"><li class="d-md-inline-block mb-4 mb-md-0"><a href="#" class="button button-secondary acceptCookieButton" id="acceptCookieButton">'+config.textOKbutton+'</a></li>');
            html.push('<li class="d-md-inline-block ml-md-4"><a href="#" id="declineCookieButton" class="button button-tertiary">' + config.textNoThanks + '</a></li></ul>');
        }
        if(config.explicitAccept){
            html.push('<ul class="unstyled-list mt-4"><li class="d-md-inline-block mb-4 mb-md-0"><a href="#" class="button button-secondary acceptCookieButton" id="acceptCookieButton">'+config.textOKbutton+'</a></li>');
            html.push('<li class="d-md-inline-block ml-md-4"><a href="#" id="declineCookieButton" class="button button-tertiary cpDontAcceptBtn">' + config.textNoThanks + '</a></li></ul>');
        }
        html.push('</div></div></div>');
        var body = document.getElementsByTagName('body')[0];
        var block = document.createElement('div');
        block.id ='cookieMessage';
        block.innerHTML = html.join('');
        body.insertBefore(block, body.firstChild);
        var link = document.getElementById('declineCookieButton');
        if (link) {
            link.onclick = eraseCookiesAndRemovePrompt;
        }

        hookupExplicitBtns();
    };

    var insertTrackingCode = function (cfg) {
        log('inserting tracking code for '+trackers.length+ ' trackers');
        for (var i = 0; i < trackers.length; i++) {
            var t = trackers[i];
            t.injectCode(cfg);
        }
    };

    var init = function (opts) {
        // merge defaults into config
        for (var k in defaults) {
            config[k] = defaults[k];
        }

        // merge supplied overrides into config
        for (var j in opts) {
            config[j] = opts[j];
        }

        log('init');

        config.cookieMgr.init({setCookieOnTopLevelDomain:config.setCookieOnTopLevelDomain});

        trackers = [];
        if (opts.trackers) {
            for (var i = 0; i < opts.trackers.length; i++) {
                var tracker = opts.trackers[i].name;
                log(tracker);
                var trackerConfig =opts.trackers[i].config;
                tracker.init(trackerConfig);
                trackers.push(tracker);
            }
        }else{
            log('no trackers added. You would probably want at least one.');
        }


        // read more page
        if (document.location.hash === '#cookieprompt') {
            renderCookieprompt();
            return;
        }

        // check for cookie
        var cookie = config.cookieMgr.readCookie(TRACKING_COOKIE);
        log('tracking cookie found:');
        log(cookie);


        if (cookie === NO_TRACK_VAL) {
            log('a) disabletracking cookie found. Not tracking');
        } else {
            if (cookie === OK_TRACK_VAL) {
                log(' b) ok cookie found, tracking accepted, we are tracking');
                insertTrackingCode();
            } else {
                if(config.explicitAccept===true){
                    log('rendering prompt because explicit (no cookie)');
                    renderCookieprompt();
                }else{
                    if (config.referrerHandler.cameFromSameDomain(document)) {
                        log(" c) referrer found from same domain, setting cookie and tracking");
                        config.cookieMgr.createCookie(TRACKING_COOKIE, OK_TRACK_VAL, config.expiryDays);
                        insertTrackingCode();
                    } else {
                        log(" d) first time, let's ask");
                        renderCookieprompt();
                    }
                    if (config.trackLandingPage) {
                        window.onbeforeunload = function () {
                            log('landing page tracking..');
                            if (config.cookieMgr.readCookie(TRACKING_COOKIE) === NO_TRACK_VAL) {
                                log('anticookie, lets skip');
                            } else {
                                config.cookieMgr.createCookie(TRACKING_COOKIE, OK_TRACK_VAL, config.expiryDays);
                                log('no anticookie set, lets track, but disable async to wait for script load before moving on');
                                insertTrackingCode({async:false});
                            }
                        };
                    }
                }
            }
        }
        config.onReady(config);
    };

    var removeCookies = function () {
        log('deleting cookies');
        for (var i = 0; i < trackers.length; i++) {
            trackers[i].eraseCookie();
        }

        setNoTrackingCookie();
    };

    return { init: init, removeCookies: removeCookies,removePrompt:removePrompt,eraseCookiesAndRemovePrompt:eraseCookiesAndRemovePrompt };
})();

module.exports = { CookiePrompter: CookiePrompter, NetMinersTracker: NetMinersTracker, CookieMgr: CookieMgr, TestTracker: TestTracker, TestTracker: TestTracker, SiteImproveTracker: SiteImproveTracker};
