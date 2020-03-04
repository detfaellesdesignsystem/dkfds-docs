'use strict';
import $ from "jquery";
var Cookies = require('./vendor/js-cookie');
var iFrameResize = require('./vendor/iframeResizer');
const TestFDS = require('./test');
import {CookiePrompter, PiwikProTracker, CookieMgr } from "./vendor/CookiePrompter";
import * as DKFDS from "dkfds";

require('./sidenav');
require('./newsletter');
document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    DKFDS.init();

    let path = window.location.pathname.split('/');
    if(path.indexOf('mastertest') !== -1){
        new TestFDS(DKFDS);
    }

    let searchForm = document.getElementById('search-form');
    if(searchForm !== null){
        let form = searchForm.getElementsByTagName('form')[0];
        form.addEventListener('submit', function(e){
            if(document.getElementById('search-input').value === ""){
                e.preventDefault();
                return false;
            } else {
                return true;
            }
        }, false);
    }

});

$(document).ready(function () {

    if (document.getElementsByClassName('page-cookie-message').length === 0) {
        let cookiePrompt = CookiePrompter.init({
            trackers: [{
                name: PiwikProTracker,
                config: {
                    account: 'e1985634-0fc1-4992-baf6-59088ee23b2a',
                    piwikProPath: 'erst.containers.piwik.pro'
                }
            }],
            readMoreUrl: '/omdesignsystemet/privatlivspolitik-cookies/',
            enableLog: false,
            explicitAccept: true,
            textHeader: 'Fortæl os om du accepterer cookies',
            textblock1: 'Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.',
            textblock2: '',
            textReadMore: 'Læs mere om vores brug af cookies',
            textDontAccept: 'Nej tak til cookies',
            textAccept: 'Accepter cookies',
            onReady: function () {
                if ($('#cookieMessage').length !== 0) {
                    $('body').addClass('cookie-message-active');
                    $('.acceptCookieButton').click(function () {
                        $('body').removeClass('cookie-message-active');
                    });
                }
            },
            onOptOut: function () {
                $('body').removeClass('cookie-message-active');

            }
        });
    }

    $('#start-reqtool').click(function(e){
        e.preventDefault();
        localStorage.removeItem("reqTool");

        window.location.href =  $(this).attr('href');
    });

    $('.layout-demo form').submit(function(e){
        e.preventDefault();
        window.location.href = window.location.origin + $(this).attr('action');
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

    $('.layout-iframed .icon-link, .layout-demo .icon-link').click(function(e){

        var r = confirm("Du er ved at forlade selvbetjeningsløsningen. Data, der ikke er gemt vil gå tabt. Vil du fortsætte?");
        if (r == true) {
            inFormOrLink = true;
            return true;
        } else {
            e.preventDefault();
            inFormOrLink = false;
            return false;
        }

    });


    // alert upon closing page
    window.onbeforeunload = function (e) {
        // do not show popup if destination is within the same solution flow
        if(document.getElementsByClassName('layout-demo').length > 0 && window.themeChangeProcess === undefined){
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
