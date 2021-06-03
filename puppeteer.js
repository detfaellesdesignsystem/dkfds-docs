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
    "design/ikoner/ikoner-og-deres-betydning/",
    "design/logoer/",
    "design/layout/",
    "design/layout/grid/",
    "design/designressourcer/",
    "komponenter/",
    "komponenter/accordions/",
    "komponenter/badges/",
    "komponenter/beskeder/",
    "komponenter/broedkrumme/",
    "komponenter/cards/",
    "komponenter/cookiemeddelelse/",
    "komponenter/dato-felt/",
    "komponenter/detaljer/",
    "komponenter/drop-down/",
    "komponenter/faneblad/",
    "komponenter/fejlmeddelelser/",
    "komponenter/fejlopsummering/",
    "komponenter/felter/",
    "komponenter/fil-upload/",
    "komponenter/footers/",
    "komponenter/formular/",
    "komponenter/funktionslink/",
    "komponenter/headers/",
    "komponenter/knapper/",
    "komponenter/modal/",
    "komponenter/notifikation/",
    "komponenter/overflowmenu/",
    "komponenter/radioknap/",
    "komponenter/sidenav/",
    "komponenter/sprogvaegler//",
    "komponenter/skip-link/",
    "komponenter/spinner/",
    "komponenter/search/",
    "komponenter/tilbage-link/",
    "komponenter/tables/",
    "komponenter/tags/",
    "komponenter/textarea/",
    "komponenter/tjekboks/",
    "komponenter/toggle/",
    "komponenter/tooltip/",
    "komponenter/trinindikatorer/",
    "kode/",
    "kode/implementering/",
    "kode/komponenter/",
    "kode/komponenter/accordions/",
    "kode/komponenter/badges/",
    "kode/komponenter/beskeder/",
    "kode/komponenter/broedkrumme/",
    "kode/komponenter/cards/",
    "kode/komponenter/cookiemeddelelse/",
    "kode/komponenter/dato-felt/",
    "kode/komponenter/detaljer/",
    "kode/komponenter/drop-down/",
    "kode/komponenter/faneblad/",
    "kode/komponenter/fejlmeddelelser/",
    "kode/komponenter/fejlopsummering/",
    "kode/komponenter/felter/",
    "kode/komponenter/fil-upload/",
    "kode/komponenter/footers/",
    "kode/komponenter/formular/",
    "kode/komponenter/funktionslink/",
    "kode/komponenter/headers/",
    "kode/komponenter/knapper/",
    "kode/komponenter/modal/",
    "kode/komponenter/notifikation/",
    "kode/komponenter/overflowmenu/",
    "kode/komponenter/radioknap/",
    "kode/komponenter/sidenav/",
    "kode/komponenter/sprogvaegler/",
    "kode/komponenter/skip-link/",
    "kode/komponenter/spinner/",
    "kode/komponenter/search/",
    "kode/komponenter/tilbage-link/",
    "kode/komponenter/tables/",
    "kode/komponenter/tags/",
    "kode/komponenter/textarea/",
    "kode/komponenter/tjekboks/",
    "kode/komponenter/toggle/",
    "kode/komponenter/tooltip/",
    "kode/komponenter/trinindikatorer/",
    "kode/grid/",
    "kode/typografi/",
    "kode/typografi/overskrifter/",
    "kode/typografi/tekst/",
    "kode/typografi/links/",
    "kode/typografi/lister/",
    "kode/ikoner/",
    "kode/ikoner/ikoner-og-deres-betydning/",
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
    "faellesskab/privatlivspolitik-cookies/",
    "faellesskab/releases/",
    "faellesskab/roadmap/"
];

var exampleUrls = [
    {"url": "pages/eksempler/opsummering/opsummering-1/", "filename": "opsummering1"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "filename": "kvittering1"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "filename": "kvittering2"}
];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    var pdfFiles=[];
    var resWidth = 1366; // width of screenshot
    var resHeight = 1000;

    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'load'});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen')
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

    for(var i=0; i<exampleUrls.length; i++){
        await page.goto(root + exampleUrls[i].url, {waitUntil: 'load', timeout: 0});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');

        var pdfFileName =  targetRootDir+'screenshots/'+(i+1)+'-'+exampleUrls[i].filename+'.png';

        await page.screenshot({path: pdfFileName, fullPage: true});
    }

    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'load', timeout: 0});
        await page.setViewport({width: resWidth, height: resHeight});
        await page.emulateMedia('screen');
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

})();
