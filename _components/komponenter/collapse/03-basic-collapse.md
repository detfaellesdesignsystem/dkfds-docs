---
title: Generel skjul og vis indhold funktionalitet
parent: Collapse
order: 03
lead: 
---

{% include code/preview.html component="basic-collapse" %}
{% include code/accordion.html component="basic-collapse" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="collapse-tech">
    Implementering
  </button>
  <div id="collapse-tech" aria-hidden="true" class="accordion-content">
        <p>For at initialisere collapse funktionaliteten skal et HTML-element have klassen <code>.js-collapse</code>. Collapse/expand funktionaliteten bliver nu kaldt når man klikker på dette element.</p>
        <p>Dette HTML-element skal yderligere have følgende attributter:</p>
        <ul>
          <li><code>data-js-target="#id-of-target-to-collapse"</code>. Der henføres her til det element som skal collapses/expandes. </li>
          <li><code>aria-expanded="true/false". </code></li>
          <li><code>aria-controls="id-of-target-to-collapse" </code></li>
        </ul>
        <p>Det element som skal collapses/expanded skal have følgende:</p>
        <ul>
          <li><code>id=”id-of-target-to-collapse”</code></li>
          <li><code>aria-hidden="true/false"</code></li>
        </ul>
        <h2 class="h5">JavaScript</h2>
        <p>Hvis en komponent først bliver tilføjet på siden efter pageload, så vil der være stor sandsynlighed for at komponenten ikke virker optimalt, da events ikke er blevet sat.</p>
        <p>Hvis man står i denne situation kan man definere denne komponent i JavaScript således:</p>
        <pre>new DKFDS.Collapse(document.getElementByID('COLLAPSE-BUTTON-ID'));</pre>
        <p>Bemærk, at dette kun gælder fra version 5.0.0.</p>
        <h3 class="h5">Events</h3>
        <p>Når en skjul/vis komponent bliver foldet ud, bliver eventet <code>fds.collapse.open</code> udløst på knappen, som man kan koble sig på med en eventlistener.</p>
        <p>Når en skjul/vis komponent bliver foldet ind, bliver eventet <code>fds.collapse.close</code> udløst på knappen, som man kan koble sig på med en eventlistener.</p>
  </div>
</div>
<div class="accordion accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="collapse-docs">
    Retningslinjer
  </button>
  <div id="collapse-docs" class="accordion-content">
      <section>
          <h3 class="h4">Tilgængelighed</h3>
          <ul>
              <li>Skjul ikke meningsbærende indhold med denne funktionalitet.</li>
              <li>Skjult indhold skal fortsat overholde dokumentets outline (overskriftshierarki) og tilgængelighedskrav.</li>
          </ul>  
      </section>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Vise yderligere information eller en ekstra funktion relevant til brugerens valg.</p>
          <h5>Anvendes ikke til</h5>
          <ul>
              <li>Anvendes ikke som erstatning for accordions.</li>
              <li>Anvendes ikke til meningsbærende indhold som fx sidens brødtekst.</li>
          </ul>
          <h4 class="h5">Vejledning</h4>                
          <ul>
              <li>Hold det enkelt. Hvis du har behov for at eksponere større mængder af ekstra funktionalitet eller indhold, bør du overveje, at fordele det ud over flere sider i stedet.</li>
          </ul>
      </section>
  </div>
</div> 
