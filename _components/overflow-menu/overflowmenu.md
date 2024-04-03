---
permalink: "/komponenter/overflowmenu/guidelines/"
redirect_from:
- "/komponenter/overflowmenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Overflow menu
lead: Du kan bruge overflow menuer til at vise eller skjule en liste af links eller knapper. Når brugeren klikker på menulinjen, folder listen sig ud.
component: "overflow-menu"
componentTitle: "Eksempel på overflow menu"
componentLink: true
headings: Overflowmenu
anchorlinks: true
description: "Du kan bruge overflow menuer til at vise eller skjule en liste af links."
tags:
---

{% assign headings = site.data.headings[page.headings] %}

[---- Sådan bruges komponenten -------------------------------------]: # 
<h2 id="{{ headings[0].id }}">{{ headings[0].h2 }}</h2>

### Anvendes til

Overflow menuer anvendes i tilfælde, hvor brugeren skal tilbydes ekstra funktionalitet på begrænset plads.

Overflow menuer er velegnede til funktioner som fx profilhåndtering o.l.

### Anvendes ikke til

Overflow menu anvendes ikke til primær navigation.

Overflow menu bør ikke have mindre end 3 punkter og mere end 7-10 punkter.

### Vejledning

Indholdet af en overflow menu bør være handlingsanvisende i et klart sprog.

Brugerspecifikke handlinger som fx ”Slet” bør placeres til sidst i menuen for at undgå utilsigtede valg.

Overvej om det er nødvendigt med dette ekstra navigationselement.

{% include dos-donts-box.html component="overflow-menu-dos-donts" title="Overflow menu do's and don'ts" %}

[---- Referencer -------------------------------------]: # 
<h2 id="{{ headings[1].id }}">{{ headings[1].h2 }}</h2>

{:.nobullet-list}
- Jeff Johnson: Designing with the Mind in Mind (2014)
- {% include links/external-link.html linktext="Don Norman: Don Normans Principles of Design (2013)" %}
- {% include links/external-link.html linktext="Daniel Burka: Stop the overuse of overflow menus (2016)" %}
- Martha Brockenbrough i June Cohen: The Unusually Useful Web Book: Everything we’ve learned about why sites succeed! (2003)

[---- Sortering -------------------------------------]: # 
<h2 id="{{ headings[2].id }}">{{ headings[2].h2 }}</h2>

<p class="font-lead">Ved sortering har brugeren indflydelse på den rækkefølge, forskelligt indhold vises i, så det bliver lettere at navigere i.</p>

{% include code/preview-box.html component="sort" title="Eksempel på sorteringsfunktion med overflow menu" link=true code="/komponenter/overflowmenu/implementering/#sortering" %}

### Anvendes til

Sortering med overflow menu anvendes til at sortere indhold af forskellig karakter.

### Anvendes ikke til

Sortering med overflow menu anbefales ikke til tabeller med mange sorterbare kolonner. Her foretrækkes i stedet sorteringsikoner i tabellens kolonner som vist på siden Tabeller.

### Vejledning

Indhold kan sorteres alfabetisk, efter tal eller efter dato.

Ved sorteringsparametre med alfabetisk sortering, angiv (A-Å) eller (Å-A) i parentes fx:
 - Affaldssortering (A-Å)
 - Affaldssortering (Å-A)

Ved sortering efter tal, angiv (stigende) eller (faldende) i parentes, fx:
- Antal (stigende)
- Antal (faldende)

Ved sortering efter forskellige datoparametre, angiv (nyeste først) eller (ældste først) i parentes efter datoens titel, fx:
- Udløbsdato (nyeste først)
- Udløbsdato (ældste først)

Hvis der blot er én overordnet dato, der kan sorteres efter, kan sorteringsparametrets titel holdes simpelt:
- Nyeste først
- Ældste først

I overflowmenuen bør sorteringsparametrene vises i alfabetisk rækkefølge A-Å. Den aktuelle sortering markeres med et flueben. 

Sorteringsmenuen vises venstrestillet lige over det indhold, der sorteres.
