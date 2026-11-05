---
permalink: "/faellesskab/nyhedsmail/"
redirect_from:
- "/omdesignsystemet/nyhedsmail/"
layout: styleguide
category: faellesskab_menu
subcategory: Fællesskab
title: Nyhedsbrev
lead: Tilmeld dig nyhedsbrevet og følg med i arbejdet med Det Fælles Designsystem.
description: Tilmeld dig nyheder fra Det Fælles Designsystem
tags:
- nyhedsbrev
- nyhedsmail
- tilmeld
- afmeld
---

Nyhedsbrevene indeholder information om {% include links/internal-link.html linktext="releases" %} og invitationer til {% include links/internal-link.html linktext="samarbejdsforum" %}. Vi udsender nyhedsbreve ca. 4-6 gange om året.

<div class="alert mt-5 mb-9" id="newsletter-alert" role="alert" hidden>
    <svg class="icon-svg alert-icon" aria-label="Fejl" focusable="false"><use href="#error"></use></svg>
    <div class="alert-body">
        <h2 class="alert-heading">Fejl opstået</h2>
        <div class="alert-text"></div>
    </div>
</div>
<nav aria-labelledby="newsletter-alert-heading" hidden>
    <div class="alert mt-5 mb-9" id="newsletter-alert-nav" role="alert" data-module="error-summary">
        <svg class="icon-svg alert-icon" aria-label="Fejl" focusable="false"><use href="#error"></use></svg>
        <div class="alert-body">
            <h2 class="alert-heading" id="newsletter-alert-heading">Der er problemer</h2>
            <div class="alert-text"></div>
        </div>
    </div>
</nav>
<div class="newsletter-container mt-5">
    <form action="https://det-faelles-designsystem.uxmail.io/handlers/post/" method="post" id="newsform" novalidate>
        <input type="hidden" value="" id="newsletter_action">
        <input type="hidden" value="" id="newsletter_lists">
        <input type="hidden" value="" id="newsletter_language">
        <input type="hidden" name="failure_url" value="" id="failure_url">
        <input type="hidden" name="success_url" value="" id="success_url">
        <fds-input id="newsletter-emailaddress">
            <label>Tilmeld e-mailadresse</label>
            <input type="email" id="i_newsform_email" autocomplete="email" required>
        </fds-input>
        <fds-checkbox id="samtykke-group" class="mt-5">
            <input type="checkbox" id="samtykke-check" value="" required>
            <label>Jeg giver hermed samtykke til, at Erhvervsstyrelsen må opbevare min <span class='nowrap'>e-mailadresse</span>, indtil jeg selv afmelder mig nyhedsbrevet</label>
            <fds-error-message hidden id="samtykke-check-error" class="mb-3">Giv os venligst dit samtykke, så vi må opbevare din e-mailadresse. Uden dit samtykke kan vi ikke sende dig nyhedsbrevet.</fds-error-message>
        </fds-checkbox>
        <p>Læs om vores behandling af dine personoplysninger og dine rettigheder under {% include links/internal-link.html linktext="Privatlivspolitik og cookies" %}.</p>
        <input type="submit" class="button button-primary mt-5" value="Tilmeld" id="newsletter-submit">
    </form>
    <p class="mt-9 pt-0">
        {% include links/internal-link.html linktext="Afmeld en e-mailadresse her" %}
    </p>
</div>
