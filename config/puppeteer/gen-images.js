const puppeteer = require('puppeteer');

//var root = "http://127.0.0.1:4000/";
var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    { "url": "eksempel/header-simple/", "filename": "header-simple.png", "width": 992, "height": 146 },
    { "url": "eksempel/header-with-navigation/", "filename": "header-with-navigation.png", "width": 992, "height": 200 },
    { "url": "eksempel/header-switch-language/", "filename": "header-switch-language.png", "width": 992, "height": 180 },
    { "url": "eksempel/footer-simple/", "filename": "footer-simple.png", "width": 1017, "height": 114 },
    { "url": "eksempel/footer-simple-language/", "filename": "footer-simple-language.png", "width": 1017, "height": 213 },
    { "url": "eksempel/footer-three-columns/", "filename": "footer-three-columns.png", "width": 1017, "height": 288 },
    { "url": "eksempel/footer-four-columns/", "filename": "footer-four-columns.png", "width": 1017, "height": 328 },
    { "url": "eksempel/footer-four-columns-language/", "filename": "footer-four-columns-language.png", "width": 1017, "height": 363 },
    { "url": "eksempel/footer-complex/", "filename": "footer-complex.png", "width": 1017, "height": 376 },
    { "url": "eksempel/footer-logo/", "filename": "footer-logo.png", "width": 1017, "height": 352 },
    { "url": "eksempel/language-switcher/", "filename": "language-switcher.png", "width": 1017, "height": 80 },
    { "url": "eksempel/language-switcher-tooltip/", "filename": "language-switcher-tooltip.png", "width": 1017, "height": 95 },
    { "url": "eksempel/cookie-message/", "filename": "cookie-message.png", "width": 771, "height": 290 },
    { "url": "eksempel/headings/", "filename": "headings.png", "width": 771, "height": 388 },
    { "url": "eksempel/skiplink/", "filename": "skiplink.png", "width": 771, "height": 70 },
    { "url": "eksempel/back-to-top/", "filename": "back-to-top.png", "width": 300, "height": 60 },
    { "url": "eksempel/tabs-navigation/", "filename": "tabs-navigation.png", "width": 771, "height": 286 },
    { "url": "eksempel/error-summary-page/", "filename": "error-summary-page.png", "width": 1150, "height": 810 },
    { "url": "eksempel/anchorlinks/", "filename": "anchorlinks.png", "width": 240, "height": 171 }
];

(async () => {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    for (var t = 0; t < themes.length; t++) {
        for (var i = 0; i < exampleUrls.length; i++) {
            console.log(root + exampleUrls[i].url + '?theme=' + themes[t]);

            var resWidth = exampleUrls[i].width; // width of screenshot
            var resHeight = exampleUrls[i].height;

            await page.goto(root + exampleUrls[i].url + '?theme=' + themes[t], { waitUntil: 'load' });
            await page.setViewport({ width: resWidth, height: resHeight });
            await page.evaluate(() => matchMedia('screen').matches);

            if (exampleUrls[i].filename !== "cookie-message.png") {
                await page.evaluate(() => {
                    let cookieMessage = document.getElementById('cookiePrompt');
                    if (cookieMessage !== null) {
                        cookieMessage = cookieMessage.parentNode;
                        cookieMessage.style.display = 'none';
                    }
                    if(document.body.classList.contains('page-skiplink')){
                        document.getElementsByClassName('skipnav')[0].style.transition = 'none';
                    }
                    if (document.body.classList.contains('page-back-to-top')) {
                        var toTopButton = document.getElementsByClassName('back-to-top-button')[0];
                        toTopButton.style.right = "auto";
                        toTopButton.style.bottom = "auto";
                        toTopButton.style.top = "10px";
                    }
                    if (document.body.classList.contains('page-anchorlinks')) {
                        document.querySelector('.anchorbox').style.marginTop = "0";
                        document.querySelector('.anchortitle').style.marginTop = "0";
                    }
                    window.scrollTo(0, 0);
                    if (document.getElementsByClassName('footer').length > 0) {
                        document.getElementsByClassName('footer')[0].style.marginTop = "0px";
                    }
                    if (document.getElementsByClassName('tab-container').length > 0) {
                        document.getElementsByClassName('tab-list')[0].style.marginTop = "-30px";
                    }
                    if (document.getElementsByClassName('page-error-summary-page').length > 0) {
                        document.getElementsByClassName('page-container')[0].style.marginLeft = "-15px";
                        document.getElementsByClassName('page-container')[0].style.marginTop = "-20px";
                    }
                    if (document.getElementsByTagName('body') !== null && document.getElementsByTagName('body')[0].classList.contains("page-language-switcher-tooltip")) {
                        document.querySelector('main').classList.add('d-none');
                        document.querySelector('footer').style.marginTop = "63px";
                    }
                    if (document.getElementsByTagName('body') !== null && document.getElementsByTagName('body')[0].classList.contains("page-language-switcher")) {
                        document.querySelector('main').classList.add('d-none');
                        document.querySelector('footer').style.marginTop = "50px";
                    }
                });
            } else {
                await page.evaluate(() => {
                    document.getElementsByClassName('cookie-container')[0].classList.add('my-7');
                });
            }

            if (exampleUrls[i].filename === "language-switcher-tooltip.png") {
                await page.hover('.tooltip-target');
                await page.waitForSelector('span[data-tooltip="Engelsk"].place-above:not(.hide-tooltip)');
            }

            if (exampleUrls[i].filename === "skiplink.png") {
                await page.focus('.skipnav');
            }

            var pdfFileName = targetRootDir + '/' + themes[t] + '-' + exampleUrls[i].filename;

            await page.screenshot({ path: pdfFileName });
        }
    }

    await browser.close();
})();
