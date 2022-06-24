---
permalink: "/komponenter/fejlangivelse/fejlopsummering/"
redirect_from:
- /komponenter/fejlopsummering/
parentlink: "/komponenter/fejlangivelse/"
layout: styleguide
type: component
title: Fejlopsummering
category: Komponenter_category
subcategory: Komponenter
description: 
tags: 
lead: 
anchor: true
subnav:
- text: Placering
  href: "#placering"

---
<p class="font-lead">Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på en side eller et trin, før brugeren kan komme videre.</p>

Opsummeringen vises øverst på siden/trinnet under headeren, men over sidens/trinnets øverste overskrift. Fejlopsummeringen indeholder alle de <a href="/komponenter/fejlangivelse/fejlmeddelelser/">fejlmeddelelser</a>, der måtte være på siden/trinnet, således at brugeren kan navigere direkte til de fejl og mangler, der skal rettes.

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopsummering" link="true" code="/kode/komponenter/fejlopsummering/" %}

{:.h3 #retningslinjer}
## Anvendes til

Vis en fejlopsummering når der er fejl i noget af det brugeren har indtastet, også hvis der kun er én fejl på siden.

{:.h3}
## Vejledning

Der skal være links fra fejlene i filopsummeringen til det sted på siden, hvor fejlen er. Når der trykkes på linket i opsummering, skal fokus flyttes til det felt fejlmeddelelsen knytter sig til.

Sørg for at linkene i fejlopsummeringen er identiske med fejlmeddelelsen de linker til.

For fejl i et enkeltstående felt, skal du linke direkte til feltet.

Når en bruger skal indtaste svar i flere felter, fx dag-, måned- og årsfelterne i <a href="/komponenter/datofelter/">datofelter</a>, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt i gruppen af felter.

For fejl, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af en radioknap eller en tjekboks, skal du linke til den første radioknap eller tjekboks på listen.

{% include dos-donts-box.html component="error-message-dos-donts" title="Fejlmeddelelser og fejlopsummering do's and don'ts" %}

### Referencer

{:.nobullet-list}
- Luke Wroblewski: Web Form Design: Filling in the Blanks (2008)
- Jeff Johnson: Designing with the Mind in Mind, Second Edition (2014)

{:.h3 #eksempelloesninger}
## Se komponenten i eksempelløsninger

{:.nobullet-list}
- <a href="/pages/eksempler/vedhaeft-fil/fil-3/?r={{page.permalink}}%23eksempelloesninger" title="Eksempelløsning Vedhæft filer åbnes i nyt vindue">Vedhæft filer</a>


{:#placering}
## Placering

Sæt fejlopsummeringen øverst på siden. Hvis din side indeholder en brødkrumme eller et tilbage-link, skal du placere den under disse, men over titlen (den øverste overskrift) på siden.

{% include code/preview-box.html component="error-summary-page" title="Eksempel på fejlopsummering" link="true" %}
