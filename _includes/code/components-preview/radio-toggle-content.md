--- 
permalink: /preview-components/radio-toggle-content.html
layout: iframed 
title: Radio-toggle-content.html
---
<div class="container js-radio-toggle-group">
    <fieldset>
        <legend>Vælg en radioknap</legend>

        <div class="form-group ">
            <input id="id-radio1" type="radio" name="radio-group1"
                value="Value" class="form-radio  radio-large " checked
                data-js-target='#collapse-radio1'
                aria-controls='collapse-radio1' aria-expanded='false'>
            <label for="id-radio1" class="">Radioknap viser indhold <span
                    class="sr-only">Udfyld informationer
                    herunder</span></label>
        </div>

        <div id="collapse-radio1" aria-hidden="true"
            class="box-border-l collapsed">
            <div class="py-4">

                <div class="form-group">
                    <label class="form-label " for="textinput1">Inputfelt
                        med label</label>

                    <input class="form-input  input-width-m "
                        placeholder="" id="textinput1" value=""
                        name="text1" type="text">
                </div>

            </div>
        </div>

        <div class="form-group ">
            <input id="id-radio2" type="radio" name="radio-group1"
                value="Value" class="form-radio  radio-large "
                data-js-target='#collapse-radio2'>
            <label for="id-radio2" class="">Radioknap viser indhold <span
                    class="sr-only">Udfyld informationer
                    herunder</span></label>
        </div>

        <div id="collapse-radio2" aria-hidden="true"
            class="box-border-l collapsed">
            <div class="py-4">

                <div class="form-group">
                    <label class="form-label " for="textinput2">Inputfelt
                        med label</label>

                    <input class="form-input  input-width-m "
                        placeholder="" id="textinput2" value=""
                        name="text2" type="text">
                </div>

            </div>
        </div>
    </fieldset>
</div>