---
permalink: /komponenter/accordions/
layout: styleguide
type: component
title: Accordions
category: Komponenter_category
subcategory: Komponenter
lead: En accordion er et grafisk element, som du kan bruge til vise indhold med. Accordions bliver fremvist i lodret rækkefølge med synlig overskrift. Ved at klikke på accordion folder beskrivelsen af indholdet sig ud. Klikker du igen, folder beskrivelsen sammen igen.
---

{% include code/preview.html component="accordion" %}
{% include code/accordion.html component="accordion" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="true" aria-controls="documentation">
    Retningslinjer
  </button>
  <div id="documentation" class="accordion-content">
    <article>
      <section>
          <h2 class="h4">Tilgængelighed</h2>
          <ul>
              <li>Accordions bliver automatisk fremhævet, når brugere ved hjælp af tabulatortasten navigerer sig frem til dem.</li>
              <li>Accordions er en del af den anbefalede løsning, men vi anbefaler, at du anvender dem i begrænset omfang. En stor del af brugerne ser kun overskrift på accordion (aktive tekst) og opdager ikke det underliggende indhold.</li>
          </ul>
      </section>
      <section>
          <h2 class="h4">Brugervenlighed</h2>
          <h3 class="h5">Anvendes til</h3>
          <p>Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.</p>
          <h3 class="h5">Anvendes ikke til</h3>
          <ul>
              <li>Accordions erstatter individuelle sider i en selvbetjeningsløsning eller hjemmeside.</li>
              <li>Brug ikke accordions til små mængder indhold, der i stedet kunne stå synligt på siden.</li>
              <li>Brug ikke accordions til at kollapse indhold i fx søgeresultater eller andre længere oversigter.</li>
              <li>Brug ikke accordions til at opdele et logisk flow eller en sekvens af handlinger. Der bør du eventuelt i stedet anvende en tringuide.</li>
          </ul>
          <h3 class="h5">Vejledning</h3>                
          <ul>
              <li>Overvej at lade den accordion, som har det vigtigste indhold, være foldet ud, når brugerne kommer ind på siden. Så er du sikker på, at dine brugere læser den.</li>
              <li>Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør du i stedet omformulere teksten og eventuelt fordele den på flere sider.</li>
          </ul>
      </section>
    </article>
  </div>
</div>