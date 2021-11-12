'use strict';
import $ from "jquery";
var Cookies = require('./vendor/js-cookie');
const TestFDS = require('./test');
import {CookiePrompter, PiwikProTracker, CookieMgr } from "./vendor/CookiePrompter";
import * as DKFDS from "dkfds";

require('./sidenav');
require('./newsletter');
require('./spinner');
require('./examples');
document.addEventListener("DOMContentLoaded", function() {
    languageSwitcher();
    
    DKFDS.init();
    
    demoReturnToPreviousPage();

    let path = window.location.pathname.split('/');
    if(path.indexOf('mastertest') !== -1){
        new TestFDS(DKFDS);
    }
    toastExample();
    
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
});

/**
 * If demo page with demo footer handle link to previous page if defined
 */
function demoReturnToPreviousPage(){
    if(document.getElementById('btn-demo-return') !== null){
        const queryString = window.location.search;
        let links = document.getElementsByTagName('a');
        for(let l = 0; l < links.length; l++){
            let link = links[l]
            let href = link.getAttribute('href');
            if(href !== "" && !href.startsWith("#") && href.indexOf("javascript") === -1 && href.length > 5 && window.location.href.indexOf('?r=/eksempler/selvbetjeningsloesninger/') !== -1){
                link.setAttribute('href', href + queryString);
            }
        }
        
        let forms = document.getElementsByTagName('form');
        for(let f = 0; f < forms.length; f++){
            let form = forms[f]
            let action = form.getAttribute('action');
            if(action !== null && (action !== "" && action !== "#" && action.length > 5 && window.location.href.indexOf('?r=/eksempler/selvbetjeningsloesninger/') !== -1)){
                form.setAttribute('action', action + queryString);
            }
        }
        
        const urlParams = new URLSearchParams(queryString);
        const returnUrl = urlParams.get('r');
        if (returnUrl !== null){
            document.getElementById('btn-demo-return').setAttribute('href', returnUrl.replace('%23', '#'));
        }
    }
}

function toastExample(){
    let button = document.getElementById('toast-example-button');
    if(button !== null){
        let toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');
        document.getElementById('main-content').prepend(toastContainer);

        button.addEventListener('click', function(){
            let type = ["info", "warning", "error", "success"];
            let headings = ["Du har fået en besked", "Dette er en advarsel", "Der opstod en fejl", "Din ansøgning er afsendt"];
            let randomType = Math.floor(Math.random() * type.length);
            let toastContainerEl = document.getElementsByClassName('toast-container')[0];
            let toastEl = document.createElement('div');
            toastEl.classList.add('toast', 'toast-'+type[randomType], 'hide');
            toastEl.setAttribute('role', "status");
            let icon = document.createElement('div');
            icon.classList.add('toast-icon');
            toastEl.appendChild(icon);
            let message = document.createElement('div');
            message.classList.add('toast-message');
            let heading = document.createElement('p');
            heading.classList.add('bold');
            heading.innerText = headings[randomType];
            message.appendChild(heading);
            let close = document.createElement('button');
            close.classList.add('toast-close');
            close.innerText = "Luk";
            message.appendChild(close);
            let content = document.createElement('p');
            content.innerText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
            message.appendChild(content);
            toastEl.appendChild(message);
            toastContainerEl.appendChild(toastEl);
            requestAnimationFrame(showtoast);
        });
    }
}

function showtoast(){
    new DKFDS.Toast(document.getElementsByClassName('toast-container')[0].getElementsByClassName('hide')[0]).show();
}


function languageSwitcher(){

    if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher') || document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')){
        let queryString = window.location.search;
        if(queryString !== "" && queryString.indexOf("lang=") !== -1){
            let lang = queryString.replace('?lang=', '');
            if(lang !== "da") {
                let element = document.getElementsByClassName('language-switcher')[0];
                let ul = element.getElementsByTagName('ul')[0];
                let first = ul.querySelector('li:first-of-type a');
                first.removeChild(first.getElementsByTagName('svg')[0]);
                ul.querySelector('li:first-of-type a').removeAttribute('aria-label');
                let chosenLang = ul.querySelector('a[lang="' + lang + '"]');
                var svgns = "http://www.w3.org/2000/svg";
                var xlinkns = "http://www.w3.org/1999/xlink";
                let svg = document.createElementNS(svgns, 'svg');
                svg.classList.add('icon-svg');
                svg.setAttribute('focusable', 'false');
                svg.setAttribute('aria-hidden', 'true');
                let use = document.createElementNS(svgns, "use");
                use.setAttributeNS(xlinkns, "href", "#done");
                svg.appendChild(use);
                chosenLang.prepend(svg);
                ul.prepend(chosenLang.parentNode);

                switch (lang) {
                    case "en-GB":
                        ul.setAttribute('aria-label', "Choose language");
                        chosenLang.setAttribute('aria-label', "Current language: English");

                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')) {
                            ul.querySelector('a[lang="en-GB"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="en-GB"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Danish");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "English");
                            ul.querySelector('a[lang="de"]').setAttribute('data-tooltip', "German");
                            ul.querySelector('a[lang="pl"]').setAttribute('data-tooltip', "Polish");
                        }

                        break;
                    case "de":
                        ul.setAttribute('aria-label', "Sprache wählen");
                        chosenLang.setAttribute('aria-label', "Aktuelle Sprache: Deutsch");

                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')) {
                            ul.querySelector('a[lang="de"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="de"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Dänisch");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "Englisch");
                            ul.querySelector('a[lang="pl"]').setAttribute('data-tooltip', "Polieren");
                        }

                        break;
                    case "pl":
                        ul.setAttribute('aria-label', "Wybierz język");
                        chosenLang.setAttribute('aria-label', "Aktualny język: polski");
                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')){
                            ul.querySelector('a[lang="pl"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="pl"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Duński");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "Angielski");
                            ul.querySelector('a[lang="de"]').setAttribute('data-tooltip', "Niemiecki");
                        }

                        break;
                }
            }

        }
    }
}


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
