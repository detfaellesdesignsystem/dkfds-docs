---
title: Trinindikator - responsivt i overflow-menu
parent: Tringuide
order: 02
lead: 
---
<p>Du skal gøre browservinduet mindre for at se ændringen.</p>
{% include code/preview-iframe.html component="tringuide-responsive-overflowmenu" %}
{% include code/accordion.html component="tringuide-responsive-overflowmenu" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button" aria-expanded="false" aria-controls="trin-responsive-code-docs">
    Implementering
  </button>
  <div id="trin-responsive-code-docs" class="accordion-content">
    <p>Responsiv tringuide gør brug af <code>dkfds.js</code> til at håndtere ændring af <code>aria-hidden</code>, således at værdien ændrer sig alt efter om knappen er synlig eller ej.</p>
    <p>Dette sikrer at <code>aria-hidden</code> har den rette værdi så skærmlæsere kan læse teksten baseret på om guiden er synlig eller ej.</p>
    <p>Erstat <code>overflow-menu--md-no-responsive</code> med klassen <code>overflow-menu--lg-no-responsive</code> for at ændre, hvornår det responsive breakpoint skal være.</p>
  </div>
</div>
