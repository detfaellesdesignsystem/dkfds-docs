---
permalink: "/faellesskab/nyhedsmail/afmeld/"
parentlink: "/faellesskab/nyhedsmail/"
redirect_from:
- "/omdesignsystemet/nyhedsmail/afmeld/"
layout: styleguide
category: Faellesskab_category
subcategory: Fællesskab
title: Afmeld nyhedsbrev
description: Afmeld nyhedsbrev fra Det Fælles Designsystem
tags:
---
   
<div class="alert mt-5" id="newsletter-alert" role="alert" hidden>
    <div class="alert-border"></div>
    <svg class="icon-svg alert-icon" aria-label="Fejl" focusable="false"><use href="#error"></use></svg>
    <div class="alert-body">
        <h2 class="alert-heading">Fejl opstået</h2>
        <div class="alert-text"></div>
    </div>
</div>
<nav aria-labelledby="newsletter-alert-heading" hidden>
    <div class="alert mt-5" id="newsletter-alert-nav" role="alert" data-module="error-summary">
        <div class="alert-border"></div>
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
        <div class="form-group" id="newsletter-emailaddress">
            <label class="form-label" for="i_newsform_email">Afmeld e-mailadresse</label>
            <span class="form-error-message d-none" id="i_newsform_email-error"></span>
            <input type="email" class="form-input" id="i_newsform_email" autocomplete="email" required>
        </div>
        <input type="submit" class="button button-primary mt-5" value="Afmeld" id="newsletter-submit">
    </form>
    <p class="mt-9 pt-0 mb-9">
        {% include links/internal-link.html linktext="Tilmeld en e-mailadresse her" %}
    </p>
</div>
