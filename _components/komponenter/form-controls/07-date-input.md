---
title: Datoangivelse
parent: Formcontrols
order: 07
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
component: date-input
componentTitle: Eksempel på datoangivelse
---
### Implementering

- Dato-komponenten består af 2 dele: 3 input-felter og en datepicker.
- Attributten `data-input-regex` håndteres af JavaScript via dkfds.js filen, som derfor bør importeres i projektet.
Attributten forhindrer at brugeren kan indskrive tegn som ikke er tal, samt mere end 2 tal for dag og måned, og 4 tal i år-inputtet derudover  Eksempel for dag og måned: ` data-input-regex="^[0-9]{0,2}$"`
- For at initialisere dato-komponenten skal `.date-group`-elementet have klassen `.js-calendar-group`. Derudover skal de tre inputfelter have følgende klasser:
    - Dag input: `.js-calendar-day-input`
    - Måned input: `.js-calendar-month-input`
    - År input: `.js-calendar-year-input`
- Hvis du vil koble en datovælger på dit datofelt, kan du bruge udvidelsen <a href="/udvidelser/pikaday/">Pikaday</a>.
- Ved fejl, tilføj da en hjælpsom fejlbesked over felterne i elementet `<span class="form-error-message" id="form-error-message-input-error" role="alert">`. 
- Tilføj klassen `form-error` på `form-group` `div` elementet, når der vises en fejlbesked.

### Retningslinjer
#### Tilgængelighed

Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.
          
#### Brugervenlighed
##### Anvendes til

Sætter brugeren i stand til at tilføje struktureret datoinformation.

##### Anvendes ikke til

Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer. Der bør du i stedet overveje at anvende <a href="/udvidelser/pikaday/">datepicker udvidelsen</a> eller på anden vis indikere de præcise datoer, der er ledige for brugeren.

##### Vejledning

Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, dvs. dag, måned og år. Felternes labels skal også afspejle det.

#### Links

<ul class="nobullet-list">
    <li><a href="https://design-system.service.gov.uk/components/date-input/" class="icon-link">GovUKs anbefalinger til datovælgeren, samt for fejlmeddelelser til datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://design-system.service.gov.uk/patterns/dates/" class="icon-link">GovUK om at spørge brugeren om datoer<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://v2.designsystem.digital.gov/components/form-controls/#date-input" class="icon-link">USWDS om datovælgeren<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
    <li><a href="https://design-system.service.gov.uk/components/error-message/" class="icon-link">GovUK om fejlmeddelelser generelt<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a></li>
</ul>
