--- 
permalink: /preview-components/checkbox-error.html
layout: example-contained 
title: Checkbox-error.html
---
<div class="form-group form-error">
    <fieldset>
        <legend class="h5">Tjekboks med fejl</legend>
        <span class="form-error-message" role="alert">Hjælpsom
            fejlbesked</span>
        <ul class="nobullet-list">
            <li>
                <input id="checkboxerror1" type="checkbox"
                    name="checkboxerror" value="1"
                    class="form-checkbox  checkbox-large " />
                <label for="checkboxerror1" class="">Tjekboks 1</label>
            </li>
            <li>
                <input id="checkboxerror2" type="checkbox"
                    name="checkboxerror[]" value="2"
                    class="form-checkbox  checkbox-large " />
                <label for="checkboxerror2" class="">Tjekboks 2</label>
            </li>
            <li>
                <input id="checkboxerror3" type="checkbox"
                    name="checkboxerror[]" value="3"
                    class="form-checkbox  checkbox-large " />
                <label for="checkboxerror3" class="">Tjekboks 3</label>
            </li>
        </ul>
    </fieldset>
</div>