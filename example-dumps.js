const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000/";
//var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples_pages/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    {"url": "pages/eksempler/aktindsigt/aktindsigt-1/", "folder": "aktindsigt", "filename": "aktindsigt-1.PNG"},
    {"url": "pages/eksempler/aktindsigt/aktindsigt-2/", "folder": "aktindsigt", "filename": "aktindsigt-2.PNG"},
    {"url": "pages/eksempler/aktindsigt/aktindsigt-3/", "folder": "aktindsigt", "filename": "aktindsigt-3.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-oversigt-2/", "folder": "boernetilskud", "filename": "boernetilskud-oversigt-2.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-oversigt/", "folder": "boernetilskud", "filename": "boernetilskud-oversigt.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-1/", "folder": "boernetilskud", "filename": "boernetilskud-1.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-2/", "folder": "boernetilskud", "filename": "boernetilskud-2.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-1/", "folder": "AES-erstatningssag", "filename": "aes-1.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-2/", "folder": "AES-erstatningssag", "filename": "aes-2.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-3/", "folder": "AES-erstatningssag", "filename": "aes-3.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-4/", "folder": "AES-erstatningssag", "filename": "aes-4.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-5/", "folder": "AES-erstatningssag", "filename": "aes-5.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-6/", "folder": "AES-erstatningssag", "filename": "aes-6.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-7/", "folder": "AES-erstatningssag", "filename": "aes-7.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-8/", "folder": "AES-erstatningssag", "filename": "aes-8.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-9/", "folder": "AES-erstatningssag", "filename": "aes-9.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-10/", "folder": "AES-erstatningssag", "filename": "aes-10.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-1/", "folder": "digital-flytning", "filename": "flytning-1.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-2/", "folder": "digital-flytning", "filename": "flytning-2.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-3/", "folder": "digital-flytning", "filename": "flytning-3.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-4/", "folder": "digital-flytning", "filename": "flytning-4.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-5/", "folder": "digital-flytning", "filename": "flytning-5.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-1/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-1.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-2/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-2.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-3/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-3.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-4/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-4.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-5/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-5.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-6/", "folder": "strategiske-virksomhedsalliancer", "filename": "virksomhedsalliancer-6.PNG"},
    {"url": "pages/eksempler/opsummering/opsummering-1/", "folder": "opsummering", "filename": "opsummering-1.PNG"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "folder": "kvittering", "filename": "kvittering-1.PNG"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "folder": "kvittering", "filename": "kvittering-2.PNG"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-1/", "folder": "vedhaeft-fil", "filename": "fil-1.PNG"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-2/", "folder": "vedhaeft-fil", "filename": "fil-2.PNG"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-3/", "folder": "vedhaeft-fil", "filename": "fil-3.PNG"},
    {"url": "pages/eksempler/aes/oversigt/", "folder": "aes", "filename": "oversigt.PNG"},
    {"url": "pages/eksempler/aes/sagsoverblik/", "folder": "aes", "filename": "sagsoverblik.PNG"},
    {"url": "pages/eksempler/aes/sagsoverblik/afgoerelser/", "folder": "aes", "filename": "afgoerelser.PNG"},
    {"url": "pages/eksempler/opgaveliste/", "folder": "opgaveliste", "filename": "opgaveliste.PNG"}
];


(async () => {
    var resWidth = 1125; // width of screenshot
    var resHeight = 961;

    for(var t=0; t<themes.length; t++) {
        for (var i = 0; i < exampleUrls.length; i++) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            console.log(root + exampleUrls[i].url+'?theme='+themes[t]);
            await page.goto(root + exampleUrls[i].url+'?theme='+themes[t], {waitUntil: 'networkidle2'});
            await page.setViewport({width: resWidth, height: resHeight});
            await page.evaluate(() => matchMedia('screen').matches);

            await page.evaluate(() => {
                let cookieMessage = document.getElementById('cookiePrompt');
                if (cookieMessage !== null) {
                    cookieMessage.style.display = 'none';
                }
                document.getElementsByClassName('demo-footer')[0].style.display = 'none';
                window.scrollTo(0, 0);
            });

            var pdfFileName = targetRootDir + exampleUrls[i].folder + '/' + themes[t] + '-' + exampleUrls[i].filename;

            await page.screenshot({path: pdfFileName});
            await browser.close();
        }
    }
})();
