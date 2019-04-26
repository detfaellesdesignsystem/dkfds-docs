--- 
permalink: /preview-components/text-area.html
layout: iframed 
title: Text-area.html
---
<div class="container">

    <div class="form-group">
        <label class="form-label " for="input-area">Tekstområde med
            label</label>

        <textarea class="form-input " rows="5" placeholder="" id="input-area" name="input-area" type="text" ></textarea>
    </div>

    <div class="form-group form-error">
        <label class="form-label " for="input-error">Tekstområde med
            fejlbesked</label>

        <span class="form-error-message"
            id="form-error-message-input-error" role="alert">Hjælpsom
            fejlbesked</span>
        <textarea class="form-input " rows="5" placeholder="" id="input-error" name="input-error" type="text" aria-describedby="form-error-message-input-error"></textarea>
    </div>

</div>