const puppeteer = require('puppeteer');

//var root = "http://127.0.0.1:4000/";
var root = "https://develop.designsystem.dk/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-1/", "folder": "Selvbetjeningsloesninger", "filename": "formular-1" },
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-2/", "folder": "Selvbetjeningsloesninger", "filename": "formular-2" },
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-3/", "folder": "Selvbetjeningsloesninger", "filename": "formular-3" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-1/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-1" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-2/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-2" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-3/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-3" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-4/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-4" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-5/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-5" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-6/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-6" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-7/", "folder": "Selvbetjeningsloesninger", "filename": "registrering-7" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-1/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-1" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-2/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-2" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-3/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-3" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-4/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-4" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-5/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-5" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-6/", "folder": "Selvbetjeningsloesninger", "filename": "ansoegning-6" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/", "folder": "Selvbetjeningsloesninger", "filename": "find-sag" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/", "folder": "Selvbetjeningsloesninger", "filename": "sagsnr-123456789" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/", "folder": "Selvbetjeningsloesninger", "filename": "afgoerelser" },
    { "url": "pages/eksempler/dashboard/dashboard-1/", "folder": "Templates", "filename": "dashboard-1" },
    { "url": "pages/eksempler/opgaveliste/", "folder": "Templates", "filename": "opgaveliste" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-1/", "folder": "Templates", "filename": "fil-1" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-2/", "folder": "Templates", "filename": "fil-2" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-3/", "folder": "Templates", "filename": "fil-3" },
    { "url": "pages/eksempler/opsummering/opsummering-1/", "folder": "Templates", "filename": "opsummering-1" },
    { "url": "pages/eksempler/opsummering/opsummering-2/", "folder": "Templates", "filename": "opsummering-2" },
    { "url": "pages/eksempler/kvittering/kvittering-1/", "folder": "Templates", "filename": "kvittering-1" },
    { "url": "pages/eksempler/kvittering/kvittering-2/", "folder": "Templates", "filename": "kvittering-2" },
    { "url": "pages/eksempler/formular-med-fejl/formular-med-fejl-1/", "folder": "Templates", "filename": "formular-med-fejl-1" },
    { "url": "pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/", "folder": "Templates", "filename": "trinindikator-med-fejl-1" },
    { "url": "pages/eksempler/siden-kunne-ikke-findes-1/", "folder": "Templates", "filename": "siden-kunne-ikke-findes-1" },
    { "url": "pages/eksempler/siden-kunne-ikke-findes-2/", "folder": "Templates", "filename": "siden-kunne-ikke-findes-2" }
];


(async () => {
    var resWidth = 1125; // width of screenshot
    var resHeight = 745;

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // Ensure that 'leave' dialogs don't block when you change page with page.goto()
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    for (var t = 0; t < themes.length; t++) {
        for (var i = 0; i < exampleUrls.length; i++) {
            console.log(root + exampleUrls[i].url + '?theme=' + themes[t]);
            
            await page.goto(root + exampleUrls[i].url + '?theme=' + themes[t], { waitUntil: 'load' });
            await page.setViewport({ width: resWidth, height: resHeight });
            await page.evaluate(() => matchMedia('screen').matches);

            await page.evaluate(() => {
                let cookieMessage = document.getElementById('cookiePrompt');
                if (cookieMessage !== null) {
                    cookieMessage.style.display = 'none';
                }
                document.getElementsByClassName('demo-footer')[0].style.display = 'none';
                window.scrollTo(0, 0);
            });

            var pngFileName = `img/cards/${exampleUrls[i].folder}/card-${exampleUrls[i].filename}-${themes[t]}.PNG`;
            
            await page.screenshot({ path: pngFileName });
        }
    }

    await browser.close();
})();
