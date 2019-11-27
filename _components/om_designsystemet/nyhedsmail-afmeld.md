---
permalink: /omdesignsystemet/nyhedsmail/afmeld/
parentlink: /omdesignsystemet/nyhedsmail/
layout: styleguide
title: Afmeld nyhedsmail
category: Om_designsystemet_category
subcategory: Om designsystemet
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
            <input type="hidden" id="i_newsform_segment" name="i_segment" value="" />
        </div>
        <button id="Frameld" class="button button-primary mt-9" type="button" name="Tilmeld" title="Tilmeld" value="Tilmeld">Afmeld</button>
        <p class="mt-7 pt-0">
        <a href="/omdesignsystemet/nyhedsmail/">Tilmeld</a>
        </p>
    </form>
</div>
