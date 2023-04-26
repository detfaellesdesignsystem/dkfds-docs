'use strict';

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};

function clearAlertMessage(alertMessage) {
    alertMessage.setAttribute('hidden', '');
    alertMessage.classList.remove('alert-success');
    alertMessage.classList.remove('alert-warning');
    alertMessage.classList.remove('alert-error');
    alertMessage.querySelector('.alert-heading').innerHTML = "";
    alertMessage.querySelector('.alert-text').innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function () {

    let subscriptionPage = document.querySelector('body').classList.contains('page-nyhedsbrev');
    let unsubscriptionPage = document.querySelector('body').classList.contains('page-afmeld-nyhedsbrev');
    let alert = document.getElementById('newsletter-alert');

    if (subscriptionPage || unsubscriptionPage) {

        /* Suppress form submit until we have checked that all required fields have been filled out */
        document.getElementById("newsform").addEventListener("submit", function (e) {
            e.preventDefault();
        });

        /* If the url contains an error message, display it to the user in an alert 
        Error message references: https://kb.ubivox.com/api/latest/html/post_handler.html#error-handling */
        if (window.location.search !== '') {
            let errorCodes = [];
            let urlparams = window.location.search.substring(1).split('&');
            for (let p = (urlparams.length - 1); p > -1; p--) {
                let paramstrings = urlparams[p].split('=');
                if (paramstrings[0] === 'error_codes') {
                    errorCodes = paramstrings[1].split('%3B');
                    break;
                }
            }
            alert.classList.add('alert-error');

            if (subscriptionPage) {
                alert.querySelector('.alert-heading').innerHTML = "Tilmelding fejlede";
            }
            else if (unsubscriptionPage) {
                alert.querySelector('.alert-heading').innerHTML = "Afmelding fejlede";
            }

            if (errorCodes.includes('11')) {
                alert.querySelector('.alert-text').innerHTML = '<p>Den indtastede adresse er allerede tilmeldt nyhedsbrevet.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>';
            }
            else if (errorCodes.includes('14')) {
                alert.querySelector('.alert-text').innerHTML = '<p>Den indtastede adresse er ikke tilmeldt nyhedsbrevet og kan derfor ikke afmeldes.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>';
            }
            else {
                alert.querySelector('.alert-text').innerHTML = '<p>Det var ikke muligt at afmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at afmelde igen.</p><p class="mb-0">Hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a> og oplys fejlkoden <strong>error_codes_' + errorCodes.toString() + '</strong> samt den <strong>e-mailadresse, du forsøgte at afmelde</strong>. Vi beklager ulejligheden.</p>';
            }

            alert.removeAttribute('hidden');
        }

        document.getElementById("newsletter-submit").addEventListener("click", function (e) {

            let errors = "";
            let emailSection = document.getElementById('newsletter-emailaddress');
            let emailAddress = document.getElementById('i_newsform_email').value;
            let emailError = emailSection.querySelector('.form-error-message');

            /* Hide and clear any previous alert message */
            if (!alert.hidden) {
                clearAlertMessage(alert);
            }

            if (!isValidEmailAddress(emailAddress)) {
                let errormessage = "E-mailadressen er ikke gyldig";

                /* Show error message for email field */
                emailSection.classList.add('form-error');
                emailError.innerHTML = '<span class="sr-only">Fejl: </span>' + errormessage;
                emailError.classList.remove('d-none');

                /* Add error message to error summary */
                errors += '<li><a class="function-link" href="#i_newsform_email">' + errormessage + '</a></li>';
            }
            else {
                /* If email is valid, ensure no error message is displayed next to the field */
                emailSection.classList.remove('form-error');
                emailError.innerHTML = '';
                emailError.classList.add('d-none');
            }

            /* Only the subscription page contains a confirmation checkbox */
            if (subscriptionPage) {

                let confirmSection = document.getElementById('samtykke-group');
                let confirmCheckbox = document.getElementById('samtykke-check');

                if (!confirmCheckbox.checked) {
                    let errormessage = "Giv os venligst dit samtykke, så vi må opbevare din e-mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsbrevet.";

                    /* Show error message for checkbox */
                    confirmSection.classList.add('form-error');
                    confirmSection.querySelector('.form-error-message').innerHTML = '<span class="sr-only">Fejl: </span>' + errormessage;
                    confirmSection.querySelector('.form-error-message').classList.remove('d-none');

                    /* Add error message to error summary */
                    errors += '<li><a class="function-link" href="#samtykke-check">' + errormessage + '</a></li>';
                }
                else {
                    /* If checkbox is checked, ensure no error message is displayed */
                    confirmSection.classList.remove('form-error');
                    confirmSection.querySelector('.form-error-message').innerHTML = '';
                    confirmSection.querySelector('.form-error-message').classList.add('d-none');
                }
            }

            if (errors !== '') {
                alert.classList.add('alert-error');
                alert.querySelector('.alert-heading').innerHTML = "Der er problemer";
                alert.querySelector('.alert-text').innerHTML = '<ul class="nobullet-list mt-0 mb-0">' + errors + '</ul>';
                alert.removeAttribute('hidden');
                if (!isValidEmailAddress(emailAddress)) {
                    document.getElementById('i_newsform_email').focus();
                }
                else if (subscriptionPage) {
                    document.getElementById('samtykke-check').focus();
                }
            }
            else {
                document.getElementById('failure_url').value = (window.location.href).replace(/\?.+/ig, ''); // Reload the page and remove current error messages in url

                if (subscriptionPage) {
                    document.getElementById('success_url').value = window.location.href + 'tilmeldt/';
                }
                else if (unsubscriptionPage) {
                    document.getElementById('success_url').value = (window.location.href).replace('afmeld', 'afmeldt');
                }

                clearAlertMessage(alert);

                /* Clear previous email error, if any */
                emailSection.classList.remove('form-error');
                emailError.innerHTML = '';
                emailError.classList.add('d-none');

                /* Clear previous checkbox error, if any */
                if (subscriptionPage) {
                    document.getElementById('samtykke-group').classList.remove('form-error');
                    document.getElementById('samtykke-group').querySelector('.form-error-message').innerHTML = '';
                    document.getElementById('samtykke-group').querySelector('.form-error-message').classList.add('d-none');
                }

                document.getElementById("newsform").submit();
            }
        });
    }
});