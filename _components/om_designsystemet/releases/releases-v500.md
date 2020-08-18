---
title: Version 5.0.0
parent: Releases
order: 130
headingClass: mb-0
---
<p class="small-text mt-0">22-10-2019</p>

- <label class="color-warning badge badge-small mr-3">Breaking change</label>JavaScript i kernen er skrevet om. Man skal initiere javascript med funktionen `DKFDS.init()` på hver side.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a> eller vores afsnit om <a href="/kode/implementering/">implementering af DKFDS til udviklere</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>JavaScript i DKFDS kernen bliver nu udstillet til brug i projekter.
<span class="form-hint mt-0">For mere info, se <a href="https://github.com/detfaellesdesignsystem/dkfds-components/issues/74" class="icon-link">issue #74 på Github<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/komponenter/sidenav/">Sidenavigationen</a> har fået nyt design.
<span class="form-hint mt-0">HTML er ændret - se korrekt struktur under <a href="/komponenter/sidenav/">komponenten</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label><a href="/komponenter/tabnav/">Faneblads-komponenten</a> er blevet redefineret.
<span class="form-hint mt-0">Hele komponenten er blevet redefineret - se den nye komponent under <a href="/komponenter/tabnav/">komponenten</a>.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Den gamle tooltip (tippy) komponent er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen, men at der er kommet en erstatning i kernen.</span>
- <label class="color-warning badge badge-small mr-3">Breaking change</label>Modalvinduer-komponenten er blevet flyttet til plugins.
<span class="form-hint mt-0">Bemærk, at komponenten ikke længere er en del af kernen.</span>
- Ny og simpel <a href="/komponenter/tooltip/">tooltip komponent</a> er tilføjet til kernen - Komponenten er ikke længere baseret på tredjeparts bibliotek.
- Der er tilføjet events til komponenter. Man sætte eventlisteners på bestemte events - Fx når en accordion åbner og lukker. For mere info, se implementeringsafsnittet under hver <a href="/komponenter/">komponent</a>. 
- Information om <a href="/krav/">krav til selvbetjeningsløsninger</a> er nu tilføjet til designsystem.dk. 
- Tabellerne følger nu <a href="/komigang/regler-principper-layout/#baseline-grid">8point grid</a>
