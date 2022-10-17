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
- text: Scroll
  href: '#scroll'
- text: Linjehøjde
  href: '#linjehoejde'
- text: Sortering i tabel
  href: '#sortering-i-tabel'
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

Man kan gøre brug af <a href="/kode/utilities/#bredde-i-procent">hjælpeklasser</a> til at definere bredde på kolonner.

### Tilgængelighed

Tabeller i Det Fælles Designsystem overholder HTML standarden, men du skal selv tilføje `scope=col` eller `scope=row` til hver header celle `th`

Hvis du konstruerer en såkaldt kompleks tabel – en tabel med flere header-niveauer -  skal hver header have tilføjet et unikt id (fx `id=header-eksempel`) og hver celle tilføjes en header-attribut med den relevante og tilknyttede tabel header’s `id` angivet (fx `header=header-eksempel`).

Når du tilføjer en titel til en tabel, skal du skrive den i `caption` indenfor table-elementet.

{:#javascript}
### Javascript

Man kan sætte de korrekte attributter automatisk, hvis man ønsker en responsiv tabel. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ResponsiveTable(document.getElementById('TABLE-ID'));
{% endhighlight %}

## Varianter

{:#uden-ramme}
### Uden ramme
For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

{:#zebralinjer}
### Zebralinjer
Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table>`.


{:#responsiv}
### Responsiv tabel
Tilføj en af nedenstående klasser:

- `table-sm-responsive-headers`
- `table-md-responsive-headers`
- `table-lg-responsive-headers`

Indsæt den klasse der passer til mængden af kolonner i din tabel. Klasserne ændrer tabellens udseende i forskellige breakpoints.

Attributten `data-title` bør tilføjes til hver `<td>`, således at en label bliver tilføjet for hver celle på mindre skærme.

Attributten kan sættes automatisk ved brug af <a href="#javascript">JavaScript</a>.

{% highlight html %}
<tr>
    <td data-title="Affaldstype">Bioaffald og kompost</td>
    <td data-title="Farvekode">Beige</td>
    <td data-title="Beskrivelse">Alt madaffald uden fødevareemballage.</td>
    <td data-title="Hvor ender det?">Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.</td>
</tr>
{% endhighlight %}

{:#scroll}
### Scroll på tabel
En tabel er som udgangspunkt ikke responsiv, men man kan gøre den responsiv til en vis grad ved at tilføje vandret scroll.

Sæt `<table>` elementet i en `<div>`, som har klassen `table--responsive-scroll`.

{:#linjehoejde}
### Linjehøjde

#### Kompakt
Tilføj klassen `table--compact` på `<table>`

#### Ekstra kompakt
Tilføj klassen `table--extracompact` på `<table>`

#### Sortering i tabel
{% include code/syntax.html component="table-sort" link="true" %}

Eksemplet er fuldt funktionelt, men funktionaliteten følger ikke med i FDS koden. Man skal derfor selv bygge sorteringsfunktionen ved tryk på diverse knapper. Eksemplet viser, hvordan HTML tilpasses ved ændring af sortering.

{:#valgbare-raekker}
### Valgbare rækker
{% include code/syntax.html component="table-selectable" link="true" %}

#### Valgbare rækker med funktionsknapper
{% include code/syntax.html component="table-selectable-functions" link="true" %}

#### Javascript
Tabel med valgbare rækker kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.TableSelectableRows(document.getElementById('TABLE-ID')).init();
{% endhighlight %}

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

##### Events

{:.table}
| Event key                      | Element       | Beskrivelse                                                                                                              |
|--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| fds.table.selectable.updated   | `<table>`     | Når en tjekboks ændrer tilstand i tabellen vil eventet `fds.table.selectable.updated` blive udløst på `<table>` elementet |

