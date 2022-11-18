---
permalink: /kode/komponenter/tables/
parentlink: /kode/komponenter/
title: Tabeller
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af tabeller."
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
---

{% include code/preview-box.html component="table" title="Eksempel på tabel" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tables/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tables/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="table" %}

Man kan gøre brug af hjælpeklassen for <a href="/kode/utilities/#bredde-i-procent">bredde i procent</a> til at definere bredde på kolonner. 

Brug klassen `table-header-no-wrap` på `th`-elementet inde i `thead`, hvis du ikke ønsker, at en header skal kunne ombrydes til flere linjer.

Brug klasserne `vertical-align-top`, `vertical-align-middle` og `vertical-align-bottom` på enten `<th>` eller `<td>` til at ændre den vertikale placering af indholdet i en celle i toppen, midten eller bunden.

Tabeller er som udgangspunkt sat ind i en `<div>`, som har klassen `table--responsive-scroll`, hvilket gør at tabellen kan scrolles vandret, hvis den bliver for smal. Hvis man ikke ønsker, at dette skal være muligt, kan man undlade denne `<div>`.

## Varianter

{:#uden-ramme}
### Uden ramme
For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

{:#zebralinjer}
### Zebralinjer
Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table>`.

{:#responsiv}
### Responsiv tabel
En tabel gøres responsiv ved at tilføje klassen `table--responsive-headers` til `<table>`. Responsive tabeller ændrer som standard udseende ved <a href="/kode/utilities/#responsive-hjælpeklasser">breakpoint</a> `sm`, men hvis du har mange kolonner i din tabel, kan det give mening at anvende et andet breakpoint. Du kan anvende en af nedenstående klasser for at ændre, ved hvilket breakpoint tabellens udseende skal ændres:

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

{% include code/syntax.html component="table-sort" link="true" %}

{:#soegning-i-tabeller}
### Søgning i tabeller
Anvend <a href="/kode/komponenter/search/">søgefeltkomponenten</a> sammen med din tabel og tilføj `aria-live="polite"` til `<table>`. 

Der følger ikke JavaScript med til søgning i tabeller og man skal derfor selv håndtere funktionaliteten. Nedenstående eksempel er dog gjort funktionelt som demonstration. 

{% include code/syntax.html component="table-search" link="true" %}

{:#valgbare-raekker}
### Valgbare rækker
{% include code/syntax.html component="table-selectable" link="true" %}

{:#valgbare-raekker-knapper}
#### Valgbare rækker med funktionsknapper
{% include code/syntax.html component="table-selectable-functions" link="true" %}

#### JavaScript for tabeller med valgbare rækker
Tabel med valgbare rækker kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.TableSelectableRows(document.getElementById('TABLE-ID')).init();
{% endhighlight %}

Bemærk, at for valgbare rækker med funktionsknapper skal man selv håndtere funktionaliteten for, hvilke meddelelser der vises under tabellen, for eksempel antal rækker valgt. Nedenstående eksempel er gjort funktionelt som demonstration.

##### Events

{:.table}
| Event key                      | Element       | Beskrivelse                                                                                                              |
|--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| fds.table.selectable.updated   | `<table>`     | Når en tjekboks ændrer tilstand i tabellen vil eventet `fds.table.selectable.updated` blive udløst på `<table>`-elementet |

##### Sprog
Hvis du ønsker at anvende et andet sprog end dansk i JavaScript-koden for tabeller med valgbare rækker, skal du selv give din oversættelse med og derefter initiere komponenten manuelt. Husk at opdatere værdien i attributten "lang" i din sides html-tag.

{% highlight javascript %}
new DKFDS.TableSelectableRows(document.getElementById('TABLE-ID'), {
  "select_row": "Vælg række",
  "unselect_row": "Fravælg række",
  "select_all_rows": "Vælg alle rækker",
  "unselect_all_rows": "Fravælg alle rækker"
}).init();
{% endhighlight %}


