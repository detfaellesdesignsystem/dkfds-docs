import * as DKFDS from "dkfds";
const themeAlertId = 'themeAlert';
const cookieName = 'theme';
const themes = ['virk', 'borgerdk'];
const themeStylesheets = ['styleguide_virkdk', 'styleguide_borgerdk'];
const isDebugging = false;
const demoSelectorId = 'themeselector';
const VERSION = '10.1.0';

document.addEventListener("DOMContentLoaded", function(){
 
        debug('cookie', getThemeCookie());

        // verify cookie contains correct value
        verifyCookieOrDelete();

        // show theme alert on pages
        themeAlertMessage();

        // set theme if ?theme=virk|borgerdk
        isThemeSetInUrl();

        // set cookie if missing
        setCookieIfMissing();

        // load stylesheet
        setStylesheet();

        setFooterSwitcher();

        // handle theme selector on demo pages
        setDemoSwitcher();

        setScreenshots();

        setThumbnails();

        setDoDontImages();

        setHomepageIllustration();

        setCardImages();
});

let setHomepageIllustration = function(){
    let illustration = document.getElementById('designsystem-illustration');
    if(illustration !== null){
        if(getThemeCookie() === "virk"){
            illustration.setAttribute('src', "/assets/img/descriptionimages/Forside_illu_virk.svg");
        } else if(getThemeCookie() === "borgerdk"){
            illustration.setAttribute('src', "/assets/img/descriptionimages/Forside_illu_borger.svg");
        }else{
            illustration.parentNode.removeChild(illustration);
        }
    }
};

let isThemeSetInUrl = function(){
    let parameters = window.location.search.substr(1);
    if(parameters === ""){
        return;
    }
    parameters = parameters.split('&');
    for (let i = 0; i < parameters.length; i++){
        let split = parameters[i].split('=');
        let key = split[0];
        let value = split[1];
        if(key === "theme" && themes.indexOf(value) >= 0){
            setThemeCookie(value);
            return;
        }
    }
}

let setCookieIfMissing = function (){
    if(!isCookieSet()){
        debug('Cookie was not set', getThemeCookie());
        setRandomThemeCookie();
    }
};

let verifyCookieOrDelete = function(){
    if(isCookieSet()) {
        let themeChosen = getThemeCookie();
        if(themes.indexOf(themeChosen) < 0){
            deleteCookie(cookieName);
            debug('cookie was deleted:', themeChosen);
        }
    }
};

let themeAlertMessage = function(){
    let alert = document.getElementById(themeAlertId);
    if(!isCookieSet() && alert !== null) {
        showThemeAlert();
        document.getElementById('borgerdkThemeBtn').addEventListener('click', onBorgerdkThemeSelected);
        document.getElementById('virkThemeBtn').addEventListener('click', onVirkThemeSelected);
    }
};

let onVirkThemeSelected = function(){
    setThemeCookie(themes[0]);
    if(document.getElementById(themeAlertId) !== null){
        new DKFDS.Alert(document.getElementById(themeAlertId)).hide();
    }
    location.reload();
};
let onBorgerdkThemeSelected = function(){
    setThemeCookie(themes[1]);
    if(document.getElementById(themeAlertId) !== null){
        new DKFDS.Alert(document.getElementById(themeAlertId)).hide();
    }
    location.reload();
};

let setStylesheet = function(){
    if (!document.body.classList.contains('layout-test-example')) {
        let themeChosen = getThemeCookie();
        debug('stylesheet:', themeChosen);
        if(themeChosen === null){
            themeChosen = "virk";
        }
        const indexOfTheme = themes.indexOf(themeChosen);
    
        var lnk = document.createElement('link');
        lnk.type='text/css';
        lnk.rel='stylesheet';
        lnk.href= '/assets/style/' + themeStylesheets[indexOfTheme] + '.css' + '?v=' + VERSION;
    
        document.getElementsByTagName('head')[0].appendChild(lnk);
    }
};


let showThemeAlert = function(){
    if(document.getElementById(themeAlertId) !== null) {
        new DKFDS.Alert(document.getElementById(themeAlertId)).show();
    }
};

