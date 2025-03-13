import * as DKFDS from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    let headings = document.getElementsByTagName('h1');
    if (headings.length > 0) {
        let heading = headings[0].innerText;

        switch (heading) {

            case 'Ikoner':
                DKFDS.init();
                console.log('JavaScript fetched icons from XML');

                fetch('/assets/img/all-svg-icons.svg')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Response was not "ok"');
                        }
                        return response.text();
                    })
                    .then(str => {
                        let parsedXML = new DOMParser().parseFromString(str, 'text/xml');
                        let symbols = parsedXML.querySelectorAll('symbol');
                        for (let i = 0; i < symbols.length; i++) {
                            let viewBox = symbols[i].getAttribute('viewBox');
                            let innerHTML = parsedXML.getElementById(symbols[i].id).innerHTML;
                            let color = viewBox === '0 -960 960 960' ? "0000FF" : "FF00FF";

                            document.getElementById('xml-icon-' + symbols[i].id).innerHTML = 
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" class="icon-svg" focusable="false" aria-hidden="true" style="fill:#${color};">${innerHTML}</svg>`;
                        }
                    })
                    .catch(error => {
                        console.error('Failed to fetch file:', error);
                    });
                    
                let dataIcons = document.querySelectorAll('div[data-icon]');
                for (let i = 0; i < dataIcons.length; i++) {
                    dataIcons[i].style.setProperty('background-image', `url(/assets/svg/${dataIcons[i].dataset.icon}.svg)`);
                    dataIcons[i].style.setProperty('background-repeat', 'no-repeat');
                    dataIcons[i].style.setProperty('max-height', '2.4rem');
                }

                break;

            case 'JavaScript i accordions':

                initTest();
                /* try {
                    new DKFDS.Accordion();
                } catch (err) {
                    console.error(err.message);
                }
                try {
                    let accordion = new DKFDS.Accordion(document.querySelector('h1'));
                    accordion.init();
                } catch (err) {
                    console.error(err.message);
                }
                let accordiongroup = new DKFDS.Accordion(document.querySelector('ul.accordion'));
                accordiongroup.init();
                accordiongroup.toggleButton(document.getElementsByClassName('accordion-button')[1], true);
                console.log('Accordion 2 was opened by JavaScript');

                let accordion1 = document.querySelector(".accordion-button");
                accordion1.addEventListener("fds.accordion.open", function() {
                    console.log("Accordion 1 was opened");
                });
                accordion1.addEventListener("fds.accordion.close", function() {
                    console.log("Accordion 1 was closed");
                });
                console.log('Eventlistener set up for accordion 1'); */
                break;

            case 'Skift sprog i accordions':

                initTest();
                new DKFDS.Accordion(document.querySelector('ul.accordion'), {
                    "open_all": "Open all", 
                    "close_all": "Close all" 
                  }).init();
                break;

            case 'Cards':

                DKFDS.init();
                document.getElementById('replace-image-2').querySelector('.new-card-image').innerHTML = '<img src="/assets/img/cards/Card_med_halv_bredde_2_EKSEMPEL.svg" alt="Billedeksempel">';
                setTimeout(() => {
                    document.getElementById('replace-image-1').querySelector('.new-card-image').innerHTML = '<img src="/assets/img/cards/Card_med_halv_bredde_2_EKSEMPEL.svg" alt="Billedeksempel">';
                    document.getElementById('replace-image-link-1').querySelector('.new-card-image').innerHTML = '<img src="/assets/img/cards/Card_med_halv_bredde_2_EKSEMPEL.svg" alt="Billedeksempel">';
                }, 3000);
                document.getElementById('replace-image-link-2').querySelector('.new-card-image').innerHTML = '<img src="/assets/img/cards/Card_med_halv_bredde_2_EKSEMPEL.svg" alt="Billedeksempel">';
                break;

            case 'JavaScript i faneblade':

                initTest();

                console.log('Testing error message for incorrect initialization:');
                try {
                    new DKFDS.Tabs();
                } catch (err) {
                    console.error(err.message);
                }
                let tabs = new DKFDS.Tabs(document.querySelector('div.tab-container'));
                tabs.init();

                console.log('Selecting the second tab.');
                tabs.activateTab(tabs.tabs[1], true);

                console.log('Testing events (click the tabs or navigate with the keyboard):');
                let tabContainer = document.querySelector('div.tab-container');
                let tab1 = tabContainer.querySelectorAll('.tab-button')[0];
                let tab2 = tabContainer.querySelectorAll('.tab-button')[1];
                let tab3 = tabContainer.querySelectorAll('.tab-button')[2];
                tabContainer.addEventListener("fds.tab.changed", function() {
                    console.log("New tab selected");
                });
                tab1.addEventListener("fds.tab.selected", function() {
                    console.log("Tab 1 selected");
                });
                tab2.addEventListener("fds.tab.selected", function() {
                    console.log("Tab 2 selected");
                });
                tab3.addEventListener("fds.tab.selected", function() {
                    console.log("Tab 3 selected");
                });
                tab1.addEventListener("fds.tab.hidden", function() {
                    console.log("Tab 1 hidden");
                });
                tab2.addEventListener("fds.tab.hidden", function() {
                    console.log("Tab 2 hidden");
                });
                tab3.addEventListener("fds.tab.hidden", function() {
                    console.log("Tab 3 hidden");
                });

                break;

            case 'Inputfelter med karakterbegrænsning':
                new DKFDS.CharacterLimit(document.querySelectorAll('.form-limit')[0]).init();

                document.getElementById('input-added-after-init').innerHTML = '<div class="form-group form-limit" data-maxlength="20" id="javascript-init"><label class="form-label" for="input-text-2">Begrænsning på 20 tegn</label><input type="text" id="input-text-2" name="input-text" class="form-input" value="tekst" aria-describedby="input-text-2-limit-message" required=""><span id="input-text-2-limit-message" class="sr-only">Du kan indtaste op til 20 tegn</span><span class="form-hint character-limit" aria-hidden="true">Du har 20 tegn tilbage</span><span class="character-limit-sr-only sr-only" aria-live="polite">Du har 20 tegn tilbage</span></div>';
                const form_limit = new DKFDS.CharacterLimit(document.getElementById('javascript-init'));
                form_limit.init();

                const message_form_limit = new DKFDS.CharacterLimit(document.querySelectorAll('.form-limit')[2]);
                message_form_limit.init();
                document.getElementById('new-text').addEventListener('click', () => {
                    message_form_limit.container.querySelector('.form-input').value = "Clicked new-text";
                    message_form_limit.updateMessages();
                });
                document.getElementById('new-text-silent').addEventListener('click', () => {
                    message_form_limit.container.querySelector('.form-input').value = "Clicked new-text-silent";
                    message_form_limit.silentUpdateMessages();
                });

                break;

            case 'JavaScript for modaler':

                initTest();
                let modal1 = new DKFDS.Modal(document.getElementById('modal-example-1'));
                let modal2 = new DKFDS.Modal(document.getElementById('modal-example-2'));
                let modalEvents = document.getElementById('modal-example-1');
                
                modal1.init();
                modal2.init();
                
                modalEvents.addEventListener("fds.modal.shown", function() {
                    console.log("Modal1 was opened");
                });
                modalEvents.addEventListener("fds.modal.hidden", function() {
                    console.log("Modal1 was closed");
                });
                
                console.log('Opening modal1');
                modal1.show();
                console.log('Closing modal1');
                modal1.hide();
                console.log('Trying to close an already closed modal1');
                modal1.hide();
                console.log('Opening modal1');
                modal1.show();
                console.log('Opening modal2 while modal1 is open - this should force modal1 to close');
                modal2.show();
                break;

            case 'Test af inert med modaler':

                DKFDS.init();
                new DKFDS.Toast(document.getElementsByClassName('toast')[0]).show();
                break;

            case 'Simpel tabel':
            case 'Responsiv tabel':
            case 'Sortering i tabel':
            case 'Tabel med valgbare rækker':
            case 'Valgbare rækker med funktionsknapper':
            case 'Tabel med mange kolonner':
            case 'Tabel med mange kolonner og funktionsknapper':
            case 'Valgbare rækker med paginering':
            case 'Valgbare rækker med paginering og funktionsknapper':
            case 'Tabel med komponenter':

                DKFDS.init();
                let borderless_toggle = document.querySelectorAll('.toggle-switch')[0];
                let zebra_toggle = document.querySelectorAll('.toggle-switch')[1];
                let table = document.querySelector('.table');
                let pagination = document.querySelector('.table-pagination-options');
                let actions = document.querySelector('.table-actions');
                let radios = document.querySelectorAll('fieldset[aria-labelledby="radio-line-height-legend"] input[type="radio"]');

                borderless_toggle.addEventListener("click", function () {
                    if (this.getAttribute("aria-checked") === "true") {
                        this.setAttribute("aria-checked", "false");
                        table.classList.remove('table--borderless');
                        if (pagination) {
                            pagination.classList.remove('table--borderless');
                        }
                        if (actions) {
                            actions.classList.remove('table--borderless');
                        }
                    } else {
                        this.setAttribute("aria-checked", "true");
                        table.classList.add('table--borderless');
                        if (pagination) {
                            pagination.classList.add('table--borderless');
                        }
                        if (actions) {
                            actions.classList.add('table--borderless');
                        }
                    }
                }, false);

                zebra_toggle.addEventListener("click", function () {
                    if (this.getAttribute("aria-checked") === "true") {
                        this.setAttribute("aria-checked", "false");
                        table.classList.remove('table--zebra');
                    } else {
                        this.setAttribute("aria-checked", "true");
                        table.classList.add('table--zebra');
                    }
                }, false);

                for (let i = 0; i < radios.length; i++){
                    var radio = radios[i];
                    radio.addEventListener('change', event => {
                        table.classList.remove('table--compact', 'table--extracompact');
                        if (event.target.value === 'v2') {
                            table.classList.add('table--compact');
                        }
                        else if (event.target.value === 'v3') {
                            table.classList.add('table--extracompact');
                        }
                    }, false);
                }
                break;

            case 'JavaScript errors i tooltips':

                initTest();
                try {
                    let tooltip1 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[0]);
                    tooltip1.init();
                } catch (err) {
                    console.error(err.message);
                }
                try {
                    let tooltip2 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[1]);
                    tooltip2.init();
                } catch (err) {
                    console.error(err.message);
                }
                try {
                    let tooltip3 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[2]);
                    tooltip3.init();
                } catch (err) {
                    console.error(err.message);
                }
                try {
                    let tooltip4 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[3]);
                    tooltip4.init();
                } catch (err) {
                    console.error(err.message);
                }
                try {
                    let tooltip5 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[4]);
                    tooltip5.init();
                } catch (err) {
                    console.error(err.message);
                }

                let tooltip6 = new DKFDS.Tooltip(document.getElementsByClassName('tooltip-wrapper')[5]);
                tooltip6.init();
                console.log('Is tooltip 6 showing? ' + tooltip6.isShowing());
                tooltip6.showTooltip();
                console.log('Is tooltip 6 showing? ' + tooltip6.isShowing());

                break;
            
            case 'Manuelt initialiseret':
                /* Init mobile navigation */
                initTest();
                /* Init mobile submenus */
                const jsSelectorMenuDropdown = document.getElementsByClassName('js-menudropdown');
                for(let c = 0; c < jsSelectorMenuDropdown.length; c++){
                    new DKFDS.MenuDropdown(jsSelectorMenuDropdown[c]).init();
                }
                /* Init header submenus */
                const jsSelectorDropdown = document.getElementsByClassName('js-dropdown');
                for(let c = 0; c < jsSelectorDropdown.length; c++){
                    new DKFDS.Dropdown(jsSelectorDropdown[c]).init();
                }
                break;

            case 'Initialiseres ved klik':
                new DKFDS.Modal(document.getElementById('test-warning')).init();
                let initButton = document.getElementById('run-init');
                initButton.addEventListener('click', () => {
                    new DKFDS.Navigation().init();
                    initButton.setAttribute('disabled', '');
                });
                break;
            
            default:
                DKFDS.init();
            }
    }
    else {
        DKFDS.init();
    }
});

function initTest () {
    new DKFDS.Modal(document.getElementById('test-warning')).init();
    new DKFDS.Navigation().init();
    console.log('Page JavaScript detected');
}