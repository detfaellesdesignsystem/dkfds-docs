--- 
permalink: /preview-components/checkbox.html
layout: example-contained 
title: Checkbox.html
---
<div class="container">

    <!-- Example of small checkbox -->
    <div class="form-group">
        <fieldset>
            <legend class="h5">Lille tjekboks</legend>
            <ul class="nobullet-list">

                <li>

                    <input id="Unchecked" type="checkbox" name="unchecked"
                        value="unchecked" class="form-checkbox   " />
                    <label for="Unchecked" class="">Ikke-udfyldt
                        tjekboks</label>

                </li>

                <li>

                    <input id="Checked" type="checkbox" name="checked"
                        value="checked" class="form-checkbox   " checked />
                    <label for="Checked" class="">Udfyldt tjekboks</label>

                </li>

                <li>

                    <input id="disabled" type="checkbox" name="disabled"
                        value="disabled" class="form-checkbox   "
                        disabled />
                    <label for="disabled" class="">Inaktiv ikke-udfyldt
                        tjekboks (disabled)</label>

                </li>

                <li>

                    <input id="disabled-checked" type="checkbox"
                        name="disabled-checked" value="disabled-checked"
                        class="form-checkbox   " disabled checked />
                    <label for="disabled-checked" class="">Inaktiv udfyldt
                        tjekboks (disabled)</label>

                </li>

                <li>

                    <input id="fokus" type="checkbox" name="Focus"
                        value="fokus" class="form-checkbox focus  " />
                    <label for="fokus" class="">Ikke-udfyldt tjekboks i
                        fokus</label>

                </li>

            </ul>
        </fieldset>
    </div>

    <!-- Example of large checkbox (recommended) -->
    <div class="form-group">
        <fieldset>
            <legend class="h5">Stor tjekboks (anbefalet)</legend>
            <ul class="nobullet-list">

                <li>

                    <input id="Unchecked-large" type="checkbox"
                        name="unchecked-large" value="unchecked-large"
                        class="form-checkbox  checkbox-large " />
                    <label for="Unchecked-large" class="">Stor ikke-udfyldt
                        tjekboks</label>

                </li>

                <li>

                    <input id="Checked-large" type="checkbox"
                        name="checked-large" value="checked-large"
                        class="form-checkbox  checkbox-large " checked />
                    <label for="Checked-large" class="">Stor udfyldt
                        tjekboks</label>

                </li>

                <li>

                    <input id="disabled-large" type="checkbox"
                        name="disabled-large" value="disabled-large"
                        class="form-checkbox  checkbox-large " disabled />
                    <label for="disabled-large" class="">Stor inaktiv
                        ikke-udfyldt tjekboks (disabled)</label>

                </li>

                <li>

                    <input id="disabled-checked-large" type="checkbox"
                        name="disabled-checked-large"
                        value="disabled-checked-large"
                        class="form-checkbox  checkbox-large " disabled
                        checked />
                    <label for="disabled-checked-large" class="">Stor
                        inaktiv udfyldt tjekboks (disabled)</label>

                </li>

                <li>

                    <input id="fokus-large" type="checkbox"
                        name="fokus-large" value="fokus-large"
                        class="form-checkbox focus checkbox-large " />
                    <label for="fokus-large" class="">Stor ikke-udfyldt
                        tjekboks i fokus</label>

                </li>

            </ul>
        </fieldset>
    </div>

    <!-- Example with error message -->
    <div class="form-group form-error">
        <fieldset>
            <legend class="h5">Tjekboks med fejl</legend>
            <span class="form-error-message" role="alert">Hjælpsom
                fejlbesked</span>
            <ul class="nobullet-list">

                <li>

                    <input id="car" type="checkbox" name="transport[]"
                        value="car"
                        class="form-checkbox  checkbox-large " />
                    <label for="car" class="">Bil</label>

                </li>

                <li>

                    <input id="bus" type="checkbox" name="transport[]"
                        value="bus"
                        class="form-checkbox  checkbox-large " />
                    <label for="bus" class="">Bus</label>

                </li>

                <li>

                    <input id="train" type="checkbox" name="transport[]"
                        value="train"
                        class="form-checkbox  checkbox-large " />
                    <label for="train" class="">Tog</label>

                </li>

                <li>

                    <input id="plane" type="checkbox" name="transport[]"
                        value="plane"
                        class="form-checkbox  checkbox-large " />
                    <label for="plane" class="">Fly</label>

                </li>

                <li>

                    <input id="ferry" type="checkbox" name="transport[]"
                        value="ferry"
                        class="form-checkbox  checkbox-large " />
                    <label for="ferry" class="">Færge</label>

                </li>

            </ul>
        </fieldset>
    </div>
</div>