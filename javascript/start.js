'use strict';
import $ from "jquery";
var Cookies = require('./vendor/js-cookie');
var iFrameResize = require('./vendor/iframeResizer');
const TestFDS = require('./test');
import {CookiePrompter, NetMinersTracker, CookieMgr } from  "./vendor/CookiePrompter-2.0.7";
import * as DKFDS from "dkfds";

require('./sidenav');
document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    DKFDS.init();


    let path = window.location.pathname.split('/');
    if(path.indexOf('mastertest') !== -1){
        new TestFDS(DKFDS);
    }
});

$(document).ready(function () {

    let cookiePrompt = CookiePrompter.init({
        trackers: [{
            name: NetMinersTracker,
            config: {
                scriptLocation: 'https://es.netminers.dk/script/383053B8-D66E-4E78-8B58-63F6A2DC54EE/',
                netminersAccount: "es"
            }
        }],
        readMoreUrl: '/privatlivspolitik',
        showOKbutton: true,
        textOKbutton: 'Accepter cookies',
        enableLog: false,
        textHeader: '',
        textblock1: 'Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres. Ved at fortsætte accepterer du ',
        textNoThanks: 'Nej tak til cookies',
        textblock2: '.',
        textReadMore: 'vores brug af cookies',
        onReady: function(){
            if($('#eksCookiePrompt').length !== 0){
                $('body').addClass('hasCookiePrompt');
                $('.cpAcceptBtn').click(function(){
                    $('body').removeClass('hasCookiePrompt');
                });
            }
        },
        onOptOut: function(){
            $('body').removeClass('hasCookiePrompt');
        }
    });
    if($('#cookieForm').length !== 0) {

        if (CookieMgr.readCookie('cookieOptOut') === "n") {
            $('#statCookiesNo').prop("checked", true);
            $('#originalValue').val('0');
        }else{
            $('#originalValue').val('1');
        }

        $('#cookieForm').submit(function (event) {
            event.preventDefault();
            var val = $('input[name=statCookies]:checked').val();
            if (val === "1") {
                CookieMgr.createCookie('cookieOptOut', 'y', 1);
                $('#cookieYesAlert').removeClass('d-none');
                $('#originalValue').val('1');
            } else {
                CookiePrompter.eraseCookiesAndRemovePrompt();
                $('#cookieNoAlert').removeClass('d-none');
                $('#originalValue').val('0');
            }

            $('#cookieButtons').addClass('d-none');
        });

        $('input[type=radio][name=statCookies]').change(function () {
            $('#cookieButtons').removeClass('d-none');
            $('#cookieNoAlert').addClass('d-none');
            $('#cookieYesAlert').addClass('d-none');
        });

        $('#cookieCancel').click(function(){
            if($('#originalValue').val() === "1"){
                $('#statCookiesYes').prop("checked", true);
            } else{
                $('#statCookiesNo').prop("checked", true);
            }

            $('#cookieButtons').addClass('d-none');
        });
    }

    // Initialize The style switcher fill
    $('.style-switcher').val(window.curStyle);
    $('.style-switcher').on('change', function () {
        if (window.curStyle !== this.value) {
            var onlyUrl = window.location.href.replace(window.location.search, '');
            var url = (onlyUrl.indexOf('#') != -1 ? onlyUrl.split('#')[0]+'?s='+this.value : onlyUrl + '?s='+this.value);
            window.location = url;
        }
    });

    // Add style when navigating
    $('a').on('click', function (e) {
        if($(this).attr('href') === "javascript:void(0)"){
            return;
        }
        var hashLocation  = $(this).attr('href').split('#')[ 1 ];
        if(hashLocation == undefined){ //if normal link
            e.preventDefault();
            var onlyUrl =  $(this).attr('href');
            var s = (window.curStyle != undefined && !onlyUrl.includes('http') ? '?s='+window.curStyle : "");
            var url = (onlyUrl.indexOf('#') != -1 ? onlyUrl.split('#')[0]+s+'#'+ onlyUrl.split('#')[1] : onlyUrl + s);
            var target =  $(this).attr('target');
            var blank = false;
            if(target != undefined) {
                blank = target.includes('blank') ? true : false;
            }
            if(blank) {
                window.open(
                    url,
                    '_blank' // <- This is what makes it open in a new window.
                );
            } else {
                window.location.href = url;
            }
        }
    });


    // Add style to preview-iframes
    var previewElements = document.getElementsByClassName('preview-iframe');
    for (var j = previewElements.length - 1; j >= 0; j--) {
        if (window.curStyle){
            previewElements[j].src = previewElements[j].src + '?s=' + window.curStyle;
        }
    }

    //O

    iFrameResize({ log: false, heightCalculationMethod: 'taggedElement', resizeFrom: 'child' }, '.preview-iframe');

    //quick fix to trigger iframeresizer.
    setTimeout(function () {
        var iframes = $('.preview-iframe');
        iframes.each(function(index) {
            if($(this)[0].iFrameResizer !== undefined){
                $(this)[0].iFrameResizer.resize();
            }
        });
    }, 2000);

    var inFormOrLink = false;
    $('.layout-demo a, .layout-demo button').click(function(e){
        inFormOrLink = true;

        if($(this).hasClass('alert-leave')){
            var r = confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?");
            if (r == true) {
                inFormOrLink = true;
                return true;
            } else {
                e.preventDefault();
                inFormOrLink = false;
                return false;
            }
        }
        if($(this).hasClass('alert-leave2')){
            var r = confirm("Du er ved at forlade siden. Evt. indtastninger der ikke er gemt vil gå tabt. Vil du fortsætte?");
            if (r == true) {
                inFormOrLink = true;
                return true;
            } else {
                e.preventDefault();
                inFormOrLink = false;
                return false;
            }
        }
    });

    // alert upon closing page
    window.onbeforeunload = function (e) {
        console.log(e);
        // do not show popup if destination is within the same solution flow
        if(document.getElementsByClassName('layout-demo').length > 0){
            var showPopup = true;
            if(document.activeElement.href !== null && document.activeElement.href !== undefined && window.location.href !== null && window.location.href !== undefined) {
                var targetUrl = document.activeElement.href.split('/');
                var currentUrl = window.location.href.split('/');
                if (targetUrl.length != 0) {
                    if (targetUrl[5] == currentUrl[5]) {
                        showPopup = false;
                    }
                }
            }
            if(showPopup) {
                if(!inFormOrLink) {
                    e = e || window.event;

                    // For IE and Firefox prior to version 4
                    if (e) {
                        e.returnValue = 'Sure?';
                    }

                    // For Safari
                    return 'Sure?';
                }
            }
        }
    };
});
