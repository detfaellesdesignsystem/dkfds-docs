---
permalink: /kode/komponenter/tooltip/
title: Tooltip
parentlink: /kode/komponenter/
layout: styleguide
type: component
description: "Dokumentation på implementering af tooltip."
tags:
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Ikon
  href: "#ikon-med-tooltip"
- text: Tekst
  href: "#tekst-med-tooltip"
- text: Knap med tooltip
  href: "#knap-med-tooltip"
- text: Placering
  href: "#placering-af-tooltip"
---

{% include code/preview-box.html component="tooltip-icon" title="Eksempel på tooltip" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tooltip/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tooltip/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="tooltip-icon" %}

### Javascript
Tooltip komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Tooltip(document.getElementById('Tooltip-ID'));
{% endhighlight %}

## Varianter

{:#ikon-med-tooltip}
### Ikon med tooltip
{% include code/syntax.html component="tooltip-delete" link="true" %}

Tooltip på knappen aktiveres ved hover eller fokus af knappen. Ikonet kan ændres så det svarer til knappens funktion.

Tooltip aktiveres som standard med hover og fokus på knappen, men i visse situationer (fx hvor ikonets motiv er et spørgsmål og hvor der ikke er anden funktion på knappen) kan man sætte tooltip til også at aktivere ved klik.
Tilføj attributten `data-tooltip-trigger="click"` på knappen for at tilføje visning af tooltip ved klik. 

{:#tekst-med-tooltip}
### Tekst med tooltip
{% include code/syntax.html component="tooltip-text" link="true" %}

Tooltip i teksten aktiveres ved hover, fokus af knappen eller klik.

{:#knap-med-tooltip}
### Knap med tooltip
{% include code/syntax.html component="tooltip-button" link="true" %}

Tooltip i teksten aktiveres ved hover og fokus af knappen.

{:#placering-af-tooltip}
### Placering af tooltip
{% include code/syntax.html component="tooltip-position" link="true" %}