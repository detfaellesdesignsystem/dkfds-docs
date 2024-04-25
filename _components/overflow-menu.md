---
permalink: "/komponenter/overflowmenu/"
redirect_from:
- "/kode/komponenter/overflowmenu/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Overflow menu
lead: Du kan bruge overflow menuer til at vise eller skjule en liste af links eller knapper. Når brugeren klikker på menulinjen, folder listen sig ud.
description: "Du kan bruge overflow menuer til at vise eller skjule en liste af links."
tags:
tabs: "Retningslinjer, kode"
---

{% include tabs.html guidelines=true code=true %}

{% include code/preview-box.html component="overflow-menu" title="Eksempel på overflow menu" classes="intro-example" %}

{% include anchorlinks.html guidelines="Overflowmenu" code="Overflowmenu_Kode" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

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

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Jeff Johnson: Designing with the Mind in Mind (2014)
- {% include links/external-link.html linktext="Don Norman: Don Normans Principles of Design (2013)" %}
- {% include links/external-link.html linktext="Daniel Burka: Stop the overuse of overflow menus (2016)" %}
- Martha Brockenbrough i June Cohen: The Unusually Useful Web Book: Everything we’ve learned about why sites succeed! (2003)

## Sortering {#{% include create-id.html heading="Sortering" %}}

<p class="font-lead">Ved sortering har brugeren indflydelse på den rækkefølge, forskelligt indhold vises i, så det bliver lettere at navigere i.</p>

{% include code/preview-box.html component="sort" title="Eksempel på sorteringsfunktion med overflow menu" link=true code="/komponenter/overflowmenu/#sortering-kode" %}

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

<!--split-->

## Installation {#{% include create-id.html heading="Installation" append="-kode" %}}

### HTML Struktur

{% include code/syntax.html component="overflow-menu" copybutton=true %}

#### Klasser

Følgende aria tags styrer hvorvidt menuen er foldet ud:

- Button: `aria-expanded="false"`
- Overflow menu: `aria-hidden="true"`

Følgende klasser styrer i hvilken retning menuen skal folde ud:

- Venstre: `.overflow-menu--open-left`
- Højre: `.overflow-menu--open-right`

Der er lavet et specifikt liste element til overflow-menuen (se `.overflow-list`) som kan indeholde links eller buttons. Det er dog ikke nødvendigt at benytte denne liste. Overflow-menuen er bare en container hvor man kan placere det indhold man nu har lyst til.

#### Skjul/vis

Initialiser collapse/expand javascript med at placere følgende på button elementet: `class="js-dropdown" data-js-target="#overflow1"`

Elementet som skal collapses/expandes skal have et matchende id `id="overflow1"` (placeres på `.overflow-menu-inner`)

### JavaScript

Collapse komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Dropdown(document.getElementById('OVERFLOW-BUTTON-ID')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key          | Element              | Beskrivelse                                                                                  |
|--------------------|----------------------|----------------------------------------------------------------------------------------------|
| fds.dropdown.open  | `button.js-dropdown` | Når en overflow menu bliver foldet ud, bliver eventet `fds.dropdown.open` udløst på knappen  |
| fds.dropdown.close | `button.js-dropdown` | Når en overflow menu bliver foldet ind, bliver eventet `fds.dropdown.close` udløst på knappe |

### Tilgængelighed

Overflow menu skal kunne aktiveres og håndteres fra tastatur.

Overflow menu skjuler indhold for brugeren og bør anvendes i begrænset omfang. 

## Sortering {#{% include create-id.html heading="Sortering" append="-kode" %}}

{% include code/syntax.html component="sort" link=true copybutton=true %}

### JavaScript

Overflow menu med sorteringsfunktion kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.DropdownSort(document.getElementById('OVERFLOW-MENU-CONTAINER')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key          | Element              | Beskrivelse                                                                                  |
|--------------------|----------------------|----------------------------------------------------------------------------------------------|
| fds.dropdown.open  | `button.js-dropdown` | Når en overflow menu bliver foldet ud, bliver eventet `fds.dropdown.open` udløst på knappen  |
| fds.dropdown.close | `button.js-dropdown` | Når en overflow menu bliver foldet ind, bliver eventet `fds.dropdown.close` udløst på knappe |
| fds.dropdown.selected | `button.js-dropdown` | Når en værdi bliver valgt |
