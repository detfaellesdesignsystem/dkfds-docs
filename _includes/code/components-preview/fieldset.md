--- 
permalink: /preview-components/fieldset.html
layout: iframed 
title: Fieldset.html
---
<div class="container">
    <form>
        <fieldset>
            <legend>
                <h1 class="h2">Dine kontaktoplysninger</h1>
            </legend>

            <div class="form-group">
                <label class="form-label " for="fnavn">Fornavn</label>

                <input class="form-input   " placeholder="" id="fnavn"
                    value="" name="fnavn" type="text">
            </div>

            <div class="form-group">
                <label class="form-label " for="enavn">Efternavn</label>

                <input class="form-input   " placeholder="" id="enavn"
                    value="" name="enavn" type="text">
            </div>

            <div class="form-group">
                <label class="form-label " for="email">E-mail
                    adresse</label>

                <input class="form-input   " placeholder="" id="email"
                    value="" name="email" type="text">
            </div>

            <div class="form-group">
                <label class="form-label " for="telefon">Telefonnr.</label>

                <input class="form-input   " placeholder="" id="telefon"
                    value="" name="telefon" type="text">
            </div>

        </fieldset>

        <div class="form-group">
            <fieldset>
                <legend>
                    <h2 class="h4">Hvordan vil du helst kontaktes?</h2>
                </legend>
                <ul class="nobullet-list">
                    <li>

                        <div class="form-group ">
                            <input id="kontakt-telefon" type="radio"
                                name="kontakt" value="kontakt-telefon"
                                class="form-radio  radio-large ">
                            <label for="kontakt-telefon" class="">Pr.
                                telefon </label>
                        </div>

                    </li>
                    <li>

                        <div class="form-group ">
                            <input id="kontakt-email" type="radio"
                                name="kontakt" value="kontakt-email"
                                class="form-radio  radio-large ">
                            <label for="kontakt-email" class="">Pr. e-mail
                            </label>
                        </div>

                    </li>
                </ul>
            </fieldset>
        </div>
        <div class="form-group">
            <fieldset>
                <legend>
                    <h2 class="h4">Hvornår på dagen vil det passe bedst, at
                        vi kontakter dig?</h2>
                </legend>
                <ul class="nobullet-list">
                    <li>

                        <div class="form-group ">
                            <input id="morgen" type="checkbox"
                                name="tidspunkt[]" value="morgen"
                                class="form-checkbox  checkbox-large ">
                            <label for="morgen" class="">Om
                                morgenen</label>
                        </div>

                    </li>
                    <li>

                        <div class="form-group ">
                            <input id="middag" type="checkbox"
                                name="tidspunkt[]" value="middag"
                                class="form-checkbox  checkbox-large ">
                            <label for="middag" class="">Ved
                                middagstid</label>
                        </div>

                    </li>
                    <li>

                        <div class="form-group ">
                            <input id="eftermiddag" type="checkbox"
                                name="tidspunkt[]" value="eftermiddag"
                                class="form-checkbox  checkbox-large ">
                            <label for="eftermiddag" class="">Om
                                eftermiddagen</label>
                        </div>

                    </li>
                    <li>

                        <div class="form-group ">
                            <input id="aften" type="checkbox"
                                name="tidspunkt[]" value="aften"
                                class="form-checkbox  checkbox-large ">
                            <label for="aften" class="">Om aftenen</label>
                        </div>

                    </li>
                </ul>
            </fieldset>
        </div>

        <div class="form-group mt-9">
            <button class="button button-primary"> Gem oplysninger
            </button>
        </div>
    </form>
</div>