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
- text: Installation
  href: "#installation"
- text: Radioknap med tooltip
  href: "#radioknap-med-tooltip"
- text: Tjekboks med tooltip
  href: "#tjekboks-med-tooltip"
- text: Inputfelt med tooltip
  href: "#inputfelt-med-tooltip"
- text: Brødtekst med tooltip
  href: "#broedtekst-med-tooltip"
- text: Klikbart ikon med hover-tooltip
  href: "#klikbart-ikon-med-hover-tooltip"
- text: Knap med hover-tooltip
  href: "#knap-med-hover-tooltip"
- text: Referencer
  href: "#ref"
description: "Dokumentation på implementering af tooltip."
tags:
---

{:#installation}
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

{:#radioknap-med-tooltip}
## Radioknap med tooltip

{% include code/syntax.html component="tooltip-radiobuttons" title="Eksempel på tooltip for radioknapper" link=true copybutton=true %}

{:#tjekboks-med-tooltip}
## Tjekboks med tooltip

{% include code/syntax.html component="tooltip-checkbox" title="Eksempel på tooltip for tjekboks" link=true copybutton=true %}

{:#inputfelt-med-tooltip}
## Inputfelt med tooltip

{% include code/syntax.html component="tooltip-textinput" title="Eksempel på tooltip for inputfelt" link=true copybutton=true %}

{:#broedtekst-med-tooltip}
## Brødtekst med tooltip

{% include code/syntax.html component="tooltip-text" title="Eksempel på tooltip i brødtekst" link=true copybutton=true %}

{:#klikbart-ikon-med-hover-tooltip}
## Klikbart ikon med hover-tooltip

Brug klassen `tooltip-is-label` på `tooltip-target` ved klikbare ikoner uden tekst. Tooltippet vil da fungere som både tooltip og knappens tilgængelige navn (Pickering, 2017). Vær ekstra omhyggelig i disse tilfælde med at holde tooltipteksten kort og præcis.

{% include code/syntax.html component="tooltip-iconbutton" title="Eksempel på tooltip på et klikbart ikon" link=true copybutton=true %}

{:#knap-med-hover-tooltip}
## Knap med hover-tooltip

{% include code/syntax.html component="tooltip-hover-button" title="Eksempel på tooltip på en knap" link=true copybutton=true %}

{:#ref}
## Referencer

{:.nobullet-list}
- {% include links/external-link.html linktext="Heydon Pickering: Tooltips & Toggletips - Inclusive Components (2017)" %}