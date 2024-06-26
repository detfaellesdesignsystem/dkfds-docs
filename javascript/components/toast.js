import {Toast} from "dkfds";

document.addEventListener("DOMContentLoaded", function() {
    toastExample();
});

function toastExample(){
    let button = document.getElementById('toast-example-button');
    if(button !== null){
        if(document.getElementsByClassName('toast-container').length === 0){
            let toastContainer = document.createElement('div');
            toastContainer.classList.add('toast-container');
            toastContainer.setAttribute('aria-live', "assertive");
            toastContainer.setAttribute('aria-atomic', "false");
            toastContainer.setAttribute('aria-relevant', "additions");
            document.getElementById('main-content').prepend(toastContainer);
        }

        button.addEventListener('click', function(){
            let type = ["info", "warning", "error", "success"];
            let headings = ["Toastbesked med info", "Toastbesked med advarsel", "Toastbesked med fejl", "Toastbesked med succesbesked"];
            let icontext = ["Information", "Advarsel", "Fejl", "Succes"];
            let randomType = Math.floor(Math.random() * type.length);
            let toastContainerEl = document.getElementsByClassName('toast-container')[0];
            let toastEl = document.createElement('div');
            toastEl.classList.add('toast', 'toast-'+type[randomType], 'hide');
            toastEl.setAttribute('aria-atomic', "true");

            let icon = document.createElement('div');
            icon.classList.add('toast-icon');
            toastEl.appendChild(icon);

            let message = document.createElement('div');
            message.classList.add('toast-message');

            let headingID = type[randomType] + returnIDnumber();
            let heading = document.createElement('p');
            heading.innerHTML = "<span class='sr-only'>" + icontext[randomType] + ": </span><strong id='" + headingID + "'>" + headings[randomType] + "</strong>";
            message.appendChild(heading);

            let content = document.createElement('p');
            content.innerText = "Her står der noget uddybende information";
            message.appendChild(content);
            
            let close = document.createElement('button');
            close.classList.add('toast-close');
            close.setAttribute('aria-describedby', headingID);
            close.innerText = "Luk";
            message.appendChild(close);
            
            toastEl.appendChild(message);
            toastContainerEl.prepend(toastEl);
            requestAnimationFrame(showtoast);
        });
    }
}

function showtoast(){
    new Toast(document.getElementsByClassName('toast-container')[0].getElementsByClassName('hide')[0]).show();
}

function returnIDnumber() {
    return new Date().getTime();
}