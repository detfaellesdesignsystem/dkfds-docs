const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000/dkfds-docs/";
var targetRootDir = "img/examples_pages/";

var exampleUrls = [
    {"url": "pages/eksempler/aktindsigt/aktindsigt-1/", "folder": "aktindsigt", "filename": "aktindsigt-1.PNG"},
    {"url": "pages/eksempler/aktindsigt/aktindsigt-2/", "folder": "aktindsigt", "filename": "aktindsigt-2.PNG"},
    {"url": "pages/eksempler/aktindsigt/aktindsigt-3/", "folder": "aktindsigt", "filename": "aktindsigt-3.PNG"},
    {"url": "pages/eksempler/aktindsigt/aktindsigt-4/", "folder": "aktindsigt", "filename": "aktindsigt-4.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-oversigt-2/", "folder": "boernetilskud", "filename": "boernetilskud-oversigt-2.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-oversigt/", "folder": "boernetilskud", "filename": "boernetilskud-oversigt.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-1/", "folder": "boernetilskud", "filename": "boernetilskud-1.PNG"},
    {"url": "pages/eksempler/boernetilskud/boernetilskud-2/", "folder": "boernetilskud", "filename": "boernetilskud-2.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-1/", "folder": "aes", "filename": "aes1.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-2/", "folder": "aes", "filename": "aes2.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-3/", "folder": "aes", "filename": "aes3.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-4/", "folder": "aes", "filename": "aes4.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-5/", "folder": "aes", "filename": "aes5.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-6/", "folder": "aes", "filename": "aes6.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-7/", "folder": "aes", "filename": "aes7.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-8/", "folder": "aes", "filename": "aes8.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-9/", "folder": "aes", "filename": "aes9.PNG"},
    {"url": "pages/eksempler/AES-erstatningssag/aes-10/", "folder": "aes", "filename": "aes10.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-1/", "folder": "digital-flytning", "filename": "flytning-1.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-2/", "folder": "digital-flytning", "filename": "flytning-2.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-3/", "folder": "digital-flytning", "filename": "flytning-3.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-4/", "folder": "digital-flytning", "filename": "flytning-4.PNG"},
    {"url": "pages/eksempler/digital-flytning/flytning-5/", "folder": "digital-flytning", "filename": "flytning-5.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-1/", "folder": "strategiske-virksomhedsalliancer", "filename": "strategiske-virksomhedsalliancer1.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-2/", "folder": "strategiske-virksomhedsalliancer", "filename": "strategiske-virksomhedsalliancer2.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-3/", "folder": "strategiske-virksomhedsalliancer", "filename": "strategiske-virksomhedsalliancer3.PNG"},
    {"url": "pages/eksempler/strategiske-virksomhedsalliancer/virksomhedsalliancer-4/", "folder": "strategiske-virksomhedsalliancer", "filename": "strategiske-virksomhedsalliancer4.PNG"},
    {"url": "pages/eksempler/opsummering/opsummering-1/", "folder": "opsummering", "filename": "opsummeringsside.PNG"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "folder": "kvittering", "filename": "kvittering1.PNG"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "folder": "kvittering", "filename": "kvittering2.PNG"}
];


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    var resWidth = 1125; // width of screenshot
    var resHeight = 961;

    for(var i=0; i<exampleUrls.length; i++){
        await page.goto(root + exampleUrls[i].url, {waitUntil: 'networkidle2'});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');

        await page.evaluate(() => {
            document.getElementsByClassName('demo-footer')[0].style.display = 'none';
        });

        var pdfFileName =  targetRootDir+exampleUrls[i].folder+'/'+exampleUrls[i].filename;

        await page.screenshot({path: pdfFileName});
    }

    await browser.close();
})();