const puppeteer = require('puppeteer');

var root = 'https://designsystem.dk/';
var targetRootDir = 'pdf/';
var screenshotsDir = 'screenshots/';
var pdfUrls = [
    '',
    'kom-i-gang/',
    'kom-i-gang/implementering-kode/',
    'kom-i-gang/implementering-kode/hent-kodepakken/',
    'kom-i-gang/implementering-kode/justering/',
    'kom-i-gang/implementering-kode/hjaelpeklasser/',
    'kom-i-gang/implementering-kode/browserunderstoettelse/',
    'kom-i-gang/implementering-kode/plugins/',
    'kom-i-gang/implementering-kode/print/',
    'kom-i-gang/implementering-kode/frameworks/',
    'kom-i-gang/designressourcer/',
    'kom-i-gang/tjekliste/',
    'kom-i-gang/krav/',
    'kom-i-gang/tilgaengelighed/',
    'kom-i-gang/faq/',
    'styleguide/',
    'styleguide/farver/',
    'styleguide/typografi/',
    'styleguide/typografi/fonte/',
    'styleguide/typografi/fonte/#kode',
    'styleguide/typografi/overskrifter/',
    'styleguide/typografi/overskrifter/#kode',
    'styleguide/typografi/felt-tabel-overskrifter/',
    'styleguide/typografi/tekst/',
    'styleguide/typografi/tekst/#kode',
    'styleguide/typografi/links/',
    'styleguide/typografi/links/#kode',
    'styleguide/typografi/lister/',
    'styleguide/typografi/lister/#kode',
    'styleguide/borders/',
    'styleguide/ikoner/',
    'styleguide/ikoner/#kode',
    'styleguide/logoer/',
    'styleguide/datavisualisering-infografik/',
    'styleguide/datavisualisering-infografik/tilgaengelig-grafik/',
    'styleguide/datavisualisering-infografik/datavisualisering/',
    'styleguide/datavisualisering-infografik/infografik/',
    'styleguide/layout/',
    'styleguide/grid/',
    'styleguide/grid/#kode',
    'komponenter/',
    'komponenter/accordions/',
    'komponenter/accordions/#kode',
    'komponenter/anchorlinks/',
    'komponenter/anchorlinks/#kode',
    'komponenter/badges/',
    'komponenter/badges/#kode',
    'komponenter/beskeder/',
    'komponenter/beskeder/#kode',
    'komponenter/broedkrumme/',
    'komponenter/broedkrumme/#kode',
    'komponenter/cards/',
    'komponenter/cards/#kode',
    'komponenter/cookiemeddelelse/',
    'komponenter/cookiemeddelelse/#kode',
    'komponenter/datofelter/',
    'komponenter/datofelter/#kode',
    'komponenter/datovaelger/',
    'komponenter/datovaelger/#kode',
    'komponenter/detaljer/',
    'komponenter/detaljer/#kode',
    'komponenter/dropdown/',
    'komponenter/dropdown/#kode',
    'komponenter/faneblade/',
    'komponenter/faneblade/#kode',
    'komponenter/fejlmeddelelser/',
    'komponenter/fejlmeddelelser/#kode',
    'komponenter/fejlopsummering/',
    'komponenter/fejlopsummering/#kode',
    'komponenter/footer/',
    'komponenter/footer/#kode',
    'komponenter/funktionslink/',
    'komponenter/funktionslink/#kode',
    'komponenter/skip-link/',
    'komponenter/skip-link/#kode',
    'komponenter/header/',
    'komponenter/header/#kode',
    'komponenter/inputfelter/',
    'komponenter/inputfelter/#kode',
    'komponenter/knapper/',
    'komponenter/knapper/#kode',
    'komponenter/spinner/',
    'komponenter/spinner/#kode',
    'komponenter/modal/',
    'komponenter/modal/#kode',
    'komponenter/overflowmenu/',
    'komponenter/overflowmenu/#kode',
    'komponenter/paginering/',
    'komponenter/paginering/#kode',
    'komponenter/radioknap/',
    'komponenter/radioknap/#kode',
    'komponenter/sprogvaelger/',
    'komponenter/sprogvaelger/#kode',
    'komponenter/search/',
    'komponenter/search/#kode',
    'komponenter/tables/',
    'komponenter/tables/#kode',
    'komponenter/tags/',
    'komponenter/tags/#kode',
    'komponenter/tekstomraade/',
    'komponenter/tekstomraade/#kode',
    'komponenter/tilbage-link/',
    'komponenter/tilbage-link/#kode',
    'komponenter/tilbage-til-top/',
    'komponenter/tilbage-til-top/#kode',
    'komponenter/tjekboks/',
    'komponenter/tjekboks/#kode',
    'komponenter/toastbesked/',
    'komponenter/toastbesked/#kode',
    'komponenter/toggle/',
    'komponenter/toggle/#kode',
    'komponenter/tooltip/',
    'komponenter/tooltip/#kode',
    'komponenter/trinindikator/',
    'komponenter/trinindikator/#kode',
    'komponenter/fil-upload/',
    'komponenter/fil-upload/#kode',
    'komponenter/venstremenu/',
    'komponenter/venstremenu/#kode',
    'eksempler/',
    'eksempler/selvbetjeningsloesninger/',
    'eksempler/patterns/',
    'eksempler/patterns/angivelse-af-telefonnummer/',
    'eksempler/patterns/formular/',
    'eksempler/patterns/hentet-data/',
    'eksempler/patterns/session-udloeber/',
    'eksempler/templates/',
    'krav-vaerktoej/anvendes-af-virksomheder/',
    'faellesskab/',
    'faellesskab/samarbejdsforum/',
    'faellesskab/governance/',
    'faellesskab/nyhedsmail/',
    'faellesskab/nyhedsmail/afmeld/',
    'faellesskab/kontakt-support/',
    'faellesskab/roadmap/',
    'faellesskab/releases/',
    'privatlivspolitik-cookies/'
];

