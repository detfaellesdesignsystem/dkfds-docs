'use strict';
import $ from "jquery";
var Cookies = require('./vendor/js-cookie'); // Node.js: Load js-cookie.js
import {CookiePrompter, PiwikProTracker, CookieMgr } from "./vendor/CookiePrompter";
import * as DKFDS from "dkfds";

require('./sidenav'); // Node.js: Load sidenav.js
require('./scroll-top');
require('./copy-code-button');
document.addEventListener("DOMContentLoaded", function() {
    
    // If this is a page with a back-to-top button example, ensure that only the 'real' back-to-top button's JavaScript works
    // Without this code, the back-to-top button example would not be visible due to the JavaScript hiding it
    let bodytag = document.getElementsByTagName('body')[0];
    if (bodytag.classList.contains('page-tilbage-til-toppen') || bodytag.classList.contains('page-back-to-top')) {
        let backtotopbuttons = document.getElementsByClassName('back-to-top-button');
        if (backtotopbuttons.length === 2) {
            new DKFDS.BackToTop(backtotopbuttons[1]).init();
        }
        new DKFDS.Navigation().init(); // Only other relevant JavaScript on back-to-top pages is navigation
    }
    // If this is not a back-to-top example page, init all JavaScript
    else {
        DKFDS.init();
    }

    let icons = document.getElementsByClassName('icon-box');
    if(icons.length !== 0){
        for(let i = 0; i < icons.length; i++){
            new DKFDS.Tooltip(icons[i].getElementsByTagName('p')[0]);
        }
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

    if(document.getElementsByClassName('component-preview-error-summary-page').length > 0){
        new DKFDS.ErrorSummary(document.getElementsByClassName('component-preview-error-summary-page')[0].querySelector('.alert[data-module="error-summary"]')).init();
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
            readMoreUrl: '/privatlivspolitik-cookies/',
            enableLog: false,
            explicitAccept: true,
            textHeader: 'Fortæl os om du accepterer cookies',
            textblock1: 'Vi indsamler statistik ved hjælp af tredjepartscookies til at forbedre brugeroplevelsen. Alle indsamlede data anonymiseres.',
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

    /*
     * If the "cookie radio buttons" are present (i.e. user is on the page "privatlivspolitik"),
     * ensure that they show the correct cookie status and add functionality to the form.
     */
    if($('#cookieForm').length !== 0) {

        if (CookieMgr.readCookie('cookieOptOut') === "n") {
            $('#statCookiesNo').prop("checked", true);
            $('#originalValue').val('0'); // Update hidden input
        }
        else if (CookieMgr.readCookie('cookieOptOut') === "y") {
            $('#statCookiesYes').prop("checked", true);
            $('#originalValue').val('1'); // Update hidden input
        }

        $('#cookieForm').submit(function (event) {
            event.preventDefault();
            var val = $('input[name=statCookies]:checked').val();
            if (val === "1") {
                CookieMgr.createCookie('cookieOptOut', 'y', 1);
                CookiePrompter.removePrompt();
                $('#cookieYesAlert').removeClass('d-none');
                $('#originalValue').val('1'); // Update hidden input
            } else {
                CookiePrompter.eraseCookiesAndRemovePrompt();
                $('#cookieNoAlert').removeClass('d-none');
                $('#originalValue').val('0'); // Update hidden input
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
