---
permalink: /faellesskab/nyhedsmail/afmeld/
parentlink: /omdesignsystemet/nyhedsmail/
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
    <form method="post" action="." id="newsform">
        <div class="form-group" id="newsletter-emailaddress" hidden>
            <label class="form-label" for="i_newsform_email">Afmeld e-mailadresse</label>
            <span class="form-error-message d-none"></span>
            <input type="email" class="form-input" id="i_newsform_email" name="i_email" autocomplete="email" required>
        </div>
        <button id="afmeld" class="button button-primary mt-5" type="button" hidden>Afmeld</button>
    </form>
    <p class="mt-9 pt-0 mb-9">
        <a href="/faellesskab/nyhedsmail/">Tilmeld en <span class='nowrap'>e-mailadresse</span> her</a>
    </p>
</div>
