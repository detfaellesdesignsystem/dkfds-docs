import * as DKFDS from "dkfds";

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