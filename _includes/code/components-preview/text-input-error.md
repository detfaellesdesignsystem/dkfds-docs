--- 
permalink: /preview-components/text-input-error.html
layout: example-contained 
title: Text-input-error.html
---
<div class="form-group form-error">
    <label class="form-label " for="form-error" id="form-label-form-error">
        Inputfelt med fejl
    </label>
    <span class="form-hint" id="input-hint-message-form-error">
        Fx 12345678
    </span>
    <span class="form-error-message" id="form-error-message-form-error"
        role="alert">
        Hjælpsom fejlbesked
    </span>
    <input class="form-input   " required id="form-error" value=""
        name="form-error" type="text" aria-invalid="true"
        aria-describedby="form-error-message-form-error"
        aria-labelledby="form-label-form-error input-hint-message-form-error">
</div>