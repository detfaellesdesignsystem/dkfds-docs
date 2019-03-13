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
    <p>Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se under siden <a href="/dkfds-docs/omdesignsystemet/tiludviklere/">Til udviklere</a></p>
    <p>Stien til filen du skal inkludere for Pikaday er henholdsvis <code>[path-to-plugins-project]/dist/css/dkfds-pikaday-theme.standalone.min.css</code> for CSS filen og <code>~dkfds-plugins/dist/scss/dkfds-pikaday-theme</code> for SCSS filen.</p>
    <p>Man skal dog stadig inkludere Pikadays egen CSS og JavaScript. Følg <a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikadays egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.</p> 
  </div>
</div>