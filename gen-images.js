const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000";
//var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    {"url": "/eksempel/header/", "filename": "header.png", "width": 992, "height": 322 },
    {"url": "/eksempel/header-simple/", "filename": "header-simple.png", "width": 992, "height": 158 },
    {"url": "/eksempel/header-large/", "filename": "header-large.png", "width": 992, "height": 158 },
    {"url": "/eksempel/header-medium/", "filename": "header-medium.png", "width": 992, "height": 262 },
    {"url": "/eksempel/header-full/", "filename": "header-full.png", "width": 992, "height": 322 },
    {"url": "/eksempel/footer-simple/", "filename": "footer-simple.png", "width": 1017, "height": 184 },
    {"url": "/eksempel/footer-simple-language/", "filename": "footer-simple-language.png", "width": 1017, "height": 213 },
    {"url": "/eksempel/language-switcher/", "filename": "language-switcher.png", "width": 1017, "height": 117 },
    {"url": "/eksempel/language-switcher-tooltip/", "filename": "language-switcher-tooltip.png", "width": 1017, "height": 117 },
    {"url": "/eksempel/footer-three-columns/", "filename": "footer-three-columns.png", "width": 1017, "height": 448 },
    {"url": "/eksempel/footer-four-columns/", "filename": "footer-four-columns.png", "width": 1017, "height": 352 },
    {"url": "/eksempel/footer-four-columns-language/", "filename": "footer-four-columns-language.png", "width": 1017, "height": 381 },
    {"url": "/eksempel/footer-complex/", "filename": "footer-complex.png", "width": 1017, "height": 376 },
    {"url": "/eksempel/footer-logo/", "filename": "footer-logo.png", "width": 1017, "height": 352 },
    {"url": "/eksempel/cookie-message/", "filename": "cookie-message.png", "width": 771, "height": 270 },
    {"url": "/eksempel/headings/", "filename": "headings.png", "width": 771, "height": 388 }
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
            await page.emulateMedia('screen');

            if (exampleUrls[i].filename !== "cookie-message.png"){
                await page.evaluate(() => {
                    let cookieMessage = document.getElementById('cookiePrompt').parentNode;
                    if (cookieMessage !== null) {
                        cookieMessage.style.display = 'none';
                    }

                    window.scrollTo(0, 0);


                    if(document.getElementsByTagName('body')[0].classList.contains("page-language-switcher-tooltip")){
                        var eventClick = new Event('mouseover');
                        document.getElementsByClassName('js-tooltip')[0].dispatchEvent(eventClick);
                    }
                });
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
