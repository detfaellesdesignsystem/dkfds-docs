---
permalink: /udvidelser/pikaday/
layout: styleguide
type: component
title: Datovælger (datepicker)
category: Udvidelser_category
subcategory: Udvidelser
lead: Gør det muligt for brugeren, at vælge en dato ved klik på knap.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: Pikaday er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere Pikaday skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til Pikaday, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> projektet.
---

{% include code/preview.html component="date-input-datepicker" %}
{% include code/accordion.html component="date-input-datepicker" %}
<div class="accordion accordion-bordered">
  <button class="button-unstyled accordion-button"
    aria-expanded="false" aria-controls="tech-docs">
    Implementering
  </button>
  <div id="tech-docs" class="accordion-content">
    <p>Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se under siden <a href="/omdesignsystemet/tiludviklere/">Til udviklere</a></p>
    <p>Stien til filen du skal inkludere for Pikaday er henholdsvis <code>[path-to-plugins-project]/dist/css/dkfds-pikaday-theme.standalone.min.css</code> for CSS filen og <code>~dkfds-plugins/dist/scss/dkfds-pikaday-theme</code> for SCSS filen.</p>
    <p>Man skal dog stadig inkludere Pikadays egen CSS og JavaScript. Følg <a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikadays egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.</p> 
  </div>
</div>

<div class="accordion accordion-bordered accordion-docs">
  <button class="button-unstyled accordion-button"
      aria-expanded="true" aria-controls="guideline-docs">
    Retningslinjer
  </button>
  <div id="guideline-docs" class="accordion-content">
    <article>
      <section>
          <h3 class="h4">Brugervenlighed</h3>
          <h4 class="h5">Anvendes til</h4>
          <p>Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.</p>
          <h4 class="h5">Anvendes ikke til</h4>
          <p>Tidsangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten <a href="/komponenter/form-controls/#datoangivelse" title="">datoangivelse</a></p>
      </section>
    </article>
  </div>
</div>
