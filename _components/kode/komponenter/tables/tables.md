---
permalink: /kode/komponenter/tables/
parentlink: /kode/komponenter/
redirect_from:
- /kode/komponenter/strukturerede-lister/
layout: styleguide
category: Kode_category
subcategory: Kode
title: Tabeller
component: "table"
componentTitle: "Eksempel på tabel"
anchor: true
subnav:
- text: Uden ramme
  href: '#uden-ramme'
- text: Zebralinjer
  href: '#zebralinjer'
- text: Responsiv
  href: '#responsiv'
- text: Linjehøjde
  href: '#linjehoejde'
- text: Sortering i tabel
  href: '#sortering-i-tabel'
- text: Søgning i tabeller
  href: '#soegning-i-tabeller'
- text: Valgbare rækker
  href: '#valgbare-raekker'
- text: Strukturerede lister
  href: '#strukturerede-lister'
description: "Dokumentation på implementering af tabeller."
tags:
---

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tables/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tables/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="table" copybutton=true %}

Man kan gøre brug af hjælpeklassen for <a href="/kode/utilities/#bredde-i-procent">bredde i procent</a> til at definere bredde på kolonner. 

Brug klassen `table-header-no-wrap` på `th`-elementet inde i `thead`, hvis du ikke ønsker, at en header skal kunne ombrydes til flere linjer.

Brug klasserne `vertical-align-top`, `vertical-align-middle` og `vertical-align-bottom` på enten `<th>` eller `<td>` til at ændre den vertikale placering af indholdet i en celle i toppen, midten eller bunden.

{:#horisontalt-scroll}
#### Horisontalt scroll

Tabeller er som udgangspunkt sat ind i en `<div>`, der har klassen `table--responsive-scroll`, hvilket gør at tabellen kan scrolles vandret, hvis den bliver for smal. Hvis man ikke ønsker, at dette skal være muligt, kan man undlade denne `<div>`.

{:#varianter}
## Varianter

{:#uden-ramme}
### Uden ramme
For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

{:#zebralinjer}
### Zebralinjer
Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table>`.

{:#responsiv}
### Responsiv tabel
En tabel gøres responsiv ved at tilføje klassen `table--responsive-headers` til `<table>`. Responsive tabeller ændrer som standard udseende ved <a href="/kode/utilities/#responsive-hjælpeklasser">breakpoint</a> `sm`, men hvis du har mange kolonner i din tabel, kan det give mening at anvende et andet breakpoint. 

Hvis din tabel indeholder værdier, der kræver mere end ca. 290 pixels i bredden for at blive vist, bør du undlade at gøre den responsiv og i stedet anvende <a href="/kode/komponenter/tables/#horisontalt-scroll">horisontalt scroll</a> - tjek eventuelt om din responsive tabel kan vises pænt, når skærmstørrelsen er 320 pixels i bredden, uden at indholdet ryger ud over kanten.

Du kan anvende en af nedenstående klasser for at ændre, ved hvilket breakpoint tabellens udseende skal ændres:

- `table-sm-responsive-headers` (svarer til `table--responsive-headers`)
- `table-md-responsive-headers`
- `table-lg-responsive-headers`

Udover at tilføje en klasse, skal attributten `data-title` tilføjes til hver `<td>`, hvilket gør at en label bliver tilføjet for hver celle på mindre skærme.

{% highlight html %}
<tr>
    <td data-title="Affaldstype">Bioaffald og kompost</td>
    <td data-title="Farvekode">Beige</td>
    <td data-title="Beskrivelse">Alt madaffald uden fødevareemballage.</td>
    <td data-title="Hvor ender det?">Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.</td>
</tr>
{% endhighlight %}

Attributten kan sættes automatisk ved brug af <a href="#javascript-responsiv">JavaScript</a>.

Bemærk, at tabeller med sortering og tabeller med valgbare rækker ikke har en responsiv version.

{:#javascript-responsiv}
#### JavaScript for responsive tabeller

Anvendes til at sætte de korrekte attributter automatisk, hvis man ønsker en responsiv tabel. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ResponsiveTable(document.getElementById('TABLE-ID'));
{% endhighlight %}

{:#linjehoejde}
### Linjehøjde

#### Kompakt
Tilføj klassen `table--compact` på `<table>`.

#### Ekstra kompakt
Tilføj klassen `table--extracompact` på `<table>`.

{:#sortering-i-tabel}
### Sortering i tabel
Se nedenstående eksempels HTML for, hvilke klasser, attributter og knapper, der skal sættes på hhv. `<th>` og `<tbody>`.

Der følger ikke JavaScript med til sortering i tabeller og man skal derfor selv håndtere funktionaliteten. Nedenstående eksempel er dog gjort funktionelt som demonstration. 

{% include code/syntax.html component="table-sort" link=true copybutton=true %}

{:#soegning-i-tabeller}
### Søgning i tabeller
Anvend {% include links/component-links.html linktext="søgefeltkomponenten" %} sammen med din tabel og tilføj `aria-live="polite"` til `<table>`. 

Der følger ikke JavaScript med til søgning i tabeller og man skal derfor selv håndtere funktionaliteten. Nedenstående eksempel er dog gjort funktionelt som demonstration. 

{% include code/syntax.html component="table-search" link=true copybutton=true %}

{:#valgbare-raekker}
### Valgbare rækker
{% include code/syntax.html component="table-selectable" link=true copybutton=true %}

{:#valgbare-raekker-knapper}
#### Valgbare rækker med funktionsknapper
{% include code/syntax.html component="table-selectable-functions" link=true copybutton=true %}

#### JavaScript for tabeller med valgbare rækker
Tabel med valgbare rækker kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.TableSelectableRows(document.getElementById('TABLE-ID')).init();
{% endhighlight %}

Bemærk, at for valgbare rækker med funktionsknapper skal man selv håndtere funktionaliteten for, hvilke meddelelser der vises under tabellen, for eksempel antal rækker valgt. Nedenstående eksempel er gjort funktionelt som demonstration.

##### Events

{:.table .table--responsive-headers}
| Event key                      | Element       | Beskrivelse                                                                                                              |
|--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| fds.table.selectable.updated   | `<table>`     | Når en tjekboks ændrer tilstand i tabellen vil eventet `fds.table.selectable.updated` blive udløst på `<table>`-elementet |

{:#strukturerede-lister}
### Strukturerede lister

{% include code/syntax.html component="structured-list" link=true copybutton=true %}

Strukturerede lister kan bruges i forbindelse med <a href="/eksempler/templates/#opsummering">opsummering</a> eller <a href="/eksempler/templates/#kvittering">kvitteringssider</a> som en alternativ tabel, hvor der ikke er nogen vandrette headers. 

Listerne skal altid indeholde præcis 2 eller 3 kolonner. Første kolonne anvendes til headers/titel, anden kolonne til indhold/information og tredje kolonne til eventuel redigering af rækkens indhold. Husk at markere `scope="row"` for hver tabelheader.

Listen kan gøres <a href="/kode/komponenter/tables/#responsiv">responsiv</a> ved at tilføje klassen med det ønskede breakpoint. 

{:#strukturerede-lister-edit}
#### Struktureret liste med redigér

{% include code/syntax.html component="structured-list--edit" link=true copybutton=true %}
