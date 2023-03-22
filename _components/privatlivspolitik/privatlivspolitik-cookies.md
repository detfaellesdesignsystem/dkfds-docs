---
title: Brug af cookies på Det Fælles Designsystem (FDS)
parent: Privatlivspolitik-Cookies
order: 20
headingClass: ''
component: ''
componentTitle: ''
componentCode: ''

---
<h3>Hvad er en cookie?</h3>

En cookie er et lille stykke kode, der bliver gemt på din computer, telefon eller hvad du bruger til at surfe på internettet med. Cookies har mange anvendelsesmuligheder. 

<h3>Formålet med cookies på FDS</h3>
På FDS bruges cookies til to formål:
- Teknisk nødvendige cookies bruges til at huske, hvilket tema der skal anvendes på FDS, samt hvorvidt du har accepteret eller afvist statistiske cookies. Teknisk nødvendige cookies sættes altid ved besøg på FDS.
- Statistiske cookies bruges til at samle anonyme statistiske data om brugernes adfærd på FDS. Statistikken kan anvendes til at forbedre FDS, fordi vi kan finde uhensigtsmæssigheder og se, hvilke dele af FDS brugerne anvender. Vi kan desuden bruge data til at se, om FDS opfylder de mål, der er sat for sitet. Disse cookies sættes først efter du har fået information om formålet med dem og har accepteret dem.

<h3>Cookies som er tekniske forudsætninger</h3>

Teknisk nødvendige cookies sikrer, at FDS fungerer korrekt. 

Ved besøg på FDS sættes der en cookie, som husker det anvendte tema (enten "Borger.dk" eller "Virk"). Dette tema sættes tilfældigt ved første besøg og kan efterfølgende ændres nederst på siden i footeren.

Der sættes endnu en cookie, hvis du i cookiemeddelelsen enten vælger "Accepter cookies" eller "Nej tak til cookies".

<h3>Cookies til statistik</h3>

Vi samler anonymiseret statistik ved hjælp af statistikprogrammet Piwik PRO. Vi bruger statistikkerne til at finde uhensigtsmæssigheder på websitet, så vi kan forbedre din oplevelse af FDS.

Første gang du lander på FDS, ser du en meddelelse med information om cookies til statistik. Hvis du klikker på "Nej tak til cookies", sættes der ingen cookies til statistik, og meddelelsen forsvinder. Der vil dog stadig blive sat en cookie for at huske dit valg. 

Hvis du klikker på "Accepter cookies", sættes der cookies til at samle statistik og meddelelsen forsvinder. Oplysningerne er anonyme og bliver ikke koblet til dig som bruger.

<h3>Cookies ved brugerundersøgelser</h3>

Når vi gennemfører brugerundersøgelser på FDS, anvender vi cookies, dels til at styre, hvor mange gange du som bruger ser invitationen til undersøgelsen, dels til at registrere, om du har svaret på undersøgelsen. På den måde sikrer vi, at du som bruger ikke ser invitationen til undersøgelsen igen, efter du har svaret.

<h3>Stop med at samle statistik</h3>

Ønsker du at vi stopper med at samle statistik om din brug af FDS, så kan du nedenfor ændre dit valg, hvormed dine besøg på FDS ikke længere vil blive registreret til forbedring af brugeroplevelsen. Vi bruger dog stadig en cookie for at huske dit valg.

For at undgå at der bliver sat statistikcookies fra Piwik PRO, skal du nedenunder vælge "nej" og efterfølgende trykke på knappen "gem".

<form id="cookieForm" method="post" action="/">
    <div class="form-group">
        <fieldset role="radiogroup">
            <legend class="form-label">Må vi indsamle statistik om din brug af Det Fælles Designsystem (FDS)?</legend>
            <div class="form-group-radio">
                <input id="statCookiesYes" type="radio" name="statCookies" value="1" class="form-radio radio-large">
                <label class="form-label" for="statCookiesYes">Ja, accepter cookies</label>
            </div>
            <div class="form-group-radio">
                <input id="statCookiesNo" type="radio" name="statCookies" value="0" class="form-radio radio-large"/>
                <label class="form-label" for="statCookiesNo">Nej</label>
            </div>
        </fieldset>
    </div>
    <div id="cookieButtons" class="mt-6 d-none">
        <input type="hidden" id="originalValue" value="" />
        <button type="submit" class="button button-primary" id="cookieSave">Gem</button>
        <button type="button" class="button button-secondary" id="cookieCancel">Annuller</button>
    </div>
</form>
<div class="alert alert-success alert--show-icon alert--paragraph d-none" role="alert" id="cookieNoAlert">
    <div class="alert-body">
        <p class="alert-text">Ok, vi samler ikke længere anonymiseret statistik til forbedring af brugeroplevelsen</p>
    </div>
</div>
<div class="alert alert-success alert--show-icon alert--paragraph d-none" role="alert" id="cookieYesAlert">
    <div class="alert-body">
        <p class="alert-text">Tak, vi samler nu anonymiseret statistik til forbedring af brugeroplevelsen</p>
    </div>
</div>

<h3>Varighed af cookies</h3>

<div class="row">
    <div class="col-12 col-md-10 col-lg-8">
        <div class="table--responsive-scroll">
            <table class="table table--borderless table--compact">
                <thead>
                    <tr>
                        <th>Cookienavn</th>
                        <th>Type</th>
                        <th>Formål</th>
                        <th>Varighed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>theme</td>
                        <td>Førstepartscookie</td>
                        <td>Teknisk nødvendig</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>cookieOptOut</td>
                        <td>Førstepartscookie</td>
                        <td>Teknisk nødvendig</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>_pk_ses.&lt;appID&gt;.&lt;domainHash&gt;</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>30 minutter</td>
                    </tr>
                    <tr>
                        <td>_pk_id.&lt;appID&gt;.&lt;domainHash&gt;</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>13 måneder</td>
                    </tr>
                    <tr>
                        <td>_stg_debug / stg_debug</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>14 dage</td>
                    </tr>
                    <tr>
                        <td>stg_traffic_source_priority</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>30 minutter</td>
                    </tr>
                    <tr>
                        <td>stg_last_interaction</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>stg_returning_visitor</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>stg_fired__&lt;appID&gt;</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>Session</td>
                    </tr>
                    <tr>
                        <td>stg_utm_campaign</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>Session</td>
                    </tr>
                    <tr>
                        <td>stg_pk_campaign</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>Session</td>
                    </tr>
                    <tr>
                        <td>stg_externalReferrer</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>Session</td>
                    </tr>
                    <tr>
                        <td>_stg_opt_out_simulate</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>_stg_optout</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>12 måneder</td>
                    </tr>
                    <tr>
                        <td>ppms_privacy_&lt;appID&gt;</td>
                        <td>Tredjepartscookie</td>
                        <td>Statistik</td>
                        <td>12 måneder</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<h3>Sådan undgår eller sletter du cookies</h3>

Ønsker du ikke, at FDS sætter cookies, kan du bruge funktionen her på siden til at slå cookies fra. Ønsker du ikke, at der bliver sat cookies generelt, kan du tilføje FDS til listen over websites, du gerne vil blokere cookies fra, i internetindstillingerne i din browser.

<h3>Flere oplysninger om cookies</h3>

Her kan du læse om, hvad cookies kan bruges til:

<ul class="nobullet-list">
    <li><a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" class="icon-link">Læs om cookies (engelsk)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://www.retsinformation.dk/Forms/R0710.aspx?id=139279" target="_blank" class="icon-link">Læs Cookiebekendtgørelse<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>