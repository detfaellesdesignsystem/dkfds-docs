--- 
permalink: /preview-components/checkbox-toggle-content.html
layout: iframed 
title: Checkbox-toggle-content.html
---
<div class="container">

    <div class="form-group ">
        <input id="id-checkbox1" type="checkbox" name="Name" value="Value"
            class="form-checkbox  checkbox-large js-checkbox-toggle-content"
            data-js-target='#collapse-check1'
            aria-controls='collapse-check1' aria-expanded='false'>
        <label for="id-checkbox1" class="">Checkbox viser indhold</label>
    </div>

    <div id="collapse-check1" aria-hidden="true"
        class="box-border-l collapsed">
        <div class="py-4">
            <p>Dette indhold bliver vist når checkboxen er valgt.</p>
        </div>
    </div>

    <div class="form-group ">
        <input id="id-checkbox2" type="checkbox" name="Name" value="Value"
            class="form-checkbox  checkbox-large js-checkbox-toggle-content"
            checked data-js-target='#collapse-check2'
            aria-controls='collapse-check2' aria-expanded='false'>
        <label for="id-checkbox2" class="">Checkbox viser indhold</label>
    </div>

    <div id="collapse-check2" aria-hidden="true"
        class="box-border-l collapsed">
        <div class="py-4">
            <p>Dette indhold bliver vist når checkboxen er valgt.</p>
        </div>
    </div>
</div>