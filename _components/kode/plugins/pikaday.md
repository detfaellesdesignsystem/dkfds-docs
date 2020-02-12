---
permalink: /kode/plugins/pikaday/
redirect_from:
- /udvidelser/pikaday/
layout: styleguide
type: component
title: "Pikaday"
parentlink: /kode/plugins/
type: component
category: Kode_category
subcategory: Kode
pikaday: true
description: "Pikaday.js er et eksternt plugin, som leverer en datovælger eller datepicker, som gør det nemt at vælge en dato." 
lead: Gør det muligt for brugeren, at vælge en dato ved klik på knap.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: Pikaday er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere Pikaday skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til Pikaday, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> projektet.
- type: error
  header: Pikaday er på nuværende tidspunkt ikke tilgængelig
  content: Pikaday er på nuværende tidspunkt ikke tilgængelig, når man har en skærmlæser kørende. Vi har oprettet en sag hos tredjepart og afventer løsning.
component: date-input-datepicker
---

{% include code/preview.html component="date-input-datepicker" %}
{% include code/accordion.html component="date-input-datepicker" %}

### Implementering

Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se under siden <a href="/omdesignsystemet/tiludviklere/">Til udviklere</a>

Stien til filen du skal inkludere for Pikaday er henholdsvis `[path-to-plugins-project]/dist/css/dkfds-pikaday-theme.standalone.min.css` for CSS filen og `~dkfds-plugins/dist/scss/dkfds-pikaday-theme` for SCSS filen.

Man skal dog stadig inkludere Pikadays egen CSS og JavaScript. Følg <a href="https://github.com/Pikaday/Pikaday" class="icon-link">Pikadays egen dokumentation<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.
 
### Retningslinjer

#### Brugervenlighed

##### Anvendes til

Når der er specifikt udvalgte datoer at vælge i mellem som fx ved bookninger og planlægning med åbne og lukkede datoer, og hvor det gavner brugeren at se hvilke ugedage forskellige datoer rammer.

##### Anvendes ikke til

Tidsangivelser som er givet for brugeren, som fx en fødselsdato. Brug da komponenten <a href="/komponenter/form-controls/#datoangivelse" title="">datoangivelse</a>
