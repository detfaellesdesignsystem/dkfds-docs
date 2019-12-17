--- 
permalink: /preview-components/text-input.html
layout: iframed 
title: Text-input.html
---
<div class="container">

    <div class="form-group">
        <label class="form-label " for="input-type-text"
            id="form-label-input-type-text">Inputfelt med label</label>
        <span class="form-hint" id="input-hint-message-input-type-text">Fx
            12345678</span>

        <input class="form-input   " placeholder="" id="input-type-text"
            value="" name="input-type-text" type="text"
            aria-labelledby="form-label-input-type-text input-hint-message-input-type-text">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-focus"
            id="form-label-input-focus">Inputfelt i fokus</label>

        <input class="form-input  focus " placeholder="" id="input-focus"
            value="" name="input-focus" type="text">
    </div>

    <div class="form-group form-error">
        <label class="form-label " for="form-error"
            id="form-label-form-error">Inputfelt med fejl</label>
        <span class="form-hint" id="input-hint-message-form-error">Fx
            12345678</span>
        <span class="form-error-message" id="form-error-message-form-error"
            role="alert">Hjælpsom fejlbesked</span>
        <input class="form-input   " placeholder="" id="form-error"
            value="" name="form-error" type="text"
            aria-describedby="form-error-message-form-error"
            aria-labelledby="form-label-form-error input-hint-message-form-error">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-disabled"
            id="form-label-input-disabled">Inputfelt som er låst</label>

        <input class="form-input   " placeholder="" id="input-disabled"
            value="" name="input-disabled" type="text" disabled="disabled">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-optional"
            id="form-label-input-optional">Inputfelt som er valgfrit<span
                class="weight-normal"> (frivilligt)</span></label>

        <input class="form-input   " placeholder="" id="input-optional"
            value="" name="input-optional" type="text">
    </div>

    <div class="form-group">
        <label class="form-label " for="input-readonly"
            id="form-label-input-readonly">Inputfelt som er
            readonly</label>

        <input class="form-input   " placeholder="" id="input-readonly"
            value="012345-6789" name="input-readonly" type="text" readonly>
    </div>

</div>