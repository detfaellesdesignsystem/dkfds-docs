---
permalink: /komponenter/accordions/
layout: styleguide
type: component
title: Accordions
category: Komponenter_category
subcategory: Komponenter
lead: En accordion er et grafisk element, som du kan bruge til vise indhold med. Accordions bliver fremvist i lodret rækkefølge med synlig overskrift. Ved at klikke på accordion folder beskrivelsen af indholdet sig ud. Klikker du igen, folder beskrivelsen sammen igen.
---

<h2 class="h3">Retningslinjer</h2>
<section>
  <h3 class="h4">Tilgængelighed</h3>
  <ul>
      <li>Accordions bliver automatisk fremhævet, når brugere ved hjælp af tabulatortasten navigerer sig frem til dem.</li>
      <li>Accordions er en del af den anbefalede løsning, men vi anbefaler, at du anvender dem i begrænset omfang. En stor del af brugerne ser kun overskrift på accordion (aktive tekst) og opdager ikke det underliggende indhold.</li>
  </ul>
</section>
<section>
  <h3 class="h4">Brugervenlighed</h3>
  <h4 class="h5">Anvendes til</h4>
  <p>Accordions er interaktive overskrifter, der anvendes til at skjule og vise det relaterede indhold.</p>
  <h3 class="h5">Anvendes ikke til</h3>
  <ul>
      <li>Accordions erstatter individuelle sider i en selvbetjeningsløsning eller hjemmeside.</li>
      <li>Brug ikke accordions til små mængder indhold, der i stedet kunne stå synligt på siden.</li>
      <li>Brug ikke accordions til at kollapse indhold i fx søgeresultater eller andre længere oversigter.</li>
      <li>Brug ikke accordions til at opdele et logisk flow eller en sekvens af handlinger. Der bør du eventuelt i stedet anvende en tringuide.</li>
  </ul>
  <h4 class="h5">Vejledning</h4>                
  <ul>
      <li>Overvej at lade den accordion, som har det vigtigste indhold, være foldet ud, når brugerne kommer ind på siden. Så er du sikker på, at dine brugere læser den.</li>
      <li>Generelt er det ikke en god løsning at skjule indhold for at gøre siden mere spiselig. Overvej om det er nødvendigt at kollapse indhold og hvorfor, det er det. Hvis indholdet er unødigt langt eller uoverskueligt, bør du i stedet omformulere teksten og eventuelt fordele den på flere sider.</li>
  </ul>
</section>
<h2>Standard</h2>
{% include code/preview.html component="accordion" %}
{% include code/accordion.html component="accordion" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="technical">
    Implementering
  </button>
  <div id="technical" class="accordion-content">
    <p>Man kan undlade at sætte <code>aria-hidden</code> attribut på <code>accordion-content</code>, hvis man har implementeret dkfds.js i sit projekt. <code>aria-hidden</code> vil da blive tilføjet automatisk via javascript.</p>
    <h2 class="h5">JavaScript</h2>
    <p>Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.</p>
    <p>Hvis man står i denne situation kan man definere denne komponent i JavaScript således:</p>
    <pre>new DKFDS.Accordion(document.getElementByID('ACCORDION-ID'));</pre>
    <p>Bemærk, at dette kun gælder fra version 5.0.0.</p>
  </div>
</div>

<h2>Tilføj ramme</h2>
{% include code/preview.html component="accordion-border" %}
{% include code/accordion.html component="accordion-border" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="technical-border">
    Implementering
  </button>
  <div id="technical-border" class="accordion-content">
    <p>Tilføj klassen <code>accordion-bordered</code> til  <code>.accordion</code> for at tilføje en synlig ramme.</p>
  </div>
</div>

<h2>Tillad mere end én åben accordion</h2>
{% include code/preview.html component="accordion-multi" %}
{% include code/accordion.html component="accordion-multi" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="technical-multi">
    Implementering
  </button>
  <div id="technical-multi" class="accordion-content">
    <p>Man kan også tillade at flere kan være åbne på samme tid. Dette gøres ved at tilføje <code>aria-multiselectable="true"</code> attributten til <code>.accordion</code>.</p>
  </div>
</div>
