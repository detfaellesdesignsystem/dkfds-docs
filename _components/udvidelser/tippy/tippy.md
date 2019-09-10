---
permalink: /udvidelser/tippy/
layout: styleguide
type: component
title: Tippy (tooltip)
category: Udvidelser_category
subcategory: Udvidelser
description: Tooltip bruges til at forklare en tekst yderligere eller give mere information, som ikke umiddelbart er nødvendig.
lead: Tooltip og popover er komponenter, som brugerne enten kan aktiverer eller fører musen hen over for at få en kort forklaring på indhold, ord eller begreber.
alerts:
- type: warning
  header: Denne komponent er ikke en del af kernen af Det Fælles Designsystem
  content: Tippy.js er ikke inkluderet i kernen af Det Fælles Designsystem. For at inkludere Tippy.js skal der inkluderes et eksternt bibliotek, se implementeringsafsnittet nedenfor.<br><br>Det Fælles Designsystem har implementeret et tema til Tippy.js, som findes i <a href="https://github.com/detfaellesdesignsystem/dkfds-plugins" class="icon-link">Plugins<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a> projektet.
---

<h2 class="h3" id="retningslinjer">Retningslinjer</h2>
<a href="/komponenter/tooltip/">Se retningslinjerne for tooltip komponenten</a>
<h2 class="h3" id="implementering">Implementering</h2>
<p>Tippy.js er et tredjeparts bibliotek, som du selv skal hente ind i dit projekt. Vi har lavet et tema i dkfds-plugins pakken, som kan lægges ind over således at udvidelsen følger det visuelle udtryk i Det Fælles Designsystem.</p>
<p>Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se under siden <a href="/omdesignsystemet/tiludviklere/">Til udviklere</a></p>
<p>Stien til tema-filen du skal inkludere for Tippy.js er henholdsvis <code>[path-to-plugins-project]/dist/css/dkfds-tippy-theme.standalone.min.css</code> for CSS filen og <code>~dkfds-plugins/dist/scss/dkfds-tippy-theme</code> for SCSS filen.</p>
<p>Man skal dog stadig inkludere Tippys egen CSS og JavaScript. Følg <a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippys egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.</p> 

{% include child-sections.html parent='Tippy' %}
