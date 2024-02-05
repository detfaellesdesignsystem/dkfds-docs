import * as DKFDS from "dkfds";

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

