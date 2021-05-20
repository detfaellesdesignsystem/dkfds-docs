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
- text: Sletknap
  href: "#sletknap-med-tooltip"
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

{:#infoknap-med-tooltip}
### Infoknap med tooltip
{% include code/syntax.html component="tooltip-icon" link="true" %}

Tooltip på infoknappen aktiveres ved hover, fokus af knappen eller klik.

{:#sletknap-med-tooltip}
### Sletknap med tooltip
{% include code/syntax.html component="tooltip-delete" link="true" %}

Tooltip på sletknappen aktiveres ved hover eller fokus af knappen. Tooltip kan ikke aktiveres ved klik på knappen, da den allerede har anden funktion.

{:#tekst-med-tooltip}
### Tekst med tooltip
{% include code/syntax.html component="tooltip-text" link="true" %}

Tooltip i teksten aktiveres ved hover, fokus af knappen eller klik.

{:#knap-med-tooltip}
### knap med tooltip
{% include code/syntax.html component="tooltip-button" link="true" %}

Tooltip i teksten aktiveres ved hover og fokus af knappen.

{:#placering-af-tooltip}
### Placering af tooltip
{% include code/syntax.html component="tooltip-position" link="true" %}