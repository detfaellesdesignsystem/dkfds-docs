---
permalink: /komponenter/tabnav/
layout: styleguide
type: component
title: Faneblade
category: Komponenter_category
subcategory: Komponenter
lead: "Faneblade gør det muligt for brugerne at bladre i mellem relaterede sektioner af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere ser de skjulte sektioner, når du anvender faneblade."
---
{% include code/preview.html component="tabnav" title="Eksempel på faneblad" %}
{% include code/accordion.html component="tabnav" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="code-tabnav-docs">
    Implementering
  </button>
  <div id="code-tabnav-docs" aria-hidden="true" class="accordion-content">
    <section>
        <h2 class="h4">JavaScript</h2>
        <p>Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.</p>
        <p>Hvis man står i denne situation kan man definere denne komponent i JavaScript således:</p>
        <pre>new DKFDS.Tabnav(document.getElementByID('TABNAV-ID'));</pre>
        <p>Bemærk, at dette kun gælder fra version 5.0.0.</p>
        <h3 class="h5">Events</h3>
        <p>Når man vælger et nyt faneblad, bliver eventet <code>fds.tabnav.changed</code> udløst på <code>.tabnav</code> elementet, som man kan koble sig på med en eventlistener.</p>
        <p>Når et faneblad åbnes, bliver eventet <code>fds.tabnav.open</code> udløst på det tilhørende <code>.tabnav-item</code> menu element, som man kan koble sig på med en eventlistener.</p>
        <p>Når et faneblad lukkes, bliver eventet <code>fds.tabnav.close</code> udløst på det tilhørende <code>.tabnav-item</code> menu element, som man kan koble sig på med en eventlistener.</p>
    </section>
  </div>
</div>


<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="faneblad-docs">
    Retningslinjer
  </button>
  <div id="faneblad-docs" aria-hidden="false" class="accordion-content">
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
  </div>
</div>
