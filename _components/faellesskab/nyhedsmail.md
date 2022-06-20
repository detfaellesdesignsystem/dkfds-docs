---
permalink: /faellesskab/nyhedsmail/
redirect_from:
- /omdesignsystemet/nyhedsmail/
layout: styleguide
title: Nyhedsmail
category: Faellesskab_category
subcategory: Fællesskab
description: "Tilmeld dig nyheder fra Det Fælles Designsystem"
mailalert: true
---
<div class="newsletter-container">
    <form method="post" action="." id="newsform">
        <div class="form-group">
            <label for="i_newsform_email" class="form-label">Tilmeld mailadresse</label>
            <span class="form-error-message mb-3"></span>
            <input type="text" class="form-input" id="i_newsform_email" name="i_email" value="" required />
            <input type="hidden" id="i_newsform_navn" name="i_navn" value="" />
        </div>
        <div class="form-group">
            <fieldset>
                <legend class="h4 mb-0">Vælg mails</legend>
                <span class="form-error-message mb-3"></span>
                <ul class="nobullet-list d-none" id="subscriptions">
                </ul>
            </fieldset>
        </div>
        <div class="form-group" id="samtykke-group">
            <fieldset>
                <legend class="h5">Samtykke</legend>
                <span class="form-error-message"></span>
                <input id="samtykke-check" type="checkbox" name="samtykke-check" value="1" class="form-checkbox checkbox-large" required />
                <label for="samtykke-check">Jeg giver hermed samtykke til at Erhvervsstyrelsen må opbevare min mailadresse, indtil jeg selv afmelder mig det/de valgte nyhedsmails (abonnementer).</label>
                <p><a href="/privatlivspolitik-cookies/" target="_blank" class="icon-link">Læs om vores behandling af dine personoplysninger og dine rettigheder<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></p>
            </fieldset>
        </div>
        <button id="Tilmeld" class="button button-primary mt-8" type="button" name="Tilmeld" title="Tilmeld" value="Tilmeld">Tilmeld</button>
        <p class="mt-7 pt-0">
            <a href="/faellesskab/nyhedsmail/afmeld/">Afmeld en mailadresse her</a>
        </p>
    </form>
</div>
