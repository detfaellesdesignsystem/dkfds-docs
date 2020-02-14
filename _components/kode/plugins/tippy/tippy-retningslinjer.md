---
title: Retningslinjer
parent: Tippy
order: 20
headingClass: h3
---

<a href="/komponenter/tooltip/#retningslinjer">Se retningslinjerne for tooltip komponenten</a>

{:#implementering .h3}
## Implementering

Tippy.js er et tredjeparts bibliotek, som du selv skal hente ind i dit projekt. Vi har lavet et tema i dkfds-plugins pakken, som kan lægges ind over således at pluginnet følger det visuelle udtryk i Det Fælles Designsystem.

Installer dkfds-plugins fra npm og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se siden <a href="/kode/implementering/">Implementering af DKFDS</a>.

Stien til tema-filen du skal inkludere for Tippy.js er henholdsvis `[path-to-plugins-project]/dist/css/dkfds-tippy-theme.standalone.min.css` for CSS filen og `~dkfds-plugins/dist/scss/dkfds-tippy-theme` for SCSS filen.

Man skal dog stadig inkludere Tippys egen CSS og JavaScript. Følg <a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippys egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.