var exampleUrls = [
    { 'url': 'pages/eksempler/formular-til-kontaktoplysninger/formular-1/', 'filename': 'formular-1' },
    {'url': 'pages/eksempler/formular-til-kontaktoplysninger/formular-2/', 'filename': 'formular-2'},
    {'url': 'pages/eksempler/formular-til-kontaktoplysninger/formular-3/', 'filename': 'formular-3'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-1/', 'filename': 'registrering-1'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-2/', 'filename': 'registrering-2'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-3/', 'filename': 'registrering-3'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-4/', 'filename': 'registrering-4'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-5/', 'filename': 'registrering-5'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-6/', 'filename': 'registrering-6'},
    {'url': 'pages/eksempler/trinformular-til-registrering/registrering-7/', 'filename': 'registrering-7'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-1/', 'filename': 'ansoegning-1'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-2/', 'filename': 'ansoegning-2'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-3/', 'filename': 'ansoegning-3'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-4/', 'filename': 'ansoegning-4'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-5/', 'filename': 'ansoegning-5'},
    {'url': 'pages/eksempler/trinformular-til-ansoegning/ansoegning-6/', 'filename': 'ansoegning-6'},
    {'url': 'pages/eksempler/sagsoversigt/find-sag/', 'filename': 'find-sag'},
    {'url': 'pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/', 'filename': 'sagsnr-123456789'},
    {'url': 'pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/', 'filename': 'afgoerelser'},
    {'url': 'pages/eksempler/dashboard/dashboard-1/', 'filename': 'dashboard-1'},
    {'url': 'pages/eksempler/opgaveliste/', 'filename': 'opgaveliste'},
    {'url': 'pages/eksempler/vedhaeft-fil/fil-1/', 'filename': 'fil-1'},
    {'url': 'pages/eksempler/vedhaeft-fil/fil-2/', 'filename': 'fil-2'},
    {'url': 'pages/eksempler/vedhaeft-fil/fil-3/', 'filename': 'fil-3'},
    {'url': 'pages/eksempler/opsummering/opsummering-1/', 'filename': 'opsummering-1'},
    {'url': 'pages/eksempler/opsummering/opsummering-2/', 'filename': 'opsummering-2'},
    {'url': 'pages/eksempler/kvittering/kvittering-1/', 'filename': 'kvittering-1'},
    {'url': 'pages/eksempler/kvittering/kvittering-2/', 'filename': 'kvittering-2'},
    {'url': 'pages/eksempler/formular-med-fejl/formular-med-fejl-1/', 'filename': 'formular-med-fejl-1'},
    {'url': 'pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/', 'filename': 'trinindikator-med-fejl-1'},
    {'url': 'pages/eksempler/siden-kunne-ikke-findes-1/', 'filename': 'siden-kunne-ikke-findes-1'},
    {'url': 'pages/eksempler/siden-kunne-ikke-findes-2/', 'filename': 'siden-kunne-ikke-findes-2'}
];

(async () => {
    console.log('[' + String(new Date().getHours()).padStart(2, '0') +
        ':' + String(new Date().getMinutes()).padStart(2, '0') +
        ':' + String(new Date().getSeconds()).padStart(2, '0') + '] ' +
        'Starting...');

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // Ensure that 'leave' dialogs don't block when you change page with page.goto()
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    var pdfFiles = [];
    var resWidth = 1366; // width of screenshot
    var resHeight = 1000;

    console.log('[' + String(new Date().getHours()).padStart(2, '0') +
        ':' + String(new Date().getMinutes()).padStart(2, '0') +
        ':' + String(new Date().getSeconds()).padStart(2, '0') + '] ' +
        'Creating pdfs...');

    for (var i = 0; i < pdfUrls.length; i++) {
        await page.goto(root + pdfUrls[i], { waitUntil: 'load' });
        await page.setViewport({ width: resWidth, height: resHeight });
        await page.evaluate(() => matchMedia('screen').matches);

        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute('aria-hidden', false);
            }

            buttons = document.querySelectorAll('.code-sample .accordion-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute('aria-hidden', true);
            }

            let cookieMessage = document.getElementById('cookiePrompt');
            if (cookieMessage !== null) {
                cookieMessage.parentNode.style.display = 'none';
            }
        });

        if (pdfUrls[i] != '') {
            var filename = pdfUrls[i].replace(/\//g, '-').replace(/#/g, '');
            filename = filename.substring(0, filename.length - 1);
        } 
        else {
            filename = 'frontpage';
        }
        var pdfFileName = targetRootDir + (i + 1) + '-' + filename + '.pdf';

        pdfFiles.push(pdfFileName);
        await page.pdf({ path: pdfFileName, format: 'A3', printBackground: true });
    }

    console.log('[' + String(new Date().getHours()).padStart(2, '0') +
        ':' + String(new Date().getMinutes()).padStart(2, '0') +
        ':' + String(new Date().getSeconds()).padStart(2, '0') + '] ' +
        'Creating example page images...');

    for (var i = 0; i < exampleUrls.length; i++) {
        await page.goto(root + exampleUrls[i].url, { waitUntil: 'load' });
        await page.setViewport({ width: resWidth, height: resHeight });
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

        var pngFileName = targetRootDir + screenshotsDir + 'example_' + (i + 1) + '-' + exampleUrls[i].filename + '.png';

        await page.screenshot({ path: pngFileName, fullPage: true });
    }

    console.log('[' + String(new Date().getHours()).padStart(2, '0') +
        ':' + String(new Date().getMinutes()).padStart(2, '0') +
        ':' + String(new Date().getSeconds()).padStart(2, '0') + '] ' +
        'Creating page images...');

    for (var i = 0; i < pdfUrls.length; i++) {
        await page.goto(root + pdfUrls[i], { waitUntil: 'load' });
        await page.setViewport({ width: resWidth, height: resHeight });
        await page.evaluate(() => matchMedia('screen').matches);
        await page.evaluate(() => {
            var buttons = document.querySelectorAll('.accordion-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('aria-expanded', true);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute('aria-hidden', false);
            }

            var buttons = document.querySelectorAll('.code-sample .accordion-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('aria-expanded', false);
                document.getElementById(buttons[i].getAttribute('aria-controls')).setAttribute('aria-hidden', true);
            }

            let cookieMessage = document.getElementById('cookiePrompt');
            if (cookieMessage !== null) {
                cookieMessage.parentNode.style.display = 'none';
            }
        });

        var filename = pdfUrls[i];
        if (pdfUrls[i] != '') {
            filename = filename.replace(/\//g, '-').replace(/#/g, '');
            filename = filename.substring(0, filename.length - 1);
        } else {
            filename = 'frontpage';
        }
        var pngFileName = targetRootDir + screenshotsDir + (i + 1) + '-' + filename + '.png';

        await page.screenshot({ path: pngFileName, fullPage: true });
    }

    await browser.close();

    console.log('[' + String(new Date().getHours()).padStart(2, '0') +
        ':' + String(new Date().getMinutes()).padStart(2, '0') +
        ':' + String(new Date().getSeconds()).padStart(2, '0') + '] ' +
        'Done');
})();
