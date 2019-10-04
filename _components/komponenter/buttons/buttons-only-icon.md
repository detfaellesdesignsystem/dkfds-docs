---
title: Ikon som knap
parent: Buttons
order: 06
lead: 
---
{% include code/preview.html component="buttons-only-icon" %}
{% include code/accordion.html component="buttons-only-icon" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="tech-only-icon">
    Implementering
  </button>
  <div id="tech-only-icon" class="accordion-content">
      <p><code>button button-unstyled</code> bruges i de tilfælde, hvor knappen kun indeholder et ikon. For at gøre knappen tilgængelig husk da at tilføje tekst til skærmlæsere. Fx <code>&lt;span class="sr-only"&gt;Slet&lt;/span&gt;</code>.</p>
  </div>
</div>
