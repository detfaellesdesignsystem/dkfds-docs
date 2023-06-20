---
permalink: /faellesskab/nyhedsmail/
redirect_from:
- /omdesignsystemet/nyhedsmail/
layout: styleguide
title: Nyhedsbrev
category: Faellesskab_category
subcategory: Fællesskab
description: "Tilmeld dig nyheder fra Det Fælles Designsystem"
---

<div class="alert mt-5 mb-9" id="newsletter-alert" role="alert" hidden>
    <div class="alert-body">
        <h2 class="alert-heading"></h2>
        <div class="alert-text"></div>
    </div>
</div>
<div class="newsletter-container mt-5">
    <form action="https://det-faelles-designsystem.uxmail.io/handlers/post/" method="post" id="newsform" novalidate>
        <input type="hidden" value="" id="newsletter_action">
        <input type="hidden" value="" id="newsletter_lists">
        <input type="hidden" value="" id="newsletter_language">
        <input type="hidden" name="failure_url" value="" id="failure_url">
        <input type="hidden" name="success_url" value="" id="success_url">
        <div class="form-group" id="newsletter-emailaddress">
            <label class="form-label" for="i_newsform_email">Tilmeld e-mailadresse</label>
            <span class="form-error-message d-none"></span>
            <input type="email" class="form-input" id="i_newsform_email" autocomplete="email" required>
        </div>
        <div class="form-group" id="samtykke-group">
            <span class="form-error-message d-none"></span>
            <input id="samtykke-check" type="checkbox" value="" class="form-checkbox checkbox-large" required />
            <label for="samtykke-check">Jeg giver hermed samtykke til, at Erhvervsstyrelsen må opbevare min <span class='nowrap'>e-mailadresse</span>, indtil jeg selv afmelder mig nyhedsbrevet</label>
        </div>
        <p><a href="/privatlivspolitik-cookies/">Læs om vores behandling af dine personoplysninger og dine rettigheder</a></p>
        <input type="submit" class="button button-primary mt-5" value="Tilmeld" id="newsletter-submit">
    </form>
    <p class="mt-9 pt-0">
        <a href="/faellesskab/nyhedsmail/afmeld/">Afmeld en <span class='nowrap'>e-mailadresse</span> her</a>
    </p>
</div>
