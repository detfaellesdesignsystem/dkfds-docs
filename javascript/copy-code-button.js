'use strict';

document.addEventListener("DOMContentLoaded", function() {
    
    let copyButtons = document.querySelectorAll('.button-copy');

    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function() {
            let codeToCopy = copyButtons[i].parentElement.nextElementSibling.querySelector('code').innerText;
            navigator.clipboard.writeText(codeToCopy);
        });
    }
});
