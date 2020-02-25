---
permalink: /kode/komponenter/radioknap/
parentlink: /kode/komponenter/
title: Radioknap
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af radioknapper."
tags:
subcategory: Kode
anchor: true
subnav:
- text: Hjælpetekst
  href: '#hjaelpetekst'
- text: Fejlbesked
  href: '#fejlbesked'
- text: Lille radioknap
  href: '#lille-radioknap'
- text: Skjult indhold (Collapse)
  href: '#skjult-indhold'
---

{% include code/preview-box.html component="radiobutton" title="Eksempel på radioknap" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/radioknap/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/radioknap/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="radiobutton" %}

Indsæt altid to eller flere radioknapper i et fieldset inklusive legend.

Giv hver radioknap sit eget id og angiv samme værdi til det tilhørende label.

Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

## Varianter

{:#hjaelpetekst}
### Hjælpetekst
{% include code/syntax.html component="radiobutton-helptext" link="true" %}

{:#fejlbesked}
### Radioknap med fejl
{% include code/syntax.html component="radiobutton-error" link="true" %}

{:#lille-radioknap}
### Lille radioknap

{% include code/syntax.html component="radiobutton-small" link="true" %}

{:#skjult-indhold}
### Skjult indhold (Collapse)
{% include code/syntax.html component="radio-collapse" link="true" %}

<ul class="nobullet-list">
    <li><a href="/komponenter/radiobutton/#retningslinjer">Retningslinjer</a></li>
</ul>

For at initialisere collapse funktionaliteten på en checkbox skal `input[type=checkbox]` have følgende:

- Klassen `'js-checkbox-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-js-target="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på tjekboksen er aktiveret. 
- Hvis man ønsker at tjekboksen skal være valgt fra starten af, skal den have attributten `'checked'`.
- `aria-controls="id-of-target-to-collapse" `

Det element som skal collapses/expandes skal have følgende:

- `id=”id-of-target-to-collapse”`
- `aria-hidden="true/false"`

## JavaScript
Radioknapper med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.RadioToggleGroup(document.getElementByID('DIV-CONTAINER-ID'));
{% endhighlight %}

### Events

{:.table}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.open  | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet.       |
| fds.collapse.close | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet.     |
