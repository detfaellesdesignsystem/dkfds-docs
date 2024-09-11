const puppeteer = require('puppeteer');

//var root = "http://127.0.0.1:4000/";
var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples_pages/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-1/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-1" },
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-2/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-2" },
    { "url": "pages/eksempler/formular-til-kontaktoplysninger/formular-3/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-3" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-1/", "folder": "trinformular-til-registrering", "filename": "registrering-1" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-2/", "folder": "trinformular-til-registrering", "filename": "registrering-2" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-3/", "folder": "trinformular-til-registrering", "filename": "registrering-3" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-4/", "folder": "trinformular-til-registrering", "filename": "registrering-4" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-5/", "folder": "trinformular-til-registrering", "filename": "registrering-5" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-6/", "folder": "trinformular-til-registrering", "filename": "registrering-6" },
    { "url": "pages/eksempler/trinformular-til-registrering/registrering-7/", "folder": "trinformular-til-registrering", "filename": "registrering-7" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-1/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-1" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-2/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-2" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-3/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-3" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-4/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-4" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-5/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-5" },
    { "url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-6/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-6" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/", "folder": "sagsoversigt", "filename": "find-sag" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/", "folder": "sagsoversigt", "filename": "sagsnr-123456789" },
    { "url": "pages/eksempler/sagsoversigt/find-sag/sagsnr-123456789/afgoerelser/", "folder": "sagsoversigt", "filename": "afgoerelser" },
    { "url": "pages/eksempler/dashboard/dashboard-1/", "folder": "dashboard", "filename": "dashboard-1" },
    { "url": "pages/eksempler/opgaveliste/", "folder": "opgaveliste", "filename": "opgaveliste" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-1/", "folder": "vedhaeft-fil", "filename": "fil-1" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-2/", "folder": "vedhaeft-fil", "filename": "fil-2" },
    { "url": "pages/eksempler/vedhaeft-fil/fil-3/", "folder": "vedhaeft-fil", "filename": "fil-3" },
    { "url": "pages/eksempler/opsummering/opsummering-1/", "folder": "opsummering", "filename": "opsummering-1" },
    { "url": "pages/eksempler/opsummering/opsummering-2/", "folder": "opsummering", "filename": "opsummering-2" },
    { "url": "pages/eksempler/kvittering/kvittering-1/", "folder": "kvittering", "filename": "kvittering-1" },
    { "url": "pages/eksempler/kvittering/kvittering-2/", "folder": "kvittering", "filename": "kvittering-2" },
    { "url": "pages/eksempler/formular-med-fejl/formular-med-fejl-1/", "folder": "formular-med-fejl", "filename": "formular-med-fejl-1" },
    { "url": "pages/eksempler/trinindikator-med-fejl/trinindikator-med-fejl-1/", "folder": "trinindikator-med-fejl", "filename": "trinindikator-med-fejl-1" },
    { "url": "pages/eksempler/siden-kunne-ikke-findes-1/", "folder": "siden-kunne-ikke-findes", "filename": "siden-kunne-ikke-findes-1" },
    { "url": "pages/eksempler/siden-kunne-ikke-findes-2/", "folder": "siden-kunne-ikke-findes", "filename": "siden-kunne-ikke-findes-2" }
];


(async () => {
    var resWidth = 1125; // width of screenshot
    var resHeight = 961;

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

            var pngFileName = targetRootDir + exampleUrls[i].folder + '/' + themes[t] + '-' + exampleUrls[i].filename + '.PNG';

            await page.screenshot({ path: pngFileName });
        }
    }

    await browser.close();
})();
