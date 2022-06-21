const puppeteer = require('puppeteer');

var path = 'pdf/';
var root = "https://designsystem.dk/";
var targetRootDir = "pdf/";
var pdfUrls = ["",
    "design/",
    "design/farver/",
    "design/typografi/",
    "design/typografi/fonte/",
    "design/typografi/overskrifter/",
    "design/typografi/felt-tabel-overskrifter/",
    "design/typografi/tekst/",
    "design/typografi/links/",
    "design/typografi/lister/",
    "design/borders/",
    "design/ikoner/",
    "design/logoer/",
    "design/datavisualisering-infografik/",
    "design/datavisualisering-infografik/tilgaengelig-grafik/",
    "design/datavisualisering-infografik/datavisualisering/",
    "design/datavisualisering-infografik/infografik/",
    "design/layout/",
    "design/layout/grid/",
    "design/designressourcer/",
    "design/designtjek/",
    "design/tilgaengelighed/",
    "komponenter/",
    "komponenter/accordions/",
    "komponenter/badges/",
    "komponenter/beskeder/",
    "komponenter/broedkrumme/",
    "komponenter/cards/",
    "komponenter/cookiemeddelelse/",
    "komponenter/dato-felt/",
    "komponenter/datovaelger/",
    "komponenter/detaljer/",
    "komponenter/drop-down/",
    "komponenter/faneblad/",
    "komponenter/fejlmeddelelser/",
    "komponenter/fejlopsummering/",
    "komponenter/felter/",
    "komponenter/footers/",
    "komponenter/formular/",
    "komponenter/funktionslink/",
    "komponenter/header/",
    "komponenter/knapper/",
    "komponenter/modal/",
    "komponenter/notifikation/",
    "komponenter/overflowmenu/",
    "komponenter/paginering",
    "komponenter/radioknap/",
    "komponenter/sidenav/",
    "komponenter/skip-link/",
    "komponenter/spinner/",
    "komponenter/sprogvaegler/",
    "komponenter/strukturerede-lister/",
    "komponenter/search/",
    "komponenter/tilbage-link/",
    "komponenter/tables/",
    "komponenter/tags/",
    "komponenter/tekstfelter/",
    "komponenter/textarea/",
    "komponenter/tjekboks/",
    "komponenter/toggle/",
    "komponenter/tooltip/",
    "komponenter/trinindikatorer/",
    "komponenter/fil-upload/",
    "kode/",
    "kode/implementering/",
    "kode/browserunderstoettelse/",
    "kode/komponenter/",
    "kode/komponenter/accordions/",
    "kode/komponenter/badges/",
    "kode/komponenter/beskeder/",
    "kode/komponenter/broedkrumme/",
    "kode/komponenter/cards/",
    "kode/komponenter/cookiemeddelelse/",
    "kode/komponenter/dato-felt/",
    "kode/komponenter/datovaelger/",
    "kode/komponenter/detaljer/",
    "kode/komponenter/drop-down/",
    "kode/komponenter/faneblad/",
    "kode/komponenter/fejlmeddelelser/",
    "kode/komponenter/fejlopsummering/",
    "kode/komponenter/felter/",
    "kode/komponenter/footers/",
    "kode/komponenter/funktionslink/",
    "kode/komponenter/headers/",
    "kode/komponenter/knapper/",
    "kode/komponenter/modal/",
    "kode/komponenter/notifikation/",
    "kode/komponenter/overflowmenu/",
    "kode/komponenter/paginering",
    "kode/komponenter/radioknap/",
    "kode/komponenter/sidenav/",
    "kode/komponenter/skip-link/",
    "kode/komponenter/spinner/",
    "kode/komponenter/sprogvaegler/",
    "kode/komponenter/strukturerede-lister/",
    "kode/komponenter/search/",
    "kode/komponenter/tilbage-link/",
    "kode/komponenter/tables/",
    "kode/komponenter/tags/",
    "kode/komponenter/textarea/",
    "kode/komponenter/tjekboks/",
    "kode/komponenter/toggle/",
    "kode/komponenter/tooltip/",
    "kode/komponenter/trinindikatorer/",
    "kode/komponenter/fil-upload/",
    "kode/grid/",
    "kode/typografi/",
    "kode/typografi/overskrifter/",
    "kode/typografi/tekst/",
    "kode/typografi/links/",
    "kode/typografi/lister/",
    "kode/ikoner/",
    "kode/utilities/",
    "kode/eksempler-implementering/",
    "kode/print/",
    "kode/plugins/",
    "kode/anbefalinger-vaerktoejer/",
    "krav/",
    "krav/borgerdk-virk/",
    "krav/om-kravene/",
    "krav/designtjek/",
    "krav/tilgaengelighed/",
    "faellesskab/",
    "faellesskab/samarbejdsforum/",
    "faellesskab/nyhedsmail/",
    "faellesskab/kontakt-support/",
    "privatlivspolitik-cookies/",
    "faellesskab/releases/",
    "faellesskab/roadmap/",
    "eksempler/patterns/angivelse-af-telefonnummer/",
    "eksempler/patterns/forlad-siden/",
    "eksempler/patterns/session-udloeber/"
]

