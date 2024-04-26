import * as DKFDS from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    let headings = document.getElementsByTagName('h1');
    if (headings.length > 0) {
        let heading = headings[0].innerText;

        switch (heading) {

            case 'JavaScript i accordions':

                initTest();
                try {
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
                console.log('Eventlistener set up for accordion 1');
                break;

            case 'Skift sprog i accordions':

                initTest();
                new DKFDS.Accordion(document.querySelector('ul.accordion'), {
                    "open_all": "Open all", 
                    "close_all": "Close all" 
                  }).init();
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