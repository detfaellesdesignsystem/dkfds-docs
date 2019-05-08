---
title: Datoangivelse
parent: Formcontrols
order: 07
lead: Tre separate felter for dato, måned og år er den nemmeste måde for brugeren at indskrive en dato.
---

{% include code/preview.html component="date-input" %}
{% include code/accordion.html component="date-input" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="date-input-tech">
    Implementering
  </button>
  <div id="date-input-tech" aria-hidden="true" class="accordion-content">
    <section>
         <ul>
          <li>Dato-komponenten består af 2 dele: 3 input-felter og en datepicker.</li>
          <li>Attributten <code>data-input-regex</code> håndteres af JavaScript via dkfds.js filen, som derfor bør importeres i projektet.
           Attributten forhindrer at brugeren kan indskrive tegn som ikke er tal, samt mere end 2 tal for dag og måned, og 4 tal i år-inputtet derudover  Eksempel for dag og måned: <code> data-input-regex="^[0-9]{0,2}$"</code></li>
          <li>
            For at initialisere dato-komponenten skal <code>.date-group</code>-elementet have klassen <code>.js-calendar-group</code>. Derudover skal de tre inputfelter have følgende klasser:
            <ul>
              <li>Dag input: <code>.js-calendar-day-input</code></li>
              <li>Måned input: <code>.js-calendar-month-input</code></li>
              <li>År input: <code>.js-calendar-year-input</code></li>
            </ul>
          </li>
          <li>Hvis du vil koble en datovælger på dit datofelt, kan du bruge udvidelsen <a href="/dkfds-docs/udvidelser/pikaday/">Pikaday</a>.</li>
        </ul>
    </section>
  </div>
</div>
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="date-input-docs">
    Retningslinjer
  </button>
  <div id="date-input-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Anvend ikke JavaScript til automatisk at flytte fokus fra felt til felt, da det gør det svært for tastatur-brugere at navigere i formularen.</p>          
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Sætter brugeren i stand til at tilføje struktureret datoinformation.</p>
          <h4 class="h5">Anvendes ikke til</h4>
          <p>Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer. Der bør du i stedet overveje at anvende <a href="/dkfds-docs/udvidelser/pikaday/">datepicker udvidelsen</a> eller på anden vis indikere de præcise datoer, der er ledige for brugeren.</p>
          <h4 class="h5">Vejledning</h4>
          <p>Placér felterne i den rækkefølge for datoform, der anvendes i Danmark, dvs. dag, måned og år. Felternes labels skal også afspejle det.</p>
      </section>
      <section>
      <h3 class="h4">Links</h3>
      <ul class="nobullet-list">
        <li><a href="https://design-system.service.gov.uk/components/date-input/" class="icon-link">GovUKs anbefalinger til datovælgeren<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://design-system.service.gov.uk/patterns/dates/" class="icon-link">GovUK om at spørge brugeren om datoer<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
        <li><a href="https://v2.designsystem.digital.gov/components/form-controls/#date-input" class="icon-link">USWDS om datovælgeren<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a></li>
      </ul>
      </section>
    </article>
  </div>
</div>
<h3>Datoangivelse med fejl</h3>
{% include code/preview.html component="date-input-error" %}
{% include code/accordion.html component="date-input-error" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="date-input-error-tech">
    Implementering
  </button>
  <div id="date-input-error-tech" aria-hidden="true" class="accordion-content">
    <section>
        <ul>
            <li>Tilføj en hjælpsom fejlbesked over felterne i elementet <code>&lt;span class="form-error-message" id="form-error-message-input-error" role="alert"&gt;</code>.</li> 
            <li>Tilføj klassen <code>form-error</code> på <code>form-group</code> <code>div</code> elementet.</li>
        </ul> 
    </section>
  </div>
</div>
