---
permalink: "/komponenter/overflowmenu/"
redirect_from:
- "/kode/komponenter/overflowmenu/"
layout: styleguide
category: komponenter_menu
subcategory: Komponenter
title: Overflow menu
lead: Du kan bruge overflow menuer til at vise eller skjule en liste af links eller knapper. Når brugeren klikker på menulinjen, folder listen sig ud.
description: "Du kan bruge overflow menuer til at vise eller skjule en liste af links."
tags:
- overflow
- overflowmenu
- overflow-menu
- overflowmenu
- sorter
- sortering
tabs: "Retningslinjer, kode, web component"
---

{% include tabs.html guidelines=true code=true web_component=true %}

{% include code/preview-box.html component="overflow-menu" title="Eksempel på overflow menu" classes="intro-example" %}

{% include anchorlinks.html guidelines="Overflowmenu" code="Overflowmenu_Kode" webcomponent="Overflowmenu_Web_Component" %}

<!--split-->

## Sådan bruges komponenten {#{% include create-id.html heading="Sådan bruges komponenten" %}}

### Anvendes til {#{% include create-id.html heading="Anvendes til" %}}

Overflow menuer anvendes i tilfælde, hvor brugeren skal tilbydes ekstra funktionalitet på begrænset plads.

Overflow menuer er velegnede til funktioner som fx profilhåndtering o.l.

### Anvendes ikke til {#{% include create-id.html heading="Anvendes ikke til" %}}

Overflow menu anvendes ikke til primær navigation.

Overflow menu bør ikke have mindre end 3 punkter og mere end 7-10 punkter.

### Vejledning {#{% include create-id.html heading="Vejledning" %}}

Indholdet af en overflow menu bør være handlingsanvisende i et klart sprog.

Brugerspecifikke handlinger som fx ”Slet” bør placeres til sidst i menuen for at undgå utilsigtede valg.

Overvej om det er nødvendigt med dette ekstra navigationselement.

{% include dos-donts-box.html component="overflow-menu-dos-donts" %}

## Referencer {#{% include create-id.html heading="Referencer" %}}

{:.nobullet-list}
- Jeff Johnson: Designing with the Mind in Mind (2014)
- {% include links/external-link.html linktext="Don Norman: Don Normans Principles of Design (2013)" %}
- {% include links/external-link.html linktext="Daniel Burka: Stop the overuse of overflow menus (2016)" %}
- Martha Brockenbrough i June Cohen: The Unusually Useful Web Book: Everything we’ve learned about why sites succeed! (2003)

## Sortering {#{% include create-id.html heading="Sortering" %}}

<p class="font-lead">Ved sortering har brugeren indflydelse på den rækkefølge, forskelligt indhold vises i, så det bliver lettere at navigere i.</p>

{% include code/preview-box.html component="sort" title="Eksempel på sorteringsfunktion med overflow menu" link=true code="/komponenter/overflowmenu/#sortering-kode" %}

### Anvendes til {#{% include create-id.html heading="Sortering Anvendes til" %}}

Sortering med overflow menu anvendes til at sortere indhold af forskellig karakter.

### Anvendes ikke til {#{% include create-id.html heading="Sortering Anvendes ikke til" %}}

Sortering med overflow menu anbefales ikke til tabeller med mange sorterbare kolonner. Her foretrækkes i stedet sorteringsikoner i tabellens kolonner som vist på siden Tabeller.

### Vejledning {#{% include create-id.html heading="Sortering Vejledning" %}}

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

### HTML Struktur {#{% include create-id.html heading="HTML Struktur" append="-kode" %}}

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

### JavaScript {#{% include create-id.html heading="JavaScript" append="-kode" %}}

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

### Tilgængelighed {#{% include create-id.html heading="Tilgængelighed" append="-kode" %}}

Overflow menu skal kunne aktiveres og håndteres fra tastatur.

Overflow menu skjuler indhold for brugeren og bør anvendes i begrænset omfang. 

## Sortering {#{% include create-id.html heading="Sortering" append="-kode" %}}

{% include code/syntax.html component="sort" link=true copybutton=true guidelines="/komponenter/overflowmenu/#sortering" %}

### JavaScript {#{% include create-id.html heading="Sortering JavaScript" append="-kode" %}}

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

<!--split-->

{% include web-component-shared-text/web-components-beta.html %}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-dropdown-menu" subheading_tag="h2" collapsable=false %}

## Om denne komponent {#{% include create-id.html heading="Om denne komponent" append="-webcomponent" %}}

{% include web-component-shared-text/intro-light-dom.html %}

## Varianter {#{% include create-id.html heading="Varianter" append="-webcomponent" %}}

### Sortering {#{% include create-id.html heading="Sortering" append="-webcomponent" %}}

{% include containers-for-code-and-examples/top-example-and-show-code-in-tabs.html example="fds-dropdown-menu-sort" heading_tag="h4" subheading_tag="h5" %}

## Konfiguration {#{% include create-id.html heading="Konfiguration" append="-webcomponent" %}}

### fds-dropdown-menu {#{% include create-id.html heading="fds-dropdown-menu" append="-webcomponent" %}}

#### Attributter

{:.table .table--responsive-headers}
| Attribut | Beskrivelse |
|----------|-------------|
| ready         | Sæt til `"false"` for at udskyde initialisering af komponenten. Udelad attributten, eller sæt den til andet end `"false"`, for at initialisere komponenten med det samme. |
| expanded      | Sæt til `"true"` for at vise menuen fra start. Udelades attributten, starter menuen lukket. |
| direction     | Sæt til `"left"` for at lade en overflowmenu åbne mod venstre. Udelades attributten, åbner den mod højre. |
| variant       | Sæt til `"sort"` for at bruge komponenten som sorteringsmenu. Må ikke ændres efter initialisering. |
| default-value | Bruges til sorteringsmenuer. Sæt til `data-value` for den mulighed, der skal vælges fra start. Udelades attributten, eller findes værdien ikke, vælges den første mulighed. |
| data-value    | Sættes på hver knap i en sorteringsmenu. Værdien bruges af `default-value` og `selectSortValue()`. |
| id            | Angiver dropdown-komponentens ID. Hvis sat, bruges ID'et som grundlag for panelets ID.  |

#### Funktioner

{:.table .table--responsive-headers}
| Funktion | Beskrivelse |
|----------|-------------|
| init()                           | Initialiser komponenten, når initialiseringen er udskudt med `ready="false"`. |
| open()                           | Åbn menuen. |
| close()                          | Luk menuen. |
| toggle()                         | Skift mellem åben og lukket menu. |
| selectSortValue(value, dispatch) | Vælg en mulighed i en sorteringsmenu ud fra dens `data-value`. `dispatch` er valgfri og er som standard `true`. Sæt den til `false` for ikke at udløse event. |

#### Events

{:.table .table--responsive-headers}
| Event | Beskrivelse |
|-------|-------------|
| fds-dropdown-menu-opened | Udløses, når menuen åbnes. |
| fds-dropdown-menu-closed | Udløses, når menuen lukkes. |
| fds-sort-menu-changed    | Udløses, når valget i en sorteringsmenu ændres. `event.detail` indeholder `value` og `previousValue`. |