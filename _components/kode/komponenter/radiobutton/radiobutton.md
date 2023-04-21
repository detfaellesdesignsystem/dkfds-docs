---
permalink: /kode/komponenter/radioknap/
parentlink: /kode/komponenter/
title: Radioknap (Radio button)
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

`name` attributten bør have samme værdi for alle radioknapper i en liste.

Radioknappernes design er ændret i forhold til standardvisningen for at gøre dem tydeligere og øge deres visuelle respons til brugerens interaktion.

### JavaScript
Radioknapper med skjult indhold kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.RadioToggleGroup(document.getElementById('DIV-CONTAINER-ID')).init();
{% endhighlight %}

#### Events

{:.table .table--responsive-headers}
| Event key           | Element                           | Beskrivelse                                                                                               |
|---------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| fds.collapse.expanded  | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ud, bliver eventet fds.collapse.open udløst på input elementet.       |
| fds.collapse.collapsed | `input.js-radio-toggle-group` | Når en skjul/vis komponent bliver foldet ind, bliver eventet fds.collapse.close udløst på input elementet.     |

## Varianter

{:#hjaelpetekst}
### Hjælpetekst
{% include code/syntax.html component="radiobutton-helptext" link="true" %}

{:#lille-radioknap}
### Lille radioknap
{% include code/syntax.html component="radiobutton-small" link="true" %}

{:#skjult-indhold}
### Skjult indhold (Collapse)
{% include code/syntax.html component="radio-collapse" link="true" %}

<a href="/komponenter/radioknap/#collapse-retningslinjer">Retningslinjer for radioknap med skjult indhold</a>

For at initialisere collapse funktionaliteten på en radioknap skal `input[type=radio]` have følgende:

- Klassen `'js-radio-toggle-content'`. Denne klasse gør at funktionaliteten bliver initialiseret. 
- Attributten `data-controls="id-of-target-to-collapse"`: denne attribute skal have id'et på det element som skal vises på radioknappen er aktiveret. 
- Hvis man ønsker at radioknappen skal være valgt fra starten af, skal den have attributten `checked` samt `data-expanded="true"`. Indholdselementet bør have attributten `aria-hidden="false"`

Det element som skal collapses/expandes skal have følgende:

- `id="id-of-target-to-collapse"`
- `aria-hidden="false"` hvis indholdet vises og `aria-hidden="true"` hvis indholdet skjules

