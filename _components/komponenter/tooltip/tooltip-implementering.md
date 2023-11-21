---
permalink: "/komponenter/tooltip/implementering/"
guidelinelink: "/komponenter/tooltip/guidelines/"
redirect_from:
- "/kode/komponenter/tooltip/"
layout: styleguide
category: Komponenter_category
subcategory: Komponenter
title: Tooltip
lead: Tooltips giver brugeren kort, forklarende information om specifikke elementer på siden. Tooltippet vises på hover eller ved klik på et tooltip-ikon.
component: "tooltip-icon"
componentTitle: "Eksempel på tooltip"
anchor: true
subnav:
- text: Klikbart ikon
  href: "#klikbart-ikon-med-tooltip"
- text: Tekst
  href: "#tekst-med-tooltip"
- text: Knap
  href: "#knap-med-tooltip"
- text: Placering
  href: "#placering-af-tooltip"
description: "Dokumentation på implementering af tooltip."
tags:
---

## Installation

### HTML Struktur

{% include code/syntax.html component="tooltip-icon" copybutton=true %}

### Javascript
Tooltip komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Tooltip(document.getElementById('Tooltip-ID')).init();
{% endhighlight %}

## Varianter

{:#klikbart-ikon-med-tooltip}
### Klikbart ikon med tooltip
{% include code/syntax.html component="tooltip-delete" link=true copybutton=true %}

Tooltip på knappen aktiveres ved hover eller fokus af knappen. Ikonet kan ændres så det svarer til knappens funktion.

Tooltip aktiveres som standard med hover og fokus på knappen, men i visse situationer (fx hvor ikonets motiv er et spørgsmål og hvor der ikke er anden funktion på knappen) kan man sætte tooltip til også at aktivere ved klik.
Tilføj attributten `data-tooltip-trigger="click"` på knappen for at tilføje visning af tooltip ved klik. 

{:#tekst-med-tooltip}
### Tekst med tooltip
{% include code/syntax.html component="tooltip-text" link=true copybutton=true %}

Tooltip i teksten aktiveres ved hover, fokus af knappen eller klik.

{:#knap-med-tooltip}
### Knap med tooltip
{% include code/syntax.html component="tooltip-button" link=true copybutton=true %}

Tooltip i teksten aktiveres ved hover og fokus af knappen.

{:#placering-af-tooltip}
### Placering af tooltip
{% include code/syntax.html component="tooltip-position" link=true copybutton=true %}