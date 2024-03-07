import * as DKFDS from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    let headings = document.getElementsByTagName('h1');
    if (headings.length > 0) {
        let heading = headings[0].innerText;

        switch (heading) {

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
                console.log(`No additional JavaScript found for page with heading "${heading}".`);
                DKFDS.init();
            }
    }
    else {
        console.log('No h1 found');
    }
});

function initTest () {
    new DKFDS.Modal(document.getElementById('test-warning')).init();
    new DKFDS.Navigation().init();
}