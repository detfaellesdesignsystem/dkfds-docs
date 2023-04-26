---
permalink: /faellesskab/nyhedsmail/afmeld/
parentlink: /faellesskab/nyhedsmail/
redirect_from:
- /omdesignsystemet/nyhedsmail/afmeld/
layout: styleguide
title: Afmeld nyhedsbrev
category: Faellesskab_category
subcategory: Fællesskab
description: "Afmeld nyhedsbrev fra Det Fælles Designsystem"
tags:
---
   
<div class="alert mt-5" id="newsletter-alert" role="alert" hidden>
    <div class="alert-body">
        <h2 class="alert-heading"></h2>
        <div class="alert-text"></div>
    </div>
</div>
<div class="newsletter-container mt-5">
    <form action="https://det-faelles-designsystem.uxmail.io/handlers/post/" method="post" id="newsform" novalidate>
        <input type="hidden" name="action" value="unsubscribe">
        <input type="hidden" name="lists" value="82268">
        <input type="hidden" name="failure_url" value="" id="failure_url" />
        <input type="hidden" name="success_url" value="" id="success_url" />
        <div class="form-group" id="newsletter-emailaddress">
            <label class="form-label" for="i_newsform_email">Afmeld e-mailadresse</label>
            <span class="form-error-message d-none"></span>
            <input type="email" class="form-input" id="i_newsform_email" name="email_address" autocomplete="email" required>
        </div>
        <input type="submit" class="button button-primary mt-5" value="Afmeld" id="newsletter-submit">
    </form>
    <p class="mt-9 pt-0 mb-9">
        <a href="/faellesskab/nyhedsmail/">Tilmeld en <span class='nowrap'>e-mailadresse</span> her</a>
    </p>
</div>
