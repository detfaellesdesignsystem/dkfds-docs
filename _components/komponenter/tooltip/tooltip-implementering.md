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

### Javascript
Tooltip komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.Tooltip(document.getElementById('Tooltip-wrapper-ID')).init();
{% endhighlight %}

## Varianter

### Ikon med hover-tooltip

TO DO

### Knap med hover-tooltip

TO DO