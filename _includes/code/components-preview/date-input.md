--- 
permalink: /preview-components/date-input.html
layout: iframed 
title: Date-input.html
---
<div class="container">

    <!-- Start code: Indsendelsesfrist -->

    <div class="form-group  ">
        <fieldset>
            <legend><label class="form-label">Indsendelsesfrist</label>
                <span class="form-hint">For eksempel: 05 12 2018</span>
            </legend>
            <span class="form-error-message  d-none"
                id="form-error-message-input-error" role="alert"></span>
            <div class="date-group js-calendar-group mt-3">
                <div class="form-group form-group-day">
                    <label class="form-label" for="date-day">Dag</label>
                    <input class="form-input js-calendar-day-input"
                        id="date-day" value="" type="tel" data-min="1"
                        data-max="31" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv dag på måneden som tal" />
                </div>
                <div class="form-group form-group-month">
                    <label class="form-label"
                        for="date-month">Måned</label>
                    <input class="form-input js-calendar-month-input"
                        id="date-month" value="" type="tel" data-min="1"
                        data-max="12" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv månedens nummer" />
                </div>
                <div class="form-group form-group-year ">
                    <label class="form-label" for="date-year">År</label>
                    <input class="form-input js-calendar-year-input"
                        id="date-year" value="" type="tel" data-min="1900"
                        data-max="3000" maxlength="4"
                        pattern="^[0-9]{0,4}$"
                        data-input-regex="^[0-9]{0,4}$"
                        title="Indskriv årstal" />
                </div>

            </div>
        </fieldset>
    </div>

    <!-- End code: Indsendelsesfrist -->

    <!-- Start code: Datoangivelse med fejl -->

    <div class="form-group  form-error  ">
        <fieldset>
            <legend><label class="form-label">Datoangivelse med
                    fejl</label>
                <span class="form-hint">For eksempel: 05 12 2018</span>
            </legend>
            <span class="form-error-message "
                id="form-error-message-input-error2" role="alert">Skriv en
                kort fejlmeddelelse, der hjælper brugeren videre</span>
            <div class="date-group js-calendar-group mt-3">
                <div class="form-group form-group-day">
                    <label class="form-label" for="date-day2">Dag</label>
                    <input class="form-input js-calendar-day-input"
                        id="date-day2" value="01" type="tel" data-min="1"
                        data-max="31" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv dag på måneden som tal" />
                </div>
                <div class="form-group form-group-month">
                    <label class="form-label"
                        for="date-month2">Måned</label>
                    <input class="form-input js-calendar-month-input"
                        id="date-month2" value="12" type="tel" data-min="1"
                        data-max="12" maxlength="2" pattern="^[0-9]{0,2}$"
                        data-input-regex="^[0-9]{0,2}$"
                        title="Indskriv månedens nummer" />
                </div>
                <div class="form-group form-group-year ">
                    <label class="form-label" for="date-year2">År</label>
                    <input class="form-input js-calendar-year-input"
                        id="date-year2" value="2030" type="tel"
                        data-min="1900" data-max="3000" maxlength="4"
                        pattern="^[0-9]{0,4}$"
                        data-input-regex="^[0-9]{0,4}$"
                        title="Indskriv årstal" />
                </div>

            </div>
        </fieldset>
    </div>

    <!-- End code: Datoangivelse med fejl -->

</div>