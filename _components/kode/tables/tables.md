---
permalink: /kode/tables/
title: Tabeller
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
---

{% include code/preview-box.html component="table" title="Eksempel på tabel" %}

## Eksempler og dokumentation
<ul class="nobullet-list">
    <li><a href="/komponenter/tables/#retningslinjer">Dokumentation</a></li>
    <li><a href="/komponenter/tables/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="table" %}

{:#javascript}
### Javascript

Man kan sætte de korrekte attributter automatisk, hvis man ønsker en responsiv tabel. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ResponsiveTable(document.getElementByID('TABLE-ID'));
{% endhighlight %}

## Varianter
### Uden ramme
For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

### Zebralinjer
Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table`.

### Scroll på tabel
En tabel er som udgangspunkt ikke responsiv, men man kan gøre den responsiv til en vis grad ved at tilføje vandret scroll.

Sæt `<table>` elementet i en `<div>`, som har klassen `table--responsive-scroll`.

### Responsiv tabel

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

