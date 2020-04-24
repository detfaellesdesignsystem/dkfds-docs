---
permalink: "/komponenter/fejlopsummering/"
layout: styleguide
type: component
title: Fejlopsummering
category: Komponenter_category
subcategory: Komponenter
description: 
tags: 
lead: 

---
<p class="font-lead">Brug komponenten øverst på siden til at opsummere eventuelle fejl, som brugeren skal rette inden denne kan komme videre.</p>

Når en bruger laver en fejl eller mangler at udfylde noget, skal du vise både en fejlopsummering øverst på siden, der opsummerer de <a href="/komponenter/fejlbesked/">fejlmeddelelser</a>, de måtte være på siden.

{% include code/preview-box.html component="error-summary" title="Eksempel på fejlopsummering" link="true" code="/kode/komponenter/fejlopsummering/" %}

{:.h3 #retningslinjer}

## Anvendes til

Vis en fejlopsummering når der er fejl i noget af det brugeren har indtastet, også hvis der kun er én fejl på siden.

{:.h3}

## Vejledning

Der skal være links fra fejlene i filopsummeringen til det sted på siden, hvor fejlen er. Når der trykkes på linket i opsummering, skal fokus flyttes til det felt fejlmeddelelsen knytter sig til.

Sørg for at linkene i fejlopsummeringen er identiske med fejlmeddelelsen de linker til.

For fejl i et enkeltstående felt, skal du linke direkte til feltet.

Når en bruger skal indtaste svar i flere felter, fx dag-, måned- og årsfelterne i <a href="/komponenter/dato-felt/">datoangivelse</a>, skal du linke til det første felt, der indeholder en fejl.

Hvis du ikke ved, hvilket felt der indeholder en fejl, skal du linke til det første felt i gruppen af felter.

For fejl, der kræver, at en bruger skal vælge en eller flere ting på en liste ved hjælp af en radioknap eller en tjekboks, skal du linke til den første radioknap eller tjekboks på listen.

{:.h4}

### Placering af fejlopsummeringen

Sæt fejlopsummeringen øverst på siden. Hvis din side indeholder en brødkrumme eller et tilbage-link, skal du placere den under disse, men over titlen (den øverste overskrift) på siden.