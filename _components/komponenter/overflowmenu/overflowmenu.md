---
permalink: /komponenter/overflowmenu/
layout: styleguide
type: component
title: Overflow menu
category: Komponenter_category
subcategory: Komponenter
description: "Du kan bruge overflow menuer til at vise eller skjule en liste af links."
tags:
lead: Du kan bruge overflow menuer til at vise eller skjule en liste af links eller knapper. Når brugeren klikker på menulinjen, folder listen sig ud.
anchor: true
subnav:
- text: Sortering
  href: '#sortering'
---

{% include code/preview-box.html component="overflow-menu" title="Eksempel på overflow menu" link=true code="/kode/komponenter/overflowmenu/" %}

{:#retningslinjer}
## Retningslinjer

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

#### Referencer

{:.nobullet-list}
- Jeff Johnson: Designing with the Mind in Mind (2014)
- <a href="https://www.designprinciplesftw.com/collections/don-normans-principles-of-design" class="icon-link">Don Norman: Principles of Design (2013)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- <a href="https://www.freecodecamp.org/news/stop-the-overuse-of-overflow-menus-5caa4b54e843/" class="icon-link">Daniel Burka: Stop the overuse of overflow menus (2016)<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>
- Martha Brockenbrough i June Cohen: The Unusually Useful Web Book: Everything we’ve learned about why sites succeed! (2003)

## Sortering

<p class="font-lead">Ved sortering har brugeren indflydelse på den rækkefølge, forskelligt indhold vises i, så det bliver lettere at navigere i.</p>

{% include code/preview-box.html component="sort" title="Eksempel på sorteringsfunktion med overflow menu" link=true code="/kode/komponenter/overflowmenu/#sortering" %}

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
