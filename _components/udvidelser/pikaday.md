---
permalink: /udvidelser/pikaday/
layout: styleguide
type: component
title: Datepicker
category: Udvidelser_category
subcategory: Udvidelser
lead: Gør det muligt for brugeren, at vælge en dato ved klik på knap.
alertwarningheader: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
alertwarningtext: Pikaday er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere Pikaday skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til Pikaday, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> projektet.
---

{% include code/preview.html component="date-input-datepicker" %}
{% include code/accordion.html component="date-input-datepicker" %}
<div class="accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="true" aria-controls="tech-docs">
    Implementering
  </button>
  <div id="tech-docs" class="accordion-content">
    <p>dkfds-plugins indeholder kun CSS, som er et theme, der lægges oven på Pikadays egen styling.</p>
    <p>Man skal derfor stadig inkludere Pikadays egen CSS og JavaScript. Følg <a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikadays egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.</p> 
  </div>
</div>