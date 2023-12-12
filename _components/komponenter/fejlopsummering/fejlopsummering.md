---
permalink: "/komponenter/fejlopsummering/guidelines/"
redirect_from:
- "/komponenter/fejlopsummering/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Fejlopsummering
lead: Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på en side eller et trin, før brugeren kan komme videre.
component: "error-summary"
componentTitle: "Eksempel på fejlopsummering"
componentLink: true
anchor: true
subnav:
- text: Sådan bruges komponenten
  href: "#retningslinjer"
- text: Se komponenten i eksempelløsninger
  href: "#eksempelloesninger"
- text: Referencer
  href: "#ref"
description: 
tags: 
---

{:#retningslinjer}
## Sådan bruges komponenten

### Anvendes til

Vis en fejlopsummering når der er fejl i noget af det brugeren har indtastet, også hvis der kun er én fejl på siden.

### Vejledning

Opsummeringen vises øverst på siden/trinnet under headeren, men over sidens/trinnets øverste overskrift. Fejlopsummeringen indeholder alle de {% include links/component-guideline-link.html linktext="fejlmeddelelser" %}, der måtte være på siden/trinnet, således at brugeren kan navigere direkte til de fejl og mangler, der skal rettes.

Der skal være links i fejlopsummeringen til de steder på siden, hvor fejlene er. Når der trykkes på et link i opsummeringen, skal fokus flyttes til det felt fejlmeddelelsen knytter sig til.

Sørg for at linkene i fejlopsummeringen er identiske med fejlmeddelelsen de linker til.

For fejl i et enkeltstående felt, skal du linke direkte til feltet.

Når en bruger skal indtaste svar i flere felter, fx dag-, måned- og årsfelterne i {% include links/component-links.html linktext="datofelter" %}, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt i gruppen af felter.

For fejl, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af en radioknap eller en tjekboks, skal du linke til den første radioknap eller tjekboks på listen.

{:#placering}
#### Placering

Sæt fejlopsummeringen øverst på siden. Hvis din side indeholder en brødkrumme eller et tilbage-link, skal du placere den under disse, men over titlen (den øverste overskrift) på siden.

{% include code/preview-box.html component="error-summary-page" title="Eksempel på fejlopsummering" link="true" %}

{% include dos-donts-box.html component="error-message-dos-donts" title="Fejlmeddelelser og fejlopsummering do's and don'ts" %}

{:#eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- {% include links/demo-link.html linktext="Fejl i vedhæftede filer" returnID="eksempelloesninger" %}
- {% include links/demo-link.html linktext="Formular med fejl" returnID="eksempelloesninger" %}

{:#ref}
## Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)