let setRandomThemeCookie = function(){
    let randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setThemeCookie(randomTheme);
};
let setThemeCookie = function(theme){
    if(themes.indexOf(theme) >= 0) {
        debug('setting cookie', theme);
        setCookie(cookieName, theme, 365);
        return true;
    }
    return false;

};

let isCookieSet = function(){
    let cookie = getCookie(cookieName);
    if(cookie === null){
        return false;
    }
    return true;
};

let getThemeCookie = function(){
 return getCookie(cookieName);
};

let setCookie = function (name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    let cookie = name + "=" + encodeURIComponent(value);

    if(typeof daysToLive === "number") {

        let d = new Date();
        d.setTime(d.getTime() + (daysToLive*24*60*60*1000));
        cookie += ";expires="+ d.toUTCString();

        cookie += ';path=/';
        debug('Setting cookie', cookie);
        document.cookie = cookie;
    }
};

let deleteCookie = function ( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
};

let getCookie = function(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
};

let setFooterSwitcher = function(){
    if(document.getElementById('changeTheme') !== null) {
        let cookie = getThemeCookie();
        let theme = "";
        switch (cookie) {
            case themes[0]:
                theme = "Borger.dk";
                break;
            case themes[1]:
                theme = "Virk";
                break;

        }

        var text = "Skift til " + theme + " tema";
        document.getElementById('changeThemeText').innerText = text;

        document.getElementById('changeTheme').addEventListener('click', toggleTheme);
    }
};

let setDemoSwitcher = function () {
    if (document.getElementById('changeDemoTheme') !== null) {

        /* Ensure the button shows the correct text */
        let cookie = getThemeCookie();
        let theme = "";
        switch (cookie) {
            case themes[0]:
                theme = "Borger.dk";
                break;
            case themes[1]:
                theme = "Virk";
                break;
        }
        let text = "Skift til " + theme + " tema";
        document.getElementById('changeDemoThemeText').innerText = text;

        /* Add event listener */
        document.getElementById('changeDemoTheme').addEventListener('click', function() {
            let newTheme = "";
            switch (cookie) {
                case themes[0]:
                    newTheme = themes[1];
                    break;
                case themes[1]:
                    newTheme = themes[0];
                    break;
            }
            setThemeCookie(newTheme);
            window.themeChangeProcess = true;
            location.reload();
        });
    }
};

let toggleTheme = function () {
    let cookie = getThemeCookie();
    if (cookie === themes[0]) {
        onBorgerdkThemeSelected();
    } else if (cookie === themes[1]) {
        onVirkThemeSelected();
    }
};

let debug = function(title, value){
    if(isDebugging){
        console.log(title, value);
    }
};

let setThumbnails = function() {
    if (document.getElementsByTagName('body')[0].classList.contains('page-selvbetjeningsløsninger') || 
        document.getElementsByTagName('body')[0].classList.contains('page-templates')) {
        let thumbnails = document.querySelectorAll('[data-image]');
        for (let t = 0; t < thumbnails.length; t++) {
            let thumbnail = thumbnails[t];
            let imageSrc = '/assets/img/examples_pages/' + thumbnail.dataset.folder + '/' + getThemeCookie() + '-' + thumbnail.dataset.image + '.PNG';
            let imageAlt = 'Skærmbillede af ' + thumbnail.getAttribute('title');
            let image = `<img src="${imageSrc}" alt="${imageAlt}" class="w-percent-100 d-block" />`;
            thumbnail.innerHTML = image;
        }
        let galleries = document.getElementsByClassName('screenshot-gallery');
        if (galleries.length !== 0 ) {
            for (let g = 0; g < galleries.length; g++) {
                galleries[g].classList.remove('d-none');
            }
        }
    }
}

