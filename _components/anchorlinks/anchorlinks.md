---
permalink: "/komponenter/anchorlinks/guidelines/"
redirect_from:
- "/komponenter/anchorlinks/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Anchorlinks
lead: Anchorlinks linker til bestemte steder på samme side. De vises på den enkelte side under overskrift og eventuel manchet.
component: "anchorlinks"
componentTitle: "Eksempel på anchorlinks"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: Anchorlinks linker til bestemte steder på samme side. De vises på den enkelte side under overskrift og eventuel manchet.
tags:
- anchorlinks
- anchor
- ankerlinks
- anker
- subnav
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Anchorlinks kan anvendes på lange sider, hvor de understøtter brugeroplevelsen ved at vise en form for indholdsfortegnelse og give direkte adgang til specifikke relevante områder på siden, som brugeren ellers skulle have scrollet langt for at nå (Schade, 2017).

### Anvendes ikke til

Anchorlinks anvendes ikke til kortere sider, som brugeren problemløst kan overskue indholdet af uden brug af anchorlinks. 

### Vejledning

Anchorlinks placeres altid i toppen af en side under overskrift og evt. manchet. I visse tilfælde kan de også placeres inde i Faneblade. I så fald placeres anchorlinks som det første element i det enkelte faneblad. 

Anchorlinks kan i nogle tilfælde virke forvirrende, da links til samme side går imod brugerens naturlige forventning om, at links fører til en ny side (Schade, 2017). Brug derfor kun anchorlinks, når de er nødvendige for brugeroplevelsen, og giv komponenten en klar overskrift “Indhold på siden”, som understreger funktionaliteten.

Titlerne på de enkelte links skal være klare og tydelige og præcis de samme som de overskrifter, de leder brugeren til. 

Da anchorlinks anvendes til lange sider, kan de med fordel anvendes sammen med komponenten Tilbage til toppen.

Det anbefales at lave en scroll-animation ned til det valgte afsnit, når der klikkes på et anchorlink, da det understøtter brugerens fornemmelse af, hvor de er på siden.

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/internal-link.html linktext="Farver" %}
- {% include links/internal-link.html linktext="Overskrifter" %}
- {% include links/component-guideline-link.html linktext="Tabeller" %}
- {% include links/component-code-link.html linktext="Accordions" %}

{:#ref}
## Referencer
{% include links/external-link.html linktext="Amy Schade: Anchors OK? Re-Assessing In-Page Links (2017)" %}