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
component: "tooltip-helpicon"
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

{% include code/syntax.html component="tooltip-helpicon" copybutton=true %}

Bemærk at `tooltip-wrapper` kan kodes med enten `div` eller `span` afhængigt af konteksten. Elementet, der åbner tooltippet, skal altid have klassen `tooltip-target`.

### Javascript
Tooltipkomponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Tooltip(document.getElementById('Tooltip-wrapper-ID')).init();
{% endhighlight %}

Placering og funktion af tooltippet afgøres ud fra de attributter, der sættes på `tooltip-wrapper`.

{:.table .table--responsive-headers}
| Attribut        | Beskrivelse                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| data-tooltip    | Tooltipteksten                                                                                                                    |
| data-tooltip-id | ID der knytter tooltippet til det element, der åbner tooltippet.                                                                  |
| data-position   | Skal sættes til enten `above` eller `below`. Undlades attributten vælges `above` som standard.                                    |
| data-trigger    | Skal sættes til enten `click` eller `hover`. Anvend kun `click`, hvis elementet ikke har andre funktioner end at åbne tooltippet. |

## Varianter

### Radioknap med tooltip

{% include code/syntax.html component="tooltip-radiobuttons" title="Eksempel på tooltip for radioknapper" %}

### Tjekboks med tooltip

{% include code/syntax.html component="tooltip-checkbox" title="Eksempel på tooltip for tjekboks" %}

### Inputfelt med tooltip

{% include code/syntax.html component="tooltip-textinput" title="Eksempel på tooltip for inputfelt" %}

### Klikbart ikon med hover-tooltip

{% include code/syntax.html component="tooltip-iconbutton" title="Eksempel på tooltip på et klikbart ikon" %}

### Knap med hover-tooltip

{% include code/syntax.html component="tooltip-hover-button" title="Eksempel på tooltip på en knap" %}