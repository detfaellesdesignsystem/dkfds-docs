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
    alertMessage.querySelector('.alert-heading').textContent = '';
    alertMessage.querySelector('.alert-text').textContent = '';
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
                alert.querySelector('.alert-heading').textContent = "Tilmelding fejlede";
            }
            else if (unsubscriptionPage) {
                alert.querySelector('.alert-heading').textContent = "Afmelding fejlede";
            }

            if (errorCodes.includes('11') && subscriptionPage) {
                const alertText = alert.querySelector('.alert-text');

                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                p2.classList.add('mb-0');

                const link = document.createElement('a');
                link.href = 'mailto:FDS@erst.dk';
                link.textContent = 'sende en e-mail til FDS-teamet';

                p1.textContent = 'Den indtastede adresse er allerede tilmeldt nyhedsbrevet.';
                p2.append('Du er velkommen til at ', link, ', hvis du har spørgsmål.');

                alertText.replaceChildren(p1, p2);
            }
            else if (errorCodes.includes('14') && unsubscriptionPage) {
                const alertText = alert.querySelector('.alert-text');

                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                p2.classList.add('mb-0');

                const link = document.createElement('a');
                link.href = 'mailto:FDS@erst.dk';
                link.textContent = 'sende en e-mail til FDS-teamet';

                p1.textContent = 'Den indtastede adresse er ikke tilmeldt nyhedsbrevet og kan derfor ikke afmeldes.';
                p2.append('Du er velkommen til at ', link, ', hvis du har spørgsmål.');

                alertText.replaceChildren(p1, p2);

            }
            else if (subscriptionPage) {
                const alertText = alert.querySelector('.alert-text');

                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                p2.classList.add('mb-0');

                const link = document.createElement('a');
                link.href = 'mailto:FDS@erst.dk';
                link.textContent = 'send en e-mail til FDS-teamet';

                const strongCode = document.createElement('strong');
                strongCode.textContent = `error_codes_${errorCodes.toString()}`;

                const strongAction = document.createElement('strong');
                strongAction.textContent = 'e-mailadresse, du forsøgte at tilmelde';

                p1.textContent = 'Det var ikke muligt at tilmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at tilmelde igen.';
                p2.append('Hvis problemet fortsætter, så ', link, ' og oplys fejlkoden ', strongCode, ' samt den ', strongAction, '. Vi beklager ulejligheden.');

                alertText.replaceChildren(p1, p2);
            }
            else if (unsubscriptionPage) {
                const alertText = alert.querySelector('.alert-text');

                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                p2.classList.add('mb-0');

                const link = document.createElement('a');
                link.href = 'mailto:FDS@erst.dk';
                link.textContent = 'send en e-mail til FDS-teamet';

                const strongCode = document.createElement('strong');
                strongCode.textContent = `error_codes_${errorCodes.toString()}`;

                const strongAction = document.createElement('strong');
                strongAction.textContent = 'e-mailadresse, du forsøgte at afmelde';

                p1.textContent = 'Det var ikke muligt at afmelde den indtastede e-mailadresse. Tjek at du har indtastet den korrekte e-mailadresse og prøv at afmelde igen.';
                p2.append('Hvis problemet fortsætter, så ', link, ' og oplys fejlkoden ', strongCode, ' samt den ', strongAction, '. Vi beklager ulejligheden.');

                alertText.replaceChildren(p1, p2);
            }

            alert.removeAttribute('hidden');
        }

        document.getElementById("newsletter-submit").addEventListener("click", function (e) {

            let errors = [];
            let emailSection = document.getElementById('newsletter-emailaddress');
            let emailAddress = emailSection.querySelector('input').value;

            /* Hide and clear any previous alert message */
            clearAlertMessage(alert);
            clearAlertMessage(alertSummary);

            if (!isValidEmailAddress(emailAddress)) {
                let errormessage = "E-mailadressen er ikke gyldig";

                /* Show error message for email field */
                if (emailSection.querySelector('fds-error-message')) {
                    emailSection.querySelector('fds-error-message .visible-message').textContent = errormessage;
                }
                else {
                    const errorElement = document.createElement('fds-error-message');
                    errorElement.textContent = errormessage;
                    emailSection.querySelector('input').after(errorElement);
                }

                /* Add error message to error summary */
                errors.push({ href: '#i_newsform_email', text: errormessage });
            }
            else {
                /* If email is valid, ensure no error message is displayed next to the field */
                emailSection.querySelector('fds-error-message')?.remove();
            }

            /* Only the subscription page contains a confirmation checkbox */
            if (subscriptionPage) {

                let confirmCheckbox = document.getElementById('samtykke-check');
                let checkboxError = document.getElementById('samtykke-check-error');

                if (!confirmCheckbox.checked) {
                    let errormessage = "Giv os venligst dit samtykke, så vi må opbevare din e-mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsbrevet.";

                    /* Show error message for checkbox */
                    checkboxError.removeAttribute('hidden');

                    /* Add error message to error summary */
                    errors.push({ href: '#samtykke-check', text: errormessage });
                }
                else {
                    /* If checkbox is checked, ensure no error message is displayed */
                    checkboxError.setAttribute('hidden', '');
                }
            }

            if (errors.length > 0) {
                alertSummary.classList.add('alert-error');
                alertSummary.querySelector('.alert-heading').textContent = "Der er problemer";

                const ul = document.createElement('ul');
                ul.classList.add('nobullet-list', 'mt-0', 'mb-0');

                errors.forEach(({ href, text }) => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.classList.add('function-link');
                    a.href = href;
                    a.textContent = text;
                    li.appendChild(a);
                    ul.appendChild(li);
                });

                alertSummary.querySelector('.alert-text').textContent = '';
                alertSummary.querySelector('.alert-text').appendChild(ul);

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
                emailSection.querySelector('fds-error-message')?.remove();

                /* Clear previous checkbox error, if any */
                if (subscriptionPage) {
                    document.getElementById('samtykke-group').querySelector('fds-error-message').setAttribute('hidden', '');
                }

                document.getElementById("newsform").submit();
            }
        });
    }
});
