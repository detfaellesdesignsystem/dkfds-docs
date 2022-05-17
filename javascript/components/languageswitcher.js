document.addEventListener("DOMContentLoaded", function() {
    languageSwitcher();
});
function languageSwitcher(){

    if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher') || document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')){
        let queryString = window.location.search;
        if(queryString !== "" && queryString.indexOf("lang=") !== -1){
            let lang = queryString.replace('?lang=', '');
            if(lang !== "da") {
                let element = document.getElementsByClassName('language-switcher')[0];
                let ul = element.getElementsByTagName('ul')[0];
                let first = ul.querySelector('li:first-of-type a');
                first.removeChild(first.getElementsByTagName('svg')[0]);
                ul.querySelector('li:first-of-type a').removeAttribute('aria-label');
                let chosenLang = ul.querySelector('a[lang="' + lang + '"]');
                var svgns = "http://www.w3.org/2000/svg";
                var xlinkns = "http://www.w3.org/1999/xlink";
                let svg = document.createElementNS(svgns, 'svg');
                svg.classList.add('icon-svg');
                svg.setAttribute('focusable', 'false');
                svg.setAttribute('aria-hidden', 'true');
                let use = document.createElementNS(svgns, "use");
                use.setAttributeNS(xlinkns, "href", "#done");
                svg.appendChild(use);
                chosenLang.prepend(svg);
                ul.prepend(chosenLang.parentNode);

                switch (lang) {
                    case "en-GB":
                        ul.setAttribute('aria-label', "Choose language");
                        chosenLang.setAttribute('aria-label', "Current language: English");

                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')) {
                            ul.querySelector('a[lang="en-GB"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="en-GB"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Danish");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "English");
                            ul.querySelector('a[lang="de"]').setAttribute('data-tooltip', "German");
                            ul.querySelector('a[lang="pl"]').setAttribute('data-tooltip', "Polish");
                        }

                        break;
                    case "de":
                        ul.setAttribute('aria-label', "Sprache wählen");
                        chosenLang.setAttribute('aria-label', "Aktuelle Sprache: Deutsch");

                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')) {
                            ul.querySelector('a[lang="de"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="de"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Dänisch");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "Englisch");
                            ul.querySelector('a[lang="pl"]').setAttribute('data-tooltip', "Polieren");
                        }

                        break;
                    case "pl":
                        ul.setAttribute('aria-label', "Wybierz język");
                        chosenLang.setAttribute('aria-label', "Aktualny język: polski");
                        if(document.getElementsByTagName('body')[0].classList.contains('page-language-switcher-tooltip')){
                            ul.querySelector('a[lang="pl"]').removeAttribute('data-tooltip');
                            ul.querySelector('a[lang="pl"]').classList.remove('js-tooltip');
                            ul.querySelector('a[lang="da"]').classList.add('js-tooltip');
                            ul.querySelector('a[lang="da"]').setAttribute('data-tooltip', "Duński");
                            ul.querySelector('a[lang="en-GB"]').setAttribute('data-tooltip', "Angielski");
                            ul.querySelector('a[lang="de"]').setAttribute('data-tooltip', "Niemiecki");
                        }

                        break;
                }
            }

        }
    }
}