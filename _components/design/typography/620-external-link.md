---
type: component
title: Eksternt link
parent: typography
order: 620
---

{% include code/preview.html component="external-link" %}
{% include code/accordion.html component="external-link" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="false" aria-controls="external-links-docs-tech">
    Implementering
  </button>
  <div id="external-links-docs-tech" aria-hidden="true" class="accordion-content">
    <p>Du kan definere et eksternt link i koden ved at sætte klassen <code>icon-link</code> på <code>a</code> elementet. Derudover skal du tilføje SVG ikonet inline: <code>&lt;svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"&gt;&lt;use xlink:href="#open-in-new"&gt;&lt;/use&gt;&lt;/svg&gt;</code>.</p>
    <p>For at kunne bruge denne metode, husk da at inkludere SVG ikon samlingen i toppen af hver side under <code>&lt;body&gt;</code>.</p>
  </div>
</div>
