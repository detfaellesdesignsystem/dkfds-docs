---
permalink: /kode/plugins/micromodal/
redirect_from:
- /komponenter/modals/
- /udvidelser/micromodal/
parentlink: /kode/plugins/
type: component
category: Kode_category
subcategory: Kode
title: "MicroModal.js"
micromodal: true
description: "Micromodal.js er et eksternt plugin, som kan anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen."
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: MicroModal er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere MicroModal skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til MicroModal, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> projektet.
---

Modalvinduer er separate vinduer, som popper-up, når du aktiverer dem. De indeholder typisk afgrænset viden og kommer i to former: Åben modal (aktiv) indeholder tekst og link, som brugeren kan handle på. Åben modal (passiv) indeholder kun tekst, som brugeren kan læse.

{% include code/preview.html component="micromodal" %}
{% include code/accordion.html component="micromodal" %}

### Implementering

Modal komponenten er implementeret med scriptet <a href="https://micromodal.now.sh" class="icon-link">Micromodal<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.

Bemærk, at Micromodal.js fejler i Internet Explorer. For at løse dette skal man inkludere et polyfill - fx <a href="https://www.npmjs.com/package/@babel/polyfill" class="icon-link">@babel/polyfill<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.

Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se <a href="/kode/implementering/">implementering af DKFDS</a>.

Stien til filen du skal inkludere for MicroModal er henholdsvis `[path-to-plugins-project]/dist/css/dkfds-micromodal-theme.standalone.min.css` for CSS filen og `~dkfds-plugins/dist/scss/dkfds-micromodal-theme` for SCSS filen.

En modal kan åbnes ved at sætte følgende attribut på fx en knap: `data-micromodal-trigger="modal-id"`. Dette vil åbne modalen som har id'et 'modal-id'

En modal kan lukkes ved at sætte følgende attribut på en knap inde i modalen: `data-micromodal-close`.

Det er også muligt at åbne og lukke modalen programmatisk via javascript: `MicroModal.show('modal-id');` og `MicroModal.close('modal-id');`</p>

Html struktur af en modal:

- For at modalen kan åbne skal denne have et id: `<div class="modal" id="modal-id" aria-hidden="false">`
- Der sættes automatisk fokus på det første fokusbare element i modalen. Luk-knappen skal derfor HTML-mæssigt placeres til sidste i modalen.
- En modal er opdelt i tre dele: `modal__header`, `modal__content` og `modal__footer`.

<h2 class="h3">Retningslinjer</h2>

<h3 class="h4">Tilgængelighed</h3>

- Det anbefalede plugin, MicroModal, følger WAI-anbefalingerne for tilgængelighed.
- Du skal fortsat sikre, at der sættes focus på første element fx brødtekst i dit modalvindue, da indholdet ellers ikke læses op af skærmlæsere.
