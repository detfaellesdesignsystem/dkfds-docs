const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000";
//var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    {"url": "/preview-components/header.html", "filename": "header.png", "width": 992, "height": 322 },
    {"url": "/preview-components/footer-simple.html", "filename": "footer-simple.png", "width": 1017, "height": 164 },
    {"url": "/preview-components/cookie-message.html", "filename": "cookie-message.png", "width": 771, "height": 294 }
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
                    let cookieMessage = document.getElementById('cookieMessage');
                    if (cookieMessage !== null) {
                        cookieMessage.style.display = 'none';
                    }

                    window.scrollTo(0, 0);
                });
            }


            var pdfFileName = targetRootDir + '/' + themes[t] + '-' + exampleUrls[i].filename;

            await page.screenshot({path: pdfFileName});
            await browser.close();
        }
    }
})();
