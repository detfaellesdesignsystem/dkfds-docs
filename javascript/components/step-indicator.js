import * as DKFDS from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    
    /* Move modals in auto-generated examples to a container */
    let pageModals = document.querySelectorAll('.fds-modal');
    if (pageModals.length > 0 && document.querySelectorAll('.fds-modal-container').length === 0) {
        let modalContainer = document.createElement("div"); // Create the container
        modalContainer.classList.add('fds-modal-container');
        let bodyChildren = document.querySelectorAll('body > *');
        for (let c = bodyChildren.length - 1; c > -1; c--) {
            if (bodyChildren[c].tagName !== 'SCRIPT') {
                bodyChildren[c].after(modalContainer); // Place the container in the body tag before the bottom scripts
                break;
            }
        }
        for (let m = 0; m < pageModals.length; m++) {
            modalContainer.prepend(pageModals[m]); // Move all modals to the container
        }
    }
});