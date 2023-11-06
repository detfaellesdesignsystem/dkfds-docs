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
    else if (document.getElementsByTagName('body')[0].classList.contains('page-header-switch-language')) {
        let queryString = window.location.search;
        if(queryString !== "" && queryString.indexOf("lang=") !== -1) {
            let lang = queryString.replace('?lang=', '');
            let select_language_button = document.getElementsByClassName('select-language-button')[0];
            let select_language_list_overflow = document.getElementsByClassName('select-language-list')[0].getElementsByClassName('overflow-list')[0];
            let languages = select_language_list_overflow.getElementsByTagName('LI');
            let danish = languages[0];
            let english = languages[1];
            let german = languages[2];
            let polish = languages[3];
            let globe_icon = '<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#language"></use></svg>';

            switch (lang) {
                case "en-GB":
                    select_language_button.innerHTML = globe_icon + 'English';
                    danish.getElementsByTagName("A")[0].removeAttribute('aria-label');
                    english.getElementsByTagName("A")[0].setAttribute('aria-label', 'Current language: English');
                    select_language_list_overflow.innerHTML = english.outerHTML + danish.outerHTML + german.outerHTML + polish.outerHTML;
                    break;
                case "de":
                    select_language_button.innerHTML = globe_icon + 'Deutsch';
                    danish.getElementsByTagName("A")[0].removeAttribute('aria-label');
                    german.getElementsByTagName("A")[0].setAttribute('aria-label', 'Aktuelle Sprache: Deutsch');
                    select_language_list_overflow.innerHTML = german.outerHTML +  danish.outerHTML + english.outerHTML + polish.outerHTML;
                    break;
                case "pl":
                    select_language_button.innerHTML = globe_icon + 'Polski';
                    danish.getElementsByTagName("A")[0].removeAttribute('aria-label');
                    polish.getElementsByTagName("A")[0].setAttribute('aria-label', 'Aktualny język: polski');
                    select_language_list_overflow.innerHTML = polish.outerHTML +  danish.outerHTML + english.outerHTML + german.outerHTML;
                    break;
            }
        }
    }
}