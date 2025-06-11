'use strict';

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};

function clearAlertMessage(alertMessage) {
    if (alertMessage.parentNode.nodeName === 'NAV') {
        alertMessage.parentNode.setAttribute('hidden', '');
    }
    else {
        alertMessage.setAttribute('hidden', '');
    }
    alertMessage.classList.remove('alert-success');
    alertMessage.classList.remove('alert-warning');
    alertMessage.classList.remove('alert-error');
    alertMessage.querySelector('.alert-heading').innerHTML = "";
    alertMessage.querySelector('.alert-text').innerHTML = "";
    document.getElementById('newsletter-emailaddress').querySelector('.form-input').removeAttribute('aria-describedby');
    if (document.querySelector('body').classList.contains('page-nyhedsbrev')) {
        document.getElementById('samtykke-check').removeAttribute('aria-describedby');
    }
};

document.addEventListener("DOMContentLoaded", function () {

    let subscriptionPage = document.querySelector('body').classList.contains('page-nyhedsbrev');
    let unsubscriptionPage = document.querySelector('body').classList.contains('page-afmeld-nyhedsbrev');
    let alert = document.getElementById('newsletter-alert');
    let alertSummary = document.getElementById('newsletter-alert-nav');

    /* Don't change these values */
    if (subscriptionPage || unsubscriptionPage) {
        document.getElementById('newsletter_lists').setAttribute('name', 'lists');
        document.getElementById('newsletter_lists').value = "82268";
        document.getElementById('newsletter_language').setAttribute('name', 'language_code');
        document.getElementById('newsletter_language').value = "da";
        document.getElementById('i_newsform_email').setAttribute('name', 'email_address');
    }
    if (subscriptionPage) {
        document.getElementById('newsletter_action').setAttribute('name', 'action');
        document.getElementById('newsletter_action').value = "subscribe";
        document.getElementById('samtykke-check').setAttribute('name', 'data_Samtykke');
        document.getElementById('samtykke-check').value = "Ja";
    }
    if (unsubscriptionPage) {
        document.getElementById('newsletter_action').setAttribute('name', 'action');
        document.getElementById('newsletter_action').value = "unsubscribe";
    }

    if (subscriptionPage || unsubscriptionPage) {

        /* Suppress form submit until we have checked that all required fields have been filled out */
        document.getElementById("newsform").addEventListener("submit", function (e) {
            e.preventDefault();
        });

        /* If the url contains an error message, display it to the user in an alert 
        Error message references: https://kb.ubivox.com/api/latest/html/post_handler.html#error-handling */
        if (window.location.search !== '') {
            const urlParams = new URLSearchParams(window.location.search);
            const errorCodes = urlParams.get('error_codes')?.split(';') || [];

            alert.classList.add('alert-error');

            if (subscriptionPage) {
                alert.querySelector('.alert-heading').innerHTML = "Tilmelding fejlede";
            }
            else if (unsubscriptionPage) {
                alert.querySelector('.alert-heading').innerHTML = "Afmelding fejlede";
            }

            if (errorCodes.includes('11') && subscriptionPage) {
                alert.querySelector('.alert-text').innerHTML = '<p>Den indtastede adresse er allerede tilmeldt nyhedsbrevet.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>';
            }
            else if (errorCodes.includes('14') && unsubscriptionPage) {
                alert.querySelector('.alert-text').innerHTML = '<p>Den indtastede adresse er ikke tilmeldt nyhedsbrevet og kan derfor ikke afmeldes.</p><p class="mb-0">Du er velkommen til at <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis du har spørgsmål.</p>';
            }
            else if (subscriptionPage) {
                alert.querySelector('.alert-text').innerHTML = '<p>Det var ikke muligt at tilmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at tilmelde igen.</p><p class="mb-0">Hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a> og oplys fejlkoden <strong>error_codes_' + errorCodes.toString() + '</strong> samt den <strong>e-mailadresse, du forsøgte at tilmelde</strong>. Vi beklager ulejligheden.</p>';
            }
            else if (unsubscriptionPage) {
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
            clearAlertMessage(alert);
            clearAlertMessage(alertSummary);

            if (!isValidEmailAddress(emailAddress)) {
                let errormessage = "E-mailadressen er ikke gyldig";

                /* Show error message for email field */
                emailSection.classList.add('form-error');
                emailError.innerHTML = '<span class="sr-only">Fejl: </span>' + errormessage;
                emailSection.querySelector('.form-input').setAttribute('aria-describedby', 'i_newsform_email-error');
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
                    document.getElementById('samtykke-check').setAttribute('aria-describedby', 'samtykke-check-error');

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
                alertSummary.classList.add('alert-error');
                alertSummary.querySelector('.alert-heading').innerHTML = "Der er problemer";
                alertSummary.querySelector('.alert-text').innerHTML = '<ul class="nobullet-list mt-0 mb-0">' + errors + '</ul>';
                alertSummary.parentNode.removeAttribute('hidden');
                if (!isValidEmailAddress(emailAddress)) {
                    document.getElementById('i_newsform_email').focus();
                }
                else if (subscriptionPage) {
                    document.getElementById('samtykke-check').focus();
                }
            }
            /* No errors detected in fields - submit the form */
            else {

                if (subscriptionPage) {
                    document.getElementById('success_url').value = window.location.origin + '/faellesskab/nyhedsmail/tilmeldt/';
                    document.getElementById('failure_url').value = window.location.origin + "/faellesskab/nyhedsmail/";
                }
                else if (unsubscriptionPage) {
                    document.getElementById('success_url').value = window.location.origin + '/faellesskab/nyhedsmail/afmeldt/';
                    document.getElementById('failure_url').value = window.location.origin + "/faellesskab/nyhedsmail/afmeld/";
                }

                clearAlertMessage(alert);
                clearAlertMessage(alertSummary);

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