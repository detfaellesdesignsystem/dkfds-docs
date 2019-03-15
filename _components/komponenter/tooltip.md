---
permalink: /komponenter/tooltip/
layout: styleguide
type: element
title: Tooltip og popover
category: Komponenter_category
subcategory: Komponenter
description: Tooltip bruges til at forklare en tekst yderligere eller give mere information, som ikke umiddelbart er nødvendig.
lead: Tooltip og popover er komponenter, som brugerne enten kan aktiverer eller fører musen hen over for at få en kort forklaring på indhold, ord eller begreber.  
---

{% include code/preview.html component="tooltip" %}
{% include code/accordion.html component="tooltip" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="tooltip-tech-docs">
    Implementering
  </button>
  <div id="tooltip-tech-docs" aria-hidden="false" class="accordion-content">
    <section>
        <p>Tooltips og popovers bygger på <a href="https://atomiks.github.io/tippyjs/" class="icon-link">tippy.js<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
        <p>For at initialisere et tooltip eller en popover skal et HTML-element have klassen <code>'.js-tooltip'</code> og en <code>'title'</code>-attribut:</p>
        <div class="code-highlight">
          <code>
            &lt;button class="button button-primary js-tooltip" title="Dette er et tooltip"&gt;Knap med tooltip&lt;/button&gt;	
          </code> 
        </div>
        <p>Vi definerer et tooltip som en hjælpetekst som vises ved mouseover, og en popover som hjælpetekst der vises ved et klik. For at lave et tooltip om til en popover skal der tilføjes følgende attribut: <code>data-tippy-trigger="click"</code></p>
        <p>Tippy.js har mange konfigurationsmuligheder, og den fulde liste kan ses på <a href="https://atomiks.github.io/tippyjs/" class="icon-link">deres hjemmeside<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.</p>
        <p>I følgende eksempel er tooltippet konfigureret til at vises til venstre: </p>
        <div class="code-highlight">
          <code>
            &lt;button class="button button-primary js-tooltip" data-tippy-placement="left" title="Tooltip til venstre"&gt;Knap med tooltip til venstre&lt;/button&gt;
          </code>
        </div>
    </section>
  </div>
</div>

<div class="accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="tooltip-docs">
    Retningslinjer
  </button>
  <div id="tooltip-docs" class="accordion-content">
    
  </div>
</div>

