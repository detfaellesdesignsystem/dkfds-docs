---
permalink: /komponenter/tabnav/
layout: styleguide
type: component
title: Faneblade
category: Komponenter_category
subcategory: Komponenter
lead: "Faneblade udgør den vandrette eller horisontale navigation i en løsning. Brugeren kan aktivere det tilhørende indhold ved at klikke på fanebladet."
---
<h2>Faneblade</h2>
{% include code/preview.html component="tabnav" %}
{% include code/accordion.html component="tabnav" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="code-tabnav-docs">
    Implementering
  </button>
  <div id="code-tabnav-docs" aria-hidden="false" class="accordion-content">
    <section>
        <ul class="content-list">
          <li>Det aktive menupunkt skal være semibold og sættes med variablen <code>$font-weight-semibold</code></li>
          <li>Det aktive menupunkt skal have en <code>.active</code> class, som har en border-bottom, som bliver sat med variablen <code>$tabs-border-bottom</code></li>
          <li>Teksten og borderen på det aktive menupunkt skal være primærfarven, som og sættes med variablen <code>$color-primary</code></li>
          <li>Det aktive menupunkt skal have en <code>.active</code> class, der har en border-bottom, som bliver sat med variablen <code>$tabs-border-bottom</code></li>
          <li>På hover skal teksten på menupunktet skifte, her skal variablen <code>$color-link-hover</code> bruges. Derudover skal der tiføjes en border-bottom, som igen bliver sat med variablen <code>$tabs-border-bottom</code></li> 
        </ul>
    </section>
  </div>
</div>


<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="faneblad-docs">
    Retningslinjer
  </button>
  <div id="faneblad-docs" aria-hidden="false" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <p>Faneblade er tilgængelige i den anbefalede løsning, men vi anbefaler generelt ikke, at du anvender faneblade, da en stor del af brugerne ikke opdager indholdet på fanerne udover den aktive.</p>
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <ul>
              <li>Faneblade anvendes til at skifte mellem forskellige visninger af indhold indenfor samme kontekst. </li>
              <li>Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.</li>
          </ul>
          <h4 class="h5">Anvendes ikke til</h4>
          <ul>
              <li>Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.</li>
              <li>Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.</li>
          </ul>
          <h4 class="h5">Vejledning</h4>                
          <ul>
              <li>Vi anbefaler ikke, at du anvender faneblade i en generel løsning, da en stor del af brugerne ikke opdager indholdet på fanerne udover den aktive.</li>
              <li>Hvis du ønsker at anvende faner, bør det testes på din målgruppe før din løsning går i produktion.</li>
          </ul>
      </section>
    </article>
  </div>
</div>
