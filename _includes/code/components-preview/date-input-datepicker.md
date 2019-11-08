--- 
permalink: /preview-components/date-input-datepicker.html
layout: iframed 
title: Date-input-datepicker.html
---
<div class="container">

    <div class="form-group  ">
        <fieldset>
            <legend><label class="form-label">Indsendelsesfrist</label>
                <span class="form-hint">For eksempel: 05 12 2018</span>
            </legend>

            <div class="date-group js-calendar-group mt-3">
                <div class="form-group form-group-day">
                    <label class="form-label" for="date-day">Dag</label>
                    <input class="form-input js-calendar-day-input"
                        id="date-day" value="" type="tel" min="1" max="31"
                        maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv dag på månenden som tal" />
                </div>
                <div class="form-group form-group-month">
                    <label class="form-label"
                        for="date-month">Måned</label>
                    <input class="form-input js-calendar-month-input"
                        id="date-month" value="" type="tel" min="1"
                        max="12" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv månedens nummer" />
                </div>
                <div class="form-group form-group-year ">
                    <label class="form-label" for="date-year">År</label>
                    <input class="form-input js-calendar-year-input"
                        id="date-year" value="" type="tel" min="1900"
                        max="3000" maxlength="4" pattern="^[0-9]{0,4}$"
                        data-input-regex="^[0-9]{0,4}$"
                        title="Indskriv årstal" />
                </div>

                <button
                    class="button-unstyled button-open-calendar js-calendar-datepicker">
                    <span class="sr-only">Åben kalenderen</span>
                    <svg class="icon-svg" aria-hidden="true" focusable="false" tabindex="-1"><use xlink:href="#calendar"></use></svg>
                </button>

            </div>
        </fieldset>
    </div>

</div>