var exampleUrls = [
    {"url": "pages/eksempler/opsummering/opsummering-1/", "filename": "opsummering1"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "filename": "kvittering1"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "filename": "kvittering2"}
];

(async () => {
    console.log("Starting...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Ensure that 'leave' dialogs don't block when you change page with page.goto()
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    var pdfFiles=[];
    var resWidth = 1366; // width of screenshot
    var resHeight = 1000;

    console.log("...creating pdfs...");
    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'load', timeout: 0});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.evaluate(() => matchMedia('screen').matches);
        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", false);
            }

            var buttons = document.querySelectorAll('.code-sample .accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", true);
            }

            let cookieMessage = document.getElementById('cookiePrompt');
            if (cookieMessage !== null) {
                cookieMessage.parentNode.style.display = 'none';
            }
        });

        if(pdfUrls[i] != "") {
            var filename = pdfUrls[i].replace(/\//g, '-');
            filename = filename.substring(0, filename.length - 1);
        } else{
            filename = "frontpage";
        }
        var pdfFileName = targetRootDir+(i+1)+'-'+filename+'.pdf';

        pdfFiles.push(pdfFileName);
        await page.pdf({path: pdfFileName, format: "A3", printBackground: true, fullPage: true});
    }

    console.log("...creating example page images...");
    for(var i=0; i<exampleUrls.length; i++){
        await page.goto(root + exampleUrls[i].url, {waitUntil: 'load', timeout: 0});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.evaluate(() => matchMedia('screen').matches);

        await page.evaluate(() => {
            // Remove cookie message
            let cookieMessage = document.getElementById('cookiePrompt');
            if (cookieMessage !== null) {
                cookieMessage.parentNode.style.display = 'none';
            }
            // Scroll down to bottom to avoid the example footer blocking content.
            // '5000' can be increased if the bottom wasn't reached.
            window.scrollBy(0, 5000);
        });

        var pdfFileName =  targetRootDir+'screenshots/'+'example_'+(i+1)+'-'+exampleUrls[i].filename+'.png';

        await page.screenshot({path: pdfFileName, fullPage: true});
    }

    console.log("...creating page images...");
    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'load', timeout: 0});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.evaluate(() => matchMedia('screen').matches);
        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", false);
            }

            var buttons = document.querySelectorAll('.code-sample .accordion-button');
            for(var i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute("aria-hidden", true);
            }

            let cookieMessage = document.getElementById('cookiePrompt');
            if (cookieMessage !== null) {
                cookieMessage.parentNode.style.display = 'none';
            }
        });

        var filename = pdfUrls[i];
        if(pdfUrls[i] != "") {
            filename = filename.replace(/\//g, '-');
            filename = filename.substring(0, filename.length - 1);
        } else{
            filename = "frontpage";
        }
        var pdfFileName =  targetRootDir+'screenshots/'+(i+1)+'-'+filename+'.png';

        await page.screenshot({path: pdfFileName, fullPage: true});
    }

    await browser.close();
    console.log("Done");
})();
