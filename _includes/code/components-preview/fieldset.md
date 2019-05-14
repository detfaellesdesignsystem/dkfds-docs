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
                                <label for="kontakt-email" class="">Pr.
                                    e-mail </label>
                            </div>

                        </li>
                    </ul>
                </fieldset>
            </div>
            <div class="form-group">
                <fieldset>
                    <legend>
                        <h2 class="h4">Hvornår på dagen vil det passe
                            bedst, at vi kontakter dig?</h2>
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
                                <label for="aften" class="">Om
                                    aftenen</label>
                            </div>

                        </li>
                    </ul>
                </fieldset>
            </div>
            <div class="form-group">
                <fieldset>
                    <legend>
                        <h2 class="h4">Personlige oplysninger</h2>
                    </legend>

                    <div class="form-group">
                        <fieldset>
                            <legend><label
                                    class="form-label icon-link">Indsendelsesfrist</label>
                            </legend>
                            <span class="form-hint">For eksempel: 05 12
                                2018</span>
                            <span class="form-error-message"
                                id="form-error-message-input-error"
                                role="alert"></span>
                            <div class="date-group js-calendar-group mt-3">
                                <div class="form-group form-group-day">
                                    <label class="form-label"
                                        for="date_of_day_2">Dag</label>
                                    <input
                                        class="form-input js-calendar-day-input"
                                        id="date_of_day_2" type="tel"
                                        min="1" max="31" maxlength="2"
                                        pattern="^[0-9]{0,2}$"
                                        data-input-regex="^[0-9]{0,2}$"
                                        title="Indskriv dag på månenden som tal">
                                </div>
                                <div class="form-group form-group-month">
                                    <label class="form-label"
                                        for="date_of_month_1">Måned</label>
                                    <input
                                        class="form-input js-calendar-month-input"
                                        id="date_of_month_1" type="tel"
                                        min="1" max="12" maxlength="2"
                                        pattern="^[0-9]{0,2}$"
                                        data-input-regex="^[0-9]{0,2}$"
                                        title="Indskriv månedens nummer">
                                </div>
                                <div class="form-group form-group-year ">
                                    <label class="form-label"
                                        for="date_of_year_3">År</label>
                                    <input
                                        class="form-input js-calendar-year-input"
                                        id="date_of_year_3" type="tel"
                                        min="1900" max="3000" maxlength="4"
                                        pattern="^[0-9]{0,4}$"
                                        data-input-regex="^[0-9]{0,4}$"
                                        title="Indskriv årstal">
                                </div>

                            </div>
                        </fieldset>
                    </div>

                    <div class="form-group">
                        <fieldset>
                            <legend>
                                <h3 class="h5">Bor du i Odense?</h3>
                            </legend>
                            <ul class="nobullet-list">
                                <li>

                                    <div class="form-group ">
                                        <input id="odense-ja" type="radio"
                                            name="odense" value="odense-ja"
                                            class="form-radio  radio-large ">
                                        <label for="odense-ja" class="">Ja
                                        </label>
                                    </div>

                                </li>
                                <li>

                                    <div class="form-group ">
                                        <input id="odense-nej" type="radio"
                                            name="odense"
                                            value="odense-nej"
                                            class="form-radio  radio-large ">
                                        <label for="odense-nej"
                                            class="">Nej </label>
                                    </div>

                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </fieldset>
            </div>
            <button class="button button-primary mt-9"> Gem oplysninger
            </button>

        </fieldset>
    </form>
</div>