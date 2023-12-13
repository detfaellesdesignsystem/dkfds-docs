---
permalink: "/komponenter/faneblade/guidelines/"
redirect_from:
- "/komponenter/tabnav/"
- "/komponenter/faneblad/"
- "/komponenter/faneblade/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Faneblade (Tabs)
lead: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen. Vær opmærksom på om dine brugere
  ser de skjulte sektioner, når du anvender faneblade.
component: "tabs-buttons"
componentTitle: "Eksempel på faneblade"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Referencer
  href: "#ref"
description: Faneblade gør det muligt for brugerne at bladre imellem relaterede sektioner
  af indhold og kun få vist en sektion af gangen.
tags:
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Faneblade anvendes til at skifte mellem forskellige visninger af indhold indenfor samme kontekst.

Faneblade egner sig bedst som en avanceret funktionalitet for afgrænsede målgrupper.

### Anvendes ikke til

Faneblade kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.

Faneblade anvendes ikke til at opdele et logisk flow eller en sekvens af handlinger.

### Vejledning

Faneblade anvendes i afgrænsede sektioner. Indholdet vises indrammet, så brugeren ikke er i tvivl om hvor det starter og slutter. Det er muligt at anvende flere fanebladskomponenter på en side. 

Overvej om faneblade er den rette løsning. Vær opmærksom på, at brugeren kun kan se indholdet fra én fane ad gangen. Alternativer til faneblade kan være {% include links/component-guideline-link.html linktext="accordions" %} eller {% include links/component-guideline-link.html linktext="detaljekomponenten" %}, hvis du ønsker at indhold først bliver synligt når brugeren aktivt vælger det.
Opdeling af indholdet på flere sider kan også være et alternativ. Faneblade bør kun anvendes hvis indholdet i de forskellige faneblade deler overordnet kontekst.

Hvis du ønsker at anvende faner, bør det testes på din målgruppe før din løsning går i produktion.

{% include dos-donts-box.html component="faneblad-dos-donts" title="Faneblade do's and don'ts" %}

### Faneblade med URL-skifte

Fanebladskomponenten kan anvendes til opdeling af en side i flere underafsnit. Hvert skifte vil kunne afspejles i sidens URL, og det vil være muligt at linke direkte til, og åbne, et faneblad.
Ved denne brug bør sidens indhold, fra fanebladskomponenten og ned være knyttet til det åbne faneblad. I dette tilfælde må der kun anvendes én fanebladskomponent af denne type på hver side.
Vær opmærksom på, af faneblade ikke skal anvendes i stedet for en undermenu. Indhold i faneblade skal stadig være relateret til hinanden.

{% include code/preview-image.html component="tabs-urls" title="Eksempel på faneblade med URL-skifte" code="/komponenter/faneblade/implementering/#faneblad-URL-skift" %}

### Faneblade med ikoner

Faneblade kan vises med ikoner hvis disse understøtter de angivne sektioner visuelt. Vi anbefaler at være forsigtig med denne løsning, da et ikon der læses forkert eller misforståes kan forvirre brugeren mere end det hjælper. Så benyt kun ikoner hvis de er klare i budskabet og hjælper med at kommunikere det underliggende indhold.
Ikoner skal altid understøttes af en label med fanebladets navn.

{% include code/preview-box.html component="tabs-buttons-icons" title="Eksempel på faneblade med ikoner" code="/komponenter/faneblade/implementering/#faneblad-med-ikoner"%} 

{% include dos-donts-box.html component="faneblad-ikoner-dos-donts" title="Faneblade med ikoner do's and don'ts" %}

{:#ref}
## Referencer

{:.nobullet-list}
- <a href="https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/" class="icon-link">Jacob Gube: Module Tabs in Web Design: Best Practices and Solutions (2009)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.nngroup.com/articles/tabs-used-right/" class="icon-link">Jakob Nielsen: Tabs, Used Right (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
