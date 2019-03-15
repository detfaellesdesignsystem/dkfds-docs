---
permalink: /komponenter/buttons/
layout: styleguide
type: element
title: Knapper
category: Komponenter_category
subcategory: Komponenter
description: Knapper er grafiske elementer, som brugerne kan trykke eller klikke på og dermed udløse en funktion eller handling. De kommer i flere grafiske former og er inddelt i et hierarki med primære, sekundære og tertiære knapper.
---

{% include code/preview.html component="buttons" %}
{% include code/accordion.html component="buttons" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="code-documentation">
    Implementering
  </button>
  <div id="code-documentation" class="accordion-content">
    <section>
      <p>Knap styling kan både sættes på &lt;button&gt; og &lt;a&gt; tags ved at tilføje følgende klasser:</p>
      <ul>
        <li><code>button button-primary</code></li>
        <li><code>button button-secondary</code></li>
        <li><code>button button-tertiary</code></li>
      </ul>
    </section>
  </div>
</div>

<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="accordion-bordered-docs">
    Retningslinjer
  </button>
  <div id="accordion-bordered-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h2 class="h4">Tilgængelighed</h2>
          <ul>
              <li>Knapper markeres tydeligt med en focus-tilstand, når brugere vha tab-tasten navigerer sig frem til dem.</li>
              <li>Undgå at anvende <code>div</code> eller <code>img</code> tags til at konstruere en knap, da skærmlæsere i givet fald ikke automatisk kan afkode knappens funktionalitet.</li>
              <li>Styler du et link, så det ligner en knap, skal du være opmærksom på, at skærmlæsere håndterer et link og en knap forskelligt:
              <ul>
                  <li>Et link aktiveres ved at trykke ”Enter”.</li>
                  <li>En knap aktiveres ved at trykke ”Space”.</li>
              </ul>
              </li>
          </ul>
      </section>
      <section>
          <h2 class="h4">Brugervenlighed</h2>
          <h3 class="h5">Anvendes til</h3>
          <p>Du kan bruge knapper til at anvise centrale funktioner til brugerne som fx ”Gem”, ”Hent”, ”Log ind” og ”Log ud”.</p>
          <h3 class="h5">Anvendes ikke til</h3>
          <p>Brug ikke knapper til at navigere mellem sidevisninger. Der skal du i stedet anvende link.</p>
          <h3 class="h5">Vejledning</h3>
          <ul>
              <li>Generelt skal du anvende primære knapper til handlinger, der bringer brugeren videre i sit forløb og sekundære knapper til handlinger, der foregår indenfor den aktuelle sidevisning.</li>
              <li>Der er kun en primærknap pr side.</li>
              <li>Undgå for mange knapbaserede funktioner på samme side.</li>
              <li>Brug stort forbogstav og små bogstaver for resten af teksten på knappen.</li>
              <li>Skriv kort og præcist.</li>
              <li>Skriv i aktiv form: I stedet for at skrive ”Fejlindmelding” bør du skrive ”Indmeld en fejl”.</li>
              <li>I nogle tilfælde kan det være meningsunderstøttende at indlejre et svg-ikon i knappen for at signalere bestemte handlinger som fx ”Gem”.</li>
              <li>Funktioner af mindre vigtighed bør du style som link.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
