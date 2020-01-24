--- 
permalink: /preview-components/radiobutton-error.html
layout: example-contained 
title: Radiobutton-error.html
---
<div class="form-group form-error">
    <fieldset>
        <legend class="h5">Radioknap med fejl</legend>
        <span class="form-error-message" role="alert">Hjælpsom
            fejlbesked</span>
        <ul class="nobullet-list">
            <li>
                <input id="weekly" type="radio" name="often-pay"
                    value="weekly" class="form-radio  radio-large " />
                <label for="weekly" id="form-label-weekly"
                    class="">Ugentligt </label>

            </li>
            <li>
                <input id="fortnightly" type="radio" name="often-pay"
                    value="fortnightly" class="form-radio  radio-large " />
                <label for="fortnightly" id="form-label-fortnightly"
                    class="">Hver fjortende dag </label>

            </li>
            <li>
                <input id="monthly" type="radio" name="often-pay"
                    value="monthly" class="form-radio  radio-large " />
                <label for="monthly" id="form-label-monthly"
                    class="">Månedligt </label>

            </li>
        </ul>
    </fieldset>
</div>