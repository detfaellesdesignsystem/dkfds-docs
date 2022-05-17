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
            document.getElementById('main-content').prepend(toastContainer);
        }

        button.addEventListener('click', function(){
            let type = ["info", "warning", "error", "success"];
            let headings = ["Du har fået en besked", "Dette er en advarsel", "Der opstod en fejl", "Din ansøgning er afsendt"];
            let randomType = Math.floor(Math.random() * type.length);
            let toastContainerEl = document.getElementsByClassName('toast-container')[0];
            let toastEl = document.createElement('div');
            toastEl.classList.add('toast', 'toast-'+type[randomType], 'hide');
            toastEl.setAttribute('role', "status");
            let icon = document.createElement('div');
            icon.classList.add('toast-icon');
            toastEl.appendChild(icon);
            let message = document.createElement('div');
            message.classList.add('toast-message');
            let heading = document.createElement('p');
            heading.classList.add('bold');
            heading.innerText = headings[randomType];
            message.appendChild(heading);
            let close = document.createElement('button');
            close.classList.add('toast-close');
            close.innerText = "Luk";
            message.appendChild(close);
            let content = document.createElement('p');
            content.innerText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
            message.appendChild(content);
            toastEl.appendChild(message);
            toastContainerEl.appendChild(toastEl);
            requestAnimationFrame(showtoast);
        });
    }
}

function showtoast(){
    new Toast(document.getElementsByClassName('toast-container')[0].getElementsByClassName('hide')[0]).show();
}
