'use strict';
import $ from "jquery";

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};

$(function ($) {

    let alert = document.getElementById('newsletter-alert');

    /* If the user is on nyhedsmail-tilmeldt.md (after a successful subscription), paste the response 
    from the URL into the alert on that page and make the alert visible */
    if (document.querySelector('body').classList.contains('page-tilmelding-til-nyhedsbrev')) {
        let urlparams = window.location.search.substring(1).split('&');
        let response = urlparams[0].split('=');
        if (response[0] == 'response') {
            let message = decodeURI(response[1]);
            alert.classList.add('alert-success');
            alert.querySelector('.alert-text').innerHTML = '<p class="mt-0 mb-0">' + message + '</p>';
            alert.removeAttribute("hidden");
        }
    }

    else if (document.querySelectorAll('.newsletter-container').length === 1) {

        /* Get mail lists */
        $.ajax({
            url: "https://w2l.dk/pls/wopdprod/aboutils.nyhedsbrev2_drupal_xml?aboid=280",
            async: false,
            cache: true,
            success: function (xmlResponse) {

                /* Prevent the default submit event for the subscription form and unsubscription form */
                document.getElementById("newsform").addEventListener("submit", function (e) {
                    e.preventDefault();
                });

                /* Find segment IDs used for subscribing and unsubscribing */
                let segmentIDs = [];
                let grupper = xmlResponse.querySelectorAll('gruppe');
                for (let i = 0; i < grupper.length; i++) {
                    let segmenter = grupper[i].querySelectorAll('segment');
                    for (let j = 0; j < segmenter.length; j++) {
                        segmentIDs.push(segmenter[j].getAttribute('segment_id'));
                    }
                }

                if (document.querySelector('body').classList.contains('page-nyhedsbrev')) {

                    /* Show address field, checkbox and subscribe button */
                    document.getElementById("newsletter-emailaddress").removeAttribute("hidden");
                    document.getElementById("samtykke-group").removeAttribute("hidden");
                    document.getElementById("tilmeld").removeAttribute("hidden");

                    /* Add functionality to the subscribe button */
                    document.getElementById("tilmeld")?.addEventListener("click", function (e) {
                        e.preventDefault();

                        /* Hide and clear alert */
                        if (!alert.hidden) {
                            alert.setAttribute('hidden', '');
                            alert.classList.remove('alert-success');
                            alert.classList.remove('alert-warning');
                            alert.classList.remove('alert-error');
                            alert.querySelector('.alert-heading').innerHTML = "";
                            alert.querySelector('.alert-text').innerHTML = "";
                        }

                        let errors = "";
                        let emailSection = document.getElementById('newsletter-emailaddress');
                        let emailError = emailSection.querySelector('.form-error-message');
                        let emailAddress = document.getElementById('i_newsform_email').value;
                        let confirmSection = document.getElementById('samtykke-group');
                        let confirmCheckbox = document.getElementById('samtykke-check');

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
                            /* If email is valid, ensure no error message is displayed (clears previous errors) */
                            emailSection.classList.remove('form-error');
                            emailError.innerHTML = '';
                            emailError.classList.add('d-none');
                        }

                        if (!confirmCheckbox.checked) {
                            let errormessage = "Giv os venligst dit samtykke, så vi må opbevare din e-mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsbrevet.";

                            confirmSection.classList.add('form-error');
                            confirmSection.querySelector('.form-error-message').innerHTML = '<span class="sr-only">Fejl: </span>' + errormessage;
                            confirmSection.querySelector('.form-error-message').classList.remove('d-none');

                            errors += '<li><a class="function-link" href="#samtykke-check">' + errormessage + '</a></li>';
                        } 
                        else {
                            confirmSection.classList.remove('form-error');
                            confirmSection.querySelector('.form-error-message').innerHTML = '';
                            confirmSection.querySelector('.form-error-message').classList.add('d-none');
                        }

                        if (errors !== '') {
                            alert.classList.add('alert-error');
                            alert.querySelector('.alert-heading').innerHTML = "Der er problemer";
                            alert.querySelector('.alert-text').innerHTML = '<ul class="nobullet-list mt-0 mb-0">' + errors + '</ul>';
                            alert.removeAttribute('hidden');
                            if (!isValidEmailAddress(emailAddress)) {
                                document.getElementById('i_newsform_email').focus();
                            }
                            else {
                                confirmCheckbox.focus();
                            }
                            return false;
                        }

                        $.ajax({
                            url: 'https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal',
                            type: "POST",
                            dataType: "xml",
                            traditional: true,
                            data: {
                                i_segmentid: segmentIDs,
                                i_email: emailAddress,
                                i_navn: '',
                                i_firma: '',
                                i_sprog: 'DA',
                                i_siteid: 'detfaellesdesignsystem',
                                tilmeld: 'Tilmeld',
                                frameld: ''
                            },
                            success: function (xmlResponse) {
                                document.getElementById('i_newsform_email').value = "";
                                confirmCheckbox.checked = false;
                                let url = window.location.origin + '/faellesskab/nyhedsmail/tilmeldt?';
                                url += 'response=' + encodeURI($(xmlResponse).text());
                                window.location.href = url;
                            },
                            error: function () {
                                alert.classList.add('alert-error');
                                alert.querySelector('.alert-heading').innerHTML = "Tilmelding fejlede";
                                alert.querySelector('.alert-text').innerHTML = '<p>Det var ikke muligt at tilmelde den indtastede e-mailadresse. Dette kan skyldes midlertidige problemer eller begrænsninger på dit netværk.</p><p class="mb-0">Prøv at tilmelde igen og hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a>.</p>';
                                alert.removeAttribute('hidden');
                            }
                        });
                    });
                }

                else if (document.querySelector('body').classList.contains('page-afmeld-nyhedsbrev')) {

                    /* Show address field and unsubscribe button */
                    document.getElementById("newsletter-emailaddress")?.removeAttribute("hidden");
                    document.getElementById("afmeld")?.removeAttribute("hidden");

                    /* Add functionality to the unsubscribe button on click */
                    document.getElementById("afmeld")?.addEventListener("click", function (e) {
                        e.preventDefault();

                        /* Hide and clear alert */
                        if (!alert.hidden) {
                            alert.setAttribute('hidden', '');
                            alert.classList.remove('alert-success');
                            alert.classList.remove('alert-warning');
                            alert.classList.remove('alert-error');
                            alert.querySelector('.alert-heading').innerHTML = "";
                            alert.querySelector('.alert-text').innerHTML = "";
                        }
                        
                        let errors = "";
                        let emailSection = document.getElementById('newsletter-emailaddress');
                        let emailError = emailSection.querySelector('.form-error-message');
                        let emailAddress = document.getElementById('i_newsform_email').value;

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
                            /* If email is valid, ensure no error message is displayed (clears previous errors) */
                            emailSection.classList.remove('form-error');
                            emailError.innerHTML = '';
                            emailError.classList.add('d-none');
                        }

                        if (errors !== '') {
                            alert.classList.add('alert-error');
                            alert.querySelector('.alert-heading').innerHTML = "Der er problemer";
                            alert.querySelector('.alert-text').innerHTML = '<ul class="nobullet-list mt-0 mb-0">' + errors + '</ul>';
                            alert.removeAttribute('hidden');
                            document.getElementById('i_newsform_email').focus();
                            return false;
                        }

                        $.ajax({
                            url: 'https://w2l.dk/pls/wopdprod/aboutils.abo_submit_drupal',
                            type: "POST",
                            dataType: "xml",
                            traditional: true,
                            data: {
                                i_segmentid: segmentIDs,
                                i_email: emailAddress,
                                i_navn: '',
                                i_firma: '',
                                i_sprog: 'DA',
                                i_siteid: 'detfaellesdesignsystem',
                                tilmeld: '',
                                frameld: 'Frameld'
                            },
                            success: function (xmlResponse) {
                                alert.classList.add('alert-success');
                                alert.querySelector('.alert-heading').innerHTML = "";
                                alert.querySelector('.alert-text').innerHTML = '<p class="mt-0 mb-0"></p>';
                                $('#newsletter-alert .alert-text p').html($(xmlResponse).text());
                                alert.removeAttribute('hidden');
                                document.getElementById('i_newsform_email').value = "";
                            },
                            error: function () {
                                alert.classList.add('alert-error');
                                alert.querySelector('.alert-heading').innerHTML = "Afmelding fejlede";
                                alert.querySelector('.alert-text').innerHTML = '<p>Det var ikke muligt at afmelde den indtastede e-mailadresse. Dette kan skyldes midlertidige problemer eller begrænsninger på dit netværk.</p><p class="mb-0">Prøv at afmelde igen og hvis problemet fortsætter, så <a href="mailto:FDS@erst.dk">send en e-mail til FDS-teamet</a>.</p>';
                                alert.removeAttribute('hidden');
                            }
                        });
                    });
                }
            },
            error: function () {

                if (document.querySelector('body').classList.contains('page-nyhedsbrev')) {
                    alert.classList.add('alert-warning');
                    alert.querySelector('.alert-heading').innerHTML = "Der er problemer med tilmelding";
                    alert.querySelector('.alert-text').innerHTML = '<p>Vi kan ikke vise dig tilmeldingsformularen. Dette kan for eksempel skyldes midlertidige problemer eller dine sikkerhedsindstillinger.</p><p class="mb-0">Du kan prøve at vende tilbage til denne side senere eller <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis problemet fortsætter.</p>';
                    alert.removeAttribute("hidden");
                }

                else if (document.querySelector('body').classList.contains('page-afmeld-nyhedsbrev')) {
                    alert.classList.add('alert-warning');
                    alert.querySelector('.alert-heading').innerHTML = "Der er problemer med afmelding";
                    alert.querySelector('.alert-text').innerHTML = '<p>Vi kan ikke vise dig afmeldingsformularen. Dette kan for eksempel skyldes midlertidige problemer eller dine sikkerhedsindstillinger.</p><p class="mb-0">Du kan prøve at vende tilbage til denne side senere eller <a href="mailto:FDS@erst.dk">sende en e-mail til FDS-teamet</a>, hvis problemet fortsætter.</p>';
                    alert.removeAttribute("hidden");
                }
            }
        });
    };

});
