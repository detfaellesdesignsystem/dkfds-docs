const puppeteer = require('puppeteer');

var root = "http://127.0.0.1:4000/";
//var root = "https://develop.designsystem.dk/";
var targetRootDir = "img/examples_pages/";
var themes = ["virk", "borgerdk"];

var exampleUrls = [
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-1/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-1.PNG"},
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-2/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-2.PNG"},
    {"url": "pages/eksempler/formular-til-kontaktoplysninger/formular-3/", "folder": "formular-til-kontaktoplysninger", "filename": "formular-3.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-1/", "folder": "trinformular-til-registrering", "filename": "registrering-1.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-2/", "folder": "trinformular-til-registrering", "filename": "registrering-2.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-3/", "folder": "trinformular-til-registrering", "filename": "registrering-3.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-4/", "folder": "trinformular-til-registrering", "filename": "registrering-4.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-5/", "folder": "trinformular-til-registrering", "filename": "registrering-5.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-6/", "folder": "trinformular-til-registrering", "filename": "registrering-6.PNG"},
    {"url": "pages/eksempler/trinformular-til-registrering/registrering-7/", "folder": "trinformular-til-registrering", "filename": "registrering-7.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-1/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-1.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-2/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-2.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-3/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-3.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-4/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-4.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-5/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-5.PNG"},
    {"url": "pages/eksempler/trinformular-til-ansoegning/ansoegning-6/", "folder": "trinformular-til-ansoegning", "filename": "ansoegning-6.PNG"},
    {"url": "pages/eksempler/sagsoversigt/sagsoversigt-1/", "folder": "sagsoversigt", "filename": "sagsoversigt-1.PNG"},
    {"url": "pages/eksempler/sagsoversigt/sagsoversigt-2/", "folder": "sagsoversigt", "filename": "sagsoversigt-2.PNG"},
    {"url": "pages/eksempler/sagsoversigt/sagsoversigt-3/", "folder": "sagsoversigt", "filename": "sagsoversigt-3.PNG"},
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
