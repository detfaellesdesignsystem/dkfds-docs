--- 
permalink: /preview-components/fieldset-complex.html
layout: iframed 
title: Fieldset-complex.html
---
<div class="container">
    <h1 class="h2">Dine kontaktoplysninger</h1>
    <form>

        <div class="form-group">
            <label class="form-label " for="fnavn">Fornavn</label>

            <input class="form-input   " placeholder="" id="fnavn" value=""
                name="fnavn" type="text">
        </div>

        <div class="form-group">
            <label class="form-label " for="enavn">Efternavn</label>

            <input class="form-input   " placeholder="" id="enavn" value=""
                name="enavn" type="text">
        </div>

        <div class="form-group">
            <label class="form-label " for="email">E-mail adresse</label>

            <input class="form-input   " placeholder="" id="email" value=""
                name="email" type="text">
        </div>

        <div class="form-group">
            <label class="form-label " for="telefon">Telefonnr.</label>

            <input class="form-input   " placeholder="" id="telefon"
                value="" name="telefon" type="text">
        </div>

        <div class="form-group">
            <fieldset>
                <legend class="h4">Hvordan vil du helst kontaktes?</legend>
                <ul class="nobullet-list">
                    <li>

                        <input id="kontakt-telefon" type="radio"
                            name="kontakt" value="kontakt-telefon"
                            class="form-radio  radio-large " />
                        <label for="kontakt-telefon" class="">Pr. telefon
                        </label>

                    </li>
                    <li>

                        <input id="kontakt-email" type="radio"
                            name="kontakt" value="kontakt-email"
                            class="form-radio  radio-large " />
                        <label for="kontakt-email" class="">Pr. e-mail
                        </label>

                    </li>
                </ul>
            </fieldset>
        </div>
        <div class="form-group">
            <fieldset>
                <legend class="h4">Hvornår på dagen vil det passe bedst, at
                    vi kontakter dig?</legend>
                <ul class="nobullet-list">
                    <li>

                        <input id="morgen" type="checkbox"
                            name="tidspunkt[]" value="morgen"
                            class="form-checkbox  checkbox-large " />
                        <label for="morgen" class="">Om morgenen</label>

                    </li>
                    <li>

                        <input id="middag" type="checkbox"
                            name="tidspunkt[]" value="middag"
                            class="form-checkbox  checkbox-large " />
                        <label for="middag" class="">Ved middagstid</label>

                    </li>
                    <li>

                        <input id="eftermiddag" type="checkbox"
                            name="tidspunkt[]" value="eftermiddag"
                            class="form-checkbox  checkbox-large " />
                        <label for="eftermiddag" class="">Om
                            eftermiddagen</label>

                    </li>
                    <li>

                        <input id="aften" type="checkbox"
                            name="tidspunkt[]" value="aften"
                            class="form-checkbox  checkbox-large " />
                        <label for="aften" class="">Om aftenen</label>

                    </li>
                </ul>
            </fieldset>
        </div>
        <div class="form-group">
            <fieldset>
                <legend class="h4">Personlige oplysninger</legend>

                <div class="form-group  mt-0">
                    <fieldset>
                        <legend><label
                                class="form-label">Indsendelsesfrist</label>
                            <span class="form-hint">For eksempel: 05 12
                                2018</span></legend>
                        <span class="form-error-message  d-none"
                            id="form-error-message-input-error"
                            role="alert"></span>
                        <div class="date-group js-calendar-group mt-3">
                            <div class="form-group form-group-day">
                                <label class="form-label"
                                    for="date-day">Dag</label>
                                <input
                                    class="form-input js-calendar-day-input"
                                    id="date-day" value="" type="tel"
                                    data-min="1" data-max="31"
                                    maxlength="2" pattern="^[0-9]{0,2}$"
                                    data-input-regex="^[0-9]{0,2}$"
                                    title="Indskriv dag på månenden som tal" />
                            </div>
                            <div class="form-group form-group-month">
                                <label class="form-label"
                                    for="date-month">Måned</label>
                                <input
                                    class="form-input js-calendar-month-input"
                                    id="date-month" value="" type="tel"
                                    data-min="1" data-max="12"
                                    maxlength="2" pattern="^[0-9]{0,2}$"
                                    data-input-regex="^[0-9]{0,2}$"
                                    title="Indskriv månedens nummer" />
                            </div>
                            <div class="form-group form-group-year ">
                                <label class="form-label"
                                    for="date-year">År</label>
                                <input
                                    class="form-input js-calendar-year-input"
                                    id="date-year" value="" type="tel"
                                    data-min="1900" data-max="3000"
                                    maxlength="4" pattern="^[0-9]{0,4}$"
                                    data-input-regex="^[0-9]{0,4}$"
                                    title="Indskriv årstal" />
                            </div>

                        </div>
                    </fieldset>
                </div>

                <div class="form-group">
                    <fieldset>
                        <legend class="h5">Bor du i Odense?</legend>
                        <ul class="nobullet-list">
                            <li>

                                <input id="odense-ja" type="radio"
                                    name="odense" value="odense-ja"
                                    class="form-radio  radio-large " />
                                <label for="odense-ja" class="">Ja </label>

                            </li>
                            <li>

                                <input id="odense-nej" type="radio"
                                    name="odense" value="odense-nej"
                                    class="form-radio  radio-large " />
                                <label for="odense-nej" class="">Nej
                                </label>

                            </li>
                        </ul>
                    </fieldset>
                </div>
            </fieldset>
        </div>
        <button class="button button-primary mt-9"> Gem oplysninger
        </button>
    </form>
</div>