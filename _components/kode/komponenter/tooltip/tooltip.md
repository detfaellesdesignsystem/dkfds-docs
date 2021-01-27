---
permalink: /kode/komponenter/tooltip/
title: Tooltip og popover
parentlink: /kode/komponenter/
layout: styleguide
type: component
description: "Dokumentation på implementering af tooltip."
tags:
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Placering
  href: '#placering-af-tooltip' 
- text: Ikon med popover
  href: '#ikon-med-popover' 
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

Du bør opdatere følgende attributter til din løsning ved almindeligt tooltip:

- `data-tooltip`: Din tooltip-tekst

- Tooltip og popovers skal kunne lukkes med escape tasten på tastaturet.
- Fokus skal blive på det element, der aktiverede tooltip eller popover.
- Brug aria-describedby på elementet der udløser tooltip eller popover.
- Tooltips skal både vises, ved markering med mus og tastatur.

### Javascript
Tooltip komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Tooltip(document.getElementById('Tooltip-ID'));
{% endhighlight %}

## Varianter

{:#placering-af-tooltip}
### Placering af tooltip
{% include code/syntax.html component="tooltip-position" link="true" %}

{:ikon-med-popover}
### Ikon med popover (kræver tryk)
{% include code/syntax.html component="popover-icon" link="true" %}

Du bør opdatere følgende attributter til din løsning ved almindeligt tooltip:

- `data-tooltip`: Din tooltip-tekst
- `data-tooltip-trigger`: Hvis dit tooltip skal reagere kun ved klik, så skal denne sættes til `click`
- `aria-label`: For at forklare, at brugeren skal aktivere knappen, for at få teksten