let setScreenshots = function(){
    if(document.getElementsByTagName('body')[0].classList.contains('page-gå-til-sidens-indhold-skip-link')
        || document.getElementsByTagName('body')[0].classList.contains('page-overskrifter') 
        || document.getElementsByTagName('body')[0].classList.contains('page-sprogvælger') 
        || document.getElementsByTagName('body')[0].classList.contains('page-footer') 
        || document.getElementsByTagName('body')[0].classList.contains('page-header') 
        || document.getElementsByTagName('body')[0].classList.contains('page-tilbage-til-toppen')
        || document.getElementsByTagName('body')[0].classList.contains('page-cookiemeddelelse')
        || document.getElementsByTagName('body')[0].classList.contains('page-fejlopsummering')
        || document.getElementsByTagName('body')[0].classList.contains('page-anchorlinks')
        || document.getElementsByTagName('body')[0].classList.contains('page-faneblade-tabs')){
        let screenshots = document.querySelectorAll('.screenshot');
        for(let i = 0; i < screenshots.length; i++){
            let url = screenshots[i].getAttribute('href').split('?')[0].split('/');
            let componentName = url[url.length-2];
            if(screenshots[i].getAttribute('data-image') !== null){
                componentName = screenshots[i].getAttribute('data-image');
            }
            let filename = getThemeCookie()+'-'+componentName+'.png';
            let image = '<img src="/assets/img/examples/'+filename+'" alt="Skærmbillede af '+screenshots[i].getAttribute('title')+'" class="d-block" />';
            screenshots[i].innerHTML = image;
        }
    }

    if (document.getElementsByTagName('body')[0].classList.contains('page-layout')) {
        let screenshots = document.querySelectorAll('.screenshot');
        for(let i = 0; i < screenshots.length; i++) {
            let src = screenshots[i].getAttribute('src').split('/');
            let lastElement = src.pop();
            let filename = lastElement.split('-');
            filename.shift();
            let newFilename = getThemeCookie() + '-' + filename.join('-');
            let newSrc = src.join('/') + "/" + newFilename;
            screenshots[i].src = newSrc;
        }
    }
};

let setDoDontImages = function() {
    let dodonts = document.querySelectorAll('.do-dont-container');
    let cookie = getThemeCookie();

    for (let i = 0; i < dodonts.length; i++) {
        let images = dodonts[i].getElementsByTagName('IMG');
        for (let j = 0; j < images.length; j++) {
            let src = images[j].src;
            let url_parts = src.split('/');
            let filename = url_parts[url_parts.length-1];
            if (filename.includes("-borgerdk") || filename.includes("-virk")) {
                if (filename.includes("-borgerdk") && cookie === "virk") {
                    let new_filename = filename.replace("-borgerdk", "-virk");
                    images[j].src = "/assets/img/do-dont/" + new_filename;
                }
                else if (filename.includes("-virk") && cookie === "borgerdk") {
                    let new_filename = filename.replace("-virk", "-borgerdk");
                    images[j].src = "/assets/img/do-dont/" + new_filename;
                }
            }
        }
    }
};

let setCardImages = function() {
    if(document.body.classList.contains('page-komponenter')) {
        let IDs = ['card-accordions', 'card-anchorlinks', 'card-badges', 'card-beskeder', 'card-broedkrumme', 'card-cards', 'card-cookiemeddelelse', 'card-datofelter', 'card-datovælger', 'card-detaljer', 'card-dropdown', 'card-faneblade', 'card-fejlmeddelelser', 'card-fejlopsummering', 'card-footer', 'card-funktionslinks', 'card-skip-link', 'card-header', 'card-inputfelter', 'card-knapper', 'card-spinner', 'card-modal', 'card-overflow-menu', 'card-paginering', 'card-radioknap', 'card-sprogvaelger', 'card-soegefelt', 'card-tabeller', 'card-tags', 'card-tekstomraade', 'card-tilbage-link', 'card-tilbage-til-toppen', 'card-tjekboks', 'card-toastbesked', 'card-toggle-switch', 'card-tooltip', 'card-trinindikator', 'card-vedhaeft-fil', 'card-venstremenu'];

        for (let i = 0; i < IDs.length; i++) {
            if (document.getElementById(IDs[i]).querySelector('.new-card-image')) {
                document.getElementById(IDs[i]).querySelector('.new-card-image').innerHTML = 
                '<img src="/assets/img/cards/card-placeholder.png" alt="">';
            }
        }
    }
}