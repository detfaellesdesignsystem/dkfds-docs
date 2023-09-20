const puppeteer = require('puppeteer');

var path = 'pdf/';
var root = "https://designsystem.dk/";
var targetRootDir = "pdf/";
var pdfUrls = [
    "",
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
    "komponenter/",
    "komponenter/accordions/",
    "komponenter/anchorlinks",
    "komponenter/badges/",
    "komponenter/beskeder/",
    "komponenter/broedkrumme/",
    "komponenter/cards/",
    "komponenter/cookiemeddelelse/",
    "komponenter/datofelter/",
    "komponenter/datovaelger/",
    "komponenter/detaljer/",
    "komponenter/dropdown/",
    "komponenter/faneblade/",
    "komponenter/fejlmeddelelser/",
    "komponenter/fejlopsummering/",
    "komponenter/footer/",
    "komponenter/funktionslink/",
    "komponenter/skip-link/",
    "komponenter/header/",
    "komponenter/inputfelter/",
    "komponenter/knapper/",
    "komponenter/spinner/",
    "komponenter/modal/",
    "komponenter/overflowmenu/",
    "komponenter/paginering",
    "komponenter/radioknap/",
    "komponenter/sprogvaelger/",
    "komponenter/search/",
    "komponenter/tables/",
    "komponenter/tags/",
    "komponenter/tekstomraade/",
    "komponenter/tilbage-link/",
    "komponenter/tilbage-til-top/",
    "komponenter/tjekboks/",
    "komponenter/toastbesked/",
    "komponenter/toggle/",
    "komponenter/tooltip/",
    "komponenter/trinindikator/",
    "komponenter/fil-upload/",
    "komponenter/venstremenu/",
    "eksempler/",
    "eksempler/selvbetjeningsloesninger/",
    "eksempler/patterns/",
    "eksempler/patterns/angivelse-af-telefonnummer/",
    "eksempler/patterns/formular/",
    "eksempler/patterns/hentet-data/",
    "eksempler/patterns/session-udloeber/",
    "eksempler/templates/",
    "kode/",
    "kode/implementering/",
    "kode/komponenter/",
    "kode/komponenter/accordions/",
    "kode/komponenter/anchorlinks/",
    "kode/komponenter/badges/",
    "kode/komponenter/beskeder/",
    "kode/komponenter/broedkrumme/",
    "kode/komponenter/cards/",
    "kode/komponenter/cookiemeddelelse/",
    "kode/komponenter/datofelter/",
    "kode/komponenter/datovaelger/",
    "kode/komponenter/detaljer/",
    "kode/komponenter/dropdown/",
    "kode/komponenter/faneblade/",
    "kode/komponenter/fejlmeddelelser/",
    "kode/komponenter/fejlopsummering/",
    "kode/komponenter/footer/",
    "kode/komponenter/funktionslink/",
    "kode/komponenter/skip-link/",
    "kode/komponenter/header/",
    "kode/komponenter/inputfelter/",
    "kode/komponenter/knapper/",
    "kode/komponenter/spinner/",
    "kode/komponenter/modal/",
    "kode/komponenter/overflowmenu/",
    "kode/komponenter/paginering",
    "kode/komponenter/radioknap/",
    "kode/komponenter/sprogvaelger/",
    "kode/komponenter/search/",
    "kode/komponenter/tables/",
    "kode/komponenter/tags/",
    "kode/komponenter/tekstomraade/",
    "kode/komponenter/tilbage-link/",
    "kode/komponenter/tilbage-til-top/",
    "kode/komponenter/tjekboks/",
    "kode/komponenter/toastbesked/",
    "kode/komponenter/toggle/",
    "kode/komponenter/tooltip/",
    "kode/komponenter/trinindikator/",
    "kode/komponenter/fil-upload/",
    "kode/komponenter/venstremenu/",
    "kode/browserunderstoettelse/",
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
    "krav/",
    "krav-vaerktoej/anvendes-af-virksomheder/",
    "krav/borgerdk-virk/",
    "krav/om-kravene/",
    "krav/tilgaengelighed/",
    "faellesskab/",
    "faellesskab/samarbejdsforum/",
    "faellesskab/governance/",
    "faellesskab/nyhedsmail/",
    "faellesskab/nyhedsmail/afmeld/",
    "faellesskab/kontakt-support/",
    "faellesskab/roadmap/",
    "faellesskab/releases/",
    "privatlivspolitik-cookies/"
]

var exampleUrls = [
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-1/", "filename": "formular-1"},
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-2/", "filename": "formular-2"},
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-3/", "filename": "formular-3"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-1/", "filename": "registrering-1"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-2/", "filename": "registrering-2"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-3/", "filename": "registrering-3"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-4/", "filename": "registrering-4"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-5/", "filename": "registrering-5"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-6/", "filename": "registrering-6"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-7/", "filename": "registrering-7"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-1/", "filename": "ansoegning-1"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-2/", "filename": "ansoegning-2"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-3/", "filename": "ansoegning-3"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-4/", "filename": "ansoegning-4"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-5/", "filename": "ansoegning-5"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-6/", "filename": "ansoegning-6"},
    {"url": "pages/eksempler/sagsoversigt/find-sag/", "filename": "find-sag"},
    {"url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/", "filename": "sagsnr-123456789"},
    {"url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/", "filename": "afgoerelser"},
    {"url": "pages/eksempler/dashboard/dashboard-1/", "filename": "dashboard-1"},
    {"url": "pages/eksempler/opgaveliste/", "filename": "opgaveliste"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-1/", "filename": "fil-1"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-2/", "filename": "fil-2"},
    {"url": "pages/eksempler/vedhaeft-fil/fil-3/", "filename": "fil-3"},
    {"url": "pages/eksempler/opsummering/opsummering-1/", "filename": "opsummering-1"},
    {"url": "pages/eksempler/opsummering/opsummering-2/", "filename": "opsummering-2"},
    {"url": "pages/eksempler/kvittering/kvittering-1/", "filename": "kvittering-1"},
    {"url": "pages/eksempler/kvittering/kvittering-2/", "filename": "kvittering-2"},
    {"url": "pages/eksempler/formular-med-fejl/formular-med-fejl-1/", "filename": "formular-med-fejl-1"},
    {"url": "pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/", "filename": "trinindikator-med-fejl-1"}
];

(async () => {
    console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Starting...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Ensure that 'leave' dialogs don't block when you change page with page.goto()
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    var pdfFiles=[];
    var resWidth = 1366; // width of screenshot
    var resHeight = 1000;

    console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Creating pdfs...");
    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'networkidle0', timeout: 0});
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
        await page.pdf({path: pdfFileName, format: "A3", printBackground: true});
    }

    console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Creating example page images...");
    for(var i=0; i<exampleUrls.length; i++){
        await page.goto(root + exampleUrls[i].url, {waitUntil: 'networkidle0', timeout: 0});
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

    console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Creating page images...");
    for(var i=0; i<pdfUrls.length; i++){
        await page.goto(root + pdfUrls[i], {waitUntil: 'networkidle0', timeout: 0});
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
    console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Done");
})();
