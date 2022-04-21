import * as DKFDS from "dkfds";
document.addEventListener("DOMContentLoaded", function() {
    let interval = "";
    let modal = document.getElementsByClassName('fds-modal');
    for(let m = 0; m < modal.length; m++){
        modal[m].addEventListener('fds.modal.shown', function(){
            let timeLeft = 300000;
            this.setAttribute('data-time-left', timeLeft);
            interval = setInterval(sessionTimeout, 1000);
        });
        modal[m].addEventListener('fds.modal.hidden', function(){
            clearInterval(interval);
            this.removeAttribute('data-time-left');
        });
    }
});

function sessionTimeout(){
    let modal = document.querySelector(".fds-modal[aria-hidden=false]");
    if(modal !== null && modal.getAttribute('data-time-left') !== null){
        let timeLeft = modal.getAttribute('data-time-left') - 1000;
        if(timeLeft < 0){
            closeModal(modal);
        } else{
            modal.setAttribute('data-time-left', timeLeft);
            let timeLeftToMinutes = timeLeft / 60000;
            let minutesElement = modal.getElementsByClassName('session-timeout-countdown-minutes')[0];
            let secondsElement = modal.getElementsByClassName('session-timeout-countdown-seconds')[0];
            let minuteString = Math.trunc(timeLeftToMinutes)+" min.";
            if(timeLeftToMinutes > 0){
                minuteString = minuteString+" ";
            }
            minutesElement.innerHTML = minuteString;
            minutesElement.classList.remove('d-none');
        
            let seconds = 0;
            if(timeLeftToMinutes !== 0){
                seconds = Math.round((timeLeftToMinutes - Math.trunc(timeLeftToMinutes)) * 60);
            }
            secondsElement.innerHTML = seconds+" sek.";
            secondsElement.classList.remove('d-none');
        }
    }
}

function closeModal(modal){
    new DKFDS.Modal(modal).hide();
}