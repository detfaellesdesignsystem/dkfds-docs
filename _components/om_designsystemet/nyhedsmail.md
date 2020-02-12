---
permalink: /omdesignsystemet/nyhedsmail/
layout: styleguide
title: Nyhedsmail
category: Om_designsystemet_category
subcategory: Om designsystemet
description: "Tilmeld dig nyheder fra Det Fælles Designsystem"
---
   
<div class="alert alert-success d-none" id="newsletter-message" role="alert">
    <div class="alert-body">
        <p class="alert-text"></p>
    </div>
</div>
<div class="newsletter-container">
    <form method="post" action="." id="newsform">
        <div class="form-group">
            <label for="i_newsform_email" class="form-label">E-mailadresse</label>
            <span class="form-error-message d-none"></span>
            <input type="text" class="form-input" id="i_newsform_email" name="i_email" value="" />
            <input type="hidden" id="i_newsform_navn" name="i_navn" value="" />
        </div>
        <div class="form-group">
            <fieldset>
                <legend class="h4 mb-0">Vælg mails</legend>
                <span class="form-error-message d-none"></span>
                <ul class="nobullet-list" id="subscriptions">
                </ul>
            </fieldset>
        </div>
        <button id="Tilmeld" class="button button-primary mt-9" type="button" name="Tilmeld" title="Tilmeld" value="Tilmeld">Tilmeld</button>
        <p class="mt-7 pt-0">
            <a href="/omdesignsystemet/nyhedsmail/afmeld/">Afmeld</a>
        </p>
    </form>
</div>
