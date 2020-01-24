--- 
permalink: /preview-components/checkbox-collapse.html
layout: example-contained 
title: Checkbox-collapse.html
---
<div class="form-group">

    <input id="id-checkbox1" type="checkbox" name="checkbox1" value="1"
        class="form-checkbox  checkbox-large js-checkbox-toggle-content"
        data-js-target='#collapse-check1' aria-controls='collapse-check1'
        aria-expanded='false' />
    <label for="id-checkbox1" class="">Tjekboks viser indhold</label>

    <div id="collapse-check1" aria-hidden="true"
        class="box-border-l collapsed">
        <div class="py-4">
            <p>Dette indhold bliver vist når tjekboksen er valgt.</p>
        </div>
    </div>
</div>