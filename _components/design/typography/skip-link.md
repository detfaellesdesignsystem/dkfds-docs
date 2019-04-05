---
type: component
title: Skip link
parent: typography
order: 06
---

<p class="font-lead">Et skip link er det første element på siden som rammes af tabulatoren. Ved klik på linket flyttes fokus til indholdet på siden, så man undgår oplæsning af menuen.</p>
{% include code/preview.html component="skiplink" %}
{% include code/accordion.html component="skiplink" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="skipnav-docs-tech">
    Implementering
  </button>
  <div id="skipnav-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Skip link <code>a</code> elementet indsættes umiddelbart lige efter <code>&lt;body&gt;</code>. Elementet skal være det første element, der kommer i fokus på siden ved brug af tabulator.</p>
    <p>Skip link gør brug af anchor link <code>#main-content</code>, man skal derfor huske at sætte <code>id="main-content"</code> på det element, der omkranser indholdet på siden.</p>
  </div>
</div>