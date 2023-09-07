const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000";
//var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    {"url": "/eksempel/header-portal-only/", "filename": "header-portal-only.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-solution-only/", "filename": "header-solution-only.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-navigation-only/", "filename": "header-navigation-only.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-portal-and-solution/", "filename": "header-portal-and-solution.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-solution-and-navigation/", "filename": "header-solution-and-navigation.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-all-rows/", "filename": "header-all-rows.png", "width": 992, "height": 200 },
    {"url": "/eksempel/header-all-rows-dropdown/", "filename": "header-all-rows-dropdown.png", "width": 992, "height": 200 },
    {"url": "/eksempel/footer-simple/", "filename": "footer-simple.png", "width": 1017, "height": 114 },
    {"url": "/eksempel/footer-simple-language/", "filename": "footer-simple-language.png", "width": 1017, "height": 213 },
    {"url": "/eksempel/language-switcher/", "filename": "language-switcher.png", "width": 1017, "height": 80 },
    {"url": "/eksempel/language-switcher-tooltip/", "filename": "language-switcher-tooltip.png", "width": 1017, "height": 101 },
    {"url": "/eksempel/footer-three-columns/", "filename": "footer-three-columns.png", "width": 1017, "height": 288 },
    {"url": "/eksempel/footer-four-columns/", "filename": "footer-four-columns.png", "width": 1017, "height": 328 },
    {"url": "/eksempel/footer-four-columns-language/", "filename": "footer-four-columns-language.png", "width": 1017, "height": 363 },
    {"url": "/eksempel/footer-complex/", "filename": "footer-complex.png", "width": 1017, "height": 376 },
    {"url": "/eksempel/footer-logo/", "filename": "footer-logo.png", "width": 1017, "height": 352 },
    {"url": "/eksempel/cookie-message/", "filename": "cookie-message.png", "width": 771, "height": 280 },
    {"url": "/eksempel/headings/", "filename": "headings.png", "width": 771, "height": 388 },
    {"url": "/eksempel/skiplink/", "filename": "skiplink.png", "width": 771, "height": 70 },
    {"url": "/eksempel/back-to-top/", "filename": "back-to-top.png", "width": 300, "height": 60 }
];

(async () => {

    for(var t=0; t<themes.length; t++) {
        for (var i = 0; i < exampleUrls.length; i++) {

            var resWidth = exampleUrls[i].width; // width of screenshot
            var resHeight = exampleUrls[i].height;

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            console.log(root + exampleUrls[i].url+'?theme='+themes[t]);
            await page.goto(root + exampleUrls[i].url+'?theme='+themes[t], {waitUntil: 'networkidle2'});
            await page.setViewport({width: resWidth, height: resHeight});
            await page.evaluate(() => matchMedia('screen').matches);

            if (exampleUrls[i].filename !== "cookie-message.png"){
                await page.evaluate(() => {
                    let cookieMessage = document.getElementById('cookiePrompt');
                    if (cookieMessage !== null) {
                        cookieMessage = cookieMessage.parentNode;
                        cookieMessage.style.display = 'none';
                    }
                    if(document.body.classList.contains('page-skiplink')){
                        document.getElementsByClassName('skipnav')[0].focus();
                    }
                    if(document.body.classList.contains('page-back-to-top')){
                        var toTopButton = document.getElementsByClassName('back-to-top-button')[0];
                        toTopButton.style.right = "auto";
                        toTopButton.style.bottom = "auto";
                        toTopButton.style.top = "10px";
                    }
                    window.scrollTo(0, 0);
                    if(document.getElementsByClassName('footer').length > 0){
                        document.getElementsByClassName('footer')[0].style.marginTop = "0px";
                    }
                    if(document.getElementsByTagName('body') !== null  && document.getElementsByTagName('body')[0].classList.contains("page-language-switcher-tooltip")){
                        var eventClick = new Event('mouseenter');
                        document.getElementsByClassName('js-tooltip')[0].dispatchEvent(eventClick);
                    }
                });
                await page.waitForTimeout(3000);
            } else{
                await page.evaluate(() => {
                    document.getElementsByClassName('cookie-container')[0].classList.add('m-5');
                });
            }


            var pdfFileName = targetRootDir + '/' + themes[t] + '-' + exampleUrls[i].filename;

            await page.screenshot({path: pdfFileName});
            await browser.close();
        }
    }
})();
