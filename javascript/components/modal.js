import * as DKFDS from "dkfds";
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById('modal-example-locked') !== null){
        let modal = new DKFDS.Modal(document.getElementById('modal-example-locked'));
        let yesButton = document.getElementById('button-modal-example-yes');
        let noButton = document.getElementById('button-modal-example-no');
        yesButton.addEventListener('click', hideModal);
        noButton.addEventListener('click', hideModal);
    }
});

function hideModal(){
    let modal = new DKFDS.Modal(document.getElementById('modal-example-locked'));
    modal.hide();
